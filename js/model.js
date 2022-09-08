let requests = loadRequests();

class Request {
    constructor (id, name, phone, email, product) {
        this.id = id,
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.product = product,
        this.date = new Date().toISOString(),
        this.status = 'new'
    }
}

function addRequest (formData) {
    let id = requests.length > 0 ? requests[requests.length - 1]['id'] + 1 : 0;
    let request = new Request (id, formData.get('name'), formData.get('phone'), formData.get('email'), formData.get('product'));
    requests.push(request);
    
    saveRequests();
    console.log(requests);
}

function saveRequests () {
    localStorage.setItem('requests', JSON.stringify(requests));
}

function loadRequests () {
    if(localStorage.getItem('requests')) {
        return JSON.parse(localStorage.getItem('requests'));
    } else {
        return []; 
    }
}

export {addRequest}