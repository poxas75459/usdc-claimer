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
    "3fva9wo4yPMkzLhDmQB99HcMgocvsrgDmKGMDQmovpcE2M8Uhkq7DKJscjRJ7JDyrvoPwR2WBFsums2banQyimzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5STP41jHL7A2v6f7jiJhTS9ZPb2bpDY4FyQWjZVoj4YwiXWr1FXfRohMdF11UJ49rpiHjoGnsyap2FLBmJWcrTj8",
  "key1": "5Lh9BadMBQvrg6VrYCH6BTebD7zjuPzMEqhn1H5ftCjLahzyfXvux4cPxz6WVDatDcipedmwsbNfLaPtz25EeKB8",
  "key2": "4GxipvRj3Hv5S3vX3LfbhRysQYHvUV3yr15egjUvgjkFPYPu8p2afvdrLFtit6UDX1ZpbXrRfLyXF2Tb5yh8NGrr",
  "key3": "3BdeS8KijxHLHSK2D8eMbhqri4dizYaL8zg68Pbz3Rjq57xbHuNeqXR26wFrzcvj4VUe1AnLeYqyXeHF4Wbs8ZAB",
  "key4": "2tGAWeJzAvza4DBjcgNYkaW9sTtsQe9TqMovf5vWkoen5aQ7vjCrN5Ydb4D3UuQWE9bRspcPPYDQWfvkKMBRtMD7",
  "key5": "4trWtKNwwHCf2gjx2gubf6SFUqUPoZM9XM6FB3h3WMXYdThKg18K5HBTt46g4fXYz461R3vEViegnoZErqet5pTA",
  "key6": "5mU7npytJgqVSXdHKDiqDDhwZtpJWeUBKH7KazqE9JjFMxywf1fe4NhCcjYdckmio767YfmgMbNdVCVy5qMNsD7Z",
  "key7": "3qNpYm83RQpM9hSwZK7ebghtfF9cN8E557WEYYDzm6Gwsoyfbh4qhD4HTUwr3iAgA2hsqZrdcCbXwvDNArBKK3km",
  "key8": "22qf18SrkHZ8V4rW9e2y1V2LmqWZTT5jj4gC9PpeAcYQk3yAFEHFgukwMvD4o2eo9qRg17n5mY4PKfjig3B38dU7",
  "key9": "nn9dfvhoMqofh5CV9Qh1KRSSpPyMz19hhNwc1zx8SYMeXEVYxsDyn4r8YsLsVDSB4zxwj9NeX5U6mzHRMuXN5MD",
  "key10": "2eWpFdW1aeJSQYKBWg7a7jfGzpUmapVJyzF241HL6E2sDJGVBeUryatkDEJA2YzFpw62LYR75PnZA8qPsqiEwaip",
  "key11": "4DUXCV1cmsqqF2aSaP8Z69hmWGUuozzy9JmvX48zqFdZiKMfEVrUdyN2qL7LFQceqH5ENCk464DSNKVzfvBkegEy",
  "key12": "5EqoHwned5dfXRwuwSrxY7cfNB3BFTS8X8j3QpRgC3JwpgWyknyXRgYQ3PucSRyPWr8NgyuazxBMt6e4TaPrWn6j",
  "key13": "H5Nqizg1fhsC4DeSRg9Q6FBc6tcc2dwQpC1UbDsmBCcbNcrhwwdgQ7SEbabUBXYq3BZKugSEsnGhEbn6UEXfqno",
  "key14": "44Y2suvMF1cb5h3f7WL8QtsbAxr1EaeauikoscGBzrM9HnMAvvDPX6LSz7nGGXojFBPrh3n71H5nZBuCdgerGyXV",
  "key15": "5bdaScy5hK96KG5rhTHJpxb6XwWFzS2Su7fybgYMUA5NU9tiKCtqsvhmV99pDTtTJvn2Ard7oHzJh9kuHaz8x6Gd",
  "key16": "3DaeEn6u27Wq1dZ5SEHNCNRn9hVK1azr89NnBcmdKNjktiuxcQxJSe81QDngcDaBRcDgRUDJwmZMoUUEznxtqgKM",
  "key17": "53XrS251GU6wDJ8zQ9LGkHTdhcoenaCZkZfCzWmjuyheLTdVaWeQ32r2oUxKGUenEK1sR5QA4jgcjK9qRt9SCn8B",
  "key18": "42eVBjFcR8uDeESH5ffu8Bcgs7rKomRHL2V68TvnDHPdQh7diM5M4s8CBxSoL7La3kMaBXtLGekcu7xRSMZQyYs6",
  "key19": "5TiJbxPmQfuTjN8Ris17C3JF9DrXK59QR3twgxTmQju8vTaYHd1gPgjkYUqFMB57gAep75xdWugwZrprcussJL4q",
  "key20": "2namznmjmYXHcZ3Hgud21W5WpCRAfqAjSDkYy1Gvh7s5eg95Z3QGHo17ALr9JBXLjPnByjp54PZ552uvprrkRbRw",
  "key21": "2cyroGR5bUZKXTLLpmM5FpSoVUkE9aReHU9L1dWM89EjNWGKzEXXMxLDC82ZLVCjjpLPqaGbPUnEh7YeYeGQdj4J",
  "key22": "4chHVrJQ4kZiuezD1Y6aanpq46uL6SWbrzKMEfiAWJ5R5Fzn3sGWxJjjyERGvExQEr28YBqBd5Ag3ABbAB4mmSM2",
  "key23": "3NLamtKZjPTeCCLMHnDUqxNKsR9St6zLh9DApwn2KXnUEEaFWR2d1HNqd7b5RJFPLDPP6949XVxCDo4xw5M4MJ4Y",
  "key24": "2EqKLY8fLXGitLWpvM42eaHGEVCXTnzQ3ESBS4KREWfL5hYQw6Az4tJjEaKDaExipKeSyKcae1orLAbKCHdM3Vqe",
  "key25": "2iVNrc3ukBpfX1ZyGPxbQUx1EKraV7Wu5voFdgrVm98cEWUKAx93RrJBd1tT5U4WTPiVDs4rnitWVbeszCDLwvWe",
  "key26": "59cdtGXvLXEVHE7u1YihSV6gLJtnaUQ8mPyjbVyj9e3jj5fs7FSjt7pK3yC9M6JuQiMmhqokPbpca3eWvNsA7aFi",
  "key27": "RGkkebDApGCdrDtUKrBRnriJ4ySJbrBC1L13UFip9PXsZbgrY9v21CZPwgTsMTJmqAnP3Drde84o7VmU9VLPdPK",
  "key28": "895RGSCSjMWm5TicRx8FCpB1DaHiA8xQVhhwEwTqpwg2DcW1ZoWjL4C86PgEeffjND5SNDtxV7zZhVfy97YpeWd",
  "key29": "4nyro5XjmQyka6u3Und4MeVaqr8MAkLrKf67ZYooNLbSYhRvGU2FgmAW7JoyLQxWavjQdnuQ8aDB42HoJyd6k1Ln",
  "key30": "2Apd1tMeZ4niH23B5rboiJn7CFXAKXQrxqQeqfWaMCkRjBtJbTizsJF6JCXWABJdAWAwwX9ymF9hD51RHgKkQBui",
  "key31": "4htnrkoJZxKAr35xDV5mWbNBgyoUmzodDgXuetn6EfkPRJumAM1PdEFHgfYLkUVHrZCRhKSMnaK3jrusBfroVqvZ",
  "key32": "2VkfBjQREFDbxfckX5vvaLSzxVDDynXVknMENcJ8MK7ssbA1sqs6sRd3zeF2fxdfJHYy5nxJL2A2X1oF5kZhPpge",
  "key33": "dRViCUuJvGPgsaA3HFRfkgvYV27iFxYxto9finAghNkor2meLmXApVhaFAGs4qHkPG5K3xr4jJirywYf42KUYi4",
  "key34": "5sSyg5VSQwRxVQkTrypQafmkAqdegTAhTUFg6pN5tuwx9MU7eEYuAdAb1QXbBaR5V8BYqPzzhXPQGKhQkPGQULkA",
  "key35": "246oxmqtzFP4xPWXEtPWPSZefVXYzJ525rseNfuFG12U5rWLRaQ7BLc2fdnxnX44eomvsE2cwPNeBsZg2qd1uVeJ",
  "key36": "4ecpV7Bos3Roe5MrWru4BJuUkDRfYdv7RYnpi7yDTWkswVF77jUdbZHFG4XpGu691ASx82n45et96Hfiv472rdv7",
  "key37": "oyH6z9e1jo6fHXxbkFx5jkAh5HiMcVxoaVVWLVk7Jz27PFagP9fAoMa5hXv9XRJfCXynJFoPzJ7H7NDqRrzzZD2",
  "key38": "2nSxKDZLXnYDUj5oHHvRymGRujknqBRQVnajhYCNf6jURrmsR1bi8LK5wa8q34sDTzJu1ezuFUw8qVEi3VnfNM7p",
  "key39": "2AjGyTAFsKLpNLccf4BVFrVQjgMwUF4BcBXNpC4zC2fYCqUEr9vRuPjReKx4q4a4o4m3byDwJbHrqidd4Dstw8e8",
  "key40": "2RCwASK3xxNu7jAuHdUeTXzz3z7e5jvLqQYmH67iBz1BCoAHyP1wMniLaV5hg61dcFaBnn9rfdDdHEYHP8YMBS2A",
  "key41": "4EVTLWndp51uHaRx2DWR1Mx7sBMQNtShSLjUB3gnUACNCWXnGTXoCamayd3JiUi2rCoyBJd1DwFmMrjLWo1Y1UF8"
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
