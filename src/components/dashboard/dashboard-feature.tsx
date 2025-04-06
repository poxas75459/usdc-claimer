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
    "4X19wfv2NPUW4Mp41N1a4en7686QahiyusavXNUiewBEKcY86rxp7BW85iy4H7DgSoxzPLemNHbGsyok4mRTdgHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x5syBK6KpUsT3f99tiVUrh4uxt7TC1igT4osBmDfFN7UV9dfA7EbyAvRu2MDnewz36DtrqtCBPK3T7t6j6GrHbp",
  "key1": "5UuB3R3EPfEUhrTvzj8psR6pwaem5YD3UdD9RAU1dPXWVxVr7wBG1iEoiLziADsDfW2KSWaSVkTkXv9xJpE3NJt",
  "key2": "67TWKxShXLKy3C2g8zuD57dQP2CaAzLRGau2DXEBfHneyhkQ8KjJRxnizEuVtXttg8YSXfVzmbWSCMsXrWDsmnMp",
  "key3": "7F1StfmobDdrRdcCSb3u5i2u6vZzpkUY5y2AFjcUnKcWHyK556L6eGH4djJqvNwxdeHXr9PZsbaomKGMA2WyGki",
  "key4": "5nxbJCRx8XAJRs5nFj8cvcYDfXAvAwEH4yjc5VCcRtUe16WmC1AkFSDnsQdXtAkQFfqj6GTTAtCRKJJ6wknJB5pY",
  "key5": "4gpqxggrq8CRxviLDEvKsQrPYEzd3c8uVprfktqxZqo8nNciaHyauyT5yveHucfQJMnGUusyBAvAgKkAaARYp1LZ",
  "key6": "5mqeMaBJGxYy1qcY32g1VPgwZfhBtFaD5iVspuW29JjB2LjPk94svE6Gsy6Je6UfV88NAwiG6EHGMQusWD93Err7",
  "key7": "4Lko9o38gcTVzwL8NVboND77nTbyS4GYTiZ3WcwhtAEavMZ3ibquxWhEqWDuCBcC8HevhoYfcrUbYyr6J8QzqkDt",
  "key8": "9jByD7qx5uUK57PZTJf3RU9b6P8LJv2exVXHWuyWKNtMqmuJ6mKnPxsxij4SDJe981i66doDxcvJXHPXDwM4pxt",
  "key9": "4Z8GmP9idpRXdwYVaJZvS2ASE7qzRiNQoZ5awtT1TEzoWUA7XrQNHYYAZwSkVfUpxyKdFvgqhwoJFha7f8suyNBy",
  "key10": "5uKK8Jeuypv6aDLdgRoeH2Ky2brYi7rdqPhTuw661Bm3NwSiGuEskY5tHNKTDSye18RRCSAqSd8RC35D3AXAYtu3",
  "key11": "5y2Pr4Ft4sduRdsVhKLN5hCKn9jQUYDdqjJnR54VqTfHWS5F1xogGExA8WRJSfXGVSH3L8YdbLBKiTKdZVhRgw6L",
  "key12": "49qm3Wc7HT8gf8QnEWNd9VvF6AETp5GrLscdatQU3o8fijacUhpYH7bvzrSBgLpUm7ZyYFWEAu2JptZNXwhJDyMg",
  "key13": "4ECTGUss1V1Tw5kw2TnKyFVqjmaB7k9Ja73WyrSksazZ7LCUp6wRgr5C3WFb3QUHjpXj2nun3ZwxzsVqv7Co4iE2",
  "key14": "5A57NLZXLBnmf4jb9ugLtgRM1dzwQ6ib6qUzA6ruEVFkX4dQ3bFNmi1X2fzYTMs4T1AESRSeGLHLxRFFHt1LALHd",
  "key15": "4i6sHP7e6b5BEtAi5QXxsfyZJwHAGBuqJXuU7pBnLX9iT1h7HYsjRsGr2dbbBGgJtza3zW2WLEj47zCFNwZsgbZ6",
  "key16": "23B1o8NdFavoJ8E2EbCbBtPhVGwoupgrBfJE5hs5pUd23NgubjWBAwLcWepT9Y7XobmG2nNhzqgXsLqd8BXumQAZ",
  "key17": "61tDkGVsyTHtQ4saB7dwCndwa8hG8on6uVwFTV4ijz4Pa3Xqd8wGzEJsiFXXfhgfardvgeM4u89sTVMBiGsCoWQM",
  "key18": "5Z4S9MmwZwRnfgZFsvQ5KpqEzXbop6xQ3SCTw8CBNyeE1bgq8fy26BWPWQmkJ8a97RFCoYxi6ufEJk6shmatj3Rf",
  "key19": "pkkKY5VDdMdqYJ8GESinNoHqw5w5gDh1XuhS3mRmugVJ38ATaNE1zZQCHY3dq62wQJJQSggDmgT1iWpXnANN1H5",
  "key20": "41nRBW22WoFJRgmTxRzws8dberjj19xFPSHgryvzVooFueGqzYLSWfewdUezxdJLUzV6GwGjEfLTCVa5eUJCNs3b",
  "key21": "4dMU9ZJ6dvKpBbbKx5R2PEM9EXGWayBteW9XyBv4sMun6Mdiqc6MDTt2AtNLjwwAyRPH1xrfHcYWRaNaRTGWLqNZ",
  "key22": "53qtwX24awCWeAKeMaXib9BTM1qTgPAFHmS4xzEL4Kg8Fy2ob4EYLz8v7vp3JXoB6nJzAiePj5ZHdgoP9ZBphyb7",
  "key23": "3baXp5uEsLmspYiWU31at9hR34taFBQb55wjg39AVjMAGrPCJv3kQeepwoBz4x6zLgGYHgt5crctRbH4omB6vQ9x",
  "key24": "27bv5LsNAyc7zv77XVUeY5ZkDHHUbYQ1g3WJYyYXPFRsU64PnwHhJzpBnvutDFUv1CpHvKA8mjHtqY4ZNs6MywnY",
  "key25": "29Za866biStAiKMc91fA3sbURC3LzoKfCHY7uYrW2u7yV2us1qFu4zbJg2DyCVYexTw8x71BXzVUukirGHzhSN2J",
  "key26": "4yzZVw7ouoSJGvfSKchayutSmUwJ9tLW1CL224M8ngy1YazknRXbNP9UH1iJ71m42teqNEp7aaFMwvEUN8CDWZdK",
  "key27": "4XgmHC1pCQuC7d4jgFxNqR5zNYHtVtvJoXu8WuDYRAW5oSQuD5dPoe2VoiiyzpEGFWphc4w9GBXpxMJCQhTsnjCn",
  "key28": "2dzhmEUCKHG8kR8ePHmj9qTbRA5eXYBEggHCYFXzUf64C6jhoEefg5mAd9Luw9Q4zw4wy7oDcYyQAdbQaTUsRVgf",
  "key29": "rCPqhtE6ABNHsSXD3UBFCUWrCnZGk9qaEk8KyYfFqXVPPQyFSZxtCgfftmWXxncYGevRHwkrLHNDjPiEwU64MH3",
  "key30": "3hBJsPgYjuXMqwjyckUVgMwCkqp2SdtdEBzZn5YZPWBgPGCf56gVgFbBiuprYxtVeaMW3tAJ7937PsRzoy8nMPPZ",
  "key31": "7bzhQhiJ6KpbTnrr39mL87XG6H2QxVj4Hzwsn1xJHUKzPpcCBCmpgnhAXmtuJWa7H1pMsQNGBzLiXBsrAcLst4q",
  "key32": "3YuhLKBKNqRbZaA5SKDthfsCm3AEUHKVo2oPGpHtxoYZRsarGJBo1o8EUNfaeMs9ja8sTne2jK1q1F1F4x6BcuFu",
  "key33": "4PYjh5Nx52eWCZbeZu3eNnF29U9tuTv89btFcJbadtyTnHxiMbghbtMTyAd7w6CZsPbYTcbCzRoxmMJJSv6QuzkS",
  "key34": "5Fisc9FWyDGEKA1QdnL7dPNmAAUQooNY22KyQw4RXct1HMKkDV9m7KKfmnyMFBkatrGKkgkE8qTTiBU38ArSbyqP",
  "key35": "bQNkit9bZ4BhsUDt7y9DjajkzwiiZaD7j13kQuSAdHGvFABxd3zrRJPF6TLXrZ2zRp7RaXUK3o6Uk5UPTvTh9Vc",
  "key36": "JLtMcLSmKC6E9d5YdN8LaZLxaUufj8eH2ywy3s7qZF3wEQfCmtVtAER2cZnDnFXgxb4yLNPko3HmNiYK2UYe8kz",
  "key37": "5B2BpF68ZjBDbQ2t837ZoNVRK7QqR2hVhfPMecq22nm6eM4gbHosbYjiKogK9GfowYuEELzMfRA8ZtRp5qA941Wd",
  "key38": "245pAQg7WQVV86WMqv8FRft3dfNA6d3WPpAbEBeGgEKCwNURzvADnVwihidH4Vhvsu7WSbHvinh5CSkHqVGicT4U",
  "key39": "2byMZ69rVsqA57qp5AcNRDdF5kcdRh1tHetBgE4zCoQ1QepAd5Vvvd7fyajqQxhvFd9Cc9135yjm5Xbk8vJo4J6n",
  "key40": "N41nC8UbQMeYPDpnrt3eDjsidA91m31XuHwy4VCzZNzCBdePHmfz4GK96rae7T5NbfvTM74LNnimxVfno3S87ai"
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
