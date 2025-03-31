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
    "2EffXmXpY9MGxk7KwqVHCM3KwNFczUdnDfR4GKpmbazwSLqW1352rt9BRw2KRwy9Thvgc4GksZ8BEQWVwRV7w6uP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tbjgrt6gTBpbaqnfpReXZHnpGJKaGng6tGZbbBecGgzVZxJwAse3PCJJ2ATXN3zTuxNBkh3ybwYDpfqKaE8c3Pv",
  "key1": "2kb5Wg5R4Hpq9b88k6w94qJPcLz29x4fkAussH9eMzkNgVCa1QVtNqcvbcRKVeyYuAdfC8ZZYJv37akCFJkCV6Xt",
  "key2": "FR2kpcQxXUYXcLmQvLxqUuKAahRZyqsSWGSiAXgi3hW8M4nohREMg3JNkjCjZnzdsCjxYWZUP1QLBKedn9bZYDg",
  "key3": "2XvwXdmfhnkMQLLrvhAtK4S4Z1iSDrrZugP1qMyUcyvPaG4tiGNyXrP3pb3jtaFN7wUg2owy1cSJ7Jy9DWAW6xoU",
  "key4": "6r1FwUhG8GBKpAVHPGL21ZZvWU2ZJN3L4w864hgdbjKsAU4jxooJhcxusupXPaGaNi6x12RH1cFkdk2osyJ8k4o",
  "key5": "4UkgP43AMWEbAamHc8wytALUYqG7bhNvXEDkn2EukW2qTH4Aj3tDWBRC45J3MzDZHAE4XK691gLawyhrMTqpz2VW",
  "key6": "2rWWJ27C4NZyGshbUwNh6qcmKFWWatH9iwaRHFkwTn2sWkXjSGWFMiZRQbdxphNo47SpVS9B8GHSnYpMzo3qpbN",
  "key7": "YhzkXPYQ5eMQaq7PRQuZ2ckpU3pt63pJtGA2f7zzyTzpQNP1cBxS7txC7TqEqrLQsCudgABQCF8bEJgRnDZjWF8",
  "key8": "WgD9KH8rMQ8oKjSvFvp8nAhUJkfhEeX2JrAvmsgpYdnxyEaivsH4CujWNzhNM1bAXbHE4Ci8fHmm6i7Pt7LvfPD",
  "key9": "2NLq9j2RrYfNKFLojEWbq4XMM7g55ZEiWxbK5jqode5qhkYG7JhkxZyVHbabLsEgTXaWWL142cWdhtvDLahdpvvT",
  "key10": "NSP7KfxGuheSxcuvitwrqS78BdWS5eMLnhzyffHqvWf3S3xVdKhDFRAeoKUn6XA1rvChzVNRJ9uoGS8QR3i7YAk",
  "key11": "2bRjr48WCptuj1m1invhQspFmmXyxeVp23bHMGNDxdhqUwwp54XPMSJAUJ1tr6hZaqefUWUXGtTGSEotXF36r3zM",
  "key12": "5BhnMzmk5jhmiBhtnZcCe4LpPhnDX22NXGbDAYMmUqBVdkLwkuw71rVC2kd4RyrFK962TZfoUagfYp5yrdLeXjHv",
  "key13": "48nYZ82pv4r5hoiGrqRR7uW8rzvGinzHtNDuQUMQYLaAnfWH2nvdUafMHpbsLzEXj8UwXebTiMx1eFQnmPjpw5UK",
  "key14": "kwNvy277g26wtTzMErvyEnUFG572WsWqjzQh6B12xfPS9sakM7mHN8bhtoypp1ufRiA3xJbhgqweBcWF6zzrYiB",
  "key15": "28K1EnkrepULd4fPdhgbXD33DkvEshka3pbRjiJW8pamy7nUdeNBffwMVWzrDYxGxvPbLNPUF9HfavvuzXBfojqD",
  "key16": "2VdTAcVUhSuKYSDXcmMrUdftuf2Ywz5rGNHCpZWZVG9dAK5gXgG83Ec1KAbDpHqx9LqkGysG1XCq3mcRpLuGNRKi",
  "key17": "3FEA9zjpFCDKdgZyTQDy1JyvPNgQj97H1ZMrtbiPFnRDmqzLTELfYkt6PLDZok384UcjNaMeb4iKdMuL6oJuCsJR",
  "key18": "xkWtdVu6jvrbMo2QpuGRLbYMubzQpimjt46P6D3c5yvYjjhxG2Ryceu1ZvnFduvyxGTxcF8Z7kQLSWDZ3mWjb2t",
  "key19": "2qC2ZofCZHEMEWrAsS4SEUcLqCgb7JvySX7m48sQsVxYSCku7TWKMNL6CF4yveqqFMLBTv7hyfAPaYYxKffbG7NU",
  "key20": "43StaHujLctASnmYYWdknKCKeShYQWVVn4Fjx61ZiN1jLcMiMivDqU1XUeRWp9UA9iHdY7PuDiqPFkpt5c6Agark",
  "key21": "3mhTRdDTGcCmyKU7MFRekRQLL1eFCJ15Jg3BWMUtDXDaPtGb7uZxTQLb1ybbh7tr2RQV7oSpCSjeBrybWoqVR3E5",
  "key22": "4GYHCtUvoAoomvrLKHwar2gzh5xn4eheCdcFGi9Fh9D1YGK3mEFywZk4i47R8Tp1qZqWkDFn5ecrW7XaWgA2mN24",
  "key23": "5SXVDEDqThrD34abf99xRxYN9rSH5AYvu8mBDjagwA7WU6oyPVmBS6nzeZYz44JdzNzjZxZAWmxj1AWfmy2DZkz4",
  "key24": "5P2hxULwAPw14gdbk6mUr974sofs4UsrLtgdjj38yp3EzZhNA8wLb57vrqKiTSqdpupyEEcuU4MPcD9uS3huXKh",
  "key25": "2uFrRp92pck2uDWUvzYV1K5KNLyR2sVuqB3EZmBRby6KXKZsMoapYkUb8SpT71czcUQzepKvSJAnFLQG7zSJPsj8",
  "key26": "4pCwvPSfKk3VufkUCbcDtC2GZsM9UxfQed2ypAcHYvHoNnY6W484EH72u1oTTbZotTz2T7UXZ37zSjeUdPwLCzHV",
  "key27": "22bzE3u1ipsEyPdJaeqG3uyzhzw9dn6f746UNB9WT9eiDqrn4b9MrdJ37q8n8SjGAuNamK6NotPxCFbeWHYXQo5L",
  "key28": "3raRCDb74iwaRsLC4nT8Ta1s37MfHpXaABRHAftbqTwEcJt8JLbjPCDiFiyKWR3DVmxPt82ayCrDDmayh99Tu1e7",
  "key29": "65WMRrQVHqRne2c7M4cA7ZyZMcFd4cpn6Coy9wgEpt4zEYZaG2cicnskzXotW3U6LStpprRwvpxYtwDB7kCyzpki",
  "key30": "vXrUpCzks47rBBkP56DcfiLyYL7gJwDaXHdwpYKSL6oPpdnu8njzX6m6daW1YNwwurfvZscuy1sorVQpJTQMcMK",
  "key31": "2T7zSsdQLpq2ET6iQTPXFyNgCxYzh3GCRnA6wvUkMHp6SQBsThhFs9a7cF4Z55KmHBCgEjDmykLoyoUfSqyKNvj5",
  "key32": "3Nkg2KY4pzSD9jonaWRug93bvYZtM9wow31X7GXeRZQerVkFfMrmgZ49k8XdpKMgMi9qckzW96FQWmKi52QxjKKc",
  "key33": "443V8aPunmnidZ8jUQxgQAAuCJNYLBab4BYdcgFCez19SPyyF9wyUQGacNMfMeJ5Hi2NU6SzR7XfVC616gtkgQdk",
  "key34": "3XCp8Z4ZrckWDK15LHQGh15yU1n7t4fSHLjGusERsKt4SWwtxweptvYWxvsrXaabTVugv78yQzoTWxYMXjNGVEgs",
  "key35": "62KEg3qDc1AB1xPbzWmD4CRfPa4smfkoRdfe79bEXJ4YZVqhaqHj1t7tZyJaomHdns1yWvA8JinixkogMXSK9za3",
  "key36": "2E8BLUV7XhgL4MJLgsiixzf5ruKmVEnLRrUVu3CA94WGV2qKNeVzmiT9h9TAYTStX5Z9kLGBSutANLWxbhcTeifY",
  "key37": "5AgiSXQKCsnS9Xnw92LUhvyF9uPbr98TKTRuVR9nLzMtqkFeS24GbcWAX4952e4Ev3Rv9FKjUh3BvisUVaPiK5UE",
  "key38": "WNUeN1Hczf2uyiqgFRf15vDGGpnd85QfW751H5Au3DrRBWAP4CdzmcforLyGEyF9Lqa3xzutJy8MiafGndbxFRv",
  "key39": "KtpWfyTFVTQzsSXC6xXcnFihEyt8QvLYekfWKfCyZyKvmkD28AFmqp4NkbBNxTauFy94WHLEusPWYfFd2NVpXE5",
  "key40": "344MnY9bJbg3t8wPpugmgkbaz6YRpFRH7ky88DAeGXnbmwQ3W6zS2u1ZCWAsTaE9VD61WTMAkx5mjRNBYBWQZhnS",
  "key41": "2hD2cyVuogpQneahomJHQt6UWiefoTUCitBnKLfJLgkN3QxYQ7fUXGThjj5Lm4sLZuo6HjTHDxfLvporre7kDuct",
  "key42": "5QMfdDcTb81Gjt6qRwbp7njbL3Ma8YMzAZjbrXuxVaoxKpQBaqdUwwLxbcQuuAi5a9vfhz4D4csSTKERTfpkfYc"
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
