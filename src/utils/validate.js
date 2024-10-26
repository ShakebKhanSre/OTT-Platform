export const checkValidateData = (email, password) => {
  const isEmailValid = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  if (!isEmailValid) return "Invalid Email";
  if (!isPasswordValid) return "Password Invalid";
  return null;
};
