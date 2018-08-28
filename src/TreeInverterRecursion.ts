import TreeNode from './TreeNode';
export default class TreeInverterRecursion {
    public originalTree: TreeNode<number>;
    public invertedTree?: TreeNode<number> | null = null;

    constructor(tree: TreeNode<number>) {
        this.originalTree = tree;
        this.invertedTree = this.invert(tree);
    }

    private invert(tree: TreeNode<number> | null): TreeNode<number> | null {
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
