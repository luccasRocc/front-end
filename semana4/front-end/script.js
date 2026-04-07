// async indica que a função é assíncrona
async function fetchUsers() {

    try {
    // Faz a requisição para a API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // Verifica se houve erro na resposta
    if (!response.ok) {
     throw new Error("Erro na requisição");
    }
    
    // Converte os dados para JSON
    const users = await response.json();
    
    // Chama a função para exibir os usuários
    displayUsers(users);
    
    } catch (error) {
    // Exibe erro no console
    console.error("Erro ao buscar usuários:", error);
    }
    }
    function displayUsers(users) {

        // Seleciona a lista no HTML
        const userList = document.getElementById("user-list");
        
        // Limpa a lista antes de adicionar novos itens
        userList.innerHTML = "";
        
        // Percorre cada usuário recebido da API
        users.forEach(user => {
        
            // Cria um elemento <li>
            const listItem = document.createElement("li");
            
            // Define o nome do usuário como texto
            listItem.textContent = user.name;
            
            // Adiciona um evento de clique
            listItem.onclick = () => showUserDetails(user);
            
            // Adiciona o item na lista
            userList.appendChild(listItem);
        });
        }
        function showUserDetails(user) {

            // Seleciona a div onde os detalhes serão exibidos
            const userDetails = document.getElementById("user-details");
            
            // Insere HTML com os dados do usuário
            userDetails.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Telefone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> 
            <a href="http://${user.website}" target="_blank">
            ${user.website}
            </a>
            </p>
            <p><strong>Endereço:</strong> ${user.address.street}, ${user.address.city}</p>
            `;
    }
// Chama a função ao carregar a página
fetchUsers();
                    