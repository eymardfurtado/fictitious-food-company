import React from 'react';
import classes from './Input.css';
const Input = (props) => {

  let inputElement = null;
  const inputClasses = [classes.InputElement];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid)
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = (
        <label>

          <input
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value} 
            onBlur={props.changed}

            onChange={props.changed} />
        </label>
      );
      break;
    case ('textarea'):
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onBlur={props.changed}
          onChange={props.changed}
        />);
      break;
    case ('checkbox'):
      inputElement = (
        <div>
          <input
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onBlur={props.changed}

            onChange={props.changed} />
          <label>{props.elementConfig.label2}</label>
        </div>);
      break;
    case ('select'):
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value} onBlur={props.changed}

          onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
          )

          )}
        </select>);
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed} />);
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.elementConfig.label}</label>
      <div className={classes.Element}>
        {inputElement}
  <label className={classes.Label2}>{props.elementConfig.label2}</label><div><span>{props.elementConfig.type == 'checkbox' ? "* there's no mailing list" : ""}</span></div>
      </div>
    </div>
  )
}

export default Input
