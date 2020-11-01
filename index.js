const express = require('express');
const cors = require('cors');
const fileRoute = require('./routes/file');
const app = express();
app.use(cors());
app.use(fileRoute);
app.listen(3030, () => {
  console.log('server started on port 3030');
});