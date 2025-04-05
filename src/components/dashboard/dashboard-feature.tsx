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
    "osWrptz5btwQm45mzErS6nbotZ5ymy3bGVD4SefhxQ2RMgDVg5zhnB2nSWc88fdHy4QTYBu7WYMakmkWJdNQGkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bMExkrTkLKzVU2Z2TnJErs7WKpmtnxDyrdRSzmeEfbYdFqbeeoXUD1oPD9NV9PxAAgqv4SNfmUVCx2BJBNTQ6TM",
  "key1": "3qa9d15rRftC1FtxE2c7YQdKCHSjD8J28qGNNUEC4F1c6TgZHnp5pGKam6KDYpo75CyYMBtZ7nWHk5RsT2coc35X",
  "key2": "5B8LoXK5LdwMdYGdjHBYdNMR3B9LgF3Kvq3AziAvbRjXZqn5WZje8Th3KCzHiZjPosMvawxnFx5T1ZmGtvgwJh6K",
  "key3": "2quJcUMDuPsjqvMmb2QeMxsu3XQhNvAXgfMvevYTNSGJKdty81riTwP1DfLYE1oPeKNvu9Et8h5fDhXiybzpguh4",
  "key4": "4MuP9Jo8Y6YZA3DHHw9UTVSWjuWjYJYBXHSTH7s1XGpxzFKVaicwPV7LST2LutLQ3xw9TtVy7KG5H5t1xpnFujA5",
  "key5": "2MPHB7FbyH9JL9o7pvYseMduH84MnuFiaBWoXb3HXHxa2P9WAw2aasTHEwjzLKbRLAberGwUrkzFGHKZHELuvgkb",
  "key6": "4S8i4v414e83DEFgtbg3aQW23JWk3w7vui57SMfKRh9b14Uh1mj9vg4JH4gKFHL9JGfpoKDu1sV4uga3f3y3QZmU",
  "key7": "hoAW4vHgCkWSLAgYfW5U3VJ9Yrx4JLsHWyZoHMV57qeBuy8VVVN3hvcyxgkMFWVbipNrHWWiDB13kN1H4fZo4if",
  "key8": "3bkkkUPWtt9nfvRU6RszsaoXebmfXrkDLPPzKJHb7izrYfpmT1nRtxNbjDvs3QMbYfQtm8orDoPcxvKazDbH9aAN",
  "key9": "EHbp1EeJGMP368E4sgXYvgTHnUPEXG47oQxA4ZVn5eeWmL8zCJvDmasvdiCsZyRF3nL7JG4yE5XfUk3h8GbAqBV",
  "key10": "3i8vKiv4miAsnChVKkgg1K8in5PQpCwQYVmgfuQjENCWPacgQvp7WCcES3PnjpEipJiBtMxzpkNU5pgkx9L5A7XU",
  "key11": "3L7h11DMEYFrRXj1QgfP4c8tBmo2QDeBYeixejHJNJt51XQLcaBnNxBV9XcjmBDnAX2rCdZbAQdbpQp2PWkTudxC",
  "key12": "3iEEM3F8pc1m5QZDaLrgufntmmdzhEe6nJKbfmAnX7xMgN7mFHuYxeCkkmVANwLWDbBMhYZyddhdmvsNRTZL2JjA",
  "key13": "5TZwSfXLJ5NoShfythqDKEKssGXFxwmUBGmybdqR4iXgJyBGMCo7Yd7XWCLucGezve7ooMNyideQRedraTjgjzQe",
  "key14": "n61FiHoE3Y9S6zCeu5wP45tYSS7JrDTAuFS6CvcqJACx4xg8wbpePfdEz9kP1CM6nfu36KR7FbPanMEjfMnr6M1",
  "key15": "4QETJJZDTGq278yJNuooiL3SZbeV8qhaXErbe5BNBy5phusgJ4vG1Aesupug64MjLAwnXmNrArkC7puYM2nGJeXb",
  "key16": "5nXR6pqSSPqE74Xq5YoXjvZFp1i7VPfUi6Tskc4g9FEmWLzpPgt1G7VkLGxzVkpNw5aeqBZjGY7GbBaABn1G7cxS",
  "key17": "5eZv23y5MVWyWRZJp2VbPpCe9yffeyJz5hnyvviTaMQjMVP3ZizJfhfMZ1Wf33LYH6BZnPsr86rYowN3Qoar6pjB",
  "key18": "2JuUvfK5Yy2trYjmQMjSVMZCyXipwgBFhg6GaAFbvgmhcf3JYX9HNU4fUmnjGEDLTZCDwcqpdqiBEnb2Xhp9LthC",
  "key19": "3fqChVyvcZBJdRzaa1mmHAsmV9DxsWDASUfqzUgGVwkmYzmoypLtcqLPbQ7qXDj5eFopj2tBGP3Zp9w2Ebdmkfm3",
  "key20": "AJMci3knXzZLEueJu1Nr5MQyVijWoNuyZJXnmSkoNwwA4PWGcaDt6hVsoe1ySzt3BCi5zgRHtJFceS1bHi6ZpnS",
  "key21": "55B8PRbsmDExnFVBQrBbDV7gLZrpVTfWBit672Vk2PLphmc2zje5PiHPZptik3Q3uZcVg9CnEqiG76Qop7eXQKCe",
  "key22": "4oVLSL8gaCsELExa3Ms4YxGVvw9ZHqXQSMvToXy8bWdf384LWatCPxqKX5PMF1d5t69JiUgVkUp98k88mLYWc8fD",
  "key23": "ZSQVGMySF4HqyNjatmiTV49pVWkApmZrCaSnYZPL6Rp4v1zZiGarmiJyDqCHagSfLniqWEMKXmBxnahHsoCAhay",
  "key24": "CJi2tASCfzMGxqRNnAK4urBRqp5a3XRsfVpwNpa5ZQ6ToNu2w6pwYpbqiwRfxLwVGZogMEtECc9JyZ6CuTrAHv3",
  "key25": "3UNH4f4dRXZ6peNx32rKLx26EfbRtf8ouyV4CKGPAAEfjWXMemhYccdpvWHhC7onJJq6595KiXjcU6GNqjQXpkLJ",
  "key26": "5AkUEcWN9vu55RXTwiLeLYzaF73hweBd4FwYG93pYWwS2eTZEf6SnWjTujAC5ipgycH1t2gmuzxxTcoX1DWgq25U",
  "key27": "5frZJgaAqUV8o8dhtUAg189hBNsD8s4Yki4kM3Q1QRpjZyp3sjewaSvYVy7pf1WBFCCAHWp5GX8akw8JAXfZe7wZ",
  "key28": "2gQruwmfrhRgy3o6U9555DCyeyS9n5r85iaEYodRPnfbizsjUwouTxRv5peA7kxcbkRopCiyMpFDVKYmbMziqvX2",
  "key29": "46EbdNXfDS1CXevR8q6knY6UYUA7zaSYZYjeD9xP9Bd8jXhkUy3e81DYyDU7ox27GDcNjXDi6gRXuBnqhRTxxfsM",
  "key30": "nj1turXsusUy1dRgRJDij2P5o7FAmZdaoWCsyLe2ihc82pJyYcFtfcDduShFJyzPkp2h9X15AGxzN6oG5kfzHEa",
  "key31": "3hRGbVDDZzfvx1AkCNYid8exgCNdYp2ZRTnqVQngNxR84yoJy2atknp2t8h6vdugHYF8pHnsbfzEVbN7qhQFQccy",
  "key32": "v3qS9LPrStxREBiGNYcDKTi1nofK2cDTY3jgQsWLge9GWZ9bmACmty2e5MjkAxjP2tdPT3knSQdKPSLu5mxYZaw",
  "key33": "45mpB8rUzbrTJZi3RMFS2AmANizoKrexYdMGmCeTAu6Yj4tNT8oBYhqNvkNa5spLZjWryc2zWK3RjssRiqbZBN12",
  "key34": "36Y5GEvMKP6VW3jjCtdiWNVivUSwouMnzgdb9QpfWsJtD3m8vh8eoZra7GGXyGLSHsvYRJgmG9jAu2p9mLQeuTHr",
  "key35": "ELtyPmzTrA7BAH1YLmkh3jVbSknreaTLVWhTiteMsqopHxNVi5YgRymU6LogGXKyuuy5aAmyaHKGzs8dyju7Sav",
  "key36": "3xRAwRBwSwJbyqoqzkdZj9vynS6ojYqfsQXjmM9QbD6VEjvcn2Z2Q4U8jGqccVDupYUEQ2uQeW9iStW74anikA1c",
  "key37": "3sAoWNtLSf6MjVBLqe5xHXWsgfqV3TnvFraGrtpGzBG6iXN6YDGfXooggGuK7mTAZ1AHKuswgPM5oiYvjZpdMVVm"
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
