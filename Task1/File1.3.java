package com.example.votingsystem.controller;

import com.example.votingsystem.model.Vote;
import com.example.votingsystem.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class VoteController {

    @Autowired
    private VoteRepository voteRepository;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @PostMapping("/submit_vote")
    public String submitVote(@RequestParam("candidate") String candidate) {
        Vote vote = new Vote();
        vote.setCandidate(candidate);
        voteRepository.save(vote);
        return "redirect:/results";
    }

    @GetMapping("/results")
    public String results(Model model) {
        long candidateACount = voteRepository.countByCandidate("Candidate A");
        long candidateBCount = voteRepository.countByCandidate("Candidate B");
        long candidateCCount = voteRepository.countByCandidate("Candidate C");

        model.addAttribute("candidateA", candidateACount);
        model.addAttribute("candidateB", candidateBCount);
        model.addAttribute("candidateC", candidateCCount);

        return "result";
    }
}
