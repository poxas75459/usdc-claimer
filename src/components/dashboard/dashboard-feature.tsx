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
    "DjWWtP8e6NX1Ck1AqwrfdEYG6bUgHWEK9mMuuoLm1JieLasmJxchyLNoVQnvKjQX3NEsgnaoLCBEAbzksxBpZtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36iE3mFornsBvthjsViSFbG7E9vF7xF4PyKE7oArfLhLedJdMU3jvtpnqeYohNyVwQ66EEz9YgJxvCh4xiPHNgJE",
  "key1": "31t8Bapbj7DUjzTB9vf9YDyYaxXfzuahwPysNQR8V5ysWVkjuPREW1TkVBxkRsydFABYqi49ptBk9q7jwVDdQbQU",
  "key2": "5AA7QDcUB1TwwFBt2EhjD7aV2aDNaNprzRq3W7BZq8VcuAEB476u6M4iRaDytVg9BeiPqwN2Ui3EuN4sLvKoPkSt",
  "key3": "62mjsGXyzuXR9eog2emgnKfTozspC4gTAKqTxyfdgUg3zvxPT1Gv48M1WAxEmE9F4DLdEvWL6Dmq93zLQQdPWEV3",
  "key4": "66i7S3MicQnCLdWmWNGAKuR12UhoevF4sPBKqQUTqrQc6wKk3ay6QoUs45N2eGxoZkztUyneUDvsmyx2qpHxptMi",
  "key5": "5sNEzioYoJKkfYjKaKcKPjZsnw1CjuVt7ZkKPvmsSQ9Mb3Qbr7QGi3NyXiizbwYVKqjaJweKBQ4nTgq3JL9yfgqf",
  "key6": "37rSZJLyR3JwGSuFueEG5nUwA3BNadiMPQkgyDCyvtyYty4VzJEyGj7kAwdzkFHL6CqpvRgPZUohzbEb3bBUPNW5",
  "key7": "4pYfwFJPfbnVnRpznPs1NoHJ1BGcdC1PYzwMBHeYs5a4nWBA2igVNidi6CuF2xb6ArQ9kNdASAk71dUMP1hogk6n",
  "key8": "4QT8SbNK4zvXULHwABsum8TkwzTJ13iphU3Mr6ryTjW7QbpE4hNrWTHJarEkrxgP4wEDJr81Z5ooF9c8RR5LR5kv",
  "key9": "2WyyghDe6oHFMYEi7AuALVRZAynqAhwuX3CnjyvqCGwHBJ6xEokSCHjPLuw51ScRCCg8wpCfM9FCBtxjBFRyLxHd",
  "key10": "4YzKyNu8wNTqqZHqMKQUqiXvHS4brWiL3jbCfy7gXcEtGeUFN3AW7gb31mXcdFpiUhQcvxpnVHpQpjoeR1CFMado",
  "key11": "2VedqStTU2fXSoboaqMbzxQrRu8ZjqVLDbbFQ6rNUpeg87hnVGCU7spc8wUAJCgzwC9ELw263kM8726ctSky39SF",
  "key12": "3b3ZZzz7rvfVyrPvJ9q5TdbCvjdT8oftsWZaASSnst7wqX4f1bTVWukAnZ4CygbRfUPvbSYqYJHEYDHVqRkUvQiD",
  "key13": "2eZJedNFQBvjwv1t2qogtfVzorq87Ygm9MWEAX3TvJJHaA5D2sVVKDeVqZCzWpuUJTL3xkXKY1ZAKRX3Cc8H3RbY",
  "key14": "5CS93k7zrJuYASHqUL2mpoehUsp58cGuum9GFW8yHgfCtgs1aKHvW87Bn7jFbZpqrwsjYPGVbcdY9D4b5qJVv9N2",
  "key15": "5KoEbGTVtu39sucCcwLxRYnubNiTDPYBn2BzwvcNxs3UnEC3wazruMfFrKZoFFQAhv8y7JP1d9ZcnK823TKcBRgL",
  "key16": "2Z7N4sRyR6n7AnaEo5R1wEpFssjbaYfS5DgidtU9Mi7bVvCWGfrAUvjo4xwMhhefmEyepQRjow65wnNMc82FZUs2",
  "key17": "3vnBA1sdAvg71qbZgZ4aHzPW43hnDRhb7H2nZ4YWwZDAyZsnaX2qNmuEEnvSoR1Yaz4XqBBYKgvXN1nUXMPRQjvn",
  "key18": "5Du3cpjMFgFx6qzrfXwPVCFiKBXKHWNkuWxwJ1rmN1xS6Pmm2mjY9wV7VPx7MRbFzB2RRKXXWnHZrXAAbyHpJ9K3",
  "key19": "2SBfSYAuFFiYgMgF6eeUKB6zCwB8so7M7wGAaMi21iVZHWLdveEVHhCLeJqxCJupqPVQMiM29iDmEUn3arXK13pN",
  "key20": "5361sdADYy6duLUuUDByhBvSuomM9pzmbb4ak6rZorg2kycGRSM6hfWRMPzXw6TtrDK94sLEbtXxhJ2SrPQ4b5h8",
  "key21": "5KTR6XDiWGNUQBrcCddimxBbUXMJ72dYRggD3UkNQqHhXDphKRr9kSffMoUyTChkuK1ta8CZMoDryXpjJBHxxvX2",
  "key22": "jAzb3HsAr47XRNqeDVnMhbxvCz49LAmfLAtBUv2gJDSLgM6NMaUMHaLdxcJGf9ax1kU7CERwKrqMhEvx3FTQpmV",
  "key23": "4v4TkafpUbr7JCXvDQG2d7of2K4BVEmQBZvQhbkZtpu8BawgZrPRqGRBVtXt6Jva32uaN1MucdQAx15rUAfhY1vn",
  "key24": "4YRrtffpvvwcEtwkhpJBZJZoguUd9214zU2eYb34bQ1E19c5icJgDZXDf44ZaNhjbQhYKfpUbMYvVXverWiwDeAV",
  "key25": "45pzrwoT92RXFKLKY5569wFxB8y8LDq6FH4NTjGnrsWXGLYmgymh4KQsV1vaJRMd6SsDHySMnxNjXuB7du2ZhpDb",
  "key26": "5DU9Yfg2zbSPzeTetNw3TKcjdLuYjfhQN2uhBpsrKAUGiKZKHcgWebj12ASWcmDwxMHwjQm7qaCrdDmJcyanAdia",
  "key27": "2TLVAcMAi8dr9NvzRM7k8js9yGJbkqkyYHS3AyN1a3VBJ8jaZq4TQT4P4Cyi5bE93SvTcc389VApgLQoFck4YvJZ",
  "key28": "2UNn6K6ka97MPS5TZeG8TD8w1DFkcNiasnkQxYpb4cAZRXKEJ9jL1AHEpVHmcTQPMs3PsZNaTxSco8ndHCWig4hy",
  "key29": "5RKvmS2enx8NU4WxcpLMnQioW4TjYQ1krRR9eJxVmwb3u5HCZXGaPwiTKCUs5TXH6hvNR1xoXiQwweXQaKMf3pqi",
  "key30": "5d8XcDyyJiTCC6jg3nXBZPCr5ByUoZccbKaiXCDnzmdzarbMZzFSFHqgrAQ42aPEg8KqWhbxRkH2GZ5FpDKhuQqU",
  "key31": "2pJWn5ZdzBzQKmYS4GzbEnoYz3ooqU3RkRbmYsuGLUTBEyAmWD7dVsSTgRWPhuBpzGE63qe9RuRTsV5tASeErypj",
  "key32": "43pqSEqMETE6jsm8Z1HvodTJVNaBCjQQjLJse1JPC2rGkWurSfwZbMKLUKVZpi7VhBWE2uvNuSjV75JaBzKR4pW",
  "key33": "4vMecHowAg8LMskpf37kNmQdrVNZmoqdymLg618guwy9HefsSRaWwCRprdeG5iQdtE73YB5NUNc5BDRm6wEh3xjk",
  "key34": "64KQixkPLEbREWAMkyRdzK8eobCjMKqB27kFEXVaykpqCJSq4ipGsBbPTn4tyXpKR1UbWntdNdfm3jGxxT3LzDN2",
  "key35": "56fCLPRzogznskfbH8u7Zis249SpHuRBPmnDUqczPpqKKv1DsmrQHGG4JCtTi6LqBk98VfUe6iUChB9zVYCMcKHw",
  "key36": "34x2GNtHpaf1kwTdsMiaMkeT4kCMMsx6aNDCzEc2zV1xKsxen5nKegPL72eUrKVzA3bJm1wWsNt9oup7PRw8NgVe",
  "key37": "4dXojZd5mF4Ht4d6wGw9ckGq8yGT3qAWHMhFHpukz6k6z8Q7hRzFis8gryWedy2fQgtFUVTJu4fSnjeyw3yHP1ex",
  "key38": "4ZrYsYsj32i4eyCWxouyYFfr5AabzCuamvhLs3SzvZnx2U7wzfgWVABjJYkju2NX4i5vLHcRJ3HDAscRRRo5t7oa",
  "key39": "2sHVBdqwbCau2TxFwCECBVr7eA7BZmPSxXLwKVX7bJ4dCfsbpmNrPZ5m7wtRMcxWjXU6fJ5bdRgE9UndVKXiweLW",
  "key40": "5eQHQ9qWxWXXirfbFm1w6qTBbrLRdXbvML74ticsi1vzSTp2peGBppJgwsHke5DQgbqn3z4hyoLKNy3QN7CtuY9d",
  "key41": "2HgUudJhVF3CM3DU7yKMGUTDmQqZbK3wTg8kLigtE25UxJSb96JVpYyXuwNmVQFwgvtZSuTG3bBbkxpjYLchVhHh",
  "key42": "3PJNt7Ubvqh7nuHhFYihgHdEqmyRF8GFD9FKHYuWTwtL2xVgn3FmBpXmzmMm2arFVdtT6Eu5s9NwG4bCbEXgVDJi",
  "key43": "5zskeydiBSCZqtJKxFEcjTfHzWQPQW48AQHA8MMMRHQdUpiDsNffRUa6dqRzsk2PpfbhEkSTudmcqRmyF5PRyF44",
  "key44": "3bTTzwau7PFzdNCWrexFy8fuP6o6VTcxzmVEgPjAaDm3zU38sSLgwk2UxC6PJFHVh4sLgYSkKtFpuqJUNdvkc1an",
  "key45": "62k3d4xMMZ9byYXTaRAzUSV8AF4L4NxRExdDnKaVYqyhCVV5XYjZLGLzMNEUTRzkBmuSTKeRkr1GeFJ4zXxeLPr7",
  "key46": "4L4XS8R6rwu7Kmr4KV7Dm3ugYDrCHwN2py87EF7b5XbMULEnNcaXAh7kh2PXpj2f2Lpj8e57uJoV35DZCroTZztK",
  "key47": "4D8fJLWtFm3AUCikWdH7U4xjhp2Waqxu7mEZh3B1MLDPECxjcK9rJnaan1Bi2NsK86rpTZPKTWbcHSsRB1JgpsZu",
  "key48": "23XVSx9m3v8nmVPAS6meg7vevWr1MHTJoQ3B8YK12xgorRTSQ9bhVr4B3p6pAoibg7xUDBG9HE8w2R2kKYygTmUD"
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
