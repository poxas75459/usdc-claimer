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
    "4JfJeGJotpGy175WwHY1rAiGtUyk1ouLhu8Hrp74bGK8DqiUekumeAJ9URKb8yjuNzwTSMWtnQtLgN8VqL5QJczw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iHpTkQ9icFaABFgf9Pi9bYKSvEhh7ZpeQB1h71WbfCeh1j9YZPhnoAAeA2dpJd5kdtuLQ1uXdo5xKtAX68ePSBr",
  "key1": "5XZvfaS8q6vQXtvPe2c9xdtgxbCtkN9Esjc5V8AwfNVRxU6miNqhECJyJqMBFTnNSdKyq1HfqqVWhgpRaeMUKyY",
  "key2": "4bnhNu5YnwjwnTVNrtBi2PK4VgX5mQs9rxjCiDxgfcfeK5xgoLXBN7a62W4hQm1JWdeAuVq9fyYfMA3aXvW5Px8y",
  "key3": "c4Ydb1vDq29ijP81c1Z2bUZJPRhxJM8WjQcHcXVzeDpTEFgLt4A6y8qqYgWhr3G95TJxUyxwu2MckvfJN8FCuBe",
  "key4": "4cov8TX9b3V51H5R3qQEitoA7G1p6g6DQm4Pj1DYS3vVwc9cta9zRDrwAc9h6h8pv43sL8dDCJNTRb4BxkynCjse",
  "key5": "5ahyqFEFDXkV4d3pnZtvSrTtnsj5uCyN3gZqkmrktd65XNnUMh31KGFtQGaTno4XT1w82ofy2SKhs2hcXY1XTo5E",
  "key6": "2KVYqwNBDsqBeCSysVgAej4Wi1x5v86711xrJvHBZb9ZsDohbcHHWoWqnEtcZjtk2QVByxC1ahhyjMR6oNq3hpC3",
  "key7": "3ZvtdWBMusSFpdqvmKdzs5Y2caBR2eq5RqTnp7LFzjQrJBCgzpmW2VhosXJ6x3NruvuNrH4meScqnKuk9U258ntb",
  "key8": "2g4LCyjzZiqDieRxp4FPvD4ZKPEELWKwzVdLfKN46ywoN94zFTdRTvGJKF87GWge1skbSoxeoz6iZVrvToPesae9",
  "key9": "TSxpX36csDjyv4NE2MBvsGa3C3M4kCEgMCnJLGkWRUjRZeZYwzMsdN9zFnN29S5dtYnWZ4ARaA7vzygfMTCSENf",
  "key10": "2CPvb7ZMG9VtQvyv38yd67HZHfHdu2ZnyaAq8225oMsnPhL81wM5vDyE4cLvgQsux3KnYDu9iBonSZcXW7d2tLS1",
  "key11": "5URsxRuMmKwDZvuWgza21f1BhH5kC7B8sJep8zgwch7tmCm59VXTSPfUTQqA85kVN7nvdC4gRPS2YwSYot2zzWUr",
  "key12": "4v8R3FEgyfs6ecmvBpc2QPYNTu44fUgJQj4ZcXgDvxpfA3ZZXpRdHAQ1obzfdDRSjbgA1wTCsnPd5fiR62xXvfdj",
  "key13": "5Y2o4dLSZ7gBtJDooawwqB35p9xkBJuU29whyQQx2dUtzCQHi987VQgoqbGCWRYuo38b7nu3hrvUrKfpjbiAgcGY",
  "key14": "2MAND5u9o3TjrFyJdkrkYcxVpYBNE7rbPkGBiKwr36DodbTgrNcsamGX27gcDzS8haCguL8x8ikxDWSYLay7c3vU",
  "key15": "5BqyqcFikZ6Jxg5j7bCo8uAYTwu4vg2ZpSjMDiGxxy1DGLdPJQUroJcpRdJwHo9Jzbf1p2QTbN8TaBUCYuaJhDuB",
  "key16": "3uckBg44Pd8Cg1r7yyUuiKujZeg72te6wzabN6WVwLQJEuqSGL9ojTCEFYaTqcAkDQK96KwCkppYgb9F6wyfT49C",
  "key17": "3LqeWtbL6wHEAMqThnqEPi97RRK8bP7s9oXg1BLqCqUokHtxmea1m4Q7V6dCZALFk8gEbMyFutr66qN37SVpUj7d",
  "key18": "2pQVCnnvJMepTJZR764xaRGPMjmpYHPGcjoXXVzjk5QcDstWvWR115aaXmvtBhL15TXdJHZdN2JfmMdFGJcezbK",
  "key19": "4c8jFmtp8adznwm36zex8epob3MqJWCayG68zS2rH2fFEsyYXuqBn3mAWc9SfRPFkYjWA9MkNSDxYBgK8KbzwdzP",
  "key20": "BoYojA99N8PAEYSCkuZJNYgaYfJVwdd5gkoPdBYbM54jUQkywvXXupo6iXLkRqsbvc2TQ9KnViUMpLB76zLRJpg",
  "key21": "3QHMTStax8WphgsUWTuRmwnSd39iDpttWoEVuXrH6aHU5UZXfuc9gWyts16K8Yg8pKsGioEBz34TZ2ReCSJF1nF",
  "key22": "4goTPcGXFqwrNRpi4YjBAC6GS2KmopcKxQMEFZU7PuMdsk2rvwpALwcCJS5gjNrbUshGL1AkSEeiybrtftExpRAD",
  "key23": "25BZN5qgX4h9genptv9BQ7EZrhS6DiJiEUzFB5R2SDWnM2MwN2LZw3yudyXQy6JZU4MwcYQJcCzAGwrYUxzvAYeg",
  "key24": "291xNf8rw894LgxzEmyLi9tho7wz2jTSHBxiQRH6MuD1EEuwsD4dWsrhncLBDzN9jDDBHc4zrkCkh5hJob145pgL",
  "key25": "9vBehzUAUiUc791JivEbaxDecr82VE9NUkwqaeQXxhSskboW8A8H9sk6yjFnHwWdeQqpv48DRrXLhLFj1FYSAFW",
  "key26": "2yvCtzdMEzdDFJ3PY4srdsGfRR5da2vLq92tMRSLhDAjXuXPCjMNEGvd7zCsYFRMvU9vky2Db7fcTbNoGkEfkqZc",
  "key27": "KVabg4bsYGJ6VE459QVak6TGJawNqMJ3LkFN8zVmfK7yZx9wfBCnhsqSJ4UHP43oWtpm6qRycFBuytERJb4deej",
  "key28": "h9uVUgUee5iwhBaym33HpB4qtJPry2y5QkUDsGNWhiMNwZbmz4gXVX8KpAA8T5UgAQfQpxTLaM57QRkeRK8PGfL",
  "key29": "yMzeQkUTLbHWY6bAeYxYYyy5xeJ5EnQHuGjhdwrP6Vhq8hWBVxFeQPR2AVtA7TfQ6QhgEe4tQGUi222npXmMyuS",
  "key30": "4Sh4tdUuQVdV7QbjEEUV86ZiSzSEdAA4whQPanTV5zbaCx53LzvN8LdVvuXcVS8G7G42U6a7bPR6LNPr97VVuBP8",
  "key31": "4uv7b7f3iydiZVeDBJBU4VorDjeeXSp7n13tkWh4vmQek94gMcUX7W8VBCwJMCfKAQ5a3u8xvD2hB71qhkEMfCqu",
  "key32": "FpeKbDP4HxMzqBydvdfb2MRz6wS9FXq2pw9dgsA1pASXNXrT9mTtyDcEQzubkA4jqbR65Ru5pqmCnAR8AmL79Z2",
  "key33": "4oVdNxVHeBqeKtM2ZbM9fB1Ucyb48TXxJmFxoysJeZH46B2ACcQBCCjzKtaYCPBjdmpBbmeSLLij6KFLToN3AvV4",
  "key34": "54QnXBJofPbNuZkcWmGoPPopij6MFhhZbHUw6HGwDwVHC3tLLAsE8DCZPyumsou2M2BsRH3fVfdpUAEzeAxm4eM6",
  "key35": "2wPn8QhS1RvEUHJqY4tjPjUhq69brAQrnPq5Xfiz13fH1HoDGD4WNayNhk6NpGEx3UTCAr24cm9LtwoBQYhPAm8S",
  "key36": "5HSjkeBQmgF2cxc8ByUkvn57qWrfHk79VuxqweJnqR7C98R8eke85mZvGAebDGFj25g8jdNETigtJrxpbZjXhFfe",
  "key37": "MmzrQZhhPgmfeP7mA5GqnXD6n7ibm7j7zUjL3aCqmxff4Gdvi4rKHzq1HoYXYWpmsab41dt865PWkqBY9t7og62",
  "key38": "taSpHZFGVgo43om86KxaiRLhyLHs6sRDUbQEb9gG6JJmUSxzKhicH8wxSgoKnELqWG44RCYXgAK9mAz5dqWiKGz",
  "key39": "jNNiUmb2YgeTFjXDfTMnBVpm74gNnSqV5Ju8tYjMTxyTPmLN2bvy7mpVy2zeumaSumWMKzhxzF6Qk3xaMa8e8Lc",
  "key40": "MfJXZcGRiUUCVh6Snr7nLUnt6BvAsxM37r4vMwHAjmL8MdXx1ULc9Ms66Ynd75814eK87wobUWwMYXsZsAkwHef",
  "key41": "W2w6XqJgMNHhGS9XcB6Qe9SkH1MpTZcvR3L7z84wN8WjLNVvFD6oKDVQmzTD7NQy9wBJ55TXbnP2GSPPY7DJEdA",
  "key42": "LJaJG4au5ATHzfdzf2DhMZ6NrejHXSfQvtN4k81c5Y931YeLzpWk5z1WAr5UKkBVf18KJ8hQP7puYUzE3ixXRyJ",
  "key43": "3BZNh2DrVu4rNFbWmE35DnzEbYqCLRGYzjQMtHoqTagYB68Gq6tmNu8Z2jFo7vdU81PZ7Swwet7U2WiB251xYUJn"
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
