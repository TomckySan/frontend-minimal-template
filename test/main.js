import test from 'ava';
import main from '../src/js/main';

test('cube', t => {
  t.is(main.cube(3), 27);
  t.is(main.cube(4), 64);
});
