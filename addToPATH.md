# Adding Typora to PATH

This guide will tell you how to add Typora to your PATH to use this extension. This guide is only for Windows. Other OSes can use the extension without editing/expanding their PATH.


[By the looks of it](https://github.com/cyberbiont/vscode-open-in-typora/pull/5#issuecomment-671279129), Typora can install itself on a different location, so having a set location to search for Typora is hard. That's why we settled on using PATH.

Fortunately, we can still get Typora's path by one of it's shortcuts! Here's how:

Just find a shortcut of it -- even the one from the Start Menu will do it.

<center>
<figure>
<img src="./images/addToPath/typora-shortcut.png" alt="A Typora shortcut with it's location folder under the mouse">
<figcaption>A Typora shortcut</figcaption>
</figure>
</center>

Open it's **Properties**, and copy the "Starting Location" part of it.

<center>
<figure>
<img src="./images/addToPath/shortcut-target.png" alt="Typora's shortcut's properties with it's starting location selected">
<figcaption>The location of "Starting Location" bar</figcaption>
</figure>
</center>

Open **Control Panel**, go to System & Security, and open **System**.
At the left of the page, click the last link at top rows, **__*Advanced System Settings*__**.

Go to the System tab if it is not there, and click on **Environment Variables**.

<center>
<figure>
<img src="./images/addToPath/advanced-settings.png" alt="Advanced System Setting's System Tab, pointing at Environment Variables">
<figcaption>The System tab of Advanced System Settings.</figcaption>
</figure>
</center>

Click on __Path__ variable on either User or System Variables and press **Edit**.

<center>
<figure>
<img src="./images/addToPath/edit-path.png" alt="An arrow pointing at the Edit button while the Path variable is selected">
<figcaption>Environment Variables window</figcaption>
</figure>
</center>

Click on **New** then paste the path we copied, press Enter and click **OK**.

<center>
<figure>
<img src="./images/addToPath/add-path-entry.png" alt="Three arrows pointing at; the New button, the text box filled with copied information and the OK button">
<figcaption>Adding an entry step-by-step</figcaption>
</figure>
</center>

## Testing the PATH:

Log out and log back in to your account. Open `cmd` and write `typora` and hit enter.
If it works, it will go to the next line while typora opens, if it does not, it will tell it's not recognized. Please re-check the target location.