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
    "4VU4ZSTQ34fMb8M7r4tz2nL7K3ueynCYGfvpjF2MPvbbtESUXextf2hLNscnXZkSJaGfFnDwC4LCwpN7yg3Sg4nK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xsiRxDcFFg3Niz9M8Wkd34aH7iCntui6T6Jr33hDGwiKumLY9c9KXFzgNgP8ZUCV2zFTrfCPiv9xCBHZUzRVjgA",
  "key1": "3xhherwsiR9kBv2Ks8SQfGNVhYgTQf3XxD5k59ziLhXDmwWcnLWzmdJW75yC4MyXDzFJi5mShuwcMR3E9ezbgfLR",
  "key2": "2HWWhbVpNtuXUBDtue6kQzRtJeeKLvFotfSfBYBndqYUTYQJP3AW8zB3HJ5PM7sVkXgh6Vpqc1PfrFXCLWQ4GzNJ",
  "key3": "2ksPLDWd32PEBsjZUXGZzuMXAWzgxVn4T3gJaaDu1nxRNQA6eZfGnDjDWNAeDQKRznUWCUo4zJB5birQBBF7Ea2c",
  "key4": "2NXun93L3KpexXfp1uTRFLtsYZTtPu6xFihcrLHwUcmyBHcbSZ4koVhASUgznggfn1XoarMfdVPQnwJfAeweskP2",
  "key5": "zQVK22sSFmD3n6aM1XtpHCejiyLG1o9YrpRWZwL97yiXcjEJswXQbgj8JR6DoZYEaSsHcH8LFnwZ1cRVz8PYwpM",
  "key6": "3syE61oxYSPfc5RxzZb6nSdBdhbhYShLNqtjnTxtu9vFKP7r3WvJ1rwPoW38PQmYvD1jp4AYRvs15opGnKiJmfm",
  "key7": "5UYeZCWw3XZz9QoHoqgAeVJaoCEw8eX8rnrbFbzFox2tPf6ndNudaeaLzBEiw8kAWHwLVbQpbZfaM3k9XCmRxupg",
  "key8": "3qVoTZ8VEQXJrC7CB4shQP9GAUWp7kkHwdbFBSxtqAARaAo6hoJ55R5sraqK5sfAF6JvCcxa4nfzTy3GwksRm7TB",
  "key9": "5nQrzcRBPSDeZGvms7fYJ9fnuBTSeYSoQxwsEgQeUMDjJCDzzv9Agt2ohCxSWmDm6aaLuQdr75ZHWZCwJMAq4wxS",
  "key10": "5iJBigiVae9odGVZc9eGKE1a7ujbeUoycr4YVygh14Uf9nxS77GGvtGJFMApXSJY4DR9q3KP3nVadYeiYbtNiKP4",
  "key11": "3v7SCiFZ1eFiAYyGzDQazTcJwztj3kJbY9U2pLyPGdwZXSMA2q8viAg9FHU95vUnLJHNHbZbEp43DnDuzpNfx39U",
  "key12": "ccL8dGyoqVajWxgJqWZ2esvX46Ts4WthtC2BoSR3NoACSN9cp7rA3SF9ocdUpJzaVEJiL6NibdSDk7fVHRjdztN",
  "key13": "5HBQRsiqw26fFNPA8wN6YcL1TiwdyE5ebNhXFteUvwLF7Nqb4BCqyGbzPpaVxdyZFkFKyreiyxdFWP8t2dmEPgoN",
  "key14": "4wCNPoJ8zFKJRmpczHUHnVLtqpraVCsxx62p3a4bvgay1Uxs3F1Cb2g6SKaYKAXxaH99oEqEvDhWPtX9FoC1LtCq",
  "key15": "49a9ycyr2aU8NvGToRZHznuZqquHNJAfMD4jYxPM4XsGszAvoeSW98BavBwR4Ne2DErrfAa72DHhD29Fzgp123HR",
  "key16": "br9vFjXBC8WjADSQDDqtPurRKm7ANCH8GCMin3mcW3UWAEAU6UVHfHw9X5u9zgKaHb7cX9duuhovrqCXrhmdzaX",
  "key17": "2yB9aw1bSeZQ8M3CcMyUqkZSdXmm6eVzJfrb6iix5zRW2QAQkfJ5dXZKjwjQEh7UxByjDmE2MsTXFTDxZkbH7dsC",
  "key18": "3UCyH52wu7A6VuAPxS6uuSMjFbhoF4bgTkMCbeiFMuFW1qtTBiGEQafSzpRrVwC9EKgBifgLy5ZMvEE5k4krFLyb",
  "key19": "56GVxTwAwq9RbEpf1qT7fytdYfxoYJNoacx2kWHSWfaxViVjLdnLAh5QjGKUHjusKDXAaZKDbCMTqcPbPfKK84vs",
  "key20": "2qPQne4AkvswALtXFuhDf4vZW9J9dc4vHy8UEYXbewY2LVhuLdizWouzAYbnA6PLSrWB7WByoLbio3tbXkzqmF1i",
  "key21": "5x33wKEtRkMKHZ4TSb8rcP6RC3gwznk1HaKrL3rkFYcgwJvygRAAEEtUxWZiLqDYbgZy83wSKaQVdHpPJ5RymLbW",
  "key22": "2dyQo4VpHG4yVt731EYNcGyfHfYRAgdAbmY7DVFNokrVYqUtLBkbCiFQR7mFkr4SFFRdHpY1mxed7EpbYc6iFpZi",
  "key23": "mPwN5fdA2JcuMy2wBieztGMvvnF4D7PnvYuBFHFZkiSpVHB6PTw4npLaEe6p44ZpwYfmDAB23Z3hUAxJyQensTB",
  "key24": "2uDSUvTcwDJNyVLsd4oEPy96YzHhY7DqrWPvi7R7QJMCgboXzXmLVLmtJqMjrAgmKNzXN7agTqQATdNu6ufguUuV"
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
