# Bidding Platform API

## Documentation
[Postman Documentation](https://documenter.getpostman.com/view/28036992/2sA3QwapCo)

## Deployed API
The API is deployed on EC2 and can be accessed at: [http://ec2-13-127-202-84.ap-south-1.compute.amazonaws.com:3000/](http://ec2-13-127-202-84.ap-south-1.compute.amazonaws.com:3000/)

## Steps to Run Locally

1. Clone the repository
    ```bash
    git clone https://github.com/Kushagra102/bidding-api.git
    cd bidding-api
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Fill in the environment variables in a `.env` file
    ```env
    DATABASE_URL="POSTGRESQL_DATABASE_URL"
    JWT_SECRET="your_jwt_secret"
    PORT=3000
    MAILER_EMAIL_ID="YOUR_EMAIL_ID"
    MAILER_PASSWORD="YOUR_EMAIL_APP_PASSWORD"
    ```

4. Generate Prisma client
    ```bash
    npx prisma generate
    ```

5. Start the development server
    ```bash
    npm run dev
    ```


## Steps For local building - 
```bash
npm run build
npm run start
````

## Steps to run via docker - 
```bash
docker build --build-arg PORT=3000 --build-arg DATABASE_URL="postgresql://postgres:password@localhost:5432/db?schema=public" --build-arg JWT_SECRET="your_jwt_secret" --build-arg MAILER_EMAIL_ID="YOUR_EMAIL_ID" --build-arg MAILER_PASSWORD="YOUR_EMAIL_APP_PASSWORD" -t server .
```
```bash
docker run -p 3000:3000 server
```

## Linting
Run the following command to lint your code:
```bash
npm run lint
```

## Formatting
Run the following command to format your code:
```bash
npm run format
```
