package com.example.ems.service.impl;

import com.example.ems.dto.EmployeeDto;
import com.example.ems.entity.Employee;
import com.example.ems.exception.ResourceNotFoundException;
import com.example.ems.mapper.EmployeeMapper;
import com.example.ems.repository.EmployeeRepository;
import com.example.ems.service.IEmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class EmployeeService implements IEmployeeService {
    private EmployeeRepository repo;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee= EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee=repo.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee= repo.findById(employeeId)
                .orElseThrow(()->new ResourceNotFoundException("Employee doesn't exist for give id: "+employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee>employees=repo.findAll();
        return employees.stream().map(EmployeeMapper::mapToEmployeeDto)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee) {
        Employee employee=repo.findById(employeeId).orElseThrow(
                ()->new ResourceNotFoundException("Employee doesn't exist with given id: "+employeeId));
        employee.setFirstName(updateEmployee.getFirstName());
        employee.setLastName(updateEmployee.getLastName());
        employee.setEmail(updateEmployee.getEmail());
        Employee savedEmployee=repo.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee= repo.findById(employeeId)
                .orElseThrow(()->new ResourceNotFoundException("Employee doesn't exist for give id: "+employeeId));
        repo.deleteById(employeeId);
    }
}
