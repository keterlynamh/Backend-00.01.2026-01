--1.-Revisa las tablas Customers (clientes), Employees (empleados) y Orders (pedidos)
select * from customers;
select * from orders;
select * from employees;

--2. ¿Cuántos clientes hay registrados?
SELECT COUNT(*) AS TotalClientes
FROM Customers;

--3. ¿Cuántos pedidos hay?
SELECT COUNT(*) AS TotalPedidos
FROM Orders;

--4. ¿Qué clientes viven en Londres y su nombre empieza por A?
SELECT contact_name
FROM Customers
WHERE City = 'London'
AND contact_Name LIKE 'A%';

--5. ¿Cuántos clientes hay que son de Londres?
SELECT COUNT(*) AS ClientesLondres
FROM Customers
WHERE City = 'London';

--6. ¿Cuántos clientes hay en cada ciudad?
SELECT City, COUNT(*) AS TotalClientes
FROM Customers
GROUP BY City;

--7. ¿Cuántos empleados nacieron después del 1 de junio de 1965?
SELECT COUNT(*) AS Empleados
FROM Employees
WHERE birth_date > '1965-06-01';

--8. Informe: “El empleado N nació el N”
SELECT CONCAT('El empleado ', first_name, ' ', Last_Name, 
              ' nació el ', birth_date) AS Informe
FROM Employees;

--9. Informe anterior solo para empleados con id 8, 7, 3 y 10
SELECT CONCAT('El empleado ', first_name, ' ', Last_Name, 
              ' nació el ', Birth_Date) AS Informe
FROM Employees
WHERE employee_id IN (8,7,3,10);

--10. Países con más de 5 clientes ordenados por nombre de país
SELECT Country, COUNT(*) AS TotalClientes
FROM Customers
GROUP BY Country
HAVING COUNT(*) > 5
ORDER BY Country;


--Ejercicios SQL con más de una tabla
--1. Nombre del cliente del pedido 10360
SELECT c.Contact_Name, o.Order_ID
FROM Orders o
JOIN Customers c ON o.Customer_ID = c.Customer_ID
WHERE o.Order_ID = 10360;

--2. Nombre completo de los clientes de los pedidos 10360, 10253 y 10440
SELECT o.Order_ID, c.Contact_Name
FROM Orders o
JOIN Customers c ON o.Customer_ID = c.Customer_ID
WHERE o.Order_ID IN (10360,10253,10440);

--3. Ciudades y número de pedidos de clientes en esa ciudad
SELECT c.City, COUNT(o.Order_ID) AS NumeroPedidos
FROM Customers c
JOIN Orders o ON c.Customer_ID = o.Customer_ID
GROUP BY c.City
ORDER BY NumeroPedidos DESC

--4. Ciudades desde las que hay más de 7 pedidos
SELECT c.City, COUNT(o.Order_ID) AS NumeroPedidos
FROM Customers c
JOIN Orders o ON c.Customer_ID = o.Customer_ID
GROUP BY c.City
HAVING COUNT(o.Order_ID) > 7;

--5. Los tres países desde los que tengo más pedidos
SELECT c.Country, COUNT(o.Order_ID) AS NumeroPedidos
FROM Customers c
JOIN Orders o ON c.Customer_ID = o.Customer_ID
GROUP BY c.Country
ORDER BY NumeroPedidos DESC
LIMIT 3;

--6. Informe con el nombre completo de los empleados y el número de pedidos que registraron
SELECT 
e.first_name || ' ' || e.last_name AS empleado,
COUNT(o.order_id) AS numero_pedidos
FROM employees e
JOIN orders o ON e.employee_id = o.employee_id
GROUP BY e.employee_id, e.first_name, e.last_name;

--7. El informe anterior pero empleados cuyo nombre empieza por M
SELECT
e.first_name || ' ' || e.last_name AS empleado,
COUNT(o.order_id) AS numero_pedidos
FROM employees e
JOIN orders o ON e.employee_id = o.employee_id
WHERE e.first_name LIKE 'M%'
GROUP BY e.employee_id, e.first_name, e.last_name;

--8. Número de pedido, empleado (solo nombre) y cliente
SELECT 
o.order_id,
e.first_name AS Empleado,
c.contact_name AS Cliente
FROM Orders o
JOIN Employees e ON o.employee_id = e.employee_id
JOIN Customers c ON o.customer_id = c.customer_id;

--9. ¿Hay clientes que hayan hecho más de un pedido registrado por el mismo empleado?
SELECT 
c.contact_name,
e.first_name,
COUNT(o.order_id) AS NumeroPedidos
FROM Orders o
JOIN Customers c ON o.Customer_ID = c.Customer_ID
JOIN Employees e ON o.Employee_ID = e.Employee_ID
GROUP BY c.contact_name, e.first_name
HAVING COUNT(o.Order_ID) > 1;

--10. Clientes con más de un pedido registrado por un empleado llamado Margaret
SELECT 
c.contact_name,
COUNT(o.Order_ID) AS NumeroPedidos
FROM Orders o
JOIN Customers c ON o.Customer_ID = c.Customer_ID
JOIN Employees e ON o.Employee_ID = e.Employee_ID
WHERE e.First_Name = 'Margaret'
GROUP BY c.contact_name
HAVING COUNT(o.Order_ID) > 1;

Ejercicios con Subconsultas
--1. ¿Cuál es el producto con el precio mínimo más bajo?
SELECT product_name, unit_price
FROM products
WHERE unit_price = (
    SELECT MIN(unit_price)
    FROM products
);

--2. Producto cuyo precio sea al menos 10 veces el pedido mínimo (quantity)
SELECT product_name, unit_price
FROM products
WHERE unit_price >= 10 * (
    SELECT MIN(quantity)
    FROM order_details
);

--3. Productos cuyo precio sea mayor que el máximo precio de productos con id 3,6,9,10
SELECT *
FROM products
WHERE unit_price > (
    SELECT MAX(unit_price)
    FROM products
    WHERE product_id IN (3,6,9,10)
);

--4. Productos cuyo ProductID esté en Shippers.ShipperID
SELECT *
FROM products
WHERE product_id IN (
    SELECT shipper_id
    FROM shippers
);

--5. Clientes que estén en ciudades donde hay proveedores
SELECT *
FROM customers
WHERE city IN (
    SELECT city
    FROM suppliers
);