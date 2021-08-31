# electronsSimulation

This simulation is a small JavaScript app that shows a microscopic view of how electrons are moving through an conductor. 
Click anywhere in the conductor to set a free electron.

You can set:
- **U in Volt**
  - this is the voltage (or electrical field) over the shown conductor
  - it generates the **force** which lets the electrons move
  
- **Temp in K**
  - this is the temperature in Kelvin
  - 0 means no particle movement in the conductor, so there is **no resistance** (superconductor)
  - 400 means the conductor is heated and electrons having a harder time to move along the voltage (**more resistance**).
  
- set button **ON**, lets electrons enter from the left (closed circuit).
- clicking on **CLEAR** destroys a couple of electrons

There is an **Amperemeter** on the upper right corner, this shows how much current is flowing (how much electrons are passing)

It uses the p5.js library.

## Running

Just download the repository and open the index.html in a browser.
