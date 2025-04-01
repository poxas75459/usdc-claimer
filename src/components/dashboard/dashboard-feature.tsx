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
    "47DLQb7KmutuwgnepBK4Pg7xTmm6wfq27bEtfg9FL6RoMKVomrP9s6G12jjS7z5VDBLUFaiyj9sgABkRJB3W3V8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ZiW22JqCCn4V43rriEoecbeGY88xhNWZaVLrhYJJLUBiLgzPCdGxps5JfmVoM2Eytj7K6FM1YUqu3qMAPm3Hfi",
  "key1": "5HiuiwaX3u5NKSjiQKYTCMnL2hMrnGhsRqJj2n4egFxZr9R3FqSHs9svc5k2qAHdwpzq28As4nsdUVKTC2kvKdMr",
  "key2": "591bvPzURMsk1pvNX1BFPEqXxBsNoySEDXzqT3zxfappMrkQB9QjHjtqZhzxy48cDLAE37gr8fo4TcMj4bdkTuFf",
  "key3": "KpGRsANeRtdCCnB7HTNPeovkp3WPhLTaG6X93xpuwJJiucsK2fwPktFJELvZsXVndYYM3aMu7kHA21AFQucSxkA",
  "key4": "ZewgvCGuCcohP8mPaPFBphUngV3gWYeQdNTzGe18uusytzdByweHKgNcqFim8AYE1J4EfYEaPVgWvjRocSKtcst",
  "key5": "xb7aZq4Wru4A6PHx5HfdLpd2kJ3F4qiGNRsbGyv9yjXkCCQbu33Zn37pDwGz3KbK8QBjcpjbnVsYQ6GmKbW7hM2",
  "key6": "4hs5FA2rRYVgDo8yvRybsXqpqgFsMbDw59Ppzn6jtDjs53ZKzcBTE81yWRZn42MUyboaihaQHRTD2rnNhgiWFnTe",
  "key7": "4xuoMNTj3xACH9RduNVGw44kCNCJinvdAwVA8oXJcYSCJAZtgTMn1fuHbfKnyH5Ap1D5zNAByRfmQajo3FDsRdkf",
  "key8": "59zapB6MwtnEPBQhKDY6V6j1JTmLpK89iE9kDtSa3J3eK5zysU8hYG7nndNtpjMpEFVwJLiohgwSxTaUH7SDfMmv",
  "key9": "2rfVCLUHdbdDaDiJJCq5a3KabXVZJ6U2zPWnF3Jr5eb7zNQZzT85M4opydTRAcxZxFTnk5Endv9pMPEacTAApBvk",
  "key10": "UoYuLcZLxCFzGwFE7NQZVKPk5qHRo5r9EX9efvz131KZPGReMjGvfXs9BJeUkjJSxHupFp8cHRAhShw2ARmDbnh",
  "key11": "4E6buMwQMesYCUxUhiqmbxsNXUjWv2ARcGvfNGssr7D9ageHNEx4YExFc7LLs7FFA6uQxxfo8VGKHaYdQy3ovPbB",
  "key12": "3Zq32rwx37VtckfdhHzyyz1RWQdh1gTo2dsJfwN6PBxn5gz4SXnSKwtNdKEy56LvWoZjSwvigymowgUW6R7eDS4C",
  "key13": "4SkYAwmL8gmuawuYMw2dYDanw92XXWdKwqcRFRWEWyy5W13wCriL1wPy5UZz8UDzEgAthqoU2KbR6zixCNU1hYR2",
  "key14": "3rTGHm7V6KBNtEnQuf5aZDdvK13Hm16i5UVDKHwERRgULxb5YNvGrGHB4NXY7TAf41nwzUuygpvKSUjau7EihRC9",
  "key15": "kBPRyh4MWaoNTTesky8qznzigh7wJ4EVf4od8FRVLUBGX9sbDZECkfvTLyRBkE8sx2MqiZf1KoupRuy6GXBbmxc",
  "key16": "4PN1doZA8ebPShZzkVgAMc5HfmxZAhe6MVwoBjhWwhsKvkp8GcqQnhzgbJdSmPz2oFGoegdouEYimuZRuQC5sh3U",
  "key17": "64Hk6q3KrwJVEZZTHKQsKHbZ4ZtbWnfRW6ZmQHPKetTu5pGaHuWMExPzTe7omWMwGt2xAYQh633mNyTyRTUDRfwY",
  "key18": "4h6q2TLEz4y5PfRfukvEiJeSZhVVnMnH3TcRrmftoitRFzutkNvuthwcvfrWbebefEgNJdFFY4svi1ZvKxMyhp2a",
  "key19": "3Pw8fAXxPgj8RANM1ZxDQD4niuZzcjdqiFetHPhf6jxoEX8a4yekUG6V3NG3WAHiFsGkppyKbLm9wsgo8ni7p6V2",
  "key20": "5r9auE6rMLKvAGzjViTq1ZnpBiWZchfDaDKVrw4L42q3K29a7MuiheoFRNpWLQhPtAQeMRLXtECR8ddJsqvzxKfb",
  "key21": "66DSXppmTjJ7AtSH82qRqCXvwBCuAzzSMd7k6cbxi5hwh6oznSLvcBeuB7VszwkCmHNcHx9qV7bDx3iPwrPbK5uc",
  "key22": "5xNwwDmhD9aBsvjAFgnzuQWyuyX4fbXSv79x2yiZvoFY27V36QuzWSnPfDZmYt4oZCQXMc8C8GuH3q3q5mMzuVf",
  "key23": "59qGpGkpXSi6a6bo36yYPd1aRkn457RTFRWuxc6nETBUFGz7FymhVWc2ZzhqMFb1VSKjptPqDPvGN1XVBjKpAsiJ",
  "key24": "4XWjPnn99LPCh7hcAGLRBQ6pPeedezDveXgjG6NWrQ44FWjwRsNo7MSuTUBEwb4MhXnEMsWMseNQhxVC9Pu1qoH6",
  "key25": "3tCMDCWSGCW3FGfQFASmuMb6NnHxZkGNepf8DGkSku9WztGXZ4juecZVT74sfo943t4aniqubYwHyvq7jHU33Jof",
  "key26": "A5HyWNdrest2jwTcWa6kmioi5LfEjUt3hrwpY43DP1owgWp9NWRSBWbP24jnmH7WG8S5TBE4Wg4nxieQ2tpwQci",
  "key27": "5xV6TjA4CA6DTG5xqXMweUPreP82QX2x82mLjdAAxbSHk5gTx4tD8cGAxp74thxZe4cnqmx7cB4gHoFV8uS997Yx",
  "key28": "391SJazg5UyJg4mNr18qsLqzu1vt3LzF8xyq1euLLbrt2whNTcL15zZf2yMWfViU1koY9m92nQEdU4J2V61QZ5tF",
  "key29": "5anCZYmYDeT6oqBrMEdJs7BuiH8mfBYRuKpoa5CpVSMKN25Jme85aqADnhSRqsxoYG3QbjJqFRAiPYjakNV1jeCw",
  "key30": "2mZewn8vRTUwMfuB86Wz8un78ZfWixvqSa8aFH2VSrLdp7eaK8SzgvgezwSnS5gVD2o64oMoWwWibtxRcvhbKPe3",
  "key31": "5chzMxKZUGZxLab3PXM3bS6TezFhAWB9Qemue3yzh1cbdyGnRVQNifQPy1frutYpMHPYEqJYP2VQCmRAj2TEhTUa",
  "key32": "PhSTQCwuPpamK8nka56LRg3DjE2v2fVaESduVEizvrWruMqMwHoF7aXzbReHG8w92zyTPikaJqAMDgH1ttw8oj9",
  "key33": "5JrYWj695CQwnzPxwsVhQh5CRZEb22bFBVmUiNpFG9t4G929a41BX9C6sdzSk1YLY2hgfS1w7xCq7bapgMD5fVdY",
  "key34": "61YV6LQthh7VNLz4PWy2Kr1DH3r1dqJAjLmWoAeFYyswnK33UkUMTQqKc4T4Q5nFVLFayprDRzR6yaGTYcyd82Sk",
  "key35": "56PqyrXmZ7vXvpus5LxJEPg7zkiMB8LotnY9Z5vWttCuqkwT7X2Ec8sXKzSWKFSRPKRMBdbgKHzKSajVP29hpdaH"
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
