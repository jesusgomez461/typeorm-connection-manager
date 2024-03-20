import { DataSource } from "typeorm"

export interface IDataBaseSource {
  type?: IType
  host: string
  port: number
  username: string
  password: string
  database: string
  synchronize?: true
}

export interface IShowEntity {
    entityName: string
    connection: DataSource
}

export type IType = 'mysql' | 'mariadb'
