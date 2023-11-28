import express, { Application } from 'express';
import http from 'node:http'
import morgan from 'morgan'
import { apiv1Router } from './rest/api.v1';


const app: Application = express()

const createHTTPServe = async (): Promise<http.Server> => {

    app.disable('x-powered-by')
    app.use(express.json())
    app.use(morgan('tiny'))

    app.use('/api/v1', apiv1Router)

    const httpServe: http.Server = http.createServer(app);

    return httpServe

}

export {createHTTPServe}