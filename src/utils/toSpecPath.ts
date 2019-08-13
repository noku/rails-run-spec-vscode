export default function toSpecPath(filePath: string, pattern: string) {
    let middle = filePath.split('/');
    let first  = middle.shift()
    let last   = middle.pop()

    if (last.indexOf(`_${pattern}.rb`) > -1 || first === pattern) {
        return filePath
    } else {
        let dirPath = first === 'app' ? [pattern, ...middle] : [pattern, first, ...middle];
        return [...dirPath, last.replace('.rb', `_${pattern}.rb`)].join('/');
    }
}
