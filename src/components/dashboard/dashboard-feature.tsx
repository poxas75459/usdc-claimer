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
    "5q3dd77bReSUtcR2NKz4g8F4eqRY3KvWvP7bT93s9XBBWcTDvg4TXaTkX66g5fqdyDuyhy7RLPdbFx2WpSHsqHom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vKm3r8GGJrwwnF2hX3zkwpqLyVqoQc7XetSAYPxRVPAjKEJsGrbvJ1HgWTYiitLL75jRLpud5WgSqi2tcqd47Rm",
  "key1": "KNZLDg8GXAJQaxLd5z99XhKnsQ1k3yM6mGKZVsCiWmWxybX75BxFVqbHK147aWAkuERjoJkSTvQyYBneNhTD7XQ",
  "key2": "5qvhi42axvWGVREU7ZzUMzdHR9faYDkEf6FmTfUasPS3jDba7rVtQ3anUGRyMCnk74tAGw6kTi3F9wcx5WB9DJJz",
  "key3": "5vmZ2mPk3pcEeLw7sr111eQny9YFKWSkjL9485MiFp9eJ7Vip8akJUfyDjaNC1WfJqbPG3LsTdTD8wcCJdPTm13w",
  "key4": "4FkauQ1rZEVmpq5iyVsM4EmcEv5b6QgevfpwxnX9Yrn7hwS8nVyXUnQsoMGVLobYPb3dEv1Erc4UgjRSC1Gdy9b8",
  "key5": "3aAf3LSWzcZ9U1gvCzpFTwFw6iSSZ5SM7BTYhA6fvFb2cKFr12mNMoYFBsxrtcQTY9n4mHAz3mmWPVXWmkJgnChE",
  "key6": "5ddq3afwpJqnwAqfpHYThvshaHXjmT3ti2aJg2LgB8NumRsgvPD1uUUfajvXSfbb7Lsu6vbfd5QANUkLaC55XbzU",
  "key7": "5Rfd89Rk7oHdHM34GjwuUnbkXNVSBZS514ByMTbhRircoguvEonKeYPa3bzjvrYKVnVfkpmCHWs4NmsCWS9Mx91Z",
  "key8": "qyqwUwyZYPbTyJ1Lo2Edga9juESzRGFvCYaZ7X9xKFgYhH8d32jrz7ygJqkMSDCFZG8iEGfUvh9ekVXsDMYfcrp",
  "key9": "4YRk5potHQpkZktLMYDBwLcpnvuAtv7vLa2jcPrqQZM26ogpEGSgzrAdZH15nEBTi5r82iBtR4nUqM1RZWCvcrH4",
  "key10": "216oriX8YjxYVq6pR3BBqdBfGpCMQ46sDRwA9vJhFS3ChDS4dkACw56rucAmkJ1ThzdW5QZfTctYhaGdaPc24zKP",
  "key11": "3F8aAt2NFtecAdyud8UisV2AgdR1vkRz8f4idbMS82GyP76Ha9NJZz4fo1YsvEeAXdkoRDPwjaUFYw27Yxbxrtvx",
  "key12": "4Vtwdm5jE79rtHnP9VmvWB63hqfadPCYhrprnrK2nCZpVu4RfQKovZUVCbrKAfA3QJ2LBoXdBZ3Q5VhTogQjuJwr",
  "key13": "4xhfdrwNn5AMDTE3oepSBizJQeRAKEYcxq7BszxqwW6aqPuY8qnbg76JDnwgewDSXRR2jKqD6VK8bfo1Qkv2Xgg9",
  "key14": "22dPRLwK9u7FUHWtRHZAVQNwBZdEVr86pQcU41d9BbDMmfcNEfTnoL94LsaTW6kaZe2pjurtEdCDLmYjyPtL8jMT",
  "key15": "2EHgihcef2GV7aQsHcbXreBwqrHSWznWwKCFWoJCatumCF78y7gAGJuNLC4K5amqEgKAWvXWwa7frxEUfGn7YawB",
  "key16": "4j7gotunm6xRMVSa5zYbFkQzRc6mqjtaFpixVyjNg2a1wtY7WB2msXJweZSkUTjSGb38HoLvLy6GTwPf4x6z5ckh",
  "key17": "3bq5PXAPWdAtypfidfmdPN4jsfuJQNBj2eHYfmy35xMHCabdM955sWn9V3rR9DMmhvHjYmdRNwSCt64PC8U38mAc",
  "key18": "47wtxMZpXCFjQn8G6nX1RkXUQzbPzNSzX8SVMwGzqVcdRpG6zcfWu44FbP8bjSiqHng73aantsJLgu7QBsJ8CqLV",
  "key19": "h36Gncm2Vsti91BVBHwk8QrPCXZgDBSFmnF1eQ1ySTu75esVmPKTHcxXGqN3VZKX3tnz32SLv1ACzFq9Yxopss2",
  "key20": "2ZVBFfEDZpo1xNKenjSPXpPNBXXwxqSD9smc8eyWShwRtRV1cnNf3nrKjH83mZDFftGcahqTaDM8zphScT12AL3C",
  "key21": "3svZ3zzp9n6dBkaQNnzJRBzxaKxx7Ezju1iSuvGR4jRJrqxSndFZfH9yEtLPMiYSWermsJDHkv5LYGbHuf9b5txd",
  "key22": "37ys3zB2wMx1o7a3QTg3hWgDwNfmhavtiCrt9QcrveRekjx5wcorpD62kvNB8XFcAriAGaAGFcJMqtBtjapt9UcQ",
  "key23": "43tXqK5e37cwjnAkkZxxVMscTLtN4T4AUHpahpp4XeZVFMHEAmPpA294KXZJA7nUZdMPNqM3Avnp2mM69cdQ5Je7",
  "key24": "HxdhsECoxNAYwLM4ZdsLoxmiaEcmqdMLwgVngDzD6KCEMadXZE8oXjNS4khy6vDw6zaU4T6SCsY8nj229RKxXc5",
  "key25": "3G1EDudNEGzXoBmNW94bukfyEL7BS5SXXuBThr51Ddz1eszLZDZTVSMQrTyS9xNtaoAzAuEKm5UYJFZcqpYgkCwa",
  "key26": "tABNoHXeAQy7HexuZDG5YEuoCvpFqYcisKgNM7xicHC6GEXYJ4Re2kWksPwtoAzaT1ateyiFfK4GoEAaShMPhjz",
  "key27": "356MexCjnHKrFhtvA4b9sG34iYqgv3Bf9W9r6ptRUFcLwVMkRnqd1bo1YD3dMWGsaUAbi24oBEnVrj9KqFHmPAGx",
  "key28": "3W3fPAwy7kAcZZGWHn3nEk4uVFinby22XPQWQpKvrucwLXcQdaprh3KP1Ft7Tx5PpgcbPnR5ZpGmWfGz2aUztttb",
  "key29": "2HRcuacMtvkDLY1R2eAauQLLREVCrAP5tvcM9nt8uAzMxiU4LThRqcU8nUWa3ArKhruqRVmyf53ocj1P8dgJ17Xg",
  "key30": "5sj5SKyeohfi7yp78wbZyRPFSbHsGwA3f7aADEEHEeAxYzJoFjqdrdxFcCBjWDcxEvDue5sKgWpxKbJkLxs7VjU",
  "key31": "3rKWaQh2jCq2RRwWZRZUFVZZtAUptLcU4goCc9xc4moHVa1wBBQBfStAVdqHminMUqr3yvfvwmzhcAx5hi8jxzk1",
  "key32": "Em9rEDJiicme7T5ogQ89EdcDBKCpd1UznXwgDQaS9UC5BTfc7ypAUPqmsLFoKubVYyqiQqaoVBKC96oFG9jC9nY",
  "key33": "5diKsyhcKEneY3kKcFXrs9A2QBdoS7pjYnkt9c4Qns5hG7tZLd7jo17MVojXCyySyaNeD5RM8NdN6kSNtWtCP8si",
  "key34": "63579XYVLTMfc3okC5vUEFr8JTccjVnT6qg2kutR2GxhW6RWgxheoLLbMSSbnVipHeJ1UYZ1ptJ1YjqWzGRmbWC5",
  "key35": "2pDPn6v8vLKvV71XPNggKRLgmup5MGs9A7XuLLvZLPFsMn7v6c67f5tWyAayVKW6h4P2U31ZnUivE7Bum4vugAM",
  "key36": "41oChZFSYvxFKEY5P4trjtS7nDQbLGhyNe7t1Fc8c1qB8mgBNpafjZPggpCL3iPEdqj2unKJKhsrrYzCKtVqXGdp",
  "key37": "5NVeBUQhRgSTEYiRQ7SEGsUTsyFbF98CA3HqgHcu1Gt5jZRZVW6G5qu5xfs6xFmmp3FDG6DevafNMzuaLS7joPJ3",
  "key38": "4pfHD8tR7TiDjHkWiUxcuFbknoXza7k1JdWxaSQXhYDXAkTE1WHQutUAeDXqB6aHjaHVbzNdDbRE7TQXtazvewA2",
  "key39": "5PBHv3jG9jZyHrtspw7nfMaChTj2F17eH6YfaayTLXR7rK1HJUpN2x5qz46QCpPwFrXC9Y8j4HaQtXZb3baMLQkh",
  "key40": "338nkdoo1S8uRxGHhNVMMEY8W3U6t6qSD82e6TGF2xTJnGUW8bsqsQfxYspD8yUspE6KQnD4EtTxzQvuPjqgdZVV",
  "key41": "3sGAd4WCgNaVMrX4Ug3C6Td9MWH8ktZZPvDM5Yb4eXw4DDGT8sjSv7wFSSy1GTbg4phDwRcCbBYa9yrdWQeUc1eb",
  "key42": "29eGrA4cFSaPER71ZAYg6YxA29iBuUGDseH2uVwPQPvMoMvjoQY1DqDyz6UhBYeke47xHNB26DF2GhMzNM7ES1zR",
  "key43": "44NNCdVjBGq3zR3NVtx943WUKbcjFmVDZqD1MsHGEDEWHPjc1NprNsz2Ronu8advRPX2MNjgS3Sk7nCUE1zAmx23",
  "key44": "2yozfjqXcA3naQaeh4qgvc5XW6etWDGWupRphacRW6pPr6GADjKdkVSuJohfTYhpyQJcfjg9rPTpdrfTGUf2FUbi"
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
