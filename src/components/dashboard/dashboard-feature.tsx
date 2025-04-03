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
    "HcWrna1eNpg3cNhx5meJVVsT3XdVW7WR49jNgv3TxoHfzZCQfoHzAa4346BwB79xAbLdqVpiRaKU1bRqHyQa9SN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C3vmBrk3d1cM3rUa2QDen5NqubGkwXts5TtYM9t63e63i4E6HYR5bUpvA9sg45tcNgRKiimWvmGaWoqReVu8gwu",
  "key1": "DktMxNzq2EXqYXBpQg6vucuMeG76o2ok9zWGsegsAUWwgYpYmQpz2MDgad1QnKchEi4mtxYrKUKLQ1LNhdLWFuA",
  "key2": "2BgdwXRCqZBKGC3zMwH7iUrRBGmao5N6q4Qp6xFEX3dnrfKFN1S2BtM1rXDKiMZt2y12FMUZaMGabw6WK7nEaDBP",
  "key3": "5mfGL4P6yv2Buh3ueNt3Bd1GZxVRfaUX9r4Jpr3ocqDrXzD26vqFVDgZaAwoT4qBdfwD6UPTW4ykQZ9qgFj1Urep",
  "key4": "4CVYVSKdkFEYSKogM1diM58oF7VNerMW5AyioZNxz4EfJiX6zC9NSn1jzamAPSNDmdDzKRTfcHgcCuNt6br1QxkU",
  "key5": "3bBikfcACaR987Pjx3sVLh1fRFfpHJRKWvgBEVaGu7Fr6nAVgoqrgRXRUdkcexPLtkw7zv13CTVTjSmj1hmprZtf",
  "key6": "4QyTWgAiBfArxjF3KFA2hZM2zAL3wRQhcaiX7HPJpwhBQvTCx85gsaDWJLFWQPEYjo7J5QGs9CuXQ3ZPRwYBz3ND",
  "key7": "4BdZ5ddJRwZdu5V3qoXVc3TNx9yd9J66ihMrXzMAh4bwRZoGMrwXWC92sUmEfHRdM9Pp43xja2Pvm762SJCUYXnW",
  "key8": "fWUwNHDC1wgE686TKxuFGNT7yeWnHqpEvDQzbqhxtXfTxdRYz3w13gQkVAtLSXucwB8AzCfMM8AwsZWeSZtbNMU",
  "key9": "4ZVU5dnD29ZAXtit8h4mRvPQpQx3spnK5qq27kb5phMFmpZZvFHMU7pZkiLg3kkJX2KpSHxmeFjE65tmwGJVWDqU",
  "key10": "4EvyMb8sCtEHKxse24iVT3k94TrV8e3CwsbLycicbnGWNqz5V6byy4HvvQEnzURYNuSTPy3uWqgSDrss7dfwLJff",
  "key11": "p7iitSN8PajzsMHViN6FcdG1bNtuxhTNbW6qbzvZmP2GDCCS7BRa418DJg9P3eoyCvS7PaFQQ4FcL17gwKA5MbP",
  "key12": "4Z1oL43Xe6ymubUHSNH2b5S5wdRLnvbann9mAakMvkvJc2Fcb37tncdKx1bMYAjnDJcw69Z1fRHsmB7odi9vJppn",
  "key13": "4RZbgvo1CZGtLPzgT4K3H3HBKE7GJghu7iVvrrpAtHyrz23ER5EUaYfDRgwhuNeMQszvdBytbVePdG7eTzM2zwJu",
  "key14": "45ktaFuRPHLhCapZPKpj7VdYcxFykUKRrJ2qbnS7puRM4NPm4rVkrCYGyY5S3zuMdccWmaSFsyKpUfHzTz6bRztr",
  "key15": "4RgGnUSd7NWZzBmQgE1brDqWmYz1EADuefP3BoYb88G5jUiFouY7jA5c65VYpRdUR5ARUDDuDqTgdKpZ6eWqBBMs",
  "key16": "5BVGo7AEHUvfgemU4HKMRKd2X8FvEjXRNhRfPGx8S4Bi1KNsDgQHyws6Rq1n6qoTAsT6q3N7PmQwEZZ24zipkZxZ",
  "key17": "2w5UYLRJyhwcQzm45DMtGepvz4Zz8r1ffw8rNBexNH4rvA4G5uSafDEDQJFMEb3eaoCPqSKCWuoGhgddtL9LLecA",
  "key18": "CorpsacDFNnfcELG5QhHdgNrvHLjRKg2Sa3ZAwFW6P6boEkzjY1wMviAdeQHtCuP4tR5Gq3Esvk1FFRF4pf79eo",
  "key19": "5SHqd7D67oSd2pcGbEDscn9yHsqzvVS86JPYuNUeDDKFofPsDqRpfgzw14Bu23KSeW7ESQe13wJpypeCb8C9NvoG",
  "key20": "PBGeYr3nYhTK8i356s5fAZ5LzzQzUoAQDN73tc2RWc6Hm3EQgXztNL4EygpPQrV3PCN7JPyE5Tiac23DtfYfGuu",
  "key21": "4WN3KAg97gbN2FyCTh1Kbk52tTAHaoF7UX3uheA4SAaxxGJJ2Zq3Q4vvPh8jJZXvi3mR3WajFLpe44MjdvgvWVmm",
  "key22": "2noQj7VrLt3GuQL2PGtPwMxXQyKuvVY1qs1Tpe8FKfdps8T3mvPAi51Z3y1EdSAhLwgXPwPMDRCA2NVwtmgxdLkq",
  "key23": "2YUXy2szKndCcNUCbKDaw6HR78CYcokYmTZz3176kyhM5HN4khd6QP9C6FdeyLuG5DrUzGj1yzv49Wvc3m69S8RB",
  "key24": "4AL6s2KST5ukFbnEedtc1iwmAFdjGKRgtLs3RaWzMdhf7QFJLn68sv8ErqHqQ3p4XaU6e9XcWSaNrEDvkXH9KqL3",
  "key25": "5YpZAtWXvd5ACn1uMUCJzJazbA73uVcv7HFMujb88Apoy1TA7oEWDBDdkjE314UwpXDpCPSLmScM2xZx5dbFdSr9",
  "key26": "4DKDTKUt9NPfSdqm5CLB8zLo9YzM8jtc6LadG8W75A5Nx9zhwX5PH5bqDh31ZNqUmhtJfDE56asxVVtHocf7oFSh",
  "key27": "2RJXhoboqnHSrzjKFKpd3BZhCVmaDzaVFLndkyvVcDNni6t15ELHjevzSK6JNZGiKhS7g7FifLDjwHZk426ottP8",
  "key28": "374Bz9r8mWMgsMRtbZuAvjcfaHgW9codc5Hz4tGqBf6RXmUBYpHs9P4csx1n65sEAs2rQWbn3Y4hFNTGN8uzPDCJ"
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
