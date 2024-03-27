import {describe, expect, test} from 'vitest'
import {BST, method} from "./";

interface TreeNodeDTO {
    id: string;
    left: string | null;
    right: string | null;
    value: number;
}

interface TreeDTO {
    nodes: TreeNodeDTO[];
    root: string;
}

const TREE: TreeDTO = {
    "nodes": [
        {"id": "1", "left": "2", "right": "3", "value": 1},
        {"id": "2", "left": "4", "right": "5", "value": 2},
        {"id": "3", "left": "6", "right": "7", "value": 3},
        {"id": "4", "left": "8", "right": "9", "value": 4},
        {"id": "5", "left": "10", "right": null, "value": 5},
        {"id": "6", "left": null, "right": null, "value": 6},
        {"id": "7", "left": null, "right": null, "value": 7},
        {"id": "8", "left": null, "right": null, "value": 8},
        {"id": "9", "left": null, "right": null, "value": 9},
        {"id": "10", "left": null, "right": null, "value": 10}
    ],
    "root": "1"
}

export function generateTree(treeObject: TreeDTO): BST {
    const nodeMap: { [key: string]: BST } = {};

    // Create BST nodes and map them by id
    for (const node of treeObject.nodes) {
        nodeMap[node.id] = new BST(node.value);
    }

    // Set left and right properties for each BST node
    for (const node of treeObject.nodes) {
        if (node.left !== null) {
            nodeMap[node.id].left = nodeMap[node.left];
        }
        if (node.right !== null) {
            nodeMap[node.id].right = nodeMap[node.right];
        }
    }

    // Return the root of the BST
    return nodeMap[treeObject.root];
}
const MOCK_TREE = generateTree(TREE)

describe('branch sum', () => {

    test('should equal', () => {
        expect(method(MOCK_TREE)).toStrictEqual([ 15, 16, 18, 10, 11 ])
    })
})
