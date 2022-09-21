import dotenv from 'dotenv'
dotenv.config()

import Server from './server'


/**
 * Create a server and initialize it on port 5000.
 */
const createServer: Function = (): void => {
  const server: Server = new Server()
  const PORT: string = '5000'

  server.init(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
  })
}
createServer()
