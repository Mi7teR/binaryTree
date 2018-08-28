export default class Stack<T> {
    private store: T[] = [];
    public push(val: T) {
        this.store.push(val);
    }
    public pop(): T | undefined {
        return this.store.pop();
    }
    public isEmpty(): boolean {
        return this.store.length === 0;
    }
}
