import React, { Component } from 'react';
import './Add.css';
import Tabletop from 'tabletop';
import axios from 'axios';


class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {

      title: '',
      link: ''
    }
  }


  // setInfo = () => {
  //   Tabletop.init({
  //     key: 'https://docs.google.com/spreadsheets/d/1zRj1fS3HUlEiPyRwuusk9SjVBFSloOkRAG0ETt_EAic/edit#gid=0',
  //     callback: googleData => {
  //       console.log(googleData.length);
  //       //  const updateG = {
  //       //   "range": "Sheet1!A8:E8",
  //       //   "majorDimension": "ROWS",
  //       //   "values": [
  //       //     ["Item", "Cost", "Stocked", "Ship Date",'1','1'],
  //       //   ],
  //       // }
  //       //   url: 'https://docs.google.com/spreadsheets/d/1zRj1fS3HUlEiPyRwuusk9SjVBFSloOkRAG0ETt_EAic/edit#gid=0',
  //       axios({
  //         method: 'put',
  //         url: 'https://sheets.googleapis.com/v4/spreadsheets/1zRj1fS3HUlEiPyRwuusk9SjVBFSloOkRAG0ETt_EAic/values/Sheet1!A8:E8?',
  //         apiKey: 'AIzaSyA4CNurcbUb9qpJtojw64HZ2lSDlVSmQOk',
  //         clientId: '625334049978-bsrufird66qi6ettd8sgpr7t5gffiqun.apps.googleusercontent.com',
  //         discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  //         scope: "https://www.googleapis.com/auth/spreadsheets",
  //         data: {
  //           "range": "Sheet1!A8:E8",
  //           "majorDimension": "ROWS",
  //           "values": [
  //             ["Item", "Cost", "Stocked", "Ship Date", '1', '1'],
  //           ],
  //         }
  //       });
  //       //  axios.put(
  //       //  {url: 'https://sheets.googleapis.com/v4/spreadsheets/1zRj1fS3HUlEiPyRwuusk9SjVBFSloOkRAG0ETt_EAic/values/Sheet1!A8:E8?valueInputOption=USER_ENTERED/',
  //       //  apiKey: 'AIzaSyA4CNurcbUb9qpJtojw64HZ2lSDlVSmQOk',
  //       //  clientId: '987887256628-2b3h8f1lme1ud98jj6idmcc5ha1pukap.apps.googleusercontent.com',
  //       //  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  //       //  scope:  "https://www.googleapis.com/auth/spreadsheets.readonly",}
  //       //  )
  //       //  .then(updateG)
  //     },
  //     simpleSheet: true
  //   })
  // }

  setChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  onSubmit = (e, Data) => {
    e.preventDefault();
    this.props.addWord({ name: this.state.title, url: this.state.link, id: Date.now().toString(), delete: 'FALSE', action: 'FALSE' });
    this.setState({ title: '', link: '' })



  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>



        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Новое словечко Фалиняно:</label>
          <input type="text" name="title" className="form-control" id="formGroupExampleInput" placeholder="Пример: Зак Галифианакис" value={this.state.title} onChange={this.setChange} />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Ссылка на информацию:</label>
          <input type="text" name="link" className="form-control" id="formGroupExampleInput2" placeholder="Пример: https://ru.wikipedia.org/" value={this.state.link} onChange={this.setChange} />
        </div>
        <button type="submit" className="btn btn-outline-success btn-lg btn-block">Добавить!</button>
      </form>
    )
  }
}

export default Add;