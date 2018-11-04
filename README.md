Tests git+https://github.com/johot/mobx-react.git

There are two branches, one with (master) and one without hot reloading.

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