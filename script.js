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
     // Adiciona o evento de fechamento do modal para o botão de rodapé

     closeModalFooterBtn.addEventListener('click', closeModal);
     // Adiciona um evento de clique para fechar o modal quando o usuário clicar fora do conteúdo do modal

     //=========================
     // MODAL DOS CARDS
     //=========================
    // Seleciona os botões de cada card que abrem o modal
     const openCardModalBtn = document.querySelectorAll('.open-card-modal'); 
     // Adiciona um evento de clique para cada botão de card
     openCardModalBtn.forEach(function(button) {
        button.addEventListener('click', function() {
        const card = button.closest('.card');
        const title = card.querySelector('h4').textContent;   
        const text = card.querySelector('p').textContent; 
        openModal(title, text);
        

        });

     });
     //=========================
     // BARRA DE BUSCA
     //=========================
    // Seleciona o input de busca, os cards e o estado vazio
     const searchInput = document.getElementById('searchInput'); 
     const card = document.querySelectorAll('.card'); 
     const emptyState = document.getElementById('emptyState'); 

     searchInput.addEventListener('input', function() {
        const term = searchInput.value.toLowerCase(). trim();

        let visibleCards = 0; 

        card.forEach(function(cards) { 

         const title = cards.querySelector('h4').textContent.toLowerCase(); 

         if (title.includes(term)) {  
            cards.classList.remove('hidden-card'); 
            visibleCards++;
         } else{
            cards.classList.add('hidden-card'); 
         }
         });
        if (visibleCards === 0) {
            emptyState.classList.add('show');
        } else {
            emptyState.classList.remove('show');
        }

     });

     //=========================
     // CARROSSEL DE SLIDES
     //=========================
 // Seleciona os elementos do carrossel
     const carouselImage = document.getElementById('carouselImage');
     // Seleciona o título e o texto do carrossel
     const carouselTitle = document.getElementById('carouselTitle');
     // Seleciona o texto do carrossel
     const carouselText = document.getElementById('carouselText');
// Seleciona os botões de navegação do carrossel
     const prevBtn = document.getElementById('prevBtn');
     // Seleciona o botão de avançar do carrossel
     const nextBtn = document.getElementById('nextBtn');
     // Define os slides do carrossel com imagem, título e texto

     const slides = [ {
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
        title:"Revisão prática de Javascript",
        text:"Um exemplo simples para trabalhar com eventos, funções de arrays e manipulação de DOM."
        },

        {
            image:" https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
            title:"Código que pode ser reaproveitado",
            text: "A estrutura visual e as interações podem servir de base para portifólios, dashboards e páginas instítucionais."

        },

        {
            image:"  https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1400&q=80",
            title:"Construção por etapas",
            text: "Podemos desenvolver cada recurso separadamente e depois integrar tudo no mesmo projeto."

        }
    ];

    let currentSlide = 0;

    function renderSlide() {
        const slide = slides[currentSlide]; 
         // Atualiza a imagem, título e texto do carrossel com base no slide atual
        carouselImage.src = slide.image;
        // Acessibilidade: Define o texto alternativo da imagem para o título do slide
        carouselImage.alt = slide.title;  
        // Atualiza o título e o texto do carrossel com base no slide atual
        carouselTitle.textContent = slide.title; 
        // Atualiza o texto do carrossel com base no slide atual
        carouselText.textContent = slide.text; 
        
    };
    //funcionamento do botão de avançar do carrossel
    nextBtn.addEventListener('click', function() {
    currentSlide++;

    if(currentSlide>= slides.length) {
        currentSlide = 0;
    }

    renderSlide();
    });
    //funcionamento do botão de voltar do carrossel
    prevBtn.addEventListener('click', function() {
        currentSlide--;

        if(currentSlide < 0) {
            currentSlide = slides.length -1;
        };
        renderSlide();
    });

    //================
    //FECHAR COM A TELA ESC
    //================
    // Adiciona um evento de teclado para fechar o modal quando a tecla "Escape" for pressionada
     document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
            if (isMobile() && sidebar.classList.contains('open')) {
                closeSidebarMobile();
            }

        }

     });
     // Renderiza o slide inicial do carrossel
     renderSlide();

      //================
    //ACCORDEON
    //================
    // Seleciona todos os itens do acordeão
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        const questionBtn = item.querySelector('.faq-question');

        questionBtn.addEventListener('click', function() {
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                }
            });

        item.classList.toggle('active');
        });

    });
    


    
    
    




