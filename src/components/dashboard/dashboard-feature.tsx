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
    "2N3wTd8gAaepwEppHxRPiLzqueNjgj4MXLiP5evst72o6WcWQ65fQUQo59izXC3T5z4MPkor5J6eaJx3mMZSMuhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5euA5uKNN3eQtM86UhANjBTMi9HDzatWP8feFHPy4DMY3x4D1ueJqjEyZNG68tgWrBp3dnYEFYLp7Xh4KUc9DQY4",
  "key1": "WT6KzuaA7tgLeasp5RQew24WXCU2GvKK7rhXxGiSad61xMeYeMBeCy8BKTnZhA9gLDpqmu5rEQMyuUiYpTGuBK6",
  "key2": "4kFWNqpVbtehYV2ufWRFSfzUoCyFqB2egq7kxdLd5mUovT6f2pZJZW43nupvCi6mzj4Wxyu7pjKxGxttW29hwR7s",
  "key3": "4xh5H3W6kHDKf6z4V1eN25fVieMTC3ndkeBBSY3oQkzNDam8YNgowb3VJVVrH9y82P5TK9cJAF5i7cr5LwvzQYzo",
  "key4": "csUjLpubwywQAi5mqtpCn2dZLTg9nwyip66Mb4FfTrw8v59o2yKPDRVUVizkRrPCwedsR9RcdTbV7MroLUADY2K",
  "key5": "4CuVCHZrw1V4NSqjuZy2cPMENX7p42vgU6dmtfwkAjMUaF1GFsjx57XFzELQw23QHjErhHpBFZ7RtReqkVQqr1Tx",
  "key6": "4PW8ShaWhzjo2AdwoF5bN1C9PXjrnMEqVv4Berqbjcq5cNWCSyrndp3tB8j4svhh2B1pLcy9p6Cb6y88kNM7Vjvt",
  "key7": "RSotpHScnLXaBKpSg2MZvicxYHGLjyPBVDVfoHGASi4Tsfu6WZD7L6tkA51HSHU81UwVU3NQ6Af1YuHYc8T9N1V",
  "key8": "3ZiEwjhp3MQrPBoUz6g4n6fdip52NvpbhqdmE3ZkAq6ZoYkN3ZQJsgoT4AoU5qBFGMbY5tCk3pwK2ZmBRQ1wYYMQ",
  "key9": "3iVWT5CoUpVzVRmXytgMNamfpm11pASJqnWCWPXabSYReiaP8Eto5d5kjZ5pZL4tBZJwvMCeExXF6hDPhrauVHTP",
  "key10": "2D2djfSArx4HGF9awg6foxmVPADACnPt9TmYZq7aT83HNok7mNySAZifFeEdWYgV13zuRzottUHW6wT3dXqS1owN",
  "key11": "47ns4ATeVwcPxvrvEzPq4Ax1JpSUhjatucLsJR46q4gELTHQZWMYDQjdD39NqqotTbhyBmkFgnHhvaA2svCUngJt",
  "key12": "3ANLhFdPpqhr54HDUXQPFi6kuFK1zeExbmmHHEsmFH64ZiBqeYBCbt32hRvefiQmZ4bVGF8bWx2XqG7fnWDcVEBp",
  "key13": "56a4hPig17gRwpLxMjYTbcwdKsfezp1vZE7DMd9bHR5P2dmxjKXT3TKgtbfLpNX1vFHoQ5oGGBWZgLeuremb3hJH",
  "key14": "63APPsmPALq8TNHkyeHYzw6Ks1FsQzoBgDW3hfxfFhvBrZ4VKSaHFWcSYiDzKmb3NpULXcW1R9WBfnWgk4uTDAvx",
  "key15": "665XqRnwn8hYCoV5DpeEmjmypnoVyKhvFDjaCCxoxoMBELh273NNGvtu2NN2311PyFFzaGahMujLa3Tunnz1Zgfk",
  "key16": "4qj5pwXNg37K7xqwCxfxsmusE4fEBye9YSjjgVRUwQHBbbRuueWpuYM2QUdHv3jFcNBZX4jcF2oERVXEgBwnJGpT",
  "key17": "5bcssJFnmxuAxrDf1Co5Fi6kMBgubXV9APcV8Ns3XpmH8TgnvMCrTMePoJoTNRRF4UYJG8EFAT5x9mkqWXZ4zKsC",
  "key18": "5LhKAdjpNNyw9ny58j5WW5ykJYXed38moMQZ88Ln9UShc3BGkkzzkQGYiiDQdqwj6WP19SDJsyu6hesbzgdNTmwj",
  "key19": "hpTE7XPEhHKcp79iV6mzpvkZnYnvUS8uqmxqjp79L2udnDGA4vnrZYTtT8pGDGsHZAJCZ1N994BNQHMY66eSXcF",
  "key20": "22DHiAqNpsYLjMR87iL5r1HKQXmCQAoRQ89hgxdMaEr6127cKzgdx4fcHdKFBKLReytUoQwgjQa9h8584bfSufxr",
  "key21": "YfX7vN3mpUSKbCo5XWYuXTUqwen7WohpTjoLDXnDco17jft5auX3ZMN9QvyAcLAmqbLoRCcc6NRL9mffMCESYX5",
  "key22": "3SWSgTE2N3mxJNYEJerv52cy7PPURhkJUBmfUUgKtbjiMYDV12MGaR1D8PZUUKiudTrUa82RxkHiXBLdJtCNssjp",
  "key23": "41E9Js779XAT2nZaLhzgfV5NMGncJEHSNjrG1A14xj8kNtfHhvg2qgsFyNiFAXWzU1iGThdAq3mqV5seNJvNa3jr",
  "key24": "4P5PSUwW9Sw8e8CEWWQtNit1REr7ML3xP3m3nKH4r2XKqZAY4SBznu8W6j4h8kawkq4w5Do6hwjhVa35pNxsf8Pf",
  "key25": "2rC7AjVF84iN92BTAM3pRdG4TJ8N2A9TZu2x19EsvwoLgX1dZE9po5h6NuYZxUsqUE8qr6gdnPQPVcGfCZa2Lqxe",
  "key26": "2dVGC2RpN64f8ZC46jNLEezL844qTPt5DMTXMjVjC57hyFPbqsgBrPCdDUXgQuZDfSi89AVjSfaCxVy7rjyXcKuo",
  "key27": "4e2ofGWWSBcbkXRhjQcb9ick1djrxQS7p9Q8aqu8eCc9EHGKbfpCwxMubML7MqabLDfzTmxu5JfyfkoFwdthyxZP",
  "key28": "61FeU2Pe5Rc7JsTv6uESaWPVb8HxjiW9CxQBVzFg3F2hDrg1tBc6BJN48fmN7FfjQHftpmJEzQ41MKuHoq69DCir",
  "key29": "57VMyJS7TnQ8dDz2renc95xZVauv4HnWeDy7Wk6VuzsA7TnuaAChzZafSnVmeRbwARi9Kms2WR3ro7AsoaNB4jxq",
  "key30": "NUL9yUoBJdrZ8mNQeGvpKUnJkhbn7BSZVuCuFMQDAnZma9A7pUetvdQkGxfH4e6gXs6sm8xxAct9rbVYhp49u7R",
  "key31": "559J2g6NNjiZqZVfLgYFxWpfDPZfRunfvBmpo8YoE7tXwwWMP4AhwC4ZGAsb53bNJRWygMr2Nvydv2mUNVcbPW5F",
  "key32": "5ysKjcUpuiFcBKt5cdTCWdjMXC8VbFJUKUbNM8yLvj462UBEa1uebJgjLcrpmmNvctE7rY4UptAskc9xnDtrTKAP"
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
