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
    "5c4jcRnRuiyoKfeFHDRnvLbFvcKxNayCJgeX2sCyKdPadHXV254Fbqyi8djtkjzY6nJaHrxApiUTK9FAwpNiiphu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eBUUgSFtaCWCSYrYune8gaD9XAiGzXpt44XoTHYfFwJfhZqqYf5rNWhYXbxf8PC3JN1N6rFYRtLN4DTtfRfix1h",
  "key1": "5E6aftNGM6dQ4B3Bq8j6LsV5wGNBHcLN2kWsfpmMMCkZZScq2MmzrcJHuPbAkgXPjJB54D4ZNbzyodEPjqbjis5b",
  "key2": "5kpMEKSwDBq4X6mLHSTKkcEj7szdnXSiezy9jmGkb452HL9rVdfRmKdRDoV94scgYbdCupU95z9f7bmMJQuhxUKk",
  "key3": "41Dojn7rnFcSSoHixxPLbvUsdjvQSBBfJEHq5WJQiXyhbfVbQ5SfKkZ5QkFE8gPBDD7cenJxofbyhotfczczNJzc",
  "key4": "4pRYJUAyB6ipetjHvPYJXTQbzRWXhqFCxQeSWvdVUhG2Wwm7pJiH4o1N1rAQ81jdz5oxEuVLD8JQBqJwpqYGfLeW",
  "key5": "5TnLxWY6fDTfAPHWFWufG7j1yuQJ7wVgNroFkGCic4Tx8TVbubtDtDzZcPAS3oCg88yZADEc68ANVuS6G3e12q3P",
  "key6": "GkiPHfSkucn3XSN41pABde8TjBQ1yBkkYdbuG6F92ryvMwKM8eZPSZ7Hsx9bsWwsn8LdDYnhoN87tGbYv8h6N2K",
  "key7": "4pTAScTi9qaZZdcmT4FePUD99fXd2M7VkhTjGMkkCB7zeiDYzmQPaQdSoSeS2DectCtpKi9sV8UxLDEEQkBNoKez",
  "key8": "62wXMAzHYxSMkNgg4bv7ogqjbmGnqZvGWpPVuxL5trMJ4suwrqm4DSZTnu6TbUFF6bgjzCytSPvWkx1vqkWwqsgd",
  "key9": "45vCtyGrKTwerJMGcjpak8fdyq7Np4rtHUTzLbsCu7fF4Vk4iVTfujjjEpU3Vbb16Vc1VQNM9sjqX7LLQmavtJBK",
  "key10": "5Fb5D6ciaiCsbRSZCUaT8bxCHCZ412ZcJm1icX4HrtDbMeYMAsVggiuPoXyahwS25EBDhRCZ8W8SKTVcchuubK7R",
  "key11": "3hbtSPx9UFfTpXytEbgLh8oRwCdRLVoVQ4KvaMCcmh1NKrgakj5uNx4aKZA1TR73DSv4WKcYgvmc5gvCybtv5i62",
  "key12": "3ZQLeWbqkV61jTTdB6yCoKJwupEEPLWx6HcLL644sYipsStdiG9AmjAeq71ibHxMvEzMR1xah2xPKNGQ9ynv2h9S",
  "key13": "nVQeZsYf36Ly1MMvF9yCZfx7wEwChdtx23qQnS2w3hPeMfqG2UhXo1CHjqREu9XkpBJqupmQGRKMaS2ihwy5XtY",
  "key14": "3AyWXzHXehhvkUNgj4RnhLsrAWXJuYtc6Q5Bk6YCXg2jFMQaoTR4s6RLhPSgnbbBgBY1sJNxCXcSd1ewBjciFFbC",
  "key15": "2DMfLQvgEySmF9TvVwk9aDtGRqRciV7reGVX866tjpGHCb75e2jSqzDPZwRSbFx7XBwC2qcxuBGgFtTAARme1wdj",
  "key16": "63jqRMtqP5mtLkzmuaACKvTXdgaFE9p4MVjQwhPHwHUpo3GxM9MMHvUMjYLES7jFXEFxyfnGazHMe3hg6peNngoh",
  "key17": "5kH4ufpLNmbtRpbAJ18f5HzXhJigMqdRnVhu3hwbiajr8z8rtNcHq8Tb8oStdCibFRmiCr3ezZivJNAgAMdSsyrb",
  "key18": "uSJgoe8ohtLmAU98eMSNnBTzf2uyoBi1q5ppvFWH6vGuNzHNJMnaA2R2ZmqTA6gVsvPevqXdWtrjBpvYBU4GgmB",
  "key19": "868aumVzovGs8WjwKYSoRg8dzHp1fmDCji35jrBY5UfBTX7XX4SeqTY2U8LUEvu1qqMEJzWeSzYwsRkLf2N7xaz",
  "key20": "5uFaxAnbbkw4beY2TrhKSVTBQDPjt8YDoA6BRBTXaRcHHyf3vh2ieHchx9v3BMyKbFJuF77dGGMJvP7gxk4AQuk",
  "key21": "hFvFetwcXi44RocnAPbcSdq6w98xs8ZzWPCjCwrX9kcYSVchZJxZcnBSkBz5Q36byALBgY5HS7YqS1P4AVeV57o",
  "key22": "5P8L7rmBAeQoQtzDzNuZB2NTYNd9C22uD8MiME9nzgHCefweWXd7KFXYr71njexod8DAvynHA3y1CD3BwhH6366j",
  "key23": "5bP2ZiTZ3sBMHnF6nzJq9dMdjR59VXk42CAChTzpbq39uN2j5DApaodKqFp1mVrUXHH4CV44FRGcHYiMnvwTrMYj",
  "key24": "3SUZVAgCD8oDcEDK5MWWEgHyqJemykRwoAJF18XQZio1a6PbY3iqRkWMLUPEZNuFyG5v8tuF3944iaZ3tbFjoAZ9",
  "key25": "3zfk999cy9Btmug7uXWijGAwtScNChbYMHGNizhFm5Ayf87EYkAvQ1GMfS6RRwtkZoWjzdSfMcTLNms4QhkGCdhJ",
  "key26": "4EgMyjVYvTAakVMmGSfspDqngWuUpkNNw5CpUZLHsGVwqFr8ypfvws3KtAGnFMPTG3KMnxr37AZJsXnjq5Cp5VXD",
  "key27": "2UsGAQRMghT3hz7YJBmdd69dALjyU2TXLvxDboVjJFSwtk7PPaQ3iV36jQwsAjFNHHxu3cxmhGwNztkPmj1T5i2j",
  "key28": "3pK3JAgfd8Ayv4vQLhaLzZYBggjvSzKFkb3HhL5nUXSjUx6ZGMKcsjzYnbJ6iVs3K4gXXhXxuWR61CsakypyFeRM",
  "key29": "2yDabZnkP7mG7iHmEmXPsZuGHzmriF2YkZsuKN6dgLCKarsTKUTajCq7AqghbVqPuKejwuBBtxdv9ZTnJbCqpfzG",
  "key30": "2WKJ95NyPUpbjXhSgcKWoQFUev7C7UkoSEhzh8eLvLqpd5ZddVgxtznbTLiXhh91XXgTyLi7HgP7wCTY24f4bX3A",
  "key31": "21XXbvRABmiJUAQA77Lk23bwECZxMDJHXopvkWPbZrhB5EEmx18yPyrB7TVFGvzTnXzDvxoadrbHpfGJdK8vghR2",
  "key32": "5d3j1XPYu4CQBiL7P4DyL31VTxhbQ97FFXsAHtybca6Qczz2xrdRKk9FZVHSBxCSd1ZMMeLqR442vXd388DGTmcs",
  "key33": "tGUfFXCHTT9s6yJHw3c38uXEQ6CpnTFacdA5B8hMaaeaBqYo3i3oLS6vX6EyHnYBAapjbhYuzxCGojDVUQABzFK",
  "key34": "2UnJB9MVFTsT6EzdN1as44bJ64WmNWjiwi4pqJJ7uQGZHycoeoHpq3g8Y3NhKdaTECC26CCBwcBcWqRhvr4vzbFa",
  "key35": "5YVLj8LFqDh1VSdP217r1TdHPQ9G4LSqpZp3g2beNzGatdcmKnsoboyrU3Q8Pj8SKh5itKDhsYHy4k8N5ssMFfah",
  "key36": "bm965ZY8awhHmXR3NEtts3NrYaganhbWi4xqJkmmYzqnbso7VqPezm3gJ8cyjoXkYeWFKo3MLPW4B83VTvGXQ5k"
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
