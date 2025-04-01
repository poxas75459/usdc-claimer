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
    "4a7zdFMBfgNdzGdn6zPWdh6fjSL25WVVtjebfqyGxZKkvkSjTvmEZZG4kVfqoVm4eSYMVR728fR8C7j7NAi26U4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VEpyxfXQHzfnEQ4UHd6dyqNVRvscA8rh5F9CAtH5hpcJMZhd3o46pX5YgA6K1gke83hS26SHrN77KuVBnuGLeeL",
  "key1": "5zBQnnQAGTu1WaGm6QvnjZPR8xphMn1oe4pzenTCdKis2ULP7k7S1rUksjv5iv8ewEcsAwShVBfbHEJ2fjzGxhAf",
  "key2": "3VsjxPZ4JLtT34ASXGewVf5p1545yc55Wj9CWNZF6yv7XLiSj1kCGKBVJuaVWTHmuJYLX3kWZ1WAsXHz6nTYJ1g7",
  "key3": "298FYs7noRESLc1SnYME53E7oRMaQ81FdMtsegQamUaM8TSwXCJd3JEMvdEZVNKhGLv3js1mRJib3QtxqihFRnyi",
  "key4": "b1XHAjLFrbaCKQ9aGV7AUDr3mFTwgLLaMbLLpsRihcTEjKvceMsuSHAbcoaVKGvtRQvMsYNKcSRSPqwnJ27Ro96",
  "key5": "4QpKdsRCXrvhyeGPsgQpEvUqpjUT95oWaGF5npt5txsctSES45Tv9XxxoT1GRsS3tifsdQ975pJrv8d5AaPamU7d",
  "key6": "fUZKcP4zDoSpmvMfzSuQuLNdhnNuLbVXZrzS836a3nuuHmnU9gong8ooDGZyQo2fJyTa5hFTZxpHvDP83ssMuTv",
  "key7": "4GuGPit3ytpDgssS9XJVcS5oVRNyzLHAhoyLbBsiSiDCKNBrUYg3uxoq5XsPkH58nQZDEm2et7PTrvXZ65d8DTjo",
  "key8": "2fztEXfuwG8AteyRCinnHWrUFtSNk4kcKg2jKm31QyZmZk6CBxwUo31oHbwvCK4upfMTG8zTRuZXuHx4Jhf3KUyd",
  "key9": "3nnu5ea9uqeVkSjxYBCuJhQc8waMkuQbQsik2avTi2u4ULTogPWELqhMLdmGdkaHX8HCxp9ueWFLYnUAsmY8kheB",
  "key10": "s6rtXX35ZAj9cuMf9TucXHRS1hWYtyhCnMkhEDTXNocSnmmtVQxCZrK4zU4aC1JVpp6iGDnWxMLhGbtGSVqpRpj",
  "key11": "48L4bCVcLSiJQV8bVst7PxupcT5tnyb1PQGTFr3cmpb4CThjXsLmFuhk2FohVTkBKfkbAJJtSCZjV27PxXGARk5L",
  "key12": "5ghpjQrAHsDAMwe9FpY4H1WB1tZxwJG2XcsmPVMmWKRegAR4ETYtpA69vBZ3ZiQE8EWvaaBUGCErCPJFzhewLT49",
  "key13": "uYiW2eYGHFBiWhWPq6YtSGYrN87No4P8nZpmKcgvNnRTdzgUFNy8e6fWehMV1rxkmdNqkADezVwPsTXVYQdRTCa",
  "key14": "31hWAudHR6xdUEWNigPXq6RA3pCFzs6pFZGgpboH4gTVrVGkJQMYWvWMW2scmFUBeioDH584FZrrpaQ12ekKUKKt",
  "key15": "3cLzGVaqX9ALRFZnQ5VDqrMifoqUFbcMhYy7q5iuCtDbwYcMahCPySxG7UMgVh6fW6DvX94mvA1MzZZsfVcs7PHC",
  "key16": "3sEmKmGfa9E1RCZSCpQPQN7FggkicRKZcsteUo2dvcs2Rpz5xCUcRM7KQUDhkeBVB9JFQ1xtqCvLAvigNm2SLWQS",
  "key17": "3DryW4amQQWXgKkcr4gXrvuWd5GXe365bphKNxdqQAdMJkCiTpEtuAY33SJbGpQWwWPpNNap9PRPkBCVonRRAB5r",
  "key18": "Cr5ESgu2dm5GSnveUNJWBjMuTYw35VxzXDvcumNF1s7RVwF5qh1C9GFdCVTaTV33jPi78DMKCR49YtWnH7uv3F3",
  "key19": "3vk8XD6CYrpcFRozs1d3s5pzNdTKaAwFE4ujQBurrALejaXGU91pyScHyhWoE5taPALqVkmNnMB9QiiDnUGFn9Dy",
  "key20": "3YFFHRSsAzVcgKkoNXJh4VABsxig8A6hkubKxLkHKqL5GMBxs5LWVohAJyccnAdXdDbzenDTjrQi9kTdCxm2qUNp",
  "key21": "4jNc8FqJmfpqc4ynWnhKQq1XwGdDf3Anp9pJ1WcbVUve5StHBqU3CYNq6xyvquau4AbCKykCPpo4XBM2c78j3dGq",
  "key22": "4JKyVLTvBBMXqxfbChGsJTBhXBhkmsJaW1mz4dWfort1zEKFNTg5wC5YzLNNBqBmTivbt7HvLFvHCMLtpcW61rbf",
  "key23": "rumF4gvr7UPdtPPZVPqkjikxiMBdpbddrStehGc4o4KeSyHKexfpBKggSGRF6vJeL2Wc4UurvH87hJyvmwtsy4p",
  "key24": "3UMExDmc5MNFMyKn2aV1WUwrRXKiduuXfzaPfbRmCiwJbJMttS3cWY2Uirfk9hfQYCFQbNaB4E3xXaR6i9ogpLtx",
  "key25": "5kP7uheyxGN5rZZ8YaMA2jGbCsh9qQF9id72x4mCbmQHcdvNhupEzCSN834pwtMRz95uBkLb89hnbhJ217BSC7Mm",
  "key26": "5BG4LjpoA75NUSCNEVNBUCuHGdAZ58f56sXVzkc9AaiyN3mnLbMz7ZQPipX9CvgynTLyB52aM6QtRpZ5KWjLowoh",
  "key27": "xmEhgd3TCGVRNaBajNpYNK8dtsx3DPhS8CDU2HoeHy3X6Lgh6fPh2cCntMhPjXFSkqDkLyEjJWjCvMhQmQxijbB",
  "key28": "32UVHzkTTbA6h2gBja8kFak5VMAcN5L3162wZc8q82D9jhDLVxWbgb2bNeqXESGS3CGxS41vXCnnd8HvqP4rcvJp",
  "key29": "tAeHSiLrjiDnGtgdcr36bDfWoVZbMJ4UJLseQjb58Wrb3gGLNkKP7xrC5dBVMqpit9GenDffUtcRQPwr4YbUAdk",
  "key30": "4zQNNocMUwz4PuauFnu8FJd8coX1vK8SMoMKUDKKC1pj17Coq4qBrD8H1nYuy8oQepRzs7RFDFnRTeD7RLdJHMN4",
  "key31": "4mWoGzVtcPx2ToaKjAEXoUv2SdTNCXYY1MLCtXyai1LYYzWf8cjAoPwbSMmP4sSJjdzvwh2DfUhZoNbUYfitNM4c",
  "key32": "nuvFJ84CdNzLeS4WiMsua9GjyjEGQGDux1bRdBhjHehwGobPgMU6vMuhn8NP1FX4SuDNMXzsQ1xs5SuLVCiuwHf",
  "key33": "58KzX27dJCunZ9mj3maT4FeJ6ikSG2niLcuT1Mk9mFQrCEzhiCrGprTKrfYL7P6jnoKPMrENrJPcrZT8xBcShbfJ",
  "key34": "4GQ9WwY2Xe4J2H9dvGVU2ydP3CEYkpwvybcnQHyVTTHwMRFWuKmJKdVL7GzhqmDT7JLqcvFdZsbPGzCCji8Eve3N",
  "key35": "4QYJrvM7RR21u8zte3L6fUdg1PdW9gLwHJFUMbyxY7YTd3KphDgrYpf9xzj1cBiMosQV7mbJD5yq5EMUas3wjP21",
  "key36": "ms4V8iMHYqEsTPWP27DpNqX2HWvLe3NTxADjsD23nEcE92HvPuRPeCGfAio5axbtACG8PZ56mxgyLEUwBoowM6Y",
  "key37": "4dX8LkC9rD9RUQra72MiUaqYmvRUaK68SEwzijz9gUCMvyJiwkbG5vt3PDiCw7goGKndsWQnVFyvHyuJfVdG7QVR",
  "key38": "3u5xgsJiE15ZSSviKXJBgL1C7eocKogFY4gd8GsiFppgESPDrYc5WJGumTKvPTahqZ1UxdQrsGRLc5pRxXEkRJ4a",
  "key39": "2MUdW5LBivvenXyeaA7bS2eg5BAGJoCigmytqKJTPuE3u1pS3m1MAxr8VKbzZM8LeWbmUHvVRjL6Z9HEHp8FwRC5",
  "key40": "7Ymjq3FGv7rs9exuNB76c9wzvrsgcgWD51RcQJyTAnKreDnwqvPe3wro469YP9GbTrDyecdGHVyL8poMXRsjdQg",
  "key41": "3DfmiqR6XNtoP9iV2jC5xGsVi5kkfLrjJW3AZF1E2cJubv8q7MvQMRsiuMQDCsZfmgKB5Yy9vkuU6oqfS1Ph657G",
  "key42": "37zKdTJXdrYEWwSf6Un8HMbp3sWZhoFNyZcPwJwjpg44uzXD5yvg1Yrmp4VWnCbivQafvCaAwKf2qTGsZZTSmk3z",
  "key43": "5k3C4KfsD1A7XB3kazZUfdBEtNVZmormpSmnAUCx1AgpXgT1oXgZy7CXUbnanEPU5rGZwgFPSHaXUx1654yLJQzq"
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
