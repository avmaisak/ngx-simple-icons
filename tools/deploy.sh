rm -rf dist
rm -rf .angular
git clone https://github.com/simple-icons/simple-icons.git
bash tools/run.sh
rm -rf simple-icons
cd ngx-simple-icons
npm version patch --no-git-tag-version
cd ..
npm run build
cd dist/ngx-simple-icons
npm publish
cd ../..
