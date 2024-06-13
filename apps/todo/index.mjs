import express from 'express';
// import join from 'path';
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/assets', express.static('dist/assets'));
app.listen(3003, () => {
  console.log('App listen 3003 port');
});
