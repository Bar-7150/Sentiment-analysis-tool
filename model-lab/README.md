
## ⚙️ Setup Guide

### 1️⃣ Create a Virtual Environment

Choose **any one** of the following methods:

```bash
# Option 1: Using Conda
conda create -n feelface python=3.10
conda activate feelface

# Option 2: Using venv
python -m venv venv
source venv/bin/activate     # macOS / Linux
venv\Scripts\activate        # Windows

# Option 3: Using uv 
uv init
```

---

### 2️⃣ Install Dependencies

```bash
pip install -r app/requirements.txt
```

---

### 3️⃣ Run the Server

```bash
uvicorn app.main:app --reload
```

The API will start at:
 **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

### 4️⃣ Test the API

You can test using `curl` or any tool like Postman:
Give n = 1 or 2
- 1 - For using the ViT model from hugging face
- 2 - For using the Emotion-Ferplus-8 model as mentioned in onnx
```bash
curl -X POST "http://127.0.0.1:8000/predict" \
  -F "file=@face.jpg" \
  -F "model_option={n}"
```

Response example:

```json
{
  "emotion": "happy",
  "probabilities": {
    "angry": 0.05,
    "disgust": 0.02,
    "fear": 0.03,
    "happy": 0.78,
    "sad": 0.04,
    "surprise": 0.06,
    "neutral": 0.02
  }
}
```
## About Emotion-Ferplus-8 Model - 
*To be used if model conversion is needed in future versions*
```
  model = onnx.load(model_path)
  converted_model = version_converter.convert_version(model, 12)
  converted_path = model_path.replace("-8.onnx", "-12.onnx")
  onnx.save_model(converted_model, converted_path)
```

In the `detect_face()` function if required to add more padding use this code - 
```
padding = int(0.2 * max(w, h))  # Increased from 10% to 20%
x = max(0, x - padding)
y = max(0, y - padding)
w = min(gray.shape[1] - x, w + 2 * padding)
h = min(gray.shape[0] - y, h + 2 * padding)
```