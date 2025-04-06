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
    "4FCCaNKccwj2xLAzeTjE9MWS56Xg1maUwLzfb3861j3whLUze9kEau9bB9jUNHdoAnAzTbizTbdGPb8qYN4xUvA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i2Dss6jbZnWkhKpibKsdoSELcZLKapopyR18YKwXWDEUvUAueopcQgpMsNP7A9ST2daf5BpcQmPjuY4ndz3EDMa",
  "key1": "4NaCgRctT4X5xnrMoJCAFiLguX2hnmmLzvEEqTKu7sHneX714k7riCqyFYkXrzhRjMxFnbyLK9AG1dWexGp7r2oZ",
  "key2": "4P9yAB4Xs9KuJixxTHjqHwsBq88SEQTzj2SJZrbrSAC8SCW1LKah7o7ziK8A4aiG4wmeSBGpJrpq5vriBU6c2NTt",
  "key3": "4TugKyXpLmYTRoeMYwmfEYF9PUAAQePSxPy3RwoGq2AoSNLg1PzMfagZCfsF9eNnx3iDise62A2WA88X3b3tQEpN",
  "key4": "YLpNwMi3QuDJopatRLPawXyWmWXH16QcxP1EF7c7xXK7xF4sjqAct4617E968U3AjsBfCCLPhnKLSW44fs4erMc",
  "key5": "5gS6oyTy92vdjCB7mV4DFS7EDBwtSqTWTWBbM4AGrTRCnuVrJZ2vW6PboXnnbQJ3xmMJeur3HDspjR5g6n5Ld1VP",
  "key6": "5M6EGpXrNEfSr19e7a5hkehkgCvPWjt1pRLWJrSYbrSmWDWJwCfURnwUs4TpZuEeVnZiDM5oBhqRHDZ2ZTJRuTjw",
  "key7": "4uH9TCbo7vQqrdvugJ95hqx3Z4Gjkxw4og3LfZx9vDWddEHTTNpEkoXJ8i8ggFpgVUhsMtDktn7CLW7LTdaA5PPi",
  "key8": "2GFWDTKQe6zVszZfh66CiwrVLeNJ423cRQy3tQA6tMR68XkHpNysEhQyuKLBEahA33XbHxWsya7LUenqqyz1jn5X",
  "key9": "2aRfCS9C5NXHDcHZ2MWPwKSwNF2NmSwitYCEcmFy799YSz3wPv4M8DEKi2ch9nFtLVYoYoPv4NEcWiuicM8W45av",
  "key10": "h3Defdxfh87dTzAPuwNMaR3ipAAwpVFfxhvqZA47ZzBNPD1hvEwirwiQxcZh8GYLuNeR5erLzEGrFt56SF54bJV",
  "key11": "5DQpXV1GivVXhuoKCQEjKW2Z3w8iKpmT7HqszXgfXKzTrLMw2cmRWtYitsb4xU44qWkeZJzp4Hzn1BCHuT5ZBmbg",
  "key12": "jWJi6sCNaUv58uBSsPoQdNZtmwFMnngYz7KaSAZwW81R1DDr4SHRg2J4mjMs1SC4Po3xmUnEmyBB9Bn5EcinWJs",
  "key13": "5zXLJE5UUWbeWnKmyU1sSXLJ9XYexvRT8wRN8893dM2qwQTCSNwKFBSsjNFyLKpU3R5oawMTPsgRUztvJq6ym4Kg",
  "key14": "61xjakGwN95Tt9hGeXR1EZMGkHHRQdEH3k7SDWKy8R2xCAgz2aX3MypDDASLRCBg2dk529hLJYQ7fipYHS3S4QBg",
  "key15": "53cTBnqKMW4EvcH6RKgoZAbZDNBBqSdND2gNiV1i8knqQDWd7xeHi2oUTPmtEKBfbuQ64Rk9fxFRFLJYtVweXaTL",
  "key16": "226GDZvhdeism38tenZaYSmkyb1M8SqTxd28JJLEY83J6BEB8DQPr9mbhvXX3d33N1qbfHWrGHVNPaAbEFsXci2W",
  "key17": "3US2AspgMk2v4QT1dLBw6siXDoYJEYNcCUvQpi6noT2us4JV8BFs3L4bLBwYk96kjBhqok9E4oed5YNGcJnHQMVT",
  "key18": "26TUHNn3FKFwRegyDvLvh1qyjpYYPb7MvSqLnyjsbamJWLG7G7m9VSceYaYagrJCSStPAFcuUoiAoCnUZnoE2x5h",
  "key19": "5E5mcM7qBVNminVm4T4m1wQzeoWEZhNhFu66sd7hvH9XAhpvrx9jL44gDiLnFWTgNdDEW5rj76z2bbDb3s8DGZuf",
  "key20": "57pFiWAEzh8xjzcDiKsYyGnUAUxtduY9MbATbbjqfZmsRgtRajt4gJYxm71PsP9iKMiNdKmZ8EMRvFcqakFGpyj5",
  "key21": "5a8yUvHSFY9BrgcuV2j9oz4mBB3HqqggrKkhdneFyoCTQFbjC3tYYjSgvkSLQAB2Aij1G7hkNzhdqYvMNJWiuHRk",
  "key22": "HkoPGihLWpw78Mw4AAe2DQuZyx6qdiXBZCAof3u1bT38TwMcXEWrzFEo2bWdjjpisjmCwjHbAk74SqaNwH9i8Lm",
  "key23": "2eY2AVWQZWnYE5uiRJARTxrVPfkoWcNGRyqkk96CEc6d924DQuwqtTFDYDc4AXQkd5RKWREfxbWhE6vDPdgrd5Ab",
  "key24": "HT4NYBoy3JoKX2XWhT8Q4isJokgzF5MGmkDzefgju9GnRqmrvfRzBfKFNz2GLhgydEx5xD7kFtvjTFcx1JUg9R8",
  "key25": "wCAbkuFJM5PxKJPxiiVr5ph6MEuHNx7LtfrsXaEz5zJqSwe5EKTmXn69SABu3jLHP27ptTKFKeRNKSGDGLUtNwn",
  "key26": "2jQz4EsNHDVjvQyXLDDP29wM6JxCfQAfRfrS52mrxGFDrEyzaz32ppTadpkFWaESXQouRtk63Pi2CipXo8wNaqzt",
  "key27": "5Xyra2yedYLeHWf8EkJKQTvufQbu5MDVoCjqCMYizUND1Ut1E8XWGGiCzhFY7zLAfk1jaFnoauT3TsPVsF4BvmUs",
  "key28": "42YzkcmwxPsZdcxSRrBubXh6s5AHUjDaveuAkuTHmuC54uyR9wHcUt7HStFd6FhF8mzhs6eiQ2JzLJRqWsqwxMnB",
  "key29": "2z2aow6YebcaiWp1F6SJsFkacXaXG8qTPLd2SZGtRPejhT6gb42BWKDcBStwEFrx7pyDCykB9Vq7qxTf5q8n95ij",
  "key30": "23NLepzbizwSfM7vmtgHFncp3SXbCTnJNMwwyHCXm2LAxjiQRN14xkTfpqRvYM4Wqe418ZFUqAoKXueCXBgf59z1",
  "key31": "4vssJxtZSgEf5b4Jwkhjg5bBN5d2GQn2tfomVerY7axNMw6uCgeXpWE5SVUz9srB37FuRLmTMk9TycW6pGwhDQS",
  "key32": "43hXTLaiPAXoBiE88GuKMyRgFqFT2ERUscQvnt87pHjsgqY9nuomy9JALK37uqL85bhaXmXbMNWkkBFA6i5y8PkR",
  "key33": "2TRa6LSYo71Vs7fXvaJc6FSckPLeayZJExL1Szmu5z43V3RN6jNb1sR1nXuLwFwAww6bhN9PM2kMHepj3TyDncUq",
  "key34": "4MLW6AkA2GwqtV1gyr3nDbCo9io7pbyq5mS5JpadvhzF6wQb9KQYRNc5pGR2V3ff3HnP2hZem8zsnX5AuJhb8qgi",
  "key35": "4H6ihWh9zJydvqf5QthQFxAX7YxCJ3yj7irudWbHjrGo6tTwnB2gYzajgSqNQktC84RbrkBunbgb4iVQY1C7rk4P",
  "key36": "8EWM1iJnXjFdyYhNDEv3TF9pjvqGD8w1kbiRFhhLCDh5RUdCJaAXWGHU45nsQz2g1noMMCQqsquhgSsif5WXcYv",
  "key37": "56jep3xdyMtiGZZpNDCsiQw5JEbnv8qgQWZq1LQQNT5n1nFSGfmtZAREmVxUYhDiBX5winCSvj7i1FpG7ZXZAY3Z",
  "key38": "2dEWX3MxoAEd6jrx5zER5Sq2b5fr5Vvij8N6rJJEYYQxCSgqDpn1a1i2nB3x7PADfKfdtvq9CgUjx6qwsq7PK2y6",
  "key39": "AQEzSizHvT4kuRZk4HLNBx8YKxxPfBgb3e1qyWf9KQ8KbyP8QQg9vwjQLgayLeGwokn3mEx3QNrqLdkY9JacnQv",
  "key40": "26YsbQLk4UsL4gEqWjDqSH7ixskmxeAXnGphG7ywWu95bJUdmRnUASSdavvVP1fNHNciphNmLSdPv4P4ToB1zoHU"
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
