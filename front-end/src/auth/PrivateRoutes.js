import{ Redirect, Route } from 'react-router-dom'

const  PrivateRoute= (props) => {
const user= null
if(!null)return<Redirect to="/login"/>
return <Route {...props}/>

    return ( <div>

    </div> );
}
 
export default PrivateRoute;