import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  cityName: Yup.string()
    .min(2, 'Mínimo 3 carácteres')
    .max(20, 'Máximo 20 carácteres')
    .required('Este campo es requerido')
});

export default SignupSchema
