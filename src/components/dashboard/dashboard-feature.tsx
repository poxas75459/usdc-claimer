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
    "48JsjootS4Ri3tgybxSnNM9QBYurxkdAKRTrE4rMukf9PZr1CXXkiHoyQFSy82K9nEbijsT3fAdgwSNSwEpYobdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bjBLPWyXKddmt39NsqwG7GrREs1Lz9GdkYfoVTzhWVuRo8Qri6nfFyFVoDPrCeBKXdE6nsmEGt5Enpe25Lw3Xd8",
  "key1": "5N4FtWGqJJcpR9SmqgiZY8Y3ZjRcFUZSiSSQ1CKCxsncUcoH6yB5ERcV4oCj45iYAi5YKra8iiXQumBoaucc53CQ",
  "key2": "4cv6Niq4T3CdJw7dTDJuW8G3JDSGwFUWS88Q6imvg8TDjpFhAuAuwFpqudsBdgAj2y4yDTq8eb5cDd7f6uyWMdxx",
  "key3": "3e9gUCommU9xNPcnD33FyrdCNSEb7y1Un7gSk26AreBT7CwKYN1XXvSVLvgArs7rDpu6LEG4MGEaBAq5WJ2oCdrh",
  "key4": "2zoK2dAT72DdsUmqqkBcezuvGRNvCecZ7YFtuN9sHJYyCT3ip1JtvBXtqYfr2LsB3zoUFmEzWEGmRTor1ZW4Dq4m",
  "key5": "4XSAb6onGKzwJB5gnq9BTMEJPu3pBbeiVurTqCgH2cbMKpXxQhCqtLgCXVTDZtQA6yj3CqZm7Nw5YbhJADftZwrY",
  "key6": "XxfdzZbnayjJZz33BE2yfR7szQCvqwBH7bvbUi7wAJSWTkiETCnRQewWHuahKgKyaKacsWx4pad2D7FDGyxb44h",
  "key7": "52z3h811LGYt2FUTeDZz2S7a5cYLRPTcEFABd6NrGV9EcQNc19P7wCVE9yiCGgbfASmdSUbcdUSJi4wsbLMWuGSH",
  "key8": "5z58pQY2PhEnz6sqzWBdwvHSCVPHiEQh2MgQfyyfpBJ7dWFmZBC3PsWKjPkHpbd8YQmohDXTZhQLTj5sbPw3kPgi",
  "key9": "2bfd9L2jvzjy3i3d3LHCh8bSAWDQBjFEfsRUD6gttKrmaqajwBZzgJUJLYA3rPdP2TRFt5q5qBziCf7g3K3LJ4yZ",
  "key10": "R2YaK1A2QM8QQwAKjKdakWUvmyRYMcQX7EEhZi7W5SMvbLi3AAgXmW4Kc1GwUFiM7cyH1tkFuTN19ZE1jhuHtLK",
  "key11": "48S7NBYWGcyKDPL6qfKVGWwyrdprNePAACRryg5QiC9FYtm2jmsL8c5ayxBJY1Ks6ytXAN1ju8HHa1LZiREcLyN3",
  "key12": "337PehfZVqrTRyG6BnsNuUnUkCw6fDd75YLCHHXG4M9YKb3dkhFqAixgpqpEmP9pdivUfmCE79yb2Fqk9rWELcHQ",
  "key13": "5J8FCGedmZ1WLqvYwkpiFojAKMydZxDSua6B5EerrXG4dxePj4Jx8Tc5PU96ZKjgJE2N2oxtDrJTgnKJ5wE9Bn2m",
  "key14": "2txqzJSSbEsyi7H9Kq4NnT3uy9o8sugz6Xass4hMqfiyZprZgLmzeKJkX8yk83Cvtwg3sEGdZAHgo9tJbuLX9Uvy",
  "key15": "4HP4EdD7DD3Y6smnZnCSF5AfYhd2T6d97JtQs8cSGM1rygjjxnL1jmL6bz9JMAEPrhCfLUjjTgsZKSi7Bc6REGTz",
  "key16": "3LU77zvY7tAvgBgZBXcD9aZ1Cr9rWwSFVXbkKPRuy1L6cqQuEWL8vztwwv6wEUV1PbSReySxzmiisvMg2v4uVtJo",
  "key17": "4Jipgw8iE9z9zmHS8HF383PSpYtVdHNsSjzLwdbrHrM37MYDCrWkhchoRCdv8si9DFdky6y7bVqzGS3JLsThNp1F",
  "key18": "2Syot6muEoHa56UvhfKDGDitqhoYTvopCCrH5m2KoMNvudcWBXy35hqgRxppHia4F2ow53ied6K4sWeh1riKJt4X",
  "key19": "GikeQcCv1jPsxM9ZVvF3SWG1CgrjTazaeyq2xXpA5HZgW6DTwkhrBbURwTwhJLers9ZZnZKTRVMCd11gEZS5mVu",
  "key20": "23Dgyyx1fpUMazFpPe9qofrBXDk1bXXyzK3ZyVRdatyb59MgGBvzncdXFTNozVY5CBspEZorNgug3FU4NuRG6Js5",
  "key21": "598n1vvA3gTtkb5q7F4tD4PyMejcuW1rE61Zms8D2MggWhXmdXSXmWue1BuS1cetk4zKBdcXVhc4wt5A4931uAzf",
  "key22": "63pX7Ao2P6irzMcwMjLYweNRbAEpZM8zBKVi7hBv7zM4qWpNsiN3zuEA3VvEduhQZgqawetzkAccbK6dpxh3pCGt",
  "key23": "ukJp7vvLWP87yA5SsRw3RPhjB9yBefbLMT2WeUe84hSbbqPNhL3VzXxT74MiEX6QaZtxg1Kb9tqZSyPfHHrjGe5",
  "key24": "3kUDF9DGDjYT3Z8enJsTw3G8o6t395k1kS2U7rChApwnJkD29ArZ3Qou2ZfZzfn3ZbKCd4uupiUcwNGHiP7FfLgU",
  "key25": "5Rwb6XxpA4g63LifWjoYMzuaovmz4W7yVRwjkrQpByMXMuVunoyKbniXbSNN36R3EnzoQTaBusGhP4DPRAW5nw1s",
  "key26": "3wy6FRV8kD6uT8iGFLnYv9voywqK2TNr3RLKMkK7xHgD4CW3xEHAaBKFGSChAPhZyqfTYjsw5WiZRJfGjevndW8p",
  "key27": "5h9EAPVVrGhrrSrEakBxzP2ciZ3uyU31YXMAvBDfkdT7Lvs8bpfYMXYLxPp1n5bNWmGKq7QfCPvrXdcjMgxVyNkF"
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
