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
    "63KMdWwoy3KxAR5SUzsbWHEdPUpY9tu1AQYRHNdJ3oXV7e5VGzm3qU1L56km2pfAoRWdh6MqaH7YxXHCp1UghFsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wC6SgckZsvd3n5K4g5ARjUJuzVDsg9RcD1qcR5ddzmJZn1o1egyr9AVC9vXdLmyKccaudLDSZoThwczpgBN5VBN",
  "key1": "4rLyctojyewyw8FkmgvczZMQw85ospPuKWB7FnUeYDUjhWZqLFWUE29fe3AcUu37fbxomLJDDyfLicqy7W9LGXVa",
  "key2": "tS9fPGhp2XqvCAUTG5gHEjUXQMaDHEZ5yjq3DTs29x3DUNbAMJWSCPJBGpnLmCBct6bcbFqrdwMvjrFtvTFuy5Q",
  "key3": "AFKZ4uVAYe4dJoMCH3DSRmB7CSkwEWDfbUA8AwHc9oyxyNY1vkFgraBpEYFPg5EsMGHFQrKNmjUdF8jy6fq9eYT",
  "key4": "4kjyUWbnECYQbFdPkmvZhhtVfUyx6K7RYUy7fugW95LjuUBLhwuixZAr6c8Rh1E46jjr295PUbo9eP8wcN8R25Gn",
  "key5": "2bGpJWQTevDBnVXiPQxqpomRQ2F9x2bRscSfWZr5AGSLQ8LnwypxZEgq2wHLWfpJEu3URherTAkmKGwyeHmAhLT7",
  "key6": "2XqBU2CQkEPcncrqMmm9Vp2KkgiAbN7ReriHBf3YeXrEa1kS3uXKebDhNbEQDJ4RDhgna8UwgixRDgiGAVTZCqYw",
  "key7": "2EDA8mBzHdX5ZdukBdFMWr35QSwQttVTGze4FDvCiLSvVowZ2bctbTbwBpsPqxpAe28AhuQBohm3BsLBrZ9wZSz2",
  "key8": "2L3g5bx5DSpartVpdCe3iCqpV4De3wUA2FyupxK246wec4bpq23hm5fzNLYVmkZQu7gy9cXLuuSVMpMipyAu5UBB",
  "key9": "eEYw23EVVdJ9RoE12Pd6q5GqsYmnN5czNLQYB2mss6pLMU2ra5zwCYhE3H8xMcwmBazjTbJ1vnhbeQ6JWd25xuz",
  "key10": "2KcVPcmfysnF1vGrVoqAzqgoS9mt7ixZergtgS2MenDwpJhXXkkov6oFen6oR7ai8TUSGxE31sWeEoK26mmU1C9L",
  "key11": "5pczApffVQoeze9XYxAp4x88WfG4NxuXr466U1YYATUxq8B7HEA1DFhQxQjCPgjvuCEAXcM2tF5WQXWs1tHWvNmx",
  "key12": "26RQK7pxo5RpW9btjEz4qeL5CDRTLPfKU8EszQjHLEFZVp7SLCQgP9MwgJmwGk33JeSaKMuBq9qbo6hePKtoH41w",
  "key13": "5EcDMNGRncKTL5tBbd5JBp4p1d44t5cdAixGC8ZfyoFT2HeR4Ad5nvdTzhcqU8uFQn2XuTi21gmtvNFxUxwicqLG",
  "key14": "4DTnDmjqYsYvH6hmLh9wSd4YEqHNioFjonG9pzUY5TBX1mgC75N5hBGGKfFr5m7TFYQLy8obpPzHCquuY6X5mrew",
  "key15": "2Ca3cGhUtTPK4nuV9iDNKpKr6mhS5n7EcPEA4CgQaDBvrvMiTVMeVTyNgbgm2gY9fVDZ6D8WfqJ23ByNkYCEQKRE",
  "key16": "5MSv68oMQ89aNBKBxiG4UXU8axG3cWLJpKpVBMfpbhKf8JY1rYG8JKfyGS51DmeNUTB7HGBVdrzN388M5TVcdQns",
  "key17": "5NoCgHvertXkK6rCWSAouKYdSBDHMVDkmCnc31x72E6B88V9YCDpWRRL1oqoj6AJeKhd4MugzJCVCX6rgme7DE3q",
  "key18": "5X9ZyJ5wQcjrb8syvzpxWXvsLzXYGfytMXqYvs8Xkg3h7qMdWSAgQkNnX3iEuNHfBoPS4Fh3Q7tjrV6Enu3SftJe",
  "key19": "39XhNNvfnTX6Y3AJbJJREb7d3N9QqdYdEAbVV9Z8jxgfG1Qi4nWV9KBZArvB4VqRxUtWpExg9wknKL1u2dmDYaE1",
  "key20": "KTRjyZie7mYQgDfG8j4kqYA4yiu6CqEMujEQ5aMBqJTtStYmvmWAAGVw1Dh8UjnufScHfN1Skt3MedZiiBnyY18",
  "key21": "4JnvbcCXUWtYz31Fu7MQcUo7kEZqcxw5ecbMmuW88gWHC88foAvoTD1p1wLmLjkTwEMGoKFvDE56A4bTY6TmVrSp",
  "key22": "4tvXKQkjJ7h4k1fNPogUvG6y5zbjRvoCnm9jnSa99D2e8943Q8jt57ZvbsSaPZxmZXMgAd5apV1phGQx5A6uKcFH",
  "key23": "5Ppyb5kySGEXo87xZu2ZfP9QtJhCydJFwU4w93siepMoMbumzDNrmLM3SykhqcQn5uoTe1QMuAKNxRbAEGPadnqT",
  "key24": "ocsYfQvm8eRn1cu8wR4eG7axxm6WXikSWkSNs9aTqZJ9TiKTFvMvfFpwenrTChThgZMkEe8zmdVMSt1jeGtT86A",
  "key25": "354UCzWVxjSD3qyzdSTA2AYLWPtUagy6MrrDxnfU7qDdTSUFP4Y7BjVxSq4xQRURMnbJFZVbBkvf8JAM4N2MxMDw",
  "key26": "2zUr8drogG8zFRh2oxUc3U9K2PZ7Bv96gmg98SG1ykoABBfv7xYjNb3ZcLZp38RYTPYvVyAAN4oCgEDdQ35YZSGZ",
  "key27": "4tVkhNQ4L8PLfFCnhih2R4ft68Gg4j81FPMauJmTAAiKhxVwKiz5MSqj6USLif5zdEdtMSouLxR1AiN4SL1BDNg8",
  "key28": "2P43j7htAmLqs26tjbLtUTUNHhzgQ7r7iaekb7fcgvRc7Bjnf42TKXeWrD3eQ9z36pvV2o1yxMRWNcJSx4i3ekzn",
  "key29": "5LUB7AG3J7mDAxFk1vr5q85nTtkJzZGet1bfKkrRz6vHepAjk5v9nsfpYftkYncP4uJYSvQ3459z3ZVBKro5yJH2",
  "key30": "2rJJJVLpYwEmQFWmoT4WjN3Eo4d4WhCT5DZyYm5t7Ak5PeoBRSbTVYKgiKTmudS8poUR1AcPNcxH8SVZcpmE4mTP",
  "key31": "42idfSEoh2wGL1bQvvP2sLXb6EURvUyqbBsPEU9mSkEz9vQBJxM3tA8JdGqcRftGpB39v3b2J31N77bhWVVjBwRn",
  "key32": "3GGWRDNx3UD1HXfVvr9NjhBQtMvQvguL5FgKx8qgrMnxpZzSXxTpxX2YaiU9MEc62hNgANgUjssSxov5hjPHXrTG",
  "key33": "5wqfQjsDLv8hYsweeHfzNUoYWrcqnob1oGEjdkbBQjp9dyKbeXsRacoFaNKbVW1bmphAAJGZHdCPi2c6L8PhUD6W",
  "key34": "2b83Zi1bEC3hshviAFcQqC7FeH5gTLmV4YoboB692u5SGBQ1vjLMcFh8zp8eXrS7J9pwgyrx9bc1ddPCLTzmxSKL",
  "key35": "4Pwh3VhYdC3CbUqo5bW7crw7LEyeEUgQ7rbSWzGSY5fCn6GJLpiCEzYxX9xCdrca9KcACb1tBV1CiU9ysenwYmET",
  "key36": "3o18guS4QsEeNoLWGkFPsw3xg6s9uemmAKzTjYpaWUjwRrYnB56pmYAq7DqwYVhCWVCfygNrStxqnay7xLTaNhVk",
  "key37": "66ikeTvjsjKa5WjmfVmCt7KsGRDF3DK6DfFpqq1tAp2AYsTN4pWhLby51twQu1wmZVh98F58WHfhTQD4JHsDSsAf",
  "key38": "3R8jBacV1RGbnDYugf5ct3yFAigqeU44ufktNamCj42JrRkqtP51tnptRYPpkPiRisPzAChKeAeehd2YdHcBtBzH",
  "key39": "47Uq9R4rVhMZgVBt3igMAmobVwqAbMF51UK8DoWZp7jk4uGARr13bSEfAKLoiNfgGeznBsmo1eVqu4fdCSmhs3QX",
  "key40": "5jNpMx5J3KzJaenRXXs1qqNGgzDtuLhc8yxjh6CDV52YiNuqoaGSMgtvH1K1y2uWMnkJYLbyoPKutd11HFTcNWrx",
  "key41": "eKbajkcMioNE9nFmtYMb68ANp1dQsGAqyq4b1p7CKwmn8L9uREqw1r3jBDA9zce8Q93w3vCYnvCH88WseN82ddb",
  "key42": "3CnK3SJ3eMoJtbkvx45XHPdduZrEfDW5kjds3iUtmqLCN7VgTGHWNWUXt9sdNzP8Yw1zmRoEvMBSv9kb6gRGpjbo",
  "key43": "2RmTKWuoEaF1CvkSCG681XvY5xozSfyoCHsyhuniEJjMns1wdWjw3FaLGjcPGofQ1hb2b8xUHi7WQg6s7yasjz4D",
  "key44": "6iaPG4eBM4MT42Gxx2ghm5fJxrvJcGf8kZDUamUPmiMXMymCKMfrM4zERKSJHdzBEgBkhoMANGwzFpanyY69XQa",
  "key45": "53p71AJYtBXwqGjobvur5pMUPQNLpA1btDHCRLqYYihvySLCqA99ZDXANEaQUCxBKwnhiw1Y3Knm9yBuRCKt4LJJ",
  "key46": "3VUXpUcQs1Gzkn23p1GB8djZBKxSzuAGCRdmNVvb32RcJvnJRS75kejestyitRz3ztfa1cuASsFWEexAAPJjwgg8",
  "key47": "4dG9RUsVdTebrSPARuTzoMFpMmMqyWrCXbTiJdqEA6XLMgZjVtXYUfFiMHXz8j1EZCTpkqMWpqXFTN9c1NxLbCFQ",
  "key48": "5hxbXsTPPLcV87ijtRJnQQvqXtbbJ8dQsGkKYj6uge4yVUKkKKBahQoc17PgciqBobAFDRxB8axoGGG6ALLH2uR6",
  "key49": "64R7TqdQxEBysEEeUHUeLKy8HqEP6i3RtVTvjiUqFjk7to3mrifTmsqXXdw81UHTxhZ8bnQYXCyyKLo6DGJ17bZi"
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
