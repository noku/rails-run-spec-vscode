export default function toSpecPath(filePath: string) {
    let [first, ...rest] = filePath.split('/');
    let middle = rest.slice(0, rest.length - 1);
    let filename = rest[rest.length - 1];

    if (filePath.match(/_spec\.rb/) || first === 'spec') {
        return filePath
    } else if (first !== 'app') {
        return ['spec', first, ...middle, filename.replace('.rb', '_spec.rb')].join('/');
    } else {
        return ['spec', ...middle, filename.replace('.rb', '_spec.rb')].join('/');
    }
}
