# PELLIS-AI
![PELLIS-AI Banner](assets\banner.jpg)

## Capstone Project – Laskar AI
**Team ID: [LAI25-SM084]**

Pellis-AI adalah aplikasi yang memanfaatkan teknologi **Artificial Intelligence (AI)** untuk mendeteksi penyakit kulit dari gambar secara cepat, mudah, dan terjangkau. Proyek ini bertujuan untuk memberikan solusi akses awal deteksi penyakit kulit tanpa perlu langsung berkonsultasi ke dokter, sekaligus memberikan edukasi kepada masyarakat mengenai pentingnya menjaga kesehatan kulit.

---

## 👥 Our Team

| Name | Bangkit ID | University | Learning Path | LinkedIn | GitHub |
|------|------------|------------|----------------|----------|--------|
| Yoel Petro Patintingan | A183YAF508 | Universitas Amikom Yogyakarta | Machine Learning | [LinkedIn](https://www.linkedin.com/in/yoel-petro-patintingan-8476b0213/) | [GitHub](https://github.com/Yoelptr) |
| Ghifari Fikri Yulistia | A210YBM183 | Universitas Ibn Khaldun Bogor | Machine Learning | [LinkedIn](https://www.linkedin.com/in/ghifari-fikri-yulistia-94275b19b/) | [GitHub](https://github.com/ItsNudle) |
| Cikal Firdansyah Ramadhan | A210YBM105 | Universitas Ibn Khaldun Bogor | Machine Learning | [LinkedIn](https://www.linkedin.com/in/cikalfirdansyah/) | [GitHub](https://github.com/ItsNudle) |
| Rifki Nova Suryo | A119YBF425 | Institut Teknologi Sumatera | Machine Learning | [LinkedIn](https://www.linkedin.com/in/rifkinovasuryo/) | [GitHub](https://github.com/RifkiNS) |

---

## 🧑‍🏫 Our Advisors

| Name | Advisor ID | Expertise | Email |
|------|------------|-----------|-------|
| Iga Narendra Pramawijaya | LA25 - AD045 | Machine Learning | iga.narendra@gmail.com |



---

## 💡 About This Project

Masalah kesehatan kulit merupakan salah satu isu yang sering diabaikan, padahal memiliki dampak besar terhadap kepercayaan diri dan kualitas hidup seseorang. Akses ke layanan dermatologi sering terhambat oleh biaya, lokasi, atau waktu.

Dengan menggabungkan **Artificial Intelligence (AI)** dan **Computer Vision**, proyek ini membangun sebuah sistem berbasis **Convolutional Neural Network (CNN)** untuk mendeteksi jenis penyakit kulit dari gambar yang diambil melalui smartphone. Sistem ini bertujuan untuk:
- Memberikan prediksi awal terhadap kondisi kulit pengguna
- Mendorong konsultasi lebih lanjut dengan tenaga medis profesional
- Memberikan solusi yang cepat, mudah diakses, dan hemat biaya

---

## 📄 Documentation

- 📌 **Project Plan**: [Link to Google Docs](https://docs.google.com/document/d/1uxvKJwGif3s-7uvwnBZCVU2pLp0geZsDg4ceB0_mTHk/edit?usp=sharing)
- 📃 **Project Brief**: _[Coming Soon]_
- 📺 **Video Presentation**: _[Coming Soon]_

---

## 📂 Branches

| Branch Name | Description | Link |
|-------------|-------------|------|
| `ML` | Pengembangan dan pelatihan model machine learning | [Link](https://github.com/cikalfirdansyah/PELLIS-AI/tree/ML) |
| `WD` | Pengembangan antarmuka web atau mobile | [Link](https://github.com/cikalfirdansyah/PELLIS-AI/tree/WD) |

---

## 🧠 System Architecture

![System Architecture](https://github.com/cikalfirdansyah/PELLIS-AI/blob/main/assets/system_architecture.png)

#
<!-- _(Gambar ini akan menggambarkan alur sistem dari input gambar, prediksi model, hingga output ke user. Silakan upload gambar ke folder `assets/` dan ubah link di atas.)_ -->

---

## 🔌 API Documentation
```
conda create -n pellis_ai python=3.10

conda activate pellis_ai

pip install flask flask-cors numpy tensorflow opencv-python

pyhton app.py

ngrok http 5000
```

---

## 📊 Dataset

Kami menggunakan dataset penyakit kulit dari Kaggle yang mencakup berbagai jenis penyakit umum yang dapat dideteksi melalui citra visual.

- Dataset utama: _[[kaggle](https://www.kaggle.com/datasets/mgmitesh/skin-disease-detection-dataset)]_
- Sumber: Kaggle / Open Source
- Jumlah kelas: [15 Kategori Penyakit]
- Jumlah data: [48.2k Files]

---

## 🎨 UI/UX Design

- 🎨 Hi-Fi Design: _[[Figma](https://www.figma.com/design/4U1bFNDwepMgMrfQ33DJul/WEB-AI?node-id=0-1&p=f&t=tObl6fZH8hAk743l-0)]_
- 🎮 Demo Prototype: _[[Video](https://drive.google.com/file/d/1Ue99VXqJMFK_ogoVIWG3HucrDNdpseyR/view?usp=sharing)]_

---

## 📱 WEB & Deployment

- 🌐 Web Version : _[[Deployment](https://pelis-ai.vercel.app)]_

---

## 📌 License

This project is created as part of the Laskar AI Capstone Project. All rights reserved by the team.

---
