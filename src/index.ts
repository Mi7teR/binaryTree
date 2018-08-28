import TreeGenerator from './TreeGenerator';
import TreeInverterRecursion from './TreeInverterRecursion';
import TreeInverterIterative from './TreeInvertorIterative';
const tree = new TreeGenerator(20).tree;
window.console.log(tree);
window.console.log(new TreeInverterRecursion(tree));
window.console.log(new TreeInverterIterative(tree));
