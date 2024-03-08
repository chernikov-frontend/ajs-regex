import cleanNumberPhone from '../cleanNumberPhone.js';

test.each([
        ['8 (927) 000-00-00', '+79270000000'],
        ['+7 960 000 00 00', '+79600000000'],
        ['+86 000 000 0000', '+860000000000'],
    ])
    ('тест пройден, номер очищен и добавлен +', (number, expected) => {

        const received = cleanNumberPhone(number);
        expect(received).toBe(expected);
});