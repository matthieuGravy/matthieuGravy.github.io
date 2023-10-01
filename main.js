import "./main.scss";
import logo from "./matthieuGravy.svg";

document.querySelector("#app").innerHTML = `
  <article>
      <img src="${logo}" class="logo vanilla" alt="Matthieu Gravy" />
      <h1><span class="col-2">M</span>atthieu <span class="w-600"><span class="col-2">G</span>ravy</span></h1>

    <p>
    <span>Web dev junior </span>| <span>JS enthousiast </span>  | <span>Ubuntu lover </span>  | <span>#BeCode trainee </span>   
    <br />
    </p>
    <div class="button-box">
      <a class="button" href="https://www.linkedin.com/in/matthieugravy/" target="_blank">
      Linkedin
      </a>
      <a class="button " href="https://github.com/matthieuGravy" target="_blank">
      gitHub</a>
      <a  class="button"  href ="https//pommepatate.be" target="_blank">
      pommepatate.be<a/>
    </div>
  </article>
`;
