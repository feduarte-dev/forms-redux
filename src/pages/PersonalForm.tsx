import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { addFormData } from '../redux/actions';

const UF_LIST = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

function PersonalForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  });
  const [disableBtn, setDisableBtn] = useState<boolean>(true);
  const { name, email, cpf, address, city, uf } = form;

  const formData = useSelector((state: any) => state.formData);
  const dispatch = useDispatch();
  console.log(formData);

  useEffect(() => {
    const btnCheck = () => {
      setDisableBtn(!(name && email && cpf && address && city && uf));
    };
    btnCheck();
  }, [name, email, cpf, address, city, uf]);

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name: targetName, value } = target;
    setForm({ ...form, [targetName]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addFormData(form));
    console.log('Form data saved in Redux store:', form);
  };

  return (
    <form
      onSubmit={ handleSubmit }
    >
      <h1 className="title">Informações Pessoais</h1>
      <Input
        label="Nome: "
        type="text"
        onChange={ handleChange }
        value={ name }
        name="name"
        required
      />
      <Input
        label="Email: "
        type="text"
        onChange={ handleChange }
        value={ email }
        name="email"
        required
      />
      <Input
        label="Cpf: "
        type="text"
        onChange={ handleChange }
        value={ cpf }
        name="cpf"
        required
      />
      <Input
        label="Endereço: "
        type="text"
        onChange={ handleChange }
        value={ address }
        name="address"
        required
      />
      <Input
        label="Cidade: "
        type="text"
        onChange={ handleChange }
        name="city"
        value={ city }
        required
      />
      <Select
        defaultOption="Selecione"
        onChange={ handleChange }
        value={ uf }
        label="Estado: "
        name="uf"
        options={ UF_LIST }
      />
      <Link to="/professional-form">
        <Button
          type="submit"
          label="Próximo"
          moreClasses="is-fullwidth is-info"
          disabled={ disableBtn }
        />
      </Link>
    </form>
  );
}

export default PersonalForm;
