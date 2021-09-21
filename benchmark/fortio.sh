# node
fortio load -qps 1000 -c 8 -t 5s http://127.0.0.1:3002/2

# deno native
fortio load -qps 1000 -c 8 -t 5s http://127.0.0.1:8082/1

# deno legacy
fortio load -qps 1000 -c 8 -t 5s http://127.0.0.1:8083/3