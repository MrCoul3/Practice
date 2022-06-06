const TAG = 'div';

window.dom = (function () {
    function createElement(tag = TAG, content) {
        const element = document.createElement(tag);
        element.textContent = content;
        return element;
    }

    return {createElement}
})();