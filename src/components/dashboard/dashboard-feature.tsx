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
    "3xru36j2Vp2C28z2gEX62L9Hq213QRNkUCwmy7RJuu61UGubxirvHjrCY4a5L9YndBu6KdQNQRxaTfUUmFyfYKHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mu7qvvxT4F3SAhPzYiCFUc7W7sRVTQzPWx2RyKj3rjeJciycSsSYKvcsEvWVaiVehMmNfwcUwjS8U1hUKkusqvE",
  "key1": "26nxZzyx68cewdEY279LwhYgYXHtRBNnp8eBYBh1vAVmNR8LDPDXPsPSQjgC1cjFzGETqR1yb6aiKcnCJoG6isAJ",
  "key2": "3G1SX7f2y7b4tDuUHQt4sHNeVToqSRhkfizqCCxJaqX3JNkHmpppqd4hJEAgB2F1WmdAJB8MTcn5nkPf6LNkLGAY",
  "key3": "bFpuaAPrSe7EKMf5wu9M77MjYm7hgJkmoV8VafhkDk6DTj3beFdSZKAJMkDjVmQsrxd6geB2h4aVbWuJVykcUNj",
  "key4": "51KPt3FTH43tLXpCHAdhSLpGXxtz6aB96X9sQHrmu21c9Bt8tsMm9gh2jAjDQQ6jbohJbZTyMCcJxjPzQmB7i5R6",
  "key5": "3AefvDWgwPjqaPetLhLdSPeKaeVZGV4yoU8Tiwey7ZxXgJXP9SvmLjNHvsxv68k3fSuCEKcxyaTFVYaSdXHB9ZsD",
  "key6": "4p8UB4oo1MB8dUN9KXDNWUYuuhARqY6PE4R37SzJxkq8FchaezkSmYRBHZN2KmJkCRZJZuBq4QkhXjoiXHV8FGAq",
  "key7": "4xCZVTyzDiKarkDdNzsukycaLDhnMqnMjRreceiLstDHJJsfavVZXc98s99ErtUd2opyVqrHvFrKFrTnRTadGJpe",
  "key8": "3dEHp2g9YcdLpVNcm2QejSkQE9FnnjRRff77RwVkADkDWkA4XPeUo54X3bf2Q3UA4pD6u6tUuS1EkjhZjqh6HSB",
  "key9": "2gpLGTSwnPkx242wSfy6yqajbN1D6CCVkEHpjop54qSgs4tZgQcegcsxVGoeP42Zt3TBrkpAXq2L3dmM7vN9Y6Yw",
  "key10": "2wvcx8crd5ALTga1T9oH46uLN6NXtTZ7hGtzirpMz3gArDmwgM7uGQEP8wjBjNLemQQZEtMdupBE81eTAik1YuCu",
  "key11": "3ihWMprrouKFa32jWWCxo7ZDX7WZ9viHM5PDPGtrGLYXcAYqexzJ8Sq371jyaPFqCSQ6k2DrauF5RSemaZaRNUxn",
  "key12": "Y6xCRmEiBcAfZqTbMgzJH2ZzWiY5T1dNRbgb73rR2jDdDYLJBvPKEMaYZouSa2LiHjHxu2RQnbyP9ptqizyTXVi",
  "key13": "XoZTSvFmVZt86568ZeVyCKm2su6jZhFAqxKtHMwCGmqD6Be5UUyH9g6ZyByzyWgwnH5qyBzccj6aAin6q2F9HQK",
  "key14": "3cKBGkjBYjT1Rt9ap6BnfKnV2yyYe8TsqXeUnbBnSeC7EZoAHK9CDjjagh69GNj1bKQSuh7pDQxjUzUJE27PfpyA",
  "key15": "2p2WiiuJTB7MnFrCcvo3wfMyWB6g7LDcgKq1HaoQPtrmy65tTVAq3458DW1nMmk6jKUVc1HGRgbyeT7aoKwbsjNK",
  "key16": "3q8bPYB6abmQQsQ5RZavdQ1fiXEDrx6DYAPnZqWN8j5LSiqQn57MseRom2jkUEX1fwGMZKsJKv88DUaKSYRfX9KE",
  "key17": "5uJyj3c26DPAgPqvuyj3scMBwr9Nhf2fKEnR48gRo1p1n3q7nYcCB7YdqZJ3vhB2WUo4Z3oYg7H45bKY8Rth2Yyf",
  "key18": "5GeMSRTPuRa6fwPBbjmiuydkduBnDG4uamFzeka7C4JRVPFjK89MMMz9WwqC6mJkA5wjLDE6FnMGHnGExjb6WMb8",
  "key19": "5jmAX6DsonYzMAmtufCcQXBYqN8pWbYc585Lh7DryLbA7cKjhcrxMQGHYSfuctWsvfqq2Jm4UPWrXpPm5muxh44U",
  "key20": "5MeZT74uJDHgwbcXkcw4SjMwBVKcK13TKE8hHgSQF8HFm1YbCGBQLvYAEp4dWdFrjVAWACs9THRmd2hQSUtbC6Td",
  "key21": "3dUmB4eUnDkUZMXwPuiPnJxSut5hHAhmumZSDJzdtHa8Emuxt1MtcfhUhGPuZjRQEzt4tjHFeCNxFbSTPSA1wed9",
  "key22": "3BhJ4owMmvaMTCT352NvcbXDHYmEvbq7SLCGtocfDeqQzaFwZs3MYzLr3d1wazAn5fYhardaLR9ycRYybdzonG1r",
  "key23": "4ed1vs3vQApTbeYtQbrecQ4sLPfX9znmLCEs1cAtHbFiN1ufTgsA7zuYooUpfXQJCthoJXTCFHcqN27n5bxWa2pU",
  "key24": "33grpY5tGR9mVQemt7aYcg5MwXrxUUPHPQsqbwo3X855N3iSEAHXfkyvPVR8inixNbmpLGkv7TPd6xp8qcPvykgQ"
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
