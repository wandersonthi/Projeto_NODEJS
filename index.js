const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;


mongoose.connect('urldomongo ou do local host',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(()=> console.log('Conectado ao banco de dados'))
  .catch((err)=> console.log(err));

app.use(express.json());
app.use('/api/users', userRoutes)')

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
