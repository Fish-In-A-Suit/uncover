import {useState} from 'react';
import '../css/Authentication.css';

function AuthenticationPage() {

    return(
        <div className="row">
            <div className="panel-auth container-fluid">
                <PanelHeading></PanelHeading>
            </div>
        </div>
    );
}

function PanelHeading() {
    return (
        <div className="panel-heading">
            <PanelHeadingItem 
            text="Login"
            openByDefault={true}>
                <p>testLogin</p>
            </PanelHeadingItem>

            <PanelHeadingItem 
            text="Register"
            openByDefault={false}>
                <p>testRegister</p>
            </PanelHeadingItem>
        </div>
    );
}

/*
A PanelHeadingItem consists of the text and a subsequent DropdownForm 
*/
function PanelHeadingItem(props) {    
    const[open, setOpen] = useState(props.openByDefault);

    return(
        <div className="col-xs-6 phi">
            <a href="#" className="menu-item" id={"phi-"+props.text} onClick={() => setOpen(!open)}>
            { props.text }
            </a>

            {open && props.children}
        </div>
    );
}



function PanelBody() {

}

export default AuthenticationPage;