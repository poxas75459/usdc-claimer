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
    "57WvyU4guAT4eqTvorw9pP6BJFWfxxJCAC4v46Y6WoP5M8zLNnHzbHkLy1Z6U36S4hPpZL9WKpE1fVrr2USVhV53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MFPgpRDT5y6AX8HTdAzVzGoEoZbKdHR3uxLZxZmry56whm9XRSUNPQr5uiJEqhE8Mj3yjKY3WC5wFU3dxVSbvQE",
  "key1": "3Sb6wHwLNGBWnHzR6x7hZWpBHqvief4xYCtoFqtDp6qiYPc5cyKNCHnBmuGapBQdaMxv6Axu5whiveHV9o4qJJnd",
  "key2": "4J3Px9BbAra3tPksv4q1nuymPh9m4fEXtX2dob2UiisWLykXvbCUH6bSCBqD4413CELRyGz3NSyXX9S1Vy4CJp2L",
  "key3": "EQSpkcJMUT61M626ybvefKkrmHADrAvcpJ58VbudLi3FW6PxuQ9HRKjYHRUnHBtKTwuQtFHjKyBDyhjbLNhFgZS",
  "key4": "3gxT7F4Qk7BmVCKd8zNfqBQXfwzZnfJizsQopQLS77vjrsYGhEbWfMHbyGgt2fN6YofjQ75LJy7CGzGzbTmr1af",
  "key5": "4PFbugPG7wPhExjqbUEcQ1h2qcoTGY9NSG5W27cKQxRZqZ9HDcdzsxvDZz7NQezjTeHSakTtEzJweXhB6U5wXxGy",
  "key6": "3JzgdrQLJs3LZxSWgeeLydssnCJb5Qt6Sr4ai9jsXPtv8DsE193hnWqC2yoL2a3y5AxxRcUZfSN1uajc63qHxyZJ",
  "key7": "3vinrExJXi3sJCFiGZgWDFbbBszYWdYWkZJrrVMEw4AYnzMfFXvfRSK4e9BiV5Rzy5GXJeDWSiD5fc8AdC4YYkoW",
  "key8": "2HY7NQDDCmd3miQxUQRtydLucWnQVd2ayCmjnxTbbRS8d5AXxctTZdaAxn9FPT6GRCXtbbtRdxoyD4TjRhwAFLD3",
  "key9": "4aWZht8CtY5rbEnNaHeCS7pb1rgG163cRUnbjVKGoXxRN6PxmSxED4PfQhkmHUfbmPwm1dJSqnMGDb1KsCNchd32",
  "key10": "5Xm2YTTfnGCNozbhxTomE7Sjt7jSyRSMB9cSe6TALD1a5rLm6iJ3Y9ZGgz8gBBmy2cab9dSN7dFgaBpBoRyLJWoo",
  "key11": "7YQUPkz9EiFc26VTLtCmHRBBCe5mt5T5hQi8tCfmrj7jsRHG7W9yvpuhjJzirotwX9LK3RNrofEW9S46wJuhaQ7",
  "key12": "32XaPMnx7YwVasDcfUmwL8VoA9ZQJeR8RL2DVZEKxSNKN7s3GDqkiZLNV2WiTG32rfvS78M8BvYPVVsFeDvm4nuG",
  "key13": "3rhw4ocZkY7gaqH9u6CG8PpP95jVTgSBBkgD77YrwVeq9dd6cdSv2HPpegcWuQsfWZYiTfKKtm1AfwXDN8tKTskH",
  "key14": "5eNnrUeS1dGmXMSCcdxaf1NxAa26MPdsCnC3nGfTSjRrqyqSqXWWLpNAp3sotHBNCaCv9L1TgptjtfzSLp9EeHZA",
  "key15": "2rELGauMVPEfuwc4ffuu2r9BhYeLmWjqur75WCbqT5NR7FpFbWPHmC7hVLei5ufDHUgenjSGNJDmyPPscu9BUvaq",
  "key16": "63Js6HqihFoqHBBVQ3NPzsxA1jjPDXfGE8HGbUKsBetqgrkEQAZqWHhvKbB4AVWo7TQ7mUQ6JtH8Y7WV8VhQxev7",
  "key17": "ee7TsMApbq2RwfTvMQkPk6RY1wfdzTwGrnpJDfGDysFWaob6hkm8NbxjZGvgR3mMfCWgB4Z4f5aTS363c9fbFZF",
  "key18": "kT3WsUt8q7DkYjTDynFqc8DKvVtZbjYRKX49SZq5zu87nXoxYHuRJnSJbk1J2pFDmHxUYBqqB5AZbgwUUtzSREC",
  "key19": "4TFEqjwUC784m3BGocV7CFEqP64oTpUKz3S5RVKRFs9aWkoQMvTA3coLshw75FrpgbB5dUAEMXQKAGFVniWxvwXL",
  "key20": "q3wKeDMJYApQGqH7nceRJJ4NqLi1j7Jm4adu8MHjYti33kytuFBJSFY7f1Kgoab3Czb3sE452G6KtsmNEQJ52xo",
  "key21": "5q9Y6cXLdepQHh3agDniuJwL4cUCC2ioWAATfj6j4drs2YnoiXKuPS3KF8WPrsdsGyMdptM5y1VYzX9swTKr9cX6",
  "key22": "2jABtfBH3yVWAx2R2vL5NBQVrbpQ5ccMZLECGwoLUdD8qCibwFA6TjiHH3SWX2NSZMrVQ8UPoyKPCN4QYvGYwmcb",
  "key23": "5V2GcWacaan6xCf3BWgPydra1GrUbDFkTro67aQePbZAvc6qt915pMwUY4XD24TRyJTQ3kxs1yip1XyhCjuWcmbo",
  "key24": "653ytwsv69N7EqnmHVEyY4UYaSjipmZ4AuHiVFjYxDRAG5CCiovYCXh8EaPjZDkeYRZ9rfgvNLJyjsyFB4uAXCtA",
  "key25": "2Mmmdji9kAM2JH674eW126SVr8doZUvAwi5m8myxYf1kWhSnxj89zZj6532B5oM92hC6CeyDyya8PBU5RpbwFBXd",
  "key26": "2NL9LUhn84G2oz7Ld4zDLtXSLENU5x36uoJbf7b3Dt55D2k8fdgnMuQjagMCwxDBmxDj3ZXy3HPmXseg2bEDAL3z",
  "key27": "2iBYNFUYHYFFBpw8qVvQGd7n6mRUTFyySvAk4QyqLzXRbFWYGMY9oQ81nL6gHewZ6RpJxeT4A7bCsoow21LSH2QE",
  "key28": "4DsYRZk4unQbQjisPoJGte1LyGq8S2dRvMLpRTQ4xbgHKopgG98aYAEgMdaFnn7T8jWFPXem68NPkjvX76VrMK43",
  "key29": "ngNR5qUD7sk7qEfsLGjpiJbF5huCSSXpxas6dUsDcfyrBii9HUWMwpi5HrLUd6D7bZpZze1s99pQBGwag2U6ym8",
  "key30": "51SxuTGrb4jzqD2RB5rthMdoUk4BawxDv8PBFxKoEQracKFqroBMFrqkM1cBx4M7ZzYHgKfHx2eLet1YdMTXdUyV",
  "key31": "2i1fVZtaQXzsdVgvmwj9Uk6K83Gj44f9PRBGJtkcYtBVERptMJtp45BVVtKopUUPfwN8UCEBfME62ZMp1s1YU1kj",
  "key32": "4qqk2thBbJRgcE7GtXrLAgmLWGaGQzCSzgfDsmaLESW8iPmdUHLZUh5YufXNmd2jYHRnWkfmRZfi61whK1jarwEu",
  "key33": "59qjWTy8n9oEBc2d646YyyHC5PxP3B4aWiFrCY6wvy9wKJVjZNCiy5NBbesiyaKZPa2YYnR8p8c4XicvcLcauDzu",
  "key34": "4uVVXFMFuFnfSJWGsVsoMdm5C5ETqvkpVGWx39r4NvZXqKyX6vDyw3dJxcZThrq6DyT1sDEa744s2kNuTWThteAm",
  "key35": "3nEKJk2SJBiR7xKZeF4JZMm6AkLXqfmqZDNJUh1mnqVgp9diPien7xvzbvnrNgkwJJR7hpyriokPSwQaMVFTFXQj",
  "key36": "5t7Y7FwAbwETHwsdMGgEbbzVLBfjkvRgM5F1nmgiRfcU3bfeHVUZ6niMrVv8iKaWB9Su7fTHMQ9KMJEDa3ZCWAhm",
  "key37": "7jTZVyWebfuEadMqSwyb18jyxp8WbeehLyk78G3695tj7aCGe4EX6Hf9PBk7QQLun6dEGDDLGaqso8WhYaRkXNZ",
  "key38": "5UBnrqQ3FM2EBYrARHWRcJDtC5HW1ymjhLFKCitqzcgHqxyCjG9Lmura4JCRp7gEdw8TRbvmsfLkRhRtZiDMN6xT",
  "key39": "3WSKN2xrHziUCT8cvZqUP1iz513uN3A6vK7ivtaUbDZoafKt7rfNqYdUY6FHarxaZfAwfjKpi4pVXmc6UFo22kXn",
  "key40": "5Y6AGXGDvmwyfvR2is3nWSYWhvfUYcfwswYhsSrSQQ8Vf8ff4SxhQM2NXEk5YeAe6ro7gFbBv3AtHn1k8P9z9JYR",
  "key41": "3HBGTJPv6RXsbjZhJYppXgCNaJHQ9xMU4gZfJjmEf5i3GGYu1dsJm6PY3oE2QVyHq6RGzzQa4cWWomuRAzA8nkDm",
  "key42": "4KhP1mZzutmPQdRBXrMYVHYxR3VC6YGmqT2TTH5PvhgLZJ5aGx5av4v8z7qzygVLNe4XPccoPh94VG3GwxYi26Sd",
  "key43": "3gMaBPBd1fFHPcwZ6UyiJsdjDKU7Hheh7k3C9x4Se3zB4goep5MYvvydEUHNkZYF5kU5gQp9AV4cLJpxdwFzF2f",
  "key44": "64JGprmQZZvnqCuk9ve8A2Xoj5udDchWuYTuACKmQJCEvLVRKUvVtQT372ymAHJqrgL69JB8QnyXsFCTNJNqfZfM",
  "key45": "67iosPEP4f8r8mpN9JL8p3GwtWMgigdN2heQtHAEwhyUpN3cjmNphaY41hyjsnz6H4p1K5cxgzixabXAftna9pmn"
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
