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
    "4zBPXbuNRiYJScVLcErTxry9BDSNRPTEnfg1ntwBMV9V4tUDABY9Kdw6VVy8W5uUZf2Qd4vEMwvdCLr6J3acjpXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42FGae4Sk1LP3C5ankqaYLS2rbeFYT5S6i4moqbW7mQ1dqeJyaZK3oZPP7bWDk8ZmYPV3MPeA4iZtoA2iFouejfi",
  "key1": "2JpoGdDn4UUAgdAHVPesQYVX6SRjYgNSgMss4TAL7z4sSWQSVpzLDkx8DZVyxczoy6tRqXgA5xk19hBqHVoSbsyR",
  "key2": "2e3BktHjYyhcRAp3FdSYmV5okM3Lkaamt6eyxiRg2C4DXNEDop8HJTELdxF2aMupVg56UJD42ohhPfLCZMYtG64F",
  "key3": "2YkYqKoS3BPLMDe5k9mgDsdXbRcQWxjyEL17ZPxD783neR8oykWRJjx4Wuy66ULc5mgUPmTmV9wafgH3gBwRn2cR",
  "key4": "2rDvFHnft1afieN8qKHb5SzfkJMEmUWpw4zYnRKhPABdSXpEyjzCtRNfXP5C9wbCYemMNBjJ6bm6WKRT3PSbEHRK",
  "key5": "2jDef6gAXXRaheTaTZPbct6ACwcFm7yJn2u6DACPhfWqz5MSCj3g58sr1shUUPVzk8KkN24RMATJwwRFHoDsuL9j",
  "key6": "5e7t8UfmacZk34vbT8N82vE3gWQ1Byyoa54jJjodKnpR61e6nsCgVo923RZ82dsHHte1CJujKnDWgU75QVp2ozrB",
  "key7": "NL5vzTzXn3UUuxzV1XYbgefKgUbfJKbqPzMnXpP7b5w9cAcKVWHaUJE8ZCPs7rhF8RdQ4V38JFwixMKwnHgV67f",
  "key8": "JDo9Mbwj4itQqh9FJQaXiFJmwHtioGnhLvaQ14PQjw9vBS4Yk2fgD1dVZyByP9ede8ATUvHoLv8hr2MD5YdPfsr",
  "key9": "5ChnVXfYvps9ezPEw8cHEPVPe25teDnkfLA2tuoKPbPi8ztY3RpzkKbG6zw8hnsQiKPMeoYvYuxwJbmqQW26wXWk",
  "key10": "3yLSEDWbjfEJYMCjxvP1VqgHyvGc292tPCQrGHopnuwzPuJ845ZWWtYp2JjbgfUBX69DaMcdgrA8EgE4XKWcKoDv",
  "key11": "2cuPrBzX6vrXmgGKxGc7UiUPWQv3sYsnUPH23DhNNKNr3uBCPBSC59efE1br97pUAGYrmjhMp9XJ5UT4Uc1TLjfm",
  "key12": "5KjCq57PSxnNw4Spv53vyyrFUQDKuXoDjvP3P5tf2G8UKTFNQRmnxqYF1HAmBeCimotCPb3jixAVcf79TkBgYLmx",
  "key13": "3e5NWdBrBp3h3kH73G7vv3A5fGRT6P4asYqwrE5NZNatK9yFwruSjHCqZ7MUChcyVPZM7fCEx8XYBJmJ6ExbC8HJ",
  "key14": "4TjCG89TDZ8kPtDg9egr5ep16dfF7PMRTWgkLJjo3DUKhTVpM11ZuwB5dkwB6nfWZofk2KA4HqCeS76gUHhoje1m",
  "key15": "4gVK7146fNbLT4ADevabwxZiDnRifCBo13MbKBtfL1bE9sbcGVrsFmV78qPQcVzHR6Gd1W7ULBLk64PwtoFDNeAv",
  "key16": "5aLKFg1HLgxyA6KhJApRtQxG3HvEK2JFzMaYCpnpGgjzUsh3o84xkSF4pHjMsYqte2mYxsc81L1uF9AMTJwdodE6",
  "key17": "2JUqZVFQuMpycyDAMD6QRnL6PsXi5pXEUUo1bWgBdP93Qx9unFHrk7wt99r1Nd9FpFwHWAiN4nXvmdzLxCXyPPdu",
  "key18": "3X75xWSGFwTk5UPr62gq3gEscSVEaeub1a52CRfWZUGjn1XhaQJ8HwQEbtaqiYRNur9S9u6NbU1kVtxQB4jG9yeY",
  "key19": "41fFCoQVVunq1vUXmBSUSDG8E2HjtoQ7jw6s8g3uFZtNQyWToSoZZhYahxdpG4y26kn4BskTmezvySx9CwYoXp54",
  "key20": "5PXZ7n2pKj9jpzFzVHZwiMkfa4pArttc4PYriEudpMWsvTDZAND64nbRb6tKo76GkhHD3oDofDMpDkEECQvKBXEN",
  "key21": "4ztKMCfjTWWNymYAz9qCCsNZxZHuER9CUY6GaLgJFiWjY7H5Bz1G16WahZM8HmNd2dDBQfjGX143Lqp4BkncdVPR",
  "key22": "4pAzcEMyqPUE5EpLMwoUGMWmXo1oZBvbh7s5kBLVYz8nRCHDXWKEQbKkPxWaXX2WYANDmRpYKmXxWzjHzecTv6Wp",
  "key23": "LqhKs77BcurBqurb5RwV4zDM9dqXVjvX7bpWUFLR3X6KaAY8tfxxzYTfD1gRPSg6x724s11nHbogF844pUKPQcQ",
  "key24": "4uuNy1so8qwxHJzxhuhdXjd3CP8UhQkzNdELYwhNiDP4irsynW1vDTBNKHJojKWDke62EKeALAhKhMnCKVe9oQgj",
  "key25": "5Zg3zMCqxtpgY2eRWh2mux85Et17vZiHj2ssL6nUeUmrr1nyuskrAd4TJbE8vPuA8g24J19wJiJsJM5e13uMFLQ5",
  "key26": "bcR7EeuWvu2QcDK8UKDMxrZ39LtnfbJt4FpBGn4pXSK7vnqETpgjGsJkRv4Qoao4dKK7TKYAbmZLuZsRTnHEbDv",
  "key27": "4BMJJTueqK9BHnczyksM92rS8JjAXdV4GeHN7K7zm1EAbiTnvvYUMq8quw7M41YzfwuLQJcPoZSL69JyPrH4RNwE",
  "key28": "4JxjgG4dvUygP5WYV664Fbnd4ZTxC3hNafEhLahtSM6mEGMV8Eqbu8recr5Y3W1GYbufFJa8Myqk71GJLxbqtcqx",
  "key29": "2qfwtYLkBmYVE6ppL4aewKEx2gBsiizM5qqmZ61DEHXC67NhvS1GuVR7B3TqW5iSc3gQeYYNkau5bgsapVFZJP5D",
  "key30": "NZnZzt8j67bCG3VyUiD1SkhYbbbzMCEDfcakUKWPs7psMEWQ2PsFz63PDY48pHEBfMyq7gCwzthosLDGJ5dR6fP",
  "key31": "vzZntQYuyUKLiLFb2crKeLPvakZ5JdRca2UNuo9qeSouYQFKRxzk8y1CDNsv9CWog97egiQU3khjUF4U9WJ62KS",
  "key32": "4KiLqJ5ooJ98XbPsXoVe8q9mqsVU9TdPN4ZtzBDa4wcZ6acriAkdU5XSRix4Ke7FqqTKub1kVLMsnRwnAxDQxNq2",
  "key33": "2gvLPJjiqgDXqjjkez66NbFquHjrwbSadSuX58GBWd7a53hanzC17gQNkogHzozvpK8GoYLvygkptnnM8DVqjpo1",
  "key34": "FxPjvnajDr2Z6VYJ1qN1ENcNBuSikbq1XHjD9M7z3RHrfTVyvQf1d8NzK4XgGf8Ds7MfP7zGPRUUxC6kkFWvdJZ",
  "key35": "5F5skZsscsTzVTRPxUMQJbRuYwJMcuiFuT1HJ6AVUT7V7YD9PZKWoqGCyiwji4mf5v5EaczmhLMHbcNkcS3F7YSN",
  "key36": "2M1JXDn2RnQjwKXaFEnJHkD7QJW5VzjLRsKCyRLwGVnKyMoV8hDt7LKZpXeTzSsLCxQs7XSgSFqpPihfuPA37cAs"
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
