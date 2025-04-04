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
    "2NwvEYGSFcEWdea8b4JgX4vZ6NHL69b6zPwJ3LRAJe8xBbpTkZnCFN9YF1mApkkKCziSKoLMFKkLAAvVAo1PhvWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULX4ZpxTvfu8gboT2iLHQJ3DLFvA1UtyLUZdh7JNzn41iBZBaMhgrUWUYWoTgDCaz3hGS2FqnrujTxNbehPyt2",
  "key1": "JqMU1BXWq1PQdA2mxmYTt4GzsvVFZox2FgSbvwuGLGzGmszsGU8gDS54LnRdJKYksVQnFRRFmGxXxU1uWm17WfR",
  "key2": "5WWUfNUdfqaxqLxYz7KGAFFP2FJEf9CRduCV1y5vTVar4rSYQ3F5bGV4dEbtbjJa1L49qq4EG3hYB6Zvf7W8uZvr",
  "key3": "2QtZTBMg7X2GaXsvsCYo9x5dgHM8uczp29j72eruGAjRLngrNosFMtDx6Mpif4NwjpJLiAYHnb7LwqUMioMs1rfs",
  "key4": "iG6D9vpWKmnxYUrduSyCCS9pEr6KUgiYWz9vVdov4AZ9csLmaFYcdYpMF28GLnbgEVdbYeSTSwSux1To4M5UNee",
  "key5": "4AyNEjRSXaJ2TqGXr1VkLujh8DKzxCtpp1ME5hb3AbSqD5TozcBkxjYPq5ficpWwwLY111QAjj8PJmXRgcB9ujBA",
  "key6": "4u3qW5vBzrhrKorCHrZgXfsp2Dwgz1iaqgfz3ZriaWiZnxkNeobEZsJBZZYMU8kQtT791P7ysju533EKGdWpSkiK",
  "key7": "25xvRf1jDSzFao9pzANJFBzr91BeiD5KYsthMFKpNegTQiDNGmgwRRuyqEUc86ePBvgdd5ZwVVMLNTKVxtRLfjwy",
  "key8": "Ry2pWPG5D2uSVs91Jz6AFnwb8VQLJbQxBgNY56Va16dq738Tt5gKr4Z6PnLKeJHtTQ3tRAG3XirWk4KmT9JkMrR",
  "key9": "368BeMhrRJnFSErrbXcp1FCFjcMCZqEgPwAXfdQdX5bXMtA3rtMaAkxo9gasdcc41sVMiSdyCJfWNAm1PAmizXtU",
  "key10": "432xLEN2j8Gc19GwBTNnkZn3QBRJZq7QvfA6D68y9sVQTjBkW9ZDgCvXyqap3WAnCvPmwj4xqsXKLze7bNFKNrgh",
  "key11": "397N7kow1Y6SFaGMpv7N3nXHGzsY83cjFmHdmQxXYK3rDgEqDb6iJmrcTQHDkZCkHcXFcUDuib9HoKh67iK8BH98",
  "key12": "3pc79rGZoAqpzLwMgjARdacSQutwbhFBsHYGav4iJtiAHGJb7MBFKN2bVgJEwuirxB8zgjGWsTdTyCJS9addvKvc",
  "key13": "4mAYLNMpx1UEwazmmLPa3d9JzcToD58YvN7y6CotMpwPbdcmA6qXpa8NCRMHmXgVVf73PJFfWGGUBEVVcCdpLv6W",
  "key14": "32CgTcymLWwvFbXF2KipBL2UCvjJPbxmQzAT77ioW8qx7o2DxQY4xoC6Qkd78BBBecTqHyXKfdinwRjwUDPM7f5m",
  "key15": "5ekUZK5Vh5gvHS4KdeMS6MiSNWqvaay9xQB4wWZjqGQj2jDNii8wde35atEkrFgW6b6G6LknNvexyV9mYsuTvjFC",
  "key16": "4GweBa3m3XsUFeQ5TyqSy5X1dqKk2U2YNLExxWWCNhdzAeLRuTVf7wUbZde51LxsPuPLH1FLuPdMe4AG271QuudG",
  "key17": "4vit4o43Pkpgy9hEAcwLCJQWAD48sVRUFKJEK84KKKsKPohjuJPtdiXgnjWcszDQubGzWfwuUw28GDZognRz67uM",
  "key18": "4Kqc5daHBav95xucAfUFhZNs5dYTWiCNAGViddLdNvx3ALX3JVAzwtdPMTtRbg7LycJ7Xm4RXh2gp7EGpYjAL8y4",
  "key19": "2jqbGaNxyLcTqgssfWuSZ6gRs6d79VNjqCa6yKtzzzYyYzhZsUug2K1GFE6NgZvt6PvQA6fojs8KdSVX7b5e3W9Y",
  "key20": "3CiMfykGcKN5ZLMGBDpcPxajWpg6Qpx2hqgjLHLq76PBNXfwmf38QKdUEtDKvcBs1oMb8B1oN9HDxxkU9ypBSxta",
  "key21": "26ab6f7ednAo3q2xnqjAvVzrnuupJWFEBthNaE9oQog7xKV9vtrhuCULqELyVVQcNKHMC6KizqjS7xg3toxj1mkQ",
  "key22": "4q95pQD8yDmkyABgb3bie13B9HYTnMVuJhNYXSSsrTduwyi5vgModEHFpnKcUUjBvw2nrtduJ3BbGziDedNzQMzj",
  "key23": "2KYFMKtznAApmTKSC6ySt84rVLANuYq6rEoiXyuutquzSUh7vjbHMN2Tci4j14zciPkQPDoLukpPLDYFpbgyq6Fd",
  "key24": "3yrnHiWk6PQ88pZbkHrw3E3SPcRtabQBvPSrRA2PqVCygbabz2sk4YKrtsjsX59QwYvjGS5BWvGjjPTLAbufvG6o",
  "key25": "2mR16L9n6gY8wVAqeibgvkSBXkG2PuHTgbiRBwEwzwCt7MBhG15NwrTXJdet7pz6XAUmCr2RsPpr6CEnTVgCM5ux",
  "key26": "21E8VGnmWqhBmxYHgSqVMqvdKi7DwSFzQCFVhE9p1kF6YJRxt74HrgAUVJerRqiX3Lz3Bidrm911i5fCigkWJoGr",
  "key27": "bByeo9sr7G8jbahrdZv4Kh9hGnyTE5jjoRAK5KoofQaZa2f1E7Nu8ruHoNNqZ7xq7J4NUivfuyPhX9iRpk7ARej",
  "key28": "55SKXHrLRj1eCmMwVAE93xSa3eX3D79D3Wyp8yrkyosQPCuPgd5uNc4pJoBYCBrU565X7nyNzHDXL5HWXrvaxWnz",
  "key29": "7hkuPaLdcc5cWyLP82QN2Fcc7qqG4kpiv9MfcAogxwvYVBMrPooE9p12RCKkVCDy5bNcbjZn3VZo1asaRo1HuiN",
  "key30": "3kanrKMN3fR44CXD12GmHm44QaABXdwXnkUhBQQ7AKEqRywH2Ck171JZekG6fM1mvT8ca1DD3KJQNb9kfGahFo3r",
  "key31": "3jswwFbvruWWH3Sae8KzsgP48hG8anJEpawCR8MVRBpj7SxEvFH9k7zMMcGZQeERPupw6AXAJKeDHy4HUm46ncai",
  "key32": "3Ptj6Z1tHLBu1tRbbkf4ai4eYCSEB4r7dEgggkkZTMHECP3bw4tFpcCQRPbVQESsvebcfcQjwthxusmoZM1TB8eM",
  "key33": "24eQkV9rpSSvRWaZMTzXxPMpjK2cwrkSSo3iRaDVefmNJwqNkjaULKtZqVowjAtMvJZ8hjwKu4Jaynuc3yyzbciZ",
  "key34": "ai9HyMguY8C4WY672UzwvEtoWQpAEc3AGsSfKMN7Scpdzhy1esspbavphqRtY115qto5bffkBVdH6GSPmF4zRTM",
  "key35": "4zVMxFgbThGLpuDt6SDnw6zwSpocXL4b929T9BCMWES28uLbubedRaZqPwkyv3zmRWnzjxKEkx5exTkXPCXETBiH",
  "key36": "47TVQtZ9iyX4QFh315tRkhCbKUYcWdwSgsuk3mVFZXoRTwD1StyDNemNgLW4A39UsfPJQoN9V6jqd6GFAkdhYFpM",
  "key37": "566u1PzjMBYUyGoxnkHgBfnYuG92n96tWRq9pZRD2oSzgxwQytsZp56FMuwXGa2YzXacprRsV2z5J29jPmN1zJwP",
  "key38": "4uYWPw76SNqCjvwhPkbfyzWXDgwMKPu4hFxB86KNT6sLCbpoby53r4kk6bFw9ishd692eojgCzMDcpMXZ2n7P9uQ",
  "key39": "5Yut1dYdGDpgVvFj7uZCGsnuV6Bxg4Pr5xo3HqJxrhi32fT1tfK9ZK65eQKUVHmLbwjBjEoWKsAAAyR4cvjHRDso",
  "key40": "43fGSqxcWi5psTcXaHNep7RGAUTST9Z3mY9TjsSCMDSWHcEyLcn5mK9mQrBayfeNfQTJQ4UtKtmWD3r4YDxk4Wkb",
  "key41": "4ikctSwvcD7fZytTiKdsEypEJepRuu7fTkiqBQigeZ9w5s79DduTkKCahn2idE9TTdxumsLpWb7MEgw6oUDZLv7G"
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
