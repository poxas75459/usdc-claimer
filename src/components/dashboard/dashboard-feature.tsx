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
    "2PQZsfaYqBKLsAQ891wJrwuYv8vAxUWqw76FkH33D9u2cgLQVjxZUDDgswuVa5RHch76WMkJMd2qw2Zyjfi4cQaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QWoAgMCQHuZTGCjJ8SBmYj3qq5oyaSsVBvrQCb7SpcieiFwwFq1kaUyzTxdWDbargQx5j6iiwXXvo2xaj91yT6e",
  "key1": "1gcW8VgfkTMYJZuJ7pJfvp9qiV1roMLJfcEdz3J9JuscjZ5XiaCAvbkeLjNYV2TrmjCSqPDBLCoDRpk9Neyc8oy",
  "key2": "atTvJ71YV6ZSqd8LcBivRV6YCQzGLzY9q9Jd3sUuwkX5924JU8apNjos6jAHYruZdH5xQMW6RLaLVqikT5vRJbX",
  "key3": "2Uebb41Hi3zSHVevv7ye1dYteQmCn1jbz2LaE537m2tXGXnNvuirSAguDoFzTyGCV9c4fxZdnqArbfq42mimHaMT",
  "key4": "67LHXPztBKPmdBrV6gsKbBMZbAbxUUHvooKtVVgqpLyys7CdwiZSQf1ZriZV8xGfHS6PtNaqSfRWXeZww3oXwtG7",
  "key5": "b6fy1MNoH2BJka1TYrvcDRKmGnZ6F6AocTi8yuNd4ib2rQGJ1hGgHPLjv6aspyW4KUK1P5E3QKpqy6LE4Ya6D1N",
  "key6": "4yjtm8Pw24zqwQRXBBz6eBjCanyu315hxcBpSFi4hotDDkdCwxQc31ba7CrpwST7UU66E8SXo4qeirM9qyAfR7As",
  "key7": "2nypGg2xSLTuuqnLQ4t2xpLFGS6NY2CeKog6PJZjhA1Kb8VfCtRZfV1GhXcASuGYUBL9rTYTtxfmSNLR9ZYXTgxb",
  "key8": "5LfYECeJQcaKtBd3psmthUyYAGoksTTUjRsk1Ko1cBUFdp87yHRxfrAbRxKasXRy2VbypKZTUxjMKTBSaFarXyJB",
  "key9": "26ktRFGvi2s8eQxry3k5ZaHSHTukZ7FJJN6EHS27DexTE6o12eFHaYsmmEyUhu9NCgkjskYcYLjfZ4mQV64BWG3y",
  "key10": "3f6Q9EfqPQngQPfbxM5BMoC5wirbQ5ozmrVmuoGdEX7gHZP6aff1FtrXiRYSwhKzVyin72grTBFLmiTSm76SvYiJ",
  "key11": "5GKH33zfaiQTHvg6YALcRAT8daYGouJcGCXrWLo1QFExQ8mR2hrdmaGZPDCGwR89SzBLjNQSrPgbakyJE77nM5Dy",
  "key12": "2eC5mfymWDFxRRtUu4EyNTzbW3AdKxtfueTA1iQpQxVURmViUhe1HwhKW6yK3aAsfmiwuUcc19bLpbmUCS5RcQNB",
  "key13": "2Lvab7vEpxdMXMz64nTRyn7Wo6GyUPFbCRbj266V5PvMRbUKyRLUZK3B4aQYNsyTFvWUSLfQ2hLDqGiy3xbQiBoj",
  "key14": "TJcDNjPR5cLiYJNvc5DZau7t9fpzsDvPVJJ4Jk4Sz1nQCVogaiL6m9Ctv8sxn6oLaLGzfrRDgP93pK1mPEM1AMm",
  "key15": "2PB5ToJBbSXp6FxBjnho5sU1RJD4Epigs8rDRTtZ3fLNvLSeaZfRMGNiP6PphBWFXuZEzV2Usb5YdyGoMPHVChnR",
  "key16": "2NPapyxpvLzFtJqhVV6fcrZ3rPe9cqrGxwrywf9wf4vJguVi4abKHoekpm4nkxp2NXnz9fHpdGHLTfwK9TwcR5fy",
  "key17": "8WruATva2cfSVAoHwxMncE9XtK5Vhrho41PqeujVmRqWEFDQNmo8i1CVzZ4JondeK4uS9dPE47ovFQk9a8G6Cyr",
  "key18": "5pVKvYhbiERwD8taEEmgm5wKt7M1wUKZamV2bgboVmHye5LM5B6C6WhmNYcsyJ9xB2q78kox9dDqjaR5fvHiA3H1",
  "key19": "3GNVBJKJ4MkmyGrUBjWMKDtUqJJVYXqkNMJHMDhYB2mNcEqiNBw8Q8EgEQekNqinc4hnhXdjhn9Dn11LXx2g8k4o",
  "key20": "4tw3vN65u4xsutZbjmV3hKYUAaGR1HUxfhvMQYdTGzavYRQhf3VuHZRhtTmGKaMd92JVxNh9zekk4UdamsZraE51",
  "key21": "2XH9hLkt2c9kGkzic6THESqA6o8cSZRaHU51QkHgkSaU5yLHkwTxEP566x6gPqZwacebMBPaPn7TxfJCnCgKyJaX",
  "key22": "BFEFjjYPBrYJVPTLw1YPeHxHYHEjLjHSEZBKgC58LKyqSLqsucEAYJekyzKeB6SB4JdCpuGXoZoBbjjXXY8mLvw",
  "key23": "5imxpbZnQDBHrn6M8fQkBunVQ7b45MKRiPSWehuPCHoDMfXG6CBgSGt9H9xNJnYe4ufFoTKwZ6D3rvKKcVrEAKLc",
  "key24": "4RogzsUA5hcc9BjQMTf4MADjH3ryofkx5DRy481A5VEnwC8WtiRrMwoRgKzgBX2pcqzNCXDYYDQ3aErmYW1Z7ZHp",
  "key25": "2YgVWn6PzHvCStMrpKniVXM47pvuWHCHqZaffrUBQpERsBppzGeWJGpAQxmcqsiu7zd5XsxYKxAwWGNVac55HBdP",
  "key26": "4vaDHrtns7mNR9hAt3CHCRn9BNKMThQ26vReNF4jYaNehfUueWDVM4ExkXdHWhkscfWoyDTHDkjf7EqgGPFVbyGp",
  "key27": "gkQ7qfFMUfRs3Xmaxi39QBa1FwmCpgoLsxNYAACyDeMWQDeK2DvFczrKn9FWGwPuQjQNjUNDkWQzcs8FSusYo88",
  "key28": "2AWfznUF1cvDqqVU7nwZXSZgM7pwVwYaR6csnxutgVLxH5ikNLTXvbfRWQF3m7r4KW5hC3x1JeFwQUkenPVWmPFR",
  "key29": "vMJfnMpB2sHJiKD7Q8KZtckDwKEvtRmAcVjYJancbZ6VgnCWnAuawz3VpXntQKyhBcTZ12LqXv74zXxJ5YSvuRD",
  "key30": "2SEVYJbyom6aFqhNLrqbu8sLpvEXrwRR1qrQbfJx7F3cW89nwfNTXvKXsTjKRzenPzhu8tWJcCMuzAnTEeWTKGTr",
  "key31": "3zoqz9HyBfs2nVh5LW5ab7v7nbXPYQf4q6d4pcmqaVfVrBcppsCQ5ZisXNh5GrVUzioq6EDac8AC6t5Qa1V5tmxb",
  "key32": "4xiWNNo6uLqvY9siHskdXX2rGuDN1kdf59VE9osGeq6TgWNuQG4JasYDYzZHNHcsJeKsgGYtnRZbF9k9P7CLYDMr",
  "key33": "4sPVdbd7MSdTdLDpgoMho67CJjFQZJ7JGVKXFAyjRFwvGD5TyiK5uBBsJJbC2jb7BfEfXqNSeKHW96VezY9JbDD9",
  "key34": "ATLQ3FghpfBJ7sgkiwVdwgSGLWwvUg5nMXrGG3uWipbJiVJZMq6rDvuEW3EDq55PbXa4tBL3xL9o5UPhejnQsHn",
  "key35": "4iBameXeNCcATB6P7hrRryU9PGeWVnfPsiajEjyhyutzTGM8GkmJdKNrxm1mgzk68641Dyg2ATb2sv5xJMv83oNf",
  "key36": "5V5A9eh3y2B2EdYqs8RU3N17dtEBtzP8s3tfyzsuEHPLyKtFLtb3QGvB6Fb18M5MCwHHdRfqs1NdDgk8cDHAbq4S",
  "key37": "2hGJuBfBRukZA5RyTSBeiQbNXZSUUTd3Tz86q3PsVB2Av9rgFjvMkgFwAH2zWngoBENXKMzPYbh4DpEde9jExxDB",
  "key38": "5c16Z7nAKFnLxgqwNX5WJvx9ewhpAN4uHf4jNvJzWq7sE6n3AtBztQs6euFmC3QK4FNiNVeKFM8WB1x3oFWVUAr",
  "key39": "62Jejkg3BPfxdL21kDyYtVxr7vjks5teyVwDKgCVKBYiW5QUNnQUQRRgv1RHmXfNPY2e6eohYFG8CP8YSFTrwRQr",
  "key40": "JFeQwcBZrgDeQe9CBGKZJUJcgMwN1fm1W1gCku1E7U3rAHaaLvhc81kHvjX3aJYXa114MMacoNAgCz7Yq2u2GGL",
  "key41": "4a6huVUuVzm7v4QW9wghYYtBHssQQUzsLEVc71tV5ikRt3Yj1AEXiQBWPREcJFQBTxQq1EwZ5xPeyEEFv18FM1P",
  "key42": "2T4QLBXm4ywmYJZ8MnQj6PxbLzaFVV9xLwuc4BLRDVK9coRDgeUwQHY53Muajfq6ktbtd4D6YQCT1we6ATP1ieWF",
  "key43": "5oaCrhFNVQPLQny9S674vWvvZZvfEVg44jJvPc6Xq76U3nwicqSXNMnukgJsrkUDeTsVnqG1MjY67gVsyW5PNWiM"
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
