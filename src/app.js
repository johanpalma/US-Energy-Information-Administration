const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('port', process.env.PORT || 4000);

// Imports routes
const energyInformationRoutes = require('./router/energy_information.route');

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Use routes
app.use('/api', energyInformationRoutes);

app.listen(app.get('port'));
console.log(`Server on port: ${app.get('port')}`);