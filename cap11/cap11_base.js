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

    //Travessia assimétrica(onorder/pós-ordem): esquerda, direita, raiz
    asymmetric_traversal(node=null){
        if(node === null){
            node = this.root
        }
        if(node.left){
            process.stdout.write('( ');
            this.asymmetric_traversal(node.left);
        }
        process.stdout.write(node.data+' ');
        if(node.right){
            this.asymmetric_traversal(node.right);
            process.stdout.write(' ) ');
        }
    }

    height(node=null){
        let heightLeft = 0
        let heightRight = 0
        if(node === null){
            node = this.root
        }
        if(node.left){
            heightLeft = this.height(node.left);
        }
        if(node.right){
            heightRight = this.height(node.right);
        }
        if(heightLeft > heightRight){
            return heightLeft + 1
        }
        return heightRight + 1
    }
}

export class BinarySearch extends BinaryTreeRoot {
    insert(value){
        let parent = null
        let x = this.root
        while(x){
            parent = x
            if(value < x.data){
                x = x.left
            } else {
                x = x.right
            }
        }
        
        if(parent === null){
            this.root = new Node(value)
        }
        else if(value < parent.data){
            parent.left = new Node(value)
        }
        else {
            parent.right = new Node(value)
        }
    }

    search(value, node = 0){
        if(node === 0){
            node = this.root
        }
        if(node === null || node.data === value){
            return BinarySearch
        }
        if(value < node.data){
            return this.search(value, node.left)
        }
        return this.search(value, node.right)
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