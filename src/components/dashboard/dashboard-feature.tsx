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
    "286xiLUkskcwDt8T1VBbPEn8b4jT5dAt6snJ6gvrEu6NRpSXUMozp3MrXQTrGW3nEPkDVaAke5o3AkeHcYT8tzMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3szfRtrmPA4HAavh8Jsex4nnRhxvJAcY2WoAjDD9k71dcbkKXAStaJofS3HF3q9QLYrNBom7VL2BvU95QkLmd8Qs",
  "key1": "43rG9xYFwjmEZqL3b23KQXAmLd2QST9HzLQnrqMAr3tUbKWsVU1iGggLD66hoK92Acv9r3tYkWoYz7yoAMdZ9xNv",
  "key2": "3pYsRcSrreuBpaPzWAgS7fyGRASapzbfsVzrfPxwJ5Byxt4ehDET1Uct7Xvo6PAb4rFoZnTUf4UVUrd25ohTWepB",
  "key3": "5yBr6Z62g3ucH4iKpDJo7HSrDEZM87oy6fC9PUtnXShKgeDLQKSnJUuanArqZKrjWsgXixyNpzE8mgy6c5wvfmmB",
  "key4": "4AH6UFrmdTYWjaZfmpzs2JmyHx4bPm8vk2opkk76EuwcvFF6koabXgTGGLmwLUmfWoRkvC3tLir2HYf46Htbaipk",
  "key5": "3zvPXuuvtaomyBc2Ebg5FsDvgy9gE9EsZdRTF5kWB2Ja7dqYXRTGLdCuJfN846DcBbKBX92dE5ThRHvuJmmPTZwi",
  "key6": "3CdJJzW2pLpd9VJXaLRDGZF3i5vf1F1GBwnu773s1HGsbitKstyUGZKpyCf9Q2pRK5oS7RjHi27Bwe2a5Nfo17vy",
  "key7": "4erCe1XrN5rWy2ziFLLZ33pmEuChyjHjRQjAN5PTSwyUE2Wm4atnnxg7pzznBtQaTr7WsnMe8sDaY3STZc4WRTbX",
  "key8": "2YvZ1xATizwghYg55btmzBaN9Yf92sgCbFNDzsv9ZzgsfxM18ZzKFC3kkb74WcgvuZcMkJX8j9tHzSDWnzzZxqhw",
  "key9": "2tVMip9JtntB4jhsiD5Jwe7wUkmm5hR1TrubfGWpZhumgezynEQv12rFbpRQMzxNsedh3he7jJ3Hj7yZzVHfKbWb",
  "key10": "5AV88UHPJHDWpzbhwZeGgzy7ZJPyKX6ajVm2TqYeHp7e6VT6WzQ2iJuH33nHXMBRAFevMRr4VwT6ftK9qSdtXCcD",
  "key11": "2wCnpP6GTZM4Sqx7FHSDqQzHNHNpGpQSrYuaUmMygcySWwFZYuUQfr98xvPEvaTb4ACaoxY7RhNBAkMrSJp19TJA",
  "key12": "61nC8wmhXsR8T6SuqQUgj1i5vqPCZy2xA7qcMhkFo6AXq8i9rQADoYPra3DQrtj8qj8rd2Yo7dz43ywRbXxtkz96",
  "key13": "8VNybLESzNatNdvMGgUASfgb2EVwGgmC4ML4DsWTZLL53nB6iHDoHTFUbSEyuJskgoqEJDrXKe3nKuFLAdjD6EJ",
  "key14": "3LCwuPVfmzBxnyivG7wBTFue4Cwm1KxPmSGENYy4JqvhxaySkx6ovkBY7npy8RPQBmsusbRSthSdY5erNoGUrMRB",
  "key15": "4izP3LBRdATXgJEkiSxApgXZDnTuExmvU5A5RBfGoZx9Tiafs67qe5ERAcJxM71Ap7UpGFwiWcvnkEtq6ykuSq9M",
  "key16": "3XKtgAqXPsBHsBuLE3DQNFsFCeP1BkaPsCNBebfGgDPeK8VXi5pdeYfqWjP366vnguAMF8hDnV4Jjy2BFtwgSrjy",
  "key17": "3uxMbCbJoLa9drts1HomMTiUR7DgyuNSwzhcaqmuBJ3WYyEM8Kr2YRoozciC9hnGw3J5QfDszDAGj5RF2fpNYv9W",
  "key18": "t23muYvtTkktxdjzn2o8nUgdydH1Zhf7zYsWJzFb4Jexa2jWFJRaeWe9Uj68jAJSFRbpLaAkNGxa5MP1b9gFZvf",
  "key19": "2nAPgZzd8A48ArqoC9tZG4UdtGv7G1v4GFqgA1uQxtQFfATdQws4KwEZBgS1CNT9rUk1BtiAuESeiGMMLMmwAjsX",
  "key20": "4iz2XHb3x5TVD91uakhn3Kzme2siUes5Lc55kSfJsf6RbnNX9EuwhU6pTXd5QaxeMG2xrxFCmA7oror4U4wU7qVW",
  "key21": "4MdUgorRSHb2EZ1ufeDuB69noqJHWMKgceHtnUTfEb6Yk8vkM7EJKBwS8Myv2kXedZBF8AmQZppzYtuNJwqX5xeP",
  "key22": "nbmPMFSrVbMZ5BX4MqE5LvaZ1Wzt6DS5cLmDWU2RqBFqVYA7pNpQ2izt9Hd3fRTXSBJxdKehg5gPmA2brDbUhRg",
  "key23": "4FDuG5JXCxLCaAf1chESauPn6wNTR2nBDGY4U7oJo3oTtw2CiZchp8fzKzGJb1wfpYUoNeNFoHGFGXNikG5oZTKJ",
  "key24": "4X8ETuVVbSgfDCpFzhj2hCQDjJ9aiFbLaAgvgEwBL8dRLyPqwTmYmXwoCkSNbiAbwcVYQeMeoDZTwR8hyAWycNra",
  "key25": "59JEDodVVHB8CVLGFnytH9mhWxyBGDR8U5qNM7qRDWSCCc5jNs4agdwUjYzvnS8TomDyBPiohkwHFh2pk8D4i54B",
  "key26": "4VJrVg2DGxDyhjzBopzJpRT7bFNF5JcKCgtAt2Hxgo8Serhjqgx45bfHrNcmQL4tHXrLFUuP8Do116aTWMoNCfm3",
  "key27": "5NrKQRszHiM4TC65tULbedcgR2yfaWZLVgceN9nUAc9j94aQopSiAcCnaSXRMm7Bf7BmFhSdP4vpy3kvKbxN4imR",
  "key28": "2vgcW9i8F6WmwkE6WGRiJzwXAZ6C2J2zhWs1LDznsx21g7WGiF744gyZBPrPhmk2my4AutWBFvw3FwSuDT97NpqP",
  "key29": "3YenmUe8Uq3KEZRynaN6nf75Gkontic9mmuL6JSwZowX5msNzAcbemv767VhrZePLiUzS7Ku4NcDJ7LvrRMJAbsF",
  "key30": "5QN1LWBXkzwpH1ByomtHaw4ZUGp2STikFPdkHcLvPh5Wy76BpM2qJGVWFxGmw2G9aXSL45dtPQ2xPZqZqEoPzrRb",
  "key31": "2aRG6sDB99u62oMggpLXcyPU5wrz3N3BaiGjv2dvuqkM1LawbPLEE18qCBYaRZQvK1JEckaMHRBW6GUoxB3HjsMe",
  "key32": "4LKDLrorAQiSXEffQaDfLcSZB4vik6obE92te7jMpVvGBNQcwmXovs1PGKj185kATjBx8HnckLDCxZPpnej2TNym",
  "key33": "23EAbSLbVLzNLmZP2YQZjyu1NpHmJ1Fwv2H2qBQ32bsfnvtpJBufmfCL7Jix5bVLwQpo6ByYNKYBY7m8hqwow87n",
  "key34": "eZn1a34Pbf4mPH4FJLxg2LyEBwEryYre3LwNckm2D2LncntQtP6wNLfgRCJDAoPhHmbu8jLPVNi7G5VkUjt8GRr",
  "key35": "4mUTKSG7zTnfnG9QUexzDSbyKLMSRuSMRmtjX67Z9MJQcdB82cXaTz7NDLDkkYUyp1sjEUxxFzuTHZe7A33fszv5"
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
