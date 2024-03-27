export class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


export function method(tree: BST): number[] {
    const result: number[] = []
    walk(tree, 0, result)
    return result
}


const walk = (node: BST | null, sum: number, result: number[]): void => {
    if (!node) {
        return
    }

    let newSum = sum + node.value
    if (!node.left && !node.right) {
        result.push(newSum)
        return;
    }


    walk(node.left, newSum, result)
    walk(node.right, newSum, result)
}
