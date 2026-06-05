---
layout: page
title: Advanced Q&A Chatbot System
subtitle: Fine-tuned public-office question answering with synthetic data and efficient LLM serving
gh-repo: JungSeong/QA-FineTune
gh-badge: [star, fork]
---

[![Documentation](https://img.shields.io/badge/Documentation-GitHub%20Pages-0A66C2)](https://jungseong.github.io/projects/qa-finetune/)
[![Synthetic Data](https://img.shields.io/badge/Synthetic%20Data-Q%26A%20Augmentation-5B5FC7)](#getting-started)
[![Fine Tuning](https://img.shields.io/badge/Fine%20Tuning-SFT%20Pipeline-FFB000)](#getting-started)
[![Inference Workflow](https://img.shields.io/badge/Inference-Model%20Serving-0A66C2)](#getting-started)

This project explores domain-specific Q&A fine-tuning for public-office style inquiries, with synthetic data generation, instruction tuning, LoRA, and efficient inference experiments.

## Highlights

- Built Chain-of-Thought style golden datasets for more stable answers to complex public-service questions.
- Used synthetic data generation and label-distribution checks to improve coverage before training.
- Compared fine-tuning and inference workflows with LoRA, DeepSpeed, vLLM, and Hugging Face model utilities.

## Getting Started

```bash
git clone https://github.com/JungSeong/QA-FineTune.git
cd QA-FineTune
```

The project is organized by domain. The library Q&A workflow has the most complete train/inference scripts.

| Area | Local path |
| --- | --- |
| Library Q&A training | `도서관_QA_Finetune/final/train/main.py` |
| Library Q&A inference | `도서관_QA_Finetune/final/infer/main.py` |
| Prompt templates | `도서관_QA_Finetune/final/train/prompts.py` |
| Dataset preprocessing | `도서관_QA_Finetune/final/train/preprocess_dataset.py` |
| Experiment notebooks | `도서관_QA_Finetune/notebook/` |
| Legal Q&A experiments | `법률_QA_Finetune/` |

Typical entry points:

```bash
cd 도서관_QA_Finetune/final
python train/main.py
python infer/main.py
```
