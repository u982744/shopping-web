var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001;

app.use(express.static('src'));

// launch ======================================================================
app.listen(port, function () {
    console.log('web service listening on port ' + port);
});