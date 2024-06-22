const express = require('express');
const app = express();

app.use(express.json()); // JSON 요청을 파싱하기 위해 필요

// 로그인 엔드포인트 예제
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // 로그인 로직 (단순 예시)
  if (email === 'admin@example.com' && password === 'password') {
    res.status(200).json({ token: 'admin-token', email, role: 'admin', storeId: '123' });
  } else if (email === 'user@example.com' && password === 'password') {
    res.status(200).json({ token: 'user-token', email, role: 'user', storeId: '123' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
