import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {

    axiosWithAuth()
        .get('/colors')
        .then(res => res)
        .catch(err => console.log(err))

}

export default fetchColorService;



// it did work in the netweok repsonse it return the correct array however when i want to get the resposne in console.log it return empty array