import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const configs = fs
    .readdirSync(`${__dirname}/../config`)
    .filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
    .reduce((prev, curr) => ({ ...prev, [curr.replace('.js', '')]: require(`../config/${curr}`).default }), {});

export class Config {
    static get(path: string): any{
        return path.split('.').reduce((o, i) => o[i], configs);
    }
}
