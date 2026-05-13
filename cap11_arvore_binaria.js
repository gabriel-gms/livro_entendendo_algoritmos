/*
    Árvores binárias
*/

function node(data){
    data = data;
    let left = null;
    let right = null;
    return { data, left, right };
}

function binaryTree(data=null, node=null){
    if(node){
        let root = node
        return { root };
    }
    else if(data){
        node = node(data);
        let root = node;
        return { root };
    }
    else {
        let root = null;
        return { root };
    }
}

let tree = binaryTree();
let tree.root.left = node(1);
let tree.root.right = node(2);

console.log(tree);
console.log(tree.root.left);
console.log(tree.root.right);