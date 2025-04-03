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
    "3LKQh1AdsTCBkQPsSjCVooSKAeErKybT9KsEP25EGWegBU865yE6pjp2sBP9gY9Vj3EWHwvkv9o6CTVNcnVbWBV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z3RhdAjyYobMfZHhnEKqAn3C4D2ym8z1VohiCbi5xAkveNefw4QRtdfLtGAw9io8eD4qkbZjWonAfix3g9Uy6BE",
  "key1": "26SDW4PAEia6ASKzxmrjv5r8A8MtYnZVnMkGyK1BPAnPdc4zdDTFLWQzw4E9bec5RiU6P1TmJY9ZkHbkaSbF9qCC",
  "key2": "5nBWD4cvPcxCA39FraaMAft31eH96VqF2rkWBrZ8dUCSVLaq83Pfh29wDbk2uJXiRNZ4ZCQ2GC5uD1N6Yc2snQ2G",
  "key3": "4iCuAbTQJd6fMJupnCnYmQmskSTjxMEtsBZobKqRRs8jAom2njruRhqSBkxG5cpvE3nV5hpaG8RCiyKSwWDRvrtu",
  "key4": "3MPr1CaVsqNRnPR95E5h94DWrQk2eciePjFtD5S5uMCx9d2bUEPQjWqkD4bUGffUDKqFoftYyQbpmVERyLm7r8EH",
  "key5": "3zoMFgPHzXjkdseRWSPiS1DDsJ9cWtu5ZSHh9Q6NEqWSBtUCiLjmPT4dgEhZL75RobpwsDJ5JiZqQLBfC5odCDcK",
  "key6": "3y6UKKJDM3cDZyeL9ZZzLhX9TwswyxHxGv4STLhMFBguCV7PWNBR1JnvtYNBkUAKRaeUVpy8yAKMVXKnRRkbed6k",
  "key7": "2MmYTkvDf8NMUe9uDd2psTRVLAc7fTaQuyEU9Fdrszh4aT2nvha69j3RunArPXWioWRAJH4fw6UPu83G6UF5gzyr",
  "key8": "4AREvuWG7aLMvjwrDvyWxYQYdoP5afyziMbtMEK2TJSQ3WjqZ6rWMg4dJvp8MCArRYwV6KfwK1jURUuNzqQmraMF",
  "key9": "4bsvbSMmDJF4poaxdgkxaJK31jPtYqUt8ffi7Yi4xTmEx4fG3zMn3NPWwLgTe9vFEA8GnsQrCbQJqzpEKTKMDvNj",
  "key10": "4BVWwieYNpjJVyw7LRMJVDHDDytvmh3CB3UdsTEouRqNqJEnUmuLa2ZyfB5Xj465gseGdNFQ6gqnZ6RqfUBW4nS5",
  "key11": "7Dq38casGtRZLLvF8LSXSqXjVdoubvAkhngu3Am5bC6wqFWhAZd5i9mU71zhAkHgcKR42Ka98srajxHvCXka7Ge",
  "key12": "4fukFgTthSGFkWuB71k6N9BuKVvDywqQ362ANXBYqA6r5CAHpZSpV3fgFUc52HkefGVehiXk79v2iFLsLR8N6cpj",
  "key13": "65Yo7EoQdAmbgaLMeBG6prXvnPWf8rmnrUpaSS9CFfqvxArWEdXPtxfy47WKE2uzPib1w93zbgAVf6jF9kyAWuDR",
  "key14": "5bdgJRWwx7MoFdiCXBTr88a8ZH4gkKVv7GCryXnJF2uHsPyMDeHrTyzTgdebqFuQeaowKTBc5vfx7obLbDNFRGNQ",
  "key15": "2YN8avtbxT2B98n5zgfFxyaoNkLMH4pTenTEQ9nJbZha7cTXJqx7VAirUyWgekx1p1ZguW18jzb6tR4w6pHkejiD",
  "key16": "2d9TqYqKeA7Ksfr9RAygM5QJHJVSPi7soPZAMe8aJjKYZ8X3VLFNLzNMjU7KTa1Pw4aHchw9GLTwLddh1bQyQdqg",
  "key17": "2inzrRysbVfdDXJW42rdxoPHvAw7eJnio8Au9JLajgEQS2JNrBethH9mQsTdr57b3F6TZH9fQDCFHcwGEFhCQLyJ",
  "key18": "35qPEVzbQSA1JVVkoY885thsv5es6zxigLa3wEgkqwdY3VFHn3feu1MAmXWRTkKgvCooMYVtuNzhDUKnrFot6zgB",
  "key19": "4XkVj2aktQgxq5RqdxJ11b3SYDD2R5rXjBFQoecdMsdd5nVWErqVASaugBUBCw397hnEnfUxWTEprDXy2yPXZSds",
  "key20": "4M5HMFKHXPGbcY8fPTvy9R4t8YuxywCngeaR5wrZNCrN8ppUG36gURztWEDqnuqs6B1LSzBeLGYj1fA5JdUzD6qb",
  "key21": "2QCrJD2M4U8yGpspzNc8Hqtizr3LSs8AyveFyVvf42h7gG47Eu3S81vMPW9vGGqe1eCu95umDkA2R9QZAJz55kmk",
  "key22": "66rkSfZMxXd9zBRSReM7fypjPBv3meTrCccSMjvKqJdFwiucFjJTzEihJGsxKHtbv8FpNpZweM7sob91pXDiCLdc",
  "key23": "3uykLHLaqg2CExYHWgxQts9b39xWfRBdGDaRnyg8ofojgxaSuSLYYsprzTUERcedY56QxkVdiUtyNPB6m1CGMPbv",
  "key24": "3YdTQ39W27vLZJHeMAtYERgucgRjvG3Cp4tJctw56LhRKvNPyEx2941ddnfyWyRPK7ULXqfxYJMfXH75v1vwMSgs",
  "key25": "3ugz82YWpGV7UVeqR89rWirg5Hm21tgne1hJWaiydCjnMpHHnEdxUMy3BR3GLLuxjz4agqr1Yfjp6n48umXVKFd7",
  "key26": "5KdWkuS4y8cvVCRggcouJUA8cydSMntMj1qsgmqnqFFBkkr58jzxxDWBYP6SAQ6FtAZo8rZKyDCNLRB9w4vnYbmF",
  "key27": "5Wgnj3nzQxKDCgbiVt8RtGBVjhheXdBb5GvC1vDqVELvgXuXTmVQpXCwQMn1yqt1jZVS2udYVdbNxzUSdGTsxZh",
  "key28": "5zDEbmcpySkL7Uwbvxk6q9KwNqLxuJB4L8D5DuVrYkWTjM5XDx4yuYWwjpyH42bYGH83bZmqDS6zustZJ9cg92b5",
  "key29": "4M3kDA1h6TVbHnAESK7yJ7g6zi7rCaYyuuAMfoure9h52kYvFGjJusg7FNp6PsJpGBqk4chQEKdUhTCePVuJ11pE",
  "key30": "3xfstshca6ZDiXrdpjesNMPe65ATHxiTZ3m8LRcr365M8YNBY7aicmN7XtTvZDemqACeaTuZAEuhgxLbY8QbgKDc",
  "key31": "Wj8wDkwzyEqXAgCXEvM76dKvxXUvKiNAbbwv36oMtoFnhbe5gsppE7zkSXBr6DJenMieaq6GTxjManN7U6FTtNA",
  "key32": "3HPBJyguLRmA8sQpQ5proZEjmrjRVYN5oFpLgMi7LiXsgoGyNfVAXLG7pJ1SStPHn2xpjQN8enTaUGSU8syxnkbL",
  "key33": "dkeoQhjLjtywUgnE6ARZ7RT18vkyXegKyxXwVQn5aqFKQbp1R2PDchNFCXoz6xfvfGrXintbnkyU6nmRiknDwUz",
  "key34": "56cGsBp5PvCY1sXBK1ASzGYXHf4nZteDaQRDH5qZUMRSyihuqKB87JziMk7rY3tjYjHhpP4deCWeWCivgEMP7mrp",
  "key35": "mS3DbJ19vLjYSrVtcVFHJAQcq5hRhARAqR22KvjeNzFa63SNAWfmGcXKYnG56FFaaeD9TvPav58SFeJy9kSQ8vB",
  "key36": "u1XpbxyFNm1euMm1VHVAjCaMq3goG4tEmE4Jf7KPjKD37twKqdhrmQPBoskEKbEckWm3AT8RJeGi93AHtiL3EmF"
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
