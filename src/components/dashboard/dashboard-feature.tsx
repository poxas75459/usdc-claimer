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
    "5xkywywJ5q7xdwKZjGUdQgVYjtdBVP9nugmtpK7ULJGN8CfbwNpvseYjtqCQxLVpz3ctyWjG6NyXQhn5gY6QSxou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SWqvdmVwgs1ahpFCguMEe2yaoQ54mxuTD7ZaoeYpzKANvL168h2jbVBtyUD2Ra3BbymwzLnjRJS8CDpw3nvucVi",
  "key1": "kgke5Cggmnj3uhcPz12G2Yen3F9vycRaPmicNfauPBSuowpqHTrG4HU3anFvqWDSGghUqDxRji41Bsqy8igLLaw",
  "key2": "666UDr8rNSGLxVUq36g4Fc4H3HdHH5EYqXq9KK3o2sf2SSmnD2YDDZmAiBkigcbqTQpthjvVCh6MhrmJxZbJT57X",
  "key3": "3R684whd6vhJ5USaYiigs12s1x5xfqs3XpycANatK3SNqJWnyEZzVfLTm1n5sxuneaXAaH5huK8NBn2mLqDr3ZUf",
  "key4": "fkERHWezuVfGgpac3uY44K6hLcUimh8USpp3A6NbU7iEkPUir8SHUsjaLoNPZu6jsE7GXuYWAuDLUjkd72pbTpR",
  "key5": "48f8uuE4SqowioWVvSu1Lbja9aHP9tkM42AwAFHWMLQjkaVYJLRJPn12dze8RnDkmoQ7vVGpyZuE8jEyKDD2DmKT",
  "key6": "26Y2WQZ36Z6mDZLvZmQcVgytDr9M9nDk7p7HQLnxHntgJ2ZiT54Dednsx4YLujqiyb35Bxtsr5GH1MCgZjRxEk6D",
  "key7": "zpTvcpDxFXQVECEazysniQbZVM4iLFFd2A8BFXhmmjbcH3SukW8yVjaU5dFs4k54nNBU7iHvjxkmVBejdJDSNVA",
  "key8": "5VeEqayafrCYzD9zfCfmdg8rugoJCfpzDmEXgoxYcKQyc9UPa4kRKS7P9yozS8mD796D1thYqHeQBiQpz1kFADFC",
  "key9": "417azhRUFtJ6JRCDnAu7BiAvNRVpQTPrxDGpUA9CPWtCaaMybExixJi4xiWeoCeRfSMVK494os979oQwx37JnA88",
  "key10": "5guvJJgngMKwNHGim8hPP5yEkFUvtJt2HZfGfEBssB4TbE2coUCGwL7Abr89chenATC9BHw6iNy8jahh92iu3nDX",
  "key11": "FQVz2Yu7nhHj8r2igCFz3LSAjqE7SZWawgwrGUgEx8u6HQrYgzrgtoxUEo7vrLqYxDuukQ9KH9dF2CkF5VQf1Zr",
  "key12": "5Gm2WpcDpUizjc6GdcASEog1skQ9fbhGuy2g6bJzaL8wC2a1fLuv53vgStWJCCUNRBhcGo7nxLSSRCZAp4H7euJ3",
  "key13": "2a3Cgju1JCXhy13cbg8SxxRzmpc5MfpyuvPCStXRCFRcCUhhQcXTEKyEWAiRBxmLADPVrb1UWhyPyq4EpcrG11JZ",
  "key14": "4vJyj8zc18Ti7qf8PPGoKyG8ZUmk4hqmPhR5yzgDWazo3VnYaZaFofJMd9xVjGRwZJznJQL7vwxqdvTN5Vac3cZX",
  "key15": "3AmgnnZxNYeUwBovj78G5VQKg9Sz1mkjXs2XGA1BvjkUwZqSFCqF4wUcNdnjPngdSgSWmkpTtkNH8zSQNSGwsfAT",
  "key16": "64PcR5wCzLWPDcF5ou7sByQWpdS6dcMWQGxCqwWYTAzwwvHxpLuc7An4trQGaqbznpZZUFnQbazd417DMjximpX6",
  "key17": "3QJvnY2g5gyTMGbGYjq8i2WBxXekcsS3pCiwrM3kj77KcPeQ2LFVh5VdCiWw3wmBGVjpn7UPN6HS1LWea7AVr7Ym",
  "key18": "4jpJALBjuFQi6nxpy5d2WYPS5RQSFdbWJhaHMSn1bwypYQqstYrDrMsviYoDgjwxoChqvhDLVxeFqTPNdBpKHYTc",
  "key19": "foENiK3oPrypWDiYGgj6HwXWLMdaQDhZKkJMAb1zEwuQUvvDuaLq2moKTaLGetKNYXShRcudYw9anrF4TZ697ja",
  "key20": "3AJawZkcy6vd12sTsn3kmdVw94SWa5iCSH5rQpWqMJkUUt2kE16PYopQ2CCdMUw1sZ4rWrhqqrryvUQkniszfKpi",
  "key21": "3xRcX1bgQJUq1MQWCfbRCquLypHaqnha15JSctKgWYfBUeixSb2w23bHKSBVrerzwCQuzxVCkhgtcMVSKoQrVUXQ",
  "key22": "2zpVj9XtsgReopKgvhh8tx6M47NGK3fC23Xc3c1TCXfPJggs2h31gk9RSr1eLyZA6ZG5zCuMxtUMUuALtoQoSVRn",
  "key23": "3aaYknZYrFHsb7LwU5Vuq9RjqsF6q8UTPVDbphXRCHksPYAQSdt3D2NpKYNJV7iiXN2fi8CzNhAuZY4d3vqLLEVS",
  "key24": "2MK2KgeCrbV5o5KLfoyHFMPmyc89FeWXNw2amcoozaNFVyxezY5TtuAQaKqv9BSa1pFKVeaHmP4PpADbR72Uvjcs",
  "key25": "3HXTeUCL1GHae5aEDujErmySbKVVvmfmCSWvxzcUWxnZtGEbmB2HzRedEHksKa8boGXwAVn74SbjNZrK7bAK5GCn",
  "key26": "672UE3n8WRHjJUp5Bgg2L49u5Z3u7rW9qMMGZwdYHfW2HjGiCABHuHsTZ5w61aCwrKykRgWW23n3LiwV8AnGuHiz",
  "key27": "2p6ApAmMZqvnD56Y9JmG2M57p9L6mzQdEuzMJjTbsA14qWwZNahJresSkUnK6V5NUjvzNX5yLAsZEB9geZpHBU47",
  "key28": "3GJeAQB8Npsg3uJMPYyAWzB3i3W3j95UD2j57LJ1Zz4k4bPgbpt1zVhfvrx86FPhFEp2QVeQywu1K2Cz5Auw9Edv",
  "key29": "3FHQrRCRDz8UfMQpxSoE53jDX5RxsthuNJMfWt8p1fEFZ8f3dUXvK4kRAovWmcc4oPz8MToLy7cVHYeWTo6bYqJ",
  "key30": "wNFhovRnPKSR3AjwMWu1wbHk5vNa9fnXz21XuFmuqkmWpWSEttV9Xee9JME7Rc1dwvkMAF1Rvw8gqVAFW9awbap",
  "key31": "5u1eeKaRbPXnQ6yC4FET8hjgTtdeeeXn7ERM1HSs3CDXfnDWdAFhJzEhBcHU7mkQwa3hyNeMmH2MgrhgrEHF36yt",
  "key32": "33JndRPjU3aTSfCMTaf4e4HJ3m8FosCCj5gJpBugNgRoTRCC6Shu9GbnB2ePXKDWeKBtsYeN5bv7S1DSCCtQEQz2",
  "key33": "4W6gZZLJQLhoC4pPCd4hpsA9fM95fMA8ukKyQbooha3NNCtJK3aYfgSU9CzG7EPJUP5ZkqyNNnfAGhdvAQaU636K",
  "key34": "YjxDeXmyHYAYyECx7uQsxSiCRMJ6RP67QxPQYnzZhaqQi9WS6kB6Qeqap1HHXNCQZ2Jwwh4YZLKhkTKYdUjbWGE",
  "key35": "5EqRcbXP75h57W2adqDkh99Hx4nJ1ngB1zCJAHNhJadsfDwrrQ6V4yZR9tUb7fBg8yuUqgym37rNrjjMyyP7ZZ6z",
  "key36": "5Ufrqaw2YrwWbhQNYGRyRt8Z3jtLi8gtN4Dcae7sqK1p5d2vzsSpGwmsjWA4kcbNxwd656w7Ui9u1J52rMoUkrQ",
  "key37": "48V8ofoFMsDcUSb3rfYvrA5kKn7HnLH9ZWATo8ZSuGGjXqcry8PUPv5Bc7K1H7AJkbyxJa5GRAMn9fxMtMQRfRcJ",
  "key38": "3ijUKPUE1N46jAfVV6rEALEXG8XzgsTAJ8BJW5fb9NFcEAY6fwKS2N85dBgMi4jT6gYupTYXhm22BkP2v1z86ySc"
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
