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
    "385HGUTkyVqDp2fzjmBdqxV5iHBKPjJCnqzJBQZKRSs4LKL5Zh7UPt1XZ4gXC8nAGxPkHeU64nypyteZrm6sgoqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YtE1ZAZanNpt8hPzCMSCj7bQoqYSkwmwdjbFSrqM5G7nXeHQFXCnPCaCR1zWLTwzBYTpBBMba16B313EhXK5ARn",
  "key1": "2TEipJgwDTWC9dihyA1ZBvgigWx28hz1Dr2ykGJHrSXtv17zW3KSwDkzfCd2oqxhpATCPEdympjHme139y4nrRD2",
  "key2": "455Uqb7sjvcgyzPTj5WeSHvvhzHhxgrjmDUtwzMZmKi7P95YzEDfDispyAQqYnbeFUqiMuBjwQQKjhBGC4J5Ghy4",
  "key3": "2Zb5qSUy6wBn3bc3YamjGhj9u6yfwtu5mcScCNc7KBb3JSw73s9DnYwVwTpCgfRGBq7B2ua8432GgjtNm1qSXwPF",
  "key4": "2ePmWK34tFD38C5Dg67RWjephT5vqjr6R1PihXWzfWC1Z6se1FiBKF1RUMsd1tCyUYW6mLdo7zajjJTHRYoVEcRJ",
  "key5": "2dD8oGgUphJwRG53QHdmXykGv9THiZKcu2jMgYDuctcLHkXEAdwWGRiDDzLChCmxuwLdJs4AWSUipJ75CjnzA6eC",
  "key6": "2MWphtM8Kfiz9LhCtBEDJ3CUeoUCwfd2GHiM5x7pXQaG48EcEWsKPsYxxw7sd7re1MgNMdLGA3WTmFaLzEkumAL9",
  "key7": "EDy7jeUucsm4ZUcRFYhioqxbwCsTMkNNrDU4JJ3GSw5PRtH5gRhkn3m4i2zjLFrLY2fc4XzmE6gvShGuD9mBAWx",
  "key8": "3pgLvuumk4ZrgJ5K6nBayHre48Qd4v5pqWq7mazoV22hcciozLEmGVTH5VA3u4KkLWa8rGS4XQoVEDoSTMErzUbh",
  "key9": "5VReYTEcaA4xf7wFYdJen5ftuUruG3sstAh5ZacsuQPAs3j9DnvLEFDHKxexQE2oXQ6kdAER2PQoTM2vREPpo53V",
  "key10": "3zkRx7pE3BYYWX7vqVapvhW7FNgD4HXPt9TuQ86q1Af92KTSxHaEqLHuuYv2ffyGzUyTxzVrWog2EaymCjBS3eW1",
  "key11": "dBw4qxKG35SbK7NvnaduVmWNsnomTpmqTSwojY3xDLD3xx1XY23UTaAWXRjzKkm9HCjxBwTUTBjMb1FRqreiHf2",
  "key12": "3EmvAqWhLFKAYtTvWj68rugefxwSvMxhfSW71XbsTycRFsfCkZgzuUrVXjPAV2wdivVEd8VfRgRqy56nNWjdf5NZ",
  "key13": "6xKDqifHDA7EM2ibKXJzMmzDcZZcpg85js9tdnTTRTo3xy3VC5vqTTV1bnGVKaHW9wMM1kw4SWA43RA48MEbvPx",
  "key14": "64FAFnhqGhhKLLeugDTt3d5qw1d9gqdfWLN5uVwwZe9LMvosyGuae4Zn3KuL1susJsXCFUWkKUev1pTUFL6SGLnV",
  "key15": "5gv2tnyS3pKqzPNyuR1w3AxWdPp32u3vksiwbLVsd1gcLejfqgC3omrwqhEC4MjFYktxAEFhaf4Zo1rfLa4mfgzV",
  "key16": "2uoxfCqW1fceYekHSKYwUg14Nk7qheRp1XXPhCUeh5pHWmedRESooPNHoi6yKR5CdMJnWwQuVp6ns61GVZRGqZ9E",
  "key17": "223ejH6UNnacAMVYaHFRktPeYcG4sbsetUU3K4XhPw1xiBEBG77z2WRf7kjzXyNnfgkq5Jf6TwyFgxmZzbSTy4RZ",
  "key18": "3RDBLdnPCsz5XtTifTvP9dtR6uFw4mDLb14Gn7EFomVAtdqo1Ug1cGM3QePYtQGxfuaqBmyhrBrgaCHenZkRL7GZ",
  "key19": "2egcPGbBcVjVg3LxF8TaEvt457ZphANafeATtnhtF7df2KGvFQHZaFTiLuxHZPywWTAEBJLveG3KaDXZJB2Ru7Ay",
  "key20": "33nE4uCwtTLghrYJtXqDnStthWbJbpW9SWdmBPb822FYjkhC8hxPyQGmS754tLJdqjCgx1GAj9GJYpPebWNsb2KC",
  "key21": "aCFsTttvLdoSsXCckL4srp5fVH7cd5jYCmj1k1sdfQkkCvrWN8gcTSRfWYzMPLxd5Si1zwmjDZK7CQN4Z4BWrxu",
  "key22": "3i8SGdx8wKdNASkjfPtLzeBb93u6rk8yEbitzY4vaRu9XFUxCGHis56Xi4Ltf1u93bpXUTamEtmjpk7KCJ468PrM",
  "key23": "4DqHEbg3LVtte9JyQczfFZp7ypg45Nr8UQFdLFwj3mhn4xKAZSUxxczTQeDs4ztTWWTZuAqdKsQGA8dmjpSRP5xf",
  "key24": "3JzGF1Mfc6xndfLNyZo8kdCArt6cmZFpFTLyMr4VP9trdpj11oodipBESTybdDkHeSsUp3ygGyK6fRneBFQS5ERi",
  "key25": "48YfhjKC8V6wNqvT5Um1SLjK8nxvBAsVVGgPuKdJs7xpAUpH91XTPFiacQds2yf8QmK4Z6kgPMsoPohErAcDkFzG",
  "key26": "kBFcPVZLrmgxxuLXyNGoyMmMGK7BgHjBvt7YSmW2PrFmMDEZQGr999rnC7j2SvCLEJx8gqxG6Ni5xe7FJQMnGbZ",
  "key27": "3V3xH4ounoUY6WkNMvkA5LL3wjNV4JueH2F7iP6VkshTHe9B7QRQHRRvNZsB84sbEPZocD8ymGCcmTo7vkLYikMX",
  "key28": "3edPdQGW57QQiPR5FGeETbPTDpAtjgbaAng4pi4tKYEhhuiZyJbSUajf3HhcwLaUMuCuoqoY3mVSttS2trGPHYoD",
  "key29": "2xUhQoQK85KqZr5T9W6SmgmKJBpyUDkCWTBFPwpd8rGueJ7YjE69CdjvcG57Rdnu8FkNzqnh4X8XcnH78ZUkWKX7",
  "key30": "4GYN1cTYpFHYKAUCsu3mPk62ErF4w2i7MYUyQGcahbt6EhfPxNexVmPWG1ytK4GnvLt2UPx7tLhcy14dwv2vCuGY",
  "key31": "nVMwyi5GDzmKEf2biVLBT7pCvJN6o5xyU4xajAgCcNTUqhcc8NtyLmauLW5XYXHG2Riz6QmH5ynhwYayqQJ3HNg",
  "key32": "4QNBPF4F1fhshyjqGf3LRV6J3jPjhEngC38Nn287GPHMh5ciCdYyJ66NfmcH1sRgGk3QT9bXjBB8S8Z3dZuYcfqC",
  "key33": "2nevXX5NxFu8mjm8DVoHcoXiZm5ent1mdQUGqEKZi5FT97PSus6zqc32eke8r6oR7N6oT8yvB8db5RUheGzaWut9",
  "key34": "45rrYpAB2TcLXJJWbDBjZo9veqnHLJZ6VntEttbCsavdcyN6u6QKzncM9LRABWeQFfCazF4HC43YWURpGirqCvEQ",
  "key35": "3iiRpiQgpBTA4DsGTakR4cVbtiiFAasME67SXhqkih6EwMiRYEQTzNZDGU5e4u8V1dwTHiP63q8F7hTAv11dCJNz",
  "key36": "5eL5C52BhBQLKw4gvDwmDPfKUHgGN3KXnEfuwCudADyvHCpVdcF1RLaPUkbbyrtv7veX1cL1usSLwZPBfsKG5TGu",
  "key37": "26pvCjTi7F3iLc9B5oGk2oUocLfWgx2ubeq2BRbLCxLkX8zTuqr6Bjwt4f3XNBgwZv7XU9JXYe6bCeUP1sXMuxq2",
  "key38": "33dbzSnXjPJ4Lu5TZKkMvgEwuuhN3jzMNdgnvhud6ftsjLpjjSyE5DJDzr4DEmSwTS5jFr4cjfWC5efsAU9WsAN1",
  "key39": "3kwW9tjSP5ev8u9Xzf5NW6zC9uoZ1Uz4BR73YNYXHNiRWDR1TXeNr6VMY6ZrfWmYUfsfZX1nvMjkY6iS7YjvtE3z",
  "key40": "5CmsLTyfK52mCTMGr1utLBB6VJxHFbuN2B6iZbVUie6x2FLiQnrzSxuM6xnAkrfq8aPG3RMQuzLoorKcbCRVfQ6M",
  "key41": "4C37kBkD2fHMbjSGZTNCUK9gpdRy5VPtTgJeSFHDfSWu3aMZLmXT7UVA4RCCC92xihkBLbDasmRQhNDgfhKNbVw1",
  "key42": "5xv2awdvTrfPfpbJgG1VHuwhM2skJ1VZ6Rrj3CQ8WY5NJjMUNoFbfAJcA3vJkvrzRRh7gWuKT4X4DKnKgeNr72zY",
  "key43": "2PbmLbYZ1vYwHn1JeGGee6Byx9GC1s3TzosKEoywNPQiVdeWJMJ2ULv6kRWoXP7BERNFjjW6svEqqMWmtQ8gUUL1",
  "key44": "5RmwQdXHzFwt74VNLRnjYFiU7HqGLmbZb7Kikq6nv8oY1inhTMK8MUrJwxsP23GAy29bafD4KTR5Qk6UqM6n5r88",
  "key45": "2T7EfvNhgz4NG9wRMso4mNzMyQ8QJAYM6aRhVDENbQCYCgUe9TmotrpGEL34htoUhu3pb7K7Ku6GAR362iXx6zsq",
  "key46": "2TSpUYTeaXdKQphEFcYSkWBP8x1Gr8ubagq6qzY1wRHb4sQL7fz3Gmph9x4cnNPSmxhopeT34WP26F3dUspodF6g"
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
