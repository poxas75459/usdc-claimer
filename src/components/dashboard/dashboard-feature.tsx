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
    "3gNcgma1nwQgDhYu45KJcf6ft3jQLeyGSahoCPWfKi1ULTB3eM3UpW5wDbZrE8vwkEGDfHNFV8KrSK6HuUUkfuER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7L52nHXUKm5UgQjkhKfbPQfXRLfQKhb4b7PQXjxBt7EWVeRfEJXvSdYFjtDokKMfNRadLgQHGSYnW9H3314Fo55",
  "key1": "3xEi7q3vdrd8RuXvpKVL4KtzyjgHP8TqCokFnPLHy1ZTfr84KnxZKMmqkCTisQHKi4aWxiCW6mJ24pbsmrkf77Jp",
  "key2": "LuCyt8HQdoh1DiA4JNtWaBndPKzSoxyBSPDsJYgRp91CnLGLzGezDcaGeLCx14kfWoZzmoYvykqXv7dhPSNcbbn",
  "key3": "pY6Q8szMxdw8oCkcVakbRehYUGE5nN5V515iLEFpXZmTXrGQJ2Yh8w92KjvttgbEBuwjm8CyEvYVKeoBurJtbdv",
  "key4": "3RCcowAVRnMkJ6WWK5UYCNiXBx8kKopVr7paPLYftejSTaUPypXKvLaYxJyPPNXEq5dLgNzG6E5eApdnGhCV9znJ",
  "key5": "Hy13ERuwCH8TfLvvCujcQkjFngeZEVuhqdAXGTMtqy9rXgtBX5joiRSb51nGVgo6kcauDqiRzFmurmb6vfFZdTF",
  "key6": "5xkFfeBaaRTo42z1A6D663qiMjGr3pHnSjw7xnvXkU6LvepwR1ynJU9rHeUqm8LuPHSPkPN5CxysJppznHvQNzM6",
  "key7": "jh1f7fwDTqigYdaFzCXxt91KThh38S4y2Hxm2V9mi87gASJW1C5jSxjPSFmWbgmQotq72VK37pPmakWCU3MUmkp",
  "key8": "2BLe7oHz6aQSwZVHh4F3P74TRB7kmz9BAwvJuj6aSRgV9uR19sLDokoN1tMaQjSev9UKVjm8CoLpWjYXehUw4akL",
  "key9": "jq4jc5yNrqXNNLUgeEtBb4hnZJ1pzgCeTghw1MNAZDpUsADWyEorS4t7LuTV9cCE1nD5dWv1mrAYv3QZ6b3cESz",
  "key10": "FfpFdzxp8hfTRwZ4GR6R1vYGX7Uq5eNSFVUqjDfxcshY3uLdYgAQAhuqWBZrviz4PPRMRoNzhpGANy5J7Qd1f3W",
  "key11": "pgUyGQr16kKSCx8pNBfyr8uS2rUxn8iWg8g6Hp29s1frzxhTzKCamrKXbc5pbfnXf67aXN8gumsMxgHzXDqY3DA",
  "key12": "3KVdTFwQhdwD7GzDokbtGCHmAVjsmAKvBPNJ2QMZeGtz1VtqY2SyE9oULDeF4vVFSJpG3AnDiv8FBC5gG1W5hwHH",
  "key13": "4dnbBGYpYFrtVAwXgCp6CbBgEFRXCsNwohodMxxTxStJEAEEGHaN24Mkj4yjN5NhwXnpA6tjKBq37eoLW6jvRCka",
  "key14": "5kVsVK98Ma5GQezi4CHU7JR1vPRxe6KdHhSFS6GM27rvVoNCpQxwVVpDKs6w9tHnHCJoAoerPYPYPENUAunSFTct",
  "key15": "3DGyEYXQbJTx6CXkF4qEewwwMZmKBgHYDtJg1e7C5GfpTR29EkSVQkENshJ71RKbfpxA3vo2h2GqyeuPP9GbEjxs",
  "key16": "2MwC8Dv94cGeKFRwRGYrk7fMjr1etJSh7FmmBNLjenbPHn5agqhx3UoA1EWbpzSMKnLsFmrfhjWfnt9TRS4By8i5",
  "key17": "G67Mm4iGPVu3qmfGsH8DzamUSPYmSLVGJZC26AsXCfraKpvkvWNqVSnxWjL4J2sJQpUuVcfYLVR4Tx94LV5EodL",
  "key18": "5icchefQCSTnzp3hjn1z89dynNhDbM9k3MUPtAHZZusS7XC3Nze4qm3VSQbKLqiXoqUE5tTfDDi9F8Xn8GNujGaz",
  "key19": "5AGH7rWNFUVBNvZ2jh5okrvCALA25CS2RuKuLZDKdzKFp5xYKr15VBwws2G11cPuTDcUnBi14ydqMrj3VneCS9BT",
  "key20": "4mftHhgzExT7JJgtokADwdJ1fz1RzvV6MHnkYBbRJbG1Eq6ZRDZWZTNY21xX11CGXHzsFUMrNeD1dm6K2ncfdEGw",
  "key21": "4XYZxtkwbyn7gVvBQuwAp5XFPiZBPdR4mqmSfTE9BKX2RVsgMGTVqPK6txsgrjMKXH57wbasUe21PpXVQebNLCFU",
  "key22": "XaTV2RcM6t2c8MU6vBxxUf9PRAHdxpiV2G2981bNssCEtHpSLyLLaMmGf2fsT2sFuXxa4dEVE7exFxN1Vh6WGHV",
  "key23": "5proSNN6bqrD6HadCZ1EAkjU5kxrt53CoTBP8gu7pCa93Nb4tjBqsTDtoPsbUm9RELy2VCRKXXLzyiuX1sAWQnuN",
  "key24": "3QqTgpYYmQdPvQvqYdS6ECrKm9gec3bvtvKyQb3nnHFcH69zpVhD5ntzjzuQpQvi1ZBmKnS1JC1XDdhKKZoRmnzq",
  "key25": "2qXhWvZrPMNxY1kdrhSsRgTi7knG5kBZ1o63an4K67sbEhViiAzr3jMqN6Vsg9Ma1ibQff5BWo468LMnxfC4qdm7",
  "key26": "6499asaWyKvKGz6a5qbyCoiH9c5RMNuBgfRorD3DFGZyZ4M3ohjfTSwsXjjMEd12Ykuszbw3cM6WLeNgTkCBYKwQ",
  "key27": "RYtifqBCkVa9ch4MHcvpcsmxhGhatp4EEwRC95cYjiUcLgXW1osgN9T65S3UMqi4arz7UgrbdYns9ZmFtAgLXmK",
  "key28": "3h78WTf217FoVRBrVW5NWQivg3QgZjQQzAs9YzUTWK4QNJLwkw6neYfwSyy4twnfzzgHUKBpYQmDbQWQSj1xApyX",
  "key29": "5PRfqK5KRarReind7yCXRTSgR7GV7QzibzJGuiV365YgBBZZiTAVRWzwPeV45e8MnaVJjsKPm6SSzHtMFNooBUDd",
  "key30": "2bqu2vZFEx7UdMBE4Pq4KAuQvnjj2e8LFh1VBJR4UE5i9D2yWQHL3youea1bD4faNScQqeQzzSFnjcFxSB5qhRzd",
  "key31": "2HJPitMXuwuWWDvT6GY6wvryLCj1AdRRdzxVvbVTJWZCqUEjHUxEDv6KECbFZFD7dzd6j83jBjMh8f85o8wKtYAK",
  "key32": "67ZzPxnS4QoRoC2MTi57USu7s5KAkAu6qHwGyYwbe2moP1wDYmCMcbLYLU5h9UN1n2bTb8GjNEjFF7iT1WtXH7zq"
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
