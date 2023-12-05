/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialStage = {
  user: null,
  isAutenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAutenticated: true };
    case "logout":
      return { ...state, user: null, isAutenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAutenticated }] = useReducer(reducer, initialStage);
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatchEvent({ type: login, payload: FAKE_USER });
  }
  function logout() {
    dispatchEvent({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={(user, isAutenticated, login, logout)}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error(" AuthContext was used outside AuthProvider");
}

export { AuthProvider, useAuth };
