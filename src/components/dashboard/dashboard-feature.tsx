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
    "58Mx7Uk7wbLfhQUH4tjuhqzfzVuW3nLoXvAKt7CDy4vTohYGVxM5pkmu7MF9ceoN3FCRBvgqTmMSNi8bpjy6toRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mpSy1rHrwpYRAeaX1fnZDkeVD9dMWCScbS5ETgq2zkd83rCsQbgEfvv5xaZEXMFSEPJGwuwZt5TRJNMqVoUbdVS",
  "key1": "2GgnxdRGLz9G4v2DJVdKkQHQmEBCM5fqhhzeuY7XuwSka2KawQipiRXJkLRmRzR2XQNYrBNVgMu5Nu2BapzHDjnZ",
  "key2": "4ZsUWzDhjStwCLzzm9mQoA9odEzt5CnoZn4aLCCFjzgCwdSEUTHJrEe41ybY8fMcakV2U8W7yJSPz9XWQTJ185RD",
  "key3": "4CQsGeZ9r8JZpLTH4i4Rfpdos6MDSgAoahEtdp9gYhusxuwGnn1MfzdNtUUAwgJsqHBZYpiTQGpC8e6Bud8STz5X",
  "key4": "2fzCdarUxRHKBCkNRubVy6NN329cTMYryXWnQvDkWcygJgZiR9rEeXeej5ce6FsLvvDpACCJimF7mTck5oicbXxy",
  "key5": "2Y7cwMCmY2iRpckjz4X28gzoujms9XtqZPGWAXXxdcNhgbaAZFXVgabV98qScwj2yVvLmaJzPmfzsTANtKBtHrm8",
  "key6": "4EWrFKN2Eh5NC9KcBNjaYNj2navhrvf433g5qzenhVpgxJZDqxxXLhuRxN9aCYnbiqeJfK7sEgR9CDPgRSbjtTbp",
  "key7": "4XisabDLB8VxjoA16eD5nvxMsTKyzzLedEUWn1nqHqJv8S4nJyXvRWmbMrEzevYR5rYAvwKBoBHGvt4beTggAVy3",
  "key8": "3D9J6ED82jw59YCn6ZtBMSwbQ2ozBTYPV7onu95oKHcMZLPJujUUzCqYTVbGuC1qcJKVhJiR44XvZ68xdQPy5cix",
  "key9": "omErE1DejemjsvsLy6vchV97Wzb3c8N6nqzYft7CvHxSQ7etDEGqp7Xfd4hQ1vTF4bNR9Dx7uuyRPCSLwiqenZa",
  "key10": "2ayMfEscLciptT2ZVqXauApeFn6ux22Buh83W5qYBt3H5x3DZezZvbQjSiiex8pGBzy4Tw8MB4SFA5UxA3h5oqqZ",
  "key11": "4Yoz2ZK1NmaSFA1GvnZf5TiTxkFkhE2x7uok4VFhTuywbGdKpjx6bx23uvfzeLLsk2qyeCoH4NESkpnt5Do2VCjg",
  "key12": "4wwBfAagpX6bCtDnSXGYoMyExsX1qVEFSG4fVKkbVdmrGtd741WL7qTiDG3DWKkKhq9iHGaXqtZf4vws5XpgDNkJ",
  "key13": "uVooc3ZEsKKjyfVfVVXqw4ioDWs2gRhrsgoQE93iExSyLhBRrc7aERdh5AAzsHi2h6uRpkd4FZDxQEPe7u8aNBk",
  "key14": "4oWqB97zFnyDACsSz8aKaqYzDTPs8rfebUNmmgWtu4TGNDqLK6nfd1PEWQ386gZPq8qXM6XwDdKEd91ya1UQkPVN",
  "key15": "3Jf8ABWB3TDYFGgvLfadDi3wW7NQZ1BVcUw9zqGr13aGSw52q5QduwcH557qPv6o1zAySbzxdSYQ4Bn1rSRkrE3X",
  "key16": "reoVEjbZZ9R363Qs22CPCAAzmGCFoLYoRaSYJFMkfDeLPMUAixbsjipQS2fZ7Kt9RhRQVkFB1TX9Nq1hzzGjnht",
  "key17": "4EMq2RJum4jurx5VBxXdK92nDedBtekbvpxY1foeurq4W2oHvCWBCTLiUce4yLWVnPiRVz4736K7j9Cvr4bM74Ln",
  "key18": "5P3bRKuyoScHKkoSs9gex8iThMpSV6cRtJiP74amhXnZ2YPTnqDnNkMB6tJXQ5nxCT8Tth9irGfEp8xSjtXkXi24",
  "key19": "3W9CxLCkzQEvwEdhPqRUPaqW13Nm6fponj7jTgMo558AqjZKLx11J3RP7mpQ5AtcPoT2tjSQ7KktP3WVEVpmyAG5",
  "key20": "44syQRpd6KiuUtpJunWEft4H5umhEV6AHPhFLj6HxdAtie8SFpCZN7Md31DyCbwXtUnKGmgM2a2JZcM6g2T6Pj9a",
  "key21": "4MLNv21mQ3CK59NsNSTpprwwzidQWr4j6RWrZxt2NXiajBU6tVSuhyP2QRNw4HNPZ1p7Ti8QRmBZjoR1b1WAKzrM",
  "key22": "5GGWQ3MbSWkcUssLvmp5gebLF5XUySnhiRAH7wvPkjr3DQ3meERCXJvWngoqnq1rKY6sDwTtrcaw8YruvCwqvM1T",
  "key23": "3mKWZyQs8hHrYWK4ML9Xx9XHVvEymPTonSRkRJ5KSDXnvM27xq4Luy6yLnXK9RwRppqQp9SKsmhs4v8RRzBQhx6a",
  "key24": "3RNqmfgdydHfh2kZMGH7V6c9NJmczVLq34z91W29Vk6waS3WJjf7iof87eG43RYHTC4xvELpD3AnPxuwrFFJ3Baf",
  "key25": "4cUqJvdiBEFnrAUAjQ3HQnkYXv4uUS4AYvVShcmddKzhiKpTQTECubv2Si8SxoxVYydUjdxcUgtcY19ph5YNcpqZ",
  "key26": "3DAk2EvAGgjywzbTqsUSFibvfLHmiE57oJjaopsamJ89tdvXwVEq51vVV2JM4FFCUntpMTi5F11rG1JLwHoiw8KY",
  "key27": "3xGYdUDDk9378eivYSzbSFPZriJajF4umAWA4T4F1yGzZNHk6hj7KrcEUsfTLXWe34jiNshp7xPT59VAeNvzWaZ7",
  "key28": "49gAz2tr9Fn7hwmkchxpedJ3vcUoMx32r9Nz8BfJHRzgSjBzsZtZ4RjN2C4TtLWFKM6G9Y8ReuTe1CLk6QQt3YYE",
  "key29": "66MCFK2hGkZsjTo1jTsPfFpE8mXuPTmJqRYx5NEfSzpsNTmN4hFX8RceGA2C17w8hirxfFPk7FKpgjjLSWCskR4y",
  "key30": "4gTPz8F5VG6y7aQyDJCpgDeCJtNAs9gMZGKtb5MdgJfDfYpFuXxKkv9XnXznttTknzuQRkczewZ8U7AmJGhzqCo2",
  "key31": "5NnTvSGPgtobG61Cow8gH5khpv3Qqsk7rDcBj9U4zhj7WigF9FdNJo3FUtQkH7z1SkixiWQcs1qpk2YZqDAnB6ec",
  "key32": "5RttfBYD3dtHFvXhfb414ZuRkSnNGyFsDgMqkY8i8rBaC1xK11YA4hMRHQMba1QdvmbMYiLTv8UVq7ULhtoFAaiy",
  "key33": "5RUwMqF2AU2ptFV3t1Vc2pnmXCGC2u5GYBLAcyDQSyFQHHPw2W6RWeUtNTVLwEKNf6xFqvb7zUKhM6qHV5moKTs4",
  "key34": "5sxmby1AvDqMZKYKGsartBhfWwXEX298ueDiU6yVsq7GoLMPeaRtRYg5xkMJ7RCiTrP5KCJk7MQA9FytC2Co2YS",
  "key35": "2nebhPhqj9UcAD2vjPP6GNBbPqR1PZbU9r9v733MEXXH2pVr1FC6ZQvqSwzSodY2oz3dB3CWGjWCM5n6beBms1T1",
  "key36": "3SwZi4mH8xUJtDgJdmok4289xKZdfrGioUVpJ93ZNwMS6XbBEaW9d8cc7FKtavAfLtVqfty5Lg5DjSk2ovHM6VSS",
  "key37": "5HY56xNLYVHNvNp5BHajMMdRouM6Wof4a1E1JWgEwQ5MegK3coTuZviAkgFNeYdSc1hqeMRnonDfbgQHPKwQw899",
  "key38": "3FyTpfAN2szkzLPaeMVfsL9LjUTbseQKDEAenXCAkL4Ck5L46RHWFErV5idJoWsmFf88K1wby6p8Kv9EMPuzzgUZ",
  "key39": "yPmFv9rEALgauRE7efWDwRkTX7NwGQbGhWfwQUQoetQBNwAKuhnusWZEisnmd3Ttc98ifc2KmDxub45brgqvBFG",
  "key40": "2FdmF7rVKqpxD5TuN8UvDMjd9uFgCkWT7j3JU8vt7CCj6pTgjKpZL7bDi2hYgPJ7ysVSGwXAAM8y7aj2WYyedsny",
  "key41": "5K1btxtp2PxzdeeSUV2uJzArnVFTK7Nk5pSfajvMSdeR1dvHAhdimDfykxZrUXWkVsN14EZHYZ1CiH7Ubu1cLoSv"
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
