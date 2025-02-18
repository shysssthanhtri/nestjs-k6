import http from 'k6/http';

/**
 * @type {import("k6/options").Options}
 */
export const options = {
  stages: [
    {
      duration: '2s',
      target: 50, // Normal
    },
    {
      duration: '2s',
      target: 100, // Spike
    },
    {
      duration: '4s',
      target: 100, // Peak
    },
    {
      duration: '2s',
      target: 0, // Down
    },
  ],
  thresholds: {
    http_req_duration: ['p(90)<100'],
  },
};

export default function () {
  http.get('http://localhost:3000');
}
