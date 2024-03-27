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

// -100


// 100
// 95
// 102

// 100 - 95 = 5
// |95 - 100| = 5

// 102 - 100 = 2
// |100 - 102| = 2

export function method(tree: BST, target: number): number {
    let closestValue = tree.value;
    let closestDiff = Math.abs(tree.value - target)

    let currentNode: BST | null = tree;

    while (currentNode) {
        const newDiff = Math.abs(currentNode.value - target)
        if (newDiff < closestDiff) {
            closestDiff = newDiff
            closestValue = currentNode.value
        }

        if (target > currentNode.value) {
            currentNode = currentNode.right
        } else if (target < currentNode.value) {
            currentNode = currentNode.left
        } else {
            return closestValue
        }
    }
    return closestValue
}

export function withRecustion(tree: BST, target: number): number {
    return walk(tree, tree.value, target)
}

const walk = (node: BST | null, closestValue: number, target: number): number => {
    if (!node) {
        return closestValue
    }

    if (Math.abs(target - node.value) < Math.abs(target - closestValue)) {
        closestValue = node.value
    }

    if (target > node.value) {
        node = node.right
    } else if (target < node.value) {
        node = node.left
    } else {
        return closestValue;
    }


    return walk(node, closestValue, target)
}
