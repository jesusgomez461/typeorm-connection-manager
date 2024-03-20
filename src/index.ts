import { DataSource, EntityMetadata } from 'typeorm'
import { User } from './entities/User'
import { IDataBaseSource, IShowEntity } from './interface'

const createDataBaseSource = ({
  type,
  host,
  port,
  username,
  password,
  database,
  synchronize,
}: IDataBaseSource): DataSource => {
  return new DataSource({
    type: type ?? 'mysql',
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    synchronize: synchronize || false,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
  })
}

const showEntity = ({
  entityName,
  connection,
}: IShowEntity): EntityMetadata | undefined => {
  const entityMetadata = connection.entityMetadatas.find(
    (metadata) => metadata.name === entityName
  )

  return entityMetadata
}

module.exports = {
  createDataBaseSource,
  showEntity,
}
