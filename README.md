# Testing the Request Network

Request Network

Request JS: https://github.com/RequestNetwork/requestNetwork.js
Request WhitePaper: 

Steps to Recreate:
1. `npm install @requestnetwork/request-network.js --save`
2.  npm install babel-cli
3. npm i babel-preset-node6
4. ./node_modules/babel-cli/bin/babel-node.js --presets node6 ./app.js 
5. Change `web3-Single.js` file at `./node_modules/@requestnetwork/request-network.js/dist/src/servicesExternal/web3-Single.js` to `web3-single.js` (lowercase s)






To Duplicate this repo into a new github repo: https://help.github.com/articles/duplicating-a-repository/
1. create a bare clone: `git clone --bare git@github.com:xSam42/requ_testing.git`
2. `cd eth_barebones.git`
3. `git push --mirror git@github.com:xSam42/new_repo.git`
4. `cd ..` (change dir to parent of old repo)
5. `rm -rf old-repo.git`

