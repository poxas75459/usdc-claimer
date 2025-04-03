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
    "2KK5vYA5SHZvwQnjUEhRbqyoAJuAD5fENjWfJdgqFEoBT3LxB1gwxYAzKXebRbX3mf9nqw2CGYFSqcVtFtjiWnRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bveSaGqyLxbcgj16kErcHjF2qgdoYq57AZQ9o44Xp41fHTqEc5HpHk3Xegz4jinTZKxEAyWUPMu693t2sLusQ63",
  "key1": "4mPcGYE1Gj6cMvpUncrxhmtLexq8dh4X4qAJayHEppPTojJugFVru2KcGrDEJFiEuSLBPmw6gyn3XmHNcKwpHfeR",
  "key2": "45sXSKeshPLu8cfqBHhwy3rESDapSLpFEifSbFDzq4otXBy66CSFSq2zKhz7gFXh5nHQe8ew8FgDrZ9KihSw1jHj",
  "key3": "JFnbQpi4N1QtfszH93ZJud2ybwXWeFdi1tcz76xMy93FsMi5bKQSSiWrgUTkHkS48tZzpuDux6p8qTKeWqNWGBL",
  "key4": "7ofUStfNT8XS7qHEc64QnDmj5FjgwSkgXzbCFgyooWkqYP45xJ8Rr1xfhKQRKmGUthrgjgQH6z8itrVzgCYP4hp",
  "key5": "5K5Dh35ioqDYQmm4nk8aWnR6AaM89qAVsGAzSdDL95swiEs51SiBL8CjzfS2xavphDjCLKqnfips9HjwMGgx5Jt6",
  "key6": "58Wxh3Qtom8gpYpEXnaYP9FcPvFawcWGZYTMvwEkq8jt4KtGmsRbKA6Yg4fQisbcJF1JBr5Ax59tRvhZSBAojiK5",
  "key7": "JhzucKr9oTpBkag3G69QBkXxNPtbvgrNBpsZja27iq9vgNrJDrdpEmHmLKtn9nfqaMLuipkPVwZ6veB7jov87HF",
  "key8": "5rPnyrDViMEiiTa3KsWFUotJC5Y75UdDXTF6NK4yUwVQiX4uW4uqLaLaGokPxRVsKrjbD2wjTPm8DC1XaYYdjKwa",
  "key9": "4sgpzG5uYtZkN6AcaqbnUNjbCTkDfynPE2aayH8vXNfrJ7NMc7PFnhgeseL3zdzBob1xjNNGFcqq4bQACgFnBT5r",
  "key10": "5hRxmpCAG8hLS5nZ853iTVc5mJz5kyATonTTNZPVhz7EjuUmzwzjtM6wb8yBfBDVa9pSirzJtYeRSFzf3BqKW9o6",
  "key11": "4baRgkFF1zYDPkrfALkFdMqnV4tehKeY5DExEBiRtkgk7n26r2HiMAEFQnGYF1iKh6prMy6THJSrcHhNjtnNLSmJ",
  "key12": "oM5sXEDWeYPt5D2jiLVbZatwT75af9QqQkypUn7ZyDxqwv4bVyRVPNSDLF2bpa1kYdR1A3ani5RvRp9Nh3tbYp8",
  "key13": "3hSgqzvWHVSnb9mhwAjyCD6cbn27DfRcA6mSPH2YsV2Vqe1nK7mHCx6N2E8J442Jf8JX7sYyoW9bpxkMWTc3LPub",
  "key14": "2PXVmbw9zC7f76ga8j894AArYynQzD8Vd7tdxaU1STJ1eTtnPmXAgs9PuYnsjGDjAwgtGR9WmvCbvKJs8fgXGBRJ",
  "key15": "3oCu1nvSvLQGgNbbED141i63R7E7fzKeRSnVsssmTtpGRswwZq55rXDEkpFkkLBdTxThjUCGCmtAQcVmYjTK6veg",
  "key16": "5K5wuXk5JASrHxRGEJVhhSBX4v71nvNhvhogVN7JqRk8qCGUVAqDKspErKr84nmimsAivFmCjkYUMzGi7zCsBvq2",
  "key17": "25iCySnQ4yh4boGn7mmDwhJqN6qx7tDKJCvErDf4K23HrNJgy3Pzv9SFn1ds4TagqMM2YxXGYpZMTKh3VtwnE2zN",
  "key18": "4xU1P1Bq4a6xbV5fFjshwBG5mdZatpzHXDhtNX3srgtx5B4akPThC4WaKm9Z8q3V19Mo8fZfiNmnhCAxDrYVEGvc",
  "key19": "3g7WYGDWyfe2D7kco1yhX7sKA6M2vXi7EK8sUtm6GK3YjUCnzRtYjAQdiGMbqVQ1Xnd3fPQvcMi9McGWpmwmeSkT",
  "key20": "e2UuXarHozQ5h9dNSGboTsXSyKMRPvDWDkqNgEntABDUGG5rS4kkod84cYN4xe5kwCxnLkzL6xpa6PVLbsDcsYp",
  "key21": "4iMgcNbKjKnBUfTEt3u8kYU8coWCwxpc3at9Ahky8zM3rd2gNXxsGK15uw38m8WPRiqnKYsHGcVU3mx1ruTk8dHr",
  "key22": "4AVHRMEkDPJjjoWDwGPzE4GwgJco7tvvpQNni2QbphV2SCqJushSTi4b1kRrKV1ChPuxZm6RAS5bTQoRkv3n2Q1x",
  "key23": "3xY93kzugQ4zmDpz9u9Cy1qHUeE2Ybc2S1UMLJBQ9CnQ4zV14DWfQtV7gN3AE92nEoQUfwwxZ8rH9qxH3baJ8hXB",
  "key24": "3mYS8bmbRt2MBJpjCfCdCX7bxVrECNFdD6QxtJg7SfRWFXUaMod91TounB73gpL7hmz7mxveHavrRGn7r3aMsef6",
  "key25": "5oK1kLMjrah25KicTRb68AwszmCkjX6L5QZe4wc6o7Re1Un3tPQ3qyzZR9X1o3gv5rsmU4rEPcAAvL9nxJXpa4CQ",
  "key26": "5ujvoao9XFUDs8ZgZWQGMXcLQVJnptERZrMpW3v7rww9gvUpesDXX9sJZzrWt8SUexXmqmdoVHQboJnqcfsgp2eN",
  "key27": "477rjri6L3Arj8C1PXM6SSsPFSWgMiBBfgg3c6JBnRB1ohpaf9cpK4r52LLiXpUYB8g425ZH5JCDpyo5qWZ9D6Hr",
  "key28": "66ErbXpX2jYSeTUu7BaXcPMqdk4DGDfVSu5VDV2CqUvMkWGufRRR4bpBwUt42uLLyGkeGf2b9DPuJJoadsQRTEMK",
  "key29": "3ByvoxDb36e6gf1juQkFQpFbzGyajM6JDSs8oShqkiCuu8pcC3ssh8X5SwLAN4YareaiaxDKqLYLDdE4fpkF4CnK",
  "key30": "51n2WTh3wBMpeT5qdurMnUwx9GdNf8Zt1K5NdhEHbMTTJPUDCkkxweYMuate4Xgne8Azkcw31e2Ha4e7ZaLZA7r1",
  "key31": "66mubwk8RCVmmF1UMTqCwsktGm3A56U4pmEd2a4bmZzRuu2gcuLD3JPkYTTGHAuLqf9jCwUEoiHhqwJXufUSkGce",
  "key32": "5FsF6paZt2LWKMjCPUdrmC3SMHKKsL6yyw2wCWRwpCKYttXFYj2MMyrDDB7TCiZJ75rF4wVRo5dxAVXqkmW6Gd6P",
  "key33": "2A4FgoaVhP2scgqHNUy7z2aLUYxTruyqCwHZf2z8hCc6cRyi6u32kdtZT9tNrA8jsjHEWcmt9ZAbkde9Bpb7VViN",
  "key34": "61Rh1D6wFcW4GpS1Z4UKh5ZVHXWR3aycPZwTQgf12kSyJ2CFQYJzBgiFHWRguruyojL134NUGF6Mc4m1kXMhwHWb",
  "key35": "5hbdVUdUFPXm2qxMYpT3iQJaEDHMjYEq8G5ZPMc86bDbXmU4qUMBsG3bsqTFJP6NF7C3ULGHKCjkpnFLVR6Au7Af",
  "key36": "dYQxcobWtfqGdWpk66PHMeYuGgzEDSye48yLJGwcqFC9SHUAgcgg1fdvkmge7dAagBs5yigQRFXgRpZ24Qb6mMe",
  "key37": "3afgfyEbnJS5fiH5sXmPEN9yNhubGByxBrwFCpJcaafmJADuUtB7wKtpmT18x3ikLVVKuufmZUCoy2YtkV5BcyMJ",
  "key38": "3GBtZZNB7oFtQctqKeG7thracWVJ1PaxQYsCVrp5BBuL2youieqpepZVjtkmjCkyQKzSe7HozmnECt1jUMsdPDw4",
  "key39": "3rFVM6E5Lpq6UYrBBnWeNkYgrn5KprQVQWoDKWBBbKx28KDnayGGqN6dfpGnd2YqFs2H8GAD4v3h2Mv7RWHqUEVf",
  "key40": "29byhkH71X1WrvohqQ1mpMezyxwBES9T4EUet7HN1UzQQoxTmJkKRNPvJAQFeHMnYcki5prhDh6kYpvhnKcpMira",
  "key41": "3ATx6visgtzvLCYWLv6yLhn3mTou4ssog1myEjjTxYSmTs4ugJWaZsQLvXHcNffjhH4sixQv4jrdgUmVzwFEGpcZ"
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
