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
    "DQmnPEn3H66nHk4d1K9w8crkVsWuPJZQPP4SftbJxDx1WcrZAUv7ETKLEikxVEZSrXb9ShSvunV7idp6xSF4sif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ctNZxYLtnWC8KsYtj9e4jH9pmppaFSSJk3YveLQ1X38CMKJ4oRGCxnGGbkq49pxU1RKfo23QztugeveUyetrTgp",
  "key1": "4XpByzugwCsTxFS6WVKfbM7aLM3PJgVdmqPxUpQHit26BeU6VHMejaHKtjkzDF9bhMSVLUsJ83gpU5meEjSjGrom",
  "key2": "459Ek4QQuKRGxK6J57WJ9PHZXiHL2BHfAUeyHMaDzQK2jQAbY3q1W3hdsqW7a3bJUj3x7KaaPhhFw4hgwmGp3ayV",
  "key3": "geENndWTf7Bf2rxp2f39vqgSnmaj9PQGVdHMrAR9gokkrE8JrN1XHgbs5WEQHCv5AArmipJFnYCA5xSDSWbSNqe",
  "key4": "pcpgbQP7LQYUjFH5hGDwvTvAPKFLQSX1Kdn23B36EqgYi3ahow1oZvNdHh7bgNGCQ2aKa8sX41odqa7xDzoUHG2",
  "key5": "52azzDWFzkHsum7kY5nFkAK7PTL1o6meAKvrsywNDnFeiZx9WSVvtSeaSjd4WBkSisay7TNAsiFGY1S7UN9jJaqX",
  "key6": "4MuaKgyruc4J2kQDZ3HCxm3GuHzHwo87sHifmr5isQDqLwtzQzUUYns5uptrzu4yVGPCE7Xbr4rXg9bKgTSQxkQ5",
  "key7": "3Y74gMmVs7y24w1BKckdpVMGJVKakWTHck5hiQz5k63vvmLg8ZVmkbasapeCR44i6ejqpMPdPuweZiRfLZNZom16",
  "key8": "2JCLYzXWEftMaPrHyX4ziKFrcAivjJfMDBHNvjenxswQeSiXQViDUadwuCjtGaLn2myQBhJ8oSWvwALYBf2YU9i6",
  "key9": "4as1Vp3yMc2GixispZTXCdRW2RmvwfF22UcVM6eRNokjnq8YBVzDHKLpppWXRJ2J5j1xChMHWBzxK9hAAFY1CmM7",
  "key10": "4RZE95gKvr7EXpEeiCiF7kKd3wv7NoZDNtqPJufzkhFBid2VJR9AoooDupfvTVesnDVhJMrji5DLHcBGsTZdnL6U",
  "key11": "4eogdV2onXWYirJUF2n8sBk249juZi97PTgMWGKPfXCKbJts2jJ7ZDqvNLgKRY9ykrgnx9mpRTy8zcdY1rMpWEYz",
  "key12": "CELKdBW4ELq4cS5YcbycdHq5Pczgx5J2QH55mq1wamVizffp6DW7MEH7W8KbddrrT2D2LiuBh92NWdRSY6Sxojc",
  "key13": "jvSePxkzge7pWiHfE6r6UrGWvxRBHUsC97mGLBXofKkrLytG377nwMMAs3JHFuE3StFuW2mhV4KF3XFgzYYVRt2",
  "key14": "5JsUaBAnbmoQEMXUxmKaCWbkRgHKT7HMeY6yWYXgLH8dWA5qjxd9v5yF3hBbNNVyrceFFBdHVSkjGaQiwu6xsAue",
  "key15": "j4kysSMsRQi5Gn9jeySrr1sYt2oQgxmHyCAsb97x5GuiPatCH1MpMFnE3qaHGGvLDMnVyFfGZry7rb4fKYs6X6Y",
  "key16": "48is79vsyr3xe3h4Nkmye5FkYYX7z77ai33MqqNcBLaZy57A1DzoHyaXGUDxRCXHrQ1KLaWdqUrCwLmJE9hvUxzs",
  "key17": "2Ym658EnXTW8rP5iCQeM8AbrG4zm7koVHz8Yr65oMAXAnQuSEThsXh52Hj7NyZ5N8BtvkEeVBTzSRnHP6pzPWSjy",
  "key18": "2qWA5JcYd1wEvT4y429PqrNWEtKNwe3Wop8BD1bSj6Sna6odFy7iQGMBJMCqRDK2tpywHrhMfg1dAUEi5yrT84H5",
  "key19": "5D6YSRBQCD2B79wiP2wsBmjtUfCGHbM9p1QZZos88DY3Py759D5UvH44JCsKWvStXuZJExAqkxey8yhZMnV1t2NW",
  "key20": "2rk3wS7Cw27v3Prfu3fCfj1xb2nBcRij8FxMRsPJe9Y7RZyKtpEKKD7veGRgtpgJxCZ3XotcWkJ3TNiJBWEthz8L",
  "key21": "598Sc9vtGnFcYG3CQRWL3d87ftSfaoWcj8C3kVfxJqcVVt3VN6aC2buyfgtQDVxoD35VKYKKXFqXDuc3imZKPtTL",
  "key22": "j52bbtR5AURgv46kK1CTsudnr5fdTXBhtY3L7ZLfTYUFFdRZx6sSKqWwbRyeey8SjYYoWc8d2dnR7tVTRxBjabN",
  "key23": "bFw1NTRczCpqD6DZyMbPLurF8z8FdmNgdNifP8cTSJpHuVm1JGaebM7bR4rGc3LsoS3Ttcd29L4EMFR61JRAQzE",
  "key24": "3e6GZxoxJzPG4XtEg6emuXsMWZtUdBhJww7amjz4LG8GnUWetiR49GCJMNi8dowsb1crH55to87XibqraX4N6MHb",
  "key25": "2uCCC12yqkjoPBb1676zUjg8iBH3eLbuy1SumepPsMbA3PfQLTn6DUh4WBQsca4NRVztmXLNjj8KLFf13KLqCvGy",
  "key26": "34zcXyQhfbVqpUFvjLaXQeAFzjbo11m33yjD2KzCZa3zrdws6PDQgfc1T8toKJCSoibhMbxPWW8GMRmshhxUDHzc",
  "key27": "5WhFyKeo8xsy14VQp36fstgWoCn1Bhd5Nfsca1kSQj2bjRp4gYwKpFtCS3SGzYfJfpo3KfrDTfjA6oeAhxQf4gMj",
  "key28": "izVQ7KoNmoYX3yZBhincRWjDR7HNYhXv2aPU4CZgcEu2aBYFJnuSDi96dbm9AujWJjP4xBNf5PGFZfvRGfrj1wg",
  "key29": "2vDNEYQgpBWD28cD96XjqBgDg6xVA5c9KhyaSfdL9uDsB16iNxkHJJvkY5RMc5o32FZCy1MxUuqHNVj1HVj3b9iz",
  "key30": "reTodvGCzKau5k7cwfBTf1GpEQfDUYmKhqVxoAMaN2H7HEfQXubkVSXme6k1hsosotrvig5WvepyqbcN6YpkfXe",
  "key31": "3thvxHoWiqb3oEtxTt5TWinEJbKTAMAKBcnmyzCYTugdAUsSUcwEBP92dbyKMeb5Vd7UywBWxmhsfCwY3q891Z93",
  "key32": "25qeQueh4E1hGnRdt9Hx2qCgTvN662q6cPxntAxHNjHMyjJsiDhgms25q5j4o1mpXhpjr5RvgRguaopGiQvhD7zi",
  "key33": "2HeV9WZ4X56HnFshM731tbHkKufkJX6kQnb1bcjTW73NknSF19AHJSSEzDMwS8kU8SrD6xPgCBg1yVoLauXcMjfX",
  "key34": "5PYzumY1aYMdvQajiHshYDoSpEU9WTg3kQQV6yoV84DL5crTygrNchaBXiSix2XF2LUh2HjqkojgsVVCbpcc9vmZ",
  "key35": "SVA2Y7eCBzZdN6GFeLVKV8PvS3NeEcyoLcvjfsqgr18uXQ7u3MKvhdXiKmXcQvjSrf29ndTgrtMM3Kz4nLQbAcU",
  "key36": "dRNEEj5QRdFPQgYzUEWZtRao2rULfesCMDfdKaYNHr3GBKzRKZKEaH1xu58binfi38RCbCmEh1pgBYjBiHQAwKr",
  "key37": "5DSAhPs1Fq8SdvNerzr51Kg9sEjFGayNxcukyiX1auViUDFnv32NJ73Gs7umLzdhzdQdH6ap4yDaXGCpBiCC9vpe",
  "key38": "5xj9qAsxNHDTWKiztqx4P4zXcsN6icJxQWoGDHMrn49UT3GdBdWgSDd5KHN3PDeBkqnoYypYZW9vMH3QL9Cf6gec",
  "key39": "5ip1jsKmGBsLVCskPM9sPwA8yDEWsW3tQW4CgC7Uvvmvbtu247LM9yaW94LtGrZxHoLXtoDe95eVT2kcp5Ax7gsw",
  "key40": "5wxBtAtGXZC8sueQnkSw9oAGcaf35C5vbUEXvYcd5Dohz9o2Xse6Z8nWbFqHuiKMzMWKjq9tBjgpJQ3mFw3qpBiq"
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
