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
    "3LJfaZDwgvz9kH6DBEcbQcXcx1nRAgiumqE2vr5ZnYJh9VDF3Ei638FMShiLV55jukJqwxVZe7W5kC5XHYnSWnSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e4wcyEYFmedoamQdynSR9iw8r98iEW8LSoYoiTPthxv6QS8VpXq4tArH4h7Tti63xrxNfQGVLyKkRhjf8uCW3iF",
  "key1": "fHNbSBg9K43VAvETQEgLNDuSZXpCwJLAQqM7E3o6Ciyis3e12dxqB7LkfY7uwFWdHD9tD2NSFvEDEtmbAZqvVB1",
  "key2": "4C83uzz1U1baG6HW3avJMjSZLHs9S3nwBtqXPZNanHnjd8gZrM2Usa6bmVp9NDCS3sAy1eKVnyyuhXd8XMVfry8W",
  "key3": "3LtutJygXUZpBTbbsJprZvBhEpfqnUtNf71pCSvrytZxwqnSXat5pwnLtMuGunyb3AwmhV1BtkvaLpx5MRh8nMLe",
  "key4": "3upCy2xzUei6X2gKWKP4jgQchn9pE1N4ApKxZF2WF6wyeetZyby754rT8gB5jRxKQ9uViF5rPZQVHkgxBtFVgvTe",
  "key5": "4YtqyVDg9gXW6SXGUcHQKwxwx8AAKnfATqXxSn4XMTxhEg1ot1VvbHZJS7EHiAP2Uw3136MN6VkmWEPEsy6tJeen",
  "key6": "5jmY3s645V1YWGk14xwVjxQhDHgR7FxE8tRs3ARoji3gMfEeUSP4UDKdt88ybZtKkyyrPSnx5vCqMjCVqRLQfpw7",
  "key7": "5EfuU8mwLcNYgJW4dH6QaYDLyMfHbgkHYW2GdAeb8b9pcangYhEb2VUf1sXDKKwvxApkTgsSMqiGP4qHn5Uh1YDs",
  "key8": "5yXckma4nsKBCEyXvGFauaejmMQmgXx7PxJdcyerrM9STwrmdAUSwZRt2ueEkSNAzTYZAXrTvU6JCwRwPiiYPpWm",
  "key9": "UDhd5qJkzpeT3y85YuxMKFDQsJ1zB9cTj7AZhyzRdVSs3U6T8yqWfpfzGbNYJdUYetXtP898ajsHQNWkxymWd8t",
  "key10": "4HVZfXerYsyzbe9GZ2PS3iUuXVpqaKYMqpxErLBQErTBFvYPrhukH2iFKz4e4udNh168usAfhWayx12KSZbnc6pr",
  "key11": "2hFpe8bBMdpYz2JCXGarPQaHukpw2FUgX692KuP86uhdeVdzfVk4Y7X6PzKYDHeKvuDF2f1WPVmsmABwn4ynHBVf",
  "key12": "2omNRXfL7Kq5MMaERK6bj45rsVoxxhGimHZwD8AdwPrRhBhHDHFTdUouf7Pzb4mAzmVe1pYEnJ6SvNMGNFTRtJQG",
  "key13": "2BxJ77NdxJMQPee3uK8x5KuN5eH46NW6G5vviz6mzPfWsAWggGUx3CSrvgDPfoST7JFTxPxQGdfUJpT1Wk3qV9qn",
  "key14": "2sJGaAegE5tPERNadB2Di9JF9zQPdx3hPc11pFnNrRrZHt8KZj2STggnboFxB9nheurTzeSnFwE7avZ1ZWBjJ6QJ",
  "key15": "263Gxhu9p3kZbEXs8n63S4JzQ9wLGoNgwoZbBmmXfrGkQLvukXbgDks61epUNJSGhtdJ6YgcP4TkG6z6zB8vWMbr",
  "key16": "4iSpFKLhx3R6SaPmVGUF9eRx1r3KUwf5BwC2rodiCvjembafZCxpuuyKEgRprEQYXs6NGwrYZhBuHNXMacK42rdg",
  "key17": "4EMXqCqDrtBBeJp8qW6j12ky4zjM8TwygxXz5TBZqQsq9dQvMEPuPRmPBb8m3YGNvVUgZPqSqTpZABin8VbcUKFf",
  "key18": "5mGitCyw2EHRfUGX2UFouSXJLWTCgCd7ZmTMT8BCrCTBRe6hZcqHMqwMX27N7pYuDpZ7hP22VLSwK21jypU8udTf",
  "key19": "3AN4Jr3CDQQNiuevGuBgCqUepLNCq5jyaksAyeuigdHK4TieFwhZK6TXWyj8jzq97Fsb83NUdckkCdo7GBPVYvyZ",
  "key20": "4eyXL84DxiJLS4By3cQsnxqo7hndLduRr9EL8YJUqWy1FDUs2qjQ7E23ZrbXUEKK7EimLAxWQwCGkLwxsTcCAX23",
  "key21": "BZHMtpimAyB874o9bwS2spXCRQFDK3cZ9B5mtuh6WKtn7dJQoT4fhTbzYNdugwsi3PGwRYwm7wQv8vMZWQa28st",
  "key22": "5zJQ2vLrPcM1YCaFMML1V17uYwKDdRxaxcD8taUGzifyN9LMKmHstvvhzgFTjw5YNhQM1atfYLx57xoEu6fYkRGr",
  "key23": "7geNo2HMGPHozfGo8qUJMzywcCW5QUtm5UVg6GYW9WTymohuCiJPC4rECbgSXHXgTCkSNjhypC6qcSTrSZoRk7L",
  "key24": "6G9ZYVzfQeEWyb1pan2SLxkFDPzk88ENWYPi65yEdMakhp65yXtYemRQjqyZTkCKqd1Y3caFtEV1uJyH8C7JJpy",
  "key25": "4ckXXSsnxunJFsBxNvvE5U5TayVUuFVocYYbsNENMJAmMNyuPD6teiJneUMuyVxTgG1TZmQYPenaGHJEQ8iYsDzK",
  "key26": "4TNAajQs2A1rRPgs91b3SzZw6MJth7cck1J1TArRmY7nC6K9qRB8MYLjABjViJ3As7oGDnK1TAZPhYGpYipt1eSj",
  "key27": "4NyqsZ9fyNYdhdi9rNUdFRTYqyA4TY8ShWEx4ug17BhKBppdiNQ4vYUAJbhiNNnxvMyTtCRdrQNQV82eucLK3REC",
  "key28": "5vB97TNT7b6DKyj3K5Hu2NdEusAnV9XKs9ugEXDLUnEkiZp5s1feKJFom8FfaBz1TbtZzK3hjqa1MUgbiv11Gies",
  "key29": "2ZBjw9E3YK4FasF9QohsP9r7CWfS1Jt6hf6iU34sUCnffBcRFC5rXJRVSexH5R9UfUDX13PryFEG3uTPEMEHCWzH",
  "key30": "3oCDgCAWFqrU4oiasL2tp7dGPHxFP1bgY3H66qzdMYz1yuw2c8XaZgEWQtycyyLE1c2U4L8DF68LDVsBNyHo4Mu1",
  "key31": "txLArPgWU6BNxkvxXGeRVCQd7KLUBJB2TP9xuJDYHHwbxKAnzsqs7j2gQ1aPMHp7h2pjotysnQL9a2GMH4YU2o8",
  "key32": "5iUfL3o1W7c4iq8gSdina8t4CNpPioXmdGSm66uEx6yQCinZCeie8bVvyppikMb4eCBTvvTXhL6SqouLuV5JW7Lw",
  "key33": "2Vc8i35rKZdG96sPbPoTsjXdtmMhBe2owUxzsW7wXBzNjBFruASYm2gbtxYCdEmJJUscyjdx8EzW1W4ic5sQuJvX",
  "key34": "3umdcaiHFbUASF9Wk9JZ55g3bUqgni5qEauoMko18n3wVZuKuwAipAhZaXuxdQWRx3Mo6TBTFXbYmbBkyTPVdZz9",
  "key35": "5k3fj7KuYBkaV5ziaGFcH8UpAQ2K15HV3gbhkoXFn5x15RXoeTGL4aGhmoWy4TAmVaMTKC1LFHTAKK3u41dFkmDV",
  "key36": "4fTDiHc7u9ZMH486okY2jiCocddH4q1i7UdipxGhMUdu2GVKhd67fxXyecjiHVH7JVfpiUmxoBZB6YEgbTZubjn9",
  "key37": "33JQ2Bq9Rk4KDAWnZBt6MVrLnBPkTzinNj3XVMEeGvZdDyrCKckY1kKcuWozKT8FX8JHR7hyFXABje9DUfraT7ek",
  "key38": "2Ft76cfs5rebLqpudadZrv8Pc9ugWcyjGqjxvU7DYDWmowhENghbQ6c4jjPM7cf7ev7f4mUCXDJE57nxNjcjhDJh",
  "key39": "5eMG48cQyiBnaoZJjCt27pSBVCryGr1RUHQUShjRmJ7EgQsSrERqNUu9bLESdHLFJtaoeFtU11rAiv6tBBfKPymT"
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
