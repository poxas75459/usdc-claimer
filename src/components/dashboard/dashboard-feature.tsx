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
    "2ThAFGFTPDavFfxnGP1MaNynDhodHBVhPdGvuZ43u9EicAMH8xhuXsJhbvEWMyU1y8oGLpsSTUK3s9m2DSMt44qR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u45h3uBW7brkwphjCi1SDGRxPYnzSkjLD2J1CyenLpTPnLPL66scgoPDUyUXjfGN3h8r3AzgbniokfaKUn44kAm",
  "key1": "5EcnTv17b89ECnUFXdatyt9MDLwCcEmMJLd9YjM2L3PMDKHsp3qHMR4CowB9Mooh9M5R9wYogfCjhf7hj88dTcFi",
  "key2": "57VgzXiFDwFyVa6C3ZtCEk1o6sv4TU2JJuKBmyJJsYGEcTZhfNhaFyHhBuUb4b5ThJ8bvgLHo5safJMZVzBMKamm",
  "key3": "hhCVroGak9sApNfw4CpUMW4GJCiCd1R11YaRHh7NUZc4J6iz4woGApC7c317bTxMZSSEWYGCbHvC4kMU8NV7Rzz",
  "key4": "5od5N9BAFeQxtfZTNjkpLnZiFGsEn4czncSg1KacHo9tGy6uaUYNtyU3KKD9c1W8QJHJFChWPBS9eAQUCUW2DXzL",
  "key5": "4qf9A1eSgoKHs53ZMFzYfK6rcQtsVMwJYAHVEZHB4E1SdPCcsndhwFHXSZY889ekxySCMaomARy73Cteu5febWwT",
  "key6": "4Z9wXgbzuxHoJwFYt2d6JhZiWPcnNjZsVJk7pupbQiMhhfJmjg2ZENjLEQ19qTXDEGwei1D3RuKnPa1a3NetDPte",
  "key7": "3DQ8AyWNybhjQ2tNYhkZS8bkjJ1L1Q8WQdo4WCUQheAnkBL9tCF8BGwdv8aVufFSkKFWB3YcnP1jvpwNbn1qKaCS",
  "key8": "sJEze87kxHVg9t7GQqf8xbUHhUPGXZsH1F8FRoyZVzaTzqVPUHqRpQdJUCD2mSxksTFTDehjWj3tFLJHaZhcqLF",
  "key9": "3nhqy8bQUGnxjiCJtUrGz9RXArCMYtNjHf1KyqNe4YBCWRGiePJtdCi1hLdTrgggfCMYh9L4KEdhMA3qgDJVCSQd",
  "key10": "3h6kyw6H6v95QD2ceEhQG9UbYeAyg6GerMAbByaWwNvKzahE3jCTf7KmakoENZfGR7dRZc7BxXiz1MmPAwZkwnX1",
  "key11": "4LWFntAv8fDgXpTqMp93JfvTaAH34Ww2xUwfrDoy6yyvrLC9GVUmUQ2WyjJEbtEghQfAo2adVKMF4k3VbizFeRaV",
  "key12": "6VwaEwKMpEuhMdVw9a5EQ2JNSkF191A9YagpCcXjVnPD2u6KsZzQtJBFCTyhdMnuXhABHnZAHqqQUNo7hLCnknU",
  "key13": "wEAm9N2LtdPFRA5FtjyLVRa7BLENpm7GEKCqZVuB9qgM6ervyYND5R2MkgydZzYqphTNvTq8KXUe97YzN85BPeQ",
  "key14": "5HYhVcMLhdsCzffjCyNf959T293uooKU5wYPGuZpMrLN7CsNgVSMhpo9UTsRwo8bDpLWKvz1xXFmGEVXPGt2ox23",
  "key15": "4aQy6tAMWUkpeh7EQreaE98PbGjtZGn5sxNq9eHL2evzj3UdNindtEtfLcy8z11hZtQBBJm2T5VJS5a7AvPEQsC4",
  "key16": "ra3xykPyFCytHeqobn8nf12QDYY4QEr4ztFnC6FvVAMb7CFQz9nGHNbTo3DHyns3aCFVBAaNVuwgxDca9LhaYib",
  "key17": "3VKcJzE2sqpfe9MUFfnVtEMS4xL3gneFR4i5CviEnKgp83LcuE8i2nGpddBVq54AxXbVLac7bDRrGbxdWUfwgg3A",
  "key18": "NaMFtrByeQdy3Qs4qVM51AveMkERNiJX4SSWeiQMeF26bqQ9gFBHox7EjCqjPxGYacHm9MCypaEiNzbHJbDQfu3",
  "key19": "jAwprkqu8wDTMhjHnxHdTGgDvbMqyaaxDKURRdRypGY9vLKJj6RJFQsmgtobtdyfGKRwDbQv2dzpTTwjsuLorih",
  "key20": "4ruZS9vMVdSJzG3DVBYL8AFh77MQ3zjL3m2xzLEAKCtQ6kmDjjgGwZyEZCPk58xayYZNwLwN6FqEU8PsH6rsjjxe",
  "key21": "3mGm9VJ2dikJGMWsXW2Noc8RSC4Ez6a6GadumrWWxBwoQh5fMtniDMtmtVHPx19Bg28rDM1QKsZZwrXQonqJ8RXE",
  "key22": "4EES2WhWrnJWGdxDvRDjxyLRdtTQVhqDQLFrfJiBZRFFprEAsBmWMggpww8nt3euy4gYRXBqYK8k7S8qCxG5Cg9s",
  "key23": "fe6g324pJeY4XCFDRT5RNMcV18176QvwEoDqNQFacvd4iAYfT4sNtrWxZ8hgbEbDFyk3quo86iwLa7fSMj7RWpo",
  "key24": "62Yr7M2G2upEGYvkRDo9FzkmRbwdM7HR6uFMpccZNejCPLdcqqgWmjBHWhKrtaNYSZHRGhhKzrDSVM5mScvapsFJ",
  "key25": "54uewqV79wncJbVHpM4pSHgesCRNNguwzhABhJacufTvAPLCPRjN7hNcix9ZpWPCY2sWt73WmDcrsqKLu3L7Stu4",
  "key26": "gD1e19nq2MibyZhGoG5YXz1GnW1mjSe1WSfdAdZsyvGBADtCTBBUXrVQt1pTJfNJbhAJdCh2gNxHBkXqPieHYCc",
  "key27": "3MNNAX3oLwk9W1S8Sy29izyK4DQJF1fGa97fKdhB3AZT5UY6So2S5KzA1YnQv8gm8KPHAFSUz3TWZVKFG7NFETDN",
  "key28": "4xD9fsfe9bTFyHkyhqB9uFXHk8HX83MgENh5MgoUsDoNLNq5JUtmZD2Gg8ZYfmFD6HFBmF7RMSMyY11Guw65oSkX",
  "key29": "R7VD6T3yVawkjYkhxnivHP7ANshWp9U2w4iRFPS1qDQpqatGPLoDRNN2NiYHJSrFxtt6tUf8CxF1z6DVforqD2c",
  "key30": "5YrAPgjTc7sds5dQGdi8EhMk6Msh5B9s3nUN8KxsB5GEN9LK6dnh25CyPiyS7yWHSvq5KQzRwQM1VbpWf73U1yYv",
  "key31": "3jZcERXsjqsL3v1bsbtmqtpWDiz3eFxsJz1NmjcfNR8RYt9bLRxJepbXCZYJohXg3TdKiV1dEYCzifWdbrxSwsH8",
  "key32": "4V9qjfMhDMuFMjv8YSa3UpLPhcuq5MMDeMNXVWGBnGUsQL2N9jJxWk89S8ipUKyF2Vkx81Yxv87t5uKvoYjtqUUw",
  "key33": "5EMkoUvJckRpaqdmDzqpkv5SdNjVBKhw6NtU8ousW6uYxh1MMBySkCAzkq1V1k8BBhKaRedrZpWxVuAautdMdMa5",
  "key34": "5hYNErmdG7DJ3gsB747W8eARg7TRHZo3zem98UBwQ89djRwYVQra4huxW6i4ACaQsuHKSCo7HNyzQ71kkShfeN8F",
  "key35": "daeAe6fGZfGcqC9J3zuqEprKB5PnB7EuMWzTJ4RWj3reEd2ykawjEJZjdL8ZgsTZEWLzTQZ8YwYwanTk7w3asG7",
  "key36": "3VwgPnRa93USPecHimcyT2zYemszxWSM5cqq863MnCgV6VnxSwfuqtrQHsS7k5GZKKJqCYhUo6CPkn4ZBbLEk6EL",
  "key37": "3VvQwgUPKph7i5FtYxsWgjgpkBpB7F5f8taQFTCk4CkWnv8Yx1mpBNoWdJ4o3DXtY3eCL5qCb5rWXwg6DhRnBrPB",
  "key38": "65TxoL5PREaCEgBxk2YbNcNyBV7wts1gQG2WboeodsnmC1APSSswwCmgkSgCJDUW9rysV47KFvMYcaSuEF4NS1gw",
  "key39": "jyW6mC88gTXjf1svdT9QGTzpVoZErU8HZrCspeQzQnyVt4oTZbHpe9HxsCe2uDR7n6V9odbZxeQme5URi6tqWVU",
  "key40": "3HGE3XsDi1UTkPZcogvbYtKpiQg87RgNaJMGLSyju4Vr8eRieYEwbW3pWWTtS4PW5np2rqcRTrZCYeq5pEGaaqpq",
  "key41": "3gWyLYsQF8R6GPj2pXQP5SLsohWomTmb19ak7HZTceJep9QDJA8hhRL3k82ztfLGnm6CE7pyKWWw4yDXBvcEjN5j",
  "key42": "4bYZUVAWMS31dwDzuuQA6kTf21wV1uoLdJ4coTB6ze5AzQamV7hdrwSfsjSQktDa88yGhDUJFQWhpneeSRbADAdK",
  "key43": "3RNPVdWWLgEVeMsZY7DTsUAS6svfbTNbnPS67xqQUmzEdWWPoFLv8nwFVjSPNDdUKjdAhcdUtkxHAN6BxTQK8LGs",
  "key44": "3xgWtxaQsNBqBrFLJjVZ7LNN8GoqFbBWZCSShBs8tWLxDQBfdEZRWimNTfKT4943wihzqm6CvrBz6LjdaRjq1NNK"
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
