import {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AuthenticationTabbedComponent() {
    const [key, setKey] = useState('login');

    return (
        <div className="container">
            <Tabs fill
            id="controlled-tab"
            activeKey = {key}
            onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="login" title="Log In">
                    <LoginForm />
                </Tab>

                <Tab eventKey="register" title="Register">
                    <RegisterForm />
                </Tab>

            </Tabs>
        </div>
    );
}

/*
 * The login form component
 */
function LoginForm() {
    return(
    <Form>
        <Form.Group controlId="form-login-username-or-email">
            {/*<Form.Label>Username or email address</Form.Label>*/}
            <Form.Control type="text" placeholder="Enter username or email"/>
        </Form.Group>

        <Form.Group controlId="form-login-password">
            {/*<Form.Label>Password</Form.Label>*/}
            <Form.Control type="password" placeholder="Password"/>
        </Form.Group>

        <Form.Group controlId="form-login-remember">
            <Form.Check type="checkbox" label="Remember me"/>
        </Form.Group>

        <div className="row button-align-middle">
            <Button variant="primary" type="submit" className="auth-button">
                Log In
            </Button>
        </div>
    </Form>
    );

}

/**
 * The register form component
 */ 
function RegisterForm() {
    return(
        <Form>
            <Form.Group controlId="form-register-email">
                {/*<Form.Label>Email address</Form.Label>*/}
                <Form.Control type="email" placeholder="Email address"/>
                <Form.Text className="text-muted text-muted-adjust-padding">
                    We will never share you email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="form-register-username">
                {/*<Form.Label>Username</Form.Label>*/}
                <Form.Control type="username" placeholder="Username"/>
                <Form.Text className="text-muted text-muted-adjust-padding">
                    This is how other users will see you.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="form-register-password">
                {/*<Form.Label>Password</Form.Label>*/}
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>

            <Form.Group controlId="form-register-password-repeat">
                {/*<Form.Label>Repeat password</Form.Label>*/}
                <Form.Control type="password" placeholder="Repeat password"/>
            </Form.Group>

            <div className="row button-align-middle">
                <Button variant="primary" type="submit" className="auth-button">
                    Register
                </Button>
            </div>  
        </Form>
    );
    

}

export default AuthenticationTabbedComponent;