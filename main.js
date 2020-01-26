class FlagIcon extends HTMLElement {
    constructor() {
        super();
        this._countryCode = null;
    }

    static get observedAttributes() {
        return ['country'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this._countryCode = newVal;
        this._updateRendering();
    }

    connectedCallback() {
        this._updateRendering();
    }

    get country() {
        return this._countryCode;
    }

    set country(v) {
        this.setAttribute('country', v);
    }

    _updateRendering() {
        console.log('update');
        this.innerHTML = `<p>test ${this._countryCode}</p>`
    }
}

customElements.define('flag-icon', FlagIcon);

setTimeout(() => {
    const f = document.querySelector('flag-icon');
    f.setAttribute('country', 'pl');
}, 3000);