import React, { Component } from 'react';


class Word extends Component {
    state = {
        data: this.props.data || '',
        name: this.props.name || '',
        url: this.props.url || '',
        id: this.props.id || '',
        delete: this.props.delete || '',
        action: this.props.action || ''
    }


    render() {
        return (
            <div className="box-word">
                <div className="row justify-content-between">
                    <div className="col-8 ">
                        <p className="h4">{this.props.name}</p>
                    </div>
                    <div className="col-3">
                        <a href={this.props.url}><button type="button" className="btn btn-info">Подробнее -></button></a>
                        <button type="button" className="btn btn-danger" onClick={(e) => this.props.funDelete(e, this.props.id, this.props.delete)}>Х</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Word