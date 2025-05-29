export default class CascadeSlider {
    constructor(selector, options) {
        this.container = document.querySelector(selector);
        this.itemClass = options.itemClass || 'cascade-slider_item';
        this.arrowClass = options.arrowClass || 'cascade-slider_arrow';
        this.items = [...this.container.querySelectorAll('.' + this.itemClass)];
        this.arrows = [...this.container.querySelectorAll('.' + this.arrowClass)];
        this.itemCount = this.items.length;
        this.currentIndex = 0;
        this.changeIndex(this.currentIndex);
        this.setupEventListeners();
        this.addDataAttributes();
    }

    setupEventListeners() {
        this.arrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                const action = arrow.dataset.action;
                const nowIndex = this.items.findIndex(item => item.classList.contains('now'));

                if (action === 'next') {
                    this.changeIndex((nowIndex + 1) % this.itemCount);
                } else if (action === 'prev') {
                    this.changeIndex((nowIndex - 1 + this.itemCount) % this.itemCount);
                }
            });
        });
    }

    addDataAttributes() {
        this.items.forEach((item, index) => item.setAttribute('data-slide-number', index));
    }

    changeIndex(newIndex) {
        this.items.forEach(item => item.classList.remove('now', 'next', 'prev'));
        this.items[newIndex].classList.add('now');

        this.items[newIndex === (this.itemCount - 1) ? 0 : newIndex + 1].classList.add('next');

        this.items[newIndex === 0 ? this.itemCount - 1 : newIndex - 1].classList.add('prev');

    }
}