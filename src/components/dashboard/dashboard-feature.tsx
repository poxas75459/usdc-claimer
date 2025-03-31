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
    "5SVVLgau7q8PVcDYjnJnVwhryiXnzBhcWxLg3BYmyVy56uMntvktFxU7L1CrsNBDDHDGVJ3bK979FytjSnYvaWTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dABVuQ8fkiNyWHoTadsyijfpc1GGb6tu2Gh56zVib5E8xv4fD7JmBspLGHUbmxXJTTZYFQGdu7QgZAvEH5JqzKF",
  "key1": "5hLN7tGFXfKvqSkhup3b9GGGKvN4wBNd4cVkpxuWKzExXh2vbjjgdmo4q86jab4sp8vrGF9EVa17GahVg7Mq8owN",
  "key2": "3oLog9fYFigxBzY39YUq23TptLCQfY3XwYfrS6LxHDapWk9e3innwTEF6th9X2dN3yxs12giQ98hTCUYAZPY9tXZ",
  "key3": "29VHCHuNL3JnBn2bk8WZjsLTsF5ePZXgSU73jXs4yB1o5d9KbW5xYfp1QhnJ6bRLU7nhpH6aBXCM6zyMKwTJtHDA",
  "key4": "2o13cBqJ2sEgremwQXXrBzemqrA4ZXUPhfrh7vMBCEKApnVZL8wwaLd1yBG5pSx68Xbt26MKR2Zn9PNkXFJ4xiUm",
  "key5": "4MXRmoybdosKMqTnzn33Pdnku2cUJb9TKB8eRtBgrp4aPZHfkujTsxpMnCUK9UE2jrjyWDjeVYuozbTzMpY8hSVZ",
  "key6": "qMk5wJxmScMqr3qPni4FB5uKneGPQLQvvxpc6EQ3H49c1rSQrPtxa14GgwUcPbDgQ1Wx8DuBRzq62LSmGTKaVzZ",
  "key7": "o83n8n54SAtmHh73Rzfftg9qshdHcxLrgCff4xabjUcx3Nd9o6x5Z7TAv9Ng7K5e8Jhu46at1WzxesfyB5pexry",
  "key8": "64NDNG9rjEN9iZGBrRKbiSJPkV5bXcm2GSZk8bj1gBYnmitreErjXtbbG8AitVEKwQYb7yNhXCZ51Tym6B5JYHGn",
  "key9": "38pr1JvTBuzUo3CmjXGP9NFCQL8KZsGNZDbnC2PP83SXJmDWekZS4aLRYQZX8kmMa5dTCdLTbg8bBXeWAdaR9yYj",
  "key10": "4oYPZKNwykmfiGEX6Wxo4Ppips5RpVxr5ub6xmQ8oBcVKkaEczFsCmxZpfDsfdp833BVgDpJ3NVovy9SgwQbVghq",
  "key11": "9YQ3Nt6kVdVb2QyuAZhfWWcaCtiQcWLVaKKqqHiu3ib2vBAQpiEywwEDRCDBDjfHs7abANLe3SVKQkyefKXB8kA",
  "key12": "4HWxsPR51GPaD2ZP9HVuqesy9WvCRFDpw96PpgjGjjQJkfsmfLSqp6seJ6h95VWKGHkL3p6jKWq2XPUedX131K9j",
  "key13": "4ZHXDvC67XFooH8HeMQrBN8dn6cKPdJS6Ub3fQq8hq7Y7TEEAixxdaTRpQybX5cj3zbX1A79fwf1PbDT4Aqz8b71",
  "key14": "4PHp1XNqzjyqG8ECccqipsaZAXpqQe6SyJScPuE4Da4EXqt6DQ8ppX3s1fozugcC71ttiXJQTxHLSDfpiLGQF7wn",
  "key15": "3S6USgbS8iSnPZK5SwEL952r5ATZsnq7hqRPfALqEfVGjhPpCNmv5BPAJfwLfXBe6DgJxvo3gNeNsn8zvWSjTuBN",
  "key16": "4r6WULG1SSfNP3UhHpkGHz6mQeuunkczHKtF5Y7xdifWXUoantu62x957ucttxePSDVGYxReEjChgv4buhouu11s",
  "key17": "47rvbozAMLFP2mzo9E59kfmtU74WMKtM88au5QVgNMgnpzfpmXFP7d94DraAgGwbu2ZyottTkYVxdk4qqXGa1eu6",
  "key18": "2956jRpFGQrne1Niqi8RPtbqAESrdXKt4LBjwYsaEqwVyxZpkRRKZqy9doAeHGnbrriFyXtk6EMWxzasFtv1K7ko",
  "key19": "ECfmKW4NfnJzRci1MV4GkDQHMndgvhnPyQMx3zT4bFG2DhXgQ2jFi1g3JwV1vDG4jG1F1XDF9LYzzzFrmKUxA5v",
  "key20": "4tGdn84BzUuujv99occaVZM4P2QXrM44R4J5aHnHJDvAb8hnYp4KFR7WC4S1LYXV8ArqSVKPCUCa3BtkxcYb9tJq",
  "key21": "3pRWcUmFVorZWn7iY97k8GNJgLHptjLt9ig1Sc5PCzouYWfkYiFPJ7NFoGv15BxrbrrNJ6QcMkdQaGGC1WW7ihsF",
  "key22": "47ts5j2cZBzHz9aNGV2hKtYarTJrz6XTZ8keCBdLTsT2KPTtg4Y8vtV28DGQKxLpbGhN471u3cxmMw3mTRRmj6ck",
  "key23": "3siALm394Lo7Zaed84dDgCBVbzcKaB28dj5Aftz9qK7DhU6ty2uzvw5FugYdaF1DXraJwC5b7Q1oYWVmwszLLSmj",
  "key24": "jnrSAMRN6hrKq4Qpzp4juxmoHdy25faCKMrh1qPz5LA3ebXnzV8LfJZgcnqyTNhTuxLc349Yih9sBvQb4drS9NK",
  "key25": "3ubzPQYRfofHt2ZFgonJQiC1xjqpgnsdxaPDjX9rEga6p48Ji6gy6bNS75HYwKFYxaLYA292XCyFEo47M2z1vxGS",
  "key26": "28dSLGYEt7TVgLCNL4Z7SXxrzSJXpJuDCYsUo8AfNW3ymKMTcza75cxtwdk8E79TNzgng8B4kR1sx8vA866gNPuh",
  "key27": "3T9DUtuQrc6XdKQviEbd7R9iwLNdkczRpMSW7RvgY8poTtij9R9kdzrmpMcfQw9r8bVq7kqcyZXhMktb1ARLpvuV",
  "key28": "2Cp1BZEVaPGxsZmppFUE86o4M5PR6J3CsfLvUKkyCKw15wHjAPWGe7LPNFqztqmF9MCvc52GjXzMmbqCCruotqQ6",
  "key29": "56LT2V4zBeY67DnwMdp8wbbtReEZcb91Wv3fCW3aDT82295ocq1JqJVHCuZvtbXJAZjF4vtBouRXoDCE38nqmTYK",
  "key30": "tRqTGAS7VZwbdJTZbvuCRH83VSUwf29vb8v5HnEGM6BViGE8grvsLR24CmCvZ7TsQYNSsvtiDeXxkKdsfKbWNyM",
  "key31": "27NyhzHBrALi7MndkKmNhehKL5teF2UJB6pQ3mYGFAVCeoBHpoE8XEqwYgGPpg1mFV1YoSnB9g1n5gLGdKkshYMs",
  "key32": "2z3cL2KwQ2aY9iESR4yNdpXgZRcjLNyozwXTQCwMcy85G4kwbghYTSY6yPdmmYBttrbxMNB1BuDRH7ZgN3M8RH1z",
  "key33": "rKyEfn1wueYnHxN7WifdasLLSTXHokEPyYuNNfboS1tFmV2uaeipGN4VrzTUq45NWtizYvgNBuLK1QF7FswD7zd",
  "key34": "o3wUToEfmFWCdVTJYS54YNg9keNoFzLjWreKM1TzYyVqnNA5Y82zffna7rWFTe9ibWxVVmcLAoKRXaigYzQMBWg",
  "key35": "5K6rSELQr5ww5seyznxDMAskBFm7rvW8DTmLAASaXJCmtyQQmTdhfARTov1opjBfNPENSXqepfp9jPxffLUBXu2y",
  "key36": "5Zb81Sw87rCyQdwwFWXLM7qUpaoPs7p96x7zj8jY23ctSBDzTb97HJGz7Czc8KSeDWwWamNauYRPH7yhjuJC1vup",
  "key37": "5ZQyUJvjAJT6kbeW6t2TzKpGhzTCMd8169uMskjK3DcgpoSMmi9tKLejm7FyKN35izfiU1eU5qdpME4Y9SC4h6iH",
  "key38": "4dwkism8ciNgBt3T4aVfdz62E1Ycmu9rxmziyk4cTptaofP2bXFK8fEffJwcKq7xY2aZ3McrPHzT8z8FzKhvtoyE",
  "key39": "i9CQac9VPX4XYcKmDTuVGVPS71o6QC4zk9quGAMfnSsHBpSHm4qsTL2vb346EdgNQMyZgkCjzsyqDUYdgkkiJxj",
  "key40": "2jGaKEhmJBcbCvSrRa11FSfE6bDn7Am7LhotiEWFzRd2A2dMtcdaUJaQbAvZcy5bpSZNVN2KAGhZnoRKABWVgScp",
  "key41": "5L2ejabpgFJr8MqqeGhkL4w5und3QGtujafsB6eaMybt1PWxqWrw2Wn5fmugpSYcsyfAeq1fzoUaQjzjoq6iMveD"
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
