Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.ordersDate}</td>
        <td>${order.ordersTransactionType}</td>
        <td>${order.ordersDescription}</td>
        <td>${order.ordersAmount}</td>
        <td>${order.ordersCategory}</td>
        <td>${order.ordersStatus}</td>
        <td><button>${order.ordersAction}</button></td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});