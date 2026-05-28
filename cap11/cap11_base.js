/*
    Árvores binárias

    Código fonte é referencia de https://github.com/python-cafe/data_structures/blob/master/arvores/examples.py
    refatorado em javascript
*/

export class Node {
    constructor(data){
        this.data = data
        this.left = null;
        this.right = null;
    }
}

console.log("---------------Estrutura de um nó:-------------------");
console.log("-----------------------------------------------------");
console.log(new Node(1));
console.log("-----------------------------------------------------");
console.log()

//Essa classe vai representar a raiz da árvore, ou seja, o nó inicial.
//Essa classe, além de guardar os nós, guarda os métodos de travessia da árvore A PARTIR da raiz.
export class BinaryTreeRoot {
    constructor(data=null, node=null){
        if(node){
            this.root = node;
        }
        else if(data){
            node = new Node(data);
            this.root = node;
        }
        else {
            this.root = null;
        }
    }

    //Travessia simétrica(inorder/pré-ordem): esquerda, raiz, direita
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

console.log("---------------Estrutura de uma classe BinaryTreeRoot (Só reconhece o nó):-------------------");
console.log("---------------------------------------------------------------------------------------------");
let treeExample = new BinaryTreeRoot(1);
console.log(treeExample.root); //Dentro da BinaryTreeRoot, o Node é criada na variável root
treeExample.root.left = new Node(2);
treeExample.root.right = new Node(3);
console.log(treeExample);
console.log("---------------------------------------------------------------------------------------------");
console.log()