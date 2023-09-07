const express = require('express');
const app = express();
const PORT = 5000;


app.get('/api', (req, res) => {
    res.json({
        users: [{ "id": 1, "first_name": "Alisa", "last_name": "Fenner", "email": "afenner0@yellowpages.com", "gender": "Female", "username": "afenner0", "bio": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui." },
        { "id": 2, "first_name": "Eddie", "last_name": "Bromont", "email": "ebromont1@boston.com", "gender": "Male", "username": "ebromont1", "bio": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
        { "id": 3, "first_name": "Carola", "last_name": "Warbys", "email": "cwarbys2@foxnews.com", "gender": "Female", "username": "cwarbys2", "bio": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem." },
        { "id": 4, "first_name": "Jeannie", "last_name": "Croshaw", "email": "jcroshaw3@quantcast.com", "gender": "Female", "username": "jcroshaw3", "bio": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." },
        { "id": 5, "first_name": "Ulrica", "last_name": "Brambill", "email": "ubrambill4@aboutads.info", "gender": "Agender", "username": "ubrambill4", "bio": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris." },
        { "id": 6, "first_name": "Holden", "last_name": "Praundlin", "email": "hpraundlin5@live.com", "gender": "Male", "username": "hpraundlin5", "bio": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh." },
        { "id": 7, "first_name": "Fernando", "last_name": "Dennitts", "email": "fdennitts6@yahoo.com", "gender": "Male", "username": "fdennitts6", "bio": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus." },
        { "id": 8, "first_name": "Gianina", "last_name": "Paulton", "email": "gpaulton7@ucoz.ru", "gender": "Female", "username": "gpaulton7", "bio": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque." },
        { "id": 9, "first_name": "Salome", "last_name": "Brome", "email": "sbrome8@pen.io", "gender": "Female", "username": "sbrome8", "bio": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus." },
        { "id": 10, "first_name": "Pepito", "last_name": "Beves", "email": "pbeves9@ocn.ne.jp", "gender": "Male", "username": "pbeves9", "bio": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem." }]
    })

});


app.listen(PORT, console.log(`SErvidor Node por el puerto ${PORT}`));