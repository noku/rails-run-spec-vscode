import * as vscode from 'vscode';

export default function toSpecPath(filePath: string, pattern: string) {
    let [first, ...rest] = filePath.split('/');
    let specPath;
    if (filePath.indexOf(`_${pattern}.rb`) > -1 || first === pattern) {
        specPath = filePath
    } else {
        let middle = rest.slice(0, rest.length - 1);
        let filename = rest[rest.length - 1];
        specPath = [pattern, ...middle, filename.replace('.rb', `_${pattern}.rb`)].join('/');
    }

    const useForwardSlashes = vscode.workspace.getConfiguration("ruby").get("specUseForwardSlashesInPaths"); 
    return useForwardSlashes ? specPath.split('\\').join('/') : specPath ;
}
