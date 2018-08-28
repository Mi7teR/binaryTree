export default class TreeNode<T> {
    public left: TreeNode<T> | null = null;
    public right: TreeNode<T> | null = null;
    public value: T;

    constructor(value: T) {
        this.value = value;
    }

    public addLeft(left: TreeNode<T> | null): TreeNode<T> {
        this.left = left;
        return this;
    }

    public addRight(right: TreeNode<T> | null): TreeNode<T> {
        this.right = right;
        return this;
    }
}
