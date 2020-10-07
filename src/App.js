import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import NavigationBar from "./components/navigator/navigationBar";
import Header from "./components/header/header";
import RegistrationForm from "./components/user.components/registration-form";
import Login from "./components/user.components/login";
import AddItem from "./components/item.components/addItem";
import ItemList from "./components/item.components/itemList";
import EditItems from "./components/item.components/editItems";
import AddCategory from "./components/category.components/addCategory";

function App() {
  return (
      <Router>
          <Header/>
          <div className="container">
              <NavigationBar/>
              <br/>
              <Route path={"/"} exact component={ItemList} />
              <Route path={"/logIn"} component={Login}/>
              <Route path={"/register"} component={RegistrationForm}/>
              <Route path={"/add"} component={AddItem} />
              <Route path={"/addCategory"} component={AddCategory}/>
              <Route path={"/edit/:id"} component={EditItems}/>

              <br/>
          </div>

      </Router>


  );
}

export default App;
