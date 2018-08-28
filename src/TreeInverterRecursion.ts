import TreeNode from './TreeNode';
export default class TreeInverterRecursion<T> {
    public originalTree: TreeNode<T>;
    public invertedTree?: TreeNode<T> | null = null;

    constructor(tree: TreeNode<T>) {
        this.originalTree = tree;
        this.invertedTree = this.invert(tree);
    }

    private invert(tree: TreeNode<T> | null): TreeNode<T> | null {
        if (tree) {
            const left = tree.left;
            const right = tree.right;
            if (tree.left && tree.right) {
                return new TreeNode(tree.value).addLeft(this.invert(right)).addRight(this.invert(left));
            } else {
                return tree;
            }
        }
        return null;
    }
}
