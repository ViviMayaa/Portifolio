package com.Loja.de.Roupas.models;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.modelmapper.ModelMapper;

import com.Loja.de.Roupas.dtos.UsuarioDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table (name = "usuario")
public class UsuarioModel {
	//@GenetareValue (strategy = GenerationType.SEQUENCE, generator = "codigo_usuario")
	//@SequenceGenenrator ( sequenceName = "codigo+usuario", allocationSize = 1, name = "codigo_usuario")
	private int id;
	private String nome;
	private int cpf;
	private int passaword;
	private String valor;
	
	public UsuarioDTO toDto() {
		ModelMapper modelMapper = new ModelMapper();
		return modelMapper.map(this, UsuarioDTO.class);
	}
	
}
