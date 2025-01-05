const ValidateInput = (event) => {
  console.log(event.target.id);
  // check email
  // check country
};

const CreateInput = (name, description, type = "text") => {
  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");

  const label = document.createElement("label");
  label.setAttribute("for", name);
  label.textContent = description;

  const input = document.createElement("input");
  input.type = type;
  input.id = name;

  inputDiv.append(label, input);

  input.addEventListener("change", ValidateInput);
  return inputDiv;
};

const ShowForm = () => {
  const main = document.querySelector("#main");

  const feedbackBox = document.createElement("div");
  feedbackBox.classList.add("feedback-box");
  const feedbackGreeting = document.createElement("p");
  feedbackGreeting.textContent = "Fill out the form.";
  feedbackBox.append(feedbackGreeting);

  const form = document.createElement("form");
  form.setAttribute("novalidate", "");
  form.append(CreateInput("email", "Email", "email"));
  form.append(CreateInput("country", "Country"));
  form.append(CreateInput("zip", "Zip-Code", "number"));
  form.append(CreateInput("password", "Password", "password"));
  form.append(CreateInput("password-confirm", "Password", "password"));
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";
  form.append(submitBtn);

  main.append(feedbackBox, form);
  /*
  Email, Country, Zip Code, Password and Password Confirmation fields
  */
};

export default ShowForm;
