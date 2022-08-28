const path = require('path')
const { mainModule } = require('process')

module.exports = path.dirname(process.mainModule.filename)


// mainModule  -- point to module where application is started  aapjs