<<<<<<< HEAD
// built in to Node
const os = require('os');

function hostName() {
    return os.hostname()
}
// exports the function so we can use it again;
=======
const os = require('os')

function hostName() {
    return os.hostname();
}
>>>>>>> 38811ea (5/30/23)

module.exports = {
    hostName
}