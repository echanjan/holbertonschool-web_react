export function getFullYear() {
    const fechaActual = new Date();
    const anioactual = fechaActual.getFullYear();
    return anioactual;
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
}