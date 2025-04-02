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
    "4XiBNw33QGqqTkdUhv1dLpYFv2xae9cHwa7kmkGALEv7fBUq25SRHbYYmiDXw7EwVrgwJrbV9Qdsdh6aGrcmFagY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2116FRQsujjvmWSNVSHDGr9HxaLNhyBzZexCGKGSt8U8UJy2Mi2t3NfZavrWXn2CA4U4MXb2sZzLu5hvViavhp8L",
  "key1": "43FHLh8KUGb13HXHszCCXrUAwCALmt24x2tNiyHUYDQYUizZCED6iMy7Y8VqaistZkAFFfKYQqNtbhTJfi3U4M4J",
  "key2": "3qCHi9YVpCNZvx3E4nAjXsEapMSbz4vHea93imzBfsHTx3jLE1Me6DSih8K5meG5B4iMZW4jnoxuhtSSaeaADmyv",
  "key3": "2PdwgwQcU814SReXttkwEGQziP4kLbf1BF93eLP4gATWuK3McakdQhy4wjXMyBTZ2QkwoCYjsgzj9J3aZPCTSyoM",
  "key4": "E8Fzx9QtyU3C8oyNGrb9ZqKSCEvVxeupqAEpVdbLQwtRNT8CHJASYTzLN1dHoyWeBL9tykSCRqVqPZHjziLFHgy",
  "key5": "B8tMdEjF1b5bdoKGoBajhrmWk7Gbvwi7jkVR5GJqK7PhpN9N7nCbtqJK8TkLxmZox2sErkAvELBAdL8rUePPaz7",
  "key6": "2C5RpZ4KgLP3qnue1CQS64rKfRmBHctBFGgTB5rZ5qkvgjYmpuCvMPiWia1ZHYRvwX64j5pqSsjRVZXYr61kEq8V",
  "key7": "UAKn2UKtovvHxA4erAtn8f7PLD3vhiYTMoJnfh8nK13e1sDVsFD1ZPCaXUouoizptbceTxSrpBQqVmPKFNCsQ6g",
  "key8": "3BzFWfKKWqof36y6Qb7HPYXnUif3s6T4MwrvDTSBoPMgJ12jMrT9fSKPhyaX83JakNHMqX5BEcZjFpA4MQ5swkC7",
  "key9": "24mJu1VfES8M9uLA4rpjS3ayPTRF1NQeiJ2aor7xj7WiizzoJqgQFzCSDiX6WQdvYRZzMSmfzDbjstu9WJsiLw6v",
  "key10": "5EQjcYY6tthVac7De7FRX4fxEApAFNDaGTz3LknMT9aTKwDHK9tZcnkkTa1wWgKtz2YJSKAaTRwVnD2KGDzS5MMc",
  "key11": "2tgUGCGkW3Ds1hiBKAoUcDauQoAZNMkZMojCCJJYnEbqXJiaW244qSBUF2LrDkS82SmpX1yM26H8yMVJuFC72KDm",
  "key12": "2uCMYVGWpVrvhdSeg7LexKaxHup1KFtVSWJfFnQiokZ1TBHa1SX691rxYvoY7ZhQscy1KRQKGv1WxDrUUeeNc9Jr",
  "key13": "nz3sj6bHrcXDccH32yNRphY3XDJQZntYVLB8Gigzp1w5M6PRUEMSEmfEepCX8CL6JJYpbu9Mr7YbSLMrY4grmNZ",
  "key14": "44zvmHXzWdzYcbXX77S7jqWfTw4tVu1vinFgZSVp8UJkS9BvrrMjUcrA1P9vAPxVrvUTv4DoVfmshbugPddduWX8",
  "key15": "3ZUdgHmMqvJVRkYxEEWLxGsd8ysApsghcEeZYavYxNP1hGuRFymVEME91PyW3BruLE5arEUH1aeYfJxg1XADcD5M",
  "key16": "3yRnH1Hq2Y8mYZwZS5ihV7rwS9bbevsWPgcePyfDYb3pYTvKge2DWaHpT2QF2UTV1zkARhGANbFUsVE44bkYWsxg",
  "key17": "foT2mxgb5YaxZCPQShVNKm8jKWmb4nHLeBX6eDMUv5r6vkSK6xSxsv7SRp5kBs2zZdCLwMP9gW8beLYjcah7icQ",
  "key18": "3yx9BCr9DXocBVXWzzNWj1A17qqvQQJL9LxVxT45eiQQPVktKicWGbAuvCRWwSkGwgwYB35961jyQ6D5vkTmYk7L",
  "key19": "4nLb2Jb5CRoGDh8MzuifnTNEnsx8jXjTt1hrgxM2z2RQnEciAUoq8DLYrorvrZ5BB5fugFiKiJqHgwgXqR9eorBF",
  "key20": "3w2Eiz8tsTDsWGGFxvpwxcLyr4rVn6PEqw73kyPnNjQiAiuHJPbCatTCYgQiYkGkE6nhig8NsXzytMzxQnh5gCMb",
  "key21": "66jWbBYjbG2ynFhDUqeh2KDkBubtRMpgMooMk3q3Gwemrm6UNy4j2PHS9dqXnjrsJxy8bm7qsUsFJvcm637tnzbR",
  "key22": "57iuQzKkBVq1H8nhB8VyC9wKY7SU6EiuMVu4LwbrTWCSd9gbT6bhaazzrJfvnjxmdAPwJtRAwwoNskqsDzZyvHD9",
  "key23": "5663QEoB3PTQtU7ngjsWqxgeVd3dJbmRcnvLQbd2MSsK1Rs96snyc5oUV87WSNSYKe3HGm9EDoMoNezN1DnNgznw",
  "key24": "4wvUQ4pgJSvkKSHrTxbr2K2FECCqkmhtmm6RmqFZtNHtqrHVk7i6xwcgEGxoAfHDBfMiJumAH1MBCtHqWXarD771",
  "key25": "TEf5KNGsV7N2iZ7xG1ixpSn5g1GD451vxdzhiH7Lcg4SCnFefZubcFxPBEm1jf8S3VePjdaz1b2GtGu4qRRuYES",
  "key26": "5rdVQ6CnLTJ7osyvk7NMGkPadY1rCppuiFa2fRSJBZ5ZppZgwEnXspfdLQ4X3Q7zvQYiFSH45GCuviuLv1rydyNQ",
  "key27": "4Q3oYD7MgKVER5DS87Rno6tSBWNAiyPezp8UoYg4c7DeJ7FykywM9w4xBe1tG554AMUJvEycTh4dgCWSM4yPZRWo",
  "key28": "TJEYtafYqkKHJSKyuqYxGwXVq2rutk3KKcyZifJCMiPcvJTFJLw1NtpCayJpQM2hPdAqbPD9HxsZFZ4Cw29hc5H",
  "key29": "3o6jYhFsHh4bonKqruTxYnf21QtNXtYPVmggGTRKksyCgjCw91zrQ4G3PdpsG1QZYGojHwyFxGb6fjSa5kVUKsD9",
  "key30": "4pFvzZ69c61F1hZAqGNkuU2Dy863CUnxGEheZRQSyVL9a2nfe9wqQRdm8Kky5bLZkzuwuzsyqign4xJet7HSHoYc",
  "key31": "2xLBMScoiN5bFsEcx75rEk6V31e2YpQrDH7bxCUi2fKDfrSzmRrAKJPSjWcSvxjAqTKwvoaeYenju1MUxCDcpy1C",
  "key32": "5zzUH6EBeGzS5WvFXQwSrtHHAupyqg5cP6wxXxkDUfPeicJzvLf9u4amGkwrzNp1NJFvMDjYfDfPKcTESShtk4ct",
  "key33": "3wzTjooz6RbPjBgR2yFBXW7Qu4B9qbhfDzTwLJpRkvUvc6gS5J7gz2MTgPX6k8dsoGNbi8b5NrvV4MjVR8rFYRUb",
  "key34": "Ly2YHxLV1enhHHXRVLk8HLWS6QaEqTfbLXBGs6VPfMnaobWhtqesEmLYbwticstPrH6Le6raDZhGALaVmbiFeGD",
  "key35": "2qkq9GYEiEiUbCnzHPznLuG6RrQzuqTsG1qaWhukCAM4roikeEvrvfcuNwXA3BZfCh7hvVULYDHMmzjM5HSFi8a2",
  "key36": "4XQ4AN48Jsq7tK8D5CjNXAfshsdD35o4AaYDXeNS4owBzjRU76ExCfqKxk1jD47qfhT6qNS7CyfEKqYD8k33Kk6t",
  "key37": "3L9kvrZFHtn1khEYix9HUWVUPCwE8ETMrohfp8KzV79TNvkpTiziqFesTGBJ6bCabEp1K9HWbXobP6y2Rpvd9fEY",
  "key38": "4E37Rw9mSGAp8R6PaAGWxDrEKJ4jVYatr2vpgW3Qpouqwi2SSj6pvstd9b3xbYbWXbFzuU1RZZwAgJeP293zHY8e",
  "key39": "4GogAgRKRZMCdBCuQh2vmGoH1pGjZEzWTHUfnyewqT6fQYxmPw2oj5sbyv4G3DTXN7EXLnQFMq1cSEZ9d8J4unjP",
  "key40": "2GpdcqiKEEUbCoHG72avfYdXCWnwEaEYXmcnMfmecYSncrDeQVHM1sA8cdoNN1emLyUvd48pN9iKTRHigUbt5HAh",
  "key41": "23ksRYN1wjs5M8pd61dtabHSq5bSCk3kMRaDNW7GwswAogLqCLkNQmyKTtdsGgyZedDa7u7cYJaoADAzoCm4T5Lz",
  "key42": "2oJDxxTjtzZSMuW7JZoPgWJmCyBE3j7oTPBo1PQiVd9j3FiK7CFNFCyoha8nUyd1naNQzJjk2GP7Zmgxctuk3Hua",
  "key43": "4sEn5dD8hVE1h6D3bcGSzioRqyMQB4fTFs5J5p146rs6XpNW2hmapTYReM4XVDQMvYaQutnFU2JKnzH3Wmuko4ae",
  "key44": "5D8LAahbZ5nzzes9xjVL6MNABKdNmXKnAEsZnonk33XQLnMivDaiZE8MsYk9ESSgVy7wucTZNyKqb9i6gGv5ZJy8",
  "key45": "Xh3Z8vZNMWddDsHw6isWnUJZAJpLqZUDwNYLjWwau2PNLsNDzDyKMy8e7j9G44s1thfKWJfksE4Rr8PDujdyU36",
  "key46": "4iDUErFN1uNYLVQUoMvtWGPg4yRnUJQEAr1MKpaoY7ADauDfbwL3ei1vEJcajbWCgujaKyf88oDr1uNPdr1rpUz9",
  "key47": "2DgWqbNk6UwGJxuwdeg3mWAYMmiejAHk9aS3rGqEmwW8MRxhgHid1njqE6F8ao24Ccycdjpcqj2Upb2YdhWUundZ",
  "key48": "3tJRG4Sxax88tZ66Ws77pxMg8zR2sxFixMbeDLgCSsF3879rFcAFRxEnEoJiQTrMd8RjUPNo44xZVU3K67Lw9Tde",
  "key49": "2rJz8oWcynjuEQLBiJXpmL1g85QwceoWUwhKMqhNJ7SNVYsrQDxTFyT5TkDxVnBhWz2UJk4vo8iHznNPYSL7yPmX"
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
