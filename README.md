# Plerion FullStack Engineer Assesment

## Introduction

We created a simple beer list which should have 2 tabs, one for the beers fetched from the API("All beers") and another for the custom beers added by the user.

Random Beer API: ```https://punkapi.com/documentation/v2```

This API is used to show the random beers.

End Users Beer API: ```https://ocgj9x4mbh.execute-api.ap-southeast-2.amazonaws.com/dev/beers```

This API is used to show the end user added beer.

Add Beer API: ```https://ocgj9x4mbh.execute-api.ap-southeast-2.amazonaws.com/dev/beer```
```
Request body:
{
    "name": "sample-name7",
    "image_url": "sample_image",
    "price": "0.001",
    "genre": "sample-genre",
    "description": "sample-description"
}
```

This API is used to add the beers data into database


## Installation

This is react application. Therefore, we need to have Node.js first. To setup the link follow:
Link: https://nodejs.org/en/download/

To setup the react, run the command
```npx create-react-app my-app```

### Run the project

Go inside the ```my-app/src``` and run the the command ```npm start```

Note: Dont forget to ```npm install``` before ```npm start``` to install all the dependencies
