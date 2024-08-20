
let usuarios = [];  
function validarUsuario(nome, idade) {  
    if (!nome || typeof nome !== 'string' || nome.trim() === '') {  
        console.log('Nome inválido. Deve ser uma string não vazia.');  
        return false;  
    }  

    if (!idade || typeof idade !== 'number' || idade <= 0) {  
        console.log('Idade inválida. Deve ser um número maior que zero.');  
        return false;  
    }  

    return true;  
}  
function adicionarUsuario(nome, idade) {  
    if (validarUsuario(nome, idade)) {  
        
        const novoUsuario = {  
            nome: nome,  
            idade: idade  
        };  

       
        usuarios.push(novoUsuario);  
        console.log(`Usuário ${nome} cadastrado com sucesso!`);  
    }  
}  
function listarUsuarios() {  
    if (usuarios.length === 0) {  
        console.log('Nenhum usuário cadastrado.');  
        return;  
    }  
    console.log('Usuários cadastrados:');  
    usuarios.forEach((usuario, index) => {  
        console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}`);  
    });  
}  
adicionarUsuario('Alice', 25);  
adicionarUsuario('fernando', 30);  
listarUsuarios();