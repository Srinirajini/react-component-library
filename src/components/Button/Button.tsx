import  React,{FunctionComponent, MouseEventHandler} from 'react';
import {Button as AntDButton} from 'antd';
import styles from './styles.module.less';

export interface ButtonProps {
  label ?: string;

  onClick ?: MouseEventHandler;
}

export const Button:FunctionComponent<ButtonProps> = ({label, onClick
}) => {
  console.log('Srini here...', label);
  return (<AntDButton className={styles['compButton']} 
            type='primary'
            onClick={onClick} >
                {label}
          </AntDButton>)
}

