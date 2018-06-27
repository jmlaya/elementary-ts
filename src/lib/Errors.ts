import { HttpError, UnauthorizedError, BadRequestError } from "routing-controllers";

/**
 * Error for undefined default connection
 * @class
 */
export class UndefinedConnection extends Error {

    /**
     * @constructs
     * @param {string} connectionName Undefined connection name
     */
    constructor(connectionName: string) {
        super(`The connection "${connectionName}" is not defined, please review the config/database.ts file"`);
        this.name = "UndefinedConnection";
        this.stack = (<any>new Error()).stack;
    }

}

/**
 * User not found error
 * @class
 */
export class UserNotFoundError extends HttpError {

    /**
     * @constructs
     */
    constructor() {
        super(404, "User not found");
    }
}

/**
 * User not found error
 * @class
 */
export class InvalidCredentialError extends BadRequestError {

    /**
     * @constructs
     */
    constructor() {
        super("Invalid credential");
    }
}

/**
 * User not found error
 * @class
 */
export class NotTokenError extends UnauthorizedError {

    /**
     * @constructs
     */
    constructor() {
        super("Please make sure your request has a valid JWT in Authorization header.");
    }
}

