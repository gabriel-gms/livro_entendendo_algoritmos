/*
    Árvores binárias

    Código fonte é referencia de https://github.com/python-cafe/data_structures/blob/master/arvores/examples.py
    refatorado em javascript
*/

class Node {
    constructor(data){
        this.data = data
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(data=null, node=null){
        if(node){
            this.root = node;
        }
        else if(data){
            node = Node(data);
            this.root = node;
        }
        else {
            this.root = null;
        }
    }

    simetric_traversal(node=null){
        if(node === null){
            node = this.root
        }
        if(node.left){
            process.stdout.write('( ');
            this.simetric_traversal(node.left);
        }
        process.stdout.write(node.data+' ');
        if(node.right){
            this.simetric_traversal(node.right);
            process.stdout.write(' ) ');
        }
    }
}

function inorder_example_tree(){

    let tree = new BinaryTree();
    let n1 = new Node('a');
    let n2 = new Node('+');
    let n3 = new Node('*');
    let n4 = new Node('b');
    let n5 = new Node('-');
    let n6 = new Node('/');
    let n7 = new Node('c');
    let n8 = new Node('d');
    let n9 = new Node('e');
    
    n6.left = n7
    n6.right = n8
    n5.left = n6
    n5.right = n9
    n3.left = n4
    n3.right = n5
    n2.left = n1
    n2.right = n3
    
    tree.root = n2
    tree.simetric_traversal();
    return tree
}


inorder_example_tree();