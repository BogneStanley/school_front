/**
 * Truncates a given text to a specified maximum length.
 *
 * @param {string} text - The text to be truncated.
 * @param {number} max - The maximum length of the truncated text.
 * @return {string} The truncated text.
 */
export function textTroncate(text, max) {
    if (text.length > max) {
        return text.substring(0, max) + '...';
    }
    return text;
}