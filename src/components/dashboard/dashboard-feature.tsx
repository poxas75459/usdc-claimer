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
    "4aJHyev6KhU4qRidDEGk9x9G4GT1hyyD7W9KAAqXPitvWbYNaEvmpWbV6nyvgjrXr1UoN48eqpnVsQCqgKbCsgLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "645FeYgqBSh2bonSicL1C98QYJYj6s6uvn1g4ZrSQx93TQ7S8ENWqVoFr8em1cJXi2f4VYJay3omf2pqnCTB8DWK",
  "key1": "5aYbj5FKrSqFLZAYPQhXfrGPzRNiQea8vm6NBAp5UYhB3ZJGvNadqtvHFPQ4LVgQ6Epb95KYo7F9fTM9yK2VNZ72",
  "key2": "2E9Dr4vMMq28Eimwo4VLP6S5ondJNg2KmKhzv9d5hJHZFEftPpRLGZdk1A5t2kKdNZmCrNt4RWkXgeZLnhtRM7nN",
  "key3": "4UyA9ZKYQGgraHQuSkvYSAqcEbK6CitWptWRgnhBfHLam1Nq11baTvwQ8fKXRma8J5ZAfhDTrbd3H26CQtR4uEg4",
  "key4": "65i8MHbbSafJjg2CBh5ndzdKFDTJLDzkXN2AsFEXTWoMZfD1gQgAkx3YPQCqvxNuncj3GVRhnfWz7A1aJWp6wjV1",
  "key5": "2aUE3ZTYYmmn2RD6BTPBB1Wth4QBaL9dZ6LmccnW7rRYZkHjuMUkUvPDkA4a6gVWt1XbnSns3VwsB6j62ydEGVsY",
  "key6": "4Xk5P2y415nxDzj9E1Hmdij3jPHmGMjVGTR7t6r5Py4Fe7r8NkTy8XkBUKrcaxMVapPZAwajS7R8KE9S8ccrMeSF",
  "key7": "tau2kRoCMrQuS7AB2qR3BFyXggyWyz5A264NeU9PyCnh9WWEiQ16KV9FzKXzXQVh7roYqZLjhJsY49AqMYcepnS",
  "key8": "5Yth8VHkzwxxtJCKqFEp1S8WZZBdgsmeZN1SVZmo7NQkr8C9VQyQBypaPQSF1pe2JkWYPMdTYQPZqWFhyJ5kWUXA",
  "key9": "5rPD3MLrJzKPDcPejuerefXHzPdq4RjioMV61fgG1BSobu3vh3fQwUGSCW8RiY1X2j2ZckHojS7MVPMobZXKHKqF",
  "key10": "w6UwqkL2XZUaFiF1Lrj9hVRZPSRtC3WT8vhDxoWAc8CbjP5yjYWdf4WV7MSwKH9gE1H3W2s3KsDKdpbEffK2c9m",
  "key11": "4rh617UPng5z6DBGPA5u2UEvvjBymGbK6U3iw8Dny1dc4nwTwHoKMErgQH9yvCZYoeZPbfLDPyzWyCiBQV7fAhFB",
  "key12": "48jM6rZz8vsx6vaQzhmc6CcESQtfZ6YgjRhjwEE7jAMQa79hixQokrN2HD1FW65q2SUCgBZtMvjgixjNkizezpqx",
  "key13": "4Wm1qVPJUtrRyMPoMLRbF2716y5A4ueZJQi1xsdTxFCvdjh9nzkbqDugpY8nrB64r11MQPPoRuc7PHL2a55GHoNh",
  "key14": "4p48odddpWNKm1mrFrqBgrVkNAnYFRkbKt9KtAiozhWrLX6xwSoxa7uH5qrBeZrK2m2hewS5AVai2jTzDzvYiBmZ",
  "key15": "4MzSHMiGnxz6xZSoVZuBK9qUmKMSDTsZwm9Ruim9xAkPv6LJVDH7oTYnMcAC9pmxyCFjpCockQLtoDWZ9ZqXhJRY",
  "key16": "4LnX4R5WBioCRcgxWm2BQ2d5Zq55QiU3zdyCoqWLCk8yKDFVKA1tZnKmNELW62jNnwV8WRe1YMuZ54A6w5mHGoRm",
  "key17": "4Qma2US1byntKAMxoggwRoZCoftVArd7fLtwJukGpWzBmPwe7anG5EopMAzuZe9UGcLKddCJkYUUSCnUbVmis74S",
  "key18": "3Zn3v5Cstz4Y4QUciHZ57GmV5QBSq2p9nEVa8eCJNKAVrEcNuheguiMAHJLzyvFQxK2yaJLUPrmS4VmECsEdRwMu",
  "key19": "5iGQfFqMmuoK7de2tBthvX8q6HpY8zLmYcTkF3GtbpaqaLM84zJFvNbBZfmAqsCS7FtTRcaLXiXy6THNog5MtiTr",
  "key20": "4Z9MycxnfHiDS8aur6LmYusZwTdWkbzRgbh5L2cspMjpvkQ9rw56U1nSthaC5BEVByfa9XuoZVAzDTvfvTaDgTRT",
  "key21": "aXUV1NYC9j5ZyPQ7PdjEJPBbjSzhrDXvc1wp98PvdUScxoXiRkcLd8Dzupv4rcDAK47S56qzKVwntAjAgDfbJbQ",
  "key22": "3CZ1axwaksd6fhALV47adsB2E3Nygdrj3D52CxiCQc7ZNiyKzuuao5dKhcnCjGLF9DWJKFXPonUMKmQZASp89Ueg",
  "key23": "3wBfDQYjKzU7ZdWHRnTRYc9hHMn1Y25pgoTzDE1U4To4vVYcQ69TZv7aU6u6aU9XEWAXuwTcm6x22ZYmRgd9BEXH",
  "key24": "62cMW7n1mXjCCCzNBoReoFg6qvVt5f2uQKEFAg46jBcKQ5PzusKJpkztd5Cgq65vFRGi8nJb3QFrc6CLujBChcu3",
  "key25": "2WEaGNXvu4ZEBaZkdighB22uxFfkn5FcW4ryd1Ut3xCe26RJUKvranWC1ueQP9RpvvuWv9NyW2gf1nA2jYQSbSUL",
  "key26": "4N4EjS5Jf1aSv6Go1ARqVqQQfdpgJNL9tunpa5AYBZxGdJQPYne2QUQHRHJY79S3bvxAEHMnNPmUd8NrHWZc2Vf1",
  "key27": "5fEHE6GuoEzWWsJFrAGHaLzWk2cm1262Du9j8JTvTyeF2hZ4TBLY6JY2YentJZYmYoc6Si1usR9nFjoJCfZPszb9",
  "key28": "J9DhU822JN1eNVxUszSDBJ4FZX3X82cu3akB9bqmSL2CUnyBuFDGKe56yCJfuopmP9VD8UqA3GgWy7uTp8sDN9h",
  "key29": "4zpkPqEWYK2CEJpYwmMxB7u5JNuHc2KSVXTkRgJPEihARgT365zToKGQveiCrXuG4SwrxqBQ9B5yWDEajLogQGDD",
  "key30": "4swAWXPbnDQ57Dje76PfMbX9jy6XYXDTq3bj3MoSTRANa2WRsL9CaE4hBUyTk5eGJScrgJiqTKWmEyPHALBZ9Hjq",
  "key31": "epM97tXTiiMjH7iYJvdTCovH5RDjZV6ujpQfKZCk3XFjP8AhZeEDEip1t334W2mn7f5ya77uU5c7icriT1GGuyA",
  "key32": "M3SkP7xLLCfBtQSJdKJXzmXwfL6JunKxMF7P9hUuFZDChzHZKfZGfM9qY2SnFhoDDU4qdREjeoqvAei5mjb9vhV",
  "key33": "n1pfkopzjtA9Ba3Hz1HW26ssZpLpnxVaAyAaX5hMfEinrRsyNq2Q2ayqZDNpzJTkhVuFHwQqsehUgAHvjWYt56i",
  "key34": "2juMdawVNPYW6Si1i8omFovhB4MdHYWvtA5FrgSzixBem5mb4PkBdofeaqKmit2LoAT1uxP5H7W1TP2yDaJVR1ys",
  "key35": "2QKXxKnrTEAsUz3KqyBffT3QcsTDL7DXaRiL8aRUDodiqBfGBF8RU8WCG4LnCoCCc35wkpXFcPxtMPT2iGd8a8pL",
  "key36": "46YDyZxa9uH1JC9z7dAVWMwNyMFEe37PCmGHqywBJBcr9Q9ENuUDEbLoSaMc3BGpA2rqpKAtHaUrbJJE6r7VmdSc",
  "key37": "2f81JvuzvsZ1P3DgiaH2xju7fnsDwiMsnaRspSzQftLJg5bS1KkYVGDkWNZmumLQkznxgrFA3UPXqyLK3F7EMz86",
  "key38": "2A9jbp7WMR9h6Mt6xgTGisyxywUQezHfRzU1RXjMkrkyybcYTUxtTzMddzTM1UqSw19k6wK7YgWEUg9mZbfbV5fa"
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
