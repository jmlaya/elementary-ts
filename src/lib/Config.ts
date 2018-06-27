import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const configs = fs
    .readdirSync(`${__dirname}/../config`)
    .filter(file => (file.indexOf('.') !== 0) && (['.js','.ts'].indexOf(file.slice(-3))>-1))
    .reduce((prev, curr) => ({ ...prev, [curr.replace('.js', '').replace('.ts', '')]: require(`../config/${curr}`).default }), {});

export class Config {
    static get(path: string): any{
        return path.split('.').reduce((o, i) => o[i], configs);
    }
}
