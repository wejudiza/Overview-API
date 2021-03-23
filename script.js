import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  stages: [
    { duration: '20s', target: 10 },
    { duration: '20s', target: 100 },
    { duration: '20s', target: 1000 },
    { duration: '20s', target: 0 },
  ],
};
export default function () {
  const url = 'http://localhost:8080/api';
  const responses = http.batch([
    [
      'GET',
      `${url}/products/1`,
      null,
    ],
    [
      'GET',
      `${url}/products/19284`,
      null,
    ],
    [
      'GET',
      `${url}/products/194284`,
      null,
    ],
    [
      'GET',
      `${url}/products/1000011`,
      null,
    ],
    // [
    //   'GET',
    //   `${url}/products/1/styles`,
    //   null,
    // ],
    // [
    //   'GET',
    //   `${url}/products/19284/styles`,
    //   null,
    // ],
    // [
    //   'GET',
    //   `${url}/products/194284/styles`,
    //   null,
    // ],
    // [
    //   'GET',
    //   `${url}/products/1000011/styles`,
    //   null,
    // ],
  ]);

  sleep(1);
}
