import { ADD_FORM_DATA } from '../actions';

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
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
