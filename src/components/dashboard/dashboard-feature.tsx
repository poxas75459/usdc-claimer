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
    "63bCCKd5rfyKCpdDWv3UXN1RTu8kqLweysTeVy4VTjLQX4EHVWNNkFZi6JV87WwPS8Xy8WDMPsLRwQDyNXZ7GTCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xfNXxkXoyiqp4emBEkyupxsA3Eevgxg3VzLwMzEQMdG4iGsdz7w6m1nnjiFu6tCjcRJqz52tZjFg9zfobVVzgi1",
  "key1": "2RE6YBeuN4KBtQFgq8PqsvW4Sgk7kVFzB3ZEnh6fj6x3vVe7xAoP5b8JLfncuaBwAatPR1P9jzYhTjM78Lzhbrb6",
  "key2": "3skftim8C195nzi58nhoA5hQesKuSurEJk8f49TkhujiH9tDjRoWZ7BePbvUPS54bMMr42QMzHbpbJmBKL1QCC8q",
  "key3": "5dFYHcpJUceKuiewZvcXTE7i6MPTxsCHRhbnCpgosBhfM1uLGyqacWsdwoKFre2P55D9A97vy3mz7NenxK1LwoVG",
  "key4": "5v6RiTxtG5Jak5tbmCF9NdCuuCXjFbHpRumJAQRu5ecmecUMRGSfQb3X3BDGsMScnPZb21XJrGTw8ERNw696gzjJ",
  "key5": "HCXggGyjJcYGu8PDMDgFMP5GJEFRPfGUpvmwNB8LGVTriCHaFxEXFHASHAgDKDcjXtyVPQLmqjqtyPAkYwxUeHU",
  "key6": "3EadQJBxDJ5WytHxjdtUMsw4U4Cmz2zG384WwMsoY22gtnP6AiVwtLFQFsH9KiBsFE58Pskfxz1skQB7mMZUYkqM",
  "key7": "2at5B1X8PqM5MmCp8FC2644MjcSZoAUhVhuuZynUBdDVxdPy634TCTKdn5cSJ8HH3kE9aTrVW7JrsuWsm72GdQ3U",
  "key8": "4ckV4AHEhyZ8KDxtH2Qh7XxF4BxU5Db5kMeYnzte5rvebqPqq69KUXY3BJnQ7ahw1DjHxg2AyoUxph2sUUvT1pqn",
  "key9": "4NEBtBVRp1gY45icpGch5Fuy9AcSwXCWfrcTt1aidCFkxZE6GjL8FTx91wtA2ddtYFrPpkuZXYZCShbw1Pm7eKsA",
  "key10": "2aJGPA9HAks2zMCpDqAznbgVEf9w3q3Uc4AiUw5X3RTvqytwqYC4xEJL8cLxAc9aDdx6HZkBtjbSFvn94rH6i1x4",
  "key11": "26YNrw811pULfKGrV3U7wZu8MmBhkvkDiMARpBmTC3akA8duCydX1G3mSCVzWfawPGwSwAkYG3v4QjU1hapmNXqT",
  "key12": "4oXmyi85YmSAWrsaz8Kr3wfqT3ZX9EG8fWDYQLuuYLCzXgSQVpZFkTikikJ4ZsSHsHWpxvNXAuwtPGayx1pqVeEp",
  "key13": "5EdVF1d4dqN7nLjVksWeAsysz87Kk9EFhxpoW5nxxorjPVZneGBpeXdCZ1jxkbtpsQYfqyMxMGBpRpLfvRG7hoVY",
  "key14": "4cmqYYdjswNfusAsaPA8PXnFr51tcuj1yXCfP3cqKgPW2tC5W7FcH7CYVDsmL8EGmD1C9GoqGzZV15SZDKGt4Yq6",
  "key15": "2ir4A3z5CbVeTQYq5ybp7xd7ftYQMb3hta8MYFjorCSkHGAYEJNed4NwRpApeoX4MWELMefxyMRPURGaZ3n6szXC",
  "key16": "vazAbEPgKYHDrNJEERu7VzgJbKSkW9GEQM2fZupRTUGtZxkXaf6UFr4jrVKijRKFU5BRCNSt9ZGWrNnoZgNmxMS",
  "key17": "2dGV2xientQvBnLRSMvCFM6DCiEjGC39UK6767sL6zXZtpBY9X6H4Q56yi2TzvEEK2MZwSnaSLg5Uo3Nij4UAahs",
  "key18": "4nK1E9cMkRuGsRiQS7ETwB5C8DG4EQZajjxJA2YGa4LDM8D1E2aKoAtcWJZnfSpHrhViyfcVQFMPBDDzMikFEvbj",
  "key19": "2UARsjvnN6bqePPfcFsrUC78pKQgBgWm3y6GQkLwy1vsn2Acjr4kTuYuQJRXhiAXXMCuhqUhiEAyS2bmjebGoVHY",
  "key20": "27r4Je5376rYuik4sWNEw7aNoGmVtqDkpkGhqWifBtKzErUzLTjXQv3cFmz9oSDqhrd8bokBXQMrCN9J7Tu4nQNV",
  "key21": "9pyEChEAVs1jzzrhMSw8hxJogGfaVEUVyMXsphZziZyXJaKZjBzGnMAkbzuJSvPHBUzkQVakSnv6Tsd3ZjrRNsp",
  "key22": "dpr6hfTfo3nDYq1MgomtDMU7i7Atpkqm785PJTA5vD8ihBnRpzS73bY37iTsRaep5bp7cSPj6spFjj3KkMfydQK",
  "key23": "4VCWe5d7MzuhocRgEEN9hA4JTqi1gTVUtbpgTxSDaUDm5y2zwCMhYrn8S22uABmm94bEjH9qwbMSErsNitTak8Re",
  "key24": "BZ5WJZdXu36xsMpp9aQMrrUPLcfSRL53uXeM4QKGem3MVoiTcgChTvf8EkP5yHxuzVSpjA66tZZ9fiFuJGgYbLH",
  "key25": "pQH8zy91ewSrZFTVjz1vLgkVap3AXonUAUDt1iVkAdC4qCwaYQCMwoNCvjQkP9FCYSXq3BgEL89zyUgKCzcohfy",
  "key26": "5F6ooA12B2tjzheUbRNNqs6MnJ5LAqySWRsu9zCP5eufEwjQXfz2uzuf8nTPGnrZAseXAAuW3V1Vez4QQz9JrFeZ",
  "key27": "igYtcQPkH2xUHPL3jRLzKhjUpqRjiCzj9Z2w9Zbf8TGYXDziiEyT3jn5wNiKowMSmZh9FomRvHdBkXg9idYAEXn",
  "key28": "5kCUfFvo7F42euoZbQ3tNBt7BnD3rVQw57p9oo6t5sBT8vTWmtte9sFAw3G2iAxiq6VNtwHpQcU2uUjYHWVvCySD",
  "key29": "212aP6XcEtJY6MXLKXkU6ZHbpwrdWcwMnEu6dx6K4GwkDPouzb3gfuAaHDDFZtG1JGDQxPUXpWGz7gxSKQ3Xu16x",
  "key30": "54vEP7HgpPRZwqgxN92RwCpvPwdLG8QtNty1DE8Hc32DHMs26Q4aBM6zYKMzNcfRjNsNj8BVT5uJMSLqEHVGYmNZ",
  "key31": "286yuBW2ibN7X1dNCdqaoyjsKf1aiey2DxsUTPWxU5vtEa5nW8Dc4cMqjwENga2zkkympxRW4iRUNBNGzLZm6NQ8",
  "key32": "CMps2bAFoqxx1ekMMRLdcZNF9m5FvGGG2NXT3AeKqk1Wz2fXXpP7cKDWs6LqcF9AB14jgb6SesWrm9NpH5Hxo1d",
  "key33": "5GppwSQSug4fvPMDejgLWrKVHqPeZvFmXTnhp13pjEEZ4jgc2qYpmjYiVm9Q3kLpXuW678R7iZq71oVm5ZuEeTp5",
  "key34": "3UfsrC9md4DCx1S54eQoFhoKRyXXUY39bj6sbR2PqCdQLbwJnpC5p4hM5LBzyVxF13vkqk9JmDnRVCXRGv761M5G",
  "key35": "P7vNrGsQG2fBGyqVJJzKJBmLnxT8sQthCnv1L6Fa4JdmjrWoyvfmfT9qX8v1r6Mp4BZqZMHMGKZ1BjCfpjyEbzf",
  "key36": "3z1XuAndVSpbgXqa8rojCRG69CNx9bEJ4xsENHh6YrnRAd4Nx2nLVzS4ndCGcmCCihB1jt3kQV9rPMHK3Sd9hHsp",
  "key37": "4yEtVwbmdyvtWz8uRtDrBmidrA2TfkEEF5y5DUcDwhKFpsxCPfPBsUNY1GhNpAg4HRncG1WPt3kvDCnS6XLD3GSi",
  "key38": "4uEBtdFSF92D2QWjwSyJD5XyBFREPpe47cKasDqHk1ZdouRb76ipATCDNHaVwBoeDRLbWpyWkb9GwLiPB8wqFpWt",
  "key39": "4fPEi6hWtjoW7tbkjZpks2w2vs8EngQWt3KXHAQP3JYYgPVaUmSgvLJm7MjkuzRuCyFuzMHu5eEHr9X51VELB4ZN",
  "key40": "2axe7M1w4iL8UXMpfVr8d3DcYsgQ1TTKv9BUa3BZ6YEUNPPuPR8c4xNmX2ccNWsXwDuKmHJqKLPQbWWXggCKyvLA"
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
