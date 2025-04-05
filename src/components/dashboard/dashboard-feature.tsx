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
    "DSNjYsxoVAsswHfmbC11z7uUfTYS1KKp3vHJ49zSxCHEw1w4hHLQB4eKd5hYtWDNQeThmT5yiZa52GuiyqWxsKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xH5MNAZd855tLpTMi59ZRhCfesFc2DzoGBP5zr9nv63po2D7Ufnq1vZAXf8pBtDHk5bg7E2WmVv8raofkdhNAQW",
  "key1": "5zRV6T91NKufLRX1RVKuAsE8rh6pkSX1G8Mpqrm9xkfds9bPrWzj9Bg4GM2izokXseBB4FgYzbW178WxGMM7k7Df",
  "key2": "owGxy3hzLKtATiAe6qXW1zEGeYg7cLeP4jmCBERChf3Gg5MsYWWWp8rUYNWZaF2cRjZEReXQUCvUxNPTAs2L71d",
  "key3": "NEGYALmf6HAcZy2xd5YM9ruTbqjbYcuBxh2EapeMpEZnkah6Xogq4SgVtdaKXTGS3Ak3qo2jRURRju3jhHTUgUB",
  "key4": "5AL2vVe9mUogG4jgEBe5Cd4nQh3GGSJHBxi786EidcCpymxy25GzZzV1XA67qW4kpz3gS4sNCkV4UKMgBVyWFA3w",
  "key5": "3M3V5wJenRaJVqEmHsZsPbx1BWGSzRx4qzFfFCNaMv9QgpS9mLjbAn3nMHJRXuLww1Ho8DAmqtxgVEA8cNY5s5TR",
  "key6": "36NskieJtBMpxMMt5kYarQQVRUfKTUPivamYtUE1gxepSYzgLALRKf1WMxv5gMFQJgf8WbEfhh4sPW24FYzAJi11",
  "key7": "3eBaiyYX71Lg2XwxXLn5xkmvNx7McHAXqUQyJefrDcrd22b7mrtT3sT4RWR14L9YB6NmFyHqk8nUrpDgBgrkKUiT",
  "key8": "W9uVLAMtBbb8zmsPsGPyiZof34ZcSsqtR1KHVi76GCgBswEMrMiK34ogkhdwAa59Jacze8MHVSKYjVMbwMsk3LH",
  "key9": "48vanQKXUtei5MNgw9thm9x4E69v6X1fquwSJQC82Utir3vRUV1VfvjvuvrqncawBqFJpeVaWpRJNgo8VNLv3fQo",
  "key10": "4Jo8QvVB8uMEAad4WPv3KBBZ6f7L8bKerqqdgHXE2DS1GNBGMAS4VMsRQDbZkiQWQQrfgKXDfw1tmeyJALoALLfa",
  "key11": "5XTzFYXiehX3yRLWdkQNjo4L719oD1T2E5ikhq76kwBVFWyh41CGsAs1gRtsYbtDCUYyQcxeEwWXbyjJgvJ7i1uy",
  "key12": "5vNjLMQEHWc9QnzuavpAzKy9n3R72MLgd2TNU93Rzf6u34LW9idvKGSyNuxFDCBzxhSJvXmgaECoSFbMwagtbpLk",
  "key13": "4mKBPhehgdg3fKKR9HgxUaFim7su95d89UZm19FfUTTwA9KsYHdsHiin3mTPawmue9y3yyeo14TnWchGZvpzkgHo",
  "key14": "3xWMP9cUeRJYHDWLh956J2GYSHRL6bfoCAFyycwZYZ382EpMhKAgY3XmQirFXPzFa9geMJpWJbjGzBrrRWg7MaxU",
  "key15": "4N2w5fAFzRPanKEPnmuqFYrpkMfAm4CF3dJv443M24qWRqKSxfZc2D3E7wXgMuhXouaC6YQymAGWNrzhJb1fvB1D",
  "key16": "45DfPjmTAxaoF9SUAoN5NXAFqfVhnwoWYTrmbeTnKGZQrJgWqh3QfRE5f3Uvm2XBEFdgUfgCmjNbmrfSaRFCrrfB",
  "key17": "5DkAhzqJTprx95DGbXB9314Uxd4nvhZihT3XiAn9vV57TwzLLGBsKSFwD1oCWDBDMGxcMdpXZxFRJHLGx2KVLsjS",
  "key18": "4JTkZQdqYo2LjnqorApkWnzHAFFBw8EbMVGb6RUzFe3ErLNNYKxs4VWex1oiyAjLwKeyduNDJrwFckRvkU8e5p3i",
  "key19": "2t1CP8bkaRAewLfwD2srGi3vjPFEyPnc9GuRRUEEDQMVfCYKGADZHfoQfG6NHrno2aL53gAzb798MKkpQGizNBD7",
  "key20": "LCrKLwtCD27XHxx4cpnM5oWvSU85aUq73K2ZcACCbSxN4EJtwNrR3aa5XcENAAfwWsKyXDhWwUFMbT5eCqSWRTv",
  "key21": "GWsEYZgJFCttDvFs4kui8STiqfQwBtnxgtkvfKt42oHzAmfZftCPyokHbnm4Ghd3ydiJE5GptGDTPGq5Q6iHH7v",
  "key22": "2ZPJrTDF65a9AMvojQ5fukoKRGcbtqJdQa2im49vAUUVkNGEydAYPei5w6WJTC8RKDVbjR3inXHW7piPP919MycT",
  "key23": "2kYwZpdFUVr8sZjM5Xdf1JKLePYyUETv16whx2CgUFwvhuNRJSqk6wbYhTG3MP8eAC97CM5oTA144AftnPveCV3Z",
  "key24": "2dU21SpoDExYQ1u6BXqYT8TzSfojjeMdFmQ8AaJnXdsVq6XasxEMKNtCHmRAs3ZoVcCZmBzCJhH8Rh3o99fXpaUQ",
  "key25": "2xPxovv4jRv5xMTjaYdrugXaeqdf1VDfSJfmK3vHTZt6z1wchgJDQwAjFPoiTHRKGns4r8opFRuH1khAvjFUi6wk",
  "key26": "5CyL5BHyAv1AfQbWfBJa9uDhnoF7s6dCEx5WbyDb66XffYjgvfTox5VukceYJDZ45avWenoQnfv4tmzaY7CsbhDC",
  "key27": "3gjRGsKt7q3bqtzYGL66FQiPRyHYmeqfV9ALMuSzXeFNrypKjVnUdtKEnRTXNANon4KupbUj6ZfpfYxV3xRefpMf",
  "key28": "3xeRsB4ywe6VnKLB7xfYLLdv9KPpbPU2XWEbKpfGtqYofCNLEt3sfvLAiS1HrGWXMteWo3xXrax4G6Y2hGFEWsdx",
  "key29": "3za4iAHSuQwSfPivCJeFFqnwk9L6FJcPXx8t1kHZLJyNpzjkcHNd711CFWfvYt3kriKopJuy3EDTGcVZ2EZ7yv5T",
  "key30": "3hu4EVAokx7RiH2tzJ8QLuEfvueY1NoFLSu97tNYRuQXxDtwmCtpMq6kkQsBtGkFvRkkJoifd7QUx8exwLbv54xf",
  "key31": "RL11Y4z5c6C9v3bj1vmGsyvPXb6De98pJf4KWwqaDaX7x1kRGbhF5NdFLzKMYy55n1koD97SVDFHw7jyBobVmv8",
  "key32": "2kgf75kN2z4bksAXVbuP7CUhbHLa7cBWmxKWc19f76QiBTVyFsVqGJtD4HegN9cTCSPW5csQ9HaotRdxDfsdd8yv",
  "key33": "3Hem2rTS1Q5DrGCVwfFNxVYLKDCGb5iS8WjUvex7krkknxDwfFS5toNvLxFUUF3QGfJ1x4H5owssY9S9RsrLVdiq",
  "key34": "3zy4xU8gsLZ53hQEmNEkYoH5fhauXWSNC2Lt7PHmhihrQfVe8U2YSvpYcYiFjzTjFnXf7cBjtQywHHEhs81oFNvT",
  "key35": "57jPwe5UU6sQSUJZXngNSmfeRaYkHH9sirPdShhV6SM9WsW17Sz5L6yvXAeZC9kGXizhepwUt7DgF3J1j1vRk5G9"
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
