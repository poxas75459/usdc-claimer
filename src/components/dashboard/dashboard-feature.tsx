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
    "4r89D7gs6Siy5kpmApSezrMB8vHb2ktnsvJb5BVPeG1ZyXc7fCn9L5SUrzpDW56zAqZ49mdi4pM6i3FWmAe5MwuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JjRKjX8TKj9Y6LmVSjB48VjfXHkXwJWrSp7Fh98FNDBNAwvnZBk4E5weToPCxAG2tLPCqXwAfcMWPqMeQRYZXDw",
  "key1": "65LFAjC2a8ddkBRYUtEAbRQpKnwgGjcNUysTryXMjb1R7SZoM26jDtvhQSLsYEWkzuy82MwfsYwdhFZy3o8gxRvF",
  "key2": "3ETAiQ2wPHSS1d4BWZ9WP4arhJj5QVCQz7EEzuZR3jf5hPyVE7HNPR74yxYz1cmmqA7JfRLpAfuCYSfdLwW8Pk5s",
  "key3": "4JXhE7toc6xe9sTJKJzYxEEsSFNz5xXJwDGMt7ej7cF5fF1boXjFMTgQBH8UjFVP1UDaU5h6BiRrtPS3i4xxt7Kv",
  "key4": "4RRgyYxF15pumRW3W9tBY8xNULXgpSS7GAPdJ99xwNsUdcHP5Tej4NqxpJ9mXBXBKuYyM8zFjz1cyfzSGb1gNXL9",
  "key5": "5mRw6T5i5YiK25XVup3n7xpWn4yVxdDMdXpEk3FnQKgLPbqm5DhLBDuwZmt53uf3Fdgo6vBo1KGQiq3nuEkdm3we",
  "key6": "5rFoSjQ7GacWHLZzL8rmvhDVNKFvdBoj2UNmXaDpLwJefhG3rBgSb2NFbyHLCCDd6N1KZHmEt8Gouzu3mh5r3VAN",
  "key7": "4fGKumTUFDHQ45P4ECyCdCafnpBamjLmYtFLisJyYXf8iGpbtnR4FpWHyzNhcHYEeohi3bm8z1QLMNaZaxfFrDhg",
  "key8": "4qLTKEScoFUV2cLVdA4HQY5RWz6sEBT4L2SLHfTUmZNvtQJ7KWNr66Wdxxpujoq5KMaD6zoC3Vb2uVesTgFjfCt5",
  "key9": "4n8uePKAnwyHiqN9ZyBGPZA95XeWtsAB6Vcc5n4GRMgw3Vhvi9kLN9hTv7ikjyQAC33RthbionNYcDhYpwLFiiJ6",
  "key10": "4qxgqDYo43SdkFZWTvEzwzBBps5kvbjKD3j9BZaN9N4we8L1sYT2dbE8F4t7Rn7aBWvG1e94hEJ2uhoNhDvgEmzQ",
  "key11": "4dGsP2NfWdbcRB6cQu8SUsqzgARvUPoXmctDneUA1kCkbB591mdiUJKRs9L4X6aHu6kkypYJh1tSw1zf89NWRxLU",
  "key12": "u1XPzyjJRVV4fwbzYWuKAtHMMvfDLukDnvdPgctKRYeSXuGkPmAqopDuEeigxbnT6j6xBCboq8BvkGcKUTkLyVR",
  "key13": "2kbvP5wTbxQ8AmEge765NJV6ypspK6oZsB3UhA7P9JpARG33PPH2KjJTjgvdGqTgdFYRH8sihXBvByMafcVQDHed",
  "key14": "333HLnqDUgCFSWo6Gmi3yREMBt1JDEZibY55cAGHSkZKi9BtrWYYsPZHC39mtSMZ6peTg3rZTN68YoZxSeTu24eK",
  "key15": "3LXF28rANZAVZZZiQ93bLkBoCkz9uUt51zUQ9TMPXPsaxDKjKFNBgSHB2LYvXE4ZTeY9HuffeY5biNJA5hxAS8Qb",
  "key16": "2awxy73UggQWx1F26V5b5fGJfRzNwV9KwNHaMoiViC4SfAHmnFUh45wXUadVkg2MxBQHctxPN1shSbjk89FonoPQ",
  "key17": "3bnaNskVR7tmnW3Eh7Z6ZMFRYvW4mdaXywkoiuDVG4DteVD5r5w9ZoNXVZ64ZLni1JaQGzD7pN4YTnpCu5x5uoGm",
  "key18": "cGnXd138xywxSvswnLS1GMLz9VnV7fPkzZVUBvEtSouYF8kmUCCR2UunBxM3pmEC786BC7UXWPYN88YecPiknnE",
  "key19": "ZQYxxw9VApbBASraQE81g7d19yQFtaREYNMUxbQqcACtxj6rZcy1NKV3ZFbRJufpdmTjREeBK6QvDcZHgVhcjj4",
  "key20": "4FngTZge419R9ExWMhQikzo5kgRe2wMAJJgmhx1t8Ps6Shf72ejdU43xesGdAYdw8bh5X7dDdaCLvfSSkoT6kTsL",
  "key21": "2pQLuGs6YvcxJNb56QS9cSncgSEYH3LKuWsn3FQqUraUfjg57d9bLRU28iPRkogMVoz8dBo73QKYHkCbvF4gEeiG",
  "key22": "2BGSTn3daG2fCmiZ8BhNMSFaqZ3wHdDbZrRRzEj9EqPRDUfhwmcJ7z4r9WVNRpxdEMMP1XZUThf2adkGCBAEbd17",
  "key23": "3gktpyn87tb6aHYHUx2Vj4X3WzmXvm55QQx2kteiEQvMafrzNTm2cK1nGdYifFh54FE9ZfBqcohbRWzdAgK96bov",
  "key24": "3dpV12kYx4pKQQG8eJWeTKGhsARHPWfKRsEz17DisZachsLqFa1NDLLsMV93giVos16KYY4fvjGEg9RN898mTPD8",
  "key25": "6NbdSRSL9FgJWqVvAas8h1yTwHPbjnzBV9SAXbhQRdztYa9Fv7Ccc6VYwhs7aHPPAPnE4XyUPCmQznRqj4vD9EV",
  "key26": "VES9QNvMqP3zSEu2CtgaevKTnYxCs4GcN9zoLfTvrpi7UT7JYbdj5DHCgh3xuNvbYzfwuZC1ecgV5vVx28Zojkk",
  "key27": "2DbRV2r3ozwmbcf3DFn4z3kG8Cduj7QpRBfFqHg25UX5FEXund6uHasd7kixsnhXeFsHKdjpAaKi6avtMAWXbXku",
  "key28": "644HpUS3JwNdQQKVXGNBiLDdDchxW3yma55X1A8F5gxsjc5NHWqnSfGXWWfJyZHWu5N35XrUpY1oAxpcQyU3JEMX",
  "key29": "1246UQKosCCt3D3PYurFuCMC394hxum2Gfj5vHr8Zf164X6sAonZcY3ijC4MxX7w55ZPgeaaYZ7DoCVR3DkTtHfj",
  "key30": "3eLjAJFXJw5rjGuEhVBYkAuwoRfWyvexXfefuSFTFicf8reL5MWpFmx6A4aAbge1XzvNwFQXurSZjXrCM2u6c42A",
  "key31": "2Jqij9motG9Ck4bPB9b5UBW1LotoSMpsYf4F4ov7EmRZBmjFbNYj4mJ1zdjpuUCPPNv5xyo55LKhdNL2a8epeLzC",
  "key32": "4HbbMEaFQZGYRQXtdxpXfabpW12ZJte7rSyyZPjBpF9MXUacgM7K7TUzEaZGkyerU585tZbpyJABMsjsSiAh6RRd"
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
