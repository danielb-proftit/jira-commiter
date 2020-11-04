const getCommitPrefix = (branchName) => {
    const anchorString = `CRM-`;
    const anchorStringIndex = branchName.indexOf(anchorString);
    const crmTicketId = branchName.substring(anchorStringIndex, branchName.indexOf('/', anchorStringIndex));
    const commitPrefix = `${crmTicketId} 🚧`;
    return commitPrefix;
}

module.exports = {
    getCommitPrefix
};