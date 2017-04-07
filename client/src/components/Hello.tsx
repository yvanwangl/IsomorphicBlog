/**
 * Created by wyf on 2017/4/7.
 */
import React, {Component} from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
}

//export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}</h1>
export class Hello extends Component<HelloProps, undefined> {
    render(){
        return <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
    }
}