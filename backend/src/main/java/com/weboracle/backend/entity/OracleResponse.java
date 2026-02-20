package com.weboracle.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "oracle_responses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OracleResponse {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String shortAnswer;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String longAnswer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    @JsonIgnore
    private QuestionCategory category;
}
