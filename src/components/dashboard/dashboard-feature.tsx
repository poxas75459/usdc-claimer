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
    "5jZkmNbQEsyE1sxdG7xkyHdKWwMavs2CoLbyzBPmRGVUHBbxVfQdEZkV7mRo8e1o9AMat133r7ZTPybARzZ9mCjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zsD6Asghto6gpZiFuGFcdpCFH3FRCJamb7qwxshjN6kJRQbw2D9FjRpuPdBhcKagDdkuPwm959aAT8cdp4X8SEX",
  "key1": "2p2Z9QPY1woFzuHFSnwnoPqeTWqPKTDZLNpKm8BCP7mJn8pRtUp2LzGRTfr5T13rtCq95M7kMEU77nDwWXTLUFPG",
  "key2": "2nRKpGpyx6d2UEYd6vhSz64mkXYB6pbgaiY7xHwdQHgc2LnkDACQjxKrLME1jGy7oFgTBcrxbP79EiEWEjLCBhfR",
  "key3": "247ZribAhmDusfpa4wK4u4eW3weBBcJ2tammGBpviHWmyab2zxd6FCZghCx6oRcWEdbBTqkgPwmvS2GaqYxTQJ9x",
  "key4": "2o2JXvcMJkj8bJEmRbpBYCZ4WEjJgmVJGkMrxqn5xE4wXtk5xD5uy9pfRSTx5MeRLmtRdcG9uLptj14BTSw4iHnB",
  "key5": "2BJjx96hyADLBS4Pcp3m3d7nPpMQSzp37StjR7xrvjvMypnGKaBoTwGBLXJQnDBspsDLYKW78fb7u4a9CXUkDEof",
  "key6": "2Yp4HDVRUuKwhbA8UJQnFPseYzUtTydR4LkQJPWpkfy5TWLR2Ffj9ipbyqsyTv7xicWvPsVWa2gFk37pWpRMEApT",
  "key7": "2GiaZisPVKmNP6aafedrfxkkexfBcz6Grke3ArT3nvJy6c2jK9ViCzyhDv7NgGMh9VWd2nsWmkSSaB2ErekvR49W",
  "key8": "2pbdSo2aaLyCN375oc6VnsqFZ6Pb6KTVzaue3vmUzZCL55RE6FjVZrDofS6iNtPMzGHXVFKLoXiU232A99C7tYxe",
  "key9": "6vZCahFrrPxcG3HSdWkRsXyiqp4AHZtGP2R4po6jvdvGiZV9mPk91h9qxrVSwDbtZThGokMF7pxG5QfnGuFvnet",
  "key10": "2BuxMSTbP4SHrVwqyXbfBwceqGUrKG7sY7EZHPQoS7itGKnp5KjEFk8YZS2hZ9s4ypv6y887Db44tYtoYckfDfLr",
  "key11": "5F9fQtmyjgcQHpJ6jzXUZQgiV9ZZdS9Q3FuzTHGH9JgqGeX42YtNXaRvoBMxHiT49BhhHxaDe5UCqN7zsuvAvtDZ",
  "key12": "2KDbK15TKmeGZmnGYMc6KWfQqJzBr4jNGKRQMcC91fwEPKEkFTpMFo57pv6zqp7hkZPqjcygLBRdHc5GQnEMcjLT",
  "key13": "2ZFEvzS2Vh3oTKweZA6vTmzJr4aw2geWSiZWn6K66cfzZtgtYsBceyvAYJYgqfixWM6fxpwVV5yV4CWYCf6TrxSQ",
  "key14": "3JTsFdJC45kCBVVAjfstRAZ1JEbrghxfh96nBSXBKec8PQXf5qsCuCQSMB5kU2pUwsbc9uY5jJLYX7MTaAZyU4hi",
  "key15": "GBiTmR4UxBXUV1AYJ9Y1cVcmfnTNMa9c48PSwL6hpApX2JRBZfaqP97bsP5wL4GtmnfnF8cv4kuTvxCfiEsKqL7",
  "key16": "2cYeu9vSHp2v1yp3QvrBTEcc4moMFvFisZ1pdN7v1MuZYjqEJsRPBYwSfmeTrMxP3fwJrYYrDFMEpc31wMUVfemM",
  "key17": "3heUXyVUuYWFf9dAyQe8ExFMpamdCHhF6AXpsXz66A4zbZke5GraW2duVy53ttTdjH4oVS5pTxHfGByih3PW5PNN",
  "key18": "2mnNVH3STniojXR6tk5AS1f2pfFeF3DPCgApt2vieicCH1K7Xkz4YMtCa8w7bmaevi7ZxyWT2XqbmAYAt5Q1kbkQ",
  "key19": "3kkFaidSn9kyS5TFN8wNjVVVuFWX6kyf81k9gbpzCvFWo53yR7LXWrXkLw5UCbAEshZq9J7k1s3pdK1HsFh7eZDa",
  "key20": "4C6gfA4oZSvu7qwnkALiq3EbMj6umcFK3XwGVRD6WT9dt9pL9kFjtHjVd1y14sqtbLF2bricmEmWXAiF8NsQg6h2",
  "key21": "5hQcsigepuekApahCoeghbi6vk7a9ekskRaxzfQSpaKBfbpNgNawaiSYpVuKXA2PGMiMVJuDp3ZheMdhKRuobkio",
  "key22": "33sJJoY1PtpYfazfwVXXHrLExkWMvjm3xQfrMw9FkddQ3drpAktUtSxSN96y4HSM1gkx61w5CWFKWyYBmvGNrbL2",
  "key23": "5a7bUbY4Y5s5KL94caCA8F59rS1wsjYrzgqGbRYKQukehxv8DQu3YjE9Qb2d4gYRXvD47Te8ffRLCCmbiyh5LReV",
  "key24": "m5M7WDtdtSmNnxwRVHRLFnZWmazC89BF8EsyPiKWsn5AfvUMqX6vsuFPeXZ5HtTD9S6185jPrRdwgZBdJpEeJuV",
  "key25": "5dpzX1SL8eWcFgyHHduFCtZAPzb5F7ccgV2XnpQQ7kNgdxbv2MrvFyPvFbk66ZaoqaV35rv8wan86YBZRE3uD6P5",
  "key26": "4nhFgAuyRsa1RYTxwjCG6BRUCnD7ci7HLqjGgvHCrTZ3rd6Vk8b8YpXJerB62EQnMFYHozckqVz6K5rjFs1X83ZE",
  "key27": "3pDvqkVNoBQMSs2nLQ5EGvZiToHpoUMDPCB7XoWzWgCx1Kb7UoxBrPYEN1HW6xHMdqmrLpYqUAvv7KsdoYusmtZ1",
  "key28": "4AKobgqYoYSfWCQ5bUC1o4AmpvTTGXDcSy3Tvouq67KrEZikubLhqiraygxvQxCjhNtEPbbpN45vJJ9x6r6KNVV1",
  "key29": "3KHVHaqApNAierpwH65MQ5EaxuGX9sKDH26veCyfHLo2Y1jUCfEt5JobW9vPMfoy5ZRAVYxAtRA7LbcJ5D8pKx81",
  "key30": "291WnRUvfY2NjnoXTf2PsYW48Vv5VM2BvQyD2yhMubLxnq8ysCZ5r3yuGEyTvpmKFsSzBF7QhAxgrPDYsTd6KN5v",
  "key31": "3y9jS6Sfs7Hrvv9wFN2bZof1meP4SpaBCf5JtifSceyRpYLLfVsaC3hWQH8nHCw8bicp65YkJRnNjGx7CTcsZVv6",
  "key32": "2LjxbJPRPFFcnprJZsTxtkyTcZVRLvUAWfqUyf9MA3vHEGTYvDeApR6Cm8EKmJpyXPfvGPktM323ApywzmTerTox",
  "key33": "5MmTk9QfXmha3XRW9mVL3N7eoJe6DakQtvpaC5o89Lvjhqfe8gWTkri51o8SrtKy5jTAzUN8yJJstBQ94aiHEFiq",
  "key34": "2eTnisDqoiRj8cQ28hKm6fiBVyRSxCr8mZ4BAtdmBWXoCqfAUtNYrNgWtGhEgLwvJA1KWdR3ZR4tfHn2LapAruHo",
  "key35": "5A8USz7JPZuq34yEXx6DmFpMmiSbdkGoi2C6yAQPXjgbjhs6UXTjBHUGvxfSSGKKctddC469L8HWJWkQd9cYtz4n",
  "key36": "2dECwEDC2cVqkpzzRfr5iEdLaMaSqz2hEgZTUAtXuRHa3huD5ggCdw8Dns2nZVU8QXwuAi2GYH6tF5i9PdEP1zwB",
  "key37": "3gQY3wW8PHcAPDMCXEvNXiYho1vZRmfyEUtFXsU6rPZA7hQcFtjTiyqsav6gobtLiHY8hgGKWD4eeptXfaf96RWM",
  "key38": "62e1JkiGPGopngB9WFLwWZNbh49rdVBfwDW4gT94LywaQGtnAcq2HDAMxh2TtiTjVM1UWbePsQeYY3hWoMjoq2yD",
  "key39": "3XQKs61NiJZfbpR6fo35AgQZ2cRaBmpf2VEvVhGTxK7dkkTbhKwjpPSka39St9FFyGtv8nAg8u6sfDPDkyemMYAn",
  "key40": "2DJhbnfoYAybQkDxg3UFPCb1rsWjpgzZsreZ1jXysCiVARSGaZQ4KKpgbqSzZ4eepGjC1z35b4Xc4TsDFFpqxLye",
  "key41": "5hFjaRdjCqQyjr9ThgWRonMKN1LyMkt2aociEWievCvwn9LxqAybp1kqAwswneafBTZsmhggZ5ohrUbG6Rk846Nc",
  "key42": "39qFW7K7VyNPJrrW6sx9kt1rhxJyqVXRUVbN3vzFpSx7xKoFWCkdDFiC1kQpDJPvXiTzF2Ho9q3WWzkY3n9XRFhQ",
  "key43": "3rMeP6SkLkLvsMrRWWDeyw5BZyjw8atNTdvfbJuy4ph4bDR9jBPKN8DePwAFrevfDwNMZLY5sWsRgHXMPpjHe2Pv",
  "key44": "AJE9ey8shSthsakfRRK2c4BEJmXULXU4hDt8NPKLSAX7SwrsV1w8d1BsKBDfdeLcbahA8aCJGRrqrFF7JhGh2Sa",
  "key45": "3VFZnt4Wt1NSazUh3CdKk4daacRWGR3jYXjeBuu9gjWtQqX3rUHL6yM1jL4qwybe5MrmpmXEHHjDHziW6CAi5uez",
  "key46": "ALehB1Fj6QiJv3pHwCbfZ9K6TPboUdjY6ntp5SM5hodLgnALkH6ahbugMkCES9xnnaMEkmu95fHFym4j8bFnPdh"
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
