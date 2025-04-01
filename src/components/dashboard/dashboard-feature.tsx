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
    "3mydVivtkhSisHEnW2Bo6jL89dqJ1hSMStm3eouUiwviPMv27j7rcRE3EgpVsmKD7S92Wo3tXCfwxmif2VVrPcez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ez7LKhQZccfmGRTyD2ZEBXrkKSUCdjevB5XYrhQwb2PuZxw9VDWYJVUyHwE7S21RVk6GTU8KiVaDJtUEik9uZ6u",
  "key1": "3UkeTqzouX4LemUDx4AD3wbKYo441SrLmmbFRCxqJK7PKg5V8NqGYkqwkcdHdQaMMqn1gU3SnBvQVT8CA27z9B3",
  "key2": "2j1Wg6boT8jbgHcRbfbRG6452ypGZ6Kppjd9zAdBL9E9dcvUaT8vWd3ZDbSRt4TADRfGQL2uqVwkaHLZbgDFba3z",
  "key3": "4GkGtm3Tk5JwXdXN6ADyyU96yidMASAHUw85tcoTGQqehEfvoy2djdGGmrdcgfgDkBr3XvqbRi2WQv7szzp77Qiu",
  "key4": "7Lio6i9C15mP1tK74TzCV4TGv7p3wAr7w6vMvJgS6JQdLPLbECEaShBJpbHCpWmDdqG1De7j9n4945MF5dJfyFy",
  "key5": "2uUEqYVkz1L2kUSfxGsz3SVBqh3PbZfbb75nmTysD8iSyw8UAB38iJYjMp2hi1NA6nQXNuwUm9sBcucLxhGd3vWS",
  "key6": "4pWg8w7fb4F1dDKw2EMVn6Cbe4PtxMqofcC9KGFfUoDYiHuCXGXurspXht2PaBvM2wCNJ7rzfxguCaoX4uG2Bejg",
  "key7": "ZYcN6qHpEd7fKmfmGdCrdaAMFYR5z2CXr8fiM5QFQozXxWEPP2gPnsaEkXmPbhrFcSbUgkHxzyrhhxbhayFUcmZ",
  "key8": "4YwjkZ5o6v6aPm6P5wU2DA8iFZi1tW3yKX1Truz6YbcphRyMdf6jfynf65Eq5cj4oPqu4eSbDaYsLSPrJyHh592Z",
  "key9": "3mTpjBFH7fCZVwiWPiLunJURfbB3rnubHM5iuJHUw72HNe6c28dQTx1WLDbg1sG851o5rRPEP9PmP3iFChNvBt1T",
  "key10": "49peMiUgSnrcvyCwvPEZmoXunpUkwCjzj1oEtEYJH1432Lv89UQ1Yp3WqrVJqTJVD8TLjFBeHWpJMJiz4CY4fy3i",
  "key11": "5u72S14UYEgPRwNi8qmefejdSh6xw8Et6X6GUGDUbXd6TA5Dw4gAHJofvTo69Mgcfq7gya8wT4rQ4EQ8BNWTukJ1",
  "key12": "3PpJX8fHdPkb6B9NuMNYFPdWB2jr2nb5GtHuoQW6bEAAatY2HdEhcJ5xA9hfK91PNNGum5xxJ9TdtG94jhE3WWDc",
  "key13": "5oCQZE3W4E7N7jbZevsZSJ5rsFD5EwgVSuyrXWYqKwB66eTA3yEBhW7LSXF6xoChHkGiWiSJLfRtm9bFWptJh4oo",
  "key14": "5DRwfEwRJiqFFvw5VL8XBdpwFovTrvF9VvHhBYP4NkYRm8o86TgXqGhH9hHP535EWNM1CQRkD1tJVxCSjeLrgeHj",
  "key15": "5H4dE8qVuSxr7nDCpDC9oWBgDD4eezM3jQ6PXuGJX6LAmyQAvVLXBA4xy3jYqpB2rdYW4mSJE3AKwz9xLy1NmLQ7",
  "key16": "r7tHmKsQCoUEMeWf8T8tB2cYTuchM4kLzbA7jV7HhptVbKXFBLAHz4qKezA1o2GnDSu3z3USCscg3VCCj29bNkt",
  "key17": "5JSSR3pXqNC9akyWfQgXhvQaCb3WiNntqSUhoQx4pZfpZQ9odfbfMaVHewGPKzky2bXofGRCQeSVYPNSUJrdMyg",
  "key18": "3NF4T2Lr8zBrwpJWK1nb2Bc89kt8cKMS7sjMRX992yiNc6Txrcv9jRww21JGuE9DRTuN2FNHgG4fap1df1yA9Zd8",
  "key19": "4xozLBXYSQdML8qSGcDztAJVaLDzgJMZ9CYpySi612FyqRDcy621VTCaGkduiJ6xPLkztyn86xhtDqurQLZW61im",
  "key20": "5QEURwzc3EEq4BBoNMLwd9JFwZjaEd7SeHD6XcJznjj6VSCqChY1nknWnwQiWfnCBcbi6xQuCwGm8ciazunUakkg",
  "key21": "3XPLf1NttxouvFgnbwvE4mdvNCSG1cC66fMnUeDSZx9hLTNa24JtuyJHqnAqhpFPoqQwmXC9GubL9RnZQ6Tf6GVn",
  "key22": "4pyBCsSBH9r228sYpXQV235fE9obWMFUomnXu5Df51NBy6q6YwLMsMFGShyexUJ15no1hbc1qYo5nQggiGFQGjGZ",
  "key23": "t1z7CvvXbCq9Jg7iY5JwmrzGQbyZwtYZNFn4U2UodDqKNNhcrYpSfuMw9PixcSjwLdHwsca2p1YDEeoyvkH1jPU",
  "key24": "297z2drwYLC8sGvg3VoJi5wMYX5HWtncDjwsndHivCFaRwFzxaJRmf8FjrDrPAvzx7NJMDMgafKkhZzqtcfB4e3o",
  "key25": "26gD6Nq9N4G4m8vvAi6pB6c7y18HkX4Jjm23ZpEEsqgc2x4gUusxxcF3jy21XbdHWeaURcAkV11XVw87tBWYX4sk",
  "key26": "Xu2u7okXTAH4ES7qgz9UZynr6ji6q6phaiWnVXXwszWeo14jRpKs7nT7rYGptwEnHkwRwphBJKq1Y758e2CGypB",
  "key27": "4wkgNUe1ybTZaoEYv2EbPpcKNbVDqarfAqa8MNypUgJ7CLQfq2D3uPw4MjKJJe8nFz99qqsqW2X1H18UJhGbppAW",
  "key28": "kWgkjQCHNHVxGT8MockVjXiCq4VLta42paxaoUZZmMhfbdp7orqZ3osyZun1khsVCD8Lh8n34j6Vaqjcc5fjEs2",
  "key29": "zrdA61teLw8VTJvRSQHihZ3pnoTkXCTKmYi1rPwVhakJKt7bFp9uPPzAF2tHzzGWtCBhJszb8H9U1NybYr85s7i",
  "key30": "3FT3AsUD6EFWQfN9R9DEWnK86jRGhgJHCLeWkBGsygVWWFXvrVhTR6fzukKy2mmnf98PLTjopcNTkrGQ6hwW7k7H",
  "key31": "29iZwhDPqWPhk27gXtyg4Jk55PgvwrfbTRkzPLn1dDey8s7CtroiUXSrgmY3dEiN2jxE8dJxVSemyBrypSkCgBm1",
  "key32": "3ZnsXD22AH2AKSiC6dppfD7cp6P5jtL2zm8WhQJLdJJwkA5Xh9PYB7Am2kiiwXHXb2R1XK8CK86WM7fGhyYoAuyc",
  "key33": "3xde7GfYqCF34Rvt1mkn1MKzLQUyT8TZPEKrzWDdv4ZvT5GBV2hfrU9VP4uS7df2Q8VBUgYpFxo2yFucdqqTc1C7",
  "key34": "MrXajH3PvDLZmLskzcrLFUnSCQbCiqZs78EpDjHW1UbJesy9xZ2zXddFcLqrLk7e8t489cgBRHK87k1jg47SjAF",
  "key35": "2oHUdLmcHeb2ct1gSbAmsfuZHNoJjXz5LHwMCmBwzagW36VUz4K5MLa2vdSCw5R1N6KhxD8ZCBvcPvKAQ7meoBiC",
  "key36": "2eumUJwW2EgabCkJp1MwJTEDjU2Ybr44xdet7qm4RzSQgzzE5kcsj6fs9At6PdhnQ1eaVTbycgi62x75EfkC47sZ",
  "key37": "3MC2EBhWTxzp1ovH9Rwj1T5HULuRRSeQWJTC983pdibZfirFJMTk5jEdSVeYi666tWNCZoKTkc4xNxvKSBHxVww1",
  "key38": "5agwGDhJZyEfTfN9Snax6QDG7AjrRQyfGG7VGaXvjMkb2EXDbkuMMXGAwTAzmLKDGXaBVJfDQ44BtH78yAk837T3",
  "key39": "3x2TKDtQ9ogp7TjP7GGDRwunbU89xkuKD3kPjdsW6gjMdQQzfYNQtKm6ctERJqPHBC639oNzdmxURvjGd8TrNbNj",
  "key40": "5ns9XPPKMqqED28DqrVoqBBTpqvJ1qkn5472fX9rq6fG6rpqgbnHPZGXdtQQPHSx2gGjXkyBxxyGtD7rU4y5sUSk",
  "key41": "3yybADTwSLhqQcxTj82s9ddpKph86jFnXGzYKLZuPu62LDAqtc85T226xXvuc7dLKszfwgwLBobhq4ARZ98kcZY3",
  "key42": "2Dv1rohQm998yPXZ1Vs4DjYJ1kefo7Dhf62vMPdvo93T1YCX32Swq5PMcF9gSfVsMmNCjETK6oqHn8ZDMjZJqXcS",
  "key43": "3FXtyWGKdigNnGe3cWEGeXQghCBQfxQY5kThcXMr8N2V2VECQQmJQDFddHtKSy3No5cEfWRRxMpQw8WD2kurENdT",
  "key44": "4Ue6eNR84TkJzWPs1BtZy9ujDFaLoNsTKtzzFUfJziSsB7EAbBp2Ruy4YVVdQcHzK67QEAp9S6M4Vw4DaXyunu55",
  "key45": "33bp2BXkRF136JyRvwYHkNn2FRLaUeTAM5LyAG5i3forSkin69TTJfLJi7usLbQ3Cu1n4TJjdjqjCoMbyXX8Xykh"
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
