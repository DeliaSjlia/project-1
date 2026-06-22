const STORAGE_KEY = "todos";

export function getStorage() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveStorage(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
}
