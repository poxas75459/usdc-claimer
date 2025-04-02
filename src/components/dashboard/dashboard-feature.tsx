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
    "5X59AbK9rEAfZPR8jhhXEHDWDs4vz1C5HN42rS3zB7G4ZKzsxL1jjpPRgr7wMuCRx9ymLnKaGHehbd9icxX1Zh59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dwuCg82ezaPR8DKXqq3wCd9Dnpkq4V7tnnCmEa5cYkAk3uxrf7cJbZ5fPuHJbZhb72Mw3ThW1kETWgnxVP9jSBd",
  "key1": "2DgJcMMAvEvMZGEEbCCar2M3XLQgCotUN2GUi5ye5JbEy6kfmQuFPBW7o7YPjV3J4A2dfUDhPYLgFBr22ooieZ76",
  "key2": "62vx2cB5fyXM1Ahph2mVaTZoaTXkddRogpvvYKEerT7ViUcRNH7UL4EsDMJiNpr3TsPjywSDX2WEigAUVpuMxq43",
  "key3": "vBvZGhmRWVeBUHLor89LvqPyokoz4mMRepDWwYo5fWufFjvEap4SQoX9SYXDMRSKycwnwUzaJa5p5rMQWRQFKxB",
  "key4": "3qTaiHBM6MXmi6pu7wwqU4jk45MNk3aXcFUiimStDkxbuDBDn6f3dJeZXuFByRXEt2j8pFe1Y8uvgbGjNwxJeSmV",
  "key5": "cXEBVj49bGnj1wpZSZA1t8K2WdUAQwjDbDp3iAPBwr6khpasnNPwju9TFoqP4PkfxRQVN62i3HW3QaQjNbkYH4t",
  "key6": "3uRfWrnDcfWAtpdpq9XEbbjC6uE3aXmxGGwRaKiaG9YNN4HSGmsMn68uL5mFjirbJkHqcBNiDLsS2smwBREArMy7",
  "key7": "58f4K8qtVJnAfDcUEx5EWRFBNDZL7r4izBAg5czV89mv7EwQKDohG94gDSuxia4cpf79mNRfJt51pSyPRfq6AAFt",
  "key8": "48HmaTbgskfJWzk3gRwgKwq7FLzw6aqNWYrbZ2D17pDsKuEi1wXeSZwvt5CBHsBaJfRgazF6Bqsj8ok8ao5qn2yw",
  "key9": "rDKKP7fC2CsLnYnnGzFh2Cqui8MFKyW4fDtZ4yjTifnsQDYBTi3vPuXGZZE9BbccL2diUYpSpzQvDfqr6meCtFu",
  "key10": "3XF2LiuRdvihCiZ4kWxgUqpazTSQFxbHL954jx8Pe8SNSXWRZWYcdQWvktFgZGRv27Fv6wGqDb9uUU9dfLG9Zq1q",
  "key11": "5FRVRr8Kq4DdajKkTuuUcA3LKu7URUmbxyp5WbtkFA8zcBtG2noBDyKC1HBtTNDZJ83kc2k31VnzaFSboTdA21gJ",
  "key12": "vy78397tpJfL19oWhgdFxtLVR1srjybYMh3eZvw8R9g1PSDG5tGcZnL5ek8dFQzZrFir9DmCaQXc18H5nMDns65",
  "key13": "5Cuh1VCfRDBBU91dsz6cbgMJepoMySYJxFLj1CBfD5pBiyohqMU2MbaGywjVuTA5wwJCv7xFvCPjAsuQcPew1PFv",
  "key14": "3eZRNbLE3F2ufGBDttnq2Uv5CPZ6thzfuXU2u8pN6gnBMFRrwG8YHKt1aYLxAuYJ3aSgB1b9NvT63CSKs7hczJtk",
  "key15": "4ux6oRrUnxAtTi5J4Krtse5QwUXMUUhaW3d8MiQfg1PpbZiVvSbn4D3RyNAuE1nwo2fKaK5uMtKWpzih7Veso6N9",
  "key16": "3dowJ1f6nZgKMKmiC49vjUosV8xBA1mMpYJeUZ1YpUpcNxFR1ZjJdKGjMHLEudVMpUSYt3xazDLZwLzutqi5wtfD",
  "key17": "4CUcVt5Kb3zajhyPPp9YLBWVs8H1wCiehXov9e3yVnpWid8qAxfiEWt1mr1BZnYgqbMK87pstTLjsxgZKFHWsyyM",
  "key18": "6M9zfNg9W6mtceFNfUgTRzRkQcSf4zyUyuQk2CrEuKkZZA2UAPbQ288Wp4bhPK8bURi5YSYkz2ZBXMrtKffSNrJ",
  "key19": "3h2UH2SGZdEVYzqmhqMCW7WWDjx4vAniL4BfyfFobt8WeCYHTTnM5Go2KU8yM52b1dETWzu5uSy4n4JzdzZX1iYg",
  "key20": "2rtUDNSdrdKuzom7Keqc9PmiCpp1UzjyFLXgqfJ1jwXm9sKcnFPc84HM3wNugdiBWhZRttw5jGesSrsWKoF55oMJ",
  "key21": "4CVzn6BC8cAyAdWu4Lzh3UhezDnx78EeEwjDEchqMQT74CrvKRVwXD7FqfxmYcWc8GcdJKKVy8i5cqmf1JeTmpVy",
  "key22": "2jZpRbtrNnLwdVjfB2kyMYkqwpQKydWwdHDUPFLCT5f1xo9zDfkWF7W7DiEipCvNVwT5gzSJcnFdPczBNHTLET2k",
  "key23": "45KxH3naHUdnLutWsRqFuVyMqQ6ZXUBukd8BCwNvLJ6kbnMrGwY66cktpY6yekafvh8zpFp9bfMavw6upYFpGDPF",
  "key24": "2PSXq6aLg1NagYKy78JUagJjDYsMPWPRmrBxxZbKhCYTqM8ymdHHSvKDZ1aAvD9YFp8nT5vK8dKqqbAZhFFFkSa",
  "key25": "5DRPdsPD72EaXWySFXRDBY8e8asxGV9sxMQa5gY1frWJnpD9mz7H9J4rse2aG1SeWTFi6sJ1KW9ByZym3eWiu6Re",
  "key26": "F3Npj3s2LAwPvBhoNk6vx4JqHYdt3iVLekurt4Ne9HYsaKFYBU48s2K5h6cgt7sQadhDXn2UBtyWvY1C3niVw24",
  "key27": "LmmMAYhXF8yqRcecjEivvAkeS43q6zs4epbRCBtH4skLhF2C8arr6WYEeMfT1qojva7sWtdGA1csVwTNHxSrY17",
  "key28": "3r4b96F1fyNZGpZkDEkT5CeJQBYWKHFqrYFii4H57DT7CBLL8SUpVabABYoAjzjNcWzMLsn4L5JeL4gQP4kN3QRB",
  "key29": "5UjvyrhNd8PARKQT3pw59B5JR5y6Ri4QYjBHcvE3ytcqFpJLXmibLsbE53raPKsJ1KVf2k4PwUyAauHP4pn4EpZZ",
  "key30": "LnhXdQLfgMCPTRzpGmXLytoo5snap5gzBAcLtVCpsLrntTGcNwgmFmCq4y7owUPFoo5AsnRbFgMX5yBhtR6rUQX",
  "key31": "5ZjgcJ7XD7AdMGj1ATLUf7YkU1F2cJZXpKGgbM3SAzmfUghXzKg1boyjMXY4VgbFAiDHJvK8e284LbbyVYDdbepo",
  "key32": "4yx6Rj4XPyKuheSrhgJitEjJhUcArTYMzeRQ81XK7tTSZd1nA2QKhMjeaa5HY5siwdsrRhGWgihPLRPQMtqbMuPm",
  "key33": "27ij4wQA3fhWuTXSLSkZR524iECg8HrQBF8KwtBqxPsx4MqQyJcBLwZqD2HYTZFQ9wszY7nQYFsqe6u4bSV23ci4",
  "key34": "khKsUGRXuDE2uFoViugRycftNx2CahJz2KsuQZBF9FhFbToHs8pGeo7UN9UeTRE6uJhiz9MB6V9EXKDPtvnbhyy",
  "key35": "AA76dsDXWWu13EAX8FKVVUvEWbokNVpVbXu6uGSFEKceyLm2Eys4znv5UsnpLGkm1J8v6i4Y6aPRuNTAD1cL4u7",
  "key36": "3L6zJxNxqSzddvaWMB59CTdk5GLh82HaGU3s8V4KvGJwZ8nKvxfDtaejY4xnsVjnFkvjCiMmGgG6jRP9MkjrVMj6",
  "key37": "j7bwieJ1AWMrXcTHQhcQ4UGXkGdxYCrwAZLBoG9QgneF1bBJN8mFCVoGGWrACRHLk7jq95ruKBitn8GM1KD8m4h",
  "key38": "4c7iRkTqi8sBu9SykYnj8yLJhNnEpg72SsQwqCA7M1ADoZXPuLGeU3w7nhEuEw9mZ8aobBgMAv4NQEq7heYpCCh8"
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
