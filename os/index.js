const os = require('os');

console.log('version sistema'os.version()); // muestra nuestra version del kernel
console.log ('arquitectura'os.arch()); // se obtiene la arquitectura (x64 o x86()x32))
console.log('da informacion acerca de los cpus'os.cpus()); // da informacion acerca de los cpus
console.log('memoria libre'os.freemem()); // memoria libre de megas
console.log(os.homedir()); // carpeta del usuario actual
console.log(os.hostname()); // mi direccion ip o mi hostname (local)
console.log(os.platform()); //
console.log(os.version());

