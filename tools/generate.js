const fs = require("fs-extra");
const lodash = require("lodash");

const CHARSET = 'utf-8';
const SOURCE_DIR = './simple-icons/icons';
const DESTINATION_DIR = 'ngx-simple-icons/src/lib/icons'
const ICON_TEMPLATE = fs.readFileSync('tools/icon.tmpl', CHARSET);

fs.readdir(SOURCE_DIR, (err, files) => {

  fs.appendFileSync(
    `${DESTINATION_DIR}/../types.ts`,
    'export type IconName = '
  );

  fs.appendFileSync(
    `${DESTINATION_DIR}/../enum.ts`,
    'export enum IconNameEnum {\r\n'
  );

  if (!files) {
    console.error('NO files presented.');
    return;
  }


  files.forEach((file, index) => {
    const iconContent = fs.readFileSync(`${SOURCE_DIR}/${file}`, CHARSET);
    const iconFileName = file;
    let iconName = iconFileName.replace('.svg', '').trim();

    if (!isNaN(+iconName[0])) {
      iconName = `icon_${iconName}`;
    }

    let output = ICON_TEMPLATE
      .replace(/__ICON_NAME__/g, iconFileName)
      .replace(/__EXPORT_NAME__/g, iconName)
      .replace(/__PAYLOAD__/, iconContent);

    fs.writeFileSync(`${DESTINATION_DIR}/${iconName}.ts`, output.trim(), CHARSET);

    fs.appendFileSync(
      `${DESTINATION_DIR}/index.ts`,
      `export { ${iconName} } from './${iconName}';\n`
    );

    fs.appendFileSync(
      `${DESTINATION_DIR}/all.ts`,
      `import { ${iconName} } from './${iconName}';\n`
    );

    fs.appendFileSync(
      `${DESTINATION_DIR}/../types.ts`,
      `'${iconName}' ${ index === files.length - 1 ? ';'  : '|\r\n' }`,
    );

    fs.appendFileSync(
      `${DESTINATION_DIR}/../enum.ts`,
      `  ${iconName} = '${iconName}'${ index === files.length - 1 ? ',\r\n}' : ',\r\n' }`,
    );
  })
});
