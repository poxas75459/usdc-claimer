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
    "5Yj3otWGkJvFWkZqPyi7mmrg64dP4g6D38XMV3J7WUA81B9qsjoTTJTDU89y3PKEnP9GMgXSJqVP2CJ9qcojkgVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4vytV1qDZaTkyob6x1sAxAGkNJ4fteEQDQNDPuqSFFP3GWgUx3SXUbj3zQPXbySZNHF8ruALhrg35vSSbDsovc",
  "key1": "35haG73JjNwhMFSEcD738ZUUbLTjKgFwJ9PvpP8mTPjSVat6qJ65hngp5xXWa4N1f4NYGfxtpGrnmU75zkfEmV3k",
  "key2": "4LJFzASchEdJ6zHhbq9pNjqovRc2DxQcL8vQmE43x3TkNEzjCwbxq2AJJ3t7w67iGtgt5yTjZM8D8PtRZychPiS",
  "key3": "2Fa7NZf1qGFjov7TaVGsk5UCEVhUpbhcvS9X9yzhWgfRrjRVCmTx3XQsoJKUV3KaLZtb5TK72fZ1nwdLpoaeJz3",
  "key4": "5aQQzTypfrwRMf9RGzhSbgkfetfUQ9FPgcDCGBYNtbtwLUPiRxjdRGEh3KF6WfbSj2jfDdaaAndAsz81Pc8gQxki",
  "key5": "5EmvKkSBNU3hSg56MgYPMRGbmcot2mtzVFsc2Ks6V6eqT6MvNj3HYHEk1Ukb3cmAZdzNLkENiLzow6XGZMYaRy86",
  "key6": "2YaGCKaB2QU3W21x8AJmxXD3vpFhhPx2DZx56NQHeFQaGTuyq1ySE6zAEhifFCC7KLqHyFWbKw1gDcNDRwuVQ5kk",
  "key7": "3NoBeJdPAAdUYWfXpU2FzfK5ZioWwBJw3zT3LYQR6rx29ELerfPHd31XRvRH9EJaUiGDj58uowbqVizvPS9a4PCe",
  "key8": "3243VEdHguoixvc5dfRNzbwRSDnyWxHguq6zbagU9x95LANrKWmxgnbfLFEuSynVKwwHvr6pn6RUgRpCsYUbrtJq",
  "key9": "4VadGPTUAfvwroeWWFqKNB1f5ZZx99jJLGMiVFBanNR7XjyNRdfzuDqamYZbHYDt5v6AgRexdEgJeZcY5ArtorDK",
  "key10": "x46JabzknJcV4oepZ6idZhqYq9kdieXTtQYx7P1hDxkpUjt2Eot1JmgPYZnpVhDfotvP1WZUfgRP5fvhvgUsqjV",
  "key11": "5rBXk6Juwiv8PtgR1CTjqSrj42iT72BchsKGZHjYZuzAsc66tweF9ChftoDs4QEKzfmenfSjqUtR1eyezVavUKaW",
  "key12": "3qXXP2RYzGLspFpTYq4mhyeaXcgG2fPczAVEwAcsXKy59yrJA9PQVbVwRGQuzVLkdU7WctuEfpzuqC4KAEpcqW9D",
  "key13": "27Zr3fseh4zqj2ifMhi5vocqNYEKGHXNZbKqrJ6R6EMMwcLpMYondPwMs4YRy3NS8LUqns4cyhvLmJnYfFJfQiHJ",
  "key14": "22yMbuyA8Lg6aUhvdigPzYkWEbDMNGT6mhwNb7KgAyscFYXpdz8AVmVgvoYTACK8cfySwVpDF318GdvcZU7UBG6b",
  "key15": "2ap1QPHLpn2q1U1wcxMmnP2bWrqgtp9e6TftYcf74oKvNdKKYrvHpaDH5iUUFMtPk4HTc82TLoSJtkiDFwkgV2wE",
  "key16": "2yFtiheR85txAQCYwNVzHQh5TedR844nL9uwj36tb4Z7R24TCxi1YhJxfPCrK9zMCCT9LEgkGGRAY8UXWVV1jFBS",
  "key17": "VLB4hEVKtwTYz2PDPuHTLDxawDsoqXmghi8BjZwzU23ciUYHeHgfyz8vTrzX53H3rZqFssNwrKFHMoKbcPVeNu8",
  "key18": "MujCoqrHf6ryofGHnQZ3yj2gw6nzmXGdvRP2WMVdS5vGmXL588ztPzRpMZwudMydqJe6UaCd5dxBo4Div83Kajr",
  "key19": "2km6iGYGXQBXLRPeFDnjAtfvPmq11P4n7evvbyt3oc1KGzADvEDBFjsm8HD8shdWjw1zcmttJjRfBM3mZKMU3LNM",
  "key20": "2hDmJGNc2VUXKLtk8eLR5PZZczwbivrvC3SH5pEuRsqzG7Hp54DGPSTvrmEx54rarUHHj5bfNXTecohMVBbVwotR",
  "key21": "aY3gUguMZ9yjgu3Dm8mkGMLSvNtBurmDJ18NGEejiPkC46sSoQ48Atvmq4D7ttT6uSUNon7qupnL7x6qk99ix4d",
  "key22": "bd2XXhLrkzWcjPd9bsYqvysnh8TsujW5o5zMdwUPfUCgC8wgDZVRfBwGgm23zBxvmkXCMnrmWJdovrxkgXgqtVX",
  "key23": "5v2MVVmmczKSEvwV7Ek6g7kdiCV4FbTPFqbjbLWV9Y4JVr6ZQmZjVrDJY5n5VZRxeqHJJPVzbURKK65n7a1ft3ri",
  "key24": "36bMcENobFnFZDsjp7nYnZ8idNTyh7Jk59SWEZgvLzWrTaJ1MhXkFeGfRRqA17imcuUFicUv4vJdzUZMB8yPyo6V",
  "key25": "4mABRjagL9dyGW4c14Awm19ZWitpVPwbuELb9T6t8P5Yhu7AJtRztSqpXftWebsYYNyd6tVapR6VUZ46sEfhiuR7",
  "key26": "5jc9PsvBXWoukkBdpJU4MmjgFg8zKpLwJonmr6kskZE92gh9e9gbUd2xTfr347RTBQgJ6rGHs8w26tPJuUhuUwkU",
  "key27": "4Kqf57G47WvVif2QUz2KroqiRJiMT5mG5wkTB2VUgUpmoP2yj1A4EJ5NcAE1y8E447VbtRfYyQsbABbMrWvEHGNN",
  "key28": "3uaHd4vC7v1koN2iDsVWoea4Qdy54T89KChZ2xQGFqMAXANp9fEJTF2JLMzogszXG1V9njRxywkgJXMG144LasTT",
  "key29": "62eTAgcNdtZBjCc3Hazd1wAvNgLX1aiHub1u4sRy2YYqYJAfpkrBiezUQY99qb6HvasSXjHKMsfdaUa22ama9tdG",
  "key30": "35F7fDnNTrxWqn3pEhEYvZQiuoZj9MioYXwWmGxqZJVxWPaXgL2sd5WpqbqbvcACNPNsDcqcMpQnDRjqkCACXWAh",
  "key31": "2FL9xxqxyo8vhL2rztGTq5g98K3EaAyJ1ZmCqG2S6CTVLFh1pUqSiU4LNZgFWCzaVVDoZrUfJgYW9GQKe126u5Ja",
  "key32": "3namG9Y3cAAY55Mkin5ERTKWbhbzfr8B5tH16K8q7kU5xnKs3DewoEmErduSiTa5WRwjx14vyj1uYLGdVhSto3gp",
  "key33": "4w8exS5SbCLn1Ui3arKJqcDuVe6ythsn9tVH1W2RjuKcL2gR2YNqwuQE5MkLYXEB8ULUfPUbxmjKsx1WTQZm2tjj",
  "key34": "1WDxLemkEF5yzTCJ3JFJSeurfMAwWyiNdgo66yTM69sEddNBWPBUMWhEiz7mU329hnbA5o96ZSuqqvNRTJef7XF",
  "key35": "4Ev58tWxiaHD1TnxR9fXBvCF28NxBfNjSXgR9h5NcT2a267KT84a7TQpfSQH2JjVP2deHPCFjhd1TmPCK3VY2Kzj",
  "key36": "2adbgc2ZZHSLCjaRn6GScaeicUPr78qVAChcktcyuLyug2xET6MhNEuFxvKP2DiK8YL2fc3PGG6bt6KYmbWgv9ic",
  "key37": "4EDVVyJz6bYUFWCAQNwEoNuLLUu5iAQWSkrWcvsUgKzQqVCjaFosDjt81UQm4agfLPkMaGBAvBkHwu6ZMgngFxiE",
  "key38": "m2EC8WBJtai2zsvexquA8M22hHha8NoEEjvXLA4EEfzc2XrPAnPLUJmRfPkfgn1zwaP3Egx4kDsJtzXW7bF3aLD",
  "key39": "5tD9mM5LvaQVoXfjL1gjiVftSEE31gwG98o18eqiYkJKb8tPXmJN3JbcDTVtQ3hvRhriBTDgf5UnzFMo2McSwjFG",
  "key40": "4QJvB9tLyn2NNQsAaFL5iHRxY5fbntHgQJSbvqdswfvi6KddnNFBq49PCFdL8X8HvZd2yHwknvCu52U3QQwZrzrg",
  "key41": "4LjBRCRPMF1YqiNt3eJUUasRVmwhuWWxr2WCvTADPnUkLBKiuqJrDXRsTi3LLEFR42hhs1NG5EHEwEpCSgzvW9GG",
  "key42": "45xPpnTfh2oH8WyHtLZaNnTQBhznsaNNc2X8bR1WdyHEyP6Z3TJTCq9WS2U9zX9PyysJfWSiU7FZC3mbBstNvQJz"
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
