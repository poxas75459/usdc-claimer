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
    "5p4iEU4euBx4EERGJig32mFGdopAUtzVkXbpELy4MJ3TLzdaDpXma3nqM6RwVnVkoBHRmNLanzYbfvQhX6Qo3AnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AkaEkVWBc7Z1b2yhro8jbA37HKA8WwpPLQU9x4BB13SHsMwQzUp7xREM12FBe18tbZ3KUBqcgdgr6Y4EbZu2esq",
  "key1": "639LnF88B5xpPGKDEHTJkqMSnYszNA1kVdNsBRuxxj31qTLCLKpGsLVu7D9Abs5XEfwThq315sYDRoKbiGJ8nFs2",
  "key2": "2PxQgdaWf17ddDUD2QYgHwiVKBqjw5zjo5NeM9SLN8v1YyWmRpMrWxgFoqm7kzCjH4FsVk5TtKeu1Wp59qoazYJ5",
  "key3": "eFm4b9KgQWewbgcDNe6MVzeSMH8TVnpEQax4u1Ji9rdD5WTBv1Tg8bLisUZorn5DzU2P4KmSQAu8AjqcZwo2XjH",
  "key4": "2iLKcVLPv4cZXrpGSLLALeVUqcpF9Azuvhus1q2aQMpDiD1SxdETsyoHc1uUhGPLw3rMXuZTtzBkJqFKQFjKAi3P",
  "key5": "2qz79EZWmgXrTzgRDBLAQzDqe4bMhhCTsSyjwqjqZgQWXqe8RHP1DaR4qNRcVP4WjxWxXcmRewRS5Pyk5fmxmDqX",
  "key6": "2CDLPLa7o4a6T7W2GTfNqTSP9B7Z9bg7Es5McmjG8yvkjVe2Er6DF3JaCusMUxGs7hvDARZWWCZ44yy2nCyMsdTH",
  "key7": "53qqKNhoq2t3JghJUuL2Vr4t9V4ozkqcCkswqLGBYSg3Vu4HbMtt2ZmGwmH6sRKvspesBRNr4uWbvDiPEP8vjAuS",
  "key8": "27wMu7o1zi91qCdL1eVUUhByReDYMRuKMsh3btYRAFnbvj2MdEMhYZN7cVqcTBXCysNJ8hqcRfqug3QPo79G6ZrV",
  "key9": "3Ycdc4hPw1Q3x4dDUwLXEodZMJgh8Prox4qQcktJdC1jiAM4oDQeBK93QJy7LUcPXosvMebuskigrMg9HswALFBP",
  "key10": "n3QXJK58x91s46uJTqr5pbXJ8aKZuTnAqPtStmXhSA4cZhrzeTLo7sBSUckC46RWss9iHcRtH58KBFpDQyh1sze",
  "key11": "5w4RZrHrSumZjYtcwgQQTSzpiFeHFaA5fkpKMfFUYWKKE1U7VU6uMMtjc64rUyS3cMgDFMf8gbzX4zWZCyGAYirV",
  "key12": "5G9iHRqK5mQMgjVJcCpr5mJHDPR8QnHnS1JrV2nTN1Cf3fA752tygq5mGpB181cus4kS5qPrRgJgQq39p4eQmmZA",
  "key13": "5271zKyu5NchCQ1svK8YyZDApYPTbHyMaJmMGgskDgWZpC56HzxvZHWNVSgnNPk7uaAprhkg67K2tsFcGw32pmTd",
  "key14": "3AS8ZDDePo1EJUZoGotQuxrgfn9tofhn9g4dKiWpFHJReakc3YSixws3e2vTUdexzPwmBj9bcnB8r4Gzm4k32VH9",
  "key15": "3ssACGWC867L7PWqyEGmzgFbKPoPYVhU3G4mWALfeMsj67EKmnd3wuzEYMYxDrryXD4gY94NDTLREjiZaHTMD9tX",
  "key16": "4kAxDM1DtrPRu9kT76buSwZgKcFfT4EthL17eCSHn4ubsMjry32iYNcGsJ2aeaTryEZ8EPjNKxypQEV52aP9w4c1",
  "key17": "2s16xzXAaxvuK77YU47je3MmxTk2Etm1SXLC521rNbPheT1iEpBTjnDecG2fmwdr1Zmx9ANqMFvEaKV6bg7hp3Af",
  "key18": "3atp8jzPqFtx7VcmteXEkRiXrnPnbLjZRnRXNTcA1Lz7f4ABywYje8dgXoio12XNud5AhY1QwcoabgUb5fdKEMtR",
  "key19": "2TWW4sGaYC2EnnnU4E4qMGUuU6duUURngY13vVUwkRh6JBZRMBydiC1YDovTGZrjNwiP5r6EoZHKhrtRCEqUL7Hy",
  "key20": "vp6cJKKDUbScroCVKCErAfe83r5q9qK3tVGfM2ti4B61gNVMXoQXdVD193JuSSha1vY4y6ARe5s5rvVyHrWKJw9",
  "key21": "HjhnZD87CAysmfymQQmhw97o7g1Xr3gmDHnSjRHBz2WVJPW1egnKVNYZBqQU1yoBWf3p5BucURAyPyC5B1vB1Fk",
  "key22": "5CK9nS4rPJ4wZejY523m6LKxU4RYJeFfKPRMiJfMDiP99edEpLJcWnoYbyuUYt7NtcBH4hhuECeTmEXSP4evYDxW",
  "key23": "4atXJs6YpM5dMzeBVMR9d6tj49vKqZAdmXQtjK49gPEPsvx7zJ6pS6Jv7uveuGUBrVFGHutyQpjA97eZccUj7Kpm",
  "key24": "53PfMLXPQxyk8PTCKnVLsuWRwoJNHJ4LB8Jic9FqtE6EApjbAuDorEHRyb6tCkXXAD7SyeybiJzZVWpvRMPfcsxN",
  "key25": "4dZJxGv1ZCiQ6qhTxkaidVFZpwTaMkHUkjfaRJzL6TCnoJkb7AogxM8D99zJ1d7eC2GWeCCphcmbfnk74vbBviz2",
  "key26": "3JEXVV7LMJ9H8zM9khEfaUt51AHv6QiGYd3iQEn62BVnrrXDbrfAds5Nwc56pbaBNuMG5DcopzHgrSHa939knV6g",
  "key27": "5QbTwUYCQrLtzfEgdirTVRdhEjrywVpTW5SFoGunzaEucW77C4jXr4Cu4btLzuhuGpNyLC99bFiHs5G4TrF8SX3y",
  "key28": "274Cm8uuqohB4ZZBxJomERvCoMLk7pcJS5KLB3adcwyLVtdL1sJCrzrzVTHC6xNrpUTArh7pqugLuuWKeKuE2ZTk",
  "key29": "5GALwUDMBCoNC5jWV8swLFRDBUQmwJJ1P5murqMyoiT5e8WWhnzhssJEm1cDpm2qNKmBAYjaoH3gTpTpQERjjgFf",
  "key30": "5njMbvdiFuYMRsLvvy6MLaqHyFwEVohDCRqYUvpyGQtjxzHaPx3NCVyjxphmJ2TQDpV3yhAhktm4p4baH2gxLDza",
  "key31": "5ZbN6daPzvySWX734pZMZC6P6eZk7MyDuyyyPoZbKBT8Y2P3u5xqXnzAbD6zgiutzMDVLyQDzkJjoZTmUnoVrtAE",
  "key32": "3FBjBPCtGLDsbhz8Bi49vYLjnNUKAkSPhVewG5ssZBChXZ4AykJJ33uJYQxueq7qs9oHZVQBbXV1Ev6XngHwqDCP"
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
