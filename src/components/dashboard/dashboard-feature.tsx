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
    "44fRTfyKeupoVL5sFdsao5LvgXGDiXkropvmXMUTgA3QtUbwfLb3a3guhoq77grMxjwwx7XsoSeSARyUdrYuucNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4miaFSFemM42QN56NrSbW4ibWoziHb34wexJiQ3ZAD2NSq4sVZpvtv96nmkqa7tqJUJTqFFSv38cUuG6kz72V8Ht",
  "key1": "3TdXwtASeZV32tW9PmHm93ndCX7EBau1Ys9BiMFN5GXWGnt6hrNKaHs7JgcJHVyJ8spxq7eSCU8q1B6UDt55cdZG",
  "key2": "NGGWhizooLaF19z7MhW8qCbvzYUjYo4mSTcsBzWzUeFCDQ56ny9XWWJu2VpWCN9HwQdn6AfVKjyZ5qh9ncj7rLH",
  "key3": "jrJCLBGhreGEkyp8hGLXMUddEa87npEu1RJv6mZGc9bBAgZdLUqMFcACWTDAsZZUBvhqtq5uoaVRdCPHsSBP8AB",
  "key4": "5vfsN5P8Va9gCEwv1xLRz42pqhRvVcdFt7YNMKjq82A9TGHDH5kBkFoHUhpsvSudeNyrJAiR7MpmA8HmjcTyrsPT",
  "key5": "5mM15CD5HbiDXAMG1Ud5sB8QC9u18oP1gkXSGAFGdkha4UQqguHpmD56z7mzztgE2oHGVdceoEKEYzsu12iRB1UU",
  "key6": "3KHhLFUoyqp732xxDbjhoHGNrDKijkX2c3qZSzDQEoTK5C5rK7U24RgxnsTyeeUQoZJtf7NXmxPcxk5VwdWhnf1Z",
  "key7": "VywXQWDT3Vw9zseJxY3tQDXWqjBeQrztihCb5PNaaYYMd9yRuNhByEiWQkXkp5rsdEpsqjMswTreQ11LwVijfpM",
  "key8": "5xQny5dPeyMbzbcMbLcAgzDGG6fopPpuxbTc7MVq5exQEkVseAr1KrUdkdkYzh4YS79Q1YbB9LJYX46pgRqD1g2n",
  "key9": "35ykRJPGuZfPugK4iTN1Doha8XbxEqGKPmaa6YyofuiwCw5zqRr3Y47EjzsAijM1vTc67FgPHkvzXQ4RXQykQeyW",
  "key10": "4zKVfRpQzVQ2u2QhhTSi5gFejwHA69hag4xKHA1132sAMNYg6BhcvBsVfZ18NKFxHAXc3mrUR6XPRijyJ27MyTRb",
  "key11": "5RAw4DfthjS12yDmUdo43tyDysKSGAnnGrmskz3cqrN7tC1JBiaDfJkuMdr7QNdM4i6uWJ8sduJWhSxQmLCQGaaW",
  "key12": "5GCWGpo2PAuxqzuCkrUtvMnitUjdTsNfHPJsavNJxNgKmTuKM19XoLtruQa9nm8niAfopvyyXo36oJG28qjaWZK2",
  "key13": "4o4uMEHDuob4rmVLt74sgSwLmePp2RXujULjb9pZM7UNummvD33MGg8dczqaxnQ1pGEWUJvXwN3EYvpa1AgFtjka",
  "key14": "K9kEBteTXFMywuuNwstzEd13XPQz7XEy9Fw1tkwsqJmMcKuNVGiDPiYJqkVVijeRoubrVjpnF4dneoLX28vyNht",
  "key15": "4EFPtRywxyxQKA6cbsDRpJysL5Lpp8VDchX4ejnCseKZa5khFQc4TFpBzyJ3TtxcByNzNLKauxEnwWek4fCyeaG4",
  "key16": "3AkYixqcfwbzCrcWiWLAZw7kMEAec8JurXgKVDZ9xKHzn7Z8KN5bf8jbVxs12Bwi2EeCnGghfLhccRU9STet9VJq",
  "key17": "3wTFudszRDQnPhnwDqcCSvEdTwmzxfNuQbkDSWJAMU9BsPnwq6RR7cvv9UJgrrnndVyCMgapdXdBo3qqD7Ji7L6e",
  "key18": "64hqPBAXURSbCPK2psdvBqk39PswWDS727e4bNQz2GAExhfFoiAcMEW2cbKAkAsjv8DQXmHsTv38WMsCUJ1yZszt",
  "key19": "2abd21zFNvnE9Xer4GbSbQ4zG7AcJSPVP3MnJePearzLYCwdZgBJ1yRDaFda8cMx5YQ52bwDHDqtpiCmyuNcYhCE",
  "key20": "3mD3Vd8zc6bd2vDeVRkuCRae1eL8vT5sxeU57zq4E3PwsErGAWLKj9umXj7E5yS5jiAN9GK14KeboedNRaFex6Vh",
  "key21": "5kVKDz8FDtiqmAX1irCwjaze3nBz6HQZPit55Uh7n3vm1aWfGfBcEyVxcyxKcogjyh3b3SrcDGcHmt6oZkv7BvwQ",
  "key22": "Dg6iG851T3CVf48VJHohcqVMhqkEofVcF5pqvUZDxN7JAnB8zdsirJjgRZD8CZewgzE34WHgUip5rUoUdbiD5Df",
  "key23": "3Ym1j2H7JE66v4dJ9vF8jpwAHY8Y8eT8FVKdbRuVYpGCEAbGiB7rN33cnm8U7iRLs7tsAo4Uz4RLe7v2xKuiN54W",
  "key24": "4mt2HSf1Dq6PrhJ1Aw5MiusZYNBgN4zq8zQu3grZkLcXvf3XVaRBs8F5FZ8JBCs7VyPZM3eb59HY35XzrpHyqzfT",
  "key25": "5PfjrR4cThzUeBXDpc3uVNLkUTxjruPE1kbdwoXqbExU6aTVuEYqvMaDFSFwnoAS6DBd2nQauBhj4wArvVz7nSp2",
  "key26": "2iRv2pE7pTzhfv6HnDkygBSMvc2JzNwMgdUH8fceTHLrvPUUr6MYhM5xswMB3EXPQ6aroFCGwR8KocLyURKRyB1a",
  "key27": "2ootepC3nFV8Li3RBn2gJ8d9Jfc9bGmFVC7d5EYpZMKCuyqrpnyunz4hQBnmstRRpx2mRpyrF7nY6wwgsqs6GpsT",
  "key28": "53cLTA7cCkwmfY6CC28whSgFcpZ7NLSXNikjmq3SPC7f3CL9DyYJUCHbGMVD2Zqe27xayDhkZVHTRRTw1Q4MYP1Y",
  "key29": "g7X6gdiPQtJ1MidxUTR3vaq4yJvqCGuhE9a4VcHtGLxB21STKHK7AEiZTG3wCFdf6Vc3NEdxgNQKhc3dMob3cLD",
  "key30": "5ZrGPhgXtP28Q9SrBAzx9vTK1ftU8y14F2uyag2LEqCXUtjRCsSrwjQcWXDDcR6XEiipVxoUpssPa7wi16U8Uzkb",
  "key31": "4ZLatLCB12RgYoXh6CN6QB2BUjzieHbrL8255tvViswMEBYeCZfHZnBYnmyHE8MhJo9qgt2xnzAmVYQ28rBWf8mw",
  "key32": "2gfvN3Mc9jKKEEoGJDjGTQRiWEDMntmgqmsasniiH1jxcP1ScSzCMVyC4KbzcEsawwDqL99zp8m4Dtsy9YzmFafr",
  "key33": "FK2wTsLZSAyvZaT1y1HBmGrYxRHQB2LHTMoTfpKXrFycov8QB1naKiRbi66Ea1sCa2rbX4XgNsF6jd3DSyngS9h",
  "key34": "RH5Zui5aLz3FfVpC1B9aKwtNdna491qRvTzRCkc4tmGerxtnXA64vzvrCbAM9MU9BDmqeLRG7HBHZ5F6BdTE2kw",
  "key35": "3hgRM2anRBPWBKQZja4ZFpDLX7ECo82LRJuwX588UNrMKqZJK87nG7msd61EtDVWBkzRmwf8y1FHnWeJczcjdayL",
  "key36": "7BLjjquhDF6oM3K9WHnDuSZbUyVUtRqb1EiUVNJyGDw2vxYnrrbxUjv6uBnAoufJQwC3uDviBJ8SuqaQfroHmQh",
  "key37": "4A1bcVZ8iphEnBYzYvVXSS1qxkkSxsbT6on99PLVvRVKKcNoSETRnJzDW5GqvAfnAvV7v8nXTabMjRJs3bFopLq3",
  "key38": "3bFzcQDx1RerRFdecX4DVJ9qF4afCxVqH8E2kmdjcPHgNQx916koxrLKbUnbRiEDbNSCzrzJNAXrtg3x2sqLpNSE",
  "key39": "BAzRJFMav4NYQFkk7CGbhdRKZgGYtmN3wpuenD71pMZVPThuWxuLt6CS8E7Qb3gxGzAXZLtv1hmiAzqVMVws36L",
  "key40": "5Rdarm8zGqE2vfJGRjcKY66z4qVyKfJUrqJ5ogM9vbXPqZ7eWtPgYjAy1ErsZmAkrsMWuYTXa8wqf1ffexcnyaQn",
  "key41": "3TpL6VsqyMiky7vfq7Wr4yGNoQVGBjmz3vNf1LKV6LJPqgJEDudW7QGG7JgXiaD98BVHyPYJaxP8H7rxZyMpbisQ",
  "key42": "3QT1YUFq1Rgc84sqEj8DoRUgBbqAJgNLppJne1N5Rc1TJyFn7noc9TxpKUeEasg4m4LCekurriFfRhAFAzKE9bm5",
  "key43": "zr3N9USCor2UXbgoxxaNKPaAV9JtvqkpAmGxDuWpPYor434UDXBvr7rCwhNDWoX63ZsfLenFqx9onNWvoE73ixz",
  "key44": "dSQq1zLa7Z5Anu3yu1zfDhM9SyWtSPrHjetNb5vChcnQSx3we6QkYgF3AhDCuCTsDAeioRTcmtLUe5eJHSThBwG",
  "key45": "4YjQ3e5zQSj33jC4B8Yvfo4JDeowhf8eNNPuJGYNjrajwH9wVgZ6NGkNrHhQaNvAMQWXxMWNP7yBezHMUzu7Ki4Q",
  "key46": "2g5SZe6GoRb2iudeR5pU7Ppyi829pfRiJ5mSg4PjtqAYzZHx99SppHmCJbbSKntiJipn78CRpRgiPPGDgHUt2bjL",
  "key47": "65YiYNanbXDJDFzUfbcSdVrEC3b4YUrRP9gZDYBJZhAb1ih7icjuB8qo6aTyw7RQfCczJ8sN3o3MkzWWGwmwe3P4",
  "key48": "57GAWEYiMFajSWzVuUgYwrc6gq9YdLQHcNXWptMnBjeZCca18prNRVFHYy7PGiPk2iRDZCvxhStc6V5TGwucnbQa"
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
