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
    "2Lgngxp1Y6C5RcDvhSY8nJensbNRmELxKBbNtaoNpbP6A35QPqahg4hRkXS9xnZxvTi9Yt8jhP6Jqw5NURVikay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AbogHozQGD4WSJhQuZqcop7xcxpixQ6A1dkKdG4pc32HdaEX6VgNP3fW9vjpUddym3EViE9rhmzBSKcUgEC1Hxb",
  "key1": "2jGX4yaJjef7dHheud7obXwfqUNUNGCzAPCfM3oFU3ggR236qcJZVz1sdX2kKLbD8QTHvJEqYd6zZRK8m2vraZrR",
  "key2": "4uh1RjagwUnvh4n1ATrH6r1U6zceZcfofD8LkNT3TTyrdP8gQNYDZ9LPw3cDonU4UoGhNxVDVvzrMN1Sd66HTnM1",
  "key3": "5b2v4VfgwD2sBJe8Dwc4neViwgYfyBZSTZv7DnHXXrrPBoKGuVAAmv5eUWtAnk2tKCGTcB2nPAYcj1DayUb9v6e6",
  "key4": "52x7baigkhJpa8FjFqfLGabzFrW8g6Kv5ormvLCc3S2uDtZfHMPc1jvaUqyg2zFhdGjegGZnhVocBY5MnJgasJww",
  "key5": "5kTNorNswpEQxjJfW9pJgRq3WgKnTomsxn7qjLNi6MsG7phLy7QqsBndLoUVeWy9E8FgZd1cvoxErrsab74jQpmG",
  "key6": "8GTm42f5RQcJvn3QWVbzNRHny7oTaQDfv5UcPCxiRrjJan1L27yMvapgtR7yY5kDBJHWxB1Vip1trENrTRWts27",
  "key7": "tjBT4G42UMk35wSTGHgKQedA5ppwx4pvTDELwBnjWkLcMzf4SLGostiNdytBJyYiMYhqzXsMh9juZRV5tkaLB6P",
  "key8": "3ChDYaAuvueBsrEmdCZmWFEXe4zfed7HeBB9HhB5qNh4Fb7Ftb9w2VX7DCJHNpzFZcQp2ZavRSypBzSHit7kGWzr",
  "key9": "KFCVpM82aPQjoPwqJTaMWUaEyXquD7YfegPSf4QFS7cUnBAitf8yk5ktA2hGH9itYNL9xUepjmMc6U1b9hRucFr",
  "key10": "5pHFeMaqitTaoCD7ehgtP8XvrqdC25eCxaw6KDPM3GVXuApZe31RLadzG4x4FpNvw1RpVAjpd9suWL6xfTfLm3iM",
  "key11": "3P7rn2S5yy8vte1wvzCcARdcvHLxGCYemo8rYEjrLPnMRYdqmRd4NJi1XeF573JWKz5UgE9L5VSFFuam9fg4N2ZA",
  "key12": "4gpUbc1FzgfqawMuj6zEgiNocbHueTZJZne3iFyAotVrY836hkHYtAmRrVaZresQnruL2fNuNRUhjm8QeRVBcxxB",
  "key13": "73JmnxFgigBt7JqKvyPDgAH54bC3rUPURzYWcwkoSHMn1FSfDwrhY8bFvfG58xRoeRxhDRhBBA8nEpBmcLwB414",
  "key14": "4sErFxxjkAWBj5nv5N7mkye7Lm1FGAqTxWzj8bc43oYkKwmKoxJidnR1a749ncGcW5h3EumYFSLadRAFD1jCybAU",
  "key15": "3mdHb9Akvo6HVv6BSEDndM7tqZ727LPqWRxPPqSHhSw8Tv6UN4jXrrpoPHrfrWf7LT9hHGoJBnjM4UKkHA8BVYdJ",
  "key16": "4FcdYmzrF1e8Wv1DweiTpsPwGPWx9WN4csbT8tqSU6aDFWyvxS6VVAQ6p7J6Qz8pjZmbdXJEJ1XGi7r1X4Zei45m",
  "key17": "3ch3SRLDfckXWteaebgwbARfzU1CZ16CzfHUpp82rNioqmn46GsCdxqQpmWEi5nhT87TvJwWrwpHDzXrXukchrVm",
  "key18": "3ZJHXYWosxmrRVLEwynqHQjrnDM2xAkpAaJCgYdn2nXsWi8yRKaoCXt2jfRjTXKPYP1XFDsfPMd5t1zLYEwnztkN",
  "key19": "4G9fM7ec73ERw8oncWg2AhCRvShzEdZGnRykqq425mmXQF833p9mm98DReDA3y6T13AAanY97cq7dgEKMRhc3qrH",
  "key20": "3fusJYQQmqY5cveHxq6Z3sbQJmriCGBvVcjhHfvnbZos7ceEy8BVJrFaVf1VZgejyoYcFLR2uUvh4ab4fsuf143b",
  "key21": "3YtYGeBit8U3NdPkWa8HwtN1sF8BNLE95GwWVi9YjFS1DzZX6kqHnqAv18SQFTPnnYjBrXey7PZ87XdK3PKZDxnz",
  "key22": "2UKgu8X3BrvEX8YwCwU1VT27LPdBsW8rgQ5xfPXsqsXw3Ra6phao6sWyHcpzGNQHaVpybNgpSwDNpESPxJhMgP4W",
  "key23": "2vLbnU7suMB8PF47YTLHnig79CyhhgdqgVb8WRbsXZma551fZMA66sKm3rHq9DqHTPQBuc1HmTWA9cQmKfHyBvUA",
  "key24": "ukUZJfohU4JmGunnyAAaTe7iHxfevsK8Xwj5J5JHeFWQ5jxKT2SstUUQrKPGQRqPW8FeSc3BYKdBdmnbUCFnNDG",
  "key25": "3Vu2g8nELmebf6ujNZdbSU76WHzKmMBfUjxPZRbbXseUAgVHeozTUR4kXaJPptc7BdD5YeSBKhzhPQSnJyh5g84p",
  "key26": "3SXryyRsZj29mmWfVutqpgXKM6zycMQ1npkyrPV7cDWSaKrhtzT8FvqPj9GRVkx3B8rC82GQfhRK9fWVLKqMUvJR"
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
