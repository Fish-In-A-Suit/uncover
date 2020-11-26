import {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function ControlledTabs() {
    const [key, steKey] = useState('login');

    return (
        <div className="container">
            <Tabs fill
            id="controlled-tab"
            activeKey = {key}
            onSelect={(k) => steKey(k)}
            >
                <Tab eventKey="login" title="Log In">
                    Login stuff here
                </Tab>
                <Tab eventKey="register" title="Register">
                    Register stuff here
                </Tab>
            </Tabs>
        </div>
        
    );
}

export default ControlledTabs;