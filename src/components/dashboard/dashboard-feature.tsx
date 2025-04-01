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
    "5TRigiDBYiUkun7omZpju4QkBkd7mNjJo8Xqxa8HZtiMdKr1z2iJMULu42wLkt5U3gkBkPeiSvmTNMbRCRfCEP1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xGJsgEnnGGC8Dfy4q8jAsRYPyEnkfkupP9UnjVmxmgTbLfEpEPMSWJAHYsiET481bnwHUFrnS9Cjah7gYhpkrMB",
  "key1": "32fSGEWRbeg8975ckhdMAF4EASouzyTUy32USmjeM5VTurtd1oGq8TV5y2wSXp5pTWze2JnsXQZL8iE7B5XbQ428",
  "key2": "3tz19qPDVqomoz8Qzc6XCMCn5GiWLBKL51droTBmj7pjXH1CFhzPB51nQYpQuhiJNtYtUB4son9bstYktaq78Trg",
  "key3": "3vBfxZLURZRYdJgm9BrnwRiafFk8T8Pgm33nKi2uyi4UPPnQwTUnB7efzu7kgxBuSQEGXJQHXzRQBw5n9GtV3esL",
  "key4": "4VrSaJYiGCpUurCSW4QP6p87iiQoN6WtqPX6HnLSMFC8NGNBJ1AT8o5su7QAL1gdy6SyMMNdTQADnVXE9Cd21a9U",
  "key5": "zeK7drsTes45PY2aiFqVZFu8wNVayR8puJUkpg55BEQWZf5XpiqmnjfdqDgeVhaQf3Z46215mYcPTagbRfzhyQc",
  "key6": "5siGaFBpS9xP9qQWDbetLZcJvtK4KBzNYS6it87rJQpnTeGx3E5xbgCEcMdz86cDsVm8kPybjrhnyPdTqCDGNUj6",
  "key7": "4PBprqKQ19ULs1aqiaQxRZSTndUFhVxRHjaRs7pU7LN5nqG71rHMLRp9i2NWVjPTKyboVk7Je1P3ZoWXvZvmPT5z",
  "key8": "4Qx68WrC8CxbapRVZdk5QrtTD1aJgCKdRz71ksJ6AvcPVBWjyuQZjgPZdY7sRsj6bCJjbD3X3W38NAGRjabYDmo7",
  "key9": "5acGeipuRo9tveFKv3hxbbX5ugojNaEJ11da6rzS7WQvrFUkaBbNfuCD7bFnCjxbeZ7W1GF5X5EEq2Pnb9myVP5h",
  "key10": "2jo7K7yj2hzNx5qqKGTaMNVnmdjfBWF9u5CnJQTTL2noPyqccg5XjaQwh9gaFvTQFQYnncLfgiXgo36NV32iVFtH",
  "key11": "4sRQSjpRsqTtA8BUoYqQ6sJ86ZD6HGcJSFHSFR1Dix9b9ptR8V7MDoZKCq1pwLu2EUwtj8X5mHb9zv2FztSgrdVs",
  "key12": "48Ms2Z5qHr9AqLqzfKYLQqqtNcTxXDJPBbH1fWi2c8JYHGTTPui2YLepqqdHVudvvJji1if3SxeBNexu2Nuzjhk1",
  "key13": "3Yh9k6vcVBsTK7CbQpjXsst4RCMffDmczL7W9RXqmJTmhBTVYkm4yuWRp2zA9mQ2CARWa6ukNeoYDeAxNPvgsyyf",
  "key14": "3u5r7wJ9FkvPrP8AjDkhoq5h6Uc32Bq6ReuYRhEm6H9Ww5tQQSXrSt1UsDXX89pt1ka2PZLqGhKmXyYBMqFJsiax",
  "key15": "4rY8MCJKfTnsurgRiHw2KYLc9iVDiKBnpsZxSsr8YNUapZZkBWcxd27iwFtRdvxC7vP4ZeqGjScG7wko7YVppm6w",
  "key16": "3cUvYzS2LtjQdoogu2FxrdozzwBNijGC1XpmBozfgyB8775v3hT8CT2pTjxWPuwgMJroL4ULdZ6BxSe3yfbGW8YJ",
  "key17": "3RNx4dYCetk2G3BQvZV2w7DnE7ruBNoeKJMmkBXdXvvRf2hJn5JFHwzb8J5PPQGAJB1yT2fYHbp6XKyUqF8An4af",
  "key18": "54mCaEz8v3XdJZqvqVjzzcBpPzjXAnEipDLKpdnVUoGmmrWnsnRnqVfQ1JWZRZZSCwHU8TJ3vQVxiPw2EfCWKspe",
  "key19": "5DXybgTY7zNrsjdngQiNLrf92uyz2Yoa3cxcf84fHjz8uDtXuFMxJAFHRKXHWfaesj59dvrW6aY9FxUG2w5c8d1z",
  "key20": "2He75QD2cPsk5pC6aW9bXDaUKSo5JbA4rmRFFN4fyao4v6MDTxjKuQo1bGT87ZwrDtnYUrdGZajkSM6nCCcQntX6",
  "key21": "46wDWBVNVTgYDDzmUWoZsZDbtN4cj7syEwDJDGjamrSUjDBQ9kAzDLUNbcP2rUVBKHngwMgeRbPcQyK2F1SvuDRh",
  "key22": "3QijpM2WsG5UV3N2Z9DM1xGewQ69n4M2VfXaXAtwtkZFxnHf9aZ7tYHL3e1hdQHPhXm82US6ZSA2V4Yxfpa168mL",
  "key23": "682g9fExFZ65p5AN33n4BEER3dC6aLXM94iVcqwnotxdPzSqUohKn95BKphryocTR8bPrfaFEex85DMDHF6GFe1",
  "key24": "4e1kjJCfh5pGxXYvAh2GZzZtTAD7zjqtoU3TwdyCaF4z71if9QRPMkfmBrBdBuBe8rgpMBpXmJx6XfVSgn1rbMDj",
  "key25": "3KwjLDXZLRSp4FuMzmcsyN8nfWpSsYa92aSCwVfXV4RNkghrCHcuBheP22yevF9raPCe49o8VW4giTpzFZAZV16D",
  "key26": "5TtJ2SW8rQQU7j8Tgyxn6DFoEALQfy5T915zffo6CGN2hnD3SSGAYFu5wjshzdeVSMbd7L9HHYtANzntuznW2zxB",
  "key27": "2vdMVauhHc2p7DN1HUUtkDvU5s39neGB5jn7SYY7ydVuiqEy1WC2oWmQz8vRhWNkDAyvP6a4evREcwXsiZ2bkk6k",
  "key28": "qKhu4TUEtg5HDsf8JYJyQkzmvEbEH9hZbzNi4aozgd7feWV6CM6txViCoZetJTuKwNvX6PJnetnK7rwfFiB98g7",
  "key29": "GTUssZfxPc6hSxQqK7T6oAyJejKhyB3dv7ULC5rfFT23zmmMxE3uod4bqekVaBR5keQaPTaaGe4yHPrtReXweqV",
  "key30": "ZsWJ2Q3wp6KWcR8v9fHqLQfA74V5ZJZiGiQA9T5mhc2ijWueRmJWDAyTAHru8sTqfH1AdvLoQWbNP5ESj8WmV1z",
  "key31": "jvipNyCHH2iRcqm92j1oWoJAoRJvb1iLr1kgwBt7vL7P3dzQdLcHhKdPCyPnLpLve9XTTCSbkwXwaN6FHikLQ11",
  "key32": "dkxitwPzmEfd9MaoBjGbounZKwr6vqMw9VRLe9VqEGHS5JY1LFfSs1d9qC9txRCq9x9AoMGy4TEsaCqpr91n8qy"
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
