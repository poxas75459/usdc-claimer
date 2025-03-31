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
    "33keSxtqGJKHjzK52W1R1EogNANjeNr6QPN3pEQ3MWGswQD8gGJGX1zRSc5sDFXBEyEsmJcHf2fEfVfoK9LHGgyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bfkoJQS7GFWo2BDjSGEzqzJ3WaYPcHJ2bTtD1BmkXCYqGtD5pRJ3542jArbK2kim2pnbrNSTYgfzTk5S18hCRKH",
  "key1": "wGrJ56NuRcAtoMwQMThacXApWntNBKyFpeYTUozfik3XFEbqfWVigN6tagzhasBVnwc9A29CuhmX1o15mxwjvSf",
  "key2": "44MjF1uNETyuXySA273q7GaDf5YHMBN6DAdhYgQJmUMvoY7wQNvdWMs5ZiAnkesNsL6w5chfZwJkdqciKAx38Aod",
  "key3": "5FPPdx754CMWgRY43fM3ikMBN47kUv1gXJot8gEVQ1EdzVX99xoAGv6ErPDzLLjbtTRi6fmEgNKc6zoPrTVy8cqF",
  "key4": "4CNx6Dx35EP835gkN3d91Eh6JgggcvNewHrnKbiewUYH3k8mVNLubUji71DicFcRDmc6bvkT3BbiNeHuGvXAmY5r",
  "key5": "2SPiKe2sJiiYjjEwJVpii3ofqETC9vhQtzVi4sBwPa8eL7j9qmRdMVEBMiFBVpaeNbAUkJfZB5w4yrEeCFhCmv7G",
  "key6": "5mJb4aWJ5S6PWRzbe8gZUjANXM7ukJ1DAmSRC67WfynKv4bd8AFL4Hr1Ud8Ysz3kRMCkiVJKZ33aWXFS9epZGgX4",
  "key7": "49MGaESqr8ZbPHjtRcX9DtQzNXBZF1HJ4qqSfy2YGq2L4VTwas7baCRHtHoBJK1hHyAEQwybCmbFx83S7MVSGj6p",
  "key8": "We5mYhRfV3ufACF9TodT6rx7guH4zF9mgrC9icCHWHiHkwPwLhPjGHw1u5Di9wVjhct5gqyrPMKncRJiwLioqeh",
  "key9": "3MdiNjVcCb1f8UegwH7wgoZxSY6DiTwkPWFco52ka8F1eRQmCVT2qVn9qG1NEiu4EsuzKhswgDbFZjBNanmVKE3s",
  "key10": "4aFwWRBtwXonD2zeny1grwKhaeCmnVpYNufAPgXsxAKPXyPR6GJWDb9vSMHHW27CTS44U7gJs7R3Dx9PWo3bD54Q",
  "key11": "2fqBAdmz9Js1o3Y4hSNPLRTNX7MTviaBvf8Yv7S8dSh9uzrT89xuBgGKBJr1r2MgAGzrBxPicFHqRwW6DVAUTdAf",
  "key12": "38sDoFjiE7hXuykDnMCxwJrbhXSZLe652y4MYsAy9WcfSbeAzMD1NctFcGnvRQ1xEEEHwtcS2kMFo86wrwViawLJ",
  "key13": "3qheoXc7vqxTtdZ6ueDCWeNPfCZtWBJojweNBGqyBrU1fs31y8AzQoBPpUQkQh9Wm7WCRmxgECKT5qNcmd2k5MJo",
  "key14": "5n5humHR827agApDXBM2sMJiCAurQUDKkeJDmF8UZdj8zy9MJniJUh4zf5ERRCMHaTwbKafa1Eq1yinVV1oBog1w",
  "key15": "3MjdM787HLdF9PV3RCxsruy4gYL1YN5PauqQjijLjrC2ZX21DUJWWrRq7Kj7w3xvAxE4Z7bBEedHDedg4rtgGBdv",
  "key16": "4yeyyToauaY4Z4kphsThsgmfTDc8p4U3kuUAXAHE3yM6aTaHwAe73t5YzEv1Y9VUVAEnMCJ6SvSLPdPrMLcn139E",
  "key17": "53QHmSCTsM4AFMxaHc9ADSC8gn5DWcaQxP6NJtFWmWqq2Ka2bZ2vySVn8EKdKs5Zroy1LxgeAxTewo7Ro2bts9Az",
  "key18": "jJ7SY5ms2HfHqw2zwiCUX9RP3a6hnHy68fu6fBc7oaDDViUTknR5MPTBF7kXJVCopWT1tLuuKt6MRYjJEwKj84f",
  "key19": "5MMznupfE3LCiEy5ib9ncUwa7mZ1EegW3JrYGreTKAiGS6Jk2V515eZ1rhvWPeBJy89xo4LpfYDkswTc8D1EtA6c",
  "key20": "2E9YGJumnfbkULNuqksCWV9FSCDyFCaBkRPvqV53ebjYUNFE6xKUBS7TyS8C8ujDMYzj4ihabARoHjfNvx3WSPbD",
  "key21": "5Kh4Wwg4vY7gRE1PJFMLbhmHS7Jd8JTwQf8vbGvxT6w1ypqMN3dzPkXMjN1akYgkNwp96TxTEvcNvetpvuMxWo24",
  "key22": "2jDFhfhce1wiWJQmfSoPk9yqa5DRsBetVd97vW5G1YgJUWj77rttRMeevhAT6kyNWHHphRGLEC5eZT4qjSCbKf9s",
  "key23": "4at21Bxo5JKLrteKE6dMguLaCRTN8BLCGgw9QuTVMHnpVZ7HLD5SZUFXHbfz1ea8vusLzAN5otYa8Um8SsRLVEbD",
  "key24": "4yoME4i2Jxffrf4pd64QNde5toJe3QrJQHt119MdKViNdX8dwrJyi4N9jinAZDfKmVSgr972TxbU17ANQEdpYuT4",
  "key25": "2Lvo5SEoE5Mrg2DjGaarrX9mUhKTijiGghU8YZBJZ2ZYLA9UBVGgSyXzgxH82oh71JghKFf9eaXAKYkwCwLB7u8X",
  "key26": "9TTsShcyMgf3UC8LD2Nv3n658jbySUKY5wRdNVhKrawt4NpTPDj34V3KJN42Hzd6wwGg6c4pxkjJnuoBqBC3ZdN",
  "key27": "29qbWkYjgJjqfe8XRoYThr2tS6M9dfQEhz3qy5Uuo9fotodakznJv2x1pLYz54tWfwvnbBChLyHGQdjQ6A9VtNPN",
  "key28": "59BNkwq6bNHW8aYXbUL24kn8bVRUerfiLEV1xjeo2yTGnD6DrmpP1NNaLYvnRZeNtkFNp9qy6PDfLa7nQJmhwLJK",
  "key29": "3UGhJmNXVSUtVfaNEPgUL3815kPYcAYCEEKEiqs4SPZS9a2VFQL2SaHf5iG2GYSz5TWtb9aGzh8CDdqtbAFj82bq",
  "key30": "M48uNd9CUD14TwS9RbuGv8YX5LyJHk4s92Drn6pGrwJAhusj8Fov7D5a7tTaAH9k9eRvah6XxThTaL6eRHWybvQ",
  "key31": "2r2ZAFiCVzCx1sA1iXcX9mNXKGVCC9dm2hjraeeRMuuLz5dQPF51wz34sNHAG3fQpMff48aeLN9QKsfRmm1k8oR",
  "key32": "51z8Zvcm3WW7ujXq72rCe2qrAxxtwBZEJwanfYVC8uzYt8DQGfgMTMWzekDcsDwYGtYsBDyqTnaqvoWgJVRJCGQ5",
  "key33": "5MLMYJcHugrnJWtyfcUnH4juZfi9YDDGDBMsXDm1qfsg1y8ti5C7hnULvobVd6TmjgKWzFr7nvgAWF3tyEY4FRoa",
  "key34": "31L3k2PCLGqp9qTFie77sXyz6QXBnmNPS2WEvoYQLuNbkXGy8e2Yo9SLm53yMf5H9DPJfLwajnNk7xohd59deuA3",
  "key35": "hPMiPm3VKBexWnWRkfapkM9hGYkucdkJKko73vfm3bLhSWiPjY4pjRaXTV6CsBSsJNh4NRkQqeYmT6XjM9xC7fh"
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
