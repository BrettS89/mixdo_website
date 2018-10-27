const express = require('express');
const appRoutes = require('./routes/app');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.use('/', appRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
