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
    "2mvM2VGu2n3y2ix7PUc8vWgSrqwcGVe1T7g21J6VacBXKnDqucsy1JApJLKj2UTb9e5PdiMgR3uGvBTJm1inK8Bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VrLUL5WY9BNEbYPpmWXRTRykQvpX5SnHVzkUsbWHYHpMnQW94Xjy6S3CRybMJyae8GPBE9Ly8hzjabSkcByP1KZ",
  "key1": "2Npf4nMBXevYUSEbGiZVdBECWtWXFxPUFQxX3pffWU2C4fCqtbEY2yF2FrzfhnnWpySVV9exFTQFSzpkAyHn9aPj",
  "key2": "2bgksTNVdtgA4ygyu65backqyxeoyz8XMJZ1UA4NPcHXD6hxMMacXJZ818sS9pAyPmzuy2PeguS9praboMQuz8A4",
  "key3": "4MFnXsaFFD5xAN72Tq8LrXAjhSVQ9BkwZiC8TEtgPLp6Zud3iqLR9xYzmZQ8S8ZcCheMpooe54JAWMkMBXzXiiBh",
  "key4": "3aFaAprjxVfg75zxiCJxb8xM4Czy1ECjzrzJX7sGyg49KtrWKiPg7BaYZNwet1S9qokdtifkV61WQv59SeSsmxz",
  "key5": "2RyCF5Nz9fa3FDvMZDEtuRSfYHnMWRUTEEqi4oNeNcBGX9vTctDkFWXZdCh8GQFqKVTksFMJF3Uikrs7VK7gexfc",
  "key6": "5uL79vvuxewURr4PfXLFdzpgCMpqz1rSsibHnSx3iBxnoA1SRyGHNgWvHfEek73TThG51YALPtm5WCPFU2ewoLap",
  "key7": "2YeudvaxBammUfkUkhot2G99Jreo2TWjWNos3fJySsu8NTXeE4DVfarsgMLhAc6zc5DTnSVFsN6MQk5iKcjM2YSz",
  "key8": "2VhWUZz8nq7tnsxPeVVtudDL2DyXs91w4sRfWR68z5CnkCaPNgGkXQELSXJpGqhz4Tq5BVPSUxghyZYVfuBd5mBK",
  "key9": "5hKcV7LRKdXS4awQETNqCzT3E54PXyDf8aHjHZ998AeUJtxZKi4exx8WVZD5wHGZ2bUJWn3zspcEZydhc2BfEnNx",
  "key10": "4DqKscNCxsyDJ446Ad46nzZB2vUazkm3QjRTF4ZzngJEAazcMGp8Kx7EiuEt5SYLpsEGkLowJ8jtSKWq37kQutW6",
  "key11": "1NvG168fiMu7gaKyz52Cy4EvXFvbsN1Cr8X22wJEuD4njF4rDqAxhd1JzrTYBPXs8McsWdJLAZcRd1VzGz7GDgR",
  "key12": "5YrpUwm4XTThJ6ii66hksyXy6zkjJUMEZWucYV6dzGNfdy5YzneWro4mvvF69yzDDpECScxpVtrre3Sjeqi4zefS",
  "key13": "4QpvSqpgXksv1oiVZZQeuzhcJB8bsDiZHohwxihqs7uEJdQ9eKjMhcKgPahfDNNC9XRpfk3cqucNCBYfezasPNjk",
  "key14": "5S2KdisSV84QXpsHr7vCyq25uup2MswCpnugo22RqTzhdGTzGjxetgi2X8V5urKgmVArQaYxdo9L8fTALxf2BSyL",
  "key15": "2vSe5nbxSrYYGZe36cpSXsLdhiPj2uywnYe5mExLwmkFd96krbnbc8nkFswmSJ435wfakcHNRZXPTfUYU4XtpDpq",
  "key16": "2RLR5ZtieVVyDzKgnaQo3QDZtoRwsbBzV7ZMVt6LuXrHdGYCCMbuKPZqCdyzrv7HJsxc8c71cY6VBwzTXF8mACDJ",
  "key17": "4Wzz9MjFLaEABXJGgjFsyo4CbtNtG6CqpnKLpdUhznDmTFHsTEiFxTE6ANvzCn2KBi5rXPKzDpkXcRrCZquFds67",
  "key18": "JLTEZpd6pZARoPbEDcbXqSqXQqRymUQ7s1K1JVKkpYzv5PDTVav2d1NpdySrkU2jTUweHBpxjuz8Yom3QF5LX3W",
  "key19": "4CERQqnkbkGiWmQCdmL4wRe2xeQqDugBDkD9bkV9BikpiZ9cNADYMXvE5SDGWtaR8jjnJhp6keRTawmyGzqFnXD9",
  "key20": "3nNX1rm1pJL5fxtFaepivfTYxRaArJTvarDEvmcutDrb7bCqZU8NME7zckQMeY8YyvQUTJa4JqRjpNjaYQKkcD1U",
  "key21": "3VPZUs3aQi2LNCUjR2zd9jKv7oLYw1VjmyJG9BcZXJXpV9TUhxsyz61TX1ACE2wmeBzgoEzWn8bmvfWVNAXzkwvJ",
  "key22": "Xckk5M4GG9cdi9pQUQcFa8tDSZLmDqNYBZ3X8keAJJ3pWWZ5MhAhQa8TLK25HAnRdoa5VESFvySJ5EZUvGt33Ap",
  "key23": "3sbzDYMawP9ffGMtokdM2BbJR64PXZquXB2kL8FP8C52Ab2vraCpF5asdWztwdksUDfX3MXBYemp2v5rBp3yoBWA",
  "key24": "245JqZozXwuWCZqMHZMPKE6n72kfhRVHcnvHPoRRvRB5WtkY9c1fXyqBXQVMTNhmqPSKdVzHR57ARhszH9SJzwVy",
  "key25": "5TwSUu695uA2x22SPuNFkKxT4pVM2Kofj2SXqXNNskW5jsHUpAA4ZN9KPj6JuopL1c6SU4hegniGgVpWu5ntnTDz",
  "key26": "WbMHge9G7ZbsS8y3kWCKDDBgBJaZX7sucaecGjtuAJrmehoG5fqfo9yore8xmy7hYLY1nXPTSEEWfmpTQvpecSa",
  "key27": "2hdKDboC3huoYHMs3Zb7RZKMCWg8xMMnyKmKQ8smA7etkQk46ohaRRjUzt3RpKVwimgnQKdN71P5ZJJxhPw53WhS",
  "key28": "4yYucXBtKiCp41RQfbgz54jnhxmN7ohDQgi4WfAfqxDz2mgy7jWB6SAAj6fZZBCf8DKNRo7yG4PQa93dnKq8vQNR",
  "key29": "n4SQcAgBScLrmoL8zJYngJpN7ry3qeeHFMjkVNLPYS94XGpy2eut1DyX6Vi6Zt5RQKGTsdfqsQZPh2qwd9NYwNd",
  "key30": "PQZE5DjYNnHMMGR5vATBMijvrKBTZDPzkPCpYcNk5WfUGxbWsb6M27AgM1K3qhSi3uw4uoXZkr3Fr67YzxJopdK",
  "key31": "2Nj4kJGQSipoBd4PnrbfW1bAdGM7Gj24WutuWAQsasJSSSwbojiY7TXTzVQqteXGRT6UqGcZX2qV7AEzZnAWsWxF",
  "key32": "3Cgi7gYDoGv9A6WEo2F7dyZDbUCqNi8Tjb7r2pbXJB7J9wANvkYtMxY5YAhuBrSWoVZBgMAp4vgciwLL2UnDTo8d"
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
