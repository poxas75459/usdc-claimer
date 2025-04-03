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
    "3KsgNMo1pFt8p2DPExiVuHzwWHJL2bZnqcv3stsS6rb8EuGo7q5hLxpLKJ7nEasjiMZA1Ceexh9vnSexp7x35jtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NqQkTx4kxvnaRk5jpA2pgdxHNbmCgFYTrQWpVwaY3TmWKC8YWkQQ7uh3kFsu4eg3BfCu9u97LgrySyQ5fer1MCA",
  "key1": "2tkfJgvCMLDsnZM6woBCw8MB64p2nGtK15UwKYAtAGj3fDw3YjKHHAzmcUGGRZ13uXsJERamZiz3AzRFLeqNhfJN",
  "key2": "tFEuwjLEYRWACZDS26nqL7r8zi1qynjsxPqPNjR3MErMUmYfTcWpwhjFBBRRTH1F4KY4SPrrD49iKSe5bPTwqT1",
  "key3": "4ozBsz7WvEctrnGVwFCaWeVgxMXyAPMom1oroE55iKW4M7nBpN1semcVaY6zhiwcsSsi1K3MrMnr8P6taD99cFt5",
  "key4": "ApJNCFiWaxrFmJuvkCYbf6MUFPEbXTcL8zuJmacysYQyzNFMLte67DQbCaf5EqyC7aQAUPRDBaaTCPRZ48ohEb2",
  "key5": "3nwiPdFxo76z6uAiDREFZ8fWYj9HayZa5vyihBbPiHyog5hNFLkpqpFwnPQk5cjQgHrHmMksofVmCu3aiuDJviHL",
  "key6": "t2nTpigFCtz2Bs23fWWQVeRQpCDgook3GcLZjGXVWNU8TDn5A6WYHsoz5MnuU59oeda2J2HdVbwSk3ZEFtB22cH",
  "key7": "4acCfgeVg2Eih4EZTGEiQK7c7b5xoPpVaJV2zZCiD4PiBb7NP52Mmcwm3GbBezxqc8SGVWDDXNcMEVX7DdG2Ncur",
  "key8": "3i2L3FiSCB4Rbmao7eVGVoPxsQ3SFxZHKWNUrjeHjuR9dYfqMHsM1e9v8r8M7mAv2JWG9Es6zpSWWCnMnbDadp3p",
  "key9": "29fmuyfrYgsffY58yz3wEHHVtP94HZ3mZyiNaN8NDxbTsKjLHaXhs5NVxUeBcmdEQyU7FKPXbC8mX1ov63ZSMa9o",
  "key10": "4W1DcCCsVdozNh3CiM2baKTEygpHy3iJ9RjpYcR1kTrBBK7fPjhcBfy5zYXtLPEYDvPQLSeJbhv4L2qZLqB7ikfk",
  "key11": "2cR3wFEYm3EsVqbt4qAqi3cvfPusx9aZZe2uaYN7CZoLKRpKSTxMVfQXcofkrQASFwu2d5Ct6MNEYtJ7sg6gsU8q",
  "key12": "43WpRnSBWvWLYfe5qG3ZTMNoSyioS7x1BYtNUdj7Yf9Kw1E4npe7rRn1tLtYyLQhYenxvPQDvnxiTdcBox6xnvgN",
  "key13": "rfTJEkJyDh1zUCXuQMuowHnHYLQCfK2VnicifwugENL3pPFyeXnpmphhd2MNwdmFpLDFkjMiZkdhSCrM393gSPt",
  "key14": "26aPN14E5iM3mKUZDsoUw8zzG3oqaTbJ7e38hDWv6WLsk4RVFfzuA89okHmifiH7SkBSdPhPN219BrrpcgkQoZYX",
  "key15": "dvcsRZcymhpFqAkUcYWzKuUYqthHViGbygdTwWyQq117J691vTCdPHspzcH7Jp3aMtJhBkWszT81cCqE757UFfT",
  "key16": "4m7oGGiMGYpYJVtKRsZjZitDPWRR56C8u9SHrmRSAPxA8yQReuAjYwLwYsGMQLS5d1F2rUuHutMcqQSUhDFGv2LP",
  "key17": "4dYen4qWMyZ1nnNDuau3tChh4xqdoJxfaDzBLFM53WY18uPbfMGRpwgxgqxo6DW9QQLht9grHWBw74e4caVMFmgP",
  "key18": "4CoVcVsACoagcPccN3ERigixik9XfEKvgrcXJ5xaJk4ucDcy4NRai3i15mwECiihfcjHgyci9F7MmxhTLiahyYah",
  "key19": "5UyhdbpCEmf8ooZS9sXVqiYaFPboXVaTK9pyzeMRCcbTz5VDP6dYtToUaURmZth6rwz1HJLPNptSoB9ratGBBUrL",
  "key20": "57k4Z1v8eGzvGKJ1tjAFBSHqHHYoznsBf6KZcDeXh5ccshZbHS3YnyAqjCNuysmGmg3uLaz8RF3pffRnxL2KxZRp",
  "key21": "5BNjD6ZmGGjJheRGqYheRKmzLYWJtc46aqZrNB7rjkhZ3VMKdXKwBZW2cvYnE1xiq4VdEkTqmnEvtPcJJn3GqUYQ",
  "key22": "516VnyYqAzbKdFjBcBqUaoy59p7dY4wjS7P2UmvruPMMMouwvrSVjFdpuuEhWhvVLSCwMhHX3GYomAVrWXwfTApA",
  "key23": "25NVxjKG3kXc24MCmBQn5h7S7hefhARCtmpfgBhnDFKm86FYXRkja1UekRcidLqqbfdaZAysafreC68MDLcYcsiz",
  "key24": "5KK97WN9RxqgMhdE1xhB8JdLo1kuYapTbT3QFj2y8jQrSFfMmNc2XmrRC1RvVQyQUNEqtnTUh4NH9m3mxBJBSz1g",
  "key25": "4GukjXV69mVPTv4ZQDAhia6ZKPyzbjYKZAi8YyWSqhv6NZVmVZP2hd33e2PQX9HgcGMh7AJ9wG9mmcb7VG8uGrpn",
  "key26": "2QXjyw73FgKs7Kn7ynN3z56iyDCJQNN7zpUPNfjhHmAuhvJ9GpSyynxGqVcVwCL4L5TQunApEdVbwUyEhkwXxZqe",
  "key27": "2b1vKu2BoCBbXdZme59b6U9EBdZxVjaP8ETUkr9ZNpxbwrCN21aaahkbJJU9WJs8Gh2PAov2C7ycDGfzH7EYUNG5",
  "key28": "a5T8shwuUgzpJo5jmc9H9KewMB6QGP6XjZCqAFzecgk6KpDTdzaijd4FGZQM4Y69BFCWB8wJ4JgHuVruwHqyaj7",
  "key29": "4jrQHP3B1V3ZmeiVnXGcmCDHgDbuSNdvorvFSP9x1DN747Dyu5Q2z4q4vREaUBGjdVPjvZHbS3tFYryo5Pd94pd9",
  "key30": "3UqibeHafXA1UzTWpn7hs68zG4L4UTwh4xWuoRumk1cVpRvfg5fk88vC8TTvf8HHL6NNEggQtp36miex9ymew96z",
  "key31": "3ZiSsMwF4x7k1jpyeZPHD2mot9NAUnv62r7MqvF8p9w6zmntNfZ8WUQRjHJtkeKQWMYNtvhQgDSDYJmEwtvFdx7G",
  "key32": "4iVSuPNgCwD4fdwKYxLPs22DA93LLU4HxxyRJVAKqMnfGXqzxq3DfBdDQ9hF6Ji46TcV6Xhv7k8GFRr5RyY1i4rp",
  "key33": "obRhsovQxRUuL93ndzjivtLBfKi4N6Mbucr2EiqbTnA4xcEznDWYY77xW487oCnGWhGCNUSyXgeUtKxwRcfw24m",
  "key34": "44vkGp6yFFtRa7eEkkNsDQQghCqo3yPSCdqACRmTUNidU7j4y546fgB5wB3gsB1eVNpQaCiBe42Ho9LJKFvTLwpC",
  "key35": "53PU9T6XPnTvsga1ELsKGbZjNv8BNd2zrdAJknUYKEX1g6bt96S7mNRtcosdFh9rsUcs6m2HmC7CoRiTUiUiQd9J",
  "key36": "5k3SyoDXddsPK9QqqveUNmYrrCVedd8ctx2HoGGtTW1jnf6Ey7SUfiz9ehmPQyb7ow5Tgm1YQNX9vFgS2peCyKcb",
  "key37": "HQMjCCQ2UCCPML56cXwdC6v3MrCt82fCc7aMV8fWW1Tnue22HubN2xacmzC8aKCT6jMWRnfyu9Dh7o4q2H41qke",
  "key38": "9QV1MVB3EY1hNQCznctDTRehipSdAHMYuRKXTA1aBAYcRSBedgrdn37gC43ygPcSvWd7ANvRT4KeSh1LFXwsQ1R",
  "key39": "2hHAEwuYLRpNL6BPPXVpFpadHfD8FTHMiXvLrqYfHnuzyPWEA6yrDJ9cFCW517uqS1KPUSA2Y3TJzzqxqY94WYts",
  "key40": "3FwRqqSesChPzSKUw8TagxfSSrvpdZC7buwN6k9VPiVpReiWURNjeGzU8Jve1RBrMjL3L1i4hrqpxw1VjiViExgS",
  "key41": "31Wbdmt7pf88S6XSnj5hJYNoRNGKNa6mVudwrUpBDEK6vJFgCWWrJgoqwRcRy4X8jqotNUtkQyXSW5XYXxwocqCM",
  "key42": "69dYJdoLzbcvMuPitadtPvyfYb8N5jjYQYz25FhvADBYVGAQaEYhRVV3K3Hry57WuMxiSPoPNJi9W9vFPxjbVQ3",
  "key43": "58YbikpMQXkgAWuDXLv2KsADZNeXKkLfBLymXNVZfocGFbrXvMEQV6QV5SvkwK9f75ujkTmyuA3xvgdJfe3rUMqW",
  "key44": "2bxnchdsQvdwNfNiUQoUpt4N4z3um6Vs9A8puitR8dWiPuWRAUVFKqpAuH59sVrEz6S2M28RXmmntfJyGRyMrGZT",
  "key45": "wyJ4cbTq2VCXvzvPU8krnnHZKq6QQPWWuQxCQYJ1fWntcBwzZnYdMNpadjpeJMBCiBeuAzmXDfnKwfPVZ7823iy",
  "key46": "3RrGfrirJrUyEeqt2ZvqHemEJ2pu5956wGPHYKePjCzVioEzKa5qfPeQcaLdjVoB41QMrq8o4iNtSB4d2fs4u1Hh",
  "key47": "5SrdeSNxRkdXy2eMYP4QLJ3Cn6dNyWQW1JEB8eQj1qbLDPp32ikdrJ9pjobaYAP22SNm7yHNiggYFmYG3tjZjsA4",
  "key48": "3ZU9HVNabRqBEfYFSvLRwNkcg8fz3XetPwqUnGFDWW9hDMUv3cM7UTn135GRQPnjH2pys2dVjYWukFUYxdxtnNAq"
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
