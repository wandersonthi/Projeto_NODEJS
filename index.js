const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;


mongoose.connect('mongodb+srv://wandersonthi:<10Demaiovida>@cluster0.1g0onws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
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
