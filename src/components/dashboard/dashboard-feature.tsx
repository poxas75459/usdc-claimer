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
    "27dZoQsKtoEKt95BuYoP2ZnhwbJCR5qwJUWhGVEwL1pfXggUC8iZErzmEQ16jGn8qbEcN82i8dEgm49ASNLRQe6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CfeeV2VZfghE5Z3wwdcTwg31DnDALmg6hE8PTfJUjqNn86gs2eq8kSGE3D7adqBj9wki3d3UdqxvZTQuALDFRoF",
  "key1": "3GpXCbuBF2yacC2k9D6vNNsEewxTG2g8wjx6Cnz79bkBxKZ66ExxmVEnFUrkhSAFgpwupKmZVKGiC3Hw8uKoeCAj",
  "key2": "3owMx5792VFXNaHoLKmuHT6PmvhRnMzFNqPessuDPrKTcbrqYZoGu47PkmLt8Nm7kt1cfLXkRtTTV1z2MK5pF9XZ",
  "key3": "4ex2AWpbi2gSvgpUjjDLTenQZLGwu9ZFfm5N9Q2B9gcpUEsz9qRbg74ivrnwW38stKUeRPbMpSAHujnLPpYLPhop",
  "key4": "2ustG5ovaxKxrg94ULnDK42aSjyeDuCvLqWoXaZcK1Z8LtPVs9bWVBhBjMEeS5CtnomybaJnh7yHsDbEtKSQmx9g",
  "key5": "4Sqq2Fh9TqLyh7wf1DcA4sysQ9MRzVA4DWCqj7WSDr2yeYyvZHufEQ5fNVggNTyVa1AJyTQG5MXF6z36jPHeD1d3",
  "key6": "2Rad2seiK9Nqmx34tLtHa6sFA5ukZBhptvaVAPKo9nrGD2ywK5hQwwYPDX3R4qPAutbWj49KEuKN2G3vkeEQ9byu",
  "key7": "3TT6jeJ1YwjyPk6VNba1sqzLWhzxFc34jeS37expv3SQ2ckr8pk1bvwCMhFEUzuH1RTMcVcy9vvHGCgyUReabKF3",
  "key8": "kJNDtMYKHCy46wZh2Arfw2eWNWgvvCBxebji3nYcU4xg2QpdDmZZZAr3NdHcZustVrAagvc4Dsyc4QFVwapcTrz",
  "key9": "5dCpj73WbFyJ6oeGsrXjFUsKFw9FgQrtYiTZDw4YHrwWUyTKBmGr41krfBn2gFg8ybsBkNdBTpQW9zWJYrDzBtjW",
  "key10": "28Zwiycyc5re3YNo2sVogEtwwfiNQpmQPUjfKhY8HfPucwhWcmkFKCP1yjJoZhwM6mXKK9bR9PsZwYXLWZ5JCyfq",
  "key11": "2PvzMkD8hfEu2BcDT8RDZR2KUiG3XEgRmaYzNza9KrymrHNGbZ3htNLmH4pTnPHccFKA86eZ2agVCim5puxbzy5B",
  "key12": "63YvtogcSf82aztRXQGQfaodnwxJ4bRHg2c2mto2GEqYEBPzSfyJ4DaUF32nJBugt4RXono9QynYvguhy9y7ssub",
  "key13": "4LZWVLpDSVbqXJumVLXqtbCg17EhPrytQiGXPQXpvUBt1CGfYQoepSciYQC45FU3hhQ9KLhwfTqZRR9iuKptpxEE",
  "key14": "sKN4GY4MBT7yQD2DspbWg5TSxnmY6cXpPqzfPw5KcKvZ6uRRZXoNLzngpZVmwgMNQzV6pbNBjgSxNracYzUHDcn",
  "key15": "4y49TV9fweioGqeq4cXQqGkfxf9QSrBkrh2Eo8uwjGW7j4z57LdVkudYNb139BpatM3j9va9X1BPvC8EoWoVBcX",
  "key16": "5ahZdDam6EM7U7j7LD3WQ3tV5hAUN1ACo5V43PKLibRwJL1Adbu2JPQBSFPEqKE3eQaP1ebMzf6D9jvcy6rxy1JN",
  "key17": "Y7sdiDa881Vy6Wdsp8hW5YgUXRKHAMcGSpNLcWSCk3RaAgnNhwXCB8UNdxcBrkMctYNL8yZkqwhWt6AKRzT2foR",
  "key18": "2K2RUTD336opzym7WS45BCZzWRtyiu8cVn9gsZ7ARaW7UFmw1Jm1AjkmMuPmdyDLff5wLcv4putVLWjGBGgpT3ut",
  "key19": "34LsjYx7rCPxWAp9U9Qmt8fR49BM5wezhRyMB47qCtjfpgphrouBPXdazyLGUbAkFWyQftcjp4fGSjQySqNPJ9yG",
  "key20": "3KQYpqdiJSAzxh3X6DTNUAqaRRma8cNgMCxuqMSXsGHCw3BkGgmVt2LhDhrgd3a5Usp7FmRfnNRRLyXN2bU1jbLg",
  "key21": "4Dw2Hqg6myNMHrJ2hz6LutU2AskqngWGYPx1snHYsL36snEL4qEFkC7J7JFdYWkDj9aEHQiwLXZEjbtYo9QbYm8h",
  "key22": "BDMZtxyA5atAFj8kJJ6RDjiDYHWUUtSJBF6LahMa1jMciMLvhZshdx4NA7spqHT1cZi67tp33toP6CqgAq3iGn9",
  "key23": "3NgCq6XtkPDzVn8WnNeLQmgBgDrAS7WgdqnL9W8SDYJU4G6L2tT67tVZgRhdoZTDwSP2kDEVyqKgSmAur6fu7E4u",
  "key24": "3yrB73zBPZiF1XfADwgtM9YM1SEs1gNGeWatmkZznKSkDyWa9F732pYXQqR9DR6Ra2Rujx9na4BfCiK2HLCVFGeg",
  "key25": "m3iy61JjcCacVxbpo46jiTFo9XQHidse3oG9JyDVpNpVDeqe6FPCjoCnvM1ypRJc4gpur2KAboHGSZeHFB4mVBz",
  "key26": "3haEc5DidBVtANHJA6qSgEvKTGmkgreKM4Xp794tPYGtMz5r1VTShfQUHZyPyioSC5nqLThTYwBZtezyEuLbXuyj",
  "key27": "Jgn6bfXBFcnZhSrSnoQVMPaCdw5cqKaVfDuA88owc1dSyNTFyQb6aahVqqjCA4D5thajh8kutsCdLrvYEf5aWcN",
  "key28": "4p1SBiz4Q74DPtx4FLgJKMDgsxh4SQw5P9ojpzZMeN5u6Py6HFsmT2KdPGLqdnDi1b8h6y7nVjH9aG5Wb1JgM9f1",
  "key29": "3qW7iYx3xB77gXNHM1dpz7Rpk7eFV7YRHXK7zAr5jeHYHKJi6Rw2npox271KPwscGm9EBtadr7YoL6mtBV12ALfE",
  "key30": "2zSfjdN6arNjSFKC2Csvh6SNUaC9RN1HWVCAVtikjFhhUQWcF59BPa89tfV1WtavYKSFM6JnDfi1rrRiN8iBqWhv",
  "key31": "66WeLJczpGxt3yAjVqZwxkEvRuCzsX3M6ZhuXCzBKvByuD9mc3EjrAEDana7i6S8B9eQ4BkNANkRKMWf3Lv1cLmC",
  "key32": "4sY3nfGTFoWT1bn9BeeNvVQJ5zQoxNAEuin5UYjizRenttwdX425whBabFskYMBnqUQYEu2CxNJyDiq4yn9gvoEs",
  "key33": "NugLAu5ApWWf5WdeK1E36GgRjc2U92tjvRSfaJZ1QEXeUCDDxYsrUJ8bY8jUPnaUAoPE6r7o9KfjGyjexMm22QC",
  "key34": "3oxgX5TWok4BeFTPU24rDEL7DuQZCYSaTX6nR3yQJBCRevi1kRy2CioyJuyXpVjTXK6Ka8fityYKNYWa2VhDEZiM",
  "key35": "5gvr7pQjhggwY4QSByXxqnzyWUZnChP7x7VBMnM2xypzW7vvezfJHKXF7AyhUbjW5iBX7WCYdcZGrbyMWWpLKFU5",
  "key36": "4smr1UvWkCB82azoReCfhvy7iAd2cdbRHAow4ckn36abLwYeUCM4hpALrpQ82zgdpBmpZHf3pGg6JsPxVST5ZqNz",
  "key37": "3p6CzCnU1M7k1eDGXv6t8NqAoPanneDadg4Cf57kj5wGEUB9y8CMM4V3LZRZwB2YZR1HHdEnBy1aht5hZANJNGYw",
  "key38": "5P9jR9XdfG1KE8PQYTA5cTr3NUawGkP5Sp3gCdnB6GGMr1AhzvPieEHKTfm2fz3ekhFxNuUacbBB4tRbBaWujCbf",
  "key39": "4Yzdi7WFTqLupEAmXSw1xHvhFV6QmZt1QhFGYFiJuz3Chws1Jx5669s6vzfz9DDFz31w93ux1irGtKQLeSKtjkX1",
  "key40": "1pQgFqxiobcWv6BKrCbEjFxBCQdv8pf3D8U3DGf4AoJreRnMsyD9izapUCUGhYezgvv2NzUgcVJW78nJSh44ig9",
  "key41": "3Pf6RmYT6Sf1PqEMTHxsbDj6xLxuiNGJeqLzLhzth8Sc7vLuyG6hrTEEnjzH7dsgWsjdX57bANkV4PTpo3v9RCPv"
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
