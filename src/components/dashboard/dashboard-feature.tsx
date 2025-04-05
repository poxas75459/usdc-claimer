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
    "21tuktLD4fom2G2kLvqbAFJossNWLebhGBmXsXuqWag1ne6oWn915N1Wm1eRq6orBwRRsQLygyJZqwfCzhKvdbRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QDhR2AviaWQ1R9WDQp6BuARgxZuowj9WSdxkQCTnEnP5UficiXKJARq2x2SQNfmYS7YeCJwkx9TxqJxXFfu3HnZ",
  "key1": "4f3oVYdzTwj8s9u14tnhRb1gAKaXkAjZbgVzJKmCR1CA7b85rSHT6LRzgV7sLkvAmki59QLU2YSGYmTz72KsRHTE",
  "key2": "4HhLFHa8vv7BgPn9m517NqXGxQxjCyQpzQAuFxyvMHAoSti1qnKrLSPc6FBuNRSX1yupgck16CvnhqwQGEcFnHMP",
  "key3": "3b9MQQG22EiYXztpNxnE5vwmpaAeq69F2R6T5CCn5R4BNx26dUwxKxdMS4siY2jsQBDN1a4F9TmSKmnwTp1NEyHc",
  "key4": "5HB9oboAmxfB3bUmMo9qpkG7vr57FXukLRgvw6dYk4hnvtqFAs1uCSBNc1ghuiGyfHy1ro8tULjH1Mz9QqpZj9wW",
  "key5": "5BgSXXk6jwUHk1qrSUF9fhx31yyUgSLbkemQN8g4WHaJFWfp5q5UJezRysgHpuqGz4FQGzvYxurXHDnhRW4jD3Pk",
  "key6": "21xzB3KqYpL4oBfKr6moiwjXfUxeUpbwYkcubHZLn3CYAEEnpVNUYnV1YKCzN6UkPWAp65GwvmF37vrxv7JvSNzE",
  "key7": "BtfHhyKtDEBbAejaQMrusB1p5EWqKWm5UhXjqX85Ls8hZ8kaR673M7oGBaKtifFHkyYicb6GDLWWWezPyjxkR7y",
  "key8": "38bn59WPa8Unr5h4z8y4KdXaegS3gHdch6wZNb8WLmi4j5aJCoHGBVdmCwTXCXfv7QgB1dnJ3PvDWFNq7eLMNyS9",
  "key9": "5hZ4DDGmZVLy2ossRYQkpHER1qwVu3mixKXSvsBo18HTyJxJquB6VA7swHQcMySbmBRqTDV8QuMX8Su8bcsvNNSw",
  "key10": "5dPP5BMV9xiy3JUnr4HwMAy1dwtJt6Y9nT4pFsYyYfth4PTBaX3cKCEEvFhGqyN76nxxdDpS7h2d9pA24Yujp1LY",
  "key11": "3wMXzKZKfmJhw9Wd2rHoV2ZnjFNzQKoLArzsEXMRSN8sJ7NtE6FQCbCrn4eQGztH6vFPxr5pYLjRc5Coh1ipW2Qd",
  "key12": "54yAwZy4b7iEKRwsGR3P4mguxPJtSon22NqeoqSb7JtAeBgKciwiHiTuBPr4YD6ELNqNnaj9nF3chTK9qiCigvsK",
  "key13": "2W4JQnbrMhkrCqG66edCp6uDiqAjDSfvWERX9dmGokadQerUdvWg9wYH9scJvuoAuJJqQdvAajfS3R3pUWTNQjBw",
  "key14": "2Ag7Eiw4C2ZGyqt3kTLXhWi5nyMKQAmydJFBhYTiWrJyPa335wkfnsR9sDXkCQsLZo5icWKCLnv9oC8J6GdtxGWy",
  "key15": "5gpQ7k3KewLvdW8UA9NqzYVNfhhgy52w3vkiqJumG2xJz6jwcSwqZWzkq3QTo7X1UuctLooRosi4Ja4ABobcpkK8",
  "key16": "623ykw4xrvT4oeiRzKo6b5HZuRFXHvZGQB7CzEFbUsXNMoA1xCfKZs3Fu4fqk6ZhNeh6FrU71ecTCgz1SjUAcipE",
  "key17": "4NMUo4V4fmMEcyUsa2iMDN4cbWRQyRmkbY764osk5eagtK4YwtQjd55t54SPmgCsi1eN7r4d8dvAYiprqKe1g3Ki",
  "key18": "2YYw5NtFR6YZfoiwX2moLdJBq4uvYfGeVi748PiJ27iaXmZ3su7FGVJRsZD5furhsZAcoed792xZhvNBqbHyi5XH",
  "key19": "5EdJWN8o6tB1gg5FfqwAyKUSPLqWRcjatq9Dv8Nm1oipsXaFPMcnvSZXxcReG2MX8Eoc8ogPo8AiU6cRz1UQv5mn",
  "key20": "i4EfjpfVppgK5JTfDs2xLSSGjezhJPnGxs3CN5dJL2bsN7s5Qxm59Kg4J9WHgDTiGbGsAV74x8W3aCm7dSbCy5x",
  "key21": "3ZTc7g48kXp82dgHU849zBcAuUurNHrHh5Y1Q6WBu3xJStxPXnausgQAh4sNxXbzKepmzmejqkoHdGHSNPmsuRtb",
  "key22": "4e6HKoP558nKnsN6gp1Ks2RUhB1VHRF8dwHgrCoD4zg7rakyTyHJAw9S5UTnn9T8C3pvkieJ1utA2WS7DNQJjQd8",
  "key23": "2qtrKg6rD7FAEpsVrPEHHb7AiELbey1rpT9Av4RpLZx8frMwwbNRuQqYejhAtpLpWvtiMBg8Fb5RStTFAMT6y11D",
  "key24": "5CE4EM5KskQ1sHRBia3m7pR8K51C9PQTR1iN9MZpuDBpd7H1a19SukUvuBTnNMoWPZqyBJker5FTZqEdPEfPrkSP",
  "key25": "5wJUMxqu3EQK7CByAhZTHctkTEiugUd8UC1cQpSiHwn12prD7JFYpSSGKrjLuwoKSsyZLRds1pk64eJJkoBVpwU7",
  "key26": "38BnYAwYGHJfSK2Ea8rCUVLJmq6hiPoRE8GfrCTxe4v7W9Pn3q2w7EwD4LDuTNTD3AdLM1FvtZLj8A16V8ogjS2V",
  "key27": "4HzoJTBeHH8kaeigFQxNdFUPX9bjkTX7qhJUpY5CPUgSVbUy2bMVxAFrcZZk6iAWhfhsTpRFV3ckDdB9Qxu8VvG1",
  "key28": "VdmhT7SS65mDZuDLEMYvKLVxGozQij1dLyGyQdutLrJDGxvtCbwBSGHysaxW8eh7zHwQTcBaxYcEgpjMsifLpkf",
  "key29": "3F58ysxBJkz3rbpmshPQszBFpkbkcxfSrKijXUGv8pLJ3N2EkvDXvSLT3iewZrtz5wN2qvwCdLkCKeLpeUkBihj9",
  "key30": "6szmwyfUeGbnAHFKDC21zq6vXzyQ75zZ8v2q61DrHiwBiLK8TT6qrfmZQHkSsbVEgcQsQwuJMGogaheRPN7G9r4",
  "key31": "3aGEJx9KNNt4GA1A9gJYTzWB14KUvWndcwkLKt6KBZh7QQxAiaqZpamhALu8yTuvAxziPa9xDSXhxGsfBEBFTnLB",
  "key32": "YKMCQbNN137RU32cN9LTUS3qR4XxweEez5ye7xCvguDHdcQPBW1bqmq9KhZCzgUVrEd4wc95qeW5LZG9zUi1X7V",
  "key33": "5B3rU4nVzbwN1oMSechgUWJAPDDRk7snYXvJP5HdEE8cpWn5Kc2XqFqe3J9MHqoJXgYU7pbrPMXvynNa3atnqrgi",
  "key34": "3DTRzhErkebAPXkMo4Lw4ErGLA4TkiX3s1ZjwjNBMrQCsxMqNUojgoxoz9qyBXH87VvCRmawNBF3Z6oEgMjijpVj",
  "key35": "9EUhkjSo7XDcijdA8qD48tFgNNyKAtxaW7zcaRyd45RmY8ecnm8jgkSszt93T1ScXFrmbL3qsLS6fTS2WyuRQ8b"
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
