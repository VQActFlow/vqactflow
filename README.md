# VQActFlow Project Website

Static project page for **VQActFlow: Vector-Quantized Action Mode Steering for
Multi-Task Robot Manipulation** (Zhao, Leggiero, Chen, Liu, Wu, Xue, Zhan, Zhao —
Institute for Robotics and Intelligent Machines, Georgia Tech).

The page presents the abstract, method, contributions, and experimental
results (LIBERO-Goal, LIBERO-90, Unitree G1 humanoid, ALOHA-style bimanual)
from the paper, with the original figures and a BibTeX citation block.

## Structure

```
index.html            page content
css/style.css          styling
js/main.js              "copy BibTeX" button behavior
assets/figures/         figures extracted from the paper
.nojekyll               tells GitHub Pages to skip Jekyll processing
```

This is a plain static site — no build step, no dependencies.

## Viewing locally

From the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick the branch this site lives on and the `/ (root)` folder, then **Save**.
5. GitHub will publish the site at:
   `https://mleggiero.github.io/vqactflow-website/`
   (the URL is also shown on the Pages settings screen once it's live;
   the first deployment can take a minute or two).
