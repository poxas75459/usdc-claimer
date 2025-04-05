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
    "2Bjo4j56a4y7gmDNu5w5vJr1oY6EmMSMG3zaKqhbsSP93o2nwjSkNKCfyL9RD23M6LzB9n9a5dnNuYqVu142CHAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zwnmwZ7L3aqADTySiidPYhjpNV12bAE8xV2LjjEEX5cWGexqFMTeRMmoJJRXGUMSPVToaNAHPk9vXgcMCVWGza3",
  "key1": "3sayadmWsZqgu1e9HH3Fo7LDgyus4tCKSTRXS87fG3v39s7cQPAuNCY8qYxPBcYyqQNaWU2HZcJztvzJsHdFWCti",
  "key2": "5qYER2SpsibPViZtvNEzaX2yo8YUHUnWvMS4d2GyQ8k6RnARncMgJPj6acQ1sNnvpSr6THXEQd9RNvc8vC65A9gY",
  "key3": "3tiNJRVoqcJjNcn3vjuseP1gxDrD7rboVsQKe1TLVSteuC1g4GD1f4J6TZwuJQGc6mp37i8kSmh9u1QXit5mouPj",
  "key4": "2xuHydHkr2GacxvKrW7oqZ2xBs6WyYoDM5y9YCHoRKpVJdpEwHj7d6ujfgTqN2FZBbsfgo5xvkNXvTd9bdkXy1XK",
  "key5": "3NnZqKProrSL1xouDTZUX2RZ6pZdrRP1Qf2aoiWt9BMUVJ5Y1HikXCgEC1rEEHHS7trXnwom9m4WxSTszVnvBWCh",
  "key6": "3QwmDRPkfgqjt1v99TvTkJFmuP7ZQZa8qzUWFJqCj26wjVHQzKcjcqkWrJ42GNkk5yydFLZDogbYWsnm8sEXjg63",
  "key7": "HV1wYNo2akfRyL2a2qzdhUsbFwWYKEZ97VJfbqkk8fBdzVAVoHHSyuTVvepWP5DVXY191jeGtjJVoCkWiZLo7Eo",
  "key8": "3cZBovjZ5ahJ19B1mwPaedQECikCFF5B9b1kcqxGgB84nf1iY3GMu95qeTnDxQNXrkoXi71EUUodu4jEhNoW9w6L",
  "key9": "3yE2bSayrY1uUGMUkAPpxNJuYtbaEG785XtQyvkykgm9g98gURinqQ16BNLjUcvqzrs8gotgZpE76s8u4Gzh3gzU",
  "key10": "vexAqQw6XHYhjE5oWgr625eraR4fcRdnNTpu3UWRBAGK9ZJNNnB5xsm9LtqFRfqjC8yvnU2eBP938y3UUtrjvJS",
  "key11": "2shhRW8gLhM8yLiQMho7BcwDY9RtcLFsykzqLVYeVvLsrScZFEzB51Kg927vBre6eWSeNo1UDghXnA3jQiugAdSA",
  "key12": "4VtvfRu3AyLuz1VGCD95gUp2EWy6SAnhbTZkQsHxsthMM2xdRYhQgqkDWtuQ5tLNcF9sTMpAJcBvdkH6zK8Hy8jA",
  "key13": "211hjdfXHBpdKUyBWbBjdtWBgiBfPAT6XanH4obekEj4JrdKnHMrMX15bFwt9siozn2TpEKoweLT9AkjVNaeNr7D",
  "key14": "4QvJBGMxa3uVtgr3TW7HGGPeP9i8ioxourHDw8uwN7bUa65NvMCRNoqVCCTvSBkwYDYWqzdUq42hQnLvWYV649gr",
  "key15": "3jUBQZjTYYiafWHTj8QjZGp8TQUSoywAXch9wqhLocPPnFcidan6UAN8YFF64M2ihvisS1QXLj8Vs68ZtbAwNxpA",
  "key16": "HB8C7xRkkYsx6jYTMZcki1B3TmdDGno3fhuykzcCkK7LxqKDStayuBdYTuE8R5jpSSb57MeDzkFyYAa1GceMrrg",
  "key17": "3frq29J5V9Y2nRxSTBzVuSs3uzb77dBC7X8YFjjY6UWVNnaZ4zae7bKvbcPeVgxWaZ8GACdySGxN7WB8D8ztP8n3",
  "key18": "2mPGTEkwJHQrLqCHVCfuePzBv8n6WkfnNr9qQNkEWjvzmwAdFE8kpRvyVCEq7BKM3mJqYPZcmGSvxbjRnF2tPzQJ",
  "key19": "2i7nJ15R5D9WZFn4245TVm8wfDMQuYHxBaFySdwXZ5YpZw4Ap3ZQizGLRyE5SnamKRVFid3x1bjKLGeh7mqv2gjv",
  "key20": "56DyKR1mtuJzSkKEmyqMJfanuCgr6NnZNi252Lphmn8vU5sf16kZdEFDjjVeXCvnPGaQpJGqEFQVLJGfyj4asB7b",
  "key21": "4Cycfpfcw5cxoaCkqbaNN2KQSmdofrcy9DcAt5sarBG6n2hZpw6LFjoZNA8BoXCp5yuwUqe3JK5vNbJVgcruyiTZ",
  "key22": "3o6RSCC6TEhmmtr376bPvDE4sZgzf1ci4gs5XDAVDDYGhWPXcAikFq7Ez8LaXLmuuCzfUa4dJZssv9CJfQ4qjZrm",
  "key23": "3ZEtEteS5isjm8R5X1RWVKx39scxVHQfoAQxmV28mrZXp2zPmk9ySmKditiHeyGjp1NJw4kftTFJSgk4G7asDFF8",
  "key24": "5S4hqZejfauf8C1DErAVAeJ1A55knUHfHxLBRdjk5hvAr81RbaFnsnXz4qEG4vPfLj6KXTa67qG5bPMaJmbcuh9V",
  "key25": "2WW1zpWPZdiYK5Bd4uLMaDcHScYNpSAeHRcbrt3mMjq8yeGxx2NRcsHoAC6wGMde3LF5F1fGjuG7i3Aw7WRYymGt",
  "key26": "dCon8GuiaLCrRhBfeAavrfhbCy1EdkmTu9KtsmakPswJxpiMev8Kw1quPKFJAJLct4XiV7GrzMDtJxtNwudx3ZD",
  "key27": "28A6aDi8VbmYGSVTQP18Un8jK6e5zKc1KXMpsZV4mVeGQXzZrfV8nVmSTSTMUdFJiKGhWVZsaci4LwrWL7iXVCar",
  "key28": "WzpGsEgbYbzSkd1zHHazK35HhdVY74jCCMPFJxvJ1D2rTnS3Xacng84erfmzvGQnmBUjsLjNFUjURHeZdqvDsuH"
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
