from flask import Blueprint, render_template

pwgenerator = Blueprint(
    "pwgenerator", __name__, template_folder="templates", static_folder="static"
)


@pwgenerator.route("/")
def home() -> str:
    """Index page for password generator"""
    return render_template("index.html")
