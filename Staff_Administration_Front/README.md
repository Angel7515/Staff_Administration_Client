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

Now go to the app-routing.modules.ts file, modify it so that it contains the routes for each of the components you have and also add a path for when the user misspells a route or it does not match your components.

## Client-Server Connection

The first thing to create after the commit of data management by endpoints is to create a file to declare where the API-Rest path will be found.

create a new folder inside ` src/ `, the folder will be called environment, we will also create a file inside this new folder, the result will be the following ` src/enviroment/enviroment.ts ` where we will place the code and declare the path of the api or our back-end server, check how it is currently configured in this commit.

After creating this file where you will indicate from which port it will listen and connect to the server, modify the file within the services folder ` src/services/user.service.ts ` (in the case of this template), in this What file will be created is the declaration of the route that the client will always use to enter the server and be able to use the operations (get, post, update, delete), review the code.

At this point we will need the route from environment to chain it with the access path to the routes that we have destined, for example if you performed all the back operations with the route ` localhost:3000/route/ ` then the route is the one used in this second variable, in the case of this template ` /users/ `.

In order to use http you must manually configure the import from the ` app.modules.ts ` file where the http import is declared and you must also declare it within the ` imports:[] ` sector.

## get operation

To start with the configuration and be able to use this operation, add the get function in the ` user.service.ts ` file, remember we are dealing with the template, in your project it may be a different name of the service.

Add the function where you use the get phrase, in this example the get will be used for all the records in a table, it is the way to do a ` SELECT * FROM table `, where we will use the variables defined previously and this in turn will return us an array with all the records in the Database.

The next step is to modify the ` interfaces/user.ts ` file which should now contain each of the attributes of the table to use.

Then modify the list-users file where all the attributes that will be imported into the table will be ordered.

To complete the coding of the get operation, configure a private variable in the ` constructor (private _userService: UserService), in addition to initializing the component as shown in the code so that when the component is loaded it automatically loads the getlistUsers function.

## delete operation

To configure the Delete operation, it is simpler since we only have to obtain the record id from when we press the Delete button, this is declared from the html, where we will invoke a function in the ` list-user.component file. ts ` here that `id` is received and processed within the ` deleteUser ` function which uses ` userService ` to access the server's delete operation, and thus be able to delete the record marked by its own identifier.

It is the only thing to do, since the routes and connection to the server from the client have already been configured for the get and those routes are universal because they are the Root of the server.

## Note

You will find toastr code, ignore it, you can delete it as it is not necessary for the functionality of the operations, Toastr contains dependencies for popup notification windows that I use by preference, but it is not necessary to use that library you can create your own popups as a component .

## operation (post)

Returning to the configuration of each Validator for each of the data entry fields, we will finish coding the ` addUser ` function where all the attributes of the table to be affected are declared, so once we have this object of type user The saveUser service will be used, which will receive the User object in order to send the necessary information to the endpoint.

Remember that in the file ` add-edit.component.ts ` the data is extracted from the html file or form, so this data is sent as an object and reaches the service ` user.service.ts `, which communicates with the url of the api and the URL to access the routes, in addition to having the extra parameter which is the object (user).

## Operation (update)

Within this operation, two verbs are used within the server (get and put), 'create two more functions' which will connect to the server to do get and bring a single element which will be updated and the put operation that will place the new values within the database, the difference is that put sends, like post, a user object with all the data, while get only needs to send the route with the id.

check the codes inside the commit in the file ` user.service.ts `

now check the file add-edit.component.html you will find that the name of the form has now been modified by a variable ` operation `, this will depend directly on the file ` add-edit-component.ts ` where two variables will be declared, one to obtain an id and another to set the name of the form and reuse it for the update (put) and create (post) operations, consider adding to the constructor of this ts file, the variables to bring the service functions and we will add:

*   router: to return to the main component with the use of navigate

*   ActivateRoute: to validate what type of operation we can use in the same form, it obtains an id, if this is 0, it means that we press the add button, if the id has a value different from 0 ` !=0 ` then it is an edit or update.

This template is an example of good practices and clean code, better organization and at the same time will facilitate the maintenance, monitoring and scalability of your application with Angular, Node and MySQL, of course you can use another database manager and the The difference is in how to connect and process the data, but the endpoints are the same in some respects.