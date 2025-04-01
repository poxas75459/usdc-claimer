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
    "4LkpLhxipmya4CdpwntMsj3f8kuxX5Pqtn9J7YArtyWBmDFffCd4zZFuL4s58ZzH1cEHn4JpHNKmyKnrE6PHrs58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UecwqPELpbzQQH97UsbCTF2vHNmqDb7Y9nuAsZBR6X3F4Mx91efsbpva673qNsk5VHF2o8kDggFPmgZ8LdqwC5j",
  "key1": "4mQfsgsCzWQnJqXKrJMa6vQSZcS2yA1kbuhJ7tDjQ2C3mDhYuKnqBnkV2zkpN7erqXMEqGFo53UUTtmEiXUQpSmt",
  "key2": "5bZcY7ez4WHRh9cAtrrz8mkZCzpxtWyJqTaFMHKKpVh2BqJXpnXvaDsshxPt6h9H12BTuyXMG8RZPRQEu4uLcSM9",
  "key3": "2AjUzRAzvPSAaWpQ1rCML9XKfUvva14MwDRf5YX7AzxRdQk2AKHdyV15qEhDqZu7rs4UpERMgW3KC8TZmxD6BhCe",
  "key4": "3oat9K8BdTN55TYSvUxn8U9Xv446pWTpDpDaP5eevNsZHcaGCr1yYb9s9VDkeXrkzMNZ9Xtk7mwLYsJhmzQzDmG9",
  "key5": "3NcBPKMVMDyB5JSRX1dWjQdQFCssCgRR3UzLaNM7wb3wEGaBCDstV5aaCATGL7gv8arxC1z6dpgMmKxAbVXkmF1U",
  "key6": "frVXvoWy1H55TVr7Enj2i3jzkCMppz2jQ3sEmQpYCZZdZBiJ4FjUXzFQPSpKzRjrvDj9jdUwED6ttfuURuGdETG",
  "key7": "2rvoRyowAJmsP6ZiMDzwsYyfkj6P3W5Hg8E91vr1Kd3ZFCti7CRcQWRott4TVSsK1uFxm5CZcZH8od8ixCp1dKGm",
  "key8": "2cJhoS2MMyeGzriFfdV4LbRvX1qVQm14MNEKqFw6goUmDTt132RpNWM3QhBeM33udptjQ71VTrb8cv51c4m4ZGhf",
  "key9": "51veYm5nd6ppsGsrYd2oLbkoWFW5YRXWAwVBJsC86p2YvRauA6q39WSTHoMPnszSXNxadzgoBSGHBR85mGeD3PFs",
  "key10": "3cbedgUUZRE8g5PpGcUzHPYAVDcxWcH4TaeqUUUiU6P4Sb5YhwG8UFP2eQHihbGVeWjxSF55994ceWxmCH8NPqEj",
  "key11": "3uifFfAHCaWFpypcgAsqpnnkYEENGitVHetnQwxFuLNb2zudxDDhP2FHuNSXyFasmQAgV1DJp8d3dijvukq1vmB",
  "key12": "46Bho5QogA2nnoytmxAj9nkAFDxE9U9Ksgneg9svZGMRPPtdRgBbvUkDjRPTNmt4MHwXBTzSMwbD3ejARsyq9mCT",
  "key13": "5FXrhXvtzEexJ6La2Wsq3XdaiqmWDVVW6yDc5Nf2WpDTcWYBbjesF6bSE7QSFyzxA8hQ9K247QcDfHRuq1X4yQzG",
  "key14": "3bcbnxBV6VSRS3bb4tfoGtbrcpsNt3TwN3rDCBsBr8A33Uns8rAKu3cESguAWT71uFPiJ8NZcbFcjPgQNk2konbH",
  "key15": "rDiuVNnuuUS1mQyv2cJK8V6caN6AoGaXS5YPKG8yDEcKZ7ie4YhBRE16GWaTuhnxqmfH9D7maRsNzjDGMcGyqTa",
  "key16": "2xzX2j2EoHBd7VS5SEdwf6Dg7o6bD6HDdyaSdWPsTYTLLxVoLnH1JkiWBxduuy1gqfkmCDhGABcZb8ZtA1TKZ5DF",
  "key17": "2mPtYgqXEMbZALny5nQ4uSZgTUJdToLyn7Hv2tUDcb3RvxkYzHWyJwSedrKdbEgCFT4orYyMZ6jpL2dmn4mM9XYF",
  "key18": "5JmPDEA4jGBj7DttYJHB4fYSZTszz8SxWmrCMgNwG8g4XtUPRJNA4NtbhzYMAh7bjXfrbqZ3Ra781SChmPuiwXDg",
  "key19": "giTYxWjtBc4wnhLLyHpAapDRe8Sgn9exW1AvZ1wKR35L4v1CJogTPb2VPnEgyeXAqp2k48GtkJ2Qp8p1jTDgFRH",
  "key20": "s8nGHtcn14qtTHJAerg9fTXDRsP6JkGx52TeU1PQYXvk4ZNMmUeswY75ZD9UAedGgsHgCES5JRTed7sUoPjogUT",
  "key21": "4GsDp1Qmnmn12YootnFt2sKQb2cBYVsSznbgsLRoBSL19sWeRMfgtkbbyFkTQCzVySJsGqmB4MRdpPRLcBhvdE2V",
  "key22": "45WRNDtUVNdEwVweEVeDcNfzcobERVHcjiqwBgKRKCdPGuzHmViRw7Mti1xWWQHsmUyT2zDmzQFahMsXjvj6Edmh",
  "key23": "dgfpmAHMrMB9YmmFhtwtYDud81DBHfyKt5DTXuwQ8C481VTWjYubmRbQpgmxXHkkCWJ5hMaTebn95FM7a8dAKu7",
  "key24": "3VXPiihtS66gA1W7ZHtUDTYvYYnBd4oQ8ma66QDsYtnr4EtCkVDuoBqHFLdYrrSANBeG2kJWA8xzveZZGVY3g3w9",
  "key25": "kHfpGrsVqkdpd7TCw3dNigQgLoJ72WUEwLqveun6E67kL2HekxyGoZzeSPYN22BoFoRrbytXbXPyM1aSoQsqXYq",
  "key26": "3VFY8jYKvqUcRKz8LaNEDrGjmd72nxK8oqo3zLMUEESvorRJJ4XLvY6veuQZWgYd2DK188Y7PVmGLhBueW5D57QQ",
  "key27": "3djF912mKgGrXnBe9DbHt9x3Wh4xaHPWhf6iAfs6cuVsScQxPRRY4xuoRXnjQtWCmraikFEeSFozCMp4JUUHa4xS",
  "key28": "44QHT3zXVLNoX4v2RSVGG3oiBGy5C5d8HTgUfnQaUYupfmHU8ZUNLLUkuV7mQL6bSccGpj4NUoa2YnSywd4D1txT",
  "key29": "3x8dCSURnkEST4dp68Tzu1g5x7FbTXGWCYynNzRzppaaELwFpk3JmpaQjot5Ax5XkEh8qDjQB5m97VsAu5Xvd3q5",
  "key30": "66QAuRfUmEkjy6UTQ1Hf9PBG93kqHtv9TsMkUMv3JLWkQdmRfnppxPMh1Ay235TNPkj8n1guvWngNrcUfdFi5PRt",
  "key31": "2BXUR2qav3xkcwhsFaWaXRnxwwqVEuNdjrS8HTuTdevw28qmGmEJQbBmFKTSLNaskuqALtKgQTkQXKABPRg7WgwY",
  "key32": "5CKkEXJgLKLRv9bgehoWEJUDaX9PsgUsuFVg3VubSdvviVr8534XkFTHALjNwU86bgpUe23bu1efgW7dReDo5qdn",
  "key33": "398CENQCQG3KxuiGzkAHVfWdDYcgdonDUqPJZBV7hxsGpKFkgB8RbE82Y8v75h1vW4vgJaZjuYJfCnctAsRx6uQ7",
  "key34": "4Zbwsp6K94ffYnaNnAEwsN6mHWdHirvcjUma8r2KvNRfaxGuyryCuiiRrD7NoRjMqbezdbChvrRECEJdyh5eucKE",
  "key35": "2wTcWq6s4dQwjf1RpqMoSHavaP4aicL4iTkwnJBCXpPwYEkVPb4cqsaTdMBPi2fqRo2Q4sTiJgEpzuykZYwdbUCK",
  "key36": "44Wt3d3qMe8wdKVyMDwLN6idjgeAf3fmJB5EMX8zxJrsGRw5DMyuwaTy8ajf1s49x5UBhiGKoc2dX5PqwkE5QYmw",
  "key37": "3gCuQFCjZRSnC9uZtQe6onwsnMWmenAPGYc1UK8BGgE15Sk5sJeHTuH7RGCSfA3fUoRPcAWxP35ah9N5yjrkmH5e",
  "key38": "4siyYXNgnUiSyHCCeyg2qyRvw2SdgS3CoqgtvomDViku2FWX5ab1ycrkCGYSp1d5cZ3mMjpC73Mfh9UsfrUr6moP",
  "key39": "63cBuJUCcPihU73npf6dmbqtxv4vZrgx1mPGieN7LgEz9hcsbNEbArmREC5gBQXm2aaCFTR61uDDxSHKnZfob2Ad",
  "key40": "5Ub3Z23bwzMyoWfY1zHP9hyZ1XQerGBoaaVsRQfrwekUBdfjSSK17UJdXbK7KMgVEwKfcGuyC4fm6JFJ2AGfhvtS",
  "key41": "51wAZ4xs4fprGEGRnYWfyXxHVo4cqPHLADYScJ2NKFFwWSd8QvNhnHaaexnTcanQsgfYi7TKvhfVz639g8r57RPr",
  "key42": "3SwgsYheYSRVvgraPSA8575M37JSRmCoMAQbb8bDueyo2Rb9qLYVnDst8R4yqzrNYLFjH1oM2WERvtjyYQbXgAtj",
  "key43": "51Pi4uhayx4rGma73jkM322xvZvF21qandGaVX8Wk6RnsTbrE4LZWzugG5T26QnZodY3XjjdtJsjCsS9AwT5su5n",
  "key44": "4zygodxoPP3Uta8akYFaVNbEBiHJgyGxXvFuboQkwqZ1YKgS7NsgEM4GU5t2DhXQHDXndgEP2TkJWG6NKLaLCi7Z",
  "key45": "4GV2uaf6AkGMji2DepjBDSfw4vBZRFgZhzbTyrBsE1e4PENjqjFSp7wPVeac8FoHCW8n93h8nVzkZwGxEMV2hNd5",
  "key46": "3xGsKkBq1y3g9Pf9VnYr49LRyxD7vituVfDVZDtZGhrQNjf512T9mMkzxJG1cQYpur9Ka51NwdMXpMsVmarGDSeV",
  "key47": "4vkyMNixQYSbPrLLuSEAqjEygzpufhnJKXWscATFS45Fe23xwWMrFH5qJGXQrDaRAcjL5b3DZLxAtK7psJLKhA48"
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
