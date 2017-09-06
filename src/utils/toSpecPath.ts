import * as fs from 'fs';

export default function toSpecPath(filePath: string) {
    let [first, ...rest] = filePath.split('/');
    if (filePath.match(/_spec\.rb/) || first === 'spec' || filePath.match(/_test\.rb/) || first === 'test') {
        return filePath
    } else {
        let middle = rest.slice(0, rest.length - 1);
        let filename = rest[rest.length - 1];
        try {
            let spec_file = ['spec', ...middle, filename.replace('.rb', '_spec.rb')].join('/');
            fs.accessSync(spec_file, fs.constants.R_OK);
            return spec_file;
        } catch(err) {
            return ['test', ...middle, filename.replace('.rb', '_test.rb')].join('/');
        }
    }
}
