# Staff_Administration_Client
Web application developed with the framework ( Angular )
# Environment Preparation
Requirements:
* node js: https://nodejs.org/en
* npm
* SQL
Install nodejs in the most current lts version, this performs the automatic installation of npm
# Validation of installed packages within the terminal or CMD if you use Windows
To validate nodejs:

    node -v
    
To validate npm:

    npm -v

now install the Angular command line interface (cli):

    npm install -g @angular/cli

These installations are carried out globally throughout your system, to allow future projects to be developed.
# Creating a new project (Front end)
Create a directory where your entire project or application is hosted

Enter that directory with the help of the terminal to write the following command:

    ng new project-name

Follow the instructions to configure the options of your project, you will read the following messages:

* Do you want to add Angular Routing?
  * to which you will answer yes with 'y'

It is also recommended that you select the CSS option when it asks you on the screen.
With these steps, all you have to do is wait for the necessary dependencies and modules to be installed. At the installation terminal, the generic Front End project will be created.

# initialize the project to view it in the browser

Inside the terminal, navigate inside your front end project folder and type each of the following commands:

command to update and install all the necessary modules and dependencies of the project:

    npm install

command to load the project in a browser:

    ng serve

command to load and open the project in a browser automatically:

    ng serve -o

This is the basic configuration for creating a new project in Angular.
