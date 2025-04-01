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
    "5doyKDLdukdx99QEfqb2bbYqezqi8VadGreuwrUBwWoUo6aC5598h4jpxXfwn2rpC37iqk33GznxGqQC8Tijp2JJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zpg8PfqXVfqNTFibkV1vriBmpHaxCoCzZVWVS6nVYRPWRNK9A496VQu6wLvhSgYqF1tmRstFKRa3t69dqYEv2Kr",
  "key1": "236xX1U8iEs1irHUpg8LCTqFPnagJsxb9sKivdu34eYHKXWkZr1rzKrzrvJLTBKP355N3VZvLxNjwjKMAoqTetcg",
  "key2": "5MxHACJpkHoqQKMktQkG8H9rKhRTF3RHnAdykL1jfiXwLjzP2ZGZA62Q6zGgKFEjNcEkgKNgoQPKwSRsURXWY5TG",
  "key3": "2mB3KA9pXQuo3ARWL88DzQZMYXEA9YYzeTU7Juooz2TNMQdc2vFLNG2CeQy7WHwuPSHe6sPABT4bd4JGYBRsjJ26",
  "key4": "t2Lup7mepYtNnwoRAKLW4D7FGhnz6KYz2BU3Xh7F5xH413Eaw7heoZ4VTpvgQ5tq68YC4RPbWAbDrd3msGKUuTz",
  "key5": "3XQ4wu8mDscoKQiNK88XBeykmWuhb22iKbDrY4qtVZH7yGoTMmcMKi4twskBynzDsBsuF4XTLi6EGej5Nj9tdSFc",
  "key6": "B9T372NXbpQCS2B3s6haHkbA26mhU4cEJKUoEH5EYgnFjCmFpsM9ejXRx56Qu8UTDi2hcjRhuXhmEu7MhJZ37gT",
  "key7": "32Rp5asfx2nAXi4dCfh7DVZBB5abgDgLqSRx78BxSTSKcw1mju8UAYP6jrUzqEisie6Ls1xbnTXMBUe5vK1zk6EU",
  "key8": "2f9cApvhaGNQZRt72ReWBvnvQdukpp7jsCokVB6DJPMYVzBUgYgj3LmQK4NTUU7rhJz7QvyeDbcu9TonWdfrTusT",
  "key9": "5WnFtpXuQMcn2GmC1YzfdZqgH8jKcyUds8NryJHiaexWm2Dq1La3V2ws3UYDYhpjp8448Gp6HMjTBSkajUMgCVMi",
  "key10": "36EmRckvJaPVjBgeWJX6SSud9v21SvJkaKJN6br2iDuWC6zTMVc74LacWraBRQmRshpgzBm1Zu49jJaj8TR585w1",
  "key11": "uiWJzwhxbLxQ7VrnAKU1HWQU5xLxh5iyBFAKwxTrfE5JozwvkzxU5ksLbYUWKLT4RcJA85w6o9UoRhFUrNqKgSR",
  "key12": "wUywbA3TPesegxki5xLnows7cvMXQGw8NZGmadkt7CuAMmUgQNbiRM3GsP3gW7FmyfdRusghxkVSye7vojwwDk6",
  "key13": "49Q9vrZNzZ8piJS9GTHbDesKVMKJC8F1mRcZzo8MZmZTk2NY311Cgye2fqJEiCWnqXnwQ2GCmw7jxY4Qx9dSets9",
  "key14": "3GaxZ69JEnHCkEQ9ur1DdjSUpkiKMWoCuCt8VLDczxbpqnduFXMMvysE3wHHGZKg8Fo7KRsatDwBxUZCC1uzY32q",
  "key15": "5rDfVTQ1PM1WMZYTck8EoGxnkJ39gs4Xm2KkfMALTespWFc9JzxkNpcBHxpjRsKQjzdJA3miBjSCWW9B5WT8NcC",
  "key16": "3f192VY6a4hfxd7B2EUKdxARvbo1Z7qju4esCac5rXgp5HcXjrSc35RA5gw5Wg3HQfuiN6HXRBogdPioC3D4ZeAD",
  "key17": "57Zo3k8Rg6ZkQYcm7nJn9fWRoMGi5386zuxf5s4DFse1YvHa9Nu8ErB1qMHa4kLbaJDW6jgtB72VqBCKeQfnzM1h",
  "key18": "5BFfowXnaiWZZtECcqYXR5c1sdfKUbuKbXpAV7Hg1iGeGmeAchnvZhyQCx7i6D2FivEqJZQVH1tWzEdb9qQZssPx",
  "key19": "9jh1nnZ4UAAC5NmFeDTvQbdJucBMcLqcHzQNo9kDosf7M258uWB51kxWfdG8Ly5eUD7RZkKFJoDmSSge2xrRd86",
  "key20": "55KnUg9WPZEeG56ouB3AkStAyAEyjof72AWckkF1CKkgnDr2HA3bcsHsSBUdP67NjFz8gGGnHKQ5wa1BZq4KQ97T",
  "key21": "5RCCjqJ8wFW8cj5seGsWqqrjor1s8vzBfmtKD6h3KdkdMZk9waFze9bP4nzBpNCGe66yoTKksj2XTAJwiwb7weWb",
  "key22": "4REUFauJwRYT6KZfWq78SjMnVfa3MXjURgKBbVqT52EZQhHiaW7DhsoddcZJGkiKWdZzMuhWMVTB9XEFrNS6wKwG",
  "key23": "2sPmQSACunbMzUhxcs3urqdFCD38jLm1jbz4TgXkHzrUWpGJ6JBot1gbnqPezd2fABrfEMe1ytuqfk4ttCnmVxGo",
  "key24": "2sPSneVJw9HP1oBahZMZwgbpcidPGayw6srBbAiPToHVR6PdxTFDTUNqqC6PHXFDqy8G7cQmQxdJ4LHSYnKy7EmB",
  "key25": "2D16SVbQwUWa6gUsUoCthQQH2EFM4mNvJnazwVaS68dGgHTrh5T3nnawozwBkqJJvzaDwW1Y8SVaE4Am5neA7sYY",
  "key26": "2ARwR5vUW353p2VaUVYEPgvS4NC8A4sHn3WmQkYLVocfiPPyQigacWzqa3vnEJiWJWdsVfLZZPbn41vF1BZCqgms",
  "key27": "29GihfgDbSPZYbUBtRTqB7N5VcGyvxcgY7M5QgX7DJoZnNxWMk4742GvdEkWhekAjDTL6pCmuh4kYkiwVKZzrBK9",
  "key28": "5cBm13rcJ6b5bvcwrq6s8T8FGMioA9wdBNaCSEgDVaCpBdo1qzekNa7hXAYUs8HfTJLVMKHuaYankVTP7aPQWHdq",
  "key29": "5RzvSZ2uHutg1HqRWvPWSfpo8YfX3DzkHF457kRzM7Z6RPb7fzFXog5EFEkpnE4zULLb7mFR7YDFXWTtwrKbQZGM",
  "key30": "5kVa4zixq26DufpjbLRiTwdLV9MCHYkMFQkFvMezjGyphTUjdv2x3DLeBDsGJma8PFYJksz3PtugZViDkm6rocLR",
  "key31": "2snWhpq3VP5sY6Vsor7B4jxiuMAWVEX3TyNvAF57JiXv8BfG5tWq8EAcv7xVrL5KbTiwjjvR44xtkWGKoEtpaiKb",
  "key32": "4S9tTZ98HajqVrmLPawiZKZdDn2zjzjnbA7zqMUdgrsuNL5cUT19Q5hwmhfQfc9H9Pygrn3iauugiJ3GsTS6L7RH",
  "key33": "3egoUVDsGT6NVKnzMdY7edZzeFDM68zcVR2tSb7DExUWCMVLmkUPYsARkesYFYnT5R6PHp82v1MXbQ4ZpCmRzqNx",
  "key34": "59kyKLBvLiTKL8uUG5ZS3kreuEWpB9zD583pJMzCwMgrKdNpkE1gbUjZ7Dbknez1V5eCTsKJzL584CXx1mykviLp",
  "key35": "5q16TfgeTQ9r9mXSBE7NtXNFpvpkBG5ZTeqjG7nMXqfxBGtZKkjZSyFR4oRVPrFEGrg8johxP8nLpKU2g6oBY82S",
  "key36": "3LouGbo6dMKQBU54AScqZ58D5XqVzR2LHt44Xkx5HdG8hWHmKDRtW6DE6Fyz9urDxjJbfC454iLcrLSLNnBU5Ubr",
  "key37": "63TdwmWwwBFLBJy8RtPWqgB2HQJaF68kJ7qNLJzt1mgeWbhwJhpwkva4Qh5nsZ4KuGw5SGkBntLDuc9fhf5NGaaG",
  "key38": "4Wc18qn7reRx7qxvQQGa17dKRdzBVr7zMMskMSsG1Y3Kfbfr1sLJemoG9KbFJZZMiAxNjrx8J5Cy1zivXTnbLRV3",
  "key39": "awA1iH53FmNDKMTBRyDF1tQ741nXheccD8piSayTCUgzSmbouimQvStEQC9dk15rSm7QizqKR8nrv8uBpkqhzP7",
  "key40": "5w9c8vgQLFrBRSsu3y67Vhrkq8R5CS9JZgnGHYiFJ4CvD5frNaPkNa9tzehVYjhU2SBFokQ8zykgWu3XqP5WPMFq",
  "key41": "4p8K7y72muxH6u6i3TumdYP6ioN87MmRhz2by23twGakLQGQ4CiYvEjF2XXoaDNsx2oNwE2RQTrsUwqdXmCCx4XS",
  "key42": "42USaWFayaGKUr8bsha9hNMYoXmS7Gqo6MWfAMUzxy2zif4gUPk6RoRtyQiFHrxE2vxyWgixZFX9KpvuY2hUrVTm"
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
