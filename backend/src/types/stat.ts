import {RowDataPacket} from "mysql2";
import {StatResponse} from "./statResponse";

export interface Stat extends RowDataPacket{
    id: number,
    infected: number,
    deceased: number,
    recovered: number,
    quarantined: number,
    tested: number,
    last_updated: Date
}