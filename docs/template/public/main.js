import WorkflowContainer from "./workflow.js"

// Adds one "Expand all / Collapse all" button for the page's collapsible <details>
// sections, into the <div class="details-toggle-slot"></div> the article provides.
// Articles opt in by placing that slot; without it nothing is added.
function initDetailsToggle() {
    const slot = document.querySelector("article .details-toggle-slot");
    const details = document.querySelectorAll("article details");
    if (!slot || details.length === 0) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-outline-secondary btn-sm details-toggle";
    const render = () => {
        const allOpen = [...details].every(d => d.open);
        button.textContent = allOpen ? "Collapse all steps" : "Expand all steps";
    };
    button.addEventListener("click", () => {
        const allOpen = [...details].every(d => d.open);
        details.forEach(d => d.open = !allOpen);
        render();
    });
    details.forEach(d => d.addEventListener("toggle", render));
    render();
    slot.appendChild(button);
}

export default {
    defaultTheme: 'light',
    iconLinks: [{
        icon: 'github',
        href: 'https://github.com/harp-tech/device.behavior',
        title: 'GitHub'
    }],
    start: () => {
        WorkflowContainer.init();
        initDetailsToggle();
    }
}