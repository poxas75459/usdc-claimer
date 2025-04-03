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
    "2SYE9a5KxxLyKtCe48dpk7Z1iddm1L4myJQQRJVCk7YpxqPbHfGa4g4A486xrKGftNKDu5M3wSzCnTeRGttyobm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h2cxVWfzuQsE9hV1guQumYw453jsV7rQQhLugrQXJgagRgSNohsgoD1GT1gwyXY4qRPy5gboZdoMwULe8WhqpRY",
  "key1": "2skG4gTwLU4haVYvZieAGr26XLoA2L7rKSE4F1fF2LJCqTsod5es15nwn8HkEdMhRTSzRPqqqAfEKcqRSSRwr8yy",
  "key2": "5hHvYuHDZMWSUSWrR7EXhKdaJ5iujAGJ4dN1CjHzdpRVmpAqAdAkbyPtp6kCiL1hLKLdgPw2FdKWFYBgCX6gXSTj",
  "key3": "2hSwDffzsgRRXyUrJXF9WypefYLKmvM3DWDi7rYQHH1PwcvnoAGgNqPy5zZxSGkeDLom4oQEAQAtf3c3yra1qF1Q",
  "key4": "2eidtn5UsvELZbzrXo5bXrJTviQnrVUCMyP4tGkc4o5XmFC5scGKxtGrCKRRkAQELfwiSKx5Jo2WgFXLzQHqkEwh",
  "key5": "4x88y4zJ65Tx2purmqqEMrMQykA6zuDPQaU49GTdczfDA8vME3nC3TBWeRVudK4g8NqrQjskiWbtmiThfgLF8NSX",
  "key6": "58jaqC2cY4Mj92dMW5rCGffdaNx4ETwoPua3UADkBmK9PGf3eUg8HxdFvxUk8kxwaMqcMXHjPeWYTDT35vDF3ZHx",
  "key7": "cQcjxMq6iidXBkAgAJB7NdHRyS5wtuteKrS3XTXBRSckk1SpRba7MGReFNBet9F52ntZaVsqwVs3ncJqUQXKrGe",
  "key8": "4MAP9NpWiHzWPe24NUGZahy5PPZ7hgrmVBBDEneQXTUYHXjr3rn5ev3kXoZFbDfmn46FMqAjPBLDCdgv16B1LZLB",
  "key9": "2LPyj1onQdGBtSiZ9cJAdp7t54RZBPixu8jJ17L9pmCpYKRHVHg1n8zdCQBg8GJoYy7gMYL9sycN91UK176Q75AZ",
  "key10": "oVumGyYDsNbCe9a85vy7yCDAs1idhQnQkS2Q9TSDCpywpwao9pPah4eHt1bc945H12Ghdonh2oh1zZvhievWGw8",
  "key11": "64utVY9xQhgkUeMXbUACCXxXVskaTKgL4sXKKTR3WC94Psnw74Qnhe8Jfx56cULhKv3BHkmWcvBBTerZv3u9pdL4",
  "key12": "3w8yE9FBt243t2SaaQ833UmB4iCPKDMmvH1LbS7bMC2JUTTi9k2KCtL2dTfqyv98gdNLjyVsVsLu1MdcNEYjDAdG",
  "key13": "3kBYK53Ub6zZRShcva4Go6MM1ttWiXZwBZEjxZ3fo8VxSXmBk5a957agMxWXWYKB56G4rhHp5so7zuuVAfDYHvBv",
  "key14": "5LrEHZFiRJN6xfn4DYjd82Bu9Nvs2KK8RVi1nNi6B84FKQARJwGvr3qV2k2YVajkVFXWTrZfKMU5mpbg8LAz9j3N",
  "key15": "37mR6WQjhmDrFz8ZByEX84BGwXfgYFDTGyj9XAhzYFFka4vivJHr79zCDvMXiWEmJqMg31et7vnVurwUCU426NCU",
  "key16": "3E5m8PHEzV2pQvBXDihQZDyp9nqSdqNbCWKZeUrVWPDUKkQ39JK3zEAzTzoUv8PPgCw1Xre2GfR5tQU4iuH8w83B",
  "key17": "22xzJpHrcumte7nJ4rZ5Ctj7BcqGdPbtecK2E221TkawJsWFqiauFX8yu8YsJJdLEf2QaShqHpQ8mVP6zaWHimJJ",
  "key18": "5c2UjfADg9NxNji2n3Ei9HhHsCHaue5RUMavpPb45x6sQPZkAbsecmTYt3Z4Yx4AgzdonRvCpRvfrCyzKpYKcyMX",
  "key19": "42ZeBUGk5jE3HU8AovB34ouApXwAVCN7AK2F7SSdQZF6X5QRrnC8iqp3sij2SYn7QVCbXPpopKarHMg9j5V8MDaX",
  "key20": "57D1cwsXRqZ3N5B9YqwUjLKPzFFDmpHaH6zuBBMJtd9bnm9WhuWjpfRdxDRt82pnpoK5p2h7f8VJ9p6tSrTnVkLd",
  "key21": "2weHisCcyEdF4unzgtCEqGVZkQsXrnXK4LV15HsvdFwyk7QX8yQrzUpAYFKwBur7AK5Uq6ipvfReeM7DRs28H8zs",
  "key22": "5iySrLp1Rwvz3pSgAhzSuU1rXg2goAcEuhojxSkvubbgARHy8c1yEnunN4myvbYKBsm7MCF3zEFMXSdfwSNnpJXG",
  "key23": "JU6kvud9XwazZLj49Y2MWobgEYecj44Kntfcxoq82V53DvMXH9s8q6bCUK1FSZDo7JLCYcQCQEw84sswKCYt31Y",
  "key24": "2HdDAufDjEk7J7tvGdgYqGDZzh1NGags48y2t3dAgJNMVSmP78ZJpupHKMm282yAkSnZxnaY75bZgpBYwp7SmEHj",
  "key25": "4q7uc9YXYi6HX2GaDFD5M5xDxteuQvuRYNo9qzcmjuQ7tqj6yqTg6yAN2qWzKt6SMP13w6qdNMvGYj6TeeiFvBSV",
  "key26": "3ZNo9cPSYsAUgS5Sd2Uo9mJjDgUAN5eA6ozbDusS6jsQFgjLfftvMjmGb2YH534224xypBYgEKMXZEjmveVvbxLc",
  "key27": "3uvJWQ2NnXAjYRsymF79P2fPaiiCuZABaCrGSAKqqiYqMkqR3zuoVgQ7NvNdKfNSSB9ja3AJCqHdw6DrvN9TX4bA",
  "key28": "2jfHyVLzGjy5WbFy2Agkx19NmANu2AHWwJYjB65KWP7s2d5MTxpNUM4EgvQDXFw6KPhUtHsMBwgMNgpWoWrdxRZd",
  "key29": "674dPfAJRHNXfpXxz491jtMHwc2yTr5ABVqJYzgXjrzdy9NzAHHbgYQVBquBYU5BEAce8bVpgC4LpKBymrhL9HBw",
  "key30": "4Hhh4QZWDavk5TcY5cmSPJnVBU8aWFhLnWX8QGxaRDsyx81JYk1bC34pe9jgcVx2YcTzYpcmeYbmQdZ2VWBzXZvc",
  "key31": "4KsMAgYtx746RvLkwyFEWiAWFCWekNL5aXHRd4o9A2CDqoS87xFoiygf3zJ2GPXLvMiFpvDeJ9hB73kyFDZdZKfW",
  "key32": "5oRbUcPawTyTGwYUYfBEZ5CuhEBAhKfeeg17AK32FYCxafHbye4zJGUrXioxv3vTi6pMwVas1Q842ZHPscyqxQg",
  "key33": "j3oErBnBeh2pQbPF7qBzWHRGhety4aSskKHi2fS5N2L9yKDGN4DJzjhL6NvZXQgFZxqV5oWk8BoQZg2negcxboy",
  "key34": "4fJ1wSkXGtnCMSxMFtUZMTxPWBYU2MGbJVqAPCu14sZvAoAf6fU3CrdufhPzony85yeo7bzunNeq5eE4ieQj1v11",
  "key35": "5Tdr7nEKgMCy1eB9PYAXPtLAKfegWdZhwckZJin8RDF1Ly58qgXdFVbQx5fNbCFGcHXis2Kos4HzezTNmUMkn6Ez",
  "key36": "36tjaM5JL4mwgde1etAZbJAhpoKjS2oa3pd9fGKmp9ZisRdQmQZ1PAgdxVPup9DjfA6QTHVfcpRBmsmVHW7Qb4k"
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
