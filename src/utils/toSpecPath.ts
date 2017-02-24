export default function toSpecPath(filePath: string) {
    let [first, ...rest] = filePath.split('/');
    let middle = rest.slice(0, rest.length - 1);
    let last = rest[rest.length - 1];
    return ['spec', ...middle , last.replace('.rb', '_spec.rb')].join('/');
}
