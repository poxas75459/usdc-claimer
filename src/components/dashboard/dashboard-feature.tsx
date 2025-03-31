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
    "t7B6rkjF89LscNm27TjWPAUkGgKdoipcAaB75m4U4MJaSZvUVJaB4BzHagHQDEPzC8Pta6hhpWoGg4kroL1beBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UjjcubrwZn1Xr8gAtJVFbu8sFM1LvqYEq217rY7DgMEpswTtsBkPj7ctFHfTgnnotDfA2PWKUSHTuogFivq1ZPo",
  "key1": "FWcXgtKWrTEAJicPWPM1wr2KkjdDhEUwHnFdHwiAY79N6snGrNVtNtSWzuj662ZcvpZ5FnEJk9c6TmqAEDMbpms",
  "key2": "5wGXU1sFwmhVgPTHWa311dre3TpCdfkVkh3T6oUCGkpKoS1z9ZHEbAW6BhPGEq23eKp2fvGguPA1zEYQ4KpE2pT7",
  "key3": "3WpV6HMvbwgMqCMYKztv6JxFQr8pdpsnA2psf9Jedcz3LqfAkCWRHmwzQdLtRKxwSG955WCi6vLaWodSD4k1G5i7",
  "key4": "VPfJaNFpLHfVx6XQapwAvGHqy99BhEGZbVMRdvxqG8wmQ254keQnBwZAXeLFiS3qabBUnQtxrdboCFLEcug2JF4",
  "key5": "4wpUoD2krur5zXpGF7Ygt52wfx4DSQCicNxiTK8vWWthP6wL1iDKnbd2rsaE8zHGRUAernD8FamqEb6h63J8pCMS",
  "key6": "3sARhUGSvi7C23XGufz5WZVBHiSFnTHqujSsQ1xQEaUnKdAcZ5HH4r4TRL4bpoLnTtiuXDnXCwAdsLUbHxyUZoi2",
  "key7": "5WP98BRRt4pzdU9JJkmELGDftLVsA2yrpb5tV3KUaeojHBnF3DQyffUiaYTzcF6FFeyKEpR5543x1muGgNCBMNeK",
  "key8": "CPNTEqcrDNgosw8SVas1KWDktar3VnirC3FPsRLV8bDt9EaFC7GJFtZTavShRnHi1ZG91ctXb3dWeVCfhprSqYM",
  "key9": "4zj6p5m3zDFXzb3TsVGsZoM9JYvrciBCfqarj9H9ggnkzNrX5iUBVmS7s5RMhULeUVUWZiEwgbENqZptnPDay4G3",
  "key10": "63j8kFgzhPqKKZ3k4ypqRzxZkJ3RULE6AgJpHFnzA5DY48dKqyxn29hnci2F6kQimqLqTWib8X6B6xCzPrYuRLve",
  "key11": "5M5pdwMmnJrKm4YdbYEU1me79SLaFvGxMVtMVgTSEUtqSnMVd6Nejr7n6ZySqdn9qrqQeKru4MebG3z5s71oCV9R",
  "key12": "2D7u37MqYQaBvLHioeWjjUKG53HpHwqZDAiQ1q1Ucv5kqjJ8Y4vnAqxxLfy1dZSZCeUTqiZ1cs8iE9wJFj8cr43j",
  "key13": "5pvzkLV9S5YNsjWabXkWrkTEwniRdayE9DfZC86wVMsWeiA9AaZh458o9gEPHQffLqu6sYD89zBtuRyZ2TDwf98s",
  "key14": "3VGzkrqxxuAN8j3bBr2GpDzeBxx39BMtL6qZnobkouv6Qf36LnzV56Px2JGXz6Bt32QTYEtaR8yQNXLQXjVtoWqy",
  "key15": "5hoVLa4k43MVYRRrefpEV5xctT9sTErrqCW5xoAhBgv6icWY1wmGvKkPn5zxmrCVPPrerUDE1Firf2pGqBGcABJb",
  "key16": "VPF8s5GSJpdbyDugzctRCJZH1RZUBAGF1izP8bd33oNZgxkaRzcarpLtrecmWKGYYBMtZZmC1ZJk8vA1cAEZC87",
  "key17": "4GAMBrnaCKSLLJ1CGBkAfRDVmPP9pgQCDXFm32PCqWMJS7s22iGT3Vxx9vXA8AGV56mDw6TFHZkTEoLEg5HjKNhs",
  "key18": "aCrBNFDVYzAzV6nvZCT62DdGTrMQ8vyC359GdMfPAnV2TGEt3FqmedyUFwgJ6SseiVyuJ1ANLrKQT2XJN5rBDy6",
  "key19": "2ipeWWsMgB1iCCoqLPKDM2HKu5BDfXDipt5SftMp5ST3gabVV96R9p6XPMxc2Fw3heQBkMdYMpG6oojAN22bBhyV",
  "key20": "5ScVVCJC5hkh6CmwRakv9CsuMPnGQb9Ujign7KZMDWrrQUyaHkN9nLYFoCvLnKA6bwQWYBeUnNpzNnwUPJYxFsQh",
  "key21": "2k7YBUpcfkx87kL8k2RebViuXvv9LwckaEnwcWekdskrx9PRJb7WjmSHYiujtjoEawRbicsCrqJFKcSDPHaC4oZg",
  "key22": "4VJWeo8pD8hH6hCfCeF83n13eCiG3NrhHXeG4ZsQ94V5taUoZpeiqcgdByA2L4GvhdL4j1gV1e7hRVsmRDm3zmz9",
  "key23": "5PW8yMo3jNKJ9eSRW1xBw4qtdgaFwDn5rts1i8wGGfsKzwGcZqVKYpGiKPm5UV5yqqHURbw6w6b3JyHjjJjVRCsC",
  "key24": "5pNX77Tnt6k8WjKaU9dKhXbJapW6fofN7iMjVUsLw4jnktyTsm4oFqhEcdybJ7wLMTyhRCeTRDgohAVKSgY5dAZJ",
  "key25": "3iLmCnq2TGUYjFAWFfASpVNwBEyebnPugdWPWbBTomEDqorztGfqQDbW5xovX12dknkFfRg83ozcAsTaoc9F96Jt",
  "key26": "2xkyiPPkYBwLiVCF34zTZiBqVGfQzKGsupKTQTsMqDczY6CrPKcBkNEmjghXg7r6jXLPZivxJ8Ef2D2MxPHdNz4N",
  "key27": "4QhJVLXLkozY1XunMKG7Bb79GME1hrv1A1dzK7XNEKKikbADKecjnstEjuhWaZDcqtReyygevgRyexBnry2tPUPf",
  "key28": "61gmoDzZDXQGdb7CgVZizLrBrnyU9jdU1ivSiWS9xBrpwdbreUxs7SgT7d5iJaCBKurY54TUFziVTbDuuru2cuBg",
  "key29": "275DsQUj3kqX2BHawtrtrn8ggkT6yWS54PZw2uWd1e9h8mCQ8B47MXd8yFLv6ptLsmNF5RcFRoRyxzJZitSLpuiJ",
  "key30": "42Kp7BzQkQg8hRyHKXpWD2uVkUoMGZK3kiTF5WBkQeSCzAx6QEMYRxUWUBotN5MM3z5KBPrtf1ADcakK3ws8UifX",
  "key31": "4qsU1QAWyMnF1rREDztqzfi3zmvW1L4Wykt2SqftGzCBU8657KbfuQNYpi3bkMRku4jW8BrMvaF6SeWDh9oZXDLX",
  "key32": "4HhHmg2emHFHfUyeT2ri5BfNBWyyfBsBpPbB4n37qp9FwdZ6AFvqLD6F5rHQuuKk3ifVHbRorE7mCKnshdzMptHf",
  "key33": "5MDMu1sYRmfTM6sUX9yWxkgQyEykX1hWK2QqwKLcyE6owfNknRMD2SEmszjc5Ltqm6MtwUtMxzUTiZyHQVYGXe1o",
  "key34": "9Ara6LyZPKwm1PhChvzUgwL9RPMZ7Tfm1gvs3ppDMenF8EEFc8HkpYJE1MAqAzvJFCDGywgGgSrMuCUjbzYGvKX",
  "key35": "wuv9aEF1MyUDpdPYwobGDn3itFws1ekkqKynbv5ukijToXqQjUbdYsxhpFxb3QuFGNYxsMqWAdi6DhrDGysj5pZ",
  "key36": "3ZyxzaT1uercmRgm8zGApRrHfUPHyaz7VsCTQWy3L5ZLdtCWB9HDh7fvBhxekvHRFKJdo9zbwtxWymYzDf2NrPQA",
  "key37": "5qhwz7fAmj3MEGgE1GMfQgQJmYy8nuEsXTkMW2KJLmxCD6jZLJi5vLMrSpaikfUaJXJFpZeVZ7CTyUx9PWVjbUYV",
  "key38": "46HF7AekjtJcaSSnDtDgqaez9N7EkRkE3Mo6XaJQWaznnoDZNRgcFeFC3oH2Bv82T11ySD4YG2JnfoLMPvRkGA46",
  "key39": "5cAG42NTy6JdDoKFugKPiAaMSjUygm8xotgssmmyXwi9xoXQPgDNeTPxGXGWunSuABaP6uBhJr7zCCuZLWbBsRTE",
  "key40": "5DGyigYGWGZFqv5t5WUQquqCfasyEZxzcJkxP5nhy7uj9paaw3ewZcNgRMg8jpsfETnaq8cnJXzcLpfEbVVzxBGk",
  "key41": "54iDKZgFha1f8n1ixGjPdX6ZQEUWRcKdiTWmiKCQdsJWYHS1GzGX5cHVsggEJo1XmwYhG9wffS39kQM7RYWuBDUF",
  "key42": "5wW6PjTb9tmdrBMQFi74sUGYAf5teWEdDjczH4YTDUabUVg9CN9YbJotbGHeg7gEMijDTy7WjdEg5wLCf486iB2P"
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
