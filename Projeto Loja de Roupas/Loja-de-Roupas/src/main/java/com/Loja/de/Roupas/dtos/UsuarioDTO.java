package com.Loja.de.Roupas.dtos;

import org.modelmapper.ModelMapper;

import com.Loja.de.Roupas.models.UsuarioModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {
		private int id;
		private String nome;
		private int cpf;
		private int passaword;
		private String valor;
	
	
		public UsuarioModel toEntity() {
			ModelMapper modelMapper = new ModelMapper();
			return modelMapper.map(this, UsuarioModel.class);
		}
}
