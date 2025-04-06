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
    "2EGfFSCqkkma9ZAYb8TQy2fLZ6xbq5XoRCZ9zLYXF6GUYJUrXe43xiPnC7WYPHaNn7DHTi4tCQkBXtoJ5vGrmDJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s14QR81GkkWufcq7tPssYeLcEVh464qZT3jBhfnHAemEVg6mMKPwnad43PRBYbHqubdirAKXxUko49af9wT1uoU",
  "key1": "xnhF8WYs9L38RukgL92c53YcobruNGZzNiHH2ZrJU8GE9d31ZcmvLA6JgpB9QaeRB6v5Xvra5isvTAANsFNx6yY",
  "key2": "5jx5twSNUUWDUiJ5ZEPf9tKYgtHnQJbsEJjR8LMf7d7kEoP1YFzoQtwyGdCr68nbYeHbQDVAfK3N4mMNXmnuUpJU",
  "key3": "5iRA19G4NtxcnYuNBu7pcnWQR7RCDZBtypULWZL7NMDYCDv3mWubi2oamCXXPzbhrFdkobx9baqqvJrV7b3XFbN9",
  "key4": "4cMaxYpNgYk8LVGJPs4WZCUdvv2Mb1zLHzNLwqwG3jFc4A1QHxiLi6aukUcWiBGYoJB2hNGPBLCnSHKcDebKG9mB",
  "key5": "67aM3UjQWwB1bxnfm7SbpVR6RzXKKvmEhGZcBWg5HwgkQkpX4hDBn89Hdgo9ggAdd7EvnEPbGyjMRRnYt3wgXx3",
  "key6": "4dU5AT9Awc6X16JCRepYJbnmTwhJWCoBtAQwoqWiXNGfsLjxqjvY2hP57esBnj45uAT2jzVNvC29foVMgcKFZ935",
  "key7": "4Ue8SzFoGwSxkU6DeQKJEb8XjYvUT5x2mZPtRx6f8FZr3BcEPWvUcoPc9aN1bZgyz8new2iWex3H7RjQa8VA2yFC",
  "key8": "5RpRJ8vXKUuDPofhZgyvWmvzJT3GWWd7RFL3ArA2wnmi93Xqt4YiJKzpbyqgXSv5mtP6ZtgpmctBMSu5xNx8Qhwg",
  "key9": "dVHp3PuUK5vHWSie3BoYNR8sLKo7taUMMdUSt3fwhbrUvfJHNGGe3yvEjQQcEDeWXg6wpBgsyAx5uHpCjfGbS4N",
  "key10": "5Bj9avBS5hq9zRaYHdeeyfFVMYX35kJ6FBHYD9jvF3MKwAurN8UmX13x91z2TZ3hKpfPxah4wT5zgTMu9dMqfApK",
  "key11": "NTiGPbPhM9L3NpZJD35Eeo8zi7s5W5bnjg5GfPMDs8CKF7aXc3RzdWXm147obt5LGrpRvHKwqsjSY8WnEafmKtz",
  "key12": "TqGN5KC96y6D5XvmnU2NRaXsW4ajGVwmM6CAtqhncg6hP7C1VQkr3uxLBJXNuGC6rCXEsUxJ9oc99bDrqd9VChF",
  "key13": "6wE9RwB1AJVX5ufVg9pJXinZ4Rsh1jf2yQ7DVVDySqVk5QZVPmi2J2jAYRMnBotP7BNxtJ8xSttwGBzsUrT3EZy",
  "key14": "67mQ4uzWfg1VYe22H7J1ma1gDi5Ghhtq6HHrdLXuAH4XzjSK5tKS6qiGpvZi8og9EbwzMU6ebr5jLVzZ3MS2oqym",
  "key15": "YAV1vraAhQHwBvsXWTSbYDAR9Fd7jDxhWtgoBP3QacFdqApkjWNETjBaZE9brWEs3XK9YdjUayhebDG4WoDMjbD",
  "key16": "3gAcEsThK6JaNQcc99XsJMw66gYMLZGTtqnbAsjBWfWnC2FnpnifVkdyTLfR9rhNBQoEXf5UB47KmxEeRnANss8y",
  "key17": "2LwvNpSt1at9sttcAs1AjUtYFRPFHpCieLMqo6b1Ugyqw6dcuay1zapnNnf9Xqv49rCqYPSjxinw6yULUberCin6",
  "key18": "35e3kK7LS43C7snTLuVDXZbRZNier4RREfARiTpSdi4Uf8D477bkiVbwbkuhkrLwYTbDzEHpTn1Gjqmw187ynoUm",
  "key19": "44VVWnnZxNz9VAGmaxAZcg2PRUWtiLrsPmvUCh5EAeYdWjgvFduh2p17ppb4AebXSh9QEQsDGsaLjvFyPj6xfLv8",
  "key20": "gzTinDsYxTk2DEiHn38mBTvpc7xTJ2HTziivJua7b3zH7UynHRc8ZeA1tVmWis2dAiUGShA5kgzC1Zt96bnay9P",
  "key21": "2UpnaTEhyz1RRtLfAPPneb5oTFAaGiFV8JqCzJAmRJzxwkxfxtjUJ6xJLwbqNgSpaZPh36mYNLVYY65J8F5nKQya",
  "key22": "2SgKhQb7h33ykfeD3xzcA2Dvzw1hccARygM3MAn9sdubBVZBS3JzWjncMo9DuwiyZQG5t7J4mMcKftmhznGUr9er",
  "key23": "4TCk1LGEJoNAxrZMftuRDrF6hZ7upVEo5QZSgKUCSkXDz7wPVX2g5WFt87dME9wvimVV4PWJqtitpETbBMpwBXBn",
  "key24": "4oW8d4rsjmhLRzeokmQYfFYmsWfsHd4p1tQfbS6vY2HPmtQAi4MNZTL6HYJMg3zA2JZmEUSPkJRdBDBkjqBaL7ZW",
  "key25": "2A2SSM5qnNUv6rcKSruTzRkCMDLW3jqNKejQSDXCt1ZknZtBJCVBS5VhhAFcZ9qahM82X1EFyKFF1z2gfeF33Rhk",
  "key26": "4c31tdqDz3McKmgDVthcb4FXAeNnWgivwhNErQcqzeEKDHjuSD4HBucMoyWncXPVXhbAjWp3mhxNNbxMNWfMbwH6",
  "key27": "5DwRWGWtZfYNUN9qMNnLBPhtkMLUP2Trc43Mw69Du8PBPqHyHaxkTyGnRMJqPm6fyN72eqN4EzZfnK6TT2Mg1QX3",
  "key28": "AnpF5gRbn47G2sQFHijdxeWiZUM7Lp8c5B1bKQZGnWmKr8xnU9fShd98PzXdrrQbcwGCCFHN7MsUdbbZ6an43Pm",
  "key29": "2uqwANodnkpEK3KNBWXLaTBZpHxW9GRNUdKTY9S7T124KKSLNoW68dBFRABZj7JMqM8bPapM1DSXbbZ4b4SDgVE7",
  "key30": "59jHpBBdYd8X1VpmeqxjhGJpzqkGnhptN7c6Mosx1VH5kSkDzD8FbDPJiPECVP5GNY2r5gpsmDLU8ik9KYQ7Hfwh",
  "key31": "2LH7Xt5PZ5p1g9nbZ8HeY3TPftXR225hrfGT4RNHLPVfMaXzrbozWGEW48UGbPzhPTvfQxbNXgsv8FExsqPFak1b",
  "key32": "2vKuQrFS5qN9LJHsMCPQi2MNF26bUt7m97fHr1V4fZobtFku6osjLye7ZeSmZRB9R7nV5XBsUNWT2hgMr3H3cJKz",
  "key33": "664PcdA2x5cuxYKvZMpfgAn78M6YLKZKxThdipjtFS5vBWhbhBHjMoYX41tLH9NJf6HU4Gw37ZDcyn7jM1XcVezK",
  "key34": "3z9kuBSZg75EJU8GaBZRVs3TQv7HGEqdrBoSddzBVZRBNXvn1Xk7AyE87xg8HAqT2UXQTkWxV8Yhm9Kgatth3S6S",
  "key35": "5Z46qWNhSRPWU2cgraWcgjTcxgmgraaWUaXXEnQx19qbJFnavTULytKqczdASAx56BVaU7LA6gGQg3pktp9uw27",
  "key36": "4BPydbC5mXf7YS9UXtwGFPu8ntYHz49joVVGa2kusTSgZZQyv4ZKzjCwmYT1iAYTmpXcbW5rzxBx6WYpK3wK1ApA",
  "key37": "3en2ieXA7GQ1nwDy51tgxTZCUhX3Cz6FZG64aFcVbnV9oA9SdA275qPwcaRtXCqpttzDgABup4bfVhm4KLNk1TNk",
  "key38": "2B8zPm68ACGKFm7fDrn6HAL5PFf7QCL7pPK568U4HeXvpxic6q8yjNzKTM4un8AUDNEiVoYCG1VoBP3QPwPZxk3M",
  "key39": "Gk9U3AT5RHwtZ8nH2cq2u3tvBhXQsGt7rHmovBbbPnqjD3fxbK3BYEVNJJbENcZyrCWTcfmryx5b5xGLNFm5tnc",
  "key40": "2Sxv2oEV73ansGxJ2AFUMyAbdat1geE6ZcCM5RiaymY5gqgKtm66Uy1ZRkpBcqekv6ENMJTbwxcf3dYc4tGSd19F",
  "key41": "66dM2SkGgcurHdC9UJpWFD5y478K6ZJE1PprHwcDKhwtw2VLe6knypHTXCCgcSSPGxtM2s6vM5YEHgde6MAipK2d",
  "key42": "3EKnBFsr6r6JknfEvSsuLHNQRBji2DCTGBj4CxJReXRngzWym3KNp5KMKVeGaHUURW9wxSrUQk2EkFLeGnK53uJY",
  "key43": "4Ns4r7SDzNfzfyqfnrQKG65yenpL2QfWudXZoMpojJMbVfcBjAoVGnDUt6cVYkqdH5qbGpS5jr3Z3mmjS567cdjL",
  "key44": "3MNY9H3M3VedJyb75rd21WfNodrN4dvxf2quQU1jes1U3YKEoiJWWV5AFW9N2uSGFnSMsM7mkbHmEADnXAnergaP",
  "key45": "3m3UGZnkQAS7FnGArpYSAqkahr1usf4YBz7vDAGvycjUK2i7wXFapTwEbdyVSe8bHwkWctmE2GbfrP8JpMNJ9bWX",
  "key46": "2Xbyp7b1xy11yAP9m59mg63tBZQV6hLq4Ykbbc38kYVwFHFh4fLoiWLNESr4KbcVvMaAYPaGG1DhDKWBpUBPdda6",
  "key47": "29S65KJVEBxNCJapb8NGguNVYwEW3BRzKCpDVp6G7Z1WG1A1wSt2TnabYcnUKxdic2H4WuZHk5Z3ggdF4jNoKDFd",
  "key48": "5NgtwE4ypsXCn8AUSWVyXnzgkfv3pbuWkaCdqLSddxdJ6fw8QB9seEbkGT7HQPZhfCANP7hF5eRDs8VdycbCGDQ8",
  "key49": "4i5jYabSE4DHAPMt6t7Hx4uSkct75vDHHSZDhmeKrNfKm3HaFH7i6f9ZgyqitLB6665kopcXkxNnLjFCSYgFJvK2"
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
