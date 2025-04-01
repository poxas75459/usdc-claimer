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
    "59Jfu7PLRevvJzxsFKVRNYPxRHPEXaKGLqXdJ4JcZPJDxtc8uEJoAiyvTHqk59FwfK3t1mfPzjaLushWSUEfzVkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i6Q3Bh98kD2gxEyarn8NyVcRzP4umtwcrAFssVfqnXGELt4jKSu18imfUeup1AFdt72dCvFmXytZB5Nkis74wJ2",
  "key1": "3x6qxuJgqQYx1Z7gCi7qucfUX9VdnTxxkFF4Y2nxshZ8mcWAZGAHVAEy3zrUENfW85Rc9NtQAEWdos31b3XoDSmh",
  "key2": "4VvSCSt12tEazAG1vqz1ULT96Fgo6WCwEyR2diNYpAfcfv42GtKopypurDLHpdLSqu7td9oiAhuFQ5gkwT5oPmis",
  "key3": "4PXNvDEcBtG6wKQVsXoHys3WKFuP6r78vkWTwiDtgrKLj92fqjJQR4M7XHSq5dMzZCVHL1Ztbc2FoDUDV8cJiK1e",
  "key4": "5TF9SMFApHEKhi9dxDMuJDjQzMtcrHphM7BtF8Cz9A57zVdrCZJaUoeuWZw5Hz3VBE888cszX8DuYK5wUqgvUEXQ",
  "key5": "2W5Qn8UgFGbh2fLZbCXmWv1TDWMudBjXTK4E79G6yy8L2L8XSLcR6CqgJdjxkbwqNEwPy9Csso35VuGmVFucHKXB",
  "key6": "ejYorwfZtVfmmouNSC5YPi5bTE2nEFm7BonJZHANFbSGm5Dd4HJpg21bNAuDFfTQm4dAVgN7x5oYUBCVxfXY9gG",
  "key7": "2MPcHbhqYzXtdyc9jWBjRHXsK3J7KASK4cvzv8HqwhjTf5mi1XRtW5vopewqmg5Nov8gffBubqgrRbHVMBw3BMYz",
  "key8": "5EsAZhWougTe7nBF22gExrXqR3Rkez9L795mNr1vAsBoZ5iWx6RJFVDCYn1EXouJANLRqGgung4s7EmFtvdp5DfV",
  "key9": "a2ykC9PxyQKM4rogVLaNRs7nhnr1KRAmgyWfgaxjXfFgS1QtmsvwppcZxTd1d8Z4vAYLfFSNigUMJ8oSRExzo6F",
  "key10": "61Ze2HKxs7Cn6fjQ1r2TSH58QkY9B7n1BP9UjRCZTJRbAvBAyD5iD6XCK4WeMPPHiwSgP5eqL2rhQmicDCJMMiq3",
  "key11": "g8zzNHPM6pFd16dpjuRu8cuHT5eimyg27FqJmG7hgLgPdbQJBeuM1CvNUaMsdWUGF5Vydud7c9ERACqUCE5hq6L",
  "key12": "4oY7Mm6QawCbwWXDo8QQR8gvJ8vTffJAPfG6sSU6KZL1SxjzbMaasMwJDZDCU2eEgg8KKbhisv2dxJZBT9vaMNh4",
  "key13": "26QXfZVnHNSMtYLRJmZSqQRPdUhMfEdn6aFM3wf4b2AmdrEsxatdKuPK7dWs81kD7Kad6jhoKCEEhL64zV9MmAbB",
  "key14": "2ttTSQWvttHH2pTPUxspd9nkDtcXxie6EbMF5TGCYcDz4Gk6okySHB2YeFrkNEve8jVySPFodn43FJbp9mHEwzbC",
  "key15": "2C8fhxYvNQrR9PkByZRrjyYey3cGW3gHFwaJqH47NL8r56NG5s5LRNUbfYyRe7fSiYEQpttFYvXFexuW9J6kKurz",
  "key16": "5W5N4tfrD29aZnC6CX1DHckya5kni2kZeqhj9tUarSBoxMwFzkvry6Rio8z8sVP3dhEBrpDvs9u1oYujxBadyoJQ",
  "key17": "57hXBKnVvpQ8Y8zNSU9QCHQgDifhr1SQbKNsF1y3oikHYTtdp3Kc9QSDtMYDf5UqCVZPJtov4AG33RM5Dmdkyf7X",
  "key18": "4yLLKq1veq93rVJE3NehueLrbRzx4LeFUcGxUs9ja9baJEpXVCNTgP9WhX2p6Bcp6cHBisy5oGgKNE8MxF9xJPAj",
  "key19": "5vj6io6zWYw3PJsUpXsDcDYyXanMWNSRajtk2izGivSdBevwT1Z2vRz5znQMJ5exD4KbPDCttW3AGfgaJRTsAthR",
  "key20": "5B8bu2APNM1kQ21P3vRPbmVyCKpew3vjTRD2C4GKoc3ib4qRzWs6tKCK37hiM6zjyS8RAQVCBYptyyfsUKHiY2uC",
  "key21": "5rcB4VKgyzozbjdm8PDjh555DTFJFWjGtgGCfCjXP4LzG66WLzkDoWyunCjK7xWGhzFLQxwnEtouqUTx8WEB3XMH",
  "key22": "5hYkPkhg51VD4LJpYbiwdgYVxXnwi3aFic7Uix84gLojg5EXhcrkJDbhgAsKDycTNZhGWcSEVhT8TmNfB9revDms",
  "key23": "4wzDJG2sxjdTWLhbYuYgZDDc7HWG9hPMV5tacgR4XfU3nKjQFuFYo39MdrSpb3HndcJz2bXDrpgeTWEZZQQaLCSA",
  "key24": "4VMVQXTR6vhx4TXi889wMc7NStmoGeMECoAcXDraPFMR7Kcc9yAQ2dK7npged1QEoz3mgKtwTEW4LCgAN52nyNdx",
  "key25": "2DJwgyaQFpLmaHEQ8V2EFVjgqU4upoycaFMSfy6mtoCSqFzzVuF8woudESSXyfGfKNgat5B4qaR7CzfUXsWtiTm1",
  "key26": "3DUSVzBRRHjB62iv66xHXHuN3eDDFGeVwvPFA5qvz5x65AckcEJnnc2eN9D9YuCtPd8DNZ9hhCejs84Tf7ZXN5VV",
  "key27": "3fzPEBCyarsKtPUa1t98bsQSucZz1x84S3U2JwLLNRNSGZjunXTNsMRx2SFn8oMyoHAFYMUX52qnutcbGWAyPbNd",
  "key28": "5bbBAKNvR65yToRGjWB5h5o4m96tUhhYj5UGCq1Vf9e3v3BsiA4G84i5T3qDJkUfQQQuQigBvRX7LQaNgp3nfvkG",
  "key29": "26BYL4KBs6NSKVtWo5UNqWBy1F4jJK3VzvEBbgTnmwjgNoBsMBxt8GVXjZfYhCn9Mgb58tXnt8ktoNQyuGv5tV5R",
  "key30": "3Nj1uN3urUzbRLQPtdfaKi8H2qzJM7varM31CLnEfqVgyWxXNC99AKL77tMczDTZLHjv22BdfZxQpwC8NBsC67WY",
  "key31": "4A2zBqvCWBg2FB7Z53trfvgm3gVfzQjpxkymFKyUnVs7hbuj22CnAznXccoJCEimShDZRk2x3oQaRy1AZshmaNYJ",
  "key32": "5QUYqYWPy4EA6nETGmdyXcfLJGyDwLiXeKKRzFUyVtrhed1BuH3rzpqyNqxtP31AB6qS8vJ2X4AJae8ntjQFfE5D",
  "key33": "2akAGGTtHmxLNY3FqsG3LVtABDCoNB8k2kwZfuFwGhTuEZUXgcuF4CPaSGBgR9opbvWkTh8hsyCCFY5hqiwagt5y",
  "key34": "V8fG2rhHNutqJfneokAr7BvNiUAcfnjt2Dwd8VrooE39v6kgS49qkAr38YQT8Ky31qQEsByQeCby6g9okC9GRmd",
  "key35": "655qQuM6MyX19VMCHC7V2odwrgsjccQpWJEmjfuviGuo5u6M7Wz7GX52MbSdCbnRxde4kWu3w9VXYsmU2oRGjoWk",
  "key36": "4sb3n1BEEZSxnNnHrzEGE4qf2fsv7xqsoKVxt4qHJptuQP3oBg6Ee5Gu6Xv3tfTEszwLJoHQ7XjbJ82vzVp9CY4c",
  "key37": "5Z3WPSYFXMt7QkHMVKYc9p32fM1k3eoBCxZPzKPvUwjDN6w7Ffsz2TsSydb8iEcUxouAeWN8YmKBmeNU72Qy9N5E",
  "key38": "5kRchTtZP3oeDyqysrRM8b61NNgodNywV6LHPzvB2E3P4tNLGGjFcNeSPMPRZSejuqcm2ETorFHAvti2cFwNeY1Y",
  "key39": "2rTSxx9RFbqR172wDX59XbKr4RCTtwzZHvdkBSGUYZh62ns2strLpEqkQUVfD5LLJtfwy7Ukd1xzLNNpR4494EsQ",
  "key40": "3Ds3tNKT6yW2ocoUNUiYoiy4eU2kJYgLHK5Su7zHrsuiTXwZqQdAq2Hmp1Kj92DjCPUMtVBszRkvzhrv5mKjg28",
  "key41": "fp7Ng1sPCzv4uArfoQL7yimQ2cDu8LgqzsFDvufTbcVFMpGTpjqRsoAJjMZ9avAU93QMftKezF8qks4zXQ2Dbqt",
  "key42": "3AGZG1MNZugmPk3MBbzQYkc2SVtaSn7KnHbzKydyHx7QGQ9CKFuQ38UKVSKLj2GB3cx1mz1o7Tou9vpzs7KyKo7i",
  "key43": "4TmVKvYHxjPHoYa8nZccXtLpqCZB2Vi1LKRMiwR7uA7HDqyjtb9rp1zPGTwjiRsHpVNZHdDBA1GdE84RchBo4Pc6"
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
