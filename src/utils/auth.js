// Simulate authentication using localStorage

export const signup = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }
  const newUser = { email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  return newUser;
};

export const login = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    throw new Error('Invalid email or password');
  }
  localStorage.setItem('currentUser', JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};
