export const API_KEY = 'AIzaSyBkvV65EfksHEc-hXi24Juit1Zm81WHKMY';

export const value_converter = (value) => {
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }
    else if(value >= 1000){
        return Math.floor(value/1000) + "K";
    }
    else{
        return value;
    }
}