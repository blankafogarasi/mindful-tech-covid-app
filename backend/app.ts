import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {router} from "./src/routes/routes";
import * as apiManager from "./src/models/apiModel";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/stats", router);

app.listen(process.env.PORT, () => {
    console.log("Node server started running");
});
