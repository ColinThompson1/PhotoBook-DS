const sdbm = require("sharedb-mongo");
import ShareDB from "sharedb";

const otjson1 = require('ot-json1');

const db = new sdbm(process.env.DB_CON_STR);
ShareDB.types.register(otjson1.type);

export default new ShareDB({
    db: db,
    disableDocAction: true,
    disableSpaceDelimitedActions: true
});
