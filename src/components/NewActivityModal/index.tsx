import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import { ActivitiesContext } from '../../context/ActivitiesContext';

import { Form, RadioBox, TypeStatus } from './styles';

type NewActivityModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewActivityModal({ isOpen, onRequestClose }: NewActivityModalProps) {
  const { createActivity } = useContext(ActivitiesContext);

  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ status, setStatus ] = useState('pending');

  async function handleNewActivity(event: FormEvent) {
    event.preventDefault();

    await createActivity({
      name,
      description,
      status
    });

    setName('');
    setDescription('');
    setStatus('pending');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <Form onSubmit={handleNewActivity}>
        <h2>Cadastrar Atividade</h2>

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <TypeStatus>
          <RadioBox
            type="button"
            onClick={() => { 
              return setStatus('pending'); 
            }}
            isActive={status === 'pending'}
            activeColor="cyan_50"
            textColorActive="cyan_500"
          >
            <span>PENDENTE</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { 
              return setStatus('success'); 
            }}
            isActive={status === 'success'}
            activeColor="green_50"
            textColorActive="green_500"
          >
            <span>CONCLUÍDA</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { 
              return setStatus('canceled');
            }}
            isActive={status === 'canceled'}
            activeColor="red_50"
            textColorActive="red_500"
          >
            <span>CANCELADA</span>
          </RadioBox>
        </TypeStatus>

        <button type='submit'>Cadastrar</button>
      </Form>
    </Modal>
  );
}
