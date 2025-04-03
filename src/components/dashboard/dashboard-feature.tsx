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
    "5cteJHMp9MC7aGh6KMsfxbk1UDSxsZr5HDXMChKFszXqAbD7yzMhQawAPTSdMsgTeK4ADGK9DmkFgakLPNSyJhBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YuKwc5FTHWSo3ZRebfTZFksPAk7JD6GugEkkYthNrY2Y1AzWdL6BRyD5mX4ZuTmu2EVwjHDBAjXK7ji9qS9bJFH",
  "key1": "3o69yxDVQwie5MfghjDB2z3o8agY68FAvjtLSUe48qnMxZZye76fv9cz12ezVPP6p5f7c5TvTnAHgjLUSw81CUtc",
  "key2": "4DNuZvTwcVjDxk1nH3uQwfGtkmvttbSFV9udYaDLrNWLB4yJYvTjK5eNHLFXQCeEXZMENGydGRvKaa7k8BLqBM7P",
  "key3": "2uhzwsKT7nwEXw9Y3DxeooDSNGyGexJJLnLKdUm66rnnKFsJ1HdD6GLH25chtgFSvmWGcoWRV7s36YgG57CA1aVj",
  "key4": "4owNfPYhdGLKs7h2RjZpi3qCfsxNKiF72b2EnpwwB4w8sigSnTWpKfuc5zHhvxhso6Jv3TSSHFDYxarS6Ur51myC",
  "key5": "3ddBoi719LMGC9i2ye6gejNfMhtbuW1Frp5yk7Mj3yLvCGzCxDWm9XZ4FHU274pPbm8SEqHVNhUAAgxsALmVeCRq",
  "key6": "3JdxEothZF3DYK7Y9UjcJnJFUD5gDFhkigbwzwEvocgoHm2ShwtV6uJphu3QQXiNLviRSC1aXwKBT6VSMnftGkSc",
  "key7": "4GnKoUiWAPZtTAA4pDFiyY4KaBDbQX7DE3tFiBnSQha5S599CnBjkMffFqTJiVmYdjR6Pnm9GvUcxuZ5XU1pjatM",
  "key8": "N6cjnsFkGeTuvoovhsupba8kBWZKqhKRyqJ5iBUbaxx7kXMybTJGKpe8BVSbdS8fnN9kBRPC1TwbbaAaJtZgv7N",
  "key9": "3Eivurq1r78PdA5xbaU4TFuXnBZC76PEFobBDsfG2GZFyAFgYZPRcaQ1fAdvsShXceHzRSLsZYKRvBNGdCWQbez3",
  "key10": "nrm2z2AuiAc6T94VPGNx7N9LMFNAQSe8p6NTTmdzVEyKTER5yKjuEo6G5sr5a1sfK7vZDLG4qgqYypuJq5G3hPv",
  "key11": "5GPRPBuqaxF9oviZneJUrtqYSPZkVGgaNcELXDpfJWXP3zVupwYqJLZDcayPDyDUxbAcMXJ9aLrSpLf5XK9t7w58",
  "key12": "2erS6nz3fhRKXxPCWpTvEnKraqWNy1Cr3YBkBDrcpuJSuaSTBtmiWbJ7aVz271rhPVapUYmdfd1o6GQHf49rkUS8",
  "key13": "2jznFxRrExh8ARb6XJeuRTygbEY5wXk9tcew1PLcM5DfyH1HDdGi4bHrCihXVpdCqex2wTGjGsqjndjJnu9baW1W",
  "key14": "4nW88VteV3V3pDfVzPhP92Xr6x2EXauLcrXxC98VH2QEbKDetPv7zXVDMnWFFuSxtJhA391sVx8ijcBV924Ag5mR",
  "key15": "3UMRrNrvTL6BuxeocVnjWYdPQ4UWZnie9YFgvWzeBPHEjDXxzhwMq39Y3rTobXfZ3HaqZypvvKj1MnJTQMkx1seZ",
  "key16": "498wtMaWoKftje12FQgHhutBjJu16Fum1Hu1gA1RWZGSuhPnbqeRjPEADJJ42bhJPfcCTN4eUYrzQtHyjg3NxQ54",
  "key17": "5ddwGKdkUjT3ADMBNtDqpqW6CJCYCJTAcgG6cT19yuWfapzSPJEMFSXVHzotxQsNfBBMJyWb9WKJQBDfndUtZVms",
  "key18": "3tDZf2tn5VhQqLhWSL9JM7fpy34nLoZ83osw69asYrrTXWkZ961BeN7W2DLg3Uy22JHaVedFbfSCx8nP9K9QnC2y",
  "key19": "3WSCqyHqgtdh1Co8Yd9uG6WTte3pewJBhi2KWer1fT6HFqosarsU4mefLDsJpwsHp4VkCF1D2dea2Pjc7v7ZPrra",
  "key20": "5ipXLVs3kvMgNSGsnf3HyN1dyGs9vQ1gdQiZtLyUM3H8rHGsQwSpDnY4AvR82usNYyb3Up1BEy8wcYZug7ij6TCb",
  "key21": "4zcvB74aMBZGhiXTQJoFDfDZQSHwSPR6Vk1wvwsPKhtqikvdvvWR3KCYKyhVfZx1gUzZQwb7dVwLoyG1M8YTGRrU",
  "key22": "k3ZTMEEU9VnxfJzCfYnhgMcHSqbQ93F6PJZvAKbAN9tnwbeJcPcSSLkaMuSLfcWjHHw8MVc3rGwPFCprjY6QYPu",
  "key23": "2VE4GqqvAnVZTjsM31iozoHv8YX8eC1sEDYSpPkr6LkNdkvhkBT2RB5i7QQUYvVSuBK1BAueS8jhkx9dHkr7XG1U",
  "key24": "LXzA47S6AZ9FyfAaWBxpCvFB2dY2UmNgF856D6wWJFcyaYwcdjcoxGp9t12RPVDSCqX3T7YAPsJSkxZyeM4cX3Q",
  "key25": "XWofEPhX7zeVmSgb6fvpaXyNkem4gk3gqK6JS43h5gGRh68GLLcHHfgFR4eDz8DM4S1ytScCzwiya8pkTCMWmBP",
  "key26": "wRT49QPXRm5PEDN8okMEFuqZTxVKdQHyKWNRZWpZMEYphq8pCbKFmWjMpwx3d7Z3ssEC76ULfVYop7HJt8iLoqV",
  "key27": "5KLJ3J5vGAG6qeH52sYY4G5p9G84ivmmtx4jfgzbWuFCFDih43kNBRuJkKLXxjXDTUftGg4pse6EbZsgLUmdUnmf",
  "key28": "2pkJUSQpaRUn2AJUxbP98NCPQrJxr414D65tSYc2ymggM92LkhkZHNN1K6YJNcSozYb874LjhpWZerAaZEg7kRs3",
  "key29": "2rMF11T8uSTFngr3TqH7LqXaqkc3rjhZoCJq9eVgqk8FyyXSUQyTtdHe9gkK9ndRHdEJSTaDufZZtMJW7WCKEpLB",
  "key30": "Koy5fpxT6nh62VPA11uuAFtbC8gGmoQsKikPng35LoD9n6yG5kv9y1cTvtsxt3XztcPZHFFzH2MN9Xg2FnaSjLo",
  "key31": "DSN1VZwnKwyaYkJF6s5xCKHqHKvtSSsCS7yTszyfU9UdmauxC6T6FX2htYEyhnhYZMB3i9j7JPj3dKLDgqojo3Q",
  "key32": "4Cq8fLtFL5cUJ2G8cVHrexyKqtdkPwyPkf9TfGeGQhSCnPzN2qBgvSYz59FXNPL83Ns6WFMN5zc9jkEgSnqGkX6H",
  "key33": "4jKjy1VJvtwUNjxZfjZgBsjT9yhjK9WqygfLFV2agw4FJuLysUKZLsPDngDeuntWBaLuTkNH9fWP9DQh62Fv4AHg",
  "key34": "5iqf3tMZKvvD7BwNQsD5BX8QxvbLLSwcKxXSQY9f6MQ8ZRSdmxg1o8X9gpumhLKLK9K85K5YY9NUX5x94DyYetEh",
  "key35": "5XBcoHdgaojSYFpb5MuXwwafGY6azWc2jrkAwswGTWyKoaaFP38cqYSPKY1ayAZbAqkK3y7WpE53MSPYqkpGcNwW",
  "key36": "45HAq5JoWJMQvJ7uyeWyLgv84CYdeFxpTAzry7BzX9tZLQs1UAjHtJFaariqrfAP2VPAFj4ZbegKVBnYrRNqwMsX",
  "key37": "3v4175XaYXuPhTZQ4LWNB6vQdvHVBJvnAwdSTVWnzqDnyW7psmPRmDCQRxBWWgnjQcygK5MED8qWHD5hsmuZatMa",
  "key38": "hsZVmus9FWd1Lo3PDkJqycZ7uNi8Zk8djKgPuk39cqYReGZY9Gx8Pr3i6Lq2wYtNe2YWKeqStUDSJbyP32sgB7Y",
  "key39": "48tdJ4FhCgD2udNLwnGaKMCBLQFpADf5AGNfVXa2REFbMMLhs4VgT7AuZaV18KrTQdVQZNtTnyxN9DV1YZPUxhfB",
  "key40": "2vZsM47MRCiAa6XiqFS6CYHL7Hdf25Wv7589Y2evLuZoyCNuDbG2YD2xDt393Abp2CJViwaHxKnuxFERJ4qvgqhf"
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
