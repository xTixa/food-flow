export default function CartSummary({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside className="cart-summary">
      <h2>Carrinho</h2>
      {items.length === 0 ? (
        <p>Adiciona pratos para comecar o pedido.</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                <span>{item.name}</span>
                <strong>{item.price.toFixed(2)} EUR</strong>
              </li>
            ))}
          </ul>
          <div className="cart-summary__total">
            <span>Total</span>
            <strong>{total.toFixed(2)} EUR</strong>
          </div>
          <button type="button">Finalizar pedido</button>
        </>
      )}
    </aside>
  );
}
