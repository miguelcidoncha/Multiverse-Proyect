import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css'; // Cambié el nombre del archivo CSS

const Login = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: '',
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('El nombre es obligatorio'),
        lastName: Yup.string().required('Los apellidos son obligatorios'),
        email: Yup.string().email('Correo electrónico no válido').required('El correo electrónico es obligatorio'),
        password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
        mobile: Yup.string().matches(/^\d+$/, 'El número de móvil debe contener solo números').required('El número de móvil es obligatorio'),
    });

    const handleSubmit = (values, { resetForm }) => {
        // Aquí puedes manejar la lógica de envío del formulario, por ejemplo, enviar los datos al servidor
        console.log('Formulario enviado:', values);
        resetForm();
    };

    return (
        <div className="login-container" data-testid="login">
            <div className="login-image">
                <img src="https://res.cloudinary.com/ddgpmxprs/image/upload/v1693860471/ConanRegister2_ejaovf.jpg" alt="Imagen de registro" />
            </div>
            <div className="login-form">
                <h2>User register</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="firstName">FirstName</label>
                                <Field type="text" id="firstName" name="firstName" />
                                <ErrorMessage name="firstName" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">LastName</label>
                                <Field type="text" id="lastName" name="lastName" />
                                <ErrorMessage name="lastName" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field type="email" id="email" name="email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field type="password" id="password" name="password" />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mobile">Mobile</label>
                                <Field type="text" id="mobile" name="mobile" />
                                <ErrorMessage name="mobile" component="div" className="error" />
                            </div>

                            <button type="submit" className="register-button">Register</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;

