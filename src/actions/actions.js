import axios from 'axios';

export const ACCIO_SPELL_START = 'ACCIO_SPELL_START';
export const ACCIO_SPELL_SUCCESS = 'ACCIO_SPELL_SUCCESS';
export const ACCIO_SPELL_FAILURE = 'ACCIO_SPELL_FAILURE';

export const accioSpell = () => dispatch => {
    dispatch({ type: ACCIO_SPELL_START });
    axios
        .get(`https://www.potterapi.com/v1/spells?key=$2a$10$IGqCmMywLY7w.ae6DDIgm.KD2GmxiStEq66fhqMZ.07pVWWtuPheS`)
        .then(res => {
            console.log(res.data);
            const response = res.data[Math.floor(Math.random() * 152)];
            console.log(response);
            dispatch({ type: ACCIO_SPELL_SUCCESS, payload: response})
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ACCIO_SPELL_FAILURE, payload: err})
        })
}