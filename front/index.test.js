/**
 * @jest-environment jsdom
 */
import { postUserData, displayRandomCats } from './index.js';

global.fetch = jest.fn();

describe('Suite de Tests Unitaires - Bloc 2 (Front-end)', () => {

    beforeEach(() => {
        fetch.mockClear();
    });

    test('E13 - postUserData envoie les bons identifiants au format JSON', async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve({ status: 'success', message: 'User OK' })
        });

        const email = 'totoLeBoss@test.fr';
        const mdp = 'secu123';
        const result = await postUserData(email, mdp);

        // ON MET À JOUR L'URL ICI : ../back/traitement-json.php
        expect(fetch).toHaveBeenCalledWith('../back/traitement-json.php', expect.objectContaining({
            method: 'POST',
            body: JSON.stringify({ email, password: mdp })
        }));
        expect(result.status).toBe('success');
    });

    test('C18 - displayRandomCats appelle l\'API externe avec la bonne limite', async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve([{ url: 'https://cat.jpg' }])
        });

        await displayRandomCats(10);

        expect(fetch).toHaveBeenCalledWith(expect.stringContaining('limit=10'));
    });
});