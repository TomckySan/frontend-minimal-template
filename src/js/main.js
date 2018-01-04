// dummy script
[1, 2, 3].map(n => n + 1);

function cubeFunc(x) {
  return x * x * x;
}

class CubeClass {
  constructor(x) {
    this.volume = x * x * x;
  }
}

export { cubeFunc, CubeClass }
