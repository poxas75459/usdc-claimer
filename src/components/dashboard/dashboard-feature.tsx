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
    "SLVQJ89o95aeFbuYkMj3W8P4E4L13PXhUBSzvv3nH1PWYvwxVRyhxKGXTedcmsXNYZL8XH8B93Kyrp8hNNSMQBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "shLPuHJZBuwUDgTPAX9mrofG4zk8nUd3ckkg3wFwrLTRd9hZzdzfD9rwEPoZVASr8p3bDmEELhXvnZup8Xhv6rf",
  "key1": "2rLZwf9PwphNcpjz9sXWzwxNdpXVStr8bzGHYh5J7qo5FmJaaWp6Cpb9kxXa5TmQPcYF3pFAVHnV3RZBXqmXxYsk",
  "key2": "4j65BPr282mQrwaRvenRj8PfWwgfxFRSqNXKBDrTHV9zyvwV7iZZDwXpgUwe5HWce8khDuHxDDtArPHxKFq2k4Aa",
  "key3": "4xY5ZJcMsy2eFvRaWjP5AUpKyVCHTuAGUdPJoxHpBnAMKyuKbStdAK6Vfn8QEUwtS52XMuwSSR9fuD2teo25tTzh",
  "key4": "4acuQUTkwW9ipSBJjYjfyyGqFKdPxCiX99onHTbmP8fRmYsFKbPbG2Vj2VCcYweJ9iDNUgrnrCphjikubUqTJoou",
  "key5": "aJcXX7CGF2qgpdGZP9sUKjXkno1ThTHp8xH61Noqhxo3cEoRKtPgRUGegUXupF8wsbnD54uxEG7Ed3pBzoXah9N",
  "key6": "L88DFbntiebc2PvfudU5GkJTGLkddQnsgAQzAEKHDJfgM1iTyCDiMchoPzwBBGoCTBbkpRnGVXbuDXXJjDqQzjm",
  "key7": "5RfdPVeR7biKKuhRDZXF5MEECB7xzj6svqiP46HjkQK3By9L9CG2hMDWYmLFttbX8kNZpbvUe3RNoZBmKeniqqKt",
  "key8": "2EbqswLLF24dtTmU6Bh2yHiX4qksBRoDtYZ9FpApirFXpR49bs1TFfGre89HN6Uw2ATZRTojzAiA3NnuHWEzg69k",
  "key9": "3EsWgcmf1ybESy1S7umCuSDgmCXk6s3VFtvQrTAZHeBHyDeW9JnvCpgCfbFVQHbbFPLzw2xwFSAUPZDBx7zTw1vy",
  "key10": "21vYcy7uD83TSNdDUrpePsSUM2vgUA3gMX48nadcqaA7Zb7KmrRqhwTAU7eetp3Fe8RhhfF1zV7qDQ51LyfPU8Bu",
  "key11": "3Ae4do9NGqKBBVteZCLbpihN9dDnzNWhekJ8eAEkzjEgMg58ZfC2nCbbeJ6HXVf37kjsDntJeyFVwkNo2sDjTXLB",
  "key12": "55MKV77hh77LrfK8kdDupLajsqUH4K8mUJDyLtKYm4RZrT94wGLwEuvznQj7zcSL9DockwTNtttTWbXhzgT45anD",
  "key13": "m4KhW8U8UmnNsr2HaNfTB1n9rKX1mr5cvEqmrhL8HtN2MgG61G2DDmfQ81T9sBtq22acC6os6cPsAk3LZrvzDFJ",
  "key14": "2nFyaqpr16m4Yp52X2HHRxXhWUhi297fpJSdJ1ik8P5BW6d3zb6wjKqei79JgWKU45Nc3rYPjMoT4c39JcHMbQyn",
  "key15": "4PJPPjJmyjcyHXcCJyDqAf46Xmqwj6qRUiDoqyk2s4fp2wCxKi4ncL4vNk1V1AEhQd3AaHsuAGqGegHQQU7bNznb",
  "key16": "4HitzJjY5jX67cFpjY6i4cr9pYv5H99hpbiWoJPDB1Kg4ypXg6BwBYujQjDS1vaFqsY1VWJeBBgVX9Bvrb4fSJEA",
  "key17": "4shmoHGfGwXD9NSoTfQ9RnzW8hQXRVnfrYSfD4D2T85aVjHDnv3A4FxFEQVn67iL7SDscW5bMHHRjRXtY6tS98fe",
  "key18": "2mpq19PRTeb6NhwB7Zm89zze9iKmCKezofXThbd4v9GR5yHP6bX8GEFwfn1MDnaexNPBNxRvdU7WhPzhSzxqhSgD",
  "key19": "4vpBRZfS91autie87fgCiGbhgGHLpWvoup3bDRfd4gZXrGuuXhnMLHdbHVeNGyuqB5VhpeP53qynEoF1kVsU9pVM",
  "key20": "3xEEp5u1YSAn1ph1DSJRWjXR3rsLHbKqeqDshz4FyJReb2ZCW73S4PW5UM3VJRoAqG6vdV9hBaiSmdkDVarp9P9L",
  "key21": "4TWeSjLaDT5yDBfaWGn2C5b9fbndaPD2hNUaTDFKPcjgQ9jw5qW1G3p6b3bEVvTmU343zqHZF4dTEaCDJCNHjcMQ",
  "key22": "bKZttc6YVEMtnHBuvnHTnxmssoqGKGFG9W3aVgrUDfXubmM66GVRWWmq7XycnTjfArut5WDxWpgoCkDkqdHbFRN",
  "key23": "5LvjVR8hQn3p7bgKBTMwuGq5KF8qqrchXZAb4b9X3Kkt9Nh8smfijUS4maJkxNRrvndjoKGEDD7Amt274cL7r8R8",
  "key24": "4nZhpo5XnUu7jaAfQwsJBR5TbPKSdcLcx96gmKYWLogqoSBzgeXG1YQG54CyFk57HjrtGYNC1MnNvtQw7dYejGMc",
  "key25": "2rLzSDQr7FyjuTk3BiSS7TqmUePm9LWvw2iqywhi7H9LFarfmKBfC3QQkmL6DjUeWmMF2RS9Wizm5r2V5xuvRxtL",
  "key26": "2yuA5kGZYyLZDhtM7XfnWPm61UxNuy6WCBcJ6zXM88dk3Ymgs1mYXdFussCH2AYtyeR3UwGfFrbpvZdNQgNz5VAd",
  "key27": "4M1KZqEvDC3UJ7hGc4H6E9XTdYSpPXT1yt3AfLYnJ54XLcrx5EY6gk7TQ5yZrRDRgfAm5zjVwz2fT3ZKQcw7quVu",
  "key28": "2Y6LyYP2gqS72c9aTyGvUmNM3AiZvJRmH3Pttfaqi3yWaaYt2q5v5U6AHrUvKTVRZAb68EgA2nRA9448rUkSz4YW",
  "key29": "2HJui58dMdLwW6dQLQjDtswLp2VgHNBzNHhj6rWCs9Bc1dmabGwjXujs8tsq5Y6AJuj5KZJXuMQ2L4N6LMwsNNA3",
  "key30": "63zFu5KkP9p7KjfMFZrbBtZbgNPPyV1kskbb9SgGKwMEjZbJxCcX4QjrpLE55L72FVqBq7TYEQ1cuRxvAx2DZzpy",
  "key31": "5nvdbiG7xpnaRGfKzj2jMoG7ZBMdvb9S9tTDRZUyN6DQehpiqJZauvvkJZWz8UqfrKm9mEbcXU4ujwVWKd1XXq4u",
  "key32": "5TSqsF6H7DSUqTKUfh3YVGpLrceD1U9WP2cnhFjCUmsSEyTnxLUwEYN16v9PSGfZyC1bvVBJJXXQXMa1zFAifun7",
  "key33": "4WDwPhPQshet675XwUaLCZaeB4ZuhpdThYtCQRvvWrFBc6YqwUWXhp1hEpuvmAXBpmKY49tdrDh2nyvbZqFUDRop",
  "key34": "5ercLZmHaSTKxkd6sm9cr4r7ePRFvEAALCGFDWepS9hNq6AHvCAfeGV445euEuZahfTN1yTi68ip96mWJefdGnXs",
  "key35": "5cxAivbYmUxDLrtdUdQ6ojthZzcYtb35CZioteAWM92MuNYveXNeSDTxVHybkJ4bL1SaBNN7jkBKBXe9tQWoV8a9",
  "key36": "Br1rFkMotmEEF1mB35BR6Q5qn2Fws5gWZtMBfRfVDDbnGqNPeY1y3kjSvMNYYabA3eEpAiRSr1SgXuTFomwMfAY",
  "key37": "4DtwnyXBGC71YMK2sXa5ouGV5zVFEZHHhRx9ZqfnVfA9r8x6Gn9xfNxpbNk5jAArTzmBQntdrV1gqGzmD2UqZre",
  "key38": "3igwMDjhUMEGv39A1iv59BuugUprTkHrZiB5EKoe1WDDYDwi3ByrtwRnsYNXGJMwFC73og9h5vLYUcvdh5E41uNs",
  "key39": "p3eBCFZynE7EXJuFrtLJdran21XAZSchoVUw7WgfufYPuZghsF1i5K3RNK1KPPuKjMqw6rgrwkkM4duTNwMCfa2",
  "key40": "45kA9MGtBNX4n7qX1AGkR9QmmfaYuWohMvwsUmrK6fDWcPR8sbtw19WetxySe4iLhwsmua5fACuSF4B4vRXXX9Xy",
  "key41": "5mJrGRHP66c72gxTrj24YeohXQ5Pa18Cjsf7u39Ma831uUiQwbfjqqLi66DV5ksAxjJjutyx6bPDm9zX6eWDFZBK",
  "key42": "24MTyNW75duXj9eYJ7tBDU3TpgMaaTqpinYhNaaMEhV27Z42fm4qAi4vGaWfiAScxS4jkeZuMaMkiSawx7eE7ADd",
  "key43": "dkmt3qm1x2tskwtRu21XXakYNAuWjvg1PW4akHd6tajRYasFxeEj7mpu38pL3u2sNuyiXQSs3xJBvXp1kHHWR18",
  "key44": "QkrFwnpv4QvDFEmZwUtsdn37Ah1jpk5brgJyXMxXLLYZQK1jKpxM1MoghaFh4AtNfvaaQP3VE8QDqCN81tXq4Jh",
  "key45": "2uU1CV3WLYFJYRanM8pwv3dUbsH7EVutKBB8MT5qpQGee1Sq2Jqmg51RPgqL4KK841YFmKn4X4XqcYTjpvfG3KcD",
  "key46": "wRf6kGTZhXJoEfvMzpszM22qJRmsiWFASumyrbxRDFzvDkY7kXhhHg8nhxjBhw2UBz5zb5eLWYKVjKgLYyQbXJh"
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
