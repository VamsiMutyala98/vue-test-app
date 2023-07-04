import axios from 'axios';

export async function loginUser(formData) {
  try {
    const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', formData);
    if (response && response.status === 201) {
      return response;
    } 
  } catch (err) {
    console.log('login api error', err.message);
    return err;
  }
}

export async function getLoggedInUserData() {
  try {
    // const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile',
    //   { headers: {
    //       Authorization: `${localStorage.getItem('accessToken')}`,
    //     },
    //   });
    const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile');
    if (response && response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.log('getLoggedInUserData api error', err.message);
  }
}
