import { MicroframeworkSettings } from "microframework";
import { createExpressServer } from "routing-controllers";
import * as morgan from 'morgan';

import { Config } from "../lib/Config";
import { AuthorizationChecker } from "../lib/Authentication";


export function ServerLoader(settings: MicroframeworkSettings) {
    /*
    |--------------------------------------------------------------------------
    | Express app
    |--------------------------------------------------------------------------
    |
    | Creates express app, registers all controller routes and returns you
    | express app instance.
    |
    */
    const app = createExpressServer({
        authorizationChecker: AuthorizationChecker,
        controllers: [`${__dirname}/../controllers/*{.js,.ts}`] // we specify controllers we want to use
    });

    /*
    |--------------------------------------------------------------------------
    | Request logger
    |--------------------------------------------------------------------------
    |
    | Defines morgan as request log to stdout
    |
    */
    app.use(morgan('dev'));

    /*
    |--------------------------------------------------------------------------
    | Listen requests
    |--------------------------------------------------------------------------
    |
    | Start express app listening on configured port.
    |
    */
    app.listen(Config.get('app.port'));
}
