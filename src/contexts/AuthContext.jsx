import axios from "axios";
import { createContext, useState, useMemo, useContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = async (email, password) => {
    // In a real app, you would verify credentials with your backend
        // In a real app, you would create a new user in your backend
    await axios.post("http://localhost:5000/user/login", {
      email,
      password
    },);
    setCurrentUser({
      email,
      name: email.split("@")[0], // Simple way to create a username
      points: 100,
      id: "user-" + Math.random().toString(36).substr(2, 9),
    });
    return Promise.resolve();
  };

  const signup = async (email, password, name) => {
    setCurrentUser({
      email,
      name,
      points: 50, // Starting points for new users
      id: "user-" + Math.random().toString(36).substr(2, 9),
    });
    return Promise.resolve();
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAdmin(false);
    return Promise.resolve();
  };

  const value = useMemo(
    () => ({
      currentUser,
      isAdmin,
      login,
      signup,
      logout,
    }),
    [currentUser, isAdmin]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
