
# PhotoBook Maker  Dataservice

Node dataservice for a collaborative photobook maker. Implementation of Operational Transformation.

### Setup

##### Env Variables
- DB_CON_STR: The mongodb connection string
- USE_SSL: truthy (chrome requires wss for websockets)

##### Certs
Create a cert.pem and key.pem and place in the sslcert directory

##### Patch
Patch json1 by a adding the following to type exports

`uri: "http://sharejs.org/types/JSONv1",`

##### Starting

`npm install`

`npm run start`

### Resources

* http://www.codecommit.com/blog/java/understanding-and-applying-operational-transformation (Good Starting Point)
* https://arxiv.org/pdf/1512.05949.pdf (Function Transformations)
* http://www.redaktion.tu-berlin.de/fileadmin/a34331500/paper/sac16-jungnickel.pdf
* https://web.archive.org/web/20151130183552/http://ftp.lambda.moo.mud.org/pub/MOO/papers/JupiterWin.ps
* https://web.archive.org/web/20100314122942/http://www.waveprotocol.org/whitepapers/operational-transform
