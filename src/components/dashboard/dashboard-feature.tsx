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
    "3Bn1qu7UpAUUp7gj31ZyNZx3wsP3iVDDh6vVivUpjGvFGo9HPjVMqiqPDpLDsX8PdiY7Yg5nmZDjog6MNGv4SKkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "duTt4zxkV9kn5zQDisHQkL2Lib1N2ppHhhFrq37rw9vKzEbSmMUgBMkFsAAKVLSXuLoznui8kPa6yJ3nFD4bz3p",
  "key1": "4EXw1E1JefbtB8jYaaTwBky61UzsagDYKnFBv3R6L4MgCqYjpFzYgQf44CF3zTWS3smDMKLvt5a237pmewtwxNNm",
  "key2": "5cYoLVe7QLSN9SqcwLt5wkjJK5A698YhT81gVGd4xUPwgz8oJ2qpnFN35sj1jkNJRYGmnnGKa6am9sWAeNtuwagx",
  "key3": "4MvCtHWcgF85aZpNyFumdr4H3VyCLd5nySgDca3ThYEy8MsA8wFhKrTkt46qd59FuKFSLVFMuHhVoTdiK7WdvMHC",
  "key4": "4HD8QAEdXWDvVok1pELVx7Sxo6zs3fbS9hSJGLaEev4gL3RSiX9qruheoRGFnF16b6avtHHgi8Sm5hjsDA1RmRX6",
  "key5": "2DdjVPguPRLZdyKdeSRMs2HbpX9RtPnAeR1BosrPXd5J8xaqD8b5hRQ9LvEXMsQgAm5Lbw6ZCRSHWoEeKvVhdAY6",
  "key6": "Sckz9mU8Mr2VpVdoeox8QtveQ9NsjiweHpeEsG4kXpeBHB4nW1UN11oCr39ik5GAyMHxgEVR8RuBwg1MTFDoBhc",
  "key7": "22V4iWFdwAhzw5j1ycooRek5FhcgHRaJR2rfKs9u7anoMGa1UmLxxPzxqJFR8y98u3qQ5XY4vb7YsJR6PWBAHMsQ",
  "key8": "5gVC9Ds4KbudQxEGDAhwZtZfDHWufJhpAjB83PU9Eb3sgy1pUJKLRJMy6DinqgbY8NYw97o34mhwYEtiJ2gtJ31L",
  "key9": "5G3hL2iybaxPKysnLQfmqZZY5LfYYSPnwT8ZzXcV73uzRgtNNK7vWd4x17xScVDaQ18vPkvfZZTeYDQwmbbMgeW",
  "key10": "3HFGiibyeUGmbx7A9KnMRjax4KGmYkJKLHGJ1bFpguounQCm3mRop7kyt3SMja9UAFUGVe4HQYdxZ9F3FQeRENZY",
  "key11": "4jEPMacCNPXSmndsju1iTihmAuYKuRxo18gVGh58QEVp1hwxBt3g3t2Yj72WwSjTEzK8iHErQW8AcBaTbrNDZMmZ",
  "key12": "4pRPd2CVjn3DK1PqNvP4Z9Q7uMneEjcWeCUeVaThpvnoB166D5RjBJniNwUgA673EEaJtmoZm8Cr97m8yKk6HpEa",
  "key13": "2rEVMQEreuWsdMjtCngku3rv1HHXEdSrXFziXLwJ1JbRQp3r91cJjHggvNJ3c524qZMm7pwmvTfj5mE392z2qvmh",
  "key14": "2LXCWFWomHL9kyLVCqNX69T5MHFgiWXbTyfT2ZAgb3dCQEreAJrDrr6h7uNcaUiUwYVV9pwxsHN3hETEucanGgpx",
  "key15": "4bNSVEKzPyekYb32XD4KxKym6NhH4CaRo1J7DmQjPnMFxdPUUJNyVsmVxUMXWssYDGHoNk1WHWHMPQ5UJLoiCKqM",
  "key16": "5iTz3e5BsYPqTJrzBrVfhgQ2KY75tFKjhpNjCYwTc1Dy82oNBBGG26JTRhNYEHaGkF3h4cw1F5P5cT6pFnMSvqF1",
  "key17": "3aB3j4hMPcZDjcd78vkL57fmYrzvbj5uumyDzFwwvLyJkVFAPszW5r4Hk8zjUykfgmbW89ioXUchvdqrVoDFF8UT",
  "key18": "4dCQ8cb5CwbXr54JZWAcVByeJsdkvv2Ms3X8Gkd7T942FE8SqhYt6zWcM2aftzG58qnK4PFCgpCL51C8pFryfmGF",
  "key19": "4db4AxoVCXav28zG8wc71JuUguM8K83riy8eZS9Vs86hJo97GhKds1t76zgXiqubnHWsZUfBzY8jRbQnh1bSgTTv",
  "key20": "R5HR5GARkFGTd6fGPo2NLnhdRcDWKJ14KM2iZKjEbKzHerBoinuTc27LAtJP3Xs2VsdimbZXy76wMj8vJK5hZMH",
  "key21": "vwN3xrodcWqr2QfpTrLoce6wHbAD4FbBpXgAWtNyuicdGwsKh4KiBdw3w5u2KeAVXL6cUaujjxjWhwMgvcb9HWC",
  "key22": "3P1xbjKinj7DgCXNcWpk82p35MzqsqvMRLow1VdjuGPvZWpN5rkZ6U35RB34xZV99FAQCi2ZtJxxmX7p228peET3",
  "key23": "5BZro9su5GXDyrAUBCZyEFrP2WHGdhZrh1Sk8VpDsPV9fuqJgxcYUWZyumC4gqA9MkRyhR2Yph2jPrKptCtw4r5w",
  "key24": "LmP4K7BXR7oLQxskCgZsNiEXVX2znMCriRu9cdF6X8CaCdiCSSekn8AxRDeftYE3KbCJWnNbDBFSxvi893AzdVY",
  "key25": "cdn6LkHteUVfuPzKMyM4pDq8fRkZ8UEZZFtsRt1KsotSKjjbmk8jPR2VNLh1RZtvUP4u6qgZ27fEMtRvF5mo8yo",
  "key26": "4fQ67RVsmEicsVqxdRAy74FGy8neW7QwkDEY5KXS2ji3HvyRTwTD68WLpoxMewyn7x8pqg83SeBxuL4G6dubTg1r",
  "key27": "5BcVvTUVKvi8jcwrioJetzX8s8QDgxctBLYuvUj4EJg8tNC75rhyAJthQtStkDYDrbUFyQrBQfKAzGHadDXF6tti",
  "key28": "59h1u8DCm8nzR8BjsW5Lw8JCHEneYp7i8dpqoH3Fpeh7CTXALuzHXdjjUnzBgJaVz4fc6Ht6RLRgupdGhfQ211Yq",
  "key29": "3Ur38RkP3Rwvr8DMwwtFwC7F7UkNaCYXYYjV8LtXaLkv5bMjrGuAeszJYfWozWU5Vx6DDRfyMCZ5e6Zo7qHLUBCq",
  "key30": "4pxKL3upUTGjepvKVZnjWk6Fn2uHjHnbAgv8LvvMhxmBxDxbWbhqBWyYUVR6hdCFy6AHYaFXG3TeG9NSc72HX8xv",
  "key31": "5wKbzcZhWJPLbFr7AtW6bdxVD2qJCnyd7g2Fgaq4dD2pcVdY2wJCkRwKLEeiKM6wPa743WRk77ZXxVLCqqzpo8DH",
  "key32": "4ykFc3h5gE77KgKw7WV4DaiVugXccoSJ3dssajX5FvFxNXR1nno4Aez53THyaPbCktErjPcKHb5EpKnh3oDR3BvW",
  "key33": "5wDf6YGuyhqH6hnNUvmef2J91tP1jfrqiEyTbDGJ7ryyy3su9MMXacEnFaNBU8dXEG258QL6SDszsVfETg4b1kmk",
  "key34": "3bQ9nA4y93BdLPj8CtNRc4CS3Tu28uKEPsvaU9ZFqzwGNpt8A3bJmcWR79o4mvX5HyUmXmfTnxDvn2ES429YXUqp",
  "key35": "2b6imQxuKpzG3XusjMPwpJTDLE1kGfw8c5Q33mGHUydPkCUhQNMR8oNQbDcbzNUj6ukTRiMxcwDoLtopuT2Lh4x5",
  "key36": "4x72yoYYQfG8vQ72fsteqXHHqevxbYxe1w5ZZaGRcsGHXjm9YiBgaxoRYoGWe5uoSeo56GsZsrT5AXhFC9VTsi8b",
  "key37": "4kU3zS27jszgqMzPpQEfFi74npvFkbi66kGmTM18Nr6Z8W4nVf3bterJd4uTdgRTtQHtLGnLfTGXVzWTYZetTo8T",
  "key38": "4S35TLKzcLYojGtZ43EvxeUoFU8zpWdSm8dy2YDRFeu9cnD7gA9RhHRVwGnZYxytscH2QUnveydKq9Wc2kopNYs8",
  "key39": "SrrEGy7o2EUPsRjyE6EtHshCerQxEqTbNvtLZDd7GJ1XXQhchn5GNakrtaLggSkAwBcAB7BNDvjzmvC7xu8ufz3",
  "key40": "5VHd5rULsMo1LdgJ3fANNQ63EN2bD16rCwsVP65z5qcvjKpARanmoZ8uKmA14DFmzyWRederxF3yQthM8ttqDfCv",
  "key41": "58cWWYkUW4w6DhDdkSK4K3nBnT3q8LQDfbJyP9no8EbKqe1VG9XcKpiLtxdVZVxugPmtP3Re4DUUCQ6Lmf9Wfcxs",
  "key42": "EKpLbygGNoJnwX6ZKZHMAeYAEdjDViAYZiMcmqt7X4kTW4upPjBMsFAv2CiB9HqzUt1ucWTtt37uU1jot3RQevd",
  "key43": "sgxZw7vwQJFv4z3gmRrwmgJsRH8WxXRsJQZtDkRVhYmFKEkZ9fXNfeibQowzwAbJfzFrZebfEXPaTgQFo9VKNwt"
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
