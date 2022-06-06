export class Service {

    static instance = undefined;
    static getInstance() {
        if (!Service.instance) {
            Service.instance = new Service();
        }
        return Service.instance;
    }
    // Подписка на события
    listeners = {
        add: [],
        play: [],
        pause: [],
        timeline: [],
    };

    on(event, callback) {
        if (Array.isArray(callback) && callback.length) {
            for (const clbck of  callback) {
                this.listeners[event].push(clbck);
            }
        } else {
            this.listeners[event].push(callback);
        }
    }
    // Отписка от события
    off(event, callback) {
        this.listeners[event] = this.listeners[event]
            .filter(listener => listener !== callback);
    }
    // Публикуем событие (ещё говорят — диспатчим, эмитим)
    emit(event, data) {
        this.listeners[event].forEach( (listener) => {
            listener(data);
        });
    }
}