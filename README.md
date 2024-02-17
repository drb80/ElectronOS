# ElectronOS
Using node.js to retrieve OS-specific data in Electron
```
npm install
npm start
```
should get you going. To start from scratch:
```
npm init
npm install --save-dev electron
npm install --save-dev @electron-forge/cli
# make sure systeminformation is also part of your dependencies in package.json
npm install --save-dev systeminformation
npx electron-forge import
npm start
```
To make a standalone, native app do the following.
```
npm run make
```
