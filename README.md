# eth_barebones
Skelton web3 contract

Make sure you have node, git installed
1. Make a Repo on github
2. git clone the repo into a folder
3. run: npm install -g express-generator@4
4. Create the app: express /path/to/folder_in_2
5. cd to folder: npm install

6. Add the following to create a listener on a port

```javascript
var http = require('http').createServer(app);
app.set('port', (process.env.PORT || 5000));

// Init app
http.listen(app.get('port'), function(){
    console.log('Node app is running on port: ', app.get('port'));
});
```
6. Start Server: node app.js to run server/client
7. Install ejs: npm install ejs
8. Set `ejs: app.set('view engine', 'ejs');` (replace jade with ejs)
9. Create a folder: views/pages
10. Modify index.js to: `res.render('pages/index');` NOTE: new express splits app.js and index.js, i am guessing index.js is used for routes 
11. Install web3.js: `npm install web3`
12. Create a file in public/scripts named homePage.js and copy the file here into it
13. Create a folder in views called partials and put your headscripts in there
14. link to that file in the js from 12 and link the the angular js file `<script src="/javascripts/homePage.js"></script>`
15. make sure angular js is linked
16. Start building

To Duplicate this repo into a new github repo: https://help.github.com/articles/duplicating-a-repository/
1. create a bare clone: `git clone --bare git@github.com:xSam42/express_barebones.git`
2. `cd eth_barebones.git`
3. `git push --mirror git@github.com:xSam42/new_repo.git`
4. `cd ..` (change dir to parent of old repo)
5. `rm -rf old-repo.git`

