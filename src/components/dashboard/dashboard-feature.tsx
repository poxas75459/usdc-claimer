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
    "3GLHWKGKHunrMaSzgjZCEE5LKB748YiESCVWFc1KKiQRJtFHLYsQd7tNhyFPdvFpXXwHoGZfyBW1pxtmqtaN5jvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34rngckcUyoU5KTy3eVjM4fs1gzDqrF4guH1faYMHnHEPW29iaLmuTK5RbnS5b1hhUEqnhHq2AJPKrVm85dX42m",
  "key1": "5x3AafG7osY6kv3TbQFaRzJpnWUfobrFLkwsj2ToNMebJ9tojBW66rt7VnAPrFcD1zbHccw7MUqzVHN5DbXN1BiP",
  "key2": "5RpbiNRQ2uJZCuZMvBWCgm5TXCwbdoyyyeBjguLqu1c6HAdPQSuCMAGmfDHoWr3GxBH5CYv23fn5N3fXT9YUtmV3",
  "key3": "5SQYQgsu19P3PD57WWg6GkPzKD7yvsEdGPnfycaL1vXeGDYuLJ8mU1mQju9WrRgVwMY6imkV5ULgmiU3F4DAJQJR",
  "key4": "22e4zy3kEpBahigciWvmZE4UVsv9g4E6ZHnsXBxNrKfkdUyZG5Wj8D2CL8CGKbRXXQJoK7Co3fpCwWU3bXmifAvp",
  "key5": "2fE8A4ifgK1eUNJNkQ529qKpr5H2M64woG79NQrhg5FVxFwZRw6EfySar32ir1UarhjBW2hYqm9xTL5ghrXYVLKP",
  "key6": "3oKKqXg476LNto9i3bTk5jMGM1j8NyMYRwWLTzZDDuN47rhMxaAAvzECacEAb7xdvKPzbaSMbqtC6fszt5QS6EM4",
  "key7": "25kRvVuvjmKcL2X5X86TKqyeRv6rsU51tgQUnpvz5RUFz5VbZzRLjyxgsgjKhso88Z6qkSuKDd3Bbh1A9zchnDLV",
  "key8": "21wqRBEL8pepQDdnUhA6ePRHEtBRnoo1fMXBvjWpGXoiLD9pMpH9xaxxyMsjrCnDREsEZTpw8BJ1oBMNx66U1Wvg",
  "key9": "WzbfgUG3XndmnJfP3rAMNzfeCaaSQwW4Jdjt1cX46GNiAgfjgkAMDW9iEZAXhByCyTjc1CxY83asPqjcBTunU2o",
  "key10": "2xZMETzgXDrk8q43F5G7PMNymKHaSqRs5xSMV2sit4V5xX448ASvkof9zmzPy7MhgeXJBshQStzfdsmZm1NcJ4kw",
  "key11": "63MgBUdsVkBMb6fQE96ryjhNwDv28KDzvXpKFBwpucgkevMPK8HNj1wYXEf8HxvwTaEoogQjs6eb1AbUMv7nzuSD",
  "key12": "4r2HtZRe3U66xfxSuFJAAjf8FcM2mn9DK5PpM7TSZyR5tDTTh9JrxpCeSBbqrTGUsbAVAPsZFg75PzeLBEU3nYPP",
  "key13": "2yyKWy2WWXS2vwY1FjDxr9Sf5vZi2PL6tyNm6cQsmo96cfHWtWWeu6XLtH78dsREbpwBDPdw13Hq2kmXBJP32cfF",
  "key14": "5dMpmFJDdgfxwFFHkKUMHmdQoLEg22EG7REtKEtbovJ73kQx3icWAcBKkt447KR4oaju8XzqTdAZtJbGKFNLSHne",
  "key15": "GHqWLitBo2f1yZ3RkEfkqtMa41rj1UjZGmafn2r2yQdVppfXzJtyBCvB5qouzKTPFvnHKbCMCN3v5pqtnVvjvvG",
  "key16": "Wz2Zdp81dvVU6i2Bg49NyaoRHKmrkAq23VXEj3BzPCtC5CvRKfz27yygoG6qPTe7QXyHAjPWdkNeoDDHWowsNfj",
  "key17": "uacD84g2P7HuqcWjv6wPG17Jz8zyTU7JTr9o1T69tKhTfFvZs71MgzLUHQCQ7XPUucrJLM9QCAVe9Hh3R4KTUUE",
  "key18": "2dybNqz5YXf6yjhPbnTZbrvJBoWCNopwzaECSBz55ucH3Gp5aWBBS5xsMSZhy1h46MF27NykRytzMxZnDoLA17R",
  "key19": "nD4PkN7ASyQnbtCzXPE5uHnkjKEMV4CZFkdKJaLja1W5fzLqLrSopu39vuWJuZH2Ta9JYs5W3BnVHByVUxZ4V4z",
  "key20": "3ANpxoTpb3w77ah67JoXS5tMNRTugkdzAXawsWamLwKiydBfD85iCoiNXu2ZyHGDqQLXsVchxmy5offr4i95eTun",
  "key21": "ByK7y6LsbgueXdSEYFrNCdWxAiWFCvG5TNYLG72s1GDRiQPNvWL9vjRJp5W9KoJ754Mwy8gYkvDJPWRbvUf1RXi",
  "key22": "5s3Jb6dwHxUxuLvCw7e1FxdWSdirRGsuL3Z52xYfDsAWToU361HzTjKXDY74ehqTpCqhoPnhRZFxVZ7UfrSxWhM5",
  "key23": "639CZWvdZVpvVbCPRDD4WHGcme69kaM2Jg7DLXJ6iEiWqdwUA65u9oMx6TStwmkfbskXhjbCyK2f49JvgYqfXb95",
  "key24": "64LQgxixJvktUbtXJZ15DNYKBHWnv3EV3BEGTiVmVkHvAn1T2VpBpVeGMFBQnEgAv7sbTwj9XnunG1t1dAZV7crL",
  "key25": "3UBAvM42P13jZ9dnv4h4mZEPAFeLAyNT6Xh8L1x173v4EvgFSxDSkuu8KmWiv8PkjdS63VwExPgX74sbWo4NKNi",
  "key26": "ytAxiC8v4ouEFgNB1pPWTVv7UgHE6C41spWWMd3Y5hghxd6QEBZMDMNkWaQhrbKAqLnPpg75XUTAxwrhKJTCLK3",
  "key27": "cBcKnc1huh5fjDSm69Le3q4y42rh72yhvnECVzgibr6h2HNQZgSoVPpnLbn6WZSBR6H7PQUwssKvB7dyqU1eiMk",
  "key28": "2LcTbX6yayHPc8hgTzX924RZVwfYgqoM84qpdg5ikpjkv2Lk2PtK6he2TFrEFDV1mtmS2QGjepd3UvPLVnsx79i6",
  "key29": "4PnqkC9zZG84UYArLgpLVJs1TdCNVXYuybuQhMJLo5fS4UjDe1jBc8rCk2qTyYNJ1ZDHMMeHVa3D2oJcKTzkmDCJ",
  "key30": "2FnpUjLKkYLVrkRtmK6P9xnKZqRkHVzETfZpKPZzrWQME4Rv9DwsTTiHYQHidQhbQh9hjuGPwgQtNDELWo2KCzK9",
  "key31": "rEQWfkne2eM8zmR8e9mJL2yqn3gQrtAVo8EYcDfD23KV53gBSCpp6h5TT1uw14pEjd5pByK7KX7tMbkMjjSRSCg",
  "key32": "3xs4uEij5FDqA6ihEg1rSgNo7ppk8RD5zLfm737oHqr5cztTxrULquqSU4kSgSt3t9JdY98t4EjiS98Z3KvUTj1V",
  "key33": "3tyunW1jYoxaAwLWTuhbyd7tcN2EEfL2UxtyqJTiR8EZRrsVYk1MM22MZMPcGJF6tNaHeQMgVCTgX25iQwmQYXMk",
  "key34": "84QBvVUaWwtQMyxDnWNYqD8YoDFbEKeBmYLyYNkfsYxn328r1yQHiyuz43wHeU1MQzjYziFJNvsMgmL8c5NT2hj",
  "key35": "5ajUTPm4TybypQaJTx9WSTpRynH1N5b9S9kBr12SsR9PN3jUYEBDU26E19C83VJXbkHU2Kv9zBxoZzXAFAdXcV2s",
  "key36": "1S5NrM4qjHLNA7P75SmeQV23HmESC5FGd9ovAGU1fDiZyVpuMwsUE4aUxsMuRZUf8BjvD7QFAuzn8ogVaVvUCtD",
  "key37": "Vg3e5CMhMEFcFJ2oPSMsd9mXpU3d82pAzBiUNAZX4WFQ1rW1nhmT9czzy6VK7a1rpppS6dcireXSWDQwMPZ6j8C",
  "key38": "2CaG24rGmzqtJmqqh8Giwq6wbCsMXzZc7Lzu5wb3Hwae9SQAWmnnuCVC3ttw4XxeajcTEZXmfsZwxwYUM75ewZNd",
  "key39": "25QrVeaJuz27WEd49aVJptuyB2WsyYKh86vCCrce4K7TuYKvLNCu2d6F1ZnipGBWp1JHtEtQRzuFgqUuyBdJiwu8",
  "key40": "5pgM7xKmx9QGQ8xKM7f98cLif6nFLhn3T184Vzj9PM7BQcYx35XMKsTSuwSN4xEr1oUN1PK7XysXuPqygpnaxv8c",
  "key41": "5K5vUSvc146KwqUxRnsV4pxVCBqb4E4TFSLfcT2wH2mfgwQKXbuFKQekVcgRctkLydYW4feCuhrjUd9G5yxKMCuu",
  "key42": "5b8Y9mT9veR6rteh6k4ZbQSHcYfk3HuKGutKnxNfK99JDjMPyJ7TquqmdqDdABmg9iu3vTjoWtTvrcHSX2cBWrSZ",
  "key43": "5Db473cJWf4CeR1iBryic1eSoa9UYhYB2Agd1z7QGXUzUWCRyeMaSgMHeupeqjmYBnUKb4tVFE1csxwYkx6pQFoz",
  "key44": "2CrGVEbZ34eM6Frr5Jw9tYQf55NAWEf3LMB2DEFiW3s5ARywvKCw2CoKVWFbNXo7Ge8bKUWKnm95GnxG4bFJzRsN",
  "key45": "4U1oSYXZWqdBrFYjS3K1ABY9tbg95vr7ZySWHdV2kXwogTBzFcP8A1WSty2ksU5cgeurwBp72BwYVE2e8aJpUE13",
  "key46": "EvYRBUiEo5QEBDoB7zuy3GkcamhQxXDyg4tpvGpUpguZ41kHANGSnEYy2GiDdPQNokRWXxm2RH7wfM9wVB88oMH",
  "key47": "5saPCdtLnwHrVCqGABA69jVoE74TXtqXUU2hMny138YwFY4hV9qD6T8LQaPk7TipwFjRqAVkQdqwTf47Fwp4nwN4",
  "key48": "25UVXD1DqhZW1LQ2Vwx1CCfVjxXgNtRwnvJJGBb1ecikjvMUyxhcHUw8GGym9vyYwkCRtqksgUb1M8pXuYvyXkbb"
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
