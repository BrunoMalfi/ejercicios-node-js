const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`usando el método debug`);
logger.info(`usando el método info`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!! `);