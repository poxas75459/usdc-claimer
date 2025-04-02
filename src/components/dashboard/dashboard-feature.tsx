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
    "5xPKv8eyxiiHUNm9Zy9cdZXCAbzfaSGFaYbzncVd8HxF6UiDhBsSLzTv783hgdDMriNSznMa3qJpgcVKYSbeGMT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DKdGr5FbqLjUWDUviuZQDFtdKFqKUJ6Bcx98mfZQv8hdQQo6avTWUeb48PpHJQNcbENGYtuYxkKUHn8XizCMCKX",
  "key1": "iKbEFPxk6AcbyvyBuBG6BQtXoodRASVgADdN3k5BrU65SJfM2KHVSzPPCDJ7bFJVFUcmiRYdb16TcnkwqV9D53g",
  "key2": "4pSNJ1kVmpXGDzsgHsGF332DSyMTa1WfLQA59iPGEUNU87CUtLgLgdVKzg1ztu2eTpmwbqPKvqUumr2BweMftPkv",
  "key3": "B295vLeAdv6gXG7YQuF7NVckLnKeeqomHZyJE7eh6y7GyPWDejAt9Z8mYw2HhkbqozHBJpDmNNicMqHpFSqr4dW",
  "key4": "3cQifSbxcL3eDWbKriWXEaceignGWH7qcz1Bxs6bjf6xzw9cJoyhFzrDBvWno22MKyL142CjsSAjDUeCd6cUGhap",
  "key5": "2nUna87dcGrJcuupeGAXtfSysbkQRwcwdQy3AZk2ebzHugCLLpsHKtQc1gBmqGHEaT5dQwJdNU9kda1Wkfko8EQA",
  "key6": "3swYyHBskBq7HnQUUJuMBLXnTxU2bzMfydpTDh2Kjw3VWgQbEBSbSQVkh3ZT31x3F9LDwdaufrGn87uBMznUXK86",
  "key7": "5d4cX3sMBPnk4skL2bGsobBrJXGz19w3BNSwV2ujcb3bWruZsrdnq8dfpDduDubhHuL97hVMu7DHbxZCFay2HTyt",
  "key8": "5MpdA883pjiZ6AvgNXGDHPfSB6dDA543ZNTuZocnXDJy2dG7H2rgaAjDM4SeA3xBy4iZeGQ7ekaWfeErvpvhxbJY",
  "key9": "3Z7qXEStGKx4F4gfwa44U6Xzg2iQ3EkuxmsLsA153bx5m1z3LZCkqYCmdQukF1Fv4ZsWMitKVtBABJGj22j3Vqb7",
  "key10": "3Xdr51mAyWKhe5RUwnSc9wTemhE6FVYJZkxUe3R6fkAsdAhKjptWEU3pbUj1T1r1uc88DfwWqwQ4f15e7n1u3eo2",
  "key11": "5C1Co8jb15nicnoXwR56c5ujSvCF7myg6yDKDfP8ACQDsDwTD54R3UM69T4wfeJF9d46g9qVKXhxJ18AHAWqnXKj",
  "key12": "5PfSJdBjzyRQ6FEZiqTAfxLYcpfJvJT8gDuVw1Xq7Mc6N4jtrQR3jKtiY3SoTKKnYmdgsLqy61QZRDHoftFB4oGy",
  "key13": "58xP7upq5hXj7Z51GWq3R8BdBZiqkSPEMzcrepkUiBHLBXJX8Aum46BNi8JBhWpocn5SMPkSfHt9Gdfx296Dgvoh",
  "key14": "5jMfMUgUYzFUVghZ5wBPRX5cGGQ3uq8Qjb8TZHqH9ifEtY6gi9JiSYitycxNsMpLK84CXTgUKob5xG1hv861Najb",
  "key15": "3mXzpCmE9cr39aAgrvnZM1v7tj6b6vkCQKLhsYTh6nCrdNq2s3XMusA2TMwDm7NwzqD6ZzxM3EMgxMSqULLr6GKc",
  "key16": "5hCAbTXcwsdwbyRicn22cgVLhLRy1hXRPxhBCZJE7UnEgGavNeHF55U2KuR9gH6kMrvZbjCFBCZ52ki8rWMvhjCK",
  "key17": "4YQwXGCVz6VxZU6tE8wR8gNWE3FkjBrk2P4mzZmpeD13mMqqWm5x5ZR869Gd1eRViArT73S5cye6gTxLnxNEJtPL",
  "key18": "5GzDuKSna73qsskGD5UxC7qJ6PuskDjxD2QtQ9zTMNCMQgEgLYZXSF3q1rPBQEoR2HP7G2JWBZSPX1V6nyyLLqPA",
  "key19": "5iXwNYfBG2LLZpF3dhWxcSoGAiDTR2LzZMuCbpjSG5srB3FU6CY7fixVaeiDpn6gCiGCLDmoxCsK4LYAEdKMzt1P",
  "key20": "2QKxcm65dzjTk3Xf9c75vZhqWJbEqgia3XwFmJJa78wJzzNYw1L3JxaFtG99YUQ4HjWLpgJTn4sVZgsMGVEVgh8F",
  "key21": "NLjp498F47gupuhJVzsCXkep1tSPJG5oNMPjTnseJcsf5bh1puR2XcY4nYQSiVZRzABZ8QbUpk7MFcYLDGyUkS3",
  "key22": "3B4TPmDTb2PZQSPFcsiCe2qyFYdaEfW58zixR2WG8bPzVaKwaEQm3Gis1bXSVAsmowATZkyV1QH52E7JPBFWmACz",
  "key23": "GRjq91A7WDoMFDrtwDcdBNzysJsrrD8XWNeqbRhiSoFQkNuENoiSVbQ838Csm3aMNaD1qxsHPAYdggPi5wL4omu",
  "key24": "5iZct3LCdSS3fx8E7B9r9bjNWNiRAi7EEjXukQC6coF1GMYj9CpijxFvPiAGcMm8v2v9M7sVk8Uf7c6cfiPvYjwG",
  "key25": "QshzWuaGWVdsryB3Vnc26avxuT1i4i4NbXU4MXCvaur8BDnNSebMGmZxh6LEABXesB2HGPrnYTAfJnabTs54nuW",
  "key26": "2GsWMtjvF5rPbjoZAK4rG7zaJxikDdDicNYyYmFHkT6YdE9GtxBNw41ydTfjcyZP8Ave84LFJftcghoXz7Ks5ESN"
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
