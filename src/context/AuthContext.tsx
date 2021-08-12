import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/api";

type Credentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  login: (credentials: Credentials) => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const { push } = useRouter();

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
    <AuthContext.Provider value={{ login }}>
      {children}
    </AuthContext.Provider>
  )
}
