import { Redirect, Route } from "react-router-dom";
import {useSelector} from "react-redux";


export default function PublicRoute({component: Component, path, auth}) {
  const authData = useSelector((state) => state.auth.data);
  if (!authData){
      return <Redirect to="/admin" />
  }
  return <Route path={path}>
      <Component />
  </Route>
}
