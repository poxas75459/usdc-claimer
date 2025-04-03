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
    "5MnUbZUUocm2mszUa64ix3EJs6FUMk74tGyngoLB1hXAex4C1kGLiTwMzbsENsELrr8n66uKuzZhdbE3qnZgmVji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tJQ1bGPwiJ57fstaetsbo2zJ9i8BUV3EPNbNYa2PaA7sKo6hE7ML3TfwYHmQrcLATwvfcTsM4JyFKMKSjLo4FRd",
  "key1": "3vJ8ZPuXVmHTYj2JQZueTrC8gKJkAzU5T3W78B3L3teXgcp3WAbkFA1d7LS9Yp8stTGfxsyRLkPviDvTxoZKk2ju",
  "key2": "2Cc2DfNbNmZgXMvrCdXRB6NGLnUktYtwftSTCzF7NXa9CU61YQfRiKNCQTA8DtT5UWYa85urHZbpMJ21vfRb1Lei",
  "key3": "3Nv7LyKuVfh1kPQWvxe12Hxvn9ZXwHfy2fZaFUcntbuyBd89N3zDFZjw9frX2mSWstvJBbjyf8ZLPsDGJcWJJPZy",
  "key4": "Fwicsk2giKjkgjst9vX2t5BTyHcHUZLArwMHhg7BhqZij3NG63HrYuHqacvTKqDnQhBbLHLDvZxCa1kncoNrMsv",
  "key5": "3zYsso3NPf1TYAVHLbTg7qJj6AHuK6rMnN42BT9vRThpr2H2KeFvXr2vWNvAe9sGHng5TCPxrL3KPh5Hehi2kjpC",
  "key6": "4dex41KCbXSpt1DHY4i6VYv5HP3W5AKm1CcivmsW5n2qmvmEGbK6wC22p9oUUm6udTxbcEnP5vJzZmNpSqjACAJo",
  "key7": "3MQhttveQk6k6JQWhMJj2R9QXectT5ZxrzTmDx5uHmdUhk3DhsVNXSXu6BSr5onoUTWCwDsnpPcoSu3T6zvmaM5U",
  "key8": "2zagedM4B5Qje6AgFdZmWJgzMUt97fwDtzQbK8aEzLZWJRtCwfi3gFyHT9YrwQb9jRQPVVrWttQ4xSXhMwbKVVhD",
  "key9": "5xsba1jmBkChyCdHEXx7zmjCb2UZwRdPBb6ZH1X2mUkcDJYPKGaVeqPPmFBt93UgfpUWGbuxRoMYaRo5nkvVLfbB",
  "key10": "2otSbvLHABSbhxoYn57vd8T2Cp2aXRQcsGi9cB2XasFc7mHUdorNwCCMof2ufYdRUvnuoemtndDE5vFPfVkrT9G9",
  "key11": "4CP2ToMWLeLTtVhuhadfEHA3ogoJdZ1Maec7P1DY5LFmxXzkNPVFzsUFyENXk5Du4jGxSrcSkAH9F2hnyeJ9w16y",
  "key12": "gWTgUWUs8VLC6r4MmNhheCZ73q32TkERL9gFpvqMo7S2VMd339A4By2XchxVtD82zgABtaxzhwe5KMt9XPtnpe9",
  "key13": "2te7rXSUiSgGKkxZz5XHjV98xFgCkhqmVbgMSwXiV1pYthVwWm14W9btGgWXx6TFsQK7Ty6rLgjtfTBy42KYRGav",
  "key14": "wPYZeFtrfoeqHCrgreZLSBgbLxvkf4YuTdisrZaZRmt1qkJ9aer4mezYtQDELoHwKzbkJgNpJS1Zb98RktyQXGN",
  "key15": "evZwNTSMqFXvYfBCkbBTVWrUNsTZQWvfGjfjJshQcNx9JrwpuxADS73cRxsrcNpNq6MHKLc3kBuabWYAFdc796T",
  "key16": "3jRw29m4Depkanh88i8bkiKeVxZKQsrPLuG7BnHL6V49tNUGEhfutfhPu8JBFoUATxvh8rji7Aa5YJ2MXJsXoBWg",
  "key17": "5cq4rMDMyU9zXXyDGmqKHrHV38XxYHkitN7MmuqJbNhshfXQQR5vZ4cnaDAi9xkbKsWawMQnwYjK6PzA5QJuCMLy",
  "key18": "4WGVLVwUJGhvfXav6kiL4PesDb24AYyYdqGbA5w6fKgZS8Toj7yTBoh9h4gPDyt5xgJ7iU3kapUR9mUN2Uy7L8ic",
  "key19": "3vAfqrFc3dbbu13U2TnF3E3V2m1czWgzgbBjL8G5xRcAZEHKmRdziNghugck4dyS1cgwAUVo2A8FENZZtsGFef5s",
  "key20": "2wetKXoHTQdPh2PDhzxgspzhxyps99MStkYHqnRQKBA9bRgFXs3tSn9eLCVxSXUBNmJtWdB9iYT4xQi3kZHbwzWM",
  "key21": "5zkhYhyPBDURvpCNousjqkBCUgR7uuEuzA6stjefLicbMe8PwThaA3Tp7Mho8Lr8vwUgwAU86hBZbWwvcGYHDGKK",
  "key22": "4HGotRuemwf1aJBz2xt4h6YtGshZLEL1b3ze6vNYqTy52CFLcvsijrCoBZaBKfTVtsu2Qs1jyq5u8jDTjeKxAqEQ",
  "key23": "2A68KTgS5ZbtUwSaFzPUsT68TLxWm22B93fUrA2JNfKt7yFhDTUECooxD3K8v3K4x9Vq9Tp8LWXBLN4N8fVS4era",
  "key24": "4Vg4t7HPohS5juUpK2Wu29YB37c9yVYJqKaPBi28yM7z8E7Nov5xWwbk9Q7r2dcAameY2faDH6EDGjRVWJD1eUMw",
  "key25": "3LxRcgNRwvJa5fFoaGBx8kWNVn3M2HVEGtox5E3u5hoPt4TqUQzxWwxKpyHxS6fMa6qfAQHrGfuVeUacEeQmkYuX",
  "key26": "247Xv91GFP3RhJaxZYpRVo3MSyqdcpV2hPnBJhAmAxhjPA6aRfPCLSZuG6Y3vXVet5SyPnXtR5YQA9gLHgxQdaat",
  "key27": "UWjrSkbAGPjMw46BGXMrdnPHqTucXfovei6PVNe1QvR7bZXS1K3JsxnFnDMnL2LKixprhay9enjmrYbrjTkb3UY",
  "key28": "2wsivefh9frdmBYXLHENZ27JeMWVxwrjAdEq9JARv8UFYxpwLwSAZMY8umpmKAgy8jgPniE3pUtEsjUTEBEkUKKq",
  "key29": "2tpj9jPiW4WGc9etrvP7qWEQPwPyHYPK17JQ3LXmQudjvJ17Jyj6RZ2Np9rTeZ3widwYmuPY8nvGjPoCVCcGcBpB",
  "key30": "4gLQmBet6sSxV9jHqQZ6Wv2ZAQLJbrNLf6F4NAmRBLUbrbHFZUY87Rm2dyyzjc8Aanauc7kw47coqu8ErNnUqgTs",
  "key31": "1ZUheR6yAKsW1h8NKMd81hF8vJdNAuX61CPmTKmgcAb7G1jCHgcZrtZ3ebueGvYZSuSCcsRozikzVGC6fHPvhmA",
  "key32": "3vFyDbvzmq9D71mNtHsB8NjQm4nNB1tc7gHoAcxdDYuktD4c27QbWVDPYiCPhuSnybMKaTaehaHQrhqjofbVccXH",
  "key33": "2Kt3eAZAg73pYjviDft9CYS9nExFCEmfCLgoBkawfCUckKfSDsnV1EccbFZkjZHhdPjkjVr66os27mFiY53JwoK1",
  "key34": "4X8P6biiWTNQEGUqqwfGKBHKgxvQCsUJqfp4sf7s2FUsGB2TwebUDsC2trrgfkske6A6N9oUTH5yxqzeBUjL7cZ7",
  "key35": "2A2zV8fjTzNkRBHKo5TNGwovDGB3M6HqZCz74YaVN6MriKJSfnCSoMmQaDMWoPCkYBjtACEVH2EFixhTb4cCCGGK",
  "key36": "5uXBXACKGjVhjDBnxfE8QcFAXNMwDhT1WUVqea93PFaPFjVpGiSLekTS4fj3qaWDw5bDdX5yjmXQuLXSLrR5MQ8c",
  "key37": "4oriWnPtsTP9HX7UgTqP6KQ1JCEmKW5RrdT1TKWE6oqmYZv8EQD9bS7xYGEsVSWcjQPQtyUJGxZDDDevyDeioxws",
  "key38": "3VHbKHvzwzxmMKBvRXAtBof1Z77H5bsPRbhLRbVhuJotfgZMMHrNGQNNTtKEd1DwvqxERbD74gk3jHGkGWE97rrc",
  "key39": "5NcsSBHGWN3TwWoLF8Q9Eemq5wu7fGdV3AmtNnKa6U3LDzWE6vBpJeZSjhYHV651sE8m2rHAdUn8bkJJVz3KbTPK",
  "key40": "3FQzLVgyLvU7U9yYwpgr3wfsQP4VvNtq8T5RMCuT5DYzJdZybu72gUqsBXZ9RWCmtq3LXSY5NvpWeostudfbmqQj",
  "key41": "3aFwPAQNut7BT1mRAjdVZyeX9mcp3uHq11EdsdXCn1zE62on28RBuEarERYnRszmgUyFDkJeGBsN7i4zR5CSGzSf",
  "key42": "2Rw5yxhdHsz4bwPprwrK6KQAauhUDUtZdSLS3YdNTwAyZVJ9P9s4X2gAa9xatWHHs5QXqPCCwMtQwvXknY2AYiaZ",
  "key43": "3qvApRxYrfimoVtBkNJXMgY2n2PSkPQYAJXa3kPd7FB4sqG53tfGcJRh4ktcyZvMgbW8TGtv7ByVBeFqSRiEgq1K",
  "key44": "2kwcpTsd8Qo1ayiTMpWaXb7ssE4aBTWSFZ2zZF1giQaEdVyUikZcG3S7SsQ8crNgKAcTQ47aKvDmMR1wjNFUqZpZ",
  "key45": "3TjoFggbXVo5oUxkzqth8Ef3V13DnpFLxTtdJcEgg75haoAcjTfqPUytnuYijcspwMXVRHxqMcfBS4j4gPVC1vS5",
  "key46": "2osq71VYwygugPZU2d5CvM4seq2CTuF3jiCD9EKdYqNrm4hSVpg669W5sMNQa2wdqGNYkjBAenHEEoptfHPdnPE8",
  "key47": "4fcWnv1ckDy7xpLwapyBBMQiKm74JN6Yi3irqRzf3nwzWodZrVLNh5YiPzTWeFgEwmWKDEV1RNEXBDnoMcG5rGyN",
  "key48": "5e9izV7zGcdXTCKaL8tKPRPZkJP5FiRhXzpcvf2mNAGBAojY3k7mQAwq2WcXrTbN1jZdoo2RL6NbEdoSLpQafgde"
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
