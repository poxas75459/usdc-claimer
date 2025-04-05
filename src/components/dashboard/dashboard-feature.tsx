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
    "2cvefQXeF5FbBFQfMKzvHz7dPFHGwx6kqziUyuMREzeUUbm8b75fJcUsoeM9gqYrSpbzgH7mSV4jGNb5BLtk6q2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q2yXEh4Pv7jx7xq6TYC6iCsnn8J5igNbX6JrKkVJ4B9hvFF3ExYhhwaxj3bEpd7N3Uuv81rr9Rpck5j3RfAUV53",
  "key1": "5SuUpkaTxeyVmhzbKDPGFWHamvV3v2qaH5c32SHDsdHQccr6ehfT1prgCLWHytomKon3WfGcjzoaPjRWT9gCe1Xe",
  "key2": "3jfn2Y3Xx8HHyikvWmhSkphExSbncBqNAypufn8zD17eBe5w81VXVuiCxcHYfpPgu761VqXQDkE4cswujY4915By",
  "key3": "5K3cYfmCyuapNtcDeyUpWQbsTx8igaNeq4X61Z9tpJVGGAv2RdEqrreWzkJ2hYqHkqQUCcctWVdzMeGWN6uFcRCC",
  "key4": "5hWLg4Y9k8J5jKijsHUEswJ2YATbCCNWkaK3nxiW1Necs33ayVDhoDh3myPM8u1eZC9G29E2EGqcmjeHzgsJb6cE",
  "key5": "4Yt84QZ2msxc4KBdL4s1ZiXSuB5aBV9ESj6RPCDWn349fc8efhuXvyQc5LNuJ5frE651GBtQJ6WJPzNBpHheAEoN",
  "key6": "2egShWvKrb7tVPeSXGWFRNx1YhQ93Kv85u4Xjd9FDVWTYkFen4YWTwgvVv8z5FYiJ6L2yYFadPakaMWNdkjQGf3N",
  "key7": "5Bp89Xsm6tFf4Ei5M2qVN7BvFkGVVmKeRbVPH48djUvNWEbsvNKed7AYQoa97ocwZY4aCUcMbHiynrSq5U4v6TpK",
  "key8": "48fAmvGV3z9x319146HsXxtogvTBWsdsM4v3nbFJuPFLGcQ9a88djgPfANVf7QN3dufLd4m2tCPQfQgrgGx6oSZP",
  "key9": "DxoxqttkEGkc7QxqbWKZEnyLMpnw5kKB4pL13HToKhmktQc7d42GuE3Gsx5rsWqXanZpGK14JAjuDxUnGYcQaeT",
  "key10": "mvfUk8R9ppwHUyRgujpgHYk4MWkatzPWnadJjaPfVdTJRmVoPXUCbLMcdnVsG97n1zfkTsEVCQuYaEUeommA24X",
  "key11": "5Mpm3UngZ5bFVahYNPX7YpGqEUGqWbyVTTTyi1D4YCdDTbNBzhVbeGb55ocMFRLLcVsVFLeFztL7rB6RfTjJW9QE",
  "key12": "2UEEmLcLBYCwQi9zhgKDQz2g3P4nUKmPzDtvhaHmd57niF5zXcAJENccdeXsKoGjuRoJ1225o9A81awTfCQNQkML",
  "key13": "4k1ntE3rxZwe3Da71GC69rS3tuHXZWXuNSthVxwYKi1QQ445cEVTeN4nRpemfRkP7pxqRA9KvGzCPPS2K2MbfuMT",
  "key14": "5YsUZRX3L5uTaXGUcErdiF2HcRwupXWLuKRds1zVwrnf3LwPN3SWn7C1UjYfVQHfRz2xsFxLN4er167qD7iG2VMt",
  "key15": "4UcRBFaEGAYN34m6bKuX3qgicnTFJ1LZPdP4rag2bnAZKWqojoDLHbhS1oA69n9niy5RCiGcVDtBpfQfgNoQsKZ3",
  "key16": "2gnSSh1QJusiuGE1hLdaF8XWCH7dDE2mmqU8nBUWLY4i3xNYFuEpWrSjV9h5xCTf5rxGicQxWZL5UG32d5VyT3Uy",
  "key17": "3J2a9nTsovdaj9qcCoW2pdoLyVtYm8eDdzkZfvZMgnS5LpBd7S8zVepmJwrjU5rjTYwbjvJpVMAtgkZcued3F9uJ",
  "key18": "4EX4yYjGFmZz6ikeYbTeCXnJL9e7x8UMDHkCuUkwnhiHrx1yaLgqSDpmUcjY8CuLTuTQYJFpUQ4kRcXAg5dGtwoS",
  "key19": "4fY87LBjZ3krAuDX7CNKbSY6GBD1z6uDqA7a9utGMSkf2TnJwjuPnBiaNFEmtqR6qT882BZegkdeVgh5XtrkjfhB",
  "key20": "4gErZp4QUrbzGM9WpFQrn19sSHRG8rHVSGD4dHTPaJac3XW3nNpv8deEmpCQwDLoYop8aVgvuwtmXhuaxgiLixhz",
  "key21": "uXUjgymrD6EqHYZEQxyYa3s3x9wqSoxgFz2wDPZgALTf565o8vs8uXZquCMg39zHffHgxcCiUjFHn6S3jD3jsFH",
  "key22": "669q8dENCf4zfMVeV3F4cLQZq5uz6AazpC82cvyrv5WinSnsxLvW5dqLNqxkoeZ3Fz1aWr2KdrMU1hdbEhhxuErt",
  "key23": "3wRp1qH5ctPkLGmL45sA2LTYhDLDABkkSqAUJhybRc2Hv5mpLQViEVjqZRdnKCVfj4CUHD2mJPnFb6EhCVsrcx6Q",
  "key24": "31vuooyN3zUr8dKzeVC8KLm9XeMj9BFK4m7yonsYK3auhjJPZ2wNuoPSVKxkao59ERDzFaRqraEJvGvyHgsLUPPX",
  "key25": "3Rb1U3RjYtZhwrxLHZRjCXNvTLQ4ouVtQpgvj3txv4gYYv1kkzrQsdVroU8NLRc8iMaxC93N3X3GpheXwxpxpJ4R",
  "key26": "59z4S1oKsrsp5ti9RVg45Q6ZygNgty3cLT5BPvR8tosRWtS2Gd54mxuEHF7E17CAkooViMvyC7wVKvRJJbUnDWeQ",
  "key27": "3LTSsxq9wE6UuDxMsf3EA64Rpvsr4b2ejYzy2uh9iZD4gc1kDfZM9k4VX7wBN3su79WbUf3JbFvozMdfLYDJUwKe",
  "key28": "3ZDDyS4EudJ6aeTJEWLQsnDe9U4TcknFxxnKyXMJkpnuTZvscjmCsbQrAPFJwgYHFaBGBTQ52hvQJYiDjFQux4zQ",
  "key29": "4FPMLrJ9YfXr1ufmamzuYSpt3asP252FZgG1VfnYLnHVmg9MLciSz5o3Q8WZ7iKcPiJGn5AxDg3qY7JbuF4X4XJz",
  "key30": "448GycfnRAdd9SJSvTNrCDMVTuXR1TkwQtEPYj2vmSAHdkYMAHkoYkB6KpyiwPC7rtnD8WNbSWPh7xr4FqWSUNSs",
  "key31": "5VTmAE58e37xvwWFCs6UFXJtZheACmqUSwBgNVpjp81qeRinyfvpx3gM63Lz5JypPhBeoNuqhtmnLsDkjj5irbgD",
  "key32": "5MmjFpvHYZpeQp8aGU43TCkETc8LvLTM9BMtccrkx7omSHSAztjkNxJb3EiFQ1wxiENEwDBuxTbge9KXmN37d2nj",
  "key33": "56S1JyVq5f25AVU9fLBKPhqmRvHPoyu8HBn56xVdjGXgUo9gjF1L48H66o4QyZxSuLBnVgFAnCerS2HRNcSxodsH",
  "key34": "4AGV17NJ9Yb6jdosirhA1y4PrGjU34LYNUkfhWjMWDNxy1bji61TvYFLNpmfpiAfdpkyWu1mWtiav8X2BjmXWaEe",
  "key35": "5PLVyHLRPf8NVwBA986PQWhNsoXb4Y1ytjWw6JXQ7UZ6jRcgvmnymWGjqpEqsogCA5t82ZRWKQ2CaBUNkfT6onGv",
  "key36": "thWdrdNyiQDHc5q82YQLYGCQ8ehhdV9d5p1frnpr1pNqDjHtX2TELgLpUAX9XqbKmmGB3yfiQmcD9Ti5Kg38HJH",
  "key37": "2H3f8pm33WUw6SAwu5XPoNTTrxGC1fY6tsdiLoktY6SbohtksZonUHB7MpLrEdmXQHnav8wj2K7dSahGw2iafu4Z",
  "key38": "4yU8TBARFRa5cEJLh6nBJN7bUXdpi2J9YdtjgrDEz2fVoG4bnNpy7bRJRuK455xzTB5zWRhmLnfPGCJDk9ueKJLt",
  "key39": "oHrYzwDgs2NY7wVZNC2gBdqJJRcJ4L5bX6Bjsce3Zaz7qttBG7ZTexHg8pU51oiLAg8dubYeCcffmUtyyRJfXPK",
  "key40": "39rnJWQhcwLAwnFtSRfXNNoiYA5wqEWtMdxfWLeRqCxsuxYkWVMAiPdLmcqPMmEX8pHauk4eWex7AGEPdXcRZTTp",
  "key41": "28xDG577PLP7hGktw4s83pGktjR8aBydh7Hb2LAZc5frcEaSNx2ZsojdAsaN6nV1jmoEcU76pH5N3YhiXmzx1Hdh",
  "key42": "5DX8fNaF5jHj97HLH2Y6M21c5yhayRo2Vj4ksgQMjSqS1jpFLKCXEL6MJq462uDnySmun94XiU5CNwcyzXyBwkq8",
  "key43": "L3TF62VNb3NqarBCA2ZXEvY6v5Z4j5sKc3RNMvJmf4yikk7xYpttsmx9rLCmzN2knpWhfQN7YFRuwjo2zbM83tV",
  "key44": "4pDmWPaZXjrPcis8LAHkGjnAuWrvU6bQ3Q18e4NdTmSZTmbhu1p68hy1KfwxVnc7BEGDTY1NnRrrfxiygwrr7788",
  "key45": "4fzTbJgzt3HBSHiLCcGYZumwPxkSTJpM753acjYVSgLivsihcviQsRYhY8iBqCt8DQJenmL8uSyo1ZL36GC69hep",
  "key46": "4MNYDc8R3rraALDaMq8aY9gRSPjJEan2Pasbh2XXBjHnDQUfy9TMgqDrVSwB3F1hNGwcrRdG8YvRJSwqP33FtZhy",
  "key47": "2ebHnbLf3LXXQ1AJgNtTtvuU52pUdKXP1qZJ98m6URDRfF76EdDnY8drFp5DXoET72VLJP8W5m6YUcf1GFPuHjRy",
  "key48": "26CPumoLNqJnBTu1Ja6qW4tA5kpRGGeMYNt4yjZr6BLjQdVC1XbF2V96ahWuiAuCADhkvszaohmcJPezu7qMkWSF"
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
