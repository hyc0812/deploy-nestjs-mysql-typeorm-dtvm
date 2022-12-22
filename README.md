### This branch is a tester for Chainlink

How to clone a certain branch?

```
gh repo clone hyc0812/deploy-nestjs-mysql-typeorm-dtvm -- --branch to-match-a-sepcific-json-format
```

```
gh repo clone <repo-name> -- --branch <branch-name>
```


Run the API server

```
docker compose up
```

Send HTTP POST request using Curl

```
curl -X POST -H "content-type:application/json" "http://localhost:3001/" --data '{ "id": 10, "data": { "number":19, "infoType": "math" } }'
```

