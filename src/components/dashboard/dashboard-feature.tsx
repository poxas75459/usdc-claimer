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
    "4kqHd7qSPu4YdfEb7DwpugfHUmANjjd9f2FyKS5rX5HvXALF7QZ8BiKTfNZ9q6Dt9Px4B6xUSnKzkvvY2uPQJy3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rUz8CWRuiHtQVfRvvKYkQHKbwKEMZi91aFZq7E8QCEW55WZza1FubKXELLZWYFDDj9gzw47rAh82uFRkfBrwc6z",
  "key1": "zAmSfwJsteE8iFzE4UKtmGP2eUE7VN2mLApDKHGEqqoNzxCnDhhbWh7UhfJ5yN17DUodSEy9Nxnvvbxyny6Vo8d",
  "key2": "3d6Cg9Dh9SWLLcDg4ARLZYfNojQwkCgqipup4wTPhEvgX6CXkHnqoX1QhTFNcANDpg83aziv5c9n1a7WhfzqpE36",
  "key3": "4GqWWy4v5cHP52kknVmdutrFrF3kMEQsHbwEmSnbzYENg2h2LwCuF94z4jFPEgPuh3WkfKABfCMCuBcUpeqph5GR",
  "key4": "3cNCRxJ1RgeXybBZE8orobRtFXAYe8omwsvpFXrGJhDvWfFjRqJ1kKrKBvWpEGusPtsobss1MXSLEMhUBEu6e3Qs",
  "key5": "382u8cqRo2rkFZjGePMztLCsqHSmhKNx1Ky3qsiXAPsvc45cdb1eVeoSfmRVpXtQuFyDa9EVfGqxA2W3GVozbsMZ",
  "key6": "KDY9BPiU1CYA4c8BkQq41s7fW5eqT5EPtEJtCgEw89TCtbejpFQvtQJAeiJVBbsEDi9c5sdshgmdtjip3BvMqRW",
  "key7": "4b31aUBXgaivfBJvdK3iYtzwodv1P6x6irP5LaL7K8Pjwzp4cDGssWLqKcWWyAXng8LWSZbup8eBhrGXadUT3wpY",
  "key8": "CFSz25HtvWmxvXR8nz4avhoXGNkcBPaEQoNoo1fGEiWLCpRrYCkZsMD6vYyyvqsGEqkqV65hkGod5Tm1gmP2fzh",
  "key9": "3dfysdL2B89aTENnCCYG47qjZxvwiJxwprypDwADYYQEACDiHrFKANKuvvYjXCu7mu3a8FPHCXuZxx8ZpLio1kcN",
  "key10": "3EN3gQtPq4euVQE2PGF1mP5ySTXiAgUW2XHp9sdajx1CFrndY5ANGMivNGt8rJngEDBdsytqAZtzR4hR88uCyvUp",
  "key11": "3NRQBsDuuPxUxDgih7BUXR6WwpJS2JCNCbXSB141XDkdvjQtH499K143PigBdQF1MVuvTcXs6HUR7jDP6Ps5m7wV",
  "key12": "3J5ctf3A5eVCuw2VnBq2Ctp1Ni9StSewfEH9xApMKppsb7Zsg9cW34gfsqDTwyxhzgWKEUWGTMtJwmWaXt85LWya",
  "key13": "4mobpbmPcbeapk4k1ppzVP6quiN4atCh5YWLVHCWJRAx1D38PSxhh7afcHrtcMfquRx9huCc1b5VdMrhyrZCP1wi",
  "key14": "5afKhjQKzx8XsvDYEkw1fHWjnm9MqWXQyZ61aHrgNwKqAwMg6hCvD47FrGHnM5VSPLn4MhzEm9ZLskRP9hZLRWEu",
  "key15": "38c2EW3thC2p3hRctQgMedx17vXCYmSkrnXeaQfj25Z22iK4BHgDqPfgVWAtHHNsLKowyFXbbWQvy8jBnxZuRqz3",
  "key16": "262HK26Hr29Ct8rsU5Pxbfg8te33mspJZVzVFgKPMjZPW2QL6pfc1ADrCkvNR3GSawNvYczXVamAdXVicHX5uXAB",
  "key17": "5mgnx3Kw6qeStohNuGc75C2ohoUmbdwPu4kf9AvTuRjsW2AAvRqS9D9HJzf7sa4EACAFiA5YTSBLczsifcyUbYst",
  "key18": "eSB5xd9L7jRyHXwKKzgoGzSrvbEkNiEgzy7c8cz75SW3EjLXpnuGkDGub5Vysxk7CabBDmAhWdPFAL46wCkAXQB",
  "key19": "5csTQTrc46xt9A4aX5eaiyzJFK4usvgxmTdCfhPh1qZottAr2r4P39WPXrAd6asfqWhgputJnxx2iuwytF7Na7zi",
  "key20": "2iXte5KKU514h6HcczWQiFHnEG5PBwL7acbrgoHePztJzGYMksixYELHsatrCv5qnQY1nX6rioBi2jHZHo5Teru",
  "key21": "5NUgdBz13PeTZWRJC9AqQ2hMK26TKdT3iMS4m2JCbqnCPCUFjFdUb7e6JoBh861eTvTHsEMgzxCaGoyK1E1D2nAe",
  "key22": "3zFsha58sUdFtVuLyb8EahfrY7WKwZBSQaNzifDrLMe1doGgBwwYctcWaLZngHG4td35uo1Rd6CqHUnWRtvdoK26",
  "key23": "5iezoZXVKtjTvierBARG8sGd9956sFEeXwjtUWSVTCEoqMrZdPegAc83S8CzbJwis8E8K1Nf8bSerLmXZw955ArE",
  "key24": "4Hm7Nis67n6AFwVmK7xzDiJiduU35zfoUmNcsjP5GNEDN6YJCMeYR5V7Vh7hJMjje1aBCcKfz7dFHXgPxL8R2FKq",
  "key25": "STMwiQTk5k6TuqoFG37UjvCeEQ9LLz6etH9TvbpzAjU55Q1kvjr8bjdVV63myQV1UU57wijK3r9vtN6AdMtb4Fi",
  "key26": "5XmUKP9LL1mP5SmSv2NvYPnt7Mwi9ev47eZN5M3BEo4ZKnSQzyVpJtwtfZ7e4nDeqMHDTv2HzhQmqBj8QEBuzG6R",
  "key27": "3VH2YsAFYDHNpLPJjwaXk3jLNhgtLrwvUgVheGf5WE8Tv1ixqvGcyZyHLzbBc7GtvPeqtibuQGsGozBngm2Btcqv",
  "key28": "3R86JgiimTrBkT2KW1NssTKidUbM9iuv8Lhcu9ErafVxLfKEx1YybAFXiRuCHp8ymbWuHaWVULAaenpcahhbQjf3",
  "key29": "4yxWDhApJBiJP5JhmeP3845Ae6dhMi8Tc2frG6MgbFcJcL9tWtGZzfXa66mHZN9E3rgzMM6DHMdDcsmRvURUDBi9",
  "key30": "joENnHiP8xNfqGMejBQaTwG9rBoKJKKmWioN1VSEAAw8T2VfDBUXpNjR2cVX1HDyuQr8dZgKvS5G9zZQ1xGhBw2",
  "key31": "4ny6mpgYPNHfGLLZ3wZdGhTEr4cCSU7Kfzeq2Af3dRGfxsuwDWZK6ysBZBJm353mVTvRs2sCA4BK2EzLiFLtD1eA",
  "key32": "3f4mbw8VvsDgXWubqhQMzxq5rkkr9cjCsuCvvtwc9JvH5cYr4xgMZvDvBcvUFKk1A9suEji21WYoUcMDCMgxRDeQ",
  "key33": "4t447eHeaXq6cKSytNLBt2dxdeCd8RzrNhKj4ZDpZLHqUVVofBHE3jpekTQomvP4yXiJfYkTGUjGbzfgjrebksec",
  "key34": "5Q7VD2wAiNFpddLn9uaQjZqYVGdV25FLev6yLVHchetWA3fN1q4i5eUDt3N43gGKV5ApT3NZtErBodB8AG5ZaaLR",
  "key35": "5nfTG5dEoyHVAJH1A3M5dk8kDcf5FKpwt5UVcSmmov5EMsdY13FQTznwn7F1k59Ro36r1eaFsy2eKtBm4BY3s3Cu",
  "key36": "5azraTYiWSo4y4ViGTrY1qhnzyt9o8vhAg6qMW1VJ9d8uTs6uxz7SavG5jSBWRvHGmxCx7VNXB8ufaHkiiAqPca1",
  "key37": "2PqsnAaECsjqgad8artdc8H8bHZgksAJ47eBYGKbFwresLqJw8fFX4UxVDBKHtDapwFMPYgsiGLbvpFV4YTxHRR8",
  "key38": "f89KZW6puSPMQ6JmypscFBoAcHsiDqxsFqc9PG4r4jh4GxtXUk7qSRchtQdnridtJpaKkDAzRdhyUd1upsbBHZA",
  "key39": "257qJzjjHRqWJwonWCbHbbHYiMGaFsykznAEfxAxbhejDUUYk5sxHkctk7WtkAF1zbWN2BZ9gJaXwfJbWv7vWpAq",
  "key40": "tNXUYec8wETQoeRyGQAqsZ8B2PrDykSAXrcCxHUEFeDwvVkyHsKenNyHYpkCMoRuS5vgFh73tw6ayPc3F9dopBA",
  "key41": "4nJzrx9EjvKnQWtiDPpmSZd6xvcRViw4ZoXNk2x97j1cixC3kKGwaLtxN6dGuLhC8Hfqtpvxi2Md5SctnCUk5TDM",
  "key42": "4fFB7DqCUvvhx6bAEnZ4fWkNyxa1WvS3mPT58ULZo9f4nNK7Ar8LpGch6gVh3c6Wu8SpgADtLu23AjPHRGXVxfe"
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
