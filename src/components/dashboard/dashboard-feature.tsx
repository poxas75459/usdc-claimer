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
    "YyxRF3xgwAwiCmQEXLfEWJSs2UD81trkup9HESkFJKKhHyGzcFYzyLsY92jqS97LYCXnUpCCaXZ1Hh7KzYXwRDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mK1kMTq1LYfnfxCBMeg8V9AsKsSi19ktrpg8CJ4JjAfEqSoQpeipRiaHSTh48DP2xyLC4QRvsEF5YTSFgPN5ii6",
  "key1": "4yuEqJWdgu1ArdgqwBxkDd4Ya7B8MjSmL44FFg4V9KcB4BPih8nhaxmxffeYNamzj6DWmcC9YcLWhnbpDyFRD3Lz",
  "key2": "67pAvHEM9k6qjvogN475WLeWuUkpL7JPbL9XSrtLAwALDVfwYyi4uHYF6mR9J4iyaLJpRQ2aE7E32jY1EN2GqQ3V",
  "key3": "ABaN2hp29yUpnaEWsCF4MTj5UhpnAPmnBwYWmnsZZGdJBipzUaQbqkokK1NkyCbSXeVg6MHb7wHrDjHi26rZric",
  "key4": "4Au6FzQ1QArQAAnreZB17UyqG7Pvr1Gu1558NmEcv2FdkLLsxEpA5yLCAjP5LSfkkgo5LwJUtwLC48vRhMU6n2GV",
  "key5": "KJF5MvHNomtc2kXN8P8dVaDHcqCkY4VvnvLwWQkgYh5F4d6YusHyUHX4gJse9ZYq9SQgpYKeaxkQjc6Wntg5St7",
  "key6": "67faechYTTptRCw1uBbyvNdjJADoE9F2txFtYpPzUqwuv7e7UTRJWPHUM6wRMT6QCuvXXzUW5amrwALCyJfmRhvR",
  "key7": "uumFJdRNbYez1Q8akW1scC1b4mxZyWwBfRgeWjhHD6TQg5zPSohYT5eRFZktJ3RJMLt5MrkCiR39hQMgWpJopWQ",
  "key8": "PqwVspCDS4FereLHxUj9hr2HiZTwLB1d4bSRmXyBdSj51s9QsR5YZBnZAvU45B6NjhzwvUajevjdFZRUKaMERc3",
  "key9": "WMjm9bDkBf5szrM8acqPHWGG4y6zvCTTsmAWjffzfpRCkEiR8GqMY1pDP1Ki2SQqqMKujG4XBQXxg1fsaSwiS3Y",
  "key10": "5VTsm15b2akVGUWANwBzbHhCiJTJCsdQAq3SvHZHfepBdF8uLqKiWFD83DRSRif6p2qspYxNde5em4itRjYu4hgu",
  "key11": "2dULhVTdiT7QEjRg7HYiJjASJMmidYAqGV6civJFo3hVfqv5x2FyFaooP21PGJgzLBk1hf6hPJj2qhAKZGEBSWZC",
  "key12": "5JRJfSV5DwFmWQxmkBjHY3UEaAwscMnAuemcXTBhj2NN7VAwx6KaoXwSGshZ6YhQC1SJpuzNkQS8RAmWCRT84YWo",
  "key13": "4TBPCtHQW6SA8PEjXh8cb4hvk5G5Hvu1fqQ9ajqQqn6kCUL9x2RcsWMVUgKabsRhJZLgYjYzGawgC59bRnjV3BnU",
  "key14": "5eM83LybWm3fvfARrM4TzQhmvG3NaMkMXmaybvfTbGxSPSMjXr23YVCrj6uNW811DVF2L1f5rNUuUS8mEz76jwiR",
  "key15": "41m7CwPT5vHC2YFXY479Nk2DtnRydNQ79mocjKYcgMVHGCUPubiTXnBxttPtoxCzFT7Q3JxGhiwtpxDzW6Li3RVY",
  "key16": "5uVboNNxmdtc82BHtT2sJBpcnfYED6uQEsbP5HUC28ANi56TNaQABhkwP8Sg2j9GiAykdSPvWd7Ly5rM5AvouNe9",
  "key17": "XxKJMXMEzMvCEBHwzDraC1au6MuFkftuHKTe2XW6tiabss6scpbkLLzseHqDfp9ppwGxHtrodCyGJ6go9FRPk3V",
  "key18": "2Fttv99udqEB76HQtp8GDqQLxFSb9jAPxhfFzKKRpfRK7W8NGWRadPeE8C2uhrMqwpQmQBHtuseZn9tAL6eNsDv",
  "key19": "X4UCj21NxfSzBnwG2XkaLb1CH5EzyaKMAAtszqzEuQEVoaK2k11ZBqebvqLqsPNApjNTv7CoJPqdcVJi4z9okdo",
  "key20": "4F37ErRYjog184r3A3toGGCxuGKUgq7GYTbMkEcmU7DLLJpQ5coK75yxyQyrpiq8w9n3WvRvuJxs5Wx7fo3hkdaX",
  "key21": "3ANYNhMxg1yXf3tdxV1X8VNsmus42Cpj884rHyoVaDJnAd95Wc3VFWAbE6YBmqiKmaJ5hEZQbtfKXkNPuJ35HwRB",
  "key22": "5PaBYdrEm4b3VnXEAj4rPjT4KcSmJbVfCNwDxYS5onXRty85gJdZAkebT7Ty6puDv5JJXmy9vXkzEwS8CkdE7pFd",
  "key23": "aVy4P1Tr6KkJgPP9Fc51HHPcaZyDPBFtdyhSNR6LB5rTHvQggDp2LsvBnTsc6bCFsN6wuoyYfioEJB4ssq21qhs",
  "key24": "CbCM6JAadWn8XvHoycxymod5tLEgUuY8bMnu8nAawHr3Mvnvr91kQUspJVnK2mSWMxk6sU8WtkdnurFw8aRWfg8",
  "key25": "5FDU3MDD2FpUF6F42XaEPAuxrgdKkA1R7j8DMVfUbLTy57GUGoeX7QW35eS4GkbPin8HESmsxZ1XRYwTRwYRB9BW",
  "key26": "2EpEbJT712E5UJzS2oq8pb4awAgGmV8afuZjhV9zcSHFod6KDi6i9cwkNtcQtdgbXA1XtsAheq1VNZKTht1XpdnS",
  "key27": "6bRvVLbrfVRMtJcPgpXPUTQhUaTQBztT6gKADWkrk1rUnCRCqd9aASrC8CAteCLic8CzuDEooUMUQhNwuQp4oaT",
  "key28": "2ygkHYpJURzUF8XRMcoAgkwpe2aRmZMtVPC5bizh9itnVmSm4TGBFdfgfZ7jbi9a6z5TMk2w7WUPDDKKJ6xeYVoC",
  "key29": "4poBHjCfBUFHdD4MACdfxRjJygpoebVyyFemtndTDL8DZ17nfuRfF1rDZsMnhTq8X8AcKZTWb1H5ytY1MdvQX9VU",
  "key30": "644JTzVmnDJu5ffszUR3wHTsHk9XPeLWycP8RUaqxqrH1D8RwJV2oFQDqkoKYotvC2DxzrSHgDLRUdXrzCS8Rqp3",
  "key31": "21j4ttAuA8hfv4doqBU2PBHn3qEuZ6nYZk4vFZDmbNhfViSTNT4j5Yenb4djY7P1WNAiWLBXJYEYK8Q8MQAXWGWw",
  "key32": "2v53vWpMi6LstNgrSqrzgjcW1ZVAX63uKK9ttW7gmef8c2PQaJxjnwswqTL7NMGwB6jbSYnHGF8xaQmmvYCVz7Au",
  "key33": "4JEyUrZihVn3Zsh32Vdrx18s3yTfZwpuDHA3DwusP7rFYNmakFNLBbVWz191Za6BaSZhYkcAQN3sxBrb1nkSF2Kv"
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
