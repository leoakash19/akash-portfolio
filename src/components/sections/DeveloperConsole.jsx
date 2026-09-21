import { motion } from "framer-motion";

export default function DeveloperConsole() {
  return (
    <section id="console">

      <div className="container">

        <motion.div
          className="terminal"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <div className="terminal-header">

            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>

            <p>developer-console.sh</p>

          </div>

          <div className="terminal-body">

            <p>
              <span className="command">&gt; who_am_i</span>
            </p>

            <p className="output">
              Akash S
            </p>

            <p>
              <span className="command">&gt; role</span>
            </p>

            <p className="output">
              Python Full Stack Developer<br />
              AWS Cloud Engineer<br />
              REST API Developer<br />
              AI & Cloud Developer
            </p>

            <p>
              <span className="command">&gt; currently_learning</span>
            </p>

            <p className="output">
              Docker<br />
              Kubernetes<br />
              System Design
            </p>

            <p>
              <span className="command">&gt; currently_building</span>
            </p>

            <p className="output">
              AI DevOps Assistant<br />
              RFC Backend System<br />
              AI Business Intelligence<br/>
              Real-Time Data Pipeline<br/>
              AI Expense Tracker<br/>
            </p>

            <p>
              <span className="command">&gt; interests</span>
            </p>

            <p className="output">
              Cloud Computing<br />
              Backend Development<br />
              Artificial Intelligence
            </p>

            <p className="command">
              $
              <span className="cursor"></span>
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}