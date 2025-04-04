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
    "mvMswydjTBGuLEt3ZPdmFBs6axc4uG9Lf1Ksvs5U5ed1YXYL8JTKvDZGvBKQ4jw2amRzgNex5fPRHtPhHyE6hbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33nkPTGnkSbRJgmmRbz9W2o8nRkqCo1FH11ipCp5ei4Xo8xfCURGb7HLyaacBaT69C77fjPkpWFCyqk8vjnRvyNL",
  "key1": "5qUsgK5dRcZKhj9sFXDFcxbSFyzo46c9NkV42McwHRC47VsjY4hsHXXbP916RPtZQYjgxDxkoeQxqHquNtozHkFY",
  "key2": "E2LKFB42iy4d35fBCoiS6q7S3Wpdj5vXNv3GfYE3cB3N1FWhuBfEcrJRvaF2KREPDSi2fDTttiu4G81QjrTYVWX",
  "key3": "468PNjiVsSFFSDE9GQ1VDw1Nq6ASN2JQFhjQcCNdTeDV8jJYGxzU5YXwPA5bk4Rk2VNX98A4C9HtvuobBjzmzQCx",
  "key4": "KYxHvs6prJTLWVrWgmrn8quYeHbLFnc6s2CGntXHr3GrNxaSE9xS8T2puDmGHusWHgv4TaGTreS2aTivzRBPLyJ",
  "key5": "2qT2GCxagzTbWCxdV31yUacf8vYEJDdbyvfjxCT3eTAkeZSqBcZPFidCt33Huwru1KMKTSNBwa1dqia27pnn5KMf",
  "key6": "45WtygB4woUHq9CmvkWQLijhiqU8vKLwV1tsWNQboBaNwnJg8ZZ8zi3MPhmqfcZccTGDCkSEXjjW7yBykNGhYRyt",
  "key7": "3k9NnrY1w5xMc1aTbVrAND2FoRBTziCiVCh2QVDTVZcyxqYEUdFEW9REqnFm43UvKQKZXiLXQ8ZcRzAHAGSkH86L",
  "key8": "37CTAURdMzXTXSbM1t8jToAc25bi7XPHh3ZjN6urywUB8Y2BBGyRMGt8tNzKPxahzqqv5c6ob5v261Vxm8ETaW5j",
  "key9": "2bo5cPBCo6AXkkbrKAHewkSvMCTW7D3cD1YyVcKsFNSF52jEpQB8z3YQx1PuhoX3PRpF4nGUQsPQ5m9mw2JsvU9g",
  "key10": "5hayBMaj6LQkytuAD7N4n5p9hrwAn2WGzzo6Mg2mzkkBm2vDxe7TbpCK2KuGbzSHAk9qKP4k1EXxe1928S3xedKn",
  "key11": "3YaYUDrtsZMfZv4HPfWaEfg1ruwA39WcriUx2Jtk4CKkt4eSvXUvbgGXnYxD5Kn5guEJrSDsfL2QxdcyTQHjU3bD",
  "key12": "Ft7e5hsbKc2Xwcm2uF2usvUNAJ9Mae5KR11R7NGfYmT6bu1LpRXJTGuPPWvs6EECwMeVZdxgmnMHCvvXXX1b2mU",
  "key13": "5vt8PkV9Vk7RxHCUTJ9xfsQcgtVRTbkJzPasb2qvDbpcrPzBxYvhcFF39Nj8TwhSrgH3aJpLLtvuF9UXY4WXzaiM",
  "key14": "3aVoseJ5QP2vUcSDndAZ9qaxrgRcUzwCwLPZRhxnHfveiG3oyGRYjB2xoBZUMQnfmkThp81PZkfJCw8BJyLQHDRi",
  "key15": "ayjUsAwfmdSEy2uqCZoAkhrwkKphvS7HvA2Ke9HkYPaTwdh6cCZHfuogoySMGd1Vz5QpeEtd3YjmGVE23N6rz84",
  "key16": "3C5Tj83bvxacvahPUEhjq1cnLb4PmxQGspcoizMkyYngaihyUBGvTkxnhDXxQjB2N5Wog8s6PKa5JkJXdx2ZRsSH",
  "key17": "2x4dktRhY2ELeqpr1RVxrxhmRBXPadjjWGJ8zojjapsfoxiGyyp4XtNS55B7YxbMdvXi9yaT9tUGgpf5P6puz94c",
  "key18": "4vzoVSAAvzV8gY16JxuHtkbtVhdsjpCE2QcDyNPrRNVBL49KTzTr2bP1dpdV4DBUJyFu7uFuhytVbqE8LtcEx8LA",
  "key19": "g7iY4pxMva7T5T5HE4bVMZw4havTGnf5nFiF8rVb1YgEwN6Afy4xn5Du6hTTua85XqoYTZpHPiXeo9mMmU74pT5",
  "key20": "3PyHA11pJX4zeJakae9y4hwjf2u6XqCQikVF5WrDqXEq9yCGVCWWpKbQkY8VNjMTvcP2RC5vv87R8rAVKQ9cfViU",
  "key21": "4XMrVuW5Q1N1wDABqSM1M4rVboFh5BBnwB4KemWpyfSQJhkNRGGavU9YVPWkqy68Vt29h87ZyKi8gNcBqheijVKK",
  "key22": "2q6Yaqv4GZtFoHVj8YuxEDCYdSxUg6XAcFSEmbYYdb8t4SUwYgeZxRePtZ4ntmArDzos2BxtCe4jiD636aspD8Lr",
  "key23": "2fiUM8nAtMM58b9Wusg1z1hj9zsH15uoFqdwNeGtYJbJmyZFp7Z8xjUCycdC1abDudrg9aRsWUj1oz176y3JRsrN",
  "key24": "3BFexM8Au49VcncKYjj45JsTFxZHpmXc5X9sXrQa4WpHMjW7z5tVRnhn1yBsDPsHd2pEXCTGzsJjx2QWQcLiSveX",
  "key25": "2jFKw7ThfdbV2F6xM7HbD942XWSTV33KzUKGJ2N95BNPji1rbiFkBH95N57zMAAbbVXLuzLv4AhmeAxQPg53rwzn",
  "key26": "4h89puc1xTtQohRKFrM3gbmyweYpReWbx3iUgskycdrMqn2WfsvCA3v64JM8ThLqjQqGUL3chf739sFj834zp6Jo",
  "key27": "61c6VHa2oKjamRoR8RpwiWnzSU2gwnbu6bEXfDUsuorHiRE3vrPXkmyym9pnZHFcuAv6psobomvyXPn7UJrrvSQ9",
  "key28": "muRa1sRFBd8tsV1pvgAn4jd3Xx9ypWKBEKphtnK5GTTecQCEXJxKFSMYD8eKHE3FdComsVXmW57WiaArT1cSaEb",
  "key29": "4g4E8qLhDqg3yUtphvgwne8shVfNkwGEBkKo3qUgXAFzHm8VyaRQnndfLnTJWD4pSvQHsgZLhY1y3TpGBXFB8LF4",
  "key30": "CCrPpAT7Peq66zwZ7kCJia1o26KyxjaiiyLpx9F5MoMv2CU5xnQrKM9bW7SLUSwQ9CoNXdbCcsQoCJs1kvz5PSB",
  "key31": "21qE7QoK6GVez7YbHjU8VNuBCpH38ckra5RnVCLbWinoVon4QCdGcNaTK6shVH2BMyGwXXPb3nXqvK7HixdPvW1E",
  "key32": "2LNUtgWZvTDKnk3j6xvTMhxTBfXLyp2yERJMoLQX6EPX1URFeUtD7d8LjrYFoRGoduK1ceEKPAFaavDKjPRmeE6g",
  "key33": "2nLE7fkALsMe7h1dWnd5ZCBx9z1icdqngnWUMri1FdhSjWMzS6mDJDzsbdwwidjXebUBqUZVmkKamybxe5DJsdE4",
  "key34": "66HEndEhSi1RSd64NHgjnhXnYSKhaMFWM35k2i9NMqQMZTLiRf2cBgAubuYXCc6cgtJNEDrMxJvcM1b4BCfV3BKm",
  "key35": "dF8zwVDgUmSkLD8EKFJ2p42nYQGzCEjTfLJNu2sRLE9pRh7DaikcadjSGJ6hYxfuKaHxi2Hmf7E1fYkRZFCEoWE",
  "key36": "5yoQrg9xUQuavgcWemDgrwGBdG9RLWonBwUkDvAhMzF8ViiXci2kpkQBm4Rbv5yMMfHEXZhTLHQsHnqpDovcmHkp",
  "key37": "2GbSgix7Fxcv5ayrup7JMtadC6p5zhThQDNPFuwsnHNGdYUKPuJQ9V9XF8gL1sfK8TUm51bpBxxSz5uJJTmUBf4q",
  "key38": "3sPQniWE4RdzsDf8LcWxE7awDNyRfL6vvAoUL5VLpS5TrZ5AQBjg7cZoJCYJBUxFvbxv1Hk9VvaBVzKgAEL9HvYk",
  "key39": "2HcWugWEWT7Q658AAbLbmXMfwXsz6FzWF6tcxa3Yh6VgrxZicHwxJABRrwKEDtB8Ue1tSCPfsjDL1E84Mhc9jp6o",
  "key40": "663hnj5CRV5CtHRLasdNfL6e1qgwKJAWbHFeBzKhzXDwakNkYDsA3Td1VJJqmQPXRmYXuEnwgHZXwfd6daeb29f9",
  "key41": "5doCa38nKo5rEcTRHJ7PKgySSyosUYHSCVJVNP1oNGKBiyBk17f7AWnedEgnqQU2C8x5VCHgwMBPv6iL9UCmbDMY",
  "key42": "3aaFC7rrYquEnN1jCU63gNgvc2dnsVQUq4nRWGYVZvhxFedQvqncep9zzEhGgYyLtBNBuahPiwQnn7uydSAmENov",
  "key43": "3XYPn9r42WM87JKf7GWn8jNPhAvHuE1jKQ9MQrKttTD7t1KyXka2aPBRGuk3d1Uk2W8eU1vkb7pJ29yT3TgpN2uZ",
  "key44": "HSb6THPVGEYhUR41GqJn5ZRe1UVpUjSb9LYejE4mQYr8hiKw4kc9fVoqHE1TJh437xGZemUYJeKJfyNVkeTh4WU",
  "key45": "3vdd6FtsMq78H9txbg1bFNYeS9jSCQ5pTPPxhSoznghTJP5gSoiMF51ZcepL53bvF7x7E849W1j13tyN8HqTBXDQ",
  "key46": "wUjjMU63jcyNPccgQjWyEBZhJe1pty7aBQrB43Hg89TvRoeAmrDwUMW5hh1cW5asfoBx23ghBBxd2cy55mKsfYX"
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
