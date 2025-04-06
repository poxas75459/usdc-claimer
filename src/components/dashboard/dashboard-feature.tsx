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
    "3w5QkWhwwmNMg3e2K173BdyRzS4qvesvKBWzU2psdptipZACdSSpKgi3X6JHMLCBjpEv3M6vcLyGaXZwv3GwBSyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3urcYLbBnxN7yh8UVD8MBZ3K29BFQNtJCVibRuPM6GZDg8EB4M4L2LktVkNfA1DZGDeqx1Y22xgniqei5NEsnQ3e",
  "key1": "4nvnGG8Fji8Jy75UKL5GAKfRE8aohXutzpK1QusYBJnPEZh8vQfzwNHHwPX8zyQmWVTzbkNL6DnYCoCnufWJtqpJ",
  "key2": "62bpZrf3RSbQ1LQc3TNHDxA8KUdkPFCmUT5geK5oqfw5NWMBm4WGYWti9xnDKxZp3v56iwg7n4BAYBq1cJcVhV9p",
  "key3": "5hQLmyPNRHRJqSLgFnKbxY9nLhmMvsGfQ2Xothh9mSUu4M56EyxuL55nsQ5AQC1cnFMq4ZkupewNsQFT6vhBHPq3",
  "key4": "4BZEN9XFN8DQiXq4v3vxAeshuxLLdEokyWAqGRKDPGjK8nZADFfFPwi15htKZoekCi5BYW4WuMGjM7iNQRAQBfXF",
  "key5": "poiFAJFVm5FeR1TH57sAQKSegEqi6uUQVuUwK7RFJZ64PnbGzZ6cD8ozELXKNQGctigzBsCDhF9ocs4JhUjTf35",
  "key6": "3q7BNApj6UbZQNCfM6ZjDV8mWyGqVqagMyq2Uobwg2YE2pTDzQkpTwXHQjh9byrWGUL4sG54XZGMPP2USh9AjPAH",
  "key7": "4kyoshYaydBZiYcLtbSfD6Yxi4mkDMqjru1QobMDaMWN6E6KGFbQG3EG1v9GsmiuZjW53HQZW3WyTex26nGXadaW",
  "key8": "2vzsnP6txXxcrop9ZyZgrf2AzcUhA2YDM2jtYmKkPu9ng1Dqs18Qq83zHy4WBz8BmgHX2r6oytu6sQpCnCmTUkgL",
  "key9": "2TTSBmXqTdJLWHtCEukk53uNjVTQdsHwMGrpahVmsYpRrkT6g1yZenrFXRScFGdPptuPLNfw724VreTNuwDqeXE8",
  "key10": "RwuVvE7B84D7ovW9fKobPuD4aJJ1LMEzV2jdWjFK3bvrBVYBCKXnWiwaMnYZvfZCVZRb1AoUZ5nXApzN1QbddBk",
  "key11": "576FzNJHftuSUkCMuWczEWkKmgJor4BZopZwQKiEkSnMdCihYkw9ydYKRwJ6ECChFc5Uf5n9BEc5jGkfMGTRtAta",
  "key12": "2uzhBSKDgcJYM6UmuAKvtn47AkQn6mafVd8F2nj5RgtVH7TXi5nHUtUhspfoNW8Fd9V2GCWZqLdx316At2smAYTG",
  "key13": "4tzSM9pDM4nHM7pKopp98Y3tow1nLRaRyk9HGKtsdpZc9EktycjFAZj8HBFozuwVk2qRnJ1yPMgHbKYqa5BAzqmH",
  "key14": "3wjqx92oZwVR3WTozpwNzzzjhq51WPE6u4H9dVNzt9T3w3SsCbiWfDoSHn96VrzuLP4mQFEAbdYhn7dSCMcVMtSF",
  "key15": "5K2AcWCR3B77y7ZiYPuUYo7p96TGvjsekMF4Hq9hytFkjejKWEcBzCzhmZhX3Jc5PLQjst9DNVCb5NPrwqGqMjqP",
  "key16": "3cX4vdgphPpvHH3JntSUmRRsNqNiEhbNUyTsnhbRbkZznLPFzkibhtkP9pf9QGw1VeQQtstS89pyNNfLCJ6godCw",
  "key17": "trFTJNKDM1XKZvfPBuGeVcsAipCymT6mr9nYRntbsAno4apY5PsFQz7EBHPqJNpKz8cTWRX5izWgknohv2JJcfg",
  "key18": "3yGvsmC6N3JaXyEWkfVf7ZPaGXgmTtcKzB3sUCqLLwoDYXgr8FoKtt1XdGcWDhrwLsTAEBWgUFaEhyvenkdwfHCg",
  "key19": "3crEm55avLbSYSDNPyGqDmzGD2pMzWZyB7aG3eMThcZFp9uCBv7U8RrZyYZ46HWQBENJ51Zp3P9EC4XTqnd8Tw9R",
  "key20": "21vfqKhGPFC1ynagxJEbNbK32Mm1dCP298e15WZgJiyorY4K1SRwiFKfGnJR8kf2ro2EQieZRfLFaLv6RYkGbCbd",
  "key21": "2wqjUM5E424hBvHuoPGadixuqGhcMhQQnbaB1S9jyr8NUiYwAPcrM67vHjzvMNAucua3mV9vvoyU7Vw8Pe6d1tt",
  "key22": "4duiVzTQwFVKvEprNAoRbAkq1b75nGXKH6tsMX9ZNfr3ArkCkdsgToRjVq7a7eEDSy5WAn3UhmEb8RFceHRTCe8f",
  "key23": "2Y9G2gVGhHg6cQJQzzqMPHxs9K6pKcLx5zBgPZe7K4so8QAxFBFGNi5jdj8feGZBd4S5e5sh879yaTdVBXPpRYta",
  "key24": "5EeF7tmSf9JUHXy5Lf3emCMADS9FHpULaxJhdUbLZXhZJQVeBVH1e7mudo2YochYGCeXQBfQ5cWcA24HgwCVXdyF",
  "key25": "2rU7tSEuaDitp5z8xdmSpF8rqTr5qGciL9gcP7YQp61ytvL8zkzjapbNtxQv93s55Y6ek3cWJQu3NzW5FiDGSdUA",
  "key26": "54GXkrBGieLNeYot5GiDSxNLtTZJJykwozdxRhDCfbExdU6VNE7YXWwM64ymDJW2mVtkspLr54DgSbuRzWJ5c6cB",
  "key27": "3xGw47aEsbTCwNNhhBhgtWq6x6JApb4xguLmZdgo7yymGsVrPqHp3tfCjfNjg299iDgdp1pQd7EKQnUVzgagYomj",
  "key28": "ukDm7dUNig9zjNPjs1hfEUtLpMNPM2MywNGTe4kVesB38ZThsq3jv4wDVTZffQRTB8tek4P7rBmxVadotgnwdw4",
  "key29": "3kun2GFznWBUEgDEq5NuJts4MQHoTYRfnEQCzoaxDUzVDGFjakaoX7Sm5Neigi1BPw6TQqYiZcTmbqBpRWmzus4B",
  "key30": "2iSicLUKB7nsEJHypLsRYz8XFFPV1db5tBMbAstG58jYnarEfq6bTC1kGZ8cTNDwg23g1LhkhXwMoZi7kWX3eodw",
  "key31": "4w5VEVD1ozjwVh7HsvRdv1reiK5hXxPUraqQavcEce6c5juPeLC9UvTAGWxDDik3RQaxC5CZn3bKPrsCfx1Bj68P",
  "key32": "2JmgtPkMCwsEdHKNZUa7zGdx7asELw6Tmat6RCJyNhnEag2Yc9hqf4rYd1xxYqPccrreZ4CueJTertRTvQzYnuGc",
  "key33": "5HPkvLa7GP1DdRGSJbs4e1U9KrmV799TMoLCT3d1n2oK37RgxAwLxaKMTqzGkWJhMRxtdYx9JjtagjdRAGEor9Mk",
  "key34": "3eyrbj1RacMW5fcAvxrLa8Azp1gyRxoyyPG5jerqp41LuSF79wLji72XhLqdq38AtNTBkfoarSXfmHTB1ph2ugNr",
  "key35": "Krv3YNVWyGFXAiZ6ZM8Fr2vCGnP1UTi8X3M2T4XQGybHW4GvzuA7qUGmX59fpU5fAbXCsmqmKMU7PUgvEBPMa7Y",
  "key36": "2gS5QqegJ3P8L9iuQCTsEKRz46vJhLMmGpFm4ZK47wcZDVWXR9L5KiaG1FWWkMs1JCc3Yj3zK28XN2g5SDSCuUBj",
  "key37": "5Sm7WQhs7VU4CPoFgkrS9u4Y9D78ajJo4Povq8wprKA8y8Y9PTf5qVjG8vHH4PGmDuxVJMW1iz7hheoxcoP6ExHD",
  "key38": "4qEPAursi9SNo8yMTWGrv9Qa7mWecmawC3NVEAkrLpwiDXzc5R8sP8y6XhSWqbewv5kdSf6VBp3aBhLCm1zbGLQg",
  "key39": "3krsFHwtaVhhUQwqkmw1oSuMjwv3J9fVhqLNf5TSbijqk2WXRrEoXchcCkMXeN6Cc3ucdZDx1C1GtWsaUbEY79XY",
  "key40": "2yhPBK2VbnDN6UrkPuLdSswN83y3f5LoAM7sZsoUoYJ7nUC3DnijQMtqmmy6cfWYgBrBW478vCh9rbe5a3qumGas",
  "key41": "3nQp8CNMpgzDwGBoEZn8SXogBDyYyPNezzxPcKUXgxXqWv8Wc773KuYUgR1KYCVt663MGoMx9sstEqjyfGaVx4oC",
  "key42": "4b8ThnYLkQrsqXzdQvr6RxvQT1UEqdv6H5KShwoZMk4xjd21puYqxe6SEB7sLbJe4iX2kcUzH99fAQPtTzMb2iJ5",
  "key43": "4RPW8K3iLAUdB7hcQvkygkCNyQNuSzQXGpJ5T4QDTsrjAecE6TkTdnmCXHUzje11y5HpSuSuEV1E3waTk2Ed5s71",
  "key44": "qkVdRcNMRJ9ix9u4atoRytefrFQAUumgRZX8qRhMuY5nhPaKWTsDW8tn5TzxyVSLr23iKuuWgZD4HurGrwhpfK5",
  "key45": "4ekM2peMwmNnTEqPb4LPkCKH9sAWkoiQ8XTSGMUdKfHnXTb7p4nqUKNbgMNBeBuJP3FF2UqNHtQt24Yw8pXh7rrC"
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
