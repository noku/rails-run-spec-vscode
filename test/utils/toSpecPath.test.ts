import * as assert from 'assert';

import toSpecPath from '../../src/utils/toSpecPath';

suite("toSpecPath", () => {
    test("Converting shallow path", () => {
        assert.equal(
            'spec/controllers/test_controller_spec.rb',
            toSpecPath('app/controllers/test_controller.rb', "spec")
        );
    });

    test("Converting deep path", () => {
        assert.equal(
            'spec/controllers/namespaces/admin/test_controller_spec.rb',
            toSpecPath('app/controllers/namespaces/admin/test_controller.rb', "spec")
        );
    });

    test("Converting spec path should be no-op", () => {
        assert.equal(
            'spec/controllers/namespaces/admin/test_controller_spec.rb',
            toSpecPath('spec/controllers/namespaces/admin/test_controller_spec.rb', "spec")
        );
    })
});
