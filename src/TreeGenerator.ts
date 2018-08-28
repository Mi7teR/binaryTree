import TreeNode from './TreeNode';
export default class TreeGenerator {
    public static generateValue(): number {
        return Math.floor(Math.random() * Math.floor(1000));
    }
    public tree: TreeNode<number>;

    constructor(depth: number) {
        this.tree = this.createNewTree(depth);
    }

    private createNewTree(depth: number): TreeNode<number> {
        const left = depth > 0 ? this.createNewTree(depth - 1) : null;
        const right = depth > 0 ? this.createNewTree(depth - 1) : null;
        const value = TreeGenerator.generateValue();
        return new TreeNode(value).addLeft(left).addRight(right);
    }
}
