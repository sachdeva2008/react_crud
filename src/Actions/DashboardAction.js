import {DATA_SET} from './Types';

export const dataList = () => {
    const data = JSON.parse(localStorage.getItem('product_1'));
    return (dispatch) => {
        dispatch({type : DATA_SET, payload:data});
    }
   }
