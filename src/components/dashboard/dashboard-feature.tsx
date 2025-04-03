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
    "5khBUu2uW2Bzy4gr4BA3a3xkibYzjBxC575hGdZxQRhY1chpegJYsZsbGMrrkqGRh8ykguNrf91wZdTvEt2FdM8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FvSrrLnaBh86xg52VbDT2cpvs5QSMptxuWUgCvwTFMcgYV9MSWM7kdu54xnx4n9qTqAcNaLu1F4HYRdnyBCxnpu",
  "key1": "5393aykG5rskBgu77W3iV2cKvs5fnsvEwX3f5DDn3WiVECYogZiz266gbkFvp4eGa7sdorULNuYfe1DKzwJ9yBb1",
  "key2": "2PvDkdxTZGNqxEtow8pXXwkuM6TtniHuEsJ6JWWjPddyYRSyKCqckPKUo316eNsrXub91mV62WF1siGcjJFcMR1U",
  "key3": "3wNZ3S4tNTC6AZ4pW7PCsb9WyhSHtWAG3FaTNEqYCdEcezv7EFHos5wPjYRHY97Z9Q2SFuP4FCAJhXLWWXB83sAK",
  "key4": "3cLCYpZBbbUDfMyJk9FALzMD3c8N8P4g7SJQhsvcqUg5niHxS29ywr7Xy3pXGgQHW4MDda4rLBvhHQyyVbuSYH2S",
  "key5": "37QaJVJio2wpePcXtEenUntcR22bVMVkgWEgZFzMx6u36M3WEn44bcRaP77vS38kPGpMxUphBPWQrt3tEpk4R3JB",
  "key6": "3Ckf1xLG6uWNcR8TXBebGfvqfbmEVsqZ1bAP3y6MmwyRXvL75mB2jW1P3FWmVdph3Zz7VCjUPLWdjDagWvXi6qcW",
  "key7": "5jd3evwyz53dSrx4N3KvXBZcEoxWzJJgBuGAF9RW5p2VW7ktFUxHYAZRFbnKwKCwishhW8WvzWsb9zFZ3wNL2ze5",
  "key8": "3ghMo6Zmg4qk4B6P8jLxvfatq3iFa5fADfE76ge9ztmuusmVP4qMNMRrQjK5HGxB51NnL3osHw1MPCErqeh8JdQr",
  "key9": "5S2jY75CFowrJgMVn7gcEqbQxLkB9Hxt4n8MLUmKivKoE4PV32FWraonZkbks8FgCXk7puWS3uhJpmATo9x4GsGx",
  "key10": "34M1RoDRjQAkhibnKiuJtPPXis45aYCeZ61Aix3sWYJJXkXcEV1ovTFEScxXCqz1yH3c2qF77TkatbiTC4u27RbL",
  "key11": "3H1W9Y1ERYvL6k9JVgexQeJjRcBEhBd5GKGoTvNEBLFMtgXW8qYNfLb1o6ojWicEAftMx7WiDm84wRJd99jX6Kdq",
  "key12": "56t4bKzqS3f5JgeLdcrHMCSKEfiX7ZrbLp4RRcMHb5hwRwpAbdHtA1gJb3tt5WsX76BSJZUxkzcCGdyYf76jsAa5",
  "key13": "qm62MW7u8oFxD4Atv57UbunsbzTZY2WZwansNekKqQfAhK6bLwawhVUFDPA8hddxwFpj9icrRPbDkqcmNoB6ngr",
  "key14": "2LDh5Kcj1pF7H5Cm1UpzWfSqgHas6vgeApvevECnsYFBUEekM1oLQbEPYySSSe5T1pQnvAKwwomMcJxt88kkEPtt",
  "key15": "5H95QggFHpgqGyUE7ajRwEr2rKTZi2NMogE6gJUkSAVm6wdVUDXEg9qBpzZqowfCS6C8Yx4UFsfbkfHb89tLYFAP",
  "key16": "5Ukk2zJMWruc1yp6c84VkVXhf7awxWYANXhyBmQ3ebKreitmK9fFYCo9iixT1cVx9qyTKqaKJ7jkURuBNC3tzZjy",
  "key17": "2Jk3e2suRjFvJWfmqmAt78hxwPedFfKtZwStzMw7A5X1fNo1jwB8nDsi4rkJkHd1B6Jr2T7zxizUcDypif51iZvm",
  "key18": "3UNSkEuUSzZ4PeJgv5Eu6N3hFfDTs6Se52b3nhaeZE7zxDUwoEyqiKRMqsjVkSvREoZDkHhwLBb3tTxrrTSyEXfZ",
  "key19": "q38CasHGoiG8oifpFvvnzcT1p1L2xuu2pqP1iba3CLdwSXT99zmFhEngdF6dQ9h2fztbguaQ424ZsCsFmc16puS",
  "key20": "4E8YgxCok2TMjnCiUvEhXUSkRVqXYvsgMHxuHDzJx2CnCsLBQLEPYu7dn74Qyrf3CGdEKcWSxcCxSEEWuS8FPAhA",
  "key21": "BoDkG2LVxVhx3RE3Stfiwnkyoa36L6r18FVhwgYkv6Qgu6hQjgZzbbZMLgNV3CYPwVYGE5gYZ6MUzsVZ8Ji6rED",
  "key22": "5k88AgPKFfNurdwfZXXho1H59gQmoNvs8z8BK2xcyRW7PsrgDFNbzZhtuAtyAT8B15FbZXPYgxwoM6Nt9wSMoW4p",
  "key23": "3yH3KaF61xG7EfCUdmr27ZGQz4uDo9sh48vTUbVUnZ4HMPRNf645bbCXaPbMi5ymDBNa3QFDB7pictg9Ku7EkTry",
  "key24": "5dypBgXCWVfXDcUg4qrfPjV1QLF5vGM4CFqpRv2kqaxhhn7H9722UY7n2Kw2bx6KK3AuA6BUqmWpUAxFSyAJs4sr",
  "key25": "3eh2sNpBctpM6YuwPYm93EdLKJLBccswyVuiHvmw3tMwrghduczxXWHvpMrUJLTvbfgJJ5DdQ1HkXdu4tG246kf9",
  "key26": "59xHaqaJrYojJPJ2V8ctTJuWpDZTsSqpvKvbRMByF2Pw4HEydQdtcQCSxMt84D6upKgSkBmEEYyq1NepgEoXnA4Q",
  "key27": "WWNH8ftrMmj9r3gLuFqZfuE7LtzqABxfeu2Tfmz1HnLWYgLPwsboeeAFqM2SuPzZiqM7TYPcDrt5KFsdKnLyar9",
  "key28": "651SjjgLFVkZtUtjGPEaXHAhbPNA79DwMMWSSbtQ1VnDZq8d8C7VLEWT8VU4uQAZBfSpr3DRDDJXtNBuw7Y3XZyg",
  "key29": "3V5DHFzXQf6P9PBwPxEHWbYL7BCfizyR4CW3czggXGhwxqU9augY1CUFAjXsGcfkPijQFFuBvhd7v64Cqi3vA4xt",
  "key30": "4iZr1RAZVMXmX5S6MKurQ4FLhZR9aE281URsX7X3Z8W4q3XVQP1CmHGt3xyNMsKWd8o3UupWc7YBkx2zo3HZ8trU",
  "key31": "2GY7pgbf4162EHLFHkujrT8QR7DE9kj8EkwumfNZqJ3U1dUWGd94Rq89CVzCHWXd6QmJAH1ceyhkBz3xXBC4treY",
  "key32": "4aQvBa7AizWPawW99MLfkZuK2nq5NevZQqg18CRoetArGGyCFQAY5uEqjLX6PFiR8ivve6yqCNv92hhVgcjEzmPQ",
  "key33": "41r9752cUDEbtNHFMqFvHrZ4hk1koNUnmgjLBtZiiwtVB6Hw5DaSKu3iDYfTE7VPskxKJzUS84GViqW1XqUBrECo",
  "key34": "FsTUh8Sc1u5QZAYFBR3nQoEhb1icV5h43kfj9eoKaLbJepJYMnoEab681JwJ3mN3XnsDx3UPbbVExAkt1nCFQux",
  "key35": "4jFFsfkTUDbN7bzhCbn9njrf2gAmFMwpkA6CiqCFsVTYrkAUV5MXQRaACdbxKdJqnYcAg6z5bYWEDH4aqsk35ww9",
  "key36": "5N8Dt6YxTW5zivLiwin3UhxghYFDExk1UyB1axQHQxfaALRQijzY1fQHTDbCL4HZdRQBW9CSMyDVqBk83k7UCr5B",
  "key37": "5czKZCj3NZs4d4JLiG2xPBdnkGYZFpqzw4B6DLawVp8DrAKziSLKbsuf7JCxRXzDNZLPtuvGbAkuddwJSujxn3by",
  "key38": "wYtaFWN1kei7KA1F5TyNUU5BYWLiLqsFHiWC9dnVGnnJtvRbvXDNAsm4vM89Q4PjEofAxkscGNkeBuA6tGQqSTD",
  "key39": "4dyAinKrAhurwjPE31gR5cTUMcw1qw7crvsYxF8yaXjxfZ8BYtK22gxZn1qGc9v17NnWuNvcNaAZqoShqxif11pU",
  "key40": "3c8Y3LWjVYmnQQ9d8KExcfHnrN9yGHRfkQ2wQrmQ73Qmjrpnqv1zWX3VsLYF3x6T9jWd87FNvkmDJDkyXwmMJ6a3",
  "key41": "8CfQPtt8cnVAoMww119zdLvG5VArKwjidiKHzkqT5Bbs85R2Mdhn7LXDPgN44dtQ6YTfKv4qrAQePSmMCpAMqLM",
  "key42": "3oMGzg3AWSkKw85J1UmjtkSLqNnC5Z9S5dKofk6jyZnpFPMPuGokKnd2AsdcrJqWP8yH8UmmrU5uKQdWLYrCM9xh"
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
