export function canBeSet(fieldNumber, pos) {
    if (pos === 'top') {
        if (fieldNumber >= 0) {
            return fieldNumber;
        }
    }

    if (pos === 'bottom') {
        if (fieldNumber < 25) {
            return fieldNumber;
        }
    }

    if (pos === 'right') {
        if (fieldNumber === 5 || fieldNumber === 10 || fieldNumber === 15 || fieldNumber === 20 || fieldNumber === 25) {
            return undefined;
        } else {
            return fieldNumber
        }
    }
    if (pos === 'left') {
        if (fieldNumber === 4 || fieldNumber === 9 || fieldNumber === 14 || fieldNumber === 19 || fieldNumber === 24) {
            return undefined;
        } else {
            return fieldNumber
        }
    }
}
