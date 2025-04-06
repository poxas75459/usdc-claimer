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
    "SrDnB64AHjoQyFSMVXrtjnVmKaM6eYu5B92JmefUgaNcEkLYXntf9Wu1UWi2m88DL2N2G3Vx1ZG2N3xG8cNbpkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s1NwtGYtf61thKGMQmYdLBeYQHqgQM8oBPZRi8tShwKMnWEp2dUEQTTZ5SRRZXXmui8NmS4981tMoXFjhjZh977",
  "key1": "4SGxzyQhyLdXXbqabstxLgzjy939wy9n8nk4McggQ5YCQwWv49iABaapVDEmzjMDGjE3VydCcYRxexdYDzvGrvm7",
  "key2": "5H4xGDGrQPqoZquHwVNhbWyKq8n31QpCAbZ6Np7G2dvTjYuaSZNuLn1Lc64D7T4zW4A6o6LPsqM2rW1uQhgcAdqz",
  "key3": "4iy6e3XDJVFbLwG7cBK3mEfjPtPgET6V75qgbr9gYik53zuCPmD4dt7LBETSkc6GUazbcajG1haBNu6HLr94VrXa",
  "key4": "3xmrY7suC2FtWoamghCEoEQtAVW6jcv2q3oSTi8J7XRD587jAUmgeDJh76wJX3pzVjPNL5fUMDacotYrzu9JHmYx",
  "key5": "2zfGeoivc7RURgzGz7LHEX6k84YYhU3sEabS54o2tW84j2yMH6pmtu239SL7CFxzzTfstXvKFdw4gFEEyX9KJDW6",
  "key6": "FERw9Lj8hgvhxfY5JQB4Rc583ZP1igbgn3NDqj4VCDNbxfdouvHVLwxNb6EJ3PiT2ekWW78ESvnZzncphdyQ8LV",
  "key7": "2VQncVbKzx5HzdT4yeVzbkRs96L4cdoNcKHtFi6Eko2noHDq1KKfiud2vqSC6u6BF6EAfGSkacuVM3Sy9nxFCYw4",
  "key8": "3qRPG3ukVBLkRStt1Yior1ybddQLRYnZwoJvwgNT88zG3SE8fPmV8w7bqGYr9W7kffirahCZx8So1FBjscwbnSWp",
  "key9": "4tqeSGBKBrLuhafChRyZKDPgZWNB3H6fq7ap284ZsPVbBsrgB2T7a6s6sApriM2dsVTFpbKkDq69gU6G7oWfkT5n",
  "key10": "36xRSZMBUvExU6LSCud8FenXRLDy3PKdst2VhHE4NTcJcYuoeJuFVrBFjhyKjteAoBpDv6cSxPg24a3GUmHp1J7n",
  "key11": "XkuLd6bw4uarqgbEi9jBCZSL6CbZJdwu8aDsUL9zFrGP4okTnJjq5mC8j9NwX3uiwWDU3dAajeEFSmAgEH53N2k",
  "key12": "3H1JPEb3cyPEKsmc7RdSMBMihKh1ymZLGg2LS6c6H9BPmb4etKfCrhb565k2jECBREQagFs2RT9bk8ECGoquZ44j",
  "key13": "3jDue9r4ow1T1tgBwQHu89Gz39Bwm3f5A6qJYpsLjv8u7gftKo5Aiqcj8WnE5q8Y7TPZiKKm4WvsrWrBBhbU7vwA",
  "key14": "4brPVvR8b3PWQKRrKVwRdWuwPTgUZFiMXi3kuy5vtga9DMCgmVrQ2aCrpiPXMxESM3mpjUcwKrSM3cPRtkEuW22e",
  "key15": "5LXa2RpjxhEW94LmV6FNMFDQzKzzBhC5FvGHVeAMJeb6755oydD6guGon7oyhG4u4P2vajcoxbhBDCmpRtoVBA8B",
  "key16": "5VT5a3UJpQ4fk34BhqmH74kn26jg77UpXsYnBh79cCi4RSF81un4k8yH1r9MLtPSTDrQQ5WUc3Jcus8hmb6Dhis4",
  "key17": "3qgneQ1J2zfgHip6fhaGTK848mAq5P8mPh1EU6AUCGehw1snAikYCtH5L7utPwUgmqbSGGMxTEiCg7yJzECTQTvm",
  "key18": "5pVCFwrzHG3n4DDZSRHhSD5jJVBUwoHtiPdrePEM5P8tGSDtHwsdM9sVwNh7QKmGeafa7J7zrVwSY1mqYkGZ698L",
  "key19": "AVaXhJ9fgQkEWMqAhmaWXBCmXzoFUgJWuHFvhM47QTRMBS8WvNvjACnvgPjEJW3HBiKL44URVD5oB3hivZVK19A",
  "key20": "2tqzfqgHP5mehHUU9hCeNj74SQzeGMHDuk5q2e1cy77hERLvqMRj5hPHjjtPRixF89bpApToNLUDQqoFahsyRt4A",
  "key21": "4syP8Cs3GYVujm1DvH6BJ733LuZGGB4ncJgVvZKQbL8S4UD4NdLGijJF7M5eWCSWpRt9Sap9h5iFRvQTnsg4BhjP",
  "key22": "47n6HRsgxrnspM567Y88cngqV1NYFzDdL71mApc1WcFgUuiT8zVSGZCU1H4wTJipD4Lf1gJr653GBN38uvYW1tan",
  "key23": "3xuJGMJ1t47u3Ebe3KNNnBcDzFcUhr5iDtVRND3fq9afunp2LsAAGcEcBDr8ji3q4S4SxiRfKuoW8YCEVDCaLKQn",
  "key24": "43rEbCzHAb77LYmJcEfgfoW3F6am6EJkEy9EDnpeDSGkSA2rMJ2DtjEXZxeQ5TzpRvF4v8z98cJHpykDGUs86zfb",
  "key25": "5cMtUFq4vXykT9bCz6T6KsUpRoXvhcVcB8xpXu2Xu1qx7TYtSh6dT7MPr4sjwd8EUwSbTLSJWkwcSXmqLHwfRPZd",
  "key26": "aoZFf97b8wdgSvNtTfYKDK3Us1AHcV1Hc3NqCoDjmKYizT6U5qbhdQMQ2bhzLhtfUrrFdxZTfbBcJExW1t78HPk",
  "key27": "386mDrunDk5ZYzMfkf9TvhBSJ63wBnB5adLzNfugUUxMoFMiLpeEvoAmvUqfbo1JJbskDCbngoS3paG46y89edk3",
  "key28": "3LVnxv6xAUAVuhXcrGZxKs1d3yLiJS92A6cam45fLHHsw7E73B8RLYLumzc9rfGfZVgmyqHSwZeNp92iwf6MEymt",
  "key29": "5HjsSzwu6bTJ4NUgnkVPPUhZAPFvCBJXHPeUpDCYftPbBZMDHXT9fi62cHJtaEmZ7bmkJeVobeFKwtSTQgjS8iDM",
  "key30": "2LYe5gmixNdB6gAh9NisJKxEWe7NLYy6WAFHgqEJ2iiBrddqCoLqndDSXcMnUNTFR6zxfrVw7dWVYugbRTvAPPFV",
  "key31": "3T6HjRjCqi41mypZPxMeE5ynUAungUMEjRqVx2KJrt3QiEwBEPaqg3UkPGihz3eBJR1d2tBrrVWAX8rJPVa5igQE",
  "key32": "2WyWhGYpD7thnksMrtDDZP2UhdUF4ZrTx3apF52L3ybP7rLzYPgkEZJHYn6KCbs5MNnRbfGwEWWodxTFvtkocMSE",
  "key33": "2wooHnZ8tKR8WGk7TBgKBrT1rX6eJ7D6hQRf1gKp46R2BmnU5S4pCs3roH7sHvSABdWpve7T9mawPJm36143zE6E",
  "key34": "2FgW6uv55xpV9EWR82b6LUkUjc11b3naPvNdpkwV6Kr3y3GveHzmQqvJFM1Xydhr2QCVVuThPFRHLNbFDvqmebdf"
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
