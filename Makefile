migrations:
	docker exec -i backend bash -c "npx prisma migrate dev"
clear_db:
	docker exec -i backend bash -c "npx prisma migrate reset --force"