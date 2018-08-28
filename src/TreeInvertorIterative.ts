import Stack from './Stack';
import TreeNode from './TreeNode';

export default class TreeInverterIterative<T> {

    public originalTree: TreeNode<T>;
    public invertedTree: TreeNode<T>;

    constructor(tree: TreeNode<T>) {
        this.originalTree = tree;
        this.invertedTree = new TreeNode(tree.value);
        this.invertedTree.left = tree.left;
        this.invertedTree.right = tree.right;
        this.inverseIterative();
    }

    private inverseIterative() {
        const stack = new Stack<TreeNode<T>>();
        stack.push(this.invertedTree);
        while (!stack.isEmpty()) {
            const current = stack.pop();
            if (current !== null && current !== undefined) {
                if (current.right !== null && current.left !== null) {
                    const left: TreeNode<T> = current.right;
                    const right: TreeNode<T> = current.left;
                    current.left = new TreeNode(left.value).addLeft(left.left).addRight(left.right);
                    current.right = new TreeNode(right.value).addLeft(right.left).addRight(right.right);
                    stack.push(current.left);
                    stack.push(current.right);
                }
            }
        }
    }
}
