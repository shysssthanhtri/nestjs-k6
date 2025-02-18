# NestJS K6 example

[![CI-CD](https://github.com/shysssthanhtri/nestjs-k6/actions/workflows/ci.yml/badge.svg)](https://github.com/shysssthanhtri/nestjs-k6/actions/workflows/ci.yml)

## Scripts:
- `brew install k6`: Install k6 by brew: https://formulae.brew.sh/formula/k6
- `k6 new /path/to/your/test/file.test.js`: Generate new test file. 
- `k6 run /path/to/your/test/file.test.js`: Run your test file.

## Units:
- vus: Virtual users
- duration: Executing time
- target: Target vus in stages

## Test strategies:
- Stages: test suite should include stages
    - Baseline: normal load of system
    - Spike: assess the system’s reaction to sudden spikes in load
    - Endurance: load is at peak for sometime
    - Scale down: load is decrease
