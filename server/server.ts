import express from 'express';
import next from 'next';

import { configureMiddleware } from './config/middlewareConfig';
import { handleErrors } from './middleware/errorHandler';
import appRoutes from './routes/appRoutes';

const port: number = parseInt(process.env.PORT || '3000', 10);
const dev: boolean = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './client' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  configureMiddleware(server);

  // API route handled by Express
  server.use(express.json()); // JSON body parsing middleware
  server.use(express.urlencoded({ extended: true })); // Form data parsing middleware

  server.use(appRoutes);

  // all other routes go to Next.js
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // Error handling should be the last piece of middleware added to the app
  server.use(handleErrors);

  if (dev) {
    const httpServer = server.listen(port, () => {
      console.log(`🔌 Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
    });

    httpServer.on('error', (error: any) => {
      if (error.syscall !== 'listen') {
        throw error;
      }

      switch (error.code) {
        case 'EACCES':
          console.error(`🚨 Port ${port} requires elevated privileges`);
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(`🚨 Port ${port} is already in use`);
          process.exit(1);
          break;
        default:
          throw error;
      }
    });
  } else {
    // TODO: production code
  }
});
