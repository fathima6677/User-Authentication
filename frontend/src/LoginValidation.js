function Validation(values) {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values || !values.email || !values.email.trim()) {
        errors.email = "Email is required";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Invalid email format";
    } else {
        errors.email = "";
    }

    if (!values || !values.password || !values.password.trim()) {
        errors.password = "Password is required";
    } else {
        errors.password = "";
    }

    return errors;
}

export default Validation;
