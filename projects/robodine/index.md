---
layout: page
title: RoboDine
title_ko: RoboDine
subtitle: Vision and robotics project for monocular robot-arm pose estimation, foreign-object handling, and Agile collaboration
subtitle_ko: 단안 2D 카메라 기반 로봇팔 자세 추정, 이물질 대응, Agile 협업 중심의 Vision/Robotics 프로젝트
gh-repo: addinedu-roscamp-4th/roscamp-repo-2
gh-badge: [star, fork]
---

[![Documentation](https://img.shields.io/badge/Documentation-GitHub%20Pages-0A66C2)](https://jungseong.github.io/projects/robodine/)
[![ROS2](https://img.shields.io/badge/ROS2-Robotics-22314E)](#demo-videos)
[![Vision](https://img.shields.io/badge/Vision-YOLO-00A86B)](#highlights)
[![DBSCAN](https://img.shields.io/badge/DBSCAN-Foreign%20Object%20Handling-FFB000)](#highlights)

<p data-i18n data-en="RoboDine is a vision and robotics project that trained a YOLO pose model with data preprocessing and augmentation to reduce pre-grasp pose-estimation errors for a robot arm with a monocular 2D camera. It improved 6-DoF pose-estimation accuracy by 14%, implemented Hough Circles and DBSCAN-based logic for foreign-object scenarios in the loading area, and used GitHub, Jira, and Confluence in an Agile workflow." data-ko="RoboDine은 단안 2D 카메라가 달린 로봇팔의 물체 파지 전 자세 추정 오차를 줄이기 위한 데이터 전처리 및 증강 기법 적용한 YOLO pose 모델 학습으로 6-DoF 자세 추정 정확도 14%를 개선한 프로젝트입니다. 적재 공간에 이물질로 인한 문제 발생 시나리오 대비를 위한 Hough Circles/DBSCAN 알고리즘 기반 로직을 구현하고, GitHub/JiRA/Confluence를 사용한 협업 및 Agile 방식의 개발을 수행했습니다.">RoboDine is a vision and robotics project that trained a YOLO pose model with data preprocessing and augmentation to reduce pre-grasp pose-estimation errors for a robot arm with a monocular 2D camera. It improved 6-DoF pose-estimation accuracy by 14%, implemented Hough Circles and DBSCAN-based logic for foreign-object scenarios in the loading area, and used GitHub, Jira, and Confluence in an Agile workflow.</p>

## <span id="highlights" data-i18n data-en="Highlights" data-ko="핵심 내용">Highlights</span>

- <span data-i18n data-en="Trained a YOLO pose model with data preprocessing and augmentation to reduce pre-grasp pose-estimation errors for a robot arm with a monocular 2D camera, improving 6-DoF pose-estimation accuracy by 14%." data-ko="단안 2D 카메라가 달린 로봇팔의 물체 파지 전 자세 추정 오차를 줄이기 위한 데이터 전처리 및 증강 기법 적용한 YOLO pose 모델 학습, 6-DoF 자세 추정 정확도 14% 개선">Trained a YOLO pose model with data preprocessing and augmentation to reduce pre-grasp pose-estimation errors for a robot arm with a monocular 2D camera, improving 6-DoF pose-estimation accuracy by 14%.</span>
- <span data-i18n data-en="Implemented Hough Circles and DBSCAN-based logic to prepare for scenarios where foreign objects cause issues in the loading area." data-ko="적재 공간에 이물질로 인한 문제 발생 시나리오 대비를 위한 Hough Circles/DBSCAN 알고리즘 기반 로직 구현">Implemented Hough Circles and DBSCAN-based logic to prepare for scenarios where foreign objects cause issues in the loading area.</span>
- <span data-i18n data-en="Collaborated through GitHub, Jira, and Confluence while following an Agile development process." data-ko="GitHub/JiRA/Confluence를 사용한 협업 및 Agile 방식의 개발 수행">Collaborated through GitHub, Jira, and Confluence while following an Agile development process.</span>

## <span id="demo-videos" data-i18n data-en="Demo Videos" data-ko="데모 영상">Demo Videos</span>

<div class="video-grid">
  <figure class="video-card">
    <video controls preload="metadata" poster="/img/projects/robodine.png">
      <source src="/img/projects/robodine-demo.mp4" type="video/mp4">
    </video>
    <figcaption data-i18n data-en="RoboDine integrated operation demo" data-ko="RoboDine 통합 동작 데모">RoboDine integrated operation demo</figcaption>
  </figure>
  <figure class="video-card">
    <video controls preload="metadata" poster="/img/projects/robodine.png">
      <source src="/img/projects/robodine-vision.mp4" type="video/mp4">
    </video>
    <figcaption data-i18n data-en="Vision and avoidance pipeline demo" data-ko="Vision 및 회피 파이프라인 데모">Vision and avoidance pipeline demo</figcaption>
  </figure>
</div>

## <span data-i18n data-en="Repository" data-ko="저장소">Repository</span>

```bash
git clone https://github.com/addinedu-roscamp-4th/roscamp-repo-2.git
cd roscamp-repo-2
```

<style>
  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
    margin: 1rem 0 1.6rem;
  }

  .video-card {
    margin: 0;
  }

  .video-card video {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #111827;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    display: block;
  }

  .video-card figcaption {
    color: #555;
    font-size: 0.86rem;
    line-height: 1.45;
    margin-top: 0.45rem;
  }
</style>
