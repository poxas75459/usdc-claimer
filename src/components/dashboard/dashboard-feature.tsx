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
    "5TBy9gVZU52HchViibwkpoQMWXBy3TvqJ5DZdndhdfd8mF1oyAzL4gERjSjWF7xC7N8d64ygtbtUjDncwR7f7FoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53QK5dgc5mcx2xvT2iNjh2zLLx5x3JQ8GGqb2TpoGAzi1C6jnbgXX8QcVUMpU5YN8fxSuqLULhyzTqRParKfuU6D",
  "key1": "4XRD6MUmXaQ9pHDLXDqak1Fw7eyjDJbzzniBdhq13yFSKmjDRLfwajQBVDfE3yGR6adDQoAsAD1L5Z35xsZaqUCx",
  "key2": "BbP2qc3GVvUTQp4GCyCoTJjHPkhuN4Co7gPmQiicm6g3hAdpuZR8RQV9S5TBqHxDMuaKNVjD8c8w62e3F6jJGfS",
  "key3": "34MYr1SuwuGJTYWdxopUYApXmmXaMP6i6EtqtvAaz4UKafK1Lh462RuAcJTUp7YrYAHVH25zFPHuWVFzP9QS5yDf",
  "key4": "3wTTv88pfqrktEi8uYovdkpskipY345JrktagAto6cWgsQggptq7ZrDxatcMJUU61BfzLSm7qG4gG3EpRPbCJiRf",
  "key5": "v1Y2KgSScMP5Fn8L51Ux9eRx8jNoZSrUeZX9eZUrWZ4X41K68ywNKt1PT7yveskQN8JW7b9gdXPYRRmotHXhXeZ",
  "key6": "4X8LwN6FmXezSNyg54cZpUBigSVDGmmj6rKuHPDumtFdErFi6pUXt7DSoJ8xJrLueMtzD8zMq12eWdfWySZzgSfd",
  "key7": "2YM1FFTxEs4MK1RyX4x5ygdgnpv19ayp8AuNzoVWrkNu8bywoiVeRoA51JnjnPCAJ77HVsrLR7utXR5fryuHjeB5",
  "key8": "4uWCHJNH1aHgAfHCMYN7EAkG5uTr5q9YVJJ6LJD4A4f3CJnYX5ugn744Bv5api2qBDX8WWS14fNLTRLH1jj2eiiH",
  "key9": "TtxBAacaoyLDS5os7AdKKBa5HH4WqoTudJChGFLxUX2PycDeeT3Dn4paDHNErPxipNmYCSzCzwNxAbMpJXQhQJq",
  "key10": "5V42ikctsctxkJNFpjc3cWw3fgNV7QxV22GskSfopcnKja3A36Z2k5KBYZCzE65NvKqgxybJ56qyZevZLWD7Ai5L",
  "key11": "2h2uhTeHLAZnSwjMmxHiuf3eMdz58bKmdSEcv3YCgF1hdK53dgyUoF9k8t8ajeoZN9GTK2DwdRoMj2yZVbqx1LeK",
  "key12": "5gbWAq3ZoCaikcssaqvTVAYUSwNhi3Srmshi8nt6TGeWHQy4YEta5k3xpyVDJm1s5wzoH2AZd3SrRPLVRBgDPUEK",
  "key13": "AKtxYeNBbVYkXJ4rgsV1wJJzDLaRUqBvxL15bywSNjmSo8CJXJevtXctSEU5kGqPWo4aeteBFVxV9qEXwpHVexK",
  "key14": "2j5BsGSkpiGCYSpV1te11wsPa41Ca6tUgh56zHFShLVrsK8p9KTXHH55D47wqE8YPmsDaVYd8Kzbz75pxfHDh3H4",
  "key15": "3HoV8EkWySrNEYrCutAxT7TRfurz93YJbhCmNXQL7MGCERkqhfzqnEpW8buiTr1cDToCiXY5ejGxqDS7tfR8dWMS",
  "key16": "2A5dmZCJw7NQrBUnWYvmjnqt71kRxvCutyCF7tij29adDCfwYroqmkStHRKiBBNEDHTAdwJqPZyzmfxrCBHdE71z",
  "key17": "62R1FLPDmPQfJ6sQX7NvWtvm9QxKSeVQAa1rHDdqFYeNnbtmhKt1KX5CMg61GALtSzKuXeMuhxdBKgsJQ6uthyrn",
  "key18": "4rWxwQsRaFBvB3NzCWieiosvbLVrwwXzxyRfxquEk6iESw67jtmgk7Qb9A8zPb3Kq9Qu1D2hwRtMzEQUYEkZJMpd",
  "key19": "64SreCDM6H3ms9zKuA2A6pdjjbNDmiRJigP12yKeZxphV19cXJeDgPm3uvEZvL1CLwt1oPKBzpVGabNGAJyGo7im",
  "key20": "33uztca8ehuaiwdq1J2kwMMCHZgDWhLRm9kwj5jHRirfcGTNPXYDtfw9SE6Nz9HGTP61p1HLgA8eVpnfdyVTDino",
  "key21": "4w1w5NQf6WBjkqnt8s5KPRs9HtgJ3vnjndZZja3bXsZDZTDV1MmY8WpBzr1cH4eeAtnxsGtRrD6ohUnURaHfpfgm",
  "key22": "4ByccbPgMhrdvvpRzR4HMSktnr3u1kMERd83ZyabX4WKVERYNx3k5ZFJKb7bDkTBtJSk1xCxFRG8XUG8gu3WGY4z",
  "key23": "4iUvVkaAruHe2DyJ6ALiS4fAiZPs4HJmGuPK4SW7BU2tBtciLv1VJRrFkvJPYoDfrv5o6PFmh6ZcrJgiaqe38t3k",
  "key24": "4UaLhtPbdZYfpucRggjjxF3fdfBwstgRnAZs3dv1ZoPznViCXQZsmcSPTRNnaLFfxFpZu8iJcf4S7c1YBgojLTBX",
  "key25": "7ppQaFg8eDT8C8zfQW8Td6Ds8KSxB3dDDTXHH9QzkbEKvpvnpEVu5HV2qRfJB6HL8httx9tzogpZ68T8XCEW7xN",
  "key26": "BAyoEwJ9zuQ2QiRLCjc2ma8Z5Do1u9xMp2LqRQ1RB4CEYryyHXgNGozvJiCt9KBpCruPWD6qnK4NpJRcFXzmhFZ",
  "key27": "GWwvmqHG5q97c6XbF1QCkgs2MG3Ms8otXNTXwVrVcn2RxR88TDXkvdGHVv9GDZGi4KWk6aq2PdrZZ69GKnmbqNS",
  "key28": "Hs4hQL69MeXn8nrjwmjNQuA4X5bb8QQi8AhXphpnb3LW9xtTGFtPExTm3MXMFugC5jvhtpSi5XxLA87B12NnhkE",
  "key29": "4mMJhGLmVuVdhy5ehQQwdCcsLfJKsZXKjLys7EwYDtiz7aHTNCrPXu4T9c4CYihDNewKm2UZzZv1sS8DNokuUfee",
  "key30": "4JjVdCbs9vD5zBa5e4oEcoCFDT5odvByhfDWYhH9HbiJbyX4tCLNUH91qzcmNctrjzXoAbQTbMkcVBK2fHgBSZSQ",
  "key31": "66ZyR7SGoV5gxEeYcmWLxmNKjV6riKqKb1FBo1tNNoi6Gmtk5HsTgTRmsNQwUvCtg9YnqfPEHZDb8d1aXuaUZB2z",
  "key32": "39WhHDCxWq3FHPtMc2aQatPcLtY8HQK8KDDp1m7Waq11C2ZENzfWBunSXHV8PcyuoDbymir5oixwsU5TLC4yi7gS",
  "key33": "21dwqahByuQkSvkzpUVQ6GkZY4HwVzETMRUxeKpAhbyWA44zijcUiFpLHnVyASd7MfHtz3ocxaq6Z7iHBZYcKWSv",
  "key34": "2R4vsgLo6rBU7pSWgN7ZHQGsA9CYgrog3WFKXCANBUqh5riUbNfP9Xq2b3gJcGR77iAjBwYqFAoAuDMxN5Fn8ibJ",
  "key35": "4dDsqpZHrEzQxBkvVS28GdQcDUcFQ6BpnR8ghHiX3Y4QtfJPHkMJkvnBvt44DNorVakVXBU9JzAkRaixEtaNCeAN",
  "key36": "3U24NbnQQjD5a97HPDXqApW8pRSHRDZJpfdAZoAfSfVKV2rLUg86p9YzQQz9UeGUYA8s2za9rqWg2zWuQr1nyWEX",
  "key37": "3JyoitkEzwKpC2qvqkwTFuE2bf9UwT66gAZ3DJpgVhTm4v4RTszuw49BYK5CfYnwYdnNi2Kpnr78iztU3yPfYMrF",
  "key38": "2zvJdhHrtFPxr4XLvEZRfKPmHgzrMcawBH3awQ48C7PQJGQZV6j35YgYMaGM2eK9uuk14PdVCWktUBKrqn1FQ8VL",
  "key39": "2Bs6fGSrNq5NPh2YpRGPXKUZF34NT89sHUp9Ay6sXzneu9UzB2qkbTvVxvHQtaQyoq9BUn7tQscfqkUpqbNeTc4m",
  "key40": "2D5gvmSbr4WQaRUboir8d3Lvcx8nmSVtfkfqRrynFaijjNwyf6s6fWgt9LkjPxvkfeC4be6ZPY5Rqdj4UFYL4d18",
  "key41": "5CjyMq7qidcjGf2CQQ3JDQ3kocXyULhubX2wjqtUvxjquLZGYEKdCkD16ah9uP6gPeLAUB5PMNqGozxWLz8H8DyG",
  "key42": "5ueSLY7dcFtZ1mRJZSmCmmo5bT5UHcuUt82dkwok5iejQVxLBGiXfzjUS1yX82etDHuMDXkCh6haGTQnt2h5kVBm",
  "key43": "3EQiC8AyCYTqb4ZMCHgLfh4WkP67h2qMauab5qknsmykjj4YsciXijoYfgYEZKtBSxEMbYRBhwwHF7fYxxHSMc2n"
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
