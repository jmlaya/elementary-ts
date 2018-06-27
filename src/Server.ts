import "reflect-metadata"; // this shim is required
import { bootstrapMicroframework } from "microframework";
import { ServerLoader } from "./bootstrap/ServerLoader";
import { Config } from './lib/Config';
import { DbConnectionLoader } from "./bootstrap/DbConnectionLoader";

bootstrapMicroframework({
    config: {
        logo: Config.get('app.name'),
        showBootstrapTime: true,
        bootstrapTimeout: 10
    },
    loaders: [

        DbConnectionLoader,
        ServerLoader
    ]
})
.catch(error => console.log("Application is crashed: " + error));
