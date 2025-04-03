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
    "3qU85auAaPecqMJWLcc4QEF4EKwD9ZBaagGruY8bmLDrVm1CD6JTT6BRC8hZKCjGLsHju2Hf5ZWNBERUzAqgvHaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rEBLBoVTQj3gWNRicWmmZSzJfRV9JtwsVoJk8jWSeTGo8VBiPGbSvpwq5ZVaXkgNfwDmRF1pYsxD2fhXEd6Fho4",
  "key1": "3adPDZLZon8QzLLqP6GAzFaXMwWXyu8LFoKq8jf7zFEUtKtPfW6GLtFMcbcQx8EEDb3hFoFskZfNa9EXQcgmey4x",
  "key2": "2rxou1rSMRJqTA5pj29pw2DLabfcd1CbM64m8PC26e6zBUNTo48GcDKJxuRxRdrGV9mX2KzUoF7S3rcnUsShW2hJ",
  "key3": "7eJRAZsKnQ7z2o7vLJPPshvHQgvW8GytmpQZfYKSDkFTnPFsktKd5cP8Cweb4T31UX8h1tFokUKuQR8bRRYs685",
  "key4": "3h19vwJro69M49f82wMbS97Ffwe7iSFJooTdYtCNpEAmLmrW5Zj7BrVLGS2GTYDj72XFma3AtAZr2r1ayiJKQDt2",
  "key5": "4cPR1PRAhLHMeg2y46X8HhUiNDoMB9Ho7n2Aa1Gz52yz9kawQLHUvaLMsgBgQWwwqidUkBj6Wm3EPpt1CR2svgsj",
  "key6": "y5QRznWBkeN8EAFs1DSDggvA8AAkP94tNYeZz279VnTdy2ZHfQeToZA8qzNYpGm4a1BKN8fcZoYfFzXy5ymgocv",
  "key7": "4hVKb12zGCCWDxsrhbxLFq2YVYuotvWFfb53PZ8FmLjHBaGXZfcXzSi3BEpMEqaVGTs5ar5wpHD8hSGLMZWXYxwK",
  "key8": "kqAjdLZXHDWJmWnJaMK1mVi6qs6q8E8ddXQ5mUPKy651iHHnhqBwNosXs6k2X34pN67UBy5jxg67AhRikQP9jv5",
  "key9": "GEJCnxWDJBag2ZBVnQ9pN2oZkeAkKWtuunpAd6jRhuXQ6r4zm9Uo1CCWuFeimMrGRTVWKRhqhcpuNFhmLHXp77S",
  "key10": "5uZq6DoQKnxUfEmP69rng1wMSE2jS9mkxjWEfM2BBwGgevSqVsin7P7GVzCpMcw7phg4uWNJcX6vrfUHNcTGYxoA",
  "key11": "2utTeaBfT2QYxHjqUXrdmPqoeWtzpabaVZXdxNFdK1rwnuDsL13N8yn326z3ChaW4wsYALVukHM1KkfVi7ZGLg3a",
  "key12": "5ScGq49bS1nduY9mhvrCckTpen6Vxfz2HNwiWKbbqbpddsH9Em8upFxnsPH5nLAAsyksBcurp2gZezYNBzQiGikR",
  "key13": "4n8UUFDXuXLPhm3hyjxZRsbQwURt9WVbF2vqJSfBMZcLftwX9MfpF4jzcdP1b43Ann2K9iuwe2yLsiRe5MWHBpom",
  "key14": "4ESrCBdzrHNMunNz9e1YwpBFXQWZgyJAmRNCPKTmz8keUDHtZH2MaVaHiC38fz9MLzXaesXhAGK7xrq53ufpxWJK",
  "key15": "4AqhxpWurmhZETSuoFP19RXk6oJGaB7yXS73vyv64gS4PMXgKq6KQs2qVnvUAjsoaALi8bPSZMNG1N6SEfGxJ5Hu",
  "key16": "44ARsvmw2LNY3hfERpWiLqpejiYmgtyau6hE35v6CBJpxAQRD7qQX5zvDt3dhJrgdb15vwWpaj86336gNMpXXgLc",
  "key17": "5kYvBUAnnLFxkNg1znpqmeMV3wEj6gyCN2hxYCuvmHMqeQHN7BmxkWc1G8uJGzU7zseDyAsGDeW22rT5BvUmieKc",
  "key18": "6BSVwLymHZ97MrKzp4V5T3Prh9A6inPVQXNrGLkbaoemzn7QZM1wmgiZBXarY3d7JSu4SXzpBKWYoyxGjxa3SCM",
  "key19": "5a9twRJto9nbVxSMun5nFeukucXjmg7fuwaeDYKt9zNLymyzM1Eup2N1u4VFG2wqi4qFrHAiKxDbZsvAKs4DHQiq",
  "key20": "4qu2zFbcrAiVw81fqDPjDnXozuZWDdDyTRc573g7CAkPwjxFsbv8u8Bb7CdVDuMjmDn1btS7zzuKj11QjEZcEVJq",
  "key21": "2YfPxB9UdzbD1YY63w4ykyXSqUwitTP4vkRovJDQjJZSqqTi1bkc8YLLaMWTCHhcRw5afXM53o3THyKtGc4PvgXA",
  "key22": "5FkNHPBXytRzz9Sk19MHBBUEesYX742RFPFh1JVzejQmXffmz7BqZjAWVXY6FoX7URnytRxoa1k3gnAkqEjSRhD3",
  "key23": "3bwNeULASsCcVWQmo29DDzuWCx5KtF5NWHtFUP944oNDjb2ouyYpTmmKEKrbdpcctvKBC2j4R52abzZthUWJhCfP",
  "key24": "4AtYUm7ZWPBshAYvD4ooFcQEnmZxLu3QXwsgg46mseC2KGfS1fypCsSFcZfVP8zX3hQ2ubuU1mnugZaESYMMBqd8",
  "key25": "4cJnPUUebvr8EeYPp6CiEeimmMpz6e82eanrwCeVgXxh9Qi6Dxx51N5XRLo5cX8MxCJy6eqnczoS2mRZcEWzCeHs",
  "key26": "ynoTaWkhxZ6M7eJq7nn61ZWERg4fPEvNWoJf1ETQ3UjJgnFQPAV1VATjEzwVyjSg4cHS53PyBSTnzJS3g5BVmFg",
  "key27": "34F3iLkPpmHWdzz2xUc8vNikSVzojtTUDDJQkZdwu6LRmrnzUyQwyWasMJcZPZ96X63etzbSuJNQ5Ph36bxDsrew",
  "key28": "2xtAnygwR4xQvjVgN3HC7aqr7ntpohqZAtuWrUYvVG97q9jHE673SQBXDzSJja7fwVN1TcPjNA7PbpnXZQXvMDKz",
  "key29": "2bzowK8e9zGjJ1Gt1iQFRiBNU6TdeXpC3YunoZjNusJYnhrXvA7ZQnTeaB59w32Aqp2V6bugRMF9U893Ceqxc562",
  "key30": "2V3ZyVjjnKmBLCMoiddLnYRbA1S5YAYCqVLZpfLoBtwyDnRAQn968tsbUymi28GyVGT5i3K7y987r8mPBXZpvc3a",
  "key31": "5rnoi4AUB42RPtWGixNF2RArS3ggXEqPNLsjgtpJaP27VrjQFciQMJHoLKRGtqW62heqGb8uXgjETiRQBf2VxFzo",
  "key32": "2ZDHSF35C4vvHtWQ1oQMMLg1cD2v6qtwT4kmVvYuEZwxoRgzjofsbd4z1RTSuLgsqnyj2Yr189CDx1oYaLqgJAbk",
  "key33": "5dkbf7V1dX5Xvo9untX5dZ1E9PPKTvxE78Vb6zfnqJqrN7j7Yc8FPn5xWEMjjFZRcKUNWtsuY54SaP3uTU7W1pgu",
  "key34": "3VaiHPJHxR8M7NR5Fcg714fZtkYov2bTyNLMixfZVSWUGHvoiRKnkWLx8LKFSya4dH8rEeUaGHjEcVMvodVomC7Y",
  "key35": "52v6YRoHXTHPyV3e62iRoD8cy1dhiEdYa5M6EPDW4iSDPcFrWJ8GD41d5buBe2TB3Qx95mMQJnD6vgWUdQUh1ZMr",
  "key36": "4xFyBLoLckir7nri3R6AjGCAcZWi8kRCbAY3e8nCuSEiUw4g4FxMjgb9KFHRQxjo1PeJX4Hjdk4JC9LBtS9MxQBk",
  "key37": "nd4tknMWKRjt6dqtmJoeqBcrNmnsFmibSkQ1GvX9eLLQHoxi9d8z1M2GGFfSU95ogk5EGpJcnMjPdNMQbVS1goP",
  "key38": "7GbS24SzJ2oncu6Z4uoFA2Y4b7kRLC9uPLiJ3s1BuLwWVF8TNGveDfGVUJYe8gzmjD5TqniX6AWLvwWVtcXf2vg",
  "key39": "3eoanKiqF7MwPA1vT7qyhnFVAn3DZJVGS7t1Sg6AzbbPVwjJaYcRfMHrKnkgCgr7QVxnPtowCcYZRa6ve3PbgmoH",
  "key40": "4SVvLUpKa5q72tpu76NQmf7jPTvMf2AHjN1jcZZtQXad86caYoa8q9tnjiQ9jNjpvmpBH6yXLe7uqwb5pxiBQ3NN",
  "key41": "39bGRivBHdB1h69KpUcRs6fC3q9rVgCCBRMfdQgkJnK78Gm3jv8Bu8yG8dfDVftbCuRguoSxWBYaRPpZHaU37ybS",
  "key42": "5P7e1Ja4mqiDzBkrK3WJ5m6mXiAxXwE9MJfHkM1Lb6j78boUuXz2zLteXyQjUYZ5LBqiJMDZiByi1AXrvNe3QWng"
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
