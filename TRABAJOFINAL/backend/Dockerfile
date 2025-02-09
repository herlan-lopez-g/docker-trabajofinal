# Usa la imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código del backend al contenedor
COPY . .

# Expone el puerto en el que corre tu aplicación
EXPOSE 8080

# Comando para iniciar el servidor
CMD ["node", "server.js"]