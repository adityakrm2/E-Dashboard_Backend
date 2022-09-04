# Getting Started with Backend portion of E-Dashboard app

This respository is Backend part containing all the APIs(login api, signup api, products api etc) alongisde security measures such as JWT, and the frontend components which makes the entire web app a SPA(Single Page Application) can be [found here](https://github.com/adityakrm2/E-Dashboard_Frontend).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#Working

We boot up both frontend and backend with "npm start" script

![1](https://user-images.githubusercontent.com/72596312/188275951-b47de88e-04a9-4e57-976a-aee6eba27081.png)

![2](https://user-images.githubusercontent.com/72596312/188275953-0daea585-7446-4907-aab8-4a3df1ac252c.png)

If the user is not registered, then he would have a prompt to register/login, other links will be protected(not accesible before authentication)

![register](https://user-images.githubusercontent.com/72596312/188275965-0fd4fc5b-372b-4308-badb-b8a86be99897.png)

![login](https://user-images.githubusercontent.com/72596312/188275967-d37c0789-7029-4e89-bf4f-dee735b635d0.png)

The products details will be available on our cloud storage Mongodb atlas, which will be retrieved using our API and then displayed to user

![Screenshot_1](https://user-images.githubusercontent.com/72596312/188300661-7ba05735-2a05-48fa-811d-a1ef888581f7.png)

![products](https://user-images.githubusercontent.com/72596312/188275972-c5cd14a5-636c-4cb5-834e-0b90214cc32a.png)

User will be able to filter out their preference based on search strings

![search](https://user-images.githubusercontent.com/72596312/188275973-4226d10c-0df2-414e-89cc-0c038215aae6.png)

Lastly user will be provided a UI to add/update/delete their product

![add product](https://user-images.githubusercontent.com/72596312/188275980-168a4042-f88f-4ff1-b69c-abee665af91f.png)
