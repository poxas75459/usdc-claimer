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
    "sACASJoAmNnNvwxNFKDrSfVZ5HQDudQ6P1xVpjVXXbNc7hqMfCEnHrNfpzriraEczp2FP8VUKYJ2LJNqxycvWTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53oQdQC4V528TbMKxerS8ZcD97PdzNH6GgPck4He6wKqqZGuonCdy1cHTCGmep53bSNn3xjQJcUx9fGYwNJ3MKqr",
  "key1": "4G1J12pFoUJXHpTR68ppedHjS1n2XWEGoCUJfuYAr9a9sg4pNriukTBeghCjucc989f7GHwLa1nVLyJpBo4GcHhj",
  "key2": "2pVigzHWvMyBBF4Ada7w7pDNKmTUKMjmrhjGK3ywhhNC5f12z24YWk3B7ggPdxV532xXe4xhfcF3wEdD19nspgiJ",
  "key3": "5EDcH58GiW2Wnsm9c3s2sRG9Rv4TTPXWnYrypevZwvuCFkbRWDFntbisQLkFboFVZR2uH35F8nMFZSxYVaLTnqed",
  "key4": "MYBawfdX3hYcHG7seF1oq6DqUfzbHCY2KVz3muLRGPuYGCfQvmwWdoS2Hq6jRDcYJH48DHkWp2EyhakVxQAYe4a",
  "key5": "5ah1HNQk18YtkQ1gztXtDSURmgfVUwkkzppqYF6Bn3FzimL15kg5jVUSdXb2mgfUkxGDjcgq3nxCFrqfw81gC8PB",
  "key6": "3dpEFfN4kwj7s2M2ahnzG2QrmeCkjwDtcuumRKMQLh7zrtq68N9dsoGKruWbbChz18DbBKckM4TzRx786xG9vG1p",
  "key7": "65PXWAFLkDWN5Frc4G1SpdHrZV9NKEak6g33moCeouSj4CSkpBBWMF9Jxp85KVqCkDiBqS5wmRxb8Pd67VrgoY4H",
  "key8": "4xjXCe4wemrcRXTMvEdt8pdJFKHwujNtYEHVUGfumXjzJLfMA1WXHJKncgkYFEDq2N8hkP3hFMHfziXphcF5KvHy",
  "key9": "C2nSNgvqXHfU7mnDNNJQUesqFerhx8vMcEVx39cDzFFBVRoXmFRUAwr7NNzy397nsR2sZxe9xbYeb69bZmoMRcG",
  "key10": "4VUwvDjszJgJnnWPQxb8vn5JYNjPHMyHcYaonH3KYG8hy8P3CgKuZG5gquEsgT1VJvbQAaaMv92coTDX4x8VNwee",
  "key11": "EoQn5648t9y9nS4ve5B53fTbqmvdAZ8YucWWowj4tx3WEYZEQPmxUBKefZMFGnJk9FZ6jhGWgwkPfNz7hUnjBHt",
  "key12": "6ubZUAmrZ8RcLXTbGYqknxz1uzeTkcvaHEHtdbozTUuM6qCz5ttcmsyTESDHVwQYho3bDqGEMs3Eb4T6PrVHcQn",
  "key13": "53VtryVnL4q8EfyYBRrMMaZhnXsM6JTqmZb2ovosNmXDKmrvP5vSY9wghhTsPg9G2ak3BcriTsPDPwrN4xW34wRZ",
  "key14": "2WXdLqtpjvbbRdX9aktSkzaD5ya6BFn2X5v6vZkEYeeb77i4ptDfiFDrXmqddPqtVWV9r2zbTTfnf1Kxhvq7yu87",
  "key15": "5jk3z46qnGSWrpi5cMtDumHPm5NMS12MN5vMvgeS6vgK1J1rJyPfkkswdc2xWQRB8cnMW6hwZhw7jLnjgRsBQK7M",
  "key16": "2M5etSEn5weCBMqCsfmdiNZ6eL9gyQaS1nBSbWioYnbCGyoipDh6k6nRBs1WgDTcRVoK71FHJgGrWEs6k4ZEkvAQ",
  "key17": "3oboK4Tm3B95CbSPfwPx8rmFB1qGoLUJto9kCtQsJALDPFJNfHoBJYEGSYpHzU7MJFDMDRMCD4TeSVSap77uUGRq",
  "key18": "2PLYLRC2b6dfy5LPVVfm1G3F1bg36PRLdskz71VLPj3ZLiPQxACz6e8BTqmPmPihN7kfvMFkGwd9oC8SvzLEZAPq",
  "key19": "5KDXnGCDqUSBCH7v5EHzQqivmPwbA8JQ75LhXbK3ouJzkyAw8nEophnYEnkHUQWocQMHDsirMUKZVSp17T4CyZiJ",
  "key20": "3jnLqVVXuY6wTrc5PzmEH9DdLJWM3czCsBWjLe3pxdPtzjCobpNvjJAQb3cyciUhfJhDj9SRwsqVJJ6kd1ksf2VG",
  "key21": "4TEm1DGDddVEWNNiwxzuLw1ZVd9sEyAzQtr2cTumqhgnXEd4xv8hb79ty9ZjhuwjR8dHsRkD5pdTrHk7JhYvi5q4",
  "key22": "4ZM6Kvuj8uuprjFhTevFsbtW4shJZB7ABFE2MEXVsZoLBdSuZ3RMbXvatS1HSSNHd9A8DKbT7CN8TwRuZKbfytgD",
  "key23": "5PXkffAMiBVSExRphtaGHLL7afH2Gk2mhc117vsmK46TxBKHVQMg34VXmoeTU4RqtVEWyhBioH4Ga3pugC1NbA1C",
  "key24": "2MKC6zZWYG59hEQxRhTysRBkegJM9rpVPDejgzBqvR9j7X7WzBEafhCMLfhLjzdK1T51LTTG3w2tUYkacWXsa3wC",
  "key25": "2B5azxbAFU8x8tJNx9iySoSN98zyvsiTtFpjDftVsuyQrFjwhvoL7fhWDuhs6Vbh5sgFY8kmvxCof3jJHYgean7a",
  "key26": "66if528gFzr7kb3cXmMfJerXkpr1qqduH1KpzYUbSrFw8eiG5qEJXZQ7jZnHeQ4myapybzomxQTQdyfSAsofntJ3"
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
