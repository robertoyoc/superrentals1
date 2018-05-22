import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | list-rentals-test.js', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:list-rentals-test.js');
    assert.ok(route);
  });
});
