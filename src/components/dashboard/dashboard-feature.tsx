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
    "4h5SankWjek1uB5DCgauxCJU7b3mWYGD6c7JwZkpAfjqy4yUH8whLuVR7Df77r4He2fveTn5XTM6Pu3Kod3RmqkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25uEV8ucHib18RaBY6E4JzCyxvndLgwZiEdLyqAmeezt9kGdtJHZDuW69WbN6YFsfAVHmHkrLLGLovjomUkv3TgE",
  "key1": "gHXgjYJM87R3L1iTd5WgodpHWkUxpViHKV56TRr1HPHHyRgGWLuhSgwLvJWQ4BcdSDkdaVzMwgZuaM3sUuKFstL",
  "key2": "TrL1HcNTpTBpC1tZb2pGYEnnx6WNposcBJGwgZ4uncHRvCbadxvWjp3vHgpngu5swEoJ1xPqw9F3L9bebaAptJr",
  "key3": "2g3R4W8pqzAqrrjdhw6FdCB4Y7HUyXVgbnC6p4Uvrz9z9LP9QCZtF8MHSHKqep2cyrxsMG6PmwL8A8XgrktFWwYK",
  "key4": "5mN3AXG4NREmFapKRuc5kWRABnD8mmgVoxwL51WQv5c5tJnWfUBBpxNkC6hn78GgZKDNhtYbKDEjAb1EzKZRCz8D",
  "key5": "5iSePNb8xNSnb6P3hieqkN7esWzJMvdc3pftc9CE99h6xigwPFSMG7ZW1anBbmuRnNjmoY7BHezidwjKjwhEUwd4",
  "key6": "3XzV3RNEdGywMxJbKktETXaKmNmAcM9mJsscSoZNbG3g8aYJBJMQrTr5U3QaPpXmFso8jG2Z5Zj3hWHPnaiFLGuw",
  "key7": "3A7aSaBJLsP73M7SXjV5soJGiUiWeQo5nFzygsuzzVf31oGXspfxxH717ChTW6gcrSkdbRkrgVcRZDfAkZAnkaJ9",
  "key8": "3U1HqiVyhZst3rwEW1MGeQ29mkoF9K4eNRJmtHAphezfiPQWB4pRYa3QpxTBMa9tkbCu2a4FDzwF7eTJvCMvmZ3f",
  "key9": "KmWbpUSRDnJxrbsHFv5qcCJSakJNVXpHyQ1hMyHeBzchaXnAqjCJdJbt1xFCK8Aeqvjs2Jd3SJvgoAiGrzaLN7u",
  "key10": "5tQFHeHwMpL2KWLNCz3LQxSSR9G4qdrp7Eo4fBqMxpzc4nPp7oasPtn9x8pPjUfno3T8Y3h5rfzft5E9TnvAEbrx",
  "key11": "4EpvZpbxSwb4UPUoUtVRp6SDXufLAxav9GCmULSGzCS9gC3tT5Bfc3e2VnQbhkxSeo5NEYpVjt9Vzkg7ah8WEu55",
  "key12": "wrNHSm7hNvMzhEQoT8TearhfyLouGts5eUWLGRzdnxj1XRQLXesYYFYomJqnGZS9QhNUHiFbqd9bMyUgQMzSi1K",
  "key13": "26RNpauZAh8jLoaHfMUXwwt4e2dNtXnWK4kvT4kMHkKgyaGeVGn4PngcrRA5n9LoceFEfSGirStn5ag4hpYVYojZ",
  "key14": "3CeCoQBaVKDkJQPaZED1kQJTwwAa4uFB6jTEVtYj6ikhMV1cMUwTpGVLZ5zxNVV7N6d4KmigFbsmg4YV5ZQtuMjh",
  "key15": "6GtBATvvvG1n6gtmsTQDdHVggxsZSNcTR1mynn3RFHf3qERZbVAbLhD7raYLRWSR8iSouobsHp8yu3pha7ynzKJ",
  "key16": "fUvUvKwPGZgpT3VwQjGabHFFXRCBpbStgsB5NuZUBL99aCvPmMPbf7wQowksz8Z3NY9vMgPpZzhVsDjjtehDceG",
  "key17": "2wD5Uoai8ygFNDGW8TpfGCrbRzoEWfaULkMmaZka5vhrVRzBANgdoNHkkf9rTjahs5pg1z4iUvm63og2VMB1nbXk",
  "key18": "RScSLindQb9sUz5gtWa5tyCjN3xYx2xHQJkZfYa2CirwsYC3CzBe48vZboecNmupBnGs79uGah6cdncEQy8yWWA",
  "key19": "4bRoNw8AGaipbj8c4WnLEabypjbhLXegCKhGKFmAuNiAg4ZuqiEsYZHBvKgzYKJiWdxfsDHb38uw8oz9zNEVsaGu",
  "key20": "XUzjwyxyD174F1u7UXyhnEFbQJZF1UrFh9kqoKC1aUTRjMqCSLD6hqWD8b4bvLiYAANr96oRzEZeqTjkD2UDh5L",
  "key21": "4mbPZvWyCiPMF42GFAJqeQM7jp9G9RtvEhrxiDpSULsGeY842G5CwoYkFMvZVKc899rZ2xW7VL6yw3cX148CdJCi",
  "key22": "3z5dkHcaTPQUfCNDTesWisbHsaqpn3Ufvb6zqWykfn65J2w6JzEFovSPJ8RQUvZC9SmrKgBkE2P6sUEqEjst7jZE",
  "key23": "3zTA3bCsaQKQVUQfnghzwjSxtF2z6Wo3R2UYk1N39bxzVXHmQG1KzwBeDBRHQ7UbEKuSTkXGeqNT96esQyA5tYhF",
  "key24": "4QPAFmJXXfNNRKFyh83NE5oyZY3ScF9fjfeDsB6dqTdXM34xU23Y1jgkQgmMYZouGSVfVFpYv2SKBCt54JPEm3Wy",
  "key25": "2PPtvrFTkzqmQt8sRofEieG6cSndeST8TgVesDQ7RGgw7wppnrTAyCnKQKfoGKXyd5RevsC3oE4o2wCuciMwwftV",
  "key26": "31BsfDidnjVk28q5zowDQYCc8JSTjvg8UTaBc3q9M5hXgwaF8z7zETiYK448shPqREy9fo9LVMveT2VANkp4pGfF",
  "key27": "2zoFfPYtvqBJRAT6XAHnZW9Wq9QfMAHuv4HEJfWcRf48FTVbmbDDJUwfA3XqxHpqMoXDHAzGs6kdboZXT9bdsS5t"
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
