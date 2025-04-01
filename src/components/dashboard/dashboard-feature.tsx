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
    "5yT8FmFAYot9HSHb83FcqsiMkHNeSdp7DMSBSHBqVWZXiJPhtL9muehqsJYA9TB1DUFS4n3hXHr9WTHEYbJNbdFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qssEezzgLnZsHu9m2ACGZZeFT3RgGbvnh1cUcJdRwkMjAj4pxeoAAV4RB8Jq8ZMqC63J17HVCYXEBo4wRdZQrGM",
  "key1": "NdgmWwu2oKRnGLU7WQgjgtBrtrFU4kdnFoHfPADhA9SBTrZxx62rCUM6YoARw8W4pYeZYiQo5mJE382VhGsBH5h",
  "key2": "C2WLNjA4VBVGGeeBefQ2rx2985FxSxLsCNJKLqeELaPPWyni4nKy2x36mjJPmZkWAcSBLxwqX5Dv3xf4vzxAnb1",
  "key3": "3XMpHiWCUkUCaqzWeVux8DYEwfMRzxzz95HdCuCsbVZk9PXsrNth7DZScvA3qwTf4YJobS1AsaGngxVy6vMVJZKw",
  "key4": "2qsavF8XRnoaoMPAkSrr9zXG5UrpBKzJvQcKPsktXiCjw123aogXLFcntG4MSeKpCBC1kp3cdvZWxT7ueQSXEuRM",
  "key5": "XW8pm4vHyMx8q66xggZ4K3o9kakQQw1Wq6nwoFxFoWcNB9YGLyPPuFQQYLpW42cCWgdkjqRRTbPkhgqqyBPXMg3",
  "key6": "EG6weKMzDMQZzv15KmiErEyV5M8MHxdmMFBF2SjySjNm3ZPwwtZRxgAkkyaCsJpnWcNd3etgan1D4jeoLzXUnBs",
  "key7": "26HDizkj9vGEwLHAgm7F2c8iemWWRPEZy38u5VwjTCPW5xPs1nrxtRVoBcSVqqRexBoipKqrCFaww7zJf1feAQc9",
  "key8": "293R6ASCPMLdof33fmgbW4Stefgk1U9dL7z6suunMS2uBGuHvXBYLXL5rwVnKPAR5AEnyU7Nh5C4SRV1f7bcpKci",
  "key9": "jCy2nFhXuXfeh4iiVxgg1Zy2jYC6bYwFf3nEKZWetbAygsTWMQHKzQxFRHQCfaQy9srbZAHf39de92QXwvQe3VB",
  "key10": "2TtkrVfDsYJtEie26pWFpChDDm9wNvYmuEVNjTNWj8PojnZLxV3fbiHst1sVwbkVbjVF9LRsyrV9xmh5rpSvvZ4Q",
  "key11": "UW2SwPDZVVH95c7zftULkVsE1pWqnVrxhLay6rxoncJpRELSdY9fc7TzUoWpNtZbSf6SH6hURHJVFQRF8ANT6nH",
  "key12": "5TPa53PTvHtqpjyYp6P3UFy7X2su8n1ZzAb2DAGWJrJsc4zCYxVTVKEwPnzmCZkkS85iS7eJcaU2VMCgxjQqyrxK",
  "key13": "5vGirQgMvo3bWu9uE89MfLENogjqww8CNhoDu2FyL7Md9yq4ushH87AWDcXiLRs5VSouHY19c64WgMVS98AnfhG5",
  "key14": "e27rkt79jzApLLLeWzAmpV4QPUWAre2MxoZs9azkZcEXhgDen4FTG8NJM73J9CH9zsUY2BdhLvXZzKgytmGwggK",
  "key15": "3XUwLPbR6kLec4pFhWs5MCugPfCfQf69sjDt3Uc2RDsootnvabQyojSkZQARnYCVknC4V43nN4ZtVfJkYTMkGNY2",
  "key16": "5uPsZnkWwMtG1z1458fWj4m8XQVCgU2x1dBHagjhWypDhyzQXHtwiU6Xk6ThicNvno2oLC3hagHk6rtzayDRdZbj",
  "key17": "5w8rFQiU6sYzxyb2pFeeVei3Pkv4aKQfr1Jd2Y5hohH9veofyGSa8sffvi26AQgeeWvmk7ub1FD9LPbp8pD2yz1x",
  "key18": "SHeAeT8umiqBwBdDNeS8NX28JfPh59roG57MJq1hxpj2R3sZmhHj8uzMRHqHzq3Qbo89Rnrrcat7sZQ7aZRYH7b",
  "key19": "4wHCsc3Ni98wbNh7gwD8Mh2K5MS4dfFBRSC6j31K3wXU787zBUuknTUDEN6hbUzdSEbLXapG6gbJbwYcdrnuDjfP",
  "key20": "2kKtjh4UWN2tBuNKyKnf3wrBzETvxLyG4V3nUz2bgeHf733o2Evtc8HPiXEKiSDhWfHC2QgmzeCkVsu5uuVQ3Ed7",
  "key21": "4MTF1u8xhUWc8NVudPQVYWDs76bWnQmncPmFZ6P9pvC2iuq45ogPpmCGoaGMhsUyCdCHb2E9BHkYwzGMigbf2W94",
  "key22": "5brrcMEpu5dDzqKVioq3zhjE7gsTeSrMETQhu595RgzTwEPJgQTRAy4gEvFsxqn9cLMcS9zomWiK8bDc7L4pT5uL",
  "key23": "27VU6oc5NuLAB4aE2Qr4FbvksYQqted33wrKg9oUBKdcCdGLFuHumMg825izx8ZcuAAuDrwFRGxkWB4QzVy5AVwn",
  "key24": "4QGznHGJdTjRcnGBcAptxG8VukoQDyYQdsyUZbtJM8sttWde12iQHC7tPPGRUdUSyzbhGeeD2rP7xZNuMLBEQJKv",
  "key25": "2kEEMBiF3fsN6wBVWnBpwtcboychZjoAJ6nZQEXkYzesyXexXjJESCq5JbXySm3zmFNQFsN73g1cYQGgesnZSjtH",
  "key26": "3vb8hzTupDX4jvV5pb8s3a5LVepSevfo6osAfH7UH5nY9mgrddX3jCzPYDCoQ4fRM9TWC2mw3qHwZdXQDfMSdPSN",
  "key27": "55zUYBrvNN2G38rn9FqNAikTycjs8Wy7NJuZH1fch5ivYnTNr5j3FXfTBoZJvKYaZge596P7qpM37LkJDxzb9SSz",
  "key28": "3rVqfeCqHBnkQA5b6YUMbTwGreM9PLjfGLSRRZCUphf85XYBnxvFWisQiJYPGonsLkDYUa52usPN6XK6mW2GDDRM",
  "key29": "2eJmgHjvnkSCXMhpQLeqftJ8gETuYYswGxxFLXadzrZ9zZcnXarhfgGVTUHAaMaPAyNPpZQuV9pJw1DxUsq4hSMh",
  "key30": "dkNAUJXKryhE94r8LoqMnFjk5y8tGstgV7FvDCMjNZpqsWWkwNAyW4txfKm5fTx5nZoFbpmQMR5JvNXSsDvx3nS",
  "key31": "qt4irrX5DiJoHJXVPRZfDc84dWdGohAgVNTkXqaUzJ3yZvihhigXTQmVqy4LniGqd1xf2gnuUgbhMTwCHPYH7WR",
  "key32": "5U9iygeVy5WgEeEu4LD2meki2BeD5qpmvgYPij7bwqMRRcvGzfijRuq32H8NSyB7Bq5i1Yb7DjWnkDe2PuNN7r3S",
  "key33": "4qJVKDhAywxDGQwVrQGS7WJ4A97VQkneGxPW3GJEMsr1qM5kpmSKTr1KqwVEBwusscggz5PbFkUu4zG2WQwnLiiB",
  "key34": "2pPVy9HvzTf5HEGqKNJspnnbPQwNiV9jnendjWSpFme43kKN9sgHVBYqUV2momJLkKCNuBVWWEBwGZaUuAzqFMrn",
  "key35": "rGV6GPkAMu6LatVCTz3HSsBupsmbkHXq3SKFnpt3DkNC3XwoBZ79HeV4pJEMsz23MfqsJG9nZ66wp5eeZGDCt5u",
  "key36": "3xep8zGxr9y8fPewYVEiHR36da9oKN5P3RiPHqMpFWyrQYFg6VfGPjWWgCAwYtmeLvFUTUBj1jG5yNVWE1outgqF",
  "key37": "2htYAcfGobXBCuDjBTMEwaN5fmf9hdKoC18Tajb82PYSL31VByCQvANekkZiMAmHEiDkj4qMAK6Pf3A91HK4HcDa",
  "key38": "4fXTUvWRdWxExrbCFeyvYxrr18kdLcrDuhNQPogLd8nCdGAQSMygCQYiwMQSCEa6MWaLAf5PoRELmK8UofixcNA2"
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
