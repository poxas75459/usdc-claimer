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
    "E21g61LGYfp4hgNMtSuMR8EjF33f5nj1cRLZxZyt8fEtrKPMC1BaAiUUaQjFXdSsR1WFELyjzyttgQgupiy1fW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X7hZXLMSbqdbYhf1AUKGFRMFUBNAWN9aesz5c8QXmdAUW5u54gvh2Wwi7Za7nndiSdFj5RFHkUGxDCeXdNNwTdq",
  "key1": "xebdi7DipEQAR46PFjKJCfJQEYU6tKaiuav8TsinXPe25haynVhuTJqsLJ9C2stGwihYbU6YPn4x4r9vW2RirDM",
  "key2": "3bDkkWLAxVGJ1j95VamteaN5Sh3TwnREifAuBjSQMRw8K4ZiVX5f1zPLtDg7LsVUpjY1AbpnB4kmyaZoVzwbTnFa",
  "key3": "oQoWcuu2pM9vzYjpCLvsKnDEzob1b4wtPyq6XTEszU65QViepk5pE1WdgSo2mrhAvjsA4o1kuN6uxR2vhksp6T9",
  "key4": "3AdEBmSy6JGoe7zpqV15g8dQq4BGndY3VUFLfxZjJM1pFbbrXeTygw2tNi8s5HMxL2T1o53PmZPV5KAoNqbiH49o",
  "key5": "5GKwqi2uz9j48Zw2RMaDMxyeVZifgHzSa9XTxmEj1iKf8RJ8e1LyEY1s5tKgNUtRnEUSme1L2LDBQ56V64ZPRhMa",
  "key6": "4BoaFvgjBjJfb64ZJNRxFuod9gWfPSzNcG4G7qSKkoNQpnL9aH7CES8TfbFsWmVD1poRqNjoVtpWJTU1nhebH2qT",
  "key7": "3ALHmMyWoHF4EFTwkLDLuMBxVBbxYYffdaCCePRoYEELEnZbMQ4oDcAuf1wLJw214zKAu3cmgSsDDRQVF7tHKbnx",
  "key8": "3zKY8vbESXtUCYcx6AU2V47mb4zJkYevxEwofY5ietjpBZ1Rk6aTzA3Knhq1Xm6oh4bnd8qW3GnETxfdM7FKnxdW",
  "key9": "3MUhi5hHtHRi9v1o2oKNNjSJkDPX7GpSN9VYD7BLoUpv47hx3sYhcVxfbR8vLxTQeCy3z5yJHq5MWqdjaTNAWgCu",
  "key10": "4aPuY1ShYknSpejJqzBHtUq22Y5n16eKEDy5FMB2uUXP9wKa7b2AeEgSRqdRevMSFYTfALwXRVBYZ8bxFfepgSAH",
  "key11": "Sqi2Q9qMtSCt2vEmPwSS9S4EsZvz7kUKz6jb52zPXrKyYkQKvdBKkk6Pw4vkomRZUAKTbbMDHSZ9njhrz6QsMpQ",
  "key12": "5vEtw6t7eTLamMvuAXmvAGs8qBqQwzoPJU599GSngggQQtHRiciTGjKk6jsyh8Vfd6Do2krwynEt2DyQBCVjey7E",
  "key13": "5VtFgRv18DXAh6KqiuMbVoPXnuhs7vxtCBWXWuqRb4zpbty2tzAjNaQLXqj5vxNdz2sWVoqfehDienxjo22wgBCd",
  "key14": "GkVxfLeTjgiqRCLu6v8p2t96oBtHDpVRFKkY96mgkop43CB7hWzB3ksDgub9g5eQBms1kDUfNP4buSVQbsjLBrb",
  "key15": "2iP8XUyRCAULQtspfbB725BUfqrt7ncSj19XrJLBJ4ChGsfqnrWTJrSfZAPTQQhKraUp6NHpSdzhjw4oruhUCPnw",
  "key16": "FgK9ZpcS8bAbAMpsNoZ8XpWB7uaetphCdXPRnpAfj5YCvGNdjTSwEc4qoE5H3xd2oVMjs8r2ZtgX8KcTYbxiNWe",
  "key17": "31g2XuLX6ybs2S346efCQo8G1NMhECbxRmqiVHzGhBQqsoj5rT6rBeXJRMjs44SQ9y1NraK2bf38Cuyoxw3RAt2Y",
  "key18": "5Js6JoRLUW6b8KLDUq8nhKd4hJMZXhvsxWi3MEGiXGkU2SKVc9QeTPx1yz5w5S2WawYcH9pqTL2LjHkN5imoKJdJ",
  "key19": "WjnBrDvfpV7oPWdgK4HQxYWS7SvXzS9shVjnJGhmacePk4mFFHeimf4oeUr4qxnARKu4BUBUe8HevwWDQi1Jh1H",
  "key20": "4sBLReUwr9bMrYVWfsAVNe5zAsdEnAd3bbKj9FBTZPVeNwqFxezkic3F6jLwnyfAzhFtZcY8nTUkUGUss9Q3th8Q",
  "key21": "f6wWCjCsrCJYPSeUvkxicU5b1rYEJq6toaduQaQGu16kWWwmDBYaSuAcrTdnra4HE9H6nGbcBbZZ7NzdqezhCuU",
  "key22": "2hDfYj1dCa45ShQz8s4FNb9cdVz5qVQrBmnTcT5eqdt1ABDsUoYcsoxKetRb2tiDWUYjZNdrUDinrftbo5PTKsDY",
  "key23": "4zA4X19APZpadgfp39Psbk2qbLLnGHXX3oaEDRug6nfwRbv4xBrXVnSph7yp9YXKwC1bgtyc5g1xG9PKkbHG16ww",
  "key24": "5UBUkDHp8dDQ85W7BEJBmMr6cAsMknZg86ehQ9LpCR4tUYbbAkfWgDpJkoVSgfEbQvRagWMeg32iu5axiaRb3MDY",
  "key25": "4FsSCuy9D7P5fpxp2Hwo2d9cmCEf8fwvGMofL5MMPGDDmy61329YG6u5kbfTwVmZEQz6oHsedMhEZVeAmi7FWLsZ",
  "key26": "5f9NqfR1W4Ygy3EdZu7tS2948z4SfrHGyzkejadUQGB1PVPbAbF2EU8neU24MowHiKLzVdsWMNW7gq1BACSZ8VVM",
  "key27": "56HUScMQZMRNGjjhD4TmucSyLMWrUGTib4S9bdNnkoSKazYXTeUvPmRitaw74NwfiqSB4QgPeMw1u91hnwAxwRAW",
  "key28": "2RwemskLQ2B6tnNiLfJM2wYNtVyvYFq3xv7wSfRSBtjFV5VB5nuwpKHwe59wv1YTNGnF6FWirG7ntCQBau5ua44F",
  "key29": "2c9TBexGvK94LQJnLVSjCk4b3zGraUYdSW9DSxuTMLJ1PZHa9eGvhPEkkKMsLsfp8t4JMQ86RRdRSPiegQT43Asg",
  "key30": "3A46XkqNqXR6BtE4Wtx9qWw3CdR3Ysa1QycVcfQpdTknu85cj595TWam9xsKBcTTRMY5AiKQaXCJXtdTzNZSQKZa",
  "key31": "5kPyCZ7YSqdC5KUaZtDAYPdLwj2CoCvxVXDpqwXfx93PYMX62d1qJu4nVX8iCYouMqewkk8ThdNPjiVSvPBJtmiH",
  "key32": "2uLHpoBEK4uQDDvjC9fZhNtcVKno45gWdd5QBFogaXSFXKpBUvPQQWEaMzEuZgp6jtGpBXskRuqKZkxgSH4cmFND",
  "key33": "2LNX9Cu6Wh6eCTz51JWAzWWL3VudDtvY7nQWpbTLe5VpS6KyMmd1kkJrpRxMGUVR1J2zPsk5NgcFagZeCjSCY1SP",
  "key34": "2mSD4mVg8pQHxgwHEnZfVDfoL4ZkEwjrYBujiXA22JZU9A8VTun1d3VHQF6gRJfwumQDMjZbevSA1GiaXnAZsAwq",
  "key35": "38nd62TXBebfLET7Z4fQormmKLMdeYu13Byyn4a4AXZXakJVNHnRG34TBPrUteau7Nwdkn9Nq5ukyzxRruEVpFCZ",
  "key36": "5h6iiKoDC5ReMkwzvr3o9yUmnAJ97jS4vZzHwVgWgRj5hgc5Jmuirt9PeAD5Hi3szjeMryXkkM4h1hKRwU8FUBM6",
  "key37": "3AFnkXvomwn6pMNHYBuYqnMESVWEVJLZfD7PqSzyYUyo3A9FJsK2J7pzfFuRGff9LzCpCLyHUA1qe1iDPnqfmLKp",
  "key38": "3pw4DXxdMbjokhAzdowFZtfa5WD53woKbYMUw1e9RCU6XXcMHDk55KTgBCQSW6SDoWVCmka85F1qG9YZVVhm1tY9",
  "key39": "YDtBgVGvXjS7cee5cfQLDM19XwzjWK91GvPoQUAeZLAjyG3V92UwBsKxt9So58bNNvUny2RNKYyfHPnZ7u8BB1s",
  "key40": "676VsdWXbHBUJoNeKqezExqu5cWxXiQwEQox4Qgthesq8X94qiMXrZ7LDc2UUgasfLjBT3jAyG3UZbU1ZDXpMBLn",
  "key41": "3h2e3V6ZHNeQddLKuP3ZeQ5vrFhkzqXtj5MyKysV7joDCAaB5EVtKmauCw7dzxKNbQ314uqrnFpnukLFTqBnWthV"
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
