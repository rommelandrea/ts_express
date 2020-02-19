import * as bodyParser from 'body-parser';
import App from './App';

// import loggerMiddleware from './middleware/logger'

// import PostsController from './controllers/posts/posts.controller'
// import HomeController from './controllers/'

const app = new App({
  port: 5000,
  controllers: [],
  middleWares: [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
});

app.listen();
