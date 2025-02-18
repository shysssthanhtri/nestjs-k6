import http from 'k6/http';
import { check } from 'k6';

/**
 * @type {import("k6/options").Options}
 */
export const options = {
  stages: [
    {
      duration: '2s',
      target: 10, // Normal
    },
    {
      duration: '2s',
      target: 20, // Spike
    },
    {
      duration: '4s',
      target: 20, // Peak
    },
    {
      duration: '2s',
      target: 0, // Down
    },
  ],
  thresholds: {
    http_req_duration: ['p(90)<50'],
  },
};

export default function () {
  const res = http.get('http://localhost:3000');
  check(res, { 'status is 200': (res) => res.status === 200 });
}
