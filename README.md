# Let Them Cook!

### “Let Them Cook!” is a website created by Simon Miller and Jose Fuentes Jr. that helps solve the problem related to knowing what is inside the foods consumers purchase. Nutrition labels can be overwhelming and often confusing for the consumer to read. This website will help simplify the process of knowing what exactly is in food that can be hazardous and/or unhealthy to consumers. Namely, allergens. The wesbite also has a coffee slideshow and a contact page.

#### Our target browser is Google Chrome, Microsoft Edge, and Brave. 

# DEVELOPER MANUAL

### This application uses NodeJS, Nodemon, and Express

### To run the server you must type "npm start" into the terminal. After the terminal notifies you that the app is running, open a browser and type "http://localhost:4000/index.html" to access the application.

### There are several console logs available for debugging, viewable in the browser.

### There are two API GETs in this application.

##### Located on the home page, Open Food Facts supplies the food information. Here is a link to their website: https://wiki.openfoodfacts.org/Documentation

##### Located on the showcase page, Coffee API supplies the photos of coffee. Here is a link to their website: https://coffee.alexflipnote.dev/

### There is one known bug, in this application, for refreshing the table
### In the createOrDestroy function we are making sure that we delete the old information and put in the new, even if that means to just taking off one element.  The process for adding/removing, or refreshing, will cause the user to press submit twice. We also made the rows a seperate table from the original headers due to every single time we tried to refresh the old infromation it would delete the entire table. Then there would be a known error that the code is unable to read null since it no longer exist.