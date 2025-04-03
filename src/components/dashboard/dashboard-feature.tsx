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
    "3NWfW7qsfBrU9v1ckXxXMsDJuURUQHpJstpz2Zd4QzyfEf9ZXeuUnjnfsTqMywU5xyjVjAbRwyqAqK3SEb8sMHd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51AvKq2cSFdLLgcs6YcZyMXHKziwUiRG8V7XeFwUyLGaZPEyGQVAozDLN2ZyLoUbe8maP7BwbR7E3KrN5JQz449B",
  "key1": "4MWY9aRshkqj392x9kXWyUq6kmcuyou9eg3iucVUh6QVWXL2chYnceFnaRNxvu5pzQM64Vb6tC8crtjfZYBHRbJg",
  "key2": "4xZuiztBj81iQvq3cJ8EAaLWJRxToTpPs1ve6AS8ohJRRapaYSsVkUuY9fW4XUjyxNZcdTeTYVKPGGSYNBuHDCLe",
  "key3": "A3DnSDkucYpwiFx7dVNt4NATyWzKTsEo56pB3FrJ1Vm1NYLfYkh5SCtyqUFfdhK5ZYqDNb33zut8iE2Mhm2LDJR",
  "key4": "4ZJDEVidcTrdKpnYsH6jXisW356CT1VdzsmFKRTjDyKVsFY1bW4fPiuSvHvXRvXNZHrHVgHty2jubRSQatSXCfg6",
  "key5": "3sCQowMVpGCPW8nozzZPNafwv1g5ek5omUiJmXU7uZ61s4mfpNBppchDn2gbjD1faMnBFxYgCecMwQTdbRMSQ6mC",
  "key6": "3mXPQukvR3jZCX74MgweQDXspgXFZp24AvYkwwtPsXUZWMBEmpqusDAMpQUdsByC1ZB8b8RXLbJDbQEieew3yRe2",
  "key7": "3mvha8cfrk7CK4u6RzNfuFHAYYLpVdFj1MLdnknd7abPYYJ4n4tzAj4RyZpsGQYdKoUV6WiLfku1LeCVE1WqGwhd",
  "key8": "2Qr2o2h61MeWpdx4rUx4rE4f9y4jGqdNQzCk31SaniEgK3RtdsL5mFzjxxgMw6PmZ1nGrC1rVEahhdMS8PjjVDyp",
  "key9": "3RNBhQsa7rY3qePpSTpkwrKKrgtQ8ibHnRHEhondfCXSA2UM9Pj5jZGFKmeHurG2C5wE4nUy5Q8Yg49ctmk8MZGW",
  "key10": "2QC9BQwWu6ZBLFmv6GJ6q9SwSajc3okuos1PHgTiK7D2ezB9p45YqUYgjQnhb8zqkrqubKHZjpzQADaBgN9KXXVp",
  "key11": "3J1ip85AJNdwkfcskajiUEaFwkADLjDQ9coR5gRCUPmLwREfGkrfZN5jxcHFqAejpnKVY7VJfCwDkApv7ds3nPGr",
  "key12": "67R2ZsNr5XfdGtB2PGqnKwuay25t4co2NmMPAMgDf763ry8fniTznHB3rmFbrXLQL4aYBHMYtnMPrw21FUXcpXjt",
  "key13": "5ATJoJy2nx6aPgffEj8p6auzfNg4ZENmBn7LcV11kByZHQCZQtSrcq8X4DgsM4NZWkZXELTXu2zWqYP4uXDXCznq",
  "key14": "4tczRGnUeMVdVqixFnEtJtMhPdXUcPJtaL3CNGyWkJbYmivXNqkdGmgdS9J98vq1PxotJoT2ruup4a4mj158FAzb",
  "key15": "2y4NFPUUMPr1jbfHMepMJjxqfmpMxPqWCw4ZsxSyW9ZQF1LFakfVFtx8QvSpbvam5dEhWHEqqnF67NCdAm8Mns73",
  "key16": "3Rp6Vv7HGPQEpeeCqnrBkh7mgrSgGt7nvmqjcCEJkhcCySoGjSon7TGT2TbK3DSdDpQvhaLjSBd4rxBcjtdTVwU",
  "key17": "3bAKLGL2rZJSupEyHXiTgsadPJGPDAhnQVYityn1nQoP873DW1guyeAyhYS1Fu9m7cSR6puZ8LNDNXKYqns4mDH6",
  "key18": "2qrJ6rwjvBvwPuxxTZtuAH95dzFRjzMsiGtWUb84nLAcdJSyUsJDE7hdFGeto6ptaX7aWz3USMEKtvnrqjhczAVu",
  "key19": "3vwK9uNKHqbNimTqdY5CtfmJa1kXH9uBN6iYreXa9SyQo9hv9KVpWNtZXW2fWEg48SHenvL346crftTaxgN2c6kp",
  "key20": "49zbgTNWvfaxYmaEJk9G7mAHwfBFGf4yB3W6BoiCsvxjNUTUaShw8vmo45m8zJefKrJR3e7dxwcum3bDvNbCXgqN",
  "key21": "37btpcZcxfQMVhrpre6gd7M5aeLTWWc5o5eG7TTdrgPyVtXHGFH235w4umiyaX6QWUC46TaW7RrnnpcV6BHQHjnx",
  "key22": "4KCMaJFXWoWg6iB9Y6KPzxGrhXZsv8Ub9Pkx2qNPMTGtuPdYUZfK5oSXN2yUpA21sPbW3ii9ct6PiA2ia6FQNSGi",
  "key23": "ZMvm48vHA3MZdcwmdbLMmuLxMdXpd19tBmthNngXdV3LGWHuZqvJAe6fPzNKEcdjUeT5r1hMzrdyWKVsEDBoyhT",
  "key24": "3Ya7962xWTTqAM2UCAzvw1Eao6eBrdh4Cvjbyg33WE3YKxJpY9JYyN6w51wiajqtYuRsFzX71MHpJXai4Pv1X8yZ",
  "key25": "3BYvnCsSzPGa13jSTTy1esbC93iF1FVaDxVGJLwN3Y68qtwEnFoqkvUu44v2V492Qx67bMDdVnqH8Ka25AqM9LzL",
  "key26": "4Z1uZqPJb7HmiQ4HVdMt5qnFR9YKrafrhKZCZwsdmmgoa1sZtKb4bVp9RHhwwUFo11CYti6dfn59W4jhtBFWu2Xf",
  "key27": "ki6LhKhrLcrUXSp5dXTgHe9Ar2mJLVd7auWndLwwMUjrNPWDJSBgrPqoBe7EfpMVDyM9sgP5kWdq4BZZ61fbvcn",
  "key28": "26iBUFdCuXooGyGGY9daSWYQNDKMLtdnh4Ye39Wp9znrvig84uRgE94KDFTi55DWkEAmFnC2WwmwhhSWqhCYo2fV",
  "key29": "475Dd6EBTKnwqugyp78SfC6ifqWkwhuZpdmqHBm3b81yjpp3XbAYu1QoFWoQzVKBNXXKLBYqVsisHUm67tQ8tQLw",
  "key30": "2oBD9qEBpVDp2Vuf4vrhEu4JNQ4JMGpZBVUsUz6iXC5SXG1g7JCtcSGNfqwpcgg5PYBfN7oqZx31YXZD6U3z25Sx",
  "key31": "658opvd9rwydVfaDyVkutYSHV1qVNUQcqGDoKY3vtCD9CTrZuBnw3WJPNDj6pB1LnerhoJZbAhekr5uCjBdP98jy",
  "key32": "vXKkAXSBxc1oQtfzZv5HVr551SLXUW9fwxy2EcFDCiBnbxue6M9ND57rTABBaH4NRTqriNVhC6tPFPNSrtJQQx9",
  "key33": "4HuuK3yQEywFZkHLhPQGJ16kmWxAeFU4rpT5EvjH78vgBSZtmoHn945k9ZPeGzyfP1f1hCBGPYRxsLxXJnmX8B6r",
  "key34": "2pUhEHbDPqsJEnS8fpJwsvWd6Yn3QwyC9Fs4Y46r71xNSiqhd5CgGEJhA7UYVWLNTXVQ7SzefFeqwV4apip3qZHi",
  "key35": "61FhLTojPiN9Ck6ddNDRWukWuoEGaPpyqn6bikiEGLUCLYiy23NWZm1Xgk3atvUYyfdc43mK1AzVKwJuqhJjRTAd"
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
