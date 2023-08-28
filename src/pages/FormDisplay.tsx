import { useSelector } from 'react-redux';

function FormDisplay() {
  const rootState = useSelector((state: any) => state);
  console.log(rootState);
  const { name, email, cpf, address, city, uf } = rootState.personalData;
  const { description, resume, role } = rootState.professionalData;
  return (
    <section>
      <h1>Dados Enviados</h1>
      <div>
        {`Nome: ${name}`}
      </div>
      <div>
        {`Email: ${email}`}

      </div>
      <div>
        {`CPF: ${cpf}`}
      </div>
      <div>
        {`Endereço: ${address}`}
      </div>
      <div>
        {`Cidade: ${city}`}
      </div>
      <div>
        {`Estado: ${uf}`}
      </div>
      <div>
        {`Currículo: ${resume}`}
      </div>
      <div>
        {`Cargo: ${role}`}
      </div>
      <div>
        {`Descrição do cargo: ${description}`}
      </div>
    </section>
  );
}

export default FormDisplay;
