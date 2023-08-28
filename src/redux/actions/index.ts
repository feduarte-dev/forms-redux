export const ADD_FORM_DATA = 'ADD_FORM_DATA';

export const addFormData = (formData: any) => ({
  type: ADD_FORM_DATA,
  payload: formData,
});
