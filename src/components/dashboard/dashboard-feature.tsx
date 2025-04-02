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
    "5FBGaskSfyuKrPPgJ1RJDn558wfN8BPAUohC5Mz7bQqLU3yMWKZ86yKdnfrjfKfm2auScfzdwoV49zWqxvPuprND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1k9mexLazS7vcSbtFFQ7Vov8aVzSibc5xSMemixkvfyGYUSTJun5zExooefY8RJvp4tBx9YGa3XFjYQxMbDSBJ8",
  "key1": "4UdY4qf1Dd6FPiLWzyMh4J79AHitxAkibSgaLDhZMbzwiLL71NcCgpWCjKmqYQHp3fEz3ihjiiDrHuw1sWqZqDKj",
  "key2": "43w3Yv4nPJHygz7Tu9DTG6axJtbSDZZyiZWApE5PbMFnXesqMt3Ar2cLEkawL9NUcXQbMqK8wjHxU9DQZHpFnUSv",
  "key3": "25dAFUT2GGPMnCv5kwVEDdd1qX8j5h7sEULUvwjJrZrGL19i753uHeX6Ey524PU4sgTGVjRbQzbvDDjFt96nrjot",
  "key4": "5JLwtEtUfBKXXExfq1F1tKRLt2ehv4SWZzD2dHnf6qJrobxwc8LzAdvghog7gMvqfTTYv6vkKFtgEEFsocrjP9M7",
  "key5": "5bo2MDyJfpAGw9fvZovBJvKiU8JghTKXbNg8RRoXaAQh7Xq6vnNjqZs7kKYjH8PnEyNXJn7XGWTkH5zS947aJJiG",
  "key6": "4jR8pTsGoH3LtbNEcXdqgfMWo2Jz9JhjbrVryGJyLtvtXgD4HqwzCYnCw7zEn6nQJ2m4VnCSwze8yUwFxYGCUhoS",
  "key7": "4NSm8NE69Qqi2Cgyyi7YE6pFpWa9XT9HAKmDsgXKDGDp9q1FdrMKPadQFnFuGbrVVyhxhE8vgMGgYpYgFpohZrvf",
  "key8": "646PUVWqvJEsykicJsj7pop6bS15SHXmzDSv4YRmtjHLDY2fdHYAoSdx3dzYvCfMSKwrVqwvRpbqX3d7wQgvSMbj",
  "key9": "5Djdi2pjjtH4iaDVT6vkXHTBY9TRbWnBvEWbHEAwVJfaRsTbiWg7wNuuTrmd2WF3XRFNsmeWQGsB5Tev6gTqRkxs",
  "key10": "4cSmcBVxmcmWiU84cMRPSGx2tjvp9Xq1YVGisZRmuTnBaVAPWcazFxe6eD2wpqbyKGJmF3WTDCJYVBzM62qeotnE",
  "key11": "3uH5Goif9CtzF1VxmWoAPLQWBzMSLwtomcQLjoHZ81176nnrvwsrcHN6EjC7S3yVak4Wr31vJsNWeku7kEPfFo6N",
  "key12": "4ov8mWQKKTn6vXehDLosuhrGH1W7xB4PR6xirUfJgCQQjDozw3AcdnbU4YPfXQaPkiNzvW3fSnBtE3BaMjTTFh27",
  "key13": "368o1ytuGkJLLNaR2KSNR7rFrXDD6GhbsnfWRLxkEkcQiVGvbq1jVd2xiyzvsY6S4xkCQ5SMpz8EGhuzp5WjqWsf",
  "key14": "2L84ahmPVewjnHqftrJ3bkus6W29Em6xn7MDRB8t3t543uef3UjMzSgkKGhYLtPDNba553fqdpQ7B1DW8ey5AZVM",
  "key15": "4vk4EnWc1r2pUHD1UMeDFYe8uAVjKwgd8UVdEa2cS8WapeJuAJKCoBaoUHUwMXHv5mZc3XRwh2VyWMLYrEfw1n4e",
  "key16": "3c4MnKGt17UCPXhB9g7irvcYSkkJzUXgJtex5TYmredCMnUMFUGCvesKmQsM3amxMpQPC8juXSy4YZEr2TWLUZQ5",
  "key17": "2ehmPaXJwVsxLntGWUgV7kXjJm8Y7iJ778jcQqTxvANgESFBwhQguY8sXqNXizCoHk8vWqm7oa6R3LYpY1U3kCuC",
  "key18": "rUhcJt45PZHFmU95jCmHxbK5zRPUVjYxPUtk8E2tZA1yYbxRBoYEMTUhSdoUPTw9UcVtytL9Z5MmzhzVTGZpiyw",
  "key19": "3qCGzJtXw4yowsaKVgB2eNXXh87Dx7vzeJJjYusUQZY2sbzmh9Z9pPJJidUqgXKr4ACurEgtP3BeymDqK8jBWLPA",
  "key20": "5LMB8Yp2redrxRWp8wnX5qabGzNdhgauKdPSnzvfQbrfAzdRZHUVNJqWWvyFHG2oHULzuFjzJVbwdj1pLzk9shUv",
  "key21": "2Re421q43p58KXGwgyDrRXkazG2D8kBsfNijXLrCv7iY6iK9PTebhF51kd5WEy2eUZ1vcjT825nXx7sKQpWB418p",
  "key22": "3QC3snVp7fPgnbuf1CSjigNYb74VFn6ZHEH9CHSiTysqLyaXsvxUQyfsYGP9aQLz5Ji7KXSXdujHa6k6fUWZAknB",
  "key23": "rTV1C9bLUyFZmuShDntZgDzG4ymH44XuPo4SYUUGvKxqpN4cftdurygJ1WFZAYNoDcK4bcTLQPAQeyXycKv5oGS",
  "key24": "3eJoj7T484dBxSMzPjbA5SiLUnVGr7qr8Uhxexr5M9BHSnAh7CHMzgfP22t3aUAsEZGSKiuw126gUQkAkZPRkdxY",
  "key25": "4a6cgyRdRbZkHm7VxzQLa9r1neNCFFCb1LK9wSiYizLyZoDFAVmmAcpuNo5TQ8LYCX4bALdtHrgz2a739vi9SQyw",
  "key26": "5H8WxnDMa6J3AtXnNstzeFViyKsw8iUu6tcQWY84kNyQdhBUn57DA1EqDDbQbMbY5WNgPQEaLKdyDvr1vn2BJDeP",
  "key27": "3kaiaaDZD3SnEWDy8UDG2dn3WTEVWLeEXPaZu28d4wFQv2NT5ycLa3Twdu8L98CzFMixG6eWJRAybfFGbgGL15tX",
  "key28": "2voqRGJ5V5HFmvuiTSm8X8rSXqfFbvvn6NWLyqEnHTHofQQxz91mnaefuoEE9LctkUDGZRGAFb8YGS9S8LA4VMeC",
  "key29": "3uVphq9kNfL9SHR6zzRQfyHjTJRBpTAT3A3jqXsmJZG1JeCN6Tj1dnSHJn6yipNPhdLuP4VALvfm4zeFM5u1dFzm",
  "key30": "5aXhRqRfwtyptzk6h9KyrJRwQLJKgHrfWqYUDU7rzDM1unYfJy2FCqYybodD2VVkB1XqnPjznTSFfTwjw6efU7B",
  "key31": "4JiazistJP8HtJcsW6XnxFetk4oBCvN5eBZhD4jRWXhuR21E874LDpBBYmZfBaLrUMmTCwLsuTMHsvbRhRa9qgCt",
  "key32": "4sbVkdVorDM6mVHhwuk3xjH6qX73zHMgUYtBAFUsEbpimPe7sfRJNQu2uR7aEgYVNo6eYJkFE2eRPRGU5aJHN2A2",
  "key33": "4vkP5xtrMv3gvoNGjTHrw6ChtsriYSeU9x2o3mK5ujwXZCHU3ZrZwitkD7aWjCjVfUQxujmYf88E6BJXnL5STnpD",
  "key34": "44wgevhgpL28TZjj47tooD9G6PzK8Jsf5xuuruidw8vDGCTHjp7qH1PBMjRt3W7tNCzdzySsVRrTJf1cPhnnC6fZ",
  "key35": "5pdi7HAPz3V7BHMdhvdMP8ppHKsKJXcGH1TNQkbZTiMgsbZRyxf1HmoGJ1s82rCeesSC7FSFTJeXnePQ9dcPPsKE",
  "key36": "38F78vqtEpyk3xUhYXu23rYz42ua6YaygjaJorkui6aVrtiAb6Ktza7gERp7wLB5qhnJBtmKSRtzEKyVExVr624a",
  "key37": "2oRSwffMmu3RLQ9wnqq1emjH3pwQ1GkNLcjwHxK2BdEwE2tPkxBP2dADy7QhfwVuLg7R18cqMJjAv4nejpWK5oqA",
  "key38": "24287KZAK128x1vWJMp9K2zUXmX8abA3Yhzi5p3xw3Zfw1V5Jt8Qzmx8kr9d8cqAKFFA5aeVHrCLswXwWCUEgH9i",
  "key39": "5giuhQZKTKkN49JE6s6kGhRcrm6pYg53YQFuRtYizmCBp53HjJrKAbBof9BqiMh2RPAcvvYZxi8p2UygncNnumXr",
  "key40": "2BHGAJXW66YwWX2VEEnuRbfUCPgEHT3wMcDZ3QskSDDyyUqpLbCKeyqbZpqyBgAiVnBVi8uUjqnPmEx1WNjsQmL",
  "key41": "3UipJN9wTRKHwyAAja87Cxg2jBtSBDbbHmcuYAf8gaZFny8bTqze9mbPNTsqGw5CAfpF54QkUJWUG4Fx2k7oFkwJ",
  "key42": "5XQLcoPX82dYPGHCpmWbigPsu2ZzcrMn9QxNSkwkGucvDZKzwvoApoV9nTv6Eppd1zZNUNsW1Uj2xaqNXVNw1R5S"
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
