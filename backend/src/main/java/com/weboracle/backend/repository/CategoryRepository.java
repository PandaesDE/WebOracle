package com.weboracle.backend.repository;

import com.weboracle.backend.entity.QuestionCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<QuestionCategory, Long> {
    Optional<QuestionCategory> findByName(String name);
}
