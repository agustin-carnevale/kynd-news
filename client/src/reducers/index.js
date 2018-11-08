import {combineReducers} from 'redux';
import articlesReducer from './articlesReducer';
import currentArticleReducer from './currentArticleReducer';

export default combineReducers({
    articles: articlesReducer,
    currentArticle: currentArticleReducer
});