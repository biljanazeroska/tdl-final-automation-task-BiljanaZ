export function parseMenuExpression(menuExpression) {
    // menuExpression: Women -> Tops -> Jackets
    const parts = menuExpression.split('->');

    return parts.map((p) => p.trim());
}