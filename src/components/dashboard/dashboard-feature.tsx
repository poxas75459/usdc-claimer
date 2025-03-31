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
    "51WqCD3dgpaXFKhtfj3FQbfipfPyRAssfEewUWNxpqZbD3zWgqzEtoRMUihZyiUPhbb6hAhkjraCYicdovaLtCUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oRU4iGzUN6mAy2Q9UKcyoYrT49UPG6NnuawoMSD1ZYoFWz1DV7T9VnSJHn3WgPv6W29u8xSTWLezxGmeVcM1fv",
  "key1": "ALZiq9a9J3EtAkvNxWLsqqxiKFVCGqxsvqt9ppRACzHsKW9Hp7UyRyax4snepXoZrxXnmtPfigr5Hq4EiYhZAt5",
  "key2": "64Lb9qn8LZGwTzcN3dNXqwmLQUL4NR11pHez8B5wWGum3ydVLWeh1Yp2oB26X3ZAsANQ66RmRcDBEDPBzPVTGngf",
  "key3": "2a2stg5KYXkkSAq4Wi2FJAvBMFSoLiE9SXyrGoBQufb5yx6GHpFteXGWXuYy4qdETUAEYh1Sw8DwymYtV9KoJMYy",
  "key4": "4U41j1kL15oMDwF8CrZjWRHpaUZZ5Z6vM5DJ7EgyfLoc5gyNMxw5ByBSRpjiKx3EFGd3duXzD9kh21x5SqNjgaPo",
  "key5": "3wxceW1cPRa8tWobhwgx5FyHn2XTtbd39YxZu5gTMXYVsjgghT86aazg77Dn6qZdXyDf6omMjT9et5JN5a3k3Ky4",
  "key6": "4rKQTGbqtMPmFgaJfH6pRMsdYJdLC4hdN3obt6XF1wcHtsSuffWZ6h29GtpEkDgWqaN6t6s86iAuuv48W6EmXJeu",
  "key7": "29i9j6fpMhf4XsM8jUKxkNmE2iCYT7Se1ucZqujQ92DcjGs9TYEuy84MPCbVuQG3YdXR1z6LVWPnd19K9P9pwUGX",
  "key8": "4S2bawh1zqnBeE1tBUBNcwa1AxepRJU12rUavxvxp7QRaQ7P8FEynZNvbEfheiR65v71qNk3cUHpT7inpz9Xwov8",
  "key9": "CUSauq2YqCyhDqR3GpRXJ2rTtrzKgiMzWNUKanUBwpQqDCU7RdVcY8ZDBhLSuEsQ8D3pPrx8G1NxYqWDcPy98Mu",
  "key10": "NtDud4zoXQRmFpyfq1UTXPQkUS7WNxPUhYoGHMUcKxAVkGmcPcQyD15KxEpAZ29sQsV5msYhm8m9ZGAS9EJqS7k",
  "key11": "4N64PGaZ5nvXmC7mKqZY9wFNASPFhSWxq1axNzKVubdZboMATc6xajZaGDudMBrH5ZhoWcWfcANNZGoFGSUqYhsn",
  "key12": "S6N64VoxuPAvMAJF2sP2vAyoU8yNpdPAS9rZABz14Q8FT3ANJ6t7pcaWQTAiVfZRTrgogs4dq3hZkCpzgQoGQQk",
  "key13": "5VnGphsQDTLoyhUyndiNUZzWKP2FUF3rFuKWNn9HPVhvSF3Jtq3BEpppwWHZUfQnpTv9m4Sn2h4oKcdv8R174ikM",
  "key14": "5suvNEg7bMQp9deRgGsxAsCELMEnkgjjwtmsqDrTEw3LLNXfP6aZ47i2XmE9A7wDScCmav3A5Enk9Mvq5pQKysSY",
  "key15": "4TbbWvH2ctq6Hep6QzxPdoMpTv1aHpgo5Z7imAFEWBWJ94Kw5cj9pE1ECPizseD3L2XgZtVioNK6cPceL3T7ACRt",
  "key16": "5NdDhrQr7zyQh6hFWRE421zPSmPNkJPNrom9ExVFoYXTH5KbuGEWTRCUUrCRvsYWDkRkrUxUgd2Qqr7sEGBdrsYk",
  "key17": "4SFGRXvthpPCzwWgkPD9q4bSHy2yLuW67wBjE7qwtFhhykhEvhjpAk7YJkWxWrUAjGdyE4SFXAuH5DdULj1T5sh6",
  "key18": "274Z8AXwHwvERkHzvT259G2tyrc8jGTekM14vbnSLq7hY7kmfxXeRBVwXtzCj7wdgN3rfa4Gzhxirr8DxhGnXebY",
  "key19": "5W3tYUngsQ5w214BqAw8UANVZryLHipSm4ApVUZjbEVssZ3y7wzQDtxGXXgtY3otrXTggeKYCHgyGchJw3hBAWxJ",
  "key20": "2LGv6fCePGuo1LyYYoffgZMtLh7pHXfJERLaQPPUTGePuWUUnSr5rLLQu233Y6qsmNWuTPtzPcx2aQGiV5rHcHZY",
  "key21": "4jwo5pQWqUi9B7XGSKVgtqgyjArGFGZCj9b3WFuPFSydgwwG7Ld41MACfTP7S4vLZRqJZhPyumDjietxnxnhRFvX",
  "key22": "4HJmU61qEgqaZa7rb5DTsVc3oE1tgQKmj4wCthiFEmhQU6BJ4hauWJJzZFU5fi5kCmx8Zf49UtX1L65TDtooiydi",
  "key23": "31Es26Ut3Be8xiLxeaQv7D4KLmmNPJgxtqh6ca3MLJTxDriJQNLiCDrDVbxgRyAcCzPZGSqSxisoHrN4GUVHq7ue",
  "key24": "3zRad3DwD11e5eWH5rS7H4MyGghb2Mf8533fTKtzA1HBHKhUNqGp9vXfuSS5ZDp2VPjVaiXgMouxHZD7pwDWs5ZF"
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
