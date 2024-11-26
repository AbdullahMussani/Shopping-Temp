// Add touch support for hover-like behavior
document.querySelectorAll('.team .member').forEach((member) => {
    member.addEventListener('touchstart', function () {
      // Remove 'touch-active' from all members
      document.querySelectorAll('.team .member').forEach((m) => {
        if (m !== member) {
          m.classList.remove('touch-active');
        }
      });
      // Toggle 'touch-active' for the current member
      member.classList.toggle('touch-active');
    });
  });
  