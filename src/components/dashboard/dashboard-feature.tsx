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
    "XYYgoR4dKXFaBzBDKv2ea4zJkHBKp6QjhEsDFAAD4CHXDPD4SiR3HmXki6Fi9TCMEVA8RmTYP5aUJrpVFXqHCND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oea7JYUtfZw2mHNbpLzC39pk5dv4hruD2tx95W6664MGyBHpPuHCZZ9VQM7Awrutfnoa3ZFHgqwb44doU4vogrM",
  "key1": "2BaE3jmGzRFFqkqFun2hjfeafgVVRuFJ6YQWC5n4JuYGzRepam876XtteU1nCKUCWx7VPnMhjnKdNKxAQs1UfoVp",
  "key2": "5hGMzxTuPE4vgYNxT2ZSVs5bKCNsYeTCYfPPRB4NwaMYdEDfuYaHypbidCmv6i4XDDsp9v2DNR73Dgfp1eVng6Xs",
  "key3": "5a5NHG7dUwfwutvLp3FD2TB3kKZH73cTmAnpk3yji7rcAU4Z7VFYnM5v7dvvM7ArGbrNkG1JbLqsUuVwtoPKrk8W",
  "key4": "2HYcHX16orRzML8bpMBxSjhvVxcpFDWF8Z78ZJi9hKXJxBhQVPhNJoWu2n5ETj7FRUNMPaERFZVFJ7bZ13FHTeEi",
  "key5": "21ZisnYaQd5LgNEQw6SExfrAgyV63LGEtTN3iweFP5srqtpufHh8JcDLAaAshH4oAo7BktwEWz7PmbSPxcwE5HuB",
  "key6": "4Ey5u2CqtPt9VZ7zfoASTJP2nsJ1mVhsZbGt6scoYeLNHD6STUE5orRrvQ9SiUaVXJynbPaL9ucQQy6RzmAwPKaK",
  "key7": "5j697PKm11jH9rXSfCAH4RKN6u9BqK56nWm9HBsuqetcAupsGzScXv7uRJ2k2YjsJ6UqPbLAi3ngmnWcctiAHpjQ",
  "key8": "36tVKLj1v2jRwqctGRPMpkLJUpKQdHoPNuxUvNbm5998hupLzZfi7L4R6KpwoHXeKQGnXXt9qkDXAZpDm9ChWwfx",
  "key9": "CfpFDWe3dk7raDqYyLoVhC5S6SgDEtULNg3wWFsSQ6MxiSUgEXjUs8SirrQDxRG2gdtwDDvHrfY8YYpA6tR2wGW",
  "key10": "5cnWwT3rLtSCQHTU8ScNDa2DKMrrr811LdTXAsFk9oApVnMDA2FA1tGSvLcSeBXxuyzWiPhJM4mewKtqboRgLHiW",
  "key11": "3Mt8C8VJumcMa1xYXKgnFtqowiw75eu5AwjZTpm7ozB9c8tskwEtprg1YLEbwDJb6J5gUznLhY8eane19ANgsuUt",
  "key12": "nDPKUPkrbQzbx87WeHFj2eJzGaHJzjrtsDoiCURBt2i3VKZN2zCKzducYfdTAkUWbucP2196hyeBxxKot52ncQj",
  "key13": "43u1YA7pbAe6QVCrQFDciDiqJNHwuKDHf9cKp3eMrdQ9iGBrEJh3mc7WtVHrz84k6VQApzZGjKQvrY4rzjNf7kmE",
  "key14": "2HLm4NZEmwsHqjiRJkn8AQJwNGjtn5nDuoDo7KckpFGzGRTHR9Jv4op7uSjUtSiepWUn4aFB1BFZ1wi3HiGuZhGA",
  "key15": "uage8ZAdvXzVPDoVuUp4TUpKWhZBcHwdR6oEgTUZmkRbK7xmfSns4DMRVxfvmMr2AjssLB7eMAkJeLVvsLJh8Fq",
  "key16": "5Vk71A1CnXsmfEDHS2DJKh9xGsEvjvSEfqjii9GBEhQfMnyHvUnk4d5XxzowL7u7VQqBqGPDBw6ds1Cgp44DzMXL",
  "key17": "4HYxYUdctxfkkhmpnGqbpgJP8ujWaDU5EiEnwcPdnKzvNfUaJ4DmQELuLG5d3GmtEDVzzWRZ3g9Xbvxnz1ZKYEgf",
  "key18": "29JPqTz4BVy3wr2uL7Qi2tpR6k9JfrRLVSXxgPFqvBXVasdkiu1B39qQRXVd1SGa5q9yVufydKY7A9qxV1rbjcMW",
  "key19": "2stJwjUKECpP7AHcwHWfhSdDhHgN3pHhb9iQuY8LLKFwVfNy4NDr6xdNfkQq6fPaVmP97soSH5FUpxfMk4sCYVSR",
  "key20": "5b7pS1gVDb4941njBneyWK3LuBazDRLNcmstY449JrLq6Rs85s5ogwMio2j2rqsA6cmMfAHqp6mgoFYUF3t3y5nP",
  "key21": "5sPQPLj9XM9Ujr2UN8Q11kKJ57VeNiLBiaHfaLJpezy7mebV7p3v4ZnE4DCEe8yoo4xKsdL3TpGmU4paQeCMLgQK",
  "key22": "2fhir6f8njV187a2J3a5pawYKuNRy41bpKiLBVKjZcpxmJ8u377pbFcwAoqSnhWhWotTpqiV6gdwfJsADTUzJP23",
  "key23": "4zGs6BLL929hFvEGgnLowRq8dpmR5pibBBsHsuUxBM6STeBNLX7tLJbEB6RAQwbEWV2hnNW8KYeT4ko2XwJ34hSA",
  "key24": "4UL8XyJSYDQAG3o1rX3jogfMFTt1esv7ECr94JYfBG8cWpJC4DTnWenstt2D9fnXedE37XUPKXYfZnmypNU2W51F",
  "key25": "2hvjonB7n43rE1VhYztArvqbijaKXhctBT2rxU1UfLNv7yqFqf7w5jPdosiYQ1yQP2w1Ph39puDqUtVYVFFgHQ5H",
  "key26": "4H3ZPZbr1G3r9usdNdsv8tobU2ZNdNkV3dqghmYgfNPNTMLMSpW6gvPU8ppuofXchvbeH5GJitQPfwvszGVjXpzK",
  "key27": "3TReeBRFTQ9bzsxA5SFkT2TPJnkFcFLibgT4BJEvfu2bpZHiWecPxx67ayWj5hyLpH2ZtgJqz9xbSEb86dQj2Arx",
  "key28": "4q31ZTma3d6eWkBDR9p4FAonFnBkRzm9Y3Neev7zN2w7Cywn98QCL8J6Uszej6SZm4k3VHb75yzV68yDEP2wkm7h",
  "key29": "F3JhcXAMED95qX3YW9o5nvgMaMV8ARfhMvfLqn54emaHHyQiYWnKmZs8g7H6ZSY3EKSt117fLEn36m7PUMVyQrc",
  "key30": "oZzhz3QiyHB2nPG48E8d8tthXQdT8NCJTcrxu2YJRS6zsWGc1bojpJjWKbm13Y351FK2nUiT8G8SqTkR67UGPeN",
  "key31": "4aEgu8FwUvhAnz2pKQaX6sKjkopq2YKkinWbxZRn7tQkr1vPNCrjpHNKqAVygNUrufDpkpfeaUVi7u53qSoedXES",
  "key32": "2TbxDMFmH5NgNr4mb8VhKgBH8wCP1MQeHURhGUwkSkrLKtCUYqc1m9mwWjVdynfgLXT7X4uHJLiYzCcDpWJAX7t9",
  "key33": "5LpUab3sARtiK8kB9oLQfrMMB8Aa6vJsJWEy26FuXtKuap9UJ6AnWH9jmpQWg9iEsimmyDdxJFb4AydJqicqzkEi",
  "key34": "45e9eGYvCqgsu2FbNQCqqDkwen2VV9rKNyj2cKdaXuWuSeauagQfEH69hmTdRz5zdGo4LV5vbgtyY2f3stv23s8Y",
  "key35": "uTMFxNvDPHo1kxUZu31996fmyQapFSJt45eXTtW1otpZ6JK144yY8obcwv2EVVyNPLk5KeAdqcHAb4RvNwY6pW1",
  "key36": "aZvqQ34nfyHZGASZDBFGf2UzAfV5MA4NSWCeoV8qupM4QEr8k8f7LffJfu3zuTrKDo4wg9uAQFiUBvmDKWF1cJa",
  "key37": "61Uza9PAVDyRaisZVnL81kNkfhLWGkLQCYnk7FwSFAcg4RPosivMFCitrgEsRaFEXBpcV2y8GCwkjvG36ru3ypp7",
  "key38": "ts7CEHjYU2AswGpdr8RDJohEGwkn4SGSdTtb5fM3W5igViDuApkuk1BPwMGE1tnme3LM68MQxYkMhLuDBYvgRjF",
  "key39": "47FJsHUeNrn2gjZ9VTCcbDpN4PGt9F6NaMf21cg3o8iD9grbfaxhV1uZYyPXQZGQjpBsXETggGERPSfEUP9QVwom",
  "key40": "ZJPPQ6pGpn1293hAiceshFGng7kK4DpZg58qKc6XniL4jG7HB5bBfVLCgHzDQtizuMbS9eUXYi8WuLn8apxUiR2",
  "key41": "31RdVvj7FH4MKDoYtfzH33kL4t4AXfpf7qtMD5iywcnwYMC8Spy3pNQgXQb93g58VsG9y2KJpgbbiJBiP7fzVNTF",
  "key42": "67kZ5bPZwgaWEjHHU658MgeX21m33hwR5AkZPeKi3gFHNmpgMqoqvrfsQd4GDpQUsMeZsbW6WiiHXYqVB8RA715T",
  "key43": "4yav69ELwmWZrD9WTWDYE4obJxuhEWsCeM2XWVV7cUSeW5jiX7wXQMYRh1vX7vgeFNX6ZMfT4y8mccFn7upPzoo8",
  "key44": "2QEYRo5iUy9QRMHTFFsDZBLQo1ST4btdbfboUFVNKhwHoxbLrVJGwNzuzcfHqHTD1DKnhqxcbd7NmLgpQiV8C1Nj"
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
