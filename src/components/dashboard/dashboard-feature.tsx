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
    "HhKDa76erZGYhbVxTSeoCFK8i92WzGixNzhnr5SQnnbQmEktQhjfTXn4rqocjV1gGsFboFnZC9Dfd853DfxmPb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VmB6sQyRz8oUoHSQwPkJ6uta4sKvgauFc5oAv1noUxtHExpGKUgRpeKz5WCTf6wvk8RqU1tKm1u5q9HYeF3pDbt",
  "key1": "4g5i8cmRjf1BsTXPZknPK2dYdGgvobqtECpfGZdrAuB3CjHoXUjCUuwE6hqkHwBgpRVY7Z1eAHk9FteZKLS3zAeC",
  "key2": "3MrjmAbX54SWCjAt1WL8bHuBuADcbwt4PPoYUwb8oRdj8LXmtoz4jq8rbBNbX1GcaKLKo5aj7vZTUekENLdi14BC",
  "key3": "3ZYonZXkYAL6A8kMaz6cMfKAqdpzNRUTjWqUgYxaKhZ4rCmfsBBK4CHKMpdU6cXgoZEJzxSDb6yiAYLiHvZqt8NG",
  "key4": "2hNFS2uvt86wS1Rm7jvxFxDUC5odB3q2PfC85jwAhEBV98SW7jxEdGC6pA1PFQQjPPg425cEYkNAESvNsjHGBBnn",
  "key5": "3bD8SBkLjXusqya7PrrreXyPeSAHZorFEisbctMmbuPvSfyqWpMaTMqQLo8XnAiwMs4iksera7Ao8TvDvYtT6znL",
  "key6": "qNnPXMyZjTykjJ2Lib52STKn5P5bpgvfb2hLT6UE2kMFee2tuxF8dBZhDMFw6WQdCCeScRDtzvihagrWNQ9gJNU",
  "key7": "2hBKRKvYYZ7m1FErAux22fR3QvCSzxqwipnBJZg2mEJL1vBceGaykxqPbvn8f1kc7NMR86ZJj6MHnY8kUcZRPud3",
  "key8": "3yjwq8CJioqWQoMvDDAUi1Tb5AjYBfWwJLouhRfd4v7LSm7K6M4bKisP4X1MxbwFKfQPZCYBVv9fXz9L68a3kyS6",
  "key9": "5LzKzg5RaVmWXnTVvP16q6LxmtHNk8bc7YBCYVmcSx4EGyGaAWaLdTCK9CfJzqHV7DsKQrZLLyDvLA8NjX1xXnay",
  "key10": "5K5eHZuZKDmgvoLtmzg8b1PaKEF1enwwznoN89QhNsb2j7iaeZDPdqWVEqqQg5hAq5Jnfv96bwrca9ux9MHZJPBT",
  "key11": "3LFy7BQroXfqjPCtwMWzcddMe8VpR1uJHSATrwyZx7ExrTWsVgmpjJru4kZMwtuJjm2XtwGpxiZWeJSqg1MFyXx",
  "key12": "4Vy5JeVya8MqsYvPHv1uKL6xQfdTW9rQXzS4VHxECXXKKbjujEXTkEZpGeC43ybowdR3iKTvJB8MkU1QLxF6n8CC",
  "key13": "41jVeSjkJC9KzjFwSGWCFpnnxtWKygJch5hngCPHoUtB2m7AAntvXVj1Bpfs76YpDRCaVfh6868mtrHRLEbwjhX2",
  "key14": "5karYpKSDg6bqrDByH2E3H2GHRDDJoZDNUrmE4TcLrkgzMWswsDndfEHbyisXLKisWUQw2u8gn3HU4aXq7r9AqPw",
  "key15": "5J4mKp8GKWziu48wtxppt65RyZqZH3mGsWbEfKH1kEZdkvveymSQs7asYBxWiVVhapMgzQzdAvb9nTTXkc2fHqga",
  "key16": "3z9GD8A8pV4XqfH9kP8mQxYDCAMsaxq1C6Xc6tPQuQYrR7X9qkSSo4Fx65mswXbuF6pJfYEXyvkxhMrTieXQNqJw",
  "key17": "3YgmpwB4L3ZL1uaa5C1BE6E8R2SwMVBZQqjr3JHZqEUp4DDrhjimZSMaL3quYkrQ3bi5mnzttKpeMPR2p7yYawT4",
  "key18": "4mHGngryU5emrvsWLjzRaHcqApoStAvShWFPJddE8tdt2CsNdpNZufp41LRJft9URpNDzKZudww1eNVvT2hBRmw5",
  "key19": "D482kuRT4aXJvqmmV2xMuxCqCvBqDVCRf7U6dj6M3y2hzMQB5hDkZs73MGH1Zaw5Y9WsDFuE7TfzqHKGbwtX7Ho",
  "key20": "5LUX5cNKYZp49ufeEkp9bB2WL2DH5hFURrkDanxE5b3sHmKg6Bw8MURMcXpe2TSDnfn8axer9MX8YX1JXoDGNQta",
  "key21": "1MreRzc7CmbXCczKo7J642JgxCSoLPvjU4KkvHQaGQUdGgR4p7G7BaNiUPTAfzsxQhrbMN6mp3E2dM8T8wtexdt",
  "key22": "5mVZ7sHiGMdJPNoZjwoNCJAiVYb2QjaYzMyuAK95vJYhdbSR1B5MXsWLPafzpQSiUKiSa9xmwguifSj18Fb2PZqB",
  "key23": "DkpvRrH5cdLyex45Gwu4kco1BFfjYznXNcgz1jMUc4QuqMfKqHYDmKA2NtfiXWYpiC35aJKu8ZLoSbaxC28CkxF",
  "key24": "2YWevNebTyia3ZTtxXM9XhP3ZmeP2kiLFEY993QgCFn6tKGMgQFPrq3GFsEBuYCvygZ7DhgxBcFPVfvaQtbA58KW",
  "key25": "cC8N5GdsUotKGkjg4sfkbdorWEBYUHwggk3JJmHwG3Hn7ZdqeBxy3XfM2mUjfbYcmyZrtsv8zu89qjbZRgCpsZY",
  "key26": "5LA9gorDC3QC7ooqLFccjjZT1jzw8LTsfxJGmQdEdwnCANMSCqecgay81n6gUqzWcgp5SX4iQUevkLz72hJqqGQF",
  "key27": "5J5a6iqtd1DZfUb1AJRmcerdkHQf9oBJ35Bpr7d5ezAKbG49X4pC8MykUbsQMtkJivDksr15XAZF8P1X7MT7XWVN",
  "key28": "4Qoo9cxenBs1DA63aQ6iSixgiRbCGpztpVW89Ur4WNqH1rKajLU6ku3i1NFebKPbbDB5XyGV1v1kWZw1NGaNkXyK",
  "key29": "2kAomMz1CgYyZbfByo5ey9Q7evcamvwfEn6RvTYEJBXfB8PPoyq4GgBX7XB6FFEoM8jDRC7z894z521cMqHSrTTN",
  "key30": "5paG2siE5fFt3k3WpZMjhKghefGZLEjmZGhv9ak4aT8yZ5qWJotHkP8B3BhgiAnPriwxDE5p2KacT9CWkus1tsMt",
  "key31": "4JA72Hh7FK4Ffyh7MNiuVJk54QsRwcE33A2ziWrDg6heSGQJaXYvvoaRrEmEHKji4jSmNpTf6XirvqdLcC44MoMu",
  "key32": "2DRtRm2RQKnCyvRAkiq5HH8BNVTi5j5YyiBXNkqnHrds1zQResFbBGtL1biYXfUfBQUWn3pF7DMUTCdvhvJ3baoT",
  "key33": "2cv8Eb6A3AErJpsf92Xioaqomp2TpJ4QjQWbG39z2ycpy86h6EaH4TTyJmEVTQYtqY9Rv7UEb4E8VCvrjeTcvKe4",
  "key34": "3sxmScKJtoCtTxaoh1HUZBLLSd8Fn5HwuTLAAVqmhHcW3RYyL3VAEgmKSaMYBHD1SW5GQh4MGTiMA4QigNCjGApi",
  "key35": "2tEnLJpUBTXXupmbsHZrhep3rJGMMn8U8fUJuBxSJpqdHeCcvrZRQ5ADqWXsKjB82mVTUxWwXXKiJmTK7jJP8742",
  "key36": "5CBinRr3dVRsaBQLKdSgJPQ6xkH8qqptgwNFtF4gdDvdNRDRdTKdx6sRUhjK7ptX6hvqmLmmzLgTqFuNzgDFCP4q",
  "key37": "fKysZKx9HFc57mnecRXqots2n4tKcpPqko56Z7eZV9HhqdHmoCh48ScptdeB5aVQvFsTRrgbcQHX3QuEFVrEo5p",
  "key38": "5LY6fSWDHWMVryzZEfLLfxdsvfqkMzxaXKaNxy5HAorpHbCe6CmymvxyJocx7VQcgzjCq9KeDoX6ab4q79yAU9zU",
  "key39": "5PBDDsLm6NEhHc34NCPmPoCs3ava6VVxV5L7W3DNZGBDL64YoEfio9ZihVjekkz5UUudZQdhHUYkqSU6NFeGx5od",
  "key40": "L1LHDuDNLMPdrvGbTs9Ct4rgMjcQeDQmk2arzJwn7WmZEopLeg4wNvyMC4H6fRC2Yad1LTdm347rCn4sSGwiRMH",
  "key41": "2dX1r6Bjnajmm7Ke38uR35GgxARSP48dYamULwQoYcw5am3kq8cka1pmDauVJwmy7GLbmoLyWAq6ka5guEMtWgoN",
  "key42": "277DjWnTK5bJJEtsmQRxspqnoUmCfZGwue8RhsyKvQxwTQ2hZwVnrJRgriWMtDToHLFY64VUUPkhWwfRKRYz5TUb",
  "key43": "3yN895jRasdLoRzGyZxJz1W9fnP29QMWJTh1xjd6AtqADwpnECnNFnnQpxwxAj9XVgREe4VUJGSd3VGift86gFer",
  "key44": "7JSNWmpHJLiXoWMnVzLyU3nMMEgMSDE8eQtRmxGaxjq6mS92RMt6qCpvANjWfR63sySYSSzUHXHbXTfz12HS5Cy",
  "key45": "3fm8CojUBVxo4HDojTFKZf85HyixNMQjucNaXcGZuyKzv8w9Xq4ip5qj2i8Fq12amEZsoafb9GV26wfbPqtkxERg",
  "key46": "4TudmkSFH6wAC2Q8y9CmmjPTvk9PTvz8TZASNM2QvBmbrzgfCLufyK349zZbMuRkbS3WsdHTXGZGDaToLroyKwx4",
  "key47": "oDYV3iadzFfKHJRjQPtMKd4DhZ8vPDN7nzjceAzqHKTTDQDeJrPBxvtHj6sYsYjfHT1Woy43HJPvvvbcqDjYdmW",
  "key48": "4VD9NJMMD2PXFX9Air1tcLsrcfENkzMGjp5nDkXLSYDHT4FVtAEkPL6fs69QypJyo6ehEvhs9vfWicReVw4eXEmX",
  "key49": "B8yAniRkdgoCsvNuiaCZre6ppH3xf1hfNF83VxiRhWi118iT5qjrEvifxxAXzY88xsBydsrsbdf2hHomjRgoHfd"
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
