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
    "47ZkkD8nFXXsAeGAhjzhmAx9duZDBs7wfWRQYtv1HJ8pZTMFAjMyb3PvXqsYmvYZ1R1aypr61L8X7sJEZb3LoDCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t7HjxkZY6yfGq8GFNN9JZUXCWWxkxvJMSUxpQPsFRpKmKg8ENqGsEr3NE3YVNsDtPhP6gv8ebxQvuo8Uj1cCFm3",
  "key1": "2eT1CKxhxb1CgVvpH2KWb9pm13QtVLoa3m3F52zWfN2gyqCPT878HXFpHJqJk3oud4Twqu17BnoJW194fBUh1HWq",
  "key2": "22bz45tMohYcUUgydsqanFsts8yx2r3xQS2dQSbJyDcpQXVYTAGcvWQsv9ebcjuDMWPenP8uHgMp86ov6PsTgm22",
  "key3": "kXtBRMJFjRKWArhGqsgpHoqZTPwK55ZhMzQF5Tend4yYn2k9W65QESkzWKkvNWtJ1q1SZypzFvnSDUEXQGn5v2s",
  "key4": "2SVdtGFTe7tDDKBVtX4nz2Wodu96kLP8YroUWjTDGo2osiKKvbcHqN6zs5hHDLMqo5UuisJJiochfXfRmtBix5MP",
  "key5": "51na2nDPbAbZrExZZcnwcumF47wuD1u6LMypgTbB1ybQ6n4wTD4y18gWpPtEDnqmnmEyngLaVRJD98wAJcw4asM3",
  "key6": "fY12m7u3DretAvgCXYxrqvmwe8eGewpB7iXPN2u2oahzVbRkQ3pJRnjUicFchaunkxqmanfzH8WgNGbKeRmrT1m",
  "key7": "37pB8tWvy6VACABUG5DtQqZz5sUq71sdQBpANmDE4Mne9CTnmtBLniQWuz3wiefyqFPpv6nqw7VH1fgVX2BjJSLV",
  "key8": "3bRzWfojX9ktqnACkeG1c8zEWchsJus9S99KMu1U4jVfxWj7uHCPfsnLycffjjghSWF7AbLNyJYAQZQ5N1q2kMPR",
  "key9": "5Xrb6g3XurUciKPKzK8XAW7UGbvagMhycs3sC62xRmapujVFmeGxVnqLxfsyxF1KTWz5sKyRpbjF1BYHR8NP8NMQ",
  "key10": "FGw9ZmrWcLgM9aKJxKkt8Eu8wn7peYdNVKQjgNWqfBFhSDzSbwHADnz7Bug5Smh37Q4RJtG6q4wovtSy9qGsXTE",
  "key11": "2qfrHAh2gMjTq34CHoRQkYEKQgiFCkaU878vkzwRn5UraAkJjFZLsGA6qJgmbKU23kksrff3DKdChL4mxQ7srHY7",
  "key12": "5a6jxn33ReLZ85dW9nYowVoc3doTEQ3fMwZUierUaat1BhTHW82M6rBKUub8bJwH7o96UQkpaWRcPNLrrfNywvb",
  "key13": "4auLFxsgU3ALrGWizSwskHaXgiWtVY9gcuEseqw3NpKwcWkHa1Y8AgDnd3bfDwEsmBU6if2QzhjVuvdbTJBnkAtv",
  "key14": "cKbXF5ZjswwRz8QwS6HAURXtg1H3Kp4z7dWZw3o7JdF468NpFWYimFNt29ebaQtbJ8dQFmYmtydfPFchA5jjHFa",
  "key15": "Sy72528oZe1FJyzGAhh6XukPiqKRHeWisPQzyQs55sjAwxKAFh6mYCqFwCPBumwUXncTEAzuKvsPuwpgqdU44tn",
  "key16": "3oGDnxKTZi6kXqis6zTeVgmQG8NdWLHB31zu49sZmN3G9ZkHUw6NzYqAKwAVSmky8QfWHDKYn3t2Tqgn1AohGnwf",
  "key17": "3eRhXBiwXctwP4ARPTLJfQfZbbVDz4Z68gxEVa8qfub1kYyDevwULEptphvBzj2jTkKzpn76XioB4qyB5dbjVLcX",
  "key18": "2Ni6enuVN5Wsu6aFBhMxnDTRVq4PNn43TUSHh5S1b5DTaG8MWgtsW3LuMAr3U7WTDFyYe7HUAqQ5NxoCbXV4WkBQ",
  "key19": "2AjCVKrNLG1b52NbV44ggDiEZ5kEatQ47bhGLDAjEUZKYsQqXKx9YpZLBmRYwRTRpCujoVEUnipP9KhyYbMt49HN",
  "key20": "dq7VSLMuVRNpnNSSVoMnGyLPckrXPhiSivQuc9GmwgYMey4NvF3okSGLLNmwSJPUohNG8g1255bV1RUEZU4ayFb",
  "key21": "4t8nBwChT4Xo5sH1zBqwqFb3UVB9s8FzF4QfczysCPdLcpWcjjhEk9q5rU1UKz8Pt6miTPo4Jps6NBTPnzsNwGx7",
  "key22": "sz2CtTFockbXzbNknRca9ERMaZZjkE3a1SHPzX4vgsmn5NcVcgMoNKXXnsF19V5M6sjpvHcbQSLMcznnnXxx5kV",
  "key23": "5peJ5TdkHJgsz4m5vbfwadCcemsjZTeyGeZLRHVUWxGND5YaDK6kiKHPkB3ysMCqRuiZnQDZzeVn9YwRqwxptyUA",
  "key24": "4UEig1kUKun1KnEmi1HYhpWNa3qRgbp167wdKad18CuwVXePsKTpy4UBpxTKTwpT6fAQEznyHM38HoCVgeX8bTHA",
  "key25": "5RscwXPapbGfx4GqcnCLehbCji77htRbXrWqnkBTJ4YKiHTjFcSUpzm7WurNv8YWeAjhF2S9nrZq2n7pKXbkoZWr",
  "key26": "5r7RLDRknAzyMKjmjn7hJMBipVr5Y8oR4CCb4ZJ4HXzHXbnYj6QBbUrDS4hCe7v2VhT17jbnKVgnkQr2tfHGCeKT",
  "key27": "4WeEcsgzvbFGFTGUbSjvhRx1rvbpdr89Ph36JnmKNkAfoqWRTRfqE1nYuJYMZdyM39wH2bpppUyTEkSuFsfnVw3L",
  "key28": "NkfFsK1gnqJBvrGSPs3TSXfWzTJTe2rdjxke9CBBfMwPneA8GHzNwJY77mWpQtLn4WK2vHGKNHFAyccovkASnpH",
  "key29": "Uk6eS1kqV1eeVtGS7qy9w3QXq5vGAKjjY4otWZMnt3hFt3715vFUm8CXskPnxzmf5ccCQC25RSiB1PnUJXHaYj4",
  "key30": "3YcgRoXwRngpFgPa364SZFjZRyDH7wWVt1ey7TWh6V7T1ARh6HWKAFuCPLEZLTbBRBoNhUUnyoqmTUgkQ9Rvhrqh",
  "key31": "2pNVjs6sN4PFDbFVFKcTTUkLYyfbfVbzQyM8mq2fsKjoQGCijLLuNE8vrudBaSHoh82FmbnEc62fEpcXq2Ce5fbp",
  "key32": "4sA52m9XbE8U8jEZzqJuAP4Ku6to5dnNHf4ZA48Z923japx2VnYNGisbK7QASyukuTsrEgikgFmxzfooRAcH8av1",
  "key33": "zE9q2MXy8ynz1PkVpeRgbPS3QzByXDUXP3cas44PFYUjopYRYTryKbsE2FTYT6fDWPCj2H8GN4hJmcSHLj2cgLd",
  "key34": "5MGobyz6VtYgXgsn1PPiuWdgTXF8RKhk5GPpEUyQw5NUKym7skhCAhtbCE1nqeckbhXupENDwSqXnMPbmkp7XVqt",
  "key35": "27uwugfDBjRM64tbgPYXoPo5o9Lp5WizwXHEc8kj2cXBvvvj49Dw1HaYYxa1Vv53orn8Vrb8QF2MwLcAhX1QjD9f",
  "key36": "3QWRW2iZVg8CdF6gMJVWoVf3eRz4ch1i5EC4naX2FDKTsy8VhWbtYZmLifjitBL5tFqW2bJkdExputuRpgaQwHPg",
  "key37": "2JymCzsCWxaATZ5XJgniCRX4ft3X6rAsEHW9PrAW2P9dhGxUcZ1kK7mgCN6vpQ93tGLTbR8EynrAJSSQDecadtPb",
  "key38": "2gVLqYv7hYrG6YJFgbx2c2oPungfKZV8diaMBjmaynUuY4bEEUtoWkV5cijcSmCh337hoGtuxxUvDZQdtKdoBgvQ",
  "key39": "PvvJEZNdrfJsj5VSB5bFTjCZu9wmMV2kBpaBRafxQbJFpukwJMbhBn268vSNn5dJTM1SCVFNKxDu7KZCKcoCJ3H",
  "key40": "2SxMu4qmACKfBtvqVpgVxa6U8b1q8tVmSJzqnEuEtkHY9fHNEoK29VHzg1hAaL6rLYh8odR9dz6whY3CDFjVHzHT",
  "key41": "5RNwAzHiWm78UEpmVUQnGCaHnkyq2AGXQVeryJhwNr6GepSyDYqRDqBc6EqDvCDxvJnDygkPBoS59pT3jhCh9WhX",
  "key42": "4B7CqoaNC7E6HcuBHjkTFNgViysgjZTyLQgmNBxiQXFaAwVk6Arjo2WyN8vP6erPvWMVS5pJh69aDX4CdjpJEReT",
  "key43": "4prKy2PVoEJjwSg6tw721GJqBaajzk3wVNsyzrJikjGBU1kSqVr6RxKAM3X3qpUkjTtsLW8PUYnFeMkAxSUbQiEM",
  "key44": "37KSJvTco7hMW5LYbMFCtjJmuh1MLnmJbnFMtDF7hVLrPyFWncGqxkMXQQrGUoXaawxDhYtoXtYmcfyxLDWw5EGo",
  "key45": "DQhDrD4rKWhssDy7kAYhyZrFLoE9UGmAP4uuxzxaGHxfCRs6mEZrJQGVK45dMJecmqbWMdxRcLCCe9budxRZg6k",
  "key46": "3SLhUvocnmoLFWoiegVurps6kc6vDZDfxDjtZEPsz52XJE6MToJKuzkykNbkY2tdpHYc8Kun7GvsxSUmCeELNhvg",
  "key47": "3hMzujMGdquzXfjHTPo4dakXu4mdMSM3GeoDXamJLESmLxvqCGrXrpcvu5ATVREiYEGaNnP4xxQHBJPuo4uUHLHY",
  "key48": "UdyQ5uBxqJMsRa3Xvo1B6UfM7kpigrRkBWgDMrx14XK1J8nz681qzZSbNSgc2yJWcoEjpbV23Hvj9tVzVzkyzxA",
  "key49": "48gT4xb1XNCQdTWXFbLMFToubhDjuo2cQYnnXAqyNExkSgBRLPQniFFJ5nhFXNuH59Rbmrn2XtaSBUE5kizn3hiY"
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
