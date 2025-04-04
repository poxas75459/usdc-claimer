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
    "3ec4UkmsSoGYvdRs9MG765USxGA33xvHeUiMjaAPAv1bLwUwkbvqiJqKb87e9YtZL74Be73Ymb1h7A9fZTFkLeYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Pkb4JgJsfLYrxGDD9mHQq2xjaxCQk1NV9Vktf2Ww4LNzofWd5YAbGtcUDrqk95PqTbKbAcfWyi4XZnx1vEE5Ri",
  "key1": "3BUHFsFodmkGd8HrA42jeNWFf7KeCU4HxafUncwi9BqUvQPPaNpuaW2jtSAepoLG8SRBc58Cqj1hnwx7psGaifos",
  "key2": "3KxEWLouBPn7H2QrEkFsrhhzBFuXgjUJZ2yxWQPexqjshzS2WdPV7XfNzTzhn96rPv5AUD9hL82Nap5TX5RF2Zfx",
  "key3": "5rJeUi5FrahGpKfPWZtWyxrHp9XEPDL9piVhVhrVnGZmx3QjEtWQ97W6akTT1FBVxcxpBoY1q5PRC2iNfvNC52EH",
  "key4": "25n2VHX8pAfqermUKWfnJ7xZ8jaYn72wU6JLUH5kEhKGhTm685B1b77NMHz7GQcuhhQYaKcjSyPcDmLK7rWHbFq7",
  "key5": "57m6NMgn9J4P6u2shNBWtV5xKgoQFvkHpj8YhKd9dhwMbA5LGmBM3hiZApdXA9gyiTvsj5boe8BL3QZUuVrrBhKN",
  "key6": "8HouziwAGPho4Eevh6CVXKGsNNT3gsqk6gCuUCk2Bbp1Z76Lkf3bB6trhvkKvQ4io4bLwRNCyxqg3CYYAs1kbXC",
  "key7": "5L6zRxyYgWQJwUqxFwFTN92rSpNHEd9Fgvk62fnh8MY5mkfguSBPD7yYXNy9GDsF6K3wo55Cobms6ohNwdzfH1GY",
  "key8": "5fbiLZ1HX7A9qBHAQMv5uNMme4Mqu2i6jr3KuvkRpyAgKpFJpriFJ4GSEzQdJsRjKF8sXsYCcfr4ZVdG1GjdbV5r",
  "key9": "2NZiWG7DARrZ3Q1WaJJdFF6D86YJQiR2RdJKAWZ68BEzrEzkANcKo9VUJxxtxAUrfRtuibchRHZeXxmvYMPZmpry",
  "key10": "4geZDA6DtBeA6WUxenEabroRBX6Hqe2tPJAPd9sCq4ERyKZ9xWTT9576W9eyxiLGaowNWtfSPwxikZbvoCUzMwRX",
  "key11": "1Fku3uNjw3PDZkv9ksTDJ64PsrSyGUVcz6BK4Ct4Dkn6eH32nn7k6NmqEbBeUFhUWLaJjDQbtqJF7qKLQpfpFUj",
  "key12": "4GgNE3EqRCUpTuzwDakMy2N2W5zwQEcateMt4cvSWY9Yf5QXFek1zxmbfQbi4jNSqnZvpvjwgXEn4ZizVNDX6nJW",
  "key13": "4CpmVNFYN3Pb7LyHjDHSEhNm9RAv8VQqhQEjWU73Lh1mfpRsL7xe57g9LSni4VP4Wg5vzWoHrGkYLNt55iYB14vB",
  "key14": "5di3KkvyF7UyteR2tCgf9i8a3NkjL9MfKuBVoKcPBpS5k9TJr4FpiUrEEpUHrSnNDjnJbZq77BNwgfb2Az8xC324",
  "key15": "5jKd9nyYVw4ckjJy1nRYWRzDAtDGkA5TcRPG8cwmMEq26LV34sHZUejNXBh3undQyoHphkp1GbDupnXrLtSCcCSR",
  "key16": "2qqdNZdDKyVq7mtcs8Y8AV1cRLTXKc8hdXXTBdyuapthdHPXqmRFGtKixbyzQcp9LthFgKUR9p7NsauQPAgszXyQ",
  "key17": "3yNrZ2eoUzRq2dkMC9MNTb2hytJtMSXWvszQQzNgup1MVzm6LmQ7uE4pPu936So5MRqA3F4Z7MD5azUXphwYdURa",
  "key18": "5pDKYY7QycHDhPY332gq6AJt7DTQDpM1mDnfQpLYpbVhxMh62xzLpFz8g96VnHsKSGRQTNLYnp3ssGbADTSZY8Sg",
  "key19": "2jCqSsfgzvtUE1Smsb4sRk8QqBBYpXwRyUxjVE97yhJ7hj9FbAGTzyBHohLAt9dHMakW5wyLdkQkZshmLLKffL4L",
  "key20": "3ph1nSxfQx7hFKdPsqHgTBNasdRy3e2SEmxwJyq2WE7Py6JbDN5wqzyVu3ELGMTsBgD67dvqYc56U4bgxRhBx9bp",
  "key21": "tUexN3zh2ACf73J33NHENJ6nVcp7JdTd8jNDHBHnw4SFHqsmsDTMQo6Wb8nuYd6TpHi5z1uwpDBLT9LTAehZtsu",
  "key22": "2XU5miwqPu9WDPFsEDL76L6hGmPkbiHiVCFbRf7VcXJ4hy2DbRfjmU36QSGULj9oY7ymS5S6gGnGaA3zyP4RYLgp",
  "key23": "2k9cUTk3FkMfek9YHRCZ1yQhoQwXhTKtZn9ZYVi4oPcUyRCuzj5srkXuZUb12h5qUMswRs4a7YC52c96uXcJVYNQ",
  "key24": "XT6wwUS5RzZR53rXDFXL7nfPuBjcWKUk4cZ3UXAA6k7bGfVSGXpDYrKgLDh8BUPgAr3iMMQDWFBjTwakSzKDoPW",
  "key25": "3bFfCYyg4LtdoCaiVfLvyDgfZzNv3jukvNP2wsDiFVXxgjiV5ZKKziAv7MvCEA1VKjQgjSuHocyEHFhxSmV9tDsW",
  "key26": "E1oHksBXmbDmyrUB8JZxRd9UNUMyFpjFp7ghfZVAtBg93E3zbHjA1F8oYGzLvAxxVFgcuYJGALr5JsBPT7i3LCt",
  "key27": "31rj2NgSgHp2a92T3zYwDVvCNCmydMKDkYRqhG6Z3MVmovfVDKcvKyvfFa5EWLsEBatt2Q1UYnLZq62qmUx3rkon",
  "key28": "3UNqfwKntggJR1H3UwJh2MdCo2knqepXEnSY5sJmbenTUiBZXvWnnkeCPYQPKKe23kPf5dQUATr67DCWuJbb5R13",
  "key29": "5ANwxXSeTAnuQ894xtTpgVYAesFboWgsePfbbZpG3yyf8fKtZk9h3EXiPyFCRjVeXit8VEqGucGWsmdpAUJDmM4E",
  "key30": "2nzrJZsPEZgTzPs3VMbghHhy2JrrmmYfSH2T6ttcjfqDM3jTDezCxnCzx2AgdFQ3iNmvywEamKKX6Ku8Z5vJYyDm",
  "key31": "4XE1a1hKv4cqsaorTakjjrzxEph1tPnnXAeWuaCxoXVYEM3jXpomBiQ8DusY4HUWgC1CjoaaeRjV3nvbC8a2N6eW",
  "key32": "zcumRuwsBGfgge3TDAmpD3bnKyBPdQ8nhinMtkMMkHyThHPZ57DePa3A9g4SutMFPxdMFPg2pU9xcobZwPzvEEX",
  "key33": "2EXtKczpwEps2rjqAaBfWjcMSo4ttQaoB3PxdFg5oZBqTxsJzAdPJjdhSWXvQ7BfzpCSnAhEHyvKbFFq9qozSoa9",
  "key34": "YKG5LdcrbvJ1bU5C4b384AKB6wumih5kTMq3h4a6RyEiYjYUvssfBKrZUhHrxkf9zXzM9Q323FDFnv1ynaiEu6v",
  "key35": "43JtnzY6WcUvT5jd4TkX1tYCEZPKPxjgSd6EBz4fNjxxoVmGNAM38zZqKkAhnzm37nvUSWZ7nPeHFoAzzWoXmpo5",
  "key36": "2yxzKnV8qyeeHokbd2k7jvRHkLC9QW9mXumhsxD3TN3nCvvjXrB2fKWzxrBkb6F38itEh4RQwGJU1nftDSV42Qe6",
  "key37": "2PSGnTXqTSdWW3qLXqsWxa3cR7KJbNWoU5mGcqrz4pM3ANRcx6hcTpjfBgbHgXgQ9XjCwBY9cH4z8mGx59PMkhDU",
  "key38": "2sy5CquwUwNSmrRKNmqHZJYaArJ6SMVBrRXxhKppLqtH8tYBVaHPZeEq6bU5jBDS6BEEKLBNT7QJyPEiPf4okrXZ",
  "key39": "D4Qxtn2M3ACtg8yP431CacQyG1PtTGGoAfoxV2bGmonrwjUFntTGwFacHsCJnwiur6ztNTgMC7MwHLdX4Q2NJCc",
  "key40": "4WsCpfajwwnV3Yp8VjJrLNREjJXc34dcwqkA4EcbZWRosCXUNspu9oBVgvDEciLgNFLVfjPr2pjzjhZ9C8hGAdCY",
  "key41": "2TXppA1MvbP1zsWs9vjv9hRTuW9MB49jttRPSMpyELfU81yNB7CPiMH2EiNfB7Vudsk8hZQyaG5Et9KpAyRjvACg",
  "key42": "4kKh5D6nWtip3QxKjgM2NEbDPAsNmTk7n1iSmA7cDsDF1LMZjWdBpyiUWppJfQ95BpZ2bknSer9XTszqTGSw4nGN",
  "key43": "3vc7EM1TUGN4PHUuXhfE6VbPDAoYYvQcpGsdnGGHvDga5cysRLZHqAVJFhtqYoYXxGxeXYDp9n6VyFhC928uVXgY",
  "key44": "MbLuzpTCJmjtcb4xofDa7KvV3qywTGYq2eQFbuRRR2afWFMHQAgYJ4ep3Kmr48BnvHuUVZQNduPw2HPuSJSWsuW"
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
