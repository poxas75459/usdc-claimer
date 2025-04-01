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
    "3SPFGAmQG1LpeVJrz9ZPcha9TNkPSjjTaGsNp12PCmifFZzuxzzatVYifNZqAzL7ZpBBoCusgJpq7whsPKS5erfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xTT8SQV1BqRu2b6sUKx6n6Z7DSeTF5Ft6CVLiPGJnXVhJAgcxDrRyW46Cdv5hh4kzcMg1pEiyebWJBMqHwsUW3C",
  "key1": "KT8X3SaocSVfJHjbJ2zKdaYkxVamb29YBt7zdmBpNwEExFQk5yVyPeT4rUjY4hbRnr8N2uXaYKnZBtq7AYBMWrW",
  "key2": "4m3Kwhuxq7boCsMFFyd3mawfq3gsQ2aKBfsKmNgUzpDbKs7CrLZh7VSeVX2jB2N2ChYjDFbGELLWFgr6vVG5kU6j",
  "key3": "3hhgEybRvWK3CJMyMt5NdCnEXEFLjA9C2nCHvwsxihSELNJHUJ1rkspWww99xWi8L7JHUqftDfqxSNUY4vF8ViTn",
  "key4": "y2T8eX45eYgMsX8z6QDXk4p5XEmDnb1GzNQX9U2LL8YVBmsux655RSeVngcAJdR82wAfLeZUc3er2PPJspDfQPs",
  "key5": "2ogp8LyC36brdzMXu24dkYCmSSDBKiJwHyHGCA2LfCKaDjZuD4qqs7AQmCKDSj6K1RtpQeoUdAieYtgTTZb28BRV",
  "key6": "4oLmRfMwZjpEvnrVN2UHKmzgFvLPVE3zMmTFnqRHivLGpy8z36sNwzeLuwzEZNq4iMUj5TTJinrUJupPRqRG9XAs",
  "key7": "2UTN7tL9hAUnY5iMheo5FfxP8yU8uLbAioF1zcpRenS12F75Nwwy51Xa4cDLmip6kLFu69b5DV3vzTVwogCHSLiu",
  "key8": "iK4vQ6pXqn6Db63XmTLXfNbVVaFDiw6Gh2MZ3RSX4tiVDhCJ72aDfp8xB1444DMv9UZxcUk1dBbB7cUw4dqontb",
  "key9": "N8bcxESf2FXgKc9MXNWJfWhXafMBq6CRatc4QQ7SnE8goo1dPgU63C7tqqgUy165wy9EqhwaiSFoNvuAYyiaEqo",
  "key10": "2umymrS6QL7xb3VPBbG1PYnHvWdQj9yvkBmmwFukKMpw8qotdi7uUVQrq9HgM9LdjCbRWefiiJPoYyWAuYcFrku7",
  "key11": "2rtU45kQwiUHdBuT3Go9cBSvfvHJxHMTScyWpdvNx3PeCiknyft2ZQkNZAmPLvGhdnPidbvoPTE6kStAGYKbuBS4",
  "key12": "5FyZEB2iWvSzsMmxaQkNNQyqST49cZBvRntcXvcwCkjRrDCSi2BKhokyMwEXphCjUGBvA4P94PwXMnmRM2e9r7PL",
  "key13": "39swZ8FViCZoiQGrMgcYPQ2zYqGprHbE5S3SMyUuSXmw4x69GXVFx2BSY4yJVVtWNQg5pU4GR9mJo5T5QGMB77pC",
  "key14": "2Bh6cxCwzoBbwtkDh6Rg9Hvvns15X6utnrEQWmw5LJSHFaghWzTZ3Z6Yk7A8QynF5buMLUyu9rR6R2oCctJcziQB",
  "key15": "eUwewpAwg14JAEWWVko4dnKkKtRa9Vsg6SXhUPwvLNmMkzJxxaHWujFWfN7XXZ2p9rG1cPHb7XanEBhSVKqhMEM",
  "key16": "2wFtVZ1APBTFru5toLJ3fMe3jwL4hZYddS3z2DfhvRVsBPAYdvxMmZaQ9JRtjVS6NJLo28gbqxbyFoVS1xszHK8o",
  "key17": "4Dm9gQSRwQnTAcjRLPZBNULGqYcFpp5XSkxTTHn65chHYy7csFodMjFHd5VZ2XGS7EfWUydmxKFdRMRB8W8k9QXR",
  "key18": "4zfKwkGXvN49tuoX5jUi37aVCbHp9Ee5vBss36MYxmiH9pvyA2hcNvR5ZQHzUo37m48zdqWRVc7miA8kqxAPQbun",
  "key19": "2JvGnEDFsWWhJStTWcLedUs1v4e5c778VajGnrhN3Jzoyj13WA7vg3p515LJtQNv7n9nocxk8kMCrvjYkderBkgG",
  "key20": "3NEHS9bybDYtNCYVVMHeY8Vs9tx7yxaLQntH4s99gXVuMngRHEeyuTytHopvkjsRbRXTDA2iqbxDsEGDcvQTcHo2",
  "key21": "4mZP8bzBmAcxvxjfGRR9yS2MtajWxC85KmpgeKTJWYnjmKeRehw3Wmts8bKRmVrcfpM7UH3B9YVXqi6F4yuFzoV5",
  "key22": "3MtgMfA1iCUtWq85Z1udyjQ1nWfESvga4d5LdiZVeKfYCxFrpzjy1VvhfQB9GkDnd3XmJWq2v1zoZoHv1J27R466",
  "key23": "5p5H7WLx3HGiir8fypoqVLjn5xAYQdWwjFyUrfNYqBZQ4D6ELFG9C9J4bBqesy6tBi8HSZoMnrHq2BnirZS7b9n4",
  "key24": "3YssvFtDHJH23Ynew1ucEjEuFLuXx8EiNmmDUy1wRoz7txsQvicyrLWkvw7TbMCCvRUGTefZ82vYuwitg29hJ3vP",
  "key25": "5ZSt3F3x4bQAC7qNWHrj8N1ehvXcKLXCsXT2fg9ACnCVEoafw7ZrpSbtrCLudZhvGQsBWnT4poeTDTVsXFdLebac",
  "key26": "2NMKrop83GL8knYSX7LUx6v5SPeeFEqBYtu8n6d5hfLgCQoqQ7p853VKCg39m3Q6HU7dEFpfQvm6gPJjzwjjcXY5",
  "key27": "5q2t6WJRrBoKgWp2kwqd2moLxpVBjhxrPsE5hRwU6ZLc9jeSiRxiHKeQHXxr849FoTH9QXWRMj6QU4YerSh2z1zk",
  "key28": "62YgqtmokieYx43S8wRLZL5C7NHphx8GZfQAhjVrZtJhw8ZWb7JJm83yRZ9jt5HiKZFvdxH3cYt9eqMhjVvKuoYe",
  "key29": "2nvvwFXgwFGsY1zbE64NNXesUgE9u6UjsqvRSKQpTbpvX6EJNPBx8UygVXp7GEqzE2dvwDU2U2cGAgWLwAJZfFvy",
  "key30": "33TtpCnrodvpXHhFPjNsLeexqyUCFVJcFev6nedSS41FfhbqTMZ27Tm6pDtZp9EnZDnjuPiGAnL4e9JsiUtfMLSo",
  "key31": "2V3xNY85CDXaCFn45VjvtYprQ2vxEXvJdJVRw3vM1dNZUdxoWD4FhQpLnNhCemjKj7a6DNmRC3U2CgG1bf1a2z6V",
  "key32": "nnFxe7Ad6STrRDYasbnpZao4DnTEQF2U59CGxWzHYiZu2mXZtLR1hmjPz5SgEVHTSBKmZ1L8ng2PVv1FqtARToQ",
  "key33": "2DLgXu875vUMcFeLqni4shPEmRckSxDSsCy99Eo7SkHQGzKqceXwS17oLNqU5ntmbCAAGTUQoJXtc5eNGzvxPn3d",
  "key34": "4Hzm7DcavmFSRTc77gHfik954NDHhL3HXnKj4NyokSA5ccbVpTBDSam2Jg4w4qCvQuTaYcpX2oNqDCD7ohGwCtNh",
  "key35": "4HbjYNWCVb3BwLyG4777CFSpL3XSJC29cXtkeMQjnevntB3urPdAGmxmQjdxZRd11fEWnrdutGuPBkEPLw354y5Z",
  "key36": "3DafqTFWRkh4HqWGqSEqfDt1UXTZPGKDwiVhxT3CLL84xpP8zTAss9Fz7DP1K79BQ7R7iy9Z965RfeZCj9Lzmwjc"
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
