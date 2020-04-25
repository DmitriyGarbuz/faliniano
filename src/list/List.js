import React, { Component } from 'react';
import './list.css';
import Word from '../word/Word'
// const info = [{name: "Зак Галифианакис", url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BB%D0%B8%D1%84%D0%B8%D0%B0%D0%BD%D0%B0%D0%BA%D0%B8%D1%81,_%D0%97%D0%B0%D0%BA", id: 0, delete: "false", action:"false" },
// {name: "Джони Синс", url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%BD%D0%BD%D0%B8_%D0%A1%D0%B8%D0%BD%D1%81", id: 1, "delete": "false", "action":"false" },
// {name: "Степан Гига", url: "https://uk.wikipedia.org/wiki/%D0%93%D1%96%D0%B3%D0%B0_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87", id: 2, delete: "false", action:"false" },
// {name: "Лу Фириньо", url: "https://ru.wikipedia.org/wiki/%D0%A4%D0%B5%D1%80%D1%80%D0%B8%D0%BD%D1%8C%D0%BE,_%D0%9B%D1%83", id: 3, delete: "false", action:"false" },
// {name: "Эдипов тамарин", url: "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BF%D0%BE%D0%B2_%D1%82%D0%B0%D0%BC%D0%B0%D1%80%D0%B8%D0%BD", id: 4, delete: "false", action:"false" },
// {name: "Дурукуль", url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D1%80%D0%B8%D0%BA%D0%B8%D0%BD%D0%B0", id: 5, delete: "false", action:"false" }
// ]



class List extends Component {




    render() {
        return (<div>
            {this.props.datas ?
                this.props.datas.map(data =>
                    <Word {...data}
                        key={data.id}
                        id={data.id}
                        funDelete={this.props.funDelete}
                        addWord={this.addWord} />
                ) : <div className="text-center"><div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                </div>
            }
        </div>)
    }
}

export default List;