# 1

Необходимо закодировать небольшое приложение на nodejs по следующему тз:
Приветствуется front + back. Если вы можете сделать только фронт, то можете просто проэмулировать backend - mock заглушками.


бекенд: 
	ES6 
	generators 
	coroutines  
	bluebird 
	koa.js

migrations:
	первоначальные данные
test:
	mocha
		
либы:
	moment.js
	lodash.js

db:
	mysql

фронт: 
	ES6 + react + bootstrap + nv-d3.js + webpack (require style) + babel
репы:
	только npm


# Interface

Левое меню

1. Staff - сотрудники (это только пункт меню не сущность)
	1. Departmets - подменю

## Staff

### Departments
Здесь будут отображаться департаменты

Показать таблицу департаментов (реализовать простейший CRUD)

Операции

1. Создание департамента
2. Редактирование департамента
3. (Удаление не надо - не будем их удалять)



# API

1. /Department/
  1. create
  2. update
  4. get
  5. getList

# DB - База данных


1. Departament


## Department

данная таблица содержит список департаментов компании


| # | Индекс   |  Поле  | Описание  |
|---|----------|--------|-----------|
| 1 | PK | DepartmentId  |  Идентификатор департамента  |
| 2 | varchar/unique | Name  | Название департамента  |

Первоначальные тестовые данные, для этой таблицы

1. Marketing
2. Support
3. Accounting
4. General Administrative
