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
    "34vizTy9G3yxTB9damTiBN4rLVRk2FPZr8kTXFo4hLgR4KVYdKTFn7qXAML9VUqtW7y14mdXCUxSAHJk23LPaohS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37p2AXChjMbCmvoj9fyZmxvPRfgTZEmfTK656wMkKkw4Jt7jhT8QLjCrDgVZwexR85CXxdXi7zuVNpKyE5oD7yhY",
  "key1": "iWL5XkJUpKLkbM9YEE95ojLWKGGB8We55sTBFTFxTtuYYjNh6yyXHYTyL7ewX2aZxprwhpVnEpDNx9YGoDtJAyx",
  "key2": "2rVgKVDpNsYf8ChvMBF5qjDvmRQSqXcY5onuXky2wQJsdLG8R4CGs9zYswtQiY1nv4SGauey5k1Tr7R9bFcYhnnW",
  "key3": "4wbQEMGapmhNdGdz4AuzQ2zKjHdQpMRGCixEvW9T9CzBge32zTZZg7BQqeANGEL8TJRjv8stkdFFtapvKToKBW8k",
  "key4": "98CTpon81DBU2H1Mg7rxvuxvsw6myBBF9dBqQZ9QAfvEEupRunfRKDEbUPEeX8A4t9FvR2rV6zMR2fG8wSryou4",
  "key5": "4dNEnYqefzPBwrDbS7odbk5h4K4dnCBpNbLhqVJW5eTmYUHVuTa8UV4hAJVqCgZzntQG4NRUGBPgvjqJRxKBQuoP",
  "key6": "ymLsEUCbxKiat3KTeke1JwtrGQGyePeEZr2jbPx44hpv5vZns2mRXhAkfx2V34ruy4gMz8ACrHDfe2yAdA7Ncnx",
  "key7": "3cn5AZ7gWr9yq5oYPd42Yiqa6sdZmku85tDQZyb956wboyuEsePPL4xeRuDKwsikvVU3YYdTEKnKkiXvt6KLy1Js",
  "key8": "4R94PsFuqhnsxF6LK6eNTHJUfUSgLbeLfnvbDbjGYewhUkLZTDL1K4e4FxgGzzY6ixGvYWmmtcvUQwT2ruTFja19",
  "key9": "2wqVSgd6MfqnPZppw3segA5FnBAVbr7EiYy916ZaRLukbXTrPfvHRZJvcraWghnAjvxT3Bo54Bxx8hwehg1x9Euz",
  "key10": "3cNyVEXyviyWj9EGU4LG4LYTCBBhz5BWZjwsjoPYMM3HNmRxpC5YqexjCjsADMcrcdPEjtMWmAgMGuXztXhe7nHo",
  "key11": "3j88us2CcxEhZA9gyK6h7n288DBe3ZzeNYxrjPvEW4C9EQUbVMK1N9X1VL5uJh9xcKpswBbTmtwfa96QX5WjDYdn",
  "key12": "55pvr7Fyw6PY2FKgA44JsZ4y8NLGUQ6StrRGd1ANnmjevu6jFqzuj8Pc5vS2KVhrmVW4PnadVbmzKHoKjnJmVXSr",
  "key13": "3YgnuxWzY15T26MyiwwSdVaPiAAdkr48UMpMjU3sahX8RM1erRgabM18VYfKr9fm9asyckdJS4PvhfxAJiZrGbw6",
  "key14": "hcg5RZmjjdef1fSWEnxa9rqkx4dUQQoptnTEWtNswRA2KqxS1q3a6oPkE3FYCgyTNuGzLATto5W2osQ5UvDm7Mx",
  "key15": "4GMQyukWQ5WtzhNvyze4dUz9cQsXGauos8UVz3JqX1R48ggLYpLhhDUjYrqPuiYLECkwvV3jBnGNja3h7aBeuMpo",
  "key16": "5zLJMoZ7wUuYWPLaMkri8wjArpuhnvUJ5Xnv79um3JrJh9qcP7G2U1BVRTPEqMqYpvzT8F6wrv65rdZkNxgm2TB3",
  "key17": "3k5arSgqSHaWTJruSLS7ZWF1poHxhfcubfMNGYqEdoh9eR9qRTCLkzYeHY7EtK421uC3WXEtSMKs6Fi47DVC17N6",
  "key18": "2GySsX2ke6deJG5ZiLoTBwVPcxd61biTURi5dREXVeKVSqAmwTqnWibbrkngStHZV2DazFgfcn5vy7s9GttKidmr",
  "key19": "45dm8VGkTtYqHro8Kx3jir6PL8t67EvrJmPjoBSpLhPUKUT8bsSWppDGk5T88LV2uR9JLLLzeefyopBmoiFg8o7S",
  "key20": "Xae9TVkQ28tJyySCKd5xp4avVLSNjQeuudM6tG5pu5trE98nJpfTgar9GPSGEGpsffvKqwLtzhPAZvE6aCJNPk3",
  "key21": "3ns3aCehUnFUve3QCBy5Au4kZtA8vSGXQM6dK4Yp4onQGaPxv7WCDEqnt5gdTdrNCLgqQr4FrkX9vXssrCTZXnZH",
  "key22": "44m5xke6sfsBQGAWtsbdN9epZrAHKb9vbWWzkdMc18hddXLT6GwQTmgPuA92GDoehSP37VLN4NQQ3eX1tTqUsvWn",
  "key23": "YxKJ8V6rBue5hgDhefrYU2vkqBqLrLAVYnTjgVhzTmnJropMji1e8qmdw4Zjt3HcLHKiYM5btBgDez266WXf7sA",
  "key24": "2aUjTEtgFFYeQFG121JVE3KhPfFAn7Nz2u7Dzu1i13cZHtDrMdFeECqMBrVQ8H9Xfauaq9HFdY5sRL6VVMQ87Yn8",
  "key25": "5gA19osusL19HD9gU1RBBWQb3oRWhh9ct4eiDzVvfhtvCWjuSDN3V7AZ2gyysXS6FPsQFAQVnkkChK7d3nL7XyxL",
  "key26": "5fyDdG3JEiZTZecNjq7AtkmHwiAni4csR9VwvadGMWJRzVJa4e2LTbbGtSa56yqq7dAQFp5ZFWpUMur5H1oSg8JU",
  "key27": "42spFw832H8impe6e2yfpiP94vbZVyQ8oW3kf8VL4BfZ6T5AcJUUT8cL4t8cUejyPXWXYNZt3D8FL3JmPR6nzhya",
  "key28": "2NFA2S5URqvfwCDzuUYcZabRMFrFJJUUwoTxRYH3iHsKTV6AHxXw2fQYASk5f2ZNwvCYic1nB2MWfRAvjmcWxiz6",
  "key29": "238DbwNnCwrYKcaHwrDiiduxcAXwbkJLczqxm23LAQEoQd16jsdeutnZYKxAqZLXJfB5PRCHTphLuKQ3BQKcgqxL",
  "key30": "5xHP2qRdPwJUTReKkwE4jqY6UsaJnss83EmTVxQhn6xGTtWePBHqS7AoVRV73eT4p1MnrGeWvTLwqFmaXG1WZmJc",
  "key31": "549U6h6quWkVDm2cMHLPLPaBzZ78uY5oTqA8swjLyGb7imRXqTN3MgSip8oGXGoWFiafYyzwGCGwQD5NDnsB8DZ4",
  "key32": "3roj7WzAqerJ8mkfoAz3M9Z9RK5ybFbfQbHfoy7J15sLbbjbZWmDacK6eijZVpBDWKSdQpM391BwRWqeoNC5qJfg",
  "key33": "3Ai5Hv9SUvtc617HDL9s3uKxWuwvJiAV82ux6z3BXeLVXK4B9KahnfCNdGWwT9r1W6y1RBmQZeqVZZq5LccaV9h1",
  "key34": "4VeJtevDh7KBtWy5nBRVHBHYFGq4NLgeqsQujEnQxTE4zNGy6HtR9vtqwc7B4pjdYPCtgGLhr4zxVJhJA5cY5J8t",
  "key35": "2gmKENUymjvn663FQkq8DvcL78W5aNNxgkdd5LuugdtVGWb59cfWKMH1nbMJP4vTEuV8SjKDUHuqZHzDRhAdk3HA",
  "key36": "26f7nLVBXeNrcLjyMj1V7Gapjz2PSa5TeJEh9vqGpWnxA4aJNSXkS6LZfgbUxndqKa9nAoLRZrsqDT2TFuRxYT7C",
  "key37": "JEqoDATMUxn8sKkE2fdZvVzu7kipb96cWPes6EsLmAYpnvKRoh22jQHMTHrtGXysZoiJH1Bx3FwqouEFHcR1LzE",
  "key38": "oH9V1J43WQHcmfgaHcJUGi1hjtsr5ZDK4ZV1oACoNsBxkwXHUC9GBZ7kK6YSNVJrpPxkBN1RaBftFQUip87947A"
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
