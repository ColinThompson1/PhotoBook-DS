import sdbm from "sharedb-mongo";
import sharedb from "sharedb";

const db = sdbm(process.env.DB_CON_STR);
export default new sharedb({db});
