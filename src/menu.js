export default function menu() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Our Menu';

    const ul = document.createElement('ul');

    // Loop to add list items to ul
    const menuItems = [
        'Paratha',
        'Chai',
        'Coffee',
        'Omelette',
        'Poha',
        'Chola Bhatura',
    ];
    for (let i = 0; i < menuItems.length; i++) {
        const li = document.createElement('li');
        li.textContent = menuItems[i];
        ul.appendChild(li);
    }

    content.append(h1, ul);
}
