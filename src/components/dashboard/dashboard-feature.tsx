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
    "2vMPqDaYr5G2zBLGHVmpdc2Tx5Q7o4MvHAxocJYMa3zM7SufReMjfSJo3iFGf21rBdjkrwNsySxAgEkgjuRraayT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nd8RXiuCNj5FWguDAjuppN4Z2DauYH4ssQ1sjc8hSFh8QeXWooDMpbLu7waMbSGTN3yLRYntBihBjwiUsfaby4J",
  "key1": "42hinWgsU6LXzwqB19XWhrRH1mSoMLubLzNfQz1Z3oqiHGByrMRCDGNtk4ynPLGAkdRoG8TAp3JtSAyaGsYKPBD3",
  "key2": "5ZbWpqopRMH9jzJghrB7J5QeUdwnAFHDRQskSV4ZCgtd4JLT7mRKVHHztmpNgq3ycG8MhXWzQVc49RquRYyXUwSX",
  "key3": "2zaUKRKzEsLpntKMvgrwuTeWZrXMC6B9xMuuYX21XeDnUU24XBibhxW1sAPkcYP51zyqmiKAsWHQr5jschp38uNz",
  "key4": "pVmVxQ7tqWGcHdBxrXjGGkSCRMMAMic4MNXuKH8vhN5x2jRtCmZyuFn6vZ7ohfUU38s1ExcWq8bcC2XkBYVRtcT",
  "key5": "4vFCsSxCFFRYd7mrj4gtH939yapTm3B4vhT5727X1wXJGg4u9h8AruqoqX52P79qb53qoCxCLSn2DLb9eM4wicDB",
  "key6": "2shwe3KKRogTkpUMurJVJ7nDtwA7Ny7kCt3QE1UffPFdWzz33t4xSmYWaUp6RvhaQU1VL89QAyw8jorxCAJwT1LE",
  "key7": "3dMwkyACzkPBd6f933jBrda713bkvc3pxJauVCUHJuqfcnoynXe6HJr6aP2r6rvHctr1mPRXzkvQNjxbXdx3eYx9",
  "key8": "5qpKiyPeXDpU8KFQv9JaPfiUXgexETmy4v1w9HRHrbgGkRBdqYhnMCoxU9KQ8rksH4wirCMm3KciDufyP4p6gqSi",
  "key9": "4AsSYGiraas18xTo2TvwDQa7JgFwHkGa4FnU5zJ3s7khGrmeEiL8MGqUeDnSZz9RrJAY9GkARvgkWBig4KQhxtjr",
  "key10": "p8kh3h9wyyxMceeNRVnTWv6d8Z7sUSEdGD6e2eNvHdPqXYQzihhYY1Fu7BnMQCFk76VZ2jx3h9arQFccPT56BJu",
  "key11": "NcjLqYjUpKegwBEsRrvVSFnBPQQhDRZSm4f3KJnxrvbYSFU15wFdRpgAMgQYBvUyhN4oEQGP8EWkkzgwFE4MWRa",
  "key12": "58HuJoYh2jUGaNEcdrvk7SW1SFowY1d25ESKi1LbaC9ei4Uzb2ChQfb6q4Yt3bG8wEd5QSjtwfAVtyf7BhEfBdFw",
  "key13": "QteswLfkCZzKvKiFoXBzDWXArXgcfSWPstKYPX3BgHk6WKeFdsKR4yYhk7reqw8CAQpRK2CGEVsxsHfbWABw8fq",
  "key14": "5KwMRRskfz1FsCo2rdLbABjWSgSaGYUpjPur1DRLmRYHQp1pJg6FbrtdFs5QRWBnxhbzY5aHDP67tsfk187Hmvp5",
  "key15": "J7yB4D7o6VJYxtK1AzLArz9Zy8amrZtmrwuF1oNpUjqDj5NKARAH5kzYEFRdc2mAVd4YAy26CyYn8KRKGkMke2B",
  "key16": "3hKmueoy49cqemjEsQ7vnrmA4jiAFykMHnZiCT4t7iYViE4qXFeyQp5STwMY5UEDGwraiJY3ajMyRsynQoqx9AZ4",
  "key17": "5jp6br2E4XVxBHnUwdAvgRbzAD4KKT1gNsN2znmTW4qCjkyKeWycmSWVYo3e9S3zN6SEN4p8esqUxhUQKpmQkDax",
  "key18": "4qHBKddiDi2XFZKjQVtoxWzV3WAVfagrSnJNTVXUsb67534wk3grtnx4pJjRTzNx6XWsPbhbWf1dAsPHMrWH2xzi",
  "key19": "4rGxm2nPykuWcLRiVhyJgtVTxH7MSxsErLQB3B3aFgVmCCsb7trCwGtyVMU496ZmAKHKkgH9VyYqkMdpHV5P9AYJ",
  "key20": "3MbYycjSQxCGVPN71QhvC47uU7BgGMrfTBoEmeGmqihsdsDuvA8mwKf4G94NLBKNjHAz8fnUnYfLH7TJxNBe9gFg",
  "key21": "3RXVDyahWN5AbLiyaTDrFBWrgiC1JLt6DvKJeEjVLnGW66RyE3p31jSueKZoamnNB9v48USChUot5QP23DTgWxNJ",
  "key22": "4VUjGCJqEYguvj2rRE4QHjEkzf2UB5QsonHZFN4ztx9JDso3rXpgnt4aNhW3TGBP6xpFGzfua78K4sTZWdn6uE9t",
  "key23": "59VJTCcq2hhF2FBzXWtfwBFCvVbkb3eap9XCmpzeddjydFSHGxMrTMsaiTwCLUpZfA5ebpTwE3FgqXb4MwHWQ1kH",
  "key24": "2wh1HqHHCHhW5bzMVxiVmLkj5Buf7P6ZJHy47b3dPchWcfvBbU79uDeWTthqCYsD3DQ6SCyfV5EPtjxESwADVbqn",
  "key25": "BKJm3S1HepMrgf5V7Q68iskErKpbeonC1wTqCjGiJ8RC2qGu1FCZTPQkQdAePudXinw248YMyAAQQWWnoysA9r5"
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
