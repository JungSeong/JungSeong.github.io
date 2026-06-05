---
layout: page
title: Structural Stability Physical Reasoning AI
subtitle: Physics-aware dual-view prediction with checkerboard normalization
gh-repo: whyz-dev/structure-stability
gh-badge: [star, fork]
---

[![Documentation](https://img.shields.io/badge/Documentation-GitHub%20Pages-0A66C2)](https://jungseong.github.io/contests/structure-stability/)
[![Dual View Encoder](https://img.shields.io/badge/Dual%20View-Encoder-EE4C2C)](#core-workflows)
[![Checkerboard Norm](https://img.shields.io/badge/Checkerboard-Top%20View%20Norm-5C3EE8)](#core-workflows)
[![Grouped CV](https://img.shields.io/badge/Grouped%20CV-Fold%20Ensemble-F9AB00)](#core-workflows)

Structural Stability Physical Reasoning AI is a competition project for predicting whether generated structures remain stable. The solution combines front/top-view image modeling, checkerboard-based top-view rotation normalization, motion pseudo targets, and grouped cross validation.

## Highlights

- Two-view encoder mainline with top-view checkerboard rotation normalization.
- Motion-target extraction and grouped CV workflow for logloss-oriented validation.
- Fold ensemble submission generation with TTA and optional geometry reasoning features.
- Ranked 66th out of 484 teams, top 13.6%.

## Getting Started

```bash
git clone https://github.com/whyz-dev/structure-stability.git
cd structure-stability
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Run the packaged physics-aware workflow:

```bash
cd tools/physics_solution
python full_physics_solution.py full-run \
  --out-dir runs/final \
  --backbone efficientnet_v2_s \
  --pretrained \
  --image-size 320 \
  --batch-size 8 \
  --epochs 12 \
  --num-folds 5
```

## Core Workflows

| Workflow | Command or path |
| --- | --- |
| Motion target extraction | `python full_physics_solution.py extract-motion` |
| Design holdout training | `python full_physics_solution.py train-design ...` |
| Grouped CV training | `python full_physics_solution.py cv-train ...` |
| Fold ensemble submission | `python full_physics_solution.py make-submission ...` |
| Colab one-click guide | `tools/physics_solution/README_COLAB.md` |
| Physics-aware package | `tools/physics_solution/` |
