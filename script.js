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
      `${url}/products/`,
      null,
    ],
    [
      'GET',
      `${url}/products/28`,
      null,
    ],
    [
      'GET',
      `${url}/products/500000`,
      null,
    ],
    [
      'GET',
      `${url}/products/1000011`,
      null,
    ],
    [
      'GET',
      `${url}/products/137/styles`,
      null,
    ],
    [
      'GET',
      `${url}/products/692305/styles`,
      null,
    ],
    [
      'GET',
      `${url}/products/999997/styles`,
      null,
    ],
    [
      'GET',
      `${url}/products/5600/related`,
      null,
    ],
    [
      'GET',
      `${url}/products/333000/related`,
      null,
    ],
    [
      'GET',
      `${url}/products/893400/related`,
      null,
    ],
  ]);

  sleep(1);
}
