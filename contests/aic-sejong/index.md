---
layout: page
title: AI for Industry Challenge
title_ko: AI for Industry Challenge
subtitle: Vision-guided cable insertion policy workspace
subtitle_ko: UR5e 케이블 포트 삽입을 위한 vision-guided policy workspace
gh-repo: JungSeong/AIC_Sejong
gh-badge: [star, fork]
---

[![Documentation](https://img.shields.io/badge/Documentation-GitHub%20Pages-0A66C2)](https://jungseong.github.io/contests/aic-sejong/)
[![Staged Policy](https://img.shields.io/badge/Staged%20Policy-Cable%20Insertion-0A66C2)](#core-workflows)
[![Vision Pipeline](https://img.shields.io/badge/Vision%20Pipeline-YOLO%20%2B%20Stereo-5B5FC7)](#core-workflows)
[![Data Workflow](https://img.shields.io/badge/Data%20Workflow-Recording%20%26%20Training-FFB000)](#core-workflows)

<p data-i18n data-en="AIC Sejong is an AI for Industry Challenge workspace for UR5e cable-port peg-in-hole insertion. The work combines ROS 2 staged motion planning, Gazebo data collection, YOLO-based port recognition, multiview/stereo triangulation, and Vision/F/T sensor retry logic." data-ko="AI for Industry Challenge UR5e 케이블 포트 삽입(Peg-in-hole) workspace. ROS 2 단계적 모션 플래닝, Gazebo 데이터 수집, YOLO 포트 인식, 멀티뷰·스테레오 삼각측량, Vision/F/T 센서 기반 재시도 로직 결합">AIC Sejong is an AI for Industry Challenge workspace for UR5e cable-port peg-in-hole insertion. The work combines ROS 2 staged motion planning, Gazebo data collection, YOLO-based port recognition, multiview/stereo triangulation, and Vision/F/T sensor retry logic.</p>

## <span data-i18n data-en="Highlights" data-ko="핵심 내용">Highlights</span>

- <span data-i18n data-en="Developed a ROS 2-based staged motion-planning policy node for UR5e cable-port peg-in-hole insertion." data-ko="UR5e 로봇의 케이블 포트 삽입(Peg-in-hole)을 위한 ROS 2 기반 단계적 모션 플래닝 정책 노드 개발">Developed a ROS 2-based staged motion-planning policy node for UR5e cable-port peg-in-hole insertion.</span>
- <span data-i18n data-en="Tuned stiffness/damping parameters to stabilize contact response during insertion." data-ko="삽입 중 접촉 반응을 안정화하기 위한 stiffness/damping(강성·감쇠) 파라미터 튜닝">Tuned stiffness/damping parameters to stabilize contact response during insertion.</span>
- <span data-i18n data-en="Built a Gazebo automatic data-collection node and headless execution, initialization wait, ROS-Gazebo bridge, and stale-process cleanup pipeline to reduce repeated experiment bottlenecks." data-ko="반복 실험 데이터 수집 병목을 줄이기 위한 Gazebo 자동 수집 노드 및 headless 실행·초기화 대기·ROS-Gazebo bridge·잔존 프로세스 정리 파이프라인 구축">Built a Gazebo automatic data-collection node and headless execution, initialization wait, ROS-Gazebo bridge, and stale-process cleanup pipeline to reduce repeated experiment bottlenecks.</span>
- <span data-i18n data-en="Integrated YOLO port recognition, multiview/stereo triangulation, and yaw/XYZ alignment logic to respond to port-position and approach-angle changes." data-ko="포트 위치·접근 각도 변화에 대응하기 위한 YOLO 포트 인식, 멀티뷰·스테레오 삼각측량, yaw/XYZ 정렬 로직 통합">Integrated YOLO port recognition, multiview/stereo triangulation, and yaw/XYZ alignment logic to respond to port-position and approach-angle changes.</span>
- <span data-i18n data-en="Developed Vision and F/T sensor-based force baseline, offset prediction, and retry logic for insertion-failure recovery." data-ko="삽입 실패 재시도를 위한 Vision 및 F/T 센서 기반 force baseline·offset 예측·재시도 로직 개발">Developed Vision and F/T sensor-based force baseline, offset prediction, and retry logic for insertion-failure recovery.</span>
- <span data-i18n data-en="Managed GitHub, Hugging Face Hub, and Notion to organize distributed experiment artifacts and collaboration flow." data-ko="분산된 실험 산출물과 협업 흐름을 정리하기 위한 GitHub/Hugging Face Hub/Notion 관리">Managed GitHub, Hugging Face Hub, and Notion to organize distributed experiment artifacts and collaboration flow.</span>
- <span data-i18n data-en="Handled teammate recruiting, schedule and role coordination, and experiment-flow documentation." data-ko="팀원 구인, 일정·역할 조율 및 실험 흐름 문서화">Handled teammate recruiting, schedule and role coordination, and experiment-flow documentation.</span>

## <span data-i18n data-en="Getting Started" data-ko="시작하기">Getting Started</span>

```bash
git clone https://github.com/JungSeong/AIC_Sejong.git ~/AIC_Sejong
cd ~/AIC_Sejong/ws_aic/src
pixi install
```

<p data-i18n data-en="Prepare the eval container:" data-ko="Eval container 준비:">Prepare the eval container:</p>

```bash
export DBX_CONTAINER_MANAGER=docker
docker pull ghcr.io/intrinsic-dev/aic/aic_eval:latest
distrobox create -r --nvidia -i ghcr.io/intrinsic-dev/aic/aic_eval:latest aic_eval
```

<p data-i18n data-en="Run simulation and policy:" data-ko="Simulation과 policy 실행:">Run simulation and policy:</p>

```bash
# Terminal 1
distrobox enter -r aic_eval -- /entrypoint.sh ground_truth:=false start_aic_engine:=true

# Terminal 2
cd ~/AIC_Sejong/ws_aic/src
pixi run ros2 run aic_model aic_model \
  --ros-args -p use_sim_time:=true \
  -p policy:=my_policy_node.StagedPolicy
```

## <span data-i18n data-en="Core Workflows" data-ko="핵심 워크플로우">Core Workflows</span>

| <span data-i18n data-en="Workflow" data-ko="워크플로우">Workflow</span> | <span data-i18n data-en="Command or path" data-ko="명령어 또는 경로">Command or path</span> |
| --- | --- |
| <span data-i18n data-en="YOLO data collection" data-ko="YOLO data collection">YOLO data collection</span> | `pixi run python ais/ais_motion_planning/collect_dataset.py` |
| <span data-i18n data-en="LeRobot recording" data-ko="LeRobot recording">LeRobot recording</span> | `pixi run lerobot-record ...` |
| <span data-i18n data-en="ACT training" data-ko="ACT training">ACT training</span> | `pixi run lerobot-train ...` |
| <span data-i18n data-en="Submission image build" data-ko="Submission image build">Submission image build</span> | `docker compose -f docker/docker-compose.yaml build model` |
| <span data-i18n data-en="Official getting started" data-ko="Official getting started 문서">Official getting started</span> | `ws_aic/src/aic/docs/getting_started.md` |
| <span data-i18n data-en="Motion planning package" data-ko="Motion planning package">Motion planning package</span> | `ws_aic/src/ais/ais_motion_planning/` |
