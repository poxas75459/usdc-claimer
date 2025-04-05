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
    "35XfBD2TFz9acwm4KbGWthCDHP5abdor3UanhNTqAYhPHKQhX4UpW9KS5wbQBH3umRMYdYtkhMhZYL69MmtN9Wff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bTSarr1stcfMKD3hKGPBNYwcA7DemT2rAYfTctbCEjdd4hfUmjmKrq28g5UWSXdR6try3vWktT2PGCuKVVffF8v",
  "key1": "AGKFh71ryNxCKcu2MkrG7q69e5oQKsXFkJBU3JkHaTRmLqy8H5Mf1FWEsUuc6oAnNVc9xkTFm9toyNJ8ge2v1gW",
  "key2": "5PorRspPGfNGVWyhSmpeWTw83V2GJLdcukQp1Pp2migqvMRWopVCGUqa5t9hpZTMuxxeDXhn52SQGuvBiGuRZTWT",
  "key3": "XnXJ6QvFwuSzHisCQ5QoE1hGmFaMG23uV4FM2ZDzL3vWfR2NoHfc4CYX4XmjHLttmvu2XH8r9KqCi5q8JKvuscb",
  "key4": "5RvfixqSJHWSCLCc6PNj6mjZJ9cKoDkr7V9xEnoBh8ywWehw682jX7w8Xf5ZQCEXtW86BGMPvVMtGZh3zW8unzEm",
  "key5": "5Kj8n9Pk6ewFAEY1B8aqQkKtpqTmy4Y3u5NZkMd2JmoDQWoyffnGzG8UU46fHsUr4gEueYDCmwBRWvzgMNPXQPQm",
  "key6": "2KSJkaWbv75vH9wMDgzZXt3tpDJtAKm2nr2f4yco47Eyhy5ta8pWT8MkEa3h2A8hkPzvtQRxyAKvGmfvvqQYyb88",
  "key7": "4eMA5aRbNGFU1imF6QEKXCsNMcP28KfBVyAacWdjutnovbyRg4ewdo4UFeWeJ1JBqzUXCPM7nyA4onSTuo8wG2sq",
  "key8": "5bWVUepC59sDX9HoX1X4FpW632gq7rveRUHG9TfR8jSAqeP94aFXouEWcqZaMt9pDY2e4f87nJ8DefSxXjEPHmd8",
  "key9": "3fRfFatLiPUUUbcZRvPpiThNfUcGiffC7HBfKjSQQcsySzavdqNTFEv8hmnH6LVwkQQcaVDC13Y7dEE1dMXmUiZt",
  "key10": "4dy532CZaFWM6eZNaRP2W1sURxSs4nUTGG2BM2784vpFzeehvPZxemJZoSTfX2haGNpaWdy5cy4ERApPMVyyU1Xj",
  "key11": "28T1DE65zFY3fJdL83h1UR1hMWTTN9TEaEG7M4726CBLy4oiB6NFrrKUqKfskbm6BMeoydbjU5fMfa5GgLVwzd5z",
  "key12": "2Gkuz8fvHU91kHvK6p3V5ugtGd9VgAV6Lf2ua1gZfwcFVbZgFUPAqVdMpuxwezPYYPAozRKLGYHxr5tjWy24ffow",
  "key13": "2nK9zoyBSFyf5ouDKstE8Z86ETK1soSPhYjcTAMzEjW9v4idxQgcGnCtdTrZJeqPwm1Z8f465r2JEaH7ycErQiwM",
  "key14": "3ZjibDwo2uQ5HGAmkjieDWhzTbpSGxmVwWGyaXytDDRHWPW2w8MADUt6RXKjSNm7wQbY9hZ7aXvLYEhhj7B9Qu3o",
  "key15": "4sS11V1LkVMuV4HWj7AjmLhCkwd6Jkz5XyGX6oRMqD1DgeCA5z6cuABafviAwHK7APFgoJG9NVyXJsneUPcBVfUc",
  "key16": "5fhAi8jc9DLdVxw2UXzAeJ81C5K7H4KuDi5AypNmiPjCBMbV2S5gBFk2BpnM1rTgJT7r4xy31ntehKeMeSTuv2qB",
  "key17": "2aYMm1zmuY96MQ2J6D7FBFKRdJowh16BDgkQaLapUySD2aG31xAbtc2323yztpLzopSXpSgf1K22GSguCf9NqFib",
  "key18": "3L2Wsbe4TVzcvfeby9nBMoDoFQRECYnUhsVZUe56QuJW2DaSkgLBVFEDUubNggybfnDBujacSopLbPmtkkVpna88",
  "key19": "3UdbvFeXGtguBx9ejhSTkz8Terj1JEu9bsjNDGSXf1fVv7iRkaDz4LXpKsJz8hXjo17qbg38vVGG77SZiuMC3BMr",
  "key20": "us6GmqRywC5zMaDNUM1mTtQSMoG9VUS5PsgZfLPFBB4bokyPzf8uYYgxXVjwfie468ycnHEm1RhrcvW2CpNViS7",
  "key21": "5puZQLXDyVLNsk5heVT2xkH3kTdKwnkPDejPpiPQcWP6rnYkx4VWDmdvS3UYBDcKXFg6oGHMqTPykPdBhkfeRQfn",
  "key22": "3EJkGyjLmiVWpiW4ix82io6ZvrCauw4ET9ocVtAe8usRBhHZiSfK7c39Vm3pBs2CUbRybPENJsm3qqmGBnP8F8Ff",
  "key23": "47RcpDok7DnPgMBpEwfRbq5m6FcmU2RRcbHnZHmxxgSBpAg9rkD1om2JZAzoW6D9biQ7cNvzKohfSQAw9PcXGucc",
  "key24": "4kb7fwp1u1edw1fuKSyNAjVKvJS4KUwXDeJybc5sz3rKvCTVosHLETsgGdSHdZ29WeenTELn4EfRWPCBdBHWP2Yg",
  "key25": "4DgyQTARUiu14541zAgYbgJYfstHgKZdp2iK3dHTRyoi5hpwfdvfv1gy5VJi2rcXXjCSRYxwRQ8ZvdsJZ5rYBoEm",
  "key26": "5zGwyXKG7a6CWW76MVkSfPYZPyMdw9LvbEiUy8CXc2yYLLwe2JStFY5wwnWxdpnpzxVsdUdbXoKHhPCEBKF7oBSn",
  "key27": "4eRNJXkt1b5kmnn5thdKgpLMe5qWP9hCb9eiYKeWy3f7pTD3rGvMawCWYESqEsaz8sTPeRgEzvQCTXuUSUdksK3b",
  "key28": "5TXtG7arxka4WbPRCEkSYTRSWkjFMjsFoe1ZekiCbskdH9N9w4ps9aCENq1H6cBoZBBy9cVoYJPpBcAwdMBrbXBt",
  "key29": "2635RRUWUFMjy3XN6d9VBF6EAjkoWSc66R8HkBbnFMK2pdtS5eBXvv6Bh2Azt5NyW687i9qmpEJqpzPCxgT2gLHF",
  "key30": "55GMFrkxeunkHeUCxFgseKAAC3eXoCdy4mBWAQvtDqmkwDddXpS93QtKhiYAZM4jGQTwUoFD63Cr93y7C2sYyUdA",
  "key31": "D4gJ2dw9HZYLmNXsRsM1CoNdrxiqmQhF17jobqm13KjAxCJK6WSooKTUFvGdyzRvDW1HuJcV9ibbaQDsvYWsrkU",
  "key32": "4Ae8j2viYvHyw9qSXJJuE3K4TQCtLck7avDbqNFRQCxzJBZJXrD8D1n3FE3W7MdywwhoPoA478rcvWPZnzJHUrHi",
  "key33": "LXjMhvwMcxibuXav6jeooUjT15Mz3ZmHevyo1RGvPSLQnoe8gnjVX2b94L3ShY9pvSQqFBaFowSAcqgYvC7LSL8",
  "key34": "5n6NkdhCA7w9kT8REhL4iU2pAHteeH4sxShNW1KAkF462augUh2wmcypAr9QFFCoxnJdaVa4DzQPVktxiGS7yP6m",
  "key35": "2fdLj76gmJ9keuoE5xuxAZp1BgoF6fJDixvHRoi5wfSG6bNxqxfPZ4BhKDu52Z4pxayBy1y7H5snoiN52JAtEjpn",
  "key36": "5bqA9j81wBdDmEag6ivs73R68y6mhTB17cFcaeJsUMrwpoBQpve4VfHVYGuvJyRdLwFpg8539TywyUFLKjDsCWgQ",
  "key37": "55ycBVpC9bQfcK5XmC5s6wcgJmM1Gd4bxmarZQzX2hS6yEgACWwA2rnQ6FERuVLxUctoaWVZPZoWBUMzKgSD42Yx"
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
