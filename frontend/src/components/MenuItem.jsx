export default function MenuItem({ item, onAdd }) {
  return (
    <article className="menu-item">
      <div>
        <div className="menu-item__title">
          <h3>{item.name}</h3>
          {item.popular && <span>Popular</span>}
        </div>
        <p>{item.description}</p>
      </div>
      <div className="menu-item__actions">
        <strong>{item.price.toFixed(2)} EUR</strong>
        <button type="button" onClick={() => onAdd(item)}>
          Adicionar
        </button>
      </div>
    </article>
  );
}
