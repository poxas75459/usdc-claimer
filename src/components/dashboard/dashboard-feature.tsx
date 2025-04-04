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
    "37Km5KUxheGqQfEGndRMSUMSzUw3fuQfJgbyCLi8Nf5Ai3gG4r1hGwFcJkqntzQsy4PsxjJxc3jUhkfTVrFNUPLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hYJRqeC6GyYzKxsMKhwMNh4v7DpxNsBM4HBs3JivV77FHvK5HEKSXh9TS2PnotP5TFqbooRdEbTvBH7rddFsKgC",
  "key1": "2xWhXc2XSpm8z3Ti4PU8uU4WUTULbsR6dPVUYYKTZoqqW9nHvWnLsyADUBo951uZafzhqdoqasB8FxTEmoJnibCv",
  "key2": "3rTVhWQdzuTQM8Pb4icg8B7XqHJ9FMazEqEsEcgScgjRmDx9pZjMTatuBLwEnjnZj3LRc4Wb83mVCAHWK4PRi4pR",
  "key3": "65xeyMWZCV9SNV85CVRqYvBkmoFskPWtx2GwBptRQWSkXBqBUvhpkN9fBKVEoyTX5AAA7qz3U35NoiNHTD7GFB9r",
  "key4": "3EpJQLCU2PdLwiNuSk1TquNEx8hn8i8iFYyTQW4VhPpzvm4RaqzZuorTNmoVdSJ76sQgnLAJdyKZqHTvuctHjrXr",
  "key5": "42SThad7KL58XHnjBvrgb4dxQrj114NACVFPWZ33xM9R3U1fjUydsqmwgrdZoRsRXS6g743P1o9ZdDAyGYWiGsgb",
  "key6": "omjpdyhc8g3aUBxtYrfxNyMTj3ipv1vjCmWVi7g7TL8b4YKaoCimF6Qxg716yQJUsBsYfc4ZD5bj4tzW8VchAiR",
  "key7": "3Mf9RgsEXeQYx8Ch1wyDzyj7KkQvYgsHEZbjnbj5C8Ci2ZqcM9icjZZ8C9k11MZU36yKtxuR3UnY1677jPJdSCWu",
  "key8": "6iFiFJfyE25rfbGhx4xi9nMdYWGfLtRxbk2fNwMAkEzzs49qJ89UhzqngXvugccAYB1tsx6WZdvRrZzVXYNo9qA",
  "key9": "4Ez6gwiNK8Huwjh6dvuAJ2N6YA32x6ypj3FnRCnyXTrx9mJboxp26r5Qjx1NguHrx7ogDKxuHqXgUyyMU51DkVVR",
  "key10": "2KJLCSgQETkRCDzaMYy7y5vCBwmCjDcMtf4RbG7a8kRVmC3Mu6fnUWG3sGJUqp3a17wf1sJNewHikYx3yPrbJvkC",
  "key11": "2g6EkRXPiP4yf8CwU1pt1kK7iXaHhu8ayUV82Xnuah5VMLTLq4Qc9aXJ1fbLp9MAHxaEuDC93JhcqgHhERHc13xC",
  "key12": "5rSeRJX7ZYq4h1hK7dQ8xv7t3krppcUZ7pCRGj3gvW6trtuAtceXuq1oHEr4v69RMfpWD5AoXfxWLQzcMqbAAm3R",
  "key13": "5uoXb5WabPyJNQSvSzD7x6X5K1KHof26Ws1v4wZHgdXXwXsm48PgdXQXbe71tnaeCcDotFozqgsPcJ5pGXLi4p9W",
  "key14": "3YP2ykzwzJsWrkspRGBJS6QmEzQL5H5zpQM7cfQjPAUTKQ7dzJhLbf7r19uVQ6if9pXUaB4Rfg2p54HfvrSidx7g",
  "key15": "21m1NCZtW31RFXdopT5HUJEj1wJkn6A7ZsfXKig7qYG5JVswWfWzsBvGcbKjtZvmHgoZPoBSzAZi58jsPN4py7ss",
  "key16": "2pSYzJQokdwwFreTFXULWF53YSHqiyjXmViZcmx3hcAsXaJsuohUiccuT4WWZS7VVddwDyZ359DCqcaa1RgVzkJW",
  "key17": "3DV5zotDAxn574kEmFg6AMyNwYb819xWLNp7uATsuKSmXj1xgfHwwGJkKx2Kj7uGUe5iRwdKkTk42mVhhdiWfDwf",
  "key18": "57t67oGTPQqCN6gMWKa4yxBP4YBDsy4Gby6rVQDu5gJj7s5vvzWFPDwUiyA2MSvyRQweKpjXuKwqqUP1Hx2x7BUH",
  "key19": "5mBbvdMHo8SdHtsfswyjSQABc5xFer2yemGdcKZWBgX6du53jycXT9suUKVuNm3Ft18pbDzgozDyUYCMVPBzJ6vm",
  "key20": "53xWowVoNmbdhYrrJsHKyapkvJZAhnvoEC7c8eeAthW2FEhAXeEuuMRtfs6fph4n3ERRhKgbrSWsvbaZ5ZuAVjoH",
  "key21": "mUTyNH9YWnQ8koHittQYj7HszUjetW3Frg65TAQTFLYUrCgLkDJQMaJbaoTxwEw3E7NoToXuA9qX4EApny3amVN",
  "key22": "5R4pnX5PSooRT3VPdEwysfsKsx9x1CQLhnVpviH3Ae42aLU3whZ9KME2QiA3Uj8phDUyDF2S4MZLcKwpP6nNstMq",
  "key23": "W7Sca4t915r6ghdDmH9awtQMqHfuJVr5Prg8dtkUQvBZpGJtdVpJtQ1LVzKqfLazhfhNEJP935eLzxgKBC9oZJ2",
  "key24": "21er1VTde5eV9rsVn1XjKRjokPtDvJq9kicPrg2MvwHZwrR9ruTx7ZGgoPyiGEBTwxBcHwdJ9B6ekjxeKzRe3FED",
  "key25": "2t8EnCK2KKxD6khzSoQX91MxGHhKTrE1vM62mFW3v7mPQ3Z3d1MhmPpbKz2aeyb4hMALgQ5B7VaaMaKeeBZVbW4R",
  "key26": "3wzeweVGoq1X5QiqCT3pR6oimWMdb2RLzR274zff7z2c9g3LsFwyabrbaSWJNtWxTFqg3ikD8W7J5kavA2nBWGc7",
  "key27": "UZ8BYjmvJn4Aa2VnoFoZTTo5hpT7cz7emWfChvowtWqgptJRmzH5pTZnY374GgJp1Pi7Xe7onjV77CBviEv8Gb8",
  "key28": "4Viea2F1EKvRMcFdPHmWpv2kzVqw8jRCT8dtTXVaMphNtjBTX6FafN8gNpw16Exvgc7sBxaP8nfmnQLZWDaWkErT",
  "key29": "9tQCQei311n9MwV37uuU6oBecSE1GHNQF4gJ9BAt4sNoC7xn87GYkxX5iaB5MPgVqM3dBPZqvsJhwzEvqSbbaGh",
  "key30": "64hi3NQxn6cmwSVzQWSLtcPfvDToN51URkX2TDhz4dkr1E88SjBT8ZKkYmvUdg1wHwWunD3SEUJFyHFpBSxefM66",
  "key31": "4BuYsLZezUiZS4K8jAo5tEfs3cth9sGEPCMhyKYH9ErUeAofcCuUgkqEn9XSLpEWtb4zGZzmYoVhrEc5Na65agu5",
  "key32": "5VfbnXWsmETkMVgkBJsGt27qmFvCrSnc1Tfg8UFzt9cAKjrLJ7yYzCcW3XW1MVgxuSueik16FuTehQBMrzdc2HPj",
  "key33": "5CReAbXQukYidf2q6C9iHsEw38SKpNoQftY3iMhbLTaHERjGNntq8f9PppBx3DkYVvv8qWr9R3Wroqi7sJbfDgvV",
  "key34": "2bBNEBjixHu8qpxbRR3zYrau7Un8ifquNUBSpHZRX3ocfQfx6eG23ZVfejUqrP5JNAXGtFwPPor6oEYXZCKEWrSx",
  "key35": "2ryjguptW7e3M2ieQDWWQijrynF8Rr7CnM3zKm62D4L17cJLtWKZjAeHYrhcRJD2HB5TBNR4gqVHcXk5FjD21EsR",
  "key36": "5FhEjeChpZxtqbbWbSqsjeT7hCWVx8XRjSxDachfPdCYCBpTfji7MGLLHGJee7pjA8v2M5sgG99RjfKyKui1Wev1",
  "key37": "3vDBzvpGe8TvgrzZZMeKcM4qLJRZhdygCKQi2Ndm8cXRbnXGyF5RynCGgs3Wemdc4bHgmPbokqcqKBuxw33yTmcU",
  "key38": "3p9ZU1UBjvy4Xce65J5GxDGTBntkxRbUnTtAyPusTFE4ZxFEEWQCnyAFjcm29T9pDDb42S83LHT9taakRTmFiJFW",
  "key39": "4Y9oJJVJd3Rv38pmYFWYepE2nwKkiuFbgK6ek42hXH5FwQLrgxapw1GyLAxqvQ4K7rXAqW9rQXTeKFSfdwzPL3DP",
  "key40": "2F4vRTxzkGWLSYVCMcALVDqnbPVHXgrfkmNCiCFzHbwMVHCuraRaFtBYShnvvM3vjoAUVuaKDepdZEhD4VuiEzxb"
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
