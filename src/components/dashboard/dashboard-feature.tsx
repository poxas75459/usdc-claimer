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
    "5eDsfCTxKrAcwgCvYCu5e3xhzmR8QnNUGXS1JZ8k5AjJNen4tBtJAPddHYLi3mgMKaTgE92pHZCuC8dUVwztUXxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35bqsAD4NcqN1D6p9KJHjqLruEDE6FGKh9g3EpUTJkkbdSJEnFgHDUoXUFW6rrqZJy5yDPHVdL3i8ZJQeAhXTHmx",
  "key1": "5oCAwekV6z9darBZq7nSwd8g1HvhfuxCqnU5kFzUCB4FFA4wtQQwYZdUCMFd3T57ah8D99r15TvWequYqwX7qk47",
  "key2": "2pavccvNMRgb6bkfcx3eFUR5TgC7QpZ3ZEa61YaP41ZJxo7bYdC5EwKj88HaMKPxYGJtES9VjWwcG4s9k4iqToDu",
  "key3": "53bqm5nanmyQvGkbmaJef12k934LemBek4n2RU1coCaAhUFyAsvnUGGTmWqF2Uw3AhRQih4RxZWibyRRLqJMx9c8",
  "key4": "2ABH1gE4cZzNDntiXUx2ZrHt11k37qmTwTb2m5rWyUQntE2t3xQNUgrFBguHfBdEbYtX6wSDyNrLYjdXSpqdWkRY",
  "key5": "65yFUPhRsw6mAvG8RogQ5Cqjk72xqXhYwe8vPvUEhGuXvmTUTQcs5G89ktK7uUJiMjj69NmF7Yjq4P3G9hBVgTUQ",
  "key6": "GpvgQwZ517oqiCzC4uCkQF8KxRd6cTozjsJD2uB26TUa5pdgpo9rwo42voeBUy3UnAym8nQaZhprGMWwXYPNGWP",
  "key7": "5ah74aTonvW6gmA9CU8HmsTBXAykhxEHJDrT1HwkPCHbYEiZNx2St9y3McD1HcGP5JLHwdgzn5Q3RMbhbpf3pdpv",
  "key8": "1FiYGk9o3UAz6zrP2GrStga6Jh5DAMMEiahKs5d6B9fXqLw7Z47mmGVzVScSu1XL66aQQSfthNFQ119BCcXb3y5",
  "key9": "5ELXcVoW1riYweGDSA1wYrF4zQoQeQcEMn7roM31FJ8qqk4xqrmMT1M3Q11QzyQgn9QTcbMEXUZnJqakmDUh6MPw",
  "key10": "5615nNW97Mf7jb1mzp9Rk98AUERYd9HEuWpkBtBuiCreYWhrY5uEr13JgU3ELfqZYPQM64dDv5ksP6P4izT7rftR",
  "key11": "5SPyQC1sbzaRYgMCFqbvnQ6g7pssQxuRpmrSUmrPGQG89vE4aynJudh53AdgxX6KY2AjERP9HTtyHxe3UyVifx2C",
  "key12": "3xZxqXm7hfGWAkeFPCLErXdazN8jKNqHx8hS5nhWiJEjRmGnj5NgE1z8dbS9XbwuHeRo62JAwUD8cmKYJ28guwp8",
  "key13": "5UHQhcoy3hBXR1MUbomPY8fvxnJ7kyYTtEveaabN2JTnWoUbQUaABiB9b7dHB4Q3ENn2XZ9CkkaVDtYDPdYDAdfs",
  "key14": "56db3Mqgsf45vZc7aRgCL1Z7J4cshYpvx7AkQuhysEQbiopS7XpL8fsr2SAanGw38HYcQo7j8wXoyZmu4ESCPLjP",
  "key15": "5pGGSXZawZVqJmyKfsffBpjHCMt2o58mP7rScuKmQLRwkUPbB6K4djXCi2s7pDJDG54zo2xwX3bUFs5sBwTZ5SUd",
  "key16": "2dTL1KkQkxDAbEnQAwzWWWfRYj7CLD3E68hbcrPJRsHt91P3DZZ4u5cLZVoMicCkx33MtFAaAnsZ9NvQQ59SQEYu",
  "key17": "5Fp332MAe5i3uowZ6dvmbqojUHJ6Cn4Nmg3jq6fz5xjFRocr96s2jVCMe5oGNooHS7Wx62dwuitRj3W1oPrkts2c",
  "key18": "5WFQHjCa7F1dys7imWwWtH1dviVwR1VC5ukrbUmFNP9KcFRzGBGA4Lc3yhFvYXcWLJ6tG5gkMeXUiJL3NVqbMWxH",
  "key19": "29BCvcJBDiSVu6hhPxa6bM1xWkPeSi2Lxj6KbN8rpC9S6RQdgpQoGEucgT3GtN7didp7vDxLYAV1oBmyXAb5HLEC",
  "key20": "5t3zc9ZftAG4PFDd2PvZzFKMptULa4P96Ls9CEGK2KaGf81r4Tha5USQrZekufM3MQA58dJapBfN9LA3MBrD2SfJ",
  "key21": "4yoTakFv6WAKSYKsM3omhaP1oFFb1kJhst44LM4JphLuSiGyN8FVa8nnzxJ7fDjc1QnuiUDUXSj63zCUBd7UD27C",
  "key22": "5v8LeGvHk9kPUN3eGgXfH8TtoGzvkLKQ5Awgwot6YcwzGuygdJ5LXr4bpRdgUdVVWyYXSZhMizA1ukuWf5cfU7wP",
  "key23": "4ooHWKmthExuQJNAygrBMMXx5Cf8k3bs4TQmiT2k6XkBzh28vcGXCgs8fYxv5vw8FVJGedrJoUnhqrQkbSbPkmhU",
  "key24": "54srtZnWUc4MpYifKH89rjRuHLeTwq1Wo3bbaxzPnztPtkypaNH45fXxEkdHUxH9dtRkP4uzP3WjNPTG2191F6Hw",
  "key25": "4SMQfBX8ULJ4c2igbc9sJ6C3dXq5PEoqnxK5xKF9Y12CmAjsmrNBR21gzh9KuKsMoj5NyBZ4igC9HnF2CegRLwBB",
  "key26": "48dWfp7SBKBpxQmRsnmbT7xqDSWPmNrkEeTkhn8T9CkGiJ1LrbY68j9WLY1np1JJ2Nv5Apb2xCwr4TUpZhyCg22L",
  "key27": "nTbU2atd5RUdJTcn7f22VJHePh6PEVB6GgsRGJkK5Kzhi5tVoUMPNi1qFQLjyLnrqajpnLMUAu9aWENPs6fJceo",
  "key28": "2ZvjnVU6BCszHjH4v3u7vwhXWbcDnkPSx65PEsDX2fG5zYtVPMRLStqBDC4G8LJxnoxCBzMiMuxQjUr1MjuXAJLG",
  "key29": "3J8nfrHFc9uSvXHNZqPGQ9QJFkswUp1vf2uZjE6oeYj285rpdRVhiZkSPC9EHwxbS4njpicZ3oYxc9qjunoyq6eJ",
  "key30": "XKFk7Tt8srSLqKz8QwLffNCgFPd1cwEo1aqCYuwmZhMacxmc7swQkVo1NLYqRYT9KbuQRCA4mm1UbWYki99KcQZ",
  "key31": "3RrqUuhCisAup4Ncu5x5byLLUqyPd7bxBb1sToqBhiYEgrJctneHbHwr26yp9FqjD2DWRCFbZ9WNquTR3U5faNeS",
  "key32": "5ZWJzsRMWramGgyeR7JPHGc67uHx5uNPq8do2k6gznDDXFwYvUpc6dizXyLpyD8SDMgN6EMMNXGvhgfe2bTcLEBM",
  "key33": "2r5YoUwriGs3u1yCUQTo2oLrq36prjfrwToaRhiT83dgHofpQ3TS9X1mmdQGFWuHDpQquf5inDyNgZ7uSj61GHTP",
  "key34": "3L26ZYcyJqvSgV2vvEN7hJoyUfLG2YMPzK5mLzp8xJUL8agFeNo3jvRcCR3RRP49R1E4kWjpfwwb14EL7JvViL1D",
  "key35": "3YcFSmg4kRBKjZUTTg7q6ymYszvL2yRqcXWYq1KeaVvi4QuZxYqRaZC2tVHpP2FCBxhSMFQSQiWe6EFCwkerGwwY",
  "key36": "4QexMPbYHKDWFQ1A27mkx8LW2kzBmGdi8Be4Q3VtP7y3mFS615J8BtPzALzuqxyB7vW4caAmjiCRH9EHCwVMAi6u",
  "key37": "3XpRFm44b59xcfqcixn71nbnGbtC6ecgDvwZsKAKniuo1yPrhLTA4L1NKJmDaYs9i2Mo7ubwPw9kyPshEvn4aLE5",
  "key38": "38uK4LP6sANAa44HK1bbVRFL2kW9CWhK3oehWHqha93BNScsxAVu7dMGer7pPp2p6Qh9GhPCtyHxJV29ojWANSGt",
  "key39": "22y9jTBGDV6VqpjexQ9Cc5SK7Tpgb96NK61kuskBSau2PXuRwx4JZKPakr4SZYt8icSkmCit18dih5JVXKsYVXDP"
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
