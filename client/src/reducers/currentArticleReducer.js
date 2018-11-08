import {SHOW_ARTICLE, SHOW_TITLES} from '../actions/types';

export default (state = null, action) => {
    switch(action.type) {
        case SHOW_ARTICLE:
            return action.payload;
        case SHOW_TITLES:
            return null;
        default:
            return state;
    }
}