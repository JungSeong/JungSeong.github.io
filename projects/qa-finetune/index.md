---
layout: page
title: Public Office QA Chatbot Enhancement System
title_ko: 관공서 QA 챗봇 고도화 시스템
subtitle: LLM project with vLLM, DeepSpeed, Docker Compose, MCP, CoT data generation, and SFT tuning
subtitle_ko: vLLM·DeepSpeed·Docker Compose·MCP·CoT 데이터 생성·SFT 튜닝 기반 LLM 프로젝트
gh-repo: JungSeong/QA-FineTune
gh-badge: [star, fork]
---

[![Documentation](https://img.shields.io/badge/Documentation-GitHub%20Pages-0A66C2)](https://jungseong.github.io/projects/qa-finetune/)
[![Synthetic Data](https://img.shields.io/badge/Synthetic%20Data-Q%26A%20Augmentation-5B5FC7)](#getting-started)
[![Fine Tuning](https://img.shields.io/badge/Fine%20Tuning-SFT%20Pipeline-FFB000)](#getting-started)
[![Inference Workflow](https://img.shields.io/badge/Inference-Model%20Serving-0A66C2)](#getting-started)

<p data-i18n data-en="This project enhanced a public-office QA chatbot for VS Community. The work focused on reducing training and inference bottlenecks, organizing model access, generating CoT-style golden datasets, and improving SFT-based instruction following." data-ko="(주)브이에스커뮤니티 관공서 QA 챗봇 고도화 프로젝트. 추론·훈련 병목 감소, 모델 접근 구조 정리, CoT 기반 골든 데이터셋 생성, SFT 기반 지시 이해 튜닝 개선 중심">This project enhanced a public-office QA chatbot for VS Community. The work focused on reducing training and inference bottlenecks, organizing model access, generating CoT-style golden datasets, and improving SFT-based instruction following.</p>

## <span data-i18n data-en="Highlights" data-ko="핵심 내용">Highlights</span>

- <span data-i18n data-en="Developed a vLLM and DeepSpeed-based inference/training acceleration pipeline to reduce bottlenecks and improve repeated experiment flow." data-ko="추론 및 훈련 병목을 줄이기 위한 vLLM·DeepSpeed 기반 추론·훈련 가속 파이프라인 개발로 반복 실험 흐름 개선">Developed a vLLM and DeepSpeed-based inference/training acceleration pipeline to reduce bottlenecks and improve repeated experiment flow.</span>
- <span data-i18n data-en="Developed a Docker Compose and Model Context Protocol (MCP)-based model-access structure to organize model-call flow across distributed environments." data-ko="모델 접근 환경이 분산되는 문제를 줄이기 위한 Docker Compose·Model Context Protocol(MCP) 기반 모델 접근 구조 개발로 모델 호출 흐름 정리">Developed a Docker Compose and Model Context Protocol (MCP)-based model-access structure to organize model-call flow across distributed environments.</span>
- <span data-i18n data-en="Built Chain-of-Thought (CoT) question design and DeepEval Synthesizer-based golden dataset generation flow for complex civil-service inquiry coverage." data-ko="복합적인 상황에서의 민원을 모두 다루기 위해 Chain-of-Thought(CoT) 기반 질의 설계 및 DeepEval Synthesizer 기반 골든 데이터셋 생성 흐름 구축">Built Chain-of-Thought (CoT) question design and DeepEval Synthesizer-based golden dataset generation flow for complex civil-service inquiry coverage.</span>
- <span data-i18n data-en="Improved SFT-based instruction-following tuning to reduce mismatches between question intent and answer format." data-ko="질의 의도와 답변 형식 불일치를 줄이기 위한 SFT 기반 지시 이해 튜닝 개선">Improved SFT-based instruction-following tuning to reduce mismatches between question intent and answer format.</span>

## <span data-i18n data-en="Getting Started" data-ko="시작하기">Getting Started</span>

```bash
git clone https://github.com/JungSeong/QA-FineTune.git
cd QA-FineTune
```

<p data-i18n data-en="The project is organized by domain. The library Q&amp;A workflow has the most complete train/inference scripts." data-ko="Domain별 프로젝트 구성. 도서관 Q&amp;A workflow에 가장 완성도 높은 train/inference script 포함">The project is organized by domain. The library Q&A workflow has the most complete train/inference scripts.</p>

| <span data-i18n data-en="Area" data-ko="영역">Area</span> | <span data-i18n data-en="Local path" data-ko="로컬 경로">Local path</span> |
| --- | --- |
| <span data-i18n data-en="Library Q&amp;A training" data-ko="도서관 Q&amp;A 학습">Library Q&A training</span> | `도서관_QA_Finetune/final/train/main.py` |
| <span data-i18n data-en="Library Q&amp;A inference" data-ko="도서관 Q&amp;A 추론">Library Q&A inference</span> | `도서관_QA_Finetune/final/infer/main.py` |
| <span data-i18n data-en="Prompt templates" data-ko="Prompt template">Prompt templates</span> | `도서관_QA_Finetune/final/train/prompts.py` |
| <span data-i18n data-en="Dataset preprocessing" data-ko="Dataset preprocessing">Dataset preprocessing</span> | `도서관_QA_Finetune/final/train/preprocess_dataset.py` |
| <span data-i18n data-en="Experiment notebooks" data-ko="실험 notebook">Experiment notebooks</span> | `도서관_QA_Finetune/notebook/` |
| <span data-i18n data-en="Legal Q&amp;A experiments" data-ko="법률 Q&amp;A 실험">Legal Q&A experiments</span> | `법률_QA_Finetune/` |

<p data-i18n data-en="Typical entry points:" data-ko="주요 실행 지점:">Typical entry points:</p>

```bash
cd 도서관_QA_Finetune/final
python train/main.py
python infer/main.py
```
