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
    "2V2sC7fSYdzH8TQwQ52Fk1a2rVdMCPcUtpUmTVsnyjoY6d5ewYo44XuqpRjoLotxxbcVvxrd2b2mePiLHYWThrd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qvt6DzRw2C9WCD4zpzCopznmtyHE44FQzCD4pMtW3zrRxXZ1LEcM7PqRQYyDiroDqUyJxQ4sPJM3ftfyq33eE6p",
  "key1": "5DJYnHMzgpGNCYpNUfhiX7B2zfnHmJVrHAi1ZaPCz4ge4KG4LpdZ62yj173FR15HoJWFpA9Akxnsu6sdhNDZZ9cW",
  "key2": "3fN2RiXAQZNoHLiuW43x3DZoLtcJkj8pFgLXXF9smF2zrJg6NU7TBLtw3g3Ngh9WPCAjoCVjY89K2z8FM2ccgDpg",
  "key3": "4h6JK4RBd8xAW95n16vbYsVU28jyxg8iJCJebwH21ao46LtCJyWaWxNxL4UfFvRctLcXDqzhrNmiPZaWWggLX3xh",
  "key4": "5zfGnsc97GtJHhHnnJfRxQwRbh6iMna5m9DRq9HUvx6zwoKYXUF7d9r3KZJ5UU5iLgJh1LEd7wsvgiFH9gBBurX5",
  "key5": "5khh28gkianKzGUUqsXTvyzni74tQi7N8BgWsdSd366cN2RRKyohbcks2ctjeBup6WmBxUrNoKnPYqvYcQx5s4b2",
  "key6": "57Zp79vmjbLxf1kwLcnJnK7CBi234xjppeAjcYqDzz3YB5VFiXNyxF9UQWYpJKeWaA4pmd9bEXhpA8NSJzEEMPE9",
  "key7": "5hfeCdJeDpx5ozfzCP9M9f4rstbKDZhqTutqBWtH5ejH3QZm2SmX4zhyM2h8rTHvN9DdF7yxP2eKmd9zg1H964Ds",
  "key8": "428nCTQB29eHDE3UyrAXkS4HoAo1LmhvwHNVxnN7QP9o75YrHQBPF14jAThJ6qXe9VmgVcTcWC5JnDc3M3pHEEUq",
  "key9": "4EAXYPh89mBrvDxg5DNWj2XLKHHCUe5jUDe2zLY2Gy8BcMpdtgYRb7JBFAA1SJrVmhS21vjJyPFRU99RZs6QYhgU",
  "key10": "387KtFPmGzPDyeHFj7NyBEBeLtnFGaSEtB7KRkt3LfUDE67RjiZFpaLapHo1Aue8qZMNLHPBzTFLinwXrsdruAWr",
  "key11": "5eB2KhSnFdBBnhGrK93QKAm3pf9F6uLHwGJpsFuUbkNygaE4iBDgNW5CvBjRmw2JUgmiQKwibkQ6DJivbuUZPVbf",
  "key12": "41CuLLMF2YWZSeAw8afaa5zhJcdtQWamSzeWeKFmPhTPYQqdoAcgBBYqsX1fkH7fy77WEBVYifFJxA4uLB19Pktr",
  "key13": "5CRSo9R881jNP3rxfe1Uxx4E7sA8yrGBA5Wo8mFZV9njTkhe53Mvww73jURbkoDYRUe1PTSYwTZYkCAUM2S1HcE3",
  "key14": "3csMVRmhpsuKEPZXMmtmPBEaFCCySgsea3rQuJ8tmiJPa9NYjkkUpPsAbnugK1b85282YasjJJov9wWjhajwkxX3",
  "key15": "qUFxzXNxHnm3wk9RK3xnwUVEtHgKfvMLTDLcTaPU6hggWn8JJxTUFCXUa5HGCdcacwmgbBfJthHTze2iMixeFFu",
  "key16": "5zosabckky98VjtrAArfNcAuZ3tbZQRZy1uExcxkVkPnvp9ejme2w62myy716zPeHMvrtHkFkWfkUEZRSBs8iF14",
  "key17": "N11817D3pdBbJrAKUeVkCKTuP7JLjLYkVN5sYpDV7EbhvLsyTgwYxoNCVtCaZgzWm8N34Jq35ttLtnafyjyvjC9",
  "key18": "3riTtvJDqvBKFGEebEB6j17dUbUBWA67w6b5wW8hmkU98ixr6Xy9CuyckjdBzVKmGgjmjZKfjUCdYtcM72MB3YC",
  "key19": "2UfnYYL3HGyBUWeFpehXqpkFYHpkt9wFJfFL6sA84ekZHvZC9A2N15YCeo9Fn1VnXMxnoskzPfQrYuT2eDVV1nrV",
  "key20": "588gxfiHJ5cre6PvRFxUCRuAS6Z6T4F8zjK5fxBBjXbjerptkYvn9r526zNmfQuVBX2v7nXPedwXPG6fJfrUsgft",
  "key21": "2j6Row38vCim2peDkuckS7gHdN1wV7EntDWURxu6FkeKzsrD7o6jd4d7JawYqYAFJo5oSvv27fvSabz1qLbFdeu2",
  "key22": "3HZBJQJuRm7gkCjmCRujY43SRTKiGnEPXdXVLXGpAE1ZzKmGGmh6RAESzFQPvwThCyazFMbpLrRgdahg8jgqnsWQ",
  "key23": "5v9kvZ2MTsepzHsS3qtExmDSrgcBnM9ZcFhg15KskeE8QMtmbN5EaEMXCTckx9igwVjwdJrGQcagN8Byb9AapQ95",
  "key24": "5Ydqd9LZESradBpf5vtFfHzT8y2c93iasCm1DFv5mRp93PFo9BHCQFASkoJ5mY9gVKTAXzsmzTFq3jMYoBFpY5gN",
  "key25": "yTcDgf4VzWrBQX3xJ6JcqMiitYeQCVAFiRSUVGw1k62u7zBnE3SCbeRpwaTHMy2xKAdLKkuustFQTfMkwAuNVyb",
  "key26": "4Eki9wTizqRSQFwApA7V4U1gPEt7WppgoTZiBMLpUcphWocbUXhMYayCVcd9wkJvB4zXkn72GVrmjmqjcTpiFg8E",
  "key27": "KsLCGxo8LjRe2mzx8zkWQ2PJctYjLA9fMYNAe5mX7aTWR35sr6G3idLEGQGdGr5qSnPV7RbEzpZ3tABfWRkaJp4",
  "key28": "3kLnSnorPFN9pMLevJKzKgRqjbZPr7in7RuhtRvfyuxspRm4uwm5aWdkKhFJn9Qo55DcuVDwDcR1uFUCMFZaf95W",
  "key29": "3YHvdwi97QRwPLhCGk26n43QQoiFupAwKKoYcuGMVz22uqpYzxxhAk6qpkPvzCpJpGbpyo7yqwMAPxsB9FBMUD6y",
  "key30": "2DBcruABsPmm8pRwE4pJJvx36xnX2kcMjorBy455wpPceTBD6FRuxTxNed5doNPJUwryHGpomyZNateWN9acEzyU",
  "key31": "5LVtSRzriSpHKihaTbSSBkbrm8gbtLRfWTzB4WYkt9RHnSc3sEwTj6AeEaNMw8WFpb3gaBfsJz9RRWAz2ay97V7Q",
  "key32": "5nq2PJYVsayuyGFL343HjhizLqzWqPBAo7syXokNawxCdeqNULVoau4s2gURUSNkzbZETf9UMAQbw7voUV7ixcui",
  "key33": "TRUXHK6Rf784xAGiYLXU81svWNVeN5sANXceSL9APpNLeSioN59Z9YvnHvqMeDTdkyewdSEFTEXLDNJeXtnvWf9",
  "key34": "2FJMD162HsdBYDgjcDTGqAaw7oqgsowKgcjPLvCz7F1sWPnGcw7TVgWPJe1hSr2EmVFtLk7r72vtiqV65n2wRnXN",
  "key35": "4SmZd62CDWjbFXSbZ4cTHwzwyKSqqprhRxVxbdav3bH69k3KLM6sgnryHsge1p3m1pA1oHjphukJNEVTUyFc5CuX",
  "key36": "64NzyMtpTby5Ang3aRBpsA777RxQskQ84DprJ6Rk4c4ECLL22tYUim7jd9bczwcM6xtyiPFfnJjYF4ZXhugC7Jrp",
  "key37": "5h35qj2SYxNfCt3mT5yEg9w7Gd6P2268XMxYBWWqnEZfPFvpxbVRn4cEMMiQwPej59JFjRLKsAZLtSWVicYg75L2",
  "key38": "3JzrkMoNrurBJwZEnFRGMpR9RAeo8vo6z28h3GLeW2gsA3Tg8279DRhLQPFmNaVSocUndFfyp4HUW9Z9AEV5fPDN",
  "key39": "5zyto4Q6F2Zq4eQx8dhVVnvXzhHwj3roNGJdL9DY1u7hCQAqmAAwpmvHdoYBiknHg3Sy5gGwwesvC6nZGxDNHGzp",
  "key40": "3LMD2aqNVmWkfXsqf25TgqLqPinKgQnDsYvzvUSpXi84pN2ocMQZbuQxrc5LDNUg1Cfph5F9EHijiSsWbtkcBe4J",
  "key41": "3AhjauoRESr256ohX8P9srruhmL1xN6jhj5mqrdyvCdSy3chBfNDgAiRGWjFXTEdd9tuoRZgikEfqVDfZoHRsK92"
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
