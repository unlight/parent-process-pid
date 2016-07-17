# parent-process-pid
Gets parent process id (PPID)

## API
```ts
parentProcessPid(childPid: number): Promise<number>
```

## EXAMPLE
```js
const getPpid = require('parent-process-pid');
getPpid(2107).then(ppid => console.log(ppid));
```
