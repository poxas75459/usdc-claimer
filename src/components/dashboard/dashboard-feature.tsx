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
    "qwPe8uYKhoQyDKJivE2mGw5tyr3c1wfcgRSZShpJLrRCbXjdyuoX36CbfKeUsF86y65DwvJoTVo9faFCh23Wx4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Xz8usbBnfyPcmXsMuD1DrMJM2k1ZkahcfZznxrtjGdhHvkUWgY1ADGM5Z8NzZrLzAaWfbZZyHave2AcaErUet2",
  "key1": "5uiQve8V1HAHn3MakRbHguptNhXQuq81UN63DA8jQDNg6BMvwWWuVKyjDU7MdkH718NRw1AtptTe3iukRrJJQf3X",
  "key2": "66MBxQZ7JYrKsTy1oZU6d3oYRTvJqeXhdFDXeTdvawW5vJFPxWr8ksR7snV5c8jKDZrBtGMFGGgTFPyCDCr9ikw3",
  "key3": "54s3EnSDCxBvZQah42u4qtoCxxRjWYfGefCchn4f4xkh2uHdRpUwg88Br2BEfaEVRdcqVVVcQJXnYkf8HED1MjW9",
  "key4": "sbZsK7RsKy3Ezk5zJ3ukUUuyLrqhDRSJmuR84BawRLmEpqQXEN2YXqkKA7N8fGtH7dAMPDWcni4ceGfS1PABVgU",
  "key5": "3ZrKyFdjNUwxDRSPjCfrMvvpmDMdXZ3G1AD8muXuqvihtSK3WhfXojo1mTvAWLSgZXhwTCXjZ4FgSsLqPKxnoPi",
  "key6": "2MHs2szMbX4pa5HYKu4JYwjp4f59iVdqaX6u6WKi17NCqVfNXX8s6FpVcUC1PhGevy6ZVY6iwEbu4e36vSWUCZsn",
  "key7": "57b1JDAjFhdC2GezPZB7ZZeqnqzWdfw96LYFTo1c9K9cgK8UDZP7Q43P1E8anVHK8SFLKjShr8bHzAxSoujDZj9J",
  "key8": "2yBoxCFiVfN3gYWHSwjiH7MTBcQBiAW7pF3hyxoPuM7D7y7ZNVvKT3yQ1HvHQk1ynmeCmF7chTVZUb1pQMJ2mit2",
  "key9": "4Adey4yfeKUynA19SGXub7gNNKBZEy2mVU8xAEEhdroKc21BUX7crxoo1Q3TPY8WbjrbieqTmduqBzDPXiHkoupu",
  "key10": "nVi9GR9G8kNjcG5brZLRFPT5njbWNQdvBjCgjhBwTanF4gBRJa1q2SzuT4jMF7ESWZyXrh3RRrWVyMVtprSMBcL",
  "key11": "2AN3wF7MDJJGDKbPeN1QDbzmATYUVd5wCmg88CETX76fPw5j5pwdPAgVUin5mP2kydD5LANRPTQJSxSUngVrEZBT",
  "key12": "3FNAoMySSjV49PSAKWPGxnP8fEWob1ARnZfQhBU1G8drVDC7sjqA6FcHtrCr1PZoTnDVBFacwqASc61YfcUwD1yV",
  "key13": "5k87GyfmheUdQ34cn2TWq8iLv8fx8hyKDWptY1xPM3gfULn3fM2Gg4jKEdXsq5iGJKghCgeEYV4soML4Kedotxir",
  "key14": "BndHiiBW9RFs8rSnE7fKCcfHzBndMkTJjMBS6wvF3bGfhjEVRjqE1wqVkxAezsWAJwqi6QEgrtwBXMqnnaR4fpU",
  "key15": "5iHYMFyZG1mPUmutw4wwmiAHuESGN2oBDSRc9YEi6CzPTDCGRbPLufEWMtF8JqvtBAnQmX8baXANXFxCbTEerqDc",
  "key16": "3gBQZHG4hJnqXjNVnY9DY1S7mPtjzhMmMmnAFFvrpGihd6s4otVo8ozGQ1G62tgiGouFk8D8qakzBBdDYxShRVY9",
  "key17": "knFYBCDB2LcUTei6FogqfFJFukem83FyKtPgJzjnsTE7iciqopFfMy31VSs5d4rE27LDvy9pJNW1KhRtKyzdLL9",
  "key18": "3dx8JbQBaGxDXop7kd36eC5xBLFjyYTuJMxf9ZB2ag2DSnv2PbvrMr1dzjjeR6b42SZcPwX1rS7sATFkaWbbG2Qc",
  "key19": "2JpQYZpStkczGhG9JeZiaEFAJzBbA3npoBG3is7a5NZgDSQfHH4iTbSjBz3eovCzit6x4nAD2Qrdhbt4ySRicpA2",
  "key20": "4T868J2exUcvBDJqL4BvDG1iiEuYsAceQkUwePyHvgsXDz5NkZdBubsmCq8MEM5bUbrdwvDgEcLF8x3w2HVXsH4d",
  "key21": "3HGpqX4sHPgx7ZM5Vv1GxrhMNiW6RZVK7TaxUf9yvPp91QvzBB9FNYekUmL3uj4aqpr6tG54JhaSJ3nRnzyie4Vh",
  "key22": "F1TsoVXDY7BfVHQgvu6pApHjmxbVs8DPD81HcB1utK3gcVgmHbihPmahvA9RxDojqSYmnjAQzbr3s6wbGVRckNY",
  "key23": "4ddBN3WUFzA32tQ7GAGTvYeJf7ByTbiDJJrcUgyT4BFsa5fRktpnjAKoMUrH4agZe9Z9GZx6BRY9j7tqbusii3bs",
  "key24": "fDU55FGzbr1r8uoN3BrfVu5wsLdEMNYUtNDDPasEPmy9r6mEggV2iTZ8SEUVMgPEJovaPJP4wGdSDGMWCSoJyYa",
  "key25": "XXTcdfkfaBHmeE6MFxcsAe2RzW58iPToLhnKrGiG9g6DKZmBCd6fPdYgQFGvw1nRRr3sZfoahYWzrMqsH9kPPLa",
  "key26": "54BufyLwHmKzpybwDhyG4im9EkWdsZAGYaGLVzn4AD4eM93FUMFE2ogmmKJsYhajV7Pd6M4XmzZfjfexgYWFx62u",
  "key27": "3GAoUVg8F7fMQb49atRTazTHtqJm17u2FEG9JtVxDd3hXt4zLkmGH3wrnogJwS8Gxp2z2wXG4AHiKMeq6Yb1tgdz",
  "key28": "3tQsFBNtJuiPhCHFfgoJFwVkDkQ1N1JSQxThWPE4WmVvsiXqJ5RLNx2niZpF9Z4N5RPP5rmC7AvB5to77FLKLb3c",
  "key29": "2Ch6PVDzA5Loyv3NcdBgBaDX4X3SyUmu3W4tSNXvDN7dQBSrhYmbsnQq4DhsLazhZCk2YcrjvmhDgKWVDxqCwpYM",
  "key30": "4tig1q14X2tyuXZkhKENUpoJiTcN2yDseamWo4MShXNuVPeWmvzipTMJdqQ5adpXRUyaDYpwMVe1798E6MKQPB2n",
  "key31": "4Y98uueqqQ77hpyMqDpV54mRsrrYwPnjUeuu4P74j4ghrkf4SVxgqc36pHUn6VjUEbRqRQWj9uXxpEhVtPT6mpJ4"
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
