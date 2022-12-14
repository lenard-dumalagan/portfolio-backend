import express, { Application } from 'express'
import initializer from './initializer'
import { corsOptions, bodyparserOptions, optionsJson } from './configs'

/* It's a class that initializes an express app and listens to a port.
</code> */
export default class Server {
  private app: Application

  constructor() {
    this.app = express()
  }

  public init(PORT: string, callback: () => void): void {
    const { app } = this

    initializer({ app, corsOptions, bodyparserOptions, optionsJson })

    app.listen(PORT, callback)
  }
}
