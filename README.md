# VmAssessment
I
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Problems to solve

1. As you can see in `cart.component.html` a list of countries was expected to be listed. But it's not working. Find a way to list the approriate list of countries
2. Once 1. is resolved you will notice that rows are clickable. Once you click on a row it will be added to the json array which is depicted at the accordion at the top. If you click it again it will disappear (toggling functionality ). We need to put a background color on the selected rows (just put a color of your choice). Can you do that?
3. There is a problem with the last row of each page. If you click twice (e.g Portugal row) it will be added twice to the array. Can you find a solution?   
4. You will notice that each column is sortable (by clicking on it). We need to add a down or up arrow depending on the sorting direction. Can you do that

## Expectation
We expect the application to look like the picture in `src/assets/expected.png`. (Keep in mind that triangles for sorting are missing from this picture, so we leave it up to you to decide for it's look & feel).


# Solutions

#1:
async pipe is missed since we are using a observable data.

#2:
Added hghlight class to highlighting the selected row.

#3
Added a new method for toggle operation ( Actual issue is there is no no of item parameter in slice method ).
Using single method of select/deselect, based on selected items is present or not, we can identify the select/deselect trigger.

#4
Added up/down to show sortable actions.