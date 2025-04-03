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
    "43YRdYJTUoWewmW94U2wPncSYqbQaMz6BHrdBBuxkBKvu1LkLo8hxne1m1XFfi3fehCQVeGy2ks9aHNx9CB2WJtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kvvW9oSzcWCm8BSVz3LvFwmktXqetWKPVgwaTH1TDPkbGWMaKsA3tQLyM9oUBdwjEPY4T2e11Gd6FuxE21XixuE",
  "key1": "4Ks4KhrZzaLtJEjpW6GCQrB3myLGH8Tpj9qpQnQpGVp3e3mkthdpj3hU7NG4wN83VovHaZH1d2Q9fm4vJ5JdTQTs",
  "key2": "2AWUit2LSqwpX7SDn8pfnr5n5DJzXuq1NN7aTc4M1nwGWQ1D7uHxLLGkrTwxRbTct1xG1W4sVmqYbggob3ET1wKf",
  "key3": "4xQMLQzVPUMXPvqcMK6kvF8n5oGBpCRppYUKFPktpc2WSM9e5hXRFBwC9bGFsrWYsDXqwMtxnkB4B5sGfWMo3kqZ",
  "key4": "2VMfQEKmRYZQqM8XBkCBmrKXm5pmtkMAwyZSyYW6518EEB9bJzzdxXtRoVi2PK9z8EhrwXb2MF1jNJNYBkzoEFGb",
  "key5": "53Mgygqsza7JJ5DZj9YcehWPF9RJ63tLJm5H3NCMYn1KRsUAHHZDMdpzCJdtFxtAss8YkSGzK69QUYNoKHjMimzH",
  "key6": "4euvh4Xuiahwi5V2Y12sypA8XS983zPo9feQhqe19PLHNgzqkxTDqa8jXmHq5i7DdoboXu5snfd56fcFj8n5XBqY",
  "key7": "5Sv9mrSgkof5wkwTpzo7zVfSCuCMiSaprHFWN6FDMDyZowRt4scaTL88MDAzNNwRRdWPUQ8LMaQsvxYohwV3crzC",
  "key8": "2dqcR5pkcsfdvmjsZDV1pbNrinwWWWZKfVbAJz7t1F4Vymai5y7k3kxPYgKZqorH9BZP2QfXZNTXUND5EHwxRpeA",
  "key9": "5Drh5cvANBxwkoMaBAeSfa5524j3PML9vAuKmijEJXdhj8J12hL5zg1CvtU3xCmf5jediX39AUNHjcbxqNjSsWCt",
  "key10": "5Wt4bHXxPuPcrp2qTftF8KmGtGP2h2zJtHQnnfWDkTgaNFJKDukPuTZRhfUoiL4QgkkvhuwsC7LdrMsqjFsiiNpo",
  "key11": "3MxL4T6ph7crYsvk1GYRkg1h78xGJhFfvgL3hknJAEL2K9xo2efiy8LHYBuV51QAW77sVsKwdd95S8mrTR1CFpkB",
  "key12": "3uAF4ibyGJz6veBNDvJR64JhY46GpLEV3XtDxcLcTWBsU4mit55VcHzukr1Tuv1bmWZBmUUmqq8dv5KMVp8MDJiP",
  "key13": "46WboD34KUgQr5p8SsReauu2NUxQHUAEzCDJgKPDG1H8AQjL8RCzqyvdW2S6PmB9VdgYSuETFNgsfpcLjzZ6giZU",
  "key14": "5Qs2HkzAjCsgGTSierCZ3Z5EMLRSqExoGeFtJAYLgM3JPvC8uTLzG6L5mSfkSHgAXy5Qzh8WFVM74S12koycJHE3",
  "key15": "GCekUp1mvigXAAX7JRU3r88ZcY1pvy7sCNznzzCRKcLQCMdKBtBD53SLAJHqQmstaE8b5mFJ5YgxXB541xYJPHe",
  "key16": "3WJpEvjt2C3GVk3SFztEvZwUvE4LouqLnf4aN1f72JqxG4uJeFxSMzpGgZEb393EkjddkQQ8xBgR1qgEXMSxUboP",
  "key17": "5icmvS2hopEUJBrstyY33AxETps3oirQ8iSDUkv9cgJB9RW9pnCdg9EeTLypUCuonL9c8LFHrGA7H6Uh3GaJTSZT",
  "key18": "52iJ6AFmTv4taXHyLH8WKiqDNNc9VHTijkU5azJzeZPBpFWqzNPkeXNhvZREL9sb8YqhmaLJnFN2oY3B9HqvCd4Z",
  "key19": "13WpJsBYxj2f3PmW8xSysMjNNgxYBLEWVbYjv71oxmuyPKNV3k5Ny2DQfE7K8WwmNHN7XRtSE7GHzFnY3MUz6S7",
  "key20": "2RkUQoPX8LcsksYBax8tqYLC4JB79FBv2UUxtr3i5rMWggPpWbKmDmYJWLiKqqzufD2DwsFRc2HUmvX3g5de2qdY",
  "key21": "3qkDKCH5YTmbVp7WvFxerprdJtYpJxEGGh8mC4M9x42G5AhR8EMgUmHVEV4TETtL71H4mdSWnB5yFeQje7cE8k2x",
  "key22": "5AeP6rXzFBLADV1U9fMkTh3CbzqMNwjFWtZR2pqqU257mErP46mZ2i4T6WPn25E23NkuTubCXzzzHDWeVEHJUE4J",
  "key23": "2Cjt5tRKEShq5doSFF9x3b9tvtYJ8L3VVFDnDf92X7fUaSzpsKKvyCSVt8Hh8BYp9M6WWy2cnpYRq2KyYCTYq1zY",
  "key24": "4QEDvqKDUa1Y6vtZvz5iBLi9UwuRFu2yx6ZLH4TxeKXvobS5bYeiJ6fFSauLCqubnySC3KZpxbVdf9S6B9p5osqp",
  "key25": "4mgCKuFntu3fzHDoGWi24t6GRLBC5ciiiY1S6TNhk8TA4srmrzgkhsJxMsVsgzFGNvaom82ebN5ifWtrgHm1cwDs",
  "key26": "5f5EVNZDXpvfxHkZUfHTwhtBBtMVVDpYkqZp9FYd6iS5pqNm7pK4Zd8XVZad2UDBUPv9GgZmCJrd29xt4pEskgD1",
  "key27": "2rRgp2MCkGqBb7oQeBC4srhL1bKJ74UdhsSSXCefmimEB9dKRPy4j7mbexqKiJqSUmqmWVVPteP5AJLeo4BnkJRF"
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
