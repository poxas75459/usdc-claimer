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
    "3bHJZcyvB5v3d4hYENJ37TrJEXSKJPp77xpRjQ2PVztxvhepmpxQWfqXjJREnAjzwh1faPNqdZ89TLgkxehCH4Vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qpughU1CsVTfJEC6XwDMxzec44bMpgbe6Z4nwb6YLYgcnzsGJBRewwWX3pxjxzp6L9rjucugL7gfHRPxZWjbCLc",
  "key1": "zY988rtR9FeYwb2vHqhLJqQ4QBGcTEL7XDP4QFPkRbCcL3uqYMcsovJuS4fDqp6Sc97Escekr1chFuVBmSZPLsR",
  "key2": "5JfsbDyDQYSBunNPrRHwQPtkgY5cm5zyMXNnrb6kwvYgt3gtdWCpEFmvh2iURk1TwrgnPKe2tTh2TNfU8UcESTK2",
  "key3": "3eMt29Hn9GizkLraJ5bku19kam4KEAvBSsGopLcSCT5bdJdkV5ERouXrpHMo6QDdLFUfuHWkvTnUAspxcXuM1tuR",
  "key4": "XEDTMg7xfqqtUiV6DZWMvTmpsVSwz7Y7QzvwquCNGZNnzni3LrFbjrKVM5o3iPtJh3ZY8gDLE7LH2DxRhoxhEd6",
  "key5": "4wYCpbEh1CYU9r3frg9gorBKGGoBP4s4hf3L86vSSKis5mVsJS6ZWi531XQUdZzgsuP7i4Ru4KAfyV9Yx5Wzobky",
  "key6": "3reSGhhEDApD6eBEKZR3wcTTvRBq1WcA8Prcz2SzBMfsjePgNe16ZWew4TLL75LqrTvEqF4MWBjg1wTggnQD2Ujm",
  "key7": "3waxpAzmy85wY879qAbZCS1NDbJqEdsSVZBpV7wYnHKoyM8qcVUUEkzDn45aC9V9gP1JcHT8zUNWA5aBLbcYPKSC",
  "key8": "2a4BBdhaRyxmhDsmFKFDqoE9PqChak946zm6nsvcFrPxs33hEecJYpbNAXhxDJdhpi47ZSRmrdx6VB5RaZzoHbKn",
  "key9": "56Aozo1Axsu2JsxtdPSVWV8zyDp3oGqYmcDquV6cQ22Kh8vJxdwmzSBYVYmsFUTvRuckb9Bj5tojZ2E227zpArtG",
  "key10": "3NgnKXm6UGPjU8MXAVJyZNR6G6gwzfURVDagZ68bBpodxDGzZNBwVEmrt3uyLLMTUnd94rfxubE4jDJB1ZWRsGez",
  "key11": "2uXJv3GYxvWToEt3FtGz2FVSs6WzkVJryzgfKXSz4VmJSGTzavVkcEq8EAHw7ShAdSGrJj9EfC7fx4GzBvdzp1Gn",
  "key12": "RF22a1b3HZEUwLFhVnLSreUXDzm7myE4MiN7gi9wNTzLjmcRKpHBQ6FhWfdkZWz1GNvNotdabraGroxbkcPxYef",
  "key13": "62pGrAxF2bmyf6SXXVPdcUJ1hYcWLWrXjbhzSdHd1RfjUk9bLpLtqHB3AGgXotU31KfuGoBg3JsgH8ZbFbvt88aY",
  "key14": "5xrbtbdBGedJRopFoN5Mp4sXGrQVm2BXbVsdho59Qzjho871Atnoncz3McvMYS3wcReXHCsoqZqTj8wgKw7CuKFz",
  "key15": "3uYvscibhV9g7rhxpZgcqD5CBT9JBMubp8K4wok4A1yFLrhkbYD3U8RKeN8q9YdAVCn4o7NWc5tFmLqVuGJXqdbU",
  "key16": "2R5XzkwNQYEaZ6mXZkJKqoeRw14oMCEHjSXDjHhFHuQqPJpa51pEcowwkjxumJkutBYtdAzPygH26a5DMWt8TZMG",
  "key17": "4rBaUP8BXqJQ7NjYuzoYTQryyD4XiT8VDHJKLwz3HLvvzac4wZJ28JaNV4BoB6FcSspGMQQ3vgcaPJKsupUZa3en",
  "key18": "2NiWYrETW1mBRUhxsJX1FqFmmdQisdhsyHWgCTVioH3e1orCvMp4fUNfYSvA8KUL187bz27fvG2uGcuuzz4jAL87",
  "key19": "2kmgrcWa4RMN8aW5ZKiiZsw435sXVvwYnXFDYnbWkxskraomxfCegQeGMqgHNPRpgmFxUuHNp2LJerXZnuudW9UE",
  "key20": "5w6jfJ8ELmzmHCLEYN3fgAkGZX51B6NLMnSAF97ykForRSj1cYR1GyKpwPS3Qabx1NMpFtCBuGNdaK4iiYvkG5vD",
  "key21": "2UXgCXjWro7Ta3kbaRJYgAWRX72mdDGicZTFABsb739LB8VuuzfcoDNsZWej3VjE9QyFJzZtJvstjBVPxZC7vutZ",
  "key22": "3q2k5d2MVQfsNCU3issDhhoAkHHVhh15jgKymx5xDnEgw3JwmyQSKZjEBUuSwEKhrA7htHay27WNwtthiusPdhF8",
  "key23": "3bCRu8hEZRs1BDEk1UVCEp1d8HVDFEUsfDZsqSceZeBauxzWXk9sng5S1n9s7mzELRiNp5ijEj3vQNocKZ2zT4Jy",
  "key24": "2EprDrDeJxLeRfuJiK54bZAeDcjamwoAUQDS4oGgeynKLWeqWwPnAUceUoVRiDM93Ux9GB9oZpcvbXvozebbcatg",
  "key25": "5ZGVn8rczsrn9vDA6y2hW5cEGNSrG2cQxfQesgrPxG93x2BMk73to8hU7mJAfXS1mZ3Vfh2HGZmZMjySZRt3mUHE",
  "key26": "1eU9sc9MWhhxAALTFsxeh8fr6JwYbTBSCRr6mm53M9DsfbdRVAScBMCjNDnst7UBamj5bTJUsxYtMfx5GCRBZXG",
  "key27": "4996bpB6A1CWWBgWww2Bd5AqfPvWvBhmRJTqetisXVLYjMwyEXR8ycAbKkeyavNaZZwPNisc5m47mNo18S1WNKxC"
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
