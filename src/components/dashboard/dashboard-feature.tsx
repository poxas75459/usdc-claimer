/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2vp7aYrvee9jgxAXXXQ7nS6DmH8FtbGwuQZPv1SezTiESSMc8GGBUKMDkZKboT6MGPbS34kwNxFDGFa8Bzhggxkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MTp84FN5frjMmNzefMHWvHiUpgmFJ1PzxTDhLhFi99g1yLvQZfR11y3A7MPGL6ANxTVc2FM3XK8hhT24zGwfTEU",
  "key1": "4DfQ2U2sTAQiLcbDi2sB2yMuFUhJJhLmmrgCxft3dES5bygyKzJ86bJrjxSVr8jZbAX6mqM2Tssyp2Ptw1EhN7vy",
  "key2": "UgUUEbckNj7SQ9BhCbp35dBZUK1Nn2H3me6MxXcqpi3NfgdSCcZDWWDhQDj2Eg2235fMywFx8pUZKyn1oPHtY5v",
  "key3": "2QFchQ9nE3kCrZSjRQg64nzAtjYeHhE87wDoCLfVaYch9e8AHvupQ6ePoJzkVtvu7cQwVV2dEqdBdunojjvbouw3",
  "key4": "3Hx5TbAQZFTBh8myy1B2inuimFhsY1B2MEbx7FFquFsmaoxD934giw2LWTfTMrwbBwFJFeE1xFMnQCVJbe4XXVC4",
  "key5": "3UmbLtUqDdhWkbFuvoqQef9jFNwLvkN3wdQ7QzU19QdGYrAPpNsmPqCefGWdcUnJCxXLiMwhB9BY2cfbV2XV2pAu",
  "key6": "3JfaFtRhjZo5i8M3cqKe6Y9Juzozuuq4nj8mDELF37ns5kDFjez6gUXbXmFyAcjrjg1MyxDpru4vDFiZr3BKRSMZ",
  "key7": "EL8eHUEYE7Aj1LThE6bhi8FkgGepvvKnAJTSksgM2839HZAJTea8Qq6MHLH1DYMkUSu8WgDnB3D4SYcCR5abwPR",
  "key8": "5EZQ1tbtLFF4xLjKYosVqFnesHuhH8JmAJZnHyPFoAzev5CYkSgjsa2HziA8zUqMuWDW7ZotYBkGtwAydmMLHkFo",
  "key9": "2TKwjz3vaCYkQwpw2V5fHfgvi79oChs3VniPhdPQN2UukFpLqNeZuVjvCwGXJ9nCkx2VkZAwLW7D8a3nbTTL21bz",
  "key10": "3Gx6oJzQTKUAmpg7oc5aCtbwhSSJiYoC4jTGy3LQvsCVUuc7AeBKBdQiCk1JR34obxbuFhFGgBrpQZBS7MJZbJqG",
  "key11": "2KEAvkaCgSFQSgG6KJfbSMt5VpxVJUCnEhGomDzK1knZ5DRCVnQJjhXakj7i2eDWH4jNM1imVsqxc1e4x8Y4FTFL",
  "key12": "2r4pNi1EwEWH8uAPzU9Ukr5Nnh7aywbPV3nHYVDH68a3zLivcz3n6QAC6zbtVYrLM2pYZdsT2hV9dyU225ZPho6c",
  "key13": "5S7WkW4oVs63kW97m5J7k9JuVL3JiNBLwqEjxi5iQ9xnBLMir5BfHZwEQs4bv28t6RbXLyFgQmDbtHaq4qdbmyFB",
  "key14": "5doGQm2CexHM7DG7AYXTTWqHWFnQ4zZMZnUqozyswRwt4ARargpRjQptg3PQJcJ4mb56Xfb6p8ZkTjbwQkrubxnF",
  "key15": "4ih4taKpZ9mpbW1M1YNvQsR13SusH2pgQSB5U1zyzEeKxN6Nbz1bdy9X5wPyUY7L5LCXQdgioLT7YTafjXN5P9Ap",
  "key16": "4tPsYF6jXR7itTsaE8yGigbUcJQcd7yvTioXghoSJeuBpa5Wq3oPwXnZaFweFbFoowVVJfcuVoBYnq85P9G2n1jn",
  "key17": "4Q66DHVwa7zc5nk8373QWcJ1roY8rA8pNLMN6YNQkXWRjmuqeWxpJ4UQ3hqznyDGi6r24VbtR9NQHdE476o8Tpxb",
  "key18": "3McD8ejK6SvXU6biBACFGzSsztT5vzkVzqegBmeiaMdtVEjSvS5tSYSLj6AzMi2owChYV4cK76pLB7wDeGmv4BQ9",
  "key19": "26BGS8BrK4TFkGVwuZb1cicP8LeHaM29a4mkMoEnPnyeAk6hZWZof2r3y7LF7vTiS9gSAbTC1SDpdU4rQN9KGCTX",
  "key20": "spwferbTuLjLhFebq5kKdPu6R198RrnemC6zpmgkLHpWD7Jqxzj3dMqEkKpNmE5nBZPLRUDvJ8sZNQb1C2fzF2K",
  "key21": "3PP9QHnVZKjHk7B5wf7vEcBuB3JCSR2kU3psnhJkrhpmaV6RBK712YLQn1GH19bfavhkUfL6wTXQJheBzPUxJfjk",
  "key22": "6emin3jaQa2f82edJnKeGALk9qPhAUUzdS6t45Ff8ZDKJQ6hEhijByz49ijUJsnes1Kq4dTYKfeMv3LBPisepN1",
  "key23": "46nmCyKVcjbtzx9fCqfL2MkPNTXtmYUvSKLNBxuEHTQ4tZXZ17ypgthrY1PE7UayizZEb71Edr56irhTEAJiwkXj",
  "key24": "5coggtjK7tsyztNHAUNezxGAcJCE4rY4usBiPXRC4nXWW3J28pvyG6CWiMLXrzDDVKC515dMAmNznisUZEGWgA2r",
  "key25": "5uhqL3gy5mmL7PBKxsnMDMnTtTgUEF6zMQXYfQdyZMWUnNeLXBCjWgSXDuwSjXQ2RP7KAiEiH1wudskKxSQQW1P7",
  "key26": "2fQoezy2fEi2RRF1HG3p6mnKPKV142SpokTWRmCKpidAJPrjMpvWQmq2bwjKwjV7xmGDJ1xfgDZofGExvJSWWJ3B",
  "key27": "2JjZAf9T4jamCSHkvCPXMgpcnx4hbgqvPsAQ2bH2sKdGW2vHje8DRZ1t6g5GLXtPqvkxr2BEuuHTMB5XFbx4M2w",
  "key28": "2x5LL1v1j6d2yH6avD6zBFGz9jXEq5Wfn8EnrwoAB5incF4EkgVN8AAkJnV4nv6jfyDSot5aCVSTBdUJsknxyrBU",
  "key29": "6ARTpZDggpvguyMbPqJUbnv7b9BHdU2yiqBbu7AFzLDmb9axdYvz8QEoWoQWedPbvEFT1T1f7dtzpWhzZfhUwNP",
  "key30": "5ypQDnNSZi6PjBYhMs2P1WcnMsmHjSvLa4XvvSbpjiQcDuqPvwEEdu8ETkAkNUKdK96ebpuUzhX2Mr7k9XgnArPs",
  "key31": "2LGyqHcciWfu8qVeDvsSFvsyWXGVdRH6B7hSVekiErSbR5xqxoiX1PuE4Bqmx1z3JBf2FoPT7pR7N6QXu2rMo3pj",
  "key32": "33UA4yWkmNndDU51aVSF3BhWmCLkXM2QmnF6Bv4J73GPFHvf5hAwCdvfwfy5PTmoqdMQegx5mRxYXXWiK8jGVHwE",
  "key33": "4v1qkm9vKN6bbBoazQhGxy7KMZFMi2EBGcQkrjn4eV1ossc3smACZZTmKUfuzHYb2NzLnK34QnLGF4CBo9Bqy8qG",
  "key34": "5ASU6Zcn8QkF4oPbwK96b31tJjvoTfiPSKqMfTpVFj82RwtM1dTy2EjQcmnfcP7Z39rF5Fzff6pHHvt7VL4mcV4z",
  "key35": "3j1QhMzaNSXpESfeW74FicsnJ7JLQSJHhdw4xEiUv76mmfu6VjxskyZYjHEao2kG9b4Zurgh596z4GY8t5WSkqC2"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
