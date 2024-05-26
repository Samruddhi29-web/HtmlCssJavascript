const http = require("https");

const url = 'https://bfhldevapigw.healthrx.co.in/automation-campus/create/user';

const options = {
    method: 'POST',
    'roll-number': '1',
    'Content-Type': 'application/json',
};

const data = `{
"firstName":"Samruddhi",
"lastName": "Shinde",
"phoneNumber" : 8767283724,
"emailId": "samruddhishinde.skn.comp@gmail.com"
}`;

let result = '';
const req = http.request(url, options, (res) => {
    console.log(res.statusCode);

    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        result += chunk;
    });

    res.on('end', () => {
        console.log(result);
    });
});

req.on('error', (e) => {
    console.error(e);
});

req.write(data);
req.end();