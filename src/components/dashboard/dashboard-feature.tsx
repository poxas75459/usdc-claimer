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
    "614sXWmqbsCv4GxHo6ZBVbMzfSzoKjyLUyL63n14S1eTsHsvqZvaGfimKSzQ5mPkuhRfLLms273CXVnxizxr9QTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z5TGNdgyG7gCXpicuyMWPean4MeBHrK9PrsfSEz82iiCSTYqcJyF2ZtgL586XxvbrXxPosKsoMBAtMfMmZqQrKd",
  "key1": "u78LigTSiUCvMxN1s36UnQHQW5XvGRFmRyvt1qi3fLuBwBU8NDgKgZxD4pXLNdQbFjb2xjs19emppw8grCq2mJf",
  "key2": "2XRvQdEANsqQmSBMqWrHSsMZMoMN5N1erdAThK94CukXnhKzFHQPAKWUopWMLn6nifs76m8WqGxGjZyd6ybX35Ew",
  "key3": "4Y1vd8wREhqw4Bi43H6Y1DmruYsyyBLWps3AanY1L5BptM61mvxnDrxMV8CvV1N7XAB5ApXFUiGWHWdBqN2Zyg4u",
  "key4": "4YrBQ1JfFVW1Sc7rvUQsiuzokZop4bctRZeVzCA4WAwLXDhQMtkg1GmyXUxhiiGpZgZVqeAwhcCHJrAF1gGZVkhQ",
  "key5": "3Z61ajYGwjjLoVDV87eYPGNN6mXTgmGMqKYwA5DEDai1swTVK9pupX53JyxkkRZFi1F9PKnPX2kH78R2EJ9M2w3b",
  "key6": "JNJG26KQ1VbFQv8ChwKY2oQ7t6YKuiWdK3pwF5vbkJHYhECoJ9oxKABvDe6AzHzBWQ3J4FixwCTsMthjLW6uMt2",
  "key7": "5hCa7dLm8emwqNiBd8h7gbN31RroZvB6v9aaRPAHo954W7Xozf9BmN5xP9ARkRLXTCJEJpUeRj7xZXh74WDBCXvT",
  "key8": "2k3XPmFMx1yEWPeQj9bdU8fSU6hdodgjRKA7erkjoigdKoSTkT488g54ST1yrjmdeDu1eWXBxCaPqXrdnEiL2eBU",
  "key9": "37mKLACy9c4JkPRtCBNUtb7WJduEy7Mjf29JTqjZ69vQeuh2Sf9hVvyr7Nw21jT29sCTTEk1CCTynQHYvaH8Xrhw",
  "key10": "4HpRUw2vkqDK9LdsRv1zzoXoKkj4jof8KsL86bzYxhPtqDVXWsbFVbNb9SeHmb6iGXnM6Em48LnRxekhfLEHb2h8",
  "key11": "33Q47qx3VgqAwaYW21UnfXtqXTMJeqcJtwebP2whexL7TWkpoD2tKxBMUCW3guFU6UeTZPYcsTT5ekUc54nC42Cc",
  "key12": "jCmHeNWmxRyYYDsHQoo1J7WG813tEEyWSdpHgm7kZWQujqHYzpzgUpNMBF6xM2gMbwmacNBydxgXTWCDPHJ68r1",
  "key13": "4icdSi92t6u42GGoRt1XjVLBGXzkwbankDRSyJTbZnKz8U6kYWGPupyUYproRQGXdYZ7AoghwqLXEi9pGLgKNBWv",
  "key14": "9iovdfgAfGBPdTNbqvu9ZM6bJHY7QgE19PMDytFNvXfVcGyubyKypp3QY83p6YrZKitWbYGzTsDMF1t5oEEBdrL",
  "key15": "3svsdjBqihjaMCuz4PbJs6LP9mPAHFuaFUw1gQqcKQw6bNkG45XKVJ1HuwvYjzVPgBUpdmvk3uJY3cVgN1i1EJ1",
  "key16": "2rqw7pwM4AXWGJ8HUPYCT2FueMZeyLcu9CDWGejWHPosWZbG5H62ConaBhsKDytMykELTxfB8wmE1KUyZziLiBQa",
  "key17": "48jsZPEoCRDeSrXMVbArDXTW4bGEtUMYFqvezTGSXmxR7E3syBZdDiQrhBdXgH7koknnVdpcBfjMmDA5K8B3ezsE",
  "key18": "SxAc2GhBimd3cdhpTJKjK93KKiGWyypGDdgVJZZCuGpc8XVqSR91wQA1oe48uq1xWHMn9yVwYgojyH1YXauJJeC",
  "key19": "5HvkufzkYhKEEk9KyUGoDXLm6a18xdbiMmnYnjKZPPac2i2P2M9nQwn4Y21w5zc7Hc26U6s74wz1wztuJYZnoPzu",
  "key20": "5puBQaWnJsYErkkMNFo6ZmVivWbCwoVgCKhsbbA8FAPjcxSUuHkuwAvyxNuP14qi6jrmmcjh6uHHR2t5tDpTbfTa",
  "key21": "2b18MLGWf57mzS6LRArEL4RK8aT6UHDVe2c5tHwEGhdWo3ejoGZydbgNhZ9NkyH5Yx1hrzPz1WNj2FWB4SB5bXga",
  "key22": "4c39ipypdoxZpYhGC9vGRx9mxtmEVbYi3zMPkc8tvWFeWHatzf1XQCY3BYkj8JpPnVPcHuXg3koUdzY6n83i46XU",
  "key23": "wu5yHo4RuFY9Nyk66aNo9aj1xsDKhnH6nKE7DmJzLpAaJ2EYYQhyUTuuKyDUTaHyW6y31qJtjnzTabZ5cpqfMVZ",
  "key24": "3YKAhptKDbygcDyojUwa7tWfLsosmH3EiRPf28Brt2WFXgsRNhZ8N4mS7Fnw9c9Gpk5yRTRywP9BrPNRdrwcp64D",
  "key25": "3AGB7BDJRDB14nUgUWZiMdzBarjGbBnh82HpFXTY8ad46VGbMEADe7vyr7BycAcDksot8a9fqC12u6VMu8LtX7Ey",
  "key26": "2WNFseLCydoDBfYLN9pLNNoqUCiKg87WSKSjT3by8HRUTBqeXpLsk6DnUDC9SzGmoiZnaYbxTGvK8sN7S88aeCZZ",
  "key27": "5F3aTQ9W8pPwzZqGRWU3saN89jG58hvi8HccqzLAQtHLUaVSz2Wh973VRjSVt86ux1atzSoXM4DiA3jTW7LXCEh1",
  "key28": "3UrRHQnYrgf1nXX6LocgmzwGdrMn1LHfGpwpgtMEdKh82iqZ8Siyz7hcxgsDfTKHP5mU8yni8thKPtd7nUMbnM73",
  "key29": "r67nCmpJSsHVhYCprGyp8vQiyHktw3x4ifMRsgFJsYd9Xp5ohGJ179ekpPk9Vn3bViS3ArPnJpVEGMyD5TpcNPR",
  "key30": "5coiSamkQjZGXFaqhRezc3tv75wKRCA6UfcdufaZ2Qjcj1W36qtWjPZgc4A6JE92t5gHnWDXdWjKkF7bMZYdinLE",
  "key31": "5tEbnwfNeRuxsDMZEiJXfdnVEhGcN1h2WQdDVXrq68vfcjaHXJvDhHGRhvtEgstdkxpPp8vDusauPHvDjcagMbrh",
  "key32": "22rLM9YjN9xAufHtkXfpuuksYQC61AYDdkPLEsBNBaK6bPaP7W1GtHRxhbvbYMptqwJN1RbMaLaF4cP24sF9VSho",
  "key33": "3UnH4m15gVh1Pta25TY1kA3CBH7iGVsx7Dqug6aN2d3aSxKLm6H95e4Xfbshymg7F5Skr6UYnhtFjXqmo8aTytN1",
  "key34": "uUqxvbvVhv8qgc27LvXgk1uHu7yR8t5mXtzZgDnEd2AW8wxoqSeMSHVu9Y9kwLZs4CmtYHsqhL8ZyYTb7dMnDjG",
  "key35": "64H2gQHxG4vvKJW8928Z8UBdNJEKFfH9S3SGgZqzJyz5En9vYSwxZGkAG9EAdz58fo673Kn5uhWjG3ot8ckSLzBW"
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
