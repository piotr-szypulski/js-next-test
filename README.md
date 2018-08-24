# Next.js WordPress Demo

This is a basic setup with wordpress rest API.

## Goals
We were looking for alternative for Gatsby.js as tool for genereting pages with great performance.

## Why Next.js?
We make comparison with few other tools. Below we can see a list with given stars on GitHub.

* 247 https://github.com/cuttlebelle/cuttlebelle
* 5.4k https://github.com/nozzle/react-static
* 24k https://github.com/gatsbyjs/gatsby
* 28k https://github.com/zeit/next.js

So as next.js is most popular by number of stars and it was sometimes mentioned by Dan Abramov we want to make experiment with this one.

## What is Next.js?
So basically it is a server rendering framework with easy to use configuration and usage. It has few similarities with gatsby.js with posibility of generating dynamic content on server side.

In halfway of our experiment we found information about posibility of generating statis side so we also test this kind of aproach.

## Start of experiment
As you can read in next.js readme initial setup is as easy as add three packages to new created project.
By far we have ability to create new subpages with different components.

## Prepere fully working example
So we decide to use next-css for styles, and we need to add `pages/_document.js` file for including stylesheet in generated files. After that, we add configuration file with extra webpack settings for including external files as fonts and images in stylesheer.

## Blog post with data fetching
Most of components we have use from other projects so there was no problems rendering a structure of given part of a website. The main difference were the way of data fetching. In next.js we have special static async method called `getInitialProps`. It is used to run data fetching on both: server and client side.

## Dynamic routing
To make it possible and make path like `/blog/post-slug` working we need to overwrite server of our app.

We use example with express server as it is pretty easy to mark place of extra params as `post-slug` and pass it next to component render method with `query` variable available in `getInitialProps`.

## Static files generation
Output bundle is generated to `.next` directory and ready to deploy on machine with node.js enviroment.

The same bundle can be used to generate static files with no need of node.js. To achive this we need to run `next export` with npm. If we have in our app dynamic routes (as blog posts) we can also define the way how next.js will fetch them and generate subpages for every blog posts in CMS. To achive this we need to define `exportPathMap` in `next.config.js` which is also well documented in readme and examples.

After we export all of our subpages we will see in console all generated paths. 

Last step test our exported files is to run them on static files server. We achive this with `serve` npm package and run it with `serve out` command.

## Tests of solution
We try to check every apsect of our app for differnet conditions:

* with dynamic and static way of serving files,
* with and without javascript.

Dynamic and static version of site work as expected - we get the same solution.
Also without javascript we get expected solution - generated site work like web 1.0 with full reloads after every click on a link. It should be fully accessible but of course without extra interactions implemented with JavaScript.

## Conclusion
In our opinion, populatiry of next.js is no mistake. Easy to use server side rendering is a brease and many ways how we can overwrite thing in initial configuration is with no mistake great feature.

Definitly I will recommend to use it with any project which requires SSR or static build. Performance boost is obvious and experience with app build with React Components also.

## Future considerations
As an edge case we need to consider scenario with static rendering and cms with huge number of pages. Do we need to build all of them after every change? How can we improve this process?

What if we have only one or few subpages with big amount of views. Can we generate static content only for them? How we can achive this kind of split on server configuration side?
