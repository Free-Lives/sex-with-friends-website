function setDialogVisibility(dialogId, isVisible) {
    document.getElementById(dialogId).style.display = isVisible ? "flex" : "none";

    if (!isVisible) {
        window.location.hash = "#";
    }
}

function joinDiscord() {
    window.open("https://discord.gg/qkTGc2BPma");
}

function showPressKit() {
    window.open("https://drive.google.com/drive/u/0/folders/1iwVFek-EFrIq_keNM2JSQ9hIecBhiXI_");
}

let hash = window.location.hash;
switch (hash) {
    case "#privacy-policy":
        setDialogVisibility("privacy-policy", true);
        break;
    case "#contact":
    case "#support":
        setDialogVisibility("support", true);
        break;
}
