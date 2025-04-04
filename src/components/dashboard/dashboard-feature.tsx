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
    "3uMoYM4RqzhqxHa6mvaGhQjhjjvTCZENThVUkowtuMEhoiRYBQVDZQ6onSj8wMEDEazzYyfcc9Cvn1GdbAbS7RUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nqEAdosKdZMTrMHfvYbQA7BKyavegbbnhFNrj63PD5wWSBUyRNF9tgux6thabybzwLjFW3gssfWH4rDmw7Cgrn4",
  "key1": "75bcwiDmmZ1DnwKy3bwGqtP9Ztc1jxuVnw1TnhAV18tA9aaYuDtHXhGe9wPtkQyuBHP9BRRTDj1pmc6Dageyu8d",
  "key2": "CwwyioAojtbbXBm7XrtceyR3BkwJBFzL9xSU8wfB3F9G3z341WLPb544GM4WdhtveuRBaCh5oGBmdkQ9kjJKnEW",
  "key3": "22yLpEsWynAgJxvxGKmGzmD7CJFZrsn2f9nGnHYhfbFd2fUVWKQeLKmCQhrHUiDerMpw6Z23K3xoLcqhdis4DxLa",
  "key4": "742aJd5Ss7j2wfeTk4zNELqqiDf1NLHWSSzkLasf1VYbsaHuNGQiFhF8BNVDBtHT4CKGgQ1kXLSTQZ5odboK1cv",
  "key5": "3TvRWou9uqPmDU5BaPTrL49gC2FzN7KtkDQNs7WgdzwhWmPnVHPoxRd7Buz43vUi2LiP8kf811kqtZaLs2nkGV1Z",
  "key6": "56uDopoGwstsanMEj9WMbpKP2Zj22Vz13h5gexAs6P92hS1uWNHeGGPouaVsF7BwD18RdHwCc2zGxb1wcUzBgw7Q",
  "key7": "3wcidMnHEt4n2vaXwRuqt5QqbpoDBy8vd2yLuCL61Dn4LiMAKH56cgbXRo61MdecgcmEgRH2YYadKGEbQTjRNZ6H",
  "key8": "4wy13tdLxaeD5PNSyhiWopiMEodGaTkbjfpnAbFAYR3mwU9hVddapHCFhQi5nN2WDhZbXQf2cE79pcLu3eP7jwbh",
  "key9": "45hpVt49xkrRupuudJ3i5H28YuxL3wVVbq1Y77ULmmSfvfFatBcJuYPdQ6o6EUMvdQgkRoQcqTdxq5x19YswF4je",
  "key10": "54XwJmeF3rAHTLYJse3rUYR8KqPWuZHxZkN1BmuV5ooXkvcxcqvRtU65VrjHbDU3aXmwgxHouDMo2Zgx9aFUwkUr",
  "key11": "41oRwHytEFzyczB9mrSJ64xe81gS6wR8nDFrHTPPYRLFgy7GnrrveWPNYSUzqiM42wqkbff8bAGsgt2J3gjJQZeS",
  "key12": "4affYv7avGQMRyowSWwoWVYr4WDv7NdADTBFtJehAaHog1mJc4tN8eqjEDX3RMZCAaFRcHHAWmZ5VeQ76iorKLRd",
  "key13": "5dmRMo7FgLtJtXK9n1QCYzTYouRmyozwunr4VFZY2xdPAJVf5minCRqxPJrEyG33XXrDjDoTjFMJmUQDyTFr7jQA",
  "key14": "4qgKmP2Bgx7W8f2FoeEunpjzLzdPPAg9QWVhmj22nfcRzepA3yZF6KSydP8VtJE9PVUvqZYycHmMgbBUPheWbbCZ",
  "key15": "241wTgZ1JjHrurnms7vZeuKhcZhCoDN1oStkhabYcnJtYZHQyZpeqMnJeHn5yK9Kzww74qgE7sazspNKqaHAV7Jt",
  "key16": "5aLMuvUcHDJ4q39PLMSsBkyceUcxPtkE3gs5Ze1AgkZnstUGkjjnLKRJvRE3tz7FYJrkcRyeYB4y9TbFiz9gRe47",
  "key17": "5wgL2BVio83yp6FhBLTAEePXa1XMkzAivv2xGPa938WKmZbQYfn98s3YSrgavJQYpcqqZj1wgksUXvfd93FtNmyB",
  "key18": "3Vr5Tt9Zyjxm3NRcSYiFg6ezgYMSpE7bK9dGym9BZFny3tb4p6ZbgXSnS2zvP82hLgxfWYQNvSTtLoR7xnrV3PsL",
  "key19": "2v1NyU1Sc68PrZfQziygJgx9uuWBiPgqJs5bj5o1w4cicwzfqHo7TwNTp3wzU7aoHXgGeaaRVn9Bw3WWCQ5kane6",
  "key20": "5wuN1e9mN5K2snfN3VanZZpEYHSsfAuGRgFhhQAPMHgxwXpmpeD5kzHhaRvNYyZbK9tjoUvChXYRN1Y2xQbdE5yT",
  "key21": "5MP7d3Zjd4We4N2vkSLxPLgDytZYAwuSV3Zbo97Vrj8EbW7V38RUHQwcirhJDvmr69Ynbfi2hMZW9VqPhNK62TL1",
  "key22": "nXt3DiiDs4g2z1LkXpwDwf6yUPWPtvyudtGGyUAUoHVcXoyUCC6KokncQdea3kt1d9P3oTtYu2Lndk5PYz9ffAS",
  "key23": "3UXtf6JfsqB3VJ2X2P96kUbT2SqWTCcoFJhpRBHwimhi4atUWfA6m86ETkievuDv7GmEp598chLRHSGYUJP12U4K",
  "key24": "enXJ9upFWx5XFFFqHCYJzftgrRaqtJzdyqv85wBJ9oWJ8t8QP1raWDpUdtqRzNegcvfCoagmJzzrfjSuBS1Yt8e",
  "key25": "BfknHQKxgFgkU5YdeFD6PfMpsTweieg2y6Gc24HUf4VBc9ba3J65UzTZwr4EhewpTAh2ooUiKBosnrUk9q2rgD9",
  "key26": "3TWqaqh7JJ3Cdcww3u1Y7PJiGc7kkBhXrk89BtYHk1CpFQiNSPiA7ndGmHghbVaMapCH25YiJdYWE4ahqEwh1WT3",
  "key27": "35pDfYVc4shgjRR282JAsyFZ33LaJsRizo6PC2hSGsAZk1gPuJCdjX6CNkHKxRtyZBdUk7jgJcJHsjubDMkPqLC6",
  "key28": "2ozkakfvJGGmcXeBWq3UbWqkx2G8ZVDXn5NXSe2ayxSHHwwBc9hinF6q5ZXdK9L7fqVxhetTMw5fYZhgVQN1oDK2",
  "key29": "5D1dPCkWyTvV5QL49ypv4sQjovPrr2LMwq5xr6qERafbBQjafnZA3BVLf8keBspPKy6mEGTgRRqkVKExkerHK5Gb",
  "key30": "5UXSsJVdALKQ6bCRvZ6uK6qiFK1amppdSE9XGJuapwVKQmFJH3mEKmEXvUQAzzv7q5wVxXczjVLHRXidMAPfxf9S",
  "key31": "RQVH5rCTXFGkWVXaxnt5Stz4fZ1DediEqTAmFtd8U4HS4wFyNDRhB9We8HTVRe5U2Czu8JA17EMFLDA98bWGWK8",
  "key32": "3inWcyWkbJ4K1QY4b9shPwYECSwvfU45Zt8DH4K3v8VNXJHmEC35u6iAR1cbWFGjkYhyEfHrJp3A83rw1gXYFXhr",
  "key33": "5hwU17u62fHEy7kpttqizKvEvu1qS2pso8N2CnXT2eSyKNREFB8dzEmg9QbhKp5mvuNfsj1sjHXxGTUgi3VtSxfm",
  "key34": "2sVNYrAnRCmniAtKhTm79xyMhGKQA5HfoMe2o6fizWA8DsHZ42BQRkuuoF1Q6q4rESmMi3d93qWpXLDgkTykcSwp",
  "key35": "5j7oVwU3fCGgLkQbwRyvcLAkvGoTwWvSq1aYkuAfCy91xsierV2x1qNLPR9t2WPsf65U1hMqyiiwS5cTwZk3zhUK",
  "key36": "33behGsUHYeMmE41A6kz3DjFQrmqENaSGSLXAez7QRL2jst9stdvnfdmLB2adeHLcFGQszpYwzCaDmRYttKYX2xx",
  "key37": "5pi3AGEBpn81eUmQNd6rxu7iMVgp58Zx72Hgf8dso2t4LJfRsAoochuaapeVo9bbY6cz5uHVE68PkF1o2Jbec4LW",
  "key38": "612bvQMwutHVwDR3V6V4YU8xt5XXazc81Y4ebvuLB7HFnyzMccsJcYRSFqG6tikr8AUaR9xGbPTAutFQfz3iaDph",
  "key39": "4XkcqsrqfYT2MKAEovH114CgSfb1naNfHbpRJZmbjvWf73HqvKu1tQopB36E58gbeozn23dAxjZWRT9ZHtKjqcAw",
  "key40": "3KJ41rifsLjNMNiYnDMsKgJ24JbxqBtubR4a8GoWcxgZx9DGmbsFeriW1R6W1Worup3CUDBRGf1rfn2UKXvuDg2W",
  "key41": "KWmcwdhHKvFXmhev3X8Nmkmi9myFZJMNnWqxMM7fGifsYEmgtEjM8MErF73tbUMiopKhbBrjBKYWTfYu981wwao",
  "key42": "3uk9Jgf8YDpoZGo6UUcu7GYNtVscW8wvv5sdfM6Y4651rXCzaKSzTLyJGmQMV6o8q5L57vVQTovxKBF5WTPZkZGE",
  "key43": "2pawt9wy3WTSj4HoYfv5pTjkJrzHDPvHtn3wwJvehCa7cr1tWcmf9pvB3v8ghFr4ZzmaV8qXfgT1nCM3xH37h8KF",
  "key44": "y48Ha85naAyr218YmjJyhqVox2hS59jDpWGRQ2EUxJGYttyv18qrbLdfRXQt33p5hi2iaduJ2ZkyKyRAKH37LTN",
  "key45": "27j8nbxYS5GVnr3JChcN4MdkGXag7Jp24d7uVhfZoAxD5ybJj8JqRnL4BcQQRvM2G2mAdeNKuaCw1WW8NAoSpfoW",
  "key46": "VWj5sKWSbpziwEKrHW3Fm2vcaFAuP8nop5Lj3FW6Vy4VmyMEZ32oQXWB3BbtotYs4XDQtZFEnFJL3s34nz1DLGw",
  "key47": "3TjcjNfPxLn6naeR5oJZpxyMcnLsQNiHqiMFNmxezw9ToMnMUmLkRRe6HDuX8PqinMMttqLqfjhfMytemQ9Nr7k1",
  "key48": "2LxqYLio7GyfYL9Nhb3ixU8jd4ux3eozhPWMmQc1Y292x9GYkvVSD1YeYogBGWdmqrS7AaRKbK1WHhhMx3KcVn3n",
  "key49": "vqHasrgQNEEiJ4ogE5KJP4hVFErsBiktoTeqTsgLnBKEhHApWZSY9yveCYW5cH5nbyVipAMqz5uHjQ8UeWoeWRD"
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
