import * as React from 'react';
import './ListaDeValores.css'

interface ListProps {
    text: string;
    value: Array<string>;
}
export class ListaDeValores extends React.Component <ListProps,any> {


    delItem(){

    }

    render() {
        return (
            <div>
                <p>Lista</p>
                <li className={'list'}>
                    {this.props.value.map((element:string, index:number) => {
                        return <ul key={index}>{ element }
                                    <button className={'buttonDel'}
                                            onClick={this.delItem.bind(this)}
                                    >Delete</button>
                               </ul>
                        }
                    )}
                </li>
            </div>
        );
    }


}