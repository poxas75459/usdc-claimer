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
    "64t8i7992Ag2cDDMpz4DeppZ579uHrEUNgMAVKBDLcyQ5oqKXypzdEMfcBKwLJf4iZMQwZniYsYEDgXFpHkgcfX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5icQDEt6iT49FkFyDkEezPjwHZG1nTcEiCvJbEgg8nT5KrSUHUAXRuaTtGex7KXXeRvCptvgYixFNCmkN91dJQyN",
  "key1": "3abP8nhQxNCmgszCVs2YcEx1TLh9PbmesMGajxKhNEvZ3srzGPrSbRcjVUsdSSxNq4LfGqrYwz4YHceNPubCaake",
  "key2": "4a985CvNxwaPua17dhhnvRF9oCW98mEyzkBEUxtb1DZd4gv7DWBiwEJewUHdgERGJbeF2e4Jc7NtqdFCoYCyy372",
  "key3": "3LcWfWGg87GDsGAGDiLLNecD9yRPtBDGCGhRLGaf8dRb5Ds3YnT84JhERF6knG6iwqG4XMcw9Khq236EY5ZZsE93",
  "key4": "3iFeDZ27tfcyCW2aJqntVbBDnwprP9G21uJxwS54379m5ZX2Lkbn3hazdkYAn2pm9xPmyUdbzXq99SShvxfPnKBz",
  "key5": "25m8rz1QUkfAP6QjYGwfdyLPDMoGpSPMkBdrHe5UF8fhcB8kSmt4DfLtePVzHBZMpYNAazkbEMXKoKj63KjsjozJ",
  "key6": "5N3pav4qK5q163N2zJUnVzyYGgpaS85F3BCkinemyY6x1rdAHeHZg92CPCxDfrpnLQHeDpoPkLvzYptbNuxDn6LJ",
  "key7": "5R7ScvctuK1YXnNU4CjmpEmiTyqoCDWyL4eUAVG6jAJzQjpUY5UJMWDdKCj1HuLSP77YNfBfBpYYTQk2UKfeahLN",
  "key8": "2HBNMebNEq7HxHPCHGG7oXdW68Y9HiPB8Kby2QW4jXhWzgmFmpbJs4dCAKVxJLSBN1JaDtLhfatk9Vh4RvvG1rQk",
  "key9": "4gqTVARmkHmf7hefaiybgK49M1y2infzzSzWX6KpxpjRru8uRqrueYnYysHVGnJwXPQNgtCzw92YMWmV9cD6bkkV",
  "key10": "54VYSHqTKxxK44kyKzgGGmccGg85imZJoQb6NkieYuTPZjT9F5aGgaKjvY6T1UCJpjtCvs9cLV1DHR76e7YjXaRV",
  "key11": "mXPvEAZUY9EBgDXBqws3GUKA6tQKh6Rb6xAVbFwk4RWfeUQJ6vknf3zESxbpEiWvtkxrReuNAAdwvkxV976tS8X",
  "key12": "5Lacozahe4rV2ZzZGGrQhG1gcxkfLyvigPC1oJyRTudmB745D5DsUkqcUkyeKUxpqZxYtexEeRPA2Q2EsGcKF6LT",
  "key13": "JnhXZHuY685BzThfB1VrTuTsGANE3cTiv5kB35inXZd4TsxviodJjCQvFkXpA2QKaRwtw2QEMsVoSNALaZWkyui",
  "key14": "5f15JaaMvjCzUcgGKLDWYq26CW2pX1F32wExaoXoNpBUyWqYRsPM4QbKek3P4X9N9zC8WtLVNNkdvv7sNE822K6s",
  "key15": "JQ7RHeTtbTKmsAnPR7svoR7grfMLemYTvEz7ysrwC4E3QNt9vdatHhCUixuxbPi8FqhW2vg3nsxQHRtPfjg8u2n",
  "key16": "4Mb8nCnjDBGmudQzfZLnwDZ7btUsRsgg1aEB1modSjdJCQGR6GcNAdesxe1vjQQtCPEHd8PvTbSKSkjSLjdv4hPH",
  "key17": "3BqaoXH19zYBPTNzV9ViryXuPayh4gwC4R7Dx7QkLNiA85nPLNtbi5SxJvnd3zZVHJrJNVTBfUv61FALdSeRvJs1",
  "key18": "3paEHdZMYQxjc46qm8uUMhzgkuZwZAwXBN2hWUKjgPEqmoYSRLhPzas31qLHFSFiXntktCdd48yuNzXdYfReVLJ",
  "key19": "Jdm3E7A7M12Qbm2xwTBVbvzEkAuP9txiKHppsAqR92KjvywxGtyCodQMjE6SULHSNV2gv1ukmu4M2hQTXgjLqZn",
  "key20": "2Lh7d3NjEyesbZWRCLH8JNkw135Rt73PkTosqJBFKHCepigCw4TGdqV9Me8RxAeWq9f5i45RnMCKxFwxoMjH4UG2",
  "key21": "4oFV5S3XLH9C3ah8A99aRMN5KMUtKdZFzsHSXwZM521ovtUQWt5Yd8iqtWGp52mJmyMN17y2eN8MMnM3Jjtte8MY",
  "key22": "67CQtP1h7GnsTdEZKiHoWt3CpSPGhx1JaUZ3ZR2vfdALT7BwRt9sftULRa1eCTRwuTgiY5Ekh16JStApXhEhevaY",
  "key23": "5zqqi1hTGiJ6jN46sizC3qLFKuPfoaDZseVeFkRxKwEc6Z23Sut9W7tKNBDrLCQTC2HRQJDEUav1phjLBHWsySro",
  "key24": "i9AGFGrhBqWqZ9AkeRUi5sUqcUWzZTKQY4xn78wzMK2mLS8y5qw1op1AnvM1H84eA6EZeson7nCLgbMVzgss1e1",
  "key25": "4u2X5xMsr4NXYbkDXnt2YEVaKyKoaquZKKLAyz6v58SuAJrsp8RPnwmrZVRqbWzJ3cKXvQ7XdJpeZSfNNTwx7ZxH",
  "key26": "kapJ8v4ZcuebTK8ya4Hv8cjbr4PthuJG3t7AERy3zYhdXuc47v8Gw1kW1cG6zdaXyRnHsxvNd4ruyBBtMpnJ78G",
  "key27": "nWRhMNDnneVqCDuwBCBYheiv5Pj9veizQA9Sjb954TgTTgZ7C5Q9uprqaj8P2XggQwe27ErFS3CfnVK85uJA3st",
  "key28": "jrsuirunQGfQFyKxi6EZ9Htf6xAKiniKF7XcRikE3WsRiUXtWjaa67DPKgcqKwvY6SuH6kdbunAdUMzYqN3R5Dr",
  "key29": "35z2d9cN5xLn7g5VEpRt8aQNM19KtGdTXi9PamhGzb5ETn4LZHRZtAtPxtSezXPoZn7S1rmggG6dDnYR5sGrQBof",
  "key30": "yUAkmF6uGDsqJ3zvd7hv8PpDYPfkhabriRfHN4UHsrK6ddcHEvuUqri1fwh8i4iXSHGUPT7ATPDFeMzFn4HPkhM",
  "key31": "22Atqa3ePWQScr5ZtpPDxeGa1ebyNgDhnTT4dG1AY338GRnM532NJypAku71u69NpmyJfedRLnzzyt46zrGW8Tf8",
  "key32": "5xeuScYTw3devbvd3Va3NR32BdiGNZL46cxUkb6gmBrrK3UVR6Abry8cQ2z58atpdmzbbqZui8SoS8rwmK2aj9ck",
  "key33": "5LAhYQ1XTvgHqMHVFJiXKhQ6yKWwpBaQWeuTxrcx948mH6tgQxwJsd7PNiVAsuNNmEtDzhgktkpcip59EKARzCyH",
  "key34": "xL6yTq3YZyhKAmFLp8pDo3QBSAhNjjCfEuWXV6MPvBDDEFCA3sSULnkA1w91TJrWAtVoMVrHkCB72SSkLNkX6ms",
  "key35": "3ZsdnA323XjsWsDSBrrGsYjnJTGHJPyWVXS6wsjFVkL2PvgHJNyYpYsXDgGWCRUxoJF4YqucfzT333wHvMVsR2gq",
  "key36": "EAFJuWEmq7D3YHshdQJjuxWVqeXybWVzVJA2HrbLmQgDVetF9UNL9fzFq146VPDPvPCFayi7ZErUsBzL7h8gNjT",
  "key37": "26NxzKTpHFAgjCs8DNXUWYY7ncr2hVuq8fHB3XmxhhzaHZJUUEp5Yrtxu3sochtJSCMh528PYNaCDGffNTcPb7NP",
  "key38": "kuvJezRFXg4tpexNwJJX7zi5UpC81kYyHvHJKNAJc533RG79HukpM3q83Q67tmag7fW8EpJsKoWeuMCWALijYgE",
  "key39": "4HUoEYixa47JNh2duBdiwS5DAvHE2aYpQnwu8NXw2zyG2mdvUh9PgBE7PdbPRUrMYfxaZ4SR99QWs9srYSXLKqcU"
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
