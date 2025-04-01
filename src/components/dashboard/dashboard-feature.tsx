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
    "3wA4qRaNdb8Qpo7n1mpZb5gdpeWcZTvizAdUzAuCsepfLX4hUiv9qpFJxMmxR8Vt5mNQvcrWX6TfjG1AWtkwGcrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sbskAPukHNfdZCE3UuwTDJL3rwQY5Q15VCvAcJ2qPEE3uxcURzPUAd4JW3pwDJ5yTxV9Stxg4tMP4Rz7J6bijEy",
  "key1": "24DJcaQzPpE8Ua8NTcrtQoFpxNCSnm8879d2wznhjwsJu8PQPL3CHj3ktrshn19HZPAxoWQrYTu9t4XXh3vvyeCK",
  "key2": "5znQa3K7PTaNvK7pCrM7krNZp7L5KFV5ShY56ktgbBq43dA9erAXpD1JCbtrMy79a9NpWJZQM581mCjkJPKEZbeQ",
  "key3": "U6Xn12n3Wr4dd7wdjDqvspDHh1Ur2iXRdc1AjRBsGDLZ3PndXZfzAkkw9HDkvcpfBsTcrcrcryxsH2WCFY2ZTWL",
  "key4": "4aZmEmht3iEkoMPBAK5iYhmF8WwHJLQhveeh3aTBLTxdcVfTojP3ovaAQBwgETm5iacSjFDyUw5e5yfDH1BgXbV8",
  "key5": "2XrUruF3TYWhAqX5FUiUgFBjQqx6kiJP2Txqwmwv6twNCoxttUFqognCjGE61xt8THh7kY5aCsSugmiViJ95LoaQ",
  "key6": "5pyEZzuVLKeaaMk8pte9r5mzcpmGRfzGf55v5ae88H2QPgo78BnnHUzXec5ooX9bGT9tnStwbcRT7dAQYhmoFMCu",
  "key7": "2M3BGuQQysV9Uym18UQ1bBtrm4vErR5N3tBKCdWPhdn8pz8CpgKB4JJ7ZKXgYYiNDycBpaSRgSsXyNXjw5heUDaR",
  "key8": "44W96NpoQMQXffK8PoZ6bRVx7oJcqdfazcHD4ay9Kp6pFRmixh7oHJEv2RdiFdCCsESbYmRsFy5GaANxnxzPVrtC",
  "key9": "4uf58wwoxkvKnwnHc3XXcgsLgbsxiTxUm64u97maqyxv6zqeE9wEhSTrbXKzqJkhzNkPPvba5fmnPfbfyKxzFX79",
  "key10": "3PD4amnmMoX4JQR3qBEvNC9k6KPTAS4a7W4K5w5R9ecp4FvK8YC4kMagTzZ4wfnLf9YNt3164F3p5i2mDqCRWqam",
  "key11": "3zT5KmAbYJniR6HeKsfGbhbVcrRMJMCeTERnjKSKN4SfK5F1d28xnwRLoHXqEcsar3TEVuQFAhJADFgCYyp7TEwV",
  "key12": "4t2RYUJs62UnUvoz3Z9Uz9NHkFAZFiyzmbbMzFns4XoNX7VF1P6wGuE2oKQNYTRh9aLjGqVhVaiqEZuK9YjsFCDR",
  "key13": "Ydm6LKTVWjdNUcXrMyHJ215jJZXSJtaxLaXHtHq458KMjqb5Kd63sDA7UBKCaRkNtZPsmJJJjTahS9avDsdo5h6",
  "key14": "zCwvQ7mZokg8oTXmphgPAqNiuoBsWyus7bVdThrjPgEP5owf3kB16fcsNPdTwrc7DwzUW7urtHhDaNbHgF3t4g5",
  "key15": "sNPBh6oMHYBtg5pMwq4TFovBud82w2UVfzJjkBPmPdEV5yF4u5bVyApDcxjRXzG7uJtNp9JhE2pQ2z7BrDUJ4Nf",
  "key16": "5F1xACroWLgzRZmC7nvwSh2jNXih3qyrN8kBwM2c9EF2a99iqRvqPCMbQmdk89nsuXJamneg8CvrJE1ANfERLztt",
  "key17": "618T7iFktwa7xS6LNKjsSh5pbX79ckyoHpwdWktbATSqEaDDDi2hzycxHCTpDeFTdCBk5kN6yAYxpVTCyLif7rr3",
  "key18": "64Ugp6qr8pfnVHsGdw16enoGqyFxedTyLyBXvoP2addinPf4wAyABQPzVnVzsi8G63rCrX2PRtdm5CscpmP1mRjW",
  "key19": "yh9mhATYhptUR5UfVeqw73X3axWmJkwYFC56ucizy4WFvjfZa4o2q4VX8yCEGck3o14q7Bk4fLETuGEbPGYvKUJ",
  "key20": "3JH1voNKjFGxcJCze3aoSCdNzaYHYFbiqeMWvC4xCgtH92AFbAjEYC3RsfHzT3gFi7vTurS2Fc94ePnnFvdtnY5K",
  "key21": "5WHgGv6aiSxUbbn2wSVLaF7ACnM7c34JwLyDVVcsh3kHJX3MBVFaKrSg52VZvKBHBV3AGDayDzsxBztmkoEUA4UN",
  "key22": "38AV2PX8gxLiEzZnMYTFtABr6rtxACGVTmRXyBmgBrviUsGSvDgpAT5kex6pPZW69xZ4vuyqFLw3mcVZsBpmM19a",
  "key23": "3uHnMHJkXg4XnEKdKiAGxWsPfpuFCnFaov8Ch4XxDCQJByGi8Zo7cNkJDKHPhnh9UcgiRv5ucXsFkLmhQt7KnhvP",
  "key24": "5hTt9ikGEJ5HBMWyv1nw4cZqgDjc972VUbXqvoLFqJ3msB5mLfeACdVNzt2DeK5RtRQfncsfEZhuuorUkPVdZQn3",
  "key25": "28bCreovxTAhYN6t9EcjDoHA5YR3CuVzbwJoKwskuHxpujJEuwi9J3iEi7F9jny8uN4ayLpvmtwuWs2QeiAGpSuC",
  "key26": "5LAYfjACz4odF5CXpUgvyBgYM6N9KVxyzPEKM6QZSZ1jj8jTEH2TqwVCBEzZwCUpJYgBG4fW7NBZKgxPekF4EJQm",
  "key27": "3J31dTtjs54YTNP2zB8RhsmwsUSDNVAZSwm68jd3VSPzUyhE6MxZcsakgbUGu9u48LfZt5jESeVpjsztUgTFLUgo",
  "key28": "4JBGC9UqvoPftkVip1STwkHApNmDA3a23ydrs7DHPr1vnjZNmmSdg2QFofDWfmmsemuHo1PL6JPzqr1zhKUAWd1c",
  "key29": "5xm3cDqm38oVbpTASYBo7QiqaeEgK4PYmBo15TSzBH81xhtBDx3qr6hkoQQTL43c5Bgj4VNQHVUHEauc5txQ4MSu",
  "key30": "9v1rRs7AeEHbYUptpzn2MPvvbEJP3WG9fXJ9cFGbrvpmicDWNgQDtZ3QGWqoAMRqK47VQseFM1jwT1gZSYKLdNA",
  "key31": "55rixqY5BcBu1fwoiKZhWNracqfXGJ3JevzGLSZe5TWcWbscAiqiVL5GX7ynJnQBr8yBG5nfPdvAp6wt6tKotHfn",
  "key32": "xQyn8pN3ZK5HB1uj4o6KnmUBkArMmJ4ujMGUjRU3YBaQSwH5RYD3bmQkQk4PK1tiZEKhWwTMfHji2rGNKyFknrw",
  "key33": "2XXgDGfQSCatHHRwHy3sXfGsuFZGhKitqCbRf4AhW8vL82VTfqDatiEBxeib1hH7uyCZLDCkKcPTWkdm8HGZrL97",
  "key34": "3qaFH4xfvcbv4hn6Vd5jgEVcqwxuLgum4dep1n23hsd5Qsp9GGZeiLaAu1YL1AvVRGgPWHPPZFgYj8YabMTXvXgG",
  "key35": "5shLiWJs8UPTEC8se4vDNDCqYwarqsTQ72evVN7BW97eHLy1pNq2EjrxrQG4dvmR63Wjso6dJ3Dbq2vgrUijX7Pz",
  "key36": "5TEJDs24RQ3UMZnrNzrdd7FdQUSzgFted1qCBLKzDDyuGo1ffLojeA2jPZrXAVekziuGna4Bm3n7isMtM2kav9KV",
  "key37": "2aNQHyEjJ3tVHy179oewKvz8JP576cnGpD8vWK6U3wAaeiQScj4YRmqbi1VkJ5pkhdALtAPP6AmKiQE2yntDK3hz"
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
