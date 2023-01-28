import Link from "next/link";
import classes from "./GithubProjects.module.css";
import { motion } from "framer-motion";

const gitHubLinks = [
  {
    index: "01",
    name: "Semantic and Sentiment Analysis - NLP",
    link: "https://github.com/musakazim-1397/Semantic-and-Sentiment-analysis-NLP",
  },
  {
    index: "02",
    name: "Generative Adverserial Networks - GANs",
    link: "https://github.com/musakazim-1397/Generative_Adverserial_Networks-GANs",
  },
  {
    index: "03",
    name: "AutoEncoder on images",
    link: "https://github.com/musakazim-1397/autoencoder-on-images",
  },
  {
    index: "04",
    name: "AutoEncoder for dimentionality reduction",
    link: "https://github.com/musakazim-1397/AutoEncoder_for_dimentionality_reduction",
  },
  {
    index: "05",
    name: "RNN multivariate time series",
    link: "https://github.com/musakazim-1397/RNN_multivariate_time_series",
  },
  {
    index: "06",
    name: "RNN LSTM network",
    link: "https://github.com/musakazim-1397/RNN_LSTM",
  },
  {
    index: "07",
    name: "Convolutional Neural Networks on CIFAR-10",
    link: "https://github.com/musakazim-1397/CNN-CIFAR-10-Keras",
  },
  {
    index: "08",
    name: "Artificial Neural Networks loan model",
    link: "https://github.com/musakazim-1397/ANN-loan-project",
  },
  {
    index: "09",
    name: "NLP phrase matching model",
    link: "https://github.com/musakazim-1397/NLP-phrase_matching",
  },
];

const GithubProjects = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.projectName}>Github Projects.</h1>
      <p className={classes.projectPara}>
        Here are some of my projects that I created during my spare time. I
        constantly keep on improving my skills by making these fun projects.
        These projects are available on my github repository
      </p>
      <div className={classes.projects}>
        {gitHubLinks.map((link,index) => (
          <motion.div
            key={index}
            layoutScroll
            style={{ marginBottom: "2.5rem" }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{ ease: "easeOut", duration: 0.7 }}
            className={classes.gitHubProject}
          >
            <div className={classes.projectIndex}>&#47; {link.index}</div>
            <Link
              className={classes.projectLink}
              href={link.link}
              target="_blank"
            >
              &#60;src&#47;&#62;
            </Link>
            <div className={classes.linkName}>{link.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GithubProjects;
