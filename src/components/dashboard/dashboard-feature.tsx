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
    "2XmK5dNGjKjHZMQA7Be9ack36qq5Uq37Btt4R3B5uEFBesz9CcsP1v68HWfGicgSAcYhp7cWNpxSjHHzLmAMJqqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FvVgRrJXr7Cq41ywKcmt2iCea8oUDxmk7TcEAFWLgBm4CyyCNke64JVq2zV9gr7r5cMCZzmTwnhAPykapH9iJ9u",
  "key1": "6e4KeBAMWgYWaZn5hWFQg39NTkbFCJfQRdCX5cvoG2uJcdhaDbAyAD62GNfTS98iMqdk793E9TriURto9LfiT9C",
  "key2": "2heizY7sziUZUo1QveErnJTEuqXqMNTuAg2ooBmWonDmyMrQAv44hAWhVQuwyDrPyYSTjR14iH1fcTYM3uNTzmTN",
  "key3": "56bYyqUuKFDeYSTgt8HTb1dmu8FsBA9ufqpw7ViSNSBqD3A1n2kQeTQ5wSfq5jn1SDMk6KYtnqnUkbZyEtfroMsq",
  "key4": "59ijpHZ3164iKigRPHtSuNVmdnJJurSzMA4yDLxQdXc6kmdnBhK61YCFJkU4sX9wAeyPYos1WC8mhooDd7ePX91V",
  "key5": "NHLL8Tp5o23AkaoeDZV9p9oDQ2BTSPwF2aMLHBBYiA1ZtymFkLUmYPm1YWDdLzg4QrCiQGj7PHhdAtihobsZffm",
  "key6": "5xfN9cHSCTomHEggWKQkGThJTEhZcee5rgWxCXEWqhCbohVdUFxsymwP3STQBiqZqfphkQjjV6j4vmHWRNBkLrKG",
  "key7": "5SyhzUoepJet5Jy1ZqX49cS9rvMmRQzWZ8CiNF1m5AQHzF4JvicdKbqdkkDCp6hgmW6xuy6DzQGqanLoyMxY8onF",
  "key8": "5EdixhrNZtfppJiTJd9GpMySqZFVr1mM5HXaKiAfC38AEMMtUvbW8JtYc1UYmafKgVx8W3bYxTZzkwngFmzCBBh6",
  "key9": "4UFQK7RzALbVB8ZzoLD47MHtZh8vEa3NGQZcoJHW81PcEoS86DAV2Ra9Qj7FaAjBcyfKvKkBioy1CmFEC3wxkVEu",
  "key10": "4X5T9Amn3tPvcj2DwLgvos6KiUhSjcQzmjVid1frpeN7pwQGMo4L3Mp6jDmfdeNvYTcb3PjpJcGsdVSZkrwWqws9",
  "key11": "3wd9DiPWpAApE1cDkvA3KcroCDM1H6uNBaYQRdQcmz6cipbxrMgfF9NpUS5roto9NReKU4B11415zKb7z4gyjT54",
  "key12": "5BcQWtnMMjrrXiX4p2pG2xZsNgygULa7piBPS7x62bwBvBQY1B5kRcqGNKkf9cUy28dRHr5yGivjmbVL8LJZ22MJ",
  "key13": "2MKQiDrj1kx3B7n6GkWAuTHHmTFHfwXyj9Bbc7gvDrDzzHzgN2vsxkbPKM8eSMkmBSY5CczMJCtfWZyznH9CHrjp",
  "key14": "2xGhYf7xgQYAiKyD4VMBg611UEjQ7adzrTvwt8y8jhGAjEMdBjYuvGeKgE4yKNEH1trvpxT74YxgWK2cVtdXSfJu",
  "key15": "4j2ncKgzDdYHEc9Fa5YG1AnZMWGJkrGC3e2uV2Z7RpKqGGhvMaam41VSZWNFpAyv17H884bwhDYNNxZtEAb8HtdT",
  "key16": "5wB55R6KDQrDXoSaCf3AwjWZwTx3RHCLpmuGDdxC3UcxTiiranK1CXYdv5dCQYDm12uqoc4RTD1wmy7aQxdtQgL7",
  "key17": "4qaMue49UC7cxM6j5xXmBJ1czyGXUtCTsu114CUsTqJZLtk3bwFJBBJXndBBEo388w6BAYpAdUNQckaiMMiB7kBc",
  "key18": "4vh8if6TVKhu6ASCqs3MvR78iecsTDERPKtKpGCYmTEoQtc63vpcQFNZh2eAEeG4GMddJ2CSJBAqmxPdPVKTgLBv",
  "key19": "Q8HXgkMovRb9azYDmd5YuwWqz3zsNhBEMAMXDC1VEFvMXCjYPfNvpKxWX7Y8Becjops9zc8T6sK2zCbqRHKM59A",
  "key20": "igtRVLVaWcSBgGZfUDbGYJUXFAMGe13k7swsrBTc3T7H1acNHNfTjEbzkvkY5W7MqDmU5wGad91PsE8X8GNi5sc",
  "key21": "2difftw71YeEa2NmmezTBehqwMAus9ZnjFE4MYG5zfCc8X15v45ZjKDcSMP5CcSx2zi7RXneHrrZTjsQUXyWfjjC",
  "key22": "547MphRBhwcSkfnGzNzrWQCdwcWZ6q8mhpFVbb83k69qJmWXa7irc9VEEwWVuiL8LTxLhEDQJZ8hTs8uKtS2F93U",
  "key23": "2tczEkCdai7baNH4eWjrDR9qUUXisLNuKkd1tG8Ym1z5ZmfWg3R7gPAo7wtdyCeXctgvXn2ADf6fbEwG1KLgS8dA",
  "key24": "67CU9MXSsp6dhxBb62xu64ZwbhuaKoaPmNjLmf2rYTZWNXYDjoqFa2xxU3Vg2JzhRFnJ9Zd6DPnt9NTEePA2UnN8",
  "key25": "JBahRpQQ26TnhwDdR4j3wt2c4n3P7oxK5fwgfMSEMiDZTn5JVALLkr9NbAdQ99tbDcdMAxLWswzpAei1vPzuMb6",
  "key26": "5BZm3fvpHvnf3XJxidjrp4LVnkThs2K5qrhB7g8UraTK7Z1wYJbAsARtffeBF9q9Ea2RMXqePKnUGm3kLLYrZqtU",
  "key27": "3bVTWVivQRfraQHCgSXVRqALXhF1rUV3cYbocJSUBRS16NLLN92TFmC4c2QgSHwma8BcYTaPDDyJC4gve6YtSXBJ",
  "key28": "2yj8cwYxeNmcFqJsn9DewrxWD2XLFZ1u59Gg9mTvm5MjPa2DufyMmQm6VSSZUeraSVo7Umk92dgxYFa53LoLL6ga",
  "key29": "3dMvCeBYzEuLdEfZdv5P4yTrLivhR6SyUhSikd8WrAte4Lh2XZqs88L5PR9gk3BeaZs3RKw1vE5ibaKt2Kmrk73x",
  "key30": "q7b2ayDBMh23g85qicnu9iH4gZjJATANerXXsh3fbpwW3i6RYS429xHnhYHpZh5exgbLK6yMGcwrNewkGuHRupd",
  "key31": "31By2ERbtETj3VREmZ1uMBULHyuqyPxpZLQiQX2hyopfR735DJdnoXeVAPghXaWd91PQKErJWaKhvrfHTsR7xXSQ",
  "key32": "5nTzPfb4fnALVdyVMAevQhmP6dDZUYeLmxL8y1gsxfcjnHWjzuExGiBbv8dgndxLehBoCNXXQS6PrCXaob1Y9d3K",
  "key33": "5dBMD3pbWxAjdrY9tq3PoaAWNrEqGixs342owYbBYKZChnArLA2XTQVhuR3b53qzKM31sXt2KgMT9ayyR7vEDoqj",
  "key34": "5Nv2jLWS8qUaWQgB4E1DLyhv5wVuYtk86sKHPEefptmmpdht5vhenFMADnxYBCgg2SqGCEpdTdGb3G6ZahH7c8Fn",
  "key35": "2KNDTDxuKc25sF4XQ5seA8gzS48C8CRdpzooCfVZfqdX4jFoK12YVNYbzzVHugfUoGWqvyZK4F1iJgLGw7FSp9Pz",
  "key36": "368hcQh284RCibeHiPEpWoq1Uqkv2xhMAuSgbuNJFgeDRWEkEm52jUraE53gcgpuFxiCibJuvW1N3psRpZW4iqoy",
  "key37": "fZtSwzwQQ6qqvV15zV8CdrRbq3ziERshK4n8yLwY282QMNg8KrUpRTUp8YDCLDSsvTn4qhEFGQwZNnhTpK5RpyT",
  "key38": "42a6mCSHJD59T2MG81h1imfrFuLsp6csDHDNGjKDR5aPxNsnh6cmkp1qcXsQEB6nWr26Ui9buiRupcbhQisAxGZR",
  "key39": "3MbEj3rU4kWa4YPRCYEwk8e9zwQWLvuUyMJcLQ5hpcfVfcQUDv7a6J7mWHnQZbvqzrC5xhq99P4S75C2fTqhs3kG",
  "key40": "56UBEcrc5YGbhxFwEJVnkpWTfh16TiTfP1WnRNs8cusQU2N4vAuLd7ZpJ2Vfn57SWhCXkfNLz2JESVixG8DeLpjV",
  "key41": "5CvbWVonDi2TwUNofNZVTZ2KQU4qJLbYncNFWNtiLGeK7FbnKaoKUkfjAgtqSGcpoN4ioFZL3nSdPfubeWet3APP",
  "key42": "63CEYygBUNxMZTXvy6LyxK1dR3PshiDZ8rbD1gcqM7gKi5QQgUCetVhF1dbSkP6bho3ZNGhS3HuehGZw1ECbkc8J",
  "key43": "29iuwEz9siarDvK72fQPWQbEgHeT8RXGztsBLPdJgDqRhbpFLLv1kkLEijhciSnPkPcYasbrzhCSCpBmTzr4xtsd"
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
