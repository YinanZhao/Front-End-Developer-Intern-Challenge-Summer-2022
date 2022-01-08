# Front End Developer Intern Challenge - Summer 2022

NOTE: there's a weird bug with HTTPS being replaced by HTTP in API request call for some reason, and this only seems to matter on Chrome browser. It works without issue on Safari browser. I have searched for solutions extensively but did not find a solution :( As much as this is bothering me, it is probably not worth it to fix it. Running locally also solves this issue so clone the repo to see! I have also attached images below of how it looks like once completed

- [**Challenge app**](https://csb-8e3hw-gi7dz0t26-yinanzhao.vercel.app/)
- [**Challenge specification**](https://docs.google.com/document/d/13zXpyrC2yGxoLXKktxw2VJG2Jw8SdUfliLM-bYQLjqE/edit#heading=h.31w9woubunro)

## Images of how it looks like

![Alt text](images/Example_1.png?raw=true)

![Alt text](images/Example_2.png?raw=true)

## To run locally

Clone this repo, run "npm run start" in command line/terminal. Then, navigate to "http://localhost:3000" in browser.

## Features

The user may:

- Search for an image from NASA's Astronomy Picture of the Day API
- For each image, the date of the movie, as well as its title and explanation are provided
- For a **range of dates**, retrieve pictures for all of those dates, as well as descriptions

## Development

- React
- HTML
- CSS

## Libraries used

- DatePicker
- GraphQL
- Apollo

## General notes

**All** components except for the date picker were developed from scratch.

Although Apollo and GraphQL were implemented in part in this project, they were not necessary for the completion of the project.
