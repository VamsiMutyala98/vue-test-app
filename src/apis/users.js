import axios from 'axios';

export async function getUsersData() {
    try{
        const response = await axios.get('https://fakestoreapi.com/users');
        if(response && response.status === 200) {
            return response.data;
        }
    }catch(err) {
        console.log('getUsersData api error', err);
        return err;
    }
}