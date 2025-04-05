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
    "Y1ykmNviqPY6WT3wErDbsPqr1SedMBSktwK1cQmR45T5mh8D5bfrVF5nn2JW1boXy3oXwnXyMPgV2n6cT3wCDcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zk7oq7UJfNAgAyjqWGo2eiiKEtRMFrZUnZy4kyZPbKm4yr2NGpKDuj5wxovkfKFsMpNs7P4FCBxF9GLkWcCX1BM",
  "key1": "aPevKumbPirtg27k9hC8RzZpvHHpStJh9LzgeKBrjT62L8iTvzBajNDTxKMoh766nxSPDasnnpqD54C6dibLYZD",
  "key2": "3AadVbWPtmRRYzp5FL8ix7tntcdFgQLi68PPfh4x6jYbMz7njGX6LcGGCzrdSkDtfLBBs4q7AUSGwv6SiQwVEqnW",
  "key3": "3XtaFDCrXekDrejiXw2vHhrrVMSqyM5KDcWPHzCYgieKvoomch3MqQKNjDPqLMbaQ2UYGphxNVU4SCoPavqg2A4o",
  "key4": "3KjK375hvuctfcBGLWGaEq85U1uMc8GSqTnBv5aJHLFHufYvSZoRZB2cEMjKQe2YazjqMEaTRobXy1tC5zuDgTUa",
  "key5": "5X8Dv6knkAgb3QRA9VuqeLGnRaztYdHmjCyuDWmD23tuX7Js5SjoQz6GRYf379Pht7tmChf2XMSweYmfkARidqQH",
  "key6": "4yTyDuZPR9JQbwNt3LnCGX2JPGz81eJcc69To5SdYpVTn27Sn9ZwegoXBr3LWsCxtzYGqb62qFXPrUihC51sMvAa",
  "key7": "f6FkSp8wR2tfWrCc5GVGYsnXtf1WfrKUKnXhANp9dTdH79uLDgtQKdF6zVyjjm57uoa6pubBf9pvAMc3P56zdnr",
  "key8": "4Mvpi3e4fYTtgV8qhtkaM1CKK8A1vhM38rUZxiVufFvXqmzJLtiMy9TFrfSgHWG7NYJWdYZkLHJhMGLRkTKyZvCa",
  "key9": "2oea4SAd3KUVX323am9Euu6y3H8RmQ6q3BoNZiwneh1cYpu46BFNz2Vr4RQHqvmSJDo2k8QAY58vPqjvtwtCk58P",
  "key10": "4kWbfnCFNNzVtvVNy9MA6Cn55HGf4o314AGaKmeHjBZZKXyN8tzc5tswhs1QJsiCegpv3YnZGsveQ1JbW3vtkCn9",
  "key11": "67NTetJEJZFrGV6f3iMCCpAfKHqY3GiU5Yows4D3ckfyHRLgPbwtAbp3mGeyNskYegRsmCf1GfAhRAv7vr6HxrQm",
  "key12": "5mREUKbeDmt8y5xD3YNtr9KSQfb7x1GK42nGFQYU3n99XN8u8yUPHK8EG24kuoxJB9YESGkJJe1hSXzWsF7w9cLD",
  "key13": "iyEyeKSjnTDnLjEcETLohmKxhNHS6LYv5mVhE38DmjQRjumSobmKdxPZe8Z9CjtpWiWCcd8Ez9E4FyktgBUQnrQ",
  "key14": "2arYfjfmx1u81YUXECHxNusqSD82K6oBSMDvDr6Ba3snn1Y6SQWAhmWga51M5bq574L6xakYFPvy3DSmD7TJ7j66",
  "key15": "5wMVTpC1eCMp7s3X4WcWu9oMkPDGYr3rYeyaoRM1NZFnKwrVxqCrn96nqHh8VL3qmAP9KVeQybydLragmXaPvbsx",
  "key16": "3T7MJgVY2y2CJoKNgzrFBCtWX4FHJFNiiNza4wL5pMTHcCK5cj2dTLTdMjdccx1ETDmY8GvFx17QTQ2KmbwjwGLY",
  "key17": "2129HaKaPPKya3azEt2uQ5cYTpNG11ZJadaumDLpdqetdREyiYPm2ZaRwpasmQRsbtkYXCsby9GZYoomDT2MKBhV",
  "key18": "3GLpZQsT9w5nxoFoctrzndxYacRwaesJFodrMUtCtsGnKezpy846b86v2J5UaVdmWE6HUMD3MhvLfNMGcz6b2Nku",
  "key19": "27uheo5sPcrP4oQeZpwyHVNFGvMx45QMcmLPX5DRU8uwPxYjAFBSapHiSqGgxXtCfbzH6R9hCNC6zxKjpYS8Z7EA",
  "key20": "3vbGZpQKinoPoCE1A2KhTyL1S8ns3txfzyPqNUHfeYgxebjjKALtBCqooyaNNQQQwzRnH5Jht4MuvjrbRnFGbvha",
  "key21": "4zsur4S7sqkWCJQARRQmXBVNSyKmJh3pWZ64Y21wx9FrWTZHUVsenbyDtQUf3hVd1jADcCewgrMa28eucM3arqsV",
  "key22": "5h86oGyPyoB97QUPrGjMwL5hif8MnTzRANxVHW1VBpWGpgg4DHqNYFHNAfRbgxvqohUp1ZL2ChNQ1CEyNbU9Qxxv",
  "key23": "448sTeRz5DPawFJxtgizwEgg35bcNgUf3KUGiWVpkH31yzZurmS8iycLakaD7xZx3K5tcWLSavJrAJS47RnH8Cmm",
  "key24": "2HPXk2k7PHA6YzkXPjxqwbgMH5w6P21XK18uwrnoPtYXYasuTuBMX7PS8y5nrT9b7yVQw2DF4tFLrvzG5ZPoXmx5",
  "key25": "24EeLoUdZy1kJaaZTEeEix1494AKouDjPYu46UortPDd7ThJzRCT6ar972V7WK68f3gtBc7ZM4gbHxW5icAEMdym",
  "key26": "5PXXiUxTPFoT31TcT3FtRA3ARvfTxUirSijyP7rDg6v9gm69qLaGuZEST8FrfvMzigLmpmcTpsfmbigJsxSuTbkT",
  "key27": "385rxjLzYvpbSQPRc4MG3E9j9tctS8kaxkMQCzfbjTr3c2h7Auf7qx5xFfTKyC9tApuVFtMTExEiHoMNE1iv4oqd",
  "key28": "63WzUnq3rGuZfHRoJnMW94x5hzpzunz1BrnErsa8PzTMr5gcbJACqi2TmSHs5JjL5BMRFnLM9x1gmo87Mm3MQyhw",
  "key29": "oJwWgxejAzLgn2rgy1Kh69iHY3bQbWtxPQHEfcPJ5tkn4PeGsCwDZSUetktnHyH1Vko4fH9MoSKQe8A7qcDTTTy",
  "key30": "3L67tszH95RE951ovM9psokMp62wm1Y4YxaUncaH31f1yfHYTQL8boVJrtjhrVT1wUvQCBvkYLYbMemWXhKSCi6n",
  "key31": "J3yEjrK6sKfXj9VH1kHmqZXDTjQ3ywK6nwm4j3kBNKPtLLV2qXVjHq5fxqFJ56X7z3qLnNwusZ4qgbR9MHbJk2G",
  "key32": "2FZaYoX5wCmSyXqXn18A3rj8RgfSf3L2pnNUan9oLy6ocjeCzYVAQ24KCgPPExRzqEsHJBtvyMfviyBNWxkes6wL",
  "key33": "5ficmig1XYcHra1VjVCajSzNrUSBgqTCn1c8A4X2GXbQ2mbSyjr8sCxpvB4TwqYNoQGojjgoaEfwJsz6kFhcQtCB",
  "key34": "4GzqU7fexprbgoKyroGjHoPWdHnbtwUH2Hg3EP7RUSS1b5c7LpWG1WpK31KaaPbwPH4WgLNdDU3h1gEYqpGdwgYx"
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
