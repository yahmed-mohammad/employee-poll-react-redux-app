###  Scripts

- Install: ```npm install```
- Build: ```npm build```
- Run unit tests: ```npm test```
- Start server: ```npm start```

### PORT
The server will listen on port 3000:

#### LOCALHOST
http://localhost:3000/

##Available Routes
- /login (default)
- / (Dashborad, default after login)
- /leaderboard
- /questions/{qid}
- /add
- /404 (Default error page in case the route is not available)

#### Example 1
http://localhost:3000/ with get redirected to http://localhost:3000/login?redirectTo=/
Will display Login page and on login will show the Dashboard on http://localhost:3000/ 

#### Example 2
http://localhost:3000/ will have 2 views for Answered and Unanswered Polls, we can toggle the view on clicking. Dashboard also containes a nav bar to toggle through different routes and LOGOUT.

#### Example 3
http://localhost:3000/leaderboard will show the leaderboard.
Scores are calculated by summing up the created and answered polls of the user.

#### Example 4
http://localhost:3000/add to add new poll
User is shown a success message that Poll has been added successfully and on click of Link the user can check the newly added poll.

#### Example 5
http://localhost:3000/questions/vthrdm985a262al8qx3do to check poll details and answer the poll
User gets redirected to dashboard once the poll is answered

DEFAULT:
By default ```zoshikanlu``` will show in the login page.

