echo 'start cleaning...'
rm -rf ngx-simple-icons/src/lib/icons/*
rm -rf ngx-simple-icons/src/lib/types.ts
rm -rf ngx-simple-icons/src/lib/enum.ts
rm -rf dist
rm -rf .angular

echo 'receiving icons...'

git clone https://github.com/simple-icons/simple-icons.git

echo 'generating ...'
node tools/generate.js
echo 'generation complete!'
