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
    "2wp4x5cQbwjViad2BLp51NaGmYMKizSdjReC5tpXpN23sZx4ADWYkAXS9ddEuuWSx9sHZ1ubHvzpTsf2bKk3VAx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22aAK1Yw4SFpFqxhuqi1dUVBXPXtFoqa6oE9wBuiNsbetCB7X5W8Fk5cLzT9GMpuzuVXBU5ERwGMHU4tdqtnEKy7",
  "key1": "4v6T1BDnm9ynjNqzwMUTKUquD1QSYPpJNeURfZBHMjMd6qxqJeB5xKXwgjUEGdLDrAPG91fBBSGH9nJguTviUeTQ",
  "key2": "xbJmzs1PjntxbBRmFPnpecEfQ2TXoMbMGgodU7yHhZZCAA5mW5R6PjGS5ss1jv1YZEwsEdZhRvgMQAsWSyFf6CE",
  "key3": "5RQDbydVqQwTLbSFqLitAJPbntrTjPDX8Z6fpYBMaT8F7HGocnA5wBb1C4VWby7nPRXD2ibNLRGY82ZK3RMTYBRc",
  "key4": "nZDwifmSVBjwLjRt4QspQM4YFFbCAwt4Dj4ApwyyKh5mRjak9vwL6Ff7WSpBXBdN9FPNHqciJKndR4KTWdnpaVW",
  "key5": "5nr6J7Nd6K8h618MHDdh4YpLLWZJm9rgsFaciaZ829tuJqqBjSH5LMUu2iHwVHHRa3DSJB7dDSRgmDkcxDprdbuV",
  "key6": "3McsG1ccqpyr8XVLDHAv5DZHH1DPWmTVt4XFkus6qRQmW7xMHFrHfMjmxJZL8YVmaMgVZLC9wbFmNonZdRMd2n85",
  "key7": "5DQv7CL2Ds95TwsxCZ2ApeQHtiZWK55z4xTsgSb8scShzGYpsVA1rKKfZNHY7zk7hpHGYepzqLHKWUVVhG6MLdR6",
  "key8": "5v1DA7oWYZxT3TVibk4kF86D82bB3eXb9RexzxQLW9AcKxbwNuyfibmxRdh1JhYSCWCbrVtF4YfFwvwFH8hYKbET",
  "key9": "5bk1ufNUpcvufr32ouXfpExthTVHJkYDy1qDFq9EPkYAAYUrxXiJg9HsXtB5F9hgTEeN4iXjBBfMPrsr7ppAVgQS",
  "key10": "1skVDh7gfV6q6L3vBLxs9rbm5ypdwGQKNvq1CCAN5gCvBZK6Q4zNFbTT1JqmaUTrhLaCh6NniPwCWTRYsLk6J3w",
  "key11": "4ydtPyusChqDBSA17NmyedwNJij6QWMGHmz3sP9wh2fLMUeAcxw1h8J2iJZoh4JrPuwgty6BLC8ExtSQJ5KiHDuo",
  "key12": "2o3wKhY2UzUw9fxDg6NDpHj11yiDadyUrr7ERR4mxpWVCUanZMGeVGi8zXtT1eqRBeUzsqU4Wgj2fChVZQrqqS4p",
  "key13": "JtkaWW3YD2QKJZD9NHoQRGZNJqDrxhzqWj5BmxDZg6f7rjNhymfXPbU8m76Fx74G7YPrFKNP3LSfycvwdKdMhY5",
  "key14": "5q6UoSsMTKQygtji8XiFRfK3xEZYqiwyA3Wkn2YHWfgWAWMbWvg2wHG8JD6AiwNykruEUPJfG3byZAG8pGRUjXzH",
  "key15": "G9HU3AZ7km4ENHZyNbZ3GALygQohvWKpn2bQtkHgr399eYBTHEuD8J6zcjyFxQegZu2xmfPCd5kYDinftppPAwH",
  "key16": "3e7VPcv35UQVp5gyGugraYypu47v8tk2tpk1t2HXQVYvVtkdqJKCmnU9fUM3jfFif9wnwjPsaUTTzLBXWdAE2kRw",
  "key17": "UJBthZzd6uE49BHCV4MvMG3Zv2EF2whCmopF7LzLx93Dn7MXQiSkcTCuK9xYDEhxqg8j2YjkhWcFoH2CDAaQWhb",
  "key18": "25gPTJCD13sTFi6NaWmXH9nMiNgWmQXzUTx6cpER8wRXUuECPpyhKDfcXy1C7fbwTHPDUofCxdZvCgfPtBESU163",
  "key19": "2ojgcQhFELvgUdwK9EsYpMeShoLLCNxRAd18PL8vJqPL46FmG16vPC3keYDvyuroqUNnqU4oJwUQgMUpHMC4sSHa",
  "key20": "5yBFtprGGYRxUSYAjPi6DPRFVDfwDuvNQ6mSeKraaqZQ8o2dqh6aUUJkogkWXcH72fbPoJEadPmg6BZY7ykyPCRU",
  "key21": "4GskkfUDDfmmTiZmNBKZidG1TV7dQPaR8VrEbzo5bWE9dQo1r6uzDKXcwy2ECuuNX3iFjzMFiypKDygbToKbnni4",
  "key22": "472n3Ccmoeo6Us6Axa6dxnMbJ1zxsNSWjesC3CuNWHTGdtu2ANvW6Xw6w7dnDrNWGsk8kGuEFyzCmZHun2aV73uo",
  "key23": "3ZR27euFJUxS925uDDWMQutmTcJDo3m5Q2zVwL7noUsyHB5G88NmbhnvuhEZrNvvQLaf8uoY3AidhU1rXm6Nu73s",
  "key24": "Kcmi4vEhBtrjt1tpyf1amK152N68PQNRBrKM5qDjBbP5pHnSZGL9T7Nde4HYdzWV4YXRUoPRWrhRgSCgd6kMwJF",
  "key25": "3LN18kYM1XRj5txMk7t7GURUabYE3zpDsLYKJJVvoLCmhJNoVEgPtk9P7pJ8MqADz5kpE9Rbx381nVvdixZFLYXu",
  "key26": "2nFuUbaZ1KFUNN5BXCNZTmAoox1rYhzA7bUiMfD79spPM1LJ8gZngKMEraq7bodB5V4siURUuRf3FjTeZ5zzGEXM",
  "key27": "5MRtG73uWnbHC22KtUtdikGUcAQMcMi6detHMFXHX3dApenDbrgGqR3yM9ciCv2un6Vx1TD1KCfD7KqcLvaA3u6z",
  "key28": "3hHN7QCfXR2nMzNvhVjyGqZYKNebook6RkAwbwYpBG2zH9eHqFt61eQCMmogsDRSaHGKTeJXmLSkwDHtfSCKLvdZ",
  "key29": "64SygjMpEBLqxe5dVhv1qNhw7oQ4MmFWiEPVWG1BoFyhbetALCyqtGGSPLMCNEPJNLK4BjxSE2FwL7rbSj8N3vNR",
  "key30": "3bp8FqnxRsdxkU6RMFynATvnH4DMduqJwcbavF5zxX9EeYSv5xYZww9TjCsFHM1pXyQU7RsP1pSRkVTn3r3VUkCU",
  "key31": "rRYh4H7TMFLqT3aYA5od8azNNxsWetdH8x7qWxmXenv9jGJwcnqDEAB63zgPhnYAKzsuNmZB2HaWb5Lg5oQXRQu",
  "key32": "4xnmfeSygnEjXHrqP5kynZs5jbkLhFJ6kLxB3NDcj5c2mghYCRy35KRsaw3oaRQKFrVCSZcgBpbzMfd5eGG37Q6G",
  "key33": "23GbLmk4ZJjEhWdoWQwSc7Ppm6doNVPojMW4gEeAbTBVUMApEzbwA53BoNj4DV2faXn81JkFYNmWMsBxnJGzq2YW",
  "key34": "cxBheixRYan77NCDbXVmVwYkY1oA1yjCxrVwRgocTjBG62poZK1Ysd7rTw6LLfHor92iQWijxDxmVG97KeCBoWF",
  "key35": "5xSeSck363AtkrJiPf7SujqnEm1tQPSbH5xUePchs6UBG7dzaYs2B64mNLBKv8cgQstJTL11L7G34QFxgJnoCFH8",
  "key36": "2zgjFifahaW5e3uS4iDn4bRkhgFkScg7XyWhtckXjnS553ztSh423i3T8e5whve2deHwbhLzazivk4mgU9YthuGo",
  "key37": "3tJfg71HvMacmdi65cyzbQLAFeqYqwhyrFWPgxySsNcizaA395V1ckAm27tdKVRf5vNTHLdi66CMGdCSKQRjwHJx",
  "key38": "2yer7UCGwHPUzLjie7ERtdY6NR7QXFBPw3AfWHFzzUf335uXqxNM7Jre6AUPETaqobr4VGmr6xKRU73ya61CyT61",
  "key39": "oR9XJ9QztBjChxPnjr59CFkMSCBMvbRoYBx5j2PYisqS2a4Rm49JYKtApJZrBQDnXR958DYh9CV8ENPJyDW5vfc",
  "key40": "3d7gUQ36yday34S5sT4HQG4341Y3fk8Qrz3844GVFVxmt5t6JFA9PdyFtyTWw4VkuZWDvDtsao2hva41R4LsEzpe",
  "key41": "3BC7ndbGNFA6wnHREE4uj5CSige4dwnsqD1yELjH7z8xHA4MDPySrw81CMe92kqBXXXNKM78rQZE317hYykR1evX",
  "key42": "4jF2V5n1QMfpzxuDb6nTchC4itBywp3WaZDH84fmfmSd8vgaabkX56vQ5f3tE3G38qFBYfLKEC7aucoeR9AHLynm",
  "key43": "2MpwbpptbxFchBfZ1iNocFc3Zp4jTVBURhPHRuYHcZJEX94hRFaiQ1EknURFfDthUSELEUyR2k9mDusP2CiRWro5",
  "key44": "HpvZwRYFfT1yqS9PRPxwRfjNSRkgyXQ888C7ntrA8eV8XxvJd1UgzNkiqaB4wko93mvPxEu3iJosbX6KcrTQrc3"
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
