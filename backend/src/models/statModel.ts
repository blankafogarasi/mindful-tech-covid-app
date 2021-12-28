import {Stat} from "../types/stat";
import {db, dbFindOne} from "../db";

export const statModel = {
    create (stat: Stat, callback: Function)  {
        const queryString = "INSERT INTO stat (infected, deceased, recovered, quarantined, tested, last_updated) VALUES (?, ?, ?, ?, ?, ?)"
        db.query(queryString, [stat.infected, stat.deceased, stat.recovered, stat.quarantined, stat.tested, stat.last_updated]).then((r: unknown) => {
            console.log(r)
            // @ts-ignore
            callback(null, r.insertId);
        })
    },

    async findMaxDate () : Promise<Stat> {
        const queryString = "SELECT MAX(last_updated) AS lastUpdated FROM stat"
        return await dbFindOne.query(queryString, []);
    },

    async findAll () : Promise<Stat[]> {
        const queryString = "SELECT * FROM stat"
        return await db.query(queryString, []);
    },
}