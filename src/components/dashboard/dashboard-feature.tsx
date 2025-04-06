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
    "5xkC6C9DD1QMM5r9Zj8p7b1ocJGquVNNq5btDuoX2pZxt8QLaYADPPn8yFa3MVkc4tFM7w7voewM9jvGR6Ld38za"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QLQ24zB7GqMtyTzNPj4xXhMH88cLCQ7Pq531wvtkMfyAcbp69mKZPAttCdY7V9X7CrHHZD33Di27NCSoLguZ7Ks",
  "key1": "2VhYiVo2Sb9BFETEsYJnFgyFezBhbsvuGhHGmCyfEGFe9rpzaeEn7i5EPrEc6mGXLb2YUXZjaribdGgbykErXRuT",
  "key2": "552ZFPrYA5zNNa1oEjedMfbzpejckxiDE1wuYEr8axjgCeHkER8FFfZLAXsfB4T7Gi85jWocMxWvDWLdQr87XRXF",
  "key3": "4k77DNhosHVNrgzJTgF1dzXMnPif649RtBhqkLaKpAcS1QxebCNqaRFaScMX59GBimuSu5kpHniCw8MsexUaPnFe",
  "key4": "35Yxq3xurvrvUMAsf4y3x2mHosLALC4ybaSeuqijM6Lou1GkDqSRxRe2DDSrePUy2EneEw5YvU5o5h39QXMP8Ywr",
  "key5": "2kjZT8i8XSpgYQNVFwKEnJDu3VfL8CBLBdEqwVooxKiH8EjXmLmVcGz9VEhHE2sxjKULD4SgZL5EVeEb7LKvzVHD",
  "key6": "5QMGP749xKuTDyhq6JMYcKQeZBZXCvC37bya6C6Qd2PMerznbkHhEzrLNC52BLsjbWRMbf82f7EAbUYFRbiLhbaN",
  "key7": "2xRAXs5KBWDKkyVX4PhxSr4kaKHeHE7QNJorBWu3zBqES1Ura9xuvPPwEPKdsPKkKP4vJtjuqaWN4f2d11a9qAMm",
  "key8": "56sjESvJBdYRbK2tUrY14bBoqkG9W7GsGxCwWo1NbWS4jNCzweEQsjmZiDLodZ3G78eDg3ksUr5b5Qk9p5b9xXxF",
  "key9": "2XkEBKYH6WqYNq9KNtGET4jFPzA983AL4bN9NwnAiBGuJUNKnBy8gbzjG6GKm11gpd7p8oZb4fe1wLuh7kFEDxWS",
  "key10": "4rNEFAH5xz5XiUMFvoeESZE6anCMNykzfjpzLCV3ZmC3QrPGTGXmfLvs7Wxw7o5WPf67dZjT1eqsKUgNucNmVxUA",
  "key11": "2hJY4Grw1JdjARgNY853Lx13sjiRViwP32JWCb2AyF8jCDfEJBLXC7tQDwFMUfR9gxQ92Yt4V9D9SM1rtpro8Vq8",
  "key12": "5maCb7fT1UpgvqvAyECFQLrMiat8E6923XcTFiEpaiBqMRPPJSgvXm1yn2CWknix5DtECj4iZ14KwZgsHekwLAgt",
  "key13": "5nfAE2shDAo9oCmf1jLoctQ6CCmXB9W4vBisUfPW88bMyj9CzCch2he2QsnvFQQdQkJkQzhmeZcox7NHvvF5Q1cx",
  "key14": "3WbPDLFec4NFfa5fHy2qkLkXDTmVipBGH4JLbDwbK9r2awiT3Xr46RfdvBPVPWqHtWp7NVZMSncsMNNVQLWsUdrB",
  "key15": "DMHGc1XiqPrDbCn4uZbkXmetKPPrRH1jsRc2oEi5mPhNDCDDxSLLPbDhk4EQN1v95SDdrfKSub3ju5PaZrwZPo7",
  "key16": "4rWzFA9Heiax1mATvK9oL2X8gEw9mL9xv46LJgBXcXMH1Jmk9r5qs4Zdr2j7M7XeNJDJbMhjzqG22jfBoh3JP84M",
  "key17": "3BCj94pGePa3PWCpf24X98pp5ksjFVs7JqCuqgH88V7faP5FGuqgjrMDxF7W5daH9NmQPS8KQYywXVy6NZ4BU13n",
  "key18": "29qWKqVZSoQtvrkacwW2XjmBxLSybSapwmYkimhHaGcXE6oQJMewVcQqjWNMfTm89tihvXct4FWDDKbVyx2NLet7",
  "key19": "5raFQWFZrtzXMh25SS9JvEgUgedCCkhdKpPMjENcnygRHAoQyC346UFkuoRvVzU9vafHSHhDau2rPZcgwQ9ABMsG",
  "key20": "679KsPvK8qdfvNiKb4ZzgyoVTc8wfTwZ757Cz2f6rkS8Jt2HNDzeA77KgQm8jfMgPe5YKAL1ZMBimWLZ5hMnzdc2",
  "key21": "uw5rzDFRQcYZUFV9SZmkFGkEctMVPs9S73L9FbgZ6P8gdbM5ZFbACibdHAAnbtZ7k935eV9L2nunL8Tx2Qi7T7V",
  "key22": "4qo3QKRn1oLSXb4gtHiDY3rE4VMKygAsLvtcRgSiZtA9omPnhVzFS8tgQ17Ac8NGuDU8xBiicd52hvD5VZF3GNRm",
  "key23": "58kQiZdJe9EWgKstCVH8MbtfeYZjRubmKUw6qdXbkPJvC9RrFciHppW2ittUntxdvesNriJ9V7AzMJC89AU5mQ6M",
  "key24": "5dbmv51Aqh7EEwTauNoD2fAQ7LrXTFNUwv6ptKfTXL3azkNJ69y17U7ogXMT19gojApZAJft2STnfYmKvrzb19Ft",
  "key25": "291xrm6v9XRCbQgyqiLcpkFnZuHLGyAYAKyk7cgRzK2pewXjeKweckoEqmgVzRbEjvissNRXJJavGcRTs1dX8XN4",
  "key26": "5b7cNbrC7HkH5Jj4DKeVF1sZSf3pEficDQp3ctgKV7y1PrA85w7BMfNQq9fcYgeYkS8y7MSTF7ACQhAGV4f8ps1C",
  "key27": "2rGrrTTkekabREmxjeVhNc2N7V3JW8efGg4o8Gn93bxiivieDWKki8CZUUZHtAUgB3v6AcLnHJrP4qbyUxzD6Gfr",
  "key28": "3ghx7s7igfwU1j4va4JzukjJgqdyDnP58qF1TuFrEvk4zzgvo1HfquQGu2wQuYNnSXdqneLBzNax5G9YNsQ8H2JW",
  "key29": "2jmGf9u7c1zESqc9uRfeKFVfvCdN1aoLNAvqR6iaxEVqzrWGWqtJp5dkiUdM2SBfQbBuKTPWonV4C8jzGN9RdFFX",
  "key30": "9voYbD4jF4PceDAFsYcf84EsFp6qEnpigqmkA7WHewicdC8fR1MtcY8mPVTdw3vPbRF9WCMJoeW1vmJv1NqgmKF",
  "key31": "4dybEtmgXYB6Y5cZa3coyx5ivM8pSmBgEsBqM812TbUy35cHApHCdWkdvCQnEbWzTSpRbb6Sri4LtuW8597PX8vw",
  "key32": "2pNdwLsZZWCAAjc4HeEKTBes6imy3iHHUa7rVjQCHgq9UhTewmZSG2b9tier8JLK2A3Rxrb2vReZsAGK5mii3ibc",
  "key33": "5dXkc7ESNhadg6u93pNydvxhmHpv4PR9qGPTSWEGYDUyKd8u7UeaQG8T4vcNJzZVzYpw7Y8ECcsmFXLvBbxmQ3JX",
  "key34": "5odq9dFKnpwiP4dDkgeB5qabisonPT9HcHzaagJcsCT3uVBQQ3JwEbXrm2cQQu49QeReR4kJz32mdNDpCEBxZnY1",
  "key35": "54kbgNTom4GyyvuiH7uursWrvdud1pUNf1i1VFf6VxCwdZSCYBXCiBSnW3tGSo1rHoKTRjL3A4boNUVeLhR5NFGQ",
  "key36": "vxd2dDneozo3AjMVXWun8qHfR4d2iq4ztG8y8BaqvAgxDPqq5myYo3PrgryVtZVJAU9faH38pQM19DCY2iRn6zj",
  "key37": "2x9Hzf4U45xGCec3eZfMu4w2rNxeLEjCMMvB2d8fxCSuoQQLyT1y46QpWeASjYrPA4bgvYNWzwaCoZ7LLQ9mzQqo",
  "key38": "3srKMAUzHsFBXpsdbKA9BobQmuSjCb4ZGqFcThwAJe61LoGdvQg3CzoVQKrX6B6U9QY616od69uiyucw5aYWGTU4"
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
