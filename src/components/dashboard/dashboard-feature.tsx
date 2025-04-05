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
    "2vZjKutxRGYS5gAo87h5ScEfAbgHwQh4Aoa6gMCNeefxPkHySW83MWa3ZdC2iNPxSXgp8vu6bgWRif3zFjvPNVsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ue8CMGnRXz5T8T85Cdk2mW1R1QsthfLNb1BEbF5e6qazGBAhEyuSp7XooGHDmrW39w8ioqdpxeuzq5sSsCSHvwq",
  "key1": "52PoFxcCCdLH149mRDrPZvHFWvMg2ATakKXyR5xC2gZdirnRigLHidPRf5xi7wuJuLvQuzEcf3dW8QPnRkWyMVjA",
  "key2": "4UuxHM3CEDbSJpHXvseua1kdZJ9QtopD8YpmgVdngtrgH9A9f5oc2LbRwaBpT3FGSN6ywjArW8tXx69Qvx8Z5wdP",
  "key3": "67Mfo9Zqw4kX34dkb3Nu3bQU7A5DQ5T5DuxXj7Sg2NoQAWi3f5vMEiMYJzpepiAcpWJC4eLxrctWDe5rVmYjx2SM",
  "key4": "g4oT3iH3xho7eVGREmss3nQ5XHHRU8vGCWhrMAdBXnu4RV8HmrW9p8EQMAxeGYCRcUvhZaSjPGBfyJL5XzZuQCk",
  "key5": "2tYjWpFun1kAHHPvn9L7gDnH9UJ1SrPxnptn7NdPoWMjjue5mg6iW6gxWE2uik5nf94UDKqE3gFVqY9UKHYXSBsS",
  "key6": "5MxevuKJ1CvsUbXHFnBSTAoi6vXRFEEw8yucVQh2dJ1smYk5kgNuepenuRQbvxPrDaFDYKwXTHguMSXDdiBZ6YBx",
  "key7": "4R5nABRngAACX2RnWGZ5fXbFab8AgJBnpxqBAydmZH4JePEq7KxpJnWGhAXtNHYbSFjDrFWceunKX2QE6Ssb4QS5",
  "key8": "5DrA8fgc85Aj6FiZxgRSSwdKpjLZoLgkXu9oRN9PfSUKzCFHVJfnDqT52NQrsEqkY2hdQZWQd5L5ryjAVegiziqJ",
  "key9": "5qz42bEbycqvMuNanU3FqH59TUj4EJdA8LtN82FgLWsmug7q9SVz4eaf6jaRPLXSZLBevLRdsRs4Pqk5feZgQmT6",
  "key10": "5dQrNrsN6FGRH2EVXkGYWQDm465L6Pm36FYTZP8J4frwypNaspWxLZfrJvevqRZbtzHKyd3KEcqUkGUSDCjnM28h",
  "key11": "2cVhCK5QiMmNT7yUbY9Uj9PU3s8YhcU23LmBuhG7aDNvUC1MiiU5mSDgJP5tc1sDkuht39p7wCxrB9TC8aVrAcnz",
  "key12": "4ho2qoKaq3D8iEdTmhpVQe26yUcMR9wFV9mEHC1LWAEVQMW6kxgt79NPm6uNGTmprfLBNAzmJmqgZ9RfD7o4VotX",
  "key13": "5KuJMwjfKFMjAJUabmhzc1Zc5C4ddHKnhCygJRWUzd3ftct74X1crtSPtbMXdrWBYX5EgDM9on7V9nPDngUJ837W",
  "key14": "2L3kfyfn4UsG5yi3Kpgojp8BqH397nrtocxzJs18jq2PESp3RZk83movjUffyhoroTwcsCYkLzuzRxQjYv4aWdS3",
  "key15": "5ZKjH5NNfjbSfTaWZnphSSDKo6ZH8Q97chRscGNDPnMPfM6yeBurjU4dkyMtsUpEYFGcbFYL9oKDJoWrzZqLZBTy",
  "key16": "si9cbZhMp4mpUfJ4SvNyJE9wPPcdMBqGpXMSGRYpHvWGBicgp25qCJJqjFcC2Dmt1VzvaCv31XGup5gAAL2zy98",
  "key17": "2hk6e3ziCzbMzPzE3DJcUo5WRpJxU7ZtHr5g66Lb6U3Q75cQuFnZE3if36wMbXVXrwVKyiePByRUoQkUhVfcFFbc",
  "key18": "61BXRvc7eKSDxaipdQQSka5hWBejbt4VCxjmXsNZFX643YyLPEqLE9XMJK3cwKXYENrtqaRTZ7DvS6b9TQVeuodg",
  "key19": "5MiMqDgosMUHZhr1ja7cNDG9c7W4nBWM7xHQGxD4NZek5H8S7Jk2cCMbXU17763BRqNvvFqXjbWQKhuZW3aLtrLk",
  "key20": "2KoY4FDYemHcwnexSdQDSv6wLmpD4JNZr47yRe3QgocnZVt8tSUybe5Jaa8uRWRKtGZgc6GWPfdGEefaSM53cbUs",
  "key21": "2Vbpg9SVSfz6HUbnachFqJN5H13tpvuNWST5ymv2kUjmG8ympY2cgfLs8HnSccuu65QnKnPXHAUEB2K7k131jFLv",
  "key22": "3qmeTwwrpBevt8wzaWr2HK9RP4PAbyDovuRAz5DrS1kEhNfbcQM42AUNPokiaqMUy7UR7F9PrYjJ9KymvfcPqj9j",
  "key23": "2Ds2KPU6VunjoDo74BJ31xvHfAHxTtEJDTK4JbNNY5HJMbECEexhbCKUj8WKKs1wBqKWBLjCg88xasPxfFbbGPxk",
  "key24": "Tnaru3YKJBu4fQ91TR4mizNRHtxYUvAj1PcBAidhz5bD2eJTM8qy1jp2fZmAcGdaB6kEfykQdYCpGgupFaHqTr1",
  "key25": "5X8x42LhgXXsssFDCMhNmyLPNGEpPE8aN8hgaFGsdR1qTaTSTgoJTfmtiMxeZ4r4kRnwRwi7JiFoY1cPhcRzWZ16",
  "key26": "4yAabJgyfKvkuDJeH5UQXuRSZXenvM2WH7DBGXzC6hSrLh3DAdYVKuyTzRBkH9ZEHp3PThjgkKB8LnK9xKYR5V2Y",
  "key27": "3uLwAaBm3c5sA6sKdqxkVx2UTfftk1pRTfgj3GRjPwxMP4iBcPYZKWi8saWTJ5qCrJ8w3UT5u95tMge3qM4Cd4oN",
  "key28": "5gMwS4ZX2takFCEnEbxrbM3WBcnju4t49AixBDDdqCfpJNRbF1QN6KoTMqwH2Jzvix5U1yD1NEWPfrzTqZB87ywb",
  "key29": "4Uri4wcuttwgXNfG159MdUUDooaPrpVRjdz5YLxaoWWeC2dUKaSRBZLuCDqPjfY9urT6uFUXKBghHTyvTCDYDyft",
  "key30": "2CJ6diPd3hA8tk5fmTDqsPsM2dvCT3xi743NLd8oeNV8ppxZxUez6TKBJ7jP1ahFFgqejkdxAzf5UVn1A2XgAZaU",
  "key31": "mw26JmA8wdaQuft9pi5TfM85gDeSQ9vmXXmZhxcxkViURc9b3dRN1qBFhc6ijEu1wf3bydNfvo2ynCJusxQ59wM",
  "key32": "3c18bPzcbaS9DJMSfqcDZ8hC7pugZPsTnSrDWXEA55JtUPbrz4quT7PuPKawnDsv1eBvhESuv7UfcaAriQixjZRG",
  "key33": "4fkFLWffhcuUkNJC1wadQLokRm5YXKXCPqqyzEZ8Bni9Rar9DvRiuh4Tr9sFV3UEhRECr77iTzrD2ctKDueek3jx",
  "key34": "4BBR57iEAy3hgy5aXq9RBmtGbmPx1XwaQ7oEB5eqvSCst9nE9MVdHxf3BgU8qWzH4YwrpWhC9Q1c6BywKEiDtTGm",
  "key35": "VxKbAQmiGnQ8pPiYpMJUp3Fi1iUsgXEQo1e5KGMtoGKCCf3z19B2kyo7r6whEEnMSNUH5v6uaw66DZ1yq95dS84",
  "key36": "3FNTRY27N5yrxqeahe4QLRtd9m4Ut59j8LWQic2jzFXXDjxpts9jMJ9LzgowsWUxDeDeVuM4oyeLWp3LwrgLYEdY",
  "key37": "rxHnHHmANVUk42V9v97tcoJb5mWA48AxWjig4gdYDnAFevqFw28YDTQkw1fAbHVST2zTq2v8qxCjRcTTPn2MRcX",
  "key38": "5tkhqSx2P4UbP4a7tVn5i8g4A6fKY6NEeaXA9TZSr8kwPZQWvzgN8QALQ95st7K9tiHGZpmCdKwEVFAqAZ6Z6gA9",
  "key39": "2mGu7gP5Per9yMjxMWZsjUUxWrmCeMKgA5fjkrhQudDd7FP6WfCzUy1cMJC5rvkZGdpbSzEcnH1fJTuRFiUss11k",
  "key40": "2K8dEB15ZkeGcAhpEYVMiYZKT2aPaTVNr6V4wPfZXRS42jxGsAVXNXe9Pvb1pSqRL8o8EcssHNpoM3DP47bXRnT",
  "key41": "3FMNTUBVFg89bLMxEBabWWX8XZropD2MvgPLP3EznyRkxrPMknzw49ZNiQfgQ3A3vsSAv8y6KNwZjCUUYrpW7Htb",
  "key42": "5WVE8rbqxbYMwJwxo7AES8ZJABG228HQ8eREawGYBPHQ4R8u6gy8AptjqtL16YK5P9EC8mJfeQgJGmL2Wiwj8msg",
  "key43": "3Jia1ZwhKU2WvwUHKNcMvePNd5VEfSnajHcMhx2K5NKjgrhAyJx19Kesggf75FHE9EK7akCv9ZQZFyjbzQFHDHEv",
  "key44": "3tCcA9M8znKQ766xuDFr23v4CRXrjg9rfDCzCeczdjJ932ueGEbYTTLv43aF2ZfGsmoNrvWhJQ3NbnwYA98sVUwV",
  "key45": "4dUyN8XS8JjLVfznhfyUTJgrgUFfUoq7nyk6j7dFGoZsvqTiCLQXQ1x7mS7U3NRpEV4ARYDEgQskBUT7yp9dVvzC",
  "key46": "2K9KZQMixYrK3NVeTMAj3JJznDrPWEg4PWGfUoFETW57wnPqQ3FxJ37CzKtpGZ61bUAXAfFg8pL72adpv6pgJ6av",
  "key47": "LwVsiTw8zyg55wKynaZ9Ki1KWrWDdUwkBJj2du4cdhTb5R9eys6yfURSMeDJSj6GMZaf8p9CvU33DiWpiQt8z8y",
  "key48": "4xsLdxaiAerjVUJXE5SiY5Zx47ZTJsqCyaWW5BBvBcnBLejq3416dWyy9Zo4Aqk1iuQAdfdaKsgq3vd9aSBzK6Rj"
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
