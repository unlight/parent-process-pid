# parent-process-pid
Gets parent process pid (PPID)

## USAGE
const getPpid = require('parent-process-pid');
getPpid(2107).then(ppid => console.log(ppid));
