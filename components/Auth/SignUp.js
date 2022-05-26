const SignUp = () => {
    return (
        <form className="">
            <h2>Create Account</h2>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email"/>
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password"/>
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password_confirmation"/>
            </div>
            <button type="submit">Create</button>
        </form>
    )
}

export default SignUp;