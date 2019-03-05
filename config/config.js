if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/reconchetubot';

} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = 'mongodb://localhost:27017/reconchetubot';