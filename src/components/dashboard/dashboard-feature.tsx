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
    "3r1btwME3kGcJWz4qLxkHBVCpeTf9aDwHHMQurEdcSLv7KQf61PXuksrBWyZCKWK7oZrJ2UCMdze9F7Zbyrk9Amy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QJVLDhrjEwp18fhwxpGP7JTACR4u5BfA3KC2d4Xc9xGUt8gNJVC2i9Nmo1hFumGskkJN9q1Ku7zRBtEvM1LHFHq",
  "key1": "32FMP99tinDmJZUtV7GjMKQF4KFnaL8FfMGaU9Keh2PXWFXS9nd45avvhk4KrDLLVanB6jfETbYLR5QzhMUm163L",
  "key2": "2zvewDxnYt6Hk1iPoRd1H6wWne73ogro8fh9Xeship1VkJchcQge1QtfxaTDyzmgtLnWNz42W9g6MmtyLjBq2RkP",
  "key3": "4TuuJYUHsDnVMXXNLUwFtjLJvUkatGhxWeGg3NAfbB3eM6ycoF2TnTReAj95LwUFWNnsQP7YoWXVaj4hrLkGUpm5",
  "key4": "3pr5wbi2U8tRkFkFZCeNXTL6BMaHzQiQStQ4PCtUL5HXx8mpAgENYgkxtzXgzMaENovBpuT4o7j2H3RkaJgFMUEV",
  "key5": "4FpzJ3rQbWkKArT3C4BUgFQRrTEkspR8rLYLAba4qPDfhKgGJWGQfuC9r5fFGeEfXokxoNfP28LcKMxm7V9nAv1k",
  "key6": "2hCUVWA1UrCqWFfs1hZ9dtoDzfRAkAW1cVtEYNSiNr89NZf76Lk1ftL1WYq7vKYKuxsAYRDFtY6ZETbJP4Mw9qY9",
  "key7": "4Xgc1UJaDpQhXfJeHPNgtJRBqWW53T74rWTjLA8RMqiJHdarkc3krETuKrxjpb9paXY7BqrU1Ngcq4BbVnSJ2ogE",
  "key8": "2Xq3jZcW5ZuKDZxxYs9FUfq1Z9iFP5PFqvCq7d8U53mHNoPxqUKwww76rJfrMcxqgpXeGWgWxJDLz3PXZKZzxEFR",
  "key9": "5x9bRkjGs1WXPcjQiNbzASwBncHqg6zroqmVdZSc6Apng12erunXaUFGTZTaKeuUSseKDV8k2C7dmKRM9zpQfJ7o",
  "key10": "2ypaQtRsNvPt6dZHASJP8dXouQ74N1zem5nzEumAnWt62PVWyti5ti8pZuiSP9RivBjjkEhaBEx8TzkusHs2Rp4W",
  "key11": "3DtF512wTmSWCG7nhDGABn6kACsfRHS8S9etFmtLeam9anW1iX123fsMAa62cLc9WPpgCCyAMKFJ6tyFAaBNdWzU",
  "key12": "5RJacjSBcFkYdDZiuRXhAKp9zXi1vo7PR6LYtxTxJFBSjWZt5PrqwErx4aSJxmBXwsPiavR9WAw3dZmwJqD3EAUs",
  "key13": "2wE8sRiaoYCic4nYLK5QKQge2CGFi9z1aWks4LmEAZwP3HZrx6EyVEYnpMZ1FtgPuKR6dS4EEBgcSZvGY2EBkktR",
  "key14": "5Q132E5LpAMCb3fvL4rDT1oeSxm893P3Eu1fq6WqCSVAb2kgFq5F47rPx6aW38RN2fPFrje3ZuZWoLxZX7XPGfTA",
  "key15": "2jBbkwivJdKjakH3wTktbphgDwi1hTWgGsmueAwFPy9Ky9v7vjngrDbkP1xcGAHUT9bwQ2cRmrHpP3ThikTnV8Vr",
  "key16": "5S5bZPtmtjz2ejfRb1q6khmrUMoSRhxyV6eikf8e4khzZnxv5B6eisgbQzU3NmVfg4h1KAdTaWBUdt9ugbxHVSGm",
  "key17": "GAjpEhNtqDNrzXyLMW6FEfLdbx2SMSBG5WLxNPiNu4hkiSJMVTx1J48s6DNqmfKkdNMd3ugwVGXfhMGh8MxT3gV",
  "key18": "3ntPthXYbtuy727KRF91zkfki9HWVVSx3AFH9KT8sDAPBV5Wihw9UVranHzJpGmVfmDhNFER21vo7nLhWgeB3xCj",
  "key19": "5YYXz8Uh13eEzkYzZVXyWUMZgJKy5KjZ1zdjBzPWxw7baNRJchSttqtp2kXRRinNRp949cw6JjfGP2dWgu617AZ3",
  "key20": "55DeP9V7gwmjAiVk8fRsa82VKHbVgDPiB496FMTKsSce7tL687HgYnvZkzJmNQUyKn1Gz41UwTrLTq8yUvCsk1Xf",
  "key21": "3YQRSKgPMkGRnvyiUnqpoSVB4e1JBUjPzokGqn9booGMMApJktFEvwuCdFvDS9dUPvYWZdWBR5fjgFgTSHpSo95C",
  "key22": "3h46FhMwShx5dijocFEFKJhaqSjqJV2q2ZXdUyBztnrGp8N28oU8jcGrYtjBptpnLEwNS9SFJeV3JZ78rQRbFvhS",
  "key23": "4eE8sqRYNGDUiqpYSsKfyutL7mssP1GVMg2crEn8nmA7uyitBeeN4DbP68bt3zQ36m44SsCxuGodWdn55uKQ8aiX",
  "key24": "jXtMbdzUy3xdfrzbQ2K5KpadomiUqZ6AgMP5KnnyEMzf29PJ59D5VGCiw1mzMTnVSh5p4qubS79jTUwtWPiyNcX",
  "key25": "5ysiRDYgFzMn7tUsotzZTZjvZtSUnWv45Mo95G2VumZDkxMYBihV1fxAZgPUWQ26cDeJ2hvAEAkh18UZ7T1Zg2LE",
  "key26": "4MYyfMYvQoMKY8fmdi8DHoY7w9pCGNKwtecfXYCCF7W7b1jkTFM2YFQw9disiSddmwbnGtD34Yp1Q6WDBdmg4bby"
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
