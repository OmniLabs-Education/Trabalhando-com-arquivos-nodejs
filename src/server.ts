import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  const data = fs.readFileSync('', 'utf8')
  console.log(data)
})

app.listen(3333)