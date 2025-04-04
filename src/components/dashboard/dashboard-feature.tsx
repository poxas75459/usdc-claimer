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
    "eg9xfr8omCqNsaZqyRkp7RCedwpGcDvinANNTuy5M67GS5VWkFV4yZP7iWY4UyREYvsFizLVnWVFZeSAU2qUD8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nPuxvxh51BVU72QuKEVG2Yy3SbrwUbejPwgmmZn48Gjf7grHb367GwRJiqW8PSjRwHbkFyrW28e7oBzNWoUfDT8",
  "key1": "3VpbX5xBpcABwFTyq9GgZmsDtFUje94Zw7VaRFxRGmvA22fV5nSSyn9DFDxumTHPEEnuQCtELF72xxvbuLP8RBWT",
  "key2": "33KpJKbZgK5XMtheVto8pN2qsQyCL9RH4MpNWGpp4SsSnxJ9pcnvFyDyv8FUt8hVFfZKsPPjqUYnbXLvDbAHi3se",
  "key3": "3awHxiNeFN5QgTBDycjx2NugxUbgPggici2pY5EFgixN8MvzZdXK4LgqYs61pghCmTz5tsAtE8AubZhUD3UAso3w",
  "key4": "3iUNdY6Zc2j2C9UQamDVqMMcSrzAVf2aoLvPTMtJ9HsU21yQ6u7kbPQ2TKX4otCotDpY1io8j6jrrAdMS8Po4rZz",
  "key5": "4xWCA9FJqXx5Add9aMGnRGyjF3HcRGajCe1yTExT2uhbXjUarHduNw5KNT4hh5HKoJLNAT1PmRweTaVgdxNfjou6",
  "key6": "2ZjxpRhpCvL2XELnJiFPybh23tbu8cp47BjxPHRCkDXH5kMo5U3riNS2B2fQpz7arUWQTxtoLMU9KncXvgtcbWas",
  "key7": "568r6vHShL218YLL5XNnq2Kt1F92uXe2GxDS8HYi2BUA4LEaJQJWs7AEU3DVUQwS7uPRd8kXys8up92WSJ6JNRZi",
  "key8": "2FTLZvfmPP9ksyKBXU7HnJuVSmzQqUQnuhmmCeg9U9HrMr8mfDQAjx5b8N2EQ2tQmWKtrJfWbwuPdqpNF7vtrsAv",
  "key9": "2eyaySMcejETuS3PnqBdTxt7mrxZTX5MYu5iJHpcGoioWaNtNMGshQc2BftTy9x9ZVRtZoZ8aDmDCB4T813CDEYy",
  "key10": "2AqSxvVL21frv9ZpymcUBsWNKd5AcLpChKkfZNK7SpD3VvxUdTFYeLFKyRLQrcQT5jTHTECN2UnfAPJMptPNMNhx",
  "key11": "5JqfhKep5v3AQkr6hEJBxBUTBynZ1s7zsGmwEdYsQUMKs9Zva9ha4addYbJMVwnWaixy4x2aabSPWzxdvyyyqvrM",
  "key12": "5Cb4F7E3rW4f9kf8fBTX2wZyvxQ6qZ5u1rXuei72hgnUYApDSHB1n3rqKhng9hWbKRujSerNBLHC7tCAU3uH55Pi",
  "key13": "2Bajvr52fnkz6enYK7RHtCuYUGK7XrmkiQZvqtqWBfRBDrK1eE185Be2q2CAHrgpJLLbKJnq7W9HtN5Hwg7LXc52",
  "key14": "XZ9gXkq7AJ9xmY258STe3AwV4QVCL9UryG3mTwdjm5FfGRgrfTyyyvpCsWzQS1xudtZDnTXA5eyr6J7egf22DZw",
  "key15": "5UTnx3aqFbzUW74D3KCgDjH2cuqDjQ14dLpsLbBoVe3xppDqz8A8Z9UyZE4BbYGvX5xTRDLnUaStu7CDm4zRPrf3",
  "key16": "4K9FpUuGgebMQKcJeHbUGe17j9y8y2LRUHGnZy6tcsiXMwWB6s4wWpbyzjgBXWmf19zHyBWZssWqHVHtJoj3d9k4",
  "key17": "2zV1nXtxWaJmDmjXT3ZrjCwXWe33LuQ7bqntXgQvkRVBqgCpoH8pibZEPmmxwTsDoLYXBKCGNCgVFAGirh8gQeQK",
  "key18": "wM7bfNoV2s7aTd1m2xZSsBv8CLDi337QKy5EWn7o9L5cqX4td8A34ffruUNnLF1ah9od1etkNnSB9eSZEqDgzEk",
  "key19": "63r24RTC2TCrvUN8SU8mEwvndbdcmExR49V1xPFynXn9RMSEDm7SFrwm19PjwzKz4QDkDSzRfBkJ6gUTcp8DuW6o",
  "key20": "2iNwMyMc6ZagpkdycgfQjYVi6QgfWV8MgcWTSoQLaxTsQ9kJdiXJ5ziJorW3fxv6PU5jEReEoBS9oKboDvA2ntC6",
  "key21": "2RR61kwRwvVe87mivEDS3zSkv34Bt1d9s6m7t6Hne98iknCRZD6pHvThoCpbmjbR7arRoV5LZr1Xj8D3vfoZHUTC",
  "key22": "4XMg4oKTUM6GJF56bAC3Y7HTRZLvRj2f2y3F8AqLFxSNNM6NbCcgtxh8vmMkzehxj8DzcR5oJEBT5K8mrrAu3SX8",
  "key23": "3mNZGviVqDj7c7CFzt6qB282KVnNWvuJaDrBxNB1VkQZt12WAQPcmP6Dk98rgMQ8fiKgBBuxg8SgSwWevvE2deVx",
  "key24": "5nTC9HHwQwxqAsYb2BYnsD673tNKEqfJLSQJeiRDGLNkHUVj9EMjqRbBXGgZwNpcXT6pCgw9ioULhuyQ5KrQoeYX",
  "key25": "5JU6R5XSwTs7hqoNfPnZAYMsEvxTL6KLFZYwgqhoqrrMw6GWf248C4euCJe1ii1qZzVcxMnZZhxjbZw14CSSUe7f",
  "key26": "3mYNV1XJgCc4Jeyf6QkrQZD5Rhq7ZCpCGPgB9QpqdtSHbuNcTSgFb19e9wHESAwMi6LevuQ8W5pYr4gdSZMKz1Gt",
  "key27": "3ztp9c5dtiDh1H7KyoTMTS71uEY1aYDkg8R2uMZQHu8uFg6nKoYAhhtSct2Ybd3nRFCQEQckjLAmC15ZVLbJLGhX",
  "key28": "QgtpWsLMuRqJ4xt2tRs8AHCxmhPNmMSC3p2PdFDyw7pcnk16sNCV6DaTboUkbmREM1GpfokaMGWJkfbfAnaeXUh",
  "key29": "5bavcnJzoki4HFGVGXW9xiGSuPQbpCRZKknV2FRFZZ3chNqKuyYWJTkYojuQkx2rqPdjZKPss1wdh8QDXrDLJkSJ",
  "key30": "31zMuZrmkBh7Z6zW2W3NTSgWvwpcXrmgpLRKCVpzwMjrmd1yRNMKy8cXigyt7PEuTTe6kTFt8hVaPASB5vjr3cT7",
  "key31": "4aigxnEwGT1n7Z1tK6PKrjptymBnYHewynDb5t6PvsneTb5YsZQS5E6vxdWCAy6LSR8Yub9Kvw3TKLoXwY3Kk24z",
  "key32": "4Jjh93yeZDpah6aicdY48J2kAtYJzuG5nvTLauj2NKynNQcmpfZzVXPypxYm9Vu3szyABN9johZKLLDab2PU23rK",
  "key33": "in8HzvcVjSBxqu9j1A4f3NAkS5Gfib9uYhTXKLrUQZmTQQbkiECjMugGpGeHZF5dP76nhWU21F9GkWgVV3JPHZw",
  "key34": "3pUV4gUCuntAPo9NSUohX21tBFbRceqQcBS9kxA1Wf8rH881ZbEA9g2hEtoJvyhLZNveW5ZpwtqLzmdUTsfauq33",
  "key35": "52Tg8w3nb9MtGj8i8gSucGCpcp8PtR9Fefxitr2QPfJqSffccRkVfvBXWX2zoALYJMeJfkeD2YKmniJycXBwhppE",
  "key36": "3A2cWc5aoUc8fuejRkBX4qj9s7Ns7t321ta8w8KNpUE9HV9oQURZ8TiSadWF5HsYeedgNMjzbNUHULcmiUmEpZZa",
  "key37": "5aTFUyVg3DRuPHgm7mJ37j6UeQCrDasARp4z88vo5TTT3em4GiDGubFsNXHtzJjoe9DdatK9PYFYRHJ3GsKNnXkv",
  "key38": "3JAiUokj21kBVRGbGoHsyuxo1w3j43aRW5baMxL2w5fuhLCBc2tcJXXnLABBcswsNGxfMwa7gPLTAEQiBCU7bvi6",
  "key39": "3su2dUD18Kru2rq9nfNzFFMWowJ8Xj4ZbHhpxxY2QCvDnP6ykZdo58CvMMtzTqyDpSjJK41fXaDgJqT6aDPX7S8Q",
  "key40": "UhQdWyqqRfsoj7QMbZsem3JySVzM8KvE1io9KL3Wtxcqd4RkL6ZYhfve46iP4KXuQ8CZgpARM2Je3frMEKvDN88"
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
