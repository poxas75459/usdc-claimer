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
    "43ndhpomHuvUp9haqrJ4XGAeABcm5cUmvXnccu2nv2SQAdQNoBmko5CjChAWiXucXJaRxRDN2fvuBzNYhom3YPe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gMTk6VBGq2XPo9JERFUj3KeEPf1HoD2wuVtFMQiXM6VKVjqKPP2n668CsWmEzdEcEynLJREpAcBv1YcifuETctu",
  "key1": "2V3kQddoy9dg7KMXRuQ5uZyp1QQ8vXVRrB7Xtf7NZdWRYwQY3KSSMVnvfiLC1EYGWeageVxfewWcS1cNgBK2Q2DP",
  "key2": "5DJrnnZUXNczHpNY1kdAMbdNgFAbghJEyePmQaieKMV4EGpvwisUjWBPWpyMau4tSSrZuPbwZNn7UgXkyhCUBj2L",
  "key3": "5MsPujayBH5THbyULdsAanLKD9PtcTYsVQs3C4CQRHMeX16HJM1RsmrTdaNJMzN2GKVm93SM83QBxiDe7S9L3u88",
  "key4": "4MchcDoji9R57jEymDFqwXUYioKypasegUBVRgPR1AVtYoC6EeSA4isAp8AUgN3FT4PatmjAwrRWQFSjYfJy4AGW",
  "key5": "4xNQZZLngpCY72WgHHfzHwSxtmhaFBpVmTtp1p34epjsj3DnyW76p1bUwqMGuUJAV3rSNLcSDNJJAUZBohehVex9",
  "key6": "3ziAo3cJDtYh5NU4kzM5QNPzvhtbcHe3Xn28uRHLVJ7kzawsKJCBbLcymgspuEsRMD16BZdowcfBmduLp3JgXkRU",
  "key7": "X5WqNjtr5mZxRcX5YJEd8EpuD7QF3SXXbH7tgGh6qVr8EjDdbFtkrfKUxShF5m9wdx97Vra7tcUqe55cc79fjVz",
  "key8": "5Z2gRuFx9bELvFNTxwQokPnwnTornQDto2J9cfdjSXYW12Ahc52ZMkJEyxsvngbhQF4152SwZoJncCLSakp1jMqh",
  "key9": "39nn94DDm854oToHLD8spTwSpxMAJhR63LJ7o1MqYoErJbhEGWDfFigBzabiywFv5JB8Cnf82JwRmqAxVx92BcEK",
  "key10": "3891T82rs3rgjXWDDcDZLdUcrENnWA9JZpZfzCMKzXNkBecyQrpPrpUjTBZinBZijU6Y4GosUyyt5fAUnG2wkctp",
  "key11": "4stH3ruf3q4SFbQrNvFChki1ZtTiKEvXGZaeLXG62NvN16zFSQNNL1JPzAii55gJvPBybJTqRg7PBcVTVWkMVL5w",
  "key12": "EfXz8rMeyQ7d1pz8ZfFVcpLktx74yey1kwsJJogyjStBLSHgCLv2Q2C84TfNKUndQduvbLrjNsQ1cC4dJqUj94n",
  "key13": "3PeQNh71rgKfme3XmXfi8rQZsxGFjoHp4So3TbC6AtDzfwv3WmXvSeDkA3jR88K12GSPpsXZfW2uVx9FSzPZTPzu",
  "key14": "sFMgst95UkGXjdxwjQGHEWqEaRybJszmmvkwuQeYXXAzSiVVCxDrMTvrehruzHSwkYcriy7v3T5A3Bzvk897bai",
  "key15": "ZnZUKjkVHtw9rsySxBZqHkvmWmuigHHkmHf5XFxqiKxBFwYrsgFoXkkDeb54WzKdCrMewNTsz7FLHGknjAE7XG8",
  "key16": "3TGRB4wdqdFc5Rgn1nGVZVMnyodvoCC75eNNpx7rgnkc3k5o5LfW1A3PWWV1WwXAi81z22QvV3wuQ1FSUUp4VkGb",
  "key17": "5Ahi3L9vyNAzZLmm95ECFstxTHvyD2LAdWTnKp9zXTepjCMZKt8zdLjmUXtpUvPokD7PTe4V4bhv8SuPh4NRqb4Y",
  "key18": "2fkucfSrnXXXuN7Nwhf7AFY347SU3kkyJTf34NmyQPtWn6GkQnvyLpDKYiDfVMg1XFBoG9x31bJBSdjN5AJY4Tax",
  "key19": "55WRoKj5UuYwj2Lu13tfpWqwvaJ2QDF6kwW2GN7tTA9cHqXNP7P9hXEorSWiuszFQWxckN1qzXzujoaCW1pzVDrN",
  "key20": "5ZVaRfC5teH5jV1Rq1rfS2GiFvoZzi1A2tArChnyimSHaQjKbmqsM7HEuJfzGs5EzcyX5KTq6mfxF7CRyPwrxK7M",
  "key21": "guaptMJ7QffX28iiLdW3YE1tZm2cs8VLSTqYqQ8MZRef5N7jwBAjoxMYWnmcisAFpSKm447LT7mi81WEWCikrbD",
  "key22": "369GgeQgpfx3AnVGhSsrVZisrraMBZ5ssCN62GeAV2hWhEWG528Gp3ZtWs7iGZoEi5bfvAJ9ZK1FMJSbmGwppFQf",
  "key23": "3pTCn6FYR35orpGw5ZVrLWW2rHYiBgUygeCBE5e2mg9cr51KtW18KSszhBxZQCDWtJdbc2RH1NqXnWnGC5eqtMrj",
  "key24": "4zaNuRHBuHrA3RLU1ZmkVJfXtkQtyT9BAqEn5o7sQGwXvBoAJJkA1Pxj2CvFgznbb7F71nwj7jp5NEdatjtLbdT8",
  "key25": "MWj6CBw9b7ABpaMuenYxafhsaVBeAmLG1XFhYyxc7KswisDDTHAMtevfcYJ3pbVPt3rnmD9cjWfNo1ADSbdSQJk",
  "key26": "42USbfA4ZzwHvT3goBPUn5p4yscujF1ATzhcQqefE1VwbsRwTt46ZTwhaYXEUGa31teXDT5z9rRcrYy5PnJHmwkW",
  "key27": "3LWAXXu8cLuJSco4sxH2TWzyMyucvPpH8kPYnWghi8auC33zFFnKGs6kDMaZJqYHECb24b4d8jRaaDPdu6UTKHKT",
  "key28": "5DESWGDX44MesjwQYEC7Xufh83RqVBAGMkGbMhshenhT4tFV6UgjfyZyF7X4oQYUDB4Rxq2iPaEqnhPTMCmEUqoR",
  "key29": "5jqVTouiUUx3V97duHi5BMU1CSz73UZ5sxLQfB7ZMbc5Dn6Np7wU6QLxfSMgXDnV9bq5FbSyx7XJziMp2hjJ4xji",
  "key30": "4nbgadsRii4WYiBNH26MHK8J786ogi8Hro64L2b46nWUhwLNrLttCTwoNm4kEjPEo7oEJ34jdmk3b9249ZwdAufY",
  "key31": "f3WTiTKRpmmB9n1ppVBcxaZyMqdZeEwSk8X9ucBet2o2yyMJA2B6HsT4wsr45FWyE3cTfQWKxFsiQtM2m4QdLAG",
  "key32": "2YFjv8QutE4QMkM6nxaQzDA6uLqqFf2wSvYye4iNxjq6aNMVoVEzSG2geXNS2hdXU1Z9v1TmVvtfiUkVMXGYuJea",
  "key33": "4bYn6x6WWE3PPQs7wVgokdBAt7X5M2bBi4RwokDxqombikf3iWgkrLNbijdjfbcN2XgfYAjnxqqbTEh4NMhpwfqW",
  "key34": "4qCCuokJM4GaDQzjaEuStsfZ6DVoqyMvEE9QdeuvrxwPJHyuxFE3m3nqRcD5nH1jjT5Zi4AzDmPt1LhbM4rTKjYF",
  "key35": "4AWaaSRv3Yi6iQJAVJvtac9Vvzdt2Z5hEeHgT3hmZ2CgReUthzrLnGrNKkbnSZyijQqYX1qqcnGzwg1HZ2qkdFB2",
  "key36": "2dB3TaA7cdejuRftd1jRzPkUjPBsUtXX2U94Br1VtkoijVmhMTWfUDo4nxkn8GtyVSV558BzUdEqStAmf9oPY7fZ",
  "key37": "2Z4zwJPB7RjZ5RohwriYp2XYQpwNF7FPzeYcDiubbTvrqUPgEAsmxRpkHPn9aHwJdMQMWjPHhgs4ahkCZsjVsNzv",
  "key38": "4SjiuNpQYE1TJCUhCt5n83vEqBBMnuZmnfsr9bSsbL1jyyNBQGbeMdocFYVnaE3sqjhgZb3ihmKEYtBzppZqdfQM",
  "key39": "5QMZWfBtpyfZf4WpYjQn9zinrqUFS54JtTDDixoV8PM2Gjm2deSNVDQE4YQ1HebD19Mcet4bfFyeuBd5H954FXa5",
  "key40": "3e5y3n98H6y7SMSffYHzNuoUZFPuky5y7Yp33LwTBcVZjsmMvc9ZGuDtzGJGSafe4YR6ADUAzFVPNyxbL1iBhEqi",
  "key41": "uYmp4KWzuUHq6yUyaCWX7zKV2mKMvWqvFFjKPSqfyQ27ySKMoNiPyHu3jgF1zg7V7u1niuwpYYtUsqyKVWjZdeq",
  "key42": "5LrBmUAJLaB3GMhAogcaNvTNVXfPHadJR6cRtXpeLL2Et6sabrXM3uHmAQ8QGWvTjkqrSjfzctGLvygFPGUmeAvg",
  "key43": "5zDBRyqNFiNEvMtmn8asSDvzS3aFrbUBy9kTfvckKZBgyWs8ZAJfDXF2pacRvZ8131TMbWqNEacvMWeDj5KXTXG7",
  "key44": "4QaCad4fTzHFp8owNp3wLhLcpkw4gDKtgKjC3yUDJH7GWqgGzcLbb4irS1KDUtBGxLHTi11FyLuzaDtpupydooaQ",
  "key45": "bqo1BCLP9hd1tRZGxEsvxu1oFTrmKn2ycex9XiSYRRyu8Mcyt9eHa2he6ibC1DmfeahE7YFpbsfQuRXUy33GZMS",
  "key46": "3fULCthC4p5oUKgD48RuraQNBuU3R1dmfai4eM9JWMRZyBJUNHKekADyt7tfdXYnLSqEwMSm2VE7LbDsGAwxUoRM"
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
