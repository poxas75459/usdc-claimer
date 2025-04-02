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
    "2nM1jGdoxkrRcgPHkXbHNtizjuPt8uJR9Ln1EVfvbahWCDQ2NQTgTDY1WJPQrbBkioM8KqjrAbDtkdVjBETw4hzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24HdSV2YdfyhJKVtYbNvJRhszyLd9MhveEjDVh7bFrT2BRYLUfPS3ftBe7QnCR8WrTEhb8qASsYgQRppZoY6afhB",
  "key1": "2mz6gy3ueczHhNChginu9fj9mBPPgdpTeUjpik7XqSqB6yrm9pBxfiXWkGS8YUrzBpswZK2TXJEpsbHEWUqYVzEi",
  "key2": "4QhSoiENhgHdEhqAzRm47UZ2ERPPQ7jLNdbSwQDJjVcNRdWbPzBu6J9JRMbdHmdNRPUZ48EL2anR6WbihfQMChw7",
  "key3": "5WwhEZ1zJa3T3CszmfBBHJFC67Wm86bTEKmtkp2WeYuUdcCeRmfRLxoufMwcDiZuLGZmopMM33vScUP6XkkUG16g",
  "key4": "4CHDiHrnh3Hw4YojFPRzzXN7MfxKXJ1mNoGLZbPw51pYJZWib1FTCtCgtvVh55qacaSTRpbZiDjpK9XkvPbjdam5",
  "key5": "5vMADyMWn9gcbeCDiZgsfJppeSNU1NDzqxbLxnUhzspvtAb8AMk5sfaMpYJpsMspq528kqGCA9JMAbJ15PQMNhRu",
  "key6": "2qd7FCNXQnkpGrNyTfZBkoM4DrX4XrNEoDsK5LjSpDsroc14D1UwYHpxbUUHuJX6pnBLqsaAKvtkmK2zqxzpGqF",
  "key7": "3QcdWjgk5xyW2Gxi1kfqDdf2RsRT3fz3JCqymV6mvE98gP5KWkbjbyKY8PjcgX83Sy7kYwBAjPNaY9gkpVeM1uL1",
  "key8": "5JBT75VMH6ENSBSN87gBqLr5RZ8mGN9nBDeJ3hbrB1G666sVeSkm4m3QgKwRJKLBnhSsf4J3aJe2kxYRRFAaha2y",
  "key9": "2GcGUSjftjg6qtH79XSsXdkcRrpRYFuvXaSaUebjPz3gjWyTaERqNoNw9ar69F5HGCT9j9ysYGcVQUmjJ54mgLZN",
  "key10": "5CpJ7n1NaiSQE9CWYKgGFg5FpAFyTJx6jpLFTnVtddDHw5L3tTwgAwUwwTxc5exs5U2LeH1Wg9rhc1CKQiwAjKFq",
  "key11": "v5TsA34zz6r74gfAryyMkh4JngCq4WwomtVC97QtMVyFQNQtRvxi5CPyPqRuL1rMWLBNvpXdmivCsUB88FSED1L",
  "key12": "4yugLTsUMGRva49ATYeYeUBe9uM2eYwY3z9waAm3b6MePKbuAsJCcPt14LwiDZEN7TujHf55k1MLg32afviRRZ8",
  "key13": "5C8aiJbAuD1jUyBywgvFYr1YE5ZMvr3CukFKnoUBYh1Tev2f1tK7vL9AAEdyGn8ZEYJ78kPKSJP16E3hAF6nNYn5",
  "key14": "3QvwtVnQmDKhZDm3hYfwnnE8uQ7ySCYZUPvL8T7BwvXMeFEkKmJYBMS7MS7wRgb3r2fS7h3D7BM9p3QasVoja9ob",
  "key15": "2VGJVEyLuvcy5fxdmYs9bvFYEJhnqMQHYXJwitsNJNMpTKsksAQ2Ztcv3oL2cAFuwmRB9bWxY47fqBddMdjQaxUF",
  "key16": "5kJWUC3PVNGmHDHaDtL7jmeMBGeB47a3Zi5W8dSR9yGNpSmUzuVez1HsVtKKUesa4iMJF9gdcnf6BrRGLd8tFK6U",
  "key17": "AoreHY6Z6a9JokUpMARZdGY8RhZtXRcAL4q4GmpPximmEoSq28ZtJs8eGPrpRdsaq6pBGRixwBkqewp1rcmHyHq",
  "key18": "2dN1fGHntCqGHrqX7FGyE2iqo6enusETXnNg77S88Zqdk7ZG8dQNYFD4JWAc3wG9iCGQH9FFFdFmK82YDRLfQTHx",
  "key19": "mQk3dGD22nukHgbscdRpjeuSEzLmqzB6H8fSxZkS92XYqXUFxnXVRtEmMUKmzbNHA6vKLiWAxh1jdu7DmGPU6h6",
  "key20": "3eSj3r7HnRVibzynSD46sstJ6v2cEn7ycF5pGMGEbcMEhqzw2Ga5CqYCw9kpWkUDVZGyNygHE1M8TC935Up13q1M",
  "key21": "2AdvDHvVndbrAbRaB16XMfrr27KcjxkfTsqJB5qFov6gmLyJhKWe2M1yz9Sj4nuqoD8TYcTcELibiQDUE3xUJP8A",
  "key22": "2HR3S59X5MGF8FukvqTbYNMVBuYJbRGd27YLqq2JG3YmSq5zu31SdnwBkQx7qzMb4eNfqXF9t8SKw3xjbHE2ksBC",
  "key23": "3XGxuotJrPXwQnqNqagfaEd9Xkxge1JC8SzaBCgppdREUXFMP3EjSDbo35QsUArtvuDvs8Rs9HzDKqe8eVun72bR",
  "key24": "4hSQwGiBvscWQmYnix2StRBHY8UjFyHRkK1Wqk4YHo6Y6FBnpHzq3uaD9DT8LzbTF2u8Hqat3H8jQwh3CToUU514",
  "key25": "2UZ7dkVnkRN1kFTWLPdEaSN9pWhKcdKuWAuSqkb8QWSWqUPpsMyhpNn2eWgZhtzRnAz7s9VMPLmQkKLRueYRguHP",
  "key26": "2LxR4nD81isiHzr4JLyaic1M6Sm4YQJQbhEe9dCpKiLSStLTqitATT4jUpRF2P8ayjHw4wcZokDhZ9w3nUHFkxi4",
  "key27": "22yWvdyJ8t9QAJofJNU4ggvBZNb9aq2CmQ7TsbcnuQGMABn1vTucFbBtVa4jguzHCnmniwenAh2ruJ7TbeqNthzr",
  "key28": "jcVMBkarJapqQVjZMHvckxGuM9tbtadNxmNLtLp4xrnKMi4j6rLjSLP91McEYXDAMM77ogLjtJKmvNkJavzAouc",
  "key29": "3xFMERtgEJw9xy4BXAieESC22vERcNLgjAJ6BJcN6oqDvHgEMHAqMrcrFvEP4pqmrviVYajaX1NrAt19StfQ1qNH",
  "key30": "46XroL7tFHpv6v21tdfUkniCiAUcVJVJYQes7MupeKpPcn9S5ETaBqAWZjDsNpmLCgAQXQQxVbxYbXREPHzY8Lsu",
  "key31": "5VoXzT5fBcdrxkjvgVJf7Sqjj4Wk1bX4X1F3EoniNAZEKTfo6BEomoLW3bxorGsLWz9efZtXxnydeUqtpnMVJuXf",
  "key32": "22CkSePEkqUPr3uax6cy4cPsb5A6T3TxGuZrLcvMSN6EtnKkmtrT3gF2aNnkcKHwr2uvR1ZxJ7LfjHmS4wZnfTBR",
  "key33": "RPDmXyqXvYpJXDrNBKJEw13cKVP4Nftn8oT9YecTEtQiUC8ynXR92i51Fb1aFjbqgxyHVEBgrgzf2tia8NSvM1o",
  "key34": "5V6RNaVKjWDWzKFUsM6p7b8VRE25ebVXav9fNduZW3j2kmJyV32sFEYg4MeVJkBkqjgyYJvKh2cBWhURwPbL8iA4",
  "key35": "4qZZnU1HToBeeBV1k6goeadoRMEfkx9oLUQPTA4tBt1v9296hvGnS1gcpxL4GrgrHLDQmo2xT1mPc3ameakisETK"
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
