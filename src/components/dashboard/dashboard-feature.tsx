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
    "5vVJWH9ad5QvynAwPExW6uoKwrfeE8J6UhZjjfGz2MPcZiNLmRFNcqs8yU1MabNJdos3W7RpVxJkTrwFfUmS96dz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3REFsrpyj5EcKkZSYhAFShDUrWt3qup6QtWcs7dCHULeGPbuMumxT5pCZyE6fQXPP73dHuDhzpVeZfZD7UjoBFon",
  "key1": "ePoVBsUNf1oJovC6M7dqUFDTsZnid6LLoYsk6k3FiShzLAGifAHLnR8qarc2aQxHuAWTMw8DfgHTpQUZdUPxHK6",
  "key2": "5eUnaJSKgSXDwd6EZ6yppbN5LNTvhwrqk81AAZ6X9nNtMR5L6eDG3ttVSuE2wzQkjSPkj3D53YkVdacHywwfbkJ1",
  "key3": "5APF9wNjgFDwmzi8rT4mqUAgyqMzhiDNXXdBuDRdN41JhdtJc69QpDxuU8frW9vKU3btK9Z4ZikwG4AqgkpSsokf",
  "key4": "4GxJpRuGjuq6CQDXKPqWr2TkW6gKupZMPhcbwymS8ci9qQBqMaoLuEJNTtEg65EXU1wFjNcTh6wpdtF98LXbnVXf",
  "key5": "Wb8KZQpjxF3iwBvswevdddyTttxhaDDMTzHAgkLPsfxTcoEKGDAr61eiPk9cyejaH9CNb9tUpRiDEEdaxN9H4Wx",
  "key6": "3aJy2pj4CwsXDcCQ8pryBgB8YVRAxWhp6p3GsDga5WtAN4VAoTWRpnADQ7x49PAK6wh4GsVDdJr5hnPxdGDkgeHx",
  "key7": "ZrZ5YwV56nNmcAUS5KwTmmkoLRF7E8sgF4JGH57e6486mBYjw5JJDsFA7QcqWpt93caLXUs56QwZAEhuTjT3Y3y",
  "key8": "jiJ2nwoFP5EMwFhgvCaAgMi3VvaQvoZSowne1SPro8eRvf8wh886kd6pSB1Hjv4vWF3X1EKzFfGZzE8G6CHMQTZ",
  "key9": "5NojCs4Xov3b6RTUiMkbDgCxzAmMBvKujDMaUeZtaoUJvCYq3WJSxjnhP7zFSVRmraHdjdD4oSx7cU1My63z1nzx",
  "key10": "4JvxNo62A1W4mNaSTvVbs8ZCVE17Ehshynh8ZdoWMDWsv1RMTZ9jDo76E66vyW8bhRazPYckErjKxLc3SLTLLMGC",
  "key11": "5QCGo2oHa7Nnae1EfENmCvVvXoeTmcxRSK3apMHwZnBTXEFNfg1bJdy8UmFAWBgmgkhtQs1Bg9ucC1XZeWk7qFyE",
  "key12": "28ftDBfDJNxp7uFksVN79LBjm9TX7dfrKeaRojMcBjjSi88bdX2DJexn2nUPnkkHtZbZf7pe921tzDHivyaFMXZm",
  "key13": "5d5emzy9h48qdxdxh69GfhzffT8QCc7R7v5MnmqdCSmLhaVAdRcLz8pbG7CKetZfq7qgP6jiQA3TvFvyAVyyCjxy",
  "key14": "4myCUi1yzD6KiTkEUX9J5tt9kk5KenY9Gnvg7GCi2KYkuaEpPg9UUCTHXdr1vPxNBHiPe54XSYo5uiTL3C3vZnUx",
  "key15": "4NWUza8YkgDPdiAnSncYPrESNSCopAW88XsswsGa4SWK4jb2DoM5hEtdiZrSmfjVZbD87qTcDoF8gQse8hk4EzdF",
  "key16": "43nGAJNmwoQ1kYuVSACFWCXsgpHo5W9qyaNXUvpYswaVg91d1aFmhATRPB7wNMsKF2JqYfRQLixchHaRCyMNbdjf",
  "key17": "4zhHwmZYmbae1keMEMusQGChP4cAktNNXf98R3futwAimkpK73oxE8QhF8EKke4WSLtq26UTqFJteUGDZ9p7oZSp",
  "key18": "2qwbSscRciCNWxjXVm22RxhxWd4xgggRQHNB5AtsZEXDCCbhJ5nhNyYdr9BBJ61UxegfyNn1uUjpjnhJWfZf4RGY",
  "key19": "7xeqXFijhSn4we2TFaB8gwN9RHpiT5S1Ce8Y91wrdXQjXumJnfSzFQAhzMmvRpJKXpttQdaCwiqCwNaRF2RYdbu",
  "key20": "4pdTTp4gdZKCu1QnFHzRNKhHyVppDT51sJDRZbtFRa818P7Z6uHHy7JcKojksX4DQR2aez38bpU6g5h8zX7otrAM",
  "key21": "4eK6SJwzHx3Z9XdvVWxz2vRRgCoTUCvvqgYH4LJGQdsZioUvDg2iJnJUPtTd6DPvzU9BEcRSmyixMXtFa6hs1W5u",
  "key22": "2XhpYaXsfCmuECSPpf6qXQ5tdXvtMATUZb25FxXSm97r49X5iGPbJMiqPimP8aPGLHybRhuwzRSgsedPeCf23Ha",
  "key23": "2koYhHbVwiFfqAg3wJ5q9nENpp7EiHMe3grBDdUjJqUfjxCmZBGe4wHM7FM6jku8ssPVnfeeUTCvnWbuyAtCgtEP",
  "key24": "3MQK3SXGD8Y1WvMk53g5Eohwcr1mUCw7j5Xng7K6bSyp1HAnnsEuZvK8Dp7E1GZhokakZeUCfACpEQkQCXzdhHab",
  "key25": "3ehEP5dXMeUG5NATWnGU6C6VGu6vJcmws96jwFLzZD8zdHikCugr9F9UewMYpKPFA62hvwkcwcYCR1k8jyCtwjCW",
  "key26": "3kZT4VHCPv1cHSQys87ozMm3TLmDwQi3NkofH94ryueqYrhV49a1hGhAPYLZt4LfNbY643gCduofqGzpHj5mvtgh",
  "key27": "5X3hFhTGjLGR7fxTgUHdezFKNG1srvFEu9iX86zNdQJcA3JytG1f8m2pHYCgU9PvwaB3bFqV7YMfNCEowsLNGxbM",
  "key28": "aPycm3A6W56ZHkW4fm4XCXcPsadgZKZXiAmcwWXkfDnuHopTcKeXZQS5TB44PR8WE6kjDT3DR6Ka5DKtoZ8b9t4",
  "key29": "3fByS2e1U7XkJv7D4VSqP3tUsWZmqSzc16F3zYj6yTUyAxrdaoinvt7vPqd8ZrcNHod1T22rxAjEXVJdfPHQ5azC",
  "key30": "anFY3f4WytXWumXVEdJVtfDEuiLbRhQ9YosM7Uy7aVfVy45zz3y12UcHPM1FvHdta66XzeaHRWKqWZmbaZvBWN8",
  "key31": "2ZZSRBWWfwh3P4fByuJqku4TdtrMAW7rWRYxs5XHxG8jYbKDE6D2FTtFwzKT1dSYeDizCZCMe6JK9jGm8Jq5DbLp",
  "key32": "Lh5o67w6j2kzpzaAdkLhRueN6zKLQSj4qiyc8KRAHm6bzFdhLg4LEfSHre8ZH8jCEek1Lz5btWk8KtKjbJWCySn",
  "key33": "2sSxhLmh3rcqH8Jp1XM4QSH6M6dY5YEtZDLrwaj5JcLfjDxoZituBUDcn4VMGZuELqTJKsmQ15ATjkLo5ovhjdok",
  "key34": "61ktS7eQWTMKu6neCaWaCrfNZrnRLRUjp3X5wjwGBLBdHuZ8CJsukSMxqRkTi5egpjUdvCJ86w2CoHmpjY2gPq6H",
  "key35": "563LX3yyYQHhTGpbjpVHxHXqfsNhkWGZbwtsGRNjK7Q8VYPoKiViDsDFzWsCfZs28xvzSmtj61MMzxR4YWd53KQx",
  "key36": "3deRrcKJYqG1584ZriCjAyKG3hNEVFCodtUaPvv2frno6NdAjwc2QVwiQDCWZoPiFxaBcM6jLSbGuQeFB12xnYYU",
  "key37": "4T5i7duLYsCNTobwLNEAsLdEhxKqpaGDgeQHH5oJMpETBS5swftjrXZQh8Q3Wh51oU1pyMTA3XdtWrRMJsw7DdSU",
  "key38": "1dnWpZ9mDRAnGdsQb2jcH6vxFPK1NnG13UqrRMrTh6xwMUUZd6XtJCwbpzh7Lyr3vVJ4UA3EPa4KKJHbpjZ29nm",
  "key39": "4RErgRAmrALmaopNsMvawuY8RZU8qMWQGP8aqGpgfVQYJ9ZqNxdLqfZiYtPXxtMgFBXSKreQ6mG4buJuWq8NcRvX",
  "key40": "Qb1a9tWCmhDhHPZhPeJAknZJrNzzu7CJSjJAa9v2wH2GbcmHoMWUBeMqhuJcawyVMWfaFS3BdpphWBECWtQq1r4",
  "key41": "2cAAaK8R1hUm9ASxzo5GLTnNNdkftm4RaasPoXbv8tBhBhrRLM4o3dBxPubBhEL4tWnBPRtnsWBS2vGosGi1RKYD",
  "key42": "22wF4SLbDJHYim4RM6JtydZDBYu3fwNXgiDNvxJZHi5NJR2GKchUsTMm1gPy5aWZ4tZr27uUF6gRuMG3BfuRbR77",
  "key43": "2PKSMTz6rjZEWL8SivA3sCkjm7UDd7DDFQx9VJ3Nb4cMK1a19g6vQXfnG6Hvk5gKYgCzjVs4XdeiinwzYK2rAwU1",
  "key44": "3MMp4FAvyHSaGizhCfAh8NfEQopbK7KxUzxfPcXbf2Ysjoj3QiuTKpwCTvBn7JgHWWe9sYS37hCYdGYKc8Eja8ma",
  "key45": "43rYXMDyn4jMtkPsSnz7gNAjhhJnja6yuvRrsUZRmM6c7nWYqTBAw5Lyj8Z7PzwZXMthKcAb1fxYd7NXqjujirta",
  "key46": "2S43mG59edKgiiyFdH6EtTf6n6f3CtnTp67mihKjNxqxi7CxZ4aNCBUpdrgkPdKhD8ywHK5aMGFK1UAZYr3GudXm",
  "key47": "2X8LWoacErXDugx67wWFiH9enjh2KHxDgM7KozDK4rf3pXU1tGVVpS623bjJqFdaNMUxjLnHtXwFdDp8GCjnGC3c",
  "key48": "4KBL8UbwatabJijBXXXUcbtVXSKZCWBq2E7y7oWRFuAtYznWCGx3xNFV1pCbUcNhA9QStP6XtGSVFNPaS7xGDkEY",
  "key49": "4qeQAtsBznAwAuiyuGCGrUKYWrgVQUdAMNZzovEcNqpxb61beFCikwb556WBW1iAiGyQvJkYyAHD2aRWh23pQDLX"
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
