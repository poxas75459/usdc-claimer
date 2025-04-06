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
    "2ovR8oQMm5SCuar9aDiknAby7f8FwRo1NU6vNgWi39ZBeDpjXxt2bmxPzQf9RvMhk7J5UoAQHsKwT3vgo9bBLoMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vzg1c1JFh4F25EwH2EK4sbrFDqn8Sit2oVGexTE8toRpHZ3N7kMhpvGtkanqu5ETntBmgZy91EQKWCjvRW5mxen",
  "key1": "5PzmmJ3yZqqrxemd8dacvvJzRThzE2zQe1ZPMDLNNQk79AuvUgjiPPiqzxrRYseMW2aYpZEMwcrkjyNfwYnEwpws",
  "key2": "5wszWdmGcGKGPA64sQR5uZJJ3XCw8NitJCA9WwgFf3CjgNwa7ubGSDECy7S5Cws71hArfpCKswjfcSHD1dBwRgBe",
  "key3": "2Bxef4cNm7ax5vSevTLHNbuotvYeyE1pZbps1J7iRhS6AvCEFQRKrToTG1VRZ7k8Jzvt1SzBAjV79jxcvdyyFWX2",
  "key4": "4faeeEFBvezvNgRkLxHJA9rpZAbfBT7KzpY7qrKs3zaxLQZYDD8GbGqK3tQhsP7PahPTNY1E4LDxpZi8fFjxYczG",
  "key5": "9BQCT5vb34LpJR2kVRu3Be1qgPfgvhTfDPMqh9Dne1GgL96iZXW8qd4pj5X7PGi25mtAy6Q9puaze5MoaAncQBf",
  "key6": "5Vig16Rsuc7GEcKWEGPkpZ9AQeJXLMDf4oY7NtPPGEErAZfvrEGN2HNCbKA1FnpPtG3rqDPQ4KvWbQy95wTswzHz",
  "key7": "2Ds2vDyW8yNzrFmYbEsbhDYvv7B6FKDXtUcFU5Mb8HNancs7q8eNc8KpywJfDdQMhegRqoDj8DwPmHm7TDS1Emek",
  "key8": "4y19QHW8uKpiQzt3pT3ceZGdFe2R5jkLzEz99rbCgvsz6Cu3FiRKNcktX5FqAQq8BA6wppY6tjchtgkncKagtDCP",
  "key9": "4UTBzYrcfKK3pp1ou7FndC3LvLuzjP6me2dwcMXeKGoFLdn7kT3Xj9p9ejrZRXwDZTxv3EUhG33hAndrySkcGt3c",
  "key10": "25k3FWWog4T3m6ZiMEi5Q1xdjCDhvCHtwX2aQ4MPZDG9Lfr4yE9ZqYXeedb22Vqb96Tn4tANE6CPeU721sQPn6f7",
  "key11": "2pfYhuq199zbcpZC5MpiTDhBn47XpKrQNdSwnoQsxMtRCnhnzU63U9i1Rh5wwLxoRFwpHbM9mFTcuctbto3gPabg",
  "key12": "57Er5SnVScKR6PcyRwQfhHxho4hSyUhWHGdGjrD9XPv2mxpeyLFpiwASg2d6AF8m38FgN9jRpLc57hsxHKdHxzqo",
  "key13": "3jsf2vWM8sS4wH1PSLXDY3M3bmxVjdNeweAjenMkncmfu7gaTAD1VDYqeFvZnFireeo5oez5WhFZDiNEFNCyn5Ba",
  "key14": "22A93aqj3CimUyrr7uKrZUL6LYZm3yTski5WoqJaB7hLspRTEEi4JajE8YT74b7CxBRGdEWFKe6nwo3Hdcw6dkaQ",
  "key15": "PN82urmBkPEVyse52EYguBRWfUrqxcikmuQ3dR6JiVgz1pZWuhPkk4gf7Cqimy1ogtpY33FZr1ihm7jxer1yhTf",
  "key16": "2CNNCjahmtVSfYmURmLdJYnxKwvQkqZPKHbfKyf1Lakd49ZvgCTp6FEPHRQStw15oed1UvXuzdameDgcDoCdR9gJ",
  "key17": "WPGYKLZw5W2NDYJbzoDE4HkTLWLnwcdRAkLq6gFHwC7VP6D8phU1gaweGtM8tyU3kuMMnnZFRKD1xR14J74BKR9",
  "key18": "3e1f36QfwtFqSEKdc3jyiGTVKnv7BfCSdaUxEyj1ts1BH2dEbKNmtGBiZWABXaQ2RtcaaUH3qb6bHVeGMFCBEFAq",
  "key19": "2sh36KUzexqNLAaxatoLPQ1d48ncezxx3k9PtbFmYtfj6RSyBgkiHMf8KFpXBCLghZjdXy7v3aCk6h4F5nVYZM2D",
  "key20": "3KrAtJuAcRZNi2KCU2yGTdLt1EQHaUQPvir4Cm5jaShMNZq6MNZr3TmsZBEy6gpjjzGBNshL3c2iXRzrG9TgQS98",
  "key21": "2By72Vjpk3LxmxJwh3STcSqXA3NuJPyvAmVr1GuR32BNLkDh3jNq6Swrsj2iRTtuUcRGu6P3hd2rqVzTNh1mLzWE",
  "key22": "bsnfekjnXsxy9JBwCyZCnjnPj9egxRKdvm8wDyAypercigB1xhvKFRxtwecezoPFbGGmFakgmDELCDqqB92XWbn",
  "key23": "2BjCz52iHbnzJmpB4YjAhTbcza1Qk9MqxykFSqDefuUWjK3AKjTLyHGWpfAWAg6icg93BnarYfeerqVNKXvCgfRc",
  "key24": "4G5t3pDn1XDm5CHbSh6qGgtTqUa1znm8FPx7SPjHsVgLcy4EZfps5cvk1BrHvKr5oMH5uCFXWw7Snwk1yTUWZ3bq",
  "key25": "3dC63qGRCNbW6qyjXUqkrMJfDXTPJ6NujqNrqSLt15bofMhr8CQXeNMhAiX3JP8Btj8BEK1m318GwxTMHVcZUYNd",
  "key26": "5BvgvgZVCrQ2dPnMzS7Gm8AKZAc3B378xhqhM22xgd13UMu1B3MLAN5g4bmja654FdDziMho5wXMFAcdbwgWyky2",
  "key27": "4Q7Z26swF8Xb4m4Y2XuYMw9VoBAVNTjA6NR4VFCAn7C5EzwnkbyaFWw35UPWk8ug1eJcPHhuhqV1wPYqjadLHsRx",
  "key28": "ryKJLSLRAkkJs2Kc4MPgYwMtpW8f5N5ZVL1wXBtkwhphU865tym8PfxTk5pic3MtaqqYeY3sJ16WaCkm1N5cqsn",
  "key29": "64R88zJaTa284BdvJuKWVZV6tiBfU5opcgZmY4mn2Zwr7UGGJD2GrsoYFZ4em7DjDir5UmHBRhyQo4cQLrdiiEnu",
  "key30": "3cf6b2ZohgwgLDwopEUqTnVfh71zp9jjWcz64nGXDgsoWo45jg6iqyx3JF6Ygvaj4Evxzmpmk3j9HMybKUqwGDd8",
  "key31": "A5JtjXBQTWZRsvM9orxqkZsYJfs3JABDcHj2H9TwHjCuG6gZo11XZ1Po6CpvtN3cjU3QGg8hLjV2Q4WXp9AUuNp",
  "key32": "7a1UC3U5RSKykGJQxULm3itonCA9EVfZq5fBiwTMQCf2Kwh4zYJsZcVJLwuqHMzMZUxikeum4QqsnhwMEQDy5jj",
  "key33": "2xwnwnJM5MpVo2Z66Z9ZRLf5LHtBDkKr8jrDietL77h1Ws994zc3msd8iaNPuuRpAojxoktYG1pPEcVDSbcVPMWU",
  "key34": "4Gh3adULhLrDFjHzGaNKzF92H9kjuWzq2MQj3tGn7TM2efjmkoYQd9WbCDH3cQ52Mrqy2hkzAkYiB273huGXrg8k",
  "key35": "3pQW7EK4ResqayhakWAxtzuuvqZNCiGhAkHUk9BFi9VXtEmxAhJaCxUHsaLQ7gCKuzb25JL9TM7hvmXV9DENsKvC",
  "key36": "5wjjLj8ASrnDr4cLYviLDRMe8ZSLQfLWK4WWKcJk15cvFhkPorKtXsCiZ7FkCZHL1UEoug1x8HsdXqnHsZF1cM4f",
  "key37": "3w3VMMEx98TmjR7L9FKiUbcKR8pQTsqpCAcZVaicqYgUVzvrkZFr6xGviWgce8JUAHuYWnowEfyTWYf5XtrvEAwz",
  "key38": "4bRunYonY57ksuiah3askWLeLVkBNTUMRwKXH6XmyLRLssvqPJ9irEULkx2WvgXqk1cEC81SbamQVxjZ7HN9HyRN",
  "key39": "21SQcxURjqEkhdXLKVxH836RiqLyKz5V2Z4e38Gv7jrCXWpDrcmnUDZjMR1t3tTasiV23RY3mfg4TBjNqFA9Yg5U",
  "key40": "3LwkCeSQWdsmwNYMpRxMm5mupsLgZx8XqpQawcxNJzjBwQgymwXNmU5vFfNhLfJYcFffyLuQckd8e3ioc3zW8Ap5"
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
