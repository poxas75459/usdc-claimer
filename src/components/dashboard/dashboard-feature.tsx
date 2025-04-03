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
    "t2AiqSQECWVBz4aE1TxWgHV95ooLnZYc69dTb1jr1LAMQnz7gx1ygUW7EsKu9mzMJfaJAf5jQcZaFw8LQQzQkG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54pXVjfHwTMVK8LCC9YUM3QYesgsQWp8fAxzj1ZQMaWToj9H8S2t7PgxuBVaNeKV6LLEJWPvbUBnLEaZ6njGFUCS",
  "key1": "4fNuTrLSV4jiJzVyveULMgU8srZWDkdPR4wv2Jf9S8dyTNeiRJ6U9Jdd3jMxG1TCyzJr5PhiYpgPd4fvsdnqu4Fb",
  "key2": "2a15mUVNKE5dufsXyGRZ7fwwiJ5ZhVUHKGt3W1gRkpebPuucPE7H3xCvuaK4Ma3SzFwQTqQEi6EfuQic6yhZ7rr1",
  "key3": "3PpCa4wFkDUgPjq3vKiqEiRaTaxfV6rosU7dowU2bWKoBJCKjfzN7YrRwk56YoV3iGuKyATj8FkzKR89ghb2pX1o",
  "key4": "Rsf8WN6UYW3uphPqN9i2m2FDbfqCcBEPWj58ekt4L1eNJBs1Fb4pFGu3e1WFm11mqy7veHvFegqNL9eVZyv5Y3B",
  "key5": "469RmKfkHVESGKdsvxtXMdBHkkA9LS4VQk7WqzmwQKcPEViooVSNBJQ46T47MxK5sGB4JyVUEk6ehqiuQZ4im3QX",
  "key6": "25pEEvrfL9bQccm9wbU6sKqg6tH3AJgsqSoUtYiEr6ExHfK4SFjAQaPn4s6noiufrmAdeYq9nxctxVzfPF8Tjj3m",
  "key7": "2T29AdsVMcpzxEVFGGCS1VAtT5SxdeZVMwJB8gneENUJVSemYmKrp13YdgCqVghn1CEPNLMbTXoUrKzCUAvKiQvH",
  "key8": "2U7ZtuKfwYKT5vWVWYXUkQ8zDNBjTNULDbecvbCVD2JAjgcsMuexgNJjoDhYy5fH1QcTLTGRsrfhijfcYJiPBpWt",
  "key9": "67nWJPkGBeoNztHpLzASVemzLNaKjVdn36CsErHAe6rrzkyojqDcE7eYvQvt24G9iHwRdmgjkgqr7W6SDbdZXdoD",
  "key10": "5Fx1bAq4rToDhFb8CAwo8RJoY5GAcNZNfRqZZMynYjSQFH98gJ2eNgQtoXbpX46kZ3s2ncmtW2bSQ4rCNmExMaKz",
  "key11": "QmdnpV5n9tt3cHKjnttfe6QZJRgJtm71kgApGELoPdVyV848F5Wqfbt8G6E87Uaxb35cmFxHLguqFFowhv6dnq1",
  "key12": "5CWRHveNfSmecWJKArVVVLmwmPBm8GLtfZPsjdbhFwcQoiFRz6ERsEfsDYkfWs1fY5MeMdhW169SddDtZGKEgrYJ",
  "key13": "51nuBfPgqim8WBdVef6Sjfvk9i7XLPkyctvd9P4DQC5Gm9kHXQxPFf8BtCNMKH5vkcVuM9pXzEyVKWYt5deQ9ttH",
  "key14": "3V5cFZaaFQUFbAFUTPaaFFS559JNMjLFLZTnDcwRgMPXzMWQHdqpK4GjHbum3efPW4Pgpca9wtaKiZDzZwuKrASB",
  "key15": "4WoPnFpRpPPS67UtRsDr5rjB78GJNN8x5geR6Cpu5WmwVFKJ6MPMEmuFRarwaBTXrVKcTKTSGtjUdjC4aHF6BLGx",
  "key16": "2k4Wn4HBVdhRSFZ8LQd83Hk2PABozDjPcSMAipExBoyZrapMRS7ToDXbpjfEJWHeWGXH4e6FkZPYUY6ytivomaFX",
  "key17": "4TZzwtGFRJ8QB7zmBDuB9XcjUqp5Vftc53yVbHcLCKEZXqNr9Av6avDMCoANeS6KgowDNdie3eogdY7nD8vsiWhF",
  "key18": "3coJMuXCMy4kE2zSeveMmFPNbiwDPafZ79Er4qNQR8EdPHNTHimZm7gjFobp68zD27NTKYSyrJaBNisLyGhrtTtn",
  "key19": "547N7YxP9Hnwrk1yERQ8o9dZZUPpeCzX4XPK7Hcy6mnyW1L6Tu9vrem4MMBvPNTYtKngrWm8yDGAVC23i2pPr75X",
  "key20": "46wiX6fGYsg729uukYvJwznx1z3VMUSLSxpsHZeMqhiF4ehidw3WMr4qccuMwaj2whfjRazuzeP72dG35ougHtj5",
  "key21": "36V7PJQApifAiTHULYhtwwSZy6Cceijv4LruS5NHRF9tRPYqiPnJ2LnzeKYhQixnFNwVHc2HSXyLnLnAa5DyUe39",
  "key22": "UUxvZVFYf78jV63b7ProRNkFLYhrzFiyqfnMy9cBQAAYPiLuHHZ8dtr7qWN8JtGoTuuqu1ToHmjjUdThP9Ayabv",
  "key23": "38CXk3ueX7DgpV35ig2bNxW5NTZAF2e2nRjvkxxsHwbpJ7Vy4icv3f8iSg7zrgJGc1V95yHgLyBBmU7SBnWN19w5",
  "key24": "oURYtBWGAdV8rZxwHCos7bgq11dzZpCMaaeXYG359G9PK2frXEtvwYQ7LnmxAosHMFXSNH22ZhTWJpBGKfpiLt7",
  "key25": "2hDrKk145A6wUCtGX9uGArGwmZgV8zoSKVaR8NMRQ2ZLXg2WSmwL1dQpTqNBKE1EBdXS2Ed8QaRPeHrfhCqsMFzA",
  "key26": "2qExFw1EjU8fRiqvNfZ1QdAQwxaWtyVzzZwLMnzGekLdpcF6vJUEDHNSfVpWbsHqj2ihAd2QBfp2L8hRWuYRfxn8",
  "key27": "4hKH8jWDcMZepV8c8SweBHpRQko5yQ8r6nyXWND7sFQNb7f8KnkoUwEMZdHahJR1ZzjvdgxdqmTCXCKhmvC1i2oz",
  "key28": "5cEJoExsw8eXGZWazs3C32mfv3HGAxdaHV443SCzTS6tJGzjz9ZRGv2wjXmmCjDgNCYrfwxTchawYNfZXZ12jCEh",
  "key29": "5JDVPWd2r2ZaCksHmgcGDSs7nQj6jHRukcVbHdxUzwmT9Zu4S4ynVsWJfrHkQQxDzfR9HfTcowwByLmDkEr3Lxb7",
  "key30": "48WcXk1wJsqYdaUPDv9Ci8aVvHjoWLveLwzvxAWJKZxVhNZaccpuVb3x6UPo2U2r7rMqFMHaRohasFDbnzwTrvQv",
  "key31": "5PhT1onj8nfPs4Jxzh6rqzx55QNcvk3gadKr1tppqtWLUZxaJ1eWw9ctfjZ3qWKLktxgsmY86yEU82VAwSxAoYBF",
  "key32": "4rtxKV5p2wYMSTCm2HAdwggcQwtaqER5UwbmrCZTY8M6aqL9YUhNTbZszjNHvStX8qXfwJ2cUjDKCv2aq42mXPqX",
  "key33": "2barqm6EqdZ1C5VGrqUdfMkv28iTB22TK8tULYpvd7qQAiFjbaTw4G6WTWmZxBcb8KhDyELz5xCCpHHSPBx7NpJT",
  "key34": "5Nc2pLcRS22M89fFaLUCwfcz5Zd98Dm7zP7jkU1rteTqjc8YFtTQEHHf1Y2MAPWmg292CmsRNAjqP3bwY4dX9jv8"
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
