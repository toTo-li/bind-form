import React, { Component } from 'react';
import classNames from 'classnames';

/**
 * type ['primary','minor','danger']
 */
const ButtonTypes = ['primary','minor','danger'];

export type ButtonType = (typeof ButtonTypes)[number];

export interface BaseButtonProps {
    name:string,
    type?: ButtonType;
    className?: string;
    children?: React.ReactNode;
    success?:()=>void,
    disabled?:boolean,
    cStyle?:{}
  }
  
class Button extends Component<BaseButtonProps,any>{
    handleClick = ()=>{
        let {
            success
        } = this.props;
        if(success){
            success();
        }
    }
    render(){
        let {
            cStyle,
            children,
            type = '',
            className = '',
            disabled = false
        } = this.props;
        return (
            <button 
                disabled={disabled} 
                className={classNames('ats-btn',{[`ats-btn__${type}`]:type},className)}  
                style={cStyle} 
                onClick={this.handleClick}
            >
                {children}
            </button>
        );
    }
}

export default Button;