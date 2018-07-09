export default {
    /**
     * --------------------------------------------------------------------------
     *  Application Name
     * --------------------------------------------------------------------------
     * This value is the name of your application. This value is used when the
     * framework needs to place the application's name in a notification or
     * any other location as required by the application or its packages.
     *
     */

    'name': process.env.APP_NAME || 'My app',

    /**
     * --------------------------------------------------------------------------
     *  Application Environment
     * --------------------------------------------------------------------------
     *
     * This value determines the "environment" your application is currently
     * running in. This may determine how you prefer to configure various
     * services your application utilizes. Set this in your ".env" file.
     *
     */

    'env': process.env.NODE_ENV || 'development',

    /**
     * --------------------------------------------------------------------------
     *  Application Debug Mode
     * --------------------------------------------------------------------------
     *
     * When your application is in debug mode, detailed error messages with
     * stack traces will be shown on every error that occurs within your
     * application. If disabled, a simple generic error page is shown.
     *
     */

    'debug': process.env.APP_DEBUG || false,

    /*
     * --------------------------------------------------------------------------
     *  Application URL
     * --------------------------------------------------------------------------
     *
     * This URL is used by the console to properly generate URLs when using
     * the Artisan command line tool. You should set this to the root of
     * your application so that it is used when running Artisan tasks.
     *
     */

    'url': process.env.APP_URL || 'http://localhost',

    /*
     * --------------------------------------------------------------------------
     *  Application PORT
     * --------------------------------------------------------------------------
     *
     * This PORT is used to listen requests.
     *
     */

    'port': Number(process.env.APP_PORT || 3000),

    /*
     * --------------------------------------------------------------------------
     *  Application Timezone
     * --------------------------------------------------------------------------
     *
     * Here you may specify the default timezone for your application, which
     * will be used by the PHP date and date-time functions. We have gone
     * ahead and set this to a sensible default for you out of the box.
     *
     */

    'timezone': 'UTC',


    /*
     * --------------------------------------------------------------------------
     *  Encryption Key
     * --------------------------------------------------------------------------
     *
     * This key is used by the Illuminate encrypter service and should be set
     * to a random, 32 character string, otherwise these encrypted strings
     * will not be safe. Please do this before deploying an application!
     *
     */
    'secret':{
        'key': process.env.APP_KEY,
        'cipher': 'AES-256-CBC'
    },
}
