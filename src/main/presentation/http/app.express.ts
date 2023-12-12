import express, { Application } from "express";
import { apiv1Router } from "./rest/api.v1";
import morgan from "morgan";
import helmet from "helmet";
import compression from 'compression';
import { customMorganMiddleware } from "./middlewares/custom-morgan.middleware";

const createExpressApplication = async (): Promise<Application>  => {
    const app: Application = express();
    app.disable('x-powered-by');
    app.use(compression());  
    app.use(helmet())
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json());
    app.use(morgan('tiny'));
    app.use(customMorganMiddleware);
    app.use('/api/v1', apiv1Router);
    
    return app;
};

export { createExpressApplication }