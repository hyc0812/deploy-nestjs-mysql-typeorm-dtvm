### This branch is a tester for Chainlink

#### This is the test repo for receiving HTTP POST request from Ethereum Smart contract --> Oracle contract --> Chainlink Node Operator --> Job (TOML file) --> (external adapter) --> DigitalTwins server 

How to clone a certain branch?

```
gh repo clone hyc0812/deploy-nestjs-mysql-typeorm-dtvm -- --branch to-match-a-sepcific-json-format
```

```
gh repo clone <repo-name> -- --branch <branch-name>
```


Run this API server

```
docker compose up
```

Send HTTP POST request using Curl

```
curl -X POST -H "content-type:application/json" "http://localhost:3001/" --data '{ "id": 10, "data": { "number":19, "infoType": "math" } }'
```

Go to http://localhost:3001 and use HTTP GET request to see the record.

