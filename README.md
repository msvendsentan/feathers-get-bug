## Recreate Steps

- Clone
- Make sure /feathers_get_bug.sqlite has come along for the ride (I've seeded 2 records)
- Yarn install, yarn start
- Postman/Insomnia/etc. a no-header GET request to http://localhost:3030/service-b
- Error logged in client, server-side console reports more details
- Full breaking logic in /src/hooks/bug-demo.js
