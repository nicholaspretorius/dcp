// Date: 15/01/2019
// Start: 20:10 End: Infinity
// Problem: Given the root of a binary tree, implement serialize(root), which serializes the tree into a string
// Implement deserialize(s) which deserializes the string back into a binary tree.
// Example:

// class Node:

//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right

// Test

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val = 'left.left'

const Node = require("./node");

const root = new Node(1, 2, 3);

console.log(root);
