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
    "VYqkKSba7X8uSUvcHsq7HMXmioxx8Jkn1FrBE74VWR7dMVnG5FYyA4MwyNd3dgEYY42R6URLsnwSYg4UmJRTwU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "283dgTzj7WxvkeUkxe7eAkdxJPw7dRGfW7vewZ7mWpLeAf7JZeJGfQYLBaK1t3LfMcCcuDaHg5fd6KH3SbTRNduG",
  "key1": "i4P6EGSoJVz1YADF21DmEUnsrdPnKbtpkQjwQUJ75wqvjtfYhYceBZ2Qi7LJiJzQ2V2sbxsoENcS4emFVpzK3t2",
  "key2": "3Y7FNzDiR6hqWpiwq6LfryQjLwiP4EHQBdqD6beHkYUdF5c1Bp9Zdmq3cbUoBHHxK2UgRih69bpKf418oHgKSAcp",
  "key3": "3tit4BTfrVPFpcJb6wTr9rtbFiQusiTHZ6EB5F9FAqxPHxpuFerh7793tXbXWBQHBqRnfUkHYRndSWWb3enjMfqc",
  "key4": "QRUtq2WTQ9mcxdbDGZ5WFcGH29c1dsdzz3PWtV5fnk72ACd9oAS1DSMsFTnWoXLhx7ojuCYPANXcTcBCkBbyW3F",
  "key5": "2sGYzwoPAgVzhDW8wEcG4rcZfSrxBxgnuVKuJNxJGcvhaT6ovHPz6TGjZrZ6sLufHnA7CEuK637rX6hq8pk6heH3",
  "key6": "ZfKMB1MeVfRs6PqKnury3stc8zgQ62tvmGjEnP4tfsFSbiNUzUDyHwf4sMkWa8QcVe5FRsdUxogKWPgK9qDjyLt",
  "key7": "dUqosdviMEHoNCxyYffmGxSq4QEBfVAQgWVAu3HTBTJZHSkL4UeotVGGvwBiUJDcWSNB3PiVVX9fF6saW7KQEuY",
  "key8": "44Teyp6YcE66f7y95wurXxixrw4Q66FkaqohmsH26odqKt7WU1G7hgZ4RLXJYjfbPEuzWgA2axhHGKj1aHqiEYyh",
  "key9": "3qtn4ir833JCCqhH4QCjaN5GPkjEN8gcHgWC3Ps1jhRQ7qDrKXYXHaKfZYGbkCmxYtsracgHLbHS2DVJDW1M1oHp",
  "key10": "48WjkJfLUudEN2SjEsFyugFZKujkT7scPrP4NQybKatsaW6pXewpGkru6VZvVZR7caLdsxeVAYq67MCQsDMpz5bL",
  "key11": "4nyvM28WqPCqmVvPRLEE6whTbebyG2UWzUUPKGNYRxybc2ZuzphfDT3oc4ECYg8iMsbGEd37tptAaNFVsCeGp2oK",
  "key12": "5kABFTDz2fgh55LML9tFxfbdtQKRZdY57xNzybcykpaBAqNVEUCQPLe7oNw9djUMwSHVwzQHNvXFffKzK9ToF3t5",
  "key13": "4kGBdxjqdrXm6Ebgg82ok9gZFUKtsUk9zQZgYZEQy6s5hd81B5ZvTzKWaH6h8sp46kGAuRHotfNhPuCm8u1ALxhD",
  "key14": "65EBoGW5LoWg1EsYFVdasdQYuhsEBAXeqZg4B8NSxNQWALk1EVS6g9kURAxeh7JZBpZycriwKeBwEB6oCDzynxnr",
  "key15": "3LVKhBsCpktBKHM16fJc81Z2zZ7G4kCQVCczGdkwrhjwxhznGLyD9Ho7aUKajmneqBD3FvGHJmd6hCJptqMeoDVc",
  "key16": "uGaQvR84wP5Cu5P1FPW9S56rRBQyXXFbMsxJdDdLMLqhuUP8grkxucZTbusWZSmgi8tGgWNtyNwtbUTtSvQpJW8",
  "key17": "5ExDcHSP8TsKxqHfaT7jsHoQMAj5veG7TCxWeAkQJEHGCrbtqHFTTF4k793MbQxHU5pN33cVY5kg3pcU5ozbZ8UK",
  "key18": "2CKhv81FeGrBsBckmFh9hjjHpND2HcUEN9UspoFtSGKnyqVLzoxRyaG7zKxRve2nHUAkUBZ4tuYn3iUASRnRvbEp",
  "key19": "3wpfoadv7512LDw6gVYTaT9reVGk7ZRrojmvSmG2MT7GHXWTUvHibpfbErDPs9xkqJG1pmpUtLRJYgtdgVgfZmZa",
  "key20": "5JgpMdhZA38kWtA1AvnhPAdfzhjbNVDQhaBKc5KWMUXiQwPVgrYQWwqioNzMDRR2i8JK1hjbk6NbG2hRREaxJiYc",
  "key21": "49nDCunENP63Wx2q1zEWLhLLX5L2b4yUpYDXJi1TtEkYdJuSqNaAvPyn44TTkXnfPGc62d4DmwMNpVysukkNoBBG",
  "key22": "3a18SFmxoG3ACoA5yAthQVsoDt7PNRi1KBbVN8TGxJUAPPS7xW9bd1gZDcKeobbfLQpRGnCRhKj5kKq1pc3kT2qZ",
  "key23": "4aDKbXX9uK6yAYNASxFrgJZ1qXJxz14dkC87njR1rCkNLCRnMLRhJmeJiQzD3ZytTRD8qrKf6kVkE4sZHgbA1bR4",
  "key24": "2KiX5keWmL6uJwUuQT4kBak5A7C6dZfxnqhGBjDMURvHpVMeZCijoNvVjaGyDXeogs3ojHZnBs4upCAmBxjvv9DQ",
  "key25": "4yxCFvTGjbE3TXEv9u7Fd2GY9FEjFm8A7vSQYUAvHHmWtLeLpgrVNWPZnKMSPS4vsykPtdDP8m3ghEB2vMSQzjKE",
  "key26": "4WiVFbfVaCvcLABJ32eLp4DUC6pP1RnFBNpGszExtPwzcSDyBtmyNj88AotncvNt8gSYFKBEwsSiCBpZy4JHp2DU",
  "key27": "5nJ6NXZMebbcrr5au6wmNZrviMdeMAWeXbb1cc9yDa2TBBu1iWUQYHf8mGwzALUeETZUnY5z6XDeLykYqjuaS77Z",
  "key28": "JmoRLLdFme7VMMkHKVdN5y5S88vGJrHk7L32qdVm79jJqMWJYsj3h5Zh3Sv8wM1LWozvhoboy8ybWCx8At1ToHd",
  "key29": "HM7h7SN22UT1QSvSMuhqkptCw1WSBEGYmepx8g4MAmTPrbpP2gV2RpWb3G3anyc8WKEzd1szg92gFwFFyT36qFX",
  "key30": "5MXgVXb7fZFayXRw8MMGAYjwWoTNSVYSvT5ACV7HLu6XCFSDv1H4ndkotbvftGUeHURdhLD2vbGSeTYyJTCG1TSB",
  "key31": "22KvmJeByir6s87d8yzvchmZ9d756TUZZa8qNgnxud7v5mfLHRimjKZJPMytkgEV2SqMn8Rgk5bucimVYoRvPgec",
  "key32": "25bY7qEpFiwt46BrVmYhxKXLHwuPeCaMETJMQBz6vCkw9iFtTN33prNDr589cVaRMRg2edsnF1JkNG8qTZ1w2Xtr",
  "key33": "62arV8Qhyzcc6zwzRj6LZ5sFtYsgacDYdFNWwzPhooqSr8AVq2zwVzCXmJpHUjDvU5nvfMGLY5V8nYrd1yF8BGDL",
  "key34": "5uY8ZKEwMJTYVLfwGpZegJRodxsnBKE7gN4Rcrr5jc2zefuiEHLM4xpyD26QSScmJcUaJzw8Zi9CWZyRZzH2P1bj",
  "key35": "qUMVKiuEp9pf7Ca8d2ddbu9yEhEupLevzRNqZ7WcvuVCPq86HFM458UW37nFd36zcuQHUzw6JXxasaBsS4CQjdW",
  "key36": "2ue7WVKSWna3AZU18Vcr71YFxjmdenQva6QEqBKi2tFJ96T8sMqhzbTKdksnMyDZEK2AHRyueHLKPMWvAipWkWGv",
  "key37": "uC1TeDrLXR9EcFvQyRULWBAsCEnQbxa59h5Pcosm9qnfqtRvDUP5y379craVVnUQfG3Wwa7CTc6cFWbgt2CjXqW",
  "key38": "2M44CGobfsxQUYEBuYuPAKGChZDxhA6Wkb7Y61T9wVVdNEXkMx7mWBucERGR8H2cekZ4XLPaLBpc5MZUYSQ5s8Hm",
  "key39": "2bDTNpi4xHvQdoSBB2erdKF2LhEuSSaz9xxV9E3VkoT2EmLP9QGSFjkS2Vq6Ljkjk11U8u9jKw7FyNWgnCzSF2qv",
  "key40": "36Pnd2jW7rScxms7v4n4XV5gSEUpVbnW77ktpJ5oLirJGiAwYyf8Tb3FHvjiWYA2YkCGAKAJmRgNYTopDboPJbxi",
  "key41": "4yJbKpFGMp7x5uokKW4g6neA8ifGmQdytbhnCLA8xzACooMy52FJrSHw9mH6y67P9Cxn54LnEuW1VzGooP3NNMeH",
  "key42": "A5r5Qs7o8Zf6RqqM1mFr5ncDjy2SxW3DFkba8GZd41WpfwmCdhT7c8XGZ6sYitWhnWftLpDGvSw41mMkyqsgy69",
  "key43": "35qzLBGELpwhKnQEnrfHeJ7JL3XyeY9jLre6XzvN1h5Qu2ppbApvEAjFytYSj4V7GLmyKswanCvteDWGb7g4YH9P",
  "key44": "T72V9ykUJqQjAQHHdyrAVAZzHXcgkg8XXKuT5jmwJtjg9qs5cdNrJS7bzdQZPSsHCs8cBHqEWrZbyGdpabNpWpw"
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
