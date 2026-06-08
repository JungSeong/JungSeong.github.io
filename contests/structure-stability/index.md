---
layout: page
title: Structural Stability Physical Reasoning AI
title_ko: 구조물 안정성 물리 추론 AI 경진대회
subtitle: Image/video augmentation, multiview cross-attention, knowledge distillation, and ensemble calibration
subtitle_ko: 이미지·영상 증강, 멀티뷰 Cross-Attention, Knowledge Distillation, ensemble calibration
gh-repo: whyz-dev/structure-stability
gh-badge: [star, fork]
---

[![Documentation](https://img.shields.io/badge/Documentation-GitHub%20Pages-0A66C2)](https://jungseong.github.io/contests/structure-stability/)
[![Dual View Encoder](https://img.shields.io/badge/Dual%20View-Encoder-EE4C2C)](#core-workflows)
[![Checkerboard Norm](https://img.shields.io/badge/Checkerboard-Top%20View%20Norm-5C3EE8)](#core-workflows)
[![Grouped CV](https://img.shields.io/badge/Grouped%20CV-Fold%20Ensemble-F9AB00)](#core-workflows)

<p data-i18n data-en="This DACON competition project predicted structural stability from image and video data. The work focused on dataset augmentation, multiview Bidirectional Cross-Attention, training-condition comparisons, learning stabilization, probability calibration, and ensemble search." data-ko="데이콘 구조물 안정성 물리 추론 AI 경진대회 프로젝트. 이미지·영상 데이터 기반 구조물 안정성 예측을 위해 데이터 증강, 멀티뷰 Bidirectional Cross-Attention, 학습 조건 비교, 학습 안정화, 확률 보정, ensemble search 수행">This DACON competition project predicted structural stability from image and video data. The work focused on dataset augmentation, multiview Bidirectional Cross-Attention, training-condition comparisons, learning stabilization, probability calibration, and ensemble search.</p>

## <span data-i18n data-en="Highlights" data-ko="핵심 내용">Highlights</span>

- <span data-i18n data-en="Implemented image/video augmentation and brightness/rotation preprocessing pipelines to increase dataset diversity." data-ko="데이터 세트 다양성을 높이기 위한 이미지·영상 증강과 밝기·회전 전처리 파이프라인 구현">Implemented image/video augmentation and brightness/rotation preprocessing pipelines to increase dataset diversity.</span>
- <span data-i18n data-en="Implemented a multiview Bidirectional Cross-Attention model and preprocessing code to learn multiple structure viewpoints together." data-ko="여러 시점의 구조물 이미지를 함께 학습하기 위한 멀티뷰 Bidirectional Cross-Attention 모델 및 전처리 코드 구현">Implemented a multiview Bidirectional Cross-Attention model and preprocessing code to learn multiple structure viewpoints together.</span>
- <span data-i18n data-en="Compared key training conditions including backbone, epoch, and weight decay to secure stable physical-reasoning model performance." data-ko="물리 추론 모델의 안정적인 성능 확보를 위해 Backbone·epoch·weight decay 등 주요 학습 조건 비교">Compared key training conditions including backbone, epoch, and weight decay to secure stable physical-reasoning model performance.</span>
- <span data-i18n data-en="Configured learning stabilization with Knowledge Distillation, teacher regularization, mixup, EMA, and early stopping to transfer existing-model predictions and reduce overfitting." data-ko="기존 모델의 예측 지식을 새 모델 학습에 활용하는 Knowledge Distillation과 과적합 완화를 위한 teacher regularization·mixup·EMA·early stopping 기반 학습 안정화 구성">Configured learning stabilization with Knowledge Distillation, teacher regularization, mixup, EMA, and early stopping to transfer existing-model predictions and reduce overfitting.</span>
- <span data-i18n data-en="Recorded 66th place out of 484 teams (top 13.6%) through dev logloss analysis, temperature scaling, and ensemble weight search." data-ko="검증 데이터 기준 성능 비교를 위한 dev logloss 분석, 예측 확률 보정을 위한 temperature scaling, 여러 모델 결과를 결합하는 ensemble weight search로 484팀 중 66등(상위 13.6%) 기록">Recorded 66th place out of 484 teams (top 13.6%) through dev logloss analysis, temperature scaling, and ensemble weight search.</span>

## <span data-i18n data-en="Getting Started" data-ko="시작하기">Getting Started</span>

```bash
git clone https://github.com/whyz-dev/structure-stability.git
cd structure-stability
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

<p data-i18n data-en="Run the packaged physics-aware workflow:" data-ko="패키징된 physics-aware workflow 실행:">Run the packaged physics-aware workflow:</p>

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

## <span data-i18n data-en="Core Workflows" data-ko="핵심 워크플로우">Core Workflows</span>

| <span data-i18n data-en="Workflow" data-ko="워크플로우">Workflow</span> | <span data-i18n data-en="Command or path" data-ko="명령어 또는 경로">Command or path</span> |
| --- | --- |
| <span data-i18n data-en="Motion target extraction" data-ko="Motion target extraction">Motion target extraction</span> | `python full_physics_solution.py extract-motion` |
| <span data-i18n data-en="Design holdout training" data-ko="Design holdout training">Design holdout training</span> | `python full_physics_solution.py train-design ...` |
| <span data-i18n data-en="Grouped CV training" data-ko="Grouped CV training">Grouped CV training</span> | `python full_physics_solution.py cv-train ...` |
| <span data-i18n data-en="Fold ensemble submission" data-ko="Fold ensemble submission">Fold ensemble submission</span> | `python full_physics_solution.py make-submission ...` |
| <span data-i18n data-en="Colab one-click guide" data-ko="Colab one-click guide">Colab one-click guide</span> | `tools/physics_solution/README_COLAB.md` |
| <span data-i18n data-en="Physics-aware package" data-ko="Physics-aware package">Physics-aware package</span> | `tools/physics_solution/` |
