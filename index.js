const { exec } = require('child_process');
const { askQuestion } = require('./ask-question');
const { getCommitPrefix } = require('./get-commit-prefix');
const { printError } = require('./print-error');

exec('git rev-parse --abbrev-ref HEAD', async(err, branchName, stderr) => {
    if (err) {
        printError(err);
    }
    const commitPrefix = getCommitPrefix(branchName);
    const commitMessage = await askQuestion("Your commit message:");

    const fullCommitMessage = `${commitPrefix}\t${commitMessage}`;
    exec(`git commit -m "${fullCommitMessage}"`, (err, result, stderr) => {
       if (err){
           printError(err);
       }
       // will print default git commit message (how many lines were inserted or deleted)
       console.log(result);
    });
});
