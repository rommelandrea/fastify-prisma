# FASTIFY + PRISMA EXAMPLE
This is an example of fastify + prisma

Command for startup

```
docker-compose up -d
yarn
```

### setup prisma
To setup prisma you need to setup a `.env` file with the connection string
```
DATABASE_URL="postgresql://postgres:password@localhost:6432/fastify?schema=public&pgbouncer=true"
```
To run migration on dev env you run this command
```
npx prisma migrate dev --name init
```

Sometime the first setup have some trouble with the combo of migrations + pgbouncer. At the moment i suggest to run migrations without bgboucer. To do this you can change the port of connection string to `5432`.

Enjoy
