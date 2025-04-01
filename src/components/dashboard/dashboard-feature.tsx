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
    "6FbzwZeFnPn3CETeWN1GchcbYmb1nTopmFud62MYiXRic91fqFPDSaYgKFgKPdwCzBU4dAYicuRGrjyH5ErvU2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WMMRxZsbviYNKgb7K6hbHdvEroFenALP9E1yQ451QuEZA8ep5fiMnStwzdqDmdy8YgwML7dVmLVXLaT7yN49Tzj",
  "key1": "Mw2E9HpSd22NChjP1HpP8McHtfcGQATRe1t8tV87QPWaTsmZuegdCVt2gauwQGCRN6Fvn1bfZjSyUiRCvBx9ofZ",
  "key2": "2SpATnTHQqhaYSneDMAaJa44tpe3Z7C53qGCihT6NrLFWPxTRSiuBt4EP7Fg6b45kKgwhniYauyZJ2i19pi6geMZ",
  "key3": "5GHsCVR8XpvMZCuynemkHu8uSFiBzsTmZ7QG9mgjyGwKGu71GqZbr6G6pfLCbznstDhuz9iELM7eYCAcrCd6PKcg",
  "key4": "4GH2WKvbnqTKRVQzcaeoy2FATjZQFEKZQ2idb7HnbjTCYxzXKDQyAp7CqH7ksWqSJ9RqqQJd1coyVRKioDFu5hqQ",
  "key5": "bvEDRcudRr86rRuiXrDHevZx2GA4gdSiKduLk6xKcA3xfY94XRwRfbGd8xUqQPqacDeWxuPUKwQiwX5JyGSRhSp",
  "key6": "3yrgwpFFBWiTsMLbgJqfJL5mJ8DUHqmS8Axrcan6DEhHDtKibnhW9o7wKVj4GCrimoVhkd7xZBZ4ivQtTSA9ggsE",
  "key7": "2pzhvGf8SJSjMKg7cqvzVjujXp5HJd6gstgipMgV9wXceJnwhP1f74jde17u5QubF1Zo1ZMypqFdG57K31h1gj7D",
  "key8": "3QdDGHpqUthq5D23yFXgFBp5r9359gGYt9fmQP6tboU6HrSCc2k7CF6i5r9CLu5qZjLQLwNCt9xCmgfQMxpRBs34",
  "key9": "3kUK429GSHFEwxtbijMDR5bQr6DWqjjVn8UrsnofpodJZ1Ed2f8mkwdx2ZRYLaKwN5YRnJsHMzFRU5Y7mxWUj9ey",
  "key10": "3uzpByg4YofdyVz2AJEfqZWfZDJLNGhYqddFbm1fw4XGBCtVDBeRtWjhjv1dqXUZKLnknCPvt6LDowMyCNUqPGuA",
  "key11": "wKpctmGER5tJCFoLbN1NvXNZKAU7PCJpfz8Lsjbs19d6ZGjNtNBBdLTWBJzFZeJhE89pdvcck4WC8GojKToxr7Q",
  "key12": "asWo85RJtjnxgXZzzqZe1bmNHa1EyZ7XEAnj1J6s7eetK5LKLtcmRDQSqnVWmuMFGHKCsRMM9oYMUsssmJUyqao",
  "key13": "3uWa8pHN6zCEmnQU6WEBYzsDbnc2vh7WZdAXEYdzBb4GrnPWZ3FrTVV4upH6qAhzM77Z13eBgHAFQyYfoYSgw3AH",
  "key14": "2K7QLoH9obkRvhDg9kGWsSLczfHB8YgAVjxt9XwiGRz72C4YYahfUN6cZQukhj35zzhjvDxhjZziEKDzkQy4QFFf",
  "key15": "PBkD6DXySqh37Up1QtVs7svcdVGmXNaZfYmWJmxncUjZ7mXsGRd9MZ9wmYJpGRJM2s9BWxkkiKcxS9THj1J6zew",
  "key16": "5ZBARYdY2V7DH5W3cFHJ4VZQjWbczCd8SdeYTUbFZhZDm35Jyo8U8sNb8AvhooJd63scDxkR88J6nUVcUBS62dKa",
  "key17": "4C1hLP6wCfPMYnrJgb533FFbagcvnkzST5zXJkAkXNYEG5J1QWKkXP7wuVnVaguNspqEQ8EMftzDbMSdgYGczSW6",
  "key18": "3dRgnRsmNyrybmmkj7fyQeE3uB23zviREvnWpC8NzxJGQNKPgFguuSKzWP1NM18HmbtB1QJGNjMTqzS18Hqz8AKu",
  "key19": "2ar3qWPJMG8Wus2APXLptkML2bigvASmJEuHkrHNYyH3qDT61MAA5msuaq3DCmnrKbSsVcjWJykE6ThqXrEGrRoY",
  "key20": "5aYrqfNTU98xQKbKxZHk2Cmi7MhR8dGgdTtMjQsvEtVQ8dK8NGoJ5TJoxkbLd7NDJBV6wD241dhkPzP7g3927Pha",
  "key21": "5Bryxmm2sewzSooQvDqcwWER2SAXjk3Ac5FqhbpuaA5kRA8ZJ2DNLeYULp64YhXEEjVJYFUxjVXeGDVaLVvFNPH6",
  "key22": "2XLVM53hS5PGxz63TEFczA2FEP2dofUJJe6ZmWw1aet5DkxHDtkma9wtsGKEvKYHwCmBn8VzdBDG9qhrsa7ZxgjV",
  "key23": "57L1ta1u7Wmy4Daihh5UBDYNX8Z9G2BYMECcd6bL3SgvEsajJGaKQ44ZgzA7noxJhqrxAkcn8AjLWfFsQD1ovw7n",
  "key24": "4iskqs3HS4D4nqT5hPidvFD2DcoEVDARvoafameQJZgwPYEvrjxiXBXCGcYUvdERcQNuTJv35oihmrXhmeaqi3hg",
  "key25": "2c68z5G7ZxBiSEtSwJNaWSJLJUv1SEQFgLiDeyhqqQ54hkEKMcuBnsmueTYZ1poaTY5YQ3dLpMidEKD9UTJKoPaZ",
  "key26": "vfnghunVAcGMeLow9ntJeJwh22P9yF7RUjTS355uwRa8EFGX5knPF7Tvckdw6C86diCfNLPCPpuM9PphYErtDAA",
  "key27": "31VqwVUxZGWYmepWG6EiH213Ayrwz2hpLFZZqsKcFcTiHDBcsg7zQdbNYCtj7jgSzBddApYmFw76VorZcThB4YPr",
  "key28": "MQMRQtNSWUGPa8d3vk8iHrbuJUBm2pof1KkJfhVduWofgH1uytxY66oZLR8n94ggJPg7y8mXGVxmMygnDibjFMD",
  "key29": "2n2ZTTXdbcYEZJf8QotgtPgSxHt36AL8zg2PVrp9Z1QifZ3Gyd3aKhmLkKrSHqLyvG9fjFQ8LNoJv8szNZXWYNhj",
  "key30": "3oDgWDpLovUAuG4KxnjwrHjd2BsmX4TUZhrAjSejgutrdnYwmTACy8rNL3n1gHAeArcxD4Sg8nhxjRMeV4aQT5Pz",
  "key31": "4ZCcxMyiACV2wquCKd2u8wDeKGceLSshdeAAnHTj8awsKRnECeuhFZTAF6GYcvL7rpdEEfHFxGT3k9QozVibNULe",
  "key32": "3Az5t65rdsuPS71Zx2sZRvP9Eq9WPEaGR38YqJvPaeJnhaBjZx5Ba69ecfyS2bfxWfjvbz4V8mBDNnDcfrmgLsub",
  "key33": "4MZLTSF5UHBYHzLngBctPfaa4svHycvNCyYh4VzEhcosWA9WyJjP38MhC5UpLvsBZuCmq4w2XBhMDDMZXN2Ko48J"
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
