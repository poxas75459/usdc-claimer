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
    "25UXLf9XX3SoEkpJLnoxPLiZqBbdckZmj839nCXYWWkU5rJxekyZfWqPnU6WDRU7YdBKNNJHoixDa9gh8zk1zSkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nuzF1F4L9cqujhQfup3rkywh5zGRksvzdqcaqjkf41wEfdJ2dVirz25S6oA8TRMtitoaB3tYfPx4rGze4j6kyAp",
  "key1": "3DUnAxy9wzdKFkSNx1RhvXpmzgCL3eSxJeM8ot8ozfQDGpwFAFzyrC2GL63AhKaLvJ9ayxwCEePTQJN9g3Wk3mua",
  "key2": "4tWZu5e1LEZE6tKCbKkVFcmKbDuuo2qt23c8e2x3QJNDdnFtVMnyKMT1BPQTZKca7CXro62B4exwZuttCQyCcaRk",
  "key3": "54fqhvi5aL8Lgs2PGEA5wXEiiR5TuLJdc4BTEMFtFrmuBhzchfEXeboh2fTpMjkWQ75n8jWmLyvniZUBqW1iX4S6",
  "key4": "5isixW8RpP1RpK77n6Cv8RPuiCUKEXJ8ZjaQkJx4sftYEFMRBirbGhgUSxnGZj5XmUnZYbJ9LtAVcBnm7j1MGoW6",
  "key5": "5QoXDXhxkVuVPaSdGuxfF3GMdqmL96dNRthGBZcMYCeqypJrH2KQEoQUYg4H1Qh9MHahnt7oXff2WQ8RzbZ9YWZR",
  "key6": "8zV2Cw6F8CULpkrCYFUsBRGAHX1yPfnAhTPJzCLcPhHk4YYb2GGZNcyBkkU4v28SxhcWxzyrDZocBqTacYxVRz9",
  "key7": "2CMtxoqNEJbZ5rBf85s68eYyW4bAsrVrgZZZjRVtZ4mdvP3a9db83yGBkN5ojBKFyLAkzs4HtYk6SmDBzLKRC8kG",
  "key8": "ZKvrdNhxiuccsRNQhvQ5FjdwF5eiA9KBgAhf3KAvC4Po8LyBvX7RDdPERgpCZh3VLzi1yvgZi9uaqZbQh6SDoh3",
  "key9": "32J6AS1uM395cbnCWwpca38HsVWJ8PbfDj4L1yqJMWhpWEX3sUWB4d4yuSQcEwNUqz8WvXQeGNT5AwTysvp9Tfh8",
  "key10": "2hUhB8aVD3cxdZM47XYXiakH5raMcQSgLfEJ2vCkGUL9YJyiktCh15LubR8Drd4XXm46bmh9Uh89b9qqL3pUU71k",
  "key11": "5noZ1Egv8gGfo9FUcnvJdRLiTmX8G7oGv9HtNicCmq8VwAq3Zq6Z9sjvrDT7ngekekFWhXvgbszkJDQUZzfwpu4R",
  "key12": "23NUHUgh56qbnruP7W2Dri22fni1xFqKMzPJz5AGoygM4qF2Vfbq1cA4E23rt99YfWvNiVLhst24EBjvH6zMtubQ",
  "key13": "2M6Us3U8vehfLhw6axoYZi6n1gW7MRWzTFaFFoC8j7PnsJMPfoH5MUkhozrW5BkkaYyrJx89D2gwH4j7GXURJ9tK",
  "key14": "4Fv41oSvqPyNJEVnaCMzfWgG5QSYwMS7nQReGRohL1RsCMoLu9RNRSEmNsoJxQjfcHCexzUGErEiPjRq3LVJmkcP",
  "key15": "A6Ah8qBoNecgt3dHXuCJxknfL3CYdofmY9o6VwM15xqtJfN1c2ka1wJvyok8cHj4bhTWzBXRfrGn922L3TRfaZx",
  "key16": "3kK3PVnP3PvAvfLt1nSoZ1uQ8wG8gT9UMJL4BgfkXAj7TWFCY762BriQhyKx4CFCLfsGnvVAxPCk95hTQyXUyTgV",
  "key17": "3YdhnkbaUzhGxdBZDTzWFc5TkSEGum7T98zuMia1gwTXNhC82WVFXV1qQQMfKYUjPQfxmWkkV6u7p5G8THqadky5",
  "key18": "3ParKJ5dt3DUXd2AFNgTTcbg9bXnZ4WnvNKEsAx9xMRWDJy9BafC8iRadF6V1pbsfrNthkZW5wcrQccGJTdWrVgL",
  "key19": "ijuttZiTGj5pHKziiRxfWPs8rqwXvFeaDJBswLmT1hF587K6hYaHh6i5KsovWXwm57P3yANPLMSc9kWMSGfQrfv",
  "key20": "4PUsNizbqDZmpFw1xC68Nij8swba5Y8NH88ZL4ZTwukYPXBzE3sxFoFeXtNeQBkdKw4ZqAsf362Hr5mN3F89fbHY",
  "key21": "3inSvPSEgKNYdtNG6ZxLZq1NqVZWGpxKv192p2n3q3uuwE6BEvzQiQHLwHZ6e5bXSPRy3BR1DCNC7sTmU9dfJ7V3",
  "key22": "46CUgYwC7asJFUVG9aaWSA5EwZHx9MozKrm6VDZxkfUEytZJcj73rUkXUjNqvZbgrLVEodyVfC1Unp5qKc43vKT9",
  "key23": "5pKk4UxicEcL1hfMQFDzgMbv7kaUJBSgJA29MJuiucEtgbHXr3uMq89FyVb4RVT3XnxPQJyf53NiGEGTf9DzWJ3P",
  "key24": "4aUQc7AAoxkXCAxzSeU3NvREtSWx8QLsD8FKS6uiniKN9yV22mDA3E7nNiLz4dijeyVfxngK6b3fdbv5gAhojTEz",
  "key25": "3uYcmyYNUHGHuaFbtYsqLG7MSwYZK9kMhQuL4mcgeyjmcdrbTMNRc8ifvLvvM6K6af5ZdN4r9ws3iq7SbRm1KmyN",
  "key26": "5JrZBxcoSSVx2nLFAGQ6obxUrYNoGDUMLiJfs65dCEDYr8D8CfwFyqFvPZ9p3rc8RPpStGuP8aaLq3hqEMr4V6MN",
  "key27": "HsqZzy1LsKwdcfgedu5oCyeeP3gNGU1nNKd9g6L9pna3cwswFdJqUmUSyB9R7M6RRmw2wiDE3uZAzujf9QZVgRs",
  "key28": "67RA6vBisDcXYj7eBehfw46s624wNJkYakx9AqWNHyFCN2L6k7Sdd1aEYyDzG5ZZBwJb1f3VbvaPQ1zrD5ot9rzq",
  "key29": "pELrHfgNr2VPb6PoUX3xW6746MkSw5C8dxckeyL5kQks3fqa5KXHmFWQE4WL42psRGdzZeosbb4VFpoj4JuqdZs",
  "key30": "4pggduVpq3svMcHi5P8npRVU5AjEymxSzV5Wey8fsGcY4cN1bviCfXCFYShmTPsmfYfjk1WsFr964uedR1vT3TqR",
  "key31": "sEkE11BcKsgxGyH7muuFNZv7zSddEFxgNHmW4pgV4nwQjNMMVMUanWTQipcUqUSCSunbU5ycfhA1hYk3QkK4TQc",
  "key32": "2zV9m5kgdyqUHMw3jeQRDz9FvACSFEnLU9KRdBeZCSv4fmYfYuHf9UP8mcxJ5L62JzsyUpih4bFBDZSvuncMzmrS",
  "key33": "x5PeQwUoF1goVvQSp5iSJpwpREAKXXoawMFaJfqHxdvRXRZnPjXcQgVWq4BLKWBKgh9JRac7ggyFwYkf7dgwduy",
  "key34": "5F8BRKoXqA4F5L2c1EQwbVNRqXEPxTZozxWHr4mQFvBT5yYy8XAY5k1e8oTef5Jmc7Lje86GxUYy15KLq15TSxkb",
  "key35": "KqmfeKcEZSgtrxJLMwwM39fEuYedMyFscpmBACX8A1ZHFnGF7JgCnrZ7v8jWaLmJ21ThxdQswdpqHH8Z7k9XFJM",
  "key36": "3GgywpTR8DebTB82V1Sv7DfXNH2Vc5vftKKec5zwxw8ctk7BBS5jTazVBuwWJYJpmckUjSSnkURxDP5PiASVgh7L",
  "key37": "MHDmvzASM4JDqwATynDLaC5kirE9Kfh1RsdbStG1VHUiKFXGWrn9B3VpqpzSXsvYeXUjCxtX7ioP9HGMWHhWdGc",
  "key38": "5RcdMpz74aHW7aTf2aDdKPjBAaCFyWkpnqYXTspd78rhXLitMjjhXtRCfGNX7sYSrtTJPYJrAfrDdtBj72jzAs3e",
  "key39": "2d8wNkSqFf8idapBpGDp9eFx3X1cckdkQB8PEXHzjwXigR8b8g98dsXhyLW8JPa4qvF2tbJNjucCxzN2uqmnZNui",
  "key40": "2EsZH9zqMysVLCjpYySFvi9Fcze5MAExsdnttbykkEDecpkyreN2oALsy9QJ6TqYPQ1zew3fTF3D9jhzsxebA4KD",
  "key41": "4JLt42CJYc3LSomRi9E5Y9u3RfUxruHScAB4kcAaNQqCtANTa6yKPTjWmpok2GuSnANjpB1VpiBPGn9yPo5u1JHK",
  "key42": "3Bezf9a435AnNajSLvGrAWF1FfueeuZvVbbUuXxbh4BXfYmGZdQcwvJszPTBRm3qSTqqsrzt5gMfMCdQAon61nQn",
  "key43": "449BixDZ3mngbsSN6ZSbjVoM3tU3JxVhFDE9kQQWA1Erpm6ZxKQABf2VQB1zwNMfF1dtvZWbnJWpBqt1yRqYmtw8"
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
