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
    "64suNYdXunGpZZjgE1eDotn3bqMk4v1UyFHTbeMby8Dd2BiqHtp3bAiuyY6pMg9NVLePdkKHK1AUxT2n5oVPLQKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UhstZCUx6bToovK2fGzshbm6Za4bqQ4YJXXsXZLJ683q6DxA45EcrJty6qYioABJ61m1esbSFcT1b2Pu6Zodege",
  "key1": "5LeFxJQdMh33rZEahqxDQXvNLc3wUC4Wn1P3mVDdavaXgJGdURZC2GyMDq8jRZq6DeU1ymGTKSHfqAhSGZwZh7cD",
  "key2": "2tnuokQYzHnvavg8hLnHub96eSmLgM3F7QJkNey5v2x3X7U3YaVFyJfKHKbCjws7frqxQHKqw8gmPVKi2HF1Tgtw",
  "key3": "2sLgt2qSASEEtoejxKDEXoDDULhpdQRdvQYa19zgDDcpT2TX8Yt5WGRatq19L7L6PPrn18qPUh1QQEASWGUDrM4w",
  "key4": "58szvXK2i9i9dkHbUfVJPkZWAZoZgSMy7u2fqRG71jse7mANacoCCMH6RFE4udx1HJrhh75v9QZHfHphNchTbgXa",
  "key5": "2VVLct5522Rcy6TLXsQDnkubjE88SSqxzEhnDZs2uLtpdNT7L5SWX8N59trU6smZoDhWf2P9BY1R7DLuzkku1dH3",
  "key6": "3rH6PwqyvWoXvcjk8DtM28nPgZP4SjmZCW9qw9hAacPJjjbS7G32jLXaa73TpiogpyNSjjFGFimj3RnWt1p91ZRi",
  "key7": "5WtDhzdzbtSLZ8THepNGvhiy7hVXZ7D7KNpzivSEpGVnEkXJyaeVhdgTNacnrnufdyRDzatqub5e8m31REygo7Pk",
  "key8": "5a6THWAkaqgmB7m6wS2bscghGiZmE186ceyb9d7JmnjDLmB5zxyGERMVaQXDNwyhpJHq46pqWYB7uYBz85Uespsy",
  "key9": "4vpXn8D1sJUY1EYBkkaufrRBioQYSquj1khnrhgaCK4vpiC9dPm2uwt7ZNpAFbJqX8y62hAgdLq21ZgYVGV9APwk",
  "key10": "46TQh4K7wwzrLa2wZpfVxdbHYMnQtXV8WNPAcGENnJEvSkhffQ93niHgTtEFteGDT6sc6FaH7SxHAkYgjJYLXwDF",
  "key11": "4YS9YdhfsGraZmid4GTYWVDtxAT6MwmwwMXorFeoz12yrAMXspWcBwuVydFFvFBSahE8Nq2njPuMrxt13bdV75Vd",
  "key12": "uLKnFVPiR7qqWZ1eeLFNFCMVT5tbu3Wi25m5XLySPH1XbHTTLCJEhkGE1eX2p3EEi46wPKkaPoMER728j1aEL8Q",
  "key13": "3mCDN4n553zmYiQWHCBoPS2dnczfTSHgZ1LZrgP5qSoXPUjCPNNn8Cd4Nsj5HCWMhnyw3cG5eHNMMYSEsWjEhHE3",
  "key14": "2XaUo6DpovArDykzrfF6KaMiDEYvbn7WMJLDMk6PC2nGFS1gwNSmLBVF6Lejk9JbTTHYP6M5k3ohsrVeTSBLpzsj",
  "key15": "2hEdzAs5dQ1HMe3iErfEmmg3S4fBxLhAx93M9AcqDfp1bKoZ9YeKAzPDCP9gpHh5qTk8c9pEJciVprDjXCzh8SPV",
  "key16": "51UvmVekSHUp7vqtPxL3bJZgePYWTxLL63qjRZYg493pkvjtDn5aatqFnC2UxeFSYWHHNmpiqweLnDNqHZxDx7wu",
  "key17": "m9HEnyZep7xRkdUD1cbHaiTCP71ddt7yhor7XyApB2k1GLX6TfEGcbDpgnFgJzCPsvxrR1GPFFkKD1uQ2JXX122",
  "key18": "3X2ixLtFZciVA9VNo287gfeRQWvNSSxPRFs631hVSHP8fDqQNY42CntpSufH7RMpARUHpjVq5tvn5SHGCtR1pjsD",
  "key19": "3YKsDECPx6hGSobZD1qB4C5TmKypoag7f5xBhLYknHPoH3uTfVr5tKVWa75mD7a3ykvdXNnSZBFnXwYF1VVDDYPG",
  "key20": "xAYiCWBTjbq772bWhLDK4vR5qDQMxYBhM2TBksDSYxvQzP52QJjT5Uq6GyRoG8JahxwD5oCX8tAZnnrHsnMsefg",
  "key21": "DL6FCEHDtHVjyb1Ax6Nxntnoz7isvGcCJzkVYSt9kgePY23RhACm4uK8ho2LHvWZsfoqv2FoErQvY4U6A8ykdCU",
  "key22": "5F8xwrXYCpHnF94159aHHyztQYuy1HP1WzYyRDLhMzXdW3jke1Hg8tSe7p7cxYN2NTPfpT1tD219TP7RP1EmK5me",
  "key23": "2fY15KdPjKWv9KiGYWW2VN77FRYUkK8MiEyCmrGm1bsbew4dnxoxMkZuqbdseYVszdHrJwHJFCGo4iRfLpPytaNL",
  "key24": "5eehGcNCG8QyrWcphfHQZ4RiHik2yC9zNy8Vjgnh4yAqqeuXrgRUPfpXFoDPEJJ1DcxEpLttwJpHsjPPh56XZCHC",
  "key25": "hzt73TYSwkWgxbndL9ipCFHqd5a89dSYK5suqai3rzoUjnhDZTbhpaEbswyHdcxkGGxsdKidJ5BMGXXKuXC2C2q",
  "key26": "54oK1gyTTjocLo9xJ9E8u5KUKbApj6sCkTDs1rnJXb2G1dBdHsazQm9iEFSYHGRZVzM6QdwqoJwCTn6MNX7oU6Vn",
  "key27": "iE1XvhXkG8RRfvEh1aQRHj7TwstGYL9vw7HkNaay6ZouFwEMWU2VqJ2gfMoXvsjWtMQsbU8jPUTcB3V5vuKfRTh",
  "key28": "hQQNP5JvmarMFPchSEBQTCBmrurJP8G3hsUC7Xw1MKvgZKvVTHCPhjLfgB5ad8LSJZVspyySGrgvngEBwznpQdY",
  "key29": "42gydNvF9KESxLtMDVXkAet8yvGQseGi6YJpTThd67rXxbUb9278m8p4i4ZCbtJ5bWeHmiJ7DBtLrD8FWpni9JbV",
  "key30": "56HEz5HY6YTHqT5giQEdhcUFxcqbryMjfNMqQGM2f347mHwCL84XNQWchYbZFCLuE19dHWTgPvJK3X7R2J2GLyW9",
  "key31": "2Dw7DLcYuq8mxG9FLrcntpAX3iYqS4mBaLJCCGXS1uuqoPrGheBQopjwBP8pvy3MNBzzREAPi3zWGhRAAj99ygHV",
  "key32": "3giQ6k3iB4E5Pzxi5dcx7w2U2381imck4zFKhFXCJFN2TAuu5jd5VPny94e4zWabBCa6FGgd9nxq67u7jfegFuJg",
  "key33": "5YTFtbgJZ1QhrSeRqpmeXcxGZ7UvywBKvBM4arfvrebnkecnvYqauY2SeaaeuUeVHxD6cGKDGzHbxCjPbzSEp1xx",
  "key34": "4PDukSq4TT248U9QkTpFUkuSqGjm2cPGpuMaCj7BeuDwBBM3NLgqAtXvAFnMrRsdUwGcFJLmgW6Zsx1FyYxbZddW",
  "key35": "wnTsATaBcHuGadZAkUxuq1Hy8Yc3dfficQSGnGStQjo3Gc4qpJKwcHk8Va5yoUVQ2sJLpfounSZqg4wfC3i6nDk",
  "key36": "4GbTsYVn4EgQT11sCqDM1HvJ4XAo8Zm3jvi1HzQ5Qp5Hp4uWKYd46nZkbbrBWcUpapH2U2Y3pfpF9CQMLUYaw6Fc",
  "key37": "5XBqhiV5o5iq2grgcjawGu8UrfbAFN2h3z6xoioPKS7DHH5hVrf4rUwHyGXiU5PMHXj8JgQRst6Qvt7uhrmn2u83",
  "key38": "cFJVYGbw1kYqgX7HcwR5gesVuDrtSyfTmKCsk3BVzaDLdXUmyrJCnAuWnr3ek4cDaBJ4rG6RDfDuoNXyjRnuydV",
  "key39": "5m8o2pS1p6eFFJxtmik6Ha9VZ3zK8EKxgPRivkvcrgeneLuKn5agJ9R7Zn5y5RWAyW5Kze2gQumw2HbY7anfqTBh",
  "key40": "3kMZjzhkLCeD8oGUxUUMRR7B1H98ESUrse5BZvZZ3w1GJv1ui15dzStT1Jzc6us3DwoogbvyU6Gg9LYf5VPsrvHM"
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
