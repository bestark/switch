import {canBeSet} from "./utils";

describe('canBeSet method ', () => {
    test('sets all field correctly',() => {
        const clickedElementIndex = 12;
        const topElementIndex = clickedElementIndex - 5;
        const rightElementIndex = clickedElementIndex + 1;
        const bottomElementIndex = clickedElementIndex + 5;
        const leftElementIndex = clickedElementIndex - 1;

        expect(canBeSet(topElementIndex,'top')).toBe(7);
        expect(canBeSet(rightElementIndex,'right')).toBe(13);
        expect(canBeSet(bottomElementIndex,'bottom')).toBe(17);
        expect(canBeSet(leftElementIndex,'left')).toBe(11);
    })

// Clicked Upper Left Corner
    test('sets undefined top and left',() => {
        const clickedElementIndex = 0;
        const topElementIndex = clickedElementIndex - 5;
        const rightElementIndex = clickedElementIndex + 1;
        const bottomElementIndex = clickedElementIndex + 5;
        const leftElementIndex = clickedElementIndex - 1;

        expect(canBeSet(rightElementIndex,'right')).toBe(1);
        expect(canBeSet(bottomElementIndex,'bottom')).toBe(5);
        expect(canBeSet(topElementIndex,'top')).toBeUndefined();
        expect(canBeSet(leftElementIndex,'left')).toBeUndefined();
    })

// Clicked Upper Right Corner
    test('sets undefined top and right',() => {
        const clickedElementIndex = 4;
        const topElementIndex = clickedElementIndex - 5;
        const rightElementIndex = clickedElementIndex + 1;
        const bottomElementIndex = clickedElementIndex + 5;
        const leftElementIndex = clickedElementIndex - 1;

        expect(canBeSet(topElementIndex,'top')).toBeUndefined();
        expect(canBeSet(rightElementIndex,'right')).toBeUndefined();
        expect(canBeSet(bottomElementIndex,'bottom')).toBe(9);
        expect(canBeSet(leftElementIndex,'left')).toBe(3);
    })

// Clicked Lower Left Corner
    test('sets undefined bottom and left',() => {
        const clickedElementIndex = 20;
        const topElementIndex = clickedElementIndex - 5;
        const rightElementIndex = clickedElementIndex + 1;
        const bottomElementIndex = clickedElementIndex + 5;
        const leftElementIndex = clickedElementIndex - 1;

        expect(canBeSet(topElementIndex,'top')).toBe(15);
        expect(canBeSet(rightElementIndex,'right')).toBe(21);
        expect(canBeSet(bottomElementIndex,'bottom')).toBeUndefined();
        expect(canBeSet(leftElementIndex,'left')).toBeUndefined();
    })

// Clicked Lower Right Corner
    test('sets undefined bottom and right',() => {
        const clickedElementIndex = 24;
        const topElementIndex = clickedElementIndex - 5;
        const rightElementIndex = clickedElementIndex + 1;
        const bottomElementIndex = clickedElementIndex + 5;
        const leftElementIndex = clickedElementIndex - 1;

        expect(canBeSet(topElementIndex,'top')).toBe(19);
        expect(canBeSet(rightElementIndex,'right')).toBeUndefined();
        expect(canBeSet(bottomElementIndex,'bottom')).toBeUndefined();
        expect(canBeSet(leftElementIndex,'left')).toBe(23);
    })

    test('sets all field undefined',() => {
        const topElementIndex = -5;
        const rightElementIndex = 5;
        const bottomElementIndex = 25;
        const leftElementIndex = 4;

        expect(canBeSet(topElementIndex,'top')).toBeUndefined();
        expect(canBeSet(rightElementIndex,'right')).toBeUndefined();
        expect(canBeSet(bottomElementIndex,'bottom')).toBeUndefined();
        expect(canBeSet(leftElementIndex,'left')).toBeUndefined();
    })
})
