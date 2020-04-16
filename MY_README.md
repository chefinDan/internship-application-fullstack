# Cloudflare Workers Internship Application: Full-Stack
## Author: Daniel Green <greendan@oregonstate.edu>, [github](https://github.com/chefindan)
## Project: https://github.com/chefinDan/internship-application-fullstack

## Thank you!
Thanks to Cloudflare for offering this project as an internship application. I found this so much more interesting than a standard coding/logic exam.

## What's inside?
You will find the source code for a deployed worker that matches the specifications described in README.md.
Also included is a postman test suite.

## Extra Credit

I chose to come up with my own extra credit, in the form of a Postman Test Suite. If you import "cloudflare-internship-app.postman_collection.json" into Postman and run the provided GET request, a test script will run that makes 100 requests to the worker endpoint. This script records the number of times each variant was returned and saves it in a Postman environment variable. After 100 requests the two counts should be close to 50-50. You can check these values by looking at the environment variables in Postman.
