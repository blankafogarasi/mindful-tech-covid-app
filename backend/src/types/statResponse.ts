import {Stat} from "./stat";

export interface StatResponse {
    infected: number,
    deceased: number,
    recovered: number,
    quarantined: number,
    tested: number,
    lastUpdatedAtApify: string
}
