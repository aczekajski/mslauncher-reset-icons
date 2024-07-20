# Reset custom icons in Microsoft Launcher
This script will cause the procesed Microsoft Launcher settings to have the custom info about icons of apps reset. This will probably also reset custom names of the apps.

> WARNING! Be aware that in the process you will need to restore the backup of launcher, which might reset some fo your desktop widgets. They will be where they used to be but might require reinitializing them.

## Prerequisites
The instruction involves running NodeJS program (and having NodeJS installed), repacking ZIP archive and replacing files. In other words, requires some basic IT skills.
(feel free to contribute to make a website that will run this script in browser and make it user-friendly)

## How to use
1. In Microsoft Launcher settings, use "backup to cloud storage" function (local backup will not work!)
2. Go to OneDrive linked to the same Microsoft Account as you use in your launcher
3. Open folder named ArrowBackup and find the newest file. It will be named like `Arrow36backup1721484839203.zip` (the digits will be different)
4. Download that .zip file and unpack it. There will be folder named the same as .zip file and inside it, you will find a file named `launcher_backup_main.bak`
5. Place the .bak file right next to "remove-custom-icons.js" script that is besides this instruction.
6. In terminal, run `node remove-custom-icons.js`. As a result, file named `launcher_backup_main.NO-CUSTOM-ICONS.bak` will be created
7. Make a copy of the `Arrow36backup1721484839203` folder from point 4 in case something went wrong during backup restoration!
8. Go into the folder, remove the old `launcher_backup_main.bak` file, copy `launcher_backup_main.NO-CUSTOM-ICONS.bak` into there and rename it to `launcher_backup_main.bak`
9. Go up one folder and pack the `Arrow36backup1721484839203` folder into new `Arrow36backup1721484839203.zip` file.
10. Make sure that when you open the .zip file, inside it there's first only a folder named the same as .zip (for example `Arrow36backup1721484839203`) and inside that folder there's file named exactly `launcher_backup_main.bak`. The .bak file cannot be directly in the .zip!
11. Replace the .bak file in your OneDrive with the modified version you just created
12. In Microsoft Launcher settings, use "restore from cloud storage" function and choose the newest backup (you should be able to see that it was created just a short while ago, when you uploaded it to OneDrive, not when you backed it up at point 1)