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
    "248nQRv4yitFX2iWqrLNFsUo62A4EzoWbFGBu2m7R6mJY3s17sdvGhFvAGbMWHwaBpKwaMbnXFqtrnYekV8QUsB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jXof9qvQ8pi7JwnpXS92z6YTeXfGXjEjatiMLrHmwJRtYCpHJ5YdX5x1i6EagsbUD4a3pX9eZJWJ7tx2SYgQywY",
  "key1": "2AM2isQ8mwpSTbmBmKghuDUhJtXcLnhngFLNLqu4bguz9m2NFqWCjUDDTA3VrLNcqCwEBjuwMacZYxqDFgzMSAwG",
  "key2": "25k5jZBwx8Jw4xSBrJJwjmxmFmmVSx2qFK7L4GJEs97J4GaeZg4Kkni9C6fcYqdzQfuoiiTHPJwLH2KYqRRevR7K",
  "key3": "wYgZWYAdPxv8p3DyZGZmYwpa2JZP7ri996VPEEraXpGqV8ofjsiR6PcpuPeZS1u7NNPmoZXuquFM8hLNrQBuGHa",
  "key4": "3dezv21KuXpUg4KNAp2DzmDxdww5AHyR6scwWQU6dVSLkssFf19fAtBm9jxtfbWc7bNqJZ25VHpgJAszYcb9R5MN",
  "key5": "65LfgFT7kKMv3KaxRetuVsKxXHaYwGMXxuyWwQDtMs9dZwz5kNTzorVQvD8R6utYgUi569TFTwYSKBQc8DBWBiEF",
  "key6": "4fPVhUdyr7b8rtNWwfbjyJerrQ5vEbSpce3By9Ufer6XkonqpPbQS5aVhV8DQUKRWXpFQc6xiVPWDPtT41yxhrdt",
  "key7": "P3jgjrRYBuGvkifmknNudogf5RkQ7em6FixAUZvj8teVAYgLsNuDNWwgWoEeqqig6mKnMY3FC2QN45mCvS545tj",
  "key8": "2fvfVHv6ozFX7jvURURrBTNfz6cfmuQA8Qt9y3dKZ5dN6tnaddGwHBZZ7Yk3pjWQ6vpiE4zoL7TQyk4j1Vo2s38d",
  "key9": "615oTh1DZEqzrks8oERCJzPqSDPMArpJdfevTorZ8iWvatfdfsuWWhjiwrVjMBwMuYDcnAtGdgtBXEkT1p54h36A",
  "key10": "4EeRvAEDxyLWMxunTYRto9ZxYG7PjhsGFE1CJ6J2ka3qHESfxJEkGnFuAypWF84LVgH9GMhH48uQpgZbvgcJ928q",
  "key11": "4TEpobBc3pSW5nHNWL8PcvzwvLPVGTecf2QEBk5ndjQW6omMgztXeRp9ynw2sweQzRDhiM2N1x5MoFbCEk8Kyhp2",
  "key12": "4k5aSbS3YWEetFCqW5DEoYiz3c2tjMYHTkhisvLRkjUuUEDLgk7bcCKyEqbAMDEJiFKuPNs5sHmW3WcKGENogBpV",
  "key13": "59RioYCoaxoLALqB8ntDb7RUqgchCwtH7ZRMhS3FDhLfC8i2BcFe3HKfJ6fLHSYd4oNSqHxgp54iXa8dp9GPA229",
  "key14": "3eE9ayQLKHX38MjdC2wzfSGd75iFE2eRkgRSWuVtGbWM2yY6W8ed8ALfYW3ce5jcPf9T5xnXWeqDaJaeLQ7mHBxj",
  "key15": "2pMrHAGRZcCcACYbcdNRwes3gFcWDAMzqqNNXUfwKPUeG4gPuiintK2k1pxZYWKVsjrTUN2pPKg8FTAFbyWx89e5",
  "key16": "3K7Np6kzk9QMfWnv8VjM1UQAhiQvpcgCRyAPL3LR9bfFG3Uwdu9r23JSVZu1GNbov4qh2virzgrTNQeGVyhuuCs5",
  "key17": "TQkZhbkKGkQQD4Qnt47iLhstM7GkH111GGw63CMwZJR3QarWcmPHRNRVUUhEsSAD1uUVwGSnM6m2eEgrzdyy9qY",
  "key18": "FUySjDeoDYoXBFGQXQ3ws74Xcsd4Mm93dq5Uzh27r9o29vaC7NaNg8nGDyupWHEz7448BQno5crGTKyQiaiiBqK",
  "key19": "4vrijMXH5BAuyEbejLEZFWD8hq7QhmWxhrwVdnsXarkqugaeG4YUnguQG4YVvVRdEVuaXNnuqvgDVnfyeA4n6gGa",
  "key20": "51oXMkfUPcYm6p287zTNbPCZkhhmvxcyaHSLwt38kCAzku43XADTipvRsVkrVBHrHDZafX7zAgEYKPqYanM6Bi1j",
  "key21": "5aaTUNDwVwcHbmDBVS7abJdTvXYUPnYcv2zSEE3ZhPiK6urxXERChN7f4iHEDSz1RzY9mYFn4k9Vco8txzucDgBM",
  "key22": "5osoA4F44r8NpRqDKsx1YQ76VdgLBHGWjyYpWsfKqMex7ofrF5cJW3Qugad8VAmeSAYFWFer8SB7u9M5Rc2bLdNk",
  "key23": "pSdCnqpBBWcdj6pShXitnEB87yQpFiJYeeYozCF4sNaX3cNtuLhXdeHDuFHrDY2TMeiv9Z4y8M22YtBbgpnagag",
  "key24": "42P5M2aA8rwRUTCyb2XW9D6rkGAQWynhx8gygUazpFUicQMjbmMbh1vEKyFd84AoyYswSBPJuQn1XrbvZZSEsx8R",
  "key25": "4bNpyf3WHKr9tfa84v5Dm58cf15XtxniY5xsGQQqRZzKP75E85ynFfyn5UmispurbgPY5KTScomVEVHVZ1YKJjoZ",
  "key26": "52M1ZhfwpLckr9ENH7yKx2QgLfdwR5aP5mMZgE5s3w7tUX7b8B7wQy8xBJB5wrvNKUu5bmrQuyF3mM3jmBrFYgEr",
  "key27": "5jyVTxhzvdRyYyBYt7QMVPaqxToHEcpEb3Boj61cnwF5oaCGCCfBxY9tAowSL59kDPeQzdDPb9rERgBYhPygQfog",
  "key28": "4v8eAyFkvNDDro5XgCqCyvsSr1suDsGvNV2c9p5fMUCHGfHdJ6YboEhGwS8kN4bgmjqKAjygBG64RqvXssSrxkoF",
  "key29": "3RMt4TTNtSQ8cmxQDfPZ2pPRJy89ycnYkK9VBtxMGqFYuwCTe4WBomxqkdyAFWuhBCksRU9rH66E9rckdLYA8gUc",
  "key30": "35wY2b8Ju4PMxXfgSKoDDHfwwLyvTCMbQe6vfWNMgWM43UBxpSAcVHistbsq3fdMYrmhD51Hdh5JmTnbe3M2reiW",
  "key31": "2jCVhdAAvXLafGXGCYMxtXxz19uD22TCUeRx8ikV7d2VtuwDLvZdEwJmj3iddQH82HU7wUWpeh8RZTzBPSpMJyf1",
  "key32": "4bm6Hr52wgrrav3css48sUFzb8mJLhSRzJR1vgtcpY3P9TAEZNUwW5iTSsB6ThzZRo8MLjowaoxmhy4ncV7tS3YZ",
  "key33": "5vtfTDJMXKdt1GbiZas7f5A62VioShg4gQkHAfA4sXB74cSN6BFfdZqtMseDPj1tJVf6CW9iZcsyV5CrJ9BazxWT",
  "key34": "n5nNC1SNnwRTwttYx3v6hhaQgPBzPnoVz5vewescVRbcDwtnBZobw4AFV1poiz75b7kPPvW5h5XYiSJpHtopLR9",
  "key35": "UoH3wqW7aA7AZMmfvsw9a9uwj2FgWeY6PceU8QsHcrGxVP3amvJVKAwaYUCcQzRTgNL615avV1Froq4JowxxtRv",
  "key36": "4GY3Uz2PvqP7bPiC1f8FVGGae3WhWeoMNRwSSRAqF1cZRxENKoQFsVJVDm4Jx5gyXfD7oeLJEAn6KKrb7zDYSTGG"
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
