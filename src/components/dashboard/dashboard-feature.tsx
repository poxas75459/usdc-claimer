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
    "3mY5ANKjtmfihLwcaR9zYaxLxY6vbAr2BgsiieZ1qRmxUTiDpshfUpLvLrx6UWyuHH381J4aCmR4pCXbDdzm2TNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pG1RBdS8P17gTTv7PnSrfqnUF4DzekmqXzVPbfqCSTHDDeoYmwkR9vjXiyLt9nmneXDYmA3TEwCi5fDmLkZnbZc",
  "key1": "22YYHo6n1L8NvArDk9h5bP2Ae7EUTnuhMnEcZxd1n5CtpafauoPEr1mkcguX212JxyuXNVGxxXuUVvNSoxGam8Cw",
  "key2": "4d7Hug4S5fetiBwhxA7cHYFMsaiMEhGB92wkbR2AnGuZP3uYY6WoZxbV2fdzLwFqUQGEytdU5xmmfSQvi1FTCqUU",
  "key3": "4R5HdrrTkCXrnvTM6PnuhdbP2GQUQciPausyxvQM1yR7F6PrtWMoUycbHnM4q8eGG36cou4BdS5kHdkCtGqfyiBg",
  "key4": "3F65PdnN5ntFaPNP6GkzW1zrnEScMks69UnjUKBgi4MaUrScv5M7TigcA8qCJH9qMtAp2mpHp9KKTDFu6YcghKcd",
  "key5": "aoGoVrWnpWZe2fxbBBQA6xSauikkPUATd9ixno46Wig9EJdpwgN9ngqCPt15UXsb9BMNEKgv8Gs63PTeXtLcVMC",
  "key6": "4JudMxS3BZqrNyGG8gNyK9tWHykQGdLh8AJFc1PE3WCCKi1NZxu3V45gdzF2KGwM9UFd3QEkZskDvjexBstvf5Nw",
  "key7": "5qppdaitXXWkq21JKk4nkeWEb9DpLVUEiFtCgV8Yx6rLv5Y65aS1QBKvFoBXGfXH9YsatCsniKFKa9pTP3HG1vfd",
  "key8": "58FgD2BiHU1B4XaKZSjJiDpaBHwJcEkxvZhWwBko2Xuf62Fbq2YMkYnW77R5Ho7iFyNF6wFGjRT7CisCoiZMifqF",
  "key9": "A6qE7D7JnAxeRqN52ec5kD6xadNsU2ABkXsyohRcdquhUvcQNKh7no7vTAaYhbqDr5QymHN5uhQH34dWUkxZBYE",
  "key10": "5Lg5Wos6VeUmdk1cFQmufkYuh2EGf7q4SgKjxNKvDv2dGBnqNJk4dq51yMDMQaBWfioKSWPhENCUEmQP3sTbjKuz",
  "key11": "2UoCnTJ3Ty7GQs4pypULZuGUT8yw2Qf4okqQMK7sENy43YfFKSe7cS6fGmE9QysJJ1gjaTQ9fhVGBwiL8EqsS7it",
  "key12": "Zm1Ca4xEpHrAjTWCv5K5jtpx7WfrEEeds166DQMEtRq4ZcPawMrAckt216WYhnTdRnvjWRJi7A7QjC7YTBr4zcU",
  "key13": "Zu9P9Q9qwPSDWvzFmy8qFxZU1YdiybpMuuY5wzSUS56QYjGjnJcHiznh4zcvgb1byPQ1EbNqWP8p4PnvRNR7TK5",
  "key14": "38PZ1uaSL9bFKa2yT4yZz4aKFhAnuMgRdT8kp1MuwcehvMpSC2HEATGt6FX7V3LuAn75p4tJQXicrfoPVshxrqac",
  "key15": "3iJv1CJ1xh5ETshZqpBcM5TGNzwBrFfL43Q4x6qanfWmac8otAZMbmfvZnebXkfrjkG4zpho8j6yx3dqo2Wert4T",
  "key16": "2LpMn866G4Uad1vkwX3GSYMDfbHZSnDJK65MM1Nz7WfV3raThkoEh4aCxDM3DtfM7EMm49Dr568JnaAtrj6avChU",
  "key17": "58PjLNMfqva2bspjN66EWZ4CYk5RBGsM48yVkyua2KjfB4HZpcjnCVwV1x3gSqQxC2w5T4EhyptyfSFWCBnL9mCf",
  "key18": "4MWL6dMeSfHaAyXoVeJMkESi9yAwDCnJvHwbKhVgFELkQ3wuxZWcdcCKeUAwLCJZh2rMXB3Z2WmA3zd4yikrsnp2",
  "key19": "2P7S8W7aSKUVDVQ5h2Nn8AFJZamRVB6JBBkCbSoYyomjboNPaTBm4zgbjo82e8hmZCw1JhgVKYa1sHg84MjuG4BB",
  "key20": "2LmdzP9vFZKZvE6mDtbE6Ysc6hNJJBmQ2BjJ4DJwfdiGYBfAd7KaVsq2jffL2zxWC2pQJA8xE5Z1uYHAsfyEsf6x",
  "key21": "4ba4pLiRHbEuchGLsLpRkE9up4Ezd31JXhaHbfKHFFdgiyYcNHLxXQMpxdxBvyZnuY3gu4MYxMiHrgf37K8Lyikn",
  "key22": "5ZVUWswL2GfLXfEeVgjbF8YPPkuW9tz12GhugYuQaCeDt9hs4sBHqSLFvp83RkDxDQHmA1MY72B4d8K1Uo6nZy25",
  "key23": "3Mn6jb7faNGy7y8KCcHmBkEWYEcFgUC9Mm1nwxMeonBCWsHcqy8LEg4yZBXEWP4wfi5nYaTtPYS2zjCDke8kkHbp",
  "key24": "5hFABwoE5rWsf1AY7PdVNEBkkxpg8iBr4KFmqy8mheDKi2hn6WTpVnL9DirzDqBmhzarRKvQDuFaZEjWVZkkTdME",
  "key25": "4XPgu6uryNKzquDdA691nvNJT1XxLEKEXWZzt7cDG1vSGwHsm7RpeLM3oZgYxDYe5JhJaMZ8S8jPe8E8wnNb8BUp",
  "key26": "GnS6hoFtGdBngQv6Z4a9W2t2MUnBirrYhbZEoGdU3i3jVziPZhNCKVwqG3APPjoLg6ZQNBgze6zTjJak7dzTyT1",
  "key27": "MXXcf2yVi2QKz7gF3PX4pxvSzwqiYx7hhfH3wyEmWxTvoUnJvHqqj17Lp4maW3BXstmtobFJHNrS9SNQvgyfFat",
  "key28": "3MAcr9f5fETsrEUix4CbHRwCQ1peoChEKBLKdotULP5q8ZBE32pmLMT4UwcnRCX5oQtaMgWs4HYEm1zw1sLh4kMk",
  "key29": "3RtgqdEQhA5C6LZSwgd6rV3zXSq9Hu7aJE3XeHhFFsXgyYmJBmxxGKKg2oteuVNfFwSJFXY5hkxbQeTG9pQcgaBn",
  "key30": "5FCRJ4b7DGSVdcCEvhUtbCmpu7h8K6WJ9z67sFzj5aWWp3J7uq4HuE5FhrdZjMEoNRJp5j2tSXprt7bz9KSUrN65",
  "key31": "3ceTYhrqKZAQPCSG2V2f3gacFz3e1djgx2GKGptQiHXUZ4NYqaoMopBpLKqbUXPKD26qM91Z52hLqzemWNSMyBHM",
  "key32": "2h9EF1S7UcZP1keBCTtojFD2SeJ9jFmP581GQExFLrZsTd3y7otUmUvoA94kWHT1T5xw1u8aNmy3GgFsDm5hiEp8"
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
