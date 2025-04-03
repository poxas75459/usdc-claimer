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
    "41A7yAiA4WDfQQwEwJc52XvTY5yxHRjraarRHzR75bWzVC7UrNAYafGr1TC9Mijo224Vu7e6SVCtBhiLzXwVNkJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29CBDrR5zxXyf6egYXdqez72czpM6JvARnzpMKkBhJ3M7DsGyZU8JSLdKCvhcQDAUN7ECfyArwMNP4buoozwUWFL",
  "key1": "3TkxT8dWz6ucLWG5JgDcag9725A86dXVdoMRJb2BT96Av5AoasbkfdRHnMo7tb2hFSjHnF4X1yw77MBVAtj4LVXS",
  "key2": "23CfhtZXHdyCCznoKXDP1pwHKTgbr3nSCCH8eMRJEWntqn1hppd3ux8qkaP2GbnxZ26hqdimAgjvmdwkt8iwb3pj",
  "key3": "5nCqXn2S9hwrUfXEJRn919o7gYW5Ws6zjXeLv3XQEG9YRFv5D1ekLCuLp3mD4qRMVkxs2BtjbzgULhGwmHKTw4Db",
  "key4": "4qnq1P1iDUNhmorPHuQrkkpBri15UVqu5bjZZKMTWwe8WfFLBtmyVC9Hz7QeEnRVwV29onHNiSsG7GkzcyjqhNwe",
  "key5": "3p6GoBKgTZNMwWUs3TMEaAXgLTU7pswwhEdo5zbd4FX5x12FNTvUokJGPjvn3mcqH5AxbPJUk9VNPVeZr7P7yxCL",
  "key6": "4J7fgCndY2s6CoFYCRhtnbTZc4Mf9Ch7iTNwSy6CBiCe6Uuh8PLjsKQg4gKL43EcUKFjt5RFE7sxrtp7o94711Vg",
  "key7": "d5RE2Ukdn8rYTmWrkLCDyTWPfDQbKjBMzjYVAwid5RB62Y1FtvZ3doBMytpkyeWD1Mp2MfoLpVwoaA3ks124PZS",
  "key8": "BqWrGrdHhhLqepofeWM8aaQfKvEKpRPetCC5nkmCgdSPQebPSrZEqcTYvyoDpZ1TQFM13F3fY47wgCuY9ximbtu",
  "key9": "5n1L7cc22ZhE8RBiWatoYhJQbwiahSM6KM8XgthpSiMp3QF77Nk1uNaCbSN9thwmSKrFU2qLspfxQMzWY9bLqQ2",
  "key10": "9gyDjYAYWThcWHv1mLte7e9nUS28MKRrgsutcrfqrumh5RCm1VSyUKUFSL3sQBJQ2nT1vnuY9kbFHJopfGLcx8n",
  "key11": "DK9VqosSBZxoeuGtpY73Fqd1U8d8imc5RM6sBrKpCCd2SJDH4DpqSHDdKDtTqQfgZayN6qqJ58AiQ68FjpNdkWo",
  "key12": "4Jr6wia5RNt4yLCvQgaAuRd3FaGJXnkd4fTuapjNQLhcrXqrDJ5UEW59tyX1mwo6asuYoYAYdxxhic5SrxcYsm6",
  "key13": "2QQHwYihB6YoXVFcFU2RYpNVfQDxXTRcTDCDv7e54CU25UQJT9mou1wDeySBAXUEdpkunySLY6qCEYPqcvhnjz1G",
  "key14": "wgfhmrdNvi1SJyFKSwZ9cmhpw59tL2vTGrCeC2pZVfhsiwUCxUBKj6UcKjt3rwA9x3aKauuZXXyUpYAApLazaWm",
  "key15": "2FpeyD8ZgQy78Ns1XzwoJPQZKthuimK1msFVdPrP49otSqPhGHbJHuCAjbD4uwt59Xq6zBLEjhH7VU7cBSWpvgAe",
  "key16": "oF3wJthWXqAgD5rH4FamXR2J6dbzPXqGuDmWBbdEegxseJwU7BUSPZ1qUYAYPhhbxi7c9BHt5XLBUAsQziqkvk1",
  "key17": "5MreSfnnQkrNC9Hu4fCC6TtHBTieDQtr5hFtSpjVQNusw7bXSb5Mjah1qdknnrjav9z2Ri6d3hMQLumazMPY4RnN",
  "key18": "5Z3s5psoyFFLSNRbRvjU1GcdZ5Yq21xjC3vGzt4DrN7Y9npBZPx1oBtGPMs3LEB6jPdHDfrqAa1ShGh44aHmEEnH",
  "key19": "2tYYe2UDPBeWmMP9i3kx3gTJFCBccY5or7EXLXYkLKr7a5AeDXnGyR3RGKpofFeuccFJk5KtSifC29aWREvj8n8R",
  "key20": "5CNmjeAEuJdAa7hsbjYbvduaqHydiARFukC6PfULR4hBgGC6r25oA7rSigoW6UWvY9r2vEuRrXKpV1Ct2Q8rNcEb",
  "key21": "42fNhzUps9XMxFhFpmxfYKWEVniErHroDRLcUqoq3wXxE3oFrtSjSYh2G9WLdveDSqbxjPvDH64ySALwbtqbXcre",
  "key22": "3PUo8MaqkJ2CTvb9ZaDNYGhTdEWp86yQiMQ4nnK8EpZBTabryktbLZiWwmLo9f3Agk5zWgnJge9TNT7j9egEqAas",
  "key23": "4oTUJ4EpUHkrDua4nuieUxnkVmpd24Z1v9T5eqHTir334r4UkYYwgSJ1CqzgBdqaHAA4khv3e6rdHFq8xAmUZm7t",
  "key24": "5pEsaZdBn2jFNXUzmEHXDw8C8f4s6kS6CDJx7L8d3e6nvXpv5mA98Ss7dCjmF3Lf5rrcrukoeYcF8KgbGT6JB4GW",
  "key25": "45L8bcy4H38qihYMGDdKQUfwg6sDactsrKoBWmQqhGNjGT8cpXS4aVdAN1KVeGv3ZmyhCAg5vk71rGh21ZQvPdFd",
  "key26": "3VcvV1DStbKMNBvxNjsRDT23DpaoGCfA1cb4vQPWW8UJj1H8WByfnYyuCBpRrCdEh4FLH1fzNhNFcxebijPvAk9v",
  "key27": "35f9XFuAp866SjSPPeSZA6pWWH8JnCuZbcsZS7jwAAyEkk7GPXpwUqwuywHCQi3WXtTjmgK7va7NksEu4CNS8mDN",
  "key28": "3cZqmGkJb7eHHApiPFxrLwBw6nLm9qTnuftgnPSHeWGxsLna2oQ1fc7hFSftcyKyGQwa6S1JsBufrSriMnxoKuc1",
  "key29": "4wKLA47o1c4FANPLBLh2QLPVsu1qsaYSzQPnTbz4u65n9tz7ZVz3px2tfgpyj29DxEDa3TEaarA64pJW7JChxYwM",
  "key30": "3qdExdv6S68MMFMEP9hnSHYyTj3AuoEtF1qCoZS3G2inNPevpCAyn77czv9CoXpGFw5H2vcH157ECAvReGdudMMA",
  "key31": "4vXAmUZP8FRPimhL4LRjNvKAYSJzKGFRa5KahAwmwJvghyeM6EymSaPM1oKKpuuyBnZdSzQnqFqtYSHWdiK5jTCu",
  "key32": "s18pr97BhRn4WuTbyT2NrH9TF7Rzpf9mgbKD7d7ffx6NCp4s31AzPrSbjdmXpyuQDKWodWLgFFjMCeMm2pV29iM",
  "key33": "4Y5roz4wp7pS5sW2PNkWDjYTrUwiiUjLdAraoYC8BdctmwewX73qfNCwpLUySd4NSeJaLDbRXDY3F9A4WWeVCXn6",
  "key34": "59S4yd7SfU7Jqz2NbfdEihWsgw79CaWPxDVHgixDU36ZxtPx3DXZEockNSmvrJfnq26PcsAL2AiRTHQ68i9KWGFR",
  "key35": "3BqfNzNqZzTKPfTzZ1ZB3hhuLo1cqQGz1HVpjmHsNxCFEBARLM1qDk4NytEF4vFJAk1SJHHZDGvZ5ZryxZZSpXFT",
  "key36": "25eski7wX6GRc1fv5zS9kr5QBReYLYeYREZmz8uBPagPJwjo85Gu978pRRhV4Cus4PvokzhUzaQYdYaucq24uYDQ",
  "key37": "f21KVEurr7r8xNi1wrchGvkipsjCYP6czYZSN5BERNm3cL9rzPUYFNL6UVUSa9G9ywKouGLqdZNcWYSCSmzN2dL",
  "key38": "5twWoQMyz4kNATfKNcGTzr3JzufNEW7CpRwfkSGSMza6Y7j2Cio7AENEgTy3onht5GWR6cpBKqsDUJsaPLsEYxx9",
  "key39": "45ycXZMY43ywg8dpVKTw9kUDhP3srzjCRqbPLZxHRC9WJLYC8xQjb8Nd9XRLZkgnGTz9HaLTHcZaEvPobg7Dqnjr",
  "key40": "5onXWxGRYPtLvXD5ik8Q9jG5xKjNsiBZQ8eWg6XR6BLJBBRXXy5y4DGGf8PwmzXH4R8e4TsyEAJGhW8NbhjqAGsh"
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
