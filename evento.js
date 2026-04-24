// CSS Grid Layout Interactive
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    // Agregar evento click a cada card
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            showCardInfo(card, index);
        });
        
        // Efecto hover con JavaScript
        card.addEventListener('mouseenter', () => {
            card.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.zIndex = '1';
        });
    });
    
    // Función para mostrar info del card
    function showCardInfo(card, index) {
        const title = card.querySelector('h3').textContent;
        const desc = card.querySelector('p').textContent;
        
        console.log(`🎯 Card ${index + 1}: ${title}`);
        console.log(`   ${desc}`);
        
        // Feedback visual
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    }
    
    // Animación de entrada staggered
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    console.log('🎨 Grid Layout interactivo cargado!');
    console.log('💡 Haz click en las cards para más info');
});
