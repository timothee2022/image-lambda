const AWS = require('aws-sdk');
const S3 = new AWS.S3();


exports.handler = async (event) => {
    
    // let bucketName = 'oto-image-lambda';
    // let key = 'images.json';
    
    // console.log('images ----------------', images);
    // let stringifyImages = images.Body.toString();
    // let parsedImages = JSON.parse(stringifyImages);
    
    let bucketName = event.Records[0].s3.bucket.name;
    let key = event.Records[0].s3.object.key;
    
    let images = await S3.getObject({Bucket: bucketName, Key: key}).promise();
    
    // console.log('parsed images----------------------', parsedImages);
    
    console.log(event);
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
