echo 'Send message'

curl -i -d '{"user": "@douglas", "message": "olá"}' \
-H "Content-Type: application/json" \
-X POST http://localhost:3000/send

echo 'Read messages'

curl http://localhost:3000/read