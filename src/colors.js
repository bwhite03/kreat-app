const red = '\x1b[31m';
const green = '\x1b[32m';
const reset = '\x1b[0m';

export const success = (output) => {
  console.log(green, output, reset);
};

export const failure = (output) => {
  console.log(red, output, reset);
};
