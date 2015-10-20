var AppRoutes = function(app) {

    app.get('/healthcheck', function(req, res) {
        res.send('Server started!');
    });

    app.get('*', function(req, res) {
        res.sendfile('src/app/index.html');
    });
};

module.exports = AppRoutes;
