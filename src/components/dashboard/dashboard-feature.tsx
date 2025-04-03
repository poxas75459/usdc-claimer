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
    "H7B8PovWAGii8CB6fSGoihXUHU3VSehvj8AAU2rFqigua8pwvWduHjmaxRgaCNMgosLBT58N2927TJ8kPUZJxEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CDqSdEdDUnFZj2oDxQ8pjaxyC4KGQGnz5MtTuc23s4xXRpbV9DRugFLedzm7xqjUg77MNV3vX9etwkNZ8ocQUBj",
  "key1": "61Kbukj331ULuQZXag9Nuv5e87NNKLiij5E2dDSxQqVfPsWSfbsco2NYKxuqSfPt4D23k5W9xwLDgeoy77M4t44o",
  "key2": "4eBjGfjEyB35kb3k5Axyq4eAFZUc2uLPT3679dWaTPYKnqVs9Hmihd8aqQ2bnSEtXogyXaNGK9n2J8zN2sd4ijJd",
  "key3": "47zXWvqUqcpLyYsVXHPKhH5x2BSxqz1bf9PDUpXKUbxxBVzv4ofLGfHhfDaKkHnD3hCSmsU7gMS1aJh9Ck7tJwZn",
  "key4": "5XEUAu9E4KggGgYZUGJQ12Eh79H5WaTNyEpdftepNxKsXvgumnUXR274yCeC8N184pkEWtVWxUKQ7PoghE2TeFob",
  "key5": "rnMKm1NZ7k2g4TkBbj8CBUYBDpUEhroEJLZhT7x1zxRER2JAxP4MZRizs6BohCoHRePXPCCVTekbRE3Yw4LQXTz",
  "key6": "5YQmkbceqNmMvKncDamoMsu8vxEGDNbEra1d6yxahuT28rhguzSUVoiW2Xj4tqLCnqwfM3ocT36MRaAy5W5oo65Q",
  "key7": "5P6ZKYtnH97JwL8Dj3zNvoEqadijTSM5cQgUvPnQrLRGswRuJwAiBbPBscCxkY5CxiTNLwtN95AKmXNzj83Mb9Nj",
  "key8": "5jxE8mqT4HJUgdmMsAG9By56S7TwdJjttmRL5b2D3eVNMkT77oBuWVroo13WTtMH17t46aFWVqF7RJej5LjnBzAe",
  "key9": "4Dg6y5EX7hGSdhFN5wEkbHz37TL9Kdr7i32FRqx857igZHby6b9HbcT5LJC1bqnb26ZiCnY38TrkmxUbCBWyMh5B",
  "key10": "37VqbgzfZ2TyHaRNeZwBUsFYtwcyCQZ4YcEmZiszNofBSWVxyWnrQnsBRNRVGHsRRnAZPBDc1P2axmZxqupwQApu",
  "key11": "5PqZRAEdE4zFQ46wzUgLM2z2B8nUSJUFFBsDpuXiAxYBncqEqKvNWuWWH5k2ecjqfnRmVeVWnSxNaZnd8rURX4kw",
  "key12": "2ehjwVFT9LUh1xF8XgzPSyJVo5guwG8ed2uCjPUjGfsV6BtVEe1GEqTPXMacurxL7rJauUk9xxrYCrifDCjDrC3c",
  "key13": "4BRYds5Rs6v9QVvCYJEeEK7Y18zzfFJg5UKxSKjr3YS3TYtbJuERGaPxASgd2eL6WbHe6HDFcyqr1kNFohvxoVPi",
  "key14": "4p2ALCZnYVjYeDYEmc8aGdS7Fmtuq46nzaPkAc7SzgVSvFBAZPz29xwq4DFNxcvVSn772axKdKwhKfX3m7z98yo7",
  "key15": "jicZPprL7XHuRgNSAXY4pJEc892qbRPvwEDfw8qRSg8eaJCrvRMpHjkoJEHpUnXoNhAJ3pHF2LViZoKRNTRMeBF",
  "key16": "4yhZMeFqV8sHZMFt3MAQiecdajepC3jPQWbi6tnucDqNeXP1sTZKxNCXdpomHRmDGG1Tu9jZ9vfrdA6QFtpB58Yi",
  "key17": "2vnRbFnDsn4bJ2ntwXa6vSb1xmqkbpxHhjkSecDuyhbZJBN476U9rE5ADvzr5DkX7wX4r4Z5xAfhQXvEhijNAPT",
  "key18": "2yr1xfHU82kbd1sCie6zj4dvdqVT7XtJZBGCVwJ6eRgbRuTuAiwiQgCky4Dk4CLpERBu6zmEscTUp3PVfzZyZiF9",
  "key19": "4ab4K3A7655XY9Rzsce62wV8Mr5ZJxVNNNJvYU3T9irguEKARjtcG6TH47JzQvyvT4DpB9QnuyE27Q7pyhDiBVs3",
  "key20": "jd5jDjmJK8UmMnihYEVzoGTu6L9rn5GeRFdTvt4YhWuEE3X6HR6wCaMyFMsr6wNPad28PqmTez5inQ93gCXpfVD",
  "key21": "4oYawXgP5FWadGFL8XBDVaTnqHoSCHuqEp6DF2EGuz9sGBxygxgQakuok76cpVzXG92TAL5C9jw6oce5gcjgVZkS",
  "key22": "61z1kBrXEW4GiQuuzR1oxYLiRAkKq6YP1xD4BsDw88RUzk3tieqrzNRQ7rKwS7yVu5fLUPZvy84f69hHpxCmcaAV",
  "key23": "5axhh8rUmm2gKuAUX3RYX67sHMLx4Hs19zgui63WdJVxLZmskDP9Lj8Bm5b1Zc6YtCGjydqDLNmskVnQz9FHTkt1",
  "key24": "45B1QxAPyi8q9Gww1MmPmJTngrhNqyUpCkGKP14JkLKxJTcuw6kteaSq63fs6ALHppCeCJgGsKZsjxJq4B7fhQ2s",
  "key25": "SkqFeWH3swBCtUwzukp6PWHvoqt3paxjgmP17TTbKoYA8JQ7YRF7qaVPs6N3mxFuWmVByrirKwJgF5hTz2y45pt",
  "key26": "4WcidYyBm24qF9aGA8ozHMwqr4CokyxygQj31bUbusSs48oGLeEJqqHCezRuvC9XumSkFN8mRhV53vD7bmCfEXMQ",
  "key27": "b2x7LQV5oEEqZcTbbqJVWBE77bEBGFQKHSCWAugxRqYrFAenfYWYJm8D4jXTTwaSqkP6d1M7gL5nRrvDA25AqBg",
  "key28": "4G3hiiTD5ymxVZMGiRxRk4EQdbx86yeRrPXsNBBiR5REvp1hCKSCTTBYHjyv9orn7Jkp2nfpCZNzGS2MVEDECaSu",
  "key29": "4K3NsVmQX4snRz4fBtaUKk7GGgTpefQypF1Q4cgpbAffWj91K7nqKs9MyepZTZq4Ac2jC5fvK4J8rn4LuFym1XU1",
  "key30": "5YaDVn5qzssz2r2LAfMHpVZhH3bWoDM7KxqCZ1Aa8G5NEJzShXex5xcwKXmejbgt1seo25z9cLU2JRWQ9ouxBDiP",
  "key31": "5Lh2skHf1ituf8WBvvzF5VhYirQXGrAwvojQy718rtuvcbNJ4yx3oJf3MZuDWuvuATvq3RCKGmHsx7eXr9CnhihJ",
  "key32": "3JW4jodwR1TCjSMb4qfk41Q5JKRSRGnDXpkwTsRKL4enNW2RZzBWsUmRPfQwYBRErsEyp4ksdKP5j8VEyPcCPtAX",
  "key33": "35mXi9duDGm24chbLH1rNFKi9TRX9AwHiurkRwHY3Unx28WR6bs6d66auLZ5pcVF7FV5QUdqTXFCg59eU1AwaNLE",
  "key34": "3NwkdZN7qkxSGci4s45hhNRdjaoAFG7QgEeP9KrsHcf4gLkcUEfUNbHwzHAkJ2wnd5535rLqbRNGaCMQGdGqLGYy",
  "key35": "3dUWsz7espjZN725h1BtS6CcSPzkK3SuYq8qVTQfzefRmGChUwzA8jkj9ASMs4KgH6gT6HbUfR8DqLgKqTVChwMA",
  "key36": "3C2cebmDfwARZ168SHAtrbE86iLZuqDmYGNpnngUSuLA1D5HNW1AnK54WBN5LPx7NqHpuh11oW6Q3Z2jLyx3gjHc",
  "key37": "5ZSZYpXdiVGeuhQxqhRhWwyxC75GiffuqdG9s96uxCgE3jerJbZZSgtRPBzkGJFPYpTsvimTABLbyYJ4CkSe9n9S",
  "key38": "2ScCnLEsBT9zTGs3pC6jg2qs2Ao3YRa8PMtrJXJzow7fnGZXPDYtsSX9M1og3WTmFWrHWhaLAH8qLfJ7Go6pXHsy",
  "key39": "uziYTeS5WEzPGHZB55fVh8Xym6MqjL4BznBHdc1yLn3ghDFqNVeDUC2Fm1QweBj79SS8868WFTwFmLMMteZTQGR",
  "key40": "4cvhBhSAazCHCQqwrp4WafYvaTN8fbhvWuV21HTevpZspeNEjLfe1anXFYHxASrnoqFWELhKqbQBWbEmP6qodEby",
  "key41": "7AQtRi4mHX9286uTDiAHUHp3Ux5Sp1Nj9C78WccUB5CCb4jEfJ7G83r5L1RVPqvbc5bmAeZp1iVRzdsXawvFDrp",
  "key42": "42Njz1euVxVow9cFXdjHE23kbH6jogdYxzCY21oB5wJPskuhQnDCBTHiVmJ7Q5y1K6z56nU6YAZmNbZG6jv4JW1i",
  "key43": "5DyauUiB1CVSGfsgrxYfjDK9deq9gHPbkXX6V42cKxc4sgewR8JuT9ZD29fYr7P734thpJVfZLNJNjqXodZnK2Ys",
  "key44": "4WLymuLwbMpce9cUVLjyXtPr9ELMmNVeZFXEyoiL9YeLSQjus7WpsneKAf6YMxPM4aJYgCDqndkFjrzej5JwMTNr",
  "key45": "3T337uSEyo6Ydgs5vmwWLiTv81RDpadzPu9HAhndMbhH3MJDrtAdqh7zbuw9HEMmp93VhKfGTtAMYc2c7ZNYcyRH",
  "key46": "if8ZauFbHK3FNFwczTwKqN8YFFVhZTBubc14m1WaGwtr7qNEcinacp9EZRnzvrasGCvYSUDoCHWfvLHNjJ8hzTv",
  "key47": "PH7xnv9NXTkDe6s3GVbixGSEua437fww7gA8Fs91MDAyHGgDiGLh71jEdoGwdgCKGdUM1NtLKJBqscUzB4hQYKw",
  "key48": "5EPZArXAuvxUdXkvybp321KuHNnuDxUdkLrfnfpkguA2Q4faH2CpSsB9DpqCQ5D6PZ43vLvyESAwHFVKJpE2Fmg",
  "key49": "3tbyPY8NHqBhuKGpBrBDaHBGMcs8MNAha2XCMiUAgnW4Wrnr7anTEErWpUS4cxRphy7Fs5CVzZCbNmi5gQiN9nmj"
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
