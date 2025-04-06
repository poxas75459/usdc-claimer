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
    "3atd6CT11XPpzAjDDJsSR6YGX7vscHyePYwvxnxhfDa4N2woLbSxx6VHYtM4w4i1wb8tLZsYeYTa7Bcn9Anaxpnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43eNPvRTMrhkYweMeV9FugbkD3BP95f3fkfDo9t7f25eg7qhZzso9uXFv1dDMAXD1DZEGm9kUqDcxW4KmXHham4b",
  "key1": "3ge1MPUiSofMHGTsfhhrQyu3hGD4QJ3gqC3hA8BRVNDTwAfdRJztQocQv5GAoeL8mzAW4ZmYG3EzekLDFoswLaQg",
  "key2": "55jWeJdNqR3K2ebtdfFZpm7emRB6Y49NjyDz3TuCf4AQQ1gQ2tZirBa89qf9WohPgeoxJeQMQQdmGu3fGTvFjx7Q",
  "key3": "3juhYCgG8ABKsShByxFUuB2MJLQDk1rfpi6povZX9zmtiuXodx6YFzmJVHYtx1CYbAhVCZhnaxa7RzmgDgR1mk5Y",
  "key4": "3hbnudgHF64AtLx14HVGA1d6mk7WUCChmCz2nW7mAUtST7snTrywZiNZVevm1HSMardBqAD2oYscScAM5dFvMGnJ",
  "key5": "4txxp7WK3apXNMvnRtPMmJZU1bnjHcBG8YpLqn36HuJfM8MjureL1UbzDVutWbwZFAzA1ESUD4t7buiym27v4de1",
  "key6": "55CZqHhB4vnf4PVtVJZRa1tCYMyKBfQc4MmmwscqjWn6v3v9EpsK99HvAou3UMFWQn9tbysSuo25rH7CHKG3Rnsg",
  "key7": "3ntp3dAfr9Fha51gjgFA2gfCpZwab7u4a1dZV1meSYNnRu9qoyxEMYrKciZwhWbafuBvx72m8ZbePzaegQ1itPUy",
  "key8": "ZKXE7RphcoL6jAPHZ2Ksc5RXQb77GNAswK6Ym9fqYsgv27UzsiSYrZVxMPXe8udgo2etJNyfy1BrZQKssR8K3dQ",
  "key9": "djq8x8gqPMwixL7LgbtfuVVm7QgzxS5fwSC6B9BfzwWZsSqAugpgKQf6SMSgRysixt1yLwtJckXPBHoNvVPwar7",
  "key10": "35uDPVWPXwS5v3RDjD96kLetReDnfELvfZxnPEGQS3oH6A7WUU4oJGiMicnT7uZsF26WNiTuJ83GuZHVERHrsMXx",
  "key11": "2VKaxvhFTZg9kfKU6KgGASnjFwULaUHUne6xWzJjYtMJ7BkcM5C9q7XYkKUrTFUDBfjTn7qrYcfvbSjksLo7zBJ5",
  "key12": "4pkB6GcFGFGjgiUEh8ZGa8ViqgmRoHzBKGh64wun2H1WcFZJNVF2V4AvqJCaPuKErL4g79n5WAVkn6rqQccjJpJV",
  "key13": "2R1rsgvn5LyKwMNoE1ZNaZiKNsgCj3rJyNWWe3F4BHE97m895oF169ZseBZ95amcLzVjUnqTnHAVJCdCGGdxEtLT",
  "key14": "qv6kXXWpjxtvF8ncum5UdgZcLnuYZhtLCA65gQH64U1GacUY6kC6YCz7VY2uYHrQU4JbnmMEwSpYmQ1XJMJp44x",
  "key15": "xXX61GhS2SARwhznvBXkEnb9xkJ6ojRRb15qMwPbfBs56jMhUPDGxfkZCGrf3DLMV1H8Z3QEPFXeTWyurr2pNX2",
  "key16": "46xq1yHu6ckhmboQwS1tEwCkWw98ixkqN2G3mUpCexQaB6UHhczuRpWDocCDWj8iL7Tzj9fvjUGj7iod7zQBH7yP",
  "key17": "4VaxTYdMDTeu89rBMYNCTnMz5jRZ5uqpCQimwrvgvi2d9PWCrMAJ5HptrecSoMvYuao2GzUvcnRnos2TE52oy5x8",
  "key18": "36mEiAkxNfiD3Sfe2vMgUt6Uu7apuDzNMD15xAcaUVdyaaPiTrrzQoQavZsQjCHSMgJj3xa9mRcFFfw5zqvmz3Ko",
  "key19": "cn4BST8X68h1S7VJFsBCDrJnQSmjC8hE8hRMZqZocpCJApAin7DBqAMuhXNCg8UTTuNjhj59DoJrJCBYAmBJgXC",
  "key20": "TEkiG9AkWNEvHFKpbq2HRDRmyHwBWdUGouPVt6BY4f5mHkzuWFKpwmKj5rAdktQxoYhTsE4eDgTjgB2uhRMExR3",
  "key21": "2XL6CmzjHoKB39NuggGxXdJKBiPCojoi1UzwAEhYQKgyUYcXtnqo4yWuLzZr3awtS9RUkrRJbiZWVvKQVhSNG3Ty",
  "key22": "2ooTqUdXx1TjjiFwXRbSQyYh23AY8fLrn3ivGZUTYX8yXmrX9Be9981spwzaDPxJcux2sCFcxaktEQ121jEbJ2Lg",
  "key23": "o1c7TMBeUhEHANaRYYg3WoQaRXCjfp4LRyG76KgQhn6wYKzXP2S344YLZar78w5xzYKRssifRMX7b3LZhmZ9Yr6",
  "key24": "5vi89PeMUYhQJockAyh3ZRmiTkwhyS16T88DxViDbkxWMwP5ehGdrzbcwnCXYYkVZWqev4AfqyKUnKNcA4JFyQKQ",
  "key25": "5RtxQXAdS9uR2pHA9asuC4k2ti4CUoTu1LF3uS4r6r9swpq5zAndhjiZUuD2RdNGnhtkQXbSpQytMWjPaCbniJjj",
  "key26": "3dkQ6Wt8QmCqNwDuZFANqmhq6GtpgPi6AyvkgU5eengd19EjL5RPUJpCZVn2vxaYLa9SLKDHoS4Bey26dBxWmVV1",
  "key27": "5RtZm2eqXx8D7coB93AYab5mCamEaS9Bxmjown2KcfcqYybtLq2sVGng9a1VTrJGpBwTgrWNYjuguPhxSswdsjxQ",
  "key28": "2A1tMQ9eX6NA8DEtGp84ZPb351zVk238CLVbzCmSB2pLLcFY1HBdnMVBpaEM5zPFUut5CuicMq3dUFM1K19u1xBT",
  "key29": "RxBZc9dNtdtMAy9iW6Pa8aUxsJMGQJfNLE2TjF8vaTgwhYkrjQ2MvdCPqUTFuJ3QDwcy9HgDhRgGVvG3eCkkuYE",
  "key30": "5Nxg2SSMZ4NEBzxXnEjuwQ1s4E9YwhbMhU85xAm1Addydo4n95CCB5yhz52hfbwmCxMXndmsHxDxBD7dTrCCFa4",
  "key31": "28kEUN5QmSeiTT4kyyqKB5X3XuiRhtvcRTpKadTpd9KYzs9UL81u5igh4qVH7AjmGzqAiF5PC9J3DNZHNaGgXtpk",
  "key32": "3rkeXbQNqy9pd1LqYsGr7sCVRn3tvNGQrHnSsAunKtuuLmPWaDiZXU7BntNjXZ5gPTDqrrRz7HVpSdeR8wSxfWnk",
  "key33": "5GFKd3d8kwP8X55myDMm2B5E73XWGTCeXLzZpUSoYG5YoQMxzLvpmfXtjbkRT8HaLh4zo8hu9BKYcjLJUrJQBZpB",
  "key34": "QdYD4H5fF6igzoUYXNagZnwD6ATacFsipsRPfp3F47GYxnQcRx3p5ZvhangCnQK1Vbz8NNfmaxuUzKe5Pah6xrU",
  "key35": "3AEvHW63E8HuvVqqcAkuq2D4JWPYStia2RxFNVCsc3ScbvNgcT9SrHcLRNSYiDvpsfK7GW1GN5kUS2sAqLJw4tXv",
  "key36": "5CNg5tn2VTtCqQLWBcvsHoZPHRbwJ1yMfBTqweou3BoDzPHJ4W6DbbtwFiThmc3UH6AWW28idsQYaVDb3eB8wvyi",
  "key37": "3VSyKhU4sm27CvNr4UYdCwxxTeJUZNwys4T7hsMXG5gpuay2TJMihVBtYLZ8sMUp7ZcQAixtby54srQXDARCH3LR",
  "key38": "shE2meuvNWyfqZAMp7GRSVTw4JNuhcKZRMEPiyEz4z7gp5BWtBLvX71KuzG4pDRWyCQdEJ46QcNSWPsBCu6Hd1a",
  "key39": "PLZwwBhFd3YjGkP8Pjo6c2yHaU8Uxfmf91apzE2avbq4cUSNsCp4TnZohNkk3AAiWy2oSx9FnHFv4weE4ui7Lvt",
  "key40": "2xmDse9EuGps123riuXhkVJfeFNxNvAQA9BQTPCKzptXxkDePbk6BgxHourZgrPKbNUBaveGUCZrNJT5yLSvyxUL",
  "key41": "53K7PbaG4tfwVr4FeXg4fGeDxHCuLay1MBtjMWbegi6aC9NAA8iw2LJ3e4bL6Po7Jhnv4mcajn3ZuAuNw72DNZuy",
  "key42": "2jhRA9R4X2YgmgpiBKPFzwqBER5TsLxkv5sd9d4wc4Q7boKJ1BP8MrZp8mgebn2ptbuxfTAemeBE2X5joWUwXzcV",
  "key43": "EhsMeeYLXg1ysLLX1C8CnxHZ1MrY6aFQN1dr9HJdADZJeXCBXtTKAm16mQWtvxSbepKmpiWmaM8ohCBJn2386dS"
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
