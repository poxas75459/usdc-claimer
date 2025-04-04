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
    "3D6wGjss4tyUX7TfExrB3qSn2qSCUbxcA4CDXp9uDvc192yDyh4UjrPLt6QTxN4Cp7CGtnUEE1361ZnSsRWa9Bp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dW4bQFnsPY9EhvA3f4PdSabS9YhQqBZGATeq5wo8EKyHi42eV32dzPLdbJPL2P9bPUybRHU6nhQLx2uyk9EyxPv",
  "key1": "3S2RSgc33v4WeMvezFHqTy8p7Dxd9WTHVyaupT4AQnFnLFt9tLWi437nEA5a6GiWrCLrYSnoH34C2jUwc7Cdpc2s",
  "key2": "Jxn5w4fCphhwiQp1yWeFpp5ZCBUjArA49Tj2eV8szswrhAB87EJezJJ5Fj6VJSFD7cbFeReVA7Dy33wW5xTpaJ7",
  "key3": "AzkLNfbdr78r7FNp4iXsVU4miomsxTo61rPzYrADz7ST98M6GYNxHrebtUmoBWDdFdBxbjW1ZDdPW4tYLXhUT6p",
  "key4": "2q4p32dxh8QKXLzKB7FbxowkMWfLDzrvArfiQjZ1S3VnxifX5erKHcYxMK3c2z3MBSbRVbPGU9CNz8d1sbiRvLRW",
  "key5": "2zPGzrfJPHY9pAcW4AxX3HBusRTAPC2mWuE8VFgeDQbsMhfYk7edrVBBLejKhZ8AVPMvGmrjzHcUkcZk2BurTEuj",
  "key6": "fekayZREkwt3DJ8Gpufyn96NSwMKGp2N74e8KCqn67ax6vk97K5d5VbtUd8SkKzHJVXoV73UoRRhGJve6HLxbg3",
  "key7": "2Zy8dmtg6ZTFYNd59w88G5MtqvyzKuvWpx8vJgwZpJTso92LoZPKr2ZNCXgTfYkUkBpXSCbuhYvPKYgUTn1XBth3",
  "key8": "3xC815UjPLtSYkmf6YEUm7pHrtvMkZUZX9Jvyd5SucaNazeUzeHNhLLHLP4vTRrJDnY7BqSXfqzfMHQNrxd6Qt1p",
  "key9": "2QJhWX5m23xuH3FdBwG1XiQubtsXmiKvfJg1YCxdKvtfTGasZHEhNTdNXKdqLhHFXs84Y8vnd9gZ5GTEpZzm5z8t",
  "key10": "4j6ioNvcvF9Vf9mJMXxqFEgpRJ3tFiQmCNauwK89PRatYtm8utQErvZXCeRLkiPXLmaJjUp7xevG6PbGvKib1pW9",
  "key11": "5RQtznemp6wenb7QTX1taqvWAuj6fzCbNsxtnPwqnXBwB1caA6Q9Aa6hk76HtrUwNNMm4St8LFEtzhEGefPBkutB",
  "key12": "5fqdrLpkMv7ingPq4yPPQrK1jeGD7N8T3eFJBJgVAMreSEnoViWTK7PLueLbp5dr9VozXQv92m1KYnU2iVKeu5dm",
  "key13": "4HbKZXJoAXPwPHQg6LpLLqZqqWM9ckpCKTDBpuSdL7Vm3uzpXpQxrKXwB1B5R9f3Ca3YgNywwb9zCXNaVcDaE8ah",
  "key14": "wzV4kGQ8vyjmotn2RybEQgQ1XVUKZBHiLMTBzRViWBPnLAFx1khXFQ5Rw2ua1RZiqBarkYtMjMLZMJQ2Rpr8eJs",
  "key15": "331oMVWLQePcEuLdPsKRBB1o2gGmfbCqimf6dxCPc3wKRq9tAMxJNhFxyCUpassk5X2vgEng3Fy4hNq3ezPM4CYs",
  "key16": "2tfBQihfcstv63T5rYdEEVKk7dfnqUe5HbsQpECtzPhpt161QqqPYwXhEq75QV4S7QoHXZfU7g9fZP5uo8qbG2Py",
  "key17": "3QXZJKsKSY99gtSZVUQ9nNMJXkEsaQRdcQ3q75gyaBKR5RaH8baSgJ4XAu8tqd1hTgva7WEGHEpguXHFDKUsFkfs",
  "key18": "5AjBjG8XmCA5VqySoxS6LaqsscmnZoYPy5Ck8ZkCGFnK4ruv5qs7NuECdyb4rSdBDi8kHXMjpsQxSJZXeMXWgDnp",
  "key19": "5qpGTQLLxvtjanYHSJohmKR5doqGK1b3SuTTJzxTuYBXtawNS1jNkfT28dU9jcs23b718qMpG3J7pDb4F5F9xYqt",
  "key20": "39pmRa88yguMKBqT7Dhc3eAbkTDwoLHm7zXe2pY1dhGz7oPoJRmNkwPcasRVEybJaatjR8PSHiFnSzbnBxrW8ts1",
  "key21": "3tjWi5DCZVtkHTvEHkaKap4TmLfrhEqy6LDKGaNduBhaSHKYYYpMBZGJJczam5KqPZQdeeK7zr8x8r3tSUHuf5s8",
  "key22": "6kBu72iq2T6YPfzbrFYaGE3twHvXE25pNCUDUb7wREfqNeupyYdr9xkh81HcAcPdbKGnP8Lhw9W2vuM9nXxa2Si",
  "key23": "N92HMMXWKr3cxXbC8XR2NvGsihBJmgS1RemTyc9zMRPZUZ5oE7dgkLKDMJowpmuxamGh9P5FJ2cPAGAiYi5e5bQ",
  "key24": "u6uvur8UqA4aQRAyzYWrfCAzAAtnECW8kZik6mejtb16GRaWcZu361fY8xL6wSfFHiLdBafUMjgDTsu6nxDCarN",
  "key25": "5wimHo1eZuaXSVcYd8rdKorR5chunZYDPp8ZtcHzMrAT6FovUS5a9DW48mTGGtwVP8LyVqFP45DjNSSJCCeQHcNn",
  "key26": "4xJQyG4XTAmp8yhxYYuqgoxYqKVi4ZE75TNxcYRzKA47xHuxwh6Zq9PPYfrwwHNpAg2bDxHKYGZRi5z2y73Whava",
  "key27": "dBFfcMjbjo1EPvm23ovG7371UVHap3aJtbdkWeeJbpY1NpiE9mqRjKRg6Nkmb2EkfVVJV4aNdp9n3vAmEbmcVzp",
  "key28": "5dLPcZcwBTmvKa9fHaVuS8nYnCEAEbjVsy9YVMxoUkkQbWkpuqeZBDZCsjvdUKd6gkMkLT3YmWe3WU8zMxFvcUyg",
  "key29": "2bs6FGaPhDNkhxp8TgELDxmL51oh1brQPjBGzNgQYwurj6UNULt9qZC3RBpMCLPpaK16R417pAm4yggAimUYezEi",
  "key30": "3MXmmrLcCYZgweyeQuCnHqugGz7LCp697tr3B2phCqoCk1oStPhGQyGES1W7h4yytxWorqytX7przBMhhcJmrzYP",
  "key31": "8QuRDxvryuZkYmUrw2ZdsZpvQDM9nipNysMB6VDcwpMAf94mSCyuLsayrcqsA7TG5VbgAL24395s9ugRJf4VCf7",
  "key32": "3nRq94p5TLgVT9msBRBjEEjKUqVbJdmp4V2uQEocWRhNNV74iBpngCLE1bGV5PepfNLXXz2QC84GsvZdLBCo78ZN"
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
