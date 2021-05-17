package com.Loja.de.Roupas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Loja.de.Roupas.models.UsuarioModel;

public interface UsuarioRepository extends JpaRepository <UsuarioModel, String>{

	List<UsuarioModel> findByNomeContains (String nome);
	
}
