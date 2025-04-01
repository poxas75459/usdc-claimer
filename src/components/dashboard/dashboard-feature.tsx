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
    "4bQk1YxW23MMuGtUCNezN9zbjfVbefNw3HeZpQdhRWwZuFB9DaZNsg6Dnnf4pqqKsCaJhaS5atjy5prmXUzKUEFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FY3bXQfgb9aNjMii3xEkTs5YrKmtR4Zuup685CiTUYbV3GKgYyvPU9yYeBJW1RYnzqoE4f9n9nz7JEaUZixwEzi",
  "key1": "5rFTDZc4UBFEAk4Fs5vtx7wzVDYuZ8TxAsx91HQmSL62o287HjguHy4GiWTUja3pqts6HcwfRTJpne8u6yidUZDn",
  "key2": "3qhtBQoM8m7gwwNnB9oJbYbKGxbypayWq4ie3XpvqfXVgR3dhGmkCeSGVp2NnZVuCqzXDx91DLXbXPsR69FbaEgC",
  "key3": "3VYRX3UJd5o9DP4Y762vYazkipyhah3vz7r5asunmoh1xmKcrUwmhMSEiCypArH5c7QhW6nK9LW3X7gqBK3FkFZT",
  "key4": "2He6yQVVcXcYSmwgVpSNJhbZMdYGNoCNbLqZSKQRjcNT6XGyw7DY2UND7bCEXz6bbDfopNLcFKCPTAwabCevcs64",
  "key5": "3a5DjvVg745krWA3tF8ssJuG3JYQSdc8oyvoWRU2ocgH2x1RmwWx4qzGwFB8xzGMPVKkbnFS9wQCe9gvJDKnoeNQ",
  "key6": "22pdfMSJmKbkoyUQRVxaLbnufS639HYYgyehuVf7bQ1YcUk1VXRHXuTsFP2Bpyv7LBZmhRz9NV1HtaMzBYJ1CH3h",
  "key7": "4uM7JudrsJ5YvBxATVnkhbMEyi2QFuUkWCqLX8GEWydQ3PPi1271L8jHVY2ufdp29iJDXvjaMw68QJZeGcsihy4B",
  "key8": "SdQLR765Fd2W8myoDDN8Kvm7zxYn6b4U2oTnqhuFEFmRKMfvxR9ZaEGxjthScjq67DoLmQ4Vvu7xkLrqsqj81K4",
  "key9": "3DFZBD8sJN4cN6C48Gp3SrPFozp6h4w1k4yHQRJKXXAuNwGzznDqe44iMmnqT2z5CfNEKeRJE7PVa9jq6nqbuEBX",
  "key10": "2495tvPNqaDMXXyvKZdgwRmQ9jx8Kkejz6z2CXzgyuk5e9rrZyKCStbJG9BFxg9FXDqK6zD8ZzeKKQuji2r4YhKT",
  "key11": "3EGHHxCLaHDmmpe2MKZ2PpHZW9S3qW3oYsZqc5f9V5ZRYFS6PNA1URd7c7PdhxKsRHnRe9hsShVw9a1LvJZJB8gE",
  "key12": "5V3sxK7JZcYYNthXe54YpYhZTgWqtdJpvtTCUTZVtpnuaWbBCQLzrvmnHNoSfgM3VfZKvRWvZa7s6o2cb69D9D9N",
  "key13": "52WfyGoFZ9YpqqQKvNCPWKVcaKGHbMtuKqeunvvZTfd6UMtZJ5ya9xsPT5hujHk8yqdiacTpudaYH4zPoJGRsXvn",
  "key14": "4ScffQc7wA2sUd5cXX3DHyTU1t39LFrfLkMhEYrhqSni5PCbwx3sJnebVry73HDN5HoSAaFa396iL7tUbVGXYnZU",
  "key15": "5P326xdFoNvGGiY141mBvHsisQEAaobSz4ATHcnwX9PmWgypbue286UnUgR7TCvd4mBkw5zpQPm8Qo95jeZath49",
  "key16": "4d9P9eUCjHkDoWNtNbyKKXpg1NkRsyBWmZBmhdAEbqjubHKajJnMh5MGAMW223PYL4J98W8gaLVMbBQdCfhpVGJj",
  "key17": "3xUvGA3Ra1qKNbZbRtsu6M1SMwoBUnY6Adt2LeNPhtwV8EG7L1KeSkmyzGLnzMgtZeK91MxRSJKJWrNjg2YYEN6n",
  "key18": "2XdUzuh3NzkGG9DGDVdTWYCpgDt7qjeSDLReo7fVBajG4ET1KqCrda1MNS9S8Bah9BAjt5RPhdJYBZpr6vx6xyBt",
  "key19": "gcqQPCdZK9XSRJNKUBQnkMoD1RFMS8bmfyLyn3gPRwciQoyGqSyUQcvDTDW2myZpyymjjeoh35au5AFheF9opPH",
  "key20": "4CCTAmtftpcWJoJjcUgmiv7JCdE28MqwaGz9bLNXimKp4kZ4AgLvztEjrjS4CgsXwJgsctvpTDkqLZUDDcMHebUL",
  "key21": "3LMPfoLm7b1eUCMyXzKiBTjTJL1cqXTYbtUDDu6qRHWbDR2TkwxgdJHtZC1aH1zhi71Ut7UDgRprTaPfXdqPFCY6",
  "key22": "5VcZx9dbkmj61D9XWyQ2uysUUxwe1zVTnjwBZ3iSE9cHGXP7v2ETrHuictqLv3tse1buF4JWNSy57bjyjL6YBFGe",
  "key23": "5kyXz47cpBC7RWuysiswxbZrMcjoYahU3TXBCWQf4nnn7NXrX4PJ6LzFJMbgK75NKtQ9KJGq7iJahxbSmLqfV694",
  "key24": "4uSYdVWh5qL6gCQ2pHRiZ7ztYiNEXU6fmBZUv5jzjCAY5pkcwVuLuMUyZJU1EbiA1Lv9xGGS7eRx63Ph8dXPyoRJ",
  "key25": "3Mc4gnKWUKetXbiSTvvetwe72zZTTY7M4sYg8UnzybMvRUGob1QeDbrBBfPQwpd9ru2ji4YTWvmnNQNNsxzUSKoU",
  "key26": "KYEuh4Ua4jasZMpuw9LCxwGXcKWHtxeK1YqJ82cE3rVvZNkSbwCK7RpEpenxQdTiaG1mmdRDFPi572KdX5Fs3AR",
  "key27": "2UKKbhBYiQ66vAQL5euozHCCd1G3TfN4r8xhugmTkcNrmvLPmDdcu6TJ8DntVgQ9tLT7t2pLmgmBxV7K6WBpBKnn",
  "key28": "5g61ArAUthouUCZa8DnSgUPzJD8PFWpma6tKsdei5FdxSzw7U7cpcWWdzxQi1ebsCW6FPgdBFsWwQNK3wfqhGLAB"
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
