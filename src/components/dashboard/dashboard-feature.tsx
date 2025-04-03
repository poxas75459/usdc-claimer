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
    "32w4W3MG9VV1wwQnWbUBn6cD85o8UBUd6WQiYpUF9AKHPHQZoiHBWJ2Db7mzfEwwiAU9v6RopvSb9n9irJUV2J9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pafdi2go1U6DH7voZdq9vTyXZLaNfQxutds2T6CDxNcE59H2UQTki2SLjUMFg9mbb39QQv1zCLrq5ALrL8smTcH",
  "key1": "29ddY3v12LMZ3w2UDXB36oNK4mp2RMuZ3u4CnKDUA1qMd2myZQsD5Q4uArhdNKY6Z9XZnp6Dxr2DFKrx8tasdme3",
  "key2": "579zKJPLcBAb4T2K41DYToyWF8SyQF8FWKrq1g8kWSjFNbxnJgbHYjGMg5q1H3TFsCrybYKJtzXX1EcNhYJCrRnz",
  "key3": "4VUCoH4vWx6A6BcUmvJJq9BpWdLrYWJJoEEpLi9u8HJuXt3hxVq6zjwYqZsmvPi7dfXGJrgLDT4ruy3VT9uYHgES",
  "key4": "S3QztDGUqNgffRLAFhbB12SRnevBQ5svQX6DpxPHiPBAmKnHZsVGkMDbgmuS5FUemC3bRritgHrtdH8JeeJxXc8",
  "key5": "5HR8ErcPRKcN9VFr2vbS5qBDfx5FscCKxyDrpfrrrZMf2NX9XVGeT9CRUXuTcY8HHySjQzJMNWv9HguUqRF5DtTQ",
  "key6": "5ZdePW73Xno8siVFTKKbJsun9eugXiwoaNituLtHTqGK6nGBkma7SoDtvUWjxDKxAZFBzFxkunrMCuDfcHrquSsE",
  "key7": "23EHP3TyaU2Qjt26iK4zsYSnJVTvZ2VvtzPS6VyA7tLGG4AX43Fc7HNS2xCtDLsXzAQENDhg9z6diqV7SuspnLnK",
  "key8": "2jLT4aVH3ZEwsU2Pp8jbQErAFWnrbdMCaKpdV5aM3A7YN5o4ezaY88LPyB3mJNGYxXZdkd2mNtTgRgDVtQ6x4JDE",
  "key9": "5rghjhGuBsFb3EDd8nFqYrRyEnn2z3V3WSyEnKv1ugUWgbM3TBKDymbbTjoNA2zZJdS1jzngDCkW24TzBWejy7Ym",
  "key10": "3dkb98Dz9r3pFXFzrp4QMmZ14ZMN9BzYCJDP1uVXcqZpmXrJgm74fvsfLiVoFUgYmE7YZ9ftpRDwjogTEs848WBG",
  "key11": "kyHd8dNHstTtxLjbgqdpJyQiqgPey57bsitwVA5edD7zqGeaoxoQSc2wTzRaaqJfWaHRAjb8ZwhnGbmp2S3EKKD",
  "key12": "5BBLFzhaU5xVmuwQtvyxo6yEfjiRXonL26hiFoGh1DH9URsoWH4MgaG5GbRcCkT3be18B4p7GZJQ9gqnmipg5UU4",
  "key13": "4iU59EeigXA1YmnH2MNrkp5wj6BT24wPnvvQLN3BsN1bdG2qmtDFWYNessi21HLjSFzLG7EzbdcWTyx97G25EnXj",
  "key14": "3WmSN26H1YCtw7iyiv44t1AkDV9h16Yci37wVH3iBxCeuCbfPMQE9TNhYfEkE2GeinmETakWZR3FqUYBFadxXEit",
  "key15": "bcYPp8PGRaZRGwt4Hpqtc7XDjEg4H7tphin6VCMbwcxVoW3qUZQVjXnVj6jViMf6WwJFZVGZqWkeC3HNcstBLxN",
  "key16": "2xYdP1eJjr9pYAjcxyeDm7HrevSJD625FHnow26uyy3CndmNGagdQxtVsvookZQHdYmX6drA2L9HB8p9rx9rzEVi",
  "key17": "3CssgUNvTQNEyxGaccg86MKWjkVuLJRBphfqniot3Kz4N8igmdTYE76fmV5ynKGhGgnDHvtpXnxthHk7bf2D12mv",
  "key18": "5TVxSKoz3RAZhGKbZ2vsCwNGGJxKQUx3jDhruWJDeCTN3DJt2tWxsZQ2gN418dtvEDP4QdpnwrAznAjXhMUPqSMn",
  "key19": "45cy1XxBAGX6v27MW2KBAw2c1vJiQVLFm2EymMcLnNipRaeb9GmuMde323ymSjJyQfMQ2XafqBU4GyiNntPp5rXv",
  "key20": "4Y1WSJxfZc4tCfXBDngsqYuuo88EEirtnac4hp8jZLt3RtxMce9HkHedYVTd2RU94MHrzJaxowNEMW9FUgmbRrci",
  "key21": "4g3mE5hEX5eFvXyXc3gfdGQMw3u16MQjup89ap7bkU1PaNPh6QaiYc99djkqWC1kMWpvCZiWeDWnsfV7J7sGeJEL",
  "key22": "2DqZsAuuYxXDszH5g8hPWXGciqNb39GDoM2dr5meo7x6dzqinxxE6DcFasUHq7g3jHKM2umcQkcYwYubqg1miJhU",
  "key23": "e5RNNa5mJskgu9YGk46Avyjv6Pbuw9zGq1qfQWXgcCUnELJiA1SoXG354DLV26S81TH24YgpU3k2U5EGz4VEDJW",
  "key24": "5L6e8RhhzqnwoNqU3Ek8zrYqhbgJVuaCAWHjb51zwJGiDBmhrNKssEf7KG5BEWAQdC3mJfpzavkJC6rhY6JVEsQ7",
  "key25": "3gVXQZnVd7PiSRiVvJNzz6dDvQEXQZgRKvnDnWDUgTbsff18mSG44iT9s5N2i1Rz8q6UCtoYAarRMaU1QEY6NwRp",
  "key26": "mLj8NyKCJD2F6xHumQTz8LTMBgtBkAobqu7kjfS1NPn9kigFQkoS12gGGGaa3vJWcgMrNRMuT9ycWNx67cZzmSU",
  "key27": "3gapVGxP6opp6QjwqSCd5nFZK6DTkT8w4Ko1uoKVHG6nrnyLP9xZRouTSzUtLpfGQeJb978yyneSFH5cdSjEzD4o",
  "key28": "knvU1F8kYDw4WEipDxYxYVgkoAqcfJsWNVq5kEjss13Br31fknoRAZozpX5mxMK1KVvZvVLFzUChUJZW2bxiA81",
  "key29": "5SvNYgrTUqW5P8ZsZ7xH46gwZD8QHdPexiymWxjNPmhkyajtRZTUCL6t6YEQbpUEBNgH57cjieFQBq14mkAc2MYM",
  "key30": "5UDSwGMpBa5S55MEcbzgTqogaSQwYDYW8nupeEVxPkUPEEoHQmAgvvLc7DQMXH1Zq31jkJwSgdH2UUmMpeFYjVbm",
  "key31": "2EbxH31uSwbnMp1DE64iQGwLoT1fxEL8FZSRjzGvDo5xaMFnEW1oZaREWRjS18m2o9PgsLSGu86bkK89f3rTdwoo",
  "key32": "GMotUBy5RNiz72BDGD5P3FUpWhX6joAGRoaJ6eErv9kD5yiqjQCYvirwxetHqNxWCXj1VVyAyez3p8GUxt4YNmM",
  "key33": "yKxxSWRrHHzC1Mqg2f2CcRW1PJ9meyjdW883Ya6rVRVXWUmrAtkhFmE4LuSvQD9emFkCRAwuWPiJnhPX3aDPGU3",
  "key34": "29pxhFA3Aqrao4d89gkmh5G6CvCkaehaXpxqxgTspM1aZzD4KzLoYdPQSS4c3bz4UQe483ngPV6jSWp8pK6A42aF",
  "key35": "3iMq7YBPLmttrDSYcVbpaMg8uTh28DZAd6dsLFT7FmDu9KPcgAHGNMPhuUagqJcEqmZG8tXxVudL7cjd1zrNuhNz",
  "key36": "2bAzr5tJFFPMvPCQYVDFVtCmibwTydH15BBvzCBj5SzgJCJ8cfYKuXPmttxJxTP2T7MzbWbJ9wyUFFbVXdPgimkP",
  "key37": "3wckdT9usW3dADzewThGWDxEaVEKVNdjHEkfiBSJ8npXGL3DAMN4jGVCHhYVKmZ7idu7chozGb8YHJCQkYMQPNNw",
  "key38": "2no198TEXzcvePu2kbBoBkjWeBKrEmuVN6j5qhsYXo22YMjWVZgZpWfcQZpx7LJARosahXU5F3qwYTHJrr87g57H",
  "key39": "4JFhMBDkNykoZgY4wQzf8qYMqZVxZrjxxv7biyHAqs6ZcNhVYDiJPaVfud5KbpsKKVQeFW7AeDwTqzskPFZkV7Hj",
  "key40": "2aApJRKnLcAoYSsDhSafwe1FyGLj4bwhZcT9CZxfPb8MXbffD6KiLd1w5RqYvJ5XzoHS9ogGAh1CT9TDxchXH3ym",
  "key41": "3vFHBjqJ5Mgwnvjvm3SMcF2a9ZLa4BaTL2vb3iABhWuErfSxiKVp56U5iTAkkFVXXJ1f2qXWFdqmrWYXH3717FUu",
  "key42": "4xZawbf1WFYEkSZ6AfNBvcbqfBcKYTDZN1kRaqkwK8FUHZSY3EVcZm8ZfFmnJfjRcqKFCNR1a7X9nUTRKKm3Xjsb",
  "key43": "2HXCRvRjNrTTsrnkYFChxnQRsZxks8qsSche8Z2q89hiVekXNc9aPWG6e3SUeLr24hKpq8HhM771LTtXb447Mk6U",
  "key44": "39sWgXEL1FAikNvR7yXy6VHjEDy2qaYwto729jHBQfnpt8YY7PnmbbQeKrEvfAjXgjxTrEMj4i2cbD11u47Y6fPi",
  "key45": "pTZowGPW2ZoC4CxzVULXH9ugv6vR1tjqjVU8Ys5h363ryb2KjwVhvSfWq9moKMBxL8PhYD5RCSxr87MVKRYpbEh",
  "key46": "5r5Ze3G5hcJhhwLGxMxisgD6HJbyEp4uQSkzkivuTBH6M3yrkMWWzr4wLDHVxChTSfKjXxc85xgoGFGuFBUbrbhA",
  "key47": "5gHv7C1yutHzt8A1rx5E118tHTryGeEWwW5WQEdAeWCgTDgBRPD74NFkAvNQKh9kjSAWvUCAs6HxCAZELVTSyZp7",
  "key48": "34uXgWzEyM2fVmmrWwUDd8AkWk3a1BBuDDSDq2beriU8Y9vB8BpGiaphBv44Z6jV7HxycWqcrQkEiwpES1qpdtM6"
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
