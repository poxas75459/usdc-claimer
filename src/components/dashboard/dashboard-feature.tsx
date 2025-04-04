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
    "3sP2KkJFD3mMCvfntKDqMs1RV31djMSiYsmrcvuzVh79ApnJXvZEBDCCsci7ZWSfquEwutv4dFjMMuBeWJe7FizW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "367icSLbDDQCjfa8inDSwhjyWZdbBwsRkGX4JDVCxso91y6VvjVV7aeApw3PNSvtR8o1tGvzYwTiQ7ZAVWv7NamJ",
  "key1": "3hrp9ZxaEiSKtqDUrUiCeMqNWk18gTt8gC1y6yHMxQfoURodEN8m14d5W7KqQUpLZpMjRW5CosNcRqQeUtikx5aN",
  "key2": "3LnxHM6Gu1TazmJPpHa4ySPkzWy18S6jRy8PdBMrRp9f1RcvxPoCBJhBFiGx85vukconFyYFLWkWJ7QZ45mMZXRS",
  "key3": "9AXK1rdadQQoPMZJUXC2qqUNdWN1tkGN3ZYuswoPjZb2G4NHF1LPFwhyRywkZoTCvqqsMWhG6WDmVUghScHCV9X",
  "key4": "5sAxoR965yUKrFbQdmcJbpZHAkQKqj4fXwDWAHYWPSVaQ6rUtgR4Q9oa8vJW9DXAFfGkjRm8vhRJbZgmTAUaQSDn",
  "key5": "XxmLBrejUnjMWgsFToZ9tpB7M65whRtYMHjvfwyNrQPWL8svGw82fXqMsQRAJMyVDL1Sx1JdEeC1VnnuEX4qoyz",
  "key6": "7qp1Y6xUXucp8R7YZjZZfDpmgpa73YkabGtz6Uwcgmc2BF5nTFQkFuEEmPQwSaKQWsBhhNLkdzqZZE7yFdzKg98",
  "key7": "4zY1EESG3tPBGVgALTHCuAUWSGdVs21cYsCArEhe9z6hAeRHQdxKvFjCu17yuvm2xNe2LuJFzr5peHDdcFeUj2xY",
  "key8": "DCA1yQh32BZTbprvCcW3ACWWLGx71gV6YGYrTsotbMS4guGcUtSs1NX7Nka9xXMg6EbWLtJwW5656pYLW23A7aF",
  "key9": "4nqZfiTCtFRZeRArmp7ohgPw3CxqW1mV3btYu6ggzZa4GbStQhMQcNYkqNpMgrFe2tVgBw1saULhDu8WhuwCXEf5",
  "key10": "51V6hbJcwf7VTLihPq4DrpUPmSt3U9dGjRJEuzTvuqXy4xvSYhFfundafB5WM8q2DtpdTDnw85zcSdSsoBPyrohr",
  "key11": "2VviwhCro1DYb3MWSP8tGdW4MEEJBTVREsXwAJbTgN7Td1YKJ4jHCwLsGkFArzVmfCSujMtcRMBJrzf8AvLSzheS",
  "key12": "2BCDLKyrGpDZC5ADsqhiYqKN7Zjwxy1ohgj57bdAnaCY5VgnB3sEPYNZraTxTbc2RLctsajTSUhhiso3Z4W7yE6N",
  "key13": "twNkXYKQmCL2GqYURiPoBS9U6PMrSQUHUyVGFGCGhjfeH9Buma6xhnr5GYgebDEvzeMJzZWWDaqRmz5HTWr9XAZ",
  "key14": "hUiZ57CX1iuYZxuKkezZDUH6gEpe4NtGxzp99C1phSWrooqQDesuYx6x4Q3kvDWq26LQm1BWUzzCsLY1bDo8ERV",
  "key15": "3pwpHYmqv8SAuY429wbErX5PudEXSuiBxFGGpWeCik8nYBmkMkGZgN1cNnX65egZmwg6gFjuPpjcekistgq1agyH",
  "key16": "3k1d4MXfBQggDDuRgmVtbd9WJh5QLGKqYSjTe97ytsjibegHpBARB47zL9JiA4Pf5ZTtexUJti4rrs3QwXthTDG7",
  "key17": "3YB7U7LFrMDF2cdWugvFDDJxRFqSWH5Kt8CibyTTLPMPEFSRJnaDt9Mt4WRwkHToEgXVLKyCU4vswPKqwzHE1su3",
  "key18": "4fknroX5Xf7y7VeCvzgBx6CcdtrCz5hKLVzesLa9hjB8ooBKzeJ3bKCtnoPwb3RFR5EX65R7sDgwyR8Wo4LiXYTL",
  "key19": "4TRP88HBTF72ExDKZhSd5sRAfF5mNsXUbMCFLVYm1hUvNSzbwDkmNwaJFzaNgC8oecGPzNTGQdmq9Qk4sbP445Ye",
  "key20": "2EQK8oKyVNNSdN2uDjLbi8VgvkLGQqTF52qD9Ling397uznqn5zAPiZd64KHTunBvUN7ChtwHy5iLeJzCRzkCHM8",
  "key21": "5yivAJDMAZ1przZ3fr9qvGdvHEJBVZGiMMih99RZmxry1qjb6xNxk6KmLbU9rK6tH35V5V6mEaDrEttzMrsYCWDe",
  "key22": "2bC9a1ApCoNMx5SW9XjGD2qVNMdaatcBz31ejJiQnhXQQ7ayyUMFHgbcp1GaMaufh83PcvM4aMFJjGTihjb5nfrS",
  "key23": "4sCeDpH6ntcHiMbuHpoeLTCUqvgLio29yKjeymAN4sMS6NfKTfEZFWomxkwnxfd3ryM9uNJsqF7NyCiGdyCGea9h",
  "key24": "5exhj6LV8HPoS1xx6neY773eQKUGp8DbQ4ywdq99bnJjeacBVzTWojpLc4yZKankrgLJPUTUZMHcBjpcqqkbd6KP",
  "key25": "5pp9uce6cSBPentDX2iNVk7HZfqeD2eHMju8VKP4W8xfrW32Vg3L77X4JL1TpkcXnpYjjn7wQGWKVo6EPu7aztqF",
  "key26": "4VujfaFY6c4oEmiLN3RNbynAk2jDpYzvL3cEHdES9Ysa8F1PfN8UiZ8nq4kr781UvFmXF9HRBuDYLZTUjZAiw4zH",
  "key27": "2Gpo1i8VqBZjYnDNGqaFhRre5sLtbcatvD4XAJyjQwU3kfHdLFrBgbV2rKoPcLsFGwtMR7fEXniAmJpT52DsS3zi",
  "key28": "mxKJ8cx5Ryvuhp6TdZ8LMefn8sns6zumPYcUBhgsuSfNC9676Y5tBP56RJxyXMLKefFeknaQzpKV8GnMEU9Pe3E",
  "key29": "55xyx8DGHAFtX4ypuUbz5HAtsVgVBsFkccSomJMdBV8dYpfxdmVgWw4tAA9RNky54NN2EfxkCSgZbdqpgTKK2YQZ",
  "key30": "2A7RApzmYZpEzs4dM8AJ7nqtMMgkxu4xLhjP9JeuqKZCieFPutjEdbVCRqKksDaD7P4UacpGk73wK3bwT98gsuMt",
  "key31": "4iaMCFFpdxmLQ8LoiVjdvFRX1rBjtPe1wrYuGYrUkzSQBvC7yg4K46vokhVEoczuv2iZAcaxav8FCT3PHjKPEbar",
  "key32": "4UCm5AzztVYFJ85mTfmTf7mPNWTfvmDKVreG4r178V1RBdQKdN4cG5bzfphW7VpHw6fsKsZKgk6cayQ1zyhb8xco",
  "key33": "bf8XCRfdh4qEux78mEdBVyRM3yCvt8kxnLqcHBns4N6hobkQwqqNN4GHiJf9nuTM2CzhvZDEjv32UmfvGYe4wL6",
  "key34": "3myL1PfiLrg3QZR5qFKy9oVhjutuErRU7Hkh5XzQSdRrNPSr8ukfRvkP51WpcD2TNNe2C8TZv2f3uZXox7RkmZSe",
  "key35": "1av2dKBZFhEG93RuVvodtAVq6vnSjhLrTaPeYRSF9UM78gz4RF8ze6atuJyjJn2NgfYd9FSGcF4VigKuVfkm63C",
  "key36": "M4ACmZtgFEU7LWHvMkgghJDMeJApa13imfeZZmA14FXde3fQwCGG747mZ7UyM4tJaymkMKAsvdGYAxWjA7qjrKC",
  "key37": "2ppteNAfDnUMYDSitxCictvszvPre215T7a26YKreLM8FQxDfJEedyhsxRXTfa1J61sCVhzXQq8ErxQSvNT4cRTm",
  "key38": "aTuiRoZa36TzTYQMf8RQAD46MRqmZcXB5GJpRDG7jQXRdZxNY3DqXBA4QFyXs9PfUNqMWHtZFyLFrN9ie62vD3y",
  "key39": "4fbTprvxwL1E8xb5q8hVGhYnFbvCsqPdVLfxPjpoSWpLBDp9sQJkAuiwyXcnkqJutuvvjSi1sKwWhz2ULVypomjK",
  "key40": "WtCfXPurPxviQPrMRJZ2T8WxBKFWLKJpuBzVhEtfiRrRCWE5uQy9NmQzjy7U8yWDbbY8tRHR5phJzwYXAVAvWgu",
  "key41": "5LmEMDzxGjJ7ZTVcUx661wxCSrhAEcgVm3pWeaqKriYZBcr33f79ESSy2BVdZPsERCB6LRAKxu7u8j1rabHvxs7v",
  "key42": "3PjLE9Lrhs5KtqFjWbZQLgT2YSb43U6G7x7CZR3YPqL7JmQaAEHr8RJy2e8qG44W6sEeJdDtTtqrRRx2bLW6TdS4",
  "key43": "5WeRZYP6eSGiPuP2mrGJFGqvJEqsoGjLR2rDof6hH1PaNDboVfdgD7vR6L41q9PSDsC8LxT3UjEyLCmBRq8Jmv7u",
  "key44": "5FviiPVRM6KSThnCTuzcUCzuqNa16w3MWESetKMWeng6Vy2NRuLP8hVgDYNQvA3tcatMqB5Gu5eLUWxZMn2k15rz",
  "key45": "3morp8UrG9tG1efYBDLD8eJakKDM5c3TNHBgHnQ8rpF6wZ5f1H3qMtfZcPiJkvPcv2RqofrRhhdSArNc1DRjig7i",
  "key46": "42yGn12u8YUw6oD449VvSEvLwFurrYZWQY6RQBvHrgm34FtuRrBKquhG4VPkYNaAXc6ojC7kJ2ji1DhfwVCGJGmG",
  "key47": "5vZjZi35AYqrnk4cDwmh7am6prvEN8Yn6FcUjCt9WmbD5Hokac6ZWCozWDn58trUHkmgWfs3D3WDSuGgKmeYMZnD",
  "key48": "3AFqXpC4RuQv7ZbXb1H146JFU1uL6qxKWuDcLeHHsGj2SKWUACrMGUENijqX3SDKBTAZJCzr1nCsMrG6d5xw42Ej",
  "key49": "k2WwMCnEFoc2KLK8qAs34e9rHo9WAFaipg9EsikqSRPq9iW3AcRm7QnPgppEHKTdwSvApNa47maL459AE7NYKYg"
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
