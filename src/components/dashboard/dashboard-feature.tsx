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
    "3vu8eAj2AuMww4tf6gHwwGN4ZNnZGEGmkf8M31JDVd7JUbySv2e7JV7xd7wWTXsQgkc99uKQL3pkzQi6nZaXT3RW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2otvGEZ2xourgvQwn4EMbaDY6aMB7QvP2YCFsvngLLvJCRNqeVUDDn8515LoH1yuNBUobqz4xgYyP4xqxhqYsba4",
  "key1": "3hQGMGfojT7cVJYbLdg18KhowwMmuxEuP9DTDbHBUY8qix9EttVA6MYLwBWGqLM8zUXYrMhofmcx2Q1HUgvWBeEA",
  "key2": "2Nzqa5emvWMgrwouu8K2jvuatRkXmHfzTGkoCP5QnnQsYo2Wq9Kfak9jYF69wDYi2ndz75zwvx8mTitTqJBoTJAA",
  "key3": "xkU6CU63cdMho69WCX1ueP7y7toYjtmBJrCTodSAA29thuGJv8zXMGaDb91RX52HssbeYFybqUWhw29Hnjvwc6z",
  "key4": "457T7HMuRTmU5mseZZNLMmsm6MAGfb5Wy8zU6iivpGY1q1Jdp4zZvhcLV61Z83eXkC2UHJSFQNV6MbVjgiWbFhdp",
  "key5": "2fJCk4YZF6msvbU9GZQg8dYBQbUNefmQMC511sskFwa3GGXteYDjK6BYhJQuvECfSEJ3Pj19Pf1Ka2Gbto4sLehE",
  "key6": "3JPSMR8tfXpWbH7pGhcAnjNxPnL5a4t27FDtvB8tQ8b9mNngMHNf1bTCkhyE4sC8DPKrsWY2nAVVnjUjGjS2Ke5D",
  "key7": "AHBYfCNPXhCN9NWGS7RGoreqioRe4UNuVYkbB3AZRVv5v111tFjmfa3pFhpeJK8tvwrNn39FH7zw9FUH4dPLGMy",
  "key8": "RkDxG9DNeD5DGs6PuEsw2v8i7x4MEAJzAnqCE2z6uJKRzPNwqEbmetLRNVhiuBLCkV5SpvqF4CPdafhutJJ542X",
  "key9": "2W3nbfQ8YrT2aL2fsM5oqSp5popFbwHyA6D5scGi8R2wVjSMnE5HPvXjx5H9gQmWgYCTTD2rzoWBjXsBFKrWFBje",
  "key10": "23wdD8x7BmZLtMSpoYE2BWBVkLHbd1vuXBpBo2WU3inLbRNeWx7xjukLcmMxk1qC1bifjTBK2XHKVPW4P14HAM5T",
  "key11": "wH4UGqAMHcsQhnJmmdnLCyMG5VyrWm4CbbnVowka6d4MT3zwoKzzRAgTVcoKMvhpNiGZyNSMjKAi3zVzhu6jZFy",
  "key12": "5BVzPnZF1oZv5YTzTqcMRnJhx8ugLpFwpVhwpdzbT7QauzUfyNsZEd61ZTFrKtCacs5n8HVnfMYthhnYfa3577qo",
  "key13": "2iDPrZJwAA4TmPDzBmrQmNSdmF12b1iraZXuqAeFKNDGWtZGGpMPBbDM4XKpDeTWyCEu9DXDHnsGUTGKXCc9sb8F",
  "key14": "2Cm3wSRCJFvxXjwbhsrnDBK5Nuz4CNdELQDTLATjmzvesAoRGUZfqENea2xFsNBgVXmBKuB8ZkaLok3ucFq9y2sy",
  "key15": "33BB2HXaDZiyLtFFDWMWqCCX1p5yvrQtHP4eTTUR3ZkdGDkecB3mH6zc1DaL6gsTe56DmW7tBfXSDcK9LVnuMpUd",
  "key16": "2mxMdyCnSfR3mAfBZD3yRAvoSSBQ4BGFAafizVxLG31j7B1axqvAUegdPJwAypskZ8waGZYUQiUCdbtut1qY3tC4",
  "key17": "3zRBZAzTBsgXNTSkVp4MdMTF59sNzrMoZBhFzFzQaXVJmdB5WA59jVr8H5upYuczv1SDsZCuc2Ta3dcsSbCRJCK6",
  "key18": "kNzkMbGc35hETnL5avkGvWWTxeoeso56HinQLS9GmfbYSF8fZyFguv2kJGb5NTaMbyyhhyxKXq8SR4jZqPxzvtB",
  "key19": "3emzoPxgehJJEaUzWiafuJZ3X85MtwxXYefnatPTVgGkTFNhyzAni8bJ2jupzSSXRVyr7D7EVFdRuwHmLLem7avi",
  "key20": "3A15TK1a4xu4d87oJZqgiwtJBbjG8wGVXKnGKKgGk1ZKTsvPSvzAcrzqSduLg1QR7Vw3jw5jpWi1C74dDZVLk6aJ",
  "key21": "5vZT45cYAXJrPi7WV79TdiSR5TfJ498NR2ZAPq5re5ARDux8DaehtbqsuPvGog4dQDYj3C44LQF4UJ616CTN71J9",
  "key22": "4vRKUsRUKH1XqvYXNKbgPHx6ejokyKKzWVXd2nrmuh782ybUg7iwxUYP1LgKJLjxQxGwiQpqi1ynnB6XvoFytMUh",
  "key23": "24Puv1Fed2M8tWEeVZ9iZeLWxCvXSgBN6JdMZNgCSqsXb9vEBWnrQ7Hd8atRMjZarnpYwnjCSfuQw1gjsUvcfuHQ",
  "key24": "2btLvYmhkyoMwd2qiGrd2cDR9gi6V16RJiZPfwRMXLkrGf3d7yKDzk83VBPhKLFUB5oAnyLDe4TDZ8ZA3GdWmyLC",
  "key25": "2f49oC9oAGu9YoAaSGTELVRoyyNxvYgpDYwoD8TarTA5PmeuQJxXtUBoaHAqzoxzPdUhUzim7LpimWFfKHgwMaJu",
  "key26": "3UQFxr2h3nwdAead5E3gn71a7p7iM2BDNw9k9bFQTjbb6rmvD4C8byuK1pZvB9HLKXjKvTdPxKzCkEbsNZFRBHRg",
  "key27": "59YPERqNv5zJPDcKXkQS794vxCMpa7GzPneQnvabkY9jbBQdPbqE1fZXwER5Ce92CS7eaZusoN817355n35L523i",
  "key28": "z4Uh3hC6Y5nsQLk77t6WKSuSXmzQPqBdocNaGP3HjMEro2Hq1mjzafTnW19dKCKNn4UJEMzZtpdf1hF328TiS55",
  "key29": "5Mw6E1bgzmRtJbYWZneVozi3SFsagteHzLoBjiTPDFw3SYFQaQTcp6S7DHvU5yJXNHaJVupzQ3AjaUbV8QsdVw6f",
  "key30": "2NMcXK5HmLBnUheqHVarQszVWquP6YHfuMXYtCFgXRFk743JKuV34hWCViuUpWoFJPgtsdK14k855jdj9WYDE7HM",
  "key31": "5WqW741Mqhr29AXY1u9zmAMwU5XRLf16ySiSfFYGYb7R2pFfzhtdD3rhDzUVd8f5WzEkXKuoLqKFNVjZtyaqtSnx",
  "key32": "4CRam2iW2x1PfZ6TemmE2cjkJZARHzwQRMYWGBBNZgePUzgDQXZXyuYvUP4EkevBYwWdb6s5RkLYB1qX1utTjEYY",
  "key33": "36CopfGrBPVmthrTRWJAH5NrUeQNLJWVo7ZVrE5Vo2GiVG3DKUqGVNSXD3Nd2zJkHwgjcUbiDmHhoKAPtNLpQKkf",
  "key34": "ZVmTzBdnCR9GNN4ZR9JxpY7bNV7eUE17MtWA4numWQfku1xreesdfq6rNysbzAgdKpJaiWMwG6nwtb47w2TZyLK",
  "key35": "34jBCXqsi3fC4eht1BF8GTFfmFB9L2MLWAKfvRrWwWxUX53TrzwaRFWtNJ74iJgXppZDZ5vBADBrVc5Bq4N9ZNgb",
  "key36": "4wdLW2ERZHDQdKYtUTupGNpnegicmpob5NBj8it7HoASM9L26y7fuqXFwCHtqXPRh4PKfcrCMiCvrUQ8LFeWq2Bx",
  "key37": "3uWBXE3MMUUwLsKvkWze2VhbK1hynCZKjgwm6Deq6Gs4EeNhVeDWZvAo2zsd2douGuMedamj6CWZXFmN6g29nMXc",
  "key38": "62HPYyoi2YPMPTdBypuic81ehzdr7xRuuud3fPCxbRawhLpJtCzdhMfHHQ6wc1vHgiviciz4Hn1QGeT5aiWz7vm5",
  "key39": "4DANaLPSw1KdFzEYWbymwb222wdcD3ADNqVVcWQ3yX9QsxpBNUPT4EKZhCGwbBrJto6ewLkHNZZrnJ4uAEkWnB9L",
  "key40": "55scJNdXyRN7zozE1weZifH3mPztRK9vNR5dn91VMPMLKJ92wJrUkhGqv2TVUwZAZw9gMAYCfbp4GDKLspYQcvfF"
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
