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
    "5ZSHhDryuLSXBPT6EDsHvBmzsayxCbs2ux4n2Z6bpmhwGYRTpk4hPXUFjSNbexfF3RUKgnAUiNSTw1VVmZjBRcyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VQpyaozGEpHt5Lj1KNcdDhaDDJQaStoZGErWa5LKorWZvZLpeWny2qp1hhftXvAm2fStuNxX3UEWPdJP2oC5ner",
  "key1": "3tTCbQEqME28AwERB8KMieoT81spgZuDWrcupUrKjzNoyWvWZ6mSfoNM4VXDc9pKE1ENz72uhYkceR8WXPYFYuxJ",
  "key2": "36AQPby4cAb5UapZ2nKGkqL3WzQQ8RxrUdsRQAJEcn7hQVQwkQXXHp895FzWnSJjQs7NCBndQz7kQMXGv8ihJvwi",
  "key3": "2N3kj1pSq9hPyDujX7uyLSoSeK3fqYuBv86CUi2dXuNVY8TnahnL42C6gLHg9LtEyRQfyhSXyn4PvXP4wM6y2VY",
  "key4": "3RjDataKLJyaeDtfh1NjuuR8gvaec4JkTWRh5hg6wDz2Q9YmiRvjhoXyDhujgN6LSq4EdKVZpsyJjksp5NCNoGEU",
  "key5": "39mr7jwtvBhquUiKMxaL3zDBcq52rPvBSEKPtjFaCLV2WMYFhYvUM3p5BVrFHR216Dse9MpyQe1EYXokbBVZaqmK",
  "key6": "5M24jVsGsybEc79PAamaTs6Kkb2jM2SuSMer9E1sMeWh6qEMAcr8SaYwBkFci1hFHaV4vFnfH7jxNwwZyuLW2sm7",
  "key7": "2a8imSmBL6ms4yHWpyBrguXXhVnfhqnDsHDRqfpEXJBDDFK5GBcYzESkPZtywEetpTmzHMYVPJtgBonvaULPfWji",
  "key8": "2UfredN7j5tWkjfCEErFTMKKvDC8MvUkpSShCvqa1o4GmZnGj7jmjni77MAo1wai7WgvTYJZ8UWdgDjrqXjw5Gj1",
  "key9": "5K8wvTmeSrZXHFBKkLogupJ6KsQjogc6VtACM2oHQCgg8emEt6jQi5XRhaBn2YsPS7wka97rfc1R8Wdb5qt3fkZi",
  "key10": "2CBBR61qmRAaFERq8dXU25SsEUDdQ75KDsZw37utfhh8315SnKJWJuZoNCQmTzQF6pguJtMEugx74DXbwXhwnSgP",
  "key11": "534xVojuB7FNHoYv2dGDSYLnc9pjztsZjKY2cGHmGozzgY3KEt4ZF5JV8dzMrEhLkLTfwqjUqaSXTaAajSAMDbNZ",
  "key12": "2SiHyHuqqi9xVMkDeXQAsNWZR3eUFSthouhjmgCif8veekHXPBJTBJkg1hbNmzwnZhGTR1DHvAmQS5Ed9mFwjkAZ",
  "key13": "26yQEv6jkPHn7CC287aqUizd31ytWAS6q6UJe3wBDnq6c3eJrcrQRWsGcSrvr4c68Fw5Y9eMkMEyATspiXDzgdgF",
  "key14": "5aGwdJPb53Y7JE1C26ReRAjkhyK6LEpWJHHr5iBm74FAc6TVBgKWNE2TViPwZ4PgyE6fHtXRYxh19mG7Ji1NeSEk",
  "key15": "3B3a9Vf3asH1QCZMM4m72RxHu3YkrcuJ1c8TVWqxcpcMbUNVjVxsGfPnCnNnkG5i8aQCZ7sgNTH6W1gsNKkwYgSu",
  "key16": "39SUNqodZWE4NJpGEeRp7p6JZkxjRrPHNmZi7d5GB7mZQNG3CcJwLnkQCB8P4zEC6rGjDfmZ3KtGKyPjdWRAGi3w",
  "key17": "VY6sREWtmUCKVaH6gxBbcJyfSPW7C9LiPXnxQrjXGNcuqMLte6YWmpUnpnXzE2RKwj35qAGw9faVpVDY8wRf2oU",
  "key18": "3cAPWDVXHtci6AX9wUHN9mxeSVMp8ZhbYd6XgEevk29pHzyqRKjM1DBNttc4XE9apUEACVSY1WbcQmchbHBX5gLW",
  "key19": "5qmtAor7BT681tEiKgxKR5VvZs3KDvKgXRLY3co7vwmrjYaPNpHH8EvCYdHMcsBZ4Zh6zrC5tWhXEcZ5ZU1A1oyH",
  "key20": "QfySpEHKw5Rpc9aQYCaXLR8To5sL2XsStuUKyRJ3iasBdYsTpzqeAgXhTxeCmcAKJHqNvPrZgTZ5aDv2oDTKDT1",
  "key21": "4aySL5XuUJmbmK1P7r6VrW52ht64oKV3VG5nUoniWYGTavi9pxtQhwUTkZVWaE2G2ctwWAALnbR379Z2hwUDF2sB",
  "key22": "sJgDNGbXXqarBybm6TGeVCjLCop8Sjj8NgjbZvcRF3r2KALPSVCB7oRY57Ro1uYSvG6nhbvQUJDmHd71PzwTdba",
  "key23": "361xNbAQKYEyNAATgp3LsJUEbsEdxueZVs9Yrcoxt4pNHWybqzWacBKgEcngicsbBPdRrmaCgWKabLToMd1A8Rd3",
  "key24": "JhhtJbca4j7pRXEExr3ptshBZNq1UmZ4cZdjfXJ92EaBRfAHBJ2fNEgyrXwE8KSoA4sF5t7QRZrJx7zp3YnvJ9y",
  "key25": "4WeK6vLG79Nj2T2qyY8msfCYwo7qczTvJZJfHukZiiWbsV3gqjtSy4rJR2SuCyhNJWKuBVyBYWgUYt8EdiR3JAqX",
  "key26": "3BhJiasoTFswsyp2SLy66zKPY81DYCrjpyx237Ysxp4mpcEpKTwtoZEKrnrPcyCnGpiUMYvxnRdPDPLsZutJvCwf",
  "key27": "5AkxmMmWYojEWWS3UAu1Kys4LdvTU9wb126LnjiUeGXSrQQLdaWuzzFmQtxJNW3TicsncFQr62Yug5AFSqkMt2xx",
  "key28": "483o7sidb4wQ95FAtCr3pUBMLCSE8aqrqps3eY2ZptGjzypgSooqGfRgr7cANVQXUi9JmbyceHJd6XXGTCTGWZWY",
  "key29": "66ENCz8fijALE5jA43Dn5Q4GJGDqDHZmpR5acpJ2c2kcfurk4wcAjY21SyVzHd1PBeYPnv7m9VmbgkDzYQDYcx2r",
  "key30": "5bvzefKXyqrfzdRXXGFsACN1prNiQddmfA58QYKdtEoG9oSqKyApJZg62TmHEMS5Lt5zyeeXDUrfdYXeqqqYKbaT",
  "key31": "2M9oMnoxr2AHM1MiydkBxJhNMgQQdM4T94YaGBX5EyZcV2iKHu7pe1hCjUArfo3fGPZv9zTQrQv9H1eeaYVVTxUJ",
  "key32": "2LwusaFmhT2DMwVC9EosCbASYChT8RsSpSq9KLZCFvAG7dkhjx8vupmMeH45zDHjwvyb8roFcWsvUggyBSz1BGms",
  "key33": "5ukyZBSqcCWBBnVKwnDHKdxqK8prNMQXqabCyUPdBsmoPsLuJ6rggqRnWwfy7i1rydKn4h55rKHHgBsrZpnxTf1V",
  "key34": "34TuEvXjC9VVMVi1Gnoogf3KYPbwgXZwVrmgFNWJ1oHYeSPaehBX5GKK6ZzkYeeXCDRh6SsB8x7p73a6ofSsHXAk",
  "key35": "WtZbzrYswcjXSediYjvYnioht2tXNbkDZW2zthZQ1iJ1FWtL59wTVXtDKua3z39rhtFc9HKMDmnQTfzhGvXiHeV",
  "key36": "5LyGYVsAnASEAXwfzdm16YDQYkHbQZqsiJY65KZ9msFRExnJhgXPPXDcSsZh8ZznpLczrwwYUHd6UQJAAsfoDXWu",
  "key37": "3VEsT6xBz64AyoXQ7TJ2jdsedcXSg5xukbjGWHDDfMTwxHhWLfRo4yj7gCrFQRsHGdnwxdqhzYXEActnYjugyNe8",
  "key38": "jAhAu9UUDJzRpJnanzWU5VtuYqTdQmcxoi1maaWHEm6uk9VWAqLm1qFu1iKS7xkvYidWodmpXaPm5iCQ7icrDFh",
  "key39": "6Ee6c5YeFFnugjw5N2NTz4a5vMtzvJWcpT77iyxn9KjuZXFgt1LuMfKfaEoa5PDt8yjh65pVfZoSBdTQKpfiQqr",
  "key40": "4mYxWBhfK4hhiyq8n8VHDGNgKmwm3m5BTRNUhjS2AzW9NGHgkXeA6fPiG6D8RD7s44YQ3DUm6ouUGGbiC9ZCxsqT",
  "key41": "4BFLJ6xWuH9YLUJ7HE2tTEQh4GF68TvWoNFWujuKrm92CGnxeiWAf3Bg4b5mXWefLtWcNdfg1BYv8azTk36UHXDV",
  "key42": "78m4DBh6TaaBMVZHx1TCyWmHJYba2Z1mQtEnp9eLbvbkgWDkCjWHHjgECCALVE8nk5ZhtnQnVpDLed7xgYmRKAR",
  "key43": "343yV6mqcUphL5rm897Yr9jdZ7NBYgjFDq73DxPC4gxw8QjmshhTfgdobJD4evJzjfijbRcbHLth9uaeKRYZNn7F",
  "key44": "4nmkd4LWWDLDTJyGcmkL2fZ4PaQKbTDQ8aXzhMCVS1aLv8dtdNHgwUnNQiE2UQWGwWtgaei4cjEptb5N26MoUsbm",
  "key45": "zZkkdm22XXDVUZD8iNYBSKsdg1UyiFJcTcDXv9AVoScWscLJLhUBaqF4vEXDGogXejfH2u1UHz8vnLFCHv84Lb3"
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
