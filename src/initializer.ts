import express, { Application } from 'express'
import { OptionsUrlencoded, OptionsJson } from 'body-parser'
import cors, { CorsOptions } from 'cors'
import githubRoutes from './routes/githubRoutes'

/* A type definition for the function parameters. */
interface initializerPropsType {
  app: Application
  corsOptions: CorsOptions
  bodyparserOptions: OptionsUrlencoded
  optionsJson: OptionsJson
}

/**
 * This function initializes the app with middlewares and routers.
 * @param {initializerPropsType}  - initializerPropsType
 */
const initializer = ({
  app,
  corsOptions,
  bodyparserOptions,
  optionsJson,
}: initializerPropsType) => {

  // middlewares
  app.use(cors(corsOptions))
  app.use(express.urlencoded(bodyparserOptions))
  app.use(express.json(optionsJson))
  app.set('json spaces', 2)

  // routers
  app.use('/github', githubRoutes)
}

export default initializer
