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
    "gaiZyVhoRhH3YoET32YDzAwmmSd147XuNkVjafBfV5BJwAVTBVFZafF6x3TddstEweQaxsBBSgyUY1CLrRQud2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x5ucSnWi5yU5qh9Ve3pRtJfG2XnBUrCcgu8psx4vuTRFqpaCR4TJbZUM51G351Zvomqdoj2S8kmT7Exr3JMDGvL",
  "key1": "3fk41CHn2WLGW9XHMYFE6NTy56W6B1Cf2BDFy5QyDn7K5j5kXtEYez2fgqMTwVGZLXH1kAHH9XzNeqnkGFDP7qcw",
  "key2": "pzsVPzxf2CoPmDP5D1YEJ56WFsKmnSdCetk33y4ZFwJdGCH3ekHaTQ7qGbHssUDN5CQoUHASeJ8totU18WfnnsU",
  "key3": "4pLFRVNLKSfTYnXNJSsJCjwub9w7DYodgqcQfBma2vqAtLmLuLpfgo1C3dLnjHTDssjxMHpCAjo9mJJuAf7CSVhe",
  "key4": "HTEkAEe3BBgUkYMyaKz8c28jTCLALAGxk7DScMmAYhMoffZkGaSTC1MgGnfr87x3A7pKWwz58zQhGMqsqUmvMgz",
  "key5": "2sqYbwfqpUD6PZPyBXGEvSCLqMV2H4USuxP2g6KHXpXHQ4ZyAtx6p5WeTLrsNEgidDQhLnbyPUcPBFGLx7di7PLB",
  "key6": "2HwdRw4uKNWFgYbrTxUTa43MVae2MthEi8dXmGrccxr2uH2XoVqJw3pKcrVpc32fowya9dHbHkbmXNV1qweJ9dc7",
  "key7": "uy8qngKDNmEptLNTyiz39Y1VvnT99PfChddat8KQtgYBeLrymkofRde1doJa4jr7mFWvkUWT8njRUWQCt2nSuKn",
  "key8": "8KMknDVUXcDxyeHnEeRnhWD881obNKPr3x5S9NErHZJeHySA4E7M8G5WPhUXF59cw3fVbnm17SfYqAWNmNYKCHU",
  "key9": "48sDWWtVY9BEiZJUQhSLgv7V3tDywFtdETMVKpqvqcTSVZusNGE5ejYrzNxGS59msy3gkVaqyhkGLH7oY5rKWmxR",
  "key10": "5rniD2N9SoSWjvtTV8UAkzjhz8mVRSnMStfY9FnfrHxtNTgoeZoFkwf8DhYzJFvmZj14897rhZkcrcNHxBKkRF5X",
  "key11": "VrbVGgw9hjWLngKF3KkD6LHwGAqtQ4dp5x6p75tahJwUamTH9DW8t5RRMiwYBP5PR1HvhsNB9Lp9yiGZWXaycuA",
  "key12": "UikVjg3FyoYg1yPJrNFUmEmZvb38YtxCwbF9VCEML9G6L6Pn1gCqqFWP8cQWr2ia24dPJmf1Rjc3QYk8rF1EEsA",
  "key13": "44GmB17XvPtJ9Yh6CQwVajt4RqReg43nzDqJqvS3zNTkxHKcxPgN3oHMkwfG11xY5jLwKKjUt8kAzNvsZjqKDe5F",
  "key14": "2X84RgFuSzVxj4QpEzfuZjHQrcT2xJj4BZM8RDfDFKMXGD6EPs7c4TzX9zCgCLyoLg93iyZM4iRs5W2Ld35ZDS4H",
  "key15": "2xorESGS6NCxyiDCA8Fh3ZKNtThjPCAZvyxrwz4Q8GUHZ4wdKUFPGuFSPyqdTxnSPaLhM2zLTe7jYVDzHmZMFazQ",
  "key16": "3PXiQoHYPNKCjAnLxzBHivSjiHcqYFsqGhQ6RWR32ZxXrCeHU5G8cwAAdE9wk1Q5bTUz8WG5dnC7AvenSchd7eGx",
  "key17": "3N3TzDMsC877UzuzY5QU8rQNt9gBLgM5G3kR5KpSrHSPgc7M8Gw3P85JVL4PXmuUjfc9mHqQXrEr8KXkkKxf9WKZ",
  "key18": "5VDZuUMAvokxXi3oXgfw3Wh5tAeSyzBRqVYcujyfvSc8ffTW4fSnxXwy1MJcU1X3R8wMGC9jMqALgQwF1eiRZaW5",
  "key19": "5vLjZmKg6PHcjWmWpwzztVRYYkfb6jVG8SHSYcgdiykdJk33wmCxmL1djjrXZ9fpfCiRbStbFuSiLpuByccKDxYk",
  "key20": "4dF7fbR1iXpH5mZqkw4kQZcmXpEv9YpQM97MuxaDQJX5BUdM6qwddRMjPm4xk2DzDzB5gY6gbVM3ZvuBiUZ3AuKE",
  "key21": "3U4ieSJ3gaU4kUNVArxqbCpJzAwqwSjjgLuVeNyaCPZeQneZnVpvT42QTSLP87g8xYv3pBkjeaJemtLhtPvjfEox",
  "key22": "cWB6CLdm8KEjxaFg7jtjtCcEfVv1TLBWsHEUnhJhaBuNvpxmgzzcsZynL3UKg69fSyEhVkufx5wYt9ZiP49SwJa",
  "key23": "3RnS8Na75DtToJ4yopNHbTmx6CqEgsbWFGx8J76C26VUBa79xtsBta6i6kYsynDGCr8yatuhw8Cgo6KJf42Xxd56",
  "key24": "4T694k1G4ceJ9Ay334jmT83ecxpuVFT6pYVN5GQrPxkLh3hUXZ8reuwHymH4YJC3n12rFwp2iHStcDCS8oJeiLfR",
  "key25": "3N4RHae4ZhMmgzefCgSRnfoe6zZqftfB1Rz3ZmL4HrPkAUCDzWUpZQqtVJrAMzJEJkGBaxQhLfGkyYK2p1T1F6Cb",
  "key26": "4kwQDKXjSmRvNjD7xCBsyu6Kn6m2VEkFGjDffpDwHtBbvX3QkjLh6PjvpweeTMpFkZsworHx9AeN2DBdaJcnRzsW",
  "key27": "3kA3tNX5YnkvQKiC9DqvZMxhEv8KYd3L9mWyL1KFcr1DnZZqJ9KNAh1YHvx3S9gQ1x9YM9Xv2MU6Rmv2uUJyrTRo",
  "key28": "3zdNCsF2kMzRGLYMvkJYr6R51XNQKXCrwP8Hq9WwnFzghEyrtv9qaDGUsYoDvacDKyz97jzjunT2toGF8y4vt8o9",
  "key29": "4KSfy3xsawB5Epoz4f14igCD8nDjV3zkeCyWg6rEcXLpgjRGzcqyLBJhpNpnaHeYpaQo2R1SdKnxqD6SFdfSkjbh",
  "key30": "4sHLZhwzKb9e5LMHVRyq7uJr161yqGjTsUqraT2FSyHJwWtvnat1iXVXtSzTvADKwcrXX69i3rb5ZjYqpepUpmBp",
  "key31": "2r84qQMNCjyLM2HZQX9jXAtEGCNHCDKiTxKymzH5rbVrrUeFkv6xu96YMQZEGc1Wnr89KCSG2VDqXWyVTgHDai3c",
  "key32": "3M3SaqcsuWTCHz66s8Xm7riM3f1yiE5YhkuGcNvWjiY2GGtBsoLwH42BtcMCxkhv3FPBVYmM2SmPNJoTeP6kEnpA",
  "key33": "Nm4oRNqmNENc2CyLth8M6KVhsDzc7vcniPBkETuA4NbKdmAQPzuvnUmCe8WT76yaaGf4PPseQdxs1d2Na3YCHGn",
  "key34": "3gBgvDXD5bq5dKh5rp41EyLcJCx41PCpptFcx9XCGGdF34bhKfUe6Vp546RzF8o7gquq1S7gpXoziTLYUAUTJdCm",
  "key35": "4q343thCL6kDWi9yQRCKSiw8DtonUA9pYGTshGzBznYgmfR2eAfpcsPR71RP5cYzZmnjZmwwMt7JbrwanHpUtcws",
  "key36": "3ynBXnj5qb1pJce7sjsrQfX3L3DKrHb55q2Lr1Pu81axPwuyeVkRfUQf7xFjzHVKNfjK65U35pgeiegjUvkf6eMR",
  "key37": "4y7TU16mAV31hqnEHwPs1nGzFS1J9b84YSp32fqjsSvQ8wRHfqPDwXrqmJD2nMKk5VhDmbkhpCiGPREWwT1K8u2L",
  "key38": "2VqzigPBFbwnL3uBdDnEoCerD44ViHYuZDh9ZjQfPXxwYcakzaZA31946DWqVW2yFJeBt9Nfj8BFmyf8JaRjuVEv",
  "key39": "4desvnYGFAYqN8heK8ciZ7Dm7FKr1bJntiJTZbKAH1R3T71Ysvp3VzUzmu3noJUcS5W3gcyQU4iSoKRyxH3kz2F2",
  "key40": "2yJL6AokELTJHnNrFaGpNcsS28jwZBY9gdyvczJsBGuVJhunErMagAHoXpZJZrDMUFuMrr9H83zfF62CWwKAZP1D"
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
