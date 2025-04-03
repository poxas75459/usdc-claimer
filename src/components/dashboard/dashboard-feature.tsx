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
    "xrBPa1F8kvNM8mk66EpDWhabR6aKVRRFz7EjW1jDUELA1V2icKKcAqHCbyLnU3TaujmyQ1WzZauLUn3rc3vUGm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yqH8j5GV3QwhBcFvJYkF8RMkrV4KbRAxbJfb7J2ETDyzxfWeAvvD4HvaWDdNVegDXwH2LwsvsgkgXiSHcX12NM",
  "key1": "3TZ4tSvUPetjizZapJwRKLPSJrvmE7GwwroEhaAkEkhvix1LyRcHsBqV2MkF8KYMjjSLo9YwJtzKLfZBaLLivKF3",
  "key2": "31sMh7K7hqXNXtdpsPEqK9yQHYubseRUsK8kgkb1X1CBtRgzNaX2zQ86wP4zM1bQU1CZXGyiBQRRUkfRnHBX48UY",
  "key3": "3J8jksq4ho59XNsh3Q5pAC1M1HrE5XBvXjn334zdPMfzdVd9ZVc41UcSHzJsWF7SbrNY6L7hpVwMJgs5rfgCeZ68",
  "key4": "2LMEfFstiBRySnugsNmVv79kMeWTZ4k9bim4U96hV4sv2uWQSVgGx268KY29AG3trohtUAFVLE2VyHnAyQCqsYeX",
  "key5": "2K6TUD8ZF7cxoK6M5eZWH3YkM5Fz8tizKE4n2gYAY4inrG9iPn3Cu2D2EzQfYwu2Y9Qx1Zdkf8Rb2UCZiBiq8xyC",
  "key6": "4Q89TiLpRj3NGCUKH4GghgK1C88g3ArtQkDK5ue3EbQBo1zt4DtDJinY6zzzNYDw2Eq9r2zTihsvw5zQ5zWZk4Dp",
  "key7": "67LGQzUGYVYt8gjhtiteLp2JVH6eyx92hbgZdRwDGMzG2N9mCuYvJ1Yj2EyY5A9akgcwsYB1zbpJTKoqRCivv6wE",
  "key8": "3EbB8uBmebWMQZbPTDs9pdkm7eM35r2vd7cXLGZ66FuiZatpdKDfLYJzQ38YXcjd4gcrFYTQRc3nrJeGak6NaXvc",
  "key9": "yusESUe6B6rbCwjUroPnLnhFA3wTTsYL2t9wz2zEhTJps1n8eSxTiPrqF4oK9yLumscnTfr7V5xS2XG3rTQQpHs",
  "key10": "5kxRraqU2LM2g3FsHLyrUzTjdXur1UiAUUS6ae6QkSbRvUwvC1KpUUY6HzJf9NQ4B2FG4mUVQx7XhYeuz98twuB7",
  "key11": "5PtxqAySj6KFHEAw4AUt4ugWmhr8PwCPXiFW7d38vaMnzuAArT4xRiCunr9Kbu7K5kWS5T1T31RnEZuWEiksFsEh",
  "key12": "2oHpfbjQ53sc5CKi6Gkaci9osFjw8wUr68ca8KjcfRrDhorBPY75kTX3XS5grQ39KRYZydgoRFNpGpxKFU4umntv",
  "key13": "3usDESkkXBypbthCzvf3fAj5v9M4ACWja5ik9Tcm9p3Zz3GvQqNKpS9zn8N3MbkLL5xbt1rxmEZn9MpeJmZ2myF5",
  "key14": "4fjMM5zajj5boHTgv5KMsQZj1V7U9xW61SGqxz6MhQZjFmV3Y38Sa8wyBcvHnPeR5G6fyPduVFrpQ49Jy5Tf4BQz",
  "key15": "7MevDJpxkkz18Qbsc7d9qiQZEjNKF1kys7fRe66XWdFeyoktneMwb3wYm1vNvcYdXm6dco5qpGyr4HDfzTEx3xQ",
  "key16": "2SG4vQZMqRhi62Z4yS768D2iceeWsKLLiWz3w7ZKSWznzAwNVbGHX8J3ozA6FmMdbBjqaSa3KWPeFgGLzKQkqeQq",
  "key17": "3pV44nHpUnk9JtPYXL7GmGWJSPgKEmw5UQDnWab8iCHbbcF1bkCFcGQk67LG8sJeYkWdKFX8KM4GkG9SLmyzW3EW",
  "key18": "3ad1s9iuJmB5RpR4wJiiGQQy2niesUBx6n4rNEqWpHDPZst8AMYoCQamTMWNpBhnw2uyuPG4Er2YS5DdDA795Lqq",
  "key19": "hRTV1XmzKZe1gWxE3ER87KHhWF4P7A7Jd4nADT3jXs66b5mHjeGHAqa7ZqgNJLHzwkSdhzjRXhAAnSvFkhh9vrv",
  "key20": "ERHs5PQdBJPTG1sytH5N8tzYrWR6xuz74enCGdzBF4TAvDbQKktNMZ5CDJDGoTBVr4fpgYu3S9ydmZYq3nuWXsL",
  "key21": "3r9aAL5aCDztd8wL6GMMdTVFqgn8GfEE3b8EBjzRjCQeaixN6qqUjk3bty3cNLyrEDKzuYMRq3oL4fVM6gkv8TT4",
  "key22": "4UwcFThBn2rcFSCSCMQmo7SmcmavRL8YnoT4rS7we24CVvHozD2NiaBCnHPho1YWVUP7uYEAbCF1ebAaQ3BjFiz7",
  "key23": "5s36SnwaF24eR78PuKgNz7ymHyfGav7vsJ9QpEJvRsiaZHQDTJ4uztS5ZjwuLERwm5uG4ar4tQDdTi9G7EqZdpNB",
  "key24": "33A13nv5sKYMvHutajY6LdbvfkV19rq7sirLXsLwD92wFWZqS1QifFUduHwgdyiJZHw2YyxG6ibb9sB4u9xhBVgb",
  "key25": "2WeL2Ef3zVWtQDHfWJJXPQJHvvUKJz4Thi8s4tmg5ceEppmjraeS5WzWLgTPRMGfABBZChSSpjBRX3NmbB3yDsVZ",
  "key26": "21pm4psFWPVVf7xD3AAvjsstkKCN8qwTxGGinjncnvZ6JTEBgy4XM61W8Xj8qdgCmXhKBQ6DTod6P1tWQe8fTMxt",
  "key27": "NkrSSJ8Ly1nF51ntPyftJpAFXHHyGdzyearSv6U4VN5L79NgE7QF3t38TcuzfviQbf92FVsgjzVtfKkQFcaRGD9",
  "key28": "kakgRGfBAMJP5oLb9jcXcksCF4NdCHm45R4GFCBDhov6tBiyrp9G79cuZzWkJy6WX8H3yKfjVSanpH1ePd9ygZX",
  "key29": "2hGV7eBQRjyFHoWq1jPysMRzd37uo6Ljc88y64y321nKtTB4xa9C7gGKnmYvnCpSayKwqRJLYg1rWPYvYTCXCNTk",
  "key30": "2yc1j2m2wJ2zM7GdFJD7uLdXq4UAy9c4exWTCWDHjwDr9SrZevVxw7Rv1AXixzrvYfKnYbm9uoN91pt7AH4LzDbZ",
  "key31": "sU34WLD9iXxRJef8wjWTFjMASBct26ng1WD1aGxn9Y6QTzwjWYwawgkcFEczcm2Mq6WYhksAyibBjYGrDqLncSd",
  "key32": "3JXvHDDw9wQN8MY7ETMDsQf97HwsWdafmEjMP3Ze9gZ44f6qu6P7FRraRcib6c64AoYShNKktjEAjKpUNbgPpZGp",
  "key33": "3bAPC51AX55fFPh54ibYzukUvoChUCfyPTqcPJtw6Tfc5QmW4rv3Y1K7iJKLezeP1LwxMmetz7GSvxbfuXGuLHGt",
  "key34": "2itPvWBAL8E1QyuqUdwfwg8wDHKkoniqMfD6caCuD9UuZsVoW5YRxPTf8SRDJW2T9MtXzhLgyReCSeg2z8kvGkDj",
  "key35": "3cLJzetiu31AJ5vKA7DN73Jk3JY42riz4fruR1DUovZzN4TJfS5k3ezRVS1tm9qn1svmyVfAfRgSwAWGBXs2BLAN",
  "key36": "2yC1i8A3HyhYFX297oPcSTJxj4dP81uW353VCeauAfb7BdC98fWfY4Tp4Y8NnMfmpfwSA6YuwwrgWwC5pGQHZCpU",
  "key37": "4rtpYpXLjESYaRzHXiu2pRhPyTYEyDBo3Pr7A9teafR3NEq6i1fugczjSpZC9wvd2rCvAuQbFebnMYXHMDag2zFd",
  "key38": "TLvX9vokt6dWoh28iKGkRNUy7MTEqAGSyD1vtA8LTg1SPe51XuxmgCFnX8wkkKgFuvUdRhEDgTEj8rhqCoEwosv",
  "key39": "3Xov28rnVbb7xAEhjzEweVZYgsUXzUxy1vCDeZQcy31N9sqs8jiQKL3bDdkSuch67FDJdudhztjXR6mjVZFJzAdA",
  "key40": "5dxibikuwHFV4sPcM32aRQUTM57QJrZjAsmdzPf3n9dnzrXor3rt6r58oeJk3bRkeTYtTxLNir52iSLy47WCV98e",
  "key41": "5NVLR1e2tjjKPaaaPEKH2LYHffEfJKwZHrYwZaWZerz6pLLFxJKHXrEHD4dZ9Rvj7hr1LfJp8kRaqqRRoSdD7pwK",
  "key42": "2kqeWXbYvF4j4a73ooNzTu8E6TtznPRVUBNWtMFgBzTTXvqoMoHJprq5yZTY3GVk7Fabwuz2kYkqBnZc85b28mr8",
  "key43": "3uuzgoA9hWn9paHVkkMcBXvgWdqwyYh7AdW4TACgpD6qfuKGY725iVDD46qYj91V4witgzjskAaMvywn6r5LQTNm",
  "key44": "2Gxuj3MaRWzxxvZittWwooMKQxyqapsH5QGJ6e42LAEfD4MEtYMUgTwonBwEspSryBRztHfaJnPoZuptsX3FSgsZ",
  "key45": "53kpRjG7rLjDvJM675MkLRf17Qhu2CurYkrgGBfRu5rqJmntCfiVDh8yJHkHxZ2am78qGp5N23UfLRvxkxFeVpRB",
  "key46": "3mDGFY55b72v4xR3GE1oDa8oxGMyDRxWCU4omnzPvp63Px3USDSdtAGoBTWN7koDC4egcXg6qU1GZSFxnojoDBY5"
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
