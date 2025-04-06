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
    "4mCzZntzJmBTPCr6NrTSL97zaDksVm7RPhFW4BQcgPPrHy3nrMh3Wcm2bfhgCRtQKgueUXnwG9Zoftx32pHxCpv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XEtYHK1wbvQGnkfjQUxUo5vbJ6fuXBjbWTbEGGPqDaRkBXrJGgo1ZMzen8M7f4LNRJ7qKM3HpCGpeeMQJQ5HMev",
  "key1": "2YCp7y6CsVgnLFLtQAew3SdxVhq5oRBNY7i1EU8LELnFAQiXdftsxmQzL9N8hqauQEptMrweS8a2XMmGpaK5Cmxk",
  "key2": "3LEkQ8JiWDpjQsyUuonsdWCTHtSH1HuzabmgPzXMHXYSJwtsbXT73GLhvkqqZ7AM1wTK3qiBhvztJEbyd5T3bMCD",
  "key3": "2iootqa8Hh7tQQ1Pa3ierMP3iahimtwtY39Yrznm4ZrCgDE6ssjMPCfRr5eSv3tGa5SZ9e8LLKZsQqphcCstp1uw",
  "key4": "3Vc4GvTkkCC4VyxySga4NESv1rmtighJMpRDn9ytCLb4xRyUX2ztHDHuMAfVwdkwuzbhLH24S3sxxCxgU53Bi6jV",
  "key5": "GSjS7JsAeAbnoen73H46f8cnBqAeZCHhGpPXF94sdnPkpnQ5PQqRdidAkkxgSBZRDya4N2gN2CRQi4eTWWdKnoC",
  "key6": "66a33jrn5iF7fKeEyirybr7bRGGkMxJ8bq9Q4y6AjwKYCxLfgaSqkCBxx2TgsKtJozLLcTfaJuTDfZZPDKBJg6PH",
  "key7": "2RGrNW8SEPndzTLMbJ6ymui6rm3Dt77uaTJgpoq48ygRBaU8de4UhrWM3xG7nFPz21Y4ijKn5Dw3Te2vscUGaAaL",
  "key8": "XTAVCJvAeiyvy1b8oiSkkpgXUYXt713urJvf9QdAcZWgMyHeEU2GzUP6Wdf86utMLLKZn688WbRKnoCwoCz5i6M",
  "key9": "5LB6dsF6vCrk7pZgJVe2Xokx8XwaSjpDTXaapSXyzB4K2pXQbfVNuzYNmosTZm2sizGmVzoMHjpfjyccV3HoqNWY",
  "key10": "2rVhRREFcdRzK6d4pxZNar4kSiVnKGTwBKytXkZ19ExTPmAc2q1Eg1odychtLXqmaHyx6Nh8oU1JwYHTwwi7rR4k",
  "key11": "2B5hAvomgtDojGohWD9fQr39ethzL79owBJthWnheeMwuG7gZjnBJjwiSxiBkeyRBAuZSG3VYQ1yWHr5zzqj4wCU",
  "key12": "4bV88J6B9FCPnaJ9qbA11AibZTyueHRMzTPVD2xeLz1Fy1SAGQLAfBcG9JLxvhhMirDBSQYYX12Ca1PvFguUqJvW",
  "key13": "2qWRrYCb47pUs99NkJzxfjXxQYqk5M9GjUB7WMSjUPwPkudN4FAN5tu7ceiaEHH8865RP16SaSouMzwtkVGLxCre",
  "key14": "5HYKC9g5qFtuFsDBxPGibvbdry3e4j82qpqTzwUa6c2CmxTsRtrWUhcedtUqjecFhrJ7Ryu515s6xa9ZxsE9vavz",
  "key15": "4UsG8XokJbAGyWk7od3jVyHXfZL33DF1DdwdFKmruq8QkaQVbTrdk5aP9fgcXZ9KjqNMSwN6D1WEkJWsQQYbH2LD",
  "key16": "8G5JrxJmzdZ4j6MayokUqgG564eL59KYNyvK5rE6sQLAqfg6q5FxFco1djqdkGUPxeQF1dW8dZ6Qw75SkzvrYLP",
  "key17": "22pchjTT9vkM3E5wtcVDmavwBH5N2arDF6urasJGukCzMEiamu5XK4HGGYmTS8Kd6ivq6AMdCe1NyoFqrJxf4f7s",
  "key18": "2BEZsQ4NpkF3FQUgqWv9DrRt16zmbsu4P8UYVEPt5dNzpdBRQMnAd94TwPRPZecdLGXqNnRhPVyeN8XXZkSASSiq",
  "key19": "2tiTzdZ73dBBC9KZMpcwxrrfwGzDfguHHPRu4VUE7qB88xb3Dw4eQsDn57F2Vxz5djrbn6wtcGgAdTRVscCbfvt1",
  "key20": "5qB8Zkm6GEf7ky15Wp1EptPTvsiRChLFazvqogcSMdd86pK997ozP2FUKJMBoVFRuyKWKGJeyKL1AersDqvWmtcf",
  "key21": "56sT6141pmTxL5oqsc5xbzq7aKXMNxbiQZ7sNDYqe4qT2aWd617cTw6u6pJwbrmgJ8asUk7RmKJSyuxcEWmnv7oR",
  "key22": "3R9MdfbUBGgjn13RgMWLKXPL4cCszoYRwFALRkNShGgRX6oeKzRfHzGJnCNxa2CqkeEmS9aBwvDqTCcv1QxuFAtt",
  "key23": "4FpfLrqEYC5NgNXWg1aTdQo7tfuui37M4ncPTcqHGKkgMV3mjjL66AbyS9B5xgYMwb8y4z8xf8V9LyGkQVaGyggc",
  "key24": "5FhoQiRNbRc1UyyZ85JebC3BiCvQtakW4HjNFUt4wrGFGq44ei6uQRxtsNgkjUizuWQgdvDsyBCPb8hjopQQvwtR",
  "key25": "4TagCvM9hWXVNRu17Ci1ppAsJRzGFp6L4mXwFUQrUn5iSjDMeR36tD8mHEVPh8YMYNcpGHxWaRMrZD71qKnSL8xy",
  "key26": "129ufARcU4cWAU8a8seASnFrE8E3wKrpw8bXY4QoVvKJvxwattLQ2qyHwbP8nr1SDgNA8rGPGPuAxxfHzmazsuTp",
  "key27": "34jb9qYm5RmexvjZYksfJAit2b6LRTWAkJcSX8tLNjrKZzgXsiEC2NM4Y1N6HrnLyE79gPXTghRg1F5ECutLWwfs",
  "key28": "2antXByfzDPM7ZuudaJsuPmv9npHzzz7h3kFspGsoZpqHNd6mCawgovJstfQYypT5kwYLSBm83P9JUtXW7x1vchs",
  "key29": "4nGQ2j9YCYHgJhMw8RVN9k1iMqzeYftiqWUK9WzoeeBgMLMhKzbheR669rAgbHL4T2wE6hK4ss8Fu3PfZ9vED1NC",
  "key30": "3bRd7rRbq2C3tsSnJeKRB1e9GLs9rEZp4sXh3pKDyNQPNtJdMGm9tphd6euxdEHH5faYBV29R8RQNsWwXNakNsFJ",
  "key31": "26gZFeiMzDMhzBT5mjTMbPAxwu9jFJ4Lvu3Lfz9XUv4srVuovgvSbgusddFQasYx8JKNywCMwT3B3PbDnJJSbQ4W",
  "key32": "Ng9qK8WUvsq6HAUYamYo2MGjUnDHwKmStEkxLy5geR1ErzETuW4ozijxJkGqvYScBZfamG4HahY7Gdhah99GvEv",
  "key33": "5SWdxKiwGLW8go5bubY5KjuDpGANSXacBDjw3RxMAAmZu516LNqDHA17ascXYvJ8tmBTDdKm9amfCfa2DJeczkxs",
  "key34": "4qRrhUpajtU9kHfAhawDRkJPkXZLav63dEqHVwLpCkdig1iMaqNPKnkq4ZMHnrdR9afqkHiK4HUXEYxZUWNXktno",
  "key35": "3mPnCMp8S5yZ8C9KraVD6zSj8EyVctvjJErTugeAfvaz37KHJxmzebaQqSBzemYdzcS84qDRTu3PfKvD8rVSp3iZ",
  "key36": "35kyg6qe4STBPXziQGKpXqPPqphFM79CkPa1Mn4wXRiueYRZW2A7mQBUrcMNFoHvHkU3HtqKTR1QB5bYTdVtLNka",
  "key37": "2D2koTDEepyE1DJAN54AQnByZSDTqYWmhx7XMVsx7U1PrwfGZSqR5Rktf6c7pQNQYeWr4mx22hKJkZx3KT6QdYSN",
  "key38": "4cBhW8XJhSDi5HmEy5Jvj87yNbR5xVDVyu3io4f9dobCEWHyHbf3NTaKtMqkhSkXKgFjRH2t8yxuCLi7KRLzWaHC",
  "key39": "5ADswXtSXuv4Bo4T9dSQnpjXU1aieD92rPwp7f7szu3cF3rMsyFvUZBqQ4rkCNV13cQsTHAuxaQceQxXYTw87jbJ",
  "key40": "412QkhrxaTiiPD48AzRGmscyB3pQgHNbnemdJSCTBVN2mvTrJ4z7v3JTKvVE2o2UfAaAqCU1rw7HXsfamYmXAg6A",
  "key41": "29eugazBxwxf9S3wTpwZsHXUZsiCoNnfsoAfq7eeMZTXxVazPoD25DLB2DNVWcT4fczUskigYhFkq4t7heTLk5mm",
  "key42": "638ayrGt9LYxyVsYfYz4BXir2NTo2Rt12M1hWzwwMnqnL3jYKXGzzETtm2DLaTVXp3qYdsTUXFrBp9AQjkLzP7WS",
  "key43": "3FHBePTWRZYsm2U7RD7Hq31DGbUPZJgXgPx2TC8SpQ288MqDXQeS1pWa6iENiCL1jSRSKwVWRtPdTER5xZN7QyCP",
  "key44": "4UvmvHFCxVBGCXrb7iY4nroPH6RZ5gZbDfFbK17zaNtkbXxdBWbxa4kB4NgwSJ6fpnrZDFbPQvm4zSwTzxquW1C6",
  "key45": "5z8hChSbY67onCUHddQzZrFQfTu25XpzSgX6gM915ZnjSCrDSirAzzj7aTXihtyPVYaJVaZmfwLFL97c9UjusSXV",
  "key46": "5fsd4m7bJd2NL4Ngq1Z7hzef86io22ackXkC4oYPhWt3t6J8voxCviyVVLQ24FsogxdqpeXUzuMK4PuKXY2WBnb1",
  "key47": "jwZPAcNad8j1uQ1crPapRaBhi5T77xVC48eVbMfPqqXcBWAiZyFB4vA4ZXeGsqEXPrQK4LEnr7xMuMnSHZNhqXw",
  "key48": "563snPbfyUuzDTjWTDw9ZADppgogh7564jjms6uT2tDJbFZoMKxzTxiS1RjnzuDa3SxDCCGfNZYgZJrL8dR3fjDf",
  "key49": "4oAhuyLW6s1jMqTK4ABE9LPVkNyXNj9Pb6ErSdgw5LnHy97HFfo8vVwWqozjSWExTMKpFLfpMmYC2wZC2fBH63Sy"
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
