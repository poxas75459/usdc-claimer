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
    "2mWukkvNNGAkCM6cnRNJYTPYCYdEYNPJ1r37T9fBde9c8Ys6zk4uDjHL1nNLxizdEx9Apy6Vz4Jf3RDcTdHD7Cam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NVzvf1VvGHxFBJ2XBxYzwXpNwbJ5GFQNXXYyU393W3riufcJ1tyRyG9DThUeZTePChMC4hdENQbCjx2YjK2V5KX",
  "key1": "3x8eTh1zNJM6yChNQfrffj84dC3cYPiR9TrEjDBmU27S6CWQnWQ4eaP2RA3ns5w2jpBDF3XefAc2hYyv8ChLJdiR",
  "key2": "3FqS14zzMsnqjRNbf94z1y5u6s8aYqYiRn9zp5p1Htowk32LeEjo9CN1Miufca7q4mqJj3m1zYKevVwQsvcXnXUK",
  "key3": "5tmxAHWbp6Jroq76egJSwvxbCJ5h5Gad6kxqpzqXZ1yz3Gn4t5bLTD7ej1wH5RerLjLRBntUrTf8WsTnjjqrdAMR",
  "key4": "GN9Qipmad3PjefUfD8ovt2d6XG8XqnFZN7dwzeXgy2FMEXiwk8XMf6h3fM23Lcjorw2j8TL88scbuRov29CfR77",
  "key5": "2E8Zfa4NYg2q1v4mkczgRZKpY1k9mP9wStkfQsDghqmaTd4QqSDuxSVdkAiqrQmDV2xetdgaaF1GqfCtBQ6d2ZFN",
  "key6": "43a2QQSohjrt69sc3sJhfQ1PwGhbURkmPQL32YxCvsXPLC4emdAy1YLL4g95qZ6gUCmvhQ7ZsmCQe3wXpuJ1stbw",
  "key7": "3WJ4YMSb5P467t22vgucgUSSKrsboLbo54HCKrrEc2zEz7Mc9U5DHGvM8rG4b4StGRbUmMMieWkQUo4YnciyZAfc",
  "key8": "3vG6hT2jJcuoYDJw8XmAgT7byz4BPnjjVqnqbumobMpKg6ExfF94ZNkhx7QpVeEN1KXuQv6VnRad5LUJjhTyFagA",
  "key9": "3g29mrrPnmtWbNqELjDhELfACUQ3i24uSVrPTRAKajMT2Ln4kyx7PuiRAX44WLi8kthDkDwXqtyWnbvnPh4NQisB",
  "key10": "NmQMwrx3xHRw9LR8HZio6GG9CAdxg6WbGJRGkei2tpbUK5okrWUZACWaeZd3C4JZi7W6LF6nYKahap9NeocRTZY",
  "key11": "5fgEYbPJwKdhSrQqw87yDCqq1ixwCkRJQS7XEiK65yfmWntQSjQhBK8U3VyWmcaGkPzkis6Tw7vtmq5fJUnUbnf6",
  "key12": "ezV6PHd9uJjqYADmM51q5fSDHMEQGZEukv9yy2rexXLBsnxsvk7NMM78TYYNS9No2qpcpF8W37TqfUTutoJJGpc",
  "key13": "4M4zGLJiMgk6ME3vNpnB63dhkGeRxWWFqHM6DapDvsvxy1e4dSPte2DEEKv3jJnFhHeLjwwgkWrzjgmDpgdf7Kgx",
  "key14": "2GBEqv56iXpjYNrvNwDu2XqK8CeqcmYhLESNGDYrFN5LJ1XcGYBZzGHmfPUbobFAe7K1Jzi7wCizcd89V3M8Y8sD",
  "key15": "5zMPJsXpen3SHayRqhswFbyUEnszAdMrnmeHwN3aDpG1YFYa79j1ZM3EboQF4DwxhCHH6S6yutJ82expcViWDkmz",
  "key16": "b1wuPZhMnQPTV3k5HmBWz8G4DrLXS4AcSnJMqFzX6gvek1dS2PsgYbh2SrD99YhzeFdgvoaGVhiiSsP3LupjVW5",
  "key17": "5vQSZhwPnHyAFPV18R3Aiy27F4nEVDrqafPGgYQaQpA3Uh1bF6q2C1JiVfSjoZzeC6DQci1cHP5vgsdwF19j5QE5",
  "key18": "5u4XWpDGZbjtsGgDW7igVLNb1V9dyJFbe2NdGbEqgUkPnajnk2WX4THg9bFXbR9X25sWUZAd4k7t44TREUyRQSgw",
  "key19": "X23JZCtxMzaj7LXr7hLDBV1ypjt8EREKwQfGQekWxC2W2dt7cBD5ieHTJqUrMahJsaaGqGWgoEjaZbQTZFFxmZ7",
  "key20": "5mZeSsP2WkxiXzjn372CMCKUYVm1pRkJrShneoBJPFuiGXDnFzJNxTUHnjDbn1tivrvwQZfUMzmbEfQ19H34UzpX",
  "key21": "2xBdzET8vtLNoCCcaUezmtgMQDzNNGDpJ2McNprTNXuAP9FvpdVtHCgdxruk483sAmJceBFHTPXW7YmphQTVEAYx",
  "key22": "46yQFyaAb9eEFT8BGTRwoY5mh9tpf88TnCtTxoypCJ1dfCAmin6GP3zJRA4hnoi2fhGqpsq8osR5MxrFE8GT3i5y",
  "key23": "62MW47byoNoAYv2fSiL7Px1mAZAtmgzdYpCkLNQNbkNUHxbYshZNU9KiBw4QQHFLLYANP1bkf8wZvS78vTiUbYQn",
  "key24": "4cqc27AG5wtwswn5ofkbcarYdwEaqnsb8gybhTqYX7NHRHwi2Ng7L71eUUg9oJPYSoezd6BBVY7wjhDpDhfrWqh8",
  "key25": "63p4yTwnftz5yuxnTfYv5kcyy44kofukP8GbcGMcGutdVpNpUGBPrME2PPNLxbQ4UTYUncEZ87jdAUYUfU8LCmVr",
  "key26": "5u6AXDbukQ8GbV8YHrXrQgmgkDrzW8RqN2tPB9Q7PG4Td9zPw25owarQcbPrLTRCL8QsZuQiHgWyGzNxqABqLadt",
  "key27": "FASauTzJ4sPxgBtftqpWQoisZ5Cy6mrGzWjEs34rtweEcWqjV9FGTynph7AMTX7VTYk2zRmVnTJuYvWhFqvA2aU",
  "key28": "2QL3HDbStqv357S5LAvVw9UmLx63maDhpqtSZPFmnMoXmPWXKTux4wgWi7MfKHg1nAd5T5BrWbPZdj5ggZh39P4W",
  "key29": "3fymMKiJyE3eMhUMnjSXvjLCHKr7B3CgViPfxBnJysAJTFdYaL5pHvjh7wyPJMVRwmb4ok11RoyYyH2VHjodFLTU",
  "key30": "4TD9ZFKqeyZEegZvxHcyJeWqL5Cur9tcQBMiRw5WXiMBMpC1VrYSEJtToBcGZCV12caaakCbgZYJWFkQsSJoVbp2",
  "key31": "4dRfp56fdrr1xaQtREg2n6ajDWpRWb6PCC42LJ2rFgEbwi2wH2tnFFL9Xnm72eyzn9jiCXtsR8fiJsL5hMUjFFj1",
  "key32": "9MXH7EoZjF4EjzXS5g7YTw1965VUxgpvvkJTRAGJaz1qtoNzkU6o9rHU53fwjztTgYdkkpnzf924g9cKh4jdi9x",
  "key33": "3eaBgd4WqyYwL2BqyFi6cw9wynABHFAD9YTLenmWtmLhZ7hAF8jLzL1yyPb97xQuxWuNg4KvcWbgHhtwefyyUq3u",
  "key34": "4QHZWjwiPhATs8Bn6rvq75Wq3WZsiM41rR6GxLg9GyXsy6dP2GFZpXsiQhhPagRuGzeMjHQZd1YPii1FeqfpB2FN",
  "key35": "28f7Ndyt7pkQhXYtwweHLVJGg2TirzY97DBu8YN5G4sUvjc1gy1jpeNE7f5TMX7QGgPaRXSXhXh7dhujSnE3Sr4Y",
  "key36": "4QsdKBhxxKuYzyHmh4oCJpeokMGeFWNVngrrFunLtEbMCn2WReJ6U8zixHugmt64BXo8QttcfpN2Q5egDtMskXPG",
  "key37": "fgg3GdzhNzU5Sr5Er8VUv592VaZdpkHWpbU5hQQWhfaVWDgeNnLH5YN9uwZs4ToNZbB6TynFRfr1mtNDiAG7vfg",
  "key38": "5rbvWDyapc8TbbkrEUuQgQDR4J3G5FuNRUhvgsPpZk4eWFBiR3F6HmU3btm22Z9hhPPby69TF9VUp89KxFJXoVc",
  "key39": "SGEcEE77riJhnjiJueJjgqx8dBx3ey47ApJXNwA2ZSkTjhovjbYvdoZMPiZUsZzq8qkDKYMzeqrXZsKYud8VWo6",
  "key40": "5JBka8HSWfy5oc4YW3eiNhRr5zJWcV8yRDzc1vjVGBxbL7rQuNy4tyMsnDYjaqTrivjK2s3D1mD5PYFsdtKgjwXo",
  "key41": "1XXQXk1KjThoaLhaFj3nzoGyyFA6SWTqxU46UevVrbkeFTa9qViurTKTGQw971yM117aCxkBnNmwctkHUhD95mq",
  "key42": "5dwhUkz82kG329ufzqgDVQFRYAXgPtXWADH8WNR5ToVcPWYpyEdpebo4PxmsE54oc7RnuiawVeSxS5cWgcCTWR9k",
  "key43": "4hEQP6vY7uboRZmzDGGgY9363qM42knX2Dey9AVPSfXNcpdistYJh7ryAGfmMvafLomWpnNzWkwgngX4oY5irQ7G",
  "key44": "4czmTKut2ReNxT4PXGeKpajbLTAMxwugekLRkXsjhGdHAmerGy6feHF1QCMY44qP6UPyfajVPEyVEeor3P9EgPQp",
  "key45": "8j5XD4kZ5qAZMcF1URcSny7Rwh9gUE5CSmkGQc3rqua1gZjtCZuFdtGmb9q4wZHrPdaD2ae867AfYCiwQRRcmDi"
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
