import http from 'k6/http';
import { check } from 'k6';

/**
 * @type {import("k6/options").Options}
 */
export const options = {
  stages: [
    {
      duration: '2s',
      target: 10,
    },
    {
      duration: '2s',
      target: 20,
    },
    {
      duration: '2s',
      target: 0,
    },
  ],
  thresholds: {
    http_req_duration: ['p(90)<50'],
  },
};

export default function () {
  http.get('http://localhost:3000');
  check(res, { 'status is 200': (res) => res.status === 200 });
}
