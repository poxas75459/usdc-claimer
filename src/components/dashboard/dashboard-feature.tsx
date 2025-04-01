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
    "4BWd77vg4ystp2SPBwQ4ckN6f8vZPFM6ssrFNer11CU9CnTzUEHWeFTWjpFCpu4FSgdKxZx8q6LF719TZyG6w1Fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NoDMqBMHMmU3BywE6D7Nu2g8kPsjZu1aDWV8TnPiDiDgzfSPH3ysyuFY1jmraWowcfNTTg7Tu7AoDANJL6tTHnm",
  "key1": "5gmft7H4ge9wKGLCWbyoqnqpxmkpjqfo7zmCzvEUbmuSC4X879xwZH9mD7B28KRJ9zEVkSxrvi4hXAAwUMZVvZ9M",
  "key2": "5CTCYZBDZrj5iEbQHPB15oz8RA73YCcpQspYe337M43pVQh4BuqzarLthqCPfYTZHSUxbrjgQC87iHWBkJELtfgm",
  "key3": "5tMS7G9DNmej2XPmKzLWAwSEFNeYR6jFj2J35TFxgWFkcDHSwKup75j7SzsxQDnLbaeeMhuqej6Dqx8Y6AurzvT9",
  "key4": "3qWWzbYSqDZwL4bu3LypF8tA86sM4GK46ippXJoFvom71UvwUyoZrN8LeiLVGJ1sZavTB3rWNF3jcZxPcGgqK7ku",
  "key5": "2cMJbzGL3M2qXWvfJY42H69BYfmZACNzeGZ9EDogSHFMGkmJEY8koQnfHSjJwSE1HCWs1JkdfckSNmX87E7sswMM",
  "key6": "63uGKdqcqGXeJtoBqE1dt9jYgJt7wQnjLStXWKvp2nNuR6zxVoutYkaUK9NthBoFeF3VJoRYLkNk7YHbW3RjCoUy",
  "key7": "Y5dCbK1abtNT1BrguZ3H1PX4cMDGk616tqpkB5L366JMKwC55QgYo1HAKz5m4eg2Scj5GmhdoCShQidTKGzmdwt",
  "key8": "5oTJiNpbNPYmxdTCs3cUyZvzmQYzvGxXPvALjnxv5hqDfUSVYD1dDTcNwGk1boxawwsAJBAkScBy38FxFA6mg67e",
  "key9": "2JjwqXGDQn3fzrbkoAWi4L2zbR4EEpuqWopv5FdDPbDecFHY5R5Th5EiCjYggCmb6jCehdfAyvbrbbrt27tXq5sM",
  "key10": "3YRMAG7ueppLfL2Pm34qdXZ4meSjxdKMTPLhtea7NiwynGz4sCF6c137FpPY3rnuceLZ2j9kMkDGvHRC47cPUA5W",
  "key11": "68W7QVVPgppXA3czgVSUJCeS9SQhnJqmqFQE4FmaJBxXnaJr9ccqXu78atU4VdeweypfPAR8nSjv3Hk5dzmwxkb",
  "key12": "2u7E6sZTHCpwRpDPdKjbApBopQqfVCoGN1NtXHmy6S3yXq1FAip2iECQsTQ3a1Zqx7EAhsT7HXjTb7PB7yB5WBZU",
  "key13": "5s8J1RjYpczVzi1ZK1Y9TY6n1BRKj1s8Ye3XMqMZ8LUeoGR1DZj3D3fsj1PP4RJV9HTQrsy2i2hWtoe8trL4YeCv",
  "key14": "kNn6rwgdaQNAU4bLaB7hftgJ8Q51G9ppqfQ5JTZAAo7p2XHMRThaJjaGzf8qm3aPCFqYpLwLJhqUHBNqA7s88ki",
  "key15": "3tPX9dt1CXcyGMdE6WqWG1MpcNNELb2NYTMLPjRjLd9mWrXCpqjyBQqcHq8oryemQpWZz7yFdX6UNSQmkqF7MpqV",
  "key16": "58p9UC8kB6db69hmewuVLqtGuGBPEJLd1YauSBMXYUW3wApHfmFyEGCzvhw9gFWTAPXER12wtoqHHUTu9p9mUp5s",
  "key17": "2cjyaEuEwUTgyhf6hWgWJrqsdseqgp54DQ8Jaf8G4jMDLh2S9JHz1CRdUjV7v6p8EtnGTk6F7qmfq5S3M1M1RU5s",
  "key18": "3bfe7vkZR1brFNz44UFuCoa2G9pjf35rSu91S1uG7VSCrrGk4dPgqXCR3784jMsAHrWLBbCyVx7uB6LQE8g2c4Y5",
  "key19": "3mrxZgGJGu6Uhi4QJ743idMGBZJSmdH7xgzCFqVF9yjGSavjC7QHEuDRDHacXRVyuzpQ7drBVb9XXuZb2YtajQYK",
  "key20": "qKQsbTrdCibjH6etwWEE4fcWrWPsweG2Ln6nwYGSBRZZPG2ZeDDoY6BDQWT22TeM9B3cDnXG9fz3Gdb1Dmi7UNv",
  "key21": "3LnbQgW8KMZr3zGrM8esfpknaCyEMM3LPBHDPk7b8AdDXvyw7U939vrTZupJEPWEq2pfR4G2LtHNDfVMBNhkRjZh",
  "key22": "4N7NPPKzs3gzBAVpQvTW5St2Lrf2KH57GvEdWzWqU4yfotMbrTZ1rmuv5M4HHQs4dXunVZoxhGEgXWy6hFL4E9E4",
  "key23": "56Yz6L3MGuroHBjtQsgutkN7LGW9BG9dXBDSjgkfzkLqADXmKY6n3LNJi9VxfykXqMjNyCJqfLW8Ac14hfXjGtwT",
  "key24": "48grZa2yfqzvaXjE3PPwtQp3YJi3q6QtsrgJPGq6xVQwuR8gXLtj9v8NurGaJkq7xv5Dq4njeigYm8C6jGeGvRi5",
  "key25": "7AchJMevV6iiuisuhDhLpGpNHN2ZT6BiqxXEDUYPRroNHT6NycneyRjQgg3rmgy2J415wkECMtnqtMwMCKiw1ac",
  "key26": "f5cYsw92HPwYGn8CFsBY7D26Zjv1oYXdWWMyYfDead3yb63a8yrxRKGG2FSMi2hbA6UkAJYP7GzHELJjcP3RFcb",
  "key27": "5HutQCgNEfPDuGMXJFRuWu9LjzPiv8EhthVy1CEYM3GdX8FjBQFrdcHnyp7LUrs52bDW4L6scZhkzYMAkcxuqMpg",
  "key28": "4rxoFdexguFPk7sX2fnAjeKuECABbhkCTsgaJu6pWz7bcmASbBv7WKcDcXom5o1R5ECTu2YLAdyEwKo6SKViCNrz",
  "key29": "2p7PHA8DB7gQVKdbiPdoHj8rLgNvWE3Ejeem1hpR77Wd88gembDjedseqRsg1bNhJMjZvFZKSArULHheJQpSCRS7",
  "key30": "2Fv5z9QMLaKaewnwVKUsJgvQxVBtctfk49KRxmNHFpkPEXtuYQ4ZvNWksfX5QQxxv9QB8oUF4GsQqFAMmqG9Qd2h",
  "key31": "iaNW5XpTEMr1eq9Azwr26XFGujqmVhuFJJu33cnyCv4NejUA7cKe5gojnhV1m1CDzCdb2PbGceb6e24B48Vnunj",
  "key32": "26rxZHjGqFAhFkmmT6SCp6UwaPQfq6ZjbwHi3tGRvmS3SeEFzophGkq7U1H4HjV5UVZEqd4Xp3bmKmQE5rZUKbzM",
  "key33": "5aym2ND44NzhQ8A6cX472ZBD43f59apfGq6AbFsWkpaCA4Uf94FFGs9Xs3tfnavNtNe5skqkN2h8gi3EPjKBLVpm",
  "key34": "46rEtPmrSF61wLbm8LGKYRcswD8BJiUptUrpdMM58iUWUS5ZPHyDQQbTDLQ7Ty1sJ8USVDR3bdHy9kDX4vY9yU2N",
  "key35": "21AmX1V5WhZ5xwzH9948WnJGw9GYqE2Mt7sgqDnLtHko4NSmkaXkAuUqJTQtQUZdsmRyhuigQ7FzoTuuZv3PFNQ2",
  "key36": "nhvYr2Ai57p6pvLSYQHnGMpqUnCPimBZQPgtqewwSA1abe6tYykrsuwUGfWFwiUUUUBh6Xd7q1fqYCMRBqhkhFn",
  "key37": "5gij2EzN4weLqX1qz9mjukCYcrDPTS4trvNySkNnwjkP6zTEiU1GbEJy45j7cCVwBiqKMA6BHPjtp9RQbWR3keF3",
  "key38": "4Cgv7gJNzniFw5ZNypUSx1iQRxbcyDy9fmoM6QxFPWAzW1RsVzSHcas7SXe5onf17dc7AZLVLKMxi3ZsG5uEkEn8",
  "key39": "4BxpQjZyNSoEQSLDkVqcuhXCDm3NuAmzYeFkPXzcdCHui2qtBzj8sqtDRGhhdgXeUMYXnYGWZBWxgFifxxqWfwrE",
  "key40": "3xRdRUchwNtMnLzpFn13EsffmgYJZejA3Yv2vxGimn56tbR3mUf2qqkVeNN8xZS3oNTdbCMFZ9QbZpzvA9HvPMvx",
  "key41": "3ob6jXce5WAA2P51YEFa6ZbTwt4e5joKNExf8Qi5SXdtikHSHEoA4LEYumWcPjQ2bresJ7yGJue3mZgqXYf77MU4",
  "key42": "5V8YYEKU9fVxY277onbnJ7HWb7ynVPYtq8f8bgeCKTjK1vxE3HhWYP3xFdvYd3ExJv1xMte8VJwosK6JpugccqRY",
  "key43": "4LfC8mz5b445Sq1RjFEdqrt4P7i6J33HVrhH7ThMyAY2qP7tfrw5dbmpahazwWg4THgopKYgB2XZHqs7KTsJ4Swb",
  "key44": "2BXAzBaRTq147cMbEE7MxS3K3vB4Nx5pu88eMdgZ33tVUpqiKtqMV4cPT1VotVBCKePE1ojkjrH9CMSLEYQWEvFG",
  "key45": "3Z3ifWYoQFyQZhbogdcqf2VVL7162rcmRTQu5FuDHRCDzJ4sabxJG49DLEbLXhgdYc41oNxu9kXarzJSNJfJ3Sn2",
  "key46": "4NqdRQvJHwxfw1mhXkH7ATyByxwToVrU4WTS8MZRaFz3jCtcmi5pt1GKayVfjJhS9QWHSc2Dv5VpH53ErTWTdb3L"
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
