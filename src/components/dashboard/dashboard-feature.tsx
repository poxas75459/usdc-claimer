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
    "5DGmC31wZY4qtGcPXR1ih5XNHNN3Bqf9t4GeJfuQLz5C4hCbRXnxGCbPpyzUgBeot4geurCqnkM7rchSFh85Cwi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ir2eR69Aj3qQhtcumtAR3EBduYGJF6iJjb7XfwvGHkrJBZnBCvDBsUmWodT9XUzVEpLFKftktYbJApADgBvLw1M",
  "key1": "4XrMvdDn6Up9BRA8gfceuqoutoZryMJLcETFwXwc9niULALzuhzhyRXzfSxifBAjsjY1idaLXFnqmw2vXLwhdX1n",
  "key2": "56oqTmQYdAwmo7TAn32mVr2JoD62rrZpVXDmtZpRdSJqA2rKZL352uybWnmD226XguWXLP3GQi8s7XWtVoxwVRHP",
  "key3": "44i554y5RDnoWyNc3QqVVJfuPP3YPWPAhSN9zeCDF93TuzcnTxs4sngz8defNFSFzmhSkTAmfYz2HyXPTxuAyR7o",
  "key4": "2WQszDmP179xVRkTu2X3dbu7W5PudWduPNHpXTMHCiKvQtRwSTNskPtrxvpDKaFDFqvrkxi7EoYK5sabh8qCZiPB",
  "key5": "shYbtBgtbjpSBo2zzqmHMnihoWFj1ctEy8A6Smzs617YFv1fpSbF6mpvTZfPno98RxFq6e7pismcNW3GHVb2czp",
  "key6": "5DUWJvn88qWAjNrwxGYPrrnXwJr1hJk8t7Zcgf7nYY2DnXfhsm5aL8PjLCTw3d67jrqvzD5QKZieFDz2ce7Ysk3s",
  "key7": "4cTZf45QFWUaX2RXcA9hnn6KD5qkCUe6tEL5ghRxQT99yWadj1NFWkpHwejNc8ZXJHwXJBPHfwio2jk1uGQXNWSi",
  "key8": "3mpz36x5LmyyNF3B1fQefAdYSwyHyPz7cStWqcYQTx2ZZDBJVLwCKiZSv6niYiwRLXDq9VUF9QsEZ1mQGGkNxHAL",
  "key9": "HLgoZRdNh1FwjwUQCenkfNynTLGmj57fxye4q3j9d64odBhEbmXi6nVp1E4AUkkCHZZmSHnBB5cmGDRdhipqDBy",
  "key10": "5v5uEeMrMdtRu1naSAJUtevjo3V2F5Q61XDFqZx8dCZuDZBhofXiHd7vnL2SaCGSQbLckL5YBjfPrqPckRUBzvUQ",
  "key11": "2ArmkRj2eR9njwS6UwG8akeGrccVqGAVJVW6ECoqiy997393F8wunTAmGnqeVse2gVW2QCkcstWv3gNfyVqinVuP",
  "key12": "66SqeQVL6ZmgeagSpPjiuEcYS2bcH5tepV5Mf9AwK57CX8dn7QrnCHpgfW7kWk6QdsW76cH5Cs8PCQG5E8p9EvHT",
  "key13": "24dJ6uQkmqV78BdTXcdh1yYpDXLZpeYp74ebno8S5hmE68vuArZDKgwPGR3LmYXuFdzNyYuU715GtxWWUNxDhfBp",
  "key14": "5KkPDWbk2c7qgVxP9vzbS5WdmsU7w6uJdBUy2tWmZGsVx8BcQN7G3BtL1a3fXhSYrz3oonV7vERF1D7MfdiVeucq",
  "key15": "677XCTvXyhXY2sJ1ZvfVG7UFZXSXb8mA1X6cMK8Kvbwhh9g89ZJCVX9zMGydooysmBkrypjzX8KyiuutfhJdZ96w",
  "key16": "357gjt3VSvLxnqwXeE2uBMHzvUNiqPKJbRo6B5ZUCmjnYsSM3EF5kq2hbQPDfAttqPcAWDeh8z7mz9nxJMRoEFaV",
  "key17": "2XLik747veNKpnRWtULzv5F3Btz2jNGM5Kpy72VZsPZSVPB9y9YsZKthaeKPLbBTc7cgTBPwpiYBcESui6oKXc99",
  "key18": "5g6uaxjdBb8BuWSbw7fjYd21LzoQLYMLDyUqAtXCVii5wA4iZyzywd3hFDxzD9mMyoYT88C7perE1HrJ3ZADAgVH",
  "key19": "5x55pg5yKVrACTUFGoiHLXbBzAAPABacenvgmkCos7pt6Ky3m5Cq9MT3nMPcWoURYZehBcboMahCt84ipEZ25Kdf",
  "key20": "4y5ax1D336hP3TmNhPXFgWkNyvKPTZ4p5rUZtq66P6fWxVD82ZeA89TmopYbeTBRYXeRWHL5ENm57yfxcDYC1UkT",
  "key21": "59UbCB72QbydYVZd3HaFDobAK7mK7SpryEz8FgwxMJyBT19iCzCcHCdwNRF6oeDy9EZfPmucgVeNZ8qtKJ5GbPfL",
  "key22": "D9ANAfdKpxXiwrknfH3Lr3r5vBBdYrPMCqVNRHHHZ5yvw8vkGrJwnDq3gNwRBPYYVNhRuzbe6nYnqAoxQ2QzmWu",
  "key23": "ghJDJFm2BthX8hTJbbB5QtYspqovkJJT8njnQAt4zEYVXiqp3oHCqiyazVMXWewyrNc6LD9X3NmC4TBeH8Et4KZ",
  "key24": "2wCPgVyeiJ42NrDsdp1yHdbyhKrPKrw4PoxWYVAq1ABVaHcaoQ39SuSjMjCMxZzoQn6Ae81Q8vFusvLgwCM6LjYF",
  "key25": "oUczWiQHDej4hwBbHLrCqP8rYfyXDtMi8MhmmdhdXy7AhN5ge6vL4g5Ax7GW6W5i4rx6RKFN8AhyFTkYToGZdHK",
  "key26": "5kCbd3XS1T4tR9TaSabiQt5vGeB9zYtU72KxJzvWWAom7YRKXhJ68TyzDKeFTDB3XRW2d7quWaokhSPVT85Smra8",
  "key27": "23NausTawNgECTvNNBxQxcVe4TriYTmCmgzKdUzWwy227BDjLK4jGDdGYAu6vHTd7Ps65aAoT8CH4nneHJJHFDha",
  "key28": "2Dw4n3oSZpQDQRXUy2zUPizMqBcwSfqGKspqwE84YHP2JJBLtZuHqNRMX6rFpyTSzKVTf5gknazcaumLNHa8ecGT",
  "key29": "4ZtBEyfi6A8SKrtPfK6JanYosnjoDPpEJuhzZyYWJkNaQgCz8k1dssTZX6gNdJSCeJUkrzsfAVFos4NrgXtYBmm9",
  "key30": "3nBVzGpZ129MQ3eumbNGgqqzzyFUUpRc9v1YQYoC1KdAgKHnZcdyz9ARL7zFqFXqQkzULKCDZDqsV74gkV58JCJ6",
  "key31": "HHHFXzAEgVdfXsxRQ8U6xpMJpNaQn8a96TBLZR4uBCuFqujpRdcjRWjfDqwxu5mo5xuZwqKnm3ib5T2ZtDzfK3G",
  "key32": "3FNhpHK6gPDGiW3cNTwb6JJNBj84eU9suJKiQebqB3hUbFewxsu5ncKBsspGnEcab4sDEKo7SaKkVuBMPXYg2XQk"
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
