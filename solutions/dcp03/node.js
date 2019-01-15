class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  serialize(root) {
    const serialized = "tree";
    return serialized;
  }

  deserialize(str) {
    return str;
  }
}

module.exports = Node;
