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
    "5T2fwaL1pPriaRADZTMjDXWjhL1cBWD2MQBJjMHCx2HWo9NApULETWVVPsLquafWEfMoNVL3NFd8qyFF6aZJHUob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GGPvdkCUCxhMmjYBLmLrESa5VY7jtCK1L1e1Pyioe1rF7pFDMxiohusD7SuA296bmQzJ4yApcRnMNFYd175B3Vo",
  "key1": "39oGtfLCmwveoTvuRkPfkf8SphmCMwWz6h2iH5DNX7peNZPBWPTeZFmAQ3TE4iotfAwSY7SV1rvDQhwf9YyA5PSE",
  "key2": "31AB7vgYgENzgXhuryCgschekPcrYkx87AYm7UYmkSLhPmjqE6AEmdVoiqkNiPhQ6GzvzbMTGP45bszqdbmJUet2",
  "key3": "445xvNybkCsuSeisR3MAEEu72DmJa2ZGUpS9XL4o2T3bKeP35jJshURDcpKUp59c27GHWQ1mtfREQyGvHGe7Cu1j",
  "key4": "41M4URooM4VoFjoYif9aQGKxyYMGMm5S5M9wjgimEKNemdRM6zYHEYXAgenT8pv7D8RCNAcs591AvSYFNtpaz167",
  "key5": "YA1EDfKzqxfbdiU9HmaeFSKYZW7a2SThStYBbD4LVYwPEzL3tMbKuck8no1J6QRk66dAZxZo1cDgnMz8wMZZERx",
  "key6": "4uyPVB1gYq9LpTzWJUWxrNj3s9as9T3XNvwQ28o3n7N57nDMN7sbTenL8TypSdGMafLpWYcmUxN5rExHCEVk7PF7",
  "key7": "2Vfr9wgneuLjxYZEbypzaYEfQ3XT6C7Gt2UKo9RnLeQDrkMtqTWndTSeYuLVP7AcjGdrXm1cfDVdZ3m5YqDg9Sd6",
  "key8": "2Hay3SCvSqh387sx431o7D2PckXNPbfZnqN5EbMTtm5d7C5fNfVeu6FaxYKhrTZHQDTMTaNEcb12r3GnuQyxZdZ",
  "key9": "66nKy5QJE3zww6R4mjXLuHu9CuSeVMiyLT7rZygVX8yCCoNEMZxJkAjLy24FrD8KyZhv9SKP5xF6T8r92r91Jav2",
  "key10": "2TvwYKXzjRDvAxqXThwggpc75Z4Rta1GwNJsSmMWLyxAwHRRPpdBC3BswAnvCWuqguvwdxWaWPBVMUNQTfyxyx7r",
  "key11": "2mdx9thUDDfVRi8YofPGvtTDLr8XagcUXXMfrAo8Z3WdDG5XxTK3E5pHBrN7hnnawGtgmqpfNdoMH6Yf3kCLuLNr",
  "key12": "3HuTUuEfVe9Txty6oEpE1UdP91ymsWbxhz3evEYwZWR4Mocpod8qu1J3F22e4p4khAtyK5DxQEJqFAmoyyuPR2Qs",
  "key13": "5x2qx3F1zDy9QU644BKk6XwJ6MAURyPVbo2NccNoLzeCJhnH87dhV9cYDBgQKdSUKAE6Dneq6TvmT8YWFa1etb31",
  "key14": "2uNTUSJGjt9kxbV6vEw7qNe26UPcvwibQzmPheA4ysvUZAoRUN8pTV3ZZGs6YNZ4Yr5Sbsm6EqmkVJn812JQPCyZ",
  "key15": "58VbZ2nbGivQzFgYEZCZSgYJBx5x8aBUm2qtpL14c1XvvAApX9rHghKKSXF5GEwcadywgb82WCZpXwNmyJWiEF7V",
  "key16": "5GRVxRcuhbqK72TTTfTBXpprDrpHzFqtEEsc3xkCiJbsTtkxWG8RVXJhG5RiksJaME8wqHzsG8WitRaLcfacZc17",
  "key17": "5BCtQCtZgmsDJcEVFM8RPoaNJrPCdMKUt2XQJ4nrRAtHHmWZ1GCMpvC42i2TRDMQbNDywHXpLvCo93gdDewDUHjh",
  "key18": "J7J31kkLKAgmqmMYxouhvDRvBzkP4MhiT4ibKYL42cak2R5qHfM56upcs9vcxcT21KpZgqZzvqePYzFVLuLpdM5",
  "key19": "nahsk41LqQRbS1MVZHexNNJs5toey5BfG9yW2b451TrNqHS19jKY2FpJmRJrUdFyy3yczfHNnP3Rfwn54B37FWi",
  "key20": "2ny7VfZ8mPCQWjfsgJ6JK6Aogk7BuziHWjkewtD8SUzHmAve1Jem39HwHNjdcXv3nTzdHMf5JZbFcTNjdNigDTAW",
  "key21": "4GpUE5heYfRh2D6h2BqiiHbS126mvcpCkLqGZRjwayua8tdSV32hF247E7GJuj14K67gsY1fU7N9A8UMxSbAo1qS",
  "key22": "5Bfi4aSY7uGictYNZU4sF75ZxdgVUt3cPNFfsSrsr7wEjSunXPnLtVhydo6v8bnxyXv5FZ4Fqv4Qa6DRfFVrRDcg",
  "key23": "4pHuXuZRTDE4y7ZxY5qfZBxobhbuPXmMtWi6gnCvMyRn7Aju3f9GDjuXkPM9mEfyDNTsrKqaX4vJhLbEG3Gg6ByA",
  "key24": "62mSwxeXhbBdzmisyCaCQKfGyNexkeTkos5eyxN5srwMzwHZE1ASDps8KLptUCDXEnV84MWPRvwGZJUe8NSXwFXe",
  "key25": "5oUBrEqDPqVKZf13kgoBhwe1H7qDP5Kz6fjjRVJU9WpRwSzqPsGnkd98QWzdqijiwe56196XtLygUbjSYoTKtKH7",
  "key26": "3yeAKcTjcwfWP5HMoWQMzN2kJL2EDTY9uzD4JFf47A3kcfTZMSqshxWJbhsY6Xx8iYTqVuYvzCLf6nVt1dbVZhEu",
  "key27": "2kQ268u8qLgkzMGconQ73PDkFStuQc5tuHNoGfWsubDUrkYhZSuufG5cAkUKTNNqgXHv9uJzeQoybZPRJQeY1xoz",
  "key28": "2pef7tyCpox5D9HVEApvojBvAJCHzQwBwJgF88bfN6ZSG2B7FfUQReafE5kGniKi6wnR5SFVrhDdEXZ27NccBhea",
  "key29": "2Ryt7aeyMQ48bMccMubY1j8pwPmz2oamKyRRX7GmaJ5Kbk8GFLSe2TDS5SZ7ixcSyAS5HACJXQ4PRNpGyRoKLPjQ",
  "key30": "KWEzwjAivqzpppuRaqRhmz7RbMHGs213agD2RVodmKBV7BdC6DnHeeb5Jwfy8mEcLPRvVa3FvE1WLvbQ4UHitaB",
  "key31": "83pyaFQJy6HrrPTZ9kKFf53Q58Qq858tLaKCcxs7idprbYiRTzpQH3AdZ5b4FsDwvUtzmic23Bmd6D9k3dpQXWY",
  "key32": "TvTZRMazG45ronjFPtwoeDQJmPkvZnv3LUWkVuvdLurLKnfNiNmWfoxP4c6gdRKrCRJmJyYTKoVoBLRF2ojz3qv",
  "key33": "3GxmHmaRKg13mhByGUxVtY7YkqvvwigMJgPbPZsUpBgjHEsL5QPo3WBnkoz2hzCiCyysuEB91Bxf1asC6Wtdx4rp",
  "key34": "dN7n6FXaaEafmgApajzccfYuDNTetwKiGaRBQmsLY7mk4cZk2DvqVS5tvEwy3ZPUBHRytjv45B6pz4ExyNiuDHC",
  "key35": "28bbE3jNrW4vcvkgCHZXA2btDuUKEuwZF29p9PwufTvBKppU4TSdYZnDLbWa4pasCTyFthGAneE57T3uG84s2S2K",
  "key36": "2im3QndYvicJCGeqimqJw6hnHp6ifHwnHHTTTVQqauNZ7va12DptG2Q82rau4MhiX9oiYTRNVGoJqmGmZCTm9DUR",
  "key37": "3fGicY7Wkv1VKkKt8M65UmCRaCrun7isasg2piFq8nTuhciMgJs2byQ2mahbNuYh9iEH7hLpcXHS5H6tVhjad7XN",
  "key38": "vUTDJcCLqvb6XGc31TuUSznm2o7Q4Wk32KNcr6JKJnHFwMtrP9aGYRcsMZQkUtAwrniSWPM3Qu3eh72zqUFgPTR",
  "key39": "5XYfMXb8UbCAq2Si2GRjQRAdqW3eY2xQ3kaT6GyEoYGdizFkaCvwQjhRxqKmhdKNrQKXn2gistisuG7mbSpXvg8U",
  "key40": "5JJBow5MMbHjLD26h1jSqAWxgNFSbuGmJEPrz1yptGDtVWvVJgcnFVhusGYujuy7UTFVdVAgnk7bArgYCFME5cmT",
  "key41": "br8eBpzaojyeE32KiWjja6hdDbAxFxFNUmTCqPm7QsQ92AfT6W8z7ug7wjLa1TTabRE3jrtzFnPJSciEdqnJr4t",
  "key42": "5ubmYkAnWGH2Jofhqa9NW3yfYXSYtbdm1HL1qVfhd95oChQHpNSeoZ7UHDUPjFmWXNQpZshPaJtspWubi1FPovCG",
  "key43": "61BReYW8ntCwNNqyAjjJJJfx8nvYUmaTSXwS2v3XDuAk1Y2qwNjKzVAJrvL2uM1xtwnkbtwnzRvL9MZnZnxVgFXQ",
  "key44": "2KU3uP3Lsm7QResT8Xk9mhNSCfQ5CXnMdNLpjQiiTk3NMdSvAs9L9RKSA5NuoPLuGQF2qbcdtimXNSyx9vUDdPfk",
  "key45": "2kKKjh5UeTJNepuwU1oh1gZXfYffGTappKaTeZRksDDHvyPridBPRTYMbSF6QZLHpeeVEdTgsPccTEYiosmTsvHn",
  "key46": "3FNrNsKmGnct8pSAoJQnByJwQueTwp8haP1CUySVHYcyGLrbFB533jpD5S6mec5CmGp5LwCJXpJFBhhr7GQBERuf"
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
