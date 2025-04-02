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
    "2ssWS5RPtGzEjWXtwUzSMA5f5QYwc5do4VYHwwKZKZU6dFh2fjZ5Uj4aZxiqzeHrqWkqrfDdnSoqz26HqdTUwSya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34HWTeE7CPzZoWGAq5VWr7VY3snmdoU8iFj8oDC42VDwb5vnfc7C8B5qTyf7WAj8RSrZHpimxwixbC5sYweyudNT",
  "key1": "4ivwcfpacJyBckQhJZ5P96RHbB8eF24VnjfEKTapVmW7NQndBz2rUzRpfxsT82GxWnEjQCb7XW3Xo7z1xJ5Jz3gx",
  "key2": "2EBJ6dNNkU8tmYvfAdWGNbno6WCRtkxPLq4uBhrb9uQmzESuf9M3HLpcvbLEHNAakxvsXiR7t9YgARRpHnZsjTLb",
  "key3": "5Z7yMNJkH3AjeNWxzc3oZn11yKSrjr9r5WVK2FUr1duH2z8GprjYvk9fn4CPrtKgex1RLqDazeoM4XmDA1q7XsSf",
  "key4": "3pXdHQZG3xiUF6PPj66BAqF7SVQdGXyTbKJdwaJen3ytJsH9HaYfGCPpQA4v9Z9Yjda32iJYTkFfGTBSHJT1wtoz",
  "key5": "3peCWHxF1N7ZEvnw1pL2qMXUrq3fxxxw3Y8ATCMJFmasPxLoXTGdroMNYWBMcW1A4nLXxBec5jASSPzPjrkRi7AV",
  "key6": "5RZPqNQVeTBKndcRtxixyZvFw4UVCji8dAQbqsEN3467nthC15HcQbi3VvCnJQ5uJK4AhK2jTdodkvUyffV1Zoh1",
  "key7": "4S3YJPekuaKtvRAFfqUmo7J9dJmwMSftTMzGjd2GqBDxdMUF6AyiZW5sxyvVfq2Vv6qbr32U7nk3QnuvT95vCuvE",
  "key8": "q6KubpkFxSXVA1K2z5A4xGRzaFaCHc2eFTfhL8oNTMLQtXdmd2kjRCzVyXVcWxLKnbomXJRb4QRZaRussk5g1kW",
  "key9": "2AFejXi7xWVZ2CjLR4n9T4gq5F57EM3DrzvpFrPdDRxPz4AZC63UE7gjtUT9T8baEpW8UTze6HHWmziD3sj8F5B6",
  "key10": "2H5qZ6q8jfSU5CuC3VfJn9ufs5i5o4E2BM4issxq7S3dkXbxedKuRmynZW8qbLp7GZiZg2VBy12n66R9nxz7ySbS",
  "key11": "5YQ69DvirMXfz52bNHn4cEUJP3WNvZrncrQavBmUpEhhm9f3jeCRQFFYe67Loz4oJvPP4HZDo46pt8sTgn41sQGi",
  "key12": "5KX1zkxaXjR6brdY8YP7KLrnKJ8ohtYR6YSJxC4SHhf1373o7wujHmEWWc3mXPe58jKgw7fCUcmT8dEZoSZ3wo2k",
  "key13": "4EaNVgEEdePSfCLQdoaKP1x2RJK5qrsqQJd3u7pNf8aAkGZB6TQFVDG1C798Casc3UkRivDDn97qrnJyxFHJhQSH",
  "key14": "EeK9cMsoGPet2e6k7cK3o4UzqbkziiCGsAF5XqW7NMaSumK7y9aejiE4ji5xNNDH1j2ezx8PffaJAY3yfxL6prr",
  "key15": "5wpTFgYzfGepyiAYrXpzgVfychbXWn4nYqKBRqhuj68Bey6ZUV4cLBrwDuAZhdTPZtCB3xUECCmNYPmtdYT93ZkS",
  "key16": "jtyGxS3DxCLXmzpzwc3hpzfQLWpqU6sGN6dTQgXTvo1mJKKwHXshNiAq8jr2HbBVpf7dh4RyhovS1xwuQr2yQ1M",
  "key17": "59doaTLyhs4zsLzZqEdqYBPn4qQsiD9ZSvrjzURngxU9ZsTSKriDcg6MJWAUukv2jfpSA1FYHQxSVQYHDdX95Kix",
  "key18": "2ZHbRsqNfng5zY5SzqeirvTXQs5oWp36LbAbeUBpAfipaS9igr8wmySBPSBiYr5THfufLNvboG7roMxTTaNEtK7d",
  "key19": "5rr8s2u9aWW9wZT9oMpen6Jsi26yMbW1G5HPBcWjpLvNLLDW9ePDCDypVjwV33UGhT9aMHJkqqhueehiXA3W7MsJ",
  "key20": "2iyXLJ8Hh6BCr4PgnB9UDyeSuEpH1MaST1Xr2F4V91e7KQupcERzhpa68JTbfEe65L6SxMqds1zDmSahciXhWs6M",
  "key21": "wAckxzekUytYDgcTQGRoWZPpHKV6775K9vW3wCQNwCL4d1MNToDYeyevL3rMnfTfsTcmRK5kDJew2uiVpUFekpj",
  "key22": "1PXZ23hHL8xuZdcSZB43bCUhjB7prmqoqADAJt1NsgXVhwz7MU97edygjf198TgTNH4rMUamFKQtTz5EwgiD38v",
  "key23": "2mWoX6EWMMns4ZSGnhF7Uw8A5tzrcyVX6YDNzr4y1ArACoJzMARXRHpy7Cz72Pcs98s7pyQ584Pf3GuGZt7QUwX2",
  "key24": "mDRuDQz2uSrGA9c6NnTLkd6y7GuLZHRYh1VJmf26BS5z3xnG1hWq2YpJC1hguycFHgmtBJRDGT8KJmu6Ssarp5o",
  "key25": "5FsxtgDoSgoCizJwvpyGVb9WnkEwWJHeekhhC6ABeZ4m3iWqFR4MkoXHJzW7w2xTRfjwiQDmTUM5ot9wSeADx9Q6",
  "key26": "2kmBmpgVQ9L1oKK27APt5DPDY7hX4rSLPqKiANuXoPhAeScit7n28W6oaHTUKuGW1YCHZf7a9XSgPeqV851zhTwy",
  "key27": "2E8RrXZZSwWFr9smjpTAe4UCqRBqNEvcv2APUiPrTmFWEkeJ7Be7F61Ldwa18MwLnQJcfVv7JtJDeTmpwLrkVybo",
  "key28": "3Hq4Y6ebc7fshjUfQomB7x4BpdYRAotTFpJUPVnRmfzFkRdxXsTxzogHfM3JQPwnVQ1qGpt3DEKzE38DyAfu2uTY",
  "key29": "4Bgv93pbsh9k7UA1jo2epA4i7jkBePcTGbj6rW4ckEhCTojnXa2eAoSu91QxXwbgr2UjEEWNqAGmp47FMyu6S9V9",
  "key30": "WmZEj1ZsHY2PvBqErYrmwUuvReqEEochbVgM3WfLhM4EmUtLjiCD1vAnjZ5xPGfgvbb48BuWDZoQxBAEB7SPYao",
  "key31": "3i8nwQd6HbZH8FF5q45C5v7DAYJm61KPaEDnEE2P3zujRkfoQhemzTTEDAzK3pRDNg1Pg4YFgkf5XzpPnJ1dz4mB",
  "key32": "3XmovenYMVYrXd6G8qrBcHx4zApxh11Kn3ThKuVDbMEJniU9VFAg37tjqy8GxktYxBEiDdMCzzc4oLM8xtaGTuQQ"
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
