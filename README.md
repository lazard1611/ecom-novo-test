### How to install project
1) ``` git clone https://github.com/lazard1611/ecom-novo-test.git . ```  
2) ``` git checkout -b yourBranchName ```  
3) ``` npm install ``` or ``` npm i ```

### Project terminal commands
Use shopify the dev command to run shopify dev server (without live reload)
``` shopify theme dev --live-reload=off -s lazarev-test-store.myshopify.com ```

Start gulp and webpack watcher (for building sass files to css and js files to minimized version):  
To build all css and js files in DEV mode use this command:   
``` npm run dev ```  
To build all css and js files in BUILD mode use this command:  
``` npm run build ```  
To watch for all changes in css and js files in DEV mode use this command:  
``` npm run watch ```  
To watch for all changes in css and js files in BUILD mode use this command:  
``` npm run watchBUILD ```

### How we run the project for develop
We use 3 console windows (for shopify cli, npm watcher and github merges).  
These two commands is enought for comfortable work:  
1) ``` shopify theme dev --live-reload=off -s lazarev-test-store.myshopify.com ``` - for watch scss and js files in DEV mode
2) ``` npm run watch ``` - for watch scss and js files in DEV mode
2) ``` npm run watchBUILD ``` - for watch scss and js files in BUILD mode

### What is new in structure?
## src folder
In this folder you can find ScSS style and JavaScript files.  
This is an entrypoint of all styles and scripts on project.  
It makes simmilar as Shopify structure.

## custom.scss
This is the main css file of all aplication.  
Here we write all classes or include some components that was used in all pages.

## variables.scss
In this file we save all variables (like color or layout).  
Import this file in every section file (he knows what to take, so don't be scary about performance).

### How to name your commits
To give for your comments some logic and structure you can use this prefixes and beggin your commit from them.
All prefixes:
- ```new:``` - if something new (default).
- ```fixes:``` - if fixes.
- ```conflicts:``` - if you only fix the conflicts.
