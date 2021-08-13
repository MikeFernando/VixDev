import { useContext, useState } from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { RiTaskFill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';

import { ActivitiesContext } from '../../context/ActivitiesContext';

import { Container, Table } from './style';

export function ActivitiesTable() {
  const { activities } = useContext(ActivitiesContext);

  const [selectedStatus, setSelectedStatus] = useState('');
  const listStatus = ['pending', 'success', 'canceled']

  const formattedActivities = activities.map(activity => {
    return {
      id: activity.id,
      name: activity.name,
      description: activity.description,
      created_at: Intl.DateTimeFormat('pt-BR').format(new Date(activity.created_at)),
      status: activity.status
    }
  })

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
            console.log(activity)
            return (
              <tr key={activity.id}>
                <td>{activity.name}</td>
                <td>{activity.description}</td>
                <td>{activity.created_at}</td>
                <td className="icons_status">
                  {activity.status === selectedStatus && <AiFillClockCircle color='#61dcfb'  /> }
                  {activity.status === selectedStatus && <RiTaskFill color='#33cc95' />}
                  {activity.status === selectedStatus && <MdCancel color='#e52e54' />}
                </td>
                <td>
                  <form>
                    <label htmlFor={activity.name}></label>
                    <select
                      name={activity.name}
                      id={activity.name}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      {listStatus.map(item => (
                        <option 
                          key={activity.id} 
                          value={activity.status}
                        >
                            {item}
                        </option>
                      ))}
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
// pending
{/* <option value={item.status}>{activity.status}</option> */}

// { selectedStatus === 'pending' ? 
// (
//   selectedStatus && <AiFillClockCircle color='#61dcfb'  />

// ) : selectedStatus === 'success' ? 
// (
//   selectedStatus && <RiTaskFill color='#33cc95' />
// ) : (
//   selectedStatus && <MdCancel color='#e52e54' />
// )
// }
