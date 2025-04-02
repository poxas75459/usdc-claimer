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
    "2ojehGRgw5CVKur1z6eHNEmVAvAVsZYFGzNJwkTURYZ8rxLxE78QvJaeJ3s27K42zZ8EYo5ZFtibdfhWLG14W9ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tCeuoo8nZZjUBhUthqLBqaKsyu24HR477Tfb6PUCDs2TJMdnzUCgZo8JfwK74c37C5fTG2AnJFieD7sDKTwJXwx",
  "key1": "4uHQ9LArBRFi2xpeqprLdrcg2eL1sd7L98mLXfW351Yq7Tm8AEWCahc9dqrALAnca2xZPUE6bCePGAjJiGh6jDnq",
  "key2": "4HYYqwSuKsPe2AKThD95L6HmKuSKqA3rz54DK8Zn1a8ojUmvgf1EmQVJQTb3Dg1iuKTc8zfTmSacSC55a3nzmbd",
  "key3": "1hfAnjWYQesJqcvFtPdg27GmdyvgHt191SAA7PrrY1o6LXye3hJu5JqTGttXp8oKb5KwcmbvnMqA8BjnzuWEikU",
  "key4": "cYkf4fmGYk7BBQWJoURaAjTA23jX4TKvkoFrfcMqgzG4erEfWp3DAc8Yu4jjQZCSuFpHNkacEdJPNgFbKNfJT4H",
  "key5": "4VCbEBk1do1Eq1s51ApfhGnHSEphineiAa6kLJDb8QG38v1YSG7XXbPorpWVEQygh1hvoqpbv5xjtENo4331sje1",
  "key6": "5BbCEcB6pjCptXRV2uvXmgijSQiRE2mf5c6yTGnwjsnoQ83WS79h9TU387UQhZsccBLTnLXChCbgp6dWBm2LA31v",
  "key7": "46eh2ycVc99KA1usA8oaCg7T9ont9RSRtnWutEZ4bLjp3QTbB5ushDXAbqF8nVXsL2m8TjKST1Bt8oVimzFzoUap",
  "key8": "5cENe3bf7PMHzJ8BcAFmY7KXtZ86GdKqQ97cYFPiV5i8WE2X3LFfaiNGXdv1bJgosi3SXTiRnmFepPpy71TWw1qF",
  "key9": "3DPRrThhVLiiSir8knJ5dCURjZuZiakQoyN2c5eqGxn2pTpUCKckxerPgoEhK6LEg33YTmJ3ZGsDpXpHR83869Ta",
  "key10": "2pedNymxb9sMfP9pdDmF3MRUPnXA2hwzREaFU9A6TtuM5TFduGcQrXcupfHa1HjNBKs3UTJP69T1BNbYQiFNzBaC",
  "key11": "dwq8cHAo6kPcqS5b9KRF3N3c85KWn1VpbznuSmYsj1oyqyJ5rNNukBQWEaMKj3wSnJpL32UWYijuS7QndxhqdwV",
  "key12": "3cPbpVJomrNQt5zLxofzm5qc9kXQ9kbiesx2jnD6NHhZqBSkxDeAFKLMMVtWRwasqPKP7FUE8TzY6LDquQTem7ML",
  "key13": "T2zgRB5nxqV59BM1QcWSdagq3BAoMDwpgsYEqxZKd6fKR2NSYkkiEfnQphpZTLasTwxJTiF8SjtL8SEtnUm96RF",
  "key14": "3CmVJkZnSX5eazbUgLfo5AB9gRCJVgSwhtqjotsRQyfC5ERaVUoftcA4ypD8QmnaFT7gtFSt9uxewGhL1zhrS7oF",
  "key15": "5JqVaNPHBfwDc8LzBsR2auAYEENXMoX7KYLrW68NGzpNsmWS4t6jL7NqxPhhXkUXYQX1Y27VfbhYySxcchisVWdh",
  "key16": "4W6q1cYWcabdgt8rU38avserPttMUTWwS97tR3WrRrT3tko2hmqWMNni7gYeSxm23dY8LLrCEWDHCAeecdtFoc7i",
  "key17": "2T8HUnVqwyufStQqkapcKVoGktyy4uNqzgmRF895oxEiNn6YTZQuzhCLr1QSLrWUk69ZmYJXGukUYbTCkA82HVD4",
  "key18": "4tcZfBu55H2mtmvaZgnCVG3PqJPb1KsHf61n9qWGr3AjRhxWU41agTdrKUxfRN66F4EQBFuG7KsB5aKRKN2cCEps",
  "key19": "hyxY761L23msMmS34s7Am89mFwFfEFvpiSatMog27DWkSf8eAA8nKfSehbTbhorL1Z4Wrs7XAt3uw69eoJbDkCR",
  "key20": "poouz3y1w7bsJ1pKRY3DAaN9o8BtkJoJ1HP49MYRfWSbKeTwLffcXWsPezLvm8HwLAa2hHJQQ3jiS1HSSfEKphK",
  "key21": "4UQAkN314EdLHnbdmta5RBdNjiPXzk5muQEvrb6T5EnVpszePNWgiwmjfFzSXeyH64Sj4mhtp61DfgUTmWuPVSuP",
  "key22": "5pC3CStbVo15nn1qMQEDFx3K9MtBnik4eosjvcSu5eLWwAjUbvFzDmosVxcDuSLG7SwZzWoDZ6hyQp4d9ieBzTZ4",
  "key23": "21P5ZDrXicmhAcPF9dNfN34WUFx4Q5ByoZoiCs2UQREmCoDCwh8r1yhUkjhqiXpfi4kYceVDKxAo59Uoxqzzh2Ja",
  "key24": "EK4tqj7mvx5PEVp2oQSeze3oXpcpChJ8yHHpyUF9eCuYzgPkSm8zQSMT1n8LyS5VWpiBeKMChTcjFYiAjr3DpBL",
  "key25": "2EwfzNvuDsgeZ5i6CMXrHPam3vMYV8J3ZK9N3eZdhUvSRGk2cJuqsk8o7RUMYbGAMURsQjHJzTmrHbb4TURhcvfq",
  "key26": "4DeUzB2WirDcf5jq6SFGvYNT9RB8h9JxAgU2zJn6mYP3ohi1pG9Ph7b7Zg7nuU8NhGMTqoCntQeW864t5kKySFpi",
  "key27": "2FdjpE2uy5b8oS6zkt429etfMiRBQ3tRkPxvvy631oKWcVhYe6NhcsWZVJXBxbe1LPAhCx85kw12UEhQSDExkqgH",
  "key28": "4yKeo4r8hJKQyuCpeUin8kPS7jd6y92KV7RupZPQpzCtRS5CjyiVCBbtxggTmw9UzSCJ8M3rLoHzDr3nYTtqEzU2",
  "key29": "5eh2RYUB7RWKcZjbc5ppKLVfDHgt1igBvr9FrT2RVVA874h1grNc6mQr32rjDwPMZiaUaiq5uH3JxjAmDrCEAUSu",
  "key30": "2NecioS4RWSwYz4frDkxDQRGEmzVijNcHmnMSA6QJKdx7Bjq39Nird3zntrpuCWfB85TBPwne3G6KgcDMHdp6qxD",
  "key31": "4Zvv7g3GdKqMKCR2QkGP2ZJ5c9LbaVu4rLUG5M1XgXMYVq2X9xKDrWLo5pVNcCPE3SDQTWsXBJ6AhUaouFk3bPqD",
  "key32": "3gtjVoSEx3RvxWGiSX1X3R5iGNXUt1MYyMr9ap4xssxWNESuugCBqPmRXf8xqAQ3AN2q5sSqjvfzgq6w9LvQSTvd",
  "key33": "3D42ysunAwVHqXTf6VVEn55Qg2yM1uozFdwmZoRjsrBYMd9gQimTG1b45RU5SVNHLLW44fDeVV43cdfmp9xckihh",
  "key34": "4GXje9DGifPRTbvUvuAZ7EDYp6Key65XjnEya33jqv7MF3GbZd7U8w54ousU6QBB5Yks7u1ir9sdNLpRyAgG4oaZ",
  "key35": "9rSTyHhitJUX9JwfEYj1TTtsrE4bGYDWSUjJGqfquiKiMKvwouk6LYvUDVU9Xrd2kDzZA2ZxQVZLZ9LArKwqDAV",
  "key36": "4ADq4qKWEdE234Szrf5tJUCaju4GNbKjQbQN8dxFLcm3KkPwfb28cGDTaeKKETG6Vt3GdgFU33XtwrbS2dChJ45u"
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
