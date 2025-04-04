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
    "LRsyF4kqa49UiEBDBmS1NFw95aBaRZAceWV4rRfQoqaH68T35Z4RMYusmkV7hSEHhCXTpj7k8FBDaMJrG3skGdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F43hSfCwdPc1YRSFP8XRxvy8ihjTGSGZ5c2cCccEbZx24TVLvvhYG2ERyMgaSGkXsykkhDuhLy2ccZZf48GuAPF",
  "key1": "3EyTHMYHB318tJMi8WAaN3m1yc4sXbZQ1qVz4SFsCJ1jqe3EpPY6uz9pxZ4BtBDg9DKgNGaHEhGnyPauzp9XFQBT",
  "key2": "4YqxsNvhVakoNdXBHZj1rC2MqVhS7NkN7FoztZa7ZvZzdwQfwLBWpUEKBDAgvj9UMqupVEJf6QPpJsPqkmAGRedS",
  "key3": "3oXmZnh63GPe3rtvVCJkLVY7VbxgpM7upymBQS8qurLdMe9bVVeZfeHXxd3X3mcLmjWtZbB4mZ7aV8GUQBZmrSqK",
  "key4": "3BncSLzwUcWZxuZ6rsjJcQYQ1jBmJvhUUC2GVmdoDSRVzEeZDEpPYbLsWpCr1hRp1jjieM6PL7o2LSPgF8WpEcsz",
  "key5": "3NWVG915kzHB8YkaT7775EcpvtmAsUMnHJxUEzGBht3BT5bTh8Jn6ZSwb1DpCyQtnQG3se4Rdx3ma3B8g6t3TudK",
  "key6": "3etk6cSET4AzfuTMSGpsrw9B5kbMgePoDrMJtuDgY4UjzhoZkcXEH5mjF5T9idUM7zLswgZzKKnFUtHtxcpFq8Lz",
  "key7": "4rzAkKbGQWv4RDRZRr6n6hQCsbMCtEnzS3qWCKSKoHGPAd9TcqdXNyRcSuPnWUfh6mzoZofyUbdKAUxw1BVraYjy",
  "key8": "5ckJJkH6HiZ12aXKVvFmJfWtdBP4Zn9Mqe1adDQzcrggqucVLCWxW5BUB1psEGujzyvJ9ceGCH8KGtobS6BM32ep",
  "key9": "5FoKfBgmJZvAvDmJmD3zpkTsgLFhnfUCAJhdTTgBYNpyMwy5XJiiq4e3TzoboiDRmcR3EZJ1CtqvmmgMmQKM3G1t",
  "key10": "47WMJxFu78esxykAxdUVZkmvFbsifHrB8pKJaeUvp3bnkAmXbtGkFXmqajtEvLn1cPU9MhqJp2839GPefrqr5ckH",
  "key11": "5HRMKcnkVPtfebUL9QECXNHjocQqZn67b2xc9MAhSpgNu9gWKMMUA95ZaCYK8W84vxAFHYxh6XreuxVTVqE2Z8aF",
  "key12": "24P3vhaJHMaWTkFiyHAypzTnfLB9QBHD3TT49dWWkAz8PBNxdGMqrcSDMXsZSftRAgAXsUDdLD3wZQL4Ds13pJ99",
  "key13": "2Hd8LUqhy2n914xGWNTbbwr1GKiRJyeeYENL8zqUou2wXpPiD37Xm3hTiW8R85NMhg49M4Gn1DCWQkkZVCGvfaF4",
  "key14": "4TZDakujf44id3cE7q1ALAekMokhZEcUTP9ppSKj9svZnNiXMJNYbFQ7eT1hDsqYjMBQifDHbuQ8sKkq5T16i9fK",
  "key15": "4NoYkq8vqsxbdzUCxx8o77pxqDL8N8D2CwuJ1vsSM5nTai7k3tCUsXHZYNLuY8zBmFt5qZrZH7Gu1kyQaAL621MC",
  "key16": "21sxPCQd2dCNa5iQPtPS8hvd7NLtEpizA6PkWCtp8Mhmypfkv9dK1L2KErCe61QjBPFaCErs2xjw721FScKS4jhY",
  "key17": "4hsuG6Tfz8NrK8sN4phgMmws6bkPedmdSe1vrt4sB31VWq2YHepZsgBFTzPt1XPe3b1KQnkG8x5ZM6sMq1pr47Ao",
  "key18": "4kxW17uv7SWM49WbiUaMkMrjPVCTsQJ9WoW4ZRC7FmrzepecWZs1XinGJemVGBVRtuXGTs5tCuF31NMDguTgHWPP",
  "key19": "3C5BPBx5HJjd3QLcdF7wDuFEQYX32ZNKpvHABSp9VMrpoh7QW4KSazjxCjKwV7jbsGQ9p39bfYbxR7G2Qn112cMx",
  "key20": "3d7rkG4uBR5pSnbkeMS46uatEJ9BRfjG4swubv6up8H4nrGFsmo4vkfwsqZ333ZZJwCtbmp8y9Yw1bksid9QVSuc",
  "key21": "3zhXoeAEbS6zs7iL6TkG8J6jzytqV36HSsmQkDBSF89axbJSQBKYc2PHogHDcwqfuUmbA23wgq7jNCa6oe3q98Wu",
  "key22": "3xy7BMRC43Wm57pkmiykzgixfGiUdTY77p98eX47F4ZdcAo3kmja9PLiWk7CfHyVPeU1EWZZSvMjLaqmFNGEFuU3",
  "key23": "29PCCuKQPkKMhqUBm7FMhUTT41aKzFnhHCC8FEQui7Z4xXfv6oeeuZKKBRMDAD7H7WUPj1bVaGbN99DjS2anohuH",
  "key24": "52qyKvj3pyjLkoHmTtFaiNnBmFzpEv7ZEjKM6zH8eLxZWc3idmca98FoNd9xXWe7JbvbRg3YoxejzHRomNFqkM5T",
  "key25": "2rLYrpTsyUgTs5bVrwp6BeHjXMA18KkDM4Le94JCAe1dsyygPVi5fCNQ8oJQUfBXddCMXa7P8ZVeUvPXaSt9avmj",
  "key26": "3hsfGGk1XBEkKa2LpVk1NYM3Gj86mUJeTWagmCCNjfrspQgh6NvrRVAGpPA5Phybsn8Z2rxWmtypfXhYWHgGHs2W",
  "key27": "4ETeAW4ZxYxN95NRr34AdaEngtPkkx4h9Hb2vbRdu11vSb36vrkXmXj3uUTKAP6aN6m19xCTzopEC4ySM1hkAs3C",
  "key28": "2qBEDHJqKEfvdMG9y8LXn4GfhoUtwMqco1xM8pYpA7XJUsC4TLuj9UuqEbXaKQn3x7eueFYfGyWorE6gTAFB33hu",
  "key29": "3N2cH8FeQM2MzHbYK88xZXRfjTywZiLw4kJV3JSo8nCnU7w8xR3ELYnL1ngViSi4JbJyULUb4gwVN1ED9bJDb2DQ",
  "key30": "5wyf2AzTzB5e5b5D19B7MWR7LsC3d1EttX4hQXmQzaZRJoByyJKP7zfocMThuzE9W8FE39X8BBk6umTY9osBWe6J",
  "key31": "3nVfDziUQxvCpQTrWbnehAMgUiip6UPr1WRQitQ7F1t1BGo3CsfRebYj7UiYLNZ3fu2FYV6NgyDVkEm21uXYH9h",
  "key32": "3roKYvVgnd7sgYrMvXAx456NvZG9AVzJgzMh1MbhjFQtc1y6BMnmqE4pCLtSH31YDub7BF1NjHbWWvqZ6QXGNTqW",
  "key33": "4iK9i1bwaESuiJBhy5yJrWhbnNo4URMmL9Qb1xeVupBbNsrzgJymUoYgxt3ZQ3ct2nnoSjbM7yYgxrVX1691Xxur",
  "key34": "58LZ5aqHE1R4am7hZoenjYcm37TUksWkTPcSbMTLebMra8LGvGtHPm5kWGyyVTxkPBUGxKej33PaSz2caomB5V7f",
  "key35": "9EmMQGjgwagNjNLEkuuH3HPnvUto5MB4ZfYwQY17hXxZFeBqCy9U2vreNcvf8ppwpde58TupS5N8uZHQrBfWpvp",
  "key36": "MjLX9GxyiFtrSbDSMRiUifM5aAdgJKmAwpyUCiAruZyjGS23Z1tCjZGfFuSMhNmXjKgChpnYVbhqWXHg16CdxpT",
  "key37": "2qXbpS2pJjvj6z8i6HWRiVsLRBik9Uf7gsXPTjdjfzy5a13Au34bfmv9Cu5msXbiYdcoFRh16P6Wno81b8QygbLR",
  "key38": "mLeSrqFQQeFxagmcksEEYt6mBXKrU1gzXoFV1jK237WLC5VndjeSJXziEUnSJR2qNv1m3B6skttkfJApGPZTo16"
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
