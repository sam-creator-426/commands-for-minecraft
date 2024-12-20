document.addEventListener('DOMContentLoaded', () => {
    // Adding interactivity to the command sections
    const commandSections = document.querySelectorAll('.command-section');

    commandSections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        });

        section.addEventListener('mouseleave', () => {
            section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });
});
