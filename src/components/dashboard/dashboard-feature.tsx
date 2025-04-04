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
    "4B2E5JeFHcnrfQXWpsr3C98UL2Czpc4tmVpcBx2B3Z93ebZWSJk373Kp3br3ZmwH5NFM4ycAFvaPwvgBfzKWufsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U9eYchkAqbu2mi1ciYLaTicT68ohWX1eyBkLpxQJTdNfCHoHevEAdFaXURFwYm2MZkQXFk3617vN8fcXM2EjaUZ",
  "key1": "3cGjHNzJbJgCafkZJnVj53kyu4oPcanTzbNymbjcBijnDrx7dMga2tWPQMh3rHbBckkmDQUtDujro6bKb3dSVWPg",
  "key2": "5k5Mm7S8rPs7fyMpUNyxfv87gTWwnRtH3sJDkb4zsibug4EABvRCE7A8iqGDvvpZcqxswCu26dUfTomxJHk22LhW",
  "key3": "4qm5AXsGWqkjcQoRJXZYac5Gv3wTUsEFkQKyQ4GCvNa4gPHuWvhry3nuxbVA7dhN5Ht6p1UDsQBKGKeMRDBKrXEE",
  "key4": "4XDNCeiagmii2LrCStRDZFbrArNytfkN9WggiD5ejnfoDBun9rLE9CPTftqcwfjHDR7ZPPZHmXdMBk5QN3RmTMZJ",
  "key5": "4Vfq8nvPZehTHjk7cvCh5qdVpK8me12bNNSf7gEWAySVzT8WVgMytMwMfogsdzKW6mFTe67XvtgrDqzURujnAswV",
  "key6": "TjfpJvJ2PfDrKUeyYztXw8BR3Q7CsJkPw5JUbADVtM7kPAuLk6MkUAs6TxYtKjAkk5oiPZ8gWPVuZ92HTujXQib",
  "key7": "46eWindzy6MVQCnvG6C5e98KBiZG13b4seKDDgtBuuRYCQhibaCNAPHgVFDnEUnHRF6DeqZn9KXFMwD1U8f2agYA",
  "key8": "4uPTBRFj5FpRuBGy8JDA94e5mctrauGd6FFDPGcmhXExrMX8yyWE39o2UkmBrs7eVf3z78mFLnx1uajXvhKRYLTy",
  "key9": "3wHKzbu5kDo6PqAreUEpf38UgmhZAyQHF4vdw6MSFKZCpahAbe4wr3mrYQLdJwBF55bArTdVNkvysYmWocBZZExn",
  "key10": "455hw99tnx7nf18BAK8b1gP3dddj9MEvYdcre7rzyUCpv91RNihxJDY79Gvv4rTSd9P3uQQndR1WG2Mmpg1NSNZi",
  "key11": "3zc6v62w3M2XqxZXWzwYErfs2vUzMmMT6LuaEnW9K5R4XwsqNCjhqyfiCMz6G3xEmsmenmKLQLgdVgrZRQpGXPce",
  "key12": "5KDNbS53PFtpBUdfxHsrqAgbsazhnmCwVXjXARWxkRFB9EjqXo4XPKaVoTWksRtNRjbbUmTdgpStn5DKxtk3ywmX",
  "key13": "2VAH21Xj7gtAaMiyR7LrpxErfq1jGAVAD9tDXNzDdvWj6CVFd64JcuoSLZfuTZpFxzookqH7d3cQTAh1Nepmv9VZ",
  "key14": "5TTMW3AfmF11c8CGHgNvnmCFSRyj25rLADCpcgpm7baLzLjcnPEs5GtSTfKPpRq2vVUtFjvB3rVYNFuLzNhkftF4",
  "key15": "3BCEzZPstPjRq3vJ2nyieCnEx9nBGCB6Rerke1daftgfgtu1NYPMYW2eB9AGhfTV4TpPGuy9AMAVaZEU1JjoLwh4",
  "key16": "5mJ5MH9HTBX5XdonenCQc3LvTDW2EzKJiZhLd9NDaB6B17zu1Pcz8pkCvvpNtw5kxerkg94T1dGy6vkQb4XeiHrZ",
  "key17": "9rW3PPCQwF3bpT87Zvju9jLSfWCa2N6mz1D1QPZCLk2dtaWAFJBxpgSy3zK5zYqhfPGCspJQxrzU2aewxU7xi2V",
  "key18": "5ef9F6xZE47EJhiQSyCoqmgGj8uc97jCMi1MBWC3UGCoPQHsEXRkkxa3AhHJzBVKiHctq91NjmvW4fxzi9WqNELV",
  "key19": "23cy7vtytZQ9ZM4U74aJ4SZf4Bk52TJNd4PqeXyHnAMUYiH83SRm7oSQvBVaYrSKWHepVG2r5am71stfUK6Gbf5N",
  "key20": "LMmyk4cbG8JVouugzVhL6ZkjbuVBrbo2CmYhxwifJ1EEFiHAYmPpx1kWzeyqyBzorvf898h3jNUHAs6uu8D5zJ9",
  "key21": "2j9KQF2NYNqsqJ8TBH77hKiD9tJ44uW7cM7EHxwXDJ5m5CFhWuptyuqxQ2AU5A5YM1R1pih3MUduVS4ReHXQsTt7",
  "key22": "5b4n7BeSDq5JwUZvud1AwCgEFbttHzpiRzPgrgDXBUPC9tyDYntEo48wEMunTx8rwnXWPobr7TNtVfNPxgvD84mk",
  "key23": "5q5KHGSeaTxkMMJzdFemLP9AdxQSWAXppsKx7wXRmp3BTWkNXKXmpqNR6rgvqmtm2N7MFRyTC3vCu8KMm53yjxsB",
  "key24": "4q9mfcxbY4TRvceyUqApde2Pso6fZmyrDDP6NtAYmnA2VAKGYUq2hqRSXd8iQX9w4yLwxatSoeRAXVj6C6MenmNX",
  "key25": "29yUCLzuuuzZaRLZ8sMbij3ckfpgpxu3yTH6gZsZhUSGEwfiTU1Q4WmXJbSUSG4rdqNyaPfWfYi9qJec2jL7ZRLJ",
  "key26": "53BDtFRAzrbBBN5KgFjsLpY3XMse6Z61fm655UBEEH81mgkrSuaTEBCrjtim3m56tRFdAb2EtEtFFUfVt4HE69EU",
  "key27": "5fmsnKYVWVXVojZ7ztxQbXjqfUper5RkdFT42N3ASx23GUac82sAgHjjZhSY354RSidr826vFgYkC1rpepjX89Js",
  "key28": "2HN7M5NJgNbhVtTtYSYa2GrXrkSDqqnkmoXEJtK4qArCrb4rxcqXb36GSJr2sE27Rk1f7jtqYhA74w5r7N4qNF61",
  "key29": "3Pzf4etWW64ksqEZntMuQn5EyBqMnJXSgtkkmtE7GSSBxeqP6dhd6hDguSxKfT5so1G7tBVZH16TGc73ncLLtEFa",
  "key30": "67PT35vFQ8kKtUu1jeXtmjkZPeesQizPvxrMQxyMqZiodBbt9Tms8m2wSH7H6r5ANWzpAvRMQedS3Y6h11AHQQ2Q",
  "key31": "ZhigdKfbamr5JgqroEHzsjDTXyfm8aU8xnTDoR6RBMfFqkfCytjYLcvxUgmJt7FWmTqCvbHRB91RFcEcdxH7TGK",
  "key32": "4uc2a9K6ne3MQZDBtqQ5t2gE3PVAMLeDfK25csWCHimc9xhnHd3RV5mi8peww4BaGVqGYuF339jeLYigndzsGssM",
  "key33": "3PVMY9Da3qaajD2jCeDM58xWokmfigktto4KJJAfM2vkhV8tq8c4e1mPEjSQcGFUZHhZ4yy65QjcPQaG3fJPVpU6",
  "key34": "rraj9dmRMXSCtsfu4ZrbFE4o4Qt1HBkTgSjg1CfQMrSQjPs7CFiHndJbVCJnbaDzvsD58HxtLDgQCM1fcWwoVjv",
  "key35": "2JpDM3vrZQxHC6QFAcxa2VbRaRGv9eoRfCrt5F6MKeDNt5hoUNb3cPft7tHFgVSVNrR6mxJApCYpddgWXSXaYrLU",
  "key36": "5veK8yx5xBS67RXqM2cNrQhQyBpZcLiGuzeiB5dVp73eYEp5m8p7SW9GpGJypaAeLuCr47tHBXAo72o3Pps9XPmx",
  "key37": "5mq3qmVhML3ULRoLHkJp6Lj2ZrCG3aVPGMDJd9h7P9QV4xp6hpbRcaMDzLmmP7EsLg2oYXWswEX2vzwHbhZNuX6h",
  "key38": "jRoJwxYTHMv1dLnSu4AyNfYrqXt5yTzdnWgNCmhK5kYWtemAYcQ3wy1QcxdPFCaZfNtcTTQwixZpXoCHiJVX2HE",
  "key39": "2GazDz8N1Hpnv59fSqtgMbFJL4ng8VSpfGD8W89CswooMxn4D6B1GpXupFY4gke1wzMUs5kaxr7SAsmNsge7Ex1Z",
  "key40": "3Qju5SaMyZHGsoDLfPufD7ZbrkPE7zfLbzeS8ppzBPDe2zcboptBB7UfRYMShcrZCFH3rojTUgrbeMawBtpMJH6C"
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
