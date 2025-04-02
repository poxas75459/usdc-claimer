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
    "2TP1aBE2zNSnBoB1mAbaPKs1PN9Nq4eUq2auW3je83Av2aKuLJJU476sd4sxvxQkwPhQQW5WoiTCyw9E9j7FeK9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VMoLh8iUMgToWPxvHdUYDBXm7JYsJJPGVP7Y23h6GDsEY5AEN3KVELhZ12THRrm2z9aJNMhSahk12VaDTxEsZMa",
  "key1": "46Zf76iBFcRmj7b4Nwt1g4PhHeKEADQP9mW7fMmkZH46BEyfyTjNeHZSzYTn3yVNdw2ziX1hpGd1cwJ459sLnDhv",
  "key2": "6RE81p832BAE7HiYGZ3d7kzQ5roFKD4xh3J9u7FKtwdWNphcjm4Nh6A5Aj1PgpcVsK7uM8uhcVPBxESbUE8FPFp",
  "key3": "5UYMMNa4vTHnYgwRQ5Qv225Npca5EGgLeUSgYF82Tuu2uMiFj5byQX3Yy45qk1aERE6W8j2apLBq7bzdLpUJf8Mg",
  "key4": "AZBRaAcTk925rBKECRTegM8WPXQN7gdNv8MLmEvZ4RLFgXP1KVhDDsmN7mtLq2PmwsxGJDiPGGB6SkH3GeAhEpy",
  "key5": "5ssV78bXVMchq4qcKoLsVu8V2EVCesYpk5Yeru3xbF5WgU1swSn4tG9e88qBzK6nrWWeYzXfJpCHqmtMD51D4qfH",
  "key6": "LraicpgHCAZcaozawBqNUDXUj24u8bJZ2eatFRGTxNkJJGt6RRBG7y5CzqEm79E5GCDX6Auj94zwWBfnPdp5WZ9",
  "key7": "4JR8QQvL9J6hs7Ckk87jbFapdLh29LSPr3QP1J289HwQPHWo6VYSedoXPkkGedGVmm2Y5zr1iCHtJVNzoTup1t3m",
  "key8": "5b9Aat23dbEUXBQL5ZSTM58c4LCaC3NCxMA2rAdwi5ZhysL9uXUDRL1QsKz6CEoEH6FVRK3pBj2enorbn8L2B6gg",
  "key9": "uf4erpuxFBh1PiLWbaooQHzwzMGnJih1fyeefgAHq2igRpcxz8J6tyq5PR2pg4BKZW3HhnWbT7wJKPWjSTQrkNt",
  "key10": "5pdMRxeqvXroUEdL8jEGEZzAM8YW26WacqJWJPXrhjJt7WR2X4iYoqYcVuqZu3cKDPQ15QAsaL4ERez4Tvfbv3md",
  "key11": "3busdxHi2aQUPP4nfVYEfsMaAwrkFyNhiigTyWDjbWjP6YWPrLUNtEWCKfYcJcyFV8msu4JEd17xR8f4MvRg2Ah3",
  "key12": "4tjiiuu84PX1YBLPKp8AY4k7g3oSLti8wsgjyrqxciJ8zrLMUXqXGxQrSMR8RBvniZpMGax9AeSwQVZMHypZ8CDU",
  "key13": "5bzHUdEiyY4B1WUR3Xv3rxT22VkaBVLmDJj81qW6ocRUF5YaRhKoKuVqTvVf6GfS7Cwa84MR84JvqWRfmcWDeLvf",
  "key14": "2RHJWsVNx3Ro5WkpNfRLi1o9RHeMqDHst9we2QacD1FCeXWA5ugBSHaTUuJCAKzGJz7Tw3TJPUBQ6Wtv1JDFjdia",
  "key15": "5iteZiiaxGRWr4k6KjFj3ikEviY9CCSKeFAe4rYXuh9hhaXYDkpUfkkyuBb7NZRpd75z2YD6TQuA9jJGDPq3FK3x",
  "key16": "23XFYk7RsJWjcMSZMRyZqk6LKW4F1g8UaXG9rVpriuwXdncwsbDPStTyxRGm1MNW51TirWaw2vp6N58BoNZ8sQvc",
  "key17": "39dMLnmnC2Bci2UPt8CqLpjoMh19gWQAHySzY4KEgJqJ1zFVTwXKUpQLpNF1vgfoPAYsQZNJbqFWfxYmGhGUpzCc",
  "key18": "77jzcNwn8xB3JzMaKwjQpBHgPwdc5v9xgawLoti3X2gKJ9JPeMNxUAdjkrvU4Bt5zzEvEGgUA2QFvW8NSnApYk6",
  "key19": "2LRkcntHMBY8RJqfUnDEYgGyoPaf7H3xwQVTekykosscDAArEUdboGrwyP7qxGTxixEKX1ry1AnoihNPRHwEdvd9",
  "key20": "3E2UKmsDHcMzrbqfzuX5uBc4WEMKJ4h4JCaU5XZqiW6L2Q4Zap41eDpWBZqAjRZ6ADyCLXFV1xonteTs9iLZT5GS",
  "key21": "3w87LnYGfB4HfHrYZwERZ3R2pDCLJV5aAgUWkrgzM91dmoEUQUX3kqwXKxANLouAtN7dTRkfEzVZWPp1cBKn24hc",
  "key22": "5DrkVyM6J7y22VaeTdPQTDZd7yG6CZpdXQHoXFnC5r4UDssFCDd7duLt5FXdk7QbUDJCw5fnJyAihJiS48DhzHes",
  "key23": "3zJFb9SmSA5dGD99Bjcp248rZeNaCogJmp3YZmTp6gdtrQTGwASpHARZhKytnNYhprgNxQn3xktq5nf6et8d6rxh",
  "key24": "5dUuVWpdQNk4aGuTnTAuXgwfxZTcj4YuY44EVvt6xvo66TBpjM3YANeVEEi2M4mM8wDznQfuSZSx2dNHnX4VbdH9",
  "key25": "3erBNhWDrMJE4u8mnc9ZtQcb1h1N2nk7ghExhG44cJWWf5imGUUdotRMeyXcvLSz1qsge7QmACDZHta5dHVoxvyV",
  "key26": "5Kmr9t4prYyeSkossY8x3EX2GyTMnqFVDCXXkFYBkRkkWVvD7CZ2zwLzEpYD9ne683ek5bCCPyEsQJyxqhiqyLeC",
  "key27": "3YGPNK9SriAgxJx12pGWqWZsCN5naK3zVsef5wL2U1G2SpXHrkyJr1qW82tGQRLPfwiWtH1yiQAPhoKRh7fSVPFd",
  "key28": "2VND4vFQ175YWkw7VcToUdtNkJkxxzhE5zDXiHQqx2RzkHRCfWakCQdPE3jGZB9xxYDmWduMGxDaxP1q6MMXz4MN",
  "key29": "4AemH6u37DBgp3xpPRi7WoKTqDUsMaRuiby4sGXjdde1hMbqaCqAgDf6UKRrLJFTkLxvjhSR8Myamsaz2HCDpC2f",
  "key30": "5i7YAzDg6g79R66BEvGuaohKDe7g6xHLWMtmcXJdAKSvXNbxyK9JHVTgsVE492spWydW4igMoZvWTbUe9SYVBsDJ",
  "key31": "4RdPAEjaez34moG9fqNDGb4BZ6UerXXhjAeCBjtFWwP7a55FdYLuxskLYE1YDkwqwg8UvPqqAJd8wRdGRVQqn7rv",
  "key32": "24jAhpUxXb7Y9w4KXoBvwTqDAmM8Kt3Xke3yyQyDdMCVLf8iTWVvviaaU3ro2g5j6mpZs7sUCFVQtp2uB5jqLMGz",
  "key33": "j343oTygEN84yeCLn5rMBzfQeW8ty5MckZpMapitHk8daJ7gFCPcRtBJfhNa1X4jfv4z5t96hgn2saYUpQpFuME",
  "key34": "5XoCjDpM5QDxa5KmrGW423MDyJ6PD7Xg2CcwCc8a8M7vnc3d3ZVUiXqttShdbpBhsu9mJrrCjaXCrAUEQgfx9xiA",
  "key35": "566G169VNrGN8de8EUAbyDa2GA69AqfYSWqM2X7nPBs2Zq9hMYWqaKJNKAQmiHafLBNXhnEx5gcmEMFjKmrrGTTw",
  "key36": "2jmGAje7twAbBiBzMyPaY8uCNnZ1LUEVt3t5F5qkjUYJkYXcDMNU1QuvKkzQ2cPfDGcz4ZVwavVxeTxiKdN27ruE",
  "key37": "YezxPN4W5WLvhjiH2YMaKvpiHPutFRzppNdZgWgFxFSYUp1cwvUipUofV33fDPwqLNsDKuaDGTwtszXj7JUTsVD",
  "key38": "3NkSVC4UBHPoN2YMMFEGoJ8F4DA9VFQ6Zwakd3soXZhimSGvAz8fapQi2iZJmxxqD699CSgyJU5jrJDxQSXuUfos",
  "key39": "3NFPN6EFAqHo2KTwxguQ7jbsmeBxK6EeYdmVmcjS3SigH9yJtcJDbaKPwhBupCco6y254TXQd7MDYBGNhM5HzZr2",
  "key40": "3ireMBkv3hk99cscpuKksgLaAsCFESxGoavRzYKYwB6snmbjMjWhniiWH7fmWpribD3BgF4dNTSMMe6BJQ5EHvWc",
  "key41": "5axykSjEeJhDW1Y85PeGKypHSR1EkstkHL5qCp7qYRUhmKQyTNycftAxCk7Sbb78XMv21K22YLoVWN3ng1VXPSu1",
  "key42": "4ceUkeVoxrwqXFsC58FheDHXbhEYvQi97xiFbAcLXUyGz8G8Kv62Sko9P7YhKFzPYwQZF6QLnJq39tLLQjhTm3pa",
  "key43": "3eynU3eQvzuU6oqGsvbooagnbQ1wxKG4yNMYgTa5Q9RuaXPJ8d6YhEiijneVWjaFNhf7cW9AnCV29fi3g5nSGtmg",
  "key44": "4JC17nWGxqSfeny36xHbXLwf3n8WtV5ezVsJgQtyo5yHoj8yxxjJWhysevwhYXQ1ytRAVUf1G3AvorbjM93GFrNo"
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
