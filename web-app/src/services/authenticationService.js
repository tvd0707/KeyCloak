import keycloak from "../keycloak";

export const logOut = () => {
    keycloak.logout()
        .then(r => console.log('Out'))
        .catch(e => console.error('Error', e));
};
