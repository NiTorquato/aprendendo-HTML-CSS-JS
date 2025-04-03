// Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%', // Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .two)
        scrub: true,
        markers: true, // Depuração
    },
});

tl.to(
    '#fanta',
    {
        top: '120%', // Move o Elemento do ID 'Fanta' para 120% do Topo
        left: '0%', // Move o Elemento para a posição 0% da esquerda
    },
    'orange'
); //Nomeando este techo de animação como 'orange' para sincronização

tl.to(
    '#laranja-cortada',
    {
        top: '160%', // Move o Elemento do ID 'orange-cut' para 160% do Topo
        left: '23%', // Move o Elemento para a posição 23% da esquerda
    },
    'orange'
); // Sincronização com a animação nomeada 'orange'

tl.to(
    '#laranja',
    {
        width: '15%', // Reduz a Largura do elemento com ID 'oranje' para 15%
        top: '160%', // Move o Elemento do ID orange-cut para 160% do Topo
        right: '10%', // Move o Elemento para a posição 10% da Direita
    },
    'orange'
); // Sincronização com a animação nomeada 'orange'

tl.to(
    '#folha',
    {
        top: '110%', // Move o Elemento do ID 'leaf' para 110% do Topo
        rotate: '530deg', // Rotaciona o elemento em 530 graus
        left: '70%', // Move o Elemento para a posição 70% da Esquerda
    },
    'orange'
); // Sincronização com a animação nomeada 'orange'

tl.to(
    '#folha2',
    {
        top: '110%', // Move o Elemento do ID 'leaf' para 110% do Topo
        rotate: '530deg', // Rotaciona o elemento em 530 graus
        left: '0%', // Move o Elemento para a posição 0% da Esquerda
    },
    'orange'
); // Sincronização com a animação nomeada 'orange'


//Criando outra timeline

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.three',
        start: '0% 95%',
        end: '70% 50%', // Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .three)
        scrub: true,
        markers: true, // Depuração
    },
}); 

//Definindo a animação dos elementos com a timeline 'tl2'
tl2.from(
    '.lemon1',
    {
        rotate: '-90deg', // Inicia o Elemento com a classe 'lemon1' rotacionado em -90 graus
        left: '-100%', // Inicia o Elemento fora da tela, á esquerda (-100%)
        top: '110%', // Inicia o Elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); // Nomeando este trecho de animação com 'ca' para sincronização

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg', // Inicia o Elemento com a ID 'cocacola' rotacionado em -90 graus
        left: '-100%', // Inicia o Elemento fora da tela, á esquerda (-100%)
        top: '110%', // Inicia o Elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); // Nomeando este trecho de animação com 'ca' para sincronização

tl2.from(
    '.lemon2',
    {
        rotate: '90deg', // Inicia o Elemento com a classe 'lemon2' rotacionado em 90 graus
        left: '100%', // Inicia o Elemento fora da tela, á esquerda (100%)
        top: '110%', // Inicia o Elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); // Nomeando este trecho de animação com 'ca' para sincronização

tl2.from(
    '#pepsi',
    {
        rotate: '90deg', // Inicia o Elemento com a ID 'pepsi' rotacionado em 90 graus
        left: '100%', // Inicia o Elemento fora da tela, á esquerda (100%)
        top: '110%', // Inicia o Elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); // Nomeando este trecho de animação com 'ca' para sincronização

tl2.to(
    '#laranja-cortada',
    {
        width: '18%', // Aumenta a largura do elemento com ID 'laranja-cortada para 18%
        left: '42%', // Move o elemtento para 42% da esquerda
        top: '204%', // Move o elemtento para 204% do topo
    },
    'ca'
); // Nomeando este trecho de animação com 'ca' para sincronização

tl2.to(
    '#fanta',
    {
        width: '35%', // Aumenta a largura do elemento com ID 'fanta' para 35%
        left: '33%', // Move o elemtento para 33% da esquerda
        top: '210%', // Move o elemtento para 210% do topo
    },
    'ca'
); // Nomeando este trecho de animação com 'ca' para sincronização