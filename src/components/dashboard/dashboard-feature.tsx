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
    "5ETrHinzbyHgpw4d5ekcW6T3Ntz9dWYpMcV8twDkpgKEz39Jtmr1qfBm8BzjLevBWkgcqXWGHsZUXsHSi8b3iFuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8spxeb7m6MJ7UUwf56fThxNtmzUVBdqkPmBw9r91yyQCbizPJec3KqjsFSTRnbeDxYFjcLXZdHSjokEw3fmacN",
  "key1": "2357pH8g92Fc986DERCqFPqVUsEWS1dbyqDQUA9f6ScQ4AA32dCLm4X5JsnY4GvALMB8pNMDHiyzKhMaqEnYwX55",
  "key2": "5PxqwwRfMjzpeeqe5WqZax5ddhU3ZPQSNDuUyUX28aypdG9Rbgs39yobCbXDo5NDwM1PGsEVCirPPc59WwGyx74c",
  "key3": "27AHn4t85i37kXiMkE7uvrF2BoQ5pTvPa6HcYhXVfQiGJUSLa7wdEQL6Sk3VRtNP3FejSCqEmznfir4vbrYBLNMY",
  "key4": "dU4ejmDfZ3o67oP6xrjyXpBWEG7xLvH5YrVWUQAKbG884X5cNsYgXPrcdW7VYKH57NDbMLCnknCoyPCnpMR1qwm",
  "key5": "4xyzKXoeBx21d22ayU5yCWU5isSAYSeeWLEciNpHFvBXkD4Wad4zrJBSA7gj22rbNyqVvF37jeHVMuVwT2dBQzih",
  "key6": "62WCKWpnTf6mAU5Pw4APFwMFAtDpcDC7Z9Zx3wn7X1TJLb6wEvH6LpwzGtsJzn3ZLf3hSvwxG2Sdqz8mvKwXiyUh",
  "key7": "5cDV3rMdcWqaSbzoeYB6QJM21TfAJWZvu7caAzuE2S7DeMbKwZP8AWadHKfyYknLsP3dovog3DRWiNPTisTJ8B77",
  "key8": "5mBsCVQ4fQKppHi8xa2nGyJsHCJgFGNAZ2hqDe66vKoWvKvvy4wBLBFEkfWwo4HycdKpLiMPhyWrNh9HJmAfZyeC",
  "key9": "2YrMZYpQBLQdgzU2FefzDAMZLJUueVGYrDz6pdfqomAbXF8mWPqxqDirai26WgqryZZxsFa6MmxvAFTTnE9Fz8ZM",
  "key10": "2dXtigLAEVccMxkAR1fRwdjqiaFLyA86zwWmZaHRJGQU4NDgTvhDf5vob9ep234oqJ6Gw5Bt9vdXoGFHzyqjVEyx",
  "key11": "3tANHKbhXAhc3aJfcFcdRGi3R4hRUsg9TherkLWd1NnWnnTpXjfkFowYGWnnGzKtz78EehJ4EcYYH9wDs7BdrPpj",
  "key12": "3m88NmBTVFVJqxWiM1dtpsw6QDifguhAboyr2okh94TUztfecBG2RLMSzpArFqPMcUEjq4DHypFfbJ62fwXAGSQP",
  "key13": "42J12yZnhfJxc6B2WfKdy4WJ5aLCFGfGJgsPoyrDvFzxZiYJrP6E4pT92CazT4z6TPcfFVHkYQZ2iQF5wMgTtXqS",
  "key14": "YheoVauwi7WzVG28uZYzqRoBxziVk2ePfzqzPmVdHEkw62bugBJVN9LcL96AsWaET3WzFadUjLaoGhTbQJhs1ez",
  "key15": "5YhKiXUu1d3UCRhF2Q1jkFM8E4dyX6zkTmLEZR2XEnz6UNYNyyqQ2sfDQGKn1aVjLe82fdS1T36XSWXs8AqqmbHW",
  "key16": "5GQ5rFexxWUWK8cK6vx83x593NBxxxuUZr1PzaBWiFuytdJsEJdPDFkFn22HXMAWL9j4ySvtq1P6B6fAWx3bFn8d",
  "key17": "2SSiUxTk5FLjx2yaZQ2L65h5eRZuotCKwTiZBU1Bp9EqYJSFbaWEiLJ77HcRxaVws76ikNRULhz1QYNahUGtw3YX",
  "key18": "2Qfa8FfMJhoPS8BHjGZRW7yRXeAiPHN1HpSrab6YoWVAu3kJnyyXDYPM1xh848Swwsytysn67X1kWefdvsmHrKYr",
  "key19": "3ytk7vVc8X1NUoiXthsxmFS4R5rwmQSqMu2LH8Rn5uSro1Yo9S52TGGkGeu61UYMmhYHDATXCtu6dx7imRMFVhmf",
  "key20": "2HWSUGMbfCmAf7AR2mi9rXnRcpyW1f7mv1BFqLioK2zJBsh3uBoNCWJJ7ziX3P4h3K2HzzrTyu3WTGAxgmTupGfz",
  "key21": "zZF8c8hocrSgLArWJHt4u9f1nxnaXSXq4wZif631kDQnFg7KrrTMcYora48DLDgRYEXKTWBeoVj4b9hThxpUhcE",
  "key22": "eryMeSr9iXzPM74mRrqMT83idhwHtQH8oXY5yQjZ39tsrK3vPZGVnFUjVWorTJDreP5sE1AqvcWtK3QMFznrpdh",
  "key23": "4bwCguAuJXaGNq2M47okzEVFqm4Uv4E5KyYsuonirUbxUH1M8zHEk2KVnKzY46cFJktA8RgnKRznLz3c4DRBf7NR",
  "key24": "4TEVu1D5BdhBgMisWfHwQ4xJ9C2kZjbzdCGVdFQfcQTp1qAz14SbcDmwSbGZktpiobQSR9YRd6GKszknLgeDUt3M",
  "key25": "39jqCCMzkLMRUKAKoT7jGZGu68c9QY4yrAFSzrRXtwUCMpTr46yQuVnFKMDcuydM9bxJfqUZh4vZmKzME8AevJf2",
  "key26": "5DigoMSnCw6CL6ttnE9QTVsWavc9X2WPNKu2fUxofPnKU12srE4kqySBxRU4uro7RfrqRosH29bQMxkbRdtiZsrP",
  "key27": "5nyrJ4jZEddmBPu1G8z8esMrgmHdWatmPnLgLFAKR3pBEwxWFiCsFD4qDG8GaJtBFe795zAWazb5QkmS2vS3ki3C",
  "key28": "44AoHSJAFJvBGyn5YRt4RiVgSBz1sV6yxgX18NbXKjpBsdFyzJxL6owpWcZVSDaZ4mwQkusEYZ2ubwYGzcZn85M9",
  "key29": "58SUgDNxR5PW8eD4v2tApKXQPLFvkN8RBNhMDEs7fKrD1aQnB9yFjPRAHTe6wKRPu2QjoKN5JcCuvuo3oMgmuB1z",
  "key30": "4fRMhyhtTxg3ua7nHrMYFT4FbonVrSw29mU97eCvhtFU8TTaGmXwqqiirspsqZ9s5MHzEvd2QrVmnbFtgCwYcyuK"
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
