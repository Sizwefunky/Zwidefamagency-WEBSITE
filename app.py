from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/apply', methods=['POST'])
def apply():
    name = request.form['name']
    role = request.form['role']
    experience = request.form['experience']
    # Save to database here
    return f"Application received for {name} as {role}!"

if __name__ == "__main__":
    app.run(debug=True)
    