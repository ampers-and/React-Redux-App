import { ACCIO_SPELL_START, ACCIO_SPELL_SUCCESS } from '../actions/actions';

const initialState = {
    spell: {
        incant:'',
        type:'',
        effect:''
    },
    // spell: '',
    isAccioIng: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACCIO_SPELL_START:
            return {
                ...state,
                isAccioIng: true,
                error: ''
            };

        case ACCIO_SPELL_SUCCESS:
            return{
                ...state,
                spell:
                    //action.payload.spell,
                    {
                        incant: action.payload.spell,
                        type: action.payload.type,
                        effect: action.payload.effect
                    },
                    
                isAccioIng:false
            };
        default:
            return state;
    }
}