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
    "5MnMuxsVJJiv36VJpeDyF3AQrqZvVLxpcAagTrt7KxdPYKEz6yrb4EVzXrBMJkbgMGVkXvQHKjFFuNrWaicVG8Bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQnsRR4JoTd4t2VYHhEvZEz7njgP1WFjQVwCFpVrBoAg3jeFgX85ViHS7q3Lk4x4WtSGJ6nsnpCzqc854FVLzMN",
  "key1": "3PU1HBUHSEFa6ALap38aZ5dFPjk7nrUFh4HZmTz7jofed5UdHbyHAmjM4JA2JYa3dTe2xarKLYV2Be1hind2XPJk",
  "key2": "4qG7QXqXnRRgytyYo9LRSCMuuZy7f76CNzirk3k86ak6CB76RB9PMKcgdk6pCpNHJbiJ5KMkXVD7HoFJpS6qRAce",
  "key3": "5c1pTSRnteGGARXUbBNQ49Lf3zgoza4RHt2U5H64W2SeU7n4FcRPDQQyVVPMWrkfbegd1cEYjRcjdmhpusnTQmBr",
  "key4": "2Nva6GPtZTmX7iwXnDZBUrDBGcUaGwTLWcpkxYYggNjetUEbVZr86arMwtDWuYDijzxUEZQsFtuAdx2x9uZGvDc6",
  "key5": "5pQxF3hDBEzZDbrw8kSVxsAUQc6beP7bPAYG455o1SYCatbgt9W6g5WGkhrGQNBsha2eMJGXft25S3tTuxT98Kcj",
  "key6": "38gTdVHBU3NG4fcaz6wtsV5G5zU1vjUmiGQD1gQgB2up2MMTcnwxWWg6fnDjDB98ccjN9KKWz9SRTZLgyeXjySWV",
  "key7": "4PdpgmYtFcJh2yZMgMH6xDEEds5oopV71ct7Gb3bJLe7rvxp4qHHgZawJZUbmSdXRrXp7W3qxN6EKJRFTQmEVR3s",
  "key8": "w767xzj1wvFyNdmBdmaT2nmnWNStvUMYebWXAdnbmJKe2RWFyztGmbEgjwqyQfag8tUv6rx6HXHukMGLszt73JL",
  "key9": "3dwoHngHbhNxbcoeoxdvTFnueq6VBeaLR8ouXieq32KGyiNrtruSy5mARdsuf5wFDT8GUpH1ww9JAmZSs28KqVmn",
  "key10": "LjJD8yQHmya8SqqfRnwgcFUY5kGsCXhuyEWr5EJAQXqEtCPpjQ1DVNURnHJpExqkgEhaRNzbgbbvVYNccyBs1s6",
  "key11": "2mcbRTNaRWTacjMgRhnRHJM7ZcUtTyV9ZtMY3TcqWnbTEVGufNwHKJMwEhY84GUGNWLH7kydAJY5tFVjRWuMrTWn",
  "key12": "oYrvzEA1jewtmG4v286v3gBmhTccCSeQPZQbPvbg3Wf2xLVbhMp4KgbaFpqkSBGrNgLSAZqD7wDCt9pdUxpwK4X",
  "key13": "66tcBokNwsErHFsh2AR6VvCL4aFL3wkVr5jegaRT1ycnzKMSXMqvVRGweZdqTY1r5yTR1JZ2s9J6soUEtEWovRex",
  "key14": "DZmjojFUKPamH4H7BUjKyYY7itxrM2EBifUFnbL8jweToVXLzPpA9mr2DnCdukZX5JsbmyDFu9Sy7qscAjenLuP",
  "key15": "45C5WLkEs5VAQFhCcqSsjBQsv9HTmTjingbqgYfZjBvfb1sqX4UMsviegLcVr6oGrmZQHq8MmjBoKUgUD3cTaN6o",
  "key16": "KSTNnAKFRFu7wfRksYGYobe2N8LoVKH1bRqBzh9cx2HBMrbPH9VLQn4aytNw8TprMNjfdPPQRnkAZ29jLUejftm",
  "key17": "jqZZWPFjqfUFtytPVG74Mt7gbFHWfzikwa5iwMv9LBmL99UZVNAPUGQi9VbZnGw3bqQucaTzPDCDf9Ehai7zWhr",
  "key18": "2DkZHAC4xsXotwPXjZmwkhYz8ZkKjUVMjddNmsBCd4j5qZDTpqHBAC8ypJ3HhFKGPBPuMBdSjmdLf1jrTeQU2ok2",
  "key19": "4nKJQhkafQK239UCA9rvgKuneXJEUYNrJVXAETrfrRRHSD4boxgxusrDNCXz7vHsEDuBZuoZbjfE2FZ3A7xwdeDS",
  "key20": "2SNenhFBZdLnBzrRY5DRE9G4dqD7z6P1dktsJADCiXMpWKECEVvFKV9w6pRQpKH2XPkM9WiPZ39K7wLycRLV6DWp",
  "key21": "4R58JYGU4tf1B1QxHdJUpWDtcmmJMTphyaYN4aiJmZy5ubYcxo4bVDgWYXUcKMnELAuYb4WrEmYy9hQTuVvJ4VUi",
  "key22": "5sDhH1kPMNwg2RRDzG7BXUQ1f6VhMNU8EmgupNMPZXsJaTKx5FPvEXErG5q56HhHKYQL88e2rW241pdL9WZJPLzn",
  "key23": "3paLK9V6KrcMQ49eq1hztXMS6JPxNgExBrWHa8c67VwE499oebjWkSZidELwgHRrA9KGZyj7YSvdTwqyHexFU7pF",
  "key24": "52QcjSkQW7zWx83d8hSPQmnRNufYG1csuTcCBndGXy6JK43UCropcXecgWxroDYmgvxuRnAThRLtTyfpWniSfDwb",
  "key25": "43ubTQyXTNbFFniSWNgaGUeMQrfVYqHXHDcoFphsHZBGrnSKiUa6vut47ihA49t7zgKmuxvtUEtfRoSBLvzNK7og",
  "key26": "hMXzVh71pUFZMGGQ5NtErK9jBS2XnZRmR216yuZ8xs6ZShFkpqZdfReHDVu8aFBHWYFJJZ4bUdfFT7jp7jT7nUY",
  "key27": "65kpeH3zYFfmv8DyuRNF65iFisDrQ9FySnqcAH5Hp4qAC5TMSyy6EPkr9wF4iUHKSvUsrjdWq9btL4rJ8zj4gSd3",
  "key28": "4ghpfzC5LSNV49WRXrEi5Kmp6GCPKkM8rtpGPeZXRwc51im4qrjfmYmW1VE1T62BWxPotZ832L7Y6MK75F67Q476",
  "key29": "2swXkL7gfXd7pYcf4cgTtnWc66NgN4vyfgZEyok8XH5deu6uysnvcBH1655zPpJ3bghxijVbC2bYeCWAT1vRfhb4",
  "key30": "pXcs3L6CNLUYa5mpXbwXDjTEmf4YBBq3YpverkGUL6gbqisSGDPYYAwuyhLwxvtMKqKhSnQpKWXKfGA738vU8D2"
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
