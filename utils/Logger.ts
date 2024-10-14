// Logger.ts
export class Logger {
    static info(message: string): void {
        console.log(`[INFO]: ${message}`);
    }

    static warn(message: string): void {
        console.warn(`[WARN]: ${message}`);
    }

    static error(message: string, error?: Error): void {
        console.error(`[ERROR]: ${message}`);
        if (error) {
            console.error(error.stack);
        }
    }

    static debug(message: string): void {
        if (process.env.NODE_ENV === 'development') {
            console.log(`[DEBUG]: ${message}`);
        }
    }
}
