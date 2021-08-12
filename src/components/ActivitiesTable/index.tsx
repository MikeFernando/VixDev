import { useEffect, useState } from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { RiTaskFill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';

import { api } from '../../services/api';
import { Container, Table } from './style';

type Activities = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  status: string;
}

export function ActivitiesTable() {
  const [ activities, setActivities ] = useState<Activities[]>([]);

  useEffect(() => {
    api.get('/activities').then(response => {
      setActivities(response.data.activities);
    });
  }, []);

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
          {activities.map(activity => {
            return (
              <tr key={activity.id}>
                <td>{activity.name}</td>
                <td>{activity.description}</td>
                <td>{Intl.DateTimeFormat('pt-BR').format(new Date(activity.created_at))}</td>
                <td className="icons_status">{activity.status === 'pending' ? (
                  activity.status && <AiFillClockCircle color='#61dcfb'  />
                ) : activity.status === 'success' ? (
                  activity.status && <RiTaskFill color='#33cc95' />
                ) : (
                  activity.status && <MdCancel color='#e52e54' />
                )
              }</td>
                <td>
                  <label htmlFor="status"></label>
                  <select name="status" id="status">
                    <option
                      value={activity.status}
                      onChange={() => {}}
                    >
                      PENDENTE
                    </option>
                    <option
                      value={activity.status}
                      onChange={() => {}}
                    >
                      CONCLUÍDA
                    </option>
                    <option
                      value={activity.status}
                      onChange={() => {}}
                    >
                      CANCELADA
                    </option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  )
}
