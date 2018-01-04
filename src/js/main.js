// dummy script
[1, 2, 3].map(n => n + 1);

const cubeFunc = (x) => {
  return x * x * x;
}

class CubeClass {
  constructor(x) {
    this.volume = x * x * x;
  }
}

export { cubeFunc, CubeClass }
