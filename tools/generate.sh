rm -rf package-lock.json
rm -rf node_modules

ncu -u && npm i
npm audit fix
rm -rf dist
rm -rf .angular
git clone https://github.com/simple-icons/simple-icons.git
bash tools/run.sh
npm run build
