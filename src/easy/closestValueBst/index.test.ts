import {describe, expect, test} from 'vitest'
import {BST, method, withRecustion} from "./";

// Create BST objects manually
const node100 = new BST(100);
const node502 = new BST(502);
const node55000 = new BST(55000);
const node1001 = new BST(1001);
const node4500 = new BST(4500);
const node204 = new BST(204);
const node205 = new BST(205);
const node207 = new BST(207);
const node208 = new BST(208);
const node206 = new BST(206);
const node203 = new BST(203);
const node5 = new BST(5);
const node15 = new BST(15);
const node22 = new BST(22);
const node57 = new BST(57);
const node60 = new BST(60);
const node5_2 = new BST(5);
const node2 = new BST(2);
const node3 = new BST(3);
const node1 = new BST(1);
const node1_2 = new BST(1);
const node1_3 = new BST(1);
const node1_4 = new BST(1);
const node1_5 = new BST(1);
const node_51 = new BST(-51);
const node_403 = new BST(-403);

// Build the tree structure manually
node100.left = node5;
node100.right = node502;
node502.left = node204;
node502.right = node55000;
node55000.left = node1001;
node1001.right = node4500;
node204.left = node203;
node204.right = node205;
node205.right = node207;
node207.left = node206;
node207.right = node208;
node5.left = node2;
node5.right = node15;
node15.left = node5_2;
node15.right = node22;
node22.right = node57;
node57.right = node60;
node2.left = node1;
node2.right = node3;
node1.left = node_51;
node1.right = node1_2;
node1_2.right = node1_3;
node1_3.right = node1_4;
node1_4.right = node1_5;
node_51.left = node_403;

// Root of the BST
const root = node100;

describe('closestValueBst', () => {

    test('should found with loop', () => {
        expect(method(root, 209)).toBe(208)
    })
    test('should found with recursion', () => {
        expect(withRecustion(root, 209)).toBe(208)
    })

    // test('should not found', () => {
    //     expect(method([4, 2, 1, 3, 5, 9, 10, 20])).not.toBe(4)
    // })
})
