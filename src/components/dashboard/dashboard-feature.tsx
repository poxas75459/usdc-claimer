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
    "5zf3D2YtQA7nn8n3sk3Yv313S2JD4v4NvWNT2wRMwmJr8QASCCyk4V9t5i3rjKc5t144rXF9vw54Ann4uDcDA3ZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "529aLtTeVRaUFPNRsBZuG7fgMU5ciWpWcy9eieXNy39mk76Q5sQf7AopxZcGiZNnFF6vrvtd4zoZSefJ7jC5NcYc",
  "key1": "4YBzL9wkxkpggqErdC6T6UvBLVQtHGR9PNBCx8NjGvWadj8CJveAmtEcEmzT43Zjx1zTLV2xJva1T42f1sEcNQbo",
  "key2": "29WhkCjHHiNXsTHW4cJJ9EzEw8zbuR8x9StiUhh6PeCr3S2WddxAeqvyYi1bNTV8nsQQpbZrBjS36B4aZHoPVcqh",
  "key3": "R1Av5AbFK8gZFLU2qnbNxojL9zSj2poREexXc3Rkve6dYv4s5S3uGv3L3z6JeLJeCiwQzWMrsUKHW3iRtNqaijT",
  "key4": "3aQVH9xeoRTmrwYjxGeFDKzTnywR9UNyAdP3V4GuyEasCbF6Pgi14vp1LUCosZJrU8NrqMAXUb8rLQfbrrXgTnKa",
  "key5": "4rJLYZJaR1X2f6WqwF1aPCG7t6iX4keX8vDygynCVWk8LwXHBtxoyBgmGvF9YGnqN5AfyQticArvrtaDMNw1nQni",
  "key6": "4EY73XwpdPu8LTkD4HNE6YfMWEeHh5CSET167viPq6zuMCUen2WCFmqHi7uiA7H4ttWxKfAWSQ6421am8mw7sQnA",
  "key7": "319Y3RDm4t94vsvac5UKQ9o4xBQURAT8HmqRqWBgutfAwBQUqpU1LPiMX3gQtSpvw9M87wpj3v46eKD3whqbxJEx",
  "key8": "sGGjWJCFWD6zVTtuDKykTY1Vtd8tgTRmATvmz78g9aLZEKuwXvcqJJubdpabHTaajn7JdCu4eJp4ZTJhha5xhVC",
  "key9": "577rhxL6EWh83hp9xo9QoeqFystdF1bfnjyDJWbFum88KikNmbBfwyRcnEmg7NxMsByRz6dMktgJDpvW8g4utvKk",
  "key10": "5kMTDLbj1tAcr1e9sqU8d9cLYrU6QbUwq1cTJ3gxtgwiP28f9MdXYVm5UgqQDEEJsujVBZQRWPAFE1DHyTNhSNNG",
  "key11": "4sfDPDqyfErquUcVoSMqigcdr5KZqQZQDw1gdPNnG5vjrgdkN5mf8AiAAjrLYuafaRb6hUSPrNGsv2JWXQ3n3qQd",
  "key12": "4H6VKCq3aXMnaKiipHeeVgCgTNybvAhMkYLzX2oxbUttUh3cKBA3ZrTB6JFhCMTFFXmVZzQuyMQgbCAnE7VHAnqo",
  "key13": "3Xc8tqWc5VurEHpUqGyQMwNR2j5zFTV1nkn6a2127rLi3SAvAZg3LHSxDsoQ53vfpx68DpntyesHiu3Amanw4Gs8",
  "key14": "5YM3Eh8gV8suZepXVWH9msbBuxhBmY1sLRoei8VVwHckyGhu3xKGzWGYBQD1sZPkwHcS7zUNh8Z9vnV9pHjdZVgL",
  "key15": "xqYAvXPwbepJYw5oRMEATXir7T34s5vkJpRzvNo7WAUjtkWtZZ4FDtKs6nauXNUAHDVzTRxxYgr6pLz6a7evb8T",
  "key16": "31SyxdCEgdnXYX4CnGStjiRgHaHqJ45get1LMgR83Rtwm1eAeQGveM2dskd5R7JwJjGk6XfKrzCPoyt9D6yVXTyT",
  "key17": "2e2s3rhDMHqYxpZ3TrJaWmGWg7vastnZYEyt1smJZ94fQiP3cpHeRby7SFtHxFjPfrxGeSuuanmZuLbuAUkUbUix",
  "key18": "5tFpQi1YL9SA5BeaaSMSnrT5vMpB6Wscqk3qdn9wY1QPeGRDnGdcRjxtHvArZ2rLqkbxaYsLRafHH6S3nXdjyCnK",
  "key19": "5UGjP6BvXNvLspVSdJGU7omSyUZJpLypBNicWK4VBR44RFX9wiK7uK45ejZg7jGe3AWLtBPsAHYpSRSpYW59yvyq",
  "key20": "3BiNzP1K4pQqR7A7cgaan47bTGaX747svqXvpTivowXf1SzJuMMEkRjZfhSRD1UNrh84oyNJTAh9d54xzzUtSRjZ",
  "key21": "2Hvb6An9NUwifpEUybJbgsjZhp7ZxyNrbF6bDPGcY1LoEpKyWfgpR4gW9KVMk9ms2HndAWV5o5i1Kcu1Suc9BCtJ",
  "key22": "45ZukgJPvjdBgqUnxajHoMcqeVsx6JnWQnZuz4JCaHQhqfB3FaoouY6rhvm9bZ1mjam9KG75jsaXcq46Xb7w1LeC",
  "key23": "2QiD4eFDg9Kug1x8mkSHKx7TuAbRg1W5hw8fHf6eaocm6njdg6xA4zxVHkV8fvkzkMfZJAk3sXcNeipV7UXJiQHK",
  "key24": "4vDckPPLByz7nRa3Bx2D7X4HNKv3Y9igh6Se8NaCCzotN93zbzPM3kyrLPhpY5NsWN2afN1ZQyPaiumhzfBZrV6F",
  "key25": "31YrcgNZXQS2wzbN8yPcbetKPUNz6Q5zXLv7gbD8SUVP6b3aAZ5wJ54KkrtZQMYWWegCUPur7VAuU91K3MPvf5NU",
  "key26": "4ra9tA5AhaKcEzknCvr9SVpWMq6oM9XL1dxXH156THUMzt1M52hE7Du26EMfmXpuNoybUqP1BS3yWysTgctbapcD",
  "key27": "3juhXpSR1AUizyFzhuLc28U8JxDzjqXBCrqM9rSV2DuAvgHJ7QVnET4a9HWcv5mY1s9Ghh17aQ8STLTnztdaCGT4",
  "key28": "2tmxSWYSaeyznJbZd3fB6KVNLJWTTj1m7KSnapZ17mVrrstPk4tw52xuK7mz2rfvyPcBgVxvgNBtd94TcgmhZt1H",
  "key29": "3hkMDpU1qHcgzqyrAW21F3vLhqj5DoretHLgM6mY3RUUedPeVFEyrqrT7KjhvDANte7FDqZA3gaAhfVMQ5kCqC7b",
  "key30": "3PyustmFDS1eshionC1GrHRWwCgWLiJRMaKPbUNrXUzgLqFBXyS1p8hpzGr1TBMuQVRhGSBrhAyp8DfjX2SmPE2U",
  "key31": "3SKhjK1sYHhYnyh6sYwmvyuJNnhJAxzufrdXc5Z1gvacfjarxKnw7d6QKeupNgS3ZNrgdAdjqLyzFCe5kfF82v7T",
  "key32": "6rcj3r93arYW9h8ZbjipkmrQN3ndfgWdKFdGsbaWos4xEpF2cTHBwmYoBEnfxnHRo179W9gAVyju3jBS8tfxExH",
  "key33": "5yy2XfgsgeCZn3JrEVgou2ret6R4xuaAwmUwE7rYYUMfP8A7xdKcXtJWY7iSbmqR9nee2gvq1iQzdai58Sb9ZkPn",
  "key34": "BfKFufs8DxV1bAfdFgFJxS7pjj6oAKdBCdFF92xWvvHmcdgumFTscKrrxJouDrcEiiYCrARNtZkkUqB8eSuS38n",
  "key35": "44Xotmxkf2iPMLYF4DHBcxdPdioH1u8wq4D5gJAZUjxnk3Gn1DTsbN3MJbLhEBtBRScacMW17iaicen6oN5w5JVg",
  "key36": "31ri6i1yqTtSiUw9aLHkJd8uvQEWJHvuLFaLvQZZftJBc1xXrQbo8QKMia3tBghzCDedbC4hfRBnmi25Dik8prox",
  "key37": "4FyagWhZzLJQdJtt7asNwSntEAyd1Yc5vF1ckuLebcgvoR3zz8i2RdS6g6sQz1cDH1NhiLFLswyWEcnp3jikBpoV",
  "key38": "5UKzLkdDNvtCZjieAYKevhjWL7FtncgsvPxGee1e5jxRaMidnfS4HLR153WmeK2rnJfFLwzK6dmffstxnbDQescY",
  "key39": "5gErMAqfY8DskNugHi4BZv4jJBWzUKcx6JozK2p8sdjGKSBeWsoZztscWgT4jjJJNocKVxgZ6mur6DHSEiCbWDDN",
  "key40": "22bdp6X4aoUpU4bBfjYJaufY6Srq8XJ1XjnFRctmKQjckcZ9VBNgM2eorA77wCfEp2tpt8r1k22TvgM1F21Qkz6b",
  "key41": "5cSjHaKFJMLi5kTBEhPWug6YLm7gsBWS8aK44k1SgUF47Wsxm1iHfaqPf1s9cZWvwasQ8cCjnDfmNgYDhDbtwbKt"
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
