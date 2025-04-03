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
    "YYB4fTTCUFaCPKbd2sHQg4uF6cczUGgrdEdQfje5MnvhncD4cDszPJ2r3zfzP2X1ocVPY5hNgFoUeGx5Z2bXxjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Qzi6jdsehnjuadDGdt8bLQ3uHrPyPqtgB9RAe6bkRTirvZM7uAmibFJMQy1qbp5tQ1cKZjPVcPfbazQnD5T2C7",
  "key1": "3TpSkJZAwhmYmYj5UKCWwd2voX8ZQC9x7aAqBvghFZ2Eeh53sTy8JYdfbEHWKrg4qxg5mdUsgUSQwW16ZFNKhHBD",
  "key2": "5ZiHhHomR4bqFKdMegCqwZqhV39njS9gYHqnWRkQWhN1CMQjGEgSK7AB4vQpZ1edLmo73dqorC8C4i862sxsNYCU",
  "key3": "yr3CMyZpYqC8nKXYd7EWGt7BozrSj9hc2xs34bQS6VShZ3PcevcPsw4JroAJ3WRNzPz3eSMSmuud7EH75NpEmVM",
  "key4": "3e3hA1gcAXbh7KwYXUWt5nAXdcHUaMfgcA76FfaALTiS1grnptLQw9EXfiZepJXghVRnRKiYAgwKX8EVsnNcssi1",
  "key5": "6GdxNRozKLr2NfWLUbjyoTPPhuwpVLKy4kHVs69rNwbvcmd7Sj5zXGoU2bWGUGTajvqZMUV4oWXfofUmTDTMjc5",
  "key6": "5CT6Y376hJQsnERX1PGzHhwM8UZ5TQdCDcimxPERUqC2y2FfT22Ertg9jwEKPhCaLbZ61YWJAmrBb81vSZKNPKFf",
  "key7": "4zrHUEjrLFqEfTJmWSkcENdfEGAcKVsXsJ9CWmAan6gsyyMN2Fn5Ho2CpMTRhtYPd3JMvkSxXv66dxcYgvQ2XBvR",
  "key8": "2p5PGdqLHWETBcMcmVnVndSUY1j15i43WwqsXFLiS24e9TXepRuQC4ZiZMUppTLy4tTAMVAzotvB5SQR1j9aQhB1",
  "key9": "3QJNRLp1ryTKcpa6fbFxt9XdhqpiCGSMsJZ2nXVm3bSjFrQGke6GLXeYH9T5byZbqiQ2McQyP3zZEaGch8Sc1TsP",
  "key10": "4HypgYz5u87PjaCef9YefU1tevFUqRGEX3QzcNBLfWW1w1hJSDF5gwvbbrXf3spHznot7xPi5nSTTcKKMoJnBSW6",
  "key11": "2Ta2W986wUWTnbySxcj9UjBUpLC1YNNJdpkWNxyDNDGiAmubVa5ZsrFZVaJk2YzYPv5payFxbHWnsN3VKcJdZ3bA",
  "key12": "2bYpVmiUgEHn6HTP6CMHma5ocjfga6EAfC7dwTVdMLrbdUXSHA479nxW7ovk2Hmw9Rw9Xm92SBTnDoMF2tFcCBQs",
  "key13": "5DY1kKCnWdnH8qmxRshpHfLx7ij12wXvxudaj2gDvUwLSzVLn3gQ9JVnJJH4AhJerpMKNgtEc8xBNiJyt1WTwKEr",
  "key14": "2Cvutann5jCUmNAhQHKENgwckCYL2nzVotnpdZvkgukQNfLFGDCHhYb6e6uWx9hpEVtHsU5GwAnqXu5re3Jd38pN",
  "key15": "4c1DEq1TS6tj1V3vZJqTwPGzJ2Bnxw56P9MiWxLTSegRaPZxufsNdUr4f3KcRuaE2vozxF4eq8LY2BVRDhb2btKN",
  "key16": "56qW4ToRjmgUo4vBYvV54iqc7EjipJrhYqwg56A4TfkQvZbUxpx4FzLGDFYVgFwzSXH4y13hscpbBFWf3k4PdJL1",
  "key17": "4FgQzpB94xT76koEYkcGsxPLcFMhE52LAcGff5CqGPLxTS68jEUT8gP2Bce8Db2daRqzSLycVtRY2rFNC6Mx2uiZ",
  "key18": "5SXt1hpjwabAf5rTFMcrJPgwou1xF11XtuoWQqJY4zenfLHm5boqznKjcoH7ffVa6P36WPeF6qGBjhaRGr3hYbJK",
  "key19": "3dW69WFQXr66AWcgUvLsGH3NHsYTwE5SMGiygZrh6vsGujB6S7j7Hr6MDAtpMf9F63kuwG3bSAw6mYPwrCw9iazb",
  "key20": "3Pv9dZnnStjLWP7TKsyRBxMgCk2A5SEUB3VUNFYZ5AcfZ4LxhMjf9f1ir4vSLPoxyrZMqcpVsPZmvKsLJS9DXWXE",
  "key21": "4CFDyqwEPLuf5CkC2GbMp5z5UFhc5DvoXMhXehDZHohoHM9FUTB6JvjMuT5nWduoYrMMyweXF2XzwcrWwjbHXLWp",
  "key22": "4EZNT7iVdsYqXNdHDHr1bSsk7m32VuEyT2BKWZCsrbEaYyvmWgfhP6GS9iUr1sjWBcvR9DXqt7ASbNtjr5w1XA2c",
  "key23": "2BViYVF2HgQsRDgXJb41KkoXQ1VsiR5a8ckHtf4LJMmRzuB7qZEBBghE8PaRWNTjDntAi2ZtNBoUVEBb4C3Bt2tt",
  "key24": "5edHE5mGJb3NQfgW6B6tuMvZRgcDci338ankrr1tveVGV7YCFL57oLGxkPp5QC2WmpDPn3yQY7PE355u8g6mXXUr",
  "key25": "4akiRD5PKhimf1z3NgQKJq1KFnzhLSRocGKr4t7jieFWR7kpdaEWd29TurZZNte163PJSVVTfePVHMtgCVXhhvsm",
  "key26": "hpUeZiWF3gQdSdUkfmaAdv48YvDJib8zUMX7TZJzRbJx7EnZWjA4qDRB4dykcwvctfkcfM1ijdnYgZsQWG66juB",
  "key27": "5E8Jah8tPQgBA2gj89SjNSJPkYLSEbpNPBweKNqywvnEgVTpzDvbj5NVQGFb9nsDuLpBa5zJ7Q11NEZt9B9d8BrV",
  "key28": "3z9tQ6CQ2bef2qcQTGsZr9Jxp54NG1hHDtjEZzi7dgU64Tt1ucrGxj4MphvxVRpHDSY9WogY8m4fEvoU4Dwu3TEs",
  "key29": "5D7fyVFSAuuxWPv1BeteQq5v2EoN4djfVSzihgDV5uuyR7TTMrJ8XLGB5FqJjnYTVkGxeiSjqsKgrFKFLiBKnhqC",
  "key30": "4vcPBJHT5YVD6p1xUFkheydUPYExEUrtwfHNqYHsVvBZ7VqnU2m41GS7wZwEfseYzwkgQm9UQ5UdkKCb43ssbzmH",
  "key31": "K8zSmGGeiHBe97FuGy9C68fk8fX9LJPH85roc6yzhdKFzCUCV5Li8UBad5QPcnF6tPGst2kc92ffqkPUWVjhqCA",
  "key32": "VnmQi7Cd2D878hopbfvFtkM2HKpHmg2b6TSVpHBYjhrR6E5yYcakSxryrvXJTm5qjWkeGRyLucksFiFHpzR4F2r",
  "key33": "NYPCXFMqgeZRCHV868xCkJAMx1eghrNPCLekw1ExnaqMARwspq1TZrsmcneo5pzH6g3HmUcwLpmquvQ97KxYwiG",
  "key34": "5nk6KbLGVfMpvTqpEHn7mqyAGoDCcm4LJfTGRBMAwwKNFqzkDSMhuiCra8XtWSuu5ysMMRixpeSyFassG1koRu6E",
  "key35": "5j2dWPobvvo7jvi8m2Af9MVSWsX34M8nTRMCYixRytoK69gENZcaiPPU5Br6zj39y8T8AfwwnDmR6LJfsWjEEaU3",
  "key36": "5ZbCEEjdUFu3rLmPENE4Uwb4TZarzW4LE5sWV3oXYPkgqvrqdfge7JXswgJbskiXCzb6xPYCSL6Z2Rg9BGJUbHz6",
  "key37": "3Kvy9CvQrqJUKC3p5c1qQUKe22p4hE853MvAmgQxgNQ7YHzy3454Now8K8jzda7yKAxtT4xHbhw8GUokL8db7Acx",
  "key38": "Ej5sAzNdZ8eKC5Rn34rmLXiG5EBeHzi3VPw9cyMXgBhCovQBRUEdgo3Tz1spgkeCsoz23k1nAZAye1qsCrrmme4",
  "key39": "4GLrBjFtFfmupa8CQA8kfF76KUMZd6EiiQZRCFPiHNUNBLqVrbkk12aoajB2nzfmP9JRnLbnhu8FSbeL2eURMqBV",
  "key40": "2ZCVgxe1zZhAH7NPHSVzbpaSJegV6AokwDqeTmWrEcdAu3NhL32M9XPJLz3jBHN1rMvsK2TWFCqoeZKEM8K6W179",
  "key41": "5h8yaU9GSiWxRo3cyFPs7jNBUne9H8nPaMcDns9b8HqSmxFHcwug6Ptz9YEeYgmREhXMhXMb5ZvFCvQe5DMYz6EK",
  "key42": "4ZfPD3KMs1x6ZqSsSefsAhy6LeXyZpBcEthkuU6UC4DB8JbG9fC3VnZL1HZcdA9acCX5roPGmqrE2Uechze6QDGL",
  "key43": "2Q12PR1CHRwYbQzbzTiTkuMLFAWugMPZgLKzwBDzHLN3GYGcBiTSpu4iKPSbhdZ4SNYvu4zt5PEjeGQ1GYu2EiTt",
  "key44": "4RMFVNpSxv2kM9fufhJsDCNtA5Z9ZJHGHq7UR7G82E7X6RqBLC6DVxneZoYrMQxvV24NHq1QkcGNMJSsLiiDfHu7"
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
