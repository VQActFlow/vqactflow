# VQActFlow Project Website

Static project page for **VQActFlow: Vector-Quantized Action Mode Steering for
Multi-Task Robot Manipulation**

The page presents the abstract, method, contributions, and experimental
results (LIBERO-Goal, LIBERO-90, Unitree G1 humanoid, ALOHA-style bimanual)
from the paper, with the original figures and a BibTeX citation block.

## Structure

```
index.html            page content
css/style.css          styling (paper-like: Source Serif 4, booktabs-style tables)
js/main.js             copy-BibTeX button + experiment-video galleries
assets/figures/        framework diagram and result charts
assets/fonts/          Source Serif 4, self-hosted WOFF2, SIL OFL
assets/videos/         experiment demo clips (G1, bimanual successes and failures, comparison)
assets/videos/posters/ poster frames / reduced-motion fallbacks
.nojekyll              tells GitHub Pages to skip Jekyll processing
```

The G1 humanoid and bimanual experiment sections use interactive video galleries
(pick a task to watch a rollout) instead of static setup photos. The bimanual section
also has a gallery of failed rollouts from the unguided policy, for contrast. Clips are
muted, looping, autoplaying H.264 with their metadata stripped.

This is a plain static site — no build step, no dependencies.

## Viewing locally

From the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick the branch this site lives on and the `/ (root)` folder, then **Save**.
5. GitHub will publish the site at the URL shown on the Pages settings
   screen once it's live (the first deployment can take a minute or two).
