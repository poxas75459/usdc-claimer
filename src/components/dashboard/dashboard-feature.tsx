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
    "3xA3qXnXxAUfdjERu8uxjcvzPuMHHiNiZiRDpYc5ugYRgN5rauP5nEr3vRy9hAgSHBjBS8RYWihefcPwmmkqQER9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vwB1A37LhqVPSE5kMppgMC5WRgCQkytMWrC2L3JY5QSDrBAQ8LJffL1CsTvahnNqHHqGkpphQ1EXxq9YHiFosXM",
  "key1": "3DFoMXk745AQWVqo9LQADkgpkaknskPfjtqxKSK3mPaGsZxsLGrZXCj8JK9RGGJQEBYsVqM1dJfvZiW9YZqLuYT9",
  "key2": "2jRoqzZL1yWDnS1V5pnT3ZhtjiLn532fKc2JvXPr7qTXsEkWcfyJK8RtpVehDC2vuKZSBTbT5NNHejgz2DNNX74e",
  "key3": "dpQEAqLA8gPaDB2D3ainRRV2k9jv3vKmFuAM6yoM7b4Rk9e5JZLNcRXzykjbk9pnjb4RYGYKRWv1magM7pLVLBM",
  "key4": "5Essbt1sDaF11sp79SYDeKSujbf2gPJju3qmPA1Gc6AxkfpEiAUR4o3RChpcexCqBPcmy4hvovEHECTKaBH65Bte",
  "key5": "p6LQkarTySWDq4TkcdrhvifB8VGS6ZNkeXmR5XgeXCVyJBUY8mBCwoS31rwbv8ZTmWoViD1ATNXgNGTaq6yZYyA",
  "key6": "4QCmVU6Ewrfb5JbwMF8N26bHbjmZswu6E7KawquPox7hhvMUCuPWPdUPrvdpdxeHwQG1ayXqN4fihx8CobPEn5MT",
  "key7": "BKzVrzpQxdKiwMWVYu36awaCr6tNzdvNHk2sDdueWTWfJRQMue4qj5dNZAZfq9qtoXuUF9eTf3UoE9wQohuhqMr",
  "key8": "YTQAFWtjgmij3x8vfzEmiFnBKat1BmbDfQXZwxtHzjVHrxsq7cTCbPQgmtvKzoa6K5LvkEgSJKWLTBZmGdZnnXe",
  "key9": "23V2GRoY7acppYC1fqQ1KR7TTHcmeeva6NPFtzWp7qp32t4hXBtERZSGc5WRfRshV3uH1jFFi4TT1PwsXopQizL5",
  "key10": "56rY6ddGJ1nTiTTEeK5XSL2LY2Hfv4fWRHCHDVeSoYBpYfYbebpif2u2ZxV6o9S3yUrXLqtYNnWx5BEoQaSE7Hez",
  "key11": "43U3pj7JWhWTsmxfew8zPc72wxkuTKQwiCXCzuMZbim9AgkWAJ2Jag8yK4b9srpNZT8MTAwSPfbPgQMgyz3peAT1",
  "key12": "4iWmGokh6cXAcMbzF4FNEjF5EGfp3FUACTnYxsMcaJR1XgHyX1KaYk1yAQL9Kw1f6bKESXqR2XwbQbAHCK99yy1x",
  "key13": "jH1gYwTbkRKbHoPv5nkttkSXTGyiDhgkTUxVZdhuP3U67uT4on8J2byxjxWKT9t6ZKXjG4FicQJgHASAPvMdTRp",
  "key14": "3D1muU613d5XPqMzUYymvVSjpZPK5sj5ZFdMiJvpLThLerqGJ6QGoeakjC51xG1WFnjHTfLGZj2nbMyLfhzisbQu",
  "key15": "JsS1zuM9VpetdXKaWbsa89BBP8CffBbDw7SmTvZHGJVaDX1iQcrNhxdYD28XWRtKa93v6bH2emjGrJMKFy4rbyd",
  "key16": "R2pMinLFFTPW8F6Z2BwKJomgyU33Tu7a336HLTj6p79BSDfLG4ogTLeNhb1fmRjvk6ocxUJ7GYXBKgwepBnKSBj",
  "key17": "4CK3kYY2QqJsnSm2V9BGqZNdT8JGWBdHghULCgKqoedSfDGDB9hagzjWvt9431g97LQoWV97sJjQJb83QwbB7svC",
  "key18": "3V8bT3X725K8qwnTDfkDRw25ZJAiAVyuQJes3kiLzdtEqPdpGPHygqmYnHwjU2BmPstkPpDcMGZnQKpffm3uvmGu",
  "key19": "34qijZJpVqcbRqbf8HJHUf7aZV37ScsagFUQZ38DjNz164pT8VchDgxADi5nQv9Wi8Bu4pwb7k8ciNGJWwHpKiNT",
  "key20": "44kvqtuNnb54g94db24urprAbQeBX3MGfToJ54KHmDyYDUPNCVLiH6VYvSAzQ5FZuk82s1chtCz6798BEBEmZDe3",
  "key21": "2YAxkLeALLwo4HeVAhAaMM3XDD3TQsw2vhipSpPJLgk81iu9iZsvWUbXgLojHWjtsZdyJiJnL3n6DPjwsY9yGRx2",
  "key22": "5hM6hCnSyA69KxWbytB9NMuWgA8ssJK16ZvAAchZ31Rm5HfTNkFC5chSPF5D7RELRhr1s3NMWkGWdLKuzotgB4wz",
  "key23": "5Po6sJdpQKDUpYGdb3HbCdU76T3MDaQwtCyN1PnJR279e36gNMMdFrBFyeWmfzEuGaUPgK8LsomGUvgSE2KiqbZS",
  "key24": "4sMhAbfLTMo8qLVqHhXwwnKGJcMnMZmyoDXhR2qnaVebYBe6pN6k5R1xE6GEbLvC1mjQ8XxEjFY895CKUxvAf9Na",
  "key25": "4BYRSnCHAbt15cNfvZFTBQUw3EYZSmPqVV5vvY5kB1uHGK45PfvJ14PM63DQDcf763DLsQs6M7R5NwhjpGTwEDyW",
  "key26": "2dGZ9fgnfjbcGDpiUAqhqM2EBUZvZZAXH3zv5MESGneD6CaYes4EUgshPw6Wet2dJdnzF33DLt6aF4vooAKTTjbV",
  "key27": "2Xu1t795PaXUy6hJL2RSyaCpCoAqW8ouBw7APbXh9Qo2CSi4CUP3FZ1PV75PwzYh1uTjWMZtfFwNU42GeGH4mrTy",
  "key28": "5d4iCMeVrpV2quQcfnJq4kgL3Qmhtb7DTkd2XCp6JUqR9xy8ZTCH4DVZeBxWZE1dbRebEd9yuQwmak89oiYpS6xi",
  "key29": "3yfbsCRHQRmdUmifd7f4rj1PnccX7BJpnzvx1Z6SoaZ1XuG5j8b6iN6J3n5thTyZMC1GQLdx34cVabzPins1U3Ac",
  "key30": "5FffGmtHprFbB7R2UZWYWzEB4UdkzMgw1mHKW3sYcJDsxepXZ19qjEPVrSQMgXBhbQxtLeoJ2N6mR7xQm5pk7QbF",
  "key31": "4ApL4W9z4ykRK1tWQVJ7TKG4zamPLobUXzrNGjHRLA6kqDe8WRm64eYaQNFZL7ATtPEfLPCo2ynHQT8TUs5CvAZg",
  "key32": "2zwox1MPLPkr5YgHPVKc6YQEPd2iUiKMZFKUkkxVvh94xwonq3K6q7LRNvERaZu3Lurdv54DXWGEFu8zdHKRmseJ",
  "key33": "2R4BixTZaB761U3TtmvFK2biLUnqQ4tShoorSVuiarBUPYN6ZX7NL9HkYdrDua635BBx7pLbsrrLdDoz48PxkrGi",
  "key34": "3jstyYaZfcNayTvDBkrUsvcL2RNkkCpzmCY62u7WxkEXQP7A5Z2xBCkhSSrvSqdqEBC6DVcADVWvCGpKnWja8rZF",
  "key35": "2E4u5cY2F62sG1WYc8MuxbrUW5TReP8DjRhLGDFP7QQaEm2bnNxfh5NvcEM6Hp7T7ERiUeWqxsuwNxTZECE5pR5q",
  "key36": "67MHwBULCvz41khxxoegiqhWc2XHJTfN3z9LbJmGyEErW7rfKfdfFMY3yrAVRA2matpaMwHkwDjtp2porDsD8pYL",
  "key37": "45vNp8iL1iRGEvRRYCdTUWWxyb8ocZXcEFbH2hVxQ5jZT9YGaS6Q6A81cFw9zMkqLnnmzfignXamSG489tTBfYVU",
  "key38": "2QCdn1sZ485AzGNid1xSypvAaBGFxLtR6bbtaV25T3kynb6JPKxDQjcFcTgGPQbW8oaeh5qp7amtyXZGB1f6Cgzx",
  "key39": "2opvU7XURhHKYVugVJvVZ3Y3nHpwXCN7JU7m39zVuTDWx3kcKtqVNDwu49GtyVUowJguv8ZHmMbzKqvUdnBfrV9Q",
  "key40": "HNuSB4xPjVxYs9dTMHBvyRDseCznGykGbot92AKb8hjfAga79vCyAdAyTL1nwwG6FEGjf1c2Kh9J1YJQ4ymvi9D",
  "key41": "22uQJTUyS5frxDnSycLT6hgJwN7cdFwSYXxzeaUNkQTeu2C6qFRHHi3TyCEGfdjtVWjCRgjKJ4735CyeR5KxXZFa"
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
