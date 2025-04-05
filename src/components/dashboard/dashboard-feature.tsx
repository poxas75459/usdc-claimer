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
    "2Cjf2tyavM8eDSayttFeWfBjffqxkEjR9E7Dbq3oJ6PhoBLjPHrhrLdYJQMQVbFGb1m9mYBnGUvsvw5nwFmaUrFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31QoWqRQU65R16UCxuHAVouzT394np8WQgDfbhjJLoL5xn1Yva8rFf5SyhJjbKtZ8SHwpYfMFKJgh4dJ2uHmSJ77",
  "key1": "3p8uSW36Hj5GZF3VrY4pdL9tHxLALGAXRPdx5gTVVv4BTvJoU29DbP1zMw7gvLMTLXVgYFssqjWdQbMTjpKJsr6f",
  "key2": "5SazhAv8nQ3VynSjQQbbwD4M3VLZYHRe5y2GQtXHrxe4yKc5RsgB9PdaLxtehBWnpAt6Vh3E7XRR8GLVv9xFEq5k",
  "key3": "4R6nZ9g4pwTmgWGVrJDuZo6WVtSuJ4e3QPSLTg4Ckvsz44aEwg42vbXQfV5ZuXCBdhdZeyF8LgeWHR9ujHknCw9v",
  "key4": "5N3FmTYSREnJXJ4er9Ts9ruyExDC8NhD4u6RNxDR6BYMktZQjtKKxGnPFyh5Atatrc4U9ziTMGXJ5fg3tt61ie5g",
  "key5": "2dAipQ8xfWUXhwNsE4cicXiL6iD9gFzLbZ7ogxFCHVLGrZNA8E4EVStihdJzyPFnDNvTzRAPk11wWdWSZVoXCh1w",
  "key6": "5S29gP2ViNkrNWicXpxbcMbs3AFidfgngg3cozx3vLmrVaL7tQwcNrHoqubjZdUqfHrFTJcP86bdt7NWg55TRJY6",
  "key7": "4PYyzjfTfVAXmKFGpmKK7oetdJAzUsWnerg1cm9uSPzyyWKtfqyT4hHn6syXUK6kEjsXvnGc9FH4nHyJadRZtu12",
  "key8": "5gZQVQRu2M9TypiAmb9L5prLqPpabMAYVUuiC8HEEpFmBvCNS6odWS5WDmbcSUZMC5xVw3cNSr4zHq2UXgCJx2PB",
  "key9": "3KLD7EBq8b5SvwYMoTPAcicuNKMhByRQg2GtN3EaUZctFr8f4xwkgWmF2KQiq4LrYsMZo2QiuzJbJ6ebQScojK8x",
  "key10": "3wGbWcnpn4BprSXHAPbRytEFNSv8AvA4GJMAx4Mieh2XHoYzQeMdM6FjsDRpKAzdPDzFjfosQfvuauF8BPpDHRw3",
  "key11": "39ZEwefuyEb8TisA6wbUuDLEFaW1LnmtULxQZ6qGxXNJSqBeY8FKMcVVFQPAWgcPbTTdAtufGZSYtwqJD9kZjn1d",
  "key12": "2JLgvj2rqZ9cU9UfxJ8cNdXKj7Gx96Wskg8Puzhfd2VXhiXuZ3vosTs3KWpA9x1Tii4nFWDDZzxce1sbcx85Nfk3",
  "key13": "4GAwBhmFbBNeGFBLfFbgdCo4HLWMkwPzj68aRXyvz3StrkydAHMkR39RN8894LUEagkiKqKQZ3DXbidUDR2pfAtV",
  "key14": "2nR6GSHH9SG7gV83A2WDvctvaSowmnBkAz7u9tApR4qkKbeJNCT3qV7RTgPJL86WsXFLSAKfGruhSjje59CMvSfR",
  "key15": "3fyiLkwRhms2WwjVmNhEe5se4S9NDBv8Smi5v21UmXhi8cnJGUQf8m75Uiv6SGyErkcWvieJZK2oGwKeX1c5ceDa",
  "key16": "5yGxzqYPKMmkutR3QLM9XhZxwTrqg69SQ6pyGkcDMq46Kq6TpG9JyUhBMyKGE2mhQauoRAAXuCeYMyQYKCufuPuV",
  "key17": "2TtvNQ2bNxx3qqyhYGfWgdo7oN8m85vg1eUuzAzhhgnHYPM64XrUZk7rrV3WG4aVPrxXo3Tra6RLLtstur8h5JHN",
  "key18": "44g3gcdxjnVF4v1bQ5VRaWv9KgqVC7FS4ASHSMf9zPhFLZUtuzpUvw7qZk53gMjUs1Uo81Fc2GMaEBNgp5QT2fB6",
  "key19": "4MJ3aY4PbX7qNVS4e4zDc1ehbYfwuXBhanw9wY8Qhgb6znTKUpShTfKEXy2g7HojSU9rFpgXq8VBpLhdMBfkxYXc",
  "key20": "SRP2prsNE975wcMTYJFwoZjReLkPRLG5Wspsjqq7hU2zhC4x3csZZK7hC5pW4Cg6ii7zpVMu9sydYnJaFaFn6FB",
  "key21": "5gi3E8XzQR7VGV4G6NiRWxvzM8nAPpqjsVaqm8vzuxHj7r7JGUxCJMkbFb6vShvrL8PZmHEgJZg3rPY7xAMtSKHB",
  "key22": "4czACobv8RkZ1wTKWU4UHFjGNNQS382T1HA2yroeX4d1uTzAbdSoC7tSp45GzBozSxuEQr7c3dzJZyfH4x8EhsJR",
  "key23": "2NF6gLRRfukt1jbEBp2btrK6m1uCJQ8NxcXJDc1iMpyzKYdenRuPA6YYUbxu6eEo4a6Ex7JDXGjXu76damhkzcir",
  "key24": "3WuGFcfBTVv8YakoEhC5ASdsjEfVkUKyYqThwcCBoqLy3bP9xnnqN83LjuitvbzXqt2seQ6hPEqPHHuG2gra3YXW",
  "key25": "3EUHtF8kaLiuixmHPA4yjM9aW2ghjYBtKaj8ft3Pe9EzF65G3WCN5mttsbkuuZBWkQQWn8DW2LbkBTp3Y9ePdSYZ",
  "key26": "2WMV3eqB2VdRhz82cyR4MQmfeiG3qUFUAjt5DwpS6wXYvp35r5at9x9UUB8XrsktNh6vT8SbryHqNsxKgC9S26gh",
  "key27": "cDnzdHJiWf1pRDeizqPdroyx8gaxsoUTfYBU8ymrUaQg4V8kKieiwz32srV72v6NbQVEXXFsa3MMfV3a2MnNnQd",
  "key28": "3LD6fFM5Givc6iXnwVC8muS5t6uPWc5FLKYCLZHFLR9jKWrYpN2B4kJimUg4ApNBLVM7xq4QE7Y2LrnhbHktbLBd",
  "key29": "2SLiCDUFbDR8KXDqhUGnBMQ1ibXnp8TPRZEhzDVsj3J72NiCHxpV7S9sodheqzaBbC4WSpmT4ruurpgPgYpWPpRU",
  "key30": "5PBFLZ9ZLGj35EWwLj2Fee4jCCV1GaHP8hHAR3fcUrdCk6Rx6Tk1AjkKjdx7GVKePdrtpUH8X1n7ZQxR7nM1YGi1",
  "key31": "2GgSkD52u6nXoWbshcJ36HngV6oWBHiv6H4bry5JoeAgaD3EMNWfV8Bg4PLaY2JybZHVGkKGozWjTm7N6nY79GKk",
  "key32": "CusyaXEwSV7VHtA9W32E7PcBsbPrquDfgBNSd5Na8fGsqyQCbtjBeuxLFDdEeHGgQ7Cmt78KKk3DeSFWcmFPiTd",
  "key33": "4S3upD4Ehcc8as6o3TSXYPa71PQguhUMbfcEusYxMjUXbqmEHuSdQcJ9FpzyDoWuFSZjkj6izTW97Dv8auPj1xoX",
  "key34": "4BtYUJ56vfxrhk7HcNNcWJmUQeRZccUzsDUpPbBrDhBaq8psx2EoLEMGiPrnWZQW95Nw3uTZf2esCTeYLiwziQfm",
  "key35": "4LnvbEAvgKNMRbVuViSEL5DyUXxMfcKqKwdmdAPCZLFNY9MeFSQKR3p7pwfs847ZfW7L1QYQKvg3ttUqtWR2L7NW",
  "key36": "4TG2VstELFMdWbPwBtwtPhufUdKwqWYko1whaPRAXj9zWtays21F1susjKMKp3x91j81oqD2g8CiaquMkNLoQjPG",
  "key37": "6CV5VmRkGJ2NzCK3FgEX4rVZBbUAKWnSMCQ1HyXdDT2PwBmTCN85mWsyEhUkpDJcKxVf8TUCM1kM24PxUTuZuyW",
  "key38": "5w8QtBEfZ3Dg7XFZJiAkGmLhL8qF7vuXx9FBePRkaDnXnm4xcAuKrNtmzmrDTut3KwkZtsN13yh1GpuBWCAA5Z8P",
  "key39": "4Cy6SgYNfQgD8XHEDuY6hvEtzPXTBEvDZCmWwZMVtsfDwDXWacTjCPnKdZaSVQRwaebFtgxFNMEjx7c6GfaNBX8E",
  "key40": "37a8Mjit6aKpkJPcUk6oouwmvgYX9LWeiXsPcJdqeWnQcqV4gvuu7p8od856Wn8QEGtfK5pfixycsVzxkPbt4ZgC",
  "key41": "22nYUkzpj5xnDNU8oVF16vViEXwMnGkiPL1hC8qGxh48gQfdCfwrMG7SsuWUvLXoxnHf5GmDfTNNLCZbZEsQw1wA",
  "key42": "5vXrsMx8kL72UfeEoejM1DkD2xEQTRaVcvrB6SSx4eRLHLdzjcH3s4nqtRkyAfEYq31xJdfTqdi2ZYQaoM7akNgW",
  "key43": "2LJDbDxeyudTTkdTHHsxYn1dtTdB4Ra5DTgJ22G8zc1boQMq5zrbr8XXurPsdUDQwTKSgmRCcCsRjWQFC3nTZ8Ly",
  "key44": "3XWHpGhPtDS74vkvusLbN98QzoSMx2ei1RC5wP68XTrkgeqJca5fkRFqc2pTNTFiGUWXGaB5xmzRXedHwvWpcQak"
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
