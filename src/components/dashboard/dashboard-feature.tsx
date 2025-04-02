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
    "5FLDkAD6n9JYXamWMhksvbnk3Ts1rGRrteT2Z3tzEBVKsBGxGJAdjyaUR5pYvXeVZ2j1UQYRiA5igmJrxC74Qtuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZcXgLFk2PxWnAMFK3X77QNLbqeEVRWPqqEnYiNq7kdyoHbpkowLGgpkrDZu9GLKQDpWsgh93tuAk2Erc47a1GTG",
  "key1": "5ooouGtHtJ5zvMSFXVxHfiWvamhsFFC7srN4g2QsiEQNfZ9FVqzGkbBcDZy9gUm9DNfiggFApB3aprHa2GWvZsmz",
  "key2": "47R7TVH5JWgc4EmwsiwFxTXq415v6EVX2ngkq6h4dzGpUGePWpKLWmNDknTqt4UaNVCK2MPMdSHPuhyXWNxtZrDp",
  "key3": "4zgioyT8vkjqp5hy5nmHPygrQM9So1qVUoQbrDL6Swt9Mr6ybTafGW69Q6jVsZ2thtUNt5n1Rotjjzq5EFEw38ok",
  "key4": "5u27UWyiJPHBccXUoN65eVmzk7uMZMnyjHhez2EU5HdSazxNbnHSqEkPb5pq1P7UWsgsy7W91y5YoWUzAgQqf6fp",
  "key5": "5jzQACv2XE41a9wZG9ugeEZxBuR7qE52ebKCxqgQ33Un2KGxFgusDh9mwLYuL8V3HrkuT7kvFzoZLc4tx66zanYq",
  "key6": "4gkaQoNoYT4GstCFSie9aXvMEZU6r96wEYhFzhV5qGpBzdALcNBMCaNSF7ZrFvRuXGYbPPdR2KLdMbKrtC6Kri2o",
  "key7": "MEKZyGWS9m2ijAzdJ679NtVUnnF3zvo5X4p3sHjfgwAYQ2bCSu7c1w3un9kqb9eg9fxtfJeS2BvxsBCJC3zqTnJ",
  "key8": "zGrNs8vjT57Jrqd1bZS9c7Zw2RSWw3igwKhTZ4bJajDvcPM9Hx5fif7pBDiKye2arnvsLzSnCzCUoTGGuJFUUbX",
  "key9": "5pNHNR9hYreqH4E6TvTthhD7TNmuRpnNbdVLaeaXr6MEc3knEg6EiZsBhFbJiKVQvAEzoiwYJvYsfyvs3yjtPLbT",
  "key10": "5374rey5yEL2KuqAsN7sGQ7VYTLKNNtvk8qvSuME4AWX8yPXEnfoMPEECkbVrjqCLjJPepgLrNnEzXxJHyJT98Tj",
  "key11": "3NsjvKWSBAKPmZEjXBquGLZG39E5apYDkYXPfwHnxGwKfcaq6yZZC9SpsoaSEtCmFqLCsVzmoG8hb7yTBAZ6RZEB",
  "key12": "2xcEasqZVPdzTDonUkfDYmzBmJ2jvciVX79jJ2GDwkYMtFiW11W6P4DuBVxnWsK5JEgjzVSKTmh5e72z7YV4xMnx",
  "key13": "3zJZ8ncte3sG6n5b81bVCgySBUjgPpPpQT7soTy9jvGAqSmVszJCgypL2GcLFrDVSjALw8nkBzFyVw4tJKxRVx8D",
  "key14": "3T71AS44PGtCjWXoAH3wZ43dXiDVSypRes3WxEympmBJqwavDYSFYnpuej2FKk6sCpcfv5aSH4Kv8cPMkKbGnfCo",
  "key15": "epxJeh6oJRj37rwksrucwiqEunmub3p98KK65aCops2zLxra9tgW7ooTHvxWXyUP7bEd6L7bSK8w9jAdbktbdWN",
  "key16": "2ZjfjZU3ND4FVxSPvUhv8NcBLRtvfSy3sBYi2cpa2yLDFVTAC5eRYamoR1PRS6fQ5aKL9iLEJgjzcWX4oRC6by6J",
  "key17": "3E7559TUi3AQfAxLcQP2VqydwwcR8eVyRi2Wq5j8Mo1W2EmhNop369hucXuU4v8hoHZQc1kkLdNfKZ229fuxoMbc",
  "key18": "3NBEg6wf3DgZdqa1BTHLmmaZMb6Vg2Z8ax8X7EpujsVuys2fQJgriDNxwCjyQ91H9vuz7MrjBYa6R2whZMfpWLia",
  "key19": "64jVzqZ3hWMhngwwwmbxhPYW2RZsaERF4S7iW3UfbRJomKDW7MqheYnkiHEtgBv85ZSrw2nmMLw8a91RaSNBH9Ed",
  "key20": "65B1HHPbfdSBNn2QHvcWEVm1yqvf1sLBqDqoh2KVeej8L9SRo2vBuAffK2mmzxsNRajzQxNAVC5Wqx7Ztdu83GxV",
  "key21": "5BZPr14vAubZLLE34au9jeeMfBHYGNMKuNiC2VcKXJb7gaAaVtR2E2sFg3ftSSTn4hSHzgHoFP7WJXKC5NUEvpt3",
  "key22": "ye6ZNRCGwAPSCBcj1DgBiTfLrHfjbfM9ySBrQmf3E3U882P13SM1qokt6amEHETMQQT2M8rbCyyKu6BD9wkxVNP",
  "key23": "4QDtW6DEV4yTMkn7Wvb9C7P6TL52E49FxWnyPURqUiLR4kbX28BZT8EpYuB5PKpmD6Xs4n1WcB71fuKC635wBV17",
  "key24": "4TrVCqSRmtnWRKFborX59LtXm92hqG2QYhaP8RKgrN98F3n9qYJKUXUFc9vvY14PaYwSrzQJXXp5GHP7EShXrK4q",
  "key25": "rLuLbPKfFehMqJy3SJd9iV4hL4ZgohaN7BbevfKizWoa79LZB7oXV2PHrazb9WSZX5atkFE367DxGxbKmD76Emv",
  "key26": "4bZDNgYT6hsSaoWx3PXxjaUFM9p7weUGLC3qrpwJ469uEf6fVdW2oRCmWvbLWp77PN9obKyH35pkEejjuAB9oiDv",
  "key27": "5mMaxFPjXN7qEW6SgLKgHtNg5X9iEH2G7ajJkdtbYfjjhMSVax4NEPJxiWud9S9oVzVRpRBPc4r4vEB5h8ubpYU",
  "key28": "2s3R73rLKxzpYNfGrTjmU7sSaJvPzpDnxtLGvYmJ9HH4mUNqvVhaugso7NBjidFFJnhLXSWr2yvSr8TmiiCzEyE",
  "key29": "2wcNSMpbTwhiE5QQBg1L7k7dKyR8fGK8c5quZCwxGRjAuKksLU7CX4A74NP8SJRfHWHtRaaHCSf7dUoRr1QdHAGi",
  "key30": "3JCVkb7LDLPQzPv4NXrjpww9nTzKJjoCh7JfC7S1qt4BeXMvMQwP7wBxdPCtvvxCT4XeCRkEVdNXCbC338NguLFx",
  "key31": "JkoBR79FSu1AHUAq1G3ZpdpFd1fN29NTmPrKNXiiqe7y14KhVnYvMmm82bzjAEPo8FqQfpbiTMn2ut7C2XSb26Q",
  "key32": "B2rJ1q9Ketkj9yMq2Y2FfcWR3FDH1ypChP71HfsaX3eYybkH1cyrmXZNDfis85Ps9CWiCQzh9crngr4Cnsnpwyn",
  "key33": "433rCDte2cGt9xUtbnzg2LcnM7143om7soLhng2TV5F31LqoQm5PTsELvuPKNFQokZGrbn9k17DRiuuJHgzwXQqv",
  "key34": "5pCsNZEb39toMxQkfBzmSmrUo4odPBZEoJ1mrxpyFybzdfgEAycfHTTMYfPbaJBsiqHd1Keg5eFeMkyb2T6r5fis",
  "key35": "YwJiaYSTiTZY1Yx7rb9Ucv4WDs2AWzPxmJEJxbeD4mNbr1EL5QnFAUiu4UdaDcE7Z1UVnHERCHhvaHQq3jtXLWs",
  "key36": "2Ci2UxzF4tKhdvsMZSZ8o5yVRpPrDN4QS426BaQi6gRKz8EXs2Lkmt975b3YoJpCEQeNissTVi3zzftkYXUH8dzj"
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
