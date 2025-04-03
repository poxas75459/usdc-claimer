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
    "3KK2mQQWWVnrBaVV3oEqK1G8Jq5nat82TfcJemXQYHw9TwDhTidZnL7C1RHKimtkrwPcA21vT42JAwhbHhbzTGEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AaPwBaA3pyZuW2kNMp9gQuRXSBzzrANGHseM83M5q42s8Nj7q4jBxvmNhJDZKQo8a8r2UWsdm4cfMUDQZEMHVhL",
  "key1": "5VaxgeMJsJDk6mSmcXGeivnmAQxfBDSv6Pmmud6hu7FWX7bYpT6rB6JXWVmAbRN2ceKNVC5GsPisxYfMZYny3CL3",
  "key2": "jn7g51LKnAEaHjR5c7otnsqkHqEH533VqrarakQoFYKzKFu2g5P1SqmAp3JRjPRYki4psDoVi8ZVbMKibaKrd6M",
  "key3": "sqj9aLJzYNsUwidFRcLEG4y3eqQeXyztkajvGV2Fh31MtXkkTZdvtTLbWDRcM4sj2mjCf6udMNd6kMKChDPGLDa",
  "key4": "54Tb6275L7oWKVRfQSAwVGcsDkPK165u8NzA21k4pfECh9UmBQ9Mikmz377Txdh8onoRHi2DRDA3pyL2yXBThCAV",
  "key5": "3YzLeAEJ9k1Mbavpn3qrAC3kYZmY54mcwiTHU37MYSfXxcc4uScUeo8KMmUFcun3tXNoTDCwCHFfcrKephhGwREe",
  "key6": "5ucTkkf2X3A8R92ormYbJXidN9v5iWm9evTcwc6iSGWCGXhbL8j4GAr9RrmVCjeaivtwov4MccaF9b9kf5xgiBFh",
  "key7": "2yR8qEr1pv3WUQ1HKx73bbLu42qoZgo3Q2nX8kK4wXpxTszdiDJ3KYGgsvDpgoZi6FHhQtastWbg4sQR9NDbBWDK",
  "key8": "2QWdXAdbcjKKRKScRUP8gXJhwUybkJxK48J7S5npcynG8qNtr599XCRpEg2ngF33ihyJmmxAigxiDvtqNsNFzCq3",
  "key9": "5Tbc52LDEHEdvWBEhbbVdVvg7M9QCnvFgj4iCG7Jy3oRXq5Y6YfRcuHQCp4mSzWWV84qzYxAwPLQt29Ui9iw8m3C",
  "key10": "6dPUMo8AYyprEZFEgZVawzS7iaHphgT8gPsdE2b7WGbjJHN31thAmvVQQBVJNvU6DWDVp1gJMP83LzRwoXPrwNK",
  "key11": "5LnvFmro3WZQQWmFmZRoeDieSpUPsWHhRRzQgxj2BDuLAZaKsdaKHQdcxFVXAmAjZkQ7TZMTBgBLuxEv2ACNoLxX",
  "key12": "4nAPrn7JKbFbwwTPkgG7zp72Ux6AsgATgYXhgfgdJhzjYNub1c2TqGQ7MDvq6cuVdQSL44DBx2wQm1pdhwUxMAT2",
  "key13": "4MZR67eXLCB8Ur6sS1rDYg1xGrz9pPKTSE9xs4sKPbUEmbCg9xDZNsUFYdahVESzktQZdWoznXiLxTLZu7kX5w4X",
  "key14": "3tY9SdfgoujKJYf7xaZNyzLWjVGbQVs4gyjeXkmZfPftoT99KapfgWyD1nN8d1DNThtpsurQ7shqRwK84ZzqrK35",
  "key15": "63YHvjSSTDbmVpwm7N7FbHKgPsvi9XVs77DPMnoGgVq4iwuFEZVbKwSGjA2eQQNR6jaPkQUbhDCJjq5z2ypsb2ij",
  "key16": "4bpZttxPrmfkkkb8rVkbBaRbKyVd9fa3ZmirxNgwFxHJYJtqgcH9EpY2eB3oU3BR8asNzHfDeRF9nudUY8yc3TZR",
  "key17": "3Y5LBS1GkkpWkrKVLMxDV2pGKiKmULYuN9GxjBF6HZ9VYbDwfoLJNmEA5BehSwAQGJhEEQTuq1Uzawa2H8JHLzZY",
  "key18": "4NeevUVL392XWhz4LfJJbDFo3VBr2AWyrZSfpmRRMv5ijvQGFpQeb2GjnxuFLKy6LW3aMtvw1Udic5hPYCN3S8uB",
  "key19": "4iAfBR2bxVG9qBruKVBh8t9RyMzaw3M183tPxZmiCcVWHWfMHSPDzFG4YrGjuf4h3FAy7kvLXd4eY1ateDVfryUB",
  "key20": "55xQfKyx99cYmGeFRZBsXjjS78unf2cnvve482msYCmr3TvE4ASnaoAHQytJuZSubdwJS6WsJzmzfnFjbthb6ocg",
  "key21": "2gmuyh8B2WAgArVsRG7VhQ5iS1ikUZiygGSMW4gk3cs3sxsYCQwWmUQbokTikPVGG3H5a7Xebgs1a2zncHsmTXF7",
  "key22": "4q8AUaLcPf75fyBs5q7uN7fiZ7ozCKTdu89nuE8HwU8HhsaNPhdBARxRmaMU5Vjk9a3v2LdXzG8uphnGaPmZxM1L",
  "key23": "3DWj6eEJaCYc63o3sQf2R62eS26UimG6q9JLeuRDRXdQymuZgmEvSLkTqdRFj7HJdGnwANuNnxVtwpM8BPW2RvTm",
  "key24": "5KkE4Uy1T3XpMmDXu6SCdtykVH5J8j2fgW87hzgNSTHknAcaDLrD9osaERyktusw9GAW6ji37DCMoA9kTWetbzTP",
  "key25": "4BafpuWqget85RpzN8XvKxy2xixuHxVzoUzC9eQyrdtZNWGXUGgoH1y67t5aTNSJK36wcVnHZKtWw4M3MH5Y3wXd",
  "key26": "31qruB5xzb62gFjd9W3nJrELq4cWGA5jwMdJxCBRAmrMhsA3RJ3oGqxaFd7x97Hc9xgHHjajMHpZjcgh6fDGGfcD",
  "key27": "4c9X6mdXtAmfnefirTTsvrTTuggd3HMUoxVN4rcqa55hj3wXaCz287CtS7kT5dYhkGn3mGhQEuFz3ZfuRqapwPff",
  "key28": "pVP4uELzGtjZxhPzwtrKYGGy3c9P7CzRNuBivTyVza9B8obfefHRMiiyuTVWVrcTRJpQr3b8DHgQ1ERuR9E2P2i",
  "key29": "4RaAEGocuyaQnoCPxfbqBcUVUC3UD4YGC4TY4NT6uJdZx3pbjgKFDyR7uFryNeHgR55GqjTzVCWPT2Ffg7eQJvRP",
  "key30": "52oY4Wd4X2eXtmurmc7aM3CP9iqfabCg4KndH4eaUoC9iE1TToxnrwZzUgeZ87Smu7xtQEwaziojw69WbStKR2mD",
  "key31": "RpjrYhdTBKopKHafyvvyAZdDt7aphccuvVnUJnzLtnm1gN7y4HuGonb1y8xm1uSqQgqQywhar24Pob4m6gQzTxf",
  "key32": "xELxVs4SeXrdY44ZArkGkpZL7WGasYL8mo8sVph9kXt31nSe17J6Rjpinztd8nz8HNA4nQ2a7rcJ7ZN72EzgB9K",
  "key33": "5V7KsP1dBGrgYq49FLkDop9PPH5UcqLrW21RmN1J4McguFPywEKBLK4GCsvd6mTp2wjA2ZWuueEkaSo4NdckwmCL",
  "key34": "3869SZZrcYNGD2ZgmBediRssXmdBKyiiQbEeVRkzxMeYWzCErZHRg4GYcrcYEYRgye6weKVSeAZZB2Kj7x8mnAi1",
  "key35": "5EPv4T6Qfwjd4FnwWkX33xESUSGD55q4hhspPBGieKCeEX58BB64yJXSqvpoeitbcDpxKxuVUbKfG8Lk5Buzngoj",
  "key36": "2L4DD8q2E74bwaW1M6J8GNUZdeHGfUpuVqA7DkBQStd4t84nNh7gAeg2TeUXJyGxCVjqsCi8gSNDS5GzpN9wBbiL",
  "key37": "4BharjuYinzbY2LXTeJxQ6wnwhhbS9EbN9hkPqw4cmRMTkcJf1re6A11bi8DB1214opCSf1hUsQqNJMTWY9XvR5o",
  "key38": "2jpCzq8Lnsh9pKVPGHEFXpbvdk9djWWM9j2e9U3E6YEz72KcFUdh34S9JSDWZwnBHSA52rrGT5Z7BhZrmuS71T9o",
  "key39": "v17cjBMWAT2XZ69VqWoK1ondhWs7L1oLgCzZCFZuekCHv7A84nobtJwvfNtLkKrjJoM3yNoPomMN9KfXT7CzqwZ",
  "key40": "3T2Vcgbxh4mPnsLR3gnQbMebrEsuRQpPT7QPaaj3uM7jyQae1iLB21VQQbZ7t8JLSzj4rATyXLbFHG9ocdaXvmj5",
  "key41": "35oC49SWHfsyLQHZPtTTwQfsReGva8FV96L5bYbyqNiJCqp5cfEN9bZeppt6DcigzHMdkxNMYgLA7HKxcXhYVifm",
  "key42": "3TSaJDZ3dWPpx2zcY1dR3aBKe2EkRHR5usUotVqk8t9EAB6EVTaLyBvtjy4JeYuDvMiFoLaAeToRzX18GVRUr8Ec"
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
