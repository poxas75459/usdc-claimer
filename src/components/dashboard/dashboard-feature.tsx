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
    "Sfbba9P6h8iwYpKH6LogdcBvrAjsmg2fSvAv8sVUP1X5pvC4HYoh37KdvXXY4KQqWqtKNq9WTjdvDW5XBMhp8uB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKE3sUoAFCMBs6Yi7bVfbKkusUmtEMA3SL67jb3ExE5tY25QP4u8CQymA2QLu4haZjMBF1GPm1GF3vH2UCD5aL7",
  "key1": "24tDHeCjkshB2SFMRUYEF5tjWxLUnySbPVCcWf28xXCXL3wLZPRGyKdwgmqaaazbUtWyAULgqXGEUQoJF5RWdXaB",
  "key2": "8VTL9Vww6s9WzK5WhsLpW5mRJRcMFQMkDkQA53LxcPbr4CVPR3LQ1Zm9KQvBe174uFnz9YkFZpHGKWFoV9Hk5t3",
  "key3": "3UokRM4zoxLiwRKLaZ1MTv5k4FwG9wiRaVP5WLsE4T4CDCVfo23pqHe611a8RQfDSSJMUr1tgGJipDK7CVDVKJuN",
  "key4": "5XfEyWiHstHL6PfhARumh1MhJtN7W4EZ8nB1zPydjoa1UrmBjwWwscXQcBKgjy4pU9dmc6LArZ8aS6atpVPGQSGr",
  "key5": "2ZpxfPtdaZDMTo1tA72bZfkNvb9ZZ5PSCLmQJrL8GRiRw9t1g6na7TSPkxKRLuSzzcjxejF277q3o5zTwwtAcn9M",
  "key6": "5xoX9nJnx9kmXFLibDNQFiLL98kLfJCyUE2AapkhGVN9aB5QTS1wScZqALjvwJaETPdW41mNUV31NQQCjkb2tUhY",
  "key7": "4wuzTNmV8GieMWbuHaKfdXJTCCik9D9NSW5xvGUjwbCRkgfwnJYSyWSSSxFdrupiKLmyHFpeWnbzTokKM3jMp16F",
  "key8": "3CmSWDuCqEH5Yy7LFJi9egRFsPmGv8ofTNm31VwsvJxVXFEDvWErQjyXnFuEeryx33ozgZaebxHt1pYbxXabFrtu",
  "key9": "4csYoxJ1h7NAMg4KGoQAnVUswK8HcpBzwv21T72gJpdxQUPnH2saEQxRbE8VJgXn6x1TZJaWwNUT3AQsY79z23T5",
  "key10": "ksSnz6v1KtLFGPZiey5xy2LewJRBCX2GGqcbuCZDjM5QRm8RSaGc8kX1VT6LUsZNMA2sTrXHHyjcSGDCGdUUw73",
  "key11": "5oBtMnsfpoPEGF8ysnjprmXRy8rcEoqAuqBNrnT2DTNhJDmn4Hx5HNGRrr59EKb1W5jpqMg4C2vG98s89RJecU4W",
  "key12": "MpWMJz2E3dR5BNrmDKd21TJW3Sv6prwi8t2FDrD5Vxg25CZ31RxZ3YymHb87PwsP3ipXdcULCsdh2QW1fbuqPVM",
  "key13": "2tJYj3wSYTiyKmozs29XxGQuqmLNZkkDBcjkXWon57PsvQM9DYMbv71a2PZHfPqhbduPnoyeuTn3jEa8pKoXUhuD",
  "key14": "ukV6ySNALD4mtD6mBEumNnMg3a9BpokYskcwjbreWLmPpPa4k27wua73XDo72yoCkDWLnAwZwguepv2TCMaQS8M",
  "key15": "375hVXVPzXybbscp4RwTjoui7rLadLUqwkoLPGw1BBhV3rEPi4rkQtoKAZ2kTLvmDfg1BkU1SKbULwshd8WfGMwS",
  "key16": "3xJU81oZErMYfz7B3nxfdwSs6gyuLCVZ42k2hCwf6NmUYYFn7irHG9J8GczRmBqwA3jDR6efvNTxr4PFKC8ucqrh",
  "key17": "GmGtpbTqojnCfrGWpwk3joSXyfRDdnDTC82FyZWLi7i5voWM8ZM1wUGVG2vi1ptMRkscH6GZoku8xoN3VHzDazr",
  "key18": "4pNKfQBSWFN6igDYm5PsPcXuq3EybR879y3mNU2eyCsXmXLgTzFhozhPW9rgDiGTqouWTLvC8tPYx6LRVxUxizoj",
  "key19": "2GkLqSoH1NefCZW9mABLyr1UEcZfFQ7LEV9LQMJigQyYn2HCzbekzvizpxNhM19B9855dyJ2iLm3Lw1RjNTM9MHS",
  "key20": "31fgYmLj8SSoWHaeBRm7yZ2puddmPisNpnAUhCVG5FyEPA4K7mCascNW33QGu924YuDQKFtJaCmLBxFnzccuqEVE",
  "key21": "3hsrHZZcmaWxuVbA5C93hGMKQCommJ7j6FRJkBNQ9YETPPPhXT3BvrQDem8RzbmV9HmrxaZPyMJcL8MLpFLLAtTS",
  "key22": "4xN19tWD8fciDYAh7NR6JN9Acgut6WgdQo41QXv89544AwvSAWqAcXwJE4jAbwwaLY8UgKH6cBXF286UgR8NYrGs",
  "key23": "4yepAB9P9ykxqm3DnbjoF99iB1x9SDdoJx9DLRsqybZK5Lw1aYgg9YFNBubKsDdYHVMuT8xDVsJ5rT7YumveHVKd",
  "key24": "3LEU38Zuf8gD5nHdjK4RpiGTPGDaZS33M7ALNbnBG33BCcpNjPGXtdBP1BGyCxJNxkFwZmVAccHCF4NmcNghCgBE",
  "key25": "4dXQNSu22AizEDrnc1TjTNRvGZjqFWMktwdwqpCJNjehnEmRS9GhpkqBaSV1xzK7X73vVwNnTGcVXrai8FaPUsYB",
  "key26": "3au12uNdSSneDsHzZ7wKMaDqMC4Q1Mv8G9TFucibhLNEav8BtoFrwfiyPUFGqTDU5Wp2cVMzkqvFiRr8H3idUNLY",
  "key27": "5VjYgZLL5awCZfdtpnd5gpc8dxu9yx6hL3TnkACN61Fo1EpZCZHdeejwccFcDv6qfCT6i2tuMebxFhCCaiwwkQu9",
  "key28": "2cT9m1Das8iLD3UR4rbrH68mC5eipYaMTQFv7p3xVqwdxJenoxVSvk28EMr89EbJNHE2iRaH5KXJBbhKH2mhyJAz",
  "key29": "LE4aXbZEexdXbhbQMJ8Dqm1ntrDJWSE7xJtkXMKCnEa691Pe2yfVRnxvYutA9qLkk4fe6i8fApejziJbSYmjCfL",
  "key30": "5DxCmcHU1nnZYfQGrBPAd4kH4ZGqUyJQ7GfWrjwzEdLq5afoYJwD3aBitzi3YDrhCX23C5nv2Xpe4nXwtFaQrdmS",
  "key31": "4mZUQpq3kxrjAbDsPg1uYcuoBNVGnnGj572RBMGeT4cB5wDUGLgwphnFrSG5yeEoQrfL6mfRdiW3DpYgioY5UJWk",
  "key32": "tQPpmyiuoPxuys1sTVCefGb41VaSoHCMQV4iLgLQ2fDQs48d6JNoUNc2mm1Z1seb2eHi76KFhUCQdYsQy364ivo",
  "key33": "1WGttP8kPPZ56cSqYXWFRUpw9dbL9EsdcBbvzvdfXXe6NX219brwrG8GMZA8knP4dQgcwP3Q4GVUAB5t2u7zX9J",
  "key34": "2gVVFMoB85vionZGY7Ro5v2TDPLSfvSAxkcmCTEyXY8wPNAE2GPAbirn7Gfz8bgaeKzGmHV6Ui3wCrmbE4rbb9c8",
  "key35": "drhNayERajE7ieMVVtGCynZUb7wi8JrGt7DxM3BiPxGXftdEYgZBiC42jLuwQEVYhpzEULK4vgESWbtdhDKJ6Wp",
  "key36": "43Ey5Kha8HWikdNppkTeXkRwgwmeMhnjPumL7Kq29Rhf733BzEBBy3Uftd11r6hPm9wZ75NQZbYDkCMsv6xNFcRk",
  "key37": "8KoMbicnQScf6YYWUqPWsCNDNBSmSg6xmNnK3Db2poe5ypRx6MA8S8FNTDoTq9RTtVF7feeHzFVNxcvmx9fnb1s",
  "key38": "4Xt44Q36vR3qeqdSQnosZarZKn22HENzgoK4ZKNWj7HefaqLxWG7Vt1sSq7kdLdwTDjvBCNDSEeiULWH5n8c9t1i",
  "key39": "23xeAmGxvHNmbbj3uhcivb8cAFn74MqaoZ73odrLCXVWv6ZuCbJ6WCh4mAgUNGzYnVo9krzWyaqsvpv3vBkAP5mA",
  "key40": "5jw5UTUVyk7i6BuKVmuosWdQc48KkC5vyuqyB1n7F16Rgeb4sGfcCRmxZegEKe5xkTXVkgKQgyKHnTu6GEQqjDS5",
  "key41": "5MmAk5tA2aiLbx1whwH9aBFzAqVpCrCZWwobZSNFGZpeMYHgGBgENkN4oDf8Z48wMuh5p438q113PBbKBJsxmFB5",
  "key42": "5X8iJ58j1tZaTknWwjQAE6mCQHnZFBqSoSoLkz4bAYoWYSctPJp4uWiutTSkmMtnqjfA5ubucAXMvqPRX4qun17f"
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
