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
    "4opydXPTjcnu71wo8WD52MfZAgRXVj6JinXdhJHsUZVc2pJBGPyCdvZXB43dPqoJJpUmnL5KpbS9qNkJCnvZpKm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ro4ztoSiC3D5TkfWxCEtqiY6AdUrMUNbEGegPoBNpifjH2KZSV9XCUWQVxarD27sUiKR4PrPy7fh5zzTNUtZN2U",
  "key1": "3X3SD4gFmiVLokNwWqZoK2VgwigtMjTDvXWpPNe1zAg4pRKb6QAiAvsfQqnJykxZiFH8QwnrjvbHaimk7QciXpNJ",
  "key2": "363ZWHua9wjqyxpzMPPUEssoXE1Rm1sQ8UoppGFLUCU1LUa4RfgQVnUwVwXQMS5kRmHV5RTwTegdKt4bKrdhDjkh",
  "key3": "42Tqg8QhrJumGWF8zR55NetsRid6VJy2QUv7vwHwhgqRjjAh7tsY8rm9DgE9S1XTX8Ya5RA8Qhd7gbsN9VY8JMax",
  "key4": "4yjVpAX1RUDNhTFcj5f4siZKvb2cQ1nvR3Y1D1RoCqAYYziLAjAqV6FGGQQjX6zCCpTz3RQDK75U7xVSQkosZa2m",
  "key5": "okTCX4bdQe6sEtWBM9g1uGTKDV4B31rankpvP3hn55ck1T9vCbCQhZSeyDnJ3pzFEkJEny9NgfydpWxmYxrdmq7",
  "key6": "5an6vivgttQ56L2hR1jP3aPDM7QawNLz2Ye1ZHhWzVC38NDP9st5U9J6HYpskceMTKJdXGPZtLY11fLCTsqGPPr6",
  "key7": "5UK3zRzXCm2upjRuhqq3ysx22bu3Dwi3oiXCA542HoSoXvzzGbbxWoC6mDY562TbhuoGbVJGTykPdKjMwGqypd1H",
  "key8": "4ECeWiUwoigUseAhURchjmLivU8tDuwgUURfb5QAhw3QwsN73u1wedxeGSwTuaP31kHcJuMorbQxvDFXrLSt3Gsb",
  "key9": "12PY3yHqKQo6r2GjEDPyCfSf4bnWVYMTnEsqs7mBv9Tg7dPW51tvzkxVsA5JE6kT7eejefVSvhcPKm6xFXofMiM",
  "key10": "G9GoL3u2KpqFq7kjAA6oRXCs9CtBKmQKV6ayShvkrDaQMCGrX2XBKkRS3HjRrucEt5odQM84f5Td6gLwyzjjnY4",
  "key11": "2iNnDZoBycuG5p7uMuqU9vRcGopuN5F4JKkMFE59Vfoc3CiDcSRhHE3QJWW9KDg6LjAeMNtsrFv5asoKudGBvxmw",
  "key12": "2YWsVm4XKc3gQpntncxvyhH43nZHESHuaASRFAkJgGAsDkd99H4kt7bNWEkv4FpQVBS6RjnZnQRwmeihp8VRkxJq",
  "key13": "5sPZecduJw46SvJztWxu2pe7UMti7YmtTM1F7pzDEHBFVMiRDy71EUQmsLRK1xyGFVADXrXFGdhj6QkJELToyipS",
  "key14": "37bxhFEQmqLM9L1YgMz5n4Ry2quGtWWwooTZEXq1seXhCvQkFt2TgW4Vc9qsBN95sZyLU9ofeFpaHcnj8pfeg5az",
  "key15": "4nNmoRKhhhMFYL4yD2zbWqCDbz8wyNxHqd1KcMBiqeuWMBKDmzGzC7LGoTsHXcAfZDieYWkhPogXdbjZE3MzyUxB",
  "key16": "hGaF25NsNmuNE6snQfMB4L8RsncJiMSuEdMXwEG1CenwWVHpvHdGFonMnQZi2iqdewK7UxAXqCBfnuwFQR2V22i",
  "key17": "wooqXyMQ42km87UUqkWzD4i8ZpGL6jYzkfntE1x7Znoa69dEn2iGEvBfyed1mvDyFc8dw2TKT3xQgU7wJfKUXLu",
  "key18": "3uspVZpSQXYvH9niyn5ASP8RfggD7uGZXa7z2FMV5fZNjvq5oFz9fnXJjELxecHie8WZEqZmWxoNADWRE3PASE47",
  "key19": "4yHMD9ozYjw2ns1i1t13bKb6WfK5WTAaWyse74mS3BCNPMnMFb6tgqVXu9PM1Ro3eX3D2jnEqLXboMWMhoPdMJG5",
  "key20": "XtogvW2Y44hesRVkDt9KfhRnLUpExDnYC8a8e6rZv4dEBVqWqhyWS8ozNVzyxkwsMEumsemUS6xSFDrMw5pJzhi",
  "key21": "61Jt9QX3oFBNxU2dVKzyDrQeEnTb6LsCcwjBRcQPaCNxE3yUvfRSBqn52VtmCXwx8PGCJPT9AC7NdJxnJQBHCDkt",
  "key22": "5FUkEiHNtxjCAyMLMkgcanA2vETBmb9gNAF625woBL6gQ7c5Cwwdc75oUoxwMLRad7dU248Ge8mpzZAxpD54aZeo",
  "key23": "5ABQqHF2vYpi2NNtcMdphkwkwj88d4xn83rMdQoJtdQWvN5Nz5mue8LJyQvEDVhTATMMwYHikztRxCazqPqgdzmo",
  "key24": "2DEkGkoe8T7deqoaA9bFaQwdfzdUzUnpEnpF2f5W18mMtnR8eBjivjadD4y91FZV7gsCKzTvZtnucAvssPwqeMMA",
  "key25": "3BdSq1C7x7zWHV8GfLXoqd39yLCuHCgtBbqXPbscR6w9Rg3SWDPkvZramHZ2cGYfrhreE7zeWyFExcop2iEnxd1g",
  "key26": "5JiiqaGXZcqerFfSL28AvnCMRnTt9cqSHaNPpLHt85wsQPdCEgSRn7ibDyuWvRn8Con3ccixYu9zjnCSqkg3sKBs",
  "key27": "YtG417sNsGp4NhNZw9mmncR4Vb6r9MenQtqr6WcE9JymTzcaBMoXKDngvwgjo6pDH6RifxxDQZSdeLHv4EquTRp",
  "key28": "4ggejrPmdhSisiEnAFbqtWc5zWdyBWTECxqWL4v5H3J3fGcnG26XrGMjUVT9Lk57BgH5cPdgaAjtvgNKsF97vCdP",
  "key29": "4NBMa6mp2ZkcknLrcBJPURq4wEi4qcWGgcrDuVW8Qa2JheiBgwbR5gwJSwhc7DTW6wYQWsjwVRSM3HuQj5F8Uvix",
  "key30": "3ZZy3GvmHf6pVjzT1ShADQk7GNP4GDir9tCufkLq74pZ5Bk7mZJaKXTy69afKCxausgYeR5ADhsSGQTSGGg7uUcV",
  "key31": "4qNAv23VRBXn8DFXLE9uJk42ehMY6czsAWb3kJupLSCUWvpJqu3ZR91bMzVEDcymLJvX7S3XWoEASfWjpmBL5P4Q",
  "key32": "3XYdz763vaKCgqPbaFa7BhixLXiTFdMSs1Te2uYQ3WCD1CuhuFaDoAraHPeAvigssr2EfNENUoeVTkkY8DruXXfS",
  "key33": "62u8LaBpBdnc98HWNGDkhKih2YEDH7u4imxqRPVGtbkbHLc6Xxyp2nCWVrjG6wUNQUkugcdw45mD8a5cDSaDMTiv",
  "key34": "5Cn2ufefXRHaUBEVAidULNfSLn3h5Em7hMfiggiJ2m2uxW3CB4kftkHP3cPzG9aYLdgW7ocURzQY3j8ehjAusmkq",
  "key35": "3Xxve94RxpoKwGwp1UAkwPa9qDUVWxhhXnTVWjKAsBkKQiL1BUpYD5u6ZysVW5QNzdbs3dqM7oQFrj4th8Rci5aC",
  "key36": "Tq1DRZ9LNC3BqYYni1sMpMNpMk7RKJM9tbqccWyRwRoRwd8NBbM5RbghAm4wGSs5WE2rUfqVduLCJHTrx6FvcPn",
  "key37": "5M8JFuYSskbLojQQbfA4Z1stVjgM6E84YHfSndrZYjiT2H4cFbVWQQ1RxKKYGriU3jUvn1qBToDAkCAM7QzeKka6",
  "key38": "49Gkod8587eMVHwEsq8VXZHjqRLj51q77fcjH27WGJuD78FRds7gTEsFHRBUWd2RFNGANMLZzMSjF4CxuGuCm3sm",
  "key39": "4zNe6HVLeTB2exyrEPx7JjyWS3yQP6X9hKZqhtWDT3hc4uTrs9dRe3YaYLEqWzTzQeWmNG569LHWW3d8UJDguLPW",
  "key40": "2PBzzXxB6quctFjYRWMSkqRD9ydePmht7skQHfa52ZKXv7nBfcoGmE7fYEU2h6ucnUn9vTgLDnQaQ8HMDYU6wfBr",
  "key41": "3kLBomErGD4PgckYR7Uydbi9nLHodgQpSzcZNxJdk9wHqxdCsUTgcHAnrpHcpLFuAMXLcSLoZDwPA8ZKeGCAQk4v",
  "key42": "37g23z5SE3J18L7PByqGrZZT7yH14Y3zjnzFkMaRTutUHf1Thy94UeNUouj64MJ8jLPwxMacPus4z4UFzv8voyMJ",
  "key43": "3ysLZ44MBc2v7hkCi4xSt1cgP9KfWVZa6ijzFXYoTsShnbR7RqWxrVNBCLGpCVQAZyVZyPU3cbaQ8BwrjJzkhhFH",
  "key44": "3WP9hMsVbSgkDNY4B8wmU6BkVL86U9yijDUFixRfzvQCiPhM5b25nKwuY2cn8rPHQnGvoJRBQhjvUQ451m1Z74Ym",
  "key45": "55h2mcHH9G1eocgyRLRph3TYFDxmESTzudTqkpE8AiD4Bw7tMQfXESFzURWeKdQcC6pq35CFFHo4FAMuV2SqLSfG",
  "key46": "Uw8EXm9ihGjiJuiv1Ls4z82DTraGaZZunJNLXoviZySSiDJLH5W45kySbhWiwYK5rJGin2qoTyWAnVvmwvbHDne"
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
