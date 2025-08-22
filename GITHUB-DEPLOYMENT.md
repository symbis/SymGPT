# SymGPT GitHub Deployment Guide

## Voor je collega - Eenvoudige deployment vanuit GitHub:

### **Stap 1: Clone Repository**
```bash
git clone https://github.com/symbis/SymGPT.git
cd SymGPT
```

### **Stap 2: Environment Setup**
```bash
# Kopieer environment template
cp .env.example .env

# Vul Azure OpenAI credentials in .env:
nano .env
```

Vul in `.env`:
```bash
AZURE_OPENAI_API_KEY=your_azure_key_here
AZURE_OPENAI_INSTANCE=your_instance_name
AZURE_GPT41_DEPLOYMENT=your_gpt41_deployment_name
AZURE_GPT5_DEPLOYMENT=your_gpt5_deployment_name
```

### **Stap 3: One-Command Deployment**
```bash
# Installeer dependencies en start SymGPT
make deploy
```

### **Stap 4: Verificatie**
```bash
# Controleer of alles werkt
make verify
```

### **Klaar!**
SymGPT draait nu op: **http://localhost:3080**

## Wat zit er allemaal in de repository?

### **✅ Volledige SymGPT Setup**
- **Gecompileerde frontend** (`client/dist/`) - alle Symbis styling en branding
- **Custom configuratie** (`librechat.yaml`) - SymGPT en SymGPT Pro modellen
- **Docker setup** (`docker-compose.override.yml`) - correcte volume mapping
- **Deployment tools** (`Makefile`, scripts) - automatische deployment
- **Symbis assets** (`client/public/assets/`) - logo's en styling

### **✅ Custom Branding**
- **Symbis logo's** in plaats van Azure logo's
- **Custom footer**: "SymGPT | Powered by Symbis"
- **Symbis kleuren**: groen/geel styling op login pagina's
- **SymGPT modellen**: met Symbis tone-of-voice prompts

### **❌ Niet in repository (veiligheid)**
- **`.env`** - Azure credentials (moet lokaal worden aangemaakt)
- **Runtime data** - databases, uploads, logs
- **Node modules** - worden lokaal geïnstalleerd

## Troubleshooting

Als er problemen zijn:

```bash
# Reset alles
make clean

# Opnieuw deployen
make deploy

# Controleren
make verify
```

## Makefile Commands

```bash
make help          # Toon alle beschikbare commands
make setup          # Installeer dependencies, maak .env
make deploy         # Volledige deployment (build + start)
make verify         # Controleer deployment
make clean          # Stop containers en cleanup
make restart        # Herstart containers
make logs           # Toon application logs
make status         # Toon container status
```

## Wat is er opgelost?

### **Hardnekkige problemen die nu automatisch zijn weggenomen:**
1. ✅ **Docker-compose bestandsnaam** - correct gespeld in repository
2. ✅ **Volume mapping** - gecompileerde frontend wordt correct gemount
3. ✅ **Frontend compilatie** - gecompileerde bestanden zitten in repository
4. ✅ **ModelSpecs configuratie** - `enforce: true` correct ingesteld
5. ✅ **YAML syntax** - alle configuratie errors opgelost

### **Resultaat:**
Je collega kan nu in één commando (`make deploy`) de volledige SymGPT applicatie opstarten zonder tegen problemen aan te lopen.