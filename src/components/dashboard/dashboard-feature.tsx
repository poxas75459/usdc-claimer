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
    "3zSX5xnGsR8pjCR8PoKjAc8yPrPnkEoAquSmhLad7AX8kyF3mC3Di7xm1eZzABAtzUiNsv1HJS9BxbKYpHJdKVCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5erEqrmyEhiGGtZSs2eCSRpBhdG7uDAJH3Z5asJEqFvqx3p5zEVhhJRpibqg21GfCiJp7E8pyoC3iPAQk1c9GYbK",
  "key1": "5EbPTj8cVcd8mQ4bs4Rc65PYWfY4BoaueM18mEFPpBABKqRCFC8jXk2jmRZ7G3Br9HPUukmSF1iGV77VWwcMjFB1",
  "key2": "2xMVwXsWo6ZHobfEY5QxvmCbUhLPmM1Y8qHyZYvevocncsrVnzwUu1skHyHXLBbqjsxa5yHVggKZzRy3RCJWGupo",
  "key3": "XoF1woanaESB1ewuv49FJsrMZ6r7udP6wLnFAjccbSMezQ9nQ3qnDtcpxrca6nKMJi5hwAVpv7MCjFL9GMtAut3",
  "key4": "3SW21TVYg1ddGMQd1wpvzZpb87EzspdyAULgFLAb4s8d3iTPDG1kfTasERKaUGtENpLTzW4zSpwH6TauARqqUFmY",
  "key5": "3tRSTXPTEBDJtN4vkDyrZT6j1tSHEAKfdAWjk1nPaVug5wggQY48FmJaQrLjSd3zfraGiy9eTEvuqXdPHxYsHJs",
  "key6": "4hneuDKDjZ28gfzf87pDhMpYFhnta4WWGkXQRhffnjynw8m7FRiGTTpwmnjhXm8gad12eFJRQSUmnFcG2q9bSQiu",
  "key7": "4pooqhPKGA9ioLWApkNxZibECFnAUDRhzbXtogqTWgeSRa7mcvK2oYWCp71DVeMB9dx5RFYD8UbEtujARSPBJ5Wj",
  "key8": "3CZ7PvwXLBfxDsJ8tng6LN1GMwFGL8cdxrWDwrx6cHz4VWKiJKZYXpTho9JVMDgeHAkrFvuNNVZ4SDyVqnHuvixH",
  "key9": "5L97Aprf9dQVjygDzvxRLHRReYa5L7AjcdLDvkcWJzSUZMTbpoQ9vzyPw8aHCzUjugcBEKgr6NfAxV4PaRxDJdMC",
  "key10": "2ajLLoZzKkZj3JLqFURw7kKT5wWKnKrsBYZUuJFTaz8p4cna29nEQQAe81WLdrpZBkWrhLUUwh5r72RGyy7RSmQ6",
  "key11": "36HeEEcsZSkmNTGWo785ttkCj9i53kSuXzuRQUjzxa1qDXaTNpdteVS38SyqoVKUucnCm2gXPJDrxR6jxLmfynv2",
  "key12": "3a5d2HdGnNoZhUnNPRxXPhGXwGwEnhE2jF6ZWYCUJPdYyP4kdrgwGV4hS6ZdGZMs1fiCyrAvnpSyV9vY4GBXmViB",
  "key13": "3jomjBJpaLBeykKCoZUq6TFerQ2sNU4m9ehzBYdbQSny3qqTRSETvHBGt6nMcZsoQBvLNmHFDhawA6sTYhzzReKH",
  "key14": "3m3ZrJyAFcWgRp3CALm2XFHsQHfvVzwuagXaRBqni34rowcfp3rMAbBRm2SXVHJNhtpwL5FTscwcmev3wp5KirPf",
  "key15": "dTAKm2uvvCSqsgpbnauSwK3FZLaQR7EQUJhXLmUMFcMhVRafHTzj1sPPHHn3fH1CmgYXexZb7fTtouvwdi6KL47",
  "key16": "2Rqjt2GZAKDKG5nkC4gehpzMRZ9tWtc692t4vXGrEFyVB22spHAT8sMBwGHk1MMhBhi1JSzERxHwW9JYh2zJsu63",
  "key17": "5nbPjfRXHbvLcwoFcFLyamECzEeTQrLnSRUSDmHi1bwMmoC6SYD5ewZz8H91Mw8jNVhbUWGWd4XXY9Ag7h9b7SqN",
  "key18": "2yeiiAaCuCPZx4QRiZBUTCNFxtvibxDSTmdyMoE2frokfCp3CEdrmuow9uK3HBm7zVEcrcwVqtpFQm9Z3Lr8g6dv",
  "key19": "49xSJSU37Db9sqxE8AJ2yd3hf2KdupMyfrU3EZDm88WsYrmpDefKzPHp2gNV5Yka4V84atSKFJdP2vMGCiEppwxo",
  "key20": "WPs4tdPADimoSt4G38JnNirLvr3qobSqjZEGqLCqFYmMCSQLK9DReB9WUs5hBXNzCpzja5YnAU5XxUvZxs28ypX",
  "key21": "29ZyMm62rt83dX3VWrtYv3apwaJQHpfqNz3he4LMGqccQZzcxke8r375FNnDu6dn4YV9fHUHyYqLdPyk5c1p2NsE",
  "key22": "QXvh4LThkR6AP6PZsgVNnWWAdkSQHBqNPbKHmA96ZFHLkPsFoHQLz35fkpxhTn6Vi6RzDBFEAdB82sPKAWYvifv",
  "key23": "32xw9GyLNoev6gjnPpeN4JAnr2AZaLrzbGbjFdrymD2Co6NsG6VKCxbY3kDVmtZNYGBvzZg2NR3EbGWiqpJv2Pnf",
  "key24": "4tQjZrcJpV6FFTcR4iNvh4fn6kpiAR4avfm2boNvC4iBhVhUk4zdfnct126VzFTXQ3MFP5a7qmCssAxQmHLD2Q4X",
  "key25": "4mvK2h1tfnGh83QBUas1Fr1AQ977bbSLcCiG4Ycd1N5nvNwUiFz6QdeNXSQXhNjJGB7bVwt3upDaY77nwHm857FQ",
  "key26": "28bzUW7cG81weYaHjX2au7mWD2VdbFGSHsEZZFuqxXTYLEGsKpaus9Nr1Cge2wRuNYKfEPKbNgynxChKyKDRJjRH",
  "key27": "2u7vuN8sBggrk7Xx1rwpUboAcnad2mAWM7aEitCGewQoWhKvLpNUWZcTJDT1WXjJ6KKcCs1eRNk8hgJNpTUNyUfS",
  "key28": "m4gSDip1jYpKXpjP6ctyu57afeEWKCKpUz3eYo7au7CKzVqRL3jVmWpXLGTwzGWaBX2SFmdoS8mXuF7u9kxkBZa",
  "key29": "39q96NuffEHC6rXVgZqgoXQ7ibgfGYLHrcm3AYfsaTkbV8Hk4vsGAh6q7JArJdGjqMgqMXFPtvRtVpXnTZisvzvU",
  "key30": "4FbrSYxStibNp8VsS8s8aVAXCR4VJE1vVC1tuT3NJb9b6YDgoVEuUC4xm2BzE67oCcym8tXYvoAegUgqr2JDMNkp",
  "key31": "3g3mGk2NXaK2EQ4sLGbMXVUDTkXud4RDHdZXwFnBn9U1eFAW1D49cvr7bdS29eJJScuaMNmHtL2Dw72mi9qnz8kc",
  "key32": "4xV7wsQf3qff6H9dFNvRNLxoFXYVx7KxipGH2REs9oEhEo97EytmAvUkAro4Qd2jTRSVGcCi8KiTAAXeRZKaRa1S",
  "key33": "4AScQghNWMZDmYFLxHf1LP7gyfp2dZ7EWomEB2LWSRKXX9QEveuD2LSobv7AvcpzfKqvTZ1tgQbQsxPasn8HpbWu",
  "key34": "2kyz98voyk1mbebVVYDKHZyn4NQDmqjMsueseqHR4f77uwSZfaz7bkoU1s1ZgZGoXiHbPzBceSyfATS3hdNrDfC7",
  "key35": "33ozuYN2ZHfEQjbBvWZPf4yPe3iSDRa42yoBnPaWdLuvngCNn5xBYJuHFwYdG78p2HmwpMz7rwMbrxihwbup3uzH",
  "key36": "671jK4YiQJGeJzctZ8wWjRXjmRNnmhRYtUdXnqziMbggzN8Gy4UA6cf2fTCtFvpJux3YqukBa8ADx3dmTQczXv6Y",
  "key37": "5TyK2fTSbw49WBqMPgFqbWdmsrWkGuUgwyDMC4yaWkV11GFbBnfB8Zn7k3k6sCDMfsJ3sVXsX9weiozF22fTYbZ4",
  "key38": "4Up8hS3ngeYcxyqvh1gVVZkM6Zahrmq7wwvd6XeRXsk9MJyzKQdHmXSyXiBWB265t4YkkBTYc3PXHxWGoCqeQoyc",
  "key39": "4Dcm7cYXzKRoEerB8QuyNkUqCZM8gEpwVP8PdccNE8LPVtXZcPb678BnncH454pLeZ1QdJVwsEj9Pwso6kFFU3Te",
  "key40": "UAR6aKuwXZsBmF9vVMgFxkrzBWngcoDa2YTDYAW1JxnW8ZCRX7XZEnvYpy5GteafNjhbUiw9LdHdb8DKkGivZHN",
  "key41": "2KntqyCjfC9GudRKRbo39SDSd3apZVkYtXNvty9bZ2HffEZcDSqvgjCiwjXp6huKLivPWqfhKov5XMdENHHfS65p",
  "key42": "4xL5Gjb1kKz4ocbZxEPF7SViXAj7P1rcMd53dRhRdwgTC3F7qhK8cJK26dzGtcCiNkzExfurwhXUvhRu2EgT9YbJ",
  "key43": "5D1dEcFRdhbJeFYtzXgxRKbKXc47N9AQNYRMEYRKbC2dwB59RfCSSMWwCP6XeFgifH16wJET1pfkN9FqnCAaF7DL",
  "key44": "3tNJ93N3BFoJ77T4otsrp9j6tvYLvBeb4Rj9keTWutqYkBDAAJwfoCy6LuKrF5gCsdrES2rNHJnP1FJpiBHxhCwN",
  "key45": "p1NWNP9qHc77p86tVveC4E3JUp9erRg6F61ux5GrfXsxBMzBQg1BVBG1Q4W4Am9p8XV76CXuFASmwes4ZQ19p5h"
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
