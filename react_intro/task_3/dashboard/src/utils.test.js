import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
    it('Devuelve el año actual', () => {
        const anioactual = new Date().getFullYear();
        expect(getFullYear()).toBe(anioactual);
    });
});

describe('getFooterCopy', () => {
    it('isIndex es verdadero', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });
    it('isIndex es falso', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
});

describe('getLatestNotification', ()  => {
    it('Devuelve una notificación', () => {
        const expectnotification = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(getLatestNotification()).toBe(expectnotification);
    });
});
