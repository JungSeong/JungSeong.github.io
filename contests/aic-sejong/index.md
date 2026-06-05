---
layout: page
title: AI for Industry Challenge
subtitle: Vision-guided cable insertion policy workspace
gh-repo: JungSeong/AIC_Sejong
gh-badge: [star, fork]
---

[![Documentation](https://img.shields.io/badge/Documentation-GitHub%20Pages-0A66C2)](https://jungseong.github.io/contests/aic-sejong/)
[![Staged Policy](https://img.shields.io/badge/Staged%20Policy-Cable%20Insertion-0A66C2)](#core-workflows)
[![Vision Pipeline](https://img.shields.io/badge/Vision%20Pipeline-YOLO%20%2B%20Stereo-5B5FC7)](#core-workflows)
[![Data Workflow](https://img.shields.io/badge/Data%20Workflow-Recording%20%26%20Training-FFB000)](#core-workflows)

AIC Sejong is a competition workspace for the AI for Industry Challenge. The project develops, trains, and evaluates UR5e cable-insertion policies with a staged vision-guided workflow.

## Highlights

- Staged cable-insertion policy with YOLO + stereo triangulation for port localization.
- Simulation and evaluation workflow using the official AIC packages, Docker eval container, and ROS2 model node.
- LeRobot recording and ACT training workflows with Hugging Face model/data utilities.

## Getting Started

```bash
git clone https://github.com/JungSeong/AIC_Sejong.git ~/AIC_Sejong
cd ~/AIC_Sejong/ws_aic/src
pixi install
```

Prepare the eval container:

```bash
export DBX_CONTAINER_MANAGER=docker
docker pull ghcr.io/intrinsic-dev/aic/aic_eval:latest
distrobox create -r --nvidia -i ghcr.io/intrinsic-dev/aic/aic_eval:latest aic_eval
```

Run simulation and policy:

```bash
# Terminal 1
distrobox enter -r aic_eval -- /entrypoint.sh ground_truth:=false start_aic_engine:=true

# Terminal 2
cd ~/AIC_Sejong/ws_aic/src
pixi run ros2 run aic_model aic_model \
  --ros-args -p use_sim_time:=true \
  -p policy:=my_policy_node.StagedPolicy
```

## Core Workflows

| Workflow | Command or path |
| --- | --- |
| YOLO data collection | `pixi run python ais/ais_motion_planning/collect_dataset.py` |
| LeRobot recording | `pixi run lerobot-record ...` |
| ACT training | `pixi run lerobot-train ...` |
| Submission image build | `docker compose -f docker/docker-compose.yaml build model` |
| Official getting started | `ws_aic/src/aic/docs/getting_started.md` |
| Motion planning package | `ws_aic/src/ais/ais_motion_planning/` |
