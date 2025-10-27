// Simulate authentication using localStorage with session tokens

const SESSION_KEY = 'ticketapp_session';

export const signup = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }
  const newUser = { email, password, id: Date.now().toString() };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  // Create session token
  const sessionToken = {
    userId: newUser.id,
    email: newUser.email,
    timestamp: Date.now(),
    expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionToken));
  return newUser;
};

export const login = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Create session token
  const sessionToken = {
    userId: user.id,
    email: user.email,
    timestamp: Date.now(),
    expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionToken));
  return user;
};

export const logout = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const getCurrentUser = () => {
  const sessionToken = JSON.parse(localStorage.getItem(SESSION_KEY));
  if (!sessionToken) return null;

  // Check if session is expired
  if (Date.now() > sessionToken.expiresAt) {
    logout(); // Clear expired session
    return null;
  }

  return {
    id: sessionToken.userId,
    email: sessionToken.email
  };
};

export const isAuthenticated = () => {
  return getCurrentUser() !== null;
};
