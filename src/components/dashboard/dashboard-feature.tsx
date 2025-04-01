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
    "64BJCxrLyfMK2vKD8MzeZ3D6nXYxS44DGLJUuHxSTbE9bQgN5fdxekQ7cHgU5zCpgL7sVZ8uFZuGXKzv2XgEeAC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r4NGFJSvhzbz1xXGHTQd29ZSK4UEDfK7xHQfbPEH9u9PovDirb7PTmAjweazo8usR9QhiEMjjgoVad1Ghc58P1H",
  "key1": "2VcdQA4bv3aKYFfFb1zBjRbm3SdMQkKoedLNED1qYHDiWXQHV4nydiWBhehbd11WvupeMKoDx7YX58hiLmgLoi1x",
  "key2": "2qLKdN6hPgd34fuhw81KkwPMjJ5ZkdG2ByAH3DjXA8HzdQnWGjaxSTeFnhj2ayLjgGYm8ry53cEXhhTnSyg9mKxP",
  "key3": "4enrhVFLsFS29oRE4CGJakTtcF7xCdBabsxmmUzj3bDtnt5mSJGQjvb8jaN9B9jrkrWoCYBeGb1GLDCkU3UUcAYj",
  "key4": "33nFrRC6fBjRko8WY1CXgY1FBSZrmoFopJY8fGeSFX3eobkTtXR6bhk4QTCWc3FZn5aHhtTQykrrf7p5uFv5iGve",
  "key5": "2mzgby6AQ8RmKWo2GT37r3BhKTR6U94P9qgizeCwNW9pR7PepW7xsPaFynoMFsRTCigtbweF8bF7Gh6CAbYQLTPc",
  "key6": "4MKJeSDeH5TsrHggu6bU2EN2bXAQd9KgqwrAratVk2cXLxvGtpKBpqTg3B76YuDTxd2LHCRmT4RBDX2hjbFd5rK2",
  "key7": "5Yqx1yCkGFW3jqCDmYtydfmsgEzZ8PoderN5j7HEo5jb3A9BQ9bmgnL9B4KJnL812qd4G4KNekCwhyKBEQ17VgF1",
  "key8": "6JB1TCaveZ3FWjpkPgMjwiYsNkCADkZnC7XoJ7PrP1paAzYwcxrg4Nai4h8jexs87RDCTuCDBmKNiXmAr67AkGp",
  "key9": "ZUdSuiCMh4rpMTrN4amXbmwGXVv7wYN86oqMAsQe4G1Z5r8yfsqjWZfAysMKQV3DzzUzg7da6QQHHSjHuriVNy2",
  "key10": "3fvYYJ7UgVA9umUcYZrBFZEWVoAFSGhGDGqWMT4TDzzUVTSmd8M1sSLDSXgXmMXNKPkuMZGBoEJNWrqXfPvJQDv4",
  "key11": "Y3CssfDtMZ3mTMJ2PuWuTAcpzLZceJqxi19UJsDBaN1Va21K94RofR3T8ifqPq9vExXbYUNY9py4CQ4Kr7zvkaW",
  "key12": "47m9Pk63cUAcR5sznuMqSewtwfsgGywTYzhSAUGGoUNkCnno6CtidqZWaEeFxUXpyZqV2QJ7NoCsK1fupRjV1wcT",
  "key13": "Js92vzyQjA4xYf67Bqo9WQUwKK9RwuDMTZXhvD5agmNNnZrNzk3LbQMq985EvfVgBB12cZQXZUA3WpbbiPdZnvN",
  "key14": "4Wgh8o3QVbeaLkdS763psmAUyf2h8tXEYkKaY4Xmn1iDk2H6kM4WoxHgjzvpD6xLzXKSrczKJZwFnghXQHJJbBcB",
  "key15": "uxopZd1nqaPFuYEUKtabtSCvWNJc7zEBhEi1RPorVo2az42KqsvcZtpevLFWqY6waoTtQPuFvNoHw42osowwSbn",
  "key16": "5Mktwn1UuathgrZ3FeN9ZGcS4yq55qduuxf66i5MzeSyNqfHrVGcebKfhhTo84HkDwy9QViznYQtTXMEk4uVLynD",
  "key17": "5g4ymG1pvpbhGXvSwRtbJ5zL5Kc3vWPMf2uwvbDQfh7BY6HAWcM6Fpkk3DmEcQSGfhAZewwNLgfGW6V3Q6wbwPEg",
  "key18": "3doB1MWSaLtRWjpBEG6iy6dxg3AcQAK8WWX85PXYVBm4JfqXo1yenpSKKpGSuLxwNX64rvcprN3Jn1BeYyh4U6mm",
  "key19": "2u5u1xiHzXV2uLvHR6g9enSmLQKr6suSf8AtMZbVJqvPJVBPfWzcTHKv5CbAwSTmuPMTvNKULohGAtAg6J5MmgJH",
  "key20": "37R5TiQ1J5FhMq7JtQW3bro9WT2k5UduuqzfMPHqpgbrAmVYGmkHUmjj7F4tF9peqW9Y5xauutm43hdNiX6fK93p",
  "key21": "2cWTpSbvs2FMBbhyhM3mWToGew1dkffC76XyFrwkX2Y1f2n1pVxx9bvsE5R2sGLGRnN453kN2mwZWuuDnPZdsHp6",
  "key22": "3pYAwJytTQV6oJqukjcDitXJ1NrST5UXn31BUdDzYjV6hLcSYa6LNCUtzW9ZXN49qL6bZYBaCPmrt2YL4CDAL1x7",
  "key23": "2AZiCA1YyLhMsCf6Jo79T9SSsNaxTrebAn2DMTo2sMKi6bWzRummp989NNpG2KgCqn2mFzcmQrmF3ySBJz4f1VMm",
  "key24": "ZgZdumZ2QnLpmx8tDjaw3SMkoL8FQ8o4EUCRCtTybVTwjrKtyB3PHFftZRm8LzjLpTvVpbC3XhihZHodSXFzwcd",
  "key25": "3dYxNpYVyP8EaDBgiGMpeHbGaSEExZzym6dwzkDgv7cCgWoijqjNjeG1c4qSZiTiLpNHJDfRpZSw6wSyQ23htZQH",
  "key26": "2MFANE5KE1BqJzYgnkQHnPwBMVqzxEJy1KXK5FekQCCuLJ77fZTpXY6UScbdPLnumSzjjp24kPU9uad5htPrnpdF",
  "key27": "2ue9HPZewMJGgA2BQgCr1sXBY8zVKJYhQjRQAmr6XoiyyRq9owRuAkaJiy5TYJS4VMv6CehUEiwW13mbZfW9GWBw",
  "key28": "8X7kg4RtKHEjM8jguPofPHjUMvko4TDqnky4fMaBMGRczyx4We49qv7CVawLDEMWWBGevJ4C4aqcuQC3jofPKFf",
  "key29": "3oTwPrTjnMdtcnQ13i8LatjG8vQPxeBZbog7SHa44shASmR8VXUvBJ6YQJSU4XEBAtgVzCSBw9KTErModUGr8iBs",
  "key30": "2KswHkj8MweSLMerSWmvo8U6UaZJDQEKz7zMCip8ADFZ55SSfsfmPZQkiLtcGHV4Qbi4xfKHtbrqBL8hH1DdTCqu",
  "key31": "uhbhJind3euEEMNDAAKK35P6iRPfJkKPFQXLVimgBzjLdJ79d3Pykt4RXz57QwAvhpdCmZ64DAqBLN1dL4EMSEQ",
  "key32": "3cbJhGZPQjHrgFgeb8cWTuejUkL7Z8qih8wwZKmCKZLRR4X9wZLxhiT5svRfhFoAmD4zppZMhSNEbhrGnNH6WTiP",
  "key33": "437p4fNtkhCznUgxj6WCp8A8ybWodgEjNq8yc84yoN8DPbDgBd1b8njMqaNEwoxMM6P14LBqYRSVebgDiezwi2NQ",
  "key34": "4Hkt2om97nCeHNG4aZBWm1CA2WtXX8PsBpT1KxmfYo5Ye3ZzSskWaAuN5c8JfmNdcFiKsPGnoYkLJe12WY4Y3qF5",
  "key35": "52yt4dgmVYbXFJW7Ga4VH63764YHPkgiCJ58sbXe1TZuPbu3JMRB3wrKBUej9tAT3wg6mAKfrTgxJGrZjYpwi2Jh",
  "key36": "4rY7Jz9qt2oTU96TXZTfGVEM5Rx2iG4SNRsQDrdya8h1Cr5ax4Zj5a4ASh6NZtj4DRc9MecUxMcUew2URiTiHLDc",
  "key37": "2KuxtRD7gbYaNaA2aSW28mZKdvzRtNifZfLDg2tUqWFXtEHsdqztLMXmZBCeaAaUXxf1QAGgGQ86M39EppAeSRcF",
  "key38": "5KHSQC3WiFd25S1nMi6QRWyTSptduXhxRomSrXhFdGArkSVrEEpQu1a8PPBqakJrkdTHQVJtUrsGzjpvFL4fxmhD",
  "key39": "2bNspBPKmMcHFZ6siqkfD1S6tQErJRu86KAhrpLEFptRi6m4Aew1rtaaqwiKqiBWF2KNXK2Ea9rXy3WhaAKj99bd",
  "key40": "RK3ucj5HXQyUJFrtGf4X6mGrtKrUnmWJcPz9ouSMAkdgFX5VA164bGDtN4hxwLvzZ8fsbQm5kFoEnhir2byuQAr",
  "key41": "47x95DomVQRY9kDJq1GttPVZxaziQTtSybZJcpgEybu37sXKrrFC4BzZRMQPqqFdht6jEYQJAcLw3jKGBiSu6UZG",
  "key42": "qJBGtKJvZa5SJRtpLpASRFaTXDnUwWvxWhXPhAHSUZECpx9qY8hUVGGGuGtdVnV31gbyngZPQPHF3VGx3cmKSQ3",
  "key43": "3GLmekkkT6trTcCSH2Wat9xtn9EU3zVJGAuSXCwFwtHs9xfzqLomskkmn2CX1B3wT1yj1eHKpySXScCi3sunq3Lj"
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
