import ReactDOM from "react-dom";

export function renderScript(element, id = "mea-extension") {
  const body = document.querySelector("body");
  const extension = document.getElementById(id);

  if (body) {
    if (extension) {
      ReactDOM.unmountComponentAtNode(extension);
      extension.remove();
    } else {
      const app = document.createElement("div");
      app.id = id;
      body.append(app);
    }
  }
  ReactDOM.render(element, document.getElementById(id));
}
