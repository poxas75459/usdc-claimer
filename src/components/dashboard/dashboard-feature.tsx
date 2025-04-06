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
    "6hpLeyan1RYo1r33zihb4o8yZabNKBzn4Ptp4RVkNAoeADiw2mC8SrTY7XddHur9WeNrYYEYCipaEStFWvSJQtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wqG6A6fySyUufqt5D7fZXDDyDAkfKZXTu7hxc6uZ2b389Vs54CYW1cADLdpHx7H52ejxz8X3AqirKPipQRRbHPE",
  "key1": "kQ2QZnXwXZvFb5akTV8j66ePvDpRqcp8ZEBGre6kBcBvp7z71Gc4158QqyngxxnRiNBym21fzruZmiRUuCf4cgm",
  "key2": "5RFXTckUeGLKYwmjioRANq7arAYZtGqnVVXqZGK8Dv3nNnpnQPcEdxrgTJnNk9iF9ib3PHY3je5BsxWKVeUYu7wF",
  "key3": "4GmB5oXUK7uLdSkSX4SAvfkQ8HeQaHSQD8bzJLKiCXYvHHN9KX74H6iRPvddjCdWJayCD6GouXuazVTKj8e7CZKT",
  "key4": "4RGXHqe12mQaA5LWaaj163PuTxHZfFtH6jnxMFKkFsjuNQzeQAZugrEnT45VJoTGwSWEHVZ9iAZFeSHbxJKb2hqd",
  "key5": "3o6Y5M8kNmjXyNAdtGJA2u8DRUk7QDUzjY4em53TR3J5RbgsnjCzPwo3p56NZbqxXFKMBB5VAvjeJbZ3mmwnq6ML",
  "key6": "2aEgmnvCC2MZL6h59DtCqE9cgSi8jAGBKMn77zZds77AE91RhMH59JanPEiv69yFQ3WgiNCsx1CNrHyxVz6LLg1Q",
  "key7": "URQ6buwB8W195guTnFg4BvcH7BycvWNPjjq5T5KXRY1SCFHQhQCMA1oMWcX6jTDepeNpDM1pYXMho6PTgTmLy7c",
  "key8": "go6aXD47NG2EqMtH3RkYheswp1AsykrEag2gdHkVP2sfohMCZxNVMWxBVPRSiV4NC2zzxnXujadrY8JZwfeR15z",
  "key9": "324znKcvEs3gZ6DzgtJVuhruWfzausLBj8Mvn1kf2LyJFnMJBt1mP3GyJHAA2w2FVfesC92gzq1pW2qEWzxLocnp",
  "key10": "5b8QTABq7AXHNCGuVWw4gcieG8vF1Fwqt5Rmohs5x7uWywfpLkd9ARjUWhjnSq8acLBeqdqk1n9qguDumAQanDWF",
  "key11": "2BFVg4NJdT8giBhGU4UeKKUpQr4rRT6X4LSToKn7NXhSNBA1THMqBwjo8MHAoPLrNsRe2K5zjJYytbBAUt9uBp9c",
  "key12": "3KbNbdtM7uHDUkMqgH27HYgMnB76sAYULiRgC25SkjuESJ3PtFhgjXFmVAzWo2yjXapLok7Xoh6DSR8oiUevWBjB",
  "key13": "yh4rawfr7XXA3hXgZBz2XAH91oKHiddE1p4HCvPaaWmJX2eGJaYwfYBUwhEENKiS239qnxmJaTQyYKvN7AGX9zF",
  "key14": "4QfZGuxKuQ2oAm7EGA2s77kXJYqECSzkCjXyMkPohtdRTsTs1rKRCyZMihvuoXArnn2jTv6ra1auq9S3gmyeGvAC",
  "key15": "3M7bHNRJ8ecFmqfjCc2GbGrEufB1hfAaXTDDVPRLug58q8SuYb8EenXM2mDynMb8GFzgzxLqMUKpRh65P8zjuKAs",
  "key16": "QiMH5t5f5MEGcqH19tWZNQQFwt98YAhoAR7dVMAiVi7MFmxx993N6GJ1GVrvxxzjTcn6UC4WTqq6Ru7K7nZ3FDf",
  "key17": "5QG5e2BwcBVDwYW3Ws2UuCviuNhhd4WJZ4QktxUgyAWSL21hmw2c5sy7LxQoEXvySvGPWysBK95jzGgU3441tDs5",
  "key18": "KaGmxjF9hkyTzBgHrfWoUti1wXZym4o6vhwzwidHYQtJuDSJt5VU2bzAENqxVK5UWHyFYZFaL8RrzXcQwAxLH4s",
  "key19": "5prw7beuuyaYaTgxQfKJNygE3Cf9qoJH9nudBEiTf5xzUsNJ2PGTXfa764v1c7a5hMpDZ3S8xAq1eTAhL9XL5gBu",
  "key20": "57jqdJ38h5jEPio7ED52GvtdhqRzMA8DCJ5jkzwdA1jpsfLA6v3rr9imrkePoq1eM5zHL9vL78u3eqpqFrrLq8F2",
  "key21": "jSbmYpZvhw9FrcLExgSQomVXzsWDE1WSJ3QWGx1yWv5MmDtiocsmYP9cJCfSpvosL6HwU86aVewH57pWiq4rSTJ",
  "key22": "22QENcTreWnsEBGEphdgpVDWeZ2YayrjpytySF3smwkMenF5YC1B8BgVoSWbEJTdBArKc3rsRXBKwvWzF8qFQBiJ",
  "key23": "5e6ki5kMNckiioicJNBMt4vz6cspkvq5ymf6ACTyjBNS69NeHMyKvuCrWuxGsHRKaE2M6rXq98mQMJfxphdFj7x1",
  "key24": "3sWbE4LdFFAUqXr9oVnWHZXENSL7ygQWGqgXgisoThYzLXneTgTXvzjrZrT9u3bP5J6yMW4TGhaLXsW7gwZ9zfkA",
  "key25": "2x8C1xh3LRdYU4BQaDT6wVb7gSpygwUNKUPzW3Fc6XTvfthtW9HjwPw6FbZXp5PBtCZRS2nuRqWEioNzj7UkS1nm",
  "key26": "5H66PK56WHX8hNed1whTRtKaXDVVbTd5R46DyB8MF5QaJtA1KxaSSj3HYeHeww8HdPzCKA6SZR1UVETaNL4husgR",
  "key27": "3Xrioh1gtwczdHs7fC4yukYrFTrRCtBRVYQXWQvBjMrocYBVR71jRndD38yqggmLP2Piz9t7Gvj2bndi5VVeRe3o"
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
