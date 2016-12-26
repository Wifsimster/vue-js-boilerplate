var sequelize = require('../db/database');
var User = require('./user');

sequelize.sync({ force: true }).then(() => {  
    User.create({ firstname: 'First', lastname: 'Last', email: 'f.last@email.com' })
    console.log('Create models into DB')
}, (err) => {
    console.error(err)
})