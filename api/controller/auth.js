const Client = require('../models/client');

passport.use('client-basic', new BasicStrategy(
    function(username, password, callback) {
        Client.findOne({ id: username }, function(err, client) {
            if (err) { return callback(err); }

            if (!client || client.secret !== password) {
                return callback(null, false);
            }

            //Success
            return callback(null, client);
        });
    }
));

exports.isClientAuthenticated = passport.authenticate('client-basic', { session: false });