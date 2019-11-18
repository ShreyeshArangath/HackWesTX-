# HackWesTX 2020
This is the official website repository for HackWesTX 2020. 


# Prerequisites

## Installing Python 2.7
Make sure you download the latest version of Python 2.7 from [Python.org](https://www.python.org/downloads/) 

## Installing Google Cloud SDK
Next, make sure to install the Google Cloud SDK for Python!(https://cloud.google.com/appengine/docs/standard/python/download). Once on
that site, you need to complete steps 2, 3, and 5 of the **Installing Cloud SDK for Python 2**.

# Getting Started

## Google Cloud App Engine Setup
Clone this repository and cd to it using the command line. Once in the folder, type: 

```
$ gcloud init 
```

This will initialize the gcloud project in the folder.
We want to create a new configuration so go ahead and choose **Create a new configuration**.

Next, it's going to ask you to name the project. You can name it whatever you'd like. 
After that, you're going to want to **Log in with a new account**. Log in with your google account. 

After that is done, it'll ask you to pick a cloud project. Since you don't have one, you're
going to select **Create a new project**. For the project ID, go ahead and name it the following: **dsc-your-university-name**.

## Testing website locally

You can run a local instance of your website to test it when you make changes!
To do that, open up your terminal and cd into your project directory; run the following commands
```
$ conda activate python2
$ dev_appserver.py app.yaml 
```
Perfect! Now your live server should be up and running.
If you wish to stop it, press *Ctrl+c*

## Deploying the Website to the Google Cloud

Now that you have finished your website, the next thing you need to do is deploy the project to the cloud.
Open the terminal and cd into the project directory; run the following commands.

```
$ gcloud app deploy --project [project-id] 
```
