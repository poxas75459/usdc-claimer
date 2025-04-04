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
    "48m1kSgVDbtGvf92LChgSAttpVasFxufyEzRnax5QSr7rdqRnqo6E1JLXXhjVKmvRfyg8bbQmn3cTpe8VvdM3KE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FcYx8KnanVicwrnHqnAzNGVay4AeDnze7NVDDJ5T3qvHQfGYZV1P7xLLktQpHPoNw6Q1wvgcyYWPQxhcDugTRsx",
  "key1": "62fdYMpdutsdCRGQSgE7bWWz8u5FYSpv4cWQtySEYveUQspzvGP79C4hSgyDgRcuGesPaeLoetfPgyTtu2F5nVxx",
  "key2": "51RiMhWcuZPKp7RynRRdhqUw1HALaxZCkuPT3z9iuxeaAMAMW2HgRYY5jRNvLKV6hWaDdtc6ce1KaHGKCuUEApVn",
  "key3": "5c1yNHzz4SFwYj4bKiJrDAGy74NTBJE58UrAVAYdjGYCU822E1PZbbbe7ERzWyJtRcLyzh2MkAyWn2i4zqsv9peo",
  "key4": "3nQhyWprhR3PQQ9CJTnVMJKVYEUcHLboW9Yq871c7ywiLnc26Kixja4KHbg6q3M8dGFba5BR6QuaVPVCdBbEpmNb",
  "key5": "3DvpKf4vayhSwvdjPoEuRFATwpVt9Wx1hdsk2msLU3qoAJBV2TQGg9qnQFRvDp4Y1y3vefZx8uzyRpkgoc5LrCoz",
  "key6": "5U6d9oLdtAoTXXogH819u1hrFN55mC3r5KHacwLxixcP3gJi3dq6pCo9EJ37TdJL4ANJwT9yZR9Jt2ZUaFpxp9ek",
  "key7": "4mVcsxyikd3SmBs8ccoUaXxWTihLFjjDWqh9zdjVUJMMwTRAv98AffcXMgf4sRpTtYM3ixbphQ7iL9XCoCdjeNZq",
  "key8": "2viTHjyGrUL4ubxxZ7ov18LcFKttexzLfvzrf786FYDJfaxFFsfWZjJ6NHjyP5DFQJ9FaYQVUXJyrXJ7uN2EwLYY",
  "key9": "5q6EJQW1kbff1qzU7qNsQfPr3XNmkFicPLT72XNmPxZyaaL54s7TZXPrkChRyK9JLBV8LiVZykiFKNY2PRWbPPgQ",
  "key10": "4SwieYcSgtS9phpMXwob7A3SMJR7wzNmeXMU2vTAEqfTzzXUKYb9i6Rds7rRtUkcQCAnM9cdwKJUgMoAG6sTfeCW",
  "key11": "3kGZ7uEDFLLHKux98fsN9ia8SAHD7KYepfrJQChqznUcCemnkTrEBxKD2CDV1jMnaexE5TMwJJ6KRSpKtAF3VTmc",
  "key12": "2KkHaGf11EsQBrcz4eybPLHdsBw6R8BAEHEY8A9q53KAmhqUdNfKbL935PmKwAMQ33tZ8MYowcr6DKY1beDocmcQ",
  "key13": "4YjKw8GYTGL1hsWGTqA58bAJqUZVnP8xuo2b4ioHRYEGtFv2hoDHrL2cPSAwuNiZysajiA4deXh6yf1yXin9X7Y5",
  "key14": "3sTG8shJuNLtiRXKGASjfa9o6ePb1Mehz5KPHoNiNWdJubKSdAmth8Txgw4WjfhavENkWhoXcXatipqQALBi78Rj",
  "key15": "3LM2VK7fV6QZUTXHCnGa4v4yrwDQNe9gWxuii5qBS5o5JChmK9yvAFNW3iyniYyxj8cWuD2sx9nMdAtqKyR4EYcr",
  "key16": "F8hGJ7DSEAyYiFYDQiWStYsgy7hzGbnfhR4pCBAzj4p5tckRFj4g9mpyBgM778Yr1Qswe4gg9qQHPeRPpUwAPYd",
  "key17": "3JGuU1q8F4j2xr8vDZG3D66cTvrwas5tnsB9Undo6r2DfG58pT4HY2MkG4bfLy7J2V6g3JBfrX6P4kd3QpNCTE1J",
  "key18": "umMJKBvhvuL3AxM7K9PbHqfW5suuyC3fLG17dMXQkwTAY5HQqGhyHgpd2LivnhTrMFkgHkwfbr6L7HWMc6QF3k7",
  "key19": "4sYNyxLGtHuXrcXkdcmCvFmGJPz4cB3wmhGQCK85ew2JU5qeiASyGciiq1WxYxB5GKXk88QcZ3a1QsNuUBRABjto",
  "key20": "54gdjQqVerujQYKsmAGTxbXcpkoMSunK4a6LmmwR7vX1fmoLtoJGs18FrLgK9SpUrzjSKwzFx16hnfg7dpo7Gbxv",
  "key21": "51v5LZ7z2QG1XXyDiBfJo9BHauXwZsRHoT94tnde6r9PLGaTUUGQtzGcDUZzhCCHrtLxw7ZPm53q61u4e6SGzY47",
  "key22": "4gz2bZB189mL3ct79rUjrXGMGDBGCDFw6UUM9jBGwxkmPrfEusrQzSVTJdYfGgHSbUoTmZ3tim4eSeuFRRo2pQbQ",
  "key23": "4bHG6VEc56YstPdUkCvZEhRBTsjaM4zjt4X55g192UE5xgkxxCEMB5b6hZ8Gwj1MAC1qpaL3w97ZEhDmcqJtST8d",
  "key24": "AFtYxbkdLQdmid7SJ2WpBwB5cYeDvRmApyP6RPqVCDaxazLs4ESgJJMgZfqb7XKtNFRiEpnTG81VJEkYnpUeeVc",
  "key25": "2araKMGQb6q3srMsVc3pcSzafBqwFXUTtSmPSAJhVazVnNDh3APkbAFj3YGPetjV4jqwnaQwZHNqm63o7dUJaG8j",
  "key26": "3vYHQEeAJsohpXoeey4VMHaM9gP3m7kmqCg9NNrvWiYce6kRMTag7Q4n78qJSGjWzpqsaWE6PXwgW2T91AskrLgs",
  "key27": "57uCwpZDGaRjDuJtD1RAo62cggoMNfC5j6Xvv7k9rhVqfpciXpiFmEKLjkzE8KKeZwZ26NAphR9SMwZAphUic3bC",
  "key28": "3KDRvd3jojy1sLgPrGcviwcFYzdgwSPRCMrZ3rWMj5Mw3jtTuP3na7pbSZkrGtULcbjTHYn36XnKz3cKDvfhNBfB",
  "key29": "5urm17oFzwfuBreJ4qraxLVc1VxXXzb72it2ZgQqt5awwyD9PyUTnVyqFckfJJZGsDucM8ArQnB2eGaV1o2SUeK6",
  "key30": "5fjTV9LtjQpUXUWkmryzXUmQiCdNmyVwVHrEzDGnKSyrcEAW6vHFLnbFsqNcUuC4E9y2NU55esc8vQMW8TAXKk13",
  "key31": "5pJ8RgTWg6TGux9TRRRK8omT7JW8BQcS9tmx2supbpQExh3kh4VoHoUxWjWrzbb6DiiC5uAyAkXMaX1JJ2Ut813U",
  "key32": "PQkEXHVHRy4q5fvuv6LvJCzRQqCYgJ66wgXtGZ1sWnDumK2nwa2uyU1NDAb7zyz5V5o1KkboD6Xy2HKzk7B3Cev",
  "key33": "45Yw5T6fLhFaZtdk6dYwV9LnAfK3SwmxgmtDn4kXsexvhppa86CLiJjPhjifVSNoun4mFsscXkmiMk3ZjmV9dAgQ",
  "key34": "4Sn19jRdwswwzEuWwKch8YXAxmFHCiUpK317S6JwTrEjXYzo4a4RWkNKuprxRaq4dy1GXQZazNw74kkHs7x8BhoW",
  "key35": "4KZzS8tU2JbuN9pJC9ex5yRZgC8FQ5kL1UgY56ZXydTCyxEfApxjPhmzRWrnBdGgnkGiGUT5TJXiB5n7u7f9Lum7",
  "key36": "4mRPJyGraK8tFVV6qoDvumQQRMHxxmHUcM5rtXdv75HAqZYx8j7fWYwsDsDZPDm8hbSweetBXf6za3QBVUscS5UT",
  "key37": "5y6Fzc4ENV58vmR7fVugzYePssQED5LBtsscPPQ5K2hCrfAjfe37HGq3LXhoUgNvqZFrEtnETmnGNEfHNEjh1q57",
  "key38": "2wHKffG2T3St6t23ugmjR3VqmrVAWsEndex9h6S3SErQchB6vAdT99X9ztfJ8QoK2UBDpAm84et6Nn1j7gp3aXyR",
  "key39": "31fWo82a9Vgo4iCWyoVQG1BgoKihbD7GuZgtkt8Ab73o67xZDdiyu2ZUwi7Lfe1qbkbMRm6jgwEx3Hns9VhJ4CFu",
  "key40": "3uM7o9EEiaNxKjq2fFR11RBGvScdHAMD5xks9qfEYuAEPbcMkTgmpYHypHS8b3ibj6J1peiYQ3X9iNdV51muuQfV",
  "key41": "CrNjZQdhJWvKJ1R6h3odpUZ2xJy567ZAegZ8yMsqwhfcjkW1wFtTxWyfCM3sPqj14KebAFdq9mnkQYyeZqHsiLP",
  "key42": "G6StVsw5jwWZwF7GbWfnGVaj8XMs5iuzqFyXyGqMDQSG6vcb148c2UFHC18yCk8zT28LWYR23pGb1rTXkhoUPaV",
  "key43": "5BxosF9bngjZhNL9diT68hGQZzQKdE25kmJ8Pvsnf6b1cmsDwrrkYSs7RbLS5nVusBvntbZScZGsokjFegk27t9e",
  "key44": "2jr3veVU6uRTjm28RcsFTP6PzZEtKeWX2uWCkUsBnyugLwEN65NAJ6QueBLCNFXP57SSczCbosUs7ECv8kmmCEmF",
  "key45": "RcGBp6CNm3gPjTtdm5LkQFMESBPfKab6mnf6TiSuicBAvBwUfRbXimyLJnvMdH26LRxLhrCFb5aVUhRoumr7C9k",
  "key46": "4hNWBiUUDaTc9tffeLPpjbXZXVHmsdXHrP3imPggL1t5EQ11bhZqe9Q3zhnv22DRoogD5DZLbe7Y47RSkYWu1U7y",
  "key47": "qr367m2WDkEfLuMwQQXiXDK6MXMwH7qtPC5B6XRPUiWJm89StNc7xhVoiESC6V4H88dEdSiSmHWzvQ4evcdwgqg"
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
