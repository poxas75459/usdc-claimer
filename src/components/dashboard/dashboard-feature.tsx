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
    "r7P5xSVT9XvBPuA5q56ZSKdRgr55P6QtZiFF8Cbt1yQm7EamX3o2rvt8Pgj6EZrcntQkmsijvBGifGPQtskLVmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4krQ31SAU4cb1dqooYGcLcojC1bswYDAm782byD5AeLKar9RA9jdBLYbpwGrLBJZXkpYTu4TjG4Etmk6Jdtao6vk",
  "key1": "3qw9rhySMVpFJjhwBsxitdBF8416bDJUYDaXz7xgpreH9oMUj63iypvG1a8egkdHCpohyQVxiDoSoEE8ivYvVR21",
  "key2": "2z4Y3YXHtWMSaoBjD35o1QpS9TAvVLjBGMhZt33GkYbEh9wewpU8gEKdbyEcdE5vr2HA7skEapALZv7EZpUX2KfX",
  "key3": "eJhayqrDnVsyQe5e3WQhPwFobceg41FfWWWHhiBKvHt9Bh1RxQCjUbeKYimwGdntS7ZNiuUtoLftaHkHizjGJjR",
  "key4": "3HRyvt8wqegDSw715wq7DnAA6oHcqemfLD94pFqYXeaentrRBxJXmS4U4f32CGRtrrfJjUUNXpJoPx5AMKYLbur5",
  "key5": "5R3JHnua4TeJYuwVJfU6GFtC6vFa4sAyFnXWMLQSwgB8jmxwbyjRsdu8g2GrZUbRbmA968K2eveP7Jk9q3VHH7uR",
  "key6": "3UCubxmWakJKyjez9AZvCe4rcsik5fLj7pr8rBAY5K4tiwXTHmaS8toYJaifM9sAjzbqsKoMANidR4G4sLp4aqGt",
  "key7": "3FHoMDgyscehzPA1oMSgACAHHJFTj3TBGi1cCjJef654YxR516x1FrvSW8fbgm1K3VNb8HAxW2vfnYgC7S8VoH8d",
  "key8": "3vhhp4qNYLKk2gTpd9hVQYLddPTthGXi2cvwx8DQZuihsonBdUScCn8aHdqh5QdbFUDKsYGkFqhWhQCgket9URW4",
  "key9": "yJ8acE5kAMXjhsHXncp2uB9NKCzhkqGcrNsNzEFhmHQQwrMaJEvnznsU3hquLt5mdCybwW498E1t3kSp7naqEC5",
  "key10": "5SZJnGMzLDd4H5KbossDPVKKAfooHKT8zCc8ZtgcUobhDhECcTjMrurRgAvjXAFnNpEmSx5zJ3urVAKeAjSYyt7u",
  "key11": "33JZaawQKwA7Rg6njhDMVghj5RNQ4TLLJLZuLyR5sBP8sMutuJehjmzkw51tcpZYRWkUzQK6nVMtwEifWGtkjVLJ",
  "key12": "246AoV2zmr5prv2tQt2X25YxBR9c2gQ9bU9P5uKE7RGAi7RXPHsWL5wntRxqJWfTrbLM1MG81vrKXYuQprrc5s3y",
  "key13": "2hGudXk4SWw3yFaRMLQXRj4wxXVkw9xR9m7Qj1JoWdFi3GyXRe7HXp3JzjWwJi6GKdb9CBMbKAfVBHHoHRGXbR15",
  "key14": "3eg6eMxnGHetMMLxvX9x83fXyUesNBJo1ZUjugh5wNTSjrbtW7YaTNW5AFaVB2DFBKANDvD6rBbVRiQgp3Bw7qyn",
  "key15": "3yrbXhmA9N3opC3JMdbFR4XWWrpcy7qEbK7SmkEP6PY1WaHAXQ3p5KuKaAMth6nTwRTCACd55736YJnXcUYRexUc",
  "key16": "3YR6ha7ecokeH5jdC3dzoR7TrmAgBMU5CftHAyHYVR312VS1X11Wxpt2cSUtKQM6sdSoURWrpVkw5vSFYrc4Xza5",
  "key17": "N3kEuEHD8KuUaVKeouXARCUGcdTTDfAk4EudYGeobCBysUoPau55gtHmaeEYKsZW3hRBkkKv6JfqGPBEGawVH5i",
  "key18": "3yfe9rburfYX3mFuxcccN83wJc9sECiS2gJD9ngseEtat95rg2NSojd6kfnJUo9kyBxFJq4EHRjcpSGzHTHu3mZ",
  "key19": "3wN7ZEStrbnLu9AYBarMYLbS2b7qmoMBcApuGExZEAhNXL37LFLReywspqJrG8baYc1Jp4gUtgspe7EXTXRcx2YE",
  "key20": "KapBe4cA7NeS9mUwpBx6RTBrLSyrLAB2bPzFakRZHGBPqC7bo9uABqQMW1GNWSiBGxCKpgK2iLas11Jsg7CSvvg",
  "key21": "2sBYFarRER124cDbLRSDCgzo3qbRyw6kxveyPPNu3iqEymFMVbMPnmG4pwcbM2ugfRA6jvoGBoDAJK66iBP3swgd",
  "key22": "5S1FFqQESkQjAJJfxvZ2HjWGMSuFqPnLeBAdivqBTgAt8f92tMBcEEurPP4mFvKHCvzW5qBzb6t1JQ1Rrwv8N7Hv",
  "key23": "4Dh1pE51cnBwKn4jKsWPAHTpcJqQ1fk1GiArCxnWwLHuFTYrGf9kVDfLEFCrhUuFEENFgS3WwbTNbUd2gMTVFJtC",
  "key24": "mDt3DRDBJBREFrtgVVbhdgns4QEztfzTemZxwD2oQhwqxgqpzs4sFivUNoBxvfD77CdfPCbnMjAtMypvbN8mS1R",
  "key25": "4qfa9fVZjYeQziARsQvxBVtQPYbHxC7xKQHVFKxKneLUKyH6LLZEUtagwo5qEqLmswnAWECWth4WTQYgqAow13RX",
  "key26": "4xUUBLA5gXDJfRed87ZKSvZrHMDKtAT4q3Ba5CTAnK3P9XrDCHBcoeFPMJbAoKBuBVFX9ZByAGBGnwghQ82w3ahH",
  "key27": "4XfraV2Nj8kZwBmwbcFuU2M2rgjybvgJc17QEaQYCfRhK1q1Ho22W97NDLm91cFkkgfdviJNFeCaZUvoFyi2FBVw",
  "key28": "Rp6x8qMmzVfXZh9nXLcJ7ir9y3EfYnCbXr2koET7UyhaBzw9EpfQJX2UBQ8pezVj69EnjVLwAH5wHkKknTWoayP",
  "key29": "5xmDCt4p7q5j59sq62KCKYid36v1vnZQ3puNQf52ed9KFoWbwnMfqiCJW9HhiK335C6TmRWTSa6qaMBU2CQiEvtX",
  "key30": "3Je6MWdiDvGdgsVKA36Yyw2ryrNq4fE75L3dT8zNrrJgELhRmzU8fJDacH5wtaRkUeKAh5gkK5ENECA8MLGS9YWZ",
  "key31": "5A4zMfP4tDKRAunznGb7rHiyib8zye4YdCZBTZiH6dMRoNFMoxLZt15sLwAfJc763kaqRNwKgpxGNHRwWz9ntiA",
  "key32": "2iYv32XQJuxo3cQgMNAWYE8BtJQaV6WvecKQCDy1TkybAn31WGnuZWM9TRj954HnhxdZuqgyLYZa7vLjwxgZ2L3n",
  "key33": "TUQYYUAc6QSLZbuuVAhxsNapFEiY5VQEWX5FTsFrHktJDsV698pugHXV2S6svWTfYFWnkAH6a7rstKU863ir4Hg",
  "key34": "3XTuan7Tw8F8dSWEFByVGpD9arFPADbAvp7dhjpWNNvCfdRFY1TJK19VNig6k5PERDwaiwAxiTQa7gkk6qDfnqhC",
  "key35": "MVvvGsvEFKANtsQiZ3zDy3fABWvq45yjY4Xjoh2u9dwk5Yi1TC4Y4WLHDY6WEZf8mG5EJct2EYnDmCpKMB3noiQ",
  "key36": "5t6y1cj2DSffXwPKFcb36b84jY7hdqC43yq84WeQVd58Jp5qaFRJ1pHXjKtwcQjx5A1SLYNCdYB72acj7SBDGRqr",
  "key37": "2r9bubbQSCoSwT5i2fQzahKqpuvutX1LcbZbVHqn8vtkv1PgCdLWNaZnwu12nfSxkCgcDwE5yg7rxCyMAFsE9B1w",
  "key38": "2gACPnSWJ8MBJz6EftHEvKvikCmm38siYCRP6K46tFr8WNPeR7pXXiCvc9BBzzhfDh7Eh8SSbqUNLKr92SXGfvNv",
  "key39": "5ucm7ewHVXbYEXGPXBtMhLiYKJozGY95JYrqiggaMAfWeh2Ey4WKPY5s17uTud5rUt27CCCqmN6cYUcWHXiRppPU",
  "key40": "55N1JB497VQYH5doXaed6RUWWPJArNjqcHtE2JyBWFJPMesqKTBYX93KsxWUcEoVniLCXqWdzsrYrt3bNYFYUfLr",
  "key41": "4LUJQJ4uNd5Eu8nWcvuPKdDFeFRbA17MCEr5wMZbpSQXDfHxgoW7cfWF1EZBjxFAYxYwVLDrA5MA1rfNQXonpW4A",
  "key42": "2h63TBqcmiTLnLqnV36ckbMYYum5YttFELw6ULHfvjTLcAwyBt7VwKmkVsDD6pB6Q8FtqAkF1kPUwDrvk8G75uno",
  "key43": "5gqrbQXwKexxnXAfAyp8dSnuWJJLvqGCbeiVrWnoRQ8tsKc9eMw1YtSgUzuVVNnBDCFBSjRTZp9y4EnfH2dZ1AP6",
  "key44": "3d5CvWiJmG6P6T39Zqf3R2scU8idX7cYpAbf7hsy7LPGWewzzzYPnKpZ9NeqFpX9KryAp2kKBtbA2tgG9p9uNnwY"
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
