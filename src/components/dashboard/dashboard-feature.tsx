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
    "3sSNbDkKQrZG5kRbhU34bHDs6SgJrEZZhioDx9x9U2b98oDyckwnhtpa3D6bWP9RTqRoNihp94K1XUyRZPKF5qGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2whkXs3L7C7yGHgBnkKVbBVVp9BtzdzDMiDiyUQVjnkYH4f9CeeJJQKQoq5gNRPnJ2AS8Gc985BMA9ZpsEgSRLac",
  "key1": "35DdcmkTNpwrMGHeVLut3oWsCMEhH6w1QVV6nm27AJAWAsXwR6S9NLnSSorjUdKN2iqqdm2zGSr5iJNiF9egLH2w",
  "key2": "3fEaE3LGXU1FPJYvAyNJYrKwd2VKduykhmTeHRwKquTAiEeaJr2FUVwuxwaiYxvkPB7Yuvbbv2oabDfQNALVe26u",
  "key3": "3VJkQ8yXvQa7mMvV4arGbTgS3p6AGVFpTpBtafBmvc4e9zHdzbCJpMpHNoe7QYDJA2HzmnBtxJgJy4wWXWCrhoB",
  "key4": "VJn7ykLji3ywN9YrUmdF6muGX33JARn7f8ENeqytdNLQCtXxQGmK9Ctz69jvj9f5t1ZPLww7iR8hSanUAb7WAPr",
  "key5": "5U9DgMLfcLv4yD6UB1DgPRuWY5xANQzDxhtQ7gpgVzmMPZwAaTB9DXJj5so1thoVmP9WnWRkhb2J6jmRNAfbuBKK",
  "key6": "2VjUhH1xHkpAY1pGV5sLuBAWtKr8SSGdRHbxxDNw5uGMb8WSofzc3i5gtKRpc9C9oqkkdHc9iW6JNTGcSbiYY7i1",
  "key7": "3iAwRfRiHaZbxrGbgJ3h6brKsMVikwZfJNu2EN1eM9bNSqatsgqU1bsYX1jS1pgmBd9KDc9qQss1upthzUgp2ivh",
  "key8": "F7sWEGN126B7brdRnnMVvXJW6nffGsys7ojihtqAtdYi8UUFRUxckpr3tVaAMUsL7SRGqM5LTfTCJq3ZNYjMpXv",
  "key9": "wzD52tKB517Pfn5nVj3d58MnzWmKHvPo32h1iGqwHuFDFvLczPta1R4QPhtiFCd7Uwj8AJZoPu5SZL2yqoAbycT",
  "key10": "2ZgFMuiEY4b2SgvFYphrSJuPxgkPrm2UqADvA7bwFc6xWj89oMMMdcRQxQn5q6o9vRehexgnMYQmdx2h2wkAaYN3",
  "key11": "2h3BejByFLCE1HXKbGSrn1BXytMkCd1SA5mgHsL78kSaxQn5dNBtNaV6GMvVNkZiHWYf27yGriGvDJWjH3SKTaZF",
  "key12": "4rH49Vx8h1zqW6vjSduvmiRVMfG1QAU9xRtMKWvpqqAhE7VjBEjzs2hT5M2raJmBf93n6rmwraf6NXrocpfLJgFw",
  "key13": "5SxpN8vSomitnoBawYsC98WVEgzDeeqXZyRE57fR6NwJs8Ej1SpM69LLZGfWzFaDrDmeo6YWFr78itncdnY5qe8e",
  "key14": "2artEb9NRfjcRcpb5hG8BJyE19QYCVebTJUkhbDoU5XDZ4TJ64wGd57K1Yt39vfzw4rafNMUvutevy3az9F1g1rR",
  "key15": "2TsnxbfUvekFCRimMFTuQCjHGC9eJB9B4W9Ug2wx8cGm82xHDzAFDYNPxrC5jfwU7ne4VvwLnk7NWvaqZweE6Mi6",
  "key16": "JnCYQEDeNHoXCHFCdh4NhJAdUAzLHT6H5BEULphM9zPoe3UC18jZ3jrgBHCR1tT7D6BA926EnH99CXRVYirNgu8",
  "key17": "2Ka67MKau1hHBvvFNYNpoiFjnq34tSZRYYzaR4hZzT3KF6F2TU2ZfH18UHrqqouTrDW1GtNiiDLVDwkUWU8QAhzo",
  "key18": "26W86fy3aFPauENgvSE4RuKrabSz7iUaYCZQjHyQxj71krfnzQrMPpzQsWghTi58NwCjVxrFQ13P1iM6GzxUNgEY",
  "key19": "4kkcWeqm832RrqsNbjzFgxMCvAzWUpqJJ63UbM5fBWVwqTvfA9WmJwS1RuoV8NJDD1F9AdavSgoonpbzC1fceJH6",
  "key20": "4K2bqBwrDEhxVWtLRPJ73TghEkFqeEJAh9Cw7nWKDHP5eyqEnFs1ptZCYHjYiyGdweQpAFvZY4jphmg2NVSASmhF",
  "key21": "4PUNCZd23RhNZzvY1EcEpKNw82va3ffMoEjddPkXAYJJJ9HX2Ucphdtty1JTTouhfXxHGxAxKjcNB4zKWuixsNMp",
  "key22": "23PawcKcU4qkunnSErU2emztZLMgShHw5s7DBaWM8bGk52o1Zmmm14ULSLYUWVA2Zrcnui4824obxnEBJ1V78ncb",
  "key23": "7ZFyGvDVyot88Cej7VHHUJFfy1a52Pzt5WaBhgy1FDvKeMn9QrPDvVHr8tqbWwo75CRtBcCzBSCuoSufEDktpDD",
  "key24": "2y3XkpGRKPzcBEW2fAtSuG7upRATxp8SM9qoHQYEppNTYJk2hybLR1rdaZRBHVTW5hRXqECVywnyrRUpm2jN2Lxy",
  "key25": "dLcF6yyrYrjABnLJrxiWok7FLckpc5cDufJHSTLLKbp7nw2RCEcZVdTZrhvPTwTi4t75a4qxixT4B9pUbboixoZ",
  "key26": "VuJfg66y6YRCQoWNw7J71j7X5wPWwibsM4zVAWsDc5uQGw1EEGx8ZMgoYCgWydzwDSnpHjQGBU9mBx4f2VpPwk2",
  "key27": "2TAeH4o5qVZF5wqunsAXx12WezWCw5EqNQPVT5rkbqT6bEMiVWEEoiuLBHXrQW4aMPoVhTqUz35zwknCjx82nfBQ",
  "key28": "2M5D7T6TxzzE56AEksrYstnUg8EWonrRxQpKqo1fakV2YikzuUjPLRnSQzuuKoGGv4fCeidj3BFwhz1pb1K6LQM8",
  "key29": "eXVu7q5So449nUq2ef41DwT2cUPjZKz8h8VCYzQ1h6SKzEaaLyTSJBYKgMaCJjtrG2sKTNQ1hWjcmEkb1ezrzNa",
  "key30": "4JL1TS45D9XQKEhrULB3yTK2keGLefeUKVd5TsmdsKFztwGgKX4UVxayurrioAgobFNPVJn3J8m6xskai5w3hkt9",
  "key31": "36ZuQkfpg7CXp42tC32KWYYFfY7Hen7WqZj9awe9YixCeu3C1ytEvD2ZbLLkUgQeVvdKYjxgMzGhdjK6DGMe8S9J",
  "key32": "5aeN82osS5C9Ks4W4xSrYNBxt3eaY1C1eR3RdZjDj9sqJfAskFF1WLVhLbPEeXM8Jswd1Ac1oXjtYehC73xcHJ8T",
  "key33": "3XdEu8f2miUihqKAuw7ZB61gKFvTu3khiyxvbkxgmpCMxrd9wSSoLMyc6ho1u7m3uTL9KfqgFTTYeoQNBRvfMUnc",
  "key34": "bBHuVdvvfDUubyvJKFhhBtM7EdmGXvtwddJWjMi9QdCk8kZ5EgKFC3NvFEZFmcG4gziY4JP4B6taVvaZT6TrLg1",
  "key35": "3bfZVbvJdkhGv5rMoDqMRVXAdjJHvwPkm3GcBGPeiGgFZ6Bk66JwJEgHbPd9EndHG7upGpwveSYiW6cnCZmEp1Ri",
  "key36": "5abf1Lm3DDsFkc5rD5rbByqr1VxM74hAnRHX2x8QccacnYcpHwEoLUzZPbTpxKR9fVWBZY24K17kzsg2ggLafjd9",
  "key37": "5UVCyWANq1JqLSkqGZHWXG1axhBQkC3nMPtiDoAzyGU4HZMCWykLuDrEPWTyVapqHE1tNoA3WczSz1QbfCYE7Noi",
  "key38": "3G2a2Z795UWBTqv3h6maJ2uAEZdu5TdxdjG43RmKZPh8DxgrAhbMnDuGqY9kknGVF8by9HDk35W92yCfGnvgZmBD",
  "key39": "3zthvBMzhzzA13wEBkGEg1ac1jxy6tfM3Sm2jxYffBJdSWmLP7qsCNg9A9vEQgRBcnCBk4Q7gSESNA6GbdJLsRkQ",
  "key40": "4b3Xtbwkb86iUK7YYHuGgGLMQ7AeHuLeRbMD69XrfpUZZknLB4GZPQSRpHEoe1nS1RDhfbTrQs3GtkwbiZRDuQXb",
  "key41": "GvrA3E9MLAu2yKoi5ebC4mwd1UVPZdfbp7rnc3RywZdX7wpGEQxE2pxN79LcPESqoXv4b2gpZqM5dRVdff4xc3D",
  "key42": "3ExkS6EqL9NiXrkh754nk8v6ERBFR1ZaoQS94JtdjxkDRURgFVicDWqKmBF6PD3sSAKuVamy8HjfDBapy5oMBYio",
  "key43": "3UDW7LrZ27XAsjSMvRFKXii1oVykcSMkcnfw6wGynLzkRiKgVuwjicor73KzSU4mRVwNfDqyZviuGXwz4SYvR87L",
  "key44": "48AXL1qwred2gKbhXEYdrdUvv16LJ8kzPo8yGGpN3ug9mqFZFyTqVPjevDm5Lg9RGCYpMEKaNmatxAtjNuT3ng22",
  "key45": "4kyJFPX2DvM5tErmtc9jiKMS1i7NzYduk9yziJcG8czcDdynCew52LANf53iybK6svmZ5wjijgyxCa7zBvULHq3z",
  "key46": "4j7prp2AvRSziujTiBEVS5XEz5RgmcV3J11e7FK5qZpyRV4Py3tpUDAur2toF2vE4TJ8KB1ewk9g3AR8feRY3HQt"
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
