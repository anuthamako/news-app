const NewsAPI = require('newsapi');
const moment = require('moment');

const config = require('./config');
const newsapi = new NewsAPI(config.API_KEY);

let APIs = {
    
    headlines: async (type, query) => {
        try {
            console.log(`Requesting headlines for category ${type} and query ${query || "NA"}`);
            let options = {
                language: 'en',
                country: config.country,
                pageSize: config.headlinePageSize,
                page: 1
            };
            if(type) {
                options.category = type;
            }
            if(query) {
                options.q = query;
            }
            let response = await newsapi.v2.topHeadlines(options);
            console.log(`Headlines returned from API => ${JSON.stringify(response, null, 2)}`);
            return response;
        } catch(e) {
            console.log(`Error while fetching headlines. Error: ${e}`);
            throw new Error({"status": 500, "msg": "Error while fetching headlines"});
        }
    },

    news: async (query) => {
        if(query && query.toLowerCase() != "world")
            query += " " + config.country;
        try {
            console.log(`Requesting news for query ${query || "NA"}`);
            let options = {
                language: 'en',
                q: query || "United Kingdom",
                sortBy: 'relevancy',
                pageSize: config.newsPageSize,
                from: moment().add(-2, 'd').format("YYYY-MM-DD"),
                to: moment().add(1, 'd').format("YYYY-MM-DD"),
                page: 1
            };
            let response = await newsapi.v2.everything(options);
            console.log(`News returned from API => ${JSON.stringify(response, null, 2)}`);
            return response;
        } catch(e) {
            console.log(`Error while fetching news. Error: ${e}`);
            throw new Error({"status": 500, "msg": "Error while fetching news"});
        }
    }

}

module.exports = APIs;