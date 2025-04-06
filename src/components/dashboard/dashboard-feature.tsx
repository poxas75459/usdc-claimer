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
    "setAB88jF5xBnEF83kcsg95HxmBGpki2Ts4M7BHSUVZgk4D1Pf1qcwccump9ruFAMwn8MFPi6mj7zUMo4oGA8in"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xhj27vcyEmqf5D41AUWH7PfKwHUHst8sQqFzuX4fd13NS16uMNsXHDasQwTuHXTewHtK3sWh8u4w1X8a97J2AmT",
  "key1": "3WzzdBRSnLv1b8RtPd3df9QNmxPqBWAqCw66bqPyR6SecQMvZ4UXKfHrruKmnQp5C7ijy9GyPZTSG8eTkcauLbRo",
  "key2": "2DF6LHQz5wYHmNuxJnCRY6LHJ2Mzfuy3BbiGtjYKz6vcTyQUEHPV6dxEkqgJzScETAZnKh9KQaU24ekc7vCcFHcj",
  "key3": "3MqGYnMuKQuiKu7fSVANNrpMvH9a42WQAC4U9HkJNfa2QqCJcWzDkJFaBna1oRbxshP7a4YU78RAeNtaiTDCwqq",
  "key4": "5sYss5i15MLxzvTrq28u7M2bdvFMwj4nSq29D8qTvoHjDiHM8pkGJ9gA7A2ffKBvwGf6e5A1wpQMUuWc2zssp5hs",
  "key5": "8kyKUAjddjNNuCMCSDL53pNKrGSzKepED5fqdhvJf48XDr3fovcvZKkBPQsXw44uao3L35ESHTpuAZKEx4Pfz1g",
  "key6": "57AYG8qw9T77cZAGm6qGdGsm6pVbgBcL77fz3N4ZMUhQcpQM37ibRfnztNWnQuFNMAZSSCCreQRWX2Tmuqy6nvLn",
  "key7": "4gTgSdFv98MEePhy8KgKj96TrZjHTm9ycjooxT1yfW5TA5NjVVS5pVQWLBaACHc5QcQ2E8VFAk3fFCYXQGktaAau",
  "key8": "J8m42tbjqeziqGtn96gTubgfej2pfhYpd2jWuwjJxMrqcJtzc5qgckYd5BP2oZEKfKguGa2PpJ34bQTqujBTrLc",
  "key9": "5MD66b7fj1VjiajxT46UTpqyzuTfhWdZcZadAxGq7B3evAVTixpsSYEtyjZbxa9bJ1HtnCDQJyVpMH6bLSXqFYjC",
  "key10": "rCknRfPP6ELAnQ4arwStXvVC7h7NRq85ta6qyjyzfpBeNzT8oJQyBChoHvNBym7kYuHj2ThDjbrchJPhV6g5M6e",
  "key11": "5e4q5h5jke7yZojs64VrGF62KprZsQcgwMnv2XcLecFBDdWYaKqQWcRU4aUzQWQgZtThifM8dRtff7TiRLfiHrXn",
  "key12": "2kT7z8vfv6Q4ZoARi4go7fuKwYzzXURiDLL51C4dz77WeN9ixo29QFAZcM6TU7vgcmbHzdSq5ujGyyXqXfvpA6ZU",
  "key13": "216pPTXkgLEXCnXAEqWBZkRn7PPTDgUKdbwvevQaKuhtSQb5gyKEtPKNVVpcJGbXtRqteq3h9Qk2bJJUhf5sWif7",
  "key14": "3X4YftNzx6qPoYtMYDPf6hrzCXPvowyeQSH7ZESN9VovoS3EUyEgWu7ER9wc3PvLuNb4uoFCnMDhmJmFUkqdXfef",
  "key15": "5UHhBHMep72sViacNcPQQXzrGgWxdPcemcBqivu6Hpq1hC4QpSSdiYXEQ5mwkwy136WTVeNBjoPeG7GBW3Vfb3v5",
  "key16": "5mpFWuWvL1pMXSYdW1cJJYG7K8Qssm42to8Hedp9rEvHJb4EMWctXjSb6RPXgeXGxgPiFCghDtnFhopLwJB5tV2g",
  "key17": "3in6KkFtAG6SgHHjFGnyixJsrYCmR8KnGEUn1vpR1A1vBE79fafbdq7h9h6Ets33ydiw2bN1R1btzzmLZ37UGruw",
  "key18": "5DqSs2HjkQJTJDKx1V1xbfp28HhrjK98g7St8w4C1fxfdBN4UFUJ4xFePoAMEpZgZ2iEP6V3iguvwruH4541bvyS",
  "key19": "31xKsWdGAYMK6tp5veTqKozezzyjvRNBnxNnaGwPAjpaFyW89GCw2zgj4cY8gSbPRxXJVEjc9FPBH1WHH3Q82yts",
  "key20": "2rL8jpdUZNHPGwoc5TbWR5dpGda73yofyCwLxomk2SBKJ47XJ4jpFSzzQTUbMyCBFKC3h6ycggQR43LzPSm2TNs1",
  "key21": "3keLwh4fcgyUoQ3fJPS3kc4wkHwvcLrBFQbRSvBputuR7car62u37BRzJjvhSqk4tRNgGy3WEY7bZSYKaCueEpgi",
  "key22": "346L2gUZwbkf86F7Gf8MnjRb7xMT8vWDsHJhGetG7PtFVYdmrQXViNYLt3y5r3i8WZRMg6nJLc2QdaaUexQKgJkp",
  "key23": "5aAt26ZNhRAwpGMh7GiP7y64JFwvpeLQD7DGvNJXLrRkBiXX2U7ofNQZW8H7ECt1joaQGZgLh2ynjRJmCWvXe9hU",
  "key24": "xD33UVh8c9HZWusFKPS1rZoSVDKWzTYPkGrdrTruTTdVHTFCXSNVm9LV7yqe1xGoMPfgGH4nTtHNzZymzUqFwpP",
  "key25": "3NktF53mECgDQVjcFeK8CoDpxGG8R4AASnv55kvNvRQ56aDjJBaEGh3c1zv1CgttBviYhNu1Hnw1aqiH5WCFa2kq",
  "key26": "2egAHWaYMrBGuS66Rnwn4tSy6RvNBh8RSpPCAmQnuDCyeg9iouamb32JLsrkbgtHQjrMLJeYdCdfz2Zjxr8SvsRY",
  "key27": "47pUPX2B4nLab7NF67RdXX87BKr1wFB3k6A2DWni1SsM7YUuipAQeuA3mxWeZKTqe9LkB2HopUXkYEfxzL7GwbyD",
  "key28": "1rrXDeGeLffXNeMikRZ4yi59Z1f5ahwvtLM5VoRtc62eKFqii2v4yB4WxrW3zyAScfANzDmBLrXEtiHffcrGmpD",
  "key29": "3RbX8KCYUmfxR9cxD8TueGzEoMRrmrN93AMdu8gD9Lxgq6MCY1F927ReMtXy7PAfqt34t6ZD21YTj8hwZSpvs1R5",
  "key30": "5ropXQWHDswjkEGQapzXYXutEngsynhxwJzAYUtTeSLCWVMfPCVvRUuYBvAL4WU4cXu1KqQL8nKa6PJ7a2XrrFtp",
  "key31": "2fwe3zNXmNSLkkCyXAd3DdB4vUyGozYJWJCXTzWe9R2n9ktRdF74tNheccfyMazBZEdHxTrHcphvf1T1b6hz9ZoV",
  "key32": "BbE7MPnTDNisLXHfG1wXh9XZYXukpgnEQedCFuaCSswzW2GA4nBtZeJWhWkRfmN3SHQFBTJN2afXuRgYoko11rg",
  "key33": "3Jp6XsiiXyBLRCbN4G6xxEij4X6BM7UeBpeAwtpYQ2qSdfr5MP12GPDQeHdiLmYRnmw3CEzNcEAbvVN8M7cP9PJs",
  "key34": "2Kx7vSEAUMaU84njrwo4EwDhcfsFp53r54XUbPXGePWkdMXcp7ChmZfYfqini9bfNLzqLv8kLYvB1qijpVjGw9m1",
  "key35": "3bs2sG7F5DBDahnnY2guDMjag5gZpTidH1yE33xcGZVPyXpJLnWLqQczKUCncuUaz4T9GjeFotTv1cddL3SsQQAG"
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
