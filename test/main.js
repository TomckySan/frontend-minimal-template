import test from 'ava';
import 'babel-register';
import { cubeFunc, CubeClass } from '../src/js/main';

test('cubeFunc Test', t => {
  t.is(cubeFunc(3), 27);
  t.is(cubeFunc(4), 64);
});

test('CubeClass Test.', t => {
  const cubeA = new CubeClass(3);
  t.is(cubeA.volume, 27);
  const cubeB = new CubeClass(4);
  t.is(cubeB.volume, 64);
});
