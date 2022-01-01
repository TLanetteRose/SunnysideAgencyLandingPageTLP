# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#### Desktop Header & Page

![Sunnyside Agency Landing Page Header](assets/images/Screenshots/SunnysideDesktopHeader.jpg)

---

![Sunnyside Agency Landing Page Desktop](assets/images/Screenshots/SunnysideDesktop-side.jpg)

---

#### Tablet: iPad Pro Header and Page

![Sunnyside Agency Landing Page Tablet](assets/images/Screenshots/SunnysideIpadPro.jpg)

---

#### Mobile: Nokia Header and Page

![Sunnyside Agency Landing Page Header](assets/images/Screenshots/SunnysideHeaderNokia1-side.jpg)

---

![Sunnyside Agency Landing Page Mobile](assets/images/Screenshots/SunnysideNokia1-side.jpg)

---

I have included five screen shots of three devices:

- Nokia N9 (480x854)
- iPad Pro (1024x1366)
- MacBook Air (1440x900)

I used the [Responsively](https://opencollective.com/responsively) app while coding. They have a great screen-shot function. I also used [Photoscape app](http://www.photoscape.org/ps/main/index.php) to edit and combine the screen shots.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - I love using SASS!

### What I learned

I learned that sometimes less is more and that I needed to trust CSS Grid and Flexbox for positioning my layout.

To see how you can add code snippets, see below:

```css
.client {
	display: grid;
	margin: 3rem 1rem;
	padding-bottom: 1rem;

	@media screen and (min-width: $bp-xl-screen-end) {
		padding: 1rem;
	}

	&-image {
		margin: 2rem auto;
		border-radius: 50%;
		width: 7.5rem;
		@media screen and (min-width: $bp-xl-screen-end) {
			margin: 3rem auto;
		}
	}

	p {
		font-size: 1.5rem;
		line-height: 1.5em;
		color: $color-very-dk-grayish-blue;
		max-width: 35rem;
		margin: auto;
		//padding: 2rem;
	}

	h2 {
		font-size: 1.45em;
		margin-top: 6rem;
	}

	.position {
		margin-top: 1rem;
		padding: 0.5rem;
		font-size: 1.2rem;
	}
}
```

```js
const proudOfThisFunc = () => {
	console.log('🎉');
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [T.Lanette Pollard](https://tlp-portfolio.vercel.app/)
- Frontend Mentor - [@TLanetteRose](https://www.frontendmentor.io/profile/TLanetteRose)
- Twitter - [@TpLanetteNBCT](https://twitter.com/TpLanetteNBCT)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
