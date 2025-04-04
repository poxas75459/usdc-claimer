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
    "2kFpWq86vYiK4CLHALh5fVpBX2StMKFMQpLFs5t24MgdurRFw1X7E33hQCXX5StAhQDFBYfyiv6MixKUdaPUpBDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n8Z4VBnXEGER3JcuqS1RALBY74xRMbUcY38rP33SCgJ2Fh4QkRpCQ6fZNcL4R1gEypUhpy3zyE4EC8r2WW45Z1T",
  "key1": "44JHPdkGxLbvAe2Z9ac9obCxJvzcXutAS4oZJ9DuD4mUr1UuT9JPGrJ5wLjL7M5KJU9HG66SJ7wiZZnpAvbqrnCD",
  "key2": "3GSq5eFVGbboRsHzQ5BDwXqZdMNspxXf4fPrP5FQNE2VNmTPZ8MQihKTnLKHRKAgn1bFYi8uf1vWcazXhB3zTrFp",
  "key3": "3zie8MwZibdXaDCwwfKZ1wi5kPWCsBBhbSCxrRDGnatriMjL2Q381Tt25VJ9qvciNEjCx3i7oACjrsDsQYkAXd6K",
  "key4": "nBb23uc7mkcQbvNoWwFxp9Sjnt8SvNia1kULhnFC1RsK6nwEFQC9Kq9AKAkyttjDhAemh4CjG93V6t77h4KPj3D",
  "key5": "1TU4T1eBpVzjhLJ7wvobB4aw1KpdDnfozYaA663X8fcKmrFTvrCnaefAN9GjF251okwD1anwdrA3GXidwb8oQvP",
  "key6": "3uKSPkat52LRJz948KhtdEFBN33tNkyDKUznWtstnypRZCsSYAQD1awyWCgn5ksSoSznMqU4hirwZzCU4tDc4Fag",
  "key7": "3AxnYM1YjjyM3GsP98sqSEUEhAfdkL5Vu9QbS94NTrNsEXaHj2GxTDp8Bhf1663wd79KUL43TAecRVUdVgCXafSZ",
  "key8": "2NS3MmgLm61PXhXqr7wFM9C58VGUmmgZx1dyxRnBzWcZHEKZfsjhHM917FAm5xDHLgT4XPcjC1rXhJ3xYcVDgRWT",
  "key9": "3gXZwBFLBs7wuqo2TJh2kvFUqEV6sg5DNVyn7WVTyYkkpdyEhtHYqBMawL7Df3U6zopMswXQhJST9BSZJ2XWMwF5",
  "key10": "2Kv46ZVKP8N8iqjuVGbJDfb4re7VKZTKxeRTdqnD8VBjwQKk5FCJtZRfYrfKpxwYaDtiJUKbSmf9DT9iRyxdca4C",
  "key11": "26KhJDHV7WCVUtfBwio9LUyCEvzxuNpAfcSke7p4f7Nq4ZGtLsjBwfh9ThfqJtqPxXxpHq1a4givFucwAefy4PCr",
  "key12": "5VYSUz13jPP1P6GbxeCpoQTBaJBjXJBA5e61rh9dkB1SFNfLhxBK2WiUbjPuA5u7W7XVoAp3rrLtDiPeeL47ECxa",
  "key13": "5PpuarJp5r9d65tGAu4Vf4hJydRrNyznkDthZASacKqyhZtffGSso4RMGnhWqw7pJHXqqELXBGLAgsfxDwUjw1sR",
  "key14": "2qPWUroTQhwg8PhpRKLVSX5G9dYkiAVR6aH61XhDk4dpxgvJMhW3gFYAa7D56mpWjnJFUrT298MqRRSWqFqgB3NB",
  "key15": "5AiXydqwvyYo3CZFyoEwFMnisMZgrL5ZzG4YLByuqFV6bGamMTgoPmnt9pApWyQF3jdywqYuUr5g8geKhZQ5wkLu",
  "key16": "4uja5RZ6zaUCCXvkYUog3phwNVtfy85AWqvp8GAYMgSFyQdEzqHSc7AbnzoWNhPCBFAWvs3mBFoWUZwLndKDbrtz",
  "key17": "2i44dLCHiFaZHroBjHTpLPSc1DeTwcKgcYPuDmK7fJfhwkbfn5PE3jTp4RP4g6qM5i3YMMLQFBCztWZnhS4xjJAV",
  "key18": "4QPUaBQHZyF86EGRCBJBK27emiuzkxpeCYqCMPZ1J81pjATAXTRr6vTMoRQtMXbxxw7LKbBGYKXeG9XLExRxuEg2",
  "key19": "1un4RskhyKXB6bJJ4dEmv6Dgg8pkCspzwgjTVW1scKug7N6yyLUaFD69qE2ynuf2MrejYcYhG7z2sQxfzfs9xuf",
  "key20": "511cKMkrsSPigutYvPxEYbnkDJfCC7Zu78TYYiSsDmwNNfm7CbTMo1859hf9mALT1cJ8cVnNhsLei1Psymw3gVot",
  "key21": "3Gb6aeqWDaJDjZRE36R7wWdTc9W1rbbcZ5sNDqTqVtXRpNn9C96TFNLPAHcvqsDGoJVY3mNpm9WLaTzG54SgzwRS",
  "key22": "5dZjA6nv1t4TA9197pqervriJUBphbtatnashsEAo4uC13T1NhBEar4zFaLSm2sBY5Q2PLKQ6Z2dx4aCpWo5XsEZ",
  "key23": "3BsjB6S1uBYCVShMPn1wijWZnSwHiHu5BB3M5HEGPFcfm26VAbSsB7YzeumtpjhanzAbrSY1QQ2v7FEXktVxH2MT",
  "key24": "2CtAbqAEQJt9ssckLRZXvo6wsCjFeCyqXRAbudC8t8dYjmRgn6TbAP7keH3nCTbo86KtGWq5kteQDrbLYQYiT1Fp",
  "key25": "29ZyMn4jyBJYDsa95UdNZ3vwXmcMsyg3yFK3m9uNm5A8tNXcStCsMLwG8iQr9ybPsmg1meMTeDAAVRAehBV4v1zC",
  "key26": "5eAV7s8Nf31yFeds7QAUCaJXok4zm3TUEBykvVoQxz82ciBhwXq93WJ68KnJLKnzQRpnT3ap8Z5nQB2EXkQEv236",
  "key27": "3hChdH6n4oEL6BQfqdh7XJfkN72eqwhpZgXq5s2U9FzV9uyEzWJE371s8kYV4QZhb4hYyoDTgsxnMLqxmx3XyABD",
  "key28": "496uVWg64UDPWc7RrhNvxQZEQgWwMtJBYa22unWQpsidE5x76HeiMDTgVGocopWeYbb72fp4LKF6pjUwk96bibG8",
  "key29": "2Nm2KVD88NFWQmNcSUAgT4tEuKptKWtixt8H5TsVzibVruTzCTZWsN66gEVtHV2gmxYiKtqM27ax2XscxHE6YvZ7",
  "key30": "7NWuHc6o2WYULFwHeuW17ejQR7S4dLwSj79C9GjCe8EvvEDQpYQeNX9MqrrwhoT6s2acwxj5QHQEJg9RAJS12vo",
  "key31": "EfYtZ47oiHSWK1dprVJBLUTQrsnixMgYWZ35MtEq98RcuVP25dcLDi3pmPeqYXjvoph6d81AyzoskMVMoTfZEJJ",
  "key32": "48JbHpRG32pK7uXTe46EVgdjQ9pGG7qr2WgfYxhbqgqecG1V3cvE6vDvjG3ojja4MdgMFvvZqDwbzr1JtzPCbx8n",
  "key33": "5R9cDnhisRBDvzpjZQQ5V6zLL6pfT5HyH3B89QEtnCqL2sbYWW3RkfTKGudachfQyAKSJb5gJmSZDt5F7D7rN2pT",
  "key34": "ZDFoi9FaDmAkCvJnje2NSqjkTAySXngw59btxbgv2q52LjZZVzAXrKZvmTJC9GwM2PiYxcyB9zqx1CNgik1yeED",
  "key35": "1277G4YSQdBFk4CAWhcdtUHKitG19pAWBTTppyzJm3kXdpCbSQdEhTDSgEywLXmLL6rHJrTaUvDXJE1PZxMug4Vu",
  "key36": "4UCm7z68z9Ch5a3mNFLvCK8LrWkPNERqXqTadVmMterfFKYPzpHz2QfiMuS7Vzeew8ed7Ld1qPoWoW4J7hDFg7L9",
  "key37": "4tRZwKekMXeqJavKuEp7Vv2TJXaGM7GobzcFST9uAzt6x4o3Rmew5BRVkJeHjH3aVezDGLTWUnKaSmvB4bbhiCv8",
  "key38": "VrVrmLDnSmK7rhWzkddHeH9LSja7QwSNS7u36imuenUJNiD7YG9hTtQTwN2PdRmS38AZNUijAdqRkStPbWJoY4c",
  "key39": "31gKvYBricVzy8g5J41atx57qKMrbhsefY9wvHGvJGgmuf3vacNJyLgJhtnXpmNksw83rACSbCRKF8WFwrgAQP64",
  "key40": "dtPtavvtTbHTgemJks4kZzGAkN6JVi4QWxbLjqq7pzvAagSVURx32GYgj8QBRui9Da15dzUazgnuPYgjWqPEFmS",
  "key41": "2GMuWJxe62QomLGax8R1RPqnGhgUBrLHy6SThuEj7TjMcuYT5M7YFffUNAC7qiQ3NSskXyf6sXuC5G9PnbZBWgf2",
  "key42": "tML8s724ktfXFCuiqTUqxMc5g3vebGHdugkfpfYN8dmXRg5ZK3RE2gfuKd19Bgv1sRqUiNWVQaakVaBwP1karLt",
  "key43": "2eZQjvCataBGVhsGNwHn6KLgAD9njgx8zxGzj8aG546Y8yHNG5pzmvsAnGBaSvC9e1agPYyUBMXDa4Cgw9VNMvF4"
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
