import { useState } from "react";
import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const signupSubmitHandler = (event) => {
    event.preventDefault();
    window.alert(`Sign up successfully: ${email}`);
    setEmail("");
  };

  return (
    <form
      method="post"
      className={classes.newsletter}
      onSubmit={signupSubmitHandler}
    >
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        value={email}
        onChange={emailChangeHandler}
        required
      />
      <button>Sign up</button>
    </form>
  );
}

export default NewsletterSignup;
