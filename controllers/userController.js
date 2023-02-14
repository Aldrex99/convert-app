const jwt = require('jsonwebtoken');

function generateToken(user) {
	return jwt.sign(user, process.env.SECRET_FOR_TOKEN, { expiresIn: '24h' });
}

const user = {
	login: (req, res) => {
		const loginInfo = {
			id: 1,
			username: 'admin',
			email: 'admin@admin.com',
			password: '1234'
		};
		const {email, password} = req.body;
		if (email === loginInfo.email && password === loginInfo.password) {
			const userForToken = {
				id: loginInfo.id,
				email: email,
				username: loginInfo.username
			}
			const token = generateToken(userForToken);
			res.send(JSON.stringify({token: token}));
		} else {
			res.send(JSON.stringify({result: 'error'}));
		}
	}
}

module.exports = user;
