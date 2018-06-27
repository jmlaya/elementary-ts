import "reflect-metadata"; // this shim is required
import { bootstrapMicroframework } from "microframework";
import { ServerLoader } from "./bootstrap/ServerLoader";
import { Config } from './lib/Config';

bootstrapMicroframework({
    config: {
        logo: Config.get('app.name'),
        showBootstrapTime: true,
        bootstrapTimeout: 10
    },
    loaders: [
        ServerLoader
    ]
})
.catch(error => console.log("Application is crashed: " + error));
