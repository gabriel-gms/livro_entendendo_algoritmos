import { Node, BinaryTreeRoot } from "./cap11_base.js";

function onorder_example_tree(){
    let tree = new BinaryTreeRoot()
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
    tree.asymmetric_traversal();
    console.log()
    console.log('Altura da árvore: '+tree.height());
    return tree
}

console.log("---------------Exemplo de travessia onorder ou assimétrica:-------------------");
console.log("----------------------------------------------------------------------------");
/*
        '+'
      /    \
    'a'     '*'
          /    \
        'b'     '-'
               /   \
             '/'    'e'
            /   \
          'c'   'd'
*/
onorder_example_tree();
console.log()
console.log("----------------------------------------------------------------------------");
console.log()