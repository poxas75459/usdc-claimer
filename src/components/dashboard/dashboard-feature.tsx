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
    "4S6CCh9gpmyPvoPEno6M9kPhFpT6ovZnjdewRzZAELhXurybi8R4mUQqAK4wSPGerjku91qwZnU73hm2RZMB5x1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kTLK4NN1UWHdUDdXaSC3RNPhdC7DdQimqSWR7DDkpf8DCKa7dBdWC3H8GWAq7YkYs7ffmPtTZ9RGqg6xLoQZYGE",
  "key1": "2TMfQx52NdUJ9ndBRRydtgaSLyjUX4vhgJso9pT357z6jvamfP2Nfb4FV6vmGvtpdHQ7ENNaz3EqRgD4jbf5LyUF",
  "key2": "BikRsh7ZveS6PsENQhhX9dk9ScF7mkg2Nfm1dcS3DU7LcVm8ge4Mbujyhg4S3h84GqptoaH4mfVVH9CL5HmbXAw",
  "key3": "rLxiWWDaeUp7XNUZwSV8X7BRhoLYV5CYW3Kvhn6pqHYbzK1fRrtfaxXy2HMqV2StNWVRrX24oGoxPUNdftNQ2D4",
  "key4": "u7uot7vdas6v9p1PsZZgU4wEWdKfrSLvQJjH5W8YUQXocLWmPgaWHR3E41dPSq3VPZXJJgVuzFUCAhGa8wTvyAw",
  "key5": "3XwF9AjVviK1Fmt5f3wBa54xZn3NBcQQMTfYsri4wrAFggzVBbUV9TNtttuDNHa4UZGAi7TYLiUPUpxUz2UAamqN",
  "key6": "5ktpM9fpRbY2yLq9VDewJn9RTaKz3Rur573AkT9KVP9LM487MGCH2yywZCKtYX1dpWHCyKJrPazf8higBtBZwpJa",
  "key7": "614VqCXoZzetMVPeVCL45HAU9GBp1sEcxg3Szcs9V39HhLYq3ULDdtuwTrAVJzsVxU1CLiPvs9jTVyuxosCfxLKA",
  "key8": "3ffoP15ZHjPGviQy73st8ts4RirhBDM1qzQKd2M7W1MvBqw3jXPUDftCx9ravCme8qEb5Py1kp2nfd3iczxb1SqB",
  "key9": "4py92cr3oTww34RWTxCb2Kf8AUBRtZy9h1osD9ADWMw8PZLGW3QRmagYWQY3og6Jhi8g8ESRnnEa38DnpWfSHRrE",
  "key10": "2AfivRQbJdJqigZVU9DWk96Da8ztTRtiVCDukTh97q32s5jSAHo3w3HMAFQ69yejauXSqc28U9joXQ8UGkNuffiV",
  "key11": "1bM8hkvLhdmKoBs6MMqggQqgdqJKBJTPfqB6E25CfFSoKkcL3VkNWqsjHMdmjMFDSm9W93c1K13AAcVV8UmkMvL",
  "key12": "51eC9a6kJrB74SvC7sxWzssFrVDenYwak3jyX5zVABPnTgg2bQ1BsJt99XiQPuX5j1QqRjXNy6cp96QkFqHe27tm",
  "key13": "5RLV6SLFCUYVerYdHfEenktDbjVDj9dtSiww2k3odBc6nuAZLgjw4nKMYSDmeYJZFtvZXMPqyYmuwJwXnc9vwLu2",
  "key14": "3PcEdy1t4EyZeGF9wdrb2WiuNCJkjJpsKsbXLpiX3VU7K9isA9GnGmWuR5dQjRP3iTiRMTkMeRFjXzZfdNJ39grL",
  "key15": "2CTqELHWMZ8sEy2UwaFQ1Z4hXn5LVhvd92iGaCdq1UmFPEtCZ8RpyMgWtKTPvdzmMHVHtT5t885dbia1qvsukG8A",
  "key16": "4z7phMBe6nhyfkYcdNcBsag98WYHhsvK3N6oLjimdGzWML5hTQ2ZvMbrW3JVGvA3rpx8v8FobzUKtKPdAfhgzZpR",
  "key17": "5my8LfemLvKgiBVeBwVhBPvfGdXxD6XdA8zUHu3cK5A36yG2HkbqCPPdUjS8ZacDbdRZ9iZ8z6YxAUMZc3kFJaqg",
  "key18": "VkEF2hPnAD25MGYfrxemDG496gguMTMP77y7hSGPZLh4XaJkHUnPrvQ1Md695QJc7sccVCr2xwoEJ37q8WB5ECR",
  "key19": "2kwysppLbMSCjvtwb7gnm4EXA7DbLusy615KCxUgjJ4HT1yGbv2iLwxK7HjbCpkWXJku3YADujk6chEVcEhBVcV1",
  "key20": "2P4iECzchNCLVVZJ1eHXEqwyia4yjpDNYDfJFs8oCdyZDQSER8mThvpBizUZwhg1C2wANQGYE18Y6vx3p6djWAUX",
  "key21": "3HW8PtG3L9JRuy9h4TrorCTte85AXH67u1ihsuxna54SwYDZ4mhqQYDQEDj3DXmCoKHvKPLvwZgjbEXBaXbwH6pa",
  "key22": "ky7ARFrP5CJ2CDVg6hhZeYvdWwLzLYcLQbNhs5hJDF2F4ZPGtRmohC21SYmhyaU5MDVwoUYytNd3YkPVDuCxDxy",
  "key23": "5o7WeLpy4UeHxsvAGJxbSSuk9zDrNPzc8vqAcBUC9U5GEhnZSpjksbhF6XXG3NkJdmePLQ69j6zRqjwepW3sTwMg",
  "key24": "34ckMznd3SZ4o2DJQq65k7fbRfao2QD1vSYfg54E5G5g3oNBY9NpH6FHn88yfdeDjiWCSPHrRmFTTTwaCKM3aPPa",
  "key25": "2ZGCJrDF1g2JhWQXhm5gw6K7LJoVvAoLJameN7hg2UjfQKBSzybP2QrRYezeYk2AHTW6E3AibM62ZH3Zpg5aXjGG",
  "key26": "2axYiEhVMH6sDufw4z3irm1SmDpaKKNqKYWEqnBBjNgRg27Dt5ZftbGJhv3A9ZydrYCGSBbN7RzGcjHWMH3vwKkA",
  "key27": "5ZuA8brLqD9wmGmTETKWfzVSK7ShmMzoTNv17U49cVDmP6j3PLAVQZkkqZhYV836Dwg1DK3mJos8smBWoe9jSJ3J",
  "key28": "4EgNhDnaLDoESkKb7UgSYVagnECx414m7Px12akPmxryrwtszRMc7uJvVBmfA2FV5oUtHZ4KXrzVZf7twvxjR1JF",
  "key29": "Hwp6q6ubkbQP9kT1dTrsdKZG9X2yrhmkSea5sC5Lyzx4VZvQDhy2iCHUjr8v4nJNGFUxQPspYNjnNZchs6vJ7zj",
  "key30": "2zjqqKSdvQ6ge1RMK3k3DtUe3nbLHFmzudRmWV1hVmSm7hYug8k3X6awBc1jrf6CSXYq6A4JAsfKhadVFyaFKDte",
  "key31": "56X6vGevQvTjLqebb5MU1dutKZD7snBBRhSv1GQgoNQtb69MS8iv2bhT7aoMcVLDuVaCjcWjAdZre5inqpVjyzoc",
  "key32": "3QoCupgQfWaokpqwqdg5meA4oD912ZEk8XJJvj7QNDMCzqcwGaM2zwqrsKC1rSGspnTeKpV2hDn3Nzs5PNLkCJYL",
  "key33": "2dmKNvYqW2WwFNDK9z3LQZ8a3TCmLwTPN4oehGaU8ri1tVD5y84kiLZp8Vnh2HLCwAuL4wgPJgMtGCrXHRaSErH6",
  "key34": "3bjJ4e3JNrb6ZiFT14KTh8TgRFJvNjFnM7eN35X2wL38CgVK1itL99Xakjr6YgAmieoDpTj9EXxnjKqS7cM7fe2D",
  "key35": "56h7jCBwg9WMqEGFFwrGGHgFRpmnQBtFALn3TbLFYVSgMA8pLD4zUirGrZ5p9ojw3hfXXF55uQZgDYRT3ZBFmQ4J",
  "key36": "2zdyU5REjU9u9bcfhZRAMtxAuprerNg6P9r7wSWCH3BUReK59AswvrUS62nb13FXRcydPkzNRmGszEnBSW23E243",
  "key37": "4KertT6C1XJzJL6ad9uZyvqPiUkmD4XM3N5dQufwhcaw7PmqMWHzPJ5W2DL72g2Y1ddakg1uGgviG7DdgLhzB5mT",
  "key38": "7Q759Ge2rsGa1TKdCSJvz2RzfFs18Zhr3ieNDwpLSPgs5ZBRYxXbGvPzyccoikzcWE8peQNB2iBhWGQ3gShbdET",
  "key39": "3itYsB7yEV5WiMDwmcPEcEBDEMc9Gfu4bBhvsVMYHGPS9TAxkTLebkFhzxC8e2BGQbkN8qurrqcqeJJvhoMznah4",
  "key40": "5WTbhv4pxrwYGrqEcscpG3hnNKxudGWs7jEFoYevfpbnQJn5gVKw7UjyptnDN76y6DZxmwkdLjZeRaZ4sYLeAcUj",
  "key41": "5qQfAmMa9FGiPJwYxZwyCAhbmWvBAgsbCPjoqeUFfHtrG5Q4zFecdQYRQjcb4xPU57ZbdnESvcGah4e7AAJBhgNY",
  "key42": "5VUFStvk18fJgrD3eqvUFVHuN4F3eqDvyaWxNdyy7oXLBDVGgUxWpw2ndhfkAeBsJvBcw5XVTEBjTnRrLkx5LwHC",
  "key43": "5g2gmEC7zyuzMoyot3rvq9MtfueZ1f6Ac6m2WMcnX6nkET3wPfh3ypYeShbGNBnAuS6qcw3Eh5yTTPHaMdeapXWj",
  "key44": "2pti7airphMYQinFwxt5RoHYmz7qPHTNRyMLBLTJbsn7KwcF1HVJM3aHEGmLA4EqRNht8RncCHdHYYHLsaFR7vxp",
  "key45": "kynEu4aqVDgys8SEdMx3LtEkjRdS6iPM44cdo11sg1muVb12hZjJptzf51Lqgu1sMuDnimnhWwZDmwKD3LWNbnC",
  "key46": "B1CAHeDTWCZuBt2bC5TtGJpbi3JrmUBYvsTjeMEA7AyAWEjf1sAcXztrHZjTC4phUvXscTw53hZGfk6jXss9HdE",
  "key47": "3rqtCo7P7Udpzfjp2zqxfwcSA6QSL32bQJfw8n9YGfmR7v8YmBwM8QWr9ifjSj6gJ1kKodgynqfofsamgxTkuGuR",
  "key48": "RH4fZsPNa3TxgvtKs1sw8EhN8VKupjPam2xzZ7UmAdsb6L1ppmyZySxjTtXUuUUbR3ydyV72VWbkPdCkfg24x7b"
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
