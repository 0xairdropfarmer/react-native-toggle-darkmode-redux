import {
    THEME_DARK,THEME_LIGHT
} from "../constant";
const initialState = {
    theme: 'dark' 
};
export default (state = initialState,{ type }) => {
    switch (type) {
        case THEME_DARK:
            return { theme: 'dark' };
        case THEME_LIGHT:
            return { theme: 'light' };
        default:
            return state;
    }
};