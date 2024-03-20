"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const createDataBaseSource = ({ type, host, port, username, password, database, synchronize, }) => {
    return new typeorm_1.DataSource({
        type: type !== null && type !== void 0 ? type : 'mysql',
        host: host,
        port: port,
        username: username,
        password: password,
        database: database,
        synchronize: synchronize || false,
        logging: true,
        entities: [User_1.User],
        subscribers: [],
        migrations: [],
    });
};
const showEntity = ({ entityName, connection, }) => {
    const entityMetadata = connection.entityMetadatas.find((metadata) => metadata.name === entityName);
    return entityMetadata;
};
module.exports = {
    createDataBaseSource,
    showEntity,
};
