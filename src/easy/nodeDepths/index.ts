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


export function method(tree: BST): number {
    const result  = {bestDepth: 0}
    walk(tree, 0, result)
    return result.bestDepth
}


const walk = (node: BST | null, currentDepth: number, state: {bestDepth: number}): void => {
    if (!node) {
        return
    }

    currentDepth++
    if (!node.left && !node.right && currentDepth > state.bestDepth) {
        state.bestDepth = currentDepth
        return;
    }


    walk(node.left, currentDepth, state)
    walk(node.right, currentDepth, state)
}
