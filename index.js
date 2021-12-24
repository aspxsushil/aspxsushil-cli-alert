

module.exports = (options) => {

    const chalk = require('chalk');
    const logSymbols = require('log-symbols');

    const defaultOptions = {
        type: "error",
        message: "please specify all the options"
    }

    const opts = { ...defaultOptions, ...options };

    const { type, message } = opts;

    switch (type) {
        case "success":
            console.log(
                `${logSymbols.success} ${chalk.green.inverse(` SUCCESS `)} ${chalk.hex(`#4C9A2A`).bold(message)}`
            )
            break;

        case "info":
            console.log(
                `${logSymbols.info} ${chalk.blue.inverse(` INFO `)} ${chalk.hex(`#005ce6`).bold(message)}`
            )
            break;

        case "error":
            console.log(
                `${logSymbols.error} ${chalk.red.inverse(` ERROR `)} ${chalk.hex(`#cc0000`).bold(message)}`
            )

    }
}