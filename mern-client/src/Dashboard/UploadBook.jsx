import React, { useState } from "react";
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mystery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-help",
        "Memoir",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design"
    ]

    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

    const handleChangeSelectedValue = (event)=>{
        console.log(event.target.value);
        setSelectedBookCategory(event.target.value);
    }

    const handleBookSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;
        const price = form.price.value;

        // console.log(bookTitle,authorName, imageURL, category,bookDescription, bookPDFURL);
        const bookObj = {
            bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL,price
        }
        console.log(bookObj);

        // send data to db
        fetch("http://localhost:5000/upload-book",{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(bookObj)
        }).then(res=> res.json()).then(data => {
            // console.log(data);
            alert("Book uploaded successfully!!!");
            form.reset();
        })

    }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[800px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className="flex gap-8">
            {/* book title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name"
              required
            />
          </div>
          
          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author name"
              required
            />
          </div>
        </div>

        {/* second row */}
        <div className="flex gap-8">
            {/* book image */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
            />
          </div>
          
          {/* select category*/}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
                <Label htmlFor="inputState" value="Book Category" />
            </div>

            <Select id="inputState" name="categoryName" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                {
                    bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
                }

            </Select>
            </div>
            
        </div>

        {/* book description */}
        <div>
            <div className="mb-2 block">
                <Label htmlFor="bookDescription" value="Book Description"/>
            </div>
            <Textarea id="bookDescription" name="bookDescription" placeholder="write your book description..." required rows={4} className="w-full"/>
        </div>

        {/*  book pdf link*/}
        <div>
            <div className="mb-2 block">
                <Label htmlFor="bookPDFURL" value="Book PDF URL"/>
            </div>
            <TextInput id="bookPDFURL" name="bookPDFURL" placeholder="book pdf url" required type="text"/>
        </div>

        {/* button and price */}
        
        <div className="flex gap-8">
            {/* book price */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Book Price" />
            </div>
            <TextInput
              id="price"
              name="price"
              type="text"
              placeholder="Book Price"
              required
            />
          </div>
          
          {/* submit button*/}
          <div className="lg:w-1/2">
          <Button type="submit" className="mt-8 mb-2 block w-full">Upload Book</Button>
            </div>
            
        </div>
      </form>
    </div>
  );
};

export default UploadBook;
