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
    "47Xh6KxQVaFxkpfvoxstU8Rga12qKVDMsgRW5M3xdsMTzcptU4pxSZm5E3hKPqx2BDTkCx5NgePFfcNPxQMCKAhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZKS9PiU8tnDyxBvQZYNxCAdvY6UupFXzpt7NKd8QqZ5UGYozmizqEwBAmW1USVtCcn3mQB8xkE1B5yUiWjALyP",
  "key1": "542JmWRxXLjW6ZegAZn9VjFuMhqFZTaqp2FyGn7xSvXpijcQD7zR2rpLqrYULV4yWHgW4L3pZeQNbUZKwmicAM1R",
  "key2": "28nNY4xXsYmfjQgvjWhaGB3jtg4g9MKiwLxonMzMMBF27WEBPHPnEZRhM9G3gdGCybaDdFsiEoXXAEzvV5ax55WG",
  "key3": "xHHT13cz7CJqrsBtDai7p4fUtATvx3A8J4EpA8aNY8VrdCK9cq5gq9jRKheAZiw65xn4WMoUViZCRbQSdvBptkT",
  "key4": "7PkRAaEfj69kpB1rGDmqFktzRotXZjAt1zvWwicjtnvtZXfFauB9RCicU2WJEJkURpy5WLK6z7TD1bce6yPCgfk",
  "key5": "57vBWw7DU6HxUqyWKtRJrPPNxgkT8RdRG1BXHC8bSyaSxZra69Rhkh8hryLeiRNFRJPLaat1sD1CMrb8EroDWvkD",
  "key6": "3XSnhtrejVNyTzEqf7GdU3zML5xebPzp5rGfjpyAun1KWukitPtdY67KY5f2JFRrDzyQSY6bbmjVFLf7mJTB4wEZ",
  "key7": "45MYAa7GDWccC1ChBSCsRy7o1zik5Zmgh3TyrK9sEPDrksSgzJ5vPD8SaxF2aRHcqmd6aRnrDQTA8QJUFX6odnJ4",
  "key8": "3iJEiuz7axmNE8UUcmoemUkWi1fXNpEm1YMGvTDLDV5ucACY42s471JWLKM2e5RruGKguGnzD3gA6S8YVNxiS138",
  "key9": "2CFHRuRMzgur5DeTnbPmiKCt5CmYPhCGTTNMn4Y1aPqXmrBvfBsusdD6ifxEAaYV1uTQkPjQRsw2H2kD6ujRgHV6",
  "key10": "2h4AWBGzmqNvQNz6Xg7sNUc3k8WtUwM2tU1QrbAaSPu1xDQ8Kp8fa1D2wFcpaYM55oezW3AbDu4djYnX3X54MKA9",
  "key11": "4tEnAU1Qh8fanXz8onp4AT28yY7nymtvEhhN5Hq43HQNcnzSStYxFb6LMQqn8niLStfP2cfV6aSsfnUrzoisrmgc",
  "key12": "49H63uE4JQLfvLugpbcGqMiaxxWYrSmY5ZgYJ8WGmPB41RkZMeB9BAta8zYx85iuKXH2p1u6grmXNVkANf8PNUjF",
  "key13": "5W6r7EVvhNZp7R9ZxRPJFdtB7XFmJmgazRJprQVq9EpgpaARBJNR4hMSX1CaRkizmpKZ62mcYGzZ6VQchfLQurRi",
  "key14": "2DAkVntjW8PoidVrWfvVw9pPgkSU2UwtF3oJbW2xcFqMEsSznzikU4pUvs1CgTXVuy8XuQMaJqgx735Dr7TDi6yY",
  "key15": "5zuvhVtm4astCqJTskfqYxoEiK8aZkCCaa3B2vRSmzTJj2M3HHV5G3SEUZnjDLn1AtfmURZBug8gL1STKrab4ifh",
  "key16": "5GcTwMM9j7nXZf6QwUQUU4iRhSRabVgwT6qF8prCyceTY32wJ5y7v4foRwpBKX67vPs6L3ZepWAaWDAuM6tJu2DX",
  "key17": "3wwtaMWNj6yUNfwCLAVgPDmKNrpUoqvAg5NciqSKCkr3JUynzfn49iuCnrFvWopuX57yazQXKJcTnC2UTDbBVFrN",
  "key18": "Qqgrv41WfFc8wY4jLkTNW2RBf5Ai62DGvJsGCnepbr67EtxAcdA7m3Uot3NvQTv7ZKUnmLA3TPg3M3x8tghdDCp",
  "key19": "64qihny7aeM1cmMffL3XUb8sRsrq8Tg3qGUXAdcCP8unmCd8gV8RfNqXd551QHo5mt9KRpsCZ2WDh82iNd6CSsNq",
  "key20": "5bKfxdnT68LM7hXKhLrPfTpDQrNajxnJjNj3rxYUMHDxfpdhwo6Lmh7x1vi9QLBKQdsXjY1fhAFpKwQcLPyNdinW",
  "key21": "3E6xWgLwBz9xJvFLUw7uGEsiU3jpYCJKXsQh4oFD23TctH6qd2hSuiYbzZ2tQTjEqL6LERQEhPU6r3AQjvPuxEpd",
  "key22": "3UBF4THi5Z9eDK7zpEMKRkSiUDmmXuj2JrnTB7wNuKKtWhpFXJ1jdAPSmYPSSBRtNGyAS5dzVyZaCCXxzp5xeFsL",
  "key23": "5uzWkRj5XapQzPPdzYJbeyH8fSJDgRoavBB1GdhLmJA9g2DhWzmj7iKBpwv3sE4qcY9jayH1mQ7ZsikP1DoHWaHj",
  "key24": "3acw1LMYEd85KJBKbLFAaektn3yR8aSFz8CjUCMbpCFikBaVMGDcvToUj1YHUQxt1BTdiSLeSW71QgbJ7JqALsxv",
  "key25": "5q2hAEbY7jqxfWaxfJyBAgAdKytH3nfJuhcMtgDSSnv2q32xaFWfDA1w2VRcK44M7BEhNpPsF8nwjCL1sA324RdH",
  "key26": "2UpsZ2wnBMrbfBWYFrYNUetEjrQuhRea8hPmkcfRgsydVaioxJvWPiwW69vLqEtmLFhmFnUJRTXbhSk8PupQpCmA",
  "key27": "4upJdXx3DHHEPoGGMaiabYycdGjNuWfFgcSx7oAEvZBAahA9cwGBHYtFmdxdVc9nHY2U5HWGryPPMbRC6qKW581U",
  "key28": "5gyWTg9aZHCaCUtgMB2hRj46RNtrTTKNwtmsFwKn2QXoEvAe769uE65iojtgev6qEzfYbDnCTLt6b3CZSF7wVN9e",
  "key29": "4ofeyo1oMoSAnb9Eke5s1htEj9BE6S5Li7ngozqdZeSLoch5XHgBzfbswCJdWuifLvxmmJbbvrJRCiR2jTxtZaSQ",
  "key30": "umcYQamsodAZ1D35oamCkXxbN3dBYCtdb53GSpdGjh1gcNtLCfAL1bHqn7G64HKU2eAdq9XFHyPU1RaeF5aWF8m",
  "key31": "2WggwDft8BY2krgoiCPixtoNi9WVqZzcwzHMpPVLzhY7XZcTm49L4WAwrYurKuh494HiggzTciKUUHe65fnDDFnY",
  "key32": "4WNTEQjPAZaN4S4PERAqNWxjaS8BS5vsBBPqnGZj1hYK1WFXRuqVYMBB2z5GD19R1sDyNK3iTctKWgUyXFUJVH7k",
  "key33": "3hbeUDpoimCjXirQkuFL15u2yqKpybQ3177QRSpjydEgBUFLWbUhWQdv8ii8rnsNzdj8rpeaRMshpuj6UmoAMno3",
  "key34": "2ESkAuSs9dh2TGPd3kGTLbM8Nep3zf9mTHdMCpYy3PDGjnBfG8yC1Bd6RGvkuratXpLaCWzFHRC2YsYMdXoVktff",
  "key35": "3PGPeHVM8tMangM794zksD79sJJPHSE3dGLJwUviGKCz3pakPShw99LwhENDFTKudz4v4cGVAhefCCBo2g983ayS",
  "key36": "5Azg3v3hHQP6hkrNLkg41ih4wkaFbxHDZpKJF1DpwVaeusQReY7hyCvZLLxFLXoeQtD5KSFyk3rqUTALosgqdwyA",
  "key37": "4VeHc7zLyByxLPU1QsQdqgo539NCp17QqQ3ewhYY9zVudSKSZQBWrrWa2dYhfKtCjv3mFmVEpMBaGAHSACs6g6EF",
  "key38": "nbkRTJ9NuTqwjM2cmb3B1Jtz3akbXFND8M2aL3GBoZ3QQQFcnSXeDXWYBF6xM17qVnHTikmhhniV1cvQKTeiYHG",
  "key39": "2PhH1cUwXdtfQxEHiqTnqaaPbo5krT3U8aXwcsE3LHqVzb6FfAuctwxBJSqhzeNT3gJwN8zQQeM4fyhiSFTX3Sss",
  "key40": "5GRG4bCAcZjvwsaM2b37MPQMP2Mr1PbPEFHkKvaPUhkBGn9j5E99SKpbcYmNRJGaaNDnt2fu9nsGD3nRYBf6u2Ef"
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
