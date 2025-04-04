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
    "3XE8jfgA9fP1EWYpUqwavTFu8T3E242TaFD9AmtkWNfzTrqdhUj1wV2jnYXbWSfbb5EGtmCUdgj1rHgqea3Z1Lyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2khPv4zK9ABJQ65XuroPFp3i5FEdrMbAQXroirryPFCtPe4d1cyPcevV3K5bE1UgXx355mHz8iNyPE2wcsekn9Q3",
  "key1": "2SjDNxGWE3zgdtunvWCBxpYdt7cDzDUABzfPT9UArWoftQgTXv5w89SMteQtosj8ZE79cW7WHdDSU1jtoRB81yyY",
  "key2": "x1gGG7RW8rcuiKu3ep7vTi2P5kibLh4BLp35vbzg8WxKZ3GrsBUBYmcSEZzRew9ua5RonGEeVGDQfuDnF57pJqH",
  "key3": "5k26t5F4RbWw8igdQVTsyguzedMnQRT6JLxFZPhbE48NUeAy1jQBMCxC3vpHYNsSr2MJQf1MQw7pFDkrUgckX6Rp",
  "key4": "BRVV5euRL9o2uwVT3Ccbkz92tr5fZJQxDrbQxtzq12Rpcm8LR5F8NcJchiHa9CiMDQzDUT9DVT18WQQGpc4UwxB",
  "key5": "2q1h6P22PszUnCDB6ietxWGz3QFuXkvp3Bma8KX8NsuYRA5G1eJcvPRCndfvKv2bxbP5GzWRSWt8qyJRkj58Z27c",
  "key6": "4dqCdPkYyFpptNzGdFo1UMHGP1YfQ1qe3kCUwxYYXRRVxqUbsLXgiUUVSsGWJLDWxkm9kzhXLPissD6g1r8TvZop",
  "key7": "28R89TvTHKhi8UveuTzzN24u8nmRV693syzcdnz7hGE7avkJkr4bKnF7vVcNcnKdkRo4FKtrRR1p6h5Z4Eatw9Zi",
  "key8": "5vTSkLRfFQCaxBDZ7aFtRFC7ptTdCADMUz3PHGXVdDwdCnCnfFZfuqEqnUQ7A68kzxUYE3JHnY4Wh8TUftJCHWQs",
  "key9": "4iRwDHXSEAgnHSpdMP6mvFsj3HxuNxVNSh6f46NMH7YpTpfBkzdVZy6GDLo7fxdewL4feU3oDFnZ9RqsU6JpyPJs",
  "key10": "55SzmMB262P6srMXnrQT15aCkVUxh8VSgxz4WcZ9Tj1uPWJWUPTZLP9MrjRr3UQCGUQdDMJKWe9i4T6vBLMbAgJ3",
  "key11": "5EucREm2E8bi3BSb5ECjCNKcYyWC2R2uuFSNeihLf7GBUtA4ufhLJL1iFBLZuKS6NxCNnyzC6cQgEip1cLKtGN9M",
  "key12": "5McEwhGvHG8zoTEbf8TjhwbkPHHPBSuzUL3N8RtE7hDUqRpW25AcSygTtoXqMmiE2AEkoCf2wgxWnGj1aRpJ92Ki",
  "key13": "zx3q5r3SayVdYeTt6kLCgStWvJwWYWjZ4XyH7gQxwmTvJHYGLpN1Xqfc7fcHXVgoJGRzS65qJvE3pAaM2rLcgmg",
  "key14": "43aYdEPVZ697mQhJ8fP8srNCY38rL1yDrntZoBQoad7ZqhYfhVJu1H3Yjk2ae5yYQmpKm22djY3yBzbW3xH26UoR",
  "key15": "fydZeyGL3KLAWKy84srNk2asmhotSYMQyc6B6AxtQ7SrrDCNhXKUFdccLkrkQrwP9X9FaKHFLKwBWXVu9GUbRWu",
  "key16": "5YhkuZwu4QLd28oPW516qD128JDnXRrZwe7K6L3m6BFbdN6FpYUUCnh4WCt4NdH93sDrB5116ekSAFEh3FHqirUK",
  "key17": "5KE7Hy46oYRMkpmfXCmGUStfxpAzWBv2cqx5B5AmjDNgrNYMM3RhfkJTnrAQ8xjAyCqitKCzpYZuacQshCCVECo2",
  "key18": "5vBD2oN3MtArS85JCH7XGhPLtRPHCtnH3xh5ZJcffmraLkY5NHkcXJsKo9j5sKYChDgUUDNVTY53pFJ9qrANAWxo",
  "key19": "5f4C832p9idPAX2sg1sug4EfFbAGFzTjTWz6VQVMArgwxqe7aXUFW9NU8b2EKoHGSX3mT5uzV76QH8Z5PWDmBuEP",
  "key20": "38ZHTCT94bVXYQauVzSdWYumvrXW1KgVgrR8pp6RLytpB22jTX267PpH9Gv5R9zRifcXKQsWrBGGSV97Yoj5tAMj",
  "key21": "4UwLiBTnj6Lqkd5E5J9vXqizC9fsiBYkPs4fRaBeScEHLv2ZrqL7KfHCvjjRniUXsagAFhxYP8Ppsonu6b95wYZW",
  "key22": "2JChRjx1yPqzGy8PwXVJ4gvN96dYefEfYqPSKqopj6ab2ud8Hbdr5h4K2oUxdQgLMiczFMFcVm6HmufpCRxnpYGw",
  "key23": "4yG3Mx4Y3XQ4TK5AoU6D6B8gKy9FeNS1AhY2HEdgiZLVnH7an1yUMu5vZECk9K83mLkhysrDCxwRN6pWL2hZzaaL",
  "key24": "3fUZZcWXKuzMvgUXV7WECtXRFaRQeushuv9piUsx2RmaJWUXJyUfDRsEvH59CYzDET5xfgD4JedhYWaCyW42UMx4",
  "key25": "4v4VmMiMeCFhqPAGJ4HfX7KhAfeuAeCCtPwzUXC3j7gcsJ3Go4ephf7jFkqcwvAFEfe8FqcQtkjFmw5kPh3FEoTK",
  "key26": "5bFN4wK66BuqkAp8kmAc43WVjyedCxfieSdhF6keACdR7m4i7VnSmK972tqfVnMfcHNNVboo6WpsZSaNjBrLvqh3",
  "key27": "63rhMdoHCXA3xkwF94q5KqFhvbcv7dfRwgktC6J385PADfbxnNb94SzFeKoNzTK3a1EFj42Ewps39M6btwH8NN8X",
  "key28": "5eC5K8npekd8eUV5Nz1svtTxoJkTQsruJaEMbQovh69WeX2GfcHzKdVFs7JCXK9MKvN9mtNyzrsDZDLbpg6sgAHg",
  "key29": "2LFtQ3S2sgwMNap4S2ommVNZrjNj5NthRTbYS6FBPTXpCpWnELRAqNPmWhsBXrvAks3n3Uf7KHmNGXEg1VjFcJb8",
  "key30": "3caC8MrCUZTkbCGd13mJFjYTzdgLZc7gK1jySdRZiLU1pDyz3kYh1HWTR68ExdKuUDeW1efHL81xY4YxE7gdbYd9",
  "key31": "4r8qHQkGsHfq2VzZg6LXdw62ddjnEMbnXzkt7cgpjZRqbBbkjCuaBc1YZPfhKdX4DcuzANmdC3csrsgWyZ4HnB85",
  "key32": "59BceJjHKyxp2G8juWkpJxxj8hAS9Ut6y3mSBwNTFoxUVhdVjKkCBxR5M1Lgx7ZcUhHYJwYX4BC69YpA89VWj2it",
  "key33": "2vHBBFgZsfd21vNdyswteceYsnzA15gQsDWUh2yit6KFqKgxX4qFzNxQi3eQnNkLjkxupDvmVVNzV1nyvFyeAJpi",
  "key34": "SS6RBNrKnEyc6U4GyrZAiLj3hum9aGnAq2qJfgkYKSdpBb69kdeBrmBGYrcBq7n46kZaknC9bPwjgMuKrAFGmg8",
  "key35": "3u11sqfivsTGH2mnWPXX3utmKnsWsFAGFqXSQCyHaw11RfGz36QsJVwaeXJkLQHaYRB3F4sLsjkNw8Ah3uFgiFBm",
  "key36": "sUhq5qv95nWzdL7w3ySNG5ceWGLL6t2h4c7HgRA264cpMtBMQC9q23yueqpSbXWccvAkFqGAyueBNjXTzDy3jEW",
  "key37": "3r7j786JtX1943uUTMK5z3DtBe8Jzi7tpq4Wspbo5H3pALtXXUCLHrtU22syozeqryqvdJiFCfTGmhphTMCcVzaR",
  "key38": "FVbpaLnWBi2tYh4QzWivVoAFHBst2NNnKWZojioRDkexjQLhjExmQxcA9MAbK7PZmwMzEYT1TVru52SGQ2QCuP3",
  "key39": "31e8aSCAb58xmMh3UFtHUXgtHtzLzQoWECSz67LwUQeKq1H295nSty5FMPERpZWx6dNebisUTXfFrMXr5PLWCSgq",
  "key40": "3nTtbTYPJVyNRmy7xd7Kqf7RR7LPKAGr736yx9mLpBy1y2byx98pHg3iowy1Yf3nDqa8XiiHeh95z3camrt6ZzZ5",
  "key41": "23zdHPByCowURZohsYUXddaKKQg6FizRK1ikctDd1rTeuQkd1CgEoBMn1dHcGxJpwXfiU6FJY9MXMfE4GyJ3CtAP",
  "key42": "5hsRsziy2Xgvb9bJ9updQySAN3qSvdSLztXccAFdQ178u4jXffy9ofbHvMiWihFYAkU9b51Tc9XczWNqACzUoFa3",
  "key43": "3kxWWeLXeqgkny1rmjsUqbA16mftFLaux4vzLQwe1EmV27ntW9m5PADcoj92JQ5M1DmvZnBvnF3WNNDkED9oa1CS",
  "key44": "3mc7hUtRyeyDmeJLpLzmeisdjjMpSSKUCLBxAJ9Bq2DQWURqkwuQKKdb9xiBrtoT2JGV8dPJJhUeo1JEmaVfJd4h",
  "key45": "3pDKC8PWQ1Jv2ubU31za5xCxkswkg6sW73qREJkvzyjh7zTHdfZtEgTwsgxFKPzaHncskrwRk3eo6kcpbCj6sH64",
  "key46": "3fqWniijWtxpusRKWBvToszXW8Vk6qaFVTAUMxWrnktgMN76Gt6QfKxEYvYWx1K2YqVkwbKcXQ1AFrVE9uby5PkU",
  "key47": "8rgEiyHfusMX1Kyfykm36MVVS3e5n2qf659cDKGr9ZzDnHGvoHEcz9cq4DuXbeyDqwCvkwjNtxstLFhyWwGwgxg"
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
