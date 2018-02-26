import * as assert from 'assert';

import toSpecPath from '../../src/utils/toSpecPath';

suite("toSpecPath", () => {
    test("Converting shallow path", () => {
        assert.equal(
            'spec/controllers/test_controller_spec.rb',
            toSpecPath('app/controllers/test_controller.rb')
        );
    });

    test("Converting deep path", () => {
        assert.equal(
            'spec/controllers/namespaces/admin/test_controller_spec.rb',
            toSpecPath('app/controllers/namespaces/admin/test_controller.rb')
        );
    });

    test("Converting spec path should be no-op", () => {
        assert.equal(
            'spec/controllers/namespaces/admin/test_controller_spec.rb',
            toSpecPath('spec/controllers/namespaces/admin/test_controller_spec.rb')
        );
    })
    suite("when current file is not inside 'app' folder", () => {
        test("it should preserve the whole path", () => {
            assert.equal(
                'spec/lib/utils/custom_calculator_spec.rb',
                toSpecPath('lib/utils/custom_calculator.rb')
            );
        })
    });
});
