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
    "5HYDJP4KtVHkxVqeDbiK2Xv2TJzKzmmvxbtVJgaUiNZ68EYQuo4gvwGueMQKgG7XJeepBTGTUBaQaTJVjMv3T8kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2REoGSi4Bqfck1p76NDJpBfi4TNZLGZQjHhrXCThoVCRmApUgzAC8RQMMEbUA9SZaZqAjHZ81u6jFc9RkcseUcmx",
  "key1": "24QWJtdDDiVFcjj7yegMjCKrg3Z73FcboSEhwyboJDsDgEfuYCV5r5EvEAT7kpsp62awjtzeQUNn6ansxHAsepHR",
  "key2": "4iswiofkhhhXN81hm35D3ovZYZTQARxJbyAPTy5HjC6GmyGCMzzSthk6ZRsy9fmG5kXyonCugZEC7B43iwWtt2W6",
  "key3": "5TcDXMMf7DVK7pEGQHvYEa335Y3P5HWDt3rZ98a8ijYqw11Gt5MFLH7nCdgmDPrU18wW8XDu4ZV7wbjJhLvGgny7",
  "key4": "5QQiH5i6t9m14YfUaaZRUkZdrJRsAnBVj9BqT6RHhRdZ9cq7GrfTs64KgNRAY4N3JaeHfNzusaPuMEC3MgKhZkLg",
  "key5": "2JbuwjGbVJYGuFSFYL95i3j4eC8qmsoKcfftcAP5CaUL4JKB4faELf1H34Z6VnWPNFfxvRwdUYFBZ31ypTTeLq6S",
  "key6": "2QvZPqWioDBqEvzFkFMTCanYufwCD8aJswq3BEWwCPNMXf2BA2WFeqdnJo7X6VsRPG4FXiUoSwdwGxwdVskvoiyD",
  "key7": "2rChEBihBEqbLc3eSTxG4EB5GmAz8jG7c9rWwGQ4raVGty6JdJj4CbApkSepKnTcmftTDvwkghQcEoGDED9u2b2v",
  "key8": "4oCHNGqRyLSndzJh6L96k7aG4Kssv1vVxxoaY4UxgiJLQaFd9KLkuGmjspcXNoQwQcYkfefQy6ymfhhJWbzuHSa4",
  "key9": "N59CDRzPmmxYUodoRjiqpRN35LtdgUvq1hKxeZzG5DZCUsyTeX2GTbWhK5zBffZ2Nq8KKjqLi9z3nXB2bNRzmC6",
  "key10": "23XYJ54fUNM3AQJcpTvLGK3cWPq7fgFcSZ7qJDksAjGXmKVbSCKJevK732pbtxfyv6gib43cxcZkWU59kj6C7oqN",
  "key11": "2YUDj1C6zmacoW8QZf6LJv5Ls1J586CaYyMFRpDuEportHP2cRDnUrrJDqbhcG43HyD59iZhtQYWxGoBeRQ8Bzfs",
  "key12": "27owLcuvE91MGt1FoqhrcvyeBkNNYEHb6kfsEm8r7VV5oKyqBgZbSWD2fjLkSbwPUhszpgipdZeEMUguLVMf9Cec",
  "key13": "4ZVhzfxvAZVKHXiDkbuUwZK2JE6h9UtwTUDxpkHrV6PKexk1emFcvcCrkr4XS3viZTVKkDNtfidaP2M2ZD2k6NyD",
  "key14": "5S96CKxcLj5sLoDjCEGDDd37TL6z6g7ctU5vcmHQn8jUEp18NbAKbiKBTgDAvXapoP9177NSafVpvpBHTSCt2pZk",
  "key15": "jZhVHhcxqvPdPhESDQ7UDp5HjSe4fPJWDRP2JiTMshy2MwfPBURrfe7TvgvQX7LAjauMmK1zGeEeWcNEaq7BLjZ",
  "key16": "4a9mta7aoSTfLtR4VTwDzACXa8drhcLRg9GhEYpL8vwApwqhEay1tsTXNN5TSLGgZ5C8verqqZ8WveC725QbFHBc",
  "key17": "5fJf9GMnnnnLU3hp3dMZdck3aiSv4eacRV6SG2QwbERumR1wNKGUZJWzNjc7wX3Fp3WqJGMFFYqRfK7w1cKHWKe8",
  "key18": "67SXwdUHB4kgCnDJmUFxqdaCQKZErY3hdF4LpY7iPyC8fNYWYaQjEH528qNSAxvDmnFz3dB7nzRTmDW7dS8WhzEz",
  "key19": "5ghKfLrw68LByeyYbKhuvQcr9UgzzWvDakmmeyZBSHRXJDn7SrHuv96E6M2LcvojUmj2XDByPXWnerCLMaKZeMNf",
  "key20": "2UGkFtyBE4FBog9T3STvLdGsJ3LUKqiiXdPjSTwBF1NpNZ67cnLzky1fr9A7pbT5mxCCcUzZtnozWEW9Htm4BAgZ",
  "key21": "dNwvhFW4wnTu8NcvBkFx4BJvTa5eqwqLjba91LxTQF71DofWM7wKuddki7TjUvGWkYHZadU5FH8jvSYNvhXdUCv",
  "key22": "3SuLqg99F3dXfH3AqrLUvoWy9ZNVFkHjZMYv9rYjqTnQy4nUfTx1ZgsVanRFDigN27mR9VZs5VgrnjbUVSAZBasm",
  "key23": "5Qb6U1fe991zwSAwXrDf4ALNrZG6iiTv2dCwPB376nZdGBkbzPAmkq5romFow3VxreGmvu2RngG6fwdcR5ryWsNW",
  "key24": "44QcvtJBiPWnALUVGXqKPEt3BoW8nG2zhdCMeu6qNNpX6aQM1T3NntmZPoydQdXZQcbcoz8mRv3ZqTAB6YfqkkiA",
  "key25": "5jQSX6ztj6Apfd89nDKM6bwGPBC3Vn31uEEnrVN6ugqyG6B1s6p7ikaisqjQwXbCk6NhzxQY7iBYhHKMra5kkoxA",
  "key26": "29XEQ5TTtq5zavxrMTF1mJwD2HzvKN8csrqMHiRp4GGaYcy443QgzCPXiFshr9kkKgyTjH5G1eFyAVuHanuSvc6J",
  "key27": "3p1NujBujG9wf5GMb3aSHVWpcmhWWKRqegaQ79oyPvq6pzaq6NmY4t2ZehnWRQW3BU83ySq6cMgs1MHXxeLXTszt",
  "key28": "4CtdTRSUSZXwrY38TYyHcynx72u9GFwuW7rihNPjZiohgpWCE4vpuY8WBjrmmwvufdxb2DYMpy5E8tCBaekiJPbL",
  "key29": "3WNPrgAS9wq9gJxT63yt3eG3LFb98gpq9eKcMnRTtooFCmYLUxgpsgEN2TCuci4iDdA3ExdhYFUXbTLuBpDcDxSz",
  "key30": "4wcjGhntcGoETLJHXfswJhhMhKP5FdpN8k9h3jJnGYSTpEY2L2G5pzV6cbLuwMi9XVZ8LRjTagw6mDkXJHizBXwx",
  "key31": "2WZCNVzLc5ZwkS2PqmPHiigm39eiL8jw93aPHcMn1S3NsnbBAZ6vfJw2R1qsgLYjaPYRoR7rjUm3u9xevvtUForX",
  "key32": "5xLueni6jZE1Xeo7mLzMyetmUtibARe5dRX7GKaDWqjny1En7KxrzECBFuEZN4MypM9iSAfqoKk1EWit4jpvzB2W",
  "key33": "fw5RhvBZDXw1D2DSxuUDdwmn6gtSupuUgLMEsV4Mv9ixaseZR8Q4s3dNp6cLr4FNkJSkPHW6nRE4k45JMczpzRf",
  "key34": "mdFed3gcziVbYvxbTfZJQ24Gr14E8K8hq43eNGEPZkbvQPRHDynvE2e5y8sGFfwN9znhLbFVKF5F7nM7ZRKsX14",
  "key35": "3kYsu3synxyu2bJaEz8Ced4RFhRSZ8cHAAvDUk2wjDD4Dii2jsNYvHfp1dhLosKTW61fiTbSaQx154bdBb2B1KWm",
  "key36": "LNdYxYc4VEVVW9ZvXZF5hnAMK6P2P92X8aCLWS2zvkeDBRb5KQFFDWSHKnLcA1ZzKHwCWmnRhfufMFDDLh3AqDS",
  "key37": "65WAGVBsNN7Bi5tgvApuzKqNXYUxdhXpfh9UbDM8jMywyhbH6yaULr2Vefxxma4g91SqsXDECXpoT6ePkvGGJs61",
  "key38": "41pd1pXx4GB14w1wh8RyRJT7PkNggmQSDo41L25xzECepoSQatCX6cjthkthcmEBKirrn8t8E9m4szhpGiYb8JAG",
  "key39": "3vwT9SuZQBJdxMwonB5CVUvM9SVQHR2Yy1bnMRDs2s4GfY78Z8UUEzFjJjHcypnaxoizBDQUC3DwcVVqms3wvdKD",
  "key40": "4Je6K92LPBUQ8uiM789GbTtkVAca7wGQZf6E34qbcWvHgasgRdASEsYPU78Rv1pFRTTfNvkp7DKpz9RNuU4s1Jxe",
  "key41": "4tcRjbCFHNpGvFdKjvMEYP1Tzk59h3f3NiWmn4GKCinnofJfuzJzBzhNTfjRSqZAjQ7geqsKLqLMmftNoDoAdSZg",
  "key42": "2SfPddKAZNgayu49Dwtyz1we27M7dWt438oQgbDpKUYRfpsXwvNWiKsLPLd4Jywx4kMhepfULFt8si9wxKMbSf5q",
  "key43": "3JAreD7YgAQUmT2XwkZhoWdZkiZS5ZsdiMtB3k5ibApW5bZSvCW1Q3ppqDgoYXTaHrtF2bZc4djbFD2MS2vuvzsU",
  "key44": "5w3BvmRdy9doaKrtUj2r8av4ehiyxCtA7kZuo1mA1AJQwHK24SsTiUn3S45fvnzcoa8zd5zUyi51nSqGZrVdnS9V",
  "key45": "pR7N8QvVKzbGX8DQTfU19yYDnWbBQJg4ncjDf25T4VteGyDHoVNTFSo3gnRdmdg3kYre67zVu1pF2Ly6eaxcaAV",
  "key46": "2KcptPYeQbNSo5C4WGzYouFsmR45RzGBm6d3k9Ys2FYKSXGTNutiiZgCxNZZd4cqnwmppbNdPo4FPm9Zur7PRkoF",
  "key47": "3w48EhDLAPedpfd2RnwWwu8z3Gxb7AKxY5XcqgBcK5BtbtKowsRAQv86Fn9HjpYWGC3RBWNpNF1ssLsWpavtVWcZ",
  "key48": "2Rd6HmP1aQtN9TLDNcgjEVHf1BQhWbUcdsCKk5GVtvBA99r3VWJQuwvvMTL3t4oRmYr91E9CDw4nVT217834g3S1"
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
