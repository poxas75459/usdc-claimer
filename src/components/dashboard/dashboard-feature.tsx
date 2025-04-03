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
    "57dk39ncjYeQsfDtsSGVshvPHuofjzvciigemReo8r8q4KHNxv8ZdmHbMqXGr81NHRNFMsGjDr42wUx3iPTqQahP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SZ3emCX6cv6Hce18KHuzffCmG8KL7XUra31BWG6UNk1XQyPXjDfgm8HWvUuRabAiC8JctF77C6ZX3xRDa6CTDpv",
  "key1": "5hcNuag2JrHhmpDSEn2ZZWFcj7XpNfSUC2amsEMmrdi2muAKHjKMxkoQAMGhurmQk4tjrSLvsUd8MEpvZYH7PtE",
  "key2": "3kyCAz7c62JkfVHbDkmitgQt3LcaD5hKZgWXxgLUvLff73x62DPEtSofgggwb9FVAKtCJyrfqQXBZZHckoQhuXpP",
  "key3": "3uuEgyBdQj3ao216cT2rjbwMz8pVdfLnxx1cCW5K5RRwxwU9wtsn2EUrpjNN5Xg9KyVwuRYTD1Z6VuG7H4WUqPfU",
  "key4": "kUzkBsPYxuZyCGBRM699oKEkvXAYGAmz7qnXSZsU2LSgRVSLpHW9K1m7cZXWaduugdu93pmGje8dof9uyUYHB5a",
  "key5": "2acgJDDgFEcgq5EgHJ3wsXckDbNGSZ46ePxtQ9mM5fzpmZcjBdG9WGm5mhWmC4KiR45D12EoemWgkRSKAJFoSPvT",
  "key6": "4ca4GBYGAYFDoZFmzyCUN6mmKiPHTkJFVkKt7khwrmfyeqoomwNEkb2nQzAHwmQ1Wv5mTNR2mdecehoy9iRaVGJd",
  "key7": "4QSEGJRsu3kA8an6swCJsS8HymbLKZk5CQXoJGXoxwKomwSHJn8NBSbi7cZuxbWiWpqJwsTKDC9bY4U799tkrwmq",
  "key8": "283F7pciAqwtpSqv651rD17sNVZyzC3KSxJwEibZ92VpMSQniXxA9UPNsfFnkdCSgPFC8FWqgrSxuFpbLXxg93kh",
  "key9": "2Sc2M1n1mfaD9hZSDpzkpKcSLxD1xNX4JsCd2pZziDxi8o8R3QsfZ8t4PmHuVS4RK7L1xVFaD4fra3FtxgESxT1o",
  "key10": "vVCxQY6d8wcFybYFSTPmxUp1DYwzZUhAM3qdU9NZWeEHYVy3oJkMUze7nerQiDsYyWCzCWPe5s6tjRTQFXhnxY3",
  "key11": "3YCbgS7P1hCof86Uwu8Bgpnubo5G3mC2SK8GRSBGhtfUyd1LjDKovNsZHBjWJeEyLxtz4Mp8ySsDaohN45fg4QKz",
  "key12": "5wUfdiqM8opmMfb56kD8jJE2nn2u4RB2mgGuJ8aGs1xYVF2qiiuigskQE5j9pRux1AdWQGsxpMFKj6FpN8ZZ8hHX",
  "key13": "5y2JyAo4Zc4HbTTX6BhGBQChSTdKxRfoE6LK5FjzpyqgCuHEqCzkZA4SAJztTeDb6CFhQoTHBwsZp1Dws3RRNUKa",
  "key14": "3tKP79BRsNp5zQ1ojMbAMJMDDf9FfspWRq6p6jRSam99gj2VGBB4DTtXdNq3q2Egg2ukZaENLdTAEwgxDNuLctY7",
  "key15": "392A8fht2YzfhTgtQJ25eDRS36vKeZMR8obvzovebBuPMUsHi2f41G5fo8JrxmC5q5ucV95nA93c8LynjWwXmp6S",
  "key16": "3ERgwFssnzgp6tTHNAKqq6XnTeEWBe86QroGcjdjjVUeMhiDCRZQAawfpSK9wC786uVN8u6Aopp5h82uckBCZgzd",
  "key17": "5fBzoTJwkKF8ZcsUr2nnMdSmm56ag75KVR6y5PUEANzsToG389f7ppW2P1PbKktCwJ2oyQuR7axfeuqWcE7ZFdu3",
  "key18": "3tGfsu4hNhREyD1B1XJYijAqUjq1QyK6Psx9fhDVjhBNySjydjfeXkManuzJgnQRdxRVxDqXnmEzmsDd1ZqJA4U3",
  "key19": "48hWELrvgE8tWoaHYSgAqJbSyam36Z8xUgw1KHx2YJbK7DGhpYka5x4tMRshNJUZd8vkNCW6evkT55pGrhoFFJEQ",
  "key20": "2HE1Yvg8twPHNM8tTjg4hVcvCkMuVMqdGpTuJUFBW17EXihq6Se1TujRMZPpQscPvssEVstW1EQXkFTp7zQJvVRv",
  "key21": "4Wdj6a5ZuFhRBxfgVzwTjVRr8BB6MShHJQaHxKz8e2ttUe7FivMhU2v9FwiAYxbDyj8sEvddtxu3dtz266GzCF9y",
  "key22": "2wSB1GJxGtMMAviT5W6gxdhEPNDJnekpuvxUzcghLpsbBy61PSztY4hV8PPR4GBV5FhaVUtT7RdbXoerPxzVXmZm",
  "key23": "4T6YHGkHWeTbxCrhB63kDHEUEih5BDLwBz9EPrZEE4btwMVYxCF5DYYJ8Ym4Y1txFuwJpRtESuExxNCptUHg77Mz",
  "key24": "51e3ajp6DiB87Dcmi9f9zxC4Suzdo97yHZJRywX5hk7SqQ2MkMXDUABcwSGxggmo5tgPnQosg2VSTbvhJDUJj1tF",
  "key25": "2YAaRYvkReuBBJYjbkmz9CicMk6BejyBHZH6zv39Wd13Q9dhLSypSb7VVem1U2c7k8PUEGDXQvdBjNAE4xgbgTUh",
  "key26": "4yQwfmgc3H1tfAQ8dGUCwk233fTU41AFuaKfiNgaKgJqdDyt2haLQMxufEiMTGRBkoNLSgHkPaPxX2kSMkdfiXSE",
  "key27": "2xYR2efEoKgc6MLEdsycdqt6kAtWtc1qZz2F53QJBxij4aCFAnmEij3eDSr5RBVvoS2w1Ln3UTcMXRzGXFjCworF",
  "key28": "2pT2kPFQ7TwrAwHfM6ocR7YBQCjShR87XomQqJMuV5VuhymEmGEBkycotT7hPCeWdxWJykaSUPoTU9UQ9FPL8pS4",
  "key29": "31M5answqu2c57LBi9Qpu7e7cmM8fDnnzrqTdfdaQBF31jnCnXxVQx7aa344nXr6Z4drG5UDwpMoqohAYUM23Wze",
  "key30": "33fuN82T4HmgAVq5J8mqPGjvjJRCUddHif11PxReGpituNGkzBDzqe7joNYPi8ZyntkP3SB3pH1ptghFstw4rU2r",
  "key31": "4WjpYJk5FXEoztZ2VmJfUFaPhWM9DenPpEauHYs2iq2XPzNhqfYxcMj5RBNwA1F147YmUgqkDGTHn8SbXBe9zR6R",
  "key32": "25kdaycyreeFfC2acBhwbDhDUNznz8arbsAAkfzmJFRHW9Gcq9gkQc2pzzBqY6uW1Xr8iGbr6XjHxNvDBmziWxxo",
  "key33": "7tpMjSFE2ngVimyaUyrdi3RoNEkyWkvwP73XKwhkUfLpXMjid9NoZwtkwF2QB184zajMe9ehAhQnmYiYojTHs9G",
  "key34": "2JDbhgs9tLmbzdzKrhBPGZ56etWQnUXJXYnZK4tpMMrukp8cwtvfxLJu8obEMkoNKcGGGhCaw5pXyCVLNJoUC9mv",
  "key35": "5aj1ZmWhwFgqeU3X48fP3MHH7SNHVDcwxNRLUeHSvCz2WBFY1w9fXcsUhf2ADiixRDHz2EXrfRTkonLPMJ9iDtNW",
  "key36": "zNW4K2tzLmqJZdTQcmPFd5Z77u6hS64EPvF1DX79B9F51BhJRfFG66XJU59r8zJY4racXJ9hFRR4AYfuP3cJ3Xu",
  "key37": "5eKiy6Qk6DL4WPrXMqaLTsNVMF8JTjW2BrM9SMebghFJVXHiLfvykyZ3YgTzpdHzzhbXxvNLVKJsVgwZi499tQce",
  "key38": "7XCWMQ8fPB5kkbdW5EQhYvuqgyEAkHCGvhfU36axKAvnpo3Xwdvb2sHS6zcPPCAA626t4EWYmjGHJjTJ4Mrqi8H",
  "key39": "5Qfxi8Dj3kXCP8PSistMCD6eGitNCP834MziXjkE4XichbZ9q4pgYgxpb2QxRxCCPVW9scWwGGcApJuPD6bqwiMA"
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
