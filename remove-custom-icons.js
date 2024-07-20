// @ts-check
const fs = require('fs');

const main = () => {
    const file = fs.readFileSync('./launcher_backup_main.bak');
    const content = file.toString();

    const config = JSON.parse(content);
    config.KeyForAllAppsEditInfo = '[]';

    const KeyForAllDesktopShortcuts = JSON.parse(config.KeyForAllDesktopShortcuts);

    KeyForAllDesktopShortcuts.forEach(sh => {
        if(sh.editInfoToCopy) {
            delete sh.editInfoToCopy;
        }
    });

    config.KeyForAllDesktopShortcuts = JSON.stringify(KeyForAllDesktopShortcuts).replace(/=/g, '\\u003d');

    fs.writeFileSync('./launcher_backup_main.NO-CUSTOM-ICONS.bak', JSON.stringify(config));

    return config;
}

main();