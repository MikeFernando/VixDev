import { FormEvent, useContext, useState } from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { RiTaskFill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';

import { ActivitiesContext } from '../../context/ActivitiesContext';

import { Container, Table } from './style';

type SelectStatus = {
  status: 'pending' | 'success' | 'canceled' ;
}


export function ActivitiesTable() {
  const { activities } = useContext(ActivitiesContext);
  const [ typeStatus, setTypeStatus ] = useState<SelectStatus>();

  const formattedActivities = activities.map(activity => {
    return {
      id: activity.id,
      name: activity.name,
      description: activity.description,
      created_at: Intl.DateTimeFormat('pt-BR').format(new Date(activity.created_at)),
      status:  activity.status === 'pending' ? 
      (
        activity.status && <AiFillClockCircle color='#61dcfb'  />

      ) : activity.status === 'success' ? 
      (
        activity.status && <RiTaskFill color='#33cc95' />
      ) : (
        activity.status && <MdCancel color='#e52e54' />
      )
    }
  })

  function handleChangeStatus(event: FormEvent) {
    event.preventDefault()

  }

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Status</th>
            <th><span>Editar</span>{<FaEdit size={24} color="#6933ff" />}</th>
          </tr>
        </thead>
        <tbody>
          {formattedActivities.map(activity => {
            return (
              <tr key={activity.id}>
                <td>{activity.name}</td>
                <td>{activity.description}</td>
                <td>{activity.created_at}</td>
                <td className="icons_status">{activity.status}</td>
                <td>
                  <form>
                    <label htmlFor={activity.name}></label>
                    <select name={activity.name} id={activity.name}>
                      <option
                        value="pending"
                        onChange={handleChangeStatus}
                      >
                        PENDENTE
                      </option>
                      <option
                        value="success"
                        onChange={handleChangeStatus}
                      >
                        CONCLUÍDA
                      </option>
                      <option
                        value="canceled"
                        onChange={handleChangeStatus}
                      >
                        CANCELADA
                      </option>
                    </select>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  )
}
