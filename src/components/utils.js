export function canBeSet(fieldNumber, pos) {
    if (pos === 'top') {
        if (fieldNumber >= 0 && fieldNumber <= 24) {
            return fieldNumber;
        } else {
            return undefined
        }

    }

    if (pos === 'bottom') {
        if (fieldNumber < 25) {
            return fieldNumber;
        } else {
            return undefined
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
        if (fieldNumber === -1 || fieldNumber === 4 || fieldNumber === 9 || fieldNumber === 14 || fieldNumber === 19 || fieldNumber === 24) {
            return undefined;
        } else {
            return fieldNumber
        }
    }
}
