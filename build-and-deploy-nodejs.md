Title: Build and Deploy a NodeJS & Express App
Subheadline: How to build & deploy NodeJS application.
Date: 2015-10-26 13:00
CleanDate: November 13, 2015
Slug: build-and-deploy-a-nodejs-app
Author: Zack Chase
Avatar: 
HeaderImage: 
HeaderImageAlt: 
Summary: Learn how to build and deploy a Nodejs app with Distelli.


<script type="text/javascript">
analytics.identify({
  Author: 'Zack Chase'
});
</script>

<div class="author clearfix">
  <img class="profile-img" src="" alt="Zack Chase" />
  <span itemprop="author"><strong>Zack Chase</strong></span>
  <span itemprop="datePublished" class="date">October 26, 2015</span>
</div>

Node.js is a very powerful runtime environment for developing serverside web applications. One difficulty that I found with Node.js was getinng a node application deployed to my servers quickly. In this tutorial I am going to show you how to deploy Node.js apps quickly with Distelli.

<img src="" alt="">

For this tutorial we will be using a basic "Hello World" Node app, but you can use your own application if you so choose. To start you are going to need to open your Terminal and navigate to the folder where you would like to store your files. For myself I am going to navigate to my WorkSpace (ws) and further more to my Source (src) directory. Then I am going to make a directory to store my Node app, create the actual app file, and then finally open in it. I am using Sublime Text as my text editor, but feel free to use whatever text editor you want.

`$ cd ws/src`
`$ mkdir nodeTutorial`
`$ cd nodeTutorial`
`touch app.js`

Now that we have everything all set up we can start by creating a basic Node.js "Hello World" app. Simply open app.js in a text editor and paste in the below code:

`var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

var server = app.listen(3000, function(){
  console.log('Magic is happening on port 3000')
});`

You will notice that I have included 'express' as a module. Make sure you have express installed by going to your terminal, make sure you are still in the directory where you are storing your files, and type `npm install express`. Once you have done that save app.js and run it in your terminal by using the command `node app.js`. Open your browser and point it towards 'localhost:300'. This is what you should see:

<img src="images/nodeHelloWorld" alt="Node.js Example App">

See wasn't that easy? Now that we have a working Node application all we have to do is deploy it to our server. Distelli makes this process incredibly easy and painless. Instead of having to write custom scripts to deploy your application, Distelli does this all for you. Only a few clicks and your deployment will be live and ready for your customers! Below are the simple steps you need to follow to get your application from being hosted locally to your production server!

### Step 1. Push your Code to GitHub/BitBucket

For this tutorial I am using GitHub as my repository, but you can use BitBucket as well without any issue. First you will need to create a repo in GitHub and push your code to that repository. Make sure you already have a repo created on GitHub or BitBucket before you start this step. Open your terminal and make sure you are in the directory that your app code is in.

Initialize the local directory as a Git Repo
`$ git init`

Add the files in your new local repo
`$ git add .`

Commit your files you have just staged
`$ git commit -m "First Commit. Created app.js"

Navigate to your GitHub or BitBucket Repo and find your remote repository URL. Once you have your remote repository URL use the following commands to finish setting up your repo.

`$ git remote add origin "Your Remote Repository URL"
# Sets the new URL
$ gir remote -v
# Verifies the URL`

Now push the changes to your repo
`$git push origin master`

Now that we have our GitHub/BitBucket Repo all set up there is one more thing we have to do before we set up our app on Distelli and get it deployed into production. Go back to your terminal and enter the command `npm init`. Follow the prompts and afterwards you should now have a package.json file in your directory. Once that file has been created push the update into your GitHub Rep.

`$ git add .`
`$ git commit -m "Added package.json"`
`$ git push origin master`

We are now ready to move on to the next step, setting up our server.

<img src="" alt="">

### Step 2. Set Up Your Server

The next step in deploying our app is a very important one, make sure you have a server to run your application on. You can use any server - public cloud, private cloud or physical servers. Distelli will let you deploy your code to any server, even deploy to Vagrant VMs or servers in a VPC. You can even deploy to the server under your desk.

For this tutorial I am going to be deploying to a server hosted by Digital Ocean. If you already have your server set you can skip to the next step. 

To get your server set up on Digital Ocean you will need to navigate to <a href="https://www.digitalocean.com/">digitalocean.com</a> to get set up. If you already have an acount please Log In, if not Sign Up for an account now. Once you have created an account or logged in you will need to 'Create Doplet'.

### Step 3. Gather your ingredients

My preferred ingredients include:
<ul>
  <li>English muffin</li>
  <li>Large AA egg</li>
  <li>Three thin slices of ham</li>
  <li>A thin slice of cheddar cheese</li>
</ul>

I also like to season my egg with garlic and chili flake (not shown).

<img src="/theme/images/bs/ingredients.png" alt="Ingredients">

### Step 4. Prepare the ingredients

My preparation includes; cutting the muffin in half, opening the ham, separating the cheese slice, and the most important step... preparing the egg.

<img src="/theme/images/bs/ready_ingredients.png" alt="Ready Ingredients">

Crack the egg into a cup with a rounded bottom. Mix in your seasonings; maybe some tobasco. Grab a fork, and swiftly whip the egg by hand.

### Step 5. Load the bottom

The green preheat light should be lit, if not wait for it to light before continuing.

<img src="/theme/images/bs/bottom1.png" alt="Preheat">

**Remember, this thing is hot. Don't burn yourself.**

Grab your bottom bread, and carefully place it in the bottom compartment of the maker. Place your meat on top of it. Close the top half.

<img src="/theme/images/bs/bottom2.png" alt="Bread in Machine">

### Step 6. Pour in your egg

Go ahead and pour the egg into the top compartment and close the lid on top. It takes about 3:30 minutes to cook the egg completely. Wait.

<img src="/theme/images/bs/egg1.png" alt="Egg">

**Don't open the top to check on the egg. Let it stay warm and cook for at least 3 minutes 30 seconds.**

<img src="/theme/images/bs/leave_closed.png" alt="Leave Closed">

### Step 7. Load the top

An egg that is completely cooked will look like this.

<img src="/theme/images/bs/egg2.png">

Add your cheese and the top bread, then close the maker up.

<img src="/theme/images/bs/cheese.png" alt="Cheese">
<img src="/theme/images/bs/top1.png" alt="Top">
<img src="/theme/images/bs/top_close.png" alt="Close">

Wait 30 to 60 seconds.

### Step 8. Drop the top

This is the fun part. Slide the middle divider, between the top and bottom, out. With your right hand, pull the lever on the right out towards you and slide it to the left.

**Remember, the maker metal is hot. Don't burn yourself.**

<img src="/theme/images/bs/slider.png" alt="Slider">

Wait another 30 seconds for everything to seal together.

### Step 9. Open

Leaving the slider open, completely lift up the bottom, with the top, to expose the whole sandwich.

<img src="/theme/images/bs/done.png" alt="Done">

Slide the sandwich off to the right or left.

That's it. You have successfully "built" your sandwich, now you can "deploy" it to your tummy.

<img src="/theme/images/bs/done2.png" alt="All Done">
