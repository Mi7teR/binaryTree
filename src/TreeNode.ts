export default class TreeNode {
    public left: TreeNode | null = null;
    public right: TreeNode | null = null;
    public value: number = 0;

    constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.value = value;
        if (left && right) {
            this.left = left;
            this.right = right;
        }
    }
}
