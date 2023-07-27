# tokped-video-clone
This is the midterm project for GIGIH 3.0 Full Stack Engineering, made by Raihan Mufid Setiadi


# 1. Database Structure
I used MongoDB as database on this project. The database was named "videoProduct" with 3 collections inside of it, comment, video, and product.

* "video" collection structures
```
{
    _id : ObjectId
    title : String
    creator : String
    thumbnail : String (URL)
    Video : String (URL)
}
```

* "Product" collection structures
```
{
    _id : ObjectId
    name: String
    link : String (URL)
    image : String (URL)
    price : Number
}
```
* "Comment" collection structures
```
{
    _id : ObjectId
    username: String
    comment : String 
    uploadedAt : date()
    updatedAt : date()
    videoID : String
}
```
# 2. API Structure
Dalam aplikasi ini terdapat 3 model yaitu video, comment, dan product yang terhubung langsung dari database videProduct. Setiap model mewakili masing masing collections.
Perlu diingat "id" disini adalah index dari item. Index sendiri berisi urutan item sesuai urutan POST dari item tersebu, index dapat digunakan untuk mendapatkan objectId 
dari item tertentu yang dapat digunakan untuk operasi PATCH dan DELETE.

* # "video" Model API
- Menambahkan video baru : POST /api/post/video
- Mendapatkan list semua video : GET /api/getAll/video
- Mendapatkan video  dengan index : GET /api/get/video/:id
- Mengupdate informasi video : PATCH /api/update/video/:id
- Menghapus video : DELETE /api/delete/video/:id

* # "product" Model API
- Menambahkan product baru : POST /api/post/product
- Mendapatkan list semua product : GET /api/getAll/product
- Mendapatkan list semua product pada video spesifik : GET /api/getAll/product/:videoIndex
- Mendapatkan produck  dengan index : GET /api/get/product/:id
- Mengupdate informasi product : PATCH /api/update/product/:id
- Menghapus product : DELETE /api/delete/product/:id

* # "comment" Model API
- Menambahkan product comment baru pada video : POST /api/post/comment/:videoIndex
- Mendapatkan list semua comment : GET /api/getAll/comment
- Mendapatkan list semua comment pada video spesifik : GET /api/getAll/comment/:videoIndex
- Mendapatkan produck  dengan index : GET /api/get/comment/:id
- Mengupdate isi comment : PATCH /api/update/comment/:id
- Menghapus comment : DELETE /api/delete/comment/:id

# 3. API Request and Responses
#Video
* Video object
```
{
  title: string
  creator: string
  thumbnail : String (URL)
  video: String (URL)
}
```
**GET api/getAll/video**
----
  Returns all videos in the database.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  videos: [
           {<video_object>},
           {<video_object>},
           {<video_object>}
         ]
}
```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ error : "Internal Server Error" }`  

**GET api/get/video/:id**
----
  Returns the specified video based on the id, the id itself is based on index of the video.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <video_object> }` 
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ error : "Internal Server Error" }`  


**POST api/post/video**
----
  Creates a new video and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
      title: string,
      creator: string,
      thumbnail : String (URL),
      video: String (URL)
  }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <video_object> }` 


**PATCH api/update/video/:id**
----
  Updates fields on the specified video and returns the updated object. The id itself is based on index of the video.
  Index of the video then used to find real videos objectId inside the db
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
```
  {
      title: string,
      creator: string,
      thumbnail : String (URL),
      video: String (URL)
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <video_object> }`  
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ error : "Bad Request" }`  


**DELETE api/delete/video/:id**
----
  Deletes the specified video. . The id itself is based on index of the video.
  Index of the video then used to find real videos objectId inside the db

* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  

* **Success Response:** 
  * **Code:** 200 
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ error : "Bad Request" }`  


#Product
* Product object
```
{
  name: string
  link : String (URL)
  image: String (URL)
  price : Number
}
```

**GET api/getAll/product**
----
  Returns all products  in the database.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  product: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
```


**GET api/getAll/product/:videoIndex**
----
  Returns all products in the database to display on certain video based on video index
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  product: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ error : "Internal Server Error" }`  



**GET api/get/product/:id**
----
  Returns the specified product based on the id, the id itself is based on index of the product.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <product_object> }` 
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ error : "Internal Server Error" }`  

**POST api/post/product**
----
  Creates a new product and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    name: string,
    link : String (URL),
    image: String (URL),
    price : Number
  }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <product_object> }` 

**PATCH api/update/product/:id**
----
  Updates fields on the specified product and returns the updated object. The id itself is based on index of the product.
  Index of the product then used to find real product objectId inside the db

* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
```
  {
      name: string,
      link : String (URL),
      image: String (URL),
      price : Number
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <product_object> }`  
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ error : "Bad Request" }`  


**DELETE api/delete/product/:id**
----
  Deletes the specified product. The id itself is based on index of the product.
  Index of the product then used to find real product objectId inside the db

* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  

* **Success Response:** 
  * **Code:** 200 
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ error : "Bad Request" }`  


  #Comment
* Comment object
```
{
  username: string
  comment : string
  datecreated : date
  dateupdated : date
  objectId: String
}
```

**GET api/getAll/comment**
----
  Returns all comments in the database.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  comment: [
           {<comment_object>},
           {<comment_object>},
           {<comment_object>}
         ]
}
```


**GET api/getAll/comment/:videoIndex**
----
  Returns all comments in the database with objectId related to certain videos where the comment was uploaded

* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  comment: [
           {<comment_object>},
           {<comment_object>},
           {<comment_object>}
         ]
}
```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ error : "Internal Server Error" }`  



**GET api/get/comment/:id**
----
  Returns the specified comment based on the id, the id itself is based on index of the comment.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <comment_object> }` 
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ error : "Internal Server Error" }`  


**POST api/post/comment/:videoIndex**
----
  Creates a new comment on the certain video (ObjectId of the video will be saved inside the comment object) 
  and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
      username: string,
      comment : string

  }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <comment_object> }` 

**PATCH api/update/comment/:id**
----
  Updates fields on the specified comment and returns the updated comment. The id itself is based on index of the comment.
  Index of the comment then used to find real comment objectId inside the db

* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
```
  {
      username: string,
      comment : string
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <comment_object> }`  
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ error : "Bad Request" }`  


**DELETE api/delete/comment/:id**
----
  Deletes the specified commnet . The id itself is based on index of the comment.
  Index of the comment then used to find real comment objectId inside the db

* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  

* **Success Response:** 
  * **Code:** 200 
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ error : "Bad Request" }`  


