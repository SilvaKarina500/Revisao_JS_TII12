// função auxiliar para retornar true quando a tela for menor que 980px

function isMobile() {
    return window.innerWidth <= 980;
};

// ==============
// MENU LATERAL
// ==============

// trazendo o menu lateral 
const sidebar = document.querySelector('.sidebar');

// Selecionando a área principal do conteúdo
const content = document.querySelector('.content'); 
//Seleciona o botão que abre o menu lateral
const menuToggle = document.querySelector('.menu-ToggleBtn');
//Seleciona o botão de fechar que abre para o mobile

const closeSidebarBtn = document.getElementById('closeSidebarBtn');
// Traz o escuro do fundo quando ha a abertura do menu
const overlay = document.getElementById('overlay');


//================================
//FUNÇÕES DE FUNCIONAMENTO DO MEU MOBILE
//================================

function  openSidebarMobile() {

    //Adicionar a classe que recebe o menu
    sidebar.classList.add('open');

    // Traz o overlay (fundo escuro)
    overlay.classList.add('show');

    // Impede a rolagem enquanto o menu está aberto
    document.body.classList.add('no-scroll');
    };

function closeSidebarMobile() {
     //Removendo a classe que mostra o menu
    sidebar.classList.remove('open');

    // Esconder o overlay
    overlay.classList.remove('show');

    // Libera a rolagem de página
    document.body.classList.remove('no-scroll');
};
    
// ==============================
// FUNÇÕES DE FUNCIONAMENTO DO MEU DESKTOP
// ==============================

function toggleSidebarDesktop() {
    //O menu é recolhido ou expandido
    sidebar.classList.toggle('collapsed');
    // Ajusta o contéudo do site principal
    content.classList.toggle('expanded');
};

// ==============================
// CONSTRUÇÃO DA LÓGICA DO ABRIR E FECHAR
// ==============================

function handleMenuToggle() {
    if (isMobile()) {
        if(sidebar.classList.contains('open')) {
            closeSidebarMobile();
        } else {
            openSidebarMobile();
        }
    } else {
        toggleSidebarDesktop();
    };
};

//=========================
//EVENTOS DO MENU
//=========================

// Adicioonando o evento para abertura do menu
menuToggleBtn.addEventListener('click', handleMenuToggle);
// Adicionando o evendto para fechamento do menu via botão
closeSidebarBtn.addEventListener('click', closeSidebarMobile);
// Adicionando o evento de fechamento clicando no overlay (parte escura do fundo)
overlay.addEventListener('click', closeSidebarMobile);

//============
//MODAL
//============

// Botão principal do topo que abre o kodal geral
const openModalBtn = document.getElementById('openModalBtn');
// Estrutura principal do modal
const modal = document.getElementById('modal');
// Estrutura interna do modal
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
// Botão para fechamento do modal
const closeModalBtn = document.getElementById("closeModalBtn");
const closeModalFooterBtn = document.getElementById("closeModalFooterBtn");

//==============
//FUNÇÃO PRINCIPAL DO MODAL
//==============

function openModal(title, text) {
    modalTitle.textContent = title;
    modalText.textContent = text;
    // Exibe o modal
    modal.classList.add('show');
    // Trava a escrolagem da página 
    document.body.classList.add('no-scroll');
    
};

function closeModal() {
    // Fecha o modal
    modal.classList.remove('show');
   // Devolver a escrolagem da página
    document.body.classList.remove('no-scroll');
};

//=========================
//EVENTOS DO MODAL
// =========================

openGeneralModalBtn.addEventListener('click', function() {
    openModal("Projeto de revisão", 
    "Esse projeto foi pensando para realizar a revesão de Javascript com foco em interações comuns do front-end: busca, modal, corrossel, menu lateral e cadrs.");})

     closeModalBtn.addEventListener('click', closeModal);

     closeModalFooterBtn.addEventListener('click', closeModal);

     //=========================
     // MODAL DOS CARDS
     //=========================

     const openCardModalBtn = document.querySelectorAll('.open-card-modal'); 
     
     openCardModalBtn.forEach(function(button) {
        button.addEventListener('click', function() {
        const card = button.closest('.card');
        const title = card.querySelector('h4').textContent;   
        const text = card.querySelector('p').textContent; 
        openModal(title, text);
        

        });

     });
    

