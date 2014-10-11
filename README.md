
Hack101: Lesson 2
==================

### Introduction

As I'm sure you've noticed so far, everything we've done doesn't look that great. All the information is there, but it's very boring and plain. In this tutorial, we'll go over how to style your new webpage and make it prettier. This is all called 'Frontend' work. Meaning it has to do with what the user sees, and not what your server is doing.


### DOM
Lets start with understanding HTML a little more. DOM stands of Document Object Model. It is a kind of structure that HTML documents follow. DOM documents, and therefore HTML documents, are organized like a "tree" of "nodes". The document consists of a series of objects (these are the HTML tags you saw in the last tutorial) which are nested inside one another. So an object can have "child nodes" (like `<li></li>` was to `<ul></u>`), and have "parent nodes" (like `<body></body>` was to `<ul></ul>`). Let's go play around with the twitter website (in chrome) to help us understand.

First, I right click the page, and choose "Inspect Element". This will allow me to see and manipulate the HTML code that makes up this webpage.

![Right click, "Inspect Element"](http://s29.postimg.org/x16d1qplj/inspect_elm.png)

Now we see that a bottom toolbar has popped up showing us the HTML code for this webpage. Notice how almost everything is inside a `<div></div>` tag? `div` stands for division, and it is a general node that, as the name suggests, represents a division of your page. We'll see that these become important later.

As we hover over sections of code, the corresponding sections of the page become coloured. I can expand `<div>` tags until I find a specific part of the page. Here you can see that I've found the sidebar.

![Sidebar coloured](http://s14.postimg.org/6aj9rstox/sidebar.png)

Notice that if I right click the division that has the sidebar in it (in the HTML code, that is), I have the option to delete a node. 

![Delete node](http://s29.postimg.org/ny95mls0n/delete_node.png)

When I do this, chrome will take out all the HTML inside that node, and display to me what the page would look like. 

![Sidebar gone](http://s27.postimg.org/eqwl49kib/node_gone.png)

Tada! Sidebar gone! When I deleted the node, I removed the `<div>` node, and all of it's child nodes. That is, all the code inside the `<div></div>` tags. So the side bar, my picure, trending hashtags.. All gone.

I can do this for a tweet too! First I find the node that contains a tweet, then I can delete it.

![Find the tweet node](http://s27.postimg.org/k1t460d1v/tweet_node.png)
![Delete it](http://s18.postimg.org/s7ps0rw6h/tweet_gone.png)


### Styling/Basic CSS

OK, now that we have a basic idea of document structure, lets go style that webpage we made last time. Go to the directory that had `index.html` in it. 

Now create a new directory `stylesheets` and inside it create a new file `index.css`. CSS stands for Cascading Style Sheets, and in CSS files is where you specify all the styles (meaning placement on page, colours, fonts, etc.) for your HTML document, but none of your actual HTML goes here. Inside your HTML document, we will add a line telling it where to go and look for style sheets

Let's get started styling then. Open Sublime Text, and open your website folder in it (it's best to open the entire folder in your text editor than individual files, as this will get messy fast when you have a lot of files). First, we'll add the following line inside the `<head>` tag of `index.html`.

```html
  <link rel="stylesheet" href="stylesheets/index.css" />
```

This tells the browser to look in the file we just created for styling information. Now let's style something by editing `index.css`. Open up the file and type the following.

```CSS
body{
  background-color: #C6C5C5;
}
```

The `#C6C5C5` is a colour in 'hex' format. It is the way that HTML represents RGB colours. The first two letters represent R, the next two, G, etc. There are a ton of resources online to help you choose a colour and get it in hex format. [Here](http://www.w3schools.com/tags/ref_colorpicker.asp) is one, for example.

Go ahead and open up `index.html` in your browser to see the changed. Notice how when I changed the background colour, I had to make reference to the node I was styling? It's easy when that node is `body`, because there is only one of those, but what if we make multiple links and want to style them individually? Or style a bunch all the same way, but leave other links alone?

There are three ways to style tags

One way to style tags is the way we did above, where we set all tags of one type to have a certain style. Let's try that now. Back in `index.css`, let's add

```CSS
li {
  color: #AA3939;
}
```
(The plight of the Canadian coder is that everything is in American English, no 'u' in color...) Notice how ALL the list elements now have red text. That's that this CSS code says to do. Make all `<li></li>` elements red. What if we only want to change a few? Let's edit the CSS and HTML to specify which ones we want to change. We will do this by introducing a CSS class. Similar to a class in an object-oriented programing language, all instances of this class (instances are tags in this case) share the properties defined in the class. It's better to think of this as class inheritance, rather than plain classes and objects, as we will see that a tag can have multiple classes as well as properties specific to just that tag.

So lets go ahead and make a class for the `<li></li>`s.

```CSS
li.red-text{
  color: #AA3939;
}
```

Now if we refresh our `index.html` page, we see that none of the `<li></li>`'s are coloured anymore. This is because we haven't specified any of them to be of the 'red-text' class. Let's do that now.

```html
<ul>
  <li class='red-text'>...</li>
  <li> ... </li>
  <li> ... </li>
  <li class='red-text'>...</li>
  .
  .
  .
</ul>
```

Now we see that we have added the `'red-text'` style only to the elements with `class='red-text'` in the tag name. Notice that if I made my first paragraph of class `'red-text'`, I wouldn't see it change colour. This is becuase I have only defined the class for list elements. To make it apply to all tags, I would write:

```CSS
.red-text{
  color: #AA3939;
}
```

The `.class-name` without a tag in front means that I want to use this class across all tags. Now I would be able to make both my `<p></p>` tag and my `<li></li>` tags coloured red with the same class.


So we've covered two ways to style elements. Stlye every element of one type, or style every element of one class. What about if we want to style an individual element? Making a whole class just for one element doesn't feel right, so instead we use `id`s. As the name would suggest and `id` is a **unique** (don't reuse them...) identifier for a tag. We can style an element with `id`s as such.

`index.html`:
```html
<ul>
  <li> ... </li>
  <li id='special-list-item'> ... </li>
  .
  .
  .
</ul>
```

`index.css`:
```CSS
#special-list-item{
  color: #AA3939;
}
```

I've only used CSS to colour things in this example, but it can be used to do a whole lot more! Spacing on page, margins, making shapes... Now that you see how it works, I will move on to frontend frameworks and leave you to discover what you can do with CSS on your own.

### Frontend Frameworks: Foundation

A lot of the time, you will find yourself styling a page in the same way for a bunch of pages in a way that a lot of other people have done already. 'Frontend Frameworks' try to make your life easier by doing a lot of the repetitive work for you. 

Basically a framework is a collection of CSS (and Javascript, but we won't worry about that yet) files which provide you with a bunch of classes you can use in your webpage as well as some basic automatic styling to all of your pages to make them look less like 1993. You never have to write your own CSS if you don't want to! 

Another great thing that modern frontend frameworks give you for free making your sites "responsive", meaning the website changes depending on the size of your browser window. Once we use foundation, you can see this for yourself!

Now before I make any big changes (and risk messing something up), I will make a checkpoint. 

```bash
git status      #check what I've changed in case I did something I forgot about
git add --all   #everything looks good, so I will add it all, then commit it on the next line
git commit -m "Started styling index.html"  
git push        #now I'm pushing it up to GitHub so everyone else can see it and access it
```

In this tutorial, we will use [Foundation](http://foundation.zurb.com/develop/download.html) as our frontend framework, but there are many more ([Bootstrap](http://getbootstrap.com/) is another popular one).

If we click 'Download Everything', and unzip the file, we'll see a few files and three folders named, '`css`' (the folder similar to the one we called `stylesheets`),'`js`' (the folder where they keep their javascript), and '`img`' (the folder where they keep their images). Let's take a look inside the `css` folder. In there we will see a file called `foundation.css`. Copy this file into the `stylesheets` folder of your webpage, and add the following line to the `<head></head>` tag in `index.html` telling your browser to look for styling information in this new CSS file.

```html
<link rel="stylesheet" href="stylesheets/foundation.css" />
```

Be sure to put this line before your line for `index.css`, otherwise it may overwrite some of the changes you made (like background colour)

If you refresh your page, you'll see a big improvement! This CSS file has changed the font of your webpage, as well as some of the spacing.

A great feature that Foundation gives us is a grid. A grid is a way for you to orgnaize content in your webpage by specifying columns and rows which your elements lie on. The grid is made up of different classes of nested `<div></div>`s. To see a good example of grids at work, you can checkout out the `index.html` inside the Foundation folder we just downloaded. I encourage you to play around with it and try changing things to learn a little.

Let's add a grid to our page. We can begin by wrapping everything in a '`row`' division, and while we're at it, lets wrap our little description paragraph in a '`panel`' division. Now your `index.html` should look something like this:

```html
<html>
<head>
  <title> Amiel's Bio</title>
  <link rel="stylesheet" href="stylesheets/foundation.css" />
  <link rel="stylesheet" href="stylesheets/index.css" />
</head>
<body>
  <div class='row'>
    <h2> Amiel Kollek's Webpage </h2>


    <div class='panel'>
      <p>
        Hello, my name is Amiel. 
        I study math and physics at McGill univeristy and I am going to make my own website!
      </p>
    </div>


    <h4> My Interests </h4>
  
      <p> Here are a few things I like: </p>
  
      <ul>
        <li id='special-list-item'> Computers </li>
        <li> Math </li>
        <li> Hiking </li>
        <li> Physics </li>
      </ul>
    
    
  
  </div>
</body>
</html>

```

If you refresh the page, you'll see it's improved quite a bit. It's no longer up against the side of the page, and everything inside the panel division is indented and has a different background. Again, the '`row`' and '`panel`' classes are CSS classes written by the people at Foundation which we can easily add to our HTML files which make things look nicer. The `row` class indents everything, and the `panel` class creates (as we can see) a panel that everything it wraps everything the division contains. 

Now we can start making columns. Foundation has differenly sized columns (for now we will only use `large`). Each row is automoacially divided into 12 columns ([this](http://foundation.zurb.com/grid-1.html) explains it well), and we can group those columns as we choose. Let's make each list item in our interests its own section of the panel. It has 12 columns, and I have 4 items, so three columns each. Since we're making a column out of each, let's add a little discription as well.

```html
        <div class='large-3 columns'> 
          <h5 id='special-list-item'> Computers </h5> 
          <p>
            I like coding and making websites! 
          </p>
        </div>
        
        <div class='large-3 columns'> 
          <h5> Math </h5> 
          <p>
            Math is a lot of fun!
          </p>
        </div>
        
        <div class='large-3 columns'>
          <h5> Hiking </h5> 
          <p>
            Nothing like the great outdoors! 
          </p>
        </div>
        
        <div class='large-3 columns'> 
          <h5> Physics </h5> 
          <p>
            <em>F=ma</em>, <em>E=mc<sup>2</sup></em>, etc...
          </p>
        </div>  
```

Notice how I have two words in my `class` selector. When I want a tag to be of multiple classes then I separate each class by a space, keeping everything inside quotation marks. 

And there you have it! An basic grid on your website! Foundation does a whole lot more than add a grid, To see everything, checkout their [documentation!](http://foundation.zurb.com/docs/).


```bash
git status      
git add --all   
git commit -m "Added foundation"  
git push        
```

### Basic Javascript

You may have noticed that all we've done so far has made the site look a whole lot better, but it's not very interactive. To make it interactive we have to use Javascript.

Javascript is a programming language that you can use inside HTML and can have talk to your document! It can do a whole bunch with it that we won't cover (you can even write a whole website in javascript, [if you wanted to](http://nodejs.org/)). All you need to know right now is that javascript is an object oriented programming langauge. Its syntax is similar to that of C if you have used that before. If not, don't worry, it is quite straight forward. And there are plenty of [resources](http://www.codecademy.com/en/tracks/javascript) online if you want to learn some yourself.

To write javascript in an HTML file, we use the `<script></script>` tag. Let's write a javascript function that makes a popup window to say hello. Inside the head tag, we'll put the following.

```html
<script type="text/javascript">

  function hello () {
    alert('Hello there!');
  }

</script>
```

Great, but if I refresh the page, nothing happens. That's becuase we created this function, but we haven't called it. Let's add a button to call the function when clicked. Let's make a new row for it, just beneath my interests (right before my close body tag, `</body>`).

```html
  <div class='row'>
    <a class='large radius button' onclick="hello();"> Say hello! </a>
  </div>
```

The `<a></a>` tag (standing for anchor) mean a link, except for us it won't link to anything. Instead, when it is clicked, it will call the javascript function '`hello();`', which we defined above. Notice that I've given it the classes `large radius button`. This is a foundation class, they've got us covered!

Now if we refresh the page, I will see a button. If I click it, my website says hello!

It doesn't look that great though, being pushed off to the edge. let's style it a little. First I give my tags ids.

```html
  <div class='row' id='hello-button-row'>
    <a class='large radius button' id='hello-button' onclick="hello();"> Say hello! </a>
  </div>
```

Then I can use some CSS to style things a bit.

```CSS
#hello-button-row{
    padding-top: 100px;
}

#hello-button{
    width: 200px;
    text-align: center;
    display: block;
    margin: 0 auto;
}
```

The `padding-top` adds some space on top of the button's row (100 pixels to be exact).  The styling for the button itself is pretty straight forward, except for maybe `display: block;` and `margin: 0 auto;`. These will center the button in the page.
```bash
git status      
git add --all   
git commit -m "Added hello button"  
git push        
```

### Quick Summary So Far

* HTML: The content of the page
* CSS: How the page looks (styling)
* Javascript: What the page does

---

I will push some more advanced examples using Javascript and CSS to our git repo. that I encourage you to play around with! You now have to tools to do some really creative stuff with your webpage!
