export const DEMO_EMAIL = 'aluno@demo.com';
export const DEMO_PASSWORD = 'demo123';
export const DEMO_PROFILE_KEY = 'alfabetiza.demo.user';

export function getDemoProfile() {
    const email = sessionStorage.getItem(DEMO_PROFILE_KEY)
        || localStorage.getItem(DEMO_PROFILE_KEY);

    return email === DEMO_EMAIL
        ? { name: 'Estudante de demonstração', email }
        : null;
}
