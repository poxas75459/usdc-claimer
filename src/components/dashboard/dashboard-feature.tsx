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
    "4Z4r67GeDkKj3EGBZpdeYCKXdMxChuorTSSfqy34qNzCCRQyyW1KUfbw2TgVfVvrd1yGgT7sR22gZvR8La4V3WSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yav2Tv2fj4JJhWkgSkgniRAkT6iw2urTPHioUuMtgdoBrx5BGhrPjceJbLEDRnFM6iukwCmypxwE4sSKYnwechV",
  "key1": "61vMyYBuKEsxXAXVCLrHiwFbzMpQXdZ1qxz5mdTmk9yfGZyyLFGQLGQFdxaCx5sqcCguz4UuRvBx3DjRw7CWQCHA",
  "key2": "3dKxgfhcQtL9Sm6utDGsx3ZZ99cpnm1tWKSoKdePNFJ2wbaorydDHqhFJh1k3rLW9vNpdwaDcKFuHmnQYvEvyEi3",
  "key3": "4c1PpGbTGikUYbs47s3LKCgqVMYUYM1mRND8VMGioP1pBrjbByFDjVGkdmhwGsfdxcbhoQKosV1DpriGQANDbNXR",
  "key4": "2kciqruKH4V8DZc2nKyGAcYHiFsMjQd6xbDpDej1Md6Lnpa45eQUNbho1iyp5WjvLkyTZ3kAEmWjahLxYt6YMNsj",
  "key5": "67Qq5pbkQQAFTaN3Xbp1y9i5rF6i9A5sijUxeHoAMRvrdC89iRfkAytzX1HdznHnCCKzzov3KqWkYKf6ZXeqiEw9",
  "key6": "24AUtLM8HnFeK6RKf4P47qsUTqL24FPujfD5NRh3CyM4VHvdXyifT7fAbJ8vCdYtYeF7YcHN66HttT346Yf8qHAX",
  "key7": "4KTnAya8LCpB4Uy69FcDV7JUmzSeejyvtjbjCbCTBzDEV6Cg1T7t3ihEVFwcbphgn8rYMidg93KJMzNeHSU3CRVq",
  "key8": "3ZoKQMA3soobNtqi3TFfaAcSYPCea1gCy5pW6NAaYC4pkYKZc5Jz5K55EA2DArbTUKQcm6DFrerkbvnE8mjx6Hv7",
  "key9": "4Z6Kp8Q5LnVCQxfx62pEwpybrstwryy9fRAoUe8jLKwQSFfW4BG63gd3LZZghPBecdpKseSSDyqwAmQ1TczYAZUQ",
  "key10": "uewcg8QFAeDbcSzQmEsT6NGNRoayoTkko8dVEiR8LbjXAFvxrRN9YFtBYNCcvaywLCc7m9SbyNeJfLL3MoNfizR",
  "key11": "3AeAs4Dz3qngdFkAQYZL6UxBiCxu7gaiWf1DDhifqyXbX3qMhXvwy6CK5VZJ6K1j2t6jTGocBsJsyUHP5gxLie7r",
  "key12": "61qLvaWZkKb6b1yNHgR2mujLHFv6rH1TGLH1wCBiJkd8fGMDe5fBzvcqTXWT2drPTDKaxWkykrbgY2NMRyTWnSvF",
  "key13": "4odA6b4Loqyg4dGbHBThEJzEa23khLVCvVccWLC6GohpzenRV6hZwsChdEWoymeNjjhfFy84qecMvqfy7xqaQa7Z",
  "key14": "2fWz7uiZXVAZDd8a9jjySbxnujTVYFHyMhz9PFVLmL6JkjrzeoU9f5vripi5g9G1HTrvVRZRv1AngXagwP8ufd1b",
  "key15": "3c5bU3HSt7qnpY17majcbgoyma3WXxgukDY764jjLP27gvq7vjx2pJaov8x69oAwPQm3kcvm4592GiALXptgBTyd",
  "key16": "648pYcQW1gn21CjJ6EWY4FXRC8Fu3GsLzeSGVgp28LomydRv6YejEMPXubTGYwJNta7YaJcRSDPP8GEMwJE9PYMb",
  "key17": "3gcy1rACbcVnepCjR3RVAWbWJYKq4MdJEH9vfx5ZQ9HEeM6TjF9nWW9CifhPqv3FoT2D3LvpP4ZNKdDmquChr7EM",
  "key18": "36AzV9YAZXv7MpKeAcuLYfEJtGKrmQBPV37XgtFDkDXKdmqHcUgG46zKLkMffifEQ8wPDzF9SQtopCTBZ9Bhbbok",
  "key19": "1GkJN9JGUG2jVgXGpVDhFGeXk3WcwKkeCw4x1qGS6AMMz8nnSteNCHoM8jmXmPgLiewG7qaTF4nNFurFgSWsrLj",
  "key20": "5sCeZZ5qttqvqXiUgiAxLt2B1dwL3kGikq6LxeBxjNv8xcxDAwz7TsagL4CXjCWUUBn8YCWJBoXUHiufkwEdegNS",
  "key21": "3h5xxCTcJ9sF5tA5MEXnZ2x3SGTArifyunmq39U6e72gCtSBLwwhRoh23Fd9sJGR5xDDtRWGLP3eirRDHuWpfxgb",
  "key22": "3P8biDL8MC4SJap4LnSa31N5hiqSZXb21bm6nMbioW39h7naaMqk9Xh7zvHe5KNiduQzFifMiJUJjvwh8gU1ynUb",
  "key23": "2ngkKKd1zbERAkKLcNQSVHXcomoGmcEK225dbja5ce3ZKyHbr8CoPXNJL92DMGYTNGXmCWV2nzJQkA7QxHQzjc2y",
  "key24": "4PWwkhMXBtsSsjWovnHvXEsSBYCA58Ztf6bVJVupA778rZ7Q9PkABS13ty6xqDyYMq7SwfV8RxmZgvbfnMDvVAC6",
  "key25": "4ahPg1TtUikeri3K5x9bZx9MZLegjaaGPGZLW5U7L664Nv6hrJCyDrXd6aYwCjEUpaTmXxKGjoH8ZkfXU65eHHxo",
  "key26": "4Yj5fvCLYypGejp5HZcrrHMJ3y2wZEbf7RFkBQjFetFaTJF6ms3ogmDcnrw5psJbCzwiuXckKCcNLQs9h1C6iSjt",
  "key27": "drCo8WgLKxnhq1C4DJYxsPYNHdYZWBSWdoMkY4pVrw3BxShTaT98HLmCwFLFneNY4pRWx8GeaVedctH3mJ7gHzb",
  "key28": "NcWh75sEBZy7ca8udF88jZs7ShX88zeEZ3pDNX6MxaK7dSSvw5oh95opqcGtUUPAxZenN7QqF3DQWeQEYQYP94B",
  "key29": "2F45Up4Je9aMH9yKJg8KQYQf1DjihwvCM7V8kyBQ53rvWDXmrekg2GC9F3gvZY6txLTFVb5sqjK9PNCSKjxJDFx8",
  "key30": "3VWaPtFR48eT7i2Vmwx5W7RBvN3knjgfoVPiaopPfqMc2dTXrJkhLNVsDX7tov1EYxhFstYFHoXBkbBs1sHA6XBA",
  "key31": "2hme43T4rqkuAzB65VyiFqxMk72kNdy3StfccQ7pmfDrczJcsdjAJ4xtnqpbfXu6CukHKynendqSCakTK268JGTr",
  "key32": "5w9pK5gPGwNzhthNDtzb2LkDD7JLANvV6nuBWRZNb1BZCwQNSA1a2gu42w22cGXUnds1AkoPPomrF9tHwK5NPrm8",
  "key33": "N3Xm17fGi2GMX61d6CgkmiFNfev9YdoELLqygRDT7monwBzQrCaeHfzLKhrDSB3Sx6JYtCYUXGYeFbgRFoComU8",
  "key34": "2nRLUBJLyPszVme2brDQhuyVgGdwuSuDRk2HTdwuH1sQweAPSiCmgpWEgHhLzqJzAQkdWzqpNyQEihTTse7nziT3",
  "key35": "3xh6RjJYXKSrkim4Dqh5jHS4HbcwC7Y2ppvaGEjLFsAwi8TWusP9gYWcJmN2DG5xTa18hkedQSLuGijorrswWUSd",
  "key36": "XF8MHBbN394nEsfD8XtXe7XXfSddXJLCerTMQ8WZdDtQ7HJBZowDsY5SJqoxazWaYhuumKXqCJqGtSUfzH9ay4G",
  "key37": "2d2FAofXhDwybNq9MnWbYotDrdVtQ3CoLsN3VpmMzuGFY3eTN3KgSHSEFAy2SYNRMx53Dag7hSehKQsUok4AJBvo"
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
