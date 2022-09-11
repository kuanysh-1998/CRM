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
    let id = requests.length > 0 ? requests[requests.length - 1]['id'] + 1 : 1;
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

function getRequests () {
    return prepareRequests(requests);
}

const products = {
    'course-html': 'Курс по верстке',
    'course-js': 'Курс по JavaScript',
    'course-vue': 'Курс по VUE JS',
    'course-php': 'Курс по PHP',
    'course-wordpress': 'Курс по WordPress'
}

const statuses = {
    'new': 'Новая',
    'inwork': 'В работе',
    'complete': 'Завершена'
}

function prepareRequests (requests) {
    return requests.map((item) => {
        return {
            ...item,
            date: new Date(item.date).toLocaleDateString(),
            productName: products[item.product],
            statusName: statuses[item.status]
        }
    })
}

function getRequestById (id) {
    const request = requests.find((item) => item.id == id);

    request.dateDate = new Date(request.date).toLocaleDateString();
    request.dateTime = new Date(request.date).toLocaleTimeString();

    return request;
}

function updateRequest (formData) {

    const request = getRequestById(formData.get('id'));

    request.name = formData.get('name'); 
    request.email = formData.get('email'); 
    request.phone = formData.get('phone'); 
    request.product = formData.get('product'); 
    request.status = formData.get('status'); 

    saveRequests();

}

export {addRequest, getRequests, getRequestById, updateRequest}