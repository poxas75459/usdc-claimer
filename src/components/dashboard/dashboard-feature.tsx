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
    "26Gf1kVPv6jemE3FNphS1PcxMYYWWzN9QScYGSj1MgfsU5sdASSLodaUYeC2Puramamp4mPQ6EKvsxuMjCctxsbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qp5mJeSM2CQNvFXTaZNMDdCaUeqf9Zjgoct3fpreNDjTiREnbrgZWxHvhJzd9b2oPzPgsQ9oKabFippSkCCmoXm",
  "key1": "oBCt4D3hGaMz7wHDHgE89FQDL6ZFnjwqV6KYLbUsyhmNPfMrTLXn1rJj3TpXZj2XCbr5ACzYcbko4hGUx6mnjSv",
  "key2": "CwexJsjNa4gHh29F9iocXBeSujcjx7yHQRvbBgWmBtLZNmLpHm3wXjrvzMYiypLdroW5m8koidTCjRARi6kfZms",
  "key3": "42TNXg2kDypawEddW31MRjWBM1YBtdJ9Rj7JgakbwxdKaRdnMXhSUhS5iaYv3E1BcAsdttBCUdRoMixCFMLDdPDq",
  "key4": "3f4JxJbNTuchmeYhchBMNYSgYZZdL1RcAuuUoeHVXBbpbxXsR4He7UP4yrpvwE2qo4ziz2zQX93qsdzNzai9ihre",
  "key5": "4pXUT1NGV1Swqf6p1smFRbvQbdGF3LSzi97CYWkMqTyCGx714xJjzh58WmnLuJhyAPVgB6sAjk4JGbjgL116jUzF",
  "key6": "2bhkKiXGVZKESxungPbyXa1rUC7gMUKqDpG5MozQuwYrgv6g8XCTXLx5tGifcFRaAsjG3wFwEtLsaniEF6BbCn1Z",
  "key7": "3vGTUE9m1psDxGgTC9Qjh7BTFtjHdUJ44mBDqc3VXfN8sn1jgsvFfvmSosniMxUxApjMMnTvHBJeWTnQeXdiD4zv",
  "key8": "58Ssm2qvnFZcP5hEFisScQtoMpCy6nucxi6WsNiz1D2wXzy4X9VB34gaYAxQiN3GzNy56M7cXiXzN3CTbKPfLwv",
  "key9": "5HNogVV4r9PgoFaFyNeoX1D8FQhpFbEj6thDfaugFjrtNVemAgdDzgBVRMpudmSht4p2AkLoC5Z8JSJ3SMdmprzR",
  "key10": "2RmeGvM665sFJLnbySEjudNxuqNsf5aDZBLMwcXVfyhNvWunidjjpyrmbykisMnyE5GuuBPxKwj6z8Hdx5N2WmxJ",
  "key11": "pttSuWFThJK1AVMHgo7KxbpCu7QTBxdwmksYJgqzAGurcEUbmWazu4hbdSgqRteeEZYMBVw7kYWb354M7QqHHXx",
  "key12": "4SRYa3Cbo5fjyJD9N3TR7xv5N774ijhafY1V99TfbX1gFVfU6jRq6b1ptMjDNrUabWrAMzyS5jZkA2wjvoNxG3Tp",
  "key13": "4KC82ZdPXy25MZCp7VrQ4kUJp6vuLdoczQaUwjSMTrGA3W1gPUS3dr6cqRaojdzU32JBnZ77Mmu8Jhj3NYbaEEFW",
  "key14": "5s2QkNECDxNCWY3cVqDEEnqij45SWbvXnzNcMipfVbmgvYRPeqwineqrhYvYakYtaD3LFVPnmQhTAntSdK9eUmEn",
  "key15": "4CKQFiTggvHgoJf7w6aDnsLfnXNSipi1TJhWi9HGNKdiG65wQw5gvrwnHtqyj2ZmXjm36QDtE8JEpmaWLvPgH4oF",
  "key16": "567U3C7gkvEhReWBithh7EJgMLmg1YwsmncnSWPE92Hd8Pa77CVpL3vTcmiwQLcmHU6ZcSrmbyQkCPMAYym5WEFM",
  "key17": "SEs3C4tNxc9ed7JgkJVxEMfFvdfgBYrhwMQbDkJzKpmycLRRiBWa7Cpnp8Aef4QHZWdoaBnyYZbZdJzzRgHDr3M",
  "key18": "3X3V5toUEGRTGPQhNHPaWHyS31hdxfugibuS6iig43M8RDBSP7cTBE3eurxsVMHyoSe9y6GL6W8ZopgC9gkKucN1",
  "key19": "4s71M8sr7EqWGjAH9eTQBPSgmm6bB6Sd59pydHWi4HoiFNiNbDe1q4tiDocmCRtVfXAZGZwB4BniTzfiudzkYpM5",
  "key20": "4ea33ZD6Kr9Wtr5o9hkL66en3eEsZTNiV7i5HDgo2BxahpXUFfPpCFks1PXvwE5aCeQHYWYZgSbPwJ7m4dzuHeYN",
  "key21": "58yMbAt6cFqDxbbyZd74CDcfVjUFbEcAo1dsW476y8hAf4ecFFUzbkcjZDjmhQKnBwQixccrJXFYWPuKqeiTFKzd",
  "key22": "4QupvgXgbEk4hcguqSF3SJ85MQcsK5VvXqkpArpn2G9PjWiPVyGyL5KXTtGbDC4Ng4uCdCwusYQEvXgxhVG84Wad",
  "key23": "49bBGFHJpcMMkCmsageBc4paZbCQejbmwdhkMkrB5ofD3FQkmegZHBsqeXRhsAiniCGCz98uppUFZ2dcKAymCAeP",
  "key24": "2fcgVN6SxdEbKZcvYFht25hrSeeZhuGJwpz2nE72gj1NLV5GKAsa98mYtPBoYmpXUWzeUvdyQNnHLPuJjdue52QD",
  "key25": "5FUCiEfouQbyWuSZPmLNFhMQPQrZUhp5oh5frKpmtziNBDcMNXfVh5xaNZPsi3NKVBPLNSmgQt1KNLKxiU2ggW9r",
  "key26": "4rFNY6y617vodH6CkSvHGiYS7tc9xmihJkt6NQbGuB2gytgpBLzhskGBVGQDeda7fyQviKKx6tNWwkqRnzrnDRjv",
  "key27": "2gPyh4fuYcWiyiYecBWRDd1KPS234bMuEBcpvGzSLjMEmmyzUfKs56EjbXDCYypUDJj88PfrcWZPjkYXrVr9witm",
  "key28": "5qTQma5L89Lbvg7i5tUqzBZsBsBoPrU7HGuyQ95mVyz81h1E8tyshsVQ1j6QYs4KKxnD59Q85fZHVq2B9iV8SMZA",
  "key29": "5cc3t3gbRQ81iQUPMuVA6i9ob2fLCf5aCLLHR6yZMGvQsWiqkZwB1JVgjhkuv6EPqLeiT5k9Ke94ER6bgBBfwBfE",
  "key30": "2gvbYXvkZkwjsyVTArx6YDQudZqittp1BvRYbb4iBRFfu3v7zjkYEpCwgwXp4VJdWm9yMsx9GynEfBBaPpaCk9rU",
  "key31": "5TBcU6QMn78i4adcn1Q4NPntjp8jH6YU2DSwvQ8rciSmpe6RXfKJBwh3gWBjsSkp4R6K8MhQqtm7PjVMRhBYmkgE",
  "key32": "5DxH9SF3ATQBioVm5hgCjq457s8vkrneT7nHyRZCSApGX8oos9x3oxkeYwgJzVfgFtKJH6hpxNcUFPDjj2GACZg5",
  "key33": "57W1aXDVorGm5hgtNZTtepm1iL9foe7KNJpbDb5fWRqukFFyjAJH1Bzfr33rECd3AMbxgkefP1ZBi5Hp75wfkPyv",
  "key34": "2c6MRHSX8oD9Umu8eDUgMkiRPG55tWQSjnduj6tk81w3iGia3MtuYXri43bHE2eLzU4978VANNM69BnFjh3znSmb",
  "key35": "3w9h28JrZCFd57fnPMAMAqkexh61rjLztLGS9CYYmNoVZYLLX1Ugx6vLaT4pckp6jXGQvgnL7AaxY8APhZHLqdUK",
  "key36": "44ezMtkcZnwFugf6R4S9HR41a84farX75aY6SRcRHCjHUAPTQUXk5ZjfbZhbHP73VqcZzYqshVTJPMqnDhmZeYU4",
  "key37": "49GXMgUdk9dnTZfi19zUaiyXsp4EYAyV2Q1wS4VpjiQCBGjZsjTMi1Hh3w1WkQgXhSBV6PfvM8oyozz97Si1MTvQ",
  "key38": "9ANkwCfPDGQk2VN7VK7V76sfLSMJrXnwa648ssxYXaueBW5w1HKH2yXYMzpXUt6Wa1pjQtCGwRbgXGoCkxBZrjU",
  "key39": "3eSZizYoxq5cduJgMjs9LKAdn8Y6h2RG4MkJRSPMDjfVqJ3c1YKK8eFp61oJ6foohgd79PKeGzFCTc5fWdhZNFpL",
  "key40": "4jPZiqfjGtD41CLbRtqpqwxJURfXW44Btf3Y6ceXw7hUvHmj3xTKuGfgwNN29arBDwsBwkBVGofD2Kk9NnMUWg9R",
  "key41": "66BBk2mTWPrEUHQHmBSGfSyDDKE6CL39Gqow1mocBtPXoCF5egkrdqUasiUfkT9kz5bTMHSz7Y1pHWSQUSoqaNqS",
  "key42": "4T5KHAUp1wSJ1bAzFjreKZu14NcedevZz2opTbpL4Dxra1ki3p4tcAp3maUWsRQpYHZ6YBrNBdA6ijnbcZom5rA7",
  "key43": "4qwbDdWrtCqgcxxRBwbQqfXcy17fh3t3XXqwGcYLScggV8chkULL1huSjrcwLS2j6tQUZYJpJc9crFoTAhU6yuMn",
  "key44": "5z9Y9sWvn2dH1NGPYdahTBFSxewvad4EWdpWHksy5CLvcAi4nhFbJdE19FgdDQsH1HnbzUXnethCc4MtEZqfDR3o",
  "key45": "5UKZ2WhVRPQ4RyFmguLm3Kzyr1ZJcAhCp4oxMWzMxiZn1fYPeK9evyX2BzYTuV2TjtWDjohXydYA1UKrJNGifaCs",
  "key46": "Km6qG7dtvLxJAcvajML9HZMUW9UvwAjEX7jwMsVExin2H5VjszrB6hwtDQWTBWxNkGv2N7CZ65db9fRzYYxRPDT",
  "key47": "29gmVf33jsLssLjQKW4rSqu7HKhUxvUChkE1fa6JNapHNXepLSF3jewkCgYL8sx9rhhZmVMwPRMEewXWXrhCtrKU"
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
