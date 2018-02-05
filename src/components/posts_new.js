import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component{
  renderField(field){
    const className=`form-group  ${field.meta.touched && field.meta.error ? 'has-danger': ''}`;
    return(
      <div className={className}>
      <label>{field.label}</label>
        <input
         className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
        {field.meta.touched ? field.meta.error : ' '}
        </div>
      </div>
    );
  }

  onSubmit(values){
    //console.log(values);

    this.props.createPost(values, ()=>{this.props.history.push('/');});
  }

  render(){
    const {handleSubmit}= this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
       <Field
          label="Title"
          name="title"
          component={this.renderField}
          />
      <Field
          label="Categories"
          name="categories"
          component={this.renderField}
             />
      <Field
          label="Content"
          name="content"
          component={this.renderField}
              />
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to="/"  className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};

  //validate the thing
  if(!values.title){
    errors.title = "Enter title";
  }
  if(!values.categories){
    errors.categories = "Enter category";
  }
  if(!values.content){
    errors.content = "Enter content";
  }


  //return a error object

  return errors;
}


export default reduxForm({
  validate: validate,
  //config option
  form: 'PostsNewForm'  // unique name
})(
  connect(null, {createPost}) (PostsNew)
);
