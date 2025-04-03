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
    "3UtzVhDyzZ7AfbchGq6SwLRDbak86bT8i1BCAtFexpCE4G6r6VpUME8dt8jyRLV6ux3fitdAvmqevwDbg9zA6a5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DUcBpYaR6k4BhjP8DFkxEKiVYkTSY6ZvxcKh9dDn8CVKANphcZyrU2RAXnRSDJsxceMAXo1i6HpwcuzuLKfaQRk",
  "key1": "KESfVEteDZiQH7axTMTC4dTiMDfMYJrHaQeQFG8RNpYeewBMUpQnTyQ4TNb9nUrio53Amz8H7Zsn7Eg4ShJ7knR",
  "key2": "52vefjrvS7S1wSPCW5tcBYziP3JUv4RQqqVBgJ42enhGPQyebey7WdbRKdZXUAA9UXRKkTYoR1Yk7FGA1KQyKY73",
  "key3": "2vPd8dR1HKm6nBAQerfxNSt2rmPmzNLbFH8BRVuGwCkk8U67RGWuzRwfBFU4YfkCKq6fA3he73AJUakVCYVezyzS",
  "key4": "pYS6Usx2KGrqGkou8iG8VXxkjvKWdi4nBJzqoarXDSUjZp5aTNxHBc34ENuFszB3aPys36ypd14kQETa6JyFpYf",
  "key5": "49hd26gTug58uZvuxEa6EbaEigYAbYq6P7aWe5bTNXgMEs49R75rTbUiXw8ZKbotXyHtVwrfA2UtyrzfSv9ir2rv",
  "key6": "3acfdHNU6TkERgA7Ugdh73dJ447tvtPrfJD9fGQskhrmFtvJ6DK1KV42RcLk1M1BnFFiEzTZB6i95oUJZRu5rdhk",
  "key7": "3uyB2GEUw8EnGz1pVjVncTEtArUJVrPM92yZ3d1C4Fs96gNfVx3m3XREPhxch1JHG7SC7wex5g7GdS4abh1NeFPy",
  "key8": "5dDL7nNpWgqJZSHf8cNDncHYqNEGb6QQ68G2v61NMvkt9Y6EMfCMsFBGkocDX7qPWezcB1mQpFTwkfserCtigqj8",
  "key9": "4kCj82hhQnpU5vfa4ksZUVqrPU3XTVNtwGdb6pBdDk6jvqqt5U5F21tF7yeZ3gJeaKHCzNMbYZmmjVkq58qg7qmN",
  "key10": "53sSYbvhDqygyfFEXNsbQUryxHcN6Qo1NDT5tY2twgEDqqygiKC1t2JCGAeQR2Dhf2FASQmiNcqqQAnXgLmXvt6q",
  "key11": "5cynMvWzGdwrrUs49maPwiLofjfHgw6Rxgc9brecjcHEpFUU6TymeXECN9Gz43siGS3dRV4xqzzTYKXoCtUeCbBB",
  "key12": "3tCpgtFoMzWC4fNB3D1kwU7AygNeswWV6b25thdE49RYrjBBuxxLvDkvu8pyYf1TU87UzgAYPfykk9WdyjYbPEz4",
  "key13": "ZbjQGMr9kQzrNiV5SfEpNazafshgQhREksArSUSxbHSAvQf9ASxmSv4d3CAuKk9cmmL8rSYEJPo4qYQBMHyG1FZ",
  "key14": "LJstHoyUeV6UyAbineCbcro5Bz32QxiDYQAnYfenY3B89bruXjWtXjqSKMXwdydJvfawVJnfiucqjqbeqa267nN",
  "key15": "4ZabVUTsLcghyCTZnXx4tHVD4s2t89gjNuR4TcqLwAEd1haa2RLFDXUeFugrT1zpz4dqtHDyQYNGxEgCparu5Mi5",
  "key16": "4GgFgokWdrLqCVchToZuTooQQGWv2GXttsbYikajabDoXbuvazsuJcKAvaRbkAjmtFkqzaghHom8NoudivL53Rd8",
  "key17": "56mtxaFqoUKfEXHMCVJZa6exxgjtMFkypW4PorbNM12Kg7qWopd1jmfFzQK1uQqFyF69QM7nnuHUQ3sWMeAB13h3",
  "key18": "3h5aKeSWDbTvmW87MPPBo7VpEQSSJAJTjiwAy6xvZceRtr3U7ooyikw4KCTUzDJ9xo6FPkPXs319K9nWZZXvWvJX",
  "key19": "3CjeEKeW3gdCvGoQzYmmz6ii3zM3e16Y2Jg1SK9cvsJ9URyvTzpjHhxUaZxs5HLZ7TrunyZNs6SozuErs37chWa1",
  "key20": "4ZzdFm4jUwJTkWD2mVT2GpY8GbGuMSm64jFSaZFA8VzAhbmEjmDkT1uWi1YmCPX1CnXA45DCtzgFMwV215BUa6V6",
  "key21": "3xiXYjre2oSZWuFCNhuT2q4k5BQzgpcBNWjJ16KmKkvfrGUTNCEHDqQmLRQjuuq6UyqP4Jc5znMa15AFQfumiEPQ",
  "key22": "42Pe5qUkANwyLp3GwidThfPXDWUNeLJ66ykazDWoCAfVzXvoLxGv81C7FzG8BJHD3yYn4N4b1p5K1DzMbB3d33ot",
  "key23": "23B24WzYUHqGkdGpyC4vVfw3dxWdx5K2YYoMw2BKwqWJHQqWcr8jM7LyUSHP2eh8CMbYdVwY5FXDmDbTTwooEmKp",
  "key24": "2D2PBfYqqPDPPyWDGhmfHMhJzYhCxL4d4Z3jGhS3d2qtoQLfL9TkDgQYfP2JLKQKRBQr3PrHv9WuwthSKeh68gV3",
  "key25": "5H5GcN476Kktr4HTqqEZ4eF28XreanopdLEZ5RxrFfjGD4K3YCX6bRxhNJREwQtCTUC772ES1rEZkkgCgTWsjxGZ",
  "key26": "3hC7j2UcNdU8fYcRyseBR7BvJbx6ejZVxrYim5WZDaBeH4gaNWRVtahR119BJKsrow7QNyqXU2i9GY9sC53z3BpC",
  "key27": "35o23fmH3KUdSFnn6r43RTxPDLHVDZvpJ3U2ThbmS5JTmEdTVowhRBNFwdVFBvguwB8xHd8n5kWi2iJ8F7j2c9ud",
  "key28": "kmxRiwcJ4rDkckCy8nH9b6QokRcXLWQN94hsE5yoJCWyKpixQbD82uxMMoNahi7SW62H9HjQuhE4kUGVAhHUyv7",
  "key29": "5eAftz87x6BdMwFpohzDarUfSjMqwsjFDFqtM2GzDSHrgGwpHbwpZcyoGrnntS4QitCc5smZyVkuhZjFUzdAiBHV",
  "key30": "67pu4tceGcdCaKDeGktpnX1exKB84b6qqkzw8e5rDsyU7UsoyfheMDcoJh6jjNQWgBHN3gpR4Z8NFdv1oHV6Kofk",
  "key31": "2Z6mDjBA232yAvRGh1dQicQ9dJaHAYSDXR2h768nSU2JhgZgrsFehXPEMAoLo79azUpjsFnzEawW1XxkqTr4o6J3",
  "key32": "5KA86swBPPVT1QiroJ8Y7YRev92E3v85APNzp7uH2bgZn3pSabu8XUkVDXsYMbDPWmji9gKgZqjgae9BGbbh4SP5",
  "key33": "3nSBYkuo9jUn1QkDKJr69mqcwACzSarXgYsR7VnKPMZ7WDMztq4sXvWww35veKxjC6h7bH64AVRCnTUGJRYrfypi",
  "key34": "NAQmBz8ryhPMr2jCgbMbFsZ4tXSifYXZ37nm9qd3ZoZRachYLqdzThNA8MAW8xgzPyTMj4ACLdagLL52GP2xp4X",
  "key35": "2sBTNGPm1A6ARqEfNixm3qF4fdUJYRfuSXeX7svmaZr1t7P5YFAoJoahgwBebmXrZS7UTwhWDp7jRGZRqrUVLYH3",
  "key36": "2VjDuTKnbRN16iUwqnBKToD72SRznBFtNTPxB4vLbBfGc9p12UPLzVwPRHth1QW96yqN2agSCkAYcj4V2M7YqcaK",
  "key37": "4VpTGZ7K6aXjBDn6EXtuhtyWU4G17NW7jRSpM6idbR3N2jQ1bmh9YHeMXXW1pxq3PLyAPucj5ZxAHXW2biDcj8Jp",
  "key38": "4CreGQgHZ9s7cZGzWm21s8dRRL1mMxs5nWx7pEe2V4ejZotDAE4euuAcmq98JqswhcWS3Nucg1jCVm81xjRWxx7H",
  "key39": "3XnQyHDLoKbYADui48KtiLr9P2XaeRYwXpGkuJJPRTweVH5G9BnQWofKsJgtFhm6H9fJidGfwBUyaZkCHgURAikx",
  "key40": "4gKNBrGaYsNuXrPQXjLD3RwNggL9k2DXopCf4as2d5XBSLG6SuJK3hs16JpwsUqPDo3aBCYAtoBBaTJkbCxZwbWx",
  "key41": "nMz47fRuFW9NCDSFjDFu2zXbQeT7jGuWRdGUUdt3mhUsc16YKWYAww3JYojrNxsRt8KVsUvEHCRkrV4NTA5a4EP",
  "key42": "48vGNJrE3jGUPzx9o5mm5sCk1856sf8j3TostPGd4TMu66oQNJhWoWcLUckW9HtnME2UB2YsymeuJFxADKQqMkVe",
  "key43": "5QWRd4DsLCYcD16sB5vmZnHLs8eJitUs1K2fM2EDgfHnDa4YJN5mLHbKwSxtGQckEGnPSkZPQir59umfvsZ6RHBP"
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
