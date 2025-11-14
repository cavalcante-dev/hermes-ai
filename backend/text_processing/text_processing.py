from flask import Blueprint, request, jsonify

blueprintText = Blueprint("text_processing", __name__)

@blueprintText.route("/processar-texto", methods=['POST'])

def processText():

    if request.is_json:
        data = request.json
        texto = data.get('texto', '').lower()

        gatilhos = ["mitinho", "milton", "pedro", "pisca", "orochi"]

        categoria = "É o goat" if any(g in texto for g in gatilhos) else "Não é o goat"

        resposta = (
            "Beeee beeeee beeee é o goat fi não tem jeito."
            if categoria == "É o goat"
            else "Nem rola, pro betinha sobra nada."
        )

        return jsonify({"categoria": categoria, "texto_resposta": resposta})

