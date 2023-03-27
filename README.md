# CP363 Database Client

A database client used to interact with a mysql database server using our HotelManagement database system

## How to run

sudo apt install mysql-server
sudo service mysql start
sudo mysql

use link to make user with permissions: https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql
(CREATE USER 'hotel'@'localhost' IDENTIFIED BY 'manage'; 
GRANT ALL PRIVILEGES ON *.* TO 'hotel'@'localhost' WITH GRANT OPTION; 
FLUSH PRIVILEGES;)

git clone https://github.com/tmanti/cp363-client.git

in cp363-client folder create .env file
copy fields from .env.example file
NODE_ENV will be development
database_host is localhost
database="HotelManagement"
user and user pass are the new user in mysql
created with link above
npm install
npm run dev

## Technologies Used

- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!
