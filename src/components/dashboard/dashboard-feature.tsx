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
    "pYdqdqZ5jdMzjHEFWjmhuzYeDpstcrG3PJcwaLVQmKvTLzgqNR18GctMoC3JTYqLydoLLPnWN8oJkqf4ntFY3fP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dsPEg9W5JqgDocUKHPzxj4uhyQy8FttQrYk5vSFM3orHiDvFwfrkaALBhv7jPrAGvkg633JatGPqBTPifuXXT7E",
  "key1": "5RSuPm2fXHsitLX8WP8Bbh1bLiGSitazbueGeEG7imXeeoeDhAVDVKJeTHXsVfyap8Z977L5FkfukADYAhoqwTzF",
  "key2": "3jnLUU7yNUfF5gpLNVW9ucLdtf9CmytxttUc4CGw5vg5ZES3D2AhoZQs2Kaa5LWWQW2rZLbLtDMSMNdGpH6SDANm",
  "key3": "44PzfdMXqeM55PrpxJ2GBFszoe3TARA4QHE2z3wuqmsjy8YKyoxMP5ic41qMp4v5sP4wirCLKD3AUuKJVhJaWmM6",
  "key4": "2pTjMS9ypZmqWk2GxQ3KbDGhsEbL61ANjncWWWf13xRD2oDWeBhvQrWfiyya4Eg1AvmcpV2K4XfWTiKQxJufkrsz",
  "key5": "3nKpwpY56MfrrrVFn32QdwMwWUCrpZ4imRpwHsE7vcaC4Y6o34uQhgM9dZuK3yh5tFvxpn2SvzurmMRQmcNf8qdh",
  "key6": "AcbQ8JAA7MB6fELyoAHT7f8B5hFkVQ58RxY2Ax6P5MKn3vPw6NAsQxZQduSTCSBqQ3X6zNSpgsKRqCJxVvrvYxj",
  "key7": "2hwNyU241XNLtBJ6FHye52qiMFQNki64v7nvQMfuxqD2bwuSrpBpiEAhbbyLTmiEsCwZRW3TNBxFbFjaxL2aiPfo",
  "key8": "niGYPNfCWb9ypW2rPiogcmGKkjmhhcFNhrLcz993K1YGQCCVu467DyD4JXFc9mUqt4gR6ViXUUPLRsrqTWfm8BL",
  "key9": "4MrtWUPzyjdnyHmu7C4bm218PVwHTrks8bqi9i75ieh2FQevnWrMSeaVRzAnFGDcvJWJYXXDTcHBxV2wZEEGQ1pK",
  "key10": "4usC4JmDorEW8VUser2rmB2ZstHmeqJYQpBXtK44eZ1vHc2eYgJq1VfAfWR19rN5uM59Rw2h9NeEnpQHvwWGev5W",
  "key11": "MqwkNoYro2TbSr5SD8Y5zNGsNM9XZmKqUyARehUT7X7KxX8xnnNFJAKFVqFRhEXvCBr6A1LeoAyNP4wPDwc2XoV",
  "key12": "TwsCiLCkgGvy9za4LA69MTQ6BsQS1MUTKhpdRk2nv4KkuY53Lvbd6gYruMJCZb1ik783ViCkRdP4zVNdggt3UVh",
  "key13": "Xe6PyDiedvqWbLE5r2rhC9hv64LoBFULcj2z8WT2Acbpab2y6yQpt9A9KfW9sPUZ3FzZ6ZsUN8NFqoZ38xfWZfB",
  "key14": "47GK2SE595FWua59c8HAcccjrR8gyRiPMXoS86jkrqqd5nMDyfxdhHVc9viAWEv9WUPwsquW2wtUK8qVHzXwRoQm",
  "key15": "nnjuzEESJXpvay6SHR21sffjaFcLKKbGR3LZ65Ag8EpnUqAJdpVPxMHosSNKZ2PXVBGULJaXiZBQPTYfzdabbXo",
  "key16": "5Wo1SpoFVPgPFYUo5Ljd3w7aokf9yH7F9HKApBRdN6QUvpSucaFfhphH8di8qRSj2xW8sRw54rQc9MWFSHoKZdGH",
  "key17": "3yt5ZY4NMcomddQYFnj9BNBcY1pYwYnAm441h51vKvGdEKut3th2ynhYiaDDw78Zq7mk4D7BnFBWy2PJZuh3pNA1",
  "key18": "1CvA4Gfpqk1WBq8QS56MmgRxssbNfirVnJuFcg9M1e29ry2Mtsr1S8Hto8RkYPYCKxzBArASr9yohdhyKKBBNG1",
  "key19": "3QgDh6oczRdP7dCtV8qjqQ2M75RUU83n14UEwkF6gjpdeqFs5C6CxT1SjToYksxaGPAHCh553eV59DyzvBnZNu3U",
  "key20": "3ZrfnfeBYZmkS3R2rk9ixfUPnguSg8KsdCdbkpui8sVoiViwVpQHmM3T1YeSDsvCNKXm9KbsBL1sxJzAF6o1yvgy",
  "key21": "EXq6wMjUZt9BdpjBNhSfjKU3ZAjm9dzs1C5DLwvctDM6xNmiHzy6QWiD7omv4fwQgW18vah43u7pwjcJywKaBFi",
  "key22": "5NMMs1fbwaHSYnucxT8FaDC8PrmjQCm4ZZSLSF1UVxKc1bKNJSY9g72CfvY7KoymKmtShUkyfjjY5xhZEPMXF23n",
  "key23": "2Vq63XeXZzMfYsBtJFazqa52Y1PHpn4q4M2iLksqs1CMzhiT9qTifwgfrdRvPtg2uSTJhfUYjB3rAqXnCkPUKrBQ",
  "key24": "2tHfbSEBv88EN3JZqoAhpRn3soctm3LYnBQdrtBdZquv1WW6CcnhkHeE99zEBhWCrcVKvBkugmrYtWKYZBiSdNJu",
  "key25": "2845JZYZEtvReUdzyfdtb3pexESPvSEYzZSGJojS1vw9nnkcWY9ijgAmh8bMJvkPDhvn7DLYGhkGrpSo5CSfC2ko",
  "key26": "4gnW1METtBFDBaQSRVPJZNRtsoyYHpxTvYrEQruc2WSLMkisa6XuYkDTaQwiwb9HCCUNNZF7hxkgxv7wFVmCWKHR",
  "key27": "4NMGsa5zz7kM15u8oYe38fjitV4jZTxtT78cEBN7DdNeXDJ5JPh7XYpBuymMDQNZVP1V8iZxkuRLkrTPxs2rqMmR",
  "key28": "61hK7mR2L19ucCRDj9buUfvwHxmqYXgmJj5HGWTebFTKSudk4FMhRBoHn2gUTh4B9GguvyMSX92AemotNFRStRec",
  "key29": "5SGEXiNNaqSBhWqwE5rUT71pN5xvccZ9KnqBNTkmohUa6oiNSksufYYSwr4FdaQmGucT7JqcDQyoDCNZm522rgAr",
  "key30": "3TY21JAGpKgmh6m2ynAnvkVgXKFDmbbNxyAZuqF3jASf4deSExWNq2A4CiPRF5o4b3wv5N4Xj6BR6pPmU1qiirjU",
  "key31": "vFMPC4zoVRQrQLo6EJxMiR6uPwLQm75h1MSvrQ3msToS2K4cU3wRZHEaypRQDPrwg8hQ2K5nbfS1CwXXV2H5P53",
  "key32": "3pGFLoh2LWQjWr2mCMXgquQ74a6qQUo5Nd9db7NBb1s6Y4fq8rXBmRrkjhn9wCMN837vrqVwbV3FFWyd1oEQxETk",
  "key33": "3zkdQXZkmMofdq4QZhZ2AzQB77iSdNF3jFeSajTtKDh3kdLcPiuvEfHiHamx5g4hKjuj2NeSQrKhXFwnc9Za49Do",
  "key34": "541MUXUEqBQGkxtZrEK4vDhQpdJTzwz6vM5JSa7BJikGFYXnUZpzGnDwR7uDKypYhWitTc1SHGbHs4YzdohoXNVV",
  "key35": "2LV9LgiSVaZBek8taPxf7HppLe9XTtZ5Zoh2LD79nsZhVoAdpqKggLTWaNzu6c4KoRDkWvRUnChPoniQYM3kYhE9",
  "key36": "3NfLrdXJCEbsgbbDiNXsi5BvxYdHrvbVKGFReby9zioB3RkXuxpp7EUsCGPz2LKuVKrcYRaZLLxcX7p7XVfXhdHs",
  "key37": "2VpPPTCdj5ikwFxvcCtDSE22NMP5uw9zUCjUawDeaqQUjnj37m9RKFrsJuE6txY9UdYcexnz81vX8kZamGQ8y1V4",
  "key38": "4F7XZj3S59mHaz4rg4vebWmfqkT7pvNR9yDJ3Yqsz6ujypxjuDuqVQQ61RwYdPA1sqVfGadHfeUxy7iqd1QaJCwx",
  "key39": "5HAfBGDGYSwWCgh6VrKmDNyro9SqtqgFWBa6WnU4f2n3SPJFNDL3rXrCELSsRv5gouSYRzmGrCqtwTUtYHzzCiYw",
  "key40": "g5T7Gnp7WumgQHQQZypPGk9BcSZARKaUisBqpA17jRGYEMCHHwymmW3zEGUk7gbiHtK9wgbyKMPeJh2Gqefje1b",
  "key41": "43mf8sAtnAedQMVz9e8D8NC5s6feXaV6cZubacJDJ4pjrDZBk6yMRDSVdn8vsrPBvbBxBezTWJzC1tPNk7dTiCfT",
  "key42": "2ixYooA99bWCiDQAZ33DQHoXiauLJzkTrSCpwAUjjwmqH4CB5XTv7SZWw3YSnhAqX3WSRwvDgoQmgTCkxgBSWjF",
  "key43": "4B99jWJNgwoXsCBnZBagi9tKXc6XiYXEaksvi18WY7mbiwbFAFrfEZqqLKkovPnLNbk8aCqRHtaR2sT9WoETgQhj",
  "key44": "4FStmZPKL9urJxffy96sKAyUMx5RkrymCaNd6qBqbUJMcE1Uvk7tnWoDTs3LA1FDGnK8kg6iJfx7wMq7AEpdQuuh"
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
