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
    "276QNCnprGtZbyQXRLhhbePkbmJYG3Ptp6wikg2rKkPzbqxGxaZayHpsYHgf1j3wdQ1GdMr1UAJLqWYvYgy1pCNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YwedesQCQZvL3jxCBTt4Ur5e6AASDkKR6RPCPpYLa2F58jUwHuSCQtx8uqHMTR7hKQscbGq3Xq2DbpsUSmEP5JL",
  "key1": "2gE8mVJ1CWAbYUmVRQ5jmfGmxb1JKb6kEaLAVMTdhGDSgvpGd8HfdnTmyzMDTUt5yNTpVyo8pFg3DG2XkuFSsjTb",
  "key2": "4JBTgupqy9Syjyqw9uQB9WgejtZvqtwbHotfnFnUZ5mcdM7x3nPRaNjqNEgNveEkvN3e3WVgbSLhLBABaA7n6ScZ",
  "key3": "2um7msoBxWjdR3Q8XDgr2k8bHLH27qVDcqSc6Mf5cFuwunrAifE8dUkJCuQiTKanzwk7Kp3vzJcHQEULjV42nzF2",
  "key4": "4mrhdHDELiVBYsZY4f3RdmppoSSnb3sFdwDK6FdrGbAgG3EWorLgE1MhUjefuZMgPqr2aXMwjyFyB6tH2xEDmLrW",
  "key5": "51Pfhe9pjoT2V8pRUijYt66gFG3bDR7GhfznfG852MWuPVRiYntFY6cJKihw6Mu2YyDK6YwsuoA3sMxjsMcTabpP",
  "key6": "4rm532TrKfbcVvCKfphVLeufGVvoqyG8HiM7tDxtXQfvoS9c8h42jLcsMkhQVRnToxoRjRknfT419TZ8jEf8u22Z",
  "key7": "3KxXo76xdGumatGNcPm94ycHwQaaWaxpUWvBPbcYetp1DBAkRuQU2dwv4Mc8FdGQuTCmipJXM9Qhmqyp4RzS8U9N",
  "key8": "58Ra8JwAP4cmmxXgQgXe9ZtqRniT4fFxNBLJzFjDvJNj6zGxXjhXp2B1oRwTwbrgVRCdiYzEWSSw4mzDwQkB3k6e",
  "key9": "2fS5qa7hXgmyhymYAP5hqYiZjHbyF7n2nLKoBjEFxujviE6eGZ8VPG9XSkeK5MaPvtwPQJEL1BCv21WLY6MKQsDL",
  "key10": "5sVhFqYDo5WRX19B99JZZT8U614ikbpdriDStWN54BjqmLMGTjLjCCyJFARCeyAAGHoJGjy4yMSKdzPePo7QLMnu",
  "key11": "3oKvShQQWpZfqaLmuzpSuxv9RwsMfJUhGo4TBP3xmUJXM2YWjXACgMmaDf22ddoKApUubwtpieYKCXMGnayZ2xc5",
  "key12": "5brgozr1477W8opj9yKT9NVvCV1HbgBcUN6BB1s9d1bjXCEGxTw9jiME7cGtgJAmEYFM3G78du7Rk9T63J1bHG4A",
  "key13": "5NY19qU7bLwjhqQZkywFkSXaENJN7zeU5dCRqw4y4tx4BtKENF7eMhzkLiFyrNWt44VvmjFfJF6ULdpt4CDREbG3",
  "key14": "2yrmqe1kdKVNwVbp6kLCtC8ZghXzZNUQZXqKBZRYpMuTWKqen4fGqxb6jYdgBn8RPEW5ANLMnS9P146yf2VZJdPL",
  "key15": "32wr6kfxgSBrUh5RaohCSUWUP5yeLBfq3PfTyeH3nFiE3JA46h16hteKafKKEb4AqUTKyY2bNb7zESJCtUTjdMyD",
  "key16": "2y4yCdiJB95chzo9jzN8wKyrwezCrFH8MoSNsooVfCZuBj347iwCfTozJyLeppUi9LfAQiZkhMGi7GbrDJX25Dmf",
  "key17": "3nRhqSpRorUXD1xTkxCkuEVCxZe8HnTWPUMFhWm2UVj3vCcxmvM1mfQx3hiRfXyGe9C5zuEgkB9gZkqFpmfYLg2t",
  "key18": "KYV6iHfRGvF2qzrWREHgezNJ1jQ4rMogCQRiDe16o4pANPu7bnMBPdZGhydbyE5R9LNxyn42fqgEwaMdznUS4nf",
  "key19": "SQZNA1bFXv7S1cCbY8tdmqtspyFLmva6NkGCT9Pt39akwc2tTcTnwXLxeNvMBZyecspeagWkMqxj8QiC9HLG9FM",
  "key20": "Cn3TEB2rvHPmG5q1SMkuoWTrebtpLsPPoExTVo1pu7XjrCQdC4wsHzb77ifa1EiTNwDaGLj7hTbhwXETxp1jUu8",
  "key21": "66ZYS2Mo3PN2Bg5zYwM3cY2zzBBmmgwc2Yk63c184gE3BZ4VBBtUwzdG1SpJ6DcmMbA9Np3DfPyuGuyT3acdBqC9",
  "key22": "5VsAAyRARCLwZq8yjsoXCeb4VUQTXQ1qAFZnnsVRfizx7F9LJNwFuKRmJwotRnEpPAd9Qwx6CwSLWFb9KTmXF9K3",
  "key23": "3Lss8eSzhDzofk3Syj4BsTZKRZkkzdazxiHTYyC1V7Fq7mTB1Vi5vcJoVUPNcfv5ELFweR6XXiYsWNBeVJpk66yL",
  "key24": "4fKU6bUi2MtBmP563HiV6P6MsbY9B26CJXZBeVkHG8WgvagdD5cymfY1KaAX6jU3bffvLUuErzqLP3wgtBrusQ9n",
  "key25": "4uFYXmzRyF6jmB1gdLodatMG4zwXFd7F2B6t8Zaf1mJhG6FN1zvgriyEmXF9WCvnCYVxdab9QqwwqdDNoH9358MV",
  "key26": "5qnHirL8ebbgP2xTREdu4EBYywpBEWnkQH4fwameBHgbFFumoPE2wg8uiYcA5nrysigNnVrNixgY5ECE6vUNoENi",
  "key27": "9et4kZysFnNJdFj5Q2zcMCTeGzNgBELjHFqJNvTiXK4F9g6fJKYFwcYUtcnZfgDU7brupmHwkb1azTtt1XLvJmx",
  "key28": "5buzoRrD8fC5V9WrX6vB66DTCuVneoVbw3qQ6Mj4kQt1uxKxRDNNuEfkxnwG8enVDBwuUMgqbaa7CjssmyTeMqQ1",
  "key29": "64Js3eqy7CGjZHF3FQgvsKv4YisewZimxE33xN9vh8t1Wj8vMwigg6qPcx42UGyg9DEFQ3nPZaiHj6QPq8bbGMfu",
  "key30": "5k8dk2MpTzxTw7bChJbfRAhyXxs5yiisMWRL2xZhu2XzYtvMkVugpS6Wx2Xg7JdnWrjQGT5z6AJa9kgmcDJ2QWx1",
  "key31": "4HAhAysfcQi3TRbNukkJJQiaPxMnc4g4e8rQ6CFCTmudMLyxceM7PxSyR6Kv5uDQxqY37znMdMa5QPqQR1CJFJ7w",
  "key32": "3nFBBUuD8dciHSfFNZzTgdVTz7FT3TrH6gUHq3bECQhFfF4CdejLXajnvag6SNhH7sneon9zGBDt1tyYZyQrzNc6",
  "key33": "5ek9aFYxNmgK6gsZ3u4uzoYHnRCi8Vajs92a1D3NCtpzfNX8Cn2XZvuqBepLEYY7JeBv5v2HDW2h8tHtSn8wXPvL",
  "key34": "2LA2TbzetACLmvt5cQpopSetUJX18fhG8WjZ8aWxUdNwJ2Jyduhmi1UsKkxanAnaoXhRsQ5FsChqPtR2ta1Q5vBX",
  "key35": "24BwDkz17TFFVoF2LhncS78SHreuMCiQjWGhqLLQ8JQgWEQmnfbKyn28HrFNdQU9yfm8oV5RVSwCo5wPfsTwFKTR",
  "key36": "2SptqAUSR5yn4j4hi3UAxbiArHrRMoHA5HnRnXrhPh6V76rdQ9Zz7WMMHHCCjSV37yXME6FNjqr8fGzWv7KrBF9c",
  "key37": "5asAz1edavbNpbZB7eqAYa39JhQuGsEWcjS7FwaVDT3xEsRSwMocXmwYziNMBnMV5fbU1SZqfSrSYzokTDdWzp7u",
  "key38": "4ZecZ3j8N19jTJVtnnrBUDZikkkBtj18AuvJzRcGzxjFTQCVotJXeLmywFBuhMnh5cnaEKnL1dGQmBmK3Y9mwibt",
  "key39": "5E69qbKqRSEqTsU6gXsntaFL6jLGw95UG2qGsH8rxmbXNimiNwFgLjfG61ohzTLezGqkRnZCN2Qz7GrryYULwMhQ",
  "key40": "yTwQqbafBZ3sSsjqULYsekxttYq8Bgp9tSQBvjsQ4yyAwAr1vG46CicZ23CDN2Ra7AKQKR3EhvaD7rpWKYhqSoD",
  "key41": "3Mszv1rYv2t8Zu9koFCZ1QryMEfrumqqbVBNqzD2ovQtBqQVBhXsUbbRBZ55tXgRLwNiPZQ3Q4XsqEmYcgDEYQ3P",
  "key42": "5TXZ7wwuf4Bmuu8VQAB146cRQmALNmbGZHuRPsdGTq9wF1JZm7FM5a5rz4AdUP1GRVDKvvur5HdJRAJha4FHi1gT",
  "key43": "3ouXFAPDxAzkpmjytPdFA1UwWbF3DP8AndfxBxEMXauMqeJzstKBuAxADNzPSFStBLhZYZiJRnKUyLd8ZZPncpR4",
  "key44": "4KBHKa5fwiXjiut2wQeiU4Fz96Ufoq5wuEjKTbq9tJ7nDtcAdne3Qzo78jNtptiSegcHjPohu8csCfUznss3JjzB",
  "key45": "uAGoctFYDafYAXnJAChL7TfVZnye4Aemq1tTGE8SyrA6qXs6MhBk1ge4bNMZdRRwsrJD7CDmuyMzk84Hefb6W3p"
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
