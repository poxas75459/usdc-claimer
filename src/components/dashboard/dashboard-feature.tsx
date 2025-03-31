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
    "425x8kTfZq7U8SZW8D5ujLs2raN9NYoXziR6Kdk1snbq613oDbKtwdNWWmdgYD72UBH7DcCWgCVPxETPGv561yMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3soufdDv89bEFHj2PFwHbrGUE3ne65mxfcq899ND84pNFNiUUuYpkxYfvvqgL4ekwoEhEGGFo1AT9RhUXkJ5gQ4r",
  "key1": "2sAmrF4mN7SE2b2ymkEi2kTqLKtodLjXeFoZ5c5mybwReT6jsoXTmsPAGixB1SNB8n5Kigx1pcBBLWwwY7DY4dkS",
  "key2": "5en66rgQF7qtrFNXwxE8rHwJVBky7jNdcpQkuhwM9aLqdq2RNyXgoAJqom7z5Kcabxex9KL25ScuPZeBK1NumuiA",
  "key3": "5KWJSDKjfYhKbGmH1wPQkzwfczno7Njm6up74vU4VJiDJcHUtFjeFKngPzFYsGHEwCgszK1q1qu3UWJdXhNZfYKt",
  "key4": "4qNwKjjqzMPoNMDet7Msjodvf7g6Pa22n3CoTHsK8tT8D8MbgC1HWSWvCmSTHKhVcCioUBRQosKh79AF2hDRhnxc",
  "key5": "3fMvRDSL3hiFw1WFpou7vQdqLEWnBFp8WZd6KRUTfqJLwFbce6v3vd6QN6iCcUygqBBRQFR2HYDE4njBdeRcQZQ3",
  "key6": "2tCpNBKxfscs7cZcYFBMK3Q2qpHShzECsLM4vjgS4rPBidRnT5DaafbCwGhRoww7ENc1tgDmrxUu9ejwU3dCUf4i",
  "key7": "4ZoBKEEbPMb8JEDzS5vNAMu4bYXfQAgDdf72Pok19Tze3uSXxhUk9PncoU5Uj8oMhsnyT6Nod1vqAGHGhG85CoBY",
  "key8": "3RYEUrQKzqDjj3nyW78AxJM2Gk9NwzPLnVxEznHTbvV29MfDMk3GEBH9nJHFjuoS69SfPnsRw5nyXkdEvVTkguvU",
  "key9": "2fb6diu3tKi24J1QNvuKJSm74fFJU5HHyckd7mNBp9GXHbU4SLZhQjSMzyv1DJKW5gym9d46Y6QvSrcWcYmVAzAB",
  "key10": "4K1i4MaZVs5LimLARghisZPUTc1ZR89HU28D4QRfSNb1UFiDZq7CDsLdC2BeWdVg8Bk5FVz2DqHfToUYidiUYG8S",
  "key11": "3GGhtBMXf6piqrdqRgvmV7Sdz6WWVDrFYhoFZYuHtdMRSJUrrtJ5MkC6dRMJJH1WdqnhD1zw56dEUnVZbnLdfEYi",
  "key12": "FeSWFVMy38a5uFf946xFhU5zzi8F9aGMaM7P5jBsLF3t9QGV2sD5p2mmMkEbMbfrwLVNvBPYqrz7qfBHn3YrerE",
  "key13": "5i2sUBMoK18MGBD3fNxVoYS2B7RFfNDTyCAcm7b5i9eFeW37FKgnyArk6o6AtrUpEqokfqYKU1WK1nUTkekRwHnv",
  "key14": "GVawsWt8T7bcAsHJzTDz8gG1gQkMb19Nc7HE4AX6eGGzMCasb17AYTU75TeKtBBkZ5K3xoGdm8P2J3wc28yuwwx",
  "key15": "4xp3Pt2cW6pvB9z8Soc9x4xqUSpc2YDHYsyy5GWNs3XVzZKkY5cT4DQhkxoJrAExQqrpUh75vnuX7GyUDxJB7osQ",
  "key16": "3txwDGdBkS6jZGZNTf7Zg6oNaTxt2HGQ6PBxVamMnR6T81owbz21kqPxAru9sLgeCAVrL7JmTdysTcvVarmRadEQ",
  "key17": "4pkg6Eif7NSMsZ4tDWCnbgijqXEG4GCMtjGQRcjjRWsGTn655UWn14mDYApxRZpEyXRZATzdA2t1GtoEKZhNn6f",
  "key18": "LAkF8igLYg4Le6EZqECq96bS1egpufbCEzKjeN4WpPcwFfN686jFZXuetpficTD9DUfGdJzwmKqMpt2gfAWKtjc",
  "key19": "3APZNdJXwUwoQkARxU7BNDiyD8uq1VaYnuWGQoZJ9PyPGmGBHJdP4YXiaqYY2hp6ApKHDbBwmt2EdZr4TaVKDoE8",
  "key20": "5nWf3W6HwevF4EoHpGo7WWEdyskzA2bTPd7kTeHKUfTjs1V2qQAg7gPo5fuF5zc6eDCgmNTTci8R6bCKwrJhW94N",
  "key21": "2P4rsrxoawvg2ZFtnMBCyKKZ39DaVMWdHuGS7vDP3VuFUj2fT2WRWStQW2gSnaJ9ragDzgr29qXBSYRWGo1FtidQ",
  "key22": "2Tvrd2YZ1JQE2mQKXxcHchsnUiExN5uC7kD77pGiow5x8Bmz32xt9uDshTa8hENzjKa2rEvqBMByMhvHz8aQcssL",
  "key23": "5YMYu5J4ohYxa7zC2kusW46TGv8UGYCdFJ4wpr9VUDa1zfBmhnjdnGRo7gUhUfhBybV7e3hQs2rkwEfJBP5YSbUv",
  "key24": "4PmmbMF9KBmLeiqLe9ngBkWEGVtxTrfQb3q347eKxZFEE77jLQebVRM14uAM2QzKcf1JQXgNjSec2SZNUSHeQSTN",
  "key25": "22M34oAbYrUYs6nqFwDCTMY9N56BCieZ1uKLkjDAi1KkmGbonN6NwhYXr6a3bFY8pZeqS2yz9S3ZLkSpD5G1BzgS",
  "key26": "prQs8HoZ7rbqh4SqjGgdrMmUHN8crTRTuVi6qJQdmFrqHATVL8H341N2QdpTW3LVoi2NYbPAoEpV8RakJpzHY3L",
  "key27": "eDPu5wKPfuQJasEkKhEpyYTvs5CM5saTZz87nJ3SA9pxLvXe1ZcN8cXqRQEvEnbENaxj2m141ndxHjmnTyd8tcy",
  "key28": "3xQnGn3Wdbg7wzNnWXTgDJdBZStc2c98MB3DuAikZ8jKw8XLFtd9fmxS3nmFfmM1hsyAsYEc3m8mdUFFwZzZRFXt",
  "key29": "42qrFJAbU9Q8gDvr9ystXMZ8aKFNkgaJ4kbAmpdrMk65ZqXL26f2PQ5v8jRTrgzDyMhnyA7ejRsA1mE7hT2i9Rj",
  "key30": "wa7ktouBTzMH4bvvpexNbYyXYMmpbu4HfGgt3xMDpArrctZZ4NDfqw41cevk9ya5iguNM3Zvek5qBtwEAXQ4PWY",
  "key31": "2qZpLofmRTWE6GpzyYdRqheXy5aQqSZUyLZ4nV2BhjjmgcfHiDcH1BzVe9Y9MTWQrF8BdvqSrxBXZ9BsuWCem6Ne",
  "key32": "2AwwsvDCP7ZsyGQMjMos9WGjyPTP6cgTVsZhfTRZ7JFFHND9RX41xuXsiv1sD7NJYn6rZFLCxk3zYnYwY2pynxU8",
  "key33": "3jiTYMZ7EoWnB8No6JnXT9nFzXiH4NwH5MncCMRnMRuKb4BNVGZVmvmfwGZmR8of3FKtZTFDufeENvjPMKuVUH6Z",
  "key34": "4wBrDaSffv1ty6rfRkK4hvGezq6nmMtmUSMfHCKR5MoQ1LLgRFWRRzijX5XWtSDse77N95J5hTSPs6DavCTuxrGF",
  "key35": "5CsqLTGFuYRcnXSAnXPg77AuyHpz9tsDL4Rp3pdgAp1oiEb2RRmjWrsR88c8Vs347hNZGSKRc8bBc7BbWgbKNHzD",
  "key36": "2ZnRHd55mRdEStkpMo7j9oSeqaa9KGkJixSg2FqsgxQrzZw35Ks7MmVuW8rLRWSo62JGAaBJJHjEoyC1jshVAmqF",
  "key37": "VV1GtG6D9cJTSNJ2ogn9zezNUsuQ1BBVVZ7LJ2z9YxPaVSfbDvNKgALP8YY6CiYCRbGyRMq4HChxcz2fbGX3UfM",
  "key38": "5Lo1eJyC5xcfSGzu2v6ev2ajF9wVr73N8JfPQm5YphoMkApVndW96bLXKUGNQBzC6VdbUE9QCQwTFHHnv8gs8eeH",
  "key39": "3feQAKHqXAkg87Xpw316CmyJRgdNQG2k1UFDNYgVP7FBPGNkVKuaTdnNE7wwSuBfK9KTSrSNu8NLwti13kgLrA8v",
  "key40": "2mw5RHcBnq4WGjvT84HNQ2mPFLJKoYaRSDqaPqk2fNfER79656ozPvuyMxfMpkGJDmHbncxGCE57d5CV5eYEQB2L",
  "key41": "2RRnTQME5x8Ge4akQejW1r5Vs4A39eDA1bTN1CZVoi5XdD6kRbVQASw8JF2EStzD2PnwzqpJXpE4QXGbufN3CFpg",
  "key42": "29h4BZL4QxaD8diq6KhJook2hCS2gxm2tAzcPmiRDTTEA1N2iek9effmPGysZsSrB8W4qAmS8oWmVRBnUti2c5oo",
  "key43": "4S8frqkrsoQqxzKHGFgabJPH6G26sFsNaTpjut3LeWTyasdGLoTncmjVYqjbcZGY1gDPiqw11t8jjzHXU2HXkEhZ",
  "key44": "ZddK4oW9WMQgeMys8urQaQjsBgc1WpkLnWwRsNg3vgddKyebsMvfuycmekUkDvkCX2zFUhVZVrPgbVobJ8ZY48H",
  "key45": "2oUGD4qkhy8ELFJEnR1zZU1X19jXpwSZAF6iJxt4R7T64zmGBdUu34LkbvxVFzA1nfZUkfwpM2awUpiYLqypPp4n",
  "key46": "4V6KRLEdhG4DjAevYz12GXctQPRGDjr9UKF8C6nsG7eQYAyRdXwoF9ETtRjBs5ikhv9AjuVqLGAnGZ4na8oNHWhN",
  "key47": "9XhbqSxpNMHb4SN4ddD8NvCNzdgpqmVKZDBNEGTTMjfBD5WgNnTSLEmKR9BBLFTunYEPq1zLFvpiMsjkT9HWsWP",
  "key48": "hTMgP1ZcCQELiKbM3E1noe2rwrL3yB6RNKBXfvhfd8rMG1f3Qj6TnQciPZhfju6BdC5YYCjtUxv4hyNP6bAKNup"
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
