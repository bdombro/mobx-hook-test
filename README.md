Tests fork git+https://github.com/johot/mobx-react.git for 16.7.0-alpha.0 and hook compatibility.

Known issue: Using observer with functions is throwing an error with React 16.7.0-alpha.0 

There are 3 branches:

* master -> observer test with hot reloading
* no-hot-reload -> observer test without hot reloading. This demonstrates that hot reload is not the cause of the issue.
* basic-hook-test -> same as no-hot-reload, except using state hooks instead of 
mobx or observer. This demonstrates that hooks are in fact working with the current build

To run,

```
# Build mobx-react fork
git clone https://github.com/johot/mobx-react.git
cd mobx-react
yarn install
yarn build
cd ../

# Build test app and install mobx-react fork
git clone https://github.com/bdombro/mobx-hook-test.git
cd mobx-hook-test
yarn install
rm -rf node_modules/mobx-react
mv ../mobx-react node_modules/
yarn serve
```