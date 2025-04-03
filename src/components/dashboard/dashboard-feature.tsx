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
    "ia9VnneJh3wjCPCzEwT6FnC9MHhXdfgaxei9ASJJKPCGNg2v1bhzyg5jhCtgf7MKfxgTNeeUw4S4gMjZ98xrEXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qAyWMp8Bz6dHMte5pjYGAhYXgmMKkYS8AXNCypT5MbK5s4BumYeg5qH61ADoj4MoZd822ZTJ8ggFXwZxnXvRm29",
  "key1": "7u1jeM5riRDcLJN3pKRCviKzKMaFfwffqSdqoxbZs53YpM5kBhu3NGpQxNwY5PiG2RxRDy6gfZ8TjgFyNtHARDD",
  "key2": "41QLV6BP2ZKGK962H6jtQtLZRp2fYW2PhXmGjQn6u681ytihK8FGEM3ArEEx393Wyvhkdc6XGHJpyMLWr9epxiyw",
  "key3": "2w86viVgFHVLEtfUkzHuMrJYU328ewLJPTFthQSFdjeueTUD3znVggsG1yX7K2nRXAGPS6XJzosCB1XjbbwZve4b",
  "key4": "SzaMabJnFgj1SYJ33khUGs2hNCVCbGbAinCdgrChXp1S3MtcwN9HKUitavyB11J5wyWzS9Gy16HVg57GLVLv9m4",
  "key5": "4QsR5ftYMfM7YwntpHut6183TyWJtATayANh271rjfXHF3b6LE7QeLZ5vsFMCxwtu4ES98qNRNaH82Zb7FkrWK7K",
  "key6": "5qHya7oibmoJAZcQmn5H8zA6Um2DNtDrdcMqTazdoqzMdwjmSVuD1YcvduiTJKiDuYukGtY9EhGPQFHd54NbTrWk",
  "key7": "4J3mafnj3JhTf1aPPrZZwTGaf572HzY8uGM141gzE5xkFbrEw5pjcztasZ2YXa8kX2nJE3LGtUxpCi9tVQjbfwAj",
  "key8": "2JUEcX1yHnp9gzoMbdmywPWvKFYN7iuzq5LYq8tqez2L6DXnP8ocimzX7txKFzDUkrR8tpaRjkHVZYwE5CqFjrsZ",
  "key9": "42wtV94nWARGAyrcmbLX73FB2vDPsm2rcDEhQvH2bqdjecMkAQT2wjVEMXy4a94UdonCuBtUkGTCVSA9hSVRZHz7",
  "key10": "4r9g5bv3HvB83MF6sx4XoTmhUXwLHu73k8x1XER2b91KdXiQ8JYMAikhErjBtpqyTvUdtsyV74MKKBAJqSE3T6B1",
  "key11": "uuT9R65VZQTB7e9MXsv3S1aDcAaqwgKQB3qRmEYmVb6p1k3ZbzdHR2rPsDVa8zRoWayGsMxeAXryra36yisKVjj",
  "key12": "bpqnJ9FnUKH4CPEmydmBiRtJJuN7qCYZLKNL19rHggdM6kcbnjSMpx4uR2u5ef3GwQWQ6EQjf2ksXSH4q8mPmBq",
  "key13": "3GVqW5UQUifL4JoThAKDfJC2W8nBsrj7p9yGh7uoMSsFkRuJt4L2hzwhEQ2ATEyarv81ac1gxE4fCGJMqySrH6J8",
  "key14": "5NBHfqRi1HrfRm11MUBoqDPzZ1Rf1fbLWnDefYwddPA6ioBomQYdyYwRk2JqjicRirKcM26T6KcGX3hKdWw5foef",
  "key15": "5aCkC5Np4PFymtCRsddBRoaZXV57JmtwUX7BHGg2bQJrSnM4xxxDrC6YigXe8VFwkevnKB1iwbXm3fokXnYhWCMS",
  "key16": "5PbTVjHy7tQhA4Fm8GP6Z31QAfcYdH9eGJc9FCeBxHmsy32nT1qkTpqSZWhVkisxGbcRePCMCbTH3ov5HSZK1qbH",
  "key17": "57irYjW9hhgrYKnXi6SGBdtrTvMZzzeoABCfo8shYGM8Z7e35ZZWqF2JhXX3cwHKvpGYotTC4bkTQ13BCpEHsYTD",
  "key18": "2hkANayUWBCSUQfyj8DR3oX7jdnSFdkJ68VygVhhaKULx1VeMSJhW9TPDhrF8Pbu2zSzLNnrj32kuubCTaAWwaPB",
  "key19": "497QifVbvRDVTEWL4zDp8uHPJtAUYu4Peoc53YLf5zyhRRPgv2kaUCibHM9fFYCH7dWaCbxqv4uEEZ6rQUkwrEAE",
  "key20": "469VPsyFRmT2VciUgWq6NERurPDucNx7dffJugPNjS44ttNXJa6iBqSUTzLzYssE2cibBhSi4Vm96ArtxH5jPGdr",
  "key21": "2mzaAztr6cnQSknCYhcsQgVAQHfyE9Rk2to3bSmJYByJN7oKx3zhbXdqha9aiGohdqA5ZAHXREKLXbw2pZcUrN5F",
  "key22": "3FVjF8em32L3y6bgdAFHs9mSd5ESDFfFuCHUg9xvGKNqDFDvAiCwWL3xtFWbud6SQ2Uzc14Es25dxiifx8nSKHqr",
  "key23": "HgWVeRXLUEGkSF5DwWFzPjNS2AvL16GVaZZqbUsgHGG3MC8Cv3stSkUX1JMmh6oSh61CSi2xsnRuhuBbuwbnk1R",
  "key24": "2G1BuayPv6U4yrSBhmfixdJcx7jSwFDrhp4ypVsH73juB6TjtJXf1fW3UmCRSo2xZd4bSjqnUNPPxsL1ReKZznUs",
  "key25": "2FSUMEvsThfmqwm37bws7KLZKcdRKoiuq1qMLjCkEzNzUK2QNkysKZf5FMf2HNoFCuxwgEr5HtaFZ8d3VToy1fpn",
  "key26": "4oV3buCp76zCVc5DcuQjnf2DsdemuLLvvVocsxzByGF5Prs7EihehYBkjPUjWPDusMjxvw7nUpyt9vPGGNTfncid",
  "key27": "3rAU6fxzYvjHwP6zF7LBUBeU8uM2FHS9FdPtLcByiET9Zz8DUTiryWeCsnvhactdKCHacqzT9MXucFKhTMZQx3e9",
  "key28": "2FLfytwcQMTjAhWdFqDXEURx1SmV3T8cHzQjuqzTkFpy3bbGLwDcVTzgpXNpmE7sBuLB57oHjU1HtrhTBhbWD8qQ",
  "key29": "3ceHe6EywF6yk16DMYoC7wKrw8fRDQnXeYnrY4E7aW8NgC4xGJvdKbjEoX621PYFwrZtTvWddTzeAFTbyMZ4EnCq",
  "key30": "4yU37o3sgHEWfyXWdM9CC7xTVquqPhkCopBpLS4DUrTSBSG1auMPo1CvyA9mAP87QxQQTANNRvQXeMtKL92FvCjm",
  "key31": "2BmuWB1hQ3VAV4RZFauafeeu3o6UpAgfApGkGAH6xjQZbuZyWo6ydWtfmb5H7eopZefHPbuCgmxBPeJswwmhLht8",
  "key32": "5fa6hyEGbDsCzvWnCTwu2zqGB6vX4ZfbLqKMVFKEDKMmP7KbsdqBqf9yjp5UkGFc582vn63gT11kzmwbQbjx8oPW",
  "key33": "VoHWRvDXwN1hy1ACUigTjuvUnr4B63ejnFV5gj263L92gyDxKLosfkXXfa5jyG5Gf1PxtXwDn1Di2P6aiNWkJUL",
  "key34": "5WQfNYUK8L5XGA9vecD4zNPHBKrfRHNBei4nVQWAnnxwJAeSUWCJqwBLiGPo6qmC9EFanzRfygTZkvezjA36SPrQ",
  "key35": "5wjfKRTXp5KKV3nasFbCt56o8EdUiYsBpVCq1ot6z2MjJSEf2b74MVkHj3e931NM7sgTPYVctKUNwC26tQmZmzTo",
  "key36": "5fejHKXVF8e9D1G3C9NMca8q7UwAyvdz1h9MpKoj2K62SSyU4QTWxoQm83U5KGRwM7k4GPpS4vBiLW8hrHgEXGAE",
  "key37": "2YRz7VeABK3ZKJFmaj3SDb7ipK675YMvX2mvh7PHQqbM5zNGGNZVY5MskdAEaQ8Ws3zUbEWnAe7QDbSxWZ4Wncdq",
  "key38": "2Rb9XL5a8wE6NCNM85eSLDBtbGw1JLMnD9o3zGZGs7ZBZMzYDRq4dJiHV9BYEYDPDBsBwfK9w1xoGfui3RX69eCc",
  "key39": "5C5sRQ11seo6kbcmYnritjXJ1GuuZV83r7Z6iHz6PNC4radoiQzpGgcMWifTKac3A2ZuPua7bnfsE1EQ7oDq38fR",
  "key40": "4hVgCnGXGnAjz7iUJa2qdLqQNyLaeL911R5negT3HZCdAY3L1t5MQP819Rw1svp5VpV4dQDf6xEnayUGGBUeaDfo",
  "key41": "i6JWbQgGVZ73eFadRMBRhGmYX5ZYf6tqdRsmCeEJ4qfq5D5daRnZyNC2ddT5ci2DNAfmcx8JMenfotCR61Emt4h",
  "key42": "3pJYt1piD4X4w9DUUMREejeXepqA9b8hVtFyC3rYyV5WvjngFzu5hoCNHd2uRJDK9mHVx1ejbUZ1khqpznSV8PhM",
  "key43": "WbDe17x1aDTJAusJtChbUMY4Xo9Houphy3TfmAF9jN2WS9p58qjkCp6YLzvvBo3NkrrnM3wANTYNhRDhsn3J5Cb"
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
