# StaffAdministrationFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Project structuring:

Create the following folders inside src:

*   components
*   interfaces
*   services

components: Within this directory the components or views necessary for your app will be stored.
interfaces: They are similar to classes in Java, they show the structure of a given object. (optional)
services: Will contain the services that we will use in the app, such as connections, back-end requests, among many others.
shared: Inside this we can place the pop-up windows or progress bars that we will use in the views with each event (optional).

It is important that you follow the aforementioned structure in order to obtain a more organized application, with the aim of being able to maintain or add new functions to it more quickly.

## Editing main component (app-component)

To reflect your changes in the browser and see the final result of your current code, always remember the following:

1.- The .html file will always contain the entire structure of your system elements and labels (tables, paragraphs, titles, buttons, etc.)

2.- The .ts file will be where you mostly contain all the logic and flow of your data, information or events.

To start modifying the project and adapt it to your ideas, delete all the content of the app.component.html file, you can even replace it with a simple tag like:

    <h1>HELLO WORLD!!! </h1>
    

Remember that you must start your project on the development server so that you can view the changes in the browser and each change you make must be saved to be able to view it.

## CREATION OF COMPONENTS

To create new components, services, interfaces, you must go to the corresponding directory path and in the terminal enter the following command:

    ng generate component nameComponent
    ng generate service nameService
    ng generate interface nameInterface

Choose the command you need, depending on what you need to create.

The previous commands will create your component automatically, in which you will find different files, example:

ng generate component test

test.component.html: page structure (buttons, tables, titles, etc.)
test.component.ts: component logic and workflow.
test.component.css: style sheet for the html file

When we have a component we can export from its.ts file and import it where it is needed, in this case the app.component.html file, place each component you need in the main file as follows, this is like a puzzle:

`<component-name></component-name>`
`<component-name2></component-name2>`

## Routing - Navigation between components

The previous configuration provides the view of the first component to be displayed in the project, but if we want to navigate between several views or components we need to route the components of the entire app.

remove line 2 `<component-name2></component-name2>` from the app.component.html file since line 1 in this template is the navigation bar and it is not necessary to delete it, now add the following line of code `<router-outlet></router-outlet>` what this will do is generate the routing to the component you want to navigate.

Now go to the app-routing.modules.ts file, modify it so that it contains the routes for each of the components you have and also add a path for when the user misspells a route or it does not match your components