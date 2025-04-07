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
    "5Zr23BqG6NtRo4DC2vJ9ZVmKusuvzrRdyYf2EBe3GFYnjuqrafNk93VdVaM3Dn61Jgw4Si8LMXMab9yarTuNo99y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZ32ZUHMCzBDo578dUe9hYSsA6t1GktqcsWtMMnR3sNpnLgL8W5TVriavqngVdcNggBH3xhgcpxvnxWEWREm7L4",
  "key1": "5wQghmh5UcBxWGktabPUfcbgJZX7BUz4SxKpM9h1jvpPxSZRoRreKdhmTaqzYpQCwWkHEf9ggwLoU9781RkUevY4",
  "key2": "2Atg9PkyFH6dgw68KHTgdweFHuJdT6wNddKsDoUdskttQMtrbj5oPnB4GpoaNujuUFrDFKewHRxm7ik26sgAVfVa",
  "key3": "4DLntsdPUdWWeLeLdGbfJGb22SPxvz6toQoGG9p7raYx7rWNxrQ2HBa8Nm6k484nAKUyA4UsQLmnJXDU23x36bgi",
  "key4": "3sY6aESbZWdSoHb4WrWVdTGwnSRVGyLNuK11L97iWEMPZwwkRe9aH8irYRUiqha7SpaqDMTyV4XwEeFoDwaBFSTV",
  "key5": "2mezoSkteN2HEiPHCPstu3yaySNkpu6fEJJMbfE1dV2aLpvCToWhaxe1DL6WCeGujdLxekdzHZn79qAV2VMB88it",
  "key6": "2CKJb7ZUvmwjzYkNFdoM887MXRBmaNgMJmQT4VJEHvn8JmznwHaGPEQwmFYu5mBWW3WtSAeSKdjeVZQzWa1m7pj",
  "key7": "5AioT1UWwNhLSmTkbciuVdkgxdt5nTCutgXfHyedFeLNDbFUwChCUbFNBpUfLoEatuSP2SvmxxunzpLQYytCUy7e",
  "key8": "261WDf6h6KbeAj7G37WUfNdq4gU44gd96paw6bZnxe9U2ECmnoH8ZQSwidRx8HLozBQi5Hhz2tjSP4UZr1mFVcPE",
  "key9": "235gsqi5bK4j9jguDxTEjuBkmULbkynMjgfuFdLdPzztK6yCumV55Cu1QaQah6BQG4YMqQPmpPg7vZzHq2hbgyBc",
  "key10": "21ew5uTFgbX3MJgpdxGgxJutPo5MPWcwzpkaGo5QTQcbvZX5Q412aypVkUxdXC623eo8zG59pH1HJMbveSmJZXAu",
  "key11": "5cpvHHjbrgX7ckfrkp6Ks55kyB31X4ZcsQ4NQe8QCzAnF3eboP6s6L3Q7FzoXcgeJstWJYLmLmkLkEWQ4cU4qBRL",
  "key12": "5dvRRm2uWDdqCbrGhTNiop1zoeaqsdxLquEn7jMpLNsCuDCnHgnUP4FGXQ7Ci9mqthyJKjpRav9T8DLP3ADrgZ6P",
  "key13": "24YUQFg9DmqHnPWjWMKjL2U77gNhqDHiDds9DUwWLA8hWr3bida9atNDVRsojr4LoF77HpSDv5TUTecDf4mwJ4Xe",
  "key14": "5H923XxrStsjYxnLqyPxJUK8yeGG3sVnatsctYcR78xhGHVNCfKjUtLVcjr4GsELtfgFat7zFh79hWwgvaWpiAVY",
  "key15": "3QpNAmxqb9R1zkzGjYKL4XkGh5LcXMLNR376USFkZyWd2AirqCCUcy8trDq3cYQug1RUQLMwtEvRfnvXR47SYEBD",
  "key16": "3oy24NTMTmDUjYt9Y2xrw8dQSzUFHyFCxywvKthRRQhttkz3UWviqfhXjabUXCzYK4d5zsk4FZ25dimJdLSN8vux",
  "key17": "4z9RKJGogVMhcEBRwmK4h2n2uZWytvHvWsaR9hiTfkHE4SCAw9KeUXUiLxqfcuuB4BGFCCzSMKZqec4qw8vZT9Us",
  "key18": "4UrrYEJQxZFiKUn9Bm4Sgx1pt4NFpBdggYgpFA9pzFwPwXowrxJQE4pGb4UetJmCzGeJMGfRy7G4kTDNpYFfSyw2",
  "key19": "32j4qwzh125Q8thTcQmRUJ3HdXM7NiXwSxAW4zJA3pEFhNjog8tuxmXiQZBbnQHKx9VsHhJ5cQKtaRoimFyBHZKH",
  "key20": "2FAGELh1yZbeP79QhNyLc1RMkB42vWK6EtwMGLzEj9DNHBLoHFU6993M2Wu5nNN3tnQUW8Xh1ADY4Xi7m8LrdfZe",
  "key21": "4TsP8QNSVwbrd3b4kHqF28prq4Qv3syj6Hf5VnQ6yN2wzH47xPHKSTszfvRAsxN9RNDPkXQibeUrEXNF1nufCih5",
  "key22": "2Mrz3bvpUq9mNr1tcB7q9kZScHc6Hw4FWed7SLfxNKYpJMoCwqKQDqPXDkJdgWdjPTRfah6ss1THqNcGCu527gkd",
  "key23": "4SJBSMa8D3aqSAmKhSbZnkXxLyxQb3eafeUJpGzEDNQjrDkpH88f65w8WgEbefjScsopsT6FmukGHVBsPeXxvVYL",
  "key24": "37v34CdJW2LASk5Sh29xj9SM9qbFEU6FY5E6oP3FNpis3vsh2YJhsphh99JKFMpKFdzmNSgN9Pwa6GupV7V5n2U",
  "key25": "5RtGDRbMSX9iNUHXPfUqSRsruvqAZtG859kuVoR8ZMgVQAER9PMAxVQWAVit9RvaD9ar1TJ9FxmUTG3PvnMxVXoT",
  "key26": "J86sBC5PbxVkAiS7kRanVPsE4VNonstNwr6p3wp1ghp1d4Pnum5sfM5jcp2XxrvYCY657FFtfJK3VGvLjBijyA7",
  "key27": "4zHbUfG3tYfLtaAFe5cVkgBj35QfRFJQ46TT7sz2CAThrcFA42UQXnCivAMj2qwVNn6wVLyopEHR5MMYf112JpnJ",
  "key28": "4U2x6X1RfDpJRhtP2zjFL4PE95CdDtTPjk1muvgcb8eLwCDdL5c9M77Jnsh5mt9NwMvyhLTwDArbVsPRJ2oBpELF",
  "key29": "4YNScbnMw2BmZjMwukjv5ZLF9bWbCBpvvwXq4zFRfDSz8eqZEtwoSpuFEpcZDEdUPPSYFF59MtJS31GwK8ynWYzZ",
  "key30": "AfmAab3J8XmquCgjaAvei2Zdg6EZX7m8LoNaLdyo2YiCvgevtNjhCe7EHbskKstvnxK4qkSKyToAfMxPdJrWive",
  "key31": "3VKbhHZjmxsfT5yGJiXe6ZnKPm5yxJD6LHZdJQJcLQNDRkKTxMgoksQggP3FabhQ6omkJ8a6hC2PBdRMrATD2fy3",
  "key32": "29LfJUvvjHkSoxWh4raRXSt1WbtwBDeQPUZ77vQoJ69zbWNKk5BFK7gDvzAWgKa8UNysa5AiA6XYMEayqVmk6SuX",
  "key33": "4v5hWvdq3Cs4t7iiJ138RAw5xEML2TsxBp5DTwu4LgL2U6DWYs8xQjAHSFiAFEUKcWiwT1ezE5EzB48vgZWxJ69K",
  "key34": "4hQHGQgmgui8mQa1WXVEqomh5UoDxZNmqfX2kiiYBdVLYm4toNpLNqyMEdmTLo5otBfpkxZbvKEcu8s2LR5uZUuv",
  "key35": "3TKXUktEdbp9hdL9AhnGGNrXNYMQ9XtdRzKSfZJYE9QgFN8xu6vCGEkX8ztTGNuQ6bFbakz9aHjmtm8jJpNTziB3",
  "key36": "g1nTDBGevkiuHduUETF8rjVqw2K5rCBz8t1JX5GdZZjAi2mgTi3bQykXHz5y3QuFveSomBKWLnh4yv8FyLFuRgf",
  "key37": "3GQynQNu1qUoJp5Vau1xzWBjvz65dfe64DZ9KFkZjKAc5n2vJuLQXGLPuVX3jjgj4HwmcXyaLXEuFGD4hoSxCToS",
  "key38": "inMX86K4fqgjPadnmB3HKY4rty9eWm3U7tkLme1rBSRMBesLv7pfAKbBjb5naLdcSbBE3CS3DFW4WkuPPMmcVpB",
  "key39": "EdCwsBSoUYQU57qudZvbSP7ym64rLWWV2Yo7cBJoZtDpCi8epsYBUQJkJjipir4GifMYs4fcejuSKiPaBVEzpQZ",
  "key40": "3pDZaUsrWo2PviAwH5AwGFxapvapW9F6AgvkbDfYu8yR68zWRUp8KSGSvPVVSXVnFen56q56sLnUMjWTBBdxRMFo",
  "key41": "2QbHMg5zCZqorRb1LsS6f3DFnmdFvpEavJvqngZeXdtoreKgift7ntSHxgjFaunEuZHGMitK6MpKQ2W6jGnembRk",
  "key42": "pwtKsovwoV2fDD1aK5KXxfpC2z9xMP97tTNyCJo3s7nXqJSyfDhJMrz9oy7VQcSGiBkqzHcwjSYxHyJRYvkv3N3",
  "key43": "3SnhyqtvmxRL7HvazVinPVGFj8VT4XkzUqfoiDBsJVUb9yf3EmmYfhHHomuzcCj8vAz9n46yXbSenpFiRaFUA22d"
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
