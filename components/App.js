import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './header';
import history from '../history';




const App =()=>{
    return(
        <div className="ui container">
            <Router history={history}>
            <div>
            <Header/>
            <Switch>
              <div style={{backgroundColor:'#1e272e'}}> 
            <Route path='/' exact component={StreamList}/>
            <Route path='/streams/new' exact component={StreamCreate}/>
            <Route path='/streams/edit/:id' exact component={StreamEdit}/>
            <Route path='/streams/delete/:id' exact component={StreamDelete}/>
            <Route path='/streams/watch/:id' exact component={StreamShow}/>
            
                </div>
            </Switch>
         </div>
         </Router>
        </div>
    );
}


export default App;
