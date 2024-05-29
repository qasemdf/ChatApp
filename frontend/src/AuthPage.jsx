import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post( //making axios call a post request to our server 
        'http://localhost:3001/authenticate',
        {username: value}
        )
        .then(r => props.onAuth({...r.data, secret:value }))
        .catch(e => console.log('error', e))
    };
  
    return (  //setting up an html form, takes username as input then has a button to submit
              // uppon submition trigger on submit function, it sets a user in the user state 
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div> 
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;