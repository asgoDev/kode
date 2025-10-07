export function useAuth() {
  const token = localStorage.getItem("token");
  return !!token; // true si hay token, false si no
}
