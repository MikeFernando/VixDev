import { useContext, useEffect, useState } from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { RiSearchLine, RiTaskFill } from 'react-icons/ri';

import { ActivitiesContext } from '../../context/ActivitiesContext';

import { Container, Table, SearchBox } from './style';
import { api } from '../../services/api';

export function ActivitiesTable() {
  const { activities: initialActivities } = useContext(ActivitiesContext);
  const[ activities, updateActivities] = useState([]);

  const listStatus = ['pendente', 'concluído', 'cancelado']

 useEffect(() => {
  const formattedActivities = initialActivities.map(activity => {
    return {
      id: activity.id,
      name: activity.name,
      description: activity.description,
      created_at: activity.created_at,
      status: activity.status
    }
  })
  updateActivities(formattedActivities)
 },[initialActivities, updateActivities])


  async function handleChangeStatus(status: string, id: number) {
    const newActivities = activities.map(activity => activity.id === id ? {
       ...activity, status
     } : activity )
     await api.get('/activities/1')
     updateActivities(newActivities)
  }


  async function handleSearch(query: string){
    const updateList = await api.get('/activities');

    const filteredActivities = activities.filter(activity => activity.status.startsWith(query)) 
      updateActivities(filteredActivities);

    switch(query) {
      case 'pendente': filteredActivities
        break;
      case 'concluído': filteredActivities
        break;
      case 'cancelado': filteredActivities
        break;
      case '': updateActivities(updateList.data.activities);
        break;
      default: return
    }
  }

  return (
    <Container>
      <SearchBox>
        <input
          type="text"
          placeholder="Buscar por status"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <RiSearchLine />
      </SearchBox>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Status</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => {
            return (
              <tr key={activity.id}>
                <td>{activity.name}</td>
                <td>{activity.description}</td>
                <td>{Intl.DateTimeFormat('pt-BR').format(new Date(activity.created_at))}</td>
                <td className="icons_status">
                  {activity.status === 'pendente' && <AiFillClockCircle color='#61dcfb'  /> }
                  {activity.status === 'concluído' && <RiTaskFill color='#33cc95' />}
                  {activity.status === 'cancelado' && <MdCancel color='#e52e54' />}
                </td>
                <td>
                <select
                  name={activity.name}
                  id={activity.name}
                  onChange={(e) => handleChangeStatus(e.target.value, activity.id)}
                >
                  <option value={activity.status}>
                    {activity.status}
                  </option>
                    {listStatus.map((item, index) => (
                      item !== activity.status && (
                      <option key={index} value={item}>{item}</option>
                      )
                    ))}
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
