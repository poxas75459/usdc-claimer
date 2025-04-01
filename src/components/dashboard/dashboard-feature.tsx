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
    "2eeT1E7aVwLZ1zZAhNip75QGtCwAz8o1h2EZVwRnKfUt4RTJoMVQDpPHD6Vc3J6nFDvv9gMEqB22S8r93oXM1iuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ihKiAKPfZuDfA5LJ9Toqmj1FtJGmuqzjnsezjgBSFREGTuRFPt49vJcm45goWJwKVWULHNtdEQrmXQVVZr4ofq",
  "key1": "HPisrNgKGuvk14ys4f9xuV6ovCcBRpd46jjH4RcyY8xFfVvTb1XPYT1SaGPHs3JFyEb8PDird99ftaXZ2AJUR3b",
  "key2": "2ozKwPPE9hcjpszNN9oBCFYwu5FCizNBRmW9cga3ZNKEoAt38ondvq8mh69n9ykwxgmGN6c7W1SzfXTDuTgx9fkH",
  "key3": "4nWPFoKByKTCsMyMdxdteibK36e7Pf9LcGdzYY1M5QipMLPjRaC3MAfesoM6fvJ2BJ1pvG9j8DK7MrPJ2bK9R1ZL",
  "key4": "4KmvGe2rZpswk4Psb2JPdYU23bHeTwgLrZ1tJMe3TBrdeWbAzakwoHjhY5qoAmatZyJERF4K1uKNSc6DGpB1uAzk",
  "key5": "5mjKbX9iXFugeFA7o6rZrV4xx6XztynQ5eCgNJ6mU5PuimhuH43hsPMmu5ZS9GB5bjcsZpDFwDdecaZMjWgC9Gn6",
  "key6": "4iBFW5MJQuFrrvogyMX43biwuv64nK3587QQAq3ZPhnteZTL52TN3yqJ2SuAKVQNsMPPQEwPE8J16n51uX5U1iiL",
  "key7": "5ExHpAsXacvXWTfBe65Ui2ywn6Y7T9hoTgbWrhYq7UrjGBJcbDcrBnEhRBT46PsXaNJMuE1BxNJSepq5pieXdkgZ",
  "key8": "5u9BczoXGG5TWdY2yzAFqssSKopx84GUBMRLwPhyu5bsMAgcBgEFUMNGHzpWxdVSwd5BUP1HGCFa3HZTgHxYUBaV",
  "key9": "2FaiEFqov6fuukoDCoVPqRnjGwFwj8Nw3NaTjYknW1t5nUcgv73e6Q1uQsBP8NTT36icrw8oUmBmccdbXUZGXYhQ",
  "key10": "5zSVzhTM5tCz5zhjDzjVcm2eQsHgTUHyUZ22Tj3dQGjmw4S6F2knpURLzPTh2K48zeTcj7V6Z35XezuYEjMdiZGp",
  "key11": "5AmNy4MW3Lq4LuzrkwBucXreBguF2Gn6bWu6sDDqrBgLBPRsQDcu4JjvxRaFxM9KGkDnueKuWstfPRnPKhid5SUT",
  "key12": "5k3qwfGi3vtHhqcD1WhvwcthtY3BE9AZYn5ngLcvydCgLDxFynxQMQyW1ydnTMiFrmy9SZGv8uTKhyvukxR6AwVT",
  "key13": "4Bx1n3tXLWEk6MYcy1SoJDDqqLTAZ8PoNp4NBtMYf3gSUXpLoExwSATWoiRmDDhfEedfv3HuuoytTqzNz1giVPW6",
  "key14": "3SRE88q4Uym1xsqstwDWgszZuXwT7EjnYhgeJwZ2oDk96bodQDfEdkVSYeLdLEt7sJMEGR8U3s2oXqe81vzqm4FB",
  "key15": "3WKf5r3vnC2gXVN92t6CkUr7Thn9hALFpGSNPRkkpRYJyvUyoj4yZB3pFmmYrcmxxpnCH16jJUi5PUDGTuoXmCVZ",
  "key16": "6MgguTrEWBJLuj8y7dcSGrKny4TeQvP3Dh7pGew4HQBXRGetPxGzYb4AxH2He5rLA6ckVozf21zAGrPzWRBvQvK",
  "key17": "5ogb6ZteLNUHhaLDSPRKdvuyVyXsgALgw3t7ixdp8MDSUJSEYVs6ew1dVNmmi3Dyb6j1ST1x9ejw4ve6ZC9Wa7Ai",
  "key18": "5kZdCg7hw6Dk5C3W5q23fMhFoxQKqKAscP36Pz2eF6Z92wd2JJXnBnfHbSScKCECrEEsHt41P4Vfivq29LAeVR3P",
  "key19": "2paGx6U9vdDEphJhtCdwXqAvX676bwjXaPch5vdbttZ3bCcCX7SbKTyijYxuGy1xWDPFZXVpdtxLPXVN7xGkCtLN",
  "key20": "5JduCTKvQViCR8uiSUztWupX3PfCy4aTdkEexkWPwuGbsBHM6VYwpTDDtJCLPPZeaY3o6jgT7rwMPXQjkZZpGSGV",
  "key21": "2hm3Ni1LExmfR8YTacp8Q81bNC9fN15EsKcaR9rSv3NxHoU5WTX46fqkgKEmLyeWicTcgJjAN5Yuv97UPFqpFA33",
  "key22": "UswiWnoKwgfsWm8wq2ozzffaNWVgQnv9TrcBsPUd486rzuqwf7vh1Dq5NHMt8UUEPfRLHGcoA9GwBcZ1m4suGhy",
  "key23": "2moThSFfhHRc4n3iQzkVf8VQX7cNou8ckUiBrnRSvKdszvyX8ivHMh6h53gwaWVnn8xd9mqUZpF5ivq7yLDeLrWd",
  "key24": "AgFJMbchZ3n5YZLYcixqddxsRRdNDSiE135mLH38ZaqH3xFWpd3Ue1JK7jgYVPX6pA4zpRmGvg38WpjNTezmNqD",
  "key25": "3NhYwUZb3Bj8WZGpGD5u4jkZswK7jR52VHT1YXHiuoohFv5MzqxWfwGYFThtDsu26EmhnsQtzCGhu13FDRQBC8Q5",
  "key26": "5MjNHCeBjwTFXKwvGh6t6xuKwJoMSPeRuV2kNPfinvGWtBdTTUfzeiGXR5dYRjQxUFjUkepSSBYTjV5JSs8awG1W",
  "key27": "2jQiGiSUjEXMoPRofp7WhGFic7dJ8TPCiVK9TanQhK17S2gaysFdceJrxB5RiCvmg36EyYz8CmGVr9WzoCwQpeo8",
  "key28": "48vKF1gufbXSvJWTyfnUFEZHYQW6dF9pyYfAap85SerJUoudPQFUaDKtiJJiQ1M5gBEzr6okmeF87Q9HHwZfQFPF",
  "key29": "5QGDVSZ4BipzMxAhiKvM7SVxUBVHDvE9pFMe5KHVcFiNJaFYfAGqXePncDpyJAqpzpgzK6HbWF5JS8R87h3Dbv1Z",
  "key30": "3a6Zf46Yi5oGV38HkMTR6mQovmZ4sBZStCBZKjG5TpvpjVkDddqvaCPjA2Bf7GVwyyGS16bzmdCL142hvaYCDx5g",
  "key31": "d6D3D36VmqVd1psWPaYEPnJ5UNGhoiDL3ipF9DXApAtjdAZC2J5ughydgN1wsCEcoksAZFQSye7kZr4gQr3fVNq",
  "key32": "2nZzqPCiAdVDbT3tSBmjGUyibLxMfzcKbaC72rugCyX5645z9ABv4RoNYhzg2NfRVfUmqQKza4QWYkQhU1E9rrsR",
  "key33": "3MeSRW8FLKNKsKPgrcHZTHKonboPbNWf8tFf4SchfGAndPByivANVVNCzTLwtWDS1no7VUHxgjtUBrvKV6VRTz5W",
  "key34": "pai2BdkRgdEHMSPgb9eTv4fYt57jkdEnzhTQs1xMvzx3DzfEzVKy93BG98wCcviLT4nu8BvAk9gCnvJxf8aTicb",
  "key35": "2PdfzDvodPcLBNuMrUh987DKpujD8ZzbNFKd9W9eTYumVZ6pYe4QHDe6fcCkZGfC78ZAjJFEjE1WWvbNwP1vmbAa",
  "key36": "45zFHQ18ApPDkgXuD3kYW4kq1C7NwbhA4suPKzd3kLe1PCmqVzWuzWY8gTd5udLhQ6fqTGFN3u4PGK6ShyadCQQa",
  "key37": "5zW1zWYRknDQYhsYDiMKmp4RD4jGSTWPxLG95wGxVSX23jQNJZbXtDJjFFtWzAcBheiE86HxBMu6xc9Gz5uALUfX",
  "key38": "2H4gZYRVKSacF3j91PZSLwBteCB4bubADtaGJcdmxcEmqC3MTKKDR8dwNX7RXgrd3xWK39jttMDJTLGdki3eDbNu",
  "key39": "2gkmsqtXjnLYnXWBJA6Xb4u4AxR7Z8zk9agSyhkVyPM7DHYdNMLWoDikUWVh1Y99CsAUvfsK3FKGSYZZNmc8rMzJ",
  "key40": "2K19JzSXF3ofGf8tHgGnoxr64aW1M4buuSP5F8dLNn6sBcxwWi7etSHKFLuAK7E8vgB73vPdn2YiX4U1qWVck1Yd",
  "key41": "4mfBKAkH1ZGyv6JNF8CeVeTkVBP7MR7yqfnNowNNcTmwrg6HLseed9EQBs1n8QYHfnNyLacNwGnriqxGjE75M8na",
  "key42": "5eZtWMGp48kmdkZKSCfryQpk1P5wEJyUiMBWnAUF32Vu1hCcs1a75qqZZfqkqVxVjE9QtqBBTFkns4JEtPtLmWQB",
  "key43": "3nbWRgPRGJdK7sSTFpmXc67VeYF4fDx9cooeLB3RyvsDm1RPnfa4uDsyrBnGJTHVoCnqPDs8Sw9nowkE4uHDxkPf",
  "key44": "277gt5RQSMAd8Byww6FgsPZE7nD9ij3KFuCcm2YHoMzb5SXJRUBnLb6J5oztGkELfdPYDgpkkmavYkPSdzeR5S6A",
  "key45": "fYWXUVNM66Z5LLYGyE32GHo6sTEdKSV3VRtzMZCg6J66TbebPsKng5USz25XpRRuxdxZnGcEK5fnNdahuUTg8Fv",
  "key46": "5zsMc7B1oxoyzGfjbWZT6TNL3DdqjiaG1RAQTNBx4NLeXN2RG8fnR6NLgM2uDcqJ6qUvL5WqmRPay5hoowVwUsEf",
  "key47": "2G6MRNgCMGkELw9jfo3nDB6Zmx5jwgxP2XBDxM69U23oWvHLzXsKjFMCPzjxzVvBmuskAhRJMEDDP9BwbjrhcNXN"
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
