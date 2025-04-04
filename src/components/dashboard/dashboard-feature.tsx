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
    "3qTjXV9jrUvKXtw7gR38VNvgAofRSEhdHAyejXeXwH843h3cJSFPMHjBcKgQ8LpKTvTNmfq1ajxRSqAAPnCVsBQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a7wsuyJULUZ9wERASG2LvbKHcmo3yuVgewQK2wWJz2f7buEgxjYtMNj72rBVAonigLoP4gntUmNvxKjzCxe7HEs",
  "key1": "ic94Nx5G6RM1WwAZzpsH2xthZKwEmYyWpfKVFQDXnKDMi5rfxBQyczBaa3cJttQukxJPEU5Zq72gFTSh2RQ9YoA",
  "key2": "4A3ZK69JZY9ND1JaYcCt5PN8m9fWoYkuBKfFNgz4KW6GgPJTKYRQEtFhdNLgaY7VhQLRSgAtK2qVeWZHDxPhhGz4",
  "key3": "3zax28DsHkEa9VvQzs6ks58UP7iDh9y3NSXSxTgR4mgpE3Wh6ixDuPPFcAP9vxyJg9jq33QgRbUyZRcGGhyWq4KZ",
  "key4": "2ZuWedVLWZfdt5Scsp8T93fHTy5xX1NDvoqSA2FLU3z1j3DwoLRp6uDZ6EuDPy52yNSsYTpoETSeTz3j5b1Uwfii",
  "key5": "3vQXti3c1ePDwrZRxiVDqcGPATjCf5UBL8dfVtqsV1H4vCR4Y4SVjNfRaKrkkyWNR5RPECwDD1sqv8dPgmTSCnmN",
  "key6": "3hhxDAKHdZiQujgsfPEtjCsuvcQ4k6jvgzCtHUWxAmsXgHCYuXc3c87HRh3bHTpJuWnmTiirCwCKMH2g1wpjDtWN",
  "key7": "65Nea6vXaQdYo5TJ92497H2k5Qyc8RHTZUKzbE4ThoU1bgUBPXv54jXmKCQtSgcaH6uM8LfjMwmj3THRDdB12Pgt",
  "key8": "2AVQ2sPVvhcyinD2eZbudH4YmXfhC38MfAnbVLVTk8wgypJugEA3YyNFDyivQvD8koNbsFwiQ1uj68dDi96rcJgW",
  "key9": "B8Agpq5RmBcLKHuEa2wGAYwhPj9sWnMzzSdewbCTTbQv3cqE4uuyyCaNgZHfVRErKwAD2rFJcMokaEQnQaDm6bR",
  "key10": "4JQpAq57WNLwmQCCQB6JEMnQDAu6P6aFx3eUP8AfG9bqYKXMSwKXXqKjZLm8PTryTuRwcHv3YyZ2rY499jiPjTux",
  "key11": "f2ddVqg3piFthBn3TkHdvg8qZzLNvns3e5b7sWcEjVJRduwmwdgcdD26QmaUYSJyDWociwSzfP12Hkm7ZDi56h7",
  "key12": "2ytxMvw5BjJehehqP1Gr73SCkE5fxZypBD6v6BhQ4Xw9xwnJa8EGhpTudBTfauTHKt7BP334WX7tq2iJuQ4pXth3",
  "key13": "3tSTmnhJPSoxiB5MbG2isfbjGgsjM2sSHFHWYRRZTztA2uuJNxWCANVD6gNFdsj1sYd1oU4zPJGzRQbuKV6qSoCk",
  "key14": "2SgqVndVg39xT6cCm52wzDvA7X6xFUxVfMADLb5io8drTE5H7PcNUntQC9YA6czXd4BvgAKBNwYoomXzMsdJGe9P",
  "key15": "26WnUMdjwrKDYG7MxcVAy8TPfiiMXHZ1dBo9cM8KpuABNhHhgHLTwSZZUrgm71qTuPvTDaYjRJPeUSSLHyqgHrqg",
  "key16": "4nJb1Qcuu6ryM3LFsNhPUaXdphTD4bZUnSY6YWizUXzwU9SjB8hzfx4TBcdNTPi7h75d3MH6PzfwaG9AJm1rBDeu",
  "key17": "4ds44zykp1iqPuqoBynbEPwmf41JmRBRAR5PRbGcfV8Bqh7g1FmitjoHbAZNmxL1W5M4Nc2kdRpauJTAZ2x59pEL",
  "key18": "SYz6uHggMNDEhy2HKLzgz6yQ8HxhzFyCdAKp5XPGb9vSx4Vu5oH73Dr1DWiN8WnRGwuzuUVvgwcxxMt56Swdrpv",
  "key19": "5Ao6Jgg2HdFDytxrxXHnq2XHRKf7UyyLm6YHSvy9BkccApUucvehtSaGd8Mc3sdirU9i5bxwDvizMmUAvvZpByzX",
  "key20": "9VGpTkH4z3uwBXQBWRXzHyAoXGwAbVe1s7eBAXZ9gnuVVxQfWp81LX5nDAR1xQbZ6rzGK2jrkv4x2XAY43tayKd",
  "key21": "4LPWnADvYCZbsCGsLyihY8fSCxMWYtxZJazcBFyNDTJg4QvcNHvZ3cGRrXZxjG3FfL2JqchpL6Pwj2rJUvMgo2KB",
  "key22": "wH9tHKH4mBBr9R4VwFkfPyBbf3AgBywKz1MqmFyrW4DSm1jiCeMVzaEg9EQL3LNFLSFCSsMFEnVwUWQHyKtxyPL",
  "key23": "3EQcs87CJSb75r5UoFeMBAd5jrKW9VnaFgyQzn41Rnsb1GKi5RyVETj76RNbjWSKiYTExyZyr949SwyYced7UR85",
  "key24": "4QetbNhyXkZUkzLM7MUB8sJ7rU7vFHfXUYGu31rLPVyr36CQaE8JeyB2tAcN43T7k1gdSnYPkANZ4gcRjFeRWqnH",
  "key25": "4Z5dWHjAVL6jC6GJB3un2E5ibe4dZFmXvm4piSQfp6SDd9xF6M8z6wbKDoZoDP4fk6Qj2yAkdwcDNVCVnMbfAnJj",
  "key26": "3odRUhSFegLkY4aYJ8dcdH1pxKeJQGoZ9N1ZJ7Gh2tTAzBUhWku7omw8AyzpavijNgTopUbKANcoSoz24yuJXUmr",
  "key27": "4QaAYBHSKfCHBiNS86KXGSe459z9tyb5fkca96JqX6v6VQwy9TTLrzxsJAHpTLA3PqAipbP1kQ2NoNgdxgohcL1V",
  "key28": "4sZe4Rv8KJmtP26PpbTipWqFYbs1NiJJwAw9JhKDzjWEQH8qyPMdcSETK2MDNs3dzfnt1CE2WpddpAL4jNjUwGbN",
  "key29": "2Xbqa6u6iioppm5DA2UHGtcsj2m5UnmULzuADY24QrvEocxe5dpN9gJ2mCjugzu5JCwcmkP3immyv34N6Ufxzc9x",
  "key30": "6TZBPbZC7qUxjZiUbbMkP3ZuXpK7xqpJ4HJmGmjEnKig7BbWqgXbqLVtd7wCNJZCVQGVmRAEZkkJ3WzMiD2Eada"
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
