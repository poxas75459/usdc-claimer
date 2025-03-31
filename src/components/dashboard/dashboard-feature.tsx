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
    "51v5cbLDahajsvYc3oNzyxiT7AY9FNyytUSWyyuYVwPxTTJswxUzzxWU7S4XZNye7aTT2WdLYFLx6bRZhpnVTsQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RBPdwiKFe3Gw1D9wsp4anZKgmczPSeLU1vJwx8gBe5SxzJaJaPCuJVawGT3t25mNm4oLmhNB1T9fQqKVcNw2htV",
  "key1": "3pxHtKzhpTinikkSWtVz1FEkWLjcxHjfrsff6mjcaFurD9MA7cKBWNUfzwpk9vibCSkesyVmhxc5ki91iPUv448i",
  "key2": "57SdUVbTi4S3p8Kij2ofYEo6tPRQhUb49LS8FN8q1Rv5ydUGpWDq5ccNuD723ecQFp1dBtDYfr5EHvxm4yYQCFrt",
  "key3": "WkaYBSViHf3EuXfEv8L8jE9D7H6kcESGHTegRKcNwzYjJTupkYr2ado6FYohgPy43kja3iMAa2UwWwBAAjFUAAG",
  "key4": "2M9aTbFg9qZyM2JnxQUBCiN9XtRsibEcfXf5RnJQfupxRrGTnUCnP9DQCL8iTTTLEdeAQjWStRQAwy7zCXmdNsCL",
  "key5": "4mvVSS8fk7GAKhYDBFAAX7a2Ry428eCuKkKEB3qNmCeq44LRVC83Hf61bA8sp7ZYdKMEpZU7qtc8F2hZYEp8ffg5",
  "key6": "4xQgCizfGEbqH9xAWeq9ZE4nWvW16RfXfBiFTZHBRGAkLxvEgoS7HLqcMFYVZsRtTbraLtE3hVoV1gi9mbWqMpFz",
  "key7": "45aDT7wgLVkgw4SSPG1PE3mdzF85QpErkSCDLVgb5iCStQzHbm3HCz9rprwyiXF5dGHwpo6kfFrfrhqpQZnGNdQD",
  "key8": "3SK9Zc8r4jvWkXqos1PCwvajJkHnibH18zsxJLcaRJMjKFUqrRMSjuV2uMFsKSTwD77R2QD81mMKfUExjv8ZoRj3",
  "key9": "3z26jhxtFdnoYktPvbds5Az1EHKPoqxBdeAVnjwgtJNrZWz7Lh6wmXx2XBMLdJkiL7vxLWRMp46KhaYDU79qJCiL",
  "key10": "24m3ZnCxQJVgog4zLWvJZ6m6cwXMQKGMRj2BFkxVbheS5MSkyYPtjzfenow2WWJ6Efnfnd3GYd1X1LCpvL9UzKhj",
  "key11": "4qqHxR7rYQ7CprbfYsjGo98HybHnZXne8fGUXTet8iQjb5BnDbjboi9BFpg5Wfx9NWh1XyFEN3QJc6MWHgYz9J9H",
  "key12": "NhceDSCxiqj4W2JW4zu3rRo6ACCK9qmBpXfvP4ujmTxdZKV9jYRAYc3qvx9huHKXEyLT4cEJYRM1P8x2aJvbWH2",
  "key13": "4JTExwxih2Udf9R2zFbmsZPc9F1WzLazNZQm5ygvs5R1xjzWNLC5T9euTnYvEvRKx3kDS3ziQmEvaRs6bw7ZUZ2x",
  "key14": "2nARruusQbwFoVEowQiQYuhJg9JfveB4X2aHMPkfVYhSaaDogqonWHUZ7PjQCFC9F5oTbcz6GmHFsPWwSp7n1BKm",
  "key15": "3DnT279WsVfM6hAS7tgQBbY7VugbW3MHNU8enUSE5YC1yUoWGNwtB9NtVXCuW4MMiSLW3CnarMAHGrbid8mwB2hE",
  "key16": "5MGaWCXiAQ1aZXf5ckZLjS6FRnwkDM4deCzKqv6cFcppctzAukxaqWRQVsB9ucddiTJnP4XxPnuYJgJJP44r7dj6",
  "key17": "2L7CU9UDxwWWkSt2m8gXC1JmguFuF8RoStWg2dBdBkg3Lu4JEqQhuQra2g3rcQpTHFBYfnQAN5f8wx44DzyhiPCA",
  "key18": "58VST4DgGXZBznwX9SXLDAtqCn2GG1x1Cjd576pccXVHVrmYbyVKNmNCuAeJvtdC6vwHZd4yHiu151FKSXkZ8Yc7",
  "key19": "4ZaB763oem18tryZ6eUpmc6SbHsv4WqmRj19WXcbkWRKfzuz5xqvWCgsZ2CyPmrf9kWveTrMg39qqbB5uwyzLsXh",
  "key20": "2ctVPz8ppwEKManCNKxgmGMSECZB3GJGkW7op5yLDJwsboAXke9MSeybJVVjG1h5VXxSMoMfnKRrcJ7hFwmcVpq8",
  "key21": "5otuPF3r2Ppa9TSSbQgyvJgCBwRDpsW2R4Thpa3AwaeFV1EbAK1YCwbLCnpKweaKZK8enw3RJeT1qj1acv7ERohm",
  "key22": "2QqLh885A4jZypAia7kj7b8hnS8ZvksQNrrMeYg73PbRcczE2aoeQrbyexAM45zFS7YHoYkV9YhBXgmPTZnU9Ddi",
  "key23": "2sXbkteYbpqbUooxcwH8MiUNEE3GCpdxJrGrvihhDbtukLGUwrBAq86aCCumUGFAjWYU1mVmfo4zwxhs5YKrLG4L",
  "key24": "5f5U2Mt2NyfqxHmxcS9UqSVDqfKkbv9GbaH1bDgFoe6RLnGdyd2x2tmUw2axpjYNNYqUUY8BUc86ex4WvsiXDf5g",
  "key25": "2hDEEUhsSJAbvjw2yRaT4qBBhqeSJ6psCWwbVcHMebJnWNp7K4Y59AJ6W4pSREMnU7sjXhZbcRaRA84hwVmcP7vk",
  "key26": "34X6Gie5bQyzYzvZhBk7Pe1SyDQRWCdyHCGTwR4vW8dU89jwBVTmE57j1GfgjQPEoyqXA8iFCxwQ6zGgBTEnktEW",
  "key27": "5WzVfeS7G5MrffaTRpxEabgCogZaUQKJFTpPUS8Squ1PjCMHqEA8YiH4sx2W95hPWUmrqLzZ6BaPLzGkkCjgPWVs",
  "key28": "2BWfkvmZ7dzVZjCHFNfpwkqAH5DwjzyLisQE2bvi19o7g8Jic7FoYdF2HPCnTZNyczzNr6HtSFGDnu9hcYvtN2R",
  "key29": "GVtTu7idYBquZa1w43EHf3ZSjQDUz7Z9tt5c2sT1fpdxokuGXHMQjm4JLCafXnGr6cMwfdP84c12WhBWpvSAnJK",
  "key30": "3X65RFx5enc2nRzSQQQsyLXsQ51QnxBKJ1rndEnrB6MKVQKhZHLQnQ8vnsWJhhnrqEfXw9GUNtTSaDJTsXzQzrq9",
  "key31": "32R4puxoMc76fDM28YRxcQ1hU39bNiCrP8nGcMiwuukwbXcZmhHV789shp9wXeu1iSPhh2pMcV3ZSEHZVwyAF6vM",
  "key32": "2wBPp87J9fUAbkQ4yTbcPDgpkr8tJQDj9EJEhhL3aNFR5z69wd2fbs27oDHWzZtCQoAHaSdS9UK8oeyDiLtfNxpn",
  "key33": "fumJyZFF9vE25QSEBovmDWVPj5Hjnw6Xt1W7iEpDaoVZ5DGiYcr7mZkajCvkJRXNBr5pGBJowwWfeBdNC3aiWT6",
  "key34": "5CFBeKtxMEcka5J3A852kqGGv2WsyuCPTcRBNBa3fvY9diBjgLPTEEMWPgkX2mnXcLM58X5gxoBsSu79BZw6EJwY",
  "key35": "PNnkSqP2B9epge2xVDnhnTXs8DEoD39LjNTtMhRGiYpM7uE8UYLjxdrX3ZETncyBhKYkmhtiPJuiEkp7wGQPa3t",
  "key36": "4iUJW2vRGqFNBsB8YkAPyKUEDR5vkkzuZH1naeuSUTiCt2VemJQGXtaneAYMbwUqTgMKLr6TugndwDAQRTMfhM9o",
  "key37": "4foQNwsw6jUfkZVoMzbwQm7iYYabgjcSAXx1Eog8xg5aht1VkQqZcV3U4E7Mn23X7f2mnCH6zjfHJ25jLHmH8Mfn",
  "key38": "4pn5EqoxzcxAXaTLZSj1x9YRTwbEDeYZHayiPtdfxhUnp2hBjaX4pXeerVnhZ9Y7WkBp1iE3KFSFy8i2um9xc2iu"
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
