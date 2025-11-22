export default async function handler(req, res) {
    if(req.method!=='POST'){
        return res.status(405).json({error:'Method not allowed'});
    }

    const{ token, chat_id, text }= req.body;
    if(!token ||!chat_id ||!text){
        return res.status(400).json({error:'Missing params'});
    }

    const telegramUrl =`https://api.telegram.org/bot${token}/sendMessage`;
    const response =await fetch(telegramUrl,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({ chat_id, text })
    });

    const data =await response.json();
    res.status(200).json(data);
}
// api/sendMessage.js

// const fetch = require('node-fetch'); // 必须添加

// module.exports = async (req, res) => {
//   try {
//     if (req.method !== 'POST') {
//       return res.status(405).json({ error: 'Method not allowed' });
//     }

//     const body = req.body || {};
//     const { token, chat_id, text } = body;

//     if (!token || !chat_id || !text) {
//       return res.status(400).json({
//         error: 'Missing params',
//         got: body,
//       });
//     }

//     const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

//     const response = await fetch(telegramUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ chat_id, text }),
//     });

//     const data = await response.json();

//     return res.status(200).json(data);
//   } catch (err) {
//     console.error('sendMessage error:', err);
//     return res.status(500).json({
//       error: 'Internal Server Error',
//       message: err.message,
//     });
//   }
// };
