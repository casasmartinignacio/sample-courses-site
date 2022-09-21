import * as Yup from 'yup';
//eslint-disable-next-line
const passReg = new RegExp("^[A-Za-z0-9/*\-,.]+([A-Za-z0-9/*\-,.]+)*$");

export const validationSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, "*Names must have at least 2 characters")
  .max(100, "*Names can't be longer than 100 characters")
  .required("*First name is required"),
  lastName: Yup.string()
  .min(2, "*Names must have at least 2 characters")
  .max(100, "*Names can't be longer than 100 characters")
  .required("*Last name is required"),
  email: Yup.string()
  .email("*Must be a valid email address")
  .max(100, "*Email must be less than 100 characters")
  .required("*Email is required"),
  organization: Yup.string()
  .min(2, "*Organization must have at least 2 characters")
  .max(100, "*Organization must be less than 100 characters")
  .required("*Organization is required"),
  countryId: Yup.string()
  .required("*Country is required"),
  password: Yup.string()
  .min(6, 'Password is too short - should be 6 chars minimum.')
  .matches(passReg, "*Password is not valid")
  .required("*Password is required"),
  cpass: Yup.string()
  .required("*Password is required")
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
});