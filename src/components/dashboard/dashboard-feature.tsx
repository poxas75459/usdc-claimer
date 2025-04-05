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
    "3vja45MLYKC82xo51hgbvhyuFCWSABbiPZWLgUbimSShzZphUPdyvi7rT1JedBxuh4UHgUzVebZBP4Qe6mEjvCZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K5B3fZDPzqHUeoPz9mpveibMiGwFu76hgp3inZp6NRDZhyUh8yjVYX3cdjAYrX7VHmkQBnP8xw7Ngc3PdPb5ZpG",
  "key1": "4UcBMg3566Mu4TwLQG3dFGKM1fxDRpE8a1Y933m9fWW79f7TQdzGKwLZ7zv39dWk8KgdTPAiANBx3P4oYNh3XcRe",
  "key2": "3WCmzv1rCHFJDkvPDioVKNQ5SxmxDabE52RxNnN479ciNziSyQjFF8k5oXo4VUiHzt2dGPanyPRyA97kwcmXTiUH",
  "key3": "2QtLSiJi42kSpJK2jRF2D2KMT2b3jvE2gmNwpPnQ95p4EiSbuUsQA1JNszUP6R4dXVqziLizMYVaYGr6k89yfuH9",
  "key4": "4CHd2BBCZK1WQFa9B6TDXPvVr3rHeRspc4rgEsmjhqDg6rfDJ7DMK9e7LrJrZFo7gFhAJxjmBHhw7UxQFKzByzKz",
  "key5": "JR35yusrwo3KvVxuVg34VQpmK1csqBx3MmR5M9B9K9U1oSNQe1KGxcAG232Bom33DB16kAnyLBNBQw9szQTcLYB",
  "key6": "47D1jt5Huu5FzQQpa9BRBw2xdYFWYZmYPU5DYSR4yk4AdnsEJg4njRJT9boMnpVDqWvf1eE9wqqHhCzhZbDLdWVe",
  "key7": "5Rzw99VXMrMhGmUzTp7WrwB73LiYJ9iwBek3byXpN18GtpYKhoHFzZZF6vpccZXYLxpyCiYpDnxEnXkAw8FB4VKB",
  "key8": "32ssDc9XWaV7HzXNU5xb6pd9C27mxTvCcZV4BsYo4bZx1HHLekWmXuqyYjuU2nQ31c7XB4y1tZKnSyWnTM9igu4u",
  "key9": "4PMBfp69mBgS765jC5BUsT1ndoXsmBZYghcCQ2isrdyN2A79MBQgkuqD4hqVWCSDTm32de71iXds1cbkmvA3m6jX",
  "key10": "62NZzsAXVkjHUSABavNbAgabt9UGfsxhsSvvqQtQQwtBVLcgbgiHJkWm3NPVJht8PJtWB1jEfoKos8HTA51nAB6a",
  "key11": "2xUm4Ha7c9EyubTdxVY5KYMEMQdrVzGMMDyrneurYhwAHPwSX2RGk5qm7HqW576dfsbRdKL6mQdp5ePxFYWwaHcZ",
  "key12": "2BR9AKHnfxkpMRxijSBXzBDZbFsCaJ7uhAJAfqD2vUgUUsSi71TgdcG21Tk8HWHQqMBNzTTNpgH6X4i6iCyXwMoX",
  "key13": "5cNgg2tkCNpy1zRmba9QmwAS2GaDzWeQCz6yxbByEnu95d73MCAzUGRGg5b9GfnMdTUqCKfyuWx9aps89vVJ6v52",
  "key14": "4e3Mv8EeC8EVMdtSaPircLX85cm3XgoXCPHVmCGXq1koHr9DULagvSjoS8u7BkJSehvAmPicB2jfaZwUH3GhFeAi",
  "key15": "2AZvnCV5X3A1FSqGg6Kn2vxB5uMcccBDYdwAZsn6JTcR5UeApCCtTxXi7RXCKrq3Xw2m5vbWecmXU3aUg1cy8mRM",
  "key16": "5GCW3rg9nWfvC31bP1p6xJFxtRhzK8JyQBP2U2FD5bDvWr7YE9XAQDcrGHxBbv36RGyKG7ULiCtMF5cP9pUZLqUk",
  "key17": "4iMTq9H8B9uhUfMEdWLZwZi5ebdxWBdJzNs8uDRaqXNm9tB9ZNxwjZK7kfxBnekr9rkzGQLLWHs1NtWRBJpqvPSk",
  "key18": "4S1ZgfZVmYN6F6R3VaDmmwsnA4Pa8qgq12GxLtm1ngn9CgRoEGCkbuFDQBzugWYF71647FTek5BKAzYu7Gbjw8cL",
  "key19": "3wubwRP5kETmSkjJc4Zgj6Q1bEp5vG7tdNjoBjtc1nURQqc95ytpcZRWs93ueuHAtfv7Dj91Ai3y23zEQ1A49cQ7",
  "key20": "3fXnuSbBpkxfBKFEFSn9882tSfepviPtgD9UcajT5fmg3QAq6yZ6Yd8WqNSZof4fpm7hVQne4LQQ7Cuyt1Bzrzkq",
  "key21": "2itB5VN2g56RnWYd3Axxq9wBFVRPdbkMknQoNFZEnegktRbruubohs9pSmJNVkNcxQFmjrcD6KbE8JjioAvVABsL",
  "key22": "5iX7QfejU8XB97D1QsaBAiSd9gVsPdstYsx4XGPWMghaQwyCEsxJraqjnx7yuuz6gypRo9arHTFpbs4WD21zzJrz",
  "key23": "3Rg3zoiz5Y4fS4D5JryBwx2BGSFvAxhX77rzuHS98Fy5fZWi3atdFW1PGqhyqrxKPkh28wtpMgeuTVjPfnm15ofj",
  "key24": "5U2ypeypVfsssH1fMv7mpP5ScrENvsu1SupLrc8jQcj1E4txdmPFrJrqk7QDz5oCyXDeLSmskfw8wzBN1ZCq6MMd",
  "key25": "2gHhPNZVimJExdSxAihjWnq2htkew846DA2KtYkc2zM75yvwN77B3NVqfPuMP39abMmqTUYaNwpiyvjAhQMVxLWN",
  "key26": "5UosqrEMwK67Rs2SvMWoqwJkuTDgwp3aFVhLkaihePumsm74BdrYidVaAovQs335QS9fFqyZBsJExAXXXEE1sbD3",
  "key27": "4nAxvN4wLoiBRn4Z2KZ8dcrNuRRevBBmTbj7vQvgBfwfTpWRCK9VMgvA5cEK9ycMpMtjGKzPYVdd3pcUymQdeCKz",
  "key28": "4Vmv7FoHfaLrkdDdZ8X1euDfE6vJbNAN6LAxfAqd3ALxHAx1MGJV89U4RBvhbj1gXe8uoMNYqPoRNtGrGqCu9LnP",
  "key29": "VF9mnhjdZKqprQMzuo5rsbNw8aW5C9NGJZ8U3FH4RKQoPMAX67pQRtQBWmzYQmDNwwVwMDfpNzJYhRvqmN1J73G",
  "key30": "oUS6RmGED325Jhty41SJrfRu9S9qamcWPkKvHpZa6zvtGuzaYkufet1EefMbE5v5F1aDc4h2y2r1LDfjyhS557f",
  "key31": "5eXm7H5qYjdFQfrSwv2dPTkE6uiycTe6mFHePBXjsJ3pT8YS37N8Qr1o3BtQsiyrF4vFxC3j3e8LQqpigRvwbqtH",
  "key32": "2TFQjdPG3RjskLGSE3bRkB6FcKfk8WxCNDg8hx6Xq7vgZMpREE81dZTDR1TCQ25QSu1TWtc1QiMY6BUm1BAXfj4U",
  "key33": "2DfM58EQfwz355mor8KLjq6JUkTSNnknqvV5b4sVi7K8xzTPKmVLDDjMbTfYgRC3eCA35YxFmjpHnHzfv9iqRJBy",
  "key34": "4CBK4p7qDRedDFgRtiAjubNQV91WPgrRTX8dfEVXCmsckUeCUjsnkhqZZ9WuUBmtCmG5XT6LjAykNPGU5cv7zCoF",
  "key35": "2dxqX6QYBgDeDefbSiUKjU3pWr7k1kSR4oqNCv4NReRWc3RUSUeaH3qctPnGKe7nVreJUKdaGUvdk6jMLP8foDB4",
  "key36": "5YWxYvULnRTY73zqJGRW83gLx4s1eHd63JWu8BJjV8VwaFNEBh8q4oUMu39QVfZVALtb27FnwXvQcKeUnduRjiuZ",
  "key37": "5D5PwCj7QP3v3PCC12ZuQxqqVfmR2h68kcD6Q7mkjc8UnSmAQemmDANPK16H3RszsJwxeiKW13g1FMrCeJXgwRQ9",
  "key38": "YzzvV2dGwVa1YPACEUf79uVGCkEWLg7UTkvNmsYWkeDgMa5RVkgcWkm15UCidzXKd8pPEfUhf9RSbYUPpxfMxHm"
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
