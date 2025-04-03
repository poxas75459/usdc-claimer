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
    "4Z8FLWxgKuHR4zEkQw9ECwK16bYuMAGEUfGuygLJKLpKVLZbgXraXNmzC6mtxgGFCGBFutwAyGkhvejgPJrzXaXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A7nbGXQBNAy9uN445YMFvGB2ZZSnJ7z3YXQZoSYeW4EhpXgCEzxc3pz3pM1q9rq7zzAFGuMuQ2nguuZ2jZMqBq9",
  "key1": "56kfTf1nD362msatAc3DKtCxK2gAxZWUAovRpAqbmMQw8tErBtrEo6GE4cnkhpCL6vnt3WPDYRTycSuFATPdMGpa",
  "key2": "3JSePbtBT1bg5NBQWy6egXWQa6T2szCfXsEP5cXhxcB8qtwk8vfjzvH4vABMLaXp6tVdenu9qeJZyVJXi1aMxb3g",
  "key3": "4EsciJEYFFgnwPjuDBcrxY8mXfFbZH6YDiQfAPobLrfAA4csFUqCbzHFSUAjv5L9sqe1j15JDpqFTbnVg9qsDH77",
  "key4": "3U1CoCTBJjfZsyMWcnUVQr1Mvd1yF6rEAhkH5bGvqAAz5cKGAmW9Rbrp1xtU8k5QHCaAwJra1kfrTGZtnVRBT1Hu",
  "key5": "3PVoUe7PueJEc2BDfwEWptp3SPz2EabWaMSMuRECMfaupjWa3uTaWGZF9CvpgzhbMqteFGJML6YaS177nP9MApxp",
  "key6": "3JMTdnvSq9FPhPWE4EzLu4pYaWJHfuWWKSZ9w2U31byQG2vtCPbcMnytCwLsnnVXFyAYcbpbH1nRULmU2ikjhTUT",
  "key7": "3oHXUebujEYzbLJ5RWd6c3fzsPUiKzGRsQiV9CPpiNnxsDrka3sVseWSXEHQAUkNVSNW1q7aUX58kbET8sA6EoSd",
  "key8": "5jANkVqwiFC963DXrXnSdAPE4naNFcDFmsBTeWo2EMo9RctE5ECQz98v21T53mV51oBmHbCsqFrb155hN53cavru",
  "key9": "4ATaoVnAPC2sybfMgSin2ngGh5jgvZsj1ALZaMZgEY6mXaNFKBiri9s7JHAppGq7GRyZyTTH5Q7aWvuvfmoLUwkp",
  "key10": "5imZKwAf4wq8xPGwjGBpseXYntF7V62SMzYq22rHpkvQMHtvCy7KDC9A85tKezaqQMUqySkjTqHTwFxPMfjifxeZ",
  "key11": "25F27h51i8Gn8Uj66euGmbr5vA767iHc1XWZepPZWq1N92ky7L4RSFJR1PvxQ5xwStcAY6haHGwBKUdN3rsY13NP",
  "key12": "246aCH6FvbzwfS9AFNA6iC6oUUkB9uWJaGpB6sQMqJEy9boEquaZoom5wuCFVYYYw8jAP91gKBR6RCCJxKntEZwS",
  "key13": "2dSZfFD1X4tbu1B41jFvYAoPQfALGrAqcQ3mJmTLQ3ZbKL49MMAxpuurbKdYWvjoEzMt2E6suCwQjt5aHc3E7K59",
  "key14": "3uq8J2NZyCdBuA2Pf9zzoJ4U1fQ8Hj6HRWRsfLnc2YqjqMgj1zRDZHhCRBTby1nDwvCiaZ8V6gyVXK6Bmew6oM4p",
  "key15": "2MKU7V84Y78G8XCNXLFdjZURDGhZrtYhDR2kPgfdQcTS6tYAriKNAcjpgQpiCKGqSiGK48W2YNkuegJ4FgXdXkUV",
  "key16": "2qHFaapdxQMgkeSMi3eMDAbvevJT11Ypj2rujehg9xPkZe4vJ7Nekwrey4Ka16Dn6r5pL7NJw54rR38veidYBEGY",
  "key17": "48Sws2DFvZpyD2YETNJpDc9zPbhGP7k5cGyBkVPEe22CvieV6PVbj4Lw9mhEQ6AM4XZmfruwfQHMU1YmBDUGcxHr",
  "key18": "JtQLqHcNoh9kSpUtbNZtDD6km62Lk5BkRZAW83UbhgkmC8PZfUbDTka2mHmPUYCPieG59LKwtmnqBeuqjrQZAtp",
  "key19": "rn3L31VRTztcmfMYtAnjJqH2ErYNTZ7pCmksnQiDAtsCL3QoU1AVvfwzqczRRUJ1peHkg7waCkDAQrsJx7pXUdJ",
  "key20": "2VLHUumQaYAmaExpSAd6ZELRTP7KrvfciNniVwYtSJWoimXSX6nKxvtWJaSJmitAvES7aAJfyoz2giKFF4ELN4PV",
  "key21": "41ShnttTy3GUJWrj9mRkcbUfhuMa9Q65ufQQ5GAKGHU4fDUjNL93LWM4neXhLtt1TLqWgNGBbFn9a4yhFFTxXwsz",
  "key22": "47zpZcG1mPrLfTu1auz2EHtF9fUiHeeqE9ny3d9Y1LzTx1fe22DUnE1CmnjKCoaRpW8d7n8a3nG911ekoLN8jZnC",
  "key23": "2iqUdRyzsruipjFjnaHhpkki7yNT5Nbt5d1aHobMj3YkiuYWFW8fmDtppe55VnSuSUQ2tbCEw8MSV9QihZMnQ9M",
  "key24": "3C58R7iV2AimSru2N9U6rh746J8Vkg6puj4d8YChC4RNtQXfTKhpnHnuUdhRjCoSwC1RffDNk4n4ivSdvLhReDX4"
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
