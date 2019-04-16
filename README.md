
# PhotoBook Maker  Dataservice

Node dataservice for a collaborative photobook maker. Implementation of Operational Transformation.

## URL 
Navigate to: http://52.183.38.255/ to access our live Photobook App

### Local Setup

#### Env Variables
- These come preconfigured
- DB_CON_STR: The mongodb connection string
- USE_SSL: true (chrome requires wss for websockets)
- AZURE_STORAGE_CONNECTION_STRING: the connection string of your azure blob storage.
- AZURE_BLOBL_CONTAINER_NAME: The name of the container in your azure blob storage to use.



###Resources

* http://www.codecommit.com/blog/java/understanding-and-applying-operational-transformation (Good Starting Point)
* https://arxiv.org/pdf/1512.05949.pdf (Function Transformations)
* http://www.redaktion.tu-berlin.de/fileadmin/a34331500/paper/sac16-jungnickel.pdf
* https://web.archive.org/web/20151130183552/http://ftp.lambda.moo.mud.org/pub/MOO/papers/JupiterWin.ps
* https://web.archive.org/web/20100314122942/http://www.waveprotocol.org/whitepapers/operational-transform
