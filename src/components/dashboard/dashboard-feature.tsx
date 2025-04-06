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
    "2szNWFY2vkRooZfuy2ViSDrPHELUQWfDpGxgab2gLibDN5AVW2xS57ZDz5SwDnvuX28QyAyrNTzHPi5NfMzumDaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A9BWrTdxHbUSs7hu2Xg6TN1myGcH15eyzVF3G1tNVCPv2Jn1JCMYv4WAaPg72HWtEji4qaUeMoHEvnBTa5YxCbr",
  "key1": "5Cp3XURhPuTDhSXYUrDS12wMQTxF4hpz7ZZphDHNiXs9FG4DD75LSGmfkoeAipMtF7Hfbd66gidgLRDxduDhERF1",
  "key2": "4oJCXNw4R6RiATjngMheQbRLjJVh7p389PPpGEL5m95Na5CSYb5wQmxtEnBM2tXivMsq97JyieJpkhCKTMPoWMkH",
  "key3": "2MJFfRKsCo8gUJjpsziexzjP9DKUFd32W6zSQyHgdYHZe2E2i5Fr35XaGbFzPGcb69PefWrWFuEJXWTxNQz6oYdu",
  "key4": "4uK5YFFTofveCHSBfM79dqnN6o7X16Bi2wWAM27o89zugKjTuRhiiWFLXnZnXQaciws6JsF5zn4uWvMrZ1NZkQdf",
  "key5": "319Qz26dp1SkZ9NUEq8GVRPwtN4gqUAFVXnQ87vnj85yGXQNkkij61yNHYS4A3CyRpmg3bN8J1fcinvhMVXZxriY",
  "key6": "4hoByCT1CwWxHwcCHgEhrDD7upr7to5V2fUEiRdGTncN5FstYULEaxfwMriRjVL4BgE3GA4CzzmgUBh4qpiAmenw",
  "key7": "ZeT7xwE9UWiJ8Vpp46o8TjTTiKeAiz4yWEZ2Ab3CDb5A7xTG8xp9XysVC7irsbjerBhVpmeFAskrFWFqBuoJmdo",
  "key8": "U4AY2o3LwCpKMFYBJrzmVzmESHwxcmy5Yy24hFYF1J4WtkuSRbS2ivc6ZNMskLE5U5sxgSZMZFBTKrSQ2raPTfg",
  "key9": "2XeBb1EaNvszDbB7RXSYD7kgb9M2TQAyG31BCAVmjGTQrSnFv4yqSZaEzrD1BT8hqEboEZXEDEkLDbxtXRP8vfbd",
  "key10": "25jUjAD64tURRU5jdHpXcPbNrUH4tJxTJiTXjWG75ttprmYGMjdPqr2icqQtzE579wpE99waNmtxTSHBp6wUXoJp",
  "key11": "XrqM838b2e4NnaDukUyXuwGyM2rUHi51fPXjLiSXrdzh6apCNFrZdBqQiM2rKyHN4j9Xm5h6bEetJiDe42nuX14",
  "key12": "512qUdnjjJnLTCeVUmadQAAHhjXZ9ttfmnKxXJcCgzRVJsG4TyXqm6pw1xWw2i2cXmwuftvXNx4zvsaTMeo2RcUV",
  "key13": "4xSd5CtBXDnhDgLUFPD9uct8Ghmom3GCmFnkXP9Lkun8zu7Bia8P3yeUVWYg3HoGosXYmfyuhNQCxHdQWWCEAJxm",
  "key14": "4zfrhuFiZV24jzfAX9KNM6jGeLLLpWiLFCcjBPQefGMgdAiKAHgbmf1PmWQA54bgann1nGhS2EysDQXdowsSm8E8",
  "key15": "2zveQhapWw7KiGNgC8htkZT2XfAG7hLUY3MaKzTj5B8f9thZaVeJzugiEGV5ssLkicQmhkWQNpzcpyKBqAFkPS7R",
  "key16": "29o519rHENBLAcaM6YahAmGGpAJMpxbCeieopxJejvWrtXUs2aWmwvjru8Dg2tXw5B25Y56xeAMRs9Z9BcBCczqR",
  "key17": "fwVBAzPhUTGHBGpApcDGHws6zXe9sQEzwDGcEWrNLeeHHsU2zCxKrUdxF5VmqzhZfCs9zifnB73yM8CF9QBHuJD",
  "key18": "5y5q6xX8WEmVWqvjbtbrLWsaNFVGew483vrQuqT2ndeZPcMKTYU8MKJJFtEXKHYpQLLLstTq6SkR8m3CCHhE6Yqz",
  "key19": "4dRfD3Jiw4HtqtXEmUsGqaz3Nic7tWm77h7hBckACUEL1Q98S2RW4jNNvhJoBf9woH9qtUVG9txZXZ7gH62mGJY1",
  "key20": "4G72HmuuN4G1785PYqcb51hbvX1CmKpXcVwC6Tj2MRU6XRT49v5ivP9N3LsbGKHdkMsjyj2ix5dSCzECDCYZ7k7q",
  "key21": "4Gdyp3t79y5hmPf1NE67WLVZGxAQjBtCKV1a5oM6hEf95Lc1vKPtPK1vXa7zY3a5xjC65DU9Nzkpi1fyC3y8ZnNu",
  "key22": "4bsFCaqKiXRu9SZkRAHoB5tjC1rZUG25Jp7swtr3sYjypMBrNwhyeN9vkDQn6qV5gji3qamdLqCeBcyyLb9FeHnX",
  "key23": "5pMwvKzLZXHi42X4675Yi84hHCswREtu6i8AEiaMwos5zQt8iKwHPZruPPJJpS6uPABQgyLxXXbxMc5m9JyRogge",
  "key24": "5xYtQyUhhptMSAfHZHN62irAsMs2YWvTXZ5BBUJndijsitQtpgpcU6DdME6gApQcvmWKCQKqrgub3bHxhRvDmkqt",
  "key25": "wHiBXfeqfA6QHKGdpMt3AZNTTYdoXTEL4fTARjqsrDJFxsCTCnhxeyLzD2V7Zzd8sUfP54Q7CBX2iKjAsNbu3no",
  "key26": "3AHRrbEYXsQWDSP6XEwzeMGcsTFeAGbGV5eTcERsUZXsDF3DLqgh3VuSYhrLyCoAWuxVr2qisRkRBXwXN3XhQkXK",
  "key27": "6ASW4RU32k8x4uMDGHm96PWfQGFx1aGNE81xQHA7RBpf7TSukiEWd5YsusNZhuY7r6Buiqz7yPyPbVKVKoc1Mon",
  "key28": "3BxkCbfa3DFDiFXkaXtDAHLg3u2THe1VVbqQAWv7BN9Jz6UQUiUGq55tGwmATsVzYpSVmS53zfjDwvUyymfdcSYJ",
  "key29": "3xPaCpUvaT1vcZyYZKVyufSSqmxvHTXziEbnKzXh9LeghKoC1MtzshaWKueiXSTZJSg44d3xHjZ5qDYvYhmUZtns",
  "key30": "DrVZvUPucmKQQ7DopXrQhVMXqQ5jY5aDsyBquYgF5LinGgyEvndoJeRHRdw2pWTaEr24j2Waxc8VkJMsKfFK7Cf",
  "key31": "4QSCgg5TrjeAcbCfjSq5caHBWMUym6BgkzGbEorBLGF37QND1Py3igKxvqhE2YS8ydRiVampyHbC9YWLkovCX9Nn",
  "key32": "5dLXBco4yoZVUSshqFyhTz7GnHJ4g5JtPNER5ZqZss8p9m7bJ29CPtWSLmZhfQEx8YcFQsF73HJcu4NwBbKcUVMP",
  "key33": "4Bnd74EWm9xtFTQuVaR4Lf6N6gT9AyPj6M1KVi7DTmH179hqYC6y28Vc29uGdCfn7cibXrBtBhZDT2g3zzwpSjEa",
  "key34": "5VyM4Q98u7tLR4sWMHMzkZ7oH5u2hbBvUSAd7veqmZBFt4uGdyapTJHB1UKHkCJZEEWSggKnVLkwDCf3aHNWLYQv",
  "key35": "sjZz91Xb35WTR7zg3kbfvTk6mTBYcRaTQZkLSdYitM6iP5hE7ekxuTsifAj1oZoQ2AggJ21bPLbtT9nywKK8Jkv",
  "key36": "5nJKEDYuLfX6zRsaCkaG73q6Twq4nuFV2xoAaoi8L8kx4Jm8pXfWnWub22zvcz42wFx2fFE5JRzetzKkAZXp67je",
  "key37": "5QfUNX2vvcVEXQEJArgn94g3G5Gpp6zxSk2tEYvBg7FccB558bAA2CDvMVqwM5emqm31YEsaATA7mqCAok92Zko3",
  "key38": "2fxyReiqZuJjSR6qeVv66YdbNLRvLD57jrRPZbU2XoFxq9abYxu3fDoar1ZTkmTzRuJojRVNDYzN7KQcetE2opLp",
  "key39": "3MpZVbD8QV2DHB5Prcez3CgeGJQHep2N4faxXcLurmEDpDPZsF9dNSjPnPTQXbipn61Q2pBMFZhaHrvBAtzLmMV1",
  "key40": "59nfeKVqW6Rb9htrhjdSN3nEgp57EsbVXPrDnD58CaGfEhQ29YtjjwqUoL8vsnRhnyp3PXdfV36m1nha7G9LEkiw",
  "key41": "apefmMKryrPrNi9WtZ2ugUj5pnBCCkW7xDUYpiuVBje9PRVaQemDuS2oEUNkC9oVWaNktbLcYw3ivtfELtCVLFT",
  "key42": "2tATaD6nhyByrHPWZPpwgY7d7rUgaJfeJxn6mudwBq9riymDcmMVKcKbxHpwMUreaGYTGwh1JgoLXmBZfSZoSmQA",
  "key43": "jpzJz1pXqoPQcBwUBheWjBTjYP3ST8xvTNduhd8ckKQp5FW2SoMZTP3Ktw2fsBHXGV8YmDPJB23kiiRW3Ap3gZC"
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
