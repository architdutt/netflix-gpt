export const checkValidData = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!emailRegex.test(email)) {
    return "Invalid Email";
  }
  if (!passwordRegex.test(password)) {
    return "Invalid Password";
  }
  return null;
};
