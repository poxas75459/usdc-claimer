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
    "i3tzDGfTpiagCpoV6Ps6DnbtdChqQhrfrkRtTAYxLSSxmTEbRcSqEhe3VRkfh3r6YMYfapbRPzHWQP1bRKnSnYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sz6TZAv97Xf5VBgtn3vpqKeXoNGVQHcS7wBAy4v25DF1fvkzmcjuK3RKiAM3mxKTKBffD3qt7tTfsCDidSqQz9o",
  "key1": "2NV4Z8Wrwk9XSF2yPguy2McURvimSYgEURVwN8vREDG7vUomCC2ZyWDtzizBUUVebWEyrPgAQE4xzvy4GXUXxfiA",
  "key2": "3NPyMxWCSSdrHmdGnqRdd2aJJWpG7PFuxx5C4DHHNzy1wtok87n1er8oQ7iqQYYuVPmMZyN1nB9eGXUVZ6Qqbk6W",
  "key3": "5mtN5T4BNsXdHr1zgdDSbNMbA29KMGJayoTG5gfGs6sDQwc7acHuXv3PmVtXgkgjg31fdHvRe1RvtCmxSsNW9rBJ",
  "key4": "5c41WvQjRBC3GhcbHBsKNnBxTQkrvRVas8uu2RpicQy1ESsebVcwdqokdxLiadKdiAWK6YobbzEN2HD2hKBeYoNc",
  "key5": "3nQrBZ4hTtmJrLWi9p4AqHUWnMkbRrpgfzjBfhCCcPRgP9n5RZSj6JvhStSez5U3V7qVDzhzo6MSZoCSa4imshYG",
  "key6": "35HrmynMjDpwrXWqXYpcqVCLgpp5gKFkcqZY8VanTNHJaLC8MDStyRwTRUm1i7diEBDzmJeHeZmUwXY4PzyBGW6N",
  "key7": "3XZEAWzdroEFJT3QNpxxbGjAZXNdYcehHgRGFeHcCmXn7UXDn7k4cf2ynbjBSQEp2r4g7htpWCcAhBBbB7ssXiaX",
  "key8": "2gAYENxza4AcWrrNkzURLph8TprcDFq1qoqUxHJ4jgVgLsdoUxvBrXmWBpfeoieGUxk4Bn2RjYLyKMmYfQA37tiY",
  "key9": "2vzKpXMF3WYBhJ81hPAjxhCjNpsjJfteiQj2gCvFrrJSAfQWHvu9iETVMqZ7vffcQbD5gGZeZLFo5TxsQcLHTkgt",
  "key10": "S1nkxyVsdJ3vVm8N3D1E2tS8GencT4YExLY2LFgBWQwUaVRbWapmczPUsqS3XwREKm3jn8ZDMRFPe67bCe6xVRv",
  "key11": "62MusNAzgihYu7UD6nzZntiEnYw43FCRfkWcsu2Rj3aUnu9sQkpnSzhex9WfPYGR986tR75kWb3pRGxQ4n8dFQsc",
  "key12": "5YDfEYS2nxY43rSVp7XLSmav7Bnmy47PRLaXQtyaSCnnhAzeCBq1fTXdphwDLmSpd4JkaGddkBSAbkYYKqaovrMr",
  "key13": "5eErBZDGhnDqG7T7FcgotY7DfWfvgs1shqpmGBznFmp5EBFDaLX7ogo9U5S35W2B2qv2bMLrLQ6xsxj8aQtgbhqe",
  "key14": "J74QgfEX9zjmFznmSgyx6H6Z4KXnoWUQ5o7tBtyawPdNyFsD5yVREH3MeD53PsRytJA4hd8Pyrt9apVxL5pP5Dg",
  "key15": "4S48k21gcHMaFn42fFUY2EqH2a7Ad8cSNQetHcuJjJgrozFnjfntKbqWw37fsjQFzmsja2miftU5eEtnNYgKguaX",
  "key16": "221FZtMBbSzd8rq7fFGFQrBoF8sE3BPiuY9bvwc5jGfXm63kgqCReFd7xGiAJ9CPd5AzUKYwdSKQRsFmrnnmWoYE",
  "key17": "5wmEUy9RUrbXc8r3WVKEQyUawvy98fpRJ8Aj7z2ebpnGPyN82zfzowKSGYU9unEnZLxHzXR1AujT6RfHLYY7cRBb",
  "key18": "4uGQo8Xa4Rxb1mGkaRQrcUnxJjeWr2Z2Qdfno7uxfzTtXBXYnoLL6wQSyRV6CV3mnqnFuUx5cWi5jHtA7xMUR6zY",
  "key19": "3C9FfAQnxPDkHd8UQU8Vf41KNJPb7NuWtJy5yNeu9TQsYWKJ5JwphEk4rmaxztEjfRrHYg94WCP8tDdhepKVUcFN",
  "key20": "3jVANEB4WVbAdQ7cb9Fy2pHRZrH9oCyeazTF78DLNYBCxKYVfE9LWWoZnWe7hVzWBjeS4XsibRpdyvQEs47nG57o",
  "key21": "MptqsRnsMG4nCcH7fvMFSzr9w3StN5bzMFAQqtqhAEzzToYabTu61NPMvVUDpgvceVbPVYwVCPSZpWvPLi2cy2U",
  "key22": "3PmkQsxPRGqyXX9FhXmFSdNFwLgXrFtpdLRrMoBRf7sSJfimoyg77CdEXxjz2s9oXn4TabM9t1rxzujNJ6cCSmfh",
  "key23": "2QNMAALaJVxSiuecnukwsppSCMWyMejcvrCJevEymNKBhzv7YwLu7HKT9GmoGofh98knX4UmjKJn8TDboi4AV6WK",
  "key24": "4oppoU1SzgV2GJLRG54Hu8CGdTFpxCzvNLqptqrP98Hy42b2mfdrz8QfmvQAaukovdM6EG5voEiptdy8LSUtu3XY",
  "key25": "CFaS9o7SUvmY5QxeiE1HFGE8Js52Wb8eMETqAXqWitwwtcKJMHFsVTzFEg4zEzKBwCdqffCxVf7EhZhcjQSvDyt",
  "key26": "9xkQ8JM6KhKDuvgwTzPS4aoNmEPmenxp2uz16kHtWFcppz74ynEsH979kzG4rZwoUqBToi7nJ4idkhbbk3X2vWV",
  "key27": "25tPXmkKTfXaLEBMEZnnGMhja5ZikqqeRVfubX8RvDw14XgLaJ1AmbuxphXoB3cm6XNrygQDCoMvpUip7Tc7AwBh",
  "key28": "eFKAogxMz7mpwBSn1mqENQ8jMgjHSQM1WESdbUa46UJ8VottjGr1UcWos86Q5CYQrTLWfmenjVo8YXtRiBnhQdu",
  "key29": "HJQ9tdVra8ChBZ3SZ1cZ1vHh1gHU9pqKT9XtqpdRXhuurd5h1uaUFa359xnciAN9czAigZdgyrHsQAZGAh1SSKn",
  "key30": "5dNwnQD3yxALtXh5FMggZF2dR1P3xUySX5ey4q813MqGoxiTspZjRU6fxiRsVjBWZNYqe9KhgoxSyj46pcxwxXCj",
  "key31": "CLmmQ285CxHu8tTWEtHv9xvxruMcKbaHqQvLsni1MwMJo2wHDTuXu7T72Ja7DUiVCDpX5uhsp6jgRMHV5GfoGna",
  "key32": "2FLkSHdLXoxqQ4hH1ZjMZ3tq2r1DWfiMDvXcGH2ooLzhfJhSbL1W4jjpQ1tXMSjj9qh5uk21sN6xSbNA48azbmsv",
  "key33": "46WiduXRdxYtXKmiFiZin9dwneGzdSCMvmxVEMch2zao1q7WTxMPBhByKt9mAXMNap9oLuBF4YCHQsZ1HsJXMpT",
  "key34": "3jBiJ4f7Qs6emufBuCZj3gWA29XFqC9aCZirTsT5peevYn74gpaoCUb59kfc6uTN7TXNsYQQj3gzvpxvwGbRX7Xk",
  "key35": "3aj6aiCYJshBGWRo1BcGPjJH3GPgAkF46J9JWqSuBqBUkRApVsAECkEbVTEcPEdxGCfBT8gD93fgZBWrk4KqzSjA",
  "key36": "28q2yWhgpPPDFqaZ2H6PTjmgrbhq7eTBsD3yTCJpNQaPjUerKAx4y7kaekZQxExQNi6iJN9dfxK4v3uJ66o7EqRK",
  "key37": "216C4qjnCNpPfN4NiXPNE72M8ecd66BUAfnp3wtZVfUJYM2kUqne19LAcrZsuPrqYAf6mFZbYnNy3PHkLyMKFhTn",
  "key38": "rLxis31BXiHzGc6gWf2xigA1VDP5GBJomDFj9dPgqgq3EAKBS12uKT5fowRaGUn5tfXa3p8gbeq3DzG8xVih5jj",
  "key39": "5f5aYJQnzQ2x2gc67PdPa9rb59cWiqDbV9SbwwhVsm8Ei9a571TXuqMf3Lwrm8kr5DDp4vu8NUFdqc6RQMMJa2wm",
  "key40": "3i4B9BxHBi1eabaTSz5YgGKtM46FRxeAnXRoC1LgAPB1dmN3d3NdEc66o5jfy9rfVrPa6MZAi1SVY3q94trpw5L3",
  "key41": "4bhZTamxk5o365ebu7cbGFzmDkSZff25f87j84yZFTfkftYxTH1G2jgJKQFRyS68bYhDH4KFasQKvgKg2F3ZTP2K",
  "key42": "3PSXUQKJ3D3yoZwuH32zZvTxVjDYyH1RwMY5X2Mc2EVL2eL4gY59eJp9ssx8VzXhV5B5hANukgjP8ihE8e84vk3c",
  "key43": "5YgSFT5vDrHjezaw2g5csPbogDjwSYnYtNbSDb195xZ4yL5JyNGWdDfkY9Da9SmosGk2JWrC4LaVCagWkGoZUQkg",
  "key44": "qEsTT51dufrzczcqsiQ6skf6ATws1uSiN6ExqkWpHmsE5AdhkAxektMSw6itBxGzTyEs4KLmExrSa3Z4xAx4DZL"
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
