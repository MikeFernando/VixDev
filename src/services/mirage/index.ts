import { createServer, Model } from 'miragejs';

type Activities = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  status: string;
}

type User = {
  id: number;
  name: string;
  password: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      activity: Model.extend<Partial<Activities>>({}),
      user: Model.extend<Partial<User>>({}),
    },

    seeds(server) {
      server.db.loadData({
        activities: [
            {
              id: 1,
              name: "Lavar o carro",
              description: "Aspirar o pó do carro",
              created_at: new Date("2021-08-11"),
              status: "pendente"
            },
            {
              id: 2,
              name: "Estudar",
              description: "Passar em processo seletivo",
              created_at: new Date("2021-08-10"),
              status: "concluído"
            },
            {
              id: 3,
              name: "Jogar",
              description: "Jogar video game",
              created_at: new Date("2021-08-09"),
              status: "cancelado"
            }
          ],
      })
    },

    routes() {
      this.namespace = 'api';

      this.get('/users', () => {
        return this.schema.all('user');
      });

      this.post('/users', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('user', data);
      });

      this.get('/activities', () => {
        return this.schema.all('activity');
      });

      this.get("/activities/:id", (schema, request) => {
        let id = request.params.id
      
        return this.schema.find('activity', id)
      })

      this.post('/activities', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('activity', data)
      });

      this.namespace = '';
      this.passthrough();
    }
  })

  return server;
}
