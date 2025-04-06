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
    "2DsHhZn8hBwU9mrf3mtvUni1n4Lbtqe9m8ZVKgszDyAfojf7cPGxeSP39mGf8z9Dtz9enBkD4LHJUWB8ZGboZafb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4BgdtBuzx1QuLy9kNnkeA39J1ae5KJfgAxHyhHoMfJfB44tQBZysjcMUQkVU1yAkNAp6HZh7ETxgN9sK57mZKN",
  "key1": "3QxCpqMSKeeTLzoYDJd7spfyujqk79tcgCAUgQmkkTDJzdXBtrxjNRJGkc6w55sUDo9ni8mPo8FpJQgoJ2EaYkEr",
  "key2": "414SavR11m66Tzq6Nt1T4S3aFs1n8zPeq9iya6tpa6NvKqQjx79oH9riAorBGn3imbDy5s7ywwy1yC337LMp6sw",
  "key3": "3Lu7ySKprvZdCVYzSyYz4d9EMSvmQ28eVvFm6aSh1aAMJHGUnSRRa3We8VSjezgEUpcWs6LFsEGPxxu9wJsFPFMj",
  "key4": "24GMj1G7PrzuqUETeuu2Ggh3dBAUMLon3hisKwggpFocXwnVgWw8aisybK9Kd55BXjypEthe7JnFbbmZLThs5EWa",
  "key5": "5Cmf9kbKZmasLtxdNZmSFcbdDvUjsLJA4L62JQSspY87uGKhXJtdpJAm5Qv3nbjeMKGuTyDWSmoLuwPqMfrgGZxj",
  "key6": "ZaYv7uKFPQdvHPdsJdWBpX6ncaQEY2Wj5aGi6yGBCk9g1XjxnBoEUBtoGU1UQy4xoyrwwMW71KqfZfi5gVSFkZy",
  "key7": "5vswa2HxC8SdEQh3vLg2go53p9wEvTUX9ii7WQTqKWdVoEQpuwn7YvDdgR54D2u9fsF3qsGJw5ARkhCdU7okmJY9",
  "key8": "2rEDGYSWg4wYxVg4yL1vm6S6kfJWfKFGVGSsAJ6NwVfe8iiwFXkkTUdUeQYBLurf76uxnPKwosXnXcUkTxxhxHKy",
  "key9": "owyLoKhQRBdp6CTSvFGDrFybMBaUFegasruatNs2DtCV9S6jEnyypPfKZ3Quoem2TsehfRdaEBw9hi1fkiH2zUb",
  "key10": "2VGMXuhUnYRDp8rLnUF6W5T9L6ksBeXyacaPEaJ9CLTwwv1oGLr8uxPpzf1pMdPjU8hx6PPw6mxRiR26CN1D5gnW",
  "key11": "3FYjuRCKyBwxEdEmBKSybTSFLRay11LCqk5DEvdNW6JZ7FrcVGQUYBJowiH9gF3XiTotH9WXZbt4TWUiWTr3suCJ",
  "key12": "4hpET8XFxikLsCz7FaVr8HY7nUZh71M9fTPNkwmj3CtKs7URkPkSFGkuMB6LNBTQqnvZisWKwv59ZSoHEj9So9Ci",
  "key13": "35BcTNA6vsPz32Bbhq7a8o67wyEwXT74XFnqcfDiBCgB5x3h15nrVL4rnUAFLmp1Vny3xUSNJF8doeqmqnDU5h9M",
  "key14": "QmiTUC4GJHTWfkhPbbd6R6U69mexaNx4SkzkwiXU2v6LTMbxtdHRLHKVarqvg7sp1BVqe6NSK8fcTbfkJRpciJy",
  "key15": "foekMMsq2MoJ64nLCUSGiTeSPs17P2MFeHyTiTcNCp9Ejbe63udZykGHGoVGDf5ZwjGZVD5WscaNqf6PDVhiAbj",
  "key16": "apJbPaY3oxdhXjHYzpX8kPg16eVGLNjKgRKT4sYVr7KmCQFmqS3UnFNKFWbBn6iEeNuFRXYRT9v6ZSWgqDz2doh",
  "key17": "3G8qxsv4G4u1Xh8CV3TrT7Le3RitSLjnwpEStgwKV7Nm1zsaeufMWbtv3qUjQFkcsh6iSh92ooKh9mVuA3c3Vnpn",
  "key18": "5NhpH4AomaWjNsXYeJawHXJzLPLwvm5siY6adxqPisbb5xXYLmCCGkoz2FQAiNmTdTM71WekfmKjrE186YqUb65b",
  "key19": "37rsB1ro7y8SnicW5wtLaw3DrTh6KPKUPnjMhrUix1gj34gjtD6e3kpFgkH2fae49GWEPMhJHRvQgdYS24XhPqxf",
  "key20": "2YKXZYwTFPEbuVvTq3s9vgwyPptLdYEwde19ht3i2zwu5pG9pYyGqwbNoQMssgfExS82VEpAGouB245e7BBFb2Eh",
  "key21": "TKNCyKTZbpDKTruGvD7NThZyj8ayGDgCUPcJykXUzKCVg54EAeXTL5hABES4mJM5qEE7oX1nzqEnBEhdtMpHvtp",
  "key22": "UW11ivLSyRZJzAAVCPShQomGhhvffnmG3k4E1nGzvD8KfhWAZQcYUSghzbZgJNmThFbdKnVqnkAZdTA8ALjWifx",
  "key23": "3Wt6uGi1HBJKfzzEq2BPvhKq8eWmG8Zon5ebkkveSBQ7BB3oKa8Qttvk3q5eBbR4QzTPgEmgJcN9qtdtCcU3156g",
  "key24": "5nSWLqaWBwyqqrTZxmq2fGRtMJNVVCVt6wLcCYayZCrnpHJ1bntSTe5vYJNSnTF15W3bm4rvSGXRGGUtaWr9rXjx",
  "key25": "26q9hbtUzbTJkvk17jLB553VSmZrvLF9Kxpq9VCvNBWvehnGwQnfQch1E7czGdnkZTVt1yvAss2aH7Ats4xoZP1Y",
  "key26": "4gHZD8j6TCWxJgTMNH16EyVjvXwRqyYnHY9Pz9w14ARk47iKSnBPAXHnW7eK5nFxiRrd667Kjrc4NLE5WhLS4hpS",
  "key27": "3jVHETNAjCh8H1HKamyXzvJkkEg4dvHiSjJmA2G1uaCA7YZN8XQXto22ZyhLeZkeC4ddD4HuvgUcp9LCRJiretUA",
  "key28": "5JRnUXYCuAT7qsDMrrCCpkHDx821DTTYHeXDjgAvXTMHJiSPPKVmC69opXDPRKbDtgE1jbKxZvzUQbuJJfSQQjxr",
  "key29": "3V2P1Y8LcvSBZXbU1dqrTQrZRF2Bz32hevUxnVFbojY22B65HmxGjp1nbQYPjw8CkRaT9m21jxC5hJaugHfFscpa",
  "key30": "2N6rUrjMQhmrSPpnkcYAos7C1BJBjas2isbJ2maDVKyUNfpdUYEsfqgMPdX1j9znquXpSdx4hrCSnY9G8ZnsjAjc",
  "key31": "3P2mxSqpmB8ThCS1ELqYJiP66HXSXDoNW1m4dQigkQmtRmiAZ6sY3KSiWuNfkexpaYu1uNRsxhcPPsJMLgFXnLmu",
  "key32": "5GVjMTSqNBRu67wGwqLqMdrx773DSqm89bcTEzwp2hbCRcVgH83S3pPoa9ttfoX2acxbtQwenGT1VvUNDgu9YFbW",
  "key33": "429MjwiRKBdykh8DSp6hGRuG8HvA1wCR3yHT2ABoMFphrn9mv3UyNvca8GWhUjvjtkkVyYov1pQZXbEq7ZnsFaSE",
  "key34": "2TszcyJQqRiQh2PmwHbUnYxRJDceLnPnmTVmmumbGw3kM9XshyqVizS1kZH1AMnhM5iXT9fSRf4B3fpwKzcfuEdf",
  "key35": "61evfo2iDgeMi2wDRSnr2bGnuy4uvPN1Rnq4PYtweuuMH2MDZdEujaZqbRx7awhjtjA7m9F2U7hQT82sHcetqR8H",
  "key36": "vBaL2dZ49iCBpUNbqFBPAsqAT33xw3AMon1XLo77DBJk1SNibGapVoJGE6bY8txbEUH8R3AJtvRWkFGJTFYhpMK",
  "key37": "2QgV4CvFmycmJqYd67vwRrfKKmjc5RT58hZdxAJgMNWRkLVgPayz6hV3DY19ArrscJVr74g2MwuvowsTRAjuXfSZ",
  "key38": "5BT455bA91awrVxoLkaRKiGnKSiQojQ4bgti1MMzsGjmfXZS2CwKQaLRwWawpWXtq9kMLqqbhr8P9kFFnCqmNtd1",
  "key39": "oJemj8g3Qu8P3oqowPLGdfD6NYbQD9JGLoQH7LBYheE1uj1x5cCvAwrpWjFHm91YKzNj22odtvMvGnzWuUQQ3nY"
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
