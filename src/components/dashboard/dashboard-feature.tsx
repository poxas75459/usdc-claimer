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
    "5qWxmL3qmR2aHorkAKJJr6aTw6jREXATEmkqE4huTU2E1LkUJMvJ3G6AJvoaymXFK9aSvmwhdPhthMV8DBMDJvk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kDtSfhpxfsJu4GSM5AZo2Vg4Ge9LG4gjQzPNpYXJGXpYeapSpLBQAwscfKFfZxgQNHY1s35znRdC46opZHBVs98",
  "key1": "59w5VpFQRvP9MdufZD52wwjXtPhshQEz3M4Bfi8mbJXnpxhjWfBTca991gtAucrCCw6CaMHJ59bNgyuGWWRoc3CW",
  "key2": "6Xj6FMvKYnt8ma5Vw2ddxbP9svVYaYExH6F3mT616zSoLF5dAfkEd6Fm7H4UQ4ZvT4KgBysntVPeo5tbahxfDaG",
  "key3": "wQ23DhQrrKgZwfQbNNSgwQTTGt8PYpBUBcBzGMJmoDgjCYrzUJHR1ZL3Kb6QD7py5qc3qZEcagMF6hwK8pyaDfW",
  "key4": "3p8b2Hm6ncsFUi95hMFuYGdpzdofRh2ATqSggFFfQLUxV7Gz7Pvrxbs2FbppUoZrq6KxDtSaNbR3ntCbwk8NnULn",
  "key5": "3VsQpaDgUht3Kr5yA4cV9NfKVkZgJF8281JCQLfvcN5ms8hHthNmCdvd73BwW5AhrynUYcrFsks9tsspfr3sRNvC",
  "key6": "9xHcSH6FGosqj3L5aiNwZgEXQnhwMgtZi7PT3EMLXgyQ46gQEFWaumk9nfmaCeasvXj6KA9awT8GytgC1auoad3",
  "key7": "37YnWw3i41Redr1oGmTefjEeQ612CtJrcmjewQP9XCaGgKp9J3Rqqbdn1XAq3LNZsjesfcdVFwBymyVeQgfPbz8g",
  "key8": "3nyvZYb6E6KPDTkTAS7U2vy91wEr9834DS65UQjwBuguNUNGoCkXqUr1gjxZAC5gkdiH7GjdEzx1z1AQyEbQHFpv",
  "key9": "4RBU8nb3ymf9ZYPd3co2SLHTPddwEHJYseDhk6QPTZxk25MnWjrSLcfJN44qE5pzzkLEbW4tXdtJWX4p3xogSbQc",
  "key10": "3dVyN8Vrq7VVd6r3enSdfzakuydjM8axzgeqo7P8ZyYfn1xGtFVTMepJfairsd2L1mjrWP55HB1AbrzL8rcHUfRZ",
  "key11": "3Qa34gtqnyViyoPyfNUpt5dsWcATuDY8oWd3PCsqbhZjBK7yJht9WUQQEfEjZs4NLdGCAYaoaQe7DMgd6QzQtTV2",
  "key12": "3WxUBmC3jedneM4EhzFRZoViNMpasbvoDjzEDPX6kb3MjgAnK4wrNkwt6mDQXcjAE9JM2rCRho34aJaztmALmKWv",
  "key13": "2sHkRxzZdunpefdupTqvaz7dpkmHkHJMjetb8U9aXHsFnUo4TJaZH2VqgvSWPELjFjfbY9Zh3GiEzm79v6uQLU4j",
  "key14": "5dqitvfBuB2gqJQ9Z5QNpi2hzDBbL8Qr61nfcLtUi9edqVn9X99veyrNZpaf3FzmsSfTsed7v5oXZ4mj3GRwB2qa",
  "key15": "63rvrDV1eyLmfFx73PqvyTDeBDrYKsTtuauMH6sXSfCoU32weiVSKVQ5VNL1NeceBHtW14sYUoHFJcwif541GdaV",
  "key16": "39bHjps1MjCCigBqv2FHqGa4GsBgAFJRpXpwPTLeKNXzdYgoctgPiN7wyubGnNGkag9E7wWD7FGRP5EyTPzhRR7n",
  "key17": "5BWMsmgA1YwSAEEG4jPThaisyW9EdNGse9mehMgMTdcjUUvkUh3WgM2Z4pbJeFrBoA7re79SxRsLgR1cXdri6vzm",
  "key18": "ZMeFTUJjvH4bbQoGAU4TfCDNmR8gAapa6qYQsMZYm5SQgTFYpXNW9VTuYmmhnK5CaLV3Qsu3Bzh53gkrLzAfzFR",
  "key19": "2AjZS5g96ZbR6xQHbBCvirHQN71q6zwf1Gh4Gg5VAwpWXoRrsPoY31cCAGSy9SMAHBdvkmT9mgb4iAfqdZB8DWwz",
  "key20": "3FAQ7Y7jaLNgTMZW5qoHyE2V3uA3qTR4dyzPuVR6mS5RgFTYM5M8xTGT2jCeeaRMQahRsjLMe3GPDqxECA9GCkiU",
  "key21": "3fd3HFntvPwjjpGZ3CxGDhc3ANwY7y5e94NNHcpCMc86zQcQpCJVw3gdCm7do2pv7hAjn5MJSfwZbwvrj1ABawr9",
  "key22": "5FryUJ9Gcd2yRMiKospn48M8smTttaqLwVgZ96GzXU7ptph3M55pUWkCGUijPPi5pe1tWxMeFwC1woZ5w5n7qLSN",
  "key23": "3WqincW5BpCb65tmszmJJUiEmj5pJie55bpeACieNZV8AckNxRzDpquKhseezobb9HowZrk5GUF7ENnqpU1v4Vyq",
  "key24": "4tKeqam3XboVAGtXiF4NYaLJ2RAP1bWkRrNhsuDwuUuqK8dpyKaaosDW6n5j7ZrkxyPHB8X58zewJjHGZYCEg8ae",
  "key25": "38SCFTn5dPJUd6Qw9AT9yGj98DuGpaE1oQLqXPCk4GqJP44szr3XKECpLGE7Vgfzss9DaTJEmQ1s8RUGgPXzLTht",
  "key26": "2vA3vMHwLf9zAu1PSDs9VfiwokQz5oc8SmwKtgKTwvCbkFmFhfLwRdsxHYPma3QFG1V1zhbVetRk893UFEHAFj9s",
  "key27": "29JNQskzJPFKfoMQe6DeDr8ZEkLhaAZxynKHJRjn4ht51STNBNLY8hM91bwXJFskc9DX9z8XpEEjWywtUygh5TLp",
  "key28": "319ngRb84M3V7KkKyAJRtnUYhucR5WkgwQJntXWm1oMTsj3GDsnwhVgVbHyrHeihMdNmmW2USpbESGQv5ptmzXPW",
  "key29": "67U6v2ME6kpVPbsHQvY7S7hE4W5m7zm5wPPsULS9PSohL3yNZk4Gnre8m1WjhGprN1AoB4ss3EQynUnK8dvtAJUP",
  "key30": "4VitFhiGV3nRMnrdt8DRLjydn5iZNTFeEMkwYPNnhLje9aH4tLg4cQcaPYasDmSHvGmzK41NnxMCwUCEdqkB8FhU",
  "key31": "2A5DjKuobExFKWuksGGgSQaJKEtb6yKeciNuwnmzSFJpb2vPYPLa1svwxYm3SCzdE16PoEKsoxnG3knj4QD5ZDLd",
  "key32": "VUMNugq7b3RxocK8kZqbRmnjbKGMQ7SjPLxWPT4ocJSQWRMDHZpjDAxHikTeD8UzSaXeo3FpFF3oT2ycDoAuycA",
  "key33": "611bk4nPQXnBUq2AKtcZfSySAFgz5mXcmdqJ7u1qAFeN3RNnZrBK3EsNNug2QUHhLsksq2NE6JJQXzK67P3uvxVo",
  "key34": "5meUsRqiGLf3dEe4DgCd1hHNWSsi91bYShssYDoEdtByJ3rmyhz13Egfy965pH14U25B8LSxrjqoistXDPRFeQKe",
  "key35": "3YBdSJdVNYdpsGXwUSCfxzj7ss5GPWHdDENYa4XtpK6S5gz9xNLXKzUXQSm8rnqxqiv2Bn98gRaLNNgyhCAtrbJg",
  "key36": "4yRghTMqVQuUiS7EFvhwuzrJhBnCD6cdQ8wjqaheyX8iVBphCUheY8VmrGHRyuaaY7gJu49gPLw249uPqWfGjnoU",
  "key37": "2TgTEdhQJWLmqBzBmzhSSPbkfnkHEbytzJH7y5uzJey5yvgANSDNg2woSrikyt9BCMSZzTaQocWYQAnfd4ebQTSM",
  "key38": "3kwdWZUNYUZ5nzszAFMaADjY9rWsc2EHys8gzLp2h1pFTUxvwRceBz42DT2fZp9wTRKm155AFf38CDAECJg56YtB"
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
