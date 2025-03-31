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
    "3jdYT9gMCjwirMa5wnHpfyPx9UBbnE3QSYPRnGsR6JF4phkbm2fC5usoDwDMUVghWSwQ7cXjmth5hzp84JB4Xbsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65KZw37z9SQ5NYzMQsuXsAcJbR7bDcru1ec1PcD1g5icVpmrWirj3Ecuw8TWoDueEeZ1U9ijRcoXK8cxWFkuQ8mh",
  "key1": "2L4djg8e9ahrQQkoVbXSgBQ4rrrdw4LLoZ3bGQozrNu8dLLrhucxKwb2396zVz9739Kmp7c65SkdYFB5HpQF4cPW",
  "key2": "5qVDgdc7NSAucLiWYb9F3YWpK9nzPtQEGDVgcxbbNRdTFmXDJDE6Nv1PDdkYULEDjzwpjtZfqU5VurzNoD8Y9Eto",
  "key3": "2hXNNdKAdUkFSrtf2hSHh9m4eqzDz5fFgRmNJhhh6Fw5FahwAsQtwnyS7usFNZeNUBAi2yVNunVW7KikwoVsEcWp",
  "key4": "b5B22wp2GM7qLg8qA7VzpniqUf3G3MyZTewAWWM3hgAH3xPz5TaQyiD2oYAnxBYmg1T92hT19BtS81vZQKEMUPm",
  "key5": "4XRJUa2kQcQ3gSBGawCTPGJf2wzkqpfy8cz4QFDqFeZNP2BeKzKYP3z4Tw6dL7PwCg6bixpdeQFSVpfm5Nu2vDCy",
  "key6": "3KMjLqwv7eRm5FX27HXvhiNgFgWZuedo4onwGQG6E96nNVoAXm57gNZVU29MogPUwvjhqeRTHGmRWTAGKHVgryZv",
  "key7": "2rXvQ9WQLoMTALEXB7Ei1BoGUj33Wji2Uz6NWYR5EmU9d4FyrL2y2Cmwzr9K9eYLUczfSmcXuu9igZsAfZPyyRzC",
  "key8": "215WAvhykttfQCE6MifegzeNV4Tzbr3ofmF5LGYoiXgx3oEWUVKJNmf8YJkJcE4qeHnQPRZ3AYNo2HyLrQsNNvTe",
  "key9": "3RgKquNwWP7XU1sJKpw9qY1s16CbMrXkaXLgYAz65BiSMwM8FgLGKGLVDKryPHDxywGgbq3Y3N8VKmxkgnkiUkxL",
  "key10": "2nicGvtZFNeKgonHg8DVQnMRvAtbwfJN5DbZLFZkomN2guPdCg6sk1vautYJG5xZSDsD2tJGJEgWjDf2HoZdDUox",
  "key11": "4sX1qJcEqnCYxai7RwbH3vv2d9DTgDP8dZnXuSrPvRNyRzAqgDytWTXKLsNej99z74tJPLzenWk4XqBJ5sfDMEjX",
  "key12": "5a45yZvqvZJAA4bQHhaJ2Atn1wUeimmAjaP4Q9vannmLNkxr4zheLmf11zATt82iT6FhmaW8ercbS9fN6NtSeAtn",
  "key13": "3KVWYZZQj3ooqQeCSx57s9gHJ8sDk6UA5ypwqLfmsi7UvXf9cNQ4dMeYma3srGongN5AwDJUUfy6NR1e6M1DyWsQ",
  "key14": "57DE9EEZrjwkZXAD4jFmmjJhgGAZNUtsonWvb26kQHJ7xbSvQ1icPu3kXXV4CP6kR3BaQB9D6gayt4i5Mzr5QUHN",
  "key15": "3sAEBrLJYFFUBowD2CCuZJk2QUHmpuKfy4U81HC6C71zH7YTDEtp77PSpTa4nEGgxkP9LbhdQ1R5CzJW1gKa2wnR",
  "key16": "3v4DB3g1Kh2f34KcURkFgcLnfuT2uHSGjZvkovvbAxCTqNkanXNXg5bv4TM3TFNp86ARFRJMfhpiHV61cUiTReoE",
  "key17": "32znSR7oTcUd2vTTRgToiTkU4hFCQh6kQWAehG4U9P1rYfbCpep6qHg1sdsW7X5otCUGzCKnL5FQ794ke1ApLitX",
  "key18": "2YGEWdjcwXuZTL6ppqf5kB7vort1fZh5if4LRQCoQjgPdG74ivse3Auaj4WtSYUETnJtfGc46aBWvQSjVTa9Qa32",
  "key19": "4ha6SaYvxGURPdmxguGB41ErsP7nhpuKSvJNNwmqCCgPS1jHrPEavkg2EwkphqJS4Fyan3ZJLTgaArxDn2heoCHh",
  "key20": "2bWDr4aHZEFD51QGzB9n6vVMcMky245gigRgT34FqXGLWGy6qVnQRPkkKyrP87AZNcZ11e17nfdmo2wkNet7yrko",
  "key21": "5XGGJupGqNXveG477ocyFcZriYBkNhPwVDoaPtw84oRgRK5bxFNssXqJbYvo4gpvXsrQLyd85htFD7ToRrFjzyMY",
  "key22": "5Mk7xa8Hhs4C2GomTsZRDjSd83rzutd42QC7HWbt4innZMxDEq2NM2M7QZzFBoUe3pShCVNkSxt2rp4uLGKxFFeh",
  "key23": "4xLEmMei61YSPXEqBhsKfobDdByWyaJw6kDgtESjtYVXY9FvsHjVMtcVosAmaTbnFMGoaHWsmyZF1VJtxim2Hcpn",
  "key24": "4Dcuya2TKiqsChDfpqaBcEpKVtFQ3Tcjfko6gkzECyXFB4xEukFwCfbexKfHhSHBH3fHnVk8LVRUWDpxBM9PfXh4",
  "key25": "49xDsAqGTmf1HP6J4FuV3FxnG8YNgqdpwQFozbcSDTwspP8Zo9Uzp4HcoPDyjgvQJ1w6KWTuBnY4ohPuYnhtRFMG",
  "key26": "4M3VXdBNHuJqrenh1KYBp1LBENTP5rygWBfhih1djUWDaTQXgfH6XvGzfrdwmZV4ip8NgvpFx82zD89o6o2jV1fj",
  "key27": "3hdRHXEPzotfd77KNmm3VPJtHsgugQmjstwznCqxM6inVFwe79osApiJBbwzNELTjeeAZhSX1yCRdAzdajpFbNrr",
  "key28": "LGdLnLWKqQMjebD9QBNrwmkiypQxdTjozq5kNb4yd1sC4h1qxeYS8cTNPvkRv6iFExbLjPgnnxA4sAaxigULaCD",
  "key29": "29csghj3w7WWo1CDHpr4BY4NsHGsBhisb3ULD2sVbUkurjNjFNgAXN7E2kX5Ca5h87C1EcZDHJHXWhEQGdLkuyvi",
  "key30": "2DNDQtrzgNJ15zvpkMPgecd6fsowDmenjaPxJF7HTdnksnvW7mdNdp8ypKbGf5MHz7HAAQvzzprNoPtaHhGH4Gx6",
  "key31": "4AeKwkmnJ93mhhBLTRK1L9gAsTgAGY9d6wKC4v8FsHjLYGqwPEoTn3VXNNug6XvZTmB3sTMqLSS7gVanfHZ3EhMr",
  "key32": "58K5ADwNdBsR5RgqqYjUW7Yf9bpqvCzj1xYud7E5qwQh31eDx8fFnURffwN5ZSeRJGs3xaWNeKqfk63NQaPdTwmV",
  "key33": "YseQYN6vApDCjwbLCBciUm7sbe2UL58o5sKuXjPn83hLH7nZQidCLxGZM5V9Q7XaS6UtzoaY21ayd6Rg48eqeSC",
  "key34": "AUXgvz3uqd4ayeJwGkZFTSLpVGXcvCtfF1GvAKKYXG2oapXwXQV1NDZLABmoqEzREqCVX1kmg4rWfwQjsW9UKRF",
  "key35": "5qS5tmF9d1fPcjTBBpbF4zeCG9aQiWSPVkC3th7q2kqAx5qAWeE38D3TZw7sCeyJH8hnGqDx119FkxXUu8APxxq3",
  "key36": "3DAUKjPpAbcfE2gTYVwvW1HLHKPc2wUyrTMijL2yfy4mpi28VUBcr6u4N6Vu69emq2NFz2c5CbJae99qaQATrKUG",
  "key37": "KJ3HiZ3tkBX7dC6yESPQ198xaCfGDRQ6sgrJpMRPP8Twn6WSkGh3cPeP9NAqgnR5wcnPUzLcehnivbUemBj8CYc",
  "key38": "T5xwdWK2p2TvrVLSjAPX1KcyUDhZPdhFq6TCjpta1ErxLKXFGAV4EsRf2BjbtvYmk1wSqPZvh7tYp48D6zY8xnJ",
  "key39": "5wh8tV2FYkHwwrdLHKW9XYTrhAn9KVbME24jJmecyNFWrQZvpLwFoaGFbxfRhJ7xh1U5xWNb3im8D8HSPNPogF2n",
  "key40": "5ftQcDHh5DqaE3jMftiMDBWrM83rfkzMnHaF5tyLaRbERMUPEB4MDqZ8hA2LXPaHyjTiC4QnuYGzqTsbHq58qkBp",
  "key41": "QT2qECnT8nxpc8W22E1mXq3w9NbAwKVNWSJkLBW5mnw8Cnfe2FTK9AVgPb9LZRHiHFui9Ly8zE13UYgo3njGP9f"
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
