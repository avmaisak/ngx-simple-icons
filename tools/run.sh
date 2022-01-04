echo 'start cleaning...'
rm -rf ngx-simple-icons/src/lib/icons/*
rm -rf ngx-simple-icons/src/lib/types.ts
rm -rf ngx-simple-icons/src/lib/enum.ts

echo 'generating ...'
ts-node tools/generate.ts
echo 'generation complete!'
