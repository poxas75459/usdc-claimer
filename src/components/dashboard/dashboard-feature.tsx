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
    "V5AvHE98c6mJ7Fup3SbVxWV57WxHeeZ9u4jKHGJqfjwjje2yC3xXqwLrLyt8RSrqhnFXx1HCYoSZnM8ETcunbnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "251TucMMsfG1iZU465Hrobs7XEvAAEcBSAVzp74Sw3J4sLpR7QEYDBDP5brtru7DzAWYpy9DmveAMYf8McKP7GyR",
  "key1": "2xNTQ2UpR6h874c552Q2i8ypDiDaG5Na4DCyMz9tVpfttenCmzNXwoJUHbwmJ4GuDnhknMtCrptyaDnUr3PQbPev",
  "key2": "398mGVsMyTdbhzqiKej1aQpnPorkV21wLd1j4Y68hPT9dmpprQmJZrJPst24G9ULjBSg2G9nZEtWZKUCRM9i5S4r",
  "key3": "55LrnYfxgZ2sR5B2pkSU4TsEjxJNq4KFCW49pKCCxCSiPTK5zNAdV1e9K8rxAyopg4KfiFw9GJJEVLxgWQuGvJyS",
  "key4": "rhBExMQHQkr1KgXFDdC4JQKHuT5ZXuLgZsNwz4GJ9FBxiPc1jf8Lt3uZfhZN3jU7gFo3QesttQE9ZzD3tAEgfXV",
  "key5": "3Ja4xBHWusV5L6WwxNtHZcWGQPd5FK5sqB76M2ZVuxK41SuYws4hweYEVMrgWWnLPjpDoFigYQPttPidn1s24fAi",
  "key6": "3jXTjUtZSaAQ9AGjjuZ9c5eR3ZvzmvyoToEEUR1GxhD5uRrUDNDXe5U7qiFnqXGqaSHybZt7PQqHuuo6nXnZ6xFL",
  "key7": "5zxYH6tgQ2CLuQQS34R3P9Xyswtp8nHGXY5xZMWkTnFaPP2KmpexWms57b1UEHBCjs6hiLk6PnR5UhcwyRbE7VCE",
  "key8": "3JmPpS3zfD6D69rVZmktrujy8oJ65RrUzUJqhRFuZRuUds8v65CdK1VU5Y7LPXRZCdPnA5jnkwRs8GZ7wgGV49Ye",
  "key9": "5bFbHBXLNS4dRwfhwxN5p8WQihiWSZrFAtqJ2f2YL4hzsV21vywXuMtKRvYRnNXds4m8rWVc2yMjEs3u56TSMHg",
  "key10": "3LCQaR71tHggpvEeJXsYjmvFnSfeTnqetQKghdyE2CoAwaXVgL6rpGFAsvQPX9wYMgmWQTJoWjVpVEGULAn9bLnY",
  "key11": "5uTru3jurhNsUSU6523YHUJdmQ5WrMbXWAACmrJB9MjrSTm7iayJ92rejjPqazpjHFZyaiDKwL7JGKinYdhSoafk",
  "key12": "4Do7ReRN8TjQqADsmTKeoRKBrKEcQAQs7mbXoF8KCg9h5qNwt6K2NSvbXPm26VNHWqWAtBGMzmSgMo94BD2DB9hh",
  "key13": "3VKH9Vr3oGgKGDLcy4ApMKPnkNgYuxEMg67SMoqT6VTwL8deSGn2xqbdPwyAiJNWuexs9WNxmQd9FFL6cVWepk6z",
  "key14": "237H7HRfrQ5dp3tuoKJsJ3SPNgMygvBpgRJyFkbW2tE6WjK8H9BGBeebW8hJsYEKwztKU7iZVqDcXbSATXDX2PCL",
  "key15": "55GazduaKk7YrJa2NLNgehTr5Vr69jGfsouhyruBGQoqbDD4tNTbx6RVCt3SvL9AYzAqSTTKNAjTbUKCAmLKpxVA",
  "key16": "5zFP7GutPUN6hrSmkntds6Jx9PtpGKPgrocLpDkmPCwDVaAymSm19jpvA13NjyEoPPV2jEqyGCLU2YX8wYsFTauG",
  "key17": "2FgwezGKCNf6heR6SWRwyvtr9U9Lg3HZpBZ6AankX6XEFeLGnZxA3tva3ZkfbGGL6TrtybwQA4FPxShjSF9Re3U6",
  "key18": "3utarckL3wdGrUkFfUfe4Bb7TQqieBLuvtMaGXYLztGUah9LUThEPQ6tkB5WDWkspQazJMCA7QvprpLbnmub3Wq3",
  "key19": "2ubzMDsHKiszfu6n1fVoi2E2MMeH2LheACQuZZAFwwUz3pP6zv2mCWSGQchSyqPhHZrPFuYq57serNx7YnUKdjzd",
  "key20": "52f1NMRpoUs3urwx8qvArT9iMpCCSvj4DNTdimkSmHmmL6CJMJWfGoEJrLu6dhRDH6rThRuAbosGNSeHd2oKe4CA",
  "key21": "4vF5PYR8FuThXA73kRCZaDtLEnqvkeTsQuNQKmy3X9HJhibGa4mGAwJxkajLZN6DxtU5Cj6pcd7j6jtdiM9Kw3db",
  "key22": "2UctauMbKwfZevosyYxtrgviSHkpuiZSrYvqRp55BArNrmxRvNqPFcTVUze4Pgh7359eq6gjtxfeobvvJNFXmkav",
  "key23": "2zsA3ZmT3paRrfoGFL6ueK7Eicv5zuQPSvmhaZEjQzY8Cr4HXbmbseQXWmypTTdvVEGxKRzFRutNuGRHHfB4AHMF",
  "key24": "2WV7bz7DpBorsyEU3TWuov8QGnpz9FhmqzcoHehGxLumVVq5N7bTkk5pTwVXFHvSPCM4ZhkHSwDswquDN8UBzM4X",
  "key25": "3EWxqxivSGajjpANwBfFLTtY1t36HyMYX7VqVTK6o3ZMd16fKBrSR6p3rYZ78VNA6houypkRRmkGEWLWLzz7oYSg",
  "key26": "43Q7HdBeVRVPhwjuPtHuTPGATRHPtKFLT6raZU464rmzrCM855ukLCs7zNAMxTiuvS41iBhEejazwZUTMeTbgJZi",
  "key27": "5sk2FXZkJJM1RnBfUx5QFEurRgTE1K35BUT5HpGxT1ZDg4YN58pVwXctncZY8xtLVmx12Zer1rG3bm5qyfnARGaD",
  "key28": "4B5B5YXpxFWMPE4ZtFXgF8VdYMYvymzJmaPMCgxQxM5e2x4tCNK3fdKP9W4rV68mgk75aga6SBDcEu6Tfb3bGZHT",
  "key29": "5heu4ic1UqogUjtarxANakjxfiyKvM5a9DzQVijxjonhptNp5tAX7ma2kAUhE5JjwYT27E8vqHvcHuUwTCPeR9Gh",
  "key30": "611npvEizers3qLf4sRt2XpvMciLDMqsx174R94GsFC4npVsQ1WsiHEwriphhX9XZaEaZw9EFuhHee3Rah37PRK9",
  "key31": "fBAhML5fFSdrKpuRmJSajha4kRi8qHp338Y4xt5jQ9zB5aML4z3PgJzDQbt99pMTErt1L2whV3RUEvQsnkcLrEE",
  "key32": "4eo7SYPjVLhWsszNp8kcWnvLYUKexWToTn8cLz2DZHdREfuJnjgAXj6Ta1ewYdErkmZCXbHnRdAD8vFqzjbBUvV1",
  "key33": "2F6XVVjUjWS1yGvNQdvgGDNVZpwu5vLoUA26o3ixFxYgu8x6dyYLhf5e9wUmWhyHk3zWXSQdUq2kqQPugw5hpcv4",
  "key34": "24co5TZRfSbqsSoWYVEtRp5hn6EC3cWcq8ApfUcRnBTWLCz3NoJyc8vvNhbLdYXoX6Y4M8DjhBdEWwzSt7CKmnq4",
  "key35": "2SdDBKvfQKPU5zHs9UeSjTK6a8wJMSuxvUarDfyiSQP9UDeQ9u8cSG77urNYoKK4JfGzBjWT1b15b4ZrPgmMZtCV"
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
