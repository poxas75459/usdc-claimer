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
    "2HJJUZFAEh86XPSsukoNvT21vC2UsNpJXHHJ3x9woVepkNVMjWiBGRhCfQrQ4o5aqSsNTqVAQvphrPcb646Zokki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NWNEaXExP7PPAhssBNX9UNPd56UVYWaQAs8U1Da7rHJUbYuTuMArYBLXqAd1rgVtMfJyW3xtBKPEapXrbQRL32P",
  "key1": "5jjARcFuNv7tYckDu5E4hu7XWb8HCVsdV2Pwsre9Mw8R3TaqHnYHmj4A9mvUWNAXDfCrR2Q5m2PkY5jpqCi6suU4",
  "key2": "3iNbBcP7CAJh5M4ZxfuGshnQGMrNWzQixsLp6B6BqQqXhrmX3B5sLCWpXQvn6ktvkxG7fs696PDj2iNuhbvtzv4S",
  "key3": "2jNmudtEHp4iCFkgZ8E8SWXpVDSRwHM6BLNHQhsEmYex6Uy1Caz2F7s8TX8dKZgzRkJwQ61z8rAuADx2hjCkCbiQ",
  "key4": "4xDgg82aTTKQGo8MqDRedWWmm8ukaGSdHtC9jeLr1Uz4RLZASzWqTMFtUHeEiJV1Ycbtn8YMWn9azkukxaHuvZTv",
  "key5": "mSk5djTHXUaLxnU7Kha1oBt6kji2krvDSkUWWcAnuqpmkCpthrxVNbub9zgDV1as7L6jiP3LFfrSk2TYGqysRKS",
  "key6": "5qi1Mwrq2ezzxMR6QvZarThKMQsrVcktXJEPycr7kGNyMWB7KxS3K48GcanDQKp5Nma6SWnBsibJaAEpWrBMkWyp",
  "key7": "5nhBgCVc8akwWH5hqDuFWcjAyiU2M2ee8fs4qjv59ozFfiTqkZWD1ucPVAL9hA7KCCq5mP7tePGtJZ7zSuKDt3WD",
  "key8": "JtHen7D2NXqQQYD3VvWZ5JQnPkWtW1QFLmP8jRzhcMTs1wEhDmkaB2SDzbFTgk4xzp2EtB7zLbuL6wbkzVDRd9W",
  "key9": "qeZnqiQiixQ1nZxwvvNXcN1JEpm2TYzhXEVwKPrTuerm2KJdTbkqkE59t9hVz9KS8jVFh5m1NvEtj3ee5qbgzNh",
  "key10": "3i9rjDTbDDFrpoKrtTvtACM66XYjwdZVz1S6x7SaXLfqN9auAdAWz4K4KazwtWCvP9vdTC8FMR6UC67nWHQ9kaJa",
  "key11": "WCjYGg5zSDhqrk3FhvohZRWTHeP71DEP3Sd8WxGgewjWsX7JcooRfqbUUiFfZjeLZjY791ZeFVFirJ83A2wPUDN",
  "key12": "ZAELUgGyEK1wNTBtMDfnCf5WtqcLy6UJYczrTx4MAi64VT1Jqqkr7PCYkmUsSVMT7ZyvDRsYSzMwheveC66Jpby",
  "key13": "QkSqQ9zz4K9uiLvZuWP7rbTSvncXcwrNEz9g5kYDsiB7TPamB5qm5LCmydcsv1ywHd64Vw5eEaT7qj7P49Sstm3",
  "key14": "2aucERvSYEZRhCVmDXeEEhVQaZhxU2TV9xHHWTjLuzPtwzVcPXKtxPY13wDM4QhbHQKD7w46nEW3igAMxJmWHBZ8",
  "key15": "mrgWMq73Yqv1BUkEHEdUx7BBReWkdZySiNcJafKGbVYvspkxEwdNKSE7kBSYoQu2qrEUpHTdHtZFfXVy5e3ELA1",
  "key16": "4sgixLhYcqmUv6PWDGgoghjQBaCyBEj62KSpmEUVF2sHwmcqTFu94haxWn6f6igHoT6XRZ8HW6pmuGNUgh76wzWk",
  "key17": "56x8CSyP7n57Cc3FfpwzZnP3sse9xHuyhQpXPxB7A5VzUiS9oDmMbitmxdRunt34nRksRw8LiSwfh375ELpTdspq",
  "key18": "34pvVM6GNQrLJUb5RiY6SacBdQxHKXweHoSfSB42q7nysWby6DajxSJkkj6ya6UQjUVxWphyPep6t63hoZr99PHY",
  "key19": "28G6uCaaxYGipDs85Qkdqzwuc8wypWuNzqPYX3PX6efy346WWxSiRfdUkcvKy8jkdB3yUSXCvqSKb5wRo6LFG126",
  "key20": "46hc74htB4cpysRsEXaNsVKPEuDmhJSVhXK9gzTp4y8jZWrTjM46ZABPDrh8n4PcXwwwdjj85x12StUHF7wSQw1D",
  "key21": "4dpopd8GwXrdZ3fXgUr4rF6iP89n3gjrXZQBf3AyX85LDWb4qTnqfnexKdKorNYCCWgEpVueEEAk2RttEmwS9bDm",
  "key22": "3b7AHCQgNFmowLgE4Es2dzbTr3TtsZsQ2VWz6eqmm2zgiznE6Jp39ycQAzZkAWo15ic8wJkVT7HYFFrwSbLUP8Ng",
  "key23": "5NBZg6CkHNzhro4v2mzwYkgC9zZEN3C4UnUB4KvgkhnPJrXeSGQKEV3M17mEo5r93viVWfDJz3mG2vnr4b1sKCLk",
  "key24": "3i9o1mJTkj4nVTqbf3DpKzWyZDD1eA11KQrZhzyGcNQGRWNNaZyaBGPDs5AjRSEdj1XFg4npnWQKy13P3QmF3hm4",
  "key25": "4Sz9wd2gTDJejXsmW3wnMn1g5Q6yP4KhQ9au6JRU88DBZAVF9YiVTjJL83iTGbzZT7i7MoWA2Ar5QKc1h7jx6RkB",
  "key26": "4sEnkRfgRUMyLj3DuwfNHgDcAVk6SguTxE4CNFJe7WknHDj1H5XSso6gudU9QabzsJuusAbjuYcY8W3FcmSMB5Fq",
  "key27": "5A1zZ59XCcLup9mJqDDNfvzwHB4JHKA35QkEXnnCVAae9YWb9kA1s3esBjStJYX9jBNnmAqphFYtoEhFCi2qPDs4",
  "key28": "3tUMn3b23G23UnDao5Zfe7cX6nYTwMabVXf1gNehocH8xiq4ZWGEAWVRroo9WBcb8fpr42XaMP1fKJt5GrRvrnEc",
  "key29": "3YQm5QcZEMf3Krad2sKbMQ1tm6NJiTgoeSz3GSL5FceuMyNdAWuzN3YnkfQ7Z5BfvgGPgtG62wsGW7wC7NYGHYqM",
  "key30": "2VSestXEf5pSjfEy82vQ9vyP4GcvfHJwunAWx4s9HHe5eRx76oXRt9hLDRcSzajBf7SUhJXTfPVQGuUFTmvcCc7D",
  "key31": "3eDK2s337At3kSHAh2njCaqRH2AXEomgoXULUKbf8ZxtwjXoUTTmoNXQLwo2ox5GmKDAhpiaWzTJc1s38kiNZsnb",
  "key32": "LxC1oNQ8FZTgtzJieGeFo9b9ki2BJY5qPf7fPXT8vHcMqqMKzZLhEKM6aQ2dgFdBWhkPhuEWN1BP4ZwX74xmPMM",
  "key33": "2Lti6TMRC2ycSAewixuhyGLmhAVw1a7JuPtQiQUMkDcovEKQHkNkuEa3FRHg53o2AJe9eRgxPMCdzvFijFWBjs93",
  "key34": "ASScDp1gMfFhKqiDk6d3z8Teatfbchy1KmmUvVBW1qyMwc5FzmVQtqNC2ZdLbMiw5kWZ6LJrUEn1Bx2jCZyKvnh",
  "key35": "LWto6rWFfC8YaagBwrNDRjKMH1vdjx95RXc54zkKhRjTE1eRopB7J6mSEhTg1uqJ9CyVzej9NdNgVXq9kKNVJ71",
  "key36": "5mmVAsCGiARKCvUGG8LiTcgBtuAGAewEruUWsCSWFjzzeG8Czk2mufzcsiH5kE8qdDQLCRdnFQDjYkYuVex2wUCs",
  "key37": "utoAHHLQobtiVTDiVRmX91xFPRPHgoTZtrqJ5CTny6j7vm7bdhrV3ZNc7M1gTiFYC9v2BDkBUaCueVFHWoAW9EY",
  "key38": "5HjM5cxXWKyri1vd7RU9NYSrnL1iex22msJ2pWfutF7Gx8jFYH3paQhvGJCBK5Q96D9MzKaSfCRoveMrqfQG4YHB",
  "key39": "2ki376Tz6uovzHsLUDCy9igAZjLR3BngeLXrwFd5v8GLRFRePJocEGgwXfiAP8eCvDYPXBnXhgZEAzjxSZKFTbGP",
  "key40": "4YeyzEYQhM32vQFa8A9FooauyAP1TrSCjpDhJsSZGmLhdpKeU72Yb6TJVGEU5hgufETXUJRNDuL49JrVBZLtSNBh",
  "key41": "5CzrXaUjn6yBFQEFe34kMt8ctzszeVKzWJqbKjv5Uv5gtvnEfAto6EjVZmYsepFxYvgekT7X7dAAn9YTLGNZzJrm",
  "key42": "2MBDaHxKxRdmvABWpVqeGU5E9KTst7rVz7o6Qkkt7bpBB3i8vL92VquRrMEaFd6GktUhtQUMCDM1yYnpopBefjeN",
  "key43": "5Fd7E27dx9RBBfdEdTCCN8RLfaZFL1E9EUaC64xHyGxoe2NCTeugHqWtEJ7h1a32X9EiiHm2NixEV6RZGQqWvGeN",
  "key44": "5P4cafVAoT1FBk8pP1FbMUTK4SmsHLcHwCWQCVDeeE2RFJjhfbenbRqVVZxNUBAQeAqhVXtwbUgNiv8xt2qMsVCp"
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
