import "./Button.css";

function Button({ Text, Url, Target = "_blank", IsEmail, Information }) {
  return (
    <div className="p-2">
      <a
        href={!IsEmail ? Url : `mailto:${Url}`}
        className="button"
        title={Information}
        role="button"
        target={Target}
      >
        {Text}
      </a>
    </div>
  );
}
export default Button;
