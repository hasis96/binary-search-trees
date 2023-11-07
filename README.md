# binary-search-trees - the odin project

- buildTree(): takes an array as a parameter and creates a binary tree of nodes, returns level-0 root node.
- insert(): creates a new node from parameter and inserts in the correct position.
- delete(): looks for the node === value, deletes the node. If node has children will replace the deleted node with
  the closest larger node.
- find(): searches for node, and returns the node.
- levelOrder(): returns an array of values in breadth-first order, from root -> root.children -> root.children.children -> so on.
- inOrder(): returns an array of values in depth-first order, from lowest -> greatest value node.
- preOrder(): returns an array of values in depth-first order, from root.left -> root -> root.right.
- postOrder(): returns an aray of values in depth-first order, from children -> children.parent -> children.parent.parent -> so on.
- height(): returns the height of the tree.
- depth(): returns the depth of a node in the tree.
- isBalanced(): checks depth of left/right, returns true if +- 1 difference, false if greater.
- rebalance(): if tree is unbalanced, uses inOrder() to get an array of values, then uses buildTree().
