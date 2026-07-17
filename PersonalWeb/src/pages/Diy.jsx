import React from "react";
import Collapsible from "../components/collap";
import './projects.css';

function DIY() {
  return (
    <div>
      <h1>DIY Page</h1>

      <div className="page">
      <Collapsible title="Sweatpant shorts - (June 2026)">
        <h3>Took an old pair of sweatpants I wore when I was 10 again I think and cut them in half to make shorts. 
          Then I seam ripped the sides and took the extra fabric I had to insert darts into the sides of the shorts.
           I thankfully did have a sewing machine for this project</h3>
      </Collapsible>
      <Collapsible title="Patchwork Sweatshirt (Sewing machine edition?) - (May 2026)">
        <h3>It went bad. I didn't have the right sewing machine foot or something, and it looks like its been through some stuff. I gave up
          and switched to hand sewing halfway through. I need to get the right foot. 
        </h3>
      </Collapsible>
      <Collapsible title="Long sleeve fusion - (May 2026)">
        <h3>Took two of my old long sleeves that I wore when I was 10ish and took darts from the blue one to insert into the black one.
          The design reminds me of a swimsuit but I still like it I think. </h3>
      </Collapsible>
      <Collapsible title="Patchwork T-shirt - (April 2026)">
        <h3>Used old t-shirts for fabric and recreated a design I saw online. I also made this before I had a sewing machine.</h3>
      </Collapsible>
      <Collapsible title="Beaded Headphone Keychain - (2025)">
        <h3>Used old jeans, keychain, and beads. This was pre sewing machine era, and you can tell...</h3>
      </Collapsible>
      <Collapsible title="Patchwork Sweatshirt - (Summer 2025)">
        <h3>This is right about when I discovered free will - it was my first sewing project - and just started blindly
           sewing patches onto an old robotics sweatshirt. This sweatshirt has served me well and I am so so surprised that it has not fallen apart just yet.
           This was also made without a sewing machine which I feel is important to note because I spent around 15 hours on something that 
           could have easily been one. </h3>
      </Collapsible>
      <Collapsible title="Bangle Storage - (2025)">
        <h3>Used cardboard, glue, and black paint</h3>
      </Collapsible>
      
    </div>
    </div>
  );
}

export default DIY;