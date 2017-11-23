import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div className="wrapper">
        <header className="header">
          <div className="logo">
            ToDo<span>ultimate</span>
          </div>
          <form className="searchForm" action="#">
            <div className="searchHolder">
              <div className="selectHolder">
                <select>
                  <option>All Todo's</option>
                  <option>On Progress</option>
                  <option>Done</option>
                  <option>Recently Archieved</option>
                </select>
              </div>
              <div className="searchWrapper">
                <input className="formSearch" placeholder="Search for your Todos..." />
                <button type="submit" className="searchSubmit"><span className="fa fa-search"></span></button>
              </div>
            </div>
          </form>
        </header>
        <main className="mainHolder">
          <div className="todoHolder">
          <div className="addTodo">
            <input className="formTodo" type="text" placeholder="Add to your list..." />
            <button className="todoAdd"><span className="fa fa-share"></span></button>
            <span className="errorMsg">Dang it! is your todo empty??</span>
          </div>
          <ul className="todoList">
            <li>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="todoText">Go to meeting.</span>
              </label>
              <span className="removeTodo"><i className="fa fa-close"></i></span>
            </li>
            <li>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="todoText">Complete the Todo Project and jump to another project. Also keep this todo project updating as there might be some bugs that we need to take care of.</span>
              </label>
              <span className="removeTodo"><i className="fa fa-close"></i></span>
            </li>
            <li>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="todoText">I am a todo Text.</span>
              </label>
              <span className="removeTodo"><i className="fa fa-close"></i></span>
            </li>
            <li>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="todoText">Keep on going with the todo's to get successs.</span>
              </label>
              <span className="removeTodo"><i className="fa fa-close"></i></span>
            </li>
          </ul>
          </div>
          <aside className="todoSidebar">
           <h3>View By</h3>
           <ul className="filterList">
            <li>All Todo's</li>
            <li>On Progress</li>
            <li>Done</li>
            <li>Recently Archieved</li>
           </ul>
           <span className="leftTodo"><i className="fa fa-check-circle"></i>1 item left</span>
          </aside>
        </main>
        <footer className="footer">
          <div className="checkAll">
          <label className="checkbox">
            <input type="checkbox" />
            <span className="todoText">Mark All</span>
          </label>
          </div>
          <span className="copyright">By <a rel="noopener noreferrer" target="_blank" href="http://bipu.fleate.com/">Bipu</a> on <a rel="noopener noreferrer" href="http://bipu.fleate.com/" target="_blank">Github</a>.</span>
        </footer>
      </div>
    );
  }
}

export default Todo;
