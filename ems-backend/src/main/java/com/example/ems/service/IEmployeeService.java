package com.example.ems.service;

import com.example.ems.dto.EmployeeDto;

import java.util.List;

public interface IEmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(Long employeeId);
    List<EmployeeDto>getAllEmployees();
    EmployeeDto updateEmployee(Long employeeId,EmployeeDto updateEmployee);
    void deleteEmployee(Long employeeId);
}
