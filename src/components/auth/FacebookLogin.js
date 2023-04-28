import axiosInstance from "./auth_axios";


const facebookLogin = (accesstoken) => {
	console.log(accesstoken);
	axiosInstance
		.post('/auth/convert-token/', {
			token: accesstoken,
			backend: 'facebook',
			grant_type: 'convert_token',
            client_id: 'MN8trO3Kk4P5d6mENxubUaABHG4z4WwDO45Ka4Cv',
			client_secret:
			'kwK2Bnl13nBn8WPEMTgaU4ZVXeodwT1rQd71LQrt5CXLZ82t8qXDUfyQgI6gOCShPloH1aWhTpvipRHyotzA7H0m1rO5ThpkUJGO1n0uMFrVQTOC7JH05ex707K8t1SN',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default facebookLogin;