const
    express = require('express')
    , uuidv4 = require('uuid/v4')
    , router = express.Router()

    , multer = require('multer')
    , inMemoryStorage = multer.memoryStorage()
    , uploadStrategy = multer({storage: inMemoryStorage}).single('image')

    , azureStorage = require('azure-storage')
    , blobService = azureStorage.createBlobService()

    , getStream = require('into-stream')
    , containerName = process.env.AZURE_BLOB_CONTAINER_NAME
;

const handleError = (err, res) => {
    res.status(500);
    res.send({
        error: err
    })
};

router.post('/', uploadStrategy, (req, res) => {

    const stream = getStream(req.file.buffer)
        , streamLength = req.file.buffer.length
        , ext = req.file.originalname.substr(req.file.originalname.lastIndexOf('.') + 1)
    ;

    const blobName = uuidv4() + '.' + ext;

    if (ext && ['png', 'jpg', 'jpeg'].includes(ext.toLowerCase())) {
        blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, (err) => {

            if (err) {
                handleError(err);
                return;
            }
            const blobUrl = blobService.getUrl(containerName, blobName);

            res.send({
                id: blobName,
                url: blobUrl
            })
        });
    } else {
        handleError('Invalid file type', res);
    }

});

module.exports = router;