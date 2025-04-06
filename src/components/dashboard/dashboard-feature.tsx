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
    "3b5bPTV3kDBQAbGhAKEsr7taRBxGQGkp1hM1pNcEiTwfrjNzc2fTwb6eXhqua27DbLgSDn2N6iukwkvtB9xAVbfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q6QXbHLmfhn1hXKZh2Uy5TdnBCYnJB1cYPi9vx9bmMN9Mtt3AHbkGbwzHgfDaWLqM6vv3ZnGyt5gJsjrknaUjod",
  "key1": "5MFMcL6E1KFxgYk3FZ1KX38gYxuGHWPpCjk1qNBh3BXaVYkUvCY55gmuJ4YuG8WDMZ1HzrfMGBifpq2TntyQR6hq",
  "key2": "3fJNmgjXE8zEAM9fHWjQzeRyAX4wgaPow7bqaxyGhcp3UcwxfNnyLvntu1kRRwEEdHaGRhcYWj4jfRKkN42iQnT3",
  "key3": "2JpZ66bVTRxdR7i7MZCPX2tiXpycy5qE5GdY4bDAi72thr15nycM1WdEjbWP53ShbCcbnEsqEcXSzBV9PmFQrwVv",
  "key4": "2525oeTHU2tNFHtwJsLR8k3aLoQotGJDRnC8USm936sPKdoRWq8JtH3vrXGS9kb5BHqEqkFRgTn5Htj5NkeUnwdv",
  "key5": "cPyEMQCPrCt6qCMKupD1b1echXDvrSA9WD28R8zPZyiCqyekiL48FTyfpyxERzr7LcA3AtyfogkwGe7iS518Tzk",
  "key6": "4PDLemrYXWGYb5TTZSpgekJCGFr4so2EzaJtGFZNr8L4YiYpa3TKiSZXoxF2bB1LKfZcoTuFwLTpsPRjbRhL4Q2b",
  "key7": "5LD4fSKFH5uUqGyHZRxBSWmaooqhedg2qXdVrHxpjYKDd1JmvTLhuq9BrYZoUGoHyAtUbckLBTQJFQk6wXueLn2z",
  "key8": "4kSfqk3784XmgUKN5UE2z6Cn6Kssez5wZycMEDPFo5gJWtu9gMopXABL9tTSkM9uRnHb4UBGTB9qJiC9RgBm3KDN",
  "key9": "2D8TuNDVPj4xk3fo2jNCUFuhK2rGQqXeitEMHKtTye9WnqVBpoe9zuSoLW8U2YNMCnAf9AGjDQoKWvjDVJJ42FG9",
  "key10": "3NkSihwax4MrN61D4qWAcP3Gy7BDSXk1qjFR2vrZTZg93HzHxJeTiDfGua5xBvo4LB138deZjRPEPMTejwcM1gU5",
  "key11": "5xjTfs35LDmHYqkcUcwKhDBfBL3wxG1QtDmTqsDL5dynQqQKdggjVYepb1EwGhNi8YDzwY2Qmyw2kRztb93ijfiK",
  "key12": "3Xhiz6674mTLGY8pNdg7UztvjpqKcsuHKpWnFth1fj82sx7yYntvoY7zMdGp4FLXofVVZwxLSbLkGa4zHQdYfKV8",
  "key13": "5xw6NJ7iGmL6oW5nxPn19TtT8QLwcWsWh4VkxzvAGHXVF59vSAZq3j6nVXXCLGmhDxzDv5SA63dcFv7d5ctToaoU",
  "key14": "t7rEjy1KSrE7LisRLtpSWogSA1BQ9GoX5pkAorKqD5aL8xiVpZFf2yXsHrMq2ZMj1DdDGq2C1wKMvR1Aks5q5eE",
  "key15": "g2VdxA5EUxhrFYrcuGfkV6gkKssKbkexE8pBEytpgpgHizajjRiZNfSi1Q5h3wpQkmyk2ymun15BGj9ZH9ZLorN",
  "key16": "4ajY7QCwFy8YuELnLctWiaKcQjFPLLzCWWyjmNYDaFpwYEgDWAk6vjJA2bEp2SMwL2o4Cx3PWSDzNfzD6Mc9VLHF",
  "key17": "2Q8tkS8R1LqmDw3WykV8FM9ZkRUCQcYSDDFRNktMd8YP16CfFEsqzXhj3CPyNdVUSMT8ygr2QX6K1fcxiStyjcFM",
  "key18": "5M9XSz5TE9Y1JXnjQjvHwgSLTFth6CNdogovAASSieGPUtDQqdtHQJCMBARxg6Q2Q4GDjidHEfuZaPPDvog9QAhe",
  "key19": "66aBx9JwHcWBtsMzwwS3LwANz7CKgKMbLAEodcq6Uwsd5T1Vd6dU6rWdp1m3tMgQqHGiXGh6wGgEXqvEmeZkWPyK",
  "key20": "4kMqDE8qnJnHWvA3CayaWTw6b4FSQ8bzDX8aaFfWVukkuYd3rHybuitac7uYUXhWoHmX6f46aVwEkppC7DT7susb",
  "key21": "5z8D1kBt6S24WoKCvvzCLPnNdkxbbcQSMbiF5yDgmU3RqjHMv1tYvUPzNHQm3NHTXRCsE1cKCQv4zp5ZgvNXhoHm",
  "key22": "4YG422LLYJPbN3GYe9i7TdrUpA8qj3DEDqGEU4SW4ET68do82UY9Rgjftmm1QkQso3S3Kguxu8h7VeoBwbYinhy9",
  "key23": "2Hut29YxMNRoCXZL7NpFYxrP2T26EYUA9A4Qfxp1pbKt6kMc9zNA1C4oUUh72Gojs1L7ottysVX4a8z54GNsfzFU",
  "key24": "5B2caPB2NAGuh8TG1o21DFuwb1xwVFMJvEeZUWUNauZmsuahM4DVYXuW3WtBaXZ7KLXcSaKW9NGFGzaR6Kjuywnu",
  "key25": "5RDcZApdGFsKG7RJtxzqd7L3Zvn83NHwPCMATSgX5Dhtcnm5jMKpkRKn5F78gH84WTYnYuD5AN766YHE5fWoRW7L",
  "key26": "37hYqQo4JnA8QaabCjSrtM6X1mzqmcNYCD3y7Ceun6Buejf9Smi7KWS6AuDhjWdfnn1CjASLpasZK3JR4sKwN7ib",
  "key27": "675tiAMLi56EcaG1CVQyNjUcnZF3hHGDQmYbKN5YWmbS6VYM9sk89n4KWsRv2futXuRVkA1PDnbSmwBR1XKx92j6",
  "key28": "K93zvG8Yfab3YQjeb44pr7cYnfUihGTqweYiBmQRuXpaBJ4YLCFbeZCwsqMkX5ZmP5HtFRVLU7wagXy99oir486",
  "key29": "219L48pNwWd1H2fyP1Vx4THMa4YmyEjteB1YikKnSp1ePQMZv8gmz4hMRByt64PKHKFQRWiczF7YQcdjLbmRj9Pi",
  "key30": "2ruxC1qbzkk3qFrECyKhLJEoqEHJ773yNEU7yEYEETs8BqesTKnH9VPMMdtWYkKYU2vqsyReFQVWmWEKcowrrCM6",
  "key31": "4BzH8WbooAU7XpM4EBxUMe99A2iPqcxLEAAKbecSAKqsSQtzjdCjb3ADB5vnHnxZvnjxEzeBtaWDrkyoiFjhC1Md",
  "key32": "5FooSWrV69PS241rjMwaWcrmgAW22FmLaTn9UBf5fsZR4VJMBN1Cxfvuq1C2E3Fbmh4kAui7mtWNbTiJ4Xti4VKm",
  "key33": "2jLBKvC1XRdPiQe7FPqSGoqEx2zBshaSiu54APwK7QocvW3RVxTgv7Qxit6SpDpz8UAs5gXF3RNQ9kkyodPA9JGt",
  "key34": "2AjW7wEqiF2k5NbbbVW5iyyuGg6PkukeqcH9qfWCaWTWErHcxCuWgBf7ZbbpxKm89KVWpFfwdhqHzciJvSw3hEvn"
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
