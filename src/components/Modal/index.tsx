import "./style.scss";

export default function Modal({
  content,
  close,
}: {
  content: any;
  close: any;
}) {
  let position = content.id - 1;
  return (
    <div className="modal">
      <div className="container">
        <div className="header">
          <h3>Modal</h3>
          <button className="close" onClick={close}>
            x
          </button>
        </div>
        <div className="content">
          <p>
            O Username do Usuário é <span>{content.username}</span>
          </p>
          <p>
            Seu Id é <span>{content.id}</span> e sua posição{" "}
            <span>{position}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
