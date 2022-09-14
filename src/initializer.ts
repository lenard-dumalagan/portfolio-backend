import express, { Application } from 'express'
import { OptionsUrlencoded, OptionsJson } from 'body-parser'
import cors, { CorsOptions } from 'cors'
import githubRoutes from './routes/githubRoutes'

interface initializerPropsType {
  app: Application
  corsOptions: CorsOptions
  bodyparserOptions: OptionsUrlencoded
  optionsJson: OptionsJson
}

const initializer = ({
  app,
  corsOptions,
  bodyparserOptions,
  optionsJson,
}: initializerPropsType) => {
  // START

  // middlewares
  app.use(cors(corsOptions))
  app.use(express.urlencoded(bodyparserOptions))
  app.use(express.json(optionsJson))
  app.set('json spaces', 2)

  // routers
  app.use('/github', githubRoutes)

  // END
}

export default initializer
