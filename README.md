# Subscribe App
A Node.js web application that adds emails to a database and sends a confirmation email to the user.

## Live Demo
To run the app, go to [https://subscribetodanish.herokuapp.com/](https://subscribetodanish.herokuapp.com/).

## Features

* Responsive Web Design
  - The web application is responsive and can be viewed appropriately through a variety of devices and window screen sizes.
  
* Subscription Input
  - Users can enter their email address to be added to the subscription list.
  
* Subscription Confirmation
  - Subscribers receive a confirmation email.
  
* Subscription List Count
  - Provides a dynamic count of the number of people who subscribed via email.
  
* Success/Error messages
  - Displays a success message if user enters a unique email address successfully.
  - Displays an error message if user enters duplicate email.
  
## Getting Started
### Clone or download this repository

```sh
git clone https://github.com/malikdanishkhan/subscribeApp.git
```

### Install dependencies

```sh
npm install
```

or

```sh
yarn install
```

## Built with

### Front-end

* [ejs](http://ejs.co/)
* [Bootstrap](https://getbootstrap.com/docs/3.3/)

### Back-end

* [express](https://expressjs.com/)
* [express-session](https://github.com/expressjs/session#express-session)
* [MySQL](https://www.mysql.com/)
* [SendGrid](https://sendgrid.com/)
* [connect-flash](https://github.com/jaredhanson/connect-flash#connect-flash)

### Platforms
* [Heroku](https://www.heroku.com/)
* [Cloud9](https://aws.amazon.com/cloud9/?origin=c9io)
