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
    "MyVvL2fpZZAxz2ks3gEeebNRYeRezQoJskRLTaWnGNgNLKnSrUmA913ovuhKoH7NMBef7kXfthVDzhXgu87GMmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MKJHvHf8uxSPL4bvxwE26oDAT5WMNDeUsrgog4iCdZ5RUMnbMnHmXvXRPC7QJ5gjubYvdq6W1fH3JXfMJuvJZEb",
  "key1": "2PnR3L3T5qmjJE5iZ9WMfqv5LBLRSKKjwojtqA4bJtKRVADJbwChtng5xEYYh9XFW4H3ZfPBXGoENz92UphxSxTS",
  "key2": "k9HkufkU55bz6tmHnXu5FgdNtrLCLb1BVxeJf2WjCptrcdVNGduA3isWiryJ3h3eNs3mGuuAkZTRME9qG49J7LW",
  "key3": "2BB8NpxqGiLrPrMkXScBrEPKvRsNKer2oMCYXsw5NaYh3fHTbezPVf8ttPymNZZjfTyDzP3V5DhsP7CwBcwHCd63",
  "key4": "3tG8zH2CGicBf1bXS2anHvqyewcfh6HrHrukNGtSBVKdC5aKpUPMfmD6GsWeGS7xxZw7u3DjAhGd85zwq2ai9Rxw",
  "key5": "4M2kyLHUK2VPjCinXkvX26ziP2CoCv9QRMStXynYoDY3prSHCboVrBnc9JBWFYWPFz7yLE5PMNne35kzVGA4Ht3s",
  "key6": "3rAXp9GojX3nshe3uwqPAfT9B5XC4KcACngHCnF33d8rJHgVyErzjVh8JXZBwACC7Hd8c28A8oatntj5eMGFzRYA",
  "key7": "3B7RxVjdEhfUrb6TqV4BdHQFZ6es1AU8W1UKyy25Za4nUhRFY4ginXBxcu25PAJJvNnXco4tyFh5EBUNwdn4AT5T",
  "key8": "4gnxfKtZTBJS3uWAThWtV7bqzBtSxwj9b3awVMX45kqsT2B4QxZaWkXSS9xnWmEUPB8XpJPXM1BaYJTfXubdX1BH",
  "key9": "5vmbFZn1jweXBjhWnziHjLsw2wnmhGHbYnzfXGoHsgweVFkhydYkn1yMqQnJuqe4Y7xUqCpSnrELjYmoHrT1rmdH",
  "key10": "2rT5vGHm96i2RrAsAkuZJ94AeATGmqdJSj6NgaJ1WeGdRwxgdmmZKFmTWkVDbgp35eNF4DaKq5etpgbSX6oUKbWF",
  "key11": "3vsSBNtFm2vpYBqyt3zQ9yZi5exbCrQWYsVBVVMDRcBw7nK79sxAWXxrLdz2hK6q8iXCR3d6KSbqbjzSnamP6knB",
  "key12": "5jXgrTXPxVmA78ts9ybGFE3VAZkvf5BfiGqFFpTHaFUUQoD1AbXmHKKQriQGHFzuAuLP3DdU9kbdu7BdoLGgQHhR",
  "key13": "4QL6kXNwYSGF8TDFtSTzbZrTaxHHXKQm3ngoGTwGMBizNVEhAFkicuEyYfRSYnKYWWo1JiHFxDVDRP8ShyXjnoTu",
  "key14": "2rvZzECRmMqbqGkKkdf9ktsjYRKpa2xuEfrvUTjx3o5jjBU2Q752KLHBhSLwvYJfoCrGwSSochvh4g4zAubpeQBZ",
  "key15": "5U2E3BfueaAmhLzQpcXe9yzYqSgcmQdmfKpNDZ6egdNJyNRYDkKNit5gSyn2wcWc4gE2toqVBD9VHHqxtm1fqrKV",
  "key16": "36DDU8DmAjX8HndHuSgYczMgQfjoNA8LcZJY8tUtB6BY36rerSsNJJ5zCLQMrRaRgiHjLKZo6E4AgmK7HcX9Mxh5",
  "key17": "5z3dbY45Mf3BQ2viyTLogmM6iFauCzQCJqnKbnSikWzymh2EiNxgAHHGbgDd6FQDKBt447THPVeXnCBJJvRgdUbt",
  "key18": "5fKY1iXxwe5hpo2KhwwBm2vTkCCurFcE2wXSACQvngx6pNLNeRf8y71HL9mYYiknnrnnV6k5fApKYeBdCpTWo8u6",
  "key19": "67Ffyn4LvXV3Brq8LGxa6ajmBTeVRaoFny8AvtGGVZdxE9QzeqEPQ8jBjWLnjUGq6BknEY4EGRVcp4U6QiuBbhJb",
  "key20": "4RYZVhCabKvGkXjExXyynrgUvBK54ctxn1vomgtPqnQrwBGeUEjrsMtNK9TjpoNTuNu29r3qGGBjwoufEuqcpV4L",
  "key21": "2Ajwb975B1mC2kSAoGn8YJfWVy7HAUcuXWaYhUurNiS2CLHCgZheDqsQGdtqBdhqF4dEv1usGe9FpJwVQ9yCjpQr",
  "key22": "LBJH3zFZdGZ4YR9qUiFhEih9xav8mjxAZtBhWnBbkPh8wdhtv7r2bFUbEN21zHTtvxeupaj2vfJaSwhcz2e2eoA",
  "key23": "56Q9v4hDgDCB7gDhrcBCpR547wuVnvDJwD5P39FKkajpUSGZAq1ky7KguF3cu9m56VteTw96RG4urzrhzTKSNQxk",
  "key24": "VRC4XXNtThwUQNNAz8Q7mAp4vKW4FmWpANsQVKpPAs4GtVxzcYUBSMqEVMnUtwqufHa5uDTdUQM3J4XEXtga61P",
  "key25": "5XCkDzSnki3RwQhKdCRZ9SfTGYtgTUntK85V9QuPAkJ3xJyQKGEJWiAPZAw5yTnXTkMJXzBekkEz86bQsk4y7G18",
  "key26": "496H5q8Q1DG5uRP36awe6czn9Z6SnPpz4HBzav9L9ftJWb1UdkXTwGucMvnHezCtc5FwPoQDJWVyb7yxbG7ZA2Um",
  "key27": "3Z2Hp7KNs4hLyGudvU1Vb9rGLEPpo2TYVvJMupLcbJVHjLcAnDfJ7FMRnHY8JGHJp249QfJ4FHtp4zXn5f2dbD5m",
  "key28": "59mKBJPpGbHRVBtaNAqqM3r9kCdTvQwZVViHp3Fy79iUjLJad72s4fChTx14zrWAG9SBgaqENzBrgm34jXWc75ZF",
  "key29": "5W91Ny6sNthR1BSVErXzSdr8XamV1N649zxCvApPBKXMTBkwNRcvTEipug28BJcb4mQ7CR7xeCykEu6Eag6UJJzR",
  "key30": "ytm56agk93ZDvsaqeA3aY42STPswNij2TJNhS2GWSy49YGFBnFfAECtjPqFCHh5sxu3nnGY9YMtZ6sL1FGsdp2V",
  "key31": "4PcLYDgnxK5wkgaL8vC2dbJ4CMVCNEhmoieu7ewHzCP1RAyBeWMi7J2n8kuHxjr8TAvehNnTyMyquWgPcwK1GH7Z",
  "key32": "5hpoiXxMQRwfDNv1mAXWA9pbDkZyqNuFyVYVVw7o4jx6F3UgYmhRhSYkPMzuxeptp3wTonjj2wy4qHC1HvdB5dLs",
  "key33": "YHMAZCB5bb8eVa7q6DB9dtGekyY86JZXdkCbqwAn3uVsQ1VbHcvtHf4jFVDYu7Q7fhRj9fAmRTdYwDh6w27MBfd",
  "key34": "DLpABWQjDMAh5ShGh9ufvcRcTYbSGM41pdQWpzkz5uiBuQiQXMPqm3hcWkwhSQEwu7dqX8SzUqWkQhx4GL2NrEi",
  "key35": "23xHd96dC2EEZX7CzvJZm8dVuHq93D8KWF3DqdFgn8oSQLbu7JT1JEKvjmiQS4KZehZfNjXc6Xn4RKJdoE9hbw9g",
  "key36": "2UVJPoUn9ckcxYZWaep7YJAs4K2J1Xj7uh9phcC79C4PQDtz3omWkkUufZXDav46dVQkX23wSYdSBpmgZYS2wPuw"
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
