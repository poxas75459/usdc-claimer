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
    "35Sakk3GWnNaeuYx4j192L9gUhsRkvTonSGFkVBqjPvZLJ1FzCBRLxCRG1DZPybbLK4UQLkQCivEFj3Bs5nhFX6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BErcrcG612LBXmahapoNdYoa9NM8JeEvxpL1JwcovgvyxjMceGEF63YUsdY3ihE8w4m8KoHuNrSJrqTgQUyefL7",
  "key1": "4L3istynS8SSd9iq3S1qdsi8BniUmBrPxUCmwPkcDGxKV6YzicfhVScNrTQ1MdVvRMppgsbhJpdqhrRkf1XRwK1k",
  "key2": "3aR5qbFRXTv1zUMmhkKJewqwdv5tBF7n4s7mZw78FEhwdqs9skhawKHVLvF68pCYi385xvXTC3u7jCHb7HK7d5dw",
  "key3": "5st4LVYuZ6obytUVbzpgxMZ8S2xL5hRvUeu8G53rh1dAuz5YkWRtL3HhFkbm2NZmhnvKQgTWjekoiTbbtK6shBuJ",
  "key4": "4YYR8P4t59xgGAzUvph2tBL16HT42j5NYLQgVzZhT3JrxFvDAGBGTRvJZRyAn2iMyPJpgBtEUjxFdWVcXKW29QMn",
  "key5": "5DHAJy9gzYmddqUaGkXZA8qJrZtWUcrS9tCcEchqwf4dbpHXf4WudgeYpbU3KHoHyvuFU8v42BncernNGacLu8tG",
  "key6": "5G8hAcfBQ3JVCVRdGN38nRtWs1sSfo2mcUd4mRft4T4HSTtAMweFFEmKv7k8P3UW5rUi1sazJrMWcL3dp5ZWuBW4",
  "key7": "657bwtDBxjtyk3u8Crwcn17UU3KyFbwvf3HHiejcKth1GcNSeAQMubVjNPBsuPVqfNhVwMXCn6Usc6BJByCLc3ie",
  "key8": "DfuZm93zLPvdBeRvepswBPxSfru89AEdzDRJbcx79ZJwKbAvcX5YNkhLgmA5JUkU4c14rtMpTBeS4W5yKbqJbB4",
  "key9": "zohJMJVojyVRbxURT6aahbr7FuZZeR5AauCLict5DK3fWFaZK6dkC6c75P3JFbCUojreYwK1G8QYk8QG1yYnv8R",
  "key10": "5CeejpGxDT3J6rQNa8MsRMDFwTBeES42q1AXhvX8pKKv2yxmkLm1P1nE1CPs6uNWuUTdaK5Qw73vUYnu1dDUVBmr",
  "key11": "2HwmDNS17Kgqvsa6JyJ4RbZTgfGssRZSToy9yMYoqjBhpcf7yi6PTsSuPcUqous4BF7Yhq2aXKvdsGPLzWGtQBTx",
  "key12": "4bTsakiVX8o5R3A63HGpFbWHgiQzoDB2BB8WYpkJV3EE2coT1wAGRgeCXTo8dbbxengi5iy2BwvUfU3SPX6GED98",
  "key13": "nT84FMVb7pWShcsohSkeaZt3ALZzAXY3BMXsaJVmeim98PyaDF1A4DLMXCKQtLxbGJMDyFV58P5jdKvX82fayRJ",
  "key14": "3dZ1U3fmrAbdpX8dAFMRLfnFSSe2mPEisVwi4wVkoQHCLodvT8tBg7Dc1zKdbHqvKNVnRUQgmicPhsBXHAFPJWem",
  "key15": "5AscLpPMt7QDKJR6v7ipmqNZxJiyb3xSBkMVMy8XuvBHsbMdt68HuPtEa6GW7Y3wPGoqc41DDWLT3oGpdcg6dUMm",
  "key16": "BovG3gp1Zu4ujzFYj333TT1C1PUzK2uwsNE1eFxLP5ntkSRv69xqyszFZacpEyLkD6Fqtx5PSGpv7ojTJQSHRs7",
  "key17": "52SRdZbhvrXi1WDusAHfqouJ4LxwvmkL3jdn4BBeM8nPGqcStKxwTpzC2sV4sD7juJbLrS1sj4iE5VWjUm4rsSys",
  "key18": "2crMRTtp1UdZuvMfeMfPhpjAKPUDr34cvmBmLxD1ZMDmLhv5zKy2hyzgH9mn4HostnzRA1wFZVCotaTdrgxS5HpJ",
  "key19": "2NfZASa849v6b4J8cCU4qw8oHaFXXLLiL3rGzAFbTgWWbjEcCMVvc4j5xFuk6DKFF9peYy8VeuMjRn8gxU1KJzxe",
  "key20": "4qNfZNYJ68bqzcLgTHen5YqHH7HYr77R5zmDmwmXgw4C7GsdmDN2yDp4nMKeuqN6Pri7rr7H1MRe7KSo6vCFnk5n",
  "key21": "5rq958gwdYd273Srp9cE12wg3R9WERVTvS9Yiqv3GzoMJtvugHwBqTh6Vz3kWGTnk4vxiz7Haw4XePCAvVydtiba",
  "key22": "4gCinxvxHuA5D8n1gX7jFk3w1hmmcYXhpPFx56pzfj23EFXsLrfvPYhEU9uMEpsNrLr9EtBGLjqPQ56c6sbzWaE9",
  "key23": "4z2fjTBx4QY88FovoKnSVYRn2GAqDVaYAmGHmbfNxJroAfvGmz3TuujxWTJ3Q7p9hwv26rRg3KbZtacntGVQXaKA",
  "key24": "5a12TZjqQgoUpHmMS2MY3YYNNrk5VmTnkt8Fh3uh4Q3kkbPEJPNELsFhGpqMfaJmvfB6ixvoGCUvvoLCCBSMWn2H",
  "key25": "j27bV27uaTYUvF8HQvgrvXKAhJdVoi1rafz5gTYYX1hPBLqPo17B8ovFDBQD5xdAu7ZiyWKk1PbuyrPYBv81ZoB",
  "key26": "4krNLnNttEPuFVvMSEJs7hNiGGPm1qgAARUmZz94H3TETroqCtw6LbmrfC9Rk4g5FUgneNSekjNRxohDj7ExEWwx",
  "key27": "3hGiYKoE6KZWhMpJU4qUp1Nsp6y9vMYhWUixGZgCMt1U42tBkirmXtsiggJnB7boW5C2HnNfZysbC4UaLhpPr1u4",
  "key28": "3QgA2od1MESnUKiL3ER1hgM92Davmbie2B1RUwFKT1rS7LWMu7ELBgh1D4XYLzBm9P6oA123h2Swt5tbEYEEd8JU",
  "key29": "5uWFfGLNsU5HhXXnk83s1B4cFdGxq7Z29bXGcf1U9YjKsdUCRSsvT47tSHeYmcfgd79neve2G2u9RZC1sNj8AjE9",
  "key30": "3Aes4sdDqnvSGaqa6oPqMohtf8nyprM4z11PgsRN6YmJo5pT8eRoXroSR3hpnEnxLMpmVYmDrVwY5aXK6VbU8VRi",
  "key31": "BtL7t4CtxpFHRWCss35rfhwXnLAp4CUugZV9RnBGVAt3jXtHYWi5h1D86VM4AZ3EUju9s5bKYp1NmAipnzasoGD",
  "key32": "mTVNPEcziFHKi7tE9QjKMhdGdYquaWi5Xa4qgttSfmaVBr5PZgZwq7jqxvdPMUx7jsppHMmq9EsTWQmYDuSMbgS",
  "key33": "3eTLzMWJwQUBDxGbnLYKUEejc9yM8eN3Ye7tLUTwG17DfGsL8iWzKYn6Kv4giWk1L3NBCbkvYU5DzRXcGNgNSxZB",
  "key34": "4yoZi3V6j4MKKv9jsMup9JZAWZWrvuE11o1j4ypjgUfrEg96vnnjEyRKuR7dWjRbgxQLhzn4SqfCFjFbF5S2EFuW",
  "key35": "4oc5Y3CL1erKLRqXzGZWpZL22LJJQVmHLDfezEH1rT6Z9yrPUXGJqmPS1WH3L9WNXM2spRpCb3NS9rHjRgcirz3A",
  "key36": "5No88ifAtEhfNCLaxPbQ6GGvKVFqAXqRaMLZPeSgXGKHdoNJEK6Xxe762SXus7Eu9t65JReJ6XBuEQFRXKftJ5U3",
  "key37": "pmqNgcpD75ntTU3AePgYPetvw4Ms7d9h7yZA8x3qWb7drpuCgEoXefws7ZVQvGW23TSwti35KAfM98ugGe92QL6",
  "key38": "2GmkzRzUzvLLR4wiFCmC2FC3UA6AZZPQHNVGEufqaWVE2dxdgRhDaEYZMZhLiVNQPDh2Ch1atmUyC5kPFvEZvuux",
  "key39": "4h86bHahHYeBVteadg75oaBc7jy1cJjwGn8mRZ8nPHxMfsoPfgm39VX1GzWmankRSoxH5o4k4AEVvjJPMHXJLoUg",
  "key40": "5fjGMWn2xB4ST6AVBvJWCVMKsbiSLz5TVhtpdSqdpuN4WAuqf2YAVnFDn4hA6URAqXYsVsVQCEuoRSioRat1w4Xw",
  "key41": "2n3dEi1GVm3GgwabJVH2Z5dJ4AmJWHD9zbpQKPBK3EHi9k3oJn92NJjaMFWYYupoZkmGuMdk2mhpLzZjELTcV8oW"
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
