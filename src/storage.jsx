export const saveUser = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const getUser = (accNo, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find(u => u.accNo === accNo && u.password === password);
};

export const updateUser = (accNo, balance, transactions) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users = users.map(u =>
    u.accNo === accNo ? { ...u, balance, transactions } : u
  );
  localStorage.setItem("users", JSON.stringify(users));
};
