import Stack from './Stack';
import TreeNode from './TreeNode';

export default class TreeInverterIterative {

    public originalTree: TreeNode;
    public invertedTree: TreeNode;

    constructor(tree: TreeNode) {
        this.originalTree = tree;
        this.invertedTree = new TreeNode(tree.value, tree.left, tree.right);
        this.inverseIterative();
    }

    private inverseIterative() {
        const stack = new Stack<TreeNode>();
        stack.push(this.invertedTree);
        while (!stack.isEmpty()) {
            const current = stack.pop();
            if (current !== null && current !== undefined) {
                if (current.right !== null && current.left !== null) {
                    const left: TreeNode = current.right;
                    const right: TreeNode = current.left;
                    current.left = new TreeNode(left.value, left.left, left.right);
                    current.right = new TreeNode(right.value, right.left, right.right);
                    stack.push(current.left);
                    stack.push(current.right);
                }
            }
        }
    }
}
