import { CorsOptions } from 'cors'

const corsOptions: CorsOptions = {
  origin: ['http://localhost:5000'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
  ],
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  credentials: true,
}

export default corsOptions
