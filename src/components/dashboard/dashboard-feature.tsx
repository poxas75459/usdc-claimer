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
    "223e8W4ZL4B4k4AL9QrjAAMcLFJFwnGa3BHTW8WDdAZL5KC5KU5sGPCfKwP8GS5MGkEYEGDCSeg7BeVEevwnEibj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jv34hXR5Ayg3zMB9c28GJJzfwBAbMwdARaAJDT6SnFFZXLwDz4rEqDSR6w3fUEN9JdXCtaYyYKvxMGPHPNHgRwh",
  "key1": "3LnHLgiVncCNjK4je7Dpnr9skHQCHHdHjLetsSAqDChRNsnNssPDjSxJ8b4VyPZePm5noD34mHpJp7cUozMS6mMk",
  "key2": "58Uq7dRLjN11HBhU7AWLfoxpR7NdngtkDx65r9STEwtHa1ZvQv56Rf1Q18Gxz4RUxT11uYRtrtm388iFq8NqPTLj",
  "key3": "4nBaynYMrMy91AmNnKZjGoCBrgNrxtS2fsFes5HViGN8Co6q6yXs6nS2qCtacp4p1EBG1V3G5seFk2x8PvqRNKYU",
  "key4": "2JKyuvnoMNy9VEB7KAWo8SQzEx7jEZyzVgwGZRZ1WZaPcHmrcUj5sDtVjuudEoP9VHg99L9Yic4F5nD71xTCASmm",
  "key5": "4dBk6VZu417wJbRvTehe3A5HJxfKbMj49NUQXZLbMmAC7iyoBnHsyWBKyVMsYHSrppLicoKJtHsAspesoTiuZuKv",
  "key6": "2Lb7oT3aMhuHo3ywRe4GRvvhFSH4TRxwtBYpgdXc7kr11aVPfDgx4Gh5tNpgLfXUpBCjrMZZGTjvPTtag6Q1WPRs",
  "key7": "55s5YbMM8ejGuhCivRatiqpiT17BtfuYnUwCh44KZbvF5Srk6qmVRwWsEXJeG6ACeySQ5XSZg9XhGRKn7WPRsBsU",
  "key8": "4npJyec8HXtwrHyBa4x3s4AHtSeiye1zk45skSLb9Kvr4UH2Q9W5gE6vfuJg8wA4fWy1i3nHo2wBGNuq2ThTFPSm",
  "key9": "jQBvi3bmg1LrcwEhLv8rDbYgeBzQRjBic2U772m9qL3CiZU8htHAEyyn17zHkBxoh4eWjdRFuswfAUf8nYz3dcW",
  "key10": "m5yTx8hpJTjq4EVBny3wg42vS1jNPuMmuTgZPmJyJq1jSrxZT2ufjQux7M1PUxPoRSPSqxjz2kSyhAW4aeq7pHt",
  "key11": "336P7UuWThyXhcGm6433D3Q7VEZPuiUXDjGA6uKorFPk1APPCDREfYEfi4A1sbwbaC7GoQegpqTtnwsJff83wFZM",
  "key12": "2E4qjCMgGqs5RfVLhM8ZU2QF6ZHrH9Vt3yvgU2iCi5QKSR2L76nXu6R6xBxyqNNgLsv7RqfkMgWEbL9pPd7bcgR6",
  "key13": "5B8PdWuUz3SbVSFj9Hn19Te69iN6N3CytzrRXw7Ctb5WsaXagRiu5gvseMmbXuqqoiyp57EF7pz49bs3Pv76Ceq8",
  "key14": "3GGzyyNrofi87QB8dN67LzoPyysigJpBUnWFP9WgomGKmaxLzhny7TmAh64x6Tgk8xajPirwEyvfQxqRUoEccLNJ",
  "key15": "4geySsUk4drtFHyzY5e9uHKD2aE5wiR2EuxkAVmvVZPSLzVM54hnf7GVqSd25seNDgaCZf6FSJ1A219tQenQz9Ah",
  "key16": "2aP2JjuYaHya5ELekrZw9a2WqV5TiYRnvr6UBndNqjxyb6wvp3pPfUQiuqq9WtEt2bAC9ovZ3o24SsdQ9u9gJnsL",
  "key17": "5efiJsDZBYwwwR27cRQv4RCzNV1sAQYGUD2M9mnArCneaTdaVjj4ATV8DK8AHcNB8YD41N6JYQe6FjrqWKvkRgzM",
  "key18": "4Jj3gUnJEKPa1yKQwjJXKLvkjGcYq8n2saxmT43vhUeEkBkBzMmV7xuGDUfQwBcx9pSM1CXkpAMZBTp6Wo1ZC4xw",
  "key19": "2dm2mEtoNSu7rCUwwzPHFZxFRBLmzVtina1nBBiWVVfjuMMxosH9MEPJ2GTTLNCbFKeA9K5n4DtPAvsnNevrDSAN",
  "key20": "61mWey8Hsf2m2E3NBVXLJqg6x4pnaDwdh8fEgYwxyRiirQmSSJZgh4hGrXHtL5gRdsss4QLEWUGxrWWmrHDf9p3o",
  "key21": "67ejLXmwfpPMwMv9JK52Csh5aqmsajpVkF6QedjegphEJc2mjdqRitYfjZB1FGQgoFdyLLh2teB9UthqCh88NSYS",
  "key22": "2R47pj1vG7i7LT8p9Hi3L9ZiBun5AJrYmEnrH16kSjFdj8n2muc8FRj79UZz9JE5YhxJbChNnLoAVMwBLDaXNtrx",
  "key23": "4dnBqYvF5XqSsykgepLTaUuiUb5rT45uR3c8NykyDtpDiYdokuHDetaS5csfqeaNNGNoYyAUSEyLZ5wz3NGgXSPr",
  "key24": "3RgNR4G3wm58oVnxZ7T8sN5uVUyMYsqm4152P1Uybn8osJkYeei1hNJUWuE8Z9iv2vRZAaLyaR2SkVukCL4HE8z7",
  "key25": "2uNiymD149ZGke1hEpu4SV4SpBTYfWge3UUKa1EmYc9c5ZA18r2Dfkur7CDzK4K7oX4qY63HHDaUru1sYbvBe7uF",
  "key26": "33ugcxRJCfY65K8Xdj6VRFM2jJ8GYzMpibFeeLtXogcaTWEEVxQQsCY9ZbZLc2smSSRFTEggkBJbApVT3cdFY9P5",
  "key27": "2VbT1wByJ7iXSkGYqw5k8rbYh18vYsX9gc2pJKGszD4BZ6uLJsiyka7g4C9JZEeLiwChDo1YUNXrQ2VWdDgj1hKC",
  "key28": "3Lvtwwpood8Az4yicoi2xqXWxTn6KKF5edHkwGfuuDR2XyVE5rhVULCVUqwqRkWRPCEx9KUVfwDjL7WMsQDUh95K",
  "key29": "tWeYVpcb5jCoFG2JLC8hkR69GaBDnxcVQErg2VvJWbQzcv4dB2FaFEPMTr18a6v4href5FfNNNKqYjgzW4m8mAJ",
  "key30": "ztmrbS9zTYqdX4ugqss4LEwUPvP5nX99ThGUheKpC6XcGXEHFZ3q3AYDhf3AZpCW1WswSa4Q1soin3W3AjZiDDD",
  "key31": "5wZFZx5LxYq3SKYowrLHgmdSs4bm5kCDwcPA4zi9mbSgHJSPyWkQvPqvL7eedLDwvcRAUeGrFEAF27K47J1aA8Ns",
  "key32": "um59bDZQP53WK1FVaDKpFhR7xhGQpPygqF9KgMvrVinAHVW931QrtMssTEQp3wa2DVt9H6xkM6z2YGCaRRW3NHJ",
  "key33": "49z3KwtdHd57btx9J5ALPd9UB8fzDUmsTJLHoVNYQXiBJ5mny1xYCuNTd1q1MfnfVsdrL5oCegGXZVs17kGmmWkv",
  "key34": "UZE6oMpmRfXjCPSJaFSdc8GWonuUJreZysrp3puAQoJQEvBRJNxpJgqoQUPhLvzFWRDsJPeSWtoREoqjruamf4f",
  "key35": "5tKrLkw3ah9YVkQ9B7QUNXuwetLVkjQswXq2qqDRRuxxk81nNa2U99U7kmZjDhi6XxGLPYvep9wcDt8ZntmDByb1",
  "key36": "4w6Wj9Lbqo6BBoEhy8iEey7hpm3Y5bXrRK8i1yZmXbG7RDWKYfcPyszXKDPhEHmV9sLPG8M7Y7RYFBuYPtvi18Cq",
  "key37": "4qB8rAqq1pppvFe7Y16XzobrUw9EhqBZSqMzy66xLYBQP2y2mpQn8KfNwUkzRQ4Ai3vAHLhLEfCh8dCTbK9AZYY4",
  "key38": "3HCd4pMDz8i6RMZWCpABEdHyf5MXBoJt8XjMVpTMiMTamPXqjkWKCWhWAQK1oo2jZiSvdGG2vcw64yvpdEs2aoGz",
  "key39": "5UGM3Gvbis9dVCrtqfQ2bUoGHTEJx4udXxaVu27VHiPFgqUNz3fyb2TGPUegkArJ43iMQJQ9Q6q8sgq3KQFcU1rH",
  "key40": "3gXMRJk9YibiFfR8yQUvPRnHiF6RHgzpnQJhNLAZaiw5vizNiw3PUKFPGQoKL8jDDzqGga43LPJp64BKy3g93eFq",
  "key41": "3SUBdY9qsfit1Fm8upDeTWVgLmr6Y84w7RN3wHfUSDtM1s5bKt8QAim5yFNVFGyRt3pzbvSNmynDj25P1NBEaZpx",
  "key42": "22TB5rgcw5r6Z3vU74x3uomCHVCu7e9aM8ggucbaHJC7QUu63SxiW15kmQHK2NfaQzVwY4F1H9tXBYFv3eQawA2M",
  "key43": "5ezbwC22sDx6mqiZA48xpP889iVu3thk9kkBsE7nzWZcZgdcxSCpUAkLSKfEm2pZP3NHrG336NPrjSGWFFf1evnX",
  "key44": "2VgK291f5GLs68E8ZWUn7fwt3jSoXEANrbcDe28VTSnj2uNTLGTs9xCMBXNj5JWtwHifz12cmLLUfWsM27oGqd83",
  "key45": "4L6hfxsCZVwgDCXVvUN6TDTGjjbseqUyjBvvGErFMkjfqnxChGzgzbi7DPjLjdTTYRvm7aRxajP6ruB1X69vWaeT",
  "key46": "4iDT4omTCy7ecDZLYHhSjJ8RopH76TADHTaNhZfK9FCfPAFm8ksa8USBdhn6hFtw2U4thH61gEuzsnZ6reRdJe5r",
  "key47": "3ZHUgx4ev6izNBwhXbq6r5GPsHBCfJQrGJTcaMhQMxodjNkwj9FCZm8Eg3j9C2Axuw7NHVGN1u8ASn4p1GYGZtur",
  "key48": "53Z1qbtiLrviyvSQBCPjCdeuKPwCGeHFEVvrpmm7vLuMWbeixx4M75S9L3v7u7dJ6WchoympPETU73VLdtc3v7sH"
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
