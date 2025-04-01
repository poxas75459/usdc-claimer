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
    "5fGptZBbdr2vMvGmX819DHszUMRqgWX4SfaCyKM1j4uUZze4MJTAhrJGJW3iKjLQNVJpvaCokwo3LCD7t6P972Ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XP6YYkAx57BqVJR5Ekf86gt8hUNktdZub6a9d4ktNDWrZssP3Cuzg7KUW5f5aP1GTVY7zhFskUWGLWyTcKKXKDD",
  "key1": "4BVKF8wMReNdHRkTgwzTbFiSDixKkMTWGFoCD44bRLquWt1XaKnX4qq6uW4muPyfZj3jnCHBYP7NzFaATreHyM8H",
  "key2": "PMQbuBqhPvBM7DsA4hRD8rZi5jomv4i3oRxfh4iBDoETBk6Hgb85mkopMZSzsANAiEvLh3XEdEJ8e4X6PeSG7iF",
  "key3": "47SPi14X2GhrgXK87cBKb2THCWdQvpJvoFbrkNBUAn6PZfQV5vQrgoJPgbcCHqaRSBL3JpnFvyerD1v8q1MzQJNm",
  "key4": "euVuyYumRL4yPw5jF9KyRWGqRYpDXNPj9xL9EYtxgNeGneXoWGWFgnub8vp4Sp1QRwzr5v6TKkYa5wHAdQvwTFB",
  "key5": "4DW9rbjEnhfGZ79tBhSNZLpod2gdmNecTZFo7RazvEnuvgXvS9J2UtgR56fuZD4ZV6U4AuMEkXNM2ahVFFsgJJjR",
  "key6": "5393YZn7Z89YGuxphMF9wBm6zz5bsTywcr8r8DVdrxZnUx3fFSAT8EpRCYtytPbxipHuisL4iUPs3N5PxGUET2nM",
  "key7": "5u2puMRgevuooCkVWPGDWMvzhCSdwhj98VL2yrokNhUuKYosEg9fLd1HNbbLhE7PjfHkwgxhiQYzo6svW7bfcMrB",
  "key8": "2Kq78H613YfcqXdvPFrgfe5gzGQTWRNXqTWqF2XrfT41M36rCTY3z3DgDtRX7ZSNgtB2HD1Vn9ger4mqXkUiGcnX",
  "key9": "5K5QtDoZQDnoUExR3Z1NXAZnRUKvFWiQ6QsTkaWEpEB7T2rmKSDp6iQQHLyLDL2Udw6hw7jsyzwB6GJNojYo1eD7",
  "key10": "3Q2fmuyUEbGgeAv31ideTy11gnqSjdbvWE6QM4TVnTh7bQSdfcx268kSBGLNoNpHu4ECfDAn15LXfCoLXFkWW6bd",
  "key11": "2xNVGpAnxcB8g6HWk3H59oEzQ9TMf92V3LCjyLKBG2mo73gKRpZJfpXG1zhtUa3suxdFAK5FujriQzbMjNvZ6Ngj",
  "key12": "4MMECFVkvTT5KUQsoLyX7vdVDbyekBEHjaMtLhFz8v5csTwjfuXmt5WiHepCE51unJev2dy9GAkfLTR354ZoLvWE",
  "key13": "4gMTerRpGNMpeCZqZVh4oEYucpizhNjw4bxPFT3NiXKgAa2v5gGga3EuKAiSNMcnnc87s4fZ1zrj2ApHGAcpEMCf",
  "key14": "472Z35Fd3wY21V2qLqMJZDShS87WeZwy1xq7x4WV31uNX3rkNGQrrrGMc7gdURAzbVvPtRmLeFUYjSGZqPf6xXD7",
  "key15": "oLz2AdjP9mEzAxxDaVXuDaPiB11R3Qq1moHKPh2czMLKCvA1ukaucsApFPF9sYShgVcZBrZGmbdBiBqeq2ExSuz",
  "key16": "4PLjRt9bN7PLqvbZbr6jX2y2DmrKBXjLSz9gsm4T1BA3SW9Cbck9fbkNnamjXgkP4LD1oP52yCAyRGGX1tUa8bqd",
  "key17": "3BPWKsRZw7R2LuqNevtzgZR9YrAQgMJLEABg5Hks1NxqpqRxnGYNZ2wqjKZe6i4r92XRFfhoEAgjr4vrwhJ6a3at",
  "key18": "59z2R6EKnHA5MKBJM72W85WzYAemMpszM5YTYbtuU8oWREwJ4jugvVpyr3hU862dUnF8ZAr6tj1UMWjKxWb5HrFf",
  "key19": "5S7abQLhu5DUHXfd4Xo6YeqYDsQgz9gogMrB9kXm2XiUZ8C9LXnuVXGULzW6cx6LiFchi7WfoqQMvxqkS9cEraJr",
  "key20": "5vvzRt3qhF4Tsyizs3T3JN4WhDWm5PdXWHEAZfTTQicApfTYd3AVZLux9acyFqbd7eWnzE8tQ6XUvQyK2Rj5QGfY",
  "key21": "mexFBECMA7uKwH42BCuLKmeGMjFrqJifsgevXJeMeMKzK4Lfk3eNMyHJVejVrkG9jbrQTdt6rw7bELoE4ngBjPn",
  "key22": "5DzU8P7J1VuExHcShxhh1gPJ3HCPY6jjBh92fCQvnDjE2y78ECargLCE2SbhyfF5RZV4QMxUuvv76E5Pxa6DvYUn",
  "key23": "51gu6W8LCiLw8TkqnrSrYosQHF3nR3mZiBGv4mYxihbyNu7Mw1gxQtDN3rTKxBDeJrpQYUbnUhuDxcJd43kBV187",
  "key24": "2XVWxrvKBKe6rEdsrwubfRNijSv5QCUqjPiELm2MNfw4YaQgEgC5LL4vTod4NxHRAjyZen8K76dUNxFSsssnyLap",
  "key25": "64uzgphQZHaL8jjAPvSV3ipVm7B3bsjAbCneZraPKbrC1izw3gXqE5QDi1SGVufuLswa1rZo7KTnqHKpPP9ttgiU",
  "key26": "DubeXBaoVhy5mrzfGhpaksmfoWgTY7cQQLj7kxo1gkSuvfhV9gYUfQayCTvdyGN8Fbt2FwrcjLozQzo9aUjBGhh",
  "key27": "2KiLzeZeUFWQADyniwLXbukQLTrfAB1SubZ4LFYanL9XLVScLzcK73q3iJBNJwatmG2EB1YLrxyQyWsbtZ2DBAqb",
  "key28": "AXrXaRuri8LsLhCPhA6XpAZVN9vNXRx9oEY2bMqGuxiNjqpeGG3vqreW7v4hvFmM1AdXXW3st2QQSARoGNNZzCw",
  "key29": "3jwRdvaFf1DUZ7vcbcm8FjTgnZRbEG1YpXBHAbnLkPJ5YVgQXD4uRAYRnE3mZVEGoFfiTP1t2u3H3EcD3yAEJ544"
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
