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
    "56DFtJepSJBmo11F3Rw8WqqZM8AepFHFjRieTQnA9KMSf5dCvxTg1n9DarXYsyYkvLVwyMRdqpfSmFPzJMZSzpXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FrcGj47SzrzFRyLNZsYjxwmV95H4AzQSEo6z1PJmTgj8VN6nJPwXWT5jkj5e7TqcZW8E5dDXb2VUfTyLGkKsZoQ",
  "key1": "3BxsQjuzCmz81WL3m8xTwAQZuNZeMYSmVKNuuwAvTzQxRQDtUHruGtgLXm8UzJT5RoZwrUfN4rUkf8Y2qkUyrkrU",
  "key2": "CzY5Rekh41QNYgQmds7Ati99z563f5G9cwQz8FZoGA6WehCdHjCxZTm1QZPvXAhVZx9c2aoRTKtF1TmzMbjRfcf",
  "key3": "2zmoYPSudYXUSsSJavyNK1FxQah4LmTbBvkpdggqAAtxbvs3SJz1oaTpTw1Cxy2pR2t5eQchrHh4zFsBG2wgUPk9",
  "key4": "5iHwi2SmjN4p2BteyVK1QQvE1htypqH8sXwzhsaHaSNADMfSYJSDvBrjyPPkviizT3hZKVRTvc1TzABz77QcJu1J",
  "key5": "f1K25zBP9v64RMQTtqEKYsFhcg5ng1KiA14pG6Fb5xQ4oYJQDPAAQgZpKNFYJcxqntGF5oxcycokMYydyNwRLkg",
  "key6": "4336UPpBh61exDA7WraojN5nQcDc3HnJ5ZsPd2BXrP5naHx9xpvvdZgUuLuJyfwMSPYBNremE4aDTWoXrjB5dTuB",
  "key7": "5robSTiT4Rqg1d9PwAb4Np8CqEZedovvDtG4Xp9GNxiTbGhrLwhm8vyJwGx31ZkB9HxVBMRFG61ZV8EYeEHLLMUw",
  "key8": "4dcsmp4ZkE6A4RaJPCJAewehT2ShcY12Xnua1vxR7RcXDNz2qV8yK6x9fQtb3squHBDgYKKRDAhouc4yXz4nC6hS",
  "key9": "42JmnhAri8sqdZ5dTMKqPWdrk1SWjbbrMa15BpZnUfa4fTDV3wWWNJMgHfxcYWXX4Y4Bu2GTjZ9MzjvHffXq43SW",
  "key10": "5sLyg6Wif43cSHPkpGJroHHyRc5iaFp93g5fHGs9DKy1mYhQbcRjh3uzHT2qWPuFgnkFdfzT15QZ5cotoP9dMijR",
  "key11": "5SF3Dp92QGYYDDYpz4apDsoqKyGCH7UXM8c9oxNksb6i3FauZCurryxQ7jTR6YJESzAXcvqGNwFowVYgGcsRpZ7M",
  "key12": "5EP3Aikn9tq4BSaZ34vjeqbsivh7Zwuy6qr1vKCPpJCqr4BNmdHueEnhgZZyVPQSE5rs3gtUcXoBXGRmPsVzi766",
  "key13": "3q1WgWT1WDW4fESgoYF3oyDXJdb3JiATdh9xn2wZnfMxX5MrqoS7pECYNBUJSEvJW2XCVfASobyzFAPF3aEmz9ek",
  "key14": "4PwEgHWWGtrnaDfAdmsDA9Z559wyofmumbs5MqoquKwvN1Qe824QL51PhD64PP96MtT6dNXirZwHUKUH8KkUBKks",
  "key15": "5hqqYdyhgtsbdFD4eEvtkCfyMsjNXrCnH6M7PwjvNBEtQBunuxwJSLcgyBir9bgKKPD1pPA4N7ybT4k2YDABmn1o",
  "key16": "5To82MHotpgLLPW5k8XCB6bkgcZnof3bxqKu8KCdiaD1BMqJn1PmjChdrpZJhtmvmrFcVokR4fuersdbYjjbtN8P",
  "key17": "611koKx4JDrT3BtNHou2T6UHjLR1w7uVQi7PUPnjLZWpX9MG35JtEmZ4oF56ccnWx48sW2V1tmEHtqKBeU1EAgzr",
  "key18": "5inB3RRU2BqzwPvTsmDTShnjE1rzZVpyALB48bE5PqvwrR7mZm5npthFWY5QacrGbvN2PNVPM2y3nXXnC1JMQT6Z",
  "key19": "2yW9SP48ezCf22hKvLScxVKW84NdPZDaHZTjDwWHzonDwWcbuovQiyTEKbqZ8FwtjWXDQzFmebfRiUZAU9pBZmEP",
  "key20": "32HNQGPcvqvUr5gCFjAuo7cKLPbzW7RZP5fRDfLRwJ5QsVDTLDvY74kkjrvNDCmajndf5c4FDPnSBirirhLoV4CK",
  "key21": "3ABY3EJkd1Y1f1oJrpW8FUQjokUqqYB8wH4S1aE422oKZvozgRvAcuGXUtHp4jvN9vynfKwbEzUAsaLLQpB5ieAq",
  "key22": "2SsyDJ6ZNeWsmAQxqAgJrvWvtp8h5JCAoSmtwb8H9pfgna9CGahimGQSSTCj5ZRwTa8LjXxgQYMrvJ7eqxy3yuTJ",
  "key23": "4rfdBcrZptqcEvejog1XQV5o1VrHDYwdTgujgLjtPD8SyYg4QtaaZ5MUtpTRXYt65QUZ2AiSWWZvYjvUFeWCZthS",
  "key24": "5Jy64E17Wav9XsyTu3HLq2rhrPk5FvMCQEjGRcZtYxxJVzsHzTi1pszyELWwKRS7MHkh1fwXEkrpC1Z3SF37s9CX",
  "key25": "2xmkaFHuMkP4gCqDqPdyv3iJTh3hVAZyfHP92dFSxkeFk2KKBaAG1FzbWycpoZNzoRXXSrGX7N3jKjro4PBVJaHN",
  "key26": "3SfYug1Lsncstqd7H2MruHD1JDhjSttXyBK9epzsBFnCJ65fEinvEFEezEzwQBEKRD2aJV9jtfuYKg7xmDqdsvZx",
  "key27": "33isepCA8zSCLxikr783RsDQW12sJNd1tkgympVCKcxVHQ8z65fsPR6o35nsHD5nnntrycvBPuH13KCpRwLEtSNH",
  "key28": "41tktSLeBTRZyboQKt2my1o8BHPK7pQasu8wCvGX4ptS97wJgbNvFtGicSYZj5YXG19JSoMtAiWzpbSEtWLYhSF9",
  "key29": "2fm6BGJ5VQMxz8c78FY172VyBraeSTnFDoCrYMs6VeYqeUTGgVNRFQ8SbBoek1iZnUvA939iCfJTymhH8VT99bK4",
  "key30": "47BeZT3Mq6EWzkmEDzmxDcm3LPEchxPvUoz5KhbX18oHoeqRp2uTB671RPsrA2Mfx5YWqgEnUY7hAAyHww2hV1aK",
  "key31": "r2VSvoBCdDKp4AsgFWu1jK7skzvBjG56Q5VNTUQYUys2fcrG3xXwSf3E7VLjSsezHULD4JhDT7oPbmA6kpfTAeW",
  "key32": "5psk1A5V5AQGQSMJNeSTxcExho1JMtNqZht5R5sokZXsuKdN9nk9GtZZAZkH5dUUcEpu1DXth3j9PWDonNMZEf5Q",
  "key33": "37C8x5husEvZC3UEHRZ9odzgo4HfkDk7NN35Ahk9NoRyoXpZK1imXhbri7onzApcp99EoHnQWd2m4t4ZAnDoZNhd",
  "key34": "45MaaoCWqH8Sc7zsoeYZWzg5HM3GV4mycfmMzNQsMCjVXoLxoMieM47mgjybYPapqAb2zeYkQmFvz3xuipNrWfCp",
  "key35": "5eTiwZTkqAbtzJjNMzAdLWLVTCt5NjPPv7F3wL3vdJjqHx9xoiKZxpcQzaK1z9QuvrKbPhtdvkRGxKQobauKJKd",
  "key36": "4PL4WkECWXwKsJe52HBs9V2LgMsx29ARw2J4f3CJ9Ac1d33DwHFG5CM4whNduJX87psavtS4STqkcKapQ8Z49wCT",
  "key37": "4HfFNDaDRRedu6i9qyarideA8zcCEuorvca2jvezvWSigZkxeqxS6B8F3HE2eLpfUDmYmpFRSjLLpZ9dTWfPf32u",
  "key38": "3Yy1NrBHJPaGWqKTjTc9XoQ4s3Sudz157KW2HwYroY8nWdLdmddrAS5BxmdCsKkuJkAWyJp8THLYsuA7u4E5CXWi",
  "key39": "4cvbJfE9Qt3EZ9SEnysp8JHtSpm7Wa1ns2fNrQ5vwCBQ5Fvjn4bvLotjwLY8QnXkwbrRsBAEbPsZNj3AUfWwoxQi",
  "key40": "4iPLTbtt4UdwNf2mGBhoWhQkGzbibXTR4PevKURR15LpRBudMxTmh434GBduE9FAqZqk6UMfe3wTbWLoBS19mKeg"
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
