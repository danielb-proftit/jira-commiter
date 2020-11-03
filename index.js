const { exec } = require('child_process');
const readline = require('readline');

exec('git rev-parse --abbrev-ref HEAD', async(err, branchName, stderr) => {
    if (err) {
        // handle your error
    }

    const anchorString = `CRM-`;
    const anchorStringIndex = branchName.indexOf(anchorString);
    const crmTicketId = branchName.substring(anchorStringIndex, branchName.indexOf('/', anchorStringIndex));
    const commitPrefix = `${crmTicketId} 🚧`;

    const commitMessage = await askQuestion("Your commit message:");
    const fullCommitMessage = `${commitPrefix}\t${commitMessage}`;
    console.log('fullCommitMessage', fullCommitMessage);
    // exec(`git commit -m "${fullCommitMessage}"`, (err, result, stderr) => {
    exec(`git commit -m "${fullCommitMessage}"`, (err, result, stderr) => {
       if (err){
           console.log('Error: ', err);
       }
       console.log('result', result);
    });
});

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}