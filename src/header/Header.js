import React, { Component } from 'react';
import './header.scss';
import Faliniano from '../img/faliniano.png';
import Add from '../add/Add';
import List from '../list/List';
import Tabletop from 'tabletop';


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      add: false,
      list: false,
      datas: []
    }


  }
  componentDidMount() {
    this._isMounted = true;

    this.getInfo = () => {
       Tabletop.init({
         key: 'https://docs.google.com/spreadsheets/d/1zRj1fS3HUlEiPyRwuusk9SjVBFSloOkRAG0ETt_EAic/edit#gid=0',
         callback: googleData => {
           this.setState({ datas: googleData.sort() });

         },
         simpleSheet: true
       })
      let storage = localStorage.getItem('list');
      let parse_store = JSON.parse(storage);
      this.setState({ datas: parse_store });

    }
    this.getInfo();

    this.getAdd = () => { this.setState({ add: !this.state.add }) }

    this.getList = () => {
      this.setState({ list: !this.state.list })
    }

    this.addWord = data => {
      this.setState({ datas: [...this.state.datas, data] })
      this.addlocal = () => {
        let a = 'list';
        let b = JSON.stringify(this.state.datas);
        localStorage.setItem(a, b);
      }
      setTimeout(this.addlocal, 1000);

    }
    this.funDelete = (e, id, del) => {

      if (del !== 'FALSE') {
        alert('Ну ты не охуевай! эти слова не удаляются!');

      } else {
        this.setState({ datas: this.state.datas.filter(data => data.id !== id) });
        this.addlocal = () => {
          let a = 'list';
          let b = JSON.stringify(this.state.datas);
          localStorage.setItem(a, b);
        }
        setTimeout(this.addlocal, 1000);
      }

    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (<div className="global">
      <div className="row justify-content-center">
        <div className="col_sm">
          <img src={Faliniano} className="card-img" alt="Back" />
          <div className="text-center">
            <h1>Faliniano Library</h1>
            <hr></hr>
          </div>

        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-12">
          <div className="container">
            <button type="button" className="btn btn-outline-secondary btn-lg btn-block" onClick={this.getAdd}>Добавить новый шедевр</button>
            {this.state.add === true ? <Add addWord={this.addWord} /> : ''}
          </div>
          <div className="container" id="list">
            <button type="button" className="btn btn-outline-secondary btn-lg btn-block" onClick={this.getList}>Список Слов:</button>
            {this.state.list === true ? <List datas={this.state.datas} funDelete={this.funDelete} /> : ''}
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div >)
  }
}

export default Header;
