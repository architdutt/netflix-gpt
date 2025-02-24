export const checkValidData = (email, password, name, isSignInForm) => {
  const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Password123
  if (!emailRegex.test(email)) {
    return "Email is not valid";
  }
  if (!passwordRegex.test(password)) {
    return "Password is not valid";
  }
  if (!isSignInForm && name != null && name.length <= 0) {
    return "Name is required";
  }
  if (!isSignInForm && name && name.length < 3) {
    return "Name is too short";
  }
  return null;
};
