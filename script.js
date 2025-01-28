document.querySelectorAll('.acordeon').forEach(acordeon => {
    const trigger = acordeon.querySelector('.trigger');
    
    trigger.addEventListener('click', () => {
        const isOpen = acordeon.classList.contains('open');
        
        // Fecha todos os acordeons primeiro
        document.querySelectorAll('.acordeon').forEach(item => {
            item.classList.remove('open');
        });
        
        // Abre apenas o acordeon clicado
        if (!isOpen) {
            acordeon.classList.add('open');
        }
    });
});





