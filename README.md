# LAB - Class 17

## Project: AWS: S3 and Lambda

### Author: Timothee Oduhsina

### Problem Domain  

* Create an S3 Bucket with “open” read permissions, so that anyone can see the images/files in their browser
* A user should be able to upload an image at any size, and update a dictionary of all images that have been uploaded so far
* When an image is uploaded to your S3 bucket, it should trigger a Lambda function which must:
  * Download a file called “images.json” from the S3 Bucket if it exists
  * The images.json should be an array of objects, each representing an image. Create an empty array if this file is not present
  * Create a metadata object describing the image
    * Name, Size, Type, etc.
  * Append the data for this image to the array
    * Note: If the image is a duplicate name, update the object in the array, don’t just add it
  * Upload the images.json file back to the S3 bucket

### Links and Resources

* [S3 Bucket / Link to images.json](https://oto-image-lambda.s3.us-east-2.amazonaws.com/images.json)

### Setup

* Setting up S3 and navigating through it was very interesting and I didn't encounter any error. 
* Working on lambda was fun following today lecture. But I was not able to add more images to my JSON. I have been receiving an error message
![Log group error](./Log%20group.PNG)

#### Tests

For test, I added a new JSON file called `addImages` to make sure user will be able to add image into images.json

