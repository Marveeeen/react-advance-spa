import { Form, useActionData } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
  const data = useActionData();

  useEffect(() => {
    if (data?.message) {
      window.alert(data.message);
    }
  }, [data]);

  return (
    <Form method="post" className={classes.newsletter}>
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </Form>
  );
}

export default NewsletterSignup;
