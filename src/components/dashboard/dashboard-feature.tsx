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
    "3pErgogmushox1zV8dCryUg98kWJkXQWffRfe7eoqRaJV5S5yCEEmoyobMxaHyriqEg3wY8MLm6MeqdAc6eBftmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5wcPHvM2k5oNuLPXPWajnrgxTPtAquAXSQ8BgzVZSubcCBb1gEUQKADraWHAuimc4XttpAqXUref7QSCGfQcz7",
  "key1": "5jgSkyuBqwxyY6tQZCUxFunkYCZYpHdZZ8dx3JXfJeZ1KGs4zDmBuQc1nYfvRMYve9LknksGqqrwygHzVTUa6Mxp",
  "key2": "2X6gnyqM6VMyAAvj4u9DoxLSXF6ugZazQ5BKKMUiwxdwqwHaYbQ43T32bsn4KTvDbSBppzCaNbp9mpD4jbTH7s7r",
  "key3": "2qmvtkstcNvZ68GpFcMcYF7tDicuK9gSSppG9gcVs8fX6BMxzSuChQC2LFGLcNBUkN2HKAWRY2kBT7PxbBNz5heP",
  "key4": "5Vt4dFjVT98cEmX1VEiG17JEEA1P5znY2vGyF7LsaUj5qECmvKiP4xNkKrBHB2kwEAhoG5iQ4nvwg7Qa4ExXgdt",
  "key5": "4bQr1nfoZxAdmwnqgwKKcdpfpR9qPXPAqtpSj4BoNWFfUmh1QFFZDmP4U1Je5iirx4jPzwgfE6eQibQYYcx2izwg",
  "key6": "5aiKtX2YTTJSXrvCbzrxio8ZLWnzkv3XzWCQpteHi4pFL8YGN7M7CG8o2bBbiRUFNHRcTSfFpi7ZEn1himc82ttf",
  "key7": "uHSHFSpeJFFbcxXvB5qg17PCuBeJJUqGYxp1R1xD9zmtAPR2PTvCKEb8HvNqEW4NTHKqjDcpa1zp9LZsmvdbRQJ",
  "key8": "2H8UwowitX2boyRDXqvNZpN7mKs4QzLNeyvbPRfuU8VKpJyDFuQoa74ZzzCUYUCqpwYfjJX4iorEinswDDLtQM9a",
  "key9": "5BQqnniRWGKF5EXtWGAdz2GN1Jua3xCoxfUMp68iquoWbCm5LcErYEZtoLijQtFDMU7Xfuysm4g1Rvy7ZUEtxPYS",
  "key10": "2uq2EPzGCWfNMhgR9h9i79zUqGCPNRYy2MqJjtVpfcVoAgWA1qxLig5KERSRVrmgz8xRWqrt1tRvuBbJaFqVoJEb",
  "key11": "34r7wWLE5U9v48Nu5dbMTd9BwMr9S7tQ6ikVEk28etCeSnDiTLTz4nATw9pVz8DCyJbWDdkkEKXCxUfjVah31DTL",
  "key12": "2UtdjpN6WnFmZ5a7FNMFKBwVF78SaooCRDsFHNucHPHefQ6CM2Fjn93vPUqnC6bFdzE3U5nz6ezhg2XC48XhbbJi",
  "key13": "5M9DxPmePUt9hmM6ajMp1HVWLA1MX4FSZLcZqtojhsS5ud1DoxESuXHqyDCUR3HbzcimMqVHaRfbb6LBhkAifLje",
  "key14": "Cxx5qVr32kDVyMYe8HHbR57nqvjZiCfNG1Bnws4ZZyxZsY5w9gndVS2f9Zrv8eBa9nFpEGQ3tfp8BfpkTYJZVgP",
  "key15": "r1At3Kj4FtkJvBeaCoJBAXL7VBDiHehdvmfu5137XXMdG6LTAQ68XbLsdscE8tPZNxAmaFXD58fVbvuQF5A5SPy",
  "key16": "2dDEqDeVPaEcJc8d8686zAvDgyHc9R4CUp1YrYTh5BUESvb9Hj37ivrutbWDAKd1rgHQq9WiykQyscjqv6z5FnkH",
  "key17": "4vJfxYeVycCYQaLytNCEt6m1KGvqFypccjhsxH7krHVE6A2F8NNZxrJfscczdXm4AFYRD7JcHgYAFFxpfdRYYo5D",
  "key18": "Yx6UcFCq7RyQp5RREjWDHpYe23GyVRA1UJZXMDbAkVXgQW8SzDxxRsZfb8LbFbjasWbcFZubpsc6q4JY1U4F5FF",
  "key19": "4XKtvbRNfaU9BYyqCeXaasVL3UjabdFs4qAjzZrExsnb4zmoh3g4u8fkAkWhVroaaADJnMkm6et4TjviSaGMzAPv",
  "key20": "5W9XadQUvgXrrGHd8eT9aeeK7haRWopfZtQ8zKt5QaxWT7yAUv1bWhm7TpoiCy9RQuq8gcgRkfoufi2Bq64Ahxyc",
  "key21": "4UtfRaMT2dUBdbmMprsJaVL1eSutdcqzsdzWA4FrjirH6qGk1vnBk9XjGFrHJHn26XxwC3AEn6Epx99Yb4sTDca2",
  "key22": "4CSpQ1dZYS7KYrQcdokysXyow4vKJHMwhgWgjdqnEhnzushzQGVS5rR4U6EQZcQkESVeM6PZd7RrdUERAfuUon45",
  "key23": "3sQtAeWoNNPGXi9PEQeu97sFW8qmXzV6Jf61nw1Ax8PEw4Rv6riDpo3drhArFFFiAxEMgbVSMSpfvc6EnYq8iKgB",
  "key24": "5VuC6ycejZU3X693vBz58MFGPoWwN9oPdYGbn8zo2vosTZLHZNLieFHECiypUuCSTWWbD83EAsnrxuB8RrjAYqhM",
  "key25": "2bc4qpaaEo2SzynxU5TuZY3HjS9A8gibYrqUAaavBW2Z6bxac282Eb4X8HbzUGfTUnmSVFGsg1v8hXy1KLZyme3G",
  "key26": "288BCj8TBMsGR26uh63mH7YtTZ6oWkDtZj6UwNtEqFSX7DP41Uu4z3f7tFeLB8FjWDKNNHjVvm8oeYxtPTzQjJ6U",
  "key27": "2KZy7srDeTohCfbAGjaXm4sF5GJjcbhycmnrRWW2bZqBKBwc8MnUirU1SnQgwCsWKH11uVx6e7Geg1gmUHy2AzsV",
  "key28": "3gD9fjU4uq6LPmWxMWdLKFWFUBxvk6VS7tUkd71EtmaPvoj8hJwdcK5smq1V6ttSpc1HR89LW2Q6DoiYZxVquQwP",
  "key29": "34qHifet3Bx58P7G2FnfnKKLm6aBC8R7mSAZgX4xL8zqLpPsvwyLzks3kUbmbqmRFcf8SMwRBvU5KywDPtw1Vgue",
  "key30": "2FG68FwqjhmsUHkrfog3dzW9X73D7cFDT1pUGe556oP7t6sisCkjVbGQXim7ghtVpSFdVnYg9siE1jLyMakx8T85",
  "key31": "25vPVcGf5gTLKyD6VKU5SMBXUuEfSQAdKFCiUF2KxJG5kzJVEWoveFP2ppy12nX8PA7AFZ6Ua4xLRGpbZN2rRKCz",
  "key32": "eg6JY9PDuVqmtsY8y9BhcqJGrLL9PE4Dzbd4rXBDxwaHSDrK19zWuDeXZiEoAu5PFyEq5zJ2aaoHaNbnHL6qsz2",
  "key33": "66PQYgu5SrJUVPicV6fdRGpMg2XH16ULMAVpji3yraX96a9xJkRpgQAdm9y1xWdLayW1V3yGp5kTAeSdFD169CC3",
  "key34": "3UJDSUht6r1iMW5ZRe7QoLGUUr8Ee9QFtvVuyM95rsFK3HnFa1cWULVjc4YHLKhMdzNgP8JAGRaDxzjN8m3Bbues",
  "key35": "4mLPcpj89uxfxnXHaS7jBmNjGWthHvn1akrWnz4wcS4UbYWGiAja7yqSuvBHg9GYvVwKCRkLRtC4hSvY5HVSL4TD",
  "key36": "3jSDMyDdxttAj46S6zcBXhq5T1Uu6dMvfh837pHgMyjFrKt4DQSg1RSmDr6LFo5LsMuRvmQpCmDecJnQD2zxMABW",
  "key37": "2TgizJ4e2fmuVNozdoSgiJrJoUr4ahy8bD3KggbkH8VuC8kdDhGEi9vAuwe5hjpbiLYDEyNVBjHyFdeiRJV6pYqj",
  "key38": "3Gurt5Wj4JP6zc9zGm86p1fpXsw4iUZApN8W3wkvAhxNeKucbd19UvwshDJzRCPPybBLBKovrFi3G8dsSKkj8uBw",
  "key39": "rh1Zz6uNnKmSr5yQLgaperE8EverR8K7SwgatZVeGoYxkxvSoTgmwXv54x7U7bDFsg5RLDSd3mNhJgLvgFyewoK"
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
