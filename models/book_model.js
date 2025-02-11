const book ={
    bookData:[
        {'name' :"C++", 'author' :"Jim Smith"},
        {'name' :"Java", 'author' :"Lisa Jones"},
        {'name' :"MySQL", 'author' :"Bob Danieles"}
    ],
    getAllBooks(callback){
        callback(this.bookData);
    },
    getOneBook(id,callback){
        callback(this.bookData[id]);
    },
    addBook(newBook,callback){
        //seuraavassa lauseessa on sql-injektio
        let sql="INSERT INTO book VALUES("+newBook.name+","+newBook.author+")";
        callback(sql);
    }
}

module.exports=book;