import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
vus: 10, // simulate 10 concurrent users
duration: '30s', // run for 30 seconds
};

export default function () {
let res = http.get('http://localhost:5000/users');
check(res, {
'Status code is 200': (r) => r.status === 200,
'Return data is not empty': (r) => r.body.length > 0,
});
sleep(1);
}