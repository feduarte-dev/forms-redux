import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { addFormDataPro } from '../redux/actions';

const INITIAL_STATE = {
  resume: '',
  role: '',
  description: '',
};

function ProfessionalForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [disableBtn, setDisableBtn] = useState<boolean>(true);
  const { resume, role, description } = form;

  const dispatch = useDispatch();

  useEffect(() => {
    const btnCheck = () => {
      setDisableBtn(!(resume && role && description));
    };
    btnCheck();
  }, [resume, role, description]);

  const handleChange = (
    { target }: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = () => {
    dispatch(addFormDataPro(form));
  };

  return (
    <form>
      <h1 className="title">Informações Profissionais</h1>
      <TextArea
        label="Resumo do currículo: "
        value={ resume }
        name="resume"
        maxLength="1000"
        onChange={ handleChange }
        required
      />
      <Input
        label="Cargo:"
        name="role"
        type="text"
        value={ role }
        onChange={ handleChange }
        required
      />
      <TextArea
        label="Descrição do cargo: "
        name="description"
        maxLength="500"
        onChange={ handleChange }
        value={ description }
        required
      />
      <Link to="/form-display">
        <Button
          onClick={ handleClick }
          type="button"
          label="Enviar"
          moreClasses="is-fullwidth is-info"
          disabled={ disableBtn }
        />
      </Link>
    </form>
  );
}
export default ProfessionalForm;
