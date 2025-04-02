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
    "k6eqHNrwt3x4My7BXLyPiRj8GaJokL719WVf5bYz3PvqDquQc2RHWKXb5ZELqkxnnNeZFSpzjmXVPYYuAoSiwLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LGCWtNoxAV5k34PiXDtD8hGSpSR5hsnozrgtH1PLyFBF5FtdxtGhn1r5v75gPyZgMz5fc9ej1U6wbHxs2Ew39j4",
  "key1": "58quYaLsN9ZBt4fRYasAsMXUheuvxPW7tkyBA3RZcPTXuFWBvz1Qp1qh6zL1hBpu7QEMhwo7ngL9KSCg32WHihr1",
  "key2": "2SELpK8dwYVAAtpwubvWgG7Y1abzA6y5amSnH5fcsuWC1tzDDZRnMbSSFcM7PruiafAfCg2snyZKi3JsrEzXMPyY",
  "key3": "2XHRegqcvAmkMFmhKMkUm2zaED9AyG8YpR6rWtmyKkefuxLpkTKy7VMfDtkAyXzYNiWcPFVTvz7iUpEYrVxJ3x34",
  "key4": "5ZgubjiEzdirzULzHJQwndMmp9frS83RkjBQHzu9z9FUKeUh1DyMCiGiPxDNYL8btGLhZiomiya18NxCQdZoN9u8",
  "key5": "2Q9WL44C6xjTrHRxpi1cpGX6JbQNDCHTsmreACz4uk3ngr4hH6x6XfWLNze2gqv9yBLYfmyEWgXznpYqwEyvF8X4",
  "key6": "4futuGbk56b5rwwfBodHsrnGoSLLVVYhPbXA3eWjQQppHjYDRh3nn8FtWJQzFm8FkFeqkmP6MUHKE8hhXM49GpGM",
  "key7": "37SQL4F37XKiCfxv646dMrtxDuNEWYsYAdPZwiaPrFxK85ZUFq7zM4EwsZbSj7wFftgEnZiN8BtU5eTJnB94GTBw",
  "key8": "25PEX3V2qCgnKL6e9PYfcLdf4segWiUPEnQCNZVeUfeKS3DTHqQpsCjEG8aJUi9XPufJpp6B31rzp4qsFeGFmFp5",
  "key9": "3S9WiMM6wgP7gpCG4fmdTS4RG4nsb7e8vAifJJt388mxXeEFGGRcv4yjeDJCcp7sQFShgZcnBbqP77U6iB8A9aTK",
  "key10": "kdwbFG6tjTS3f2uGhLcXgC71aDKgi5fSyMVeuNA6yXdYuxwzwwZaoP62sCSUPRfAJaWcyQNk5xRawBS1MYyJwKp",
  "key11": "2x79zuphzyY7uftLp48BGHbWQYNGjrAPHT4gdjup6Ubkkn4KJ4n4735X6vLMyrVyW7X6EY4boayhM2iEZoR1mrnG",
  "key12": "4kshW7kfn3fPB2qV6SM1kD1Mznpa6FHk6Adm2xLrQniosSmFckVXrW6FQieJwKxPbj5eDDSePC6bwLjTwgqt1ATW",
  "key13": "3fQQRLKH3cXS8a2P7jFXmEx4tinDkf7MYT4EVcU3SFotRLEiM8vnsjvmFYb96Emvi8wgDLFdKyUdj9HjVe4Y8Skz",
  "key14": "64LTVz235trimmJUmoqKTNCbCmKcbShka1zSJiVzwy1C7JLTa9NmToNCjeMZKYYbaAEtXbmdFNDmvzcebFHxgGus",
  "key15": "VzcjWYRPwGTsN23VjUpu5zxo3aeKG49zzFLiepYzBhMM3g33Q9BGeiQSr8kVXRGuakdP1BZ93XdQSX2vjuywgDP",
  "key16": "4K4TV1x4bRuSNajoUGjoNgTqhvQArVEjwfYvxD18eqp4ZCpz6YASpxyShPm67ytNRQBKrkptFNJtoQ3EXWsM265K",
  "key17": "3NCkCSxUYyvZH9E7Vh8ZbxQGjnoLdwgmnE5568ZcphnbndpeJyjwPdVv8kG8JUgQYczroKo3Z3F6vKuqzQXbNA1d",
  "key18": "3nJg4JrQibYaY1Q25WSQhFQhU9WnhcLoMe3UxGD5Sj5quMdTtrTXdA8WQ9Gpz8xRNs7xpUsi5CQamwkruk9CoDtc",
  "key19": "48BFnJHVsZhDcnmFg4e5jkUrBjP9qtw8qfprth2bKL1xXEdAi7foCS99AMUCqkfPcqfRxiaxuRwCrKV3sMdSCsNt",
  "key20": "63AzvT9DjdC6AFiJzwsTKSr6R42GXJyKaNED7yVYyL36BpdHnN2qeeKjkf1waz9FZMqaUbN92AVS9TWtzcGD47Ye",
  "key21": "4rYCd3x8S5xTazimgSazQHRpxVUAqsqNDxdyaVcesVroHgGsVRM7JTd2WPpjtv6DoSzzZctBXPeJLgC58bZEzujQ",
  "key22": "5Qpz3mWAD9D7dWio4zrVHbKfr3kkiotFmTdN3R5xZrxHsgFeKSZAkERNMdxq1TbEqqNxeB7PmCUEhzCKbihgqRvX",
  "key23": "331d8SasQLjTVSJCJDMkvQ8n4GefMKtMDZcb99BnXi1oEKZphJFpvo3KengTSZBqQkHrC7Si3Fj6cjgMgbWamCfj",
  "key24": "sQfMvdig83F7SikyK2zy1ARZ6Ds6t4hA5ydDTpCXpj2yY5t4ji6ZRwbNJ2waB2GeHPzj5Bb2SMumYciRSDpT6pt",
  "key25": "3DdU6t7MH9SG7ur7vAb9K8jzZGGuFBCEAfU9E6Fotj7BJLEyX1pExhtvn5Sxo6YE4dyCB2ELEmJDaMpJUhJ2UdFQ",
  "key26": "27YRRhwXTx4sDJVWtuwHuAcNtbhWxFWJFBcXCvxVm4nKU2jNvEqUo3VVQ2xsQg7qeeV4XyT6neXeuTErNm6Zbhmh",
  "key27": "3vtegGTXLmav3onkudSWSdCxnroph5roSvXtymi7yhH64H8S2WsYD8J3yra2YwnNWj4hVqjJKa9JL6eXZRjQiNoV",
  "key28": "5EPo2oJ3aG9JFpGUXqsAcErpyNpnsqNYXEjN5hXKzk9QHvXMtSzasQgwgFpH3krW1SQ8QwYFQYdaY8L4DxxE2fQF",
  "key29": "3bHaZLFYoA4DPYSbHW3btj2icVvauNn7tBZedTrphZawGSsd6QeQJHf7FzKDYX55RbQStGfTx9E9rbNfKiTq5tm7",
  "key30": "toiCN5g1CxKjcez1tWWPYoP5NCza297RfJceHXQgn35V5RxVEZkJywkospevUD92nEi1kbU7tBUx5zStp3CUKeR",
  "key31": "2xy4eijzwZKJMoLJP4k9GHYjnQoQ4xrFLEceCC27i9aGG1g4TKLmvVEe7BVxip1kf6bMrpiDUKnLQybgX5Ppg81g",
  "key32": "4TUorexqnsWp9eNeRjNk3zeEwkUNLkjk5QmeD8MxMQzXsuvfu8sZC9esNJMs6HnF3K28wpXbp4nhyWZZDbP1rvgz",
  "key33": "4B4VMAwymohTqmg3x8X6VBpJFJ979VrPYbT1At6UKd5ifx67577tErsBhtAV9jpCg36ByVzvPcoZvXy6hgLGVPnB",
  "key34": "5asaXuKd8FiUMkEg4oWXF35H7nPDzLZQpc1cn7p6ZAaSxuobsffukgYUpdTapzJmbw9YbWecdsyGg8d4GqTij7Dr",
  "key35": "4CJqiFL9ZUtT8WEtXZeNhVWBQLt7C13PVpe21N3Q96Wc1TJegdnZeVJMt8cwfuFFjjjju6RYy5JX3tPCA9pVK6ZU",
  "key36": "4ygoX6SPWVwJP9CM9MycAk5Pbc7417kLqBKdwrZcgiUWrkxzagxkkPbP5RvTHxao37qBqTV3fE21hoRnLM2EWdyG",
  "key37": "4x34K7QnSndBMvMaRhW1yWeAFf84GJPnyZyzLagV3gm1JnEczV9Nc5iV1G6VcjzZBT2VgJ2i6kFf2NGXzLExTfz8",
  "key38": "3gcYbMthVKJ6VRyTpCTM9ModVh4TrMw89AMJDeWcwRyLYahgdfX68wucNnKeAUEM8NBAA6ck1Nm7GmsTFyuLyo2P",
  "key39": "4vMFap7uyiPFtFfWhkLfB66sJpLJiJkm7g6mjWTchoqYNHc8Na9xVWAuNck7tNEGEqLoVZevNPzLefXi9E9ELF7G",
  "key40": "Diqp7jG2tXias2fewWHBsHVQWoGx4arFCRpzp5JbV2NmKuYpdLVqXoax6oAsvrELxBUFMg6WJZw17LNjdyhZuy4"
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
