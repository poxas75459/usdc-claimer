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
    "75kf4uJ7XssqSQL7ZzVeZZL7c4RuU5kAg84Lz3oxr9uMjBJ8AAQMRzNPwPKw9w2DgBipWX6txoiHxYx9MPCAQxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64WJgiMs3CePRusxRoXEH1v6pMhHFdGevHu6c36WEY9giRBZzyeAoyG3sdKPzV4G7DcdvpdqRBhseo5W9uHyrw4K",
  "key1": "2z2FgU8cHw2V9tLCiyLQLghPiQuUpqUpzQttQcKfHtessA1q6MXwLGriSxz5Kj6SWpN4dt54Q6tNqQT1gEy8xGeJ",
  "key2": "46NAs65gQT7Zmm8tvYmvVyS5JaAePXKYFiCgNsMNgsqbPCJFXHuKQi2K95AHkyz2p1jCWf81551tPryHXmst3Y9X",
  "key3": "CQ6XHNTJuKXyByszrTzreQEs5dk74hsScokFCeeRdrdGsnLbJyhr5FVq5kddkQxGse7LJm4Wkt4AgQmwPzzpbnw",
  "key4": "4deXyuiTAtEhp2zXNbabZUrfEMhfyVjaqaxhwqEejJsdUSJT45MBHXtXdFQbJCfdLxFTkEaULqWNE7pbgTcs817n",
  "key5": "4zeiNsHokKvc2E3PJByhp5pVW3W8EabNjQxcv4nN4w61TPx5q1YL6jVgVnRv1m96V97jsKB4GWJk2s2So6UeN5Nf",
  "key6": "XXPiZQoyuyHdeYX9Yb8ZxFbnrvgS37RsKzo2PNNp42gHi1J2iTkVYg1rwp6P4aVh5jmckS2JHAmgQ3Ec3i4wrXF",
  "key7": "xRaozWGRLB8MoxCUsYr3YFhnpkbmdF1yKJETdaGNC7ApGPSVmM3Prtww5GRU1wuuuZTn4m4pbA6kfoArQEUt7h3",
  "key8": "3mAeTh6d4KjTi79MnkV5xDTzBKnhpApAT7pom3HxG7GqitiiiKksordWmWkNoPsyWwQPXtTTxkaaknoWj4NDJg23",
  "key9": "3VZ1jHeMAsPSe8GrLeNgdntZYjew4GG6TShAnsKQS8RPznEiez2DEfP5JQn3e8d1wt8fKFcCon3zbhctae39jNiM",
  "key10": "3pbcSojcV4uGJTkRP1VDj8sU1Vw4ri3kY6E4oR8D7ac1TicDygAvtV8g9kWc1AihG4NCderDJ4nnmpHoggenHdFq",
  "key11": "5TCam5grE6i51mPY1xH8MoQS9ZD1gi3bDyR4H4bdRME9CYpAtV5F6GCYKNZkHSsspqdmNbjpfuSYj9beohMb79hX",
  "key12": "56Ja4RcD3LBZC6dHsEQWwFMDuiM3Xke3cQ4a3QoyLCTtLun3H1wAk2F5aC5Pmg8CeEmQ9m2iRu8GwGVzVBZeiqMt",
  "key13": "362H4fDnfkpgHBCQdppcNMLDfRcAP5mVWvA149yFRcMUFMahjCHWryZbJndxuTEmVCCFocQX9HYXa3vPSXrZxJr5",
  "key14": "3Xrv5KM524LkNGNSk4nTtStVoLwYcdmNeRAvkPHgELm3xoYdLQzsFS6TzBuT7yUP6uxyuaahtLZvvoekAAN3fWB6",
  "key15": "2F17oF6oAjUb2sn3SnMf88bFKXmRdjCL8kigJZLMhwjacewy8yGfQhiQVRaFRrYG85fh14kR1WYYpKav8ttgefJ8",
  "key16": "4ptsMjdTYyKJi4FwnyAxyCpum52aAnAjf7h9P9uDh7yGA6P8XMKZzbwaYc28rhsNYDfomXRwwsb6tei11Nq7EiEX",
  "key17": "dR4Fyt2ikSrUCTmQBoMA4gyA29AoB9xJWPkZ4etnayXhKjyCdpzt2wQKwiCaRGTZoHfi4dmdToXEu289gqHH1xe",
  "key18": "3ehdmp9PvZvp5pp32XiaLSHDSTzA8JEy18VV1YzAJrXj29WMe1fzoEkK7yt9pBcw1RHhHwLnpJptG6GppAuNshdd",
  "key19": "5drJdKcXBfCVtiLgkUKhrPVoqJiEwXmnQvwn2UCJkKm4arxz2iRcmNkbGjPnMUKDsStwC49defnmQBunUaf6YwqU",
  "key20": "sBiGTVNFUiJTkHuNWksmN4oy6xFKY2LqkkhXZGG6XDkmZTPUJgbyV6DvcHjaW4EYfFDhhZQ2g4GVAJGvwq6bQMK",
  "key21": "29NyBfj2YWuPMqgpByY9TNgokM99AkybKb4ym9UC7xqNTcCHZpKt4Sd5YYriJCfRAcpCx8TXWg89APw1iqa19ei7",
  "key22": "63VyBokDGVwsVd5GAiS4YpqS4oigkBoHMbiZo74MNdgj1tZUH23WGJpcvhCyqXLUf4VNBWfZeqF9Vbg5fdYxCQMo",
  "key23": "2x8zZLJYm8QEXkfa9mpTLEhsnKjwzBuy6Vnp8r1kV7f9DtiwELd8DwWV3L5GkhLVCN25C1jtmy8CjiiZ9HDH9UDy",
  "key24": "52pYdR91MnzidHMnqEFtG2s1mV1SejQykNz5YFqxSL8UZKF4T9DYLQf6NxHnPG2FjpQwMiJdE7V9fd4tQhnzWWU6",
  "key25": "2wTQLqMvksmPTFTVEMceB4bTevbEYnd165pSzL9Nc31ud4gBetVkBX2gqTjNtv2DAfcZMkZgLArFj59bZEvXCD5A",
  "key26": "2D1z8vLQ38iVthU9p62nmSJXpLJ4hZULiZmqAAHZcx7n71Hi3BaZiHr4xZo5mBwkT1CxheyC6v5W3SodboC3eRrz",
  "key27": "5oG8RiuTH1ZzV2EnZgnnxRv8bScTNBsZKFTXPhqYmUJWMqQf4yXxS3BK2xz3Nb5WCEThiPaTVd6BFaRCqUoFpGgC",
  "key28": "5UTqGzMkAKmaDsVx7msissyeSQoNmDwtgb75hXuEm1KWTy1HusWc7151i1HNXTcLMH8mTbB5ttTptJw1QsZB52XS",
  "key29": "4mo6oADuGdKyryM6d6V3UyRfXhPZ4TuZBf2BDUkHuB5FMkPjJdvgq3mMQkRVY9sFbWiCgE4sccYHLQaGQ1nYoB5z",
  "key30": "3TaRZ5Q5L1yBdv1Z3t4exD8ARLqdT2YAcmpC5tRr1heuxDSbkKy8HLJXdsyibv9aPyQbzQfX5D8LSdWjgibyJg3A",
  "key31": "2dhf6J1Db42RniXUr41PWWgNUGyow9ojKS5H6UJ45mo3JVQrP2JiadRbMc6R9rzjYXWYx8PPm8FMC5664YmFsKoq",
  "key32": "3hPQxAdpFyJjbV1dGQtdoxqPUyNz5CRe7iMdeLoeorA3TpA7vqQbhj11bvcZ8wZHcDfYCPPrA6cWCw2DR5jKbmzY",
  "key33": "5PwPdQsqAF3pa3DpbhogjcxtsXyYMxh66RhDiauuwW9RSnN4d349XU3Ubpn9gPcbs2NwKakuyMTgu2Zp7BjEzgBY",
  "key34": "5X8XGmfQchNuohARsMRr8v8wnapJRC7kPubgi8TvD5fW1X7zxY2v6PfMNrQiXoqZ2tmbS3n1dKPUCeiUaFUehMqg",
  "key35": "4cJZxQEtHgqcvgY8fq5PrxEfK12ztsYeTcBBwo1Bxj26BHja1Tco4QHrv3c3mv5YnXA36oEoGbNpYgu7FUitZNnX",
  "key36": "5uwVKjoReZb2DUbnN4RG3MVuixtB78Rw55nuvoPjSyFsPRMRTYra4kAgwgtiAyNKGCj2W3zaaJEAxYVwxRBy93zF",
  "key37": "EoMu6z73xGmMaVW9pqc94jHfHUjAVpoNDCJ1P1eP7ar2C6vXh6Sc2rpdyQrd8NhXYyrPnT5zTWr3wxNiivoDEXi",
  "key38": "4UYfsJSG8mbihaMjE5dd9xakGei9scG8zn8xwArJbQdvbzfBagapYngcMCrwkjVHdqWw7LQtuffSH9zaQHVVL6nY",
  "key39": "4Ge6KhpMMVvA7yC73uj8zr8yqgYbnUTPG18kZdY7i4HvTwm62dGWvL5B8bRKifrS6QQzWXzWtFtBeHRJqf6cZgab",
  "key40": "232zjRUEU9tD8eUyXgo5a81cigBBb7zio41V2TZPnZSWZ4sjGAk62CEs4yu4EfRimHT7Ri3XfHhjxd5Ze2pY1ygB",
  "key41": "35kA77pNFJKExBmGyChs6KfRPNrFFkngk4NULmjqyqSnE1dZkgVUwo8xjYuH8FEU9mFmRhWquiZMJp77X7D6ZtS9",
  "key42": "5UYcu5ZkV7XkNGg7LSPfBKYcqKfKmji2hB291UYNDdobdQPPe35EShJx36LjgLiZL3P2sArtP12GHaPmL4bSwRMj",
  "key43": "2z6pEmm2j4PAazSMwnPzHUpZ5utVamvqwmUTcGdeJVASWY21VzbHFuhWMy9DWJZdsU8EBAnvPmnfR1wdcQzMhV2k",
  "key44": "57WRxFUKrt5yD1gBvHTU5zfCDHeMLuunWSkXT7BnecXWqMwnGzx1yUAoRf1FQVNNMz7ggnchfxx7KHXees12jexk",
  "key45": "42LEmRsjobT6vdY7zvMKYbRqPWga9WurMvYLoFe9YxcUnzramAjDqCrNusfLZdqP4GdkLiVrtntKciNQePFC8nwb",
  "key46": "2fNeyCAPgyvypox4fCEEkcGyLTu3QWpyQLts2hUSayFrV3KoQrh14uSATAUa5y8uo2YR66iKNRVF9PyEjJjNv8d9",
  "key47": "5eq6t24djcDNG1uj9qwuCGnnhYfpvdrcBegsLwN5AUgSsqgQ7QpgTG52owJZkbLNvuxz2nPENeDdSxKCcFzKAzFK"
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
