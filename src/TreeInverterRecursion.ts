import TreeNode from './TreeNode';
export default class TreeInverterRecursion {
    public originalTree: TreeNode;
    public invertedTree?: TreeNode | null = null;

    constructor(tree: TreeNode) {
        this.originalTree = tree;
        this.invertedTree = this.invert(tree);
    }

    private invert(tree: TreeNode | null): TreeNode | undefined {
        if (tree) {
            const left = tree.left;
            const right = tree.right;
            if (tree.left !== null && tree.right !== null) {
                return new TreeNode(tree.value, this.invert(right), this.invert(left));
            } else {
                return tree;
            }
        }
        return;
    }
}
