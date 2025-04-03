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
    "2Zzi1g1KfBdvuS6srw76gFSAFt8kmyYHqSLcRWm7tQPamXTdLpHZE2H3JMHS7wb3xAjdLZ12JPufKcD6RXhGNefV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g8oNMQkfw18daFsNpGkpCAZKcegkf3BxQmQjCWotSQE5AGynXUkdQjK2wAZ17RNeicKcLTiqpF6sBuMxmt8a6Cf",
  "key1": "Aqsjc6Vpbx5rHyF63Te7TKSsJTuAtGrQghNavcBbuAYMF1i1P9CTxarS633kuuj6MzNmx4qKXoXZF6GTUeknu5D",
  "key2": "77vimbxn6nsutae6T3MgjD4nzfYpCiogoUEZ8F8nHdLFvxx7FbtvMYd49Btr6eApn8Xsi2CpEL3RwhQxfAURJHC",
  "key3": "3CT9DpZy7hSi7VYSTsQjAEJpekSVX3Yf53h73MWTmSAiekAbDqAQPYDGMmQd8LDB45SRuqbCboW9XqiaktRHvjvB",
  "key4": "Upf14cYKTQ3JCptq5XJmGTNP9XgaVSGiaFzh1y2cbeYB72bhek6pSweG5MLTLfGhia8dK8bCF9W6EXZHDkghx2Z",
  "key5": "nk1VQjzTXtosv3zB64sWWezFrcVC1zoy4GRRfY1FbPjpMj2NeuSzMtqxovVvzq4E6KcrYGrkXfAjFjbMY1XtUuF",
  "key6": "45ne7GuUKuhd1HivYnKdXBNd62vgxf1WEVMF99jNcakSywpJLe86FQAqMjHBFqZP5C8HGkCZrA2f1ZKXwt1HyGrn",
  "key7": "3vkjnfTDQ3kCzWwJz5PVjQ1m1XQoNPgKatDiJwqp2WURiU63PNsKMbYtWLGP9a5gSGsbkYkdzMkf84LTZ6hKzgdh",
  "key8": "4noWSe7x54A9mcwBYeTuiPR6tvtcmVN5BR2kBogA1epNFMYqdeKSLB483u7bzhbfA7PWU68CbjwqBVuc9qt2QiiB",
  "key9": "4kmQJcn5GTuhiFtnjTGnqzGwHkGfckXm4nG5TdYnE3qo2wAfeTrFfkzRfdMoQnVQFDgyao4xoMEuqc4JaTYcaAFS",
  "key10": "5ePLYeky5MDe1FxcsRPNoZxZKQNiacpr8V6HEVrxW7g2EBTw3yqmyAGP66DMwcnU7ah215iAqmHw2ssAxrvEX8zR",
  "key11": "27gWzPHZWUbAJ21VjZYj8v1X21DhBd5e6CTP4BXqxg2BqDJgqYLByJJUeVWiChyAKPqAPuzYvDmqVTZmSxgVvcX2",
  "key12": "gdX5RcRx3JiTNjPfCBb94FAYQaBE1rbbGnyqFykDxirVpLEfhsMePtbLjCgRHisyd9ZJAemdNd2d944THoc8xiH",
  "key13": "2yG29Ph87ncmRGq43rsQ5RmFoEkW5YQapGmH8KGcm7GykCNTcnowrubg8cZQX73kpQdtyNvGJQB4bMDkaN5G62v1",
  "key14": "2B7Rk2yYtzg2cYVwZsFavu1ZFzVE4T5sHeD4GQcEDNK8ncvEW9X54eykkYvBWucvMykq3GKNkF6NBxuZgwfSdjpG",
  "key15": "4KDj1JgQR1LUnbRbowHW7Uv2hMAEmaRt6cxaciwdMD9TGT4LFrUYpBpCAbbVcG118WNsW8PRmpt5y8nz3r6Xw6Dr",
  "key16": "ATqvfRSKiWghrY1wxEJqBnrAmv4irnAq6jRLgyBwXLmRGSEshWrvoaQjoUWwre2XyfCEVpDTfp8Hkiqw9ArMEP5",
  "key17": "5xEoKs51m265ap9ihR5NBeuKExv6vvW1wYM9uXwjWPoVDxhXRELttjxRMZeDwhXY4cWcz2NYoagXJ6zALop4ZdCw",
  "key18": "5mfEaQdMGDSTBDJpeN4Gz7vmDAemL9Depz9mdwUy2UxopSL5NGi22cEVDr8aJ3ZN1q2dqTuAi9LXydckSwUppPxw",
  "key19": "47oudAoDT6do9a3TiMzAjswJxwKkzAgsaFtx78NVsM2TcXyLhy3odrjxa2eQTuz5sLyQSosFJ2u3AZAocjBDmkBZ",
  "key20": "GSCnt4sKCGKan3pKK7KJek9hLS8mLyXttfpTKLBeKZxF9WNybUrL5YssCVoHuaaveyYfdVEcodiaXYQDYpYBax5",
  "key21": "5k99wKK9dRYmUtsz4rSAdx2PggjF5j5Hv86cvyDGYKHvM1AEVbNzTRZHS6BKqccsruadsQFhmb5n3t8mZjTqj97C",
  "key22": "52nckWfLjrbfHDqoq2ZsUNkLfn5rmWbUXxGHXYBrLeJD815fJuaTU9gYm2HmW5g9fpKUP92k3Xtprf5WdHQPVka6",
  "key23": "4wiDqGS3sjktJnBrUpzFCg5MdJGunA4cFNZdxUeFWoeuRGt5MexLN6uk3eCfeNuU5t4LUMtaktijDPtesdhVr4Di",
  "key24": "3LssCRvCMpC2oY2Nu83bdxgXS3WCFyAqE2aMXmLKGRojvQG5pBfDTP94UE6oBPbMgbhmXzYsqcoFKAsjpPsXXZE3",
  "key25": "4Qe6FndH7bdJG9ou4QnzsRo9FpBBX2SqbSKLd9FJv96brXGfyonZ1vuDBcN1mMohuJj4MwdvgUZ5eWzeiVWHo4Vh",
  "key26": "42UeBq6PYqLijJzyqzSoz4NwLRNzFDFjZiRC7admFoFbqX4xb5FsxPZKKNdNkZaLtKaKvFBFigHLa9SftDmHotAX",
  "key27": "2wc6K5EqghHpwEPVPLaTGA3eXvePdAJHMqEcCPEf1NGFf6VJcxa8JWjZgXpKL8BwiiUJANAqUa84bUah1DKL17h8",
  "key28": "42YubxSYetaS8vDCjKTgJZu6pQyUNATEN1jguKzmiSrsKspGhZXeWWDCKX1avGqs4Qjr3GCF1tQ2J2rRhVEYq21T",
  "key29": "5AymTUixPAFCRCNxPtNZNDr6s6FcKZYdR2YeyGwhzWLicd2JWgAfjHUUUUiceeg7EKGyYsfhN7x2FwrbnvuKWchP",
  "key30": "2GA1c7NA5WrsiJ3AKoXH2wpUZxWK9v1BvuhyuQFC1nF729R141VV7TMrVqfEw37F8JHtZNQYQWsSffpp6MjwRZwD",
  "key31": "4mad8Li6rTU6ff6vSQjPP5Xpq5Y6G7mzpVp8dMyyeF7ijUjzVz4nVi5qhFftjBgNKdLmFgNDyXKS9gUXoYjjzRyn",
  "key32": "5f8wpkvkjTKqtkLkF5Q17MWYYMVHv4TKL5KPF1duxJLtRw7bZZmGkXcxnaCKfRBKpCyHtAgiDkRf3cTw1jg4xfcM",
  "key33": "2dAKMqUVj9W8BJ8PWomeueDTUsgJZSHjqFrYHaSFEdAMX6TYAchaH1D22M9ywQyywqZSWunMYByqDNwXVYbhLjRZ",
  "key34": "56fyBytX4yzFzagJvpy9MPYWhCMGyfAauUZcaQBf6NXdFaszpX2KHbEyQ8XG5dNNf61tK43gBBVdzSCymv7FV7qo",
  "key35": "3SfbLFr8MCzZ2cacVfgMeFC2uvSvmqd9PCJ8c7Hv6EHMt2yythLvXS21D67FRtig5EZXjx3yJFR1qP6MBXAugoo5",
  "key36": "4LWVUZuR8CGa5M9JEKJMuQ58tgCF9LmqffK1py2F7bMh78zNz5z9wVtyYSWHjZ67WQrXw56oRCC7XaKEgFPKdgLi",
  "key37": "46h1wZ1hMWz9UFKRUbAtmA5QvuztcAZKui8dg4c2YtGresp5ARTSbbXzRg7DMqd8Yab3vUb7JihM79nErC8kQZyK",
  "key38": "2TBvMTaFSEQs71HpvPk3UPMFNBuBJRK8gHdqW8j2aX3znWNJEh7WMrPMQjW3DQdnxtmuGDnzdPF5LkkaANZKdYDE",
  "key39": "2r8vaLYUdEuHUFaiRT9JCZUkUZTwJtkoEkP7ihsUUeX1ASouXGYwGmS4DqaAFRn6ZW6ETPE8BnEkHdMwFQSsaJ9L",
  "key40": "FTNz8vjwwiTokP5EhLify4ZfBJGMgDp5vWarZCXCLPnwyUxRmxefxz3B1DCyiVP8UFwEzrnySYcf3Tj7BvzCCos",
  "key41": "4Sk3SmUE5NPvGVPNL9NmB23Z8GnTiZHcaRcNsHguarpoorbF36eQm3z7NzmBn3gRYyCqW8nYpdBFr8RMWmgM9y4X",
  "key42": "2kMztRYKfoyChiRkXCzDb5equWt1fbtVn2XEfRs6xy3WYnDH9fMWqVbaC93F1HUY4J8g8h1hvH9y4UzsbtzTtqa2",
  "key43": "5WB6xaypnY3qurn4SSYHJxH2Gwy6EiA4P96kerH9FfttPJYwzGzYYyHEcz16zjv3Y4qGED9Vn7MNWoFUvNFdo18x"
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
