
## Description
This is a replica of the web application using t3 stack that allows users to view a list of restaurants. Ref: https://www.figma.com/design/rcomlVLL8LS3xfUVSXkCUY/Seoul-Comix-Full-Stack-Applicant-Coding-Test-Assignment--Design-Material?node-id=0-1&t=w7hYgZ8xNW6W4Uwj-1

It retrieves data from supabase, then populates it on the screen. Each item can be interacted by clicking on the heart button, which will set it to be favourite and update that value in the DB

Link to live demo: https://seoulcomix-khanhnguyen.vercel.app/

## Prerequisites
Ensure that you have the following installed on your machine:

Node.js: v14.x or later

npm: v6.x or later, or Yarn for package management

PostgreSQL

## How do I deploy this?
1. Clone the Repository


2. Install Dependencies by running:
   
npm install

4. Configure Environment Variables:
   
- Run:
  
cp .env.example .env

- Update the .env file with your database URL and any other environment variables required by the app


4. Set up Prisma:

    4.1. Push the Prisma schema to your database:
   
        npx prisma db push
   
    4.2. If there are migrations, run:
   
        npx prisma migrate dev
   
    4.3. Seed the database:
   
        npx prisma db seed


6. Run Development Server:
   
npm run dev
