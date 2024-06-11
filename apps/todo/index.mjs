import express from 'express';
// import join from 'path';

const app = express();

app.use('/assets', express.static('dist/assets'));

app.listen(3001, () => {
  console.log('App listen 3000 port');
});
