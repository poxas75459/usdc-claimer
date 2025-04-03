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
    "66D46moPRqizABfiKJNjE2t2YYsNGJFhZdWJRX2qXnCTBJ5rhsMn7ndPtc9Vrf38gV2tUmY85hKKu4TwJd24Mqf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aEr2Xy67WD6ohpLkv1YqektHSbbTbauf5av5cgmBVK9u9o23oEhYb4zxEH7XBq5ahGH7spx1RY27bwjYxkxTKY7",
  "key1": "29MgPfxbDq1oZvmUunYT5fMqf3R3q4AQAGnBPJUKXFs5SH4MxRUVLYDPq8XUvizLUyQBq5JUvoKWUfu2WiNoetdz",
  "key2": "rYVSgfuLhZvkSGzHBLTqWux1Cy4xLDpfAkj8z7F9tmSbuF2xnH5SbGjXBwkdiwccaMi7Gj1VrJuXPQ56T9rSwAU",
  "key3": "EA64wyoi76gqGd5sdadW2RTPJBYboZZWU1z2ibLUTZ7LHfAkkm6APvLUvdqQ5BNiUBEwoLdRxGA8CxrvoQzd8cd",
  "key4": "55GiyBY73TfyRvPcgLHY4NCLZGxyR1mhy5LfqF2u9kXXVvUaYE11MsYxgRrMocLfD54v4k8WpuFe862KukbszAa6",
  "key5": "5zG6rv73Ae5RLr8yPpcxQT1kyJRsSurxMsQWFLskFGRmDnTZRevoF5exgDL6aEtXYUyQC23YQ1ukRfUVMdC5q81j",
  "key6": "3VKfkeRPWhEx91sV6FtRQaCQ18FTwcbpx3SCK1DNZWv763oUDkxvfWxnXbJAejrgEVEssb8MwxgLzAjQUnsXYhTW",
  "key7": "4wnLFNph1wxbE29Q4qTCuwoDfbzHQy26habUnp6qByXPeXTZb2JTxdNoFT4QecN3fnPdAGA8GN7gNxE18niTBfJH",
  "key8": "3nDskTmMJ2ryz8qBry6kenEph6jn9WfZ1FUDeq8aMyWRy9X7XfXN3D4tnzHCN7BZnE5JhdeWjnNKYD6PbU4yTP3j",
  "key9": "43TU7t9rrcSeFRJLreuGq1Qz7ye79Q9P6VyrGqAwEZ2RLKboR5q5UcgzwFnhmEf9nJkzP99eNeki7z6DBWnwwEJA",
  "key10": "3oMqc1wM3mF2ZsLEEtJA7y9njEiXxGfqFhxM1x9YL7wxx4JXgbezJgeCsd2621vuqg31oMKk6vLweMmKiA85g9qY",
  "key11": "izCJjzKpXEHymj3Eo4Zu6eyksx2BzXwEFvibvB31Ch3T4nSmBMnGKkbwKWXPRhg7yLfDqFw9JTJSPPb2SPwtxET",
  "key12": "kigPT5R7aGJXagzc5C3mKqGZmErt9u3ZaHZ6tXceSxpiRaj6VACMczFB9N2FpBiAPTK9GHmeA81DKyQh5HNNRAp",
  "key13": "3TmupgpB9xPNubqwn1VHYCK3grdyHT2QBiQtvMvLBa36wTuLtjk92wPGqjtFsoARusWdj4qojwWvTWCzHAcgtavT",
  "key14": "5Z7C1HAzyFbLEY8Jm3FNNn1zUU46VHx8ZsREprdwKoxQCxVriMHMvfAvuAQhaTQz23jXuDK2jT6xkknTjYY7Fkfk",
  "key15": "5fWiM1wueE2PztCc2dW69kKxZ4jNoxekF2KW1btRy9dz7ZfTSW9JDCTaCn3XS83q94f3fYFFDrVQ5Jm64L4Rpanm",
  "key16": "3ZbLQhPUcg5iAeBwtjdC4upEGy5ytmwWRjWSgRCxa9gewF68u583DmNqTyKR9eXz9fk1peoEafdmZ59zYWNtknWB",
  "key17": "5FeAX85xPYCfgaJtsv7pdaQbJQBfjfscFYa4F1ukEtQwcpBoLN14trRodNutn9iex1VXjS6s9uxM6N3stXj2fDE6",
  "key18": "Z8ftdX8WehZMrzc1Qysk4wfMzJbt6bFMrq3zchEdq7YCcQXM3jdkAmk4Wji2JWoUfwSthtoHXMCLZzbRVg1XfZ5",
  "key19": "m4MwDtYkfU4FN5ePoBUKTYoPWuJoo6vZxTrHk56YUvMFu92TKyFjgtauaL9QZD8ktC1kLyAhtcXTzi6UcTgtHxk",
  "key20": "AU4xWxCBriwxhA3warvygCy7r2Gt525vgtRKtXdWJvkLq2SttGCr9rjUmWiLYrDZKeiz362pKKQgVPF6eEKeZ8h",
  "key21": "3ez8S8V2sGC26sHhmjN5tfL87YwYhG8dsW3QpnT1umX6AZZc5fNVvngxSyKvPng33NYHMbF2HAJdf5d5U72yVs24",
  "key22": "5kESh6SztX13PvcYYvM6qr1vpVhGhmGDa5j99gUBropX4GaPxrobfWMQyt32QT6cmMN4koAENMwL43mgDDE7yfhd",
  "key23": "5RdYAz6B1PfYwkExmqX21a9c6hj9BDvpF39kyx9pXR3ZWbQYxVFsqozj6LVXbRyVJpuqz1HVmQ1QzSc2Dv1RQzUW",
  "key24": "2cPp4Nnt5GBu2zU6a65gRsPMy1RhYeGgMbcBLfrdZfRb7wePVbsCk4At886kC8uvxwQ6Jobh9BHZwGKPNPbvm7nb",
  "key25": "2N1Rhy46A7ZNMX7CRiouBR9DYsAerDr4YZDToTLa2PfMDGWtpShujukz13M4FrqYmzmt8BBXiHUfmFTqhGN7RCmC",
  "key26": "3rmEB4UFV7VufMg77Qt3ZGZeJieXvFAbVDWps3X92JtP7aLRwLNDDuYuvW8mHAREsns9WbTTbpJWg49czyRn7Zmy",
  "key27": "2k2U3G5ZDmNCchMjMrReiE5f2xbd82sWsfLRdSbmiLt8V8qtNptGgmaL8s32FVKe6teGTH538woh5PN88k9ThSTP",
  "key28": "4XWyJDyKiAJJGom6PgVWWwEpqkTVFGzdfg9zAJqdwWndBu4pwEZn73BWrffCi5KebErWyfCoAEM3hxq5SqSe3JBV",
  "key29": "rFDtFN7pdCiJWgBq3NaTaMX7UvcbsFk5UhXYMGwnSM9eXs2a5SsnNHc2dgS7qRvcXNrcCtSPRTtd8Ub72AtTw4r",
  "key30": "5usMjC24zsgXakXApTGdUFBPJG9W36qh9CJzELaMiJc3S1a6Ao6bjgefYFG2Fc6eft7Xpb4FLVtEMSViYzPpwjHv",
  "key31": "2AjcemczGxovuZUjRxTTuk3XAWbYir6z1bebgqioM847f7mkCqunnu8SJcodcfCfapetXjnBzt6yb87VUazopKa9",
  "key32": "2U4FnJvvHjrD1pgJvKjh4U68VgqN6QBseiHzWRWTouhM8mMFWeRhXwgDW25XV2bwnbt9CqXMCD4p7KFesnbi4Zdw",
  "key33": "3redvfXmZtvVfQ5JNriakj5g1egHAxqWsDorQcEfFmSipdErzbVqRrAQdnvEQq8eCZjdxxAhtrEsRmiKeaEawsJr",
  "key34": "37TKM9emYJsfWrMHgHKx4ai1qScvmNW55pY5k1tbUL5sBDimUBKZmV7LMeNwPSihnjHXAi2G5GfQSm1xHEpruaB5"
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
