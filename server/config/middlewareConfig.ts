// Use this file to define middleware that is common to all routes

import express from 'express';

export const configureMiddleware = (server: express.Express) => {
  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());

  // Add other middleware or server configurations here if needed
};
