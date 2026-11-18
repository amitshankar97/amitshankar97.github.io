(() => {
    "use strict";
    const choices = Array.from(document.querySelectorAll("[data-project]"));
    if (!choices.length) return;
    const panels = choices.map(choice => document.getElementById(choice.dataset.project));

    function selectProject(id) {
        choices.forEach((choice, index) => {
            const selected = choice.dataset.project === id;
            choice.classList.toggle("selected", selected);
            choice.setAttribute("aria-pressed", String(selected));
            panels[index].hidden = !selected;
        });
    }

    choices.forEach(choice => {
        choice.setAttribute("role", "button");
        choice.setAttribute("aria-controls", choice.dataset.project);
        choice.addEventListener("click", event => {
            event.preventDefault();
            selectProject(choice.dataset.project);
            window.history.replaceState(null, "", `#${choice.dataset.project}`);
        });
        choice.addEventListener("keydown", event => {
            if (event.key === " ") {
                event.preventDefault();
                choice.click();
            }
        });
    });
    function selectFromHash() {
        const id = window.location.hash.slice(1);
        selectProject(panels.some(panel => panel.id === id) ? id : panels[0].id);
    }
    window.addEventListener("hashchange", selectFromHash);
    selectFromHash();
})();
