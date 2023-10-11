const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './client' });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');

// const appRoutes = require('./routes/appRoutes');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: false }));

  // API route handled by Express
  server.get('/', (req, res) => {
    res.json({ message: 'Hello from Express!' });
  });

  // server.use(appRoutes);

  // All other routes go to Next.js
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
  });
});

// import { Request, Response, NextFunction } from 'express';

// server.get('/api/hello', (req: Request, res: Response) => {
//     // your code here
// });

// server.get('*', (req: Request, res: Response) => {
//     // your code here
// });

// server.listen(3000, (err?: any) => {
//     // your code here
// });
