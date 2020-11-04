const { getRandomEmoji } = require('./random-emoji');

const getCommitPrefix = (branchName) => {
    const anchorString = `CRM-`;
    const anchorStringIndex = branchName.indexOf(anchorString);
    const crmTicketId = branchName.substring(anchorStringIndex, branchName.indexOf('/', anchorStringIndex));
    const randomEmoji = getRandomEmoji();
    const commitPrefix = `${crmTicketId} ${randomEmoji}`;
    return commitPrefix;
}

module.exports = {
    getCommitPrefix
};