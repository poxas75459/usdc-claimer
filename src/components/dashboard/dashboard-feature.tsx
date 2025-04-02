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
    "2P6g7RQ4jVsNDBaLYh6QMGpRiXqywdhoSFqEhRBPvkWXRPxQwYHYFgJFh1ju7JosfzLN3CgrbQpLPnZB3Ypwr2FK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HPmn4sqDLXuyrXBcGg8vtze9xURanbfmhetpSQp1rhbsXQyaS19Vbw9Aj6d6tKgQ9ZiLmbwTymhD7Z2dKCtUfEW",
  "key1": "4kqWRgrHBKQNESzCsHUyBUdyQNw7BFzsji4BimTPognHjPfZRsipfyPNWreu5cEw24Er4nZ41GC8tv7oAsbc9jm6",
  "key2": "4PQurwKVfV4JKu676JZSUNSRgmKAc3EK5xGwT8YTGj5FxME9YkzcxygGEP9nSVELjTnuQUvz9J9sHtfVCWwHiKKA",
  "key3": "TgC9hW4ZAnu2JDafRMcgE3jnHDYzgqmzCfyu5oQMBxCW78iErgxQVXmbFuwRQXBtXaBCt3mo34YkFDBc9Us7KCt",
  "key4": "3tNXS2vFG5k9F8kAzD9XgBEoPZGKMug53f2NxeBvEenDWbJFBRvsmjeCjX9pM6mnZnGgS2FPaWtxtqQ7u89gwjw6",
  "key5": "2U58vXR556G7qRhu2YLerZwHnfGh6gC2h2e2FYGicxSN7SexFt7pRFTkqJcNPTMfkDWrj9VbLwZ2eBaS3g11T7A",
  "key6": "25CqBnpmjNFhtpdjzAcHMT9it1dCKNdDj2dAotyDLNSNyXzVr5hY2qMgyNaYsphmjjouhEdrBLVuCgeZyn8fnbhs",
  "key7": "3bW7mtrehkVoMHm5kySmdXsSNDv5Aa1mMuWCj1mrfYQwAcAkJmn6MzvL6vXcnVJvwAw3dpGDHh8x6BCZ5oVaraWY",
  "key8": "2m5mW8Gqheuzhnj3CTeyqbNo4AarnRTSLDhyyFWXZVLCzLUZU27vHQ9iz5gicvsqjs58pDBCDjqCz6GHBF2Z9vFd",
  "key9": "2pFvjxMT1jqiWkx3cRkhoUYsXEZcDr8MRMXKcPuqyPLJjbzfJARiQZUb7ANYc9jHpBD7bvhqGHbwUgcaddzscREM",
  "key10": "3gfswMwEjuQDCYvTpBKbZw2C4qKXdGJvrVZ8WNoM8CSiWGd1XhqfFhJ51xgWNuyQ6YLKyksmerNKZgNMa9yz7Z4X",
  "key11": "2G5vph9woYdevptJXXbBFXme9sAPkRfRH9tBVBR4rNsndetoDHh8XozWWaNWQNEmR62ik93Wy2QvPHkfX5ikCoru",
  "key12": "LsPET4tBwpLWm5gFc2FUhmr41bAsQaJmiPiHXFNPJf9tKKvnUzqEbaTDQP3shS186GBEKsfkL2DyyAvnHUZ1hb3",
  "key13": "4ciVg8nZmcCrUPqycn59YpTNTp1KGhvzSqhEKTSvVEUeQ4L2i2vrvenRjGrkFQqENwPsBmPM6Eo48qau9x22MQU3",
  "key14": "3adU7TkRnKuGUSibd2GpPrQWKDgDQu5xjYUvCxcCx7LvrTYWYWCVjfrn5sXurd1sQb6CBCVke5mreXimmeHHaAXe",
  "key15": "5TZ3PY1uSNt7JhpFG9NCdjhCkf5CgGrL2ryVbimMs8Y3QCSR6TUSz42Fm1gBwZ15oqcg72Rgr6T7bLQctKA6Ccws",
  "key16": "aMxKcgzfgBHX322rCY2hzyh4gEzSf8WibDgQna83kSfNNZgwtSjgj9T4NRBdmX71ydGY9fBKUKTYLBVk7KjN7Zs",
  "key17": "3tH9iGQQK2C5sBUqb2sWHqDEsJ4MGDnu3ME7jPZg2kK8y6fRghL4vNLpVMKa9KZy5bnSrik115TSCnkCmXshNA3L",
  "key18": "2q8peWqt8sfZqinVt9RdB54pQ1ZeChAqiwSVgS1wyarXGPz946KChLQqWVsM3uqZSQpbQvhh1fGHuGRq2MTiUpmj",
  "key19": "3cP6fBy2a3YkJpnVDaTvi4h59qotDb3ZMPAbq9U9qtk2xqVcAqHPBuGbDS7PgPDsXoCj11VZ7KLepGCMW4H7xAmt",
  "key20": "4iDoGgNaGftWgo34XSmqetNxdw8qMRSuhfa5sTqR5vBMcKSbkaH6xv8d7K6d3ntF8wVFJZNbZq7WUkVzQCP5Nx9k",
  "key21": "5NYjVPiHbewTbEuxpaGMRoXZA6ysMSjQtWrwTJ4xrBNa8NwXhodaJKHWN3iiNvSZQ44M4PudRuaY7EziJVBKzuPM",
  "key22": "rzKAo7EkRk7ycowJRJn8Z5HZRDiuSz7PwGJHLNgHHZ5Dz1BZdHFNEAXYQnRkfdPUVqCpDoXuZG6d4ZgxMtEbbS8",
  "key23": "ZMA7JgSdcSaRcvnXtixmofATF2d1uFoc7koC67Rj2zuvgXPCjBMvwVPB3xxP1fm4YidfnFX12r48eFdBmZtKMaS",
  "key24": "LZmSpvxYnQEJ6C7VuQ9DuD6Kvz5R5WF2sm8fv5pTQSL3npsMeiBbgWLYNzBC7m74DqEacoo9cZRjyFpgpjsgDXL",
  "key25": "5xvTHeewPxdUPG9vmF73rKuTxYdnxmYPXziteHGM3goVAKqSupUp4a97fQyTpeyBgMQiSRNbZbsPbmUzSNCXJkVZ",
  "key26": "37963BJsee5BY3ooX1Uj1UGWidLbhCB3ZcgUnj1Cc2FPLEFgKgC5SxxiP8rmLeoqCHJiQMaBKHTVqavN3YxB4mvL",
  "key27": "4uUXJUHvgFPf9ZCDtw955oTyz11wxhnexwQXLBAKFGxg9p5cpSEKkRssPPgJEwRymyVzACDqkWYcpYBFtQnYi3vT",
  "key28": "5SRHpmmRmcJSob2uK6LFDHc5RjTJUBNfqv4wCyZJKNi8JGhJEwr3RXqxTQMwLiivuJiyBMuxvvuK4v1UVu7diyQg",
  "key29": "FnHbxUyKpXBfCTqw7rLhqpX4ppJi93vzX8yaSvt4H1N6UcQ3B9wZ89HWQL7ozvcKkQFCxGcXgjH7pHPqeMKLc6x",
  "key30": "2VfU7B8F7x45ULXhhVd2EiTkuXgAbL3snmNm849xzotq1EkafL73gLQ9tdPHzEmDstPeTU5a3S82qJQLu4TkwCFF",
  "key31": "2Dv5e3LqorMACLPseQqn85K1ez9tY8izn3TARfqztZ5DoH5eXQfVurW38dhtL6MHjpbTdZb3YNooWr6HBGdyJWfv",
  "key32": "2nXBokfM8Db8BEcFdaU6cp9b2QX299MdzQX8Vr58KotYaJoQZMXY6MQvnnwXNmJxNZuGVUpGcEkNh8TDUPNxYBRt",
  "key33": "m2ZLtkBHA9PLrpV9nhSJQjBK3DekBHXYMTngfFYR7cheYuZhqNzfoZs19Q5JY1HQ4GBmYtoXtkL1JHrq8VohZQT",
  "key34": "4M1iJahhCujtoimduh4b7QiYjLTs2WJfCTJQtxvoG2G46hKm5iswgfvf6VzXn7FugDuSVT2UBmSLX49AnzKpuuqi",
  "key35": "4ZdgXPcpehn1S7H5ct8kggnbp7xBz47HTTubyCFDDcBSz4ngGsULCjf64CVzsH9r8yzxjNaEVsRsm3Sa5j2eoaMv",
  "key36": "aQW6ri3qHGEEMdsXmaSWeAXfCzaejjNV9ZnHWWYXLVV3SbU1Z6c37iRh9My6vBAUiZvddFas5Eb4gCxSfCMjpYd",
  "key37": "4j7n4N9GfvMrmnPzVD4M9EnWgXxa1jC723fQuZnL3RD9NHbG1n9twEWnNrQBYMugdHPNuc4Bbfn3wSEJfPqEn3nN",
  "key38": "4783R98BHurghwnVtBp5F9sfVUVmYj8NgpBqVdVsuzYdyF9QgBU1nt3s6swz7Fdjz6iSsfM1b5vSyHGNwAD6B7ri",
  "key39": "4nqMJHiMkwS9QWUxMBJtvax7JWwpMqLUDMDa8RAtZiTPHVo1ohtNfN4Z9jq9KtEBQxmqusKYxVzefuxAzsgEYgcd",
  "key40": "3cfyF1nbAKgiesAAPm2AafSu2GWNxc7CuatSLoRhY6fUvjhCuKRUgWqH3mvAJ28H8zetpwk29pHN3zfKteop3qCD",
  "key41": "5rgZvBJkrGKtiFyDbPqjCKCTaMpwY8A2tKC2oyg7BFcT73CSbDFRdUZasXcjwbkeZCwfndYjhbTZVGxtfKqNLbEk",
  "key42": "24nCK5wc2etEc59NEKmN4BwX2AyMXAPcGQpptgSjhxk3xud4pCWBpZUXSVwDDkj3QsvsjogDaBjKxkgbzD9ej21r",
  "key43": "hQnmc4Nh99h7dQjBij5KterAmP6fbXhpqvQfZDFAtjpY1HTAXQmJUnC9er16Zejpn597vBTfcK5N6bsTQ3viy9P",
  "key44": "3cJU1pN3Gy3oqTAF7W3VNzrzJYvw1nAiXwFxuFiqvdBB4x51Hrw7AA411QEQLi7WA7txym1jRVAL4DLFyGg1zH7T",
  "key45": "2EHaXEnPN5TS9nefXMbbjwdEwx1CTv2U49gMtKufAoSWr1BepEgFu9MrYv1UjKbhfoyb7MhMm5UXoqbg8u8xYbuj"
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
