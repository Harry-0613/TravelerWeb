### Login Interface
<img width="1116" alt="image" src="https://github.com/Tomlord1122/Traveler/assets/79390871/ad591a60-e1d3-4508-aaa9-ca33d7772524">


### Main System
<img width="1174" alt="image" src="https://github.com/Tomlord1122/Traveler/assets/79390871/3fb1a457-e6f4-421b-b404-7cc56caa3b09">


1. You can add a new plan.
2. Here you can select the plan you want to edit.
3. You can still modify the name and description of the plan afterwards.
4. You can add an itinerary.
5. Here you can view the itinerary and re-edit if necessary.
6. You can share it with your friends and synchronize real-time editing.
7. Finally, you can export it to your Google Calendar.

## Run the project


1. Install dependencies
   ```bash
   yarn
   ```
2. Get Pusher credentials and

   1. Create a pusher account at https://pusher.com/
   2. Create a new app
      Click Get Started or Manage/Create appon the Channel tab
      Enter the app name
      Select a cluster. Pick the one closest to you, i.e. ap3(Asia Pacific (Tokyo))
      Click Create app
   3. Go to App Keys tab, you will see the following keys:
      
      * `app_id`
      * `key`
      * `secret`
      * `cluster`
      
   4. Copy these keys to your .env.local file:
      ```
      PUSHER_ID=<app_id>
      NEXT_PUBLIC_PUSHER_KEY=<key>
      PUSHER_SECRET=<secret>
      NEXT_PUBLIC_PUSHER_CLUSTER=<cluster>
      ```
   5. NEXT_PUBLIC prefix is required for the client side to access the env variable.
      Also, please remember to add these keys to your environment variables handler in src/lib/env/private.ts and src/lib/env/public.ts. You can view those two files for more details.
   6. Go to App Settings tab, scroll down to Enable authorized connections and enable it. Note: If you enable the Enable client events option, every connection will last only 30 seconds if not authorized. So if you just want to do some experiments, you might need to disable this option.
   
   You can refer to the [Pusher Setup](https://github.com/ntuee-web-programming/112-1-unit2-notion-clone#pusher-setup) section in Notion Clone README for more details.

4. Setup Google credentials

   Please refer to the [Google Setup](https://developers.google.com/identity/protocols/oauth2/web-server?hl=zh-tw)
5. Create `.env.local` file in the project root and add the following content:

   ```
   POSTGRES_URL=postgres://postgres:postgres@localhost:5432/traveler

   PUSHER_ID=
   NEXT_PUBLIC_PUSHER_KEY=
   PUSHER_SECRET=
   NEXT_PUBLIC_PUSHER_CLUSTER=

   AUTH_SECRET=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=

   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```



6. Start the database
   ```bash
   docker compose up -d
   ```

7. Run migrations
   ```bash
   yarn migrate
   ```
8. Start the development server
   ```bash
   yarn dev
   ```
9. Open http://localhost:3000 in your browser

