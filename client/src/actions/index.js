import { FETCH_ARTICLES, SHOW_ARTICLE, SHOW_TITLES} from './types';

export const fetchArticles  = () => async dispatch => {
    const api = 'http://localhost:5000/api/news/articles';
    const res = await fetch(api);
    const articles = await res.json();
    dispatch({
        type:FETCH_ARTICLES,
        payload: articles
    })
};


export const showArticle  = (i) => dispatch => {
    dispatch({
        type:SHOW_ARTICLE,
        payload: i
    })
};

export const showTitles  = () => dispatch => {
    dispatch({
        type:SHOW_TITLES,
        payload: null
    })
};