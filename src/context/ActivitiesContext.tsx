import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/api";

type Credentials = {
  email: string;
  password: string;
}

type Activities = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  status: string;
}

type ActivityInput = Omit<Activities, 'id' | 'created_at'>;

type AuthContextData = {
  login: (credentials: Credentials) => Promise<void>;
  createActivity: (activity: ActivityInput) => Promise<void>;
  activities: Activities[];
}

type AuthProviderProps = {
  children: ReactNode;
}

export const ActivitiesContext = createContext({} as AuthContextData);

export function ActivityProvider({ children }: AuthProviderProps) {
  const { push } = useRouter();
  const [ activities, setActivities ] = useState<Activities[]>([]);

  useEffect(() => {
    api.get('/activities').then(response => {
      setActivities(response.data.activities);
    });
  }, []);

  async function createActivity(activityInput: ActivityInput) {
    const response = await api.post('/activities', {
      ...activityInput,
      created_at: new Date()
    });
    const { activity } = response.data;

    setActivities([...activities, activity]);
  }

  async function login({ email, password }: Credentials) {
    try {
      await api.post('/users', {
        email,
        password
      });

      push('/dashboard');
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ActivitiesContext.Provider value={{ login, activities, createActivity }}>
      {children}
    </ActivitiesContext.Provider>
  )
}
