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
    "oFhHsCEMTSiUqMRwUukYQW7xGM2iyFRE3FVwX8Lqwuy5JcZHCZgjPoPjHBSPfzxmW7iMJ6ckV5aqCvM1VUbZyF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qBPxB6c6wHnBUAREfcEi7tUvjyU1PKLVR8HEJPyABhiK8DoLoMVJq7Ays8XRSgz1xvLF6gJ88VhfUvs4FG4apf",
  "key1": "P2qUL1LjpPATXL7f1FKUZ5cuN27PmPNQ3vE4WCns5tvbAXzVrHU5AQpJVL3RChREAnyXWvQvUVmPghgt6HYkGGE",
  "key2": "2PKjEGjLZv5YonBuUB6s65yURT1e6KUGZ2j8fnWbpmZ7bwzobHuB5JVmqUTrpjty8Z4RQ7hCM3VAvneLHRuKXJkz",
  "key3": "2ypELDDSNEQbx8Bn8zM96Ah86rGCi3q7Mnuk9g11Rjve5cxduvA1DSsL3EiykFKFjbwnim92XakPspPSCGbhSEK",
  "key4": "4LacUXa43zem2vYchC743hmeQFU4kD3vkpNLrq2M4XStfBSqm8gEDS1DUkkNVozgkPo9pQiRQo2NH6sHnfoCjocj",
  "key5": "2dy5XtVLRhaDZN1gTYk6NDHGa5sYHacHchUuYEqHQ7Wv6kaDaYhVv6mhwYspeg7qn8iK41Wym9sDHuCVS3kRZgc9",
  "key6": "veknbABV8xmcLFmRBfgiu7DHARrfpJUXYsAsgbvftMbz7oXHqYASjnHvnmC4Qs4BNXS891XArsngV5C9MYUJJiD",
  "key7": "4R7T2k8UfNBEcPxNgbcPsimERsNUz7eNuRjda8MZuJkUc7KxS6z9qvVSvrkckrUnu8rJN8qAp5EkSVQavQTWo84W",
  "key8": "V646eMorEjeAghjjSG1NSFiWxgWn8ug7yCvU2Sj2WDjrEB52YToDkkLG7XxrNSydwYme6ANY8CJ3bBy37aefagz",
  "key9": "5CWCBxLNACLxiHunSwoBh4XBbWunPEjTKQvPE7Fq5Mp6qsa2d2rV1MiZTTmGvEtnGmrszQ9nNzrScELJT4AoAufo",
  "key10": "28wLiqVME3ReK42DAXJwhEKKRYqza8EqLfTX81oETpovV2a3PkyoAUwV6viJYRb1tx2jr8qd2qmwnUQmppe5WBiL",
  "key11": "5tMmSau1hBCwfwDkUVaNj9vvmLkDXRAwmJF141fJk7uSnXXgrWU5tyGx19Xsa6XQtz4PKcLU5ZuL3ZZLZCBVf7ck",
  "key12": "5mTZVssXwAYpibHiYuDLAtsKqcjYLLTjDworqkVufMqf7hBdqSBZXaBHBejv4oaiHauMjej1AX6JkBttUQZv59wN",
  "key13": "5vPaDz4qozjonXe9iXinVzh3SV9hUoBWgDtKUhexi48NzALiAPgpc99bagnho26NaddAJEcNStbgoT5ren5brMRB",
  "key14": "ibEgjqf1EY919uzeHW73UczBWTdX3UPmUZKuZ6DXALj3Fh6QFCThN8qcvozTBWpVUvtFcGfUSRNq4WQr9HKDutA",
  "key15": "2MPPPkA6Ly4ym5YDsq7KM9bCYqWmE7FfuV85VLdKk54dj8sKtzpCvVzdKyD2brbuLyrFwNmKLcBT4vuzdqji7ZEF",
  "key16": "2istD4kb5WpqTQjc5rQZyjdshWK86KY3H2rZPXgbPX8fbKAN7Y2Q8eHpWZP9J9C5n9ZEJJUVgGBYCeyXcnAXvHGU",
  "key17": "3maoSX7XucaYqiBtWdmwDj15i8ocUcZsPTpLPxwptKUtwL6Nj8ArGVUeuRRha7DuXjTNysDCrmbgnsECfWsez53u",
  "key18": "o1A5x5aX7aBjwdtjqn42gkf9JKRsyLagZ4UkymAZ9aeNUvepVRoJXpNQbpQVf8AFYKT7pUkPcJSEJA8GCujT57h",
  "key19": "stwBeo1DLN1h8RyADzi95Pa7gbYRHymmexKkP1oXkFRVZbxJV67cgSUcSJpwq5TeckooPXng9JSBmEJX1DQdG6v",
  "key20": "s2gNitV5v8YxWwujQ1eqWcYCn66BVGDoBRsXiXFXzmMKBA5Qoyaznwi93mDeMjcrKDJhdTtPVnogc25EALSxNPA",
  "key21": "4GaKdGqnfesgpqmiffuG16dC6wWk2SB87d18q2n49XpK8GoBija1LQHS5HPpqD7CVwaFVgpj3xoY5JwJu6VCD8Up",
  "key22": "sdqNoC8CAFrjyNBfL4bQuQDZtSvjgtdJcdTdxMoeEp9ChBYjYFVtKUyMD6MqGQuJH3Fc5bHZ9XLfMtU8UtWEC1o",
  "key23": "3EXygoupTp6W9P9Qv7U4aagki7kDCDkRsDLBYKr2QwJebrwvRLA1Nw91LsdJS7tWaAPyaFwbYevAQmwQEPNrE7RM",
  "key24": "5ha6Z1G8Q1MEm6BpSdgy6Sp8RasZh5gCFWEqiKnbfkGZb96qkh4aqaVeCWdUQ2U3aHF6yXLavczKwsNfbWLozhEb",
  "key25": "41WxfhQyciK5YQgU8EHgVNZ2jcmY9qhgcLaZ1HDNH4j4UHZfkc4eKYVMzz7hjDKfw2FwWf8r95RFokpgmzABRYNm",
  "key26": "54PEQun8FUXpBWMaTBxWZ7UQhXUYtXLq5QD3R1ya94UATbNZUmbDSKtKr4pxbwSf8xVH5ZYPnYN7KwPxhP3aSnZC",
  "key27": "5x5su25VYAq4Jb3w15aiLzTSriT7DzxF2nLSb2tDeiDbfceSptquKqBpntkMrSDKLps3y4jR5siVhTiJ3pYYTyZU",
  "key28": "WVBzNkdGHMvG1XqNXEbhnsgxUaDNEe3nqFeTEmiwVQJwzkdqYmsBkLw3XyCZU5r8n74pSH1k3jeRV1mtdybkMty",
  "key29": "4GrCg3J7E1oXWPXwuN2Zrfi51FTZh4AgrdkFuEbUyQBaCqn52FpmuXNRewtScduB3JzBmMe5Dabe4qh1y1NGQ6B1",
  "key30": "3uqgggskKbSJHZEit4Q9QsowhX5hGnjpjvQtVaQo9Ku9S7rWrmFQ2wYpgcCAajaHtCZP4m7wFARQS2Kkvxz8dX1m",
  "key31": "3DAJgwqvEgbZu7ru6MuiGHcpe5kqCuxZPqZZgDG5hLpwsMVCsj9SmPf8AZCcds1kW1ovFcP6YpqoCGwN9mCnnQjW",
  "key32": "3kzXtSExAHWPhyJox3xtCTLP2Yme4L9DiMyQtVK5xziMtXMCcfigipPYpHTn3Ya9RDJRzwH4Dr6iLyddNApq739h",
  "key33": "3gt61RS3snpp6nseV9YHhwcEzfMhSwJgJmneSdXp5FX488EUHgv2kY6Yzb6V5NnpKnZNdzxYZFELEHNPvCXE359V",
  "key34": "5N9yPRDVocL6nuaU7WTwEkgY76VVZ4pMSUSt4niGXFKmgppCPcRHGC1uWFvndLtrehXNsSM5K3zXnFViTLnBkWGW",
  "key35": "52Kspah9G6ptRxiNJgaU1XhpxS9uKJB7uRnkV5WR8HxwzgyApm52J8RKVwZBde2nFqzanxXYFytuRYWiRieggMAv",
  "key36": "3PchMH4gMLNDPWsRptZaUn6JvpAbZGhLEvZKuDF1DE3XEbL5SCv3Rbi6TJXMAhycZ9Uo5iDNQmKYiUMyJCVVA7Nz",
  "key37": "i4tq4F3tHuWZAZruVXia3APaNByLDVCLNrxHL5Biok2xvhL9zLxNkZ7WqtJr3kPNuQt7yRapcrJPteDfwm3p4u5",
  "key38": "3Zp7PJDv4VYYvP5dsnTubbGy5JVC1mvcN9JvorBty6uur5p2wsW7tTZvoxJEx4PY4JyG5jyUGYsQT9V5WQRCKqfx",
  "key39": "23R26kUrArjDqvscfemcmHY9uhdxmyYGyrs1pmyGCtQpwkJCqfyzXdpeoMrRiawaoztCNDfwGvnFuAhGtcQirTCj",
  "key40": "3a7kxpUThQcVa5meDXcNZNZJxipi51YRoUfYaGEVZ81WLRLAKddxFY5i3SF8VwdqyCqNwXm7XTonkMQjKofibzLU",
  "key41": "515cJUDKutHaiFxveYX89RpoD7xnxsamn59LBiPgrc3i1DXteWLCyGJqVyN4pHtxomxJ8KideHX8bCVGQPmQLncD",
  "key42": "DzW6piB2YHfgj7wVdcqAf87XYuv1sbKGuEj2DD7D6ZzSQ2H7WrFL2BRQHMhe2RTWRyoXJraMpCWTSpnio56maJM",
  "key43": "3CQSdqjRV4fyp2wRMthtChSTBHcyCoaS9FRSLnRdr8Z8yD4pQeFhMibjYHD88j47UZG3vJzcqc2NN3BebTuLZ2gG",
  "key44": "3AXZqJKW9gLaQCLzjLo4qpgk5eNk63i6koipASZFw4K7Yrds93hMbrxpY8P8xpXKr4AvcRAnJB44XQRHgHHMJBmV",
  "key45": "2nrzdjcxphkH1qRc6DuYEnCcyhYfxBmQiRVFdNnHwrQCBst8uAtxbN8R3afbwReJKQCoArF6tg6GixZmUdPEKVcT"
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
