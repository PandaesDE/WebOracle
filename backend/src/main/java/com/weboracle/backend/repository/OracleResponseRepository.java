package com.weboracle.backend.repository;

import com.weboracle.backend.entity.OracleResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OracleResponseRepository extends JpaRepository<OracleResponse, Long> {
    List<OracleResponse> findByCategoryId(Long categoryId);
}
