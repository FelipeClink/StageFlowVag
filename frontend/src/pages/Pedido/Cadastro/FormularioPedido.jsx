import { useState } from 'react';
import {
  Container,
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  ErrorMessage
} from './styles';

const FormularioPedido = () => {
  const [formData, setFormData] = useState({
    nomeSolicitante: '',
    nomeEvento: '',
    descricao: '',
    dataEvento: '',
    local: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpa o erro do campo quando o usu�rio come�a a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nomeSolicitante.trim()) {
      newErrors.nomeSolicitante = 'Nome do solicitante � obrigat�rio';
    }

    if (!formData.nomeEvento.trim()) {
      newErrors.nomeEvento = 'Nome do evento � obrigat�rio';
    }

    if (!formData.dataEvento) {
      newErrors.dataEvento = 'Data do evento � obrigat�ria';
    }

    if (!formData.local.trim()) {
      newErrors.local = 'Local � obrigat�rio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Aqui voc� pode adicionar a chamada � API
      console.log('Dados do pedido:', formData);

      // Simula uma chamada de API
      await new Promise(resolve => setTimeout(resolve, 1000));

      alert('Pedido cadastrado com sucesso!');

      // Limpa o formul�rio
      setFormData({
        nomeSolicitante: '',
        nomeEvento: '',
        descricao: '',
        dataEvento: '',
        local: ''
      });
    } catch (error) {
      console.error('Erro ao cadastrar pedido:', error);
      alert('Erro ao cadastrar pedido. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      nomeSolicitante: '',
      nomeEvento: '',
      descricao: '',
      dataEvento: '',
      local: ''
    });
    setErrors({});
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Cadastro de Pedido</Title>

        <FormGroup>
          <Label htmlFor="nomeSolicitante">
            Nome do Solicitante <span>*</span>
          </Label>
          <Input
            type="text"
            id="nomeSolicitante"
            name="nomeSolicitante"
            value={formData.nomeSolicitante}
            onChange={handleChange}
            placeholder="Digite o nome do solicitante"
            hasError={!!errors.nomeSolicitante}
          />
          {errors.nomeSolicitante && (
            <ErrorMessage>{errors.nomeSolicitante}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="nomeEvento">
            Nome do Evento <span>*</span>
          </Label>
          <Input
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            value={formData.nomeEvento}
            onChange={handleChange}
            placeholder="Digite o nome do evento"
            hasError={!!errors.nomeEvento}
          />
          {errors.nomeEvento && (
            <ErrorMessage>{errors.nomeEvento}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="dataEvento">
            Data do Evento <span>*</span>
          </Label>
          <Input
            type="date"
            id="dataEvento"
            name="dataEvento"
            value={formData.dataEvento}
            onChange={handleChange}
            hasError={!!errors.dataEvento}
          />
          {errors.dataEvento && (
            <ErrorMessage>{errors.dataEvento}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="local">
            Local <span>*</span>
          </Label>
          <TextArea
            id="local"
            name="local"
            value={formData.local}
            onChange={handleChange}
            placeholder="Digite o endere�o ou local do evento"
            rows="3"
            hasError={!!errors.local}
          />
          {errors.local && (
            <ErrorMessage>{errors.local}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup style={{ flexDirection: 'row', gap: '1rem', justifyContent: 'flex-end' }}>
          <Button type="button" variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar Pedido'}
          </Button>
        </FormGroup>
      </FormContainer>
    </Container>
  );
};

export default FormularioPedido;