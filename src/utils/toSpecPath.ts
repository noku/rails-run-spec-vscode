export default function toSpecPath(filePath: string) {
    let [first, ...rest] = filePath.split('/');
    if (filePath.match(/_spec\.rb/) || first === 'spec') {
        return filePath
    } else {
        let middle = rest.slice(0, rest.length - 1);
        let filename = rest[rest.length - 1];
        return ['spec', ...middle, filename.replace('.rb', '_spec.rb')].join('/');
    }
}
