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
    "2f4mcNYMkq8s55hfyZgWBtr8e294VV9JTzVkXdPgL6PgjwAKutvKV5CjR6THwr3D5TUi6Yb6QKuevewrNfNBmfrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D4Xjcnyc6VNXYuTbcvser7RYS4LWg1DzTLaSinDsc4oeg5RdnmXX67gWKWhCC7zEo5tm8aQfJR1r1VBF7Pw7Xex",
  "key1": "59w6C6n5fSR8nKCQfLcthMGCbgH1cSjLE35Pe7WJ1BvVkwNTU7QSdAgWVkba6uQHfDBvuLDVmSEr3D7H5uFiBcvJ",
  "key2": "2Hpjt8XCwCN5daD1moD3hXbuhqJiZwRs84K5dgWnZpZu4bTyTKhPpUdc8VACS37R3p8K2NtRJRTx9uhssF5J61vK",
  "key3": "3XLUuSekBkPaxKxFqDVydAZJ7AVGNbGEf7DJo7FMPqCvMd2s1efZa6chTEcVqi1iNReVcrdCKGGduWpw7nUiEakJ",
  "key4": "2pC4uo4KcvbmT7ytSa9DD9zKH2g9Ec41gxAEaieiPPJuo7CxatesZS2C3bhRUfxrf2C2iTqwSavCShcTALLAXFhW",
  "key5": "33pSts4HGT6E97uEi2xz3Av5ttykqwDpS9xo1DnUxntGbaeGDjs6v4EiqTA8KcBGG5yK7mJ299nT4JSb41rqu73",
  "key6": "3gTUk9cuLd9DtF2XYe3h9eJZ1urjwysKy2AkNBeKgunmCDzDn1SfgctLhARdTRgRgdo9418rzyu8NrBEBRmMuGFH",
  "key7": "27xtjXqQBpqS9Bqyhx41RPo6fQousFCe8fPGkWQ56wVseCQ3wMVUNdwbXpe3yRiDLJzuApTwRGp9kkJTJixL7vnh",
  "key8": "62PBLLqtCAx6ziNbPN5e5bWwZWKMXe4jCU9iEBRhgznmmXxbYRCrmQ6a1wLPtMKG6r2LzimfuoDkJSput84VVBD7",
  "key9": "5MgCVGj73mK8oG2mGRNv6Jy1uNTXGsYs6faNZCAxH9oiTxmEYHuco4zYw3hc7iFXrfvf8Zu4qXtLjEhEWYkGyxHz",
  "key10": "4sJWewfw9rVKqguyVYt4utiNk6WoECWcTJbwAwgAYTvhzDcKcHC3y56mxAw3wMacVNMsN7y43tW7QwrJHU5uYTy7",
  "key11": "qeN8UFMNefTSfYbJ4KVRr6AKPggg4zSut69xpV4oC8GSBLn8z18cdmqH1gMSyJuGNrNYqycwnMpvf8GmdZYUZxQ",
  "key12": "jRyEvNsWH8Z8VHUWLYMddnV3KhzbXHU3X16oxrQCe3FvzeFYbhREuwxo4Gcvhek45G3uRMGVDt5tdqzjeYdw8w6",
  "key13": "4rabQWJ1Kx4g9sdsKRoBLse4Lpd2Jnkw2D4RM9xcb5vgxhGXSxCDj1g1tHMQcxjQkibM4sUMtTMTkxMwRaek5iXv",
  "key14": "1pktzsVuPEhwTfDWFjo2pTH5b9GkgT5fLTU2Fbif3Fpmq1Bp31uLnUorjWbaiLcp88aUbu8hJGaJCYATYmcq1jA",
  "key15": "3hhaj4Fs8jQC9LaqRXiYqgact4r9T8czQG5mfiiRssdWUhn6rCZxidXstWXzYfs4bx9KLPNiEePCZxnB2k1g2Yqw",
  "key16": "3AGzyStDiNn9eYDMYwzUzvdMWQ3f7FSTfdJesfaJ2uQRD2nEAZc51ZDuYmWqRy3XFr3BHweR5XQF2M2B2ABt3zfR",
  "key17": "yKK4wVGbau33hh2cU59GsXiYaNtrhL8AvR59PoRqwSzrdhBdcY3zHXC9XeGsLJZ84NykBtTXYExHitRm2cFard6",
  "key18": "45aQFWwmRxXQzZxyCwWUcpd7Vz6xeQt3Y1FvvWpBNCui9zCwGCkK49qScpgBSFJ8CN21qHdE2oGcrUEbAYECxNKQ",
  "key19": "2Nyg8cw7XQiULu5wwhenESvbF7bJpYYmzKhHo6eB1tHku7nzs1hX3n7iLt4z4Khx5mGFmAUG3j9aSrgAXMZD27KJ",
  "key20": "4xyLZbvPPjLwpqN2x7SF9Qh4pYYLjbqv8uJz3PGWpgn4kZCgSVpkdQLB58rtQci2mQxh84csyrbtrnhjjRxXWyeE",
  "key21": "3vA1tCHTTm5Cp2xR9khJyR7fq4YwMNr9vj1VAKFUvsdXzBvZ8X6drXAY61eeuoK3GYqu7onKV4a6aE1DjgAfx48e",
  "key22": "nGP2kNPFrxfdLZKnbBrRR6MgZERyHKMXeF9eK8RDBzhcdr48P1zqcF1UMGD23xy7jN9E16FUN25wSdkvggPu6xi",
  "key23": "4Un6w3LJqw3TKPynufeCAWB37tBKjGb1EBKVpsfr9uqDMu9AAuUc3A2N97sHxWwAQARJ2d6VjQHHQrUEnSspuziV",
  "key24": "3M2MHn8RKxTtt4QorobwnyLyQ4FmaBuRfnzcL3ZL1WaJBp7Gt4VuqBD4MjTBsniUXCJ4JNuh6bx8dD6FpfUGvp8W",
  "key25": "5giigPyXL4TgZ4aBqEccnVAb5HD2vsFFXyknhTwfVynD8ms6CVoGEwGWKC34iCHS8GNCnZWBv6xL8DEAhRz7MesR",
  "key26": "tc7cfjzPPMXL9U4opLjkuDL7qQmauruR2A1q3Nn8xubg5949MKnGpoUmR38FTUopETnebfvP7yJr18LuCsWVjLp",
  "key27": "4adgLwxbETxGLr3B3oVHmN6N79MDZ9Jr6V8rDUiucX2Z938qqK93S9deU9DnHoGhxeBk94ufwDyY2kcvPeiSRA5f",
  "key28": "5daJ4xTWrZuc5Ez1agAkJ6MUaoWYRy5AR5NqaFMF6cEDSfHHoYFdxdCjTSqqM8iapgy5tTVWhWUQTUR3RAAh9oxM",
  "key29": "ezX2qzWKk6uNnQWuyvQz2sRdAAyCxrUmLmwQNm7C7AbeabeaqcaohdQph7oJsF6q8QCv2FTDqy8kfsou7WgoouC",
  "key30": "3zYsaQSH2dNQqMJyF7xH41GGkGhxh2SZjT6jCDWRwzuWw7erWfTg7zc8qrPiZge72SijXoz5rYxfPq7Z4MoGR4E",
  "key31": "4dw7eHBn3S3ZcGjppuWkagdEbPTymGLdJ6SK91MTbwbPZ9p8YEzYmb5onEb4PbdsGqig5JWXuzMiunAygfeiyvWU",
  "key32": "4JKMZCzSCzuBd1Z4RuqgbmZxPoitvyCfL6XhhJovBtHY1F8pnmWaNwMYWry4mpb38XsnJjNxbFcUqa1RsndXiF5X",
  "key33": "482T1MxeaqaYPWHFBPsga4ic4nuv6Xw3vgHb3YT3wukYFcp9Gr66NX236u6EyWVgRMi5eszhqgPWh9pfX1hvcJZx",
  "key34": "nwA6UMWH9YJSZV9fzMmpFGXirmZRUZy36BGGd4nQcp63PB8ZpYDqBJG9yzRiv1RJuCVHUu3JgoeodHBdbTiKkLK",
  "key35": "59WFERPcFGzKwdcR1DqXj1U24HrGygcZeV1SeSeAuvyHmpVYBufzmfJT7uCGXM3CoxVJJZc9aSWskxvkK2xM2Er9",
  "key36": "2Kp4WQ12ugNvK3rTDberroyRvZDRSJ1pQ2sthNwPE5iqMzGLy3rCA8QBjMRLJGsyfJiMWf6bTG9skFk18bm5tqwW",
  "key37": "67H4PhkbhVH94f6Nj2YvTA8iVn274fnM5bH2wURTiiq9RgbemxwM3fBsa4mRVitsMDKrNiVVm44LFUouYGB7wuAC",
  "key38": "8eWfVLkstNHiA8zAU7kJvWDtjtjWV9YF1du8TgpsKD6PX4sEXfv2gATD7hpJzCtiXU46TCJDsJ7Gmb7eM9Qhy5Y",
  "key39": "3bodczUPoF1KFNcgMKkrEXVM19wCCLVFmsSZ5uRrSR4zJyN4DBJZEFPuf9iazpgg9Hf6dg11ex5FrdzCFSDt7cKi",
  "key40": "4WYHNJ7pDokSyY1m7bAWv2wz2Vh2HqvshwEnW9JLy91gXUADH5j8AQWehSDzxiu6kQqgARqQh2tM7VfWzDq7wZaZ",
  "key41": "2J5aeK7UzrPciexM7XxBqZsSYuwFWrSzWqTve5xUjXn3yB2L9GyNTgugHg5Rb3ddSKDEcZzF5M512zUTqkpZY6UK",
  "key42": "28oLPADEo2RqP4Va1HzS7a99wxvmkyG9GQUYfmbCC1xLoeeVHUbKkZPfYWD3ZNfvzfdDVp2wVWkMczwm9wuNHmj3",
  "key43": "31BTCaiC25C6sq1cJpb8dd9vYYPzw7CKrZ25Z6m7TEBUarw6bfQVSmtseHcL2gp4vhMhcA1oyyee2ygRkGzHQ4pJ",
  "key44": "2k5LTvV2YPjGxBBuzcvRFKiCfC7hCsHaZRiSUtkk2d5KPg1DQjv8JGfRcbF2cotJFnhj17cBoNFPZqhUTSHSQP69",
  "key45": "4SGDGeesMaktk11hcxvnpBopLi47dgPZwpd24g3CuSpMM5ZN8bQL37NpT1Kw45GUNqkQtx2H3iQeDeDTR28nMaUA",
  "key46": "5jkrUoX4TSCe2HH2X83uRnUkGnCV6axyuxhnpEbc4vbgyFnvk6Hs65co1ZrMsNhYntXKpDRvFLFts6hYfCs5rEyC",
  "key47": "5YfhMZqykDdJ7amuhvXE88cnjPtqoqSQFvm1ptd3HDjhzFKtgnZhfpkup5RLgTNpQBdXgxE5CxA659r38nsymNaL",
  "key48": "i4LaarkhBPWqb9HTXkAixJB1JnuCAQx9M6k8pPpabBXGAgqreMLCao9iNY1T5go236jmp18HseUUt9M9WPgUG1t"
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
