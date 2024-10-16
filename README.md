# refers to the parent folder

## refers to a folder

### refers to a file

# src

## assets

In this folder I have put the images that I needed in my project

## components

In this folder I have put all components that are not considered as pages, to organise the components

### CarChart.jsx

This is a component of a chart, I created it to be reuseable,and I called it in CardPopup.jsx

### CardPopup.jsx

This component is a popup shows up when a user clicks on a card to show them details of the trends of a car-level in a table and a chart, and you can close it by clicking on the close icon "X".

### CardContainer.jsx

This component is a container of cards,it takes a dynamic prop "filteredVehicles" that contains the cards based on the filter of the user, and shows the cards based on that filter, but if there is no card that matches the filter it shows this text "There is no car matched with your filter!".

### Footer.jsx

Empty footer

### Header.jsx

This component contains a website logo in the left when a use clicks on it they would navigate to the home page, and links of the pages in the middle, and the section on the right when you click on it, it takes you to your profile.

### HomePageBelowSection.jsx

In this component we have the filter logic "filter by brand","filter by model", "filter by year", so based on the filter of the user, we filter the cards and send only the cards that match the filter as a prop "filteredVehicles" to "CardsContainer" that shows that cards.

### MySelect.jsx

In this component we have a custom select "modern select that we can control and design like we want" it takes 3 props to be REUSEABLE "options","placeholder","onChange", and I called it 3 times in "HomePageBelowSection".

### Slider.jsx

In this component we have a slider that shows images dynamically, with a text in a "TypeWritterEffect".

## data

### cars.json

in this file I have a data of cars that I found with the test

### headerLinks.js

in this file I have links for routing to be dynamic links

### yearsData.js

in this file I have a data of years for the filtering

## pages

### HomePage.js

this is a page of home page that includes slider, and filtering and cards

### NotFound.js

this is the page that shows up to a user when they navigate to unexisting route (page), has a text of "page not found!" and a link to go back home page.

###### files inside src directory

### app.js

In this component we handle the routing

### index.css

In this component we have 3 lines of code that are important for tailwind to work

###### files outside src directory

### README.md

In this file we have the documentation of the project

### tailwing.config.js

In this file we have the configuration of TAILWIND and some colors to call them as they are the main colors in this project
