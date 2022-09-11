
class ExampleItem {
    constructor (name, phone, email, product) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
    }
}

const testData = [
    new ExampleItem('Kuanysh Aptaizhanov', parseInt('+79777024277'), 'kuanysh.aptayzhanov@mail.ru', 'course-js'),
    new ExampleItem('Khabib Nurmagomedov', parseInt('+79055557744'), 'khabib.ufc@mail.ru', 'course-html'),
    new ExampleItem('Max Holloway', parseInt('+79667889906'), 'max.blessed@mail.ru', 'course-vue'),
    new ExampleItem('Jon Jones', parseInt('+79776667799'), 'jones.bones@mail.ru', 'course-php'),
    new ExampleItem('Yusuf Raisov', parseInt('+78889995544'), 'yusuf.borz@mail.ru', 'course-wordpress')
]

function getRandomIndex (max) {
    return Math.floor(Math.random() * max);
}

export default function getRandomData () {
    let index = getRandomIndex(testData.length)
    return testData[index];
}
