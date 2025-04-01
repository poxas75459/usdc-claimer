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
    "5VnsxBoz8uiBJTte9K9X5PtyEKd1HBjVZKh7Wpp2ZyLPH7mLLi25x3YVDCJ3Fhek2Bc4tMVuDujkAJceVHaYjrYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rhjg7XVzN9m3qqVbfJc7qwqZw8rnspGKQ2jNf6rg49CpsTpQfad9PPgYAuCv7uEdBFVkrnQz24XpJNiwmaVhdt",
  "key1": "2HLtddD65RAjskND6gXn62GQ4sxHGmd6fGT8kV3QvGGoZP6Ui2K3oZkguTbViRTUjaqz9BaGyirDpMsPWWh5uKSJ",
  "key2": "5VAqsQxuwFU2mKJ4CNoiy6eMyHztfG4D9e7Uf7LinYUZyVtxR41QdsiiNyfxBGfJhwr1Mi8rwdEeDMWSCNbBT4PD",
  "key3": "jJ6BHFB6t23iXfdxbG6Qydh7PZa8E7iehXkU1YRouAGVFgFdaTyDa4ETh7F1YEJDcpQo6awSTQJ9ighX7EA5Gku",
  "key4": "4UqcUXZhvV1MiHhPfnGE1yN2ohQ4fZmEprVYwRV1SXF5SWcMerN1WwR5WmVixwB8S6VkYgFTXxbyZc68NgP44Wcr",
  "key5": "2FDBu7RWED498rwx8abeRemT3CiXWcCrHfsgCjgG1HuTCkq8vcDCCnMKDXsPoMtq6kVyw2P4H8PM8T8YMafC89SX",
  "key6": "5aJcujjkZnWpvC6sr172HbBMaHoaU5QfcFWPgkdGqogtjT7g1PcEw8vmM7MVU3NfkZnvXyhcDWqFqXyDcofGN8St",
  "key7": "2a6tHGuerVHkGNYjW4nfvuUH4Y7bBBYc6bAQmQ2FRCby82PmhuFLqfTzE3QWGri1J58ba1NZpNPiUj4Fjzw9Qa15",
  "key8": "326M5FVxF8J4pQ9R6Xs6op2KftazVfcvManwK58gG83RU2MuNDQC6ur7cC2MLSFvCWhG82mzfuXNLx7NcTtWFrW9",
  "key9": "3hE2NSNFJDjvEpo8mTZ7HGEWGktj8CPwPnND7JhFGZE1Qb1ToxqBrwSzGeyBHV2Jc51ujxqP7tvEE1ermqMPBvpL",
  "key10": "4mQPitzhacXdGM9773jQAJdnD1rH1biSfRm8CMuwfEEHPNveZ1F6KBhdVQnAaAjeSJjjX9Nii2QSGQCmcKtT5mMk",
  "key11": "5sFUPnbDRtETr2GGeCvohhRb4Vzq7fVDXCbhC9GW84Nqpd1DfBBCM46oeBMEw7U5ik1DNYZJs9ANijUoRiS3bKqr",
  "key12": "4WvHcAwF64RmtmMHnaGoERXcAakqWgaxtqme6fx8DErgbWJPeVBhP5pcaTYYoFE4q3RgwBM9iZmVwWRoFAZMLRSQ",
  "key13": "4SbK7V5d1JU8grPkhmhuaoWFqjPwDKw3ExPEf1ucPW6j8tncHhsetszxSHaS1zbFLmsMGuzrsehQxo8unrmbWY2o",
  "key14": "2eHupGdmarWvgsJN11wCUxNYZZfXaWt84zAuQXvp92g9iDkBAPnysYaCgZ3B4a5byKFPBgQyu4BNfQT3XAxzTnRB",
  "key15": "5ut6pJjm5tKbV3Jo6G1FqpcLQonuse6bhp5G5NQAY3t9ig4bevJDuCRf7V5YNCUtjTds3sYn54Cmj92cjq1qpv7A",
  "key16": "4aj9twP5x6vxJfmqiphN6zZHpyUL4E63H1nicx4goS7BUtncHWWDEFgmxHNmbUJoZScFNGoA2NJgXcbWHjhramya",
  "key17": "44N23S2sKg48P7AisgekypZD5figVQwaFjD6S4QC3WN97LB7fUWbRUvmiYzKq3L2GN1541KbN9AvrTvBQu6bum6Q",
  "key18": "2pTDRvvQGgjkaFZY2papmmYxBsAGN1BR9HfCw7jKBxAD2CVVX78vEy1rwLX7k6JDZnmgHEiPUH4UBMJohELXnmkM",
  "key19": "4D7mFiCxnwemAnbDW2jz5TDgDJuQH2By2A4zUfXa8KFikokGjk6e8ZcWunLAdXmnVzzV97t5rbYzRzypnrMZcDbU",
  "key20": "V6RaEFhRvahoYz73TbHcbdjQNnLd73ABvzZBrFXb4BVCQMS8B1m72tVJrWcfq9YH2c3k2rvuaBs4ws3QfYykHyX",
  "key21": "Ynzto8vx1frYyW66fKg9yLn7j1QwBfqVLScoLfUThvPFjSrNKWwtYBCXCGR532rHuos5BKsRWh2v7yNdjiXykds",
  "key22": "4kkBCBVoJfXGKXHeMmChpUeUVxnTJj2RBPLMhQyZK6cwT2QyYq6mqSYnwQMuRfuhUK7MmpLSc63yRiN6fVSymcL1",
  "key23": "4ruxFyPsH3a757ac6CiKgvJHbyBnSJVNnzzGVjuqjhpaGgSRGQZCNMmUKTACsb7DipU9gLQom3gYeCqFYtz1qdNT",
  "key24": "YFQQmb7b7LUvVHxu55dNVMMKvp6NNnDWedY6NR4RFHSMn9R849Psagm9PCLQhbSEDYwUQ6E7Gdy5QntE1KCuNBR",
  "key25": "hZ7L4dg11iw2YBT4Gh8iwdXH6Ai3UCApeUCQfZqh8JL6KfYLMaHMSJsZQ7vKQBFsYBfgHqGsNjbSqkpMHaTYeLF",
  "key26": "4fmggAd5ft9rQQKLRjEEYDDJjJVZ3SyhvNez6HzFiLPnu1MYFeFY6nc5H5brr8GuYFEb7sUVDX9McZKNvf1b3SCf",
  "key27": "4JkE5b9dVGg729Q64FgP5RxpwZDW9teDpEUuzP6TTehG6x3MfzaMnLj6qARfyRgsGBDupo3EHJpnGPaHfzmB9oiR",
  "key28": "4N2JdvQoxts9pXHNtJVgWtfqoU3vg7NNrnALj8L4cKVPTc6gHYAcdxpKkBGYgjohWbek7t2CSD72JopVRqgVHizJ",
  "key29": "FrLkotoqUg52cA3EjabjNnktmbnsrA6g1hmpE8kHn9k4GtG1c2RxNMW9hMyWhfuiv5U9XWugbH4KoEj8zta9N5q",
  "key30": "38a3Z9hCuNHjFKYVBGwmeNMuA7HryWbq9QPqzQ9zYEdLftKvhYfA1zx8poQHGshHTL4FVXfzc1Ya7GoZpnB1cHkQ",
  "key31": "NNz4aZToCE9KJtw5XNKAtMem9vsGKNW7ma3hwkgwxqnpRxqTNxmPKutFig4zk9Atkt11qJRcA44eQ9K1WKNU1UP",
  "key32": "4HWZfeYr81ZQCxjDD4DcJi5nyPrZvDpTGGthM3jxwCCBJ3vDkJoyaYZfTwCoMGQxEgPRjLHomuZ3CMtDHCYebezL",
  "key33": "4SMSdMehSUHbL4YSr1B1y7Nc9aLfGZSoVGsBWzDHeXiVzr3M8fR5gzfkwhj8hatjjeTEKDC8npmpmruKEJeddEP4",
  "key34": "5D1pq2oupRtA2xsDcasxWcNWL6om3yuQnx7Ev1hhWSKPkxYcSbyoi4pduGUSFq5StiLNME67LeuZ7rw9AN6vPgKV",
  "key35": "31dpFrQsFH365Aj4W32VqwheuBbAiXUSjur7EBbQa3dZPhkphcve5QMrD2HXVjAaoVoD2ccKkwqEeQmU5DMQogHM"
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
