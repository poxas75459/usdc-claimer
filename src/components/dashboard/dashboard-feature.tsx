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
    "9CntscHFkgcqtmfbRi8vE7V2dRNGnK2hjTVKk4fKfTea7RhZHavB7osUz22QpJqjxdDrzwzK7zoHnjMiPSppkgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bWAPEnNUHN3uzCGG57RjXa7Rki96dnZieNqtR5Y6JEtrYFmdh4JPH8P2bxogPMXKNCp3WJWh2hGV1rQLbXRGrGM",
  "key1": "6rcJ7BQ86moHAcfbVNnwGHTfPL7jfXWNKvoKRgkF5MwNBcps2LXD7njm7pnhrbra6dfD9SAmP2KrkQKxr3TRCXz",
  "key2": "2h9nHDJ1yaWjusvmJcsCzVGaDTgVcYxAV127djsqmz3RfGvWJ8iTwjKJFf1Tp3r6wSPtMfTUhqiksTJGHHfcc3Zp",
  "key3": "5HdqLWWSydRQTc8426nkADapmRamMm7jBqMi48SqXcUqwreHwKRaY9NvSX1J7ceGsHNQYjC1igyVcAy8D6oV6SSm",
  "key4": "5oKkxa8a4wzskvqVuDg9xQLbb72vdbSs8rtGkGK2VRLVTiJC1Q54N3XNKKRTBoP2FDwmHxzrdtfHnEssMfNFMAFL",
  "key5": "NXiGEhduEZETfBZyN9rjdqqNgKYScR3WCiRWWTo1hqzyGsVzHbNT1YAGXDfwnGnvzsjK5zzbHqwT6akCNdewyNN",
  "key6": "4wNffu6DhzCbLkEd2BqrTKQjvq5PEbTUJQwZCwBeKf1w7LgCf7SASNyLwShAw7SodDMKeB6fhBxwzSrjjdeXKPSt",
  "key7": "3YENCEKcGE71YE1PG9rbTcSTi4PezpABkhoRqLNLuD3mDCFGH9UnuzkE5ksLqpNpoy1u5cEZSN5ikMwmoXUHq5Qu",
  "key8": "5k2D62LktpG3ZqzEimtouSoGXyAn9wwXMpD4cXovZTQeH6FRZKeX9wFyDr3LvrFDuwsnjZcwmhKc2gq1gXqhPGSZ",
  "key9": "2yBPcGFDKW9pVmtPnuGUYge8GFr5fzvHEkMeFhhVNiwvsZzmn6BU9N8LzHgiVMCyGcM3A81f4QCKzbayhaiwWTcX",
  "key10": "gU3SqRiqfyW3b8zvoRehWGHnhbSQVErUA32QvMaBHu6qT1gEsZENZxx18THDBdpuf5rqf23gcCR5fhj2ygy9H7E",
  "key11": "6454FBQ8sGaMyvich2WcRjNyarcaMqoM8M1jL6RTLK7oVA6r7jGKrSbKbuxgedK8KVhVodxRby7dr7343witF5Zn",
  "key12": "2EKjdHiZPEyRgmmgrUXvVzbgsRJmDwXyA45i9z51JprnQdGMp3KxPoeDiy9Nj7MnowpF4Lp2R4k2UJ1PAJA1z7PL",
  "key13": "2ULge5axhGSxWYCGBcDXnqNqFKAcmERrhkrig8v3jMRSbmL1hirc9VzHEvuRBYUbU2vzrqAy5Qdr8rtCugGihcQF",
  "key14": "5ca2HHMsKuidLsAfRnNnU5WGT5ZXiY5xdiqQbKJbX9XJRjvzyvJzTCoGhFn9CjoWPkFsAWJTt9GXSoGJhTC23MLs",
  "key15": "4vo5LKRzkQtN3nGiLS5hHepfg89f3bYSaMiRoe8C9oKrYmaY2JtRUfLMVDsGu8WJnZYbN5uNVncZXWd4J2Ae1wnA",
  "key16": "3jfLG37nUGVt2atpRWWQTfed9nyHZ4Q3yF4UUoRzU5XAFYHLAMVc8eqCeaXX9oyWveFPj5GzAFCkAw7ononp5KWV",
  "key17": "5eePZhVBNShdd5QXnun1DxJ4QpmsgmrDL43iMMKf6HzGKELuNAvzZVAuRiwi4omjmJrJ9UURgRf3N6V85smSbP41",
  "key18": "4Z5Zh6jZgmDW18USLoWXdspfjvyBs1vFKvfYcM6gxJruyncmBrP3cgrQwBy5wKep4YGSF5oxoDFyPXr5rJAPuRC3",
  "key19": "5cEoM4xXtj9ZmW3DptBKGaMtDLCbd8MJK4YwShxsbswnzRrHQFJSNtg2CUhmELcSTmLv27Zqs5nJUw7gJ2TG7rhg",
  "key20": "5bWwgA2dewppM9V9vsYu48ttPfyTxKBon3v9fA5B9zUTYu3XUyH1sW9qMEfzeHpjRbZrunmPBECLZ2QqSkvi4X2A",
  "key21": "4s1spXbmUviGgT1N55uGPSKGjEgNDm5BfGmCR6Z3HQmL4aUW5ULgAUc9TDdjhRBHCmFVp7dL5Xd5YCjVVv9jkRFp",
  "key22": "4Q9UA6qLr2SXxfGQ8dG5PZbGN4Af5FUCKK2ia6gS8zoshssdMuhcMWJ5YLBuVbKvNUMJvFeLzyZp1E6D5ywgpGsx",
  "key23": "5jPSKTAMfh69xh6V8noQj6F9iKaw7LYcm7PkDSvb4S4eYxPskB9eYzGheJZks7vjuAktr23XPENQz3tuYPwktfBN",
  "key24": "52vSYXRFAewxMfjZs37hb2ydN8Nmd2hjsxTyJ7L9KtsXK7sU8nnNYhtB8P6RCqRupxpFbYZzrsPRiPNtEFs5Meu2",
  "key25": "47U65EkAiu8f5t9gat4xVh4nchxybrVDHFDp4aPiDsTcBfrCiqCEkVDdVZhas6hYbSXEw8axjrxauUYLJnRDkdrB",
  "key26": "annp74C6LjfLNqRBZCC7jBth4a4dPaYraQLkuckYzkD4J3KRH9erpfh9fEhvqcg2Us8yTnHrrsrAJEHnxSFYvJF",
  "key27": "2fnCgGY53GXWZ12HnL16JBWVbcs1dvcWewEAj3zgd1JxoRjpZpL7RAmCYwKLFAGYTGWSu4fmQ2r54gtCQW1AK8gf",
  "key28": "2cMmxFDQc7uHPFbXdXHbWrYBkKUBMvnFWuPE689iMgnttgR7m8WejCqnVfCXYLsUXHsyvvLQ1TRnke5urj3og6JB",
  "key29": "4ABc6kbK8RqDxzzaceUghKzPEAigM7Q6bkM5BJrFrT5t5SkbFJJ3G9XcgA87B3DP7rfLkJ87ygQqYMJCbvHhCvrE",
  "key30": "2yY1s2TgH6TQ3NMb92GLZS99omitaVJeT3gSTCNw5zjqbqd235GxwcnhzNP2C1JRqrsZ2GvTtbog2ibg9tZforEc",
  "key31": "5VZAwXsCYSmWd3NVEYi5ptxGXQ6BiZ9QCpQpnyZejE6rRg8hEJvZa1FJ9wt6c7SV7aLQKQvAZJ1x4kJtF8Ui4Uxy",
  "key32": "5Hy4TkchiwbSgg9hz2uKFbyDuUTGJYWTCW8bMZY1emw2JHpAKMg7Le6svYtAfXiqiXacHkDefy3kWuxu4nkdC7zm",
  "key33": "9pJHhNhDZh2mdqNciAhWEoKyp5pAfq4HFuNWm14aWJzCB353HQV1fBhvj4nrMWHkEyLsqSNjBFZmEX5jBP9jFNr",
  "key34": "37JX1jiyUkVizoAh4af7wZsDFvRP75YAzBdd5SvdVZ9APbwrxosSyEPQoVgCno3ANbDDLqu4Bn4Xa6WcL2MoLJ9Q",
  "key35": "4wosjZuR9h9ZzChY7G35eLkzQXyBRTYYtCBH5LzoEjdAGYH78viktMkVo6QYdi6dqRpNojJBtJCjsUKsGfLL3kL3",
  "key36": "5xG28U8Z79a4KKrtn2NWSpdgL4DeDYaUak6xxsyS9vsZKFsTuy9ZKpiLeKWetyuyPRCVk6ACc5aLsMVHtDFnkycA",
  "key37": "5fwvHq6BgBK3b4utgEF1wbWPhuh7nVpiqzdsLzNyF4bUTu4Db4m8HnLoR4Su7CRyVSgoM4w7HVvbCh4zk3fthidp",
  "key38": "46uWKUYPVzX4YCHXgADTo8E9m2mUHHeEbqN6KB2yQcqc3LRspQweNJC7hQNjJLVvtHhhE2nMXuHYCG9h742TWgCM",
  "key39": "3LofHK6MS2npZ8gsUzxB6XCUfV8F1xgfyknJzDoBQAckUxrArCpv1iuebD99cD9ypbBGUxtcR9tanad6nxx9UPKR",
  "key40": "5xK8QgE4NeirCtJKqtzTddo8jEEvrPBeLtLSPgCYDdEHZ5yZJYZxoos1y6bkUee749PBhNaERBRQpovpodWctsXL",
  "key41": "2QbynWBFFvtH7kiVWgBc2CWgVepwuQJgSfGvqEwD2ri32y7XfMg7j9DYyYvQz8qhZWbXwK3Z63KfUzJKoevEtfkq",
  "key42": "4RE312zFDUagqcR74ZduYChFJAnxVjgfnHBoRmcFrqTquzBBgxyCGDcXoA7g6DvChCD8mNF4U6rnMqbSJSQXwJDn",
  "key43": "2ivPUQsCkrKCefy7Y6npunGFCQgBntu9Sckn2mYkcbDEBQsjK74t8SmQAB8v5d2vKwyUEyJUVVNAwE8UxepUM8ah"
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
