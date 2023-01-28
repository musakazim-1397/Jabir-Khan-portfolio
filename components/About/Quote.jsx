import classes from "./Quote.module.css";

const Quote = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.quote1}>
        &ldquo;Choose a job you love and you will never have to work a day
      </h1>
      <h1 className={classes.quote1}> in your life.&rdquo;</h1>
      <div className={classes.quoteContainer}>
        <h1 className={classes.quote2}>
          &ldquo;Choose a job you love and you will never have to work a day in
          your life.&rdquo;
        </h1>
      </div>
      <p className={classes.name}>&#45;&#45;&#45;Confucius</p>
    </div>
  );
};

export default Quote;
