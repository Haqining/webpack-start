import "./styles/index.css";
import "./styles/index.less";
import "./styles/index.scss";

import testImageSmall from "./assets/images/test-image-small.jpg";
import testImageLarge from "./assets/images/test-image-large.jpg";

console.log(testImageSmall);
console.log(testImageLarge);

const doSomething = value => {
  // do something
  return value;
};

const switchMap = new Map([
  [1, "switch-1"],
  [2, "switch-2"]
]);

console.log(switchMap);
