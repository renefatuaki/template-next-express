import express from 'express';

export const handleErrors = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const dev: boolean = process.env.NODE_ENV !== 'production';

  if (dev) {
    // In development, send detailed error message
    res.status(500).send(err.message);
  } else {
    // In production, send generic error message
    res.status(500).send('Internal Server Error');
  }
};
