import * as React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <h2 style={{color: "red", marginTop:30}}>CHAT WITH FIREBASE</h2>
                <form action="/action_page.php" style={{marginTop:30, marginBottom:150}}>
                    <div className="row">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div className="row">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginTop:40}}>Đăng nhập</button>
                </form>
            </div>
        )
    }
}

export default Login;