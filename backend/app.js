var app = require('express')();
var cors = require('cors');
var BodyParser = require('body-parser');

var config = require('./config');
var apis = require('./apis');

app.use(BodyParser.json({ limit: '50mb' }));
app.use(BodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.get('/news', async (req, res) => {
    try {
        let resBody = {
            headlines: await apis.headlines(req.query.type, req.query.query),
            news: await apis.news(req.query.query)
        }
        return res.status(200).json(resBody);
    } catch(e) {
        res.status(e.status || 500).json({status: e.status||500, msg: e.msg||"Internal server error"});
    }
});

const server = app.listen(config.port, function (err) {
	if (err) throw err;
	console.log(`Started DR Receiver started and listening on ${config.port}`);
});