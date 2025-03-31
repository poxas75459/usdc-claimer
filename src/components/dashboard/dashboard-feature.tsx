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
    "3JGDZs41PuG7sqnkFyT1B11Xy8kQNKD7XDnw3Lo21i7BTbXksLRUFxw4t3wmRqupXvGPYMFXH6j5VehLngXLghaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61HMRtxAyJzYj9ChSmzVk4aKhHLPX58ZnEv4VkPLtJro3pgsJqPZJhxTv9fnTmT2tYrGbdafTW8RfVcw5ikzUpW4",
  "key1": "CY6byCDB2C2LyCTBGdb6nnozMFWP1T16T8VY2QT4S5UWFKuAkRgQNebj5dtbs9fyUJXTSAidQ3eJERTQvdfSsxh",
  "key2": "37iZpPTSSFKGNrAUM1JpmC2gwL5D74RXwMRbLiJWXr3cjtNVZEP8fEBofnRoVqywr1HyAzfUJUgntqBXnXAoRLGM",
  "key3": "54z459gnXL3FA6bvGQpjQJosS8FKhopiKxYMF1jGqHjZ4nbsv3EmY7zPMmsm2CAi4LcLeYwJ3wtD2L7mPP7t4ntv",
  "key4": "4BEyyeXS9gTktGNEg1k4eTpqd36nEu9GWVsMCFpEvyv71FpCVPb6UGT3d5h2w2en3sCim2DTqSan1Mn3ug2wg1Sv",
  "key5": "3AFp8zMjqxBqmJKQDZeqrBM19pGdM4qVc63FMz7QDomhiHsu8uqDwkVhTkYCgJg83QRcc7ouYwzj9H42rwJ8jung",
  "key6": "GjeJv4J9zYUbH5TxpPDSN8uMQnSTecXsByhiupMbBK41yZxJUn9S7dAWXcBubyvDwjjsFUVgvEydW1d62zMMYXs",
  "key7": "2hTtF2sUVKQoJmfHLzA16J2oHMbB1ZscSeg74F8EiAXgAAf7vFqR2n1QLAiyZ7UQz12bLTKuMuKzoi9xKmjhefNJ",
  "key8": "2bRQ4VGZW9E1F3oWnU3C6dfxNCNaSnN4NZLAVcX1KbAJoPFHJtgL1W9YJzgkqmq2oeap6BkPsSPFfgUmaCXE1WGq",
  "key9": "5Vo162U9rvYQnZbSZEp2n4ekxM1reB4LgWWj4AsNSX6UTet6DmzX41hhfVYTEJ1GVtNAByKs5rJ1wnwvupyqJP4U",
  "key10": "3o2ckwRvZ8HREHa8un32KwVP1tWRb1kphvjZGU29BNefiaXdaZ2EcaRDTwf81MRFeXXfs1Tcy4s7QcQKMWUgR6nk",
  "key11": "3Tkj8LW95GTMEc3sagEMP9bh4xeKd3hRPfgHraWkXpHaTfuAG7QEskV7qUzpc2Xte6tyh2NeRLiztbFQpTFxrWyn",
  "key12": "7JidDv6s3fiarjEC3L2t54JEkPLgLd11CA7vHoY6jzhtndi768wDwszvgat4kPH4hhD4zR1oWJTmS8ZtbGzVezb",
  "key13": "3dWFf3gMPHm93ppv76u6W916MTUkhKP1r8urFbDHaC1aZptxqsgcnNsR9twePovXoQZNmjhC2MHLFHE5aNLExJFH",
  "key14": "3spSVLxyi2BfuDTH6ZfRsDWt7AVwyAjRHfQF4VcbCP6znfNG4StVJHkTiVrvsvZ3Zq6uizWfGg4XBbeRfaKnUVHa",
  "key15": "2MY5nbwQwV5NwYK2YDhdNEfXTcWKWBzE3WFeLUTggX8jpJxmPMsX3FkF2WSC6WnR3JuWaaR43wPT9Byv8jF1AGwF",
  "key16": "3r3JsayqUcgTyJqAj4qjVSGnnh3Hz5c5N16mf13siNoFuktJJdxpzYHdxvTeotU7a21PVs8NWS76NBdzkWZ5xdcg",
  "key17": "mw7EdzVGrxKyNjnXga6vu9UTyXaknJvPSqoGpXcxSH8EfFXYnMPBAKHUAR9CHNbFv6iQjNV5wJLQm8F74h7SxF5",
  "key18": "2simKGMfutZxAA4NED5T7XUzWkVX9zb9VVA2zpyMfmEKcFbUJQ7JEdbUowWAyMKxqpVpzvxNsbwZcNqQZqHXcJjN",
  "key19": "3Vvh9i7YSqjB19j6BzQrb3NUh6Ej856HC9FSw9S8pDDxpLrLBrA7JGnBf94eqabjy3j5oZGDpbsNKLvAhiX1h3bJ",
  "key20": "4ebJYyCsRM5rXgt3ZNF4U5LX6SEQisjWnzBS6T6iYBcTahKEcGjc8cHChZxtUcG2MG4yHQyjMWL3nfQu3XmAGhAX",
  "key21": "4kGJfXGXM6sW1aYdKHo5cxiWkE1n9YhyJXjMhKe9mAXhafGXHZhu8wCsVUbUfne9r7UPzb73qChsgLpWAggcM2Er",
  "key22": "67WQD1fjGpoM5v8kaKjDd1kHFaLP1zs5YJYjBxVHtteK9GUeFbjpz2T5398xDzejswx5j992ZGWNPe4hnjEJZUkP",
  "key23": "zuaKdCDyAwcrzoLJ5pYkQu62Gj7hTfLDBtNcMCp48C2v273uHG2yU9H9FNmJH2mCy2CoZ142zLZ1GjuicFRjkBh",
  "key24": "6UctVnasaa11x4Uhzs2WKWwofs7zAEpTYgYV2ZAjXU4ndt5RWCzMFCmjmpCXhQoyTyALJAofQrDtp7xrThicqzE",
  "key25": "sKuXVPxyNbE3PHFM9ELtDMnSxhUQ2x8n3gTsZLSJMbYnx1FBQiwcE2kBA3a92976gcZin4u2p9RDPGX7yrgdQzC",
  "key26": "YC6fGLzbbCLvBLuPbLfheMkGd7Cu15PfvJoNnAEAXVxog28ovXh2Jgo9C3ygSkoB4TJd71jcfFvXkRYz9NM6pXw",
  "key27": "mkH43Kj6sKKW2sNYD3Hihd4v5sFxHFuXr4AabCpyvNXuenLPE4ocQPCc7NnLENcCarzZqeG1c8LLzxdxSwft6dk",
  "key28": "4oQDyDEDfiiekmPrcwmNWeRdYAUEMN7WnxswtXpfZH56z9w7dprRXt2WJyAQoVHcjDCK5NNHjnV92me8U6Uzb6MN"
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
