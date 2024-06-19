import Alert from "react-bootstrap/Alert";

const ErrorAlert = (error: any) => {
 if ( error.errorMessage != null ) {
    return (
          <Alert> 
            Incorrect email or password.
          </Alert>
        )} else {
          return []
        }
 } 

export default ErrorAlert;
