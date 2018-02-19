## Trek Weather

Going out of town? Planning an exotic trip? Log in to your Weather Trek account and find a dashboard of your saved searches or new search for weather history patterns <br>

[Link to site](https://immense-bastion-29246.herokuapp.com/) <br>
Sign in email: testemail@gmail.com <br>
Password: Test1234 <br><br>

**Status:** <br>
* Running via web <br>
* Mobile Responsive <br><br>

**Features:** <br>
* User Authentication via Passport <br>
* Search for weather data on a specific city/state at a certain date <br>
* Save searches or delete searches <br>
* Quick link to relevant trip planner resources <br><br>

**Technologies:** <br>
* MVC architecture <br>
* Bootstrap <br>
* Node.js & Express.js <br>
* Handlebars.js <br>
* MySQL & Sequelize <br>
* Passport user auth <br>
* NPM: axios, bcrypt-nodejs, body-parser, dotenv, express, express-handlebars, express-session, moment, mysql, passport, passport-local, path, sequelize <br><br>

**Future Deployment:** <br>
* A search field that allows a range of dates <br>
* Prevent duplicate searches populating in search history <br>
* Better satelite image <br> 
* Passport reset and email verification <br><br>

**MY CONTRIBUTION:** <br>
Front End: 
 * Sole front end developer. Made final team decisions on layout and styles <br>

Back End:
* Get/Post routes: <br>
  * controllers/tripController.js: router.get("/results" ... ), router.post("/api/newSearch" ... ), router.delete("/results/delete/:id" ... ) <br>
  * views/partials/dashboard.js: AJAX post, AJAX delete
* [Web API Wunderground](https://www.wunderground.com/weather/api/d/docs?d=data/history) <br>
* Axios <br>
* Handlebars <br>


