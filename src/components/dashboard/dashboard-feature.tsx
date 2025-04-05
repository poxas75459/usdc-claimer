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
    "42uEgJMRUxxhv5oWezTPvKv4fhRwQkYhQ2vgsVY5pwA4rfAKZ1pTkAoHtqbRfArszYX3xwqNBpVnDeDsG8RdtNrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mAMKybEA94SHz264tNC92Pzd4oYak9bvvfHCGLSBefu334XvqWEyJjg2bTGq16jqDsCPE2Ck6H9dzuknSaPR8Rw",
  "key1": "3rmEuAdbS2bppb9QUTGPQveJkKjrt6EKLTBv16kob9Px72e82zqz3xJSWknJ5X5VbQBfow4DLXmakSCwwNkYcrgA",
  "key2": "2Y3EMiNE8b6DRKCbTitauz2KRoRjPjca6pTHSFHe6PqqgVK7id2HRrAp2DxbsMcLhs11pkMkntt7V3LAtBBJgF2Z",
  "key3": "3iLNdbmoHdsY3b7uLv3u9yDvy1YHtaru6bHqGYRafut3aBZVEofwpZNm4b8jrJSKaaRSBYfhPU5miNkrpauZX9i",
  "key4": "3moFfZbVJkxht7aK1MSRPySmKNpz7cG79gjQEXgkYZTmoSBakCUU5uHfVve85u1s2EUfqZrneioEb5acASgQ4Cse",
  "key5": "5CwJiw7oMhAsbmvByafWsKv1ouVQUNdhHVJhd6y39TLyPtCHSUKxqMDWqMSsyXbHr8TZiZ1QMKz2Jm7haKQtdocb",
  "key6": "EYRdNKdRbcZ5MHeZzEq3U6Wu1VJYEak2ofPtWcxPomgxh4CAikXJ1rPAUisPRB1T5dabMQ72u46fh446ZMrhKiS",
  "key7": "3FE4ACTRsNa9Be8wDpxJbM8xveDZxh4uYVBKioLWLarDHh2s7vQNgkfUm6dSjAAitZUeRbyMDcYhcoEp4Mch4QVq",
  "key8": "4sociqSUCJn7UfNsDiL7G7BUSMXYLxzdWE63GGyihdh8s7986ZhtdDSyHrKEH1mnNsq7jkxqrNZx2sA4wBHgTK8r",
  "key9": "5cEEdPhB7yarq7RhKQ2NDebmhDdLS1QRQ7HoDfxETmTNMQWRDn5tNLhs4PaR7mbkHNEn4xKsVAuEhJjGTWSjjP1J",
  "key10": "4UmRxpWidtRH33v5KZ9EmYFNQu7qYLzH4WWcQ6bUZSERhUBMXH61qvwLU1mLWeZQTzrughaG7VCoSJJkStQY74zo",
  "key11": "5n3drs3MpUsLveg2fvBwK3YdkWz3MkMYCHuqG6desgZL6zYkBcu1E2WLd4UU4SxrNsq3egr7gkQVG5hULvu3Pwr",
  "key12": "i9sMBBr2nfcBVos2PNnU6owHZWczGeuTK6mKbdn5ZFq8G6iKPmQiv4qpRGeXtmNrZT1mXkturT4soUDu5wcW9M8",
  "key13": "4T39z9gLvRR2txqUz3QrwWLoyFsQ5vJUDisen3gxoTp4c4eJD7ooGoK7BB81ixfLYPdAso6qUA1nUm7i1kQMbVre",
  "key14": "2iwEvfhGw9dK23mrrc3iAHFGjCnAXpuJxm1My6FcNL5C7oaHapPX2As1rUUmGmZHehzdxMzFuLJvTXZxBZbpVRb8",
  "key15": "52ASm7WvqEeEFtAXafVGqWgk1WHpDtXnJfwhV9pFan8nkRcCX3WtZkMkBxp4oPA325HADfefWZogMpPsj8EHVYq5",
  "key16": "3ypY9AMWZwF7uzjQtZFFLoMay12FWpxSmHrTpocVLryezexStikeswAzXK8o732FEDSWFZFinzZtrjbvRYdidhn9",
  "key17": "4dwyR3WvwYoL8ZJRfF6cZzynegwBDzno9VLzositrcQeA2bmre5QtLjvsHYpuiGG1qzQrBVcv1tnjDLiWsEpKDKw",
  "key18": "4DVMAG6Pe89NserJF5EbaDV9haasJvqAjQKWSLJezH58WCT7PtzttZoUjhE1wv6HU3oBRJMVebagJeojLGj8k9rU",
  "key19": "5cBuyjwRD11m1KJ1X187teTKz2jmrabPnKFtEDNbyTx6LNm1XYAZzL4atBsAhUu1uoK1x3XPHtdQjaGuS8ZL4jms",
  "key20": "BeBkf9F8RyEEwaoVUpzqqTN6deEaMHEoYg2FYAfQDFreU1HeHWeWa6nsczSBCKfxKq97pAa9wnJQst2yvDoLsqf",
  "key21": "2DX6QnVUo1QYYQmDhHdStx78abKZN32u3Ldf6qrBgG9v1gHtrW4yzMfTSX8i8bY4vEmdY4cB7sHYgawV44sqt8rN",
  "key22": "2Bdt5AFF1PzPzhaPwbuguZuaTs1uLK3Lh1UhTAcPUQDtse1kgF1NJFHDvAzqpPeN1wEar4kW7jPizcYGjRFjJqN5",
  "key23": "58gy9yBi7oXWpu8QtaUbMeVdE6eRx8Y31xVFBVrUwsZD2reNFyCDyDfScbEYBop8QDfbru4HWT9EJeL7zLmsta8R",
  "key24": "3T2VvRpk8BnPeQDmWRNt52TX7hBjDnjBmFtbjM79KuXCMw6tYCk2meax7wCEPf6rFaxHjL4irhSFzg9FEmhcVre5",
  "key25": "2VXGAa15HKSepKZvzcBMSac46SaagDAhDastMru2yGYQhP8exFinR5fk1NGMexNUcgDx5mhJjRcAg91aiXCRa4eL",
  "key26": "2aoph6vSwF7nbJ3XeQju7uTf8fvBSXEo97p2ixsFwo3egrqKN9xR32rrpi7PAuEGJqRLeTJCpCYoaAoJ9bcDGoPW",
  "key27": "52hU64GicZt2tbSziqceXe5BFQRd5qKqh9uenwQ66ksMMr1BK9MzhX7vpwCVqgu7GvGNrYPYjSQtaExad7bTuUHr",
  "key28": "5B6MtUGTTvkFjEznMwmciJ3gsKmh6UjTdawVyr4MGU5ZKC2xraEoaG2wyGTfDx5UQJZZc9gs5RFCDcaaTpZRGxxg",
  "key29": "4vRJi3fcR8k1FF4NBmrL8wTUHsu3dENyUv4bV18DAJUxrLUymWE3r8N9N1zpFHFKhANcvfF2guxkyz6XYF3reFcE",
  "key30": "5VzVnAHFq1GgHuTaf5sQJnUDNSruqSFREFXT2vXyTf4uLNWxBiud79j8vkUZ1eCwm5Y3QVXXdXdpAmU1qYTWRHER",
  "key31": "3wtfd3swkJWQqJg43PTZdojeEW3AMwFYuPH4A6BG81LJmAPxseckdJpED4WfWx8TzYX1SzBb9ccW9T21SbQTbu9Y",
  "key32": "kFcZjeC1tpjXZGuoeTBqNSgLQDsPKezHb28DyHLLTX2wqHSYa541mHp92yddyVXGXU5UGG65NhQceb5EW82kLQ6",
  "key33": "5wFYDBvSHiYPAMVCBnDgmwa9aWnuVizEXDLZEVMY9TgqvKszTomzgSPRi2FUnBCAfN6oneWSBaQTrjnJtuDoE89H",
  "key34": "2pcWjrAwPfAgx32myAJCt4dv4RKSP4GHRpu8NDqycPJ4RqXmrFHCKDedgdyMPxVWztreVxm2aE3oYDNUPeYUoGmn",
  "key35": "5D1tAKxCAHwGd1VDwzWQUmkDWftD8qwwp6RtEtMfExsMXXsreviLRMYB4o9mduufzewL2rnnEEauqQh5d6oexuoZ",
  "key36": "TH12EBPLwBKDaJoCSYXXdJib54VzkvnVt8EKnAcgtin48KMj1hEfhzYimZt4HsixWNRvJon9uysdguPxoV3FC7f",
  "key37": "27q4DAFNBYiEDQpEbaqABggdwfyevsRWyyoACNR4DxUQ5o1RrDecXw63XSe14GRvNXMrggA8XqGCMWYNuQGXHN7d",
  "key38": "5TtitsvzwWjyZRogXYvtTzj7BBxbk4RjF182Yn6TBXqwj4f9JmH6G44dnvRe26exmvK2tZrbnCvfpXY5x4SFZNR3",
  "key39": "2ThhdPk9pXZdJ8cMwqwVgfY2jhXeT8YN2PAffrnqgoTaqJK6PVmUjM5XJHYzX4nhEVwdH9kUEnUyKnoNxdLucuDV",
  "key40": "yALnRwW4fTZvt4JdQA6kooFcyNMcVQ21wo1WmY99ch64bPMbGUm3zdD6eREHDFFEfMAGbcVMkygWcRJ3pQtwbts",
  "key41": "4hFMNCEThQXs14cxnPoqZWy7RtdLe6a7qUwnt6xu7d4KfikD7Zsmb4iCPNT7EQYdmaGo13FEUH41Q5PnQm8tqVdP",
  "key42": "5v8HKR89DgQX9nAdzQ9TCudJksfsBojMaPkARLDnEc8Ay6h4fi4kKAPHheycLBRGQ73NiS9n83fWD5XAnznasNxQ",
  "key43": "5fHQrFH2LJ2DwTbve4sZVuk4JaSNe5AYbYMUu9f9X3aeP5m5gzwHpKyAw66R1Lb8hayWJcvwBsNiwagSMZonZj9t",
  "key44": "3A3AihLS5pJ6Ud8r6Kaqjt5ELjwWFu3KPXBTvccofTHSZVehyk5mzbFd265MEJEtxNToh1T3uphTVfGzuZMwc4Mc",
  "key45": "Bjr7jDxfmhtiWnVjUXBUDVUAQ9z6v4KBNucekfVxEyRF3gjriRWFsinW7r3ztgiMn8EvNiKEANEP48aeuaVYsaV",
  "key46": "26NxXj7ZwkxVAUGZSEFdKk3muAduQHxUnHsV9hgS2Q9nev1R6Nmj6tfropWt9xnkb5UBUTvYzk5x3YAEQDzLV4Vq",
  "key47": "3xTXevY72jntotu3JMTHv56eSVx8G5sB4gAnqfYgFPNBkHA3rAnSb9x9sDSoLQqyfGLkUvEwXGGRFCmcaPGUZHBs"
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
