# Plerion FullStack Engineer Assesment

## Introduction

We created a beer list which should have 2 tabs, one for the beers fetched from the API("All beers") and another for the custom beers added by the user.

### Random Beer API: 

Endpoint: ```https://punkapi.com/documentation/v2```

This API is used to show the random beers.

Note: This is a third party API

### Get Beers API: 

Endpoint: ```https://ocgj9x4mbh.execute-api.ap-southeast-2.amazonaws.com/dev/beers```

This API is used to show the end user added beer.

### Add Beer API: 

Endpoint: ```https://ocgj9x4mbh.execute-api.ap-southeast-2.amazonaws.com/dev/beer```

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


## Glimpses of the project

![Screenshot from 2023-06-02 14-53-36](https://github.com/sudarshan1998/technical-assessment-frontend/assets/23524244/dcf849fc-0328-4bce-9f1b-6b27ef624939)

![Screenshot from 2023-06-02 14-53-46](https://github.com/sudarshan1998/technical-assessment-frontend/assets/23524244/5078c834-cfe8-4f12-ac3c-9c3e7be8a4a9)

![Screenshot from 2023-06-02 14-54-14](https://github.com/sudarshan1998/technical-assessment-frontend/assets/23524244/b6e218c8-06de-46f3-9d91-8934ac1b4331)

![Screenshot from 2023-06-02 14-54-45](https://github.com/sudarshan1998/technical-assessment-frontend/assets/23524244/9cb3f030-20f6-4091-bbc6-8a2820f871ed)

![Screenshot from 2023-06-02 14-54-58](https://github.com/sudarshan1998/technical-assessment-frontend/assets/23524244/e402df11-9131-4bce-a585-eff3c34db485)

![Screenshot from 2023-06-02 14-57-53](https://github.com/sudarshan1998/technical-assessment-frontend/assets/23524244/06b9b559-0118-4152-b93b-5a0de511e5e1)

![Screenshot from 2023-06-02 14-58-14](https://github.com/sudarshan1998/technical-assessment-frontend/assets/23524244/ea1aab46-cef4-42df-85bb-7ba5f412d9a1)
