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
    "5EbmpPb7my4znN1pT7sdDhdzRs6RCFsfGQGKQtKWd62SpB2C7eqp7fojQPXQCbXM73aVvQ4Hnfhm2Z5P35jQaxj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67bakjWE9EDs3rQ7Avx1nMvpk2sJ739ezzqJxixUuMkfYVCL9qJXm55Wf69Q15Kmshv1uPCLMAAptD7bJz4EdmKX",
  "key1": "2ywggMbv2hQ67PGB5QEmXjiRSeqWEc5figxdbVTg8WpGdFKdHkyienkhsjwTKhASX5EEnTnb65Yo9S1gZt3qPVXM",
  "key2": "5WaSp3QjDHALrihcbKyoor9LxHBJXeRswVHbHRgtWZmWpcfZci8vjmL4RWdVuGP9rSysNQL14mTRwA9XNseE2oLT",
  "key3": "3KD29SGsYDEVr3MTBYMmiM4q3NY36fdDf5fp8mmc2Ad3wkz9rTMoY7MDuGCK9QkpGzoYxFEm1NGXvXpe5Ag7ZC1P",
  "key4": "2At4z1YmS8VbELbFMD94VBYg6NzT61dJZ7gXSbrffZtJpDEj7YB399uLMQN7xnuhBgnmyLML9SW3kbCEYahmzWJR",
  "key5": "3KcMskDSXPpD8aYgafEbJB4NE7jGM7HvvDPCvnNQkM8BSyTPvowxf3mM1KDF7fj8TzZ1pG8tr7vtaWNdi5z3w7dT",
  "key6": "5NH3yiUE5PqFbJYFJhVQtpN6c5bTTUkZdoWJodTEv78BFRGEbVVUVsVMXFQgQusdyg8THtzL18T3SJhuN6KVcyYu",
  "key7": "uxwdb1qpUx24ptCe99reSRLLRgoazjoHMHmKgwHghWadVAXUJ8NfNttfwAjpi4s7wNGNtXRxLSVECtWAoYKyVcc",
  "key8": "47RaBB8ZyyHQex5Bq1PfQJPiSd6jXckV1M1gcHrgjfCRPggtJWb1mprVcjewN7uLWVVmY2wgi9YgYEJRGMwV1oZw",
  "key9": "2YZSFANLF4tgr8SL3ysCKMbHQyzAAnJ3UbJ8WGiJbg8LU4iQSx1JYjLGSkzrnhxS3MYqw7d1AxaZVQDNre57ng5T",
  "key10": "4JN56qU29Z2JP3pGu97LaPtGVnFCnS1cm64zbjAry79JrPrUT79muRML57TKYysJLAT9aHfjs3oFNSQmFqSz1QNw",
  "key11": "2oCksFfNcugZLfzqbxZpAAwzJ35k33NgdnVCCKsHF6CHwxsTpxALzEkULp1QkEL3TsHX9jRgjeiY5fR6CNmYW94u",
  "key12": "4RoZ4rUTLYB8BzRHEPwFcFhK5b35Q3y95MiTkmW6Jyk6cyfEFFwYmHaw1ixJQCeUdUZx1aV9Eu97up4UyUV4DPrq",
  "key13": "4Pt364E87mAJpRdggGqBHVa7qDhDv91HmSvZzBWxm1YS2aXTJ7vGn5NnCBKejSvT2GAXYy3vaab2j6yuDodUSVdP",
  "key14": "667maaRd7EWZhBkgj7o9Gg6rteTWVvf58MYdmwoftwFPUk557JCszm6xGDav7ia3wnPhFwzHszpSixJxrKebsySE",
  "key15": "tHusMe7mhiMdqvSkUmCpHK4SZAdBFtdq8Hz67gFQxH3gUSfqctSfDjfTmWoRzMb43eZ7QFd6BTgiK78j23p9br2",
  "key16": "2gd1TeXnuCfYY6Tpix9WGigd2mUtFx7CLMjb5eYaihS7K4UmQtqejwbjPD9Kn8ukpg2iXA9hY6vhof1p4mjCXdxC",
  "key17": "5ybhtpg88NKKGtqpgJnzSsnqqVtnTb9kvuocYhmyB3tPfJM3xLRToTnbxEgw3wrXqcfHekwnjigRjp9sBpyF2gLc",
  "key18": "2XBE3MAZaAUq1Sa9bPzPGCxq8J38C7zJJfMfP7STu9vYHWABeZ7Q4XEzdpZqBhACqpKg9wBB2UbZh1sgeMov9tR2",
  "key19": "ZfgFPpzDseiwV9XwgbKHqd6dguhz1bwa2mrJTtcsS7cA4tCDXZe65uU3QUncrKMRUBj8tHQfRXMrLxy6hFkh3qf",
  "key20": "4ziTgXwyXYszfP5Wa6cebLsYcnMUzqEnhWLCPSFcz9u2hUpBMcoDkRBqh8utmbpPzFMoLJA6zXyWc6w6TF6CyS5",
  "key21": "6m3xpiq9c7R2LUUbRXfdGNCeGDE9Ba467PqqrXLTa5KXD4ewPRtWfP1NkhJbCjnLXae1G6ZupCkc9pDAAZxkRTs",
  "key22": "27WEGznY1zDVfknEmpuLe1raFYsyQmXWZWCuYEgnvmKsAvAebazdxvZ89jGMYc6EN43VGr9xhR8dHucFqmeLrq1y",
  "key23": "4UGYxNJ7X1besLMAvXp95e3AsWjuVFU4kujeRQhDvGFN8jNBGJe3JRqDz8v7JX8Q47NJs1ryJUYmcqCjT3puuMj2",
  "key24": "5uFRVG6y2UuCiJLYmdJVKNfQhZYKSBvTF9YEGx8KRc8pF8Hy2LsZAKCVLCnZD3TjkM6cktjHkm2TfZ2PUMt55SyH",
  "key25": "65gMJiUXxDQShtHaXW6tYtSwtjWSg2Q6Ab3V9oQq9ys2No6G9mP1Ar79mzPQ1kFsmpjQkXeePmqF5tG1VGXEuEc8",
  "key26": "4jyuERXGnyJVsA2Hjm7LHc1zdSeZZfTP7s2YT22739TLh7cJ5Ug4SEbjxmRoJFQC8Tm6L3kCRV5cgFNMFtvckyLv",
  "key27": "3iMMVyMpWsAeJM4LTJKR24NAB4EjNzWoQ9uacju2YinJdYUSea6dbYzURK8GzNQ3YetqfteaBEC7m3o98BXYZubb",
  "key28": "qTSuSR5h9QavxTrV55R4GcYKH3Pb2ZKfW2w9d8fzD5wXz1xtm4xMpbGhGgKQtM5ARrCtXtG3K4yMQScpdJzuwkR",
  "key29": "2CCbaSK3gFFjhDJtQPTpkVA67T6cX22hp9UyiJKaCgkm5KBiadBosCFVg24jarYjqJeYEXqtvcoC6Hkk3WL7Fr1d",
  "key30": "5M6zZXh6auouVkuxPZjFPqqyx7waVWB28MKsQAgc8QnkB3Dg5x7q3tkeCnTwDTRivq87jnUf9KYLXr9pA6Z7suXF",
  "key31": "4XYSVVs1HzCbEu3L5gUaLidpXSz4gK6pYfBAbEdBSSucDuXgvLgRAxgbQhyHrt6GnesWP5nx5w1UaFSeYP3kPY6E",
  "key32": "41ppeJbkjokMCttQneSeyEVawZmPchZzzXuG6rjfp47xJtzcTVmJ8Hx7L5Nihbuue7sm2g3ERaGtajp9WpD8zdpk",
  "key33": "5dTafwTACvsKom9G13Dv4STkCKsZuYj27shMRhx4jLTz4P2AkT4VTxbhvZxAKWDSDzJkzd3VdfTaPwW48Czmg6PG",
  "key34": "37jshxm5BMq9E9gV4RJHRE1wgNCxkRqdubvTVvT6MvJSb18pnm1XJ12wFZs2EVd2K9GsbQ3xSHdXK1PHejcRf8Xp",
  "key35": "LhLazfCDbk7CJzKafFCeyL5eMeJNyD9Rkddm4zfUc9oTQtE2JoH7DnMNAMr9jKnjiQDQKR6ypX53wUXJyTiJYhk"
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
