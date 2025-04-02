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
    "4p1R6Zw5HeJuNHbMxRQKBEZVbyJt52VFumrFnHtknWKGBrFBT9jvyXsBf4QpU3C4KBeoq1XxtUG9aFmURzDauasy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SWTb2MKw5cvfMfMdcKqHHyRMRYKHU9SqTaLGHjJmNuMNxiPzBHbTGTuHYc3d9XSy7aVUhFX3hk4KJpsZaqoCUr5",
  "key1": "2qBB77VXiD2JT6mKwVpbcKpzZ6vi8yE2gxZNQdAwJbbx3SkcCFTXK5GWs46fgpqPFfiseaR9gk2MpBHTLKjusYCd",
  "key2": "5Q9p2CCkDKgTKA36n1CBRigJdtjZUbYKrQAMyRLRUH8FaGczQ5jD7281RCA4dmGbUrny3oy7cUJ3bSs3T8eBtwnj",
  "key3": "4tzMCbZVscV4zYP1P9BxJVpfEeYG6R9yXTweh62N9zCsDq98CELmUrAWYEKGuvvhqkajh1GtzvJjB1uPtQDvVWrY",
  "key4": "kSS1DiTs4TXBcUyVGnrefZGebM7L4Y8Sw1e8aN6iBZBjejCQgiHW5WbYfehGAYwx3NabwHUEwoB5aAg7jGP348r",
  "key5": "21636RuVTrPaFEMf9adzVqVaFwXZjZCyJNf2sTYHK7XVPQE2gvgUcPqixjmhe3mmja4HnJwmsWiMsUdggGonz7RK",
  "key6": "2hKQgumf6cqVM5kpx7SfpZzBdNhoQRNaioNWGmrFEWUMucEB8zKBGF85uaLJESitWZbjMNEq3uTKS6KNB8pHVRGm",
  "key7": "5bDfbYhWRqfmfj347WuELFvBw3pcCNLAoMp2X6kVnkLrrTTqZ9yuDkSsm4AVXRZkvsgedwH6iNp6zWrRM9R1n3eF",
  "key8": "3JD5HKbEiy5ir2jMG2oroad6GQ8EHo2XWC3Ui8qzSAGDho7Kp6H5MTdo7THfihraNyy7pPYvYowVBqxLnnHgdaGt",
  "key9": "4xSUnjawWTJWrFs1fg22KEXaUgrp67Y9rLUiCdiH55Hnpw7uPxGTK76Ua6drU3QMKdvioHk7Aju8AoHu5Z9LXgjd",
  "key10": "4ciqQKghGg3BgAvALeiLU3bqT3Z8yWaeRqFnT65ockAPcJzSoa2obbETZ5kD9p2HzmFB1fGZfKgXFj62ABWitRUV",
  "key11": "4oZGajEbUf5SfCqXw4RQrMwxXLrGWLaFqn2MubYGRBpCjHuiy7bEohA39fYyksDWU7DQwQsjer2xHR9VxVucdJwp",
  "key12": "2Myn3vjUHJGKSknCo1TPNMyQAzSYab77ZKRBuanpLpqx4jErTjUGHuvGykhRdWP59xHmvrikAoFocKQLhWv3jj8t",
  "key13": "3Jrs7euG7hVKa1zV7oATNLxX4rWHnvqiKQmhaScbLfHxbiv6C2pQ9MYtvmiZE2GBTgsf2djDmKMKb75EV736D3mY",
  "key14": "5sraRaJh1kvVbEeaXYojzrpeFeZCKVvCe66uFzSnm3M37i1VG6XeyvuWSV6DHW9NsXYnujmUwmkxeFuQ7u791unt",
  "key15": "4NPdxGoF2xrepXBd7oTXiLs4tPaC1NLCQSddgz5gQGxh3xH5xqvr7NkrpY5Qu8TDxaPYm791tkXHp6DQ666r48Xg",
  "key16": "4kaPd6vHaYKb7QfqSTGL3YYkPncCjvvabMtoUWbsEMdvaRtbqruD4Rw2YrBKGY9HbqT96Ef3u3fw6QJSzSUdznYh",
  "key17": "4JprePdMAiVJ1BbdszqLztMPz7on6cg3JbJczTpM8wGxXZD7n2KWs5xKtVpFyeaBha612aPfGKPhcDx4XU7GZ83u",
  "key18": "3pnFVT7qKrR3CVfzefqfSpuPAwu95qh5D7ycRMSwczAiwjCMxWoMYks2u8iQJENJcjPko6dpEaF1ySGLxPGioJh3",
  "key19": "58ZJ3BwHDPBQ2gPPusSWadPM5tom1nEqWJjuyRGGNV8EaUmPbRQRqYY1VwtBEuBvWTCAHQo4ZJnuLApKUFcJsXBe",
  "key20": "mgHhMbXLgtKX637wRkvMq1ydqj7egjLEiHVrt5qQnNELJ5K5Rwp5WTsyMLiUvirD5immh44iJb4DxDXUmRNmHRo",
  "key21": "5CPdmAx3WDGykK8eJfx8CjN9SgpiZ29xL1KyfsasyX3x8ztMzexR6GqLgqA86pn9w3vZX2SWDytvRj3ejKiEAn2K",
  "key22": "4mvzmzX2vU2TsGY7SqyieuV5hJHiLvCyMx55X1Rgp55Hu7scRN3Jis4x2ZWx5YNRWqKcdKwkStvEYmEQhehzU9mS",
  "key23": "2sfX4hgGveTAKR28AjBrPpmEJL9xwk48wxFq4JkJUMpDhQhCyuQqDVuRCj3PWZxWbFnDJJ7X6aBZyiCwNWmdRZdn",
  "key24": "HHpsFkBrjCBwaHHiSd1SBHjvHEn2yMHN3rVhHV2MMdQfQ2rbQBFzxZwK9Q3YUZ4i27STgE2scGUBHQ4ky7kfNHC",
  "key25": "NarcLb91pNPmroMDMRBrCLUXD9k94GYYrs5jDTnCe639AYSLBXsUEsJBZbBxsFvRhNukCbtXf9YMeoGd73F5yQP"
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
