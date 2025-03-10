# ▦ Background Grid Lines ▣
<div style="text-align: right">Web Dev 8</div>

### Original Project Author & Link (CodePen): 
  - @jasonadelia
  - https://codepen.io/jasonadelia/pen/DeYMoy
## Reflection & Changes
- I've considered editing a grid background CodePen for one of these Web Dev assignments for weeks now, but have struggled with finding one that I could understand and rework because they were always the background of other far more comnplicated CodePens. As such, I was so excited when I stumbled upon this purely CSS line-grid background, and was even happier to find that it only took me a few seconds to understand it and what I needed to change to make it something I'd want to us in future projects. I may use this along with an animation to it as the background for the orchestra concert schedule midterm CSS rough draft, but I need to implement it and that animation to see how it comes out and whether or not I actually want to use it for that project. I will absolutly be using it as a sort of wireframe background for future projects though, because I love the aesthetic of wireframes, especially neon wireframes that are often used in Synthwave aesthetics. Eventually, I'd like to make a project like that, potentially a simple version as part of my final for this class!
### My Changes:
  - Made design responsive to screen size via changing background-size to 5vmax 5vmax from 50px 50px
  - Background-image to black from grays
  - Line color to white from grays
  - IN-PROCESS of creating line pulsation animation via blur or line thickness animation (may also try to do via hover transition contained near cursor)
  - As I scrolled down the CSS code in the CodePen, I saw that the size of the grid boxes (formed using gradients) were in pixel values, so the very first thing I did was make my redesigned version responsive via replacing these pixel units with vmax units (value multiplied by 1% of viewport size). Following this, I played around with the background (base color) gradients, but settled on making the background just black instead of the original light/dark gray gradient. I then changed the line color from gray to white. This was also done via linear gradients that were transparent at parts and gray at others. My next change which I haven't implemented yet but will do so after submitting this reflection, is creating an animation that either (or maybe both) blurs the grid lines or thickens them, creating the effect of pulsation.