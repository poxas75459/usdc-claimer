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
    "2e9cWvhCSuD2uT64jEWphKNSEW81mzsDHHk7ZMQFMDoJAd72JpKmEh87gihzVNHbnnfKxgxgpnFgBiN923qKkWAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rMSUv5YHwWJw76g4Yub3qn5UYH5dHsVoT1QMoqjxaXG41bfM7GGZjXNAUtoWvDfUjHtXKjhuXUztety4bQjZ8Lb",
  "key1": "3mGEvhyHyb9SAyafpx8XFyfa2NtdpyHavXvobUZgDBGLSBxS8jJjbxbcUPJAq4JscLiMQEoHbBrUW2AJnvy2SSZ8",
  "key2": "2JCZYM3z4Dku1BfwK2ms9Q73EBpVo8hS2UbLPBFRDnK8oNyugDcusTkS98VKxog6REFJf4boSu3jMYvdj9iFk4Fe",
  "key3": "4PFPCWZvt4VXWTrX1bQ4wjc3o7wze7tZ4T4TebS4uEgL7nnpnzRRSDQMCA3MPaYT4YTqKzAuWjL9McdCzs3yzfuK",
  "key4": "4CUcCNdxUutdt95dL2P3hZu58coisjCxMFaaS3H2z3jVYMn21hPoD16V2dtMkVZrXL6d6TCFtnMnNuVg9Xym4WN3",
  "key5": "r4uawwzjMbQDsHt1r6sVftpo7STvSuKQnJPTrr5ZXfHd9eb7jne5b2R5HGDgmifWGCg2KouEWdH4JgYh2xVp4V1",
  "key6": "4nHfPQUaFaphYPkh6fUYaCu13krbyDze3Vztu3USaZQdKTeurXRLT2gg2Pr5ZZoBUkt3dfdoPcMdaXb6iHjtf7Te",
  "key7": "2t4dFS78Cjacp2esrpyr66avrAKUbhSUdhJv8JxnscUSpXaR49fgUYJkxLzvqg5iCCGRrpsTL1CnZB2uCjXzNf5a",
  "key8": "5rwbYcbWxNM5TozG6oESNCtUYUeKD3d79vHfzvnTJrZW2KMqgxcCUw38bzCT1bC5837ZqVqofK6nrGwx3nFLT3f7",
  "key9": "5QBv8CJsMxs7qmGCVy3QB9Wm6RMUq5pnb6ZCBwSY5wB6eibPBd3j8zaGpnfR1dZuVDRsPip3RFpNtertLWCuaGrP",
  "key10": "2UwS5pY4bVGZ6pP6LwqcqLgAWmmAoqYyVhitfKrhEk8H7qsfzXV26Hsxn4xRSzUtmYvP5e6BVDL3dKGYS3scTY8F",
  "key11": "2W6nyD4R9nyAFeBy5NcDpoaLKJBmVX77MuqnEVroZbsqLsc8RXCxYgrsGW4GmMW1WTEuSzuxbDccN4sX4vwPrqBc",
  "key12": "52mSYMLAViomKMVWqgwZya1FvnjzjAyFTQFz9z3nwbizzhedXRgxiQxrakehPBoQmc62jc7QCcC3gBrBYsfhPX2B",
  "key13": "4JswX4yLFPQWCQiP8n4jzybJhpwKscEJi7Zkd45vfdXhEVfCmCJ8hHrPS5yiX8yXUw5hgcA1tpHjMEZ3eNPyJdNP",
  "key14": "Np6be9J4XoXJwxegqxJyjmpdH4NLJ81N55nyf5um7ADj4hXaeEtVacALH3n4LqABb9eGW1x9jzqHRcSL89v5uSp",
  "key15": "46GpjsBT7hDTJDw21qm5J7WVht6X1eyVNtb6H4gmbpykC8Zp4JTBoGWUPGTGsM3NYVbFPy8NfieUApX1Ze3uZhMg",
  "key16": "2GfpKeMnLrVMRcEJHDWcTJBWtRDxtuqHH5KwxCg6ckQ9QveoTpF9R614p4uisYPR8RnNFWywmimUjcaB7iGxD2sw",
  "key17": "3AdygkeNSJmQcnscqtQnhZQacenC5ZWzWyirFRByoNHZrzdUK9w5AeV6zQqhUHdkirevuQo7R2cHwNo4gagg2DJJ",
  "key18": "3hhvkr6wUmtj58DovW5b4wxA18NZkp8s8G2SU4bsXP3EzjxT9LEXupZgwdBgSAaqVrSLLL5exYuTUbqffqhXfFLQ",
  "key19": "5mKvTKizJ7QMtxdHgoqBcuxiYqccbXNP1NHZUzZGojwydpXsS9BQbUYu1sMEUpCxgrb6Hjc8WQKj6SmCReBywRLP",
  "key20": "3zEfHxm16cQUbK4cwgDJsLE8PCDr9wR6Kcw59LsKqHSt7Ut6u581c5Yt7HGdcQoBcdbkyEFWLAqepFhwxVsoHk34",
  "key21": "4Yk2Sp1y1Pm5B88Qj54oidufQkvuVitLZQA96XR9JtqHn9Rqe1ksJzndh1GFkoQ2u56EhpGY6coUoniJwUhTP5Mk",
  "key22": "3Yx1Jf2oQuKtvzFi7ausmkZbCBQ4QQD6YAmFxQU2YXigzC9oGuK9MC6Jsnd1opHHtQwrB77AxJnPpGJWNTjY89q",
  "key23": "bpRv66igXj6DPtUBd65DV7Xh6vG2ApzoFYJR9e1PTppULH3NRS9LHxwgYnFiKQPgznChBCSuMFGpXyZsSRZvjoK",
  "key24": "3fjuwsbW7Hi3dgtpudQNqg6rF66LkiPQD6KnZ2LXXGnW33VUppTTHWHgnNUihAj823Kf54CXHAt7VW4zxy3XGGYS",
  "key25": "3nT44fegaS8sxMR4VKKHfg7jWkV6CwNPPVB3LQjEG9VBhG4g1qginnyVBamvMFfVVkcUuckmRpRhpohGMPSRkq7Y",
  "key26": "4oVMKMryxn4cBTPAYTDTYK7AhuQJk4QzB3CtRGwF6iY3jKucpQnQR25DuJNipx2hcVxpEQh6F687318ay6imkVbM",
  "key27": "tLix8im6TN9J17frAw1GDva2HFajuU828hiYZd41Lz2q1U11SKCMxLXPCb88JRbkFTzYSQ9W4C2zUKUr8TMVgpo",
  "key28": "8nafEP6nRhJuMrhS4FZoKQq3mWW8rnfkqcQngc9um35ny9FawsTpX5uD8iwHWsoESZFX766Vba1HyfmotW5hkCU",
  "key29": "3JHwj4wBQCAfJW4jx5nNFfuxZ6a7B6pSkG5Nuexxw7MFdu4tpWiPCi5TR82YC9yBQ1tfb5VcCYo7egkW2bWHHoo6",
  "key30": "4FrrsFS5G5MGfhScDqoPF44uhiUU8MVtPdytcsR7shRJYojkYamgQSwVWaKtCiTucHU4ywNhKAYmFCGt6XMZM1dd",
  "key31": "2TYwn7uNnDavbWurKg5ETP5fd23T4iyDPC4fiYfdH32TDmjYauxUMSkQUh9DweRtavnwfY8uBhpUessbzNB12dis",
  "key32": "2jBi5LpNag2978prMPTYmgsjAVJnveqQNTnGnbcSfxSTAMoTMLCeZHiE1ST3FXPqiEFLDmwCn16TeDmBKxMQpmwo",
  "key33": "2trsP9uSpZaStkGNUw4XxbqHXQ5g2G7jk4UzFU7kyy7oZ1sNbJHGjQUUCg6LgZ9ttNkyE6qEtgYwWFcBMpmq14xf"
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
