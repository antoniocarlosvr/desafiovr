package com.vr.desafio.model.dto;

import com.vr.desafio.model.entity.Loja;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LojaDTO {

    private Integer id;
    private String descricao;

    public LojaDTO(Loja loja) {
        this.id = loja.getId();
        this.descricao = loja.getDescricao();
    }

    public Loja addLoja() {
        Loja loja = new Loja();

        loja.setDescricao(this.descricao);

        return loja;
    }
}
