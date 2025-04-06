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
    "31oMmLsgaYB2NxwqvYuMtbHysXSQWvYE6ihqy9mzjPTZwTRwza7RAgcgPTMMdyd8AjkUewt8Nhm99hVPN31LWEce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36TPuzLZBTd8zsve7fCMVvhRPVN8ExK6hXWwkk284pUKkwprPzxy4y1tagZk4sH68cqE13H5AWdQiqDzarm4k18S",
  "key1": "4uHnLPUiyt6vb3wLA7aMcz6VaS6g9DiC6KmgKm7gp9j54mrzsZRPN7xeKsLWpBjHqFvWvN3bPApxMqGje4wSaapN",
  "key2": "2MS4atvgM5WZqpnc7j6zHGKKSY4rcoTMZd8hvwSbED4FMFoiMXQppG6Df6vanf24Je4a9gj8dL8owymQPKUQvCXq",
  "key3": "5adajcJJmkFxLrPNjgcykkLck4JYS7LLDnhvUHwbTzmwEy6j4qjRhoQXwX2fsYhGPowrub3C2G9bUZNP9oqyfnwa",
  "key4": "4f579Qdb1zFynXphzptRgRw4jYMQPbRMouW8YNo6888AMKPhDTmA4wLCzErZhKXxjwvfqWpVrJpkyXo4L4QWdRK3",
  "key5": "3K9hdQf5d1R1fyD6PmkBTpKcNYTfwd4ZohL3dZ1ynHjwvsteVzHNLLxBdPFxxNE3GhsxEma5KggELjV6HiHtJheT",
  "key6": "4x6yeotNNJQJcFgL9JBd1tHSaLmwa8BM6uwhYSYEfBeWDjMcfaiZCiawWP3NA5sBsFBTPkQcWwSaPiGkBm1G3kqw",
  "key7": "3wmVfp2r33x38uxfsHJgd8k2Y2VGWMQJX4De6qG5zAHU5kVRUZHc7JJpizUSJ929NLwRXNR1YnjVWx8YT9ZhpYXd",
  "key8": "dYPq7viA1HY6VVS8kpCgeXTtnhL9eLuZU2sY7U8Wu4KJiFX4Abo7m55wfyiy3U5vbWnXPmBxksf6cKdCRxWTw7F",
  "key9": "5Bn7o3WnWqZ8uc5AnqyX7vVRfZJTRLWKpwtQxteGd1zMNDTxdN4qYJZVWisYR6zmwPs3Vjnb3rBJanNZvZj1FtDA",
  "key10": "3337vAa3gDoGJQdswWTHAKpEEvqh7d2Rx9cLbJ1vdtKAUBprNenDv7zNoeotDof6TCCX5knSKn4d7mdcSc5HsFU3",
  "key11": "PVpC1EvJThDrarmUyxxijS1Ysd9MTpkNmvqZezqoftKkD1ZVTFx8c9Lpugdd2k3w81D1LYfpposAcEK2MCvfFwf",
  "key12": "3Yq2JdrxnKv8Hz9zRtwRhFDrb4qfLNAszhSnpmie1xUMi4e8NqvgsyeWprd9sFekggpvTtUP7grpDPJutZE1SuiG",
  "key13": "PWCYbTQhyCGWRVCm5b4ibctvuY2BT8CLeXqCjq9Sxx55HLApLGcxmz7aRShdDx6x1oDQizC3rwWwLM3W88z57CL",
  "key14": "5DzRKC7BuoU369Ute9dUnn2bJe8ycqYZMi4CRMvN9ubg187mVouRJhQFiQ9VXGbhEgGwQEyAXedcENuCE4vSPgYA",
  "key15": "ZtmouXhAYSPZF9sCQGBcetyu9aVV7ZxPw34yPDdPFRYf5f5RkrLWn8W8LSiaGddcdh3ogZEiDM25S8jXMGVD5Uz",
  "key16": "N2twthh6wXCjvbukrG9QKxiEU8kepJGW7pXjQfCPXormHxBTPDTMGup7fPPYLoLpUfFfgWvGsvfEH4BXwzMsS45",
  "key17": "4Tcdtde2T1hNK2gbLR38gZzLAvDKJwKyZd2FN43dDsyyXuWeEvcj2hGP2ACRgUtL84wgMkcYgKj6E5vsYqTEWetp",
  "key18": "3W87DLJJNjCCFtpBK9GqShXKSPPyVqU5qKptwKyVk2jNMM75zWq7obRYpGvYYoQqRDM9Q5Uk4soxEA5V7GREoy3M",
  "key19": "wtE4uWbowr9LjzVCw6UFcnTxuy7cqJLXfgsXfoTQ5y2LiSEJ4nwP8nja4Jx93bQqRvRMvKX8iersgKXFSoJEGtH",
  "key20": "32oR4K22v7dAfH1MA14shuzexDRZKzzBqP8m6pCjzSkYcbBLvsuH6zCXYMv395Kg1rowWQuZYZi38xsiofqjE2TF",
  "key21": "5aSawspnibgs5SEZwTRcR7NiXhteGi3bzWHoMi2Xq9pe67MhdhS16nPtdhCCDNjx6tvNtixxzFRe2Wa66dpTA3UB",
  "key22": "4kq4G4reUioT2c3RgC5Br8dCXWNXTNdrx36i5ceZKoku2Tx68DG52PC644VgkcHRpr4XmnNAFewcoMaSL7Dk2GAE",
  "key23": "4PidvBMc5rmmUtirCkJF15R9Pa8GYkfrgTT5hirqhzUVJNmcZQYLcTjxBqGcexzZ2PJMTemKAzpfEzjTuyrPkCNW",
  "key24": "4PBiKzcgD3pSRVCNCy7MjaqHF7qAiNCNicP4rSSWPfq5wc3GuT9EK6NbrUcxX5usrD2TkFNyZ5VsuXZaWUqLxfsN",
  "key25": "hT7L75dFP1KpQf92sarwxBt14Mbc6F2QWM4vCyWKJ6RcoLe42tpQuWqWxdGbdmsmhDdhXg4vUwMDpE7brxUmfeC",
  "key26": "5JiXAxZvxyMr7XcYTJFa3PWwXwd12N7feEng5rMAaH4iUeSmw7htunj8vbKnw1uQ7PSWywusbkM6jTufZ2RjKEv9",
  "key27": "47bT3qbTve8631MCWsRw1WVWfPL6wCvVcm2WS86grAgweYCNB6J8CUmPPDkTqZKEjAui3YmwR8hGDvacEVATDMr4",
  "key28": "PGa8pZN32PNPWiuYTS5aQucJASA3KRQoFDY6YwsY4TebMdH3rmMsdzSBC9bBMKPzTQqSdsGd7DDA9vSi2meiVZH",
  "key29": "3MUW4q4xksbNZPJeueGxcg3x9Xtk4fznc2AsqSLDDxR7XepFpudZNEFqBhCuCfDBnQh2gHwVJA6WF3XxEmi5M5Hw",
  "key30": "3gxX7q9hsWv1yv8C5oPxA1Ak7MSrSFo15JAKaLwWxHzfbxTfaUa9Ps1wGfQWu2KnRM7BESvKbnH849UhVZm8ujv9",
  "key31": "2FNeiknU9yfgg1sh7Kanh7MdPuKBxHe85DroRR7exEGpQGw8EhsxS6QRKChJZravJyHEDRF6p5w7PGEP2yt8vny9",
  "key32": "bn6X7xpR1SmM1BrYh6KVMJkwXyiPpNyX3YCoWTZ5bNKJ8XDb9eWu2grW8DMP6cNfvLRKxLyUKJQmuUVfNGz2yjB",
  "key33": "2tPMzt3h5bDRFv9sh6Q43L2txpLqy8riZpEfqhRRczyUwFz3SwPowjErQcirLxQtSSex8kWL1CnD5imdTbo6dAJ",
  "key34": "4UncNTzmWPw6fWVYPsBsUivrJR9qED5fnadMPLRTkgSsSAw7KdwYXMuPgptzhXhxUMWDAniX14HkvAUTMVQJEryK",
  "key35": "56ebe25SyRzPnGJBH8ihmpJYVyCG59tmFdyBPjBXgMzsddpXZt7bhX7ZYNkgDjjNhTFbsHDFRoQYf5e9PNLTh7bT",
  "key36": "65GBaXgxQW2EyNxQpfXVTGqamEdebbFXkBDt5yDpV758MVitt4Cc43ryEm5KKA43xMSLNfqsM3BCHEirpwtaoBYF",
  "key37": "8wyNPrxuuEh5WNL8jvxa3QMidFKK3EDs8XhnLqhz9LHvX4xyTcMbtNXfwM8bDrAJbVgnTsCbTf5qoVTzq914YbA",
  "key38": "5WCzjZe6h4NdmrRh8X1wZejyiX2EGhSovMAszPtAnKKoT1nEezRHVQCEUi9PFH12M7TgkMmytLrkGJVjKMA98zY7",
  "key39": "4sgHsLq2mNEcNAu7Jvyt7HcRMkZ49zCV9rD2WdvFxdLzkLU8TCkoQM32iXwxeAUrnC1w3b4VWbU5jygAgBf42zDb",
  "key40": "4s5MVU2MbLtoibBnkiHHjZ6Mi4R54z3dmw34aiby21n2yo2bFQnx5mW64sDhnc8HFbShBWFF7ufSgKAh1RUJMNAi",
  "key41": "4UCJRHz3RZdUm187S1CzdpcKiJBJvXtGpzGedRhguvqAvgSs9t7ocMR2Je1wxohD9Bq3KtkdJLK8vVe5Cem5i664",
  "key42": "3LsA8NQ5yMgXvtbBx8QWjYhXHGtCFEPeSnup477GWfCZVrFLMfvLZLAbajTyeTsypanQJrrjhBrBRebALQCZhoc9",
  "key43": "3TzDSMryThyxAsrmeAKDywW5UhM7LFx6LEZAD4VhmjSfookwkA2ZoVHSScL8YaMrzfgrD6p2Eop7fjp8SyVE47YA",
  "key44": "2WyzgHU2KPTGp6JChJJPA5vifxWnK5e79MthFxvxppbDoDCoK8qDaGAuaTmszq9tXt7JeNgZTngidHwmzAw4BPLG"
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
