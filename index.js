const { exec } = require('child_process');
exec('git rev-parse --abbrev-ref HEAD', (err, result, stderr) => {
    if (err) {
        // handle your error
    }

    console.log('result', result);
    console.log('type of result', typeof result);
});