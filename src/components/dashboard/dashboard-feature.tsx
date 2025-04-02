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
    "DR5zTmBzrmvgJ9ZGCXaMsazWiS7uDfGTPnauGncutLBESWsBrX3xxu5vBBhAmUHNPV7EvRVaDzzxKBShdwZ9NuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ygk6zW8kGDTwEWa7qgCFvrcNTgn1d2Gk9k3pRt7psziw7R5VJPkRFL7gvzQfeYTpYkJ2BknYqNTEgGJkj6n8Pqt",
  "key1": "2vCWfjt6cPRQYD6oEZiE1qFbXh2h5fAZNZUf3Q765L1iXtoQSEU9fa1S8ing6KQdpeaQ5xTGckTEfGTJRwawFME4",
  "key2": "2Lccd5qPukjHAdiNPApbHrVvQ7WbwjPa19VQMpSftQanp4AWj1t8HQ61scJ1UBLvaH8hGfTCHTApyU491PmAnbcd",
  "key3": "2DjUkwr4fMnghh5fQSSpFwZ1cABnYmy4p6xjT8kUS7fpBzhpDD5HM5skGTg6MNqsgFCt54waNGaJkKT8KwNvmoMi",
  "key4": "5GS4kqoZSXS9zWZ371c6MPpVCfa58p8MvM8RigTXa36ufs4xtGHpqWtsPs8d4e6AKhc8nGYixyFuV2KHh3nRT3TR",
  "key5": "3WcuWyFY6Bw5pjDpVgSsMnU9PRhL1stsrJxYyjXGZ3k9swy4M1Zztvu3tvgFNzQk5exHEXNknp98vSvr6mxLCvSd",
  "key6": "3jiYhW9S9nyJ7ipsVyhMUmU1WXjpVJGgjRgYzc4bbwCxpGjN8GQ8FKndfHMH6cMZbNgtJVMwDNouUpeGYaFeoKWK",
  "key7": "296aWfZzHyCYLem2pFHNKv32ytNqM62XJyNARj2S6Z7rLsJVC3U69FYDeTQ4z2gHbsuT35kFpKDQVN7S99n5j8Ri",
  "key8": "3ZG78Fsck4CVQgcedsv5ShJ73e6ZoZ43y24Q7YBrU6UDDYHduZP46kSZ4PXJQT3sCHKXM9w7zP4nzbXFbWZBiarG",
  "key9": "2CvaS3RWnSRAbb4ZTVWTzeR6ZNpZriDDY8dnXqhNw4kwCbToAy61E3JFE775xcKVjQpTuJkZHFnv5NDTPtRTHvH2",
  "key10": "5TA5zNJhVMcXvTijCLDDxvExb6G5qRLzGAahUUrcTnutXyLqv2uNrssZUYKzURGRPvLwTwWjc4amau6zsEC8gs3J",
  "key11": "62DwjHhEqHC86rZFGMtpguDuGJmcvsmVbSsiZSBHnGEm7Ta4TCYwJDDpPqUpu55yE7DpcTwVM4wRomELMC7BZ84H",
  "key12": "2roDijwQtuAUhM6zsFb8j972PiDBFzrjtV7LCanMNgBu8RvJbc7jvLjhFxjbnBAwzgAF7wFt8FdzyscPTgPpUykt",
  "key13": "CgW1Q3wdf9oZgFVCZ6JQF1XYSJ3RY8BSeU9Hr9yuhwR4rFD39J5SznJVTJC9ogaySYsSHq9cqsEVq5k4N4z2LCY",
  "key14": "5Md6fyy7Nf5Ei3HaCiUsFfaTMHQXyvhWgXF9vqKyzKGmDnJ3ySSkuDh3dSRzjQ4oN9KNcz741Z58TPbkgQsZGonD",
  "key15": "5KWxkBjth7YRxZcc9iZc7X4wXM7LiPtFhMBcn1QxxNe9bHFGqmzL1CQBtTGRZ3Dif8VxGGnMV3eou4cK2z9vaWt4",
  "key16": "4Y9mVhdnHMEs5Fomaw3VxjPyRH7PwL4JSDyQzmqMPa6ZxnSoPVV1wrjZXXmqDcUqxWkrLpZg5RPSy62Lz6yzi9t5",
  "key17": "2tPhuZgwCagBXmUcWdDX2BjQ33fipANgJWmM51KJxtRAGpMRMasu6u3afXYwTLatWP7TwsggobXTf2UhNrEwSigS",
  "key18": "sKMePtza7GuMp3wSv9jNLJ6kr665kAMo3ERFMY5oUMkPvcjWTmfVhUgyK8QsBGmgfZDgwprCiS5hCdvEoArp4vs",
  "key19": "5J8ao6JY5dk6eXZmcaqsGP7jfC6XKwGfDZRhx2TfXgsX8ZW8TZxvdS1EMXqrUNoh6aWSeEsNkbCbtqCmCu7z6gw2",
  "key20": "4vnRaEuzvCKEcJcoa1PWNWUrh2t8vJ9r526Bqa3wFbM1obZeWgnKSZBCNH7sKQCCzATXNtnejp3ihbkAjyGbH6Q1",
  "key21": "4Uj5tPMgspxogxwoYV7Hd1WS3mDQ7HNMnybiaK9YjRB5kHKCBwarjgRfubyqLuPUpoUBDYU4P3FspaUq5N8R77uF",
  "key22": "5ApcqpQnhDD3h1aCon8FTa98XqmsvcbFmCFURb5niNntbtDWkcwVTKXdSefc64jpyhUaphfJcaCTZDAdRBQpV5Lv",
  "key23": "22VLzXyPCRy3Uc31byHaMoeCkSPpYuKTHGHQ3Mcm64gEZM15epqnT52NMbLZYVGF58cUVaDMLTpW9SwYwsGqPfEE",
  "key24": "3ztaZGqsa6Wn4ExBttCc1YHg3rTMkoMcWkkhPRiTiPUiXqJCrCUS5jaoXQysYxKorZVLajGWrsgiaMQMTAzkDsip",
  "key25": "79LV5meh69JDnkJL8CDwYVVq5WvqxAeLSmY3VgtY5UmA6UmQybkmYmE6S2Fir5kWcKNe9jjcSoBs1J7Nqan7bom",
  "key26": "2n6LmUFcJuMk5WJds6HZsPVNwcQkKw2t8hBxPiodgKSyeB6iZPNR3yadjqbyjDfSzTr6E8niehemhYr5xVFqbjAT",
  "key27": "4LQ6PcEBcidtAkBqXd9o9FyMwsPk9ohTBMJNc47WKYSZR6yNktz6t4CGKGkcF2QHdkuRN6dNpXVPePcsdjLYCDzU",
  "key28": "3SmvijCnt2y3zoQnPvoczG3Qr8nEGRoe4GmRz2zaaYJ5gjTpZZweKXQ5U3ENMm1TYPz1SZ8dVefzhTGJASXFLGNg",
  "key29": "8RNwfHTCpCstqdkukKxsWavGBoUwGGvcephB1Tvrsi7rwxdhPwv7CedHpf2qW3guWe8jF7UzCs31UvnhLKAi7rB",
  "key30": "aSDR597F9VYLr82TUk2aYuKzWBfP6bSwsHpSjNTfZCb69GWYof8ppvNQxWGoGJ6pDNLhbDSVteUvVJtQ9PtWn97",
  "key31": "2PkKgV2CyurHGmRucjgrn8jBfdyvYN6ggqavf5zZisNXw5ytKYGzgtwZkJZRDRV7JpV9va3w3Rm5WAUxQ4f9zwqF",
  "key32": "4xZcgrA5qTXZGaemQbhiaND2YNyF2Maghcz5ph45hNaag9DoAyeheNVzuYuGFBGQSmUGSLKBAZ869A2mjsvC1grQ",
  "key33": "2pSZEz6hepmPbGAY6JQ3qQL6MWHTuHeqqgvthPHaeFAYTQEMzEKYQw6emES9t6YjvHyLUyomsA5mtu53D8Qhwedy",
  "key34": "5erPDMM6Kkyb3cTSyMmsydxd79YjvdsGH1BPGyiUDRnx75krfKeEEqTumGRaQ79Sk3e9ogWJR5VW9XS2pkiTyRvL",
  "key35": "2S4FRuJ1g54gJTNsVCyHGpCSaozvGUKxLsu8bbsMLbz91QVqCAVgNPAUg78tABfCvhUYwjatGaGUzWpK1r1xaKtq",
  "key36": "3cpkdPTmtCdJ1M9PShYqu142ofmnoed5myg8Dt7kurqG2Xxphd2n8xegUzDfdjM4ciLxaNdipCf9LseLhp4ERWzj",
  "key37": "L1mmAub5zPAUp96EmTtbtnVZj6A8fTyp7hHafn1FyXuDmgx6Atqprvw4aqzSQbRqqtpDrGBWuug6eUvScu5m3Zv",
  "key38": "M7MErr31Gyuvb957unNR7dY1gBfFCNtidUFzmsLhgjcRjpeh1Q6Ndc188c759Jt3TcS5SbhVjaebv27PBTvhwaC",
  "key39": "3hNTDkrckp59TweybXMaTciavUL6t7fmRAeZHuNJAqpBdeZeCirn6HE1Rbvyu2zoeM65NW347pmuHkaYU7NZCKAQ",
  "key40": "5BwrwXmmqAHVUANJJReaQ48DnL2a11vFuqRS3ksefezg52Pja2cm1qA2eKJTmhqHxv3yVwxxeA6DaXuDioWBuA78",
  "key41": "53UXMqwhd9xac5SCE7ESSb4LW4L3wL98G9KQA16uxmaHTeCS5Fue8WRNbCWcQjoGStGd54JS8dL2h2qYvpYYm9vQ",
  "key42": "4YkCVwh4pfJz7ZVF7u4Fsa4ANz8SHipdP3bnRyk6psgdqvKvPq5kWmD7NhU6e5FjNx3ACE5LyYMsqEDGMQ2Cr9fD",
  "key43": "kBiWm6Trp6EwbTuWUgn2zpxzRrGWFQ3LqdKWzq5RkN48nkgyP58D3p8LwgLY9qLqMKGnuhAkuJnZjPUxQjdijga",
  "key44": "4jDzv4DwJ3ttaPNubi9Erb6gRuj3BEbi9cmT9PxTTBN79EdesdkQTDv1M19d1avfthnJ8mepUz8CRiLuSVzoSz14"
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
