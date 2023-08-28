export const ADD_FORM_DATA = 'ADD_FORM_DATA';
export const ADD_FORM_DATAPRO = 'ADD_FORM_DATAPRO';

export const addFormData = (formData: any) => ({
  type: ADD_FORM_DATA,
  payload: formData,
});

export const addFormDataPro = (formData: any) => ({
  type: ADD_FORM_DATAPRO,
  payload: formData,
});
