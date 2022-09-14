import { OptionsUrlencoded } from 'body-parser'

const bodyparserOptions: OptionsUrlencoded = {
  parameterLimit: 1000000,
  limit: '50mb',
  extended: true,
}

export default bodyparserOptions
