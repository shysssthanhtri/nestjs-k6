import http from 'k6/http';

/**
 * @type {import("k6/options").Options}
 */
export const options = {
  stages: [
    {
      duration: '10s',
      target: 50,
    },
    {
      duration: '10s',
      target: 100,
    },
    {
      duration: '10s',
      target: 0,
    },
  ],
  thresholds: {
    http_req_duration: ['p(90)<100'],
  },
};

export default function () {
  http.get('http://localhost:3000');
}
