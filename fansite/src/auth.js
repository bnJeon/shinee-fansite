// import axios from 'axios';

// export const getToken = async (authorizationCode) => {
//   const clientId = '1003bec15d984f539d363a0d890fec6b';
//   const clientSecret = '75818f40d0ef4c299c77a90734504053';
//   const redirectUri = 'http://localhost:8080/callback';

//   const params = new URLSearchParams();
//   params.append('grant_type', 'authorization_code');
//   params.append('code', 'http://localhost:8080/callback?code=YOUR_AUTHORIZATION_CODE');
//   params.append('redirect_uri', redirectUri);
//   params.append('client_id', clientId);
//   params.append('client_secret', clientSecret);

//   try {
//     const response = await axios.post('https://accounts.spotify.com/api/token', params, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     });

//     console.log('Token response:', response.data);
//     return response.data.access_token;
//   } catch (error) {
//     console.error('Error getting access token:', error.response ? error.response.data : error.message);
//     return null;
//   }
// };
