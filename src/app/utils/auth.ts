// src/utils/auth.ts
export const login = async (email: string, password: string) => {
  // Mock authentication
  if (email === "test@example.com" && password === "password") {
    return true;
  }
  return false;
};
