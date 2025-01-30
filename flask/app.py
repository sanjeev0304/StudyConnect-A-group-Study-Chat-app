from flask import Flask, render_template, request, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

# Load the saved model
with open("kmeans_model.pkl", "rb") as file:
    model_data = pickle.load(file)

k_means = model_data["kmeans"]
scaler = model_data["scaler"]
encoder = model_data["encoder"]
cluster_mapping = model_data["cluster_mapping"]

@app.route("/cluster", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        age = int(request.form["age"])
        specialization = request.form["specialization"]
        year_of_study = request.form["year_of_study"]
        
        # Prepare input data
        new_data = pd.DataFrame([[age, specialization, year_of_study]], 
                                columns=["Age", "Specialization", "Year of Study"])
        new_encoded = encoder.transform(new_data[["Specialization", "Year of Study"]])
        new_X = pd.concat([new_data[["Age"]], pd.DataFrame(new_encoded, columns=encoder.get_feature_names_out())], axis=1)
        new_X_scaled = scaler.transform(new_X)

        predicted_label = k_means.predict(new_X_scaled)[0]
        predicted_cluster = cluster_mapping[predicted_label]
        
        return render_template("index.html", prediction=predicted_cluster)
    
    return render_template("index.html", prediction=None)

if __name__ == "__main__":
    app.run(debug=True)