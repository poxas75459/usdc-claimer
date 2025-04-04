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
    "5VdJXDpmyFV1mPakdYdMEoUqg7MhnwxX7sGVMJ78mh13gyvfvNqJAm5VaqVw8TPGe4HvXnpmzh4piZ1Th3PY2siM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wv1REL9Ns8CQsfeS25UUe6mjrVyuDXmRkkDptxZGYwSCbbkb16iMAGut2MmGiQqZZ5hQQJB5n6TXnL8mwVa8mJz",
  "key1": "2X5HSRXiib7pGknQ4kNPDA5y3t1ZRteEzEWzdawtbuFz5E4og5EX7bnQBFNS6mG9NTxQmcgCTK9ESxb45CzVtQFN",
  "key2": "3oPghc75qdyAQCJ8u89a6tfC14r8eXUpVC6EPqrZkaVABwWPcZaBci6ynu6fPk9sJcpWpEwds8m3pn8bAG8xhaZq",
  "key3": "2kyXzUS1xpzNZT4tcALbRKjF1z9gDgWWzisizTxuwWxymcPSZRANXeCE2JpAzzZwKGCmbPuciSpM2g3y579DLUeD",
  "key4": "3L4pH6XicQNodJCjYYsGNp9nJqpmqfpCYS5yPGxWWWXRiNmDJ36MZtRihYfWJ6eitfYKyYsX1dPLEGGvqSuiTEuY",
  "key5": "UGHJ9oMat2F5q7WMZ1e9FB63Nt5CQAhHGih97gqDdvXHwwkECKKiLpMWHZaMNtQMTTeSTfFFBh6RDgJnVnAtTsK",
  "key6": "4GqUbQQkU1LXJZYRw8DhMPQLibCF8smQtfpmb8e4sUeVP8NemrCVPf6P7JZuw7uM6CL5xDbP2ZfaLXstmgTBP9bb",
  "key7": "4t1jNqhhWwCA8aENJe8PxDpoaRVcjvb7rc6ZFuA5nk5UvHdULL6hnJDQgMPPr7JcCmeYQpKKj5dfhf6vSzQHGSdx",
  "key8": "4y5LaJwJwgZdWEdVi8V3H1JyicwRdivy5if6Hckwga8shPS6HdKppupgJyLz6CyB5NccHPxQdtJfSwsgugzzFmjP",
  "key9": "MXX1vMVuvMfuLLAEhrgvhAbJTqurSxqgRGwqMhaSwxo4t4biW15vsM4Vvt9MTfo2jcQ3s7ERdhKUFfeabcSGrkT",
  "key10": "5guBHZ3xjUJVk1stLGZ16Hbb2heFrLZbCqx1YBHaeVnrgMGB5J3hcsUZZ2Ryoi7SgXqGPsw2N6UgShvvXs6Kf4Je",
  "key11": "29A6Xkeq1AczKrvJvhy3PiXhFKJ1yUgYSirjCNAYjJK3RUhQaSKAbFunvPQrxrxcJTh7DFaWz2QeGGVByqdHhu3C",
  "key12": "5PkVqmpFLCshWsyzDRggh4meUfuENELPZmHBaajwRXs2stBJQRPYdvXVj9qAEJd3h5duxpraQfyZ6uNaEyu4Cq15",
  "key13": "5gQ9Mpi1MugK7HAfesLQjXTcauBXN59nHZuncoTuu9oNNQ9BwiHH1ChWBc2zyzxNjBbJVjZRJDYWHnpYhLKCSvD7",
  "key14": "DPTkBXzGoXUB3vMoSvxgGY43yneq6cRaaAgRsWRUeBtjVRDLG8VVQf4YC1E9FjBCYAqoNicDkLZu6FmbGz6sM49",
  "key15": "2biddp3amwTBThcRzzvu9DshLvHkgktB6LeGC8XL3dognpqghj6Jaye9FjbDzdofBWCfi9QY4XwbdagaZBRNbXP3",
  "key16": "23sGwjSZBvtprZFpLyfUUY1Pk2nE6AyhXKmJxzufyXKnRNsBXuEiRui5Fj7xgiTWqcJQDL4BvHe19gJ5ZJdgVQKv",
  "key17": "2gbfftUWt7dZP2sRFGDwd1vsqLbp3tTiCPUmyiYdUxZmAwUEKj5RyvyD1apVzENtUxCcaE67K16K9UpjsMKsqTmG",
  "key18": "5MrjBMhzkmfzssC81FJ7fvkCThnvgcXhUtkTdKoen2JVRh5vRUW7uDajo8oZ5bdh7ZZcDQHExQa97m5m6oGJkMUf",
  "key19": "9Xn52xnpzbFSSY7mC65RCqfBuZt5y4dq5nYJwTsD9Ajd9kcRr88AZMGdkbjDNyzf568PRhtb9AMMEj43gHqqZUx",
  "key20": "3qt22kRDPxuotTR5BV1XRiqWRyjgWZKG6YSj67xtqZyjFvryqnPVQLfirVYF98WU354NmvBv7AY8bcqPbYukNHYr",
  "key21": "36gqS6PQs4grqsmT6Jmo6FieTmEYai2raLiQbop1RGTjkhKzhPkarJote6iP7rG3DUgnXyMnJXPUCQ3aB2eudsXu",
  "key22": "xJE4PbnGwQ4thFY5JN12GxP5oDr1wBRB9YRaSD5EjWv5UeTEtvsqa5w2HaeZBQRG94WaaCDDJu7YKaQvYU8P3M6",
  "key23": "5XN7Utd1nJPredayhVVp6Xdti4RVJ8soADHuFMyqTiHQ6TtgiuBuPQ1duNSxuxxdCvchgkQ7Q6dZkcvhgk4zNrqa",
  "key24": "3qdaWEGwStsvP4qwauK5HWMPYzx14PPDz94V5Fhx9oq57HBS9gU7uGkSYE7nPsrsmX2hK6dUXVGqAZ1QowjoKCcs",
  "key25": "2D7E5azehEU8BTKNeHU8RL7gAGCqytRofDJZdsaAzDVPncpAi58gp47pbzUBgKnBGYbMJj5WFqYzfFE5VAmXxtuC",
  "key26": "aMy8uAZwG82cCKyeVeQurLGYoJGtpsYBA6hNWqzijogFWpLWmdE9usvC6tKpd5D34NkmPYpm9EZFQcwkzQEhgUD",
  "key27": "ARN5f5hVmMsfW1Dr3Sh5WBErnsHJBNPU5XLRk8KpZ36SpkEJ22acTA9PbfQVufQBER5WSJKMx21z8MJinyNrFQC",
  "key28": "E9XBehCTcRXJoWrPibSQsjnsJmdfYChkgyJZ1RaJKebgLEVrhgkc29QoCpnyKcqxyCrptmMiEiHTZvLH1LkMtgr",
  "key29": "3SdXmLuN8KH4WrRzyiQ8bh8EUTbdbcDSFtB56gT2NzPwWPJRmDMBTKFkqd7L4Fw83R8XuwRRNafDqTQJLayPsbQ4",
  "key30": "3SvRNa2Q69gRZqCxpeU4s1uMbioBxbuuEdqbknBX8fjZ8544FjXQDcVsVLitAqXE7o8oeRYSwNWpRFtmwcDXRvMX",
  "key31": "5wFa7Co5WhaXGTbLgHQ6E2g7tGmp8Zi7D56pny36nWPGhFyXPkwor6YPLFP5J6M9TXTwiZviXeNgkihAQAVwtsP3",
  "key32": "4PmJQPMmYxHsuVc59Zika48fbX6KKxw4pHGbgA7WgKRx6rqDudFB9FGHSMpxXu3fnEJUDSVwZya3VrfdvRCBSj5L",
  "key33": "5hQ2hGAjr8r3dXe29FeG1kbT4fcmnopJMdcAFtrv5KHXWqx4NkjFb2NF6DRDARVjpJrJgUCLy4pkLivoPRhtu7fP",
  "key34": "26d8JmRFAGBbRhhnb5EGWRHFiYCW723K7Vot23WQBh4uX47ZBoSjr4LUFemoBWVyyk37gubs29SRtknVbfLy5Gnf",
  "key35": "aQEgDrYBdtU3W53ZRw4vqZdNhEQpSG5oio82ecWRaGAKxvmgLF4nQjzqDrJwVMDqpdghceqS9KM4TiGocYaEeS4",
  "key36": "64gPWP7YRDJM1hST2Zj1A6f81KJvk79uULXhhroCq1zajUQ6YenEEndQJZmChBZDv2moB6hB61oq4NJjJCS3uNYM",
  "key37": "2hZLYySYS6oZpnXbJEjU4brTZ2ccfXcAbk5q9fzvkq9sr5BFUrebmi63R4UTHEFJMiWJYoDnFmvrStfxHtzDcXaf",
  "key38": "5bgGFncXCxwuQNskgH5RFWd4GvtjqC4hmsFSMgDrkWhg9WZxLi6pKSD2mVDB7QagXXTaWqC2M6Winvkjn2u2MjpP",
  "key39": "yW5suEofkyFkLBJvHgyRAPPKPRE7zKJjKueKfrUQYkGpPEm3DfnTA9QYXJUG4fABmfETRn6N56FsmGeqRbfidKf",
  "key40": "3VRSbFCBFTjU4FUiXX7nh61eHLLGfFr6hKBqLJwedC6JWz2Hsp13pCBmSDxLp3uEy6ehFF7u7HfGmRuL42pyJCPw",
  "key41": "2YwxQfFSLXJaM94R1hDwZvVFnUeEmAnkKPzrbB296p7hPr74W1qmkNSDRqshnSj1EhmNAQTADbWan6aRa6q3ZuGd",
  "key42": "5QCMYW1jcpzW7JYEDiQWULm1dW93ZEkDGwD5MnvNf1MYdpLoGx8AtpnjLN5YyBp9SRaxKiCnP6qzCwCn5siY6L7x",
  "key43": "dLin1LJFywzJchicpkH56Dy6j8C9jqBUWy6g2UUbGWYWYQCJ8vrjzxQFvXGM9GN7DwQvzAXoPLTFXsfxKE6g5fQ",
  "key44": "65M9cMqrTQPc1fAuESuuiYfguSRo9UkUXce1rbvopyMMfkEuyiz9TK98C4eoinPxQCcqnc9VwQMkHDYUbnPqikd9",
  "key45": "5552BxW2nUNoFuGHmRycSP5muFK1z9A3aHctFCZdvNvpH6uFbrh8acAtignRtnVLHABY3rPnbsSvYDz3A7hekkjC",
  "key46": "4Br8qxueCvFyuACVWADRxUnzhz2SQ8ZbGrE3wQ73S3ahytfPYJUHufQ3pfd16nH5Fzdg55D7PaDJSNaR5SZbawP7",
  "key47": "8FHKam8oAZfRKCqMmeYthKSNMdrBNFmGhNHA5RQNevwyj3WXeSjdmmcvYXatu17ZWpKfUoD6Sbouf9jLKPfoGpF",
  "key48": "5YZtvCCPxcGjvn6shC5o45a6dSNxWs7FF7rfo7oSBrRpSbLPJkYHR7h1GGMtj72Njnxmx7sYenKfwy2sqrWGyWGW"
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
