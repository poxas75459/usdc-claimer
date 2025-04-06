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
    "5PdjkZM5FQY3bnoQk8UukLFeD7V9RYpjeQhdvPgxHBEwhbYzrE6uDxxEATPZ6jDVG3dEfmwgJpzoDzayNhGdkjvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gk7FqY29YQxn5LHsF4qR628g29bAMaABJXSnKH6FSyWC8NnFkgie16Sc5xnvzY5h63KB51PRToiGYDM2iR4irg2",
  "key1": "WyEWADNc7MSbxZ4iJ5pTJmWT3AtEm1QoeLbqW4VrinRyc46MqXC3RHrz3KJP5gRJLEWFndtjwJrRvPbRs5A7v3g",
  "key2": "34wZLtHnt5A98WdgCmKsoywqCKuMGbhExhY14Gg7oDzow4LGB45K1otQ9t5vzD8aG8zqWdGGALe33oMLvWyBUX2b",
  "key3": "5X1q7iBPtfFysMPW2qkCXraeHi3dcwt5SWeM6LwGnsrAhafjwYRjsJtjDGTEja8tiL5hPg1ShKie85D6DEkDcDt2",
  "key4": "2M44bcNaCuS9qL4YL4Uc3aXu23wkhh2RgEjqAFb1atzXdiqzy4VqCbQAZ8aKm6tu6asRLnchUkFfvMarYjN6oj23",
  "key5": "WGhbEQwsHs33F2nWw1TuqR3vV8jrRtpjETVEwRruEKuTVCoqmyebEw7BV3nXz8uoV7EsTLf6Qcxweow5chuvE2G",
  "key6": "3o1Mp7NFsndNpjLbWw35UHbdBma7MGN31ujVTN9EszZAqrko5e5RjGfUap99Vb2kxau9SXARY9nTstRfT9mjaKbn",
  "key7": "4p7JAXuYoE56EMJufoyusjGSpTnh3hCjj1tnG3ySCTW6fHPbeF9hZGXsuzrTTzYGUXfg7m9gey33RuefhA7hu4FD",
  "key8": "4VtzhCYQ7ZzwNVTqhLJ8AxkA9biaNKNj1mWSanwHyGkZnNNjdbX9qJM6AEF9GmCoaErxkKJrHt6B8dfT14gRYwCv",
  "key9": "2c2iwjpdNzbrM11u1KJiwHVibvAeKiEwsqFnpLjJ8md1wprw62RYoWT926JantKnVopxUiMSZyGNaqeTJHeTFRuH",
  "key10": "3To1SS4NyxSiQgDJbh7mMr7GD2vwHCD5BRgmT87eVMmmTLHYvETc2ENwubsAFNH7i1oqWGoBFGXAGEDgAREEKxpW",
  "key11": "Jf38ZhEt9JBw2nPx3jZo9ntk8Y8hHj2GnuGifb56jRGqxoitJx9Xo29Tur9irSHSpVVivh8ZqdHtEjXoa6jo21z",
  "key12": "5XJuLpBA7e2jdUVycdXysKrF7t3aX2rhjhaXuAdGAnWKFcFc2EU7Tr5rvReAaV7W6hB5kd1qMSS6u8PmLjHaNYqG",
  "key13": "29KsJaumz7FjpkkoftK68xnkDr77c4T8R6mzyYvpxnQBgzd2SMFGewT4S64jE6974rdGh7j3zaLdkXjD7MbmEABQ",
  "key14": "51XNmkC18W2KWAZeTHXLYPLBoBCrzWFZzuhhSp75oc8GDdL4DYBFFrj2hnoHtFKdwb7qx7gr61yoLKKYRY6BEHia",
  "key15": "4ShKjS88qPBdZGsfvsvrmMcVZFPiiPxa87iL2U1Drxg3vaNi7Lsd8hUNd2PfTcRWmvY4mR6rpuA3eTnumv9T9Eed",
  "key16": "cQPMNHp6ZkQcnLW21DPFEqxhYSUfpakFg4wqBP7XvKM21T8kAYV5nt6mJ8AjBt2q7hMeMzgJ99G8p5bF4pzUVQw",
  "key17": "5m4D65KG5A6HGK73aX5uNSg58wXn15k3ipu4VpNYRQTfZ8q6J88R6cYXuskesLB95sSRyCzkiv947GHCfLTHL1bC",
  "key18": "5vk1o5ioP6CcgJufcnxpSqeEgsz3iJmTH6bqd2HwS9Ttb3x8kCzf7xjjtAdu921jxD3swpUDCVRkw8RiuJpnFBPp",
  "key19": "29t66CRSTpMPttjCgAhMksYh5z5Yrp4MndPPaJEcA9qh4y6J6Bb6yme8S4SUJyPzFb894EQqGKFhAgvuYTKpFm43",
  "key20": "4wBgbkUKx3DYm8bD7ruXKM7VzDFWwb9UNm8xx6BPSpmHGkFTvxMZ223qxapDNFQVAiXsLheGCTsV8xKWHRd3mTLE",
  "key21": "4ZtuS9rW7ZLJGCPQDNmaPcHxSnXXQqT8X3ALRaC1wiXna1KDd4T3fZx4eEyfsz5mLgQJG2gcTLcA8ugKcBCb1S2t",
  "key22": "2aA8GsEpkwnoA15o64rFtqC25Fp2pqyp9qhwtbGjNEXcJnE4kAKJp3uDN92jtJN4N77Ha9nGhp6ApjwXcvhuBt8C",
  "key23": "3y3XyERiNVQQEynJ5qVXAYFRAN4bfmQ2tPf6A19UZ4o934gZxHrnEajsq1c31LVUhfgxE1Fo1CVZCm4T8gv3gJA",
  "key24": "4NaQTNJh21Kw7CsgdXbLxT6e9YapPRP4k4ph6hGVWrMK4SYiJXKsx6PnLJ93TQvPErpFX4byjcrrPeef1af1yzZa",
  "key25": "1XCDvP9QbmoJvBKxFAQgitXPiVPVa7HgzFKn9QNnNsYyUmZyi2kb4qmYqZ5HMKonYMzMzCT83sKMPigjs9zChUc",
  "key26": "5qBNKZ9uaWBZHQ4oPkqHUycpBnHRGDxDegXXTnuekXAtcjG9tkuAf7f95XgNw5XLuXgAsdVXe8Xe63qLzbviCBtx",
  "key27": "4ibhja75BGahztKuQkMhfStkpRbxiV3wh6EKRUsLFq1pPAAAjC2DPqi76RG5ktteU2LQv5XftKmDdVq8uHZQyrNe",
  "key28": "3xKwPCBbuianH6kihnrteKdd5sGgXvKEYYwdhT2fg6oKkRsHTSi3BDMJiuVU5Kndqa2k7TFejBb5pEPx4P9FruLg",
  "key29": "55ChZ7eKkJNzQMozK6pp4WGXLbDWTRU3bSbQhia3R4jG5JharYb6F5b8WDXfE36Kkwns2hrNyhb4LQ3CcfBunHvR",
  "key30": "FJP7FzBbN8Pbx4ci3uypDXkYmKZn3Ex8WSZ5dAZZSU9x2Y1j45XTxQYF8AU1JCM7ph158utSxzbpbrBNFKen299",
  "key31": "zACsfGP1cj3HkDL8Ai1wou4GF4em7742qa3HQSKYMgn3Tg4YS6ksNxBW4kRFUDPTN3iMqFktMZ3CfG5LJFmSam5",
  "key32": "5D8hpoMWpD8tvw3Gkh8TAN5ZHuYr3r6dsvM8DFE5xqEhNv6or1saTRf8gVJ1yNgywmvqueiFTyostFkcerk95wyg",
  "key33": "5Vvm1KUB3JCuxvL6oJDzmDNdg4P9eypxJaJ7KqNyY63zixDpGZiSWrR8EK4RJ5Yv2mt42nw2xQwocT1MPEjhLPGs",
  "key34": "4pEd4Jmv8XwmKfcVEDgiW8vxh7xoR8zpT9rZFzNqTzPKvhVh4TPdSHKy6ByKWf1bZ4pwufpiUnPecYnPpW14muA1",
  "key35": "5yg8SmaSVA8Yx5u1omEiLPqFSi4VJ2z2MeBQuBhzmqfYvx6NwxDa169WBKpo7ptGaCPs6eBDNPCEzhzKyuWiAahW",
  "key36": "61Jpf2GLLXoc5ubAaepQJYpaaXDu5CrKK4q2X43KtEweRFgzn92giiwunG3Aj4oAVSLNyYi6HqpeoAjdSa4aRwWg",
  "key37": "4gMJhDMs2hWPZ6wR7QJYCBkc4LzMmec3n1xy6CxdtvZLnAMijFWwu3wECNiRuiXEHqjk86ociyKyeDogvGMdDZBB",
  "key38": "5xTjqN61qzQVQxbDnukp8XJFQSpe8GdEsrWVpeViJtzDYX4b823rSRekCuDey7Q3a6kkJiQaUg6kAW359oPzrjWH",
  "key39": "4rtBBhsroWtBWsDC73UWxTYEGXkSdpkc3ZnrvASehUR1dJn5H9oimfKUc8fMbU3fBtP4Jjz6vUhBWXtBBojLBnji",
  "key40": "3dBW8RV4ysiKYe4FAw9t7CTo78hHxqd6YDHpQtBTnX65ktwNViQVkFh8mm137DPwvptLPuR7L2QheW2ZbThF6xX4"
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
