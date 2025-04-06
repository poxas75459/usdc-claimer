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
    "5QmNeLwWFsgqkAp1VeLmnA9SaPovyjr1hSBWkMfccj5ZZfnndKmnCCzVC2Lxtcn9pBV3LbF5oRDwf4fki9LgHXzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2od3QF99vFmjK3Ddf6ykUf7maftbZHbZFk4E3gEg2xJB2fc4bjfoxdFH5aZeVMKc7sUHRQ776yD8WzECw2t217Gg",
  "key1": "2eBo4f8zFDJ2e8Ym5q9kz4kvXwHLg7TjgynDMz2qXChVPfB4d3eXEnWaK6KRx7gf5fF3mrPTPa6ZtE2twefMwxCv",
  "key2": "UhGa3Sk7FuSPJ9kLJoURRJgGajW9Je2aDxrgcWoEqFAJySdzvwWbRkbdt9HW39e61ziimKjXdV8ox2hvZES7osi",
  "key3": "5gUDTwULF1Bvi2ZpoBCNmaqnRx6sNaD1BH7jkGTChxLJy9zUwThBPBKXn52AGALDQ8uM6Rdou1YBHyH3D28QtY3y",
  "key4": "79jbokz2T8EYXy66haoL2zMddT1U3c1dbe3TAhCG2Yfj1jrdYhXa4khHsnjiSmtUgVxvxY3haswwDVpXC2kuhDf",
  "key5": "2is1H4JxJKFa67croSLrEBGfGMchf4nyPuz7UVMKFmFwFf4oyfm96temGr5MbPqaZpVsHgt7ySfu5s5dD2CXfzuR",
  "key6": "4gqASb4mrL8CJf3aR7TaczozQ4hKnHcszyNZXB7wHPabzhvDhzDJjuakjR4f3v4kLrccYVwpUFDnF5CExNBD5mzk",
  "key7": "24WpK87YG86QbMWuBA46t9ngrpHrVGfLDYZFZibT2oTrYy7EBeTyUsT93eR2jMkfjHAq1KARLx29Xa24zLXrZTXX",
  "key8": "5XxLf3VYJsEiRFshnhFTQdRcv88xL1eyaSKBUwtDjQH51TPfJAW6QRV1kFGBMXEwLg1GBSSzYF8EcbDEVNf888rm",
  "key9": "4jJLUhMJ1whuFjF89zRfzZD8GGuSnUkosgq5JDAc33iySxDVcsNCWd9Bc3aAQALpDrWLtMgKBGhacn6judoERmbV",
  "key10": "4CMG6NoZC4q64ncJSHhoACuLSyB8MQYTz8MobT5P4fhdrro7HhkA2yt4ia2pcaxWp9GbDEkc9y8Q4iVx9QoHVRBY",
  "key11": "5acYZE2DZLDcT2UXKKpkD4rJwae5TpNzxRUTdMmQdYT5nqiiw9Sxs2hLRZQ7oz8TxgVvftAvdA9xYs4gUKdRnMTb",
  "key12": "v3SuJCFSP4aszUnyyj2Etz6fjK7DSMNRT3MxFeonupVs2DNZgDWbXbV19brbE1BfKbyA7ZCqdF1HBGRQadonf5t",
  "key13": "4y6pJvMBVJ1h1DMQTfwqzUe3dx46tWQx6696P5Lziz5Gr8AQnFeaXBTsPFnyUNKEasA5m4JBuLTE3eLn8e8oxEui",
  "key14": "5v8sELLve1kQReLjYFUTAtiBXfmUxXmKkcywodqFiGGjp2zBU27AmotDyp5mB2WYZHtTDtaNfJ47EoqqfejoCzsW",
  "key15": "3HBytKpwwdf4hfwEsKJAt7gxQkDg3ZEcCv979ERLCAdB6ho4CKYbvsY3jGALfdhe2hf5K3K6uV8WZ7ktRu7XqNuW",
  "key16": "2Sbq1zU9chSk6sxJjt5VAWiSVH3ucrhNB8QFAhtxc55zt7MjfbfoJR7BYxGdEMK6nLH3Usa3yf3XnvzYSrq5Qhmz",
  "key17": "3k56FEEvGegSYjoWADkm3YNfBiZ7Bn5bvdFVy39qTUcTPSH9mVXKpdQ83gXHFJHVJM6E2VWx2WgWBM8oojKi2Cq7",
  "key18": "3jwpiMdv3KaDPRB2FgYkAnuGdp6pq7Hw1f1VsNW52JQAmhZWnUFwSthkRah5HKLbdfVb2hnxWS6EAtYzTA424xgK",
  "key19": "HdDmcVfQopLDSvbJUSGL7iEymT4wuqY7pGADVviRypHczY7VUFA7th2q8nz2WctRk5sYkVBa5jYDpou3xf2fs6A",
  "key20": "3eeFBaeFTcQThRNEo62aAjUzXpHC1xdCP6YPSCc6HjW4VysG4yfywMhGh1unhnvuWtautAYyGrBUrZaWAK3Pen6J",
  "key21": "49nTTqMtNomxGZSaJBbA8BxA4BY4BAFuToDsroG7zYztW3paJJYb19B4cnU3M9ivb5rLAXkyigdbEq6ouzSCzmL",
  "key22": "4ZWsqYvb1xANbe3MnUg9HtHcVJRMfXMdyB945f4ouZGUWcYNfquUwQR8zRRWWPbsRJsJQCCsaNM6TfQFbp7pHTu2",
  "key23": "4TSmMiB5aT1DHVSGqCsqDyE3XLW9eWoXqM5Z4VMu9ccZjjQVK4YaY1kvHarjhCGxxq7FWqC9GHDsUZiTAt8AKTMZ",
  "key24": "2sD7D377J1bFZZw7Yqrq3wFXzwZZbtyarLWjjcAaZyRPvHmHDRxCoFAtmHKcB1CNzk7YDf7492NyLCCpNPh3gD1e",
  "key25": "1b4bYW8Vgzdt5E9a7eZCrb6eB4nZQ7vtT6soUEUAXBdhiHcELrwkWqWctSjaA49hgMycymNSmaP9z9UGkjhzYKv",
  "key26": "5ojCtbJXGoWoEdUAjrqf3wjKikczmfzwmpxsp2W3sB3oEwQLekubHDzYCaUJWscZwXXkNzyjiHy72FSdJwc7S2Qd",
  "key27": "vuNrpALDNQwh4cL5QkVVXEPsQALMpFba44hBwTbX5jvbRCfCWPPUrHVG3TafyEzM6Ert4PR6FRVrg1Kk5vU65ix",
  "key28": "3Z1kxWv5ctDh4x1DjyDjUcMxBVYq1865ENuym1vaVF3r1Ppu4rbbsTvRbvhQTg2p8zZpp8RnQQnuQNavzCdB7Qez",
  "key29": "8tnDSTz3Gt6QqFJeyrgU62vhK71hAgzDSx5Vf8VYp6eCtiQmqxSRHQYLDEt2CuneKb2jUxdnZsexYXk1pkCE597",
  "key30": "4K6bpUBZWoq42qwqZxEg2Q2dzrc7qYHhG4sZe8uQ9db51wrZjRoPbNC3Areix66rBXezzWaAfBzeaWbQSQJC8CQJ",
  "key31": "5qZKyaUb8cvfUkmzXPDtxGRtKdYwg9qP3Swz3PF8EoBmiEfVbqUSRaomjyQcniU1zcGjjkpEhhmtqZ67pLnaberi",
  "key32": "2rEJY9LFfhYHTdSshtBjPrbiKdQjj9anupqKTfX3Sqjivq94ZRo6MPeMuDRxAQ8fERDjUbvNArK1mHdKfNiEkHxK",
  "key33": "23PYRkMDLGTjguS57JszkMSSnnd9dYXFoD7A4rpgKsig3B3PVVcsxuqtMa6Xqj8FMd2iAuYt9fLb9iJBv4LhgL4w",
  "key34": "2FRymsDLndrCxjUZQvqPrEub9SRngQcp7RqBDPhvWLzAPHmCRmoALXFaJ2XwyNtoTrS3za9YLMxyXDpN5i26chgW",
  "key35": "2npSwZp8qcTJ1rD8PqqE23QveyuyxJhuK2CztEAGwKbMnGd8PDCPq9avrkDuvb73rac9nUQDnM4QH5HsUknRqQKw",
  "key36": "45jmxeoA68yk1iNqT3vAnQWt7wjbfdpkVZ3rbq2UniuVh4vnpG6hk5932uh1RK2q2gDRZJCEc9LZB2UbJAe8CUgX",
  "key37": "4DQDw55BuXAWKXJiJAiYJgoTDYhqid3dzyvt8TVGtJmJGNfas3XVifuwLGs4TLD9Sq5rwUfiPmYnvabJosccj8ss",
  "key38": "5ZnQsKgD7fkAwGj2V2tr7RjFdbLpqag8GRYKbs2zw5J6YqKYoXdxcn3k43ygKvEeKVcWDaNiLQ6fQ9PSNKxYTDq3",
  "key39": "4Y54wjWaW2D1xFsDzyi921XpnbXRn9eG5rvNsCJSMSf37WM2R9hA356rsPaAuAfdvt8u4bkJCxpucFCL7ifvhBFS",
  "key40": "bUGAw84PboFB6vwDGVG2nL1jiXXXUh65ec2s4ta9vv1hW9LwVSuzzZhoz1tTqPjC9C3qPS8KYHwLpkhaqeRNeCA",
  "key41": "4HULYsfAn727UvBDMjaAJAqC1M2mNmmbUwA7JaJ8gnhgAbJgzKytceSSWKFCiACER1F2g3NacTqiCL1eTEoixtKt",
  "key42": "598LKHYFzsuK4uMXjjBpqoCWRzLC276WH8mZB3DAjy2Me4q7njZ8BJG2oyazuzRmuq6YAXRyjzk9nH8GtapH3Ssh",
  "key43": "3D7z1sTp6rhntP6TphpsSMUR3g5cp6zHhcdzSB1uSxQzpctvT2EhDvca4Gip8JPSiHDNeguM6cUNw2ffr6ggnFrP",
  "key44": "3HgPCxWe5kSPS7SxbfvwVn9SByTySVPyUkcpHgUQr9BPFQqYkEwSGSdo42SHpokTTkvP5op6XaTNsbrrNr2QprYB",
  "key45": "4GggupiSADvF7WcHAKGrWgEzDpwuBCnHnjZyAFnEaR9fSSDente95bnqqxfJdkkcWMBCaGkxNKpkG9aurKcv2quK",
  "key46": "5HeYxSf68Yrh7xPPqhoToMdXeQVUZDfJcQSXbeG3cNG4UXnyjYpePzCq8dYttuS25DKaMbptfnwimXtEpxU2KZr8",
  "key47": "KcPGkuN536dXGXhHXiGWqL1yYVKjwgPHqwMMdeuwzAxw2QxcJjg3TvM93diYFz88fYasEXekNK5Vu25W43WCV57",
  "key48": "qgAz1ZJBDuhmHQuv1fU4qtRzxG9qTAPz8j5uUM1h39264Yv8E83jwm3taWWKgKqqKi7JSfpuUYeoHRjTLvprfyR",
  "key49": "c3Wu3bjKh4UjZpk3Qtr8G42yyovzKtNaQuwhG8L9Lr6TwN6AZViqTwgyNfyX3o4vyaEkfDP6jpe5GvFinaKiTuW"
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
