import { ADD_FORM_DATA, ADD_FORM_DATAPRO } from '../actions';

const initialState = {
  personalData: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  },
  professionalData: {
    resume: '',
    role: '',
    description: '',
  },
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_FORM_DATA:
      return {
        ...state,
        personalData: action.payload,
      };
    case ADD_FORM_DATAPRO:
      return {
        ...state,
        professionalData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
