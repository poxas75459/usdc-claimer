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
    "JdcJodYCgR7p1gRKkN4WHYM23EWBUkXmv63ecgtGsa43CSngAAKhQkbppmtQD3areiqQ8Ucjr8Ku1K38xW8gWqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qPQ1Sf6MxLa7CjEhAYUjijv55pnxEMWvZCB7fKsxZ5z52Ai3dnHnA3cvdM3pqPCfpgKvxiPghfuqD3D8jN7FfDq",
  "key1": "2QpwHwzFxWgvRRS72FcyNZrM5ZyGCb1dfcWRdTdpx27ER1eQ9R9Dkx7AgHdvBNbjRfDoDhLpA3K6bZwQuzkScq44",
  "key2": "3bUarbkBidM4kji5Kpo98s4VmB3VaUscpbmPJUGMrs1mgxAyZxg35hN7vuHaGrqHDsQzLhB3z6TpxgSKG3Y4u8Et",
  "key3": "4KFvciovsM6KBAmJGrXGha1pVpC1P5D5G9Qt2rEwTJPwZV7bFXvZX1x8dcHeREYFeMSLsGuBYKHAxUBcVLWXjRoF",
  "key4": "24zvf67HrybdrtfthiEN5B5H1WipRpLuB24XCjUi7rt4Fa59M4apig8esu16wubLEeShXMA8vRUdmcXqTGa7cRHL",
  "key5": "ArWcRfetDpRWvnSoiHVv2FoUhXyUiLXBvM446uSbYo9GMKoTpSbMsJQtQNE6jUbVsAe2PKnL1NzWUPqHMxYLU8f",
  "key6": "2etxtEoVxbqBshHReS7uR8bTeKzTg8fbAfedLxDaVFxcZJNRBzj14ZvHtR1nEoWX2EJrAk3eSV8zt6fYnxXPQgLK",
  "key7": "4Nh6JGCnNCowAjnB4aSWvNDioAy9S9TXBNeWzJLacFnTpGusccc6SHhxY3AMqAi1nkfcvNLN82TnMtXSh4LLiMXN",
  "key8": "3YjM3FXpKkA19v8DXMDXAVXhDbjjvmreQHzCm7CPoc7Rj7g3FwBCWPGJsxVjHrwrbWNfq79x5dCbQi4PM7sBQGbr",
  "key9": "2QQyDW9H42PCbSXvCvrLcZxu2Sw4QUAzKA2ozUn9PEGyetCWouvuPofRT53dGUwBZDxdAT6bSdYgrQ7KAcXwKQ87",
  "key10": "fC7EHEGp1i97Zo7ftsetpUQ7wFzkf3viX4fCCoHLTjSsY9ZuMQxQnrVYxWzSCsTSwAvZy1Kqm1vpB3koPtp8VJJ",
  "key11": "3DH5h3thEzCXDjpD7frQGTRBJv5HLJK6qj9JNbqEe8Btewge6hbNUeEeFLNVzYgmCV3iQBapahKSMuivGdREicvx",
  "key12": "3iexR1T8xqd9WEjRrCqrtquRL397qEoeRAtUJpg1y2PfZQg6KETfz5Y8Co77mUbZqRYUv9dFVjC9icixHzBdo8py",
  "key13": "4tL2WA4M6ByJ9St3GUua7jNNT9u13VmtLcBMaQZxLizspkZDPNGxF5mzUbUXTQr87SqvFig5YDT83NYPD9cVXZ6D",
  "key14": "4T9F747BR9FsZ6uhNYV9s7G725c4ZP3T5BMjwXx6nszdzjDS8C4AJuG9ooJcgSZYEZkaRShnQBFCEcoapuCkFxp9",
  "key15": "4ytz85DL9hdZb5EJuFn1GQggn81ByPpxT9WWSgNteoVJTg8jjdutvQsJ4roAXzvMzGDv41x7Tcetm5rxCzmhNVnB",
  "key16": "3cUaMnozjKiENCJ1YwBKBqNWJhBGtkSjLD4T98cqUU62b9rL2Yj1VbS7ydzQDaQwxgBibPfCvCu6vVywacduDgeM",
  "key17": "mTFUnmETNVXgBmNvpSxNn5esHipTy711qfpBNTMVQf4jZQfGaCKUUJAikXRReu5iLohQUAgLXdxxxshKnd6dDo3",
  "key18": "4GUbt9H47bUGLemfpXQqY9R4Jdm3JdXBNrpfJw2hD7TZuVw1aZXGPSwMdDTQiuUSu1psY1oVJ8kWWQEcahwCn7GG",
  "key19": "3fB3P8bF3cn9KXh4Ft8AaZ7x1sdQj6aj2fSvYYoRRuMUi1WQKL9qzibgYZxEspUGiFWzLSHwRAxTgF1Ko6JqSCZK",
  "key20": "3mN1CeYHzHnq3TqjK1kHxGvpunVKMiTMr92VAghFpDWzru4tFCvEswtzsuNBLdEzUFPeFcKnrtRLqZYoaDKBEyps",
  "key21": "4dautCfRf7SbJbX7a14NniRXxSzpCoGznnruGkhAsxNqcJ6HAi9bbFwXDABuzTJp8NdvU4rEhKZuDXXg8MZg6dcs",
  "key22": "57ZXobDif7STd1gCPZ2a1mxXvzQfhgdMMiJaDbLhovRNZvBypVj7cJhUyDGWEL7ztZattWdM6cCJJb9ENcbegDsG",
  "key23": "5ZPGxVw6CtVHfUwmtQi7M3vfYeEnfX711R52HZUi4q8SX2rM8gD7ssBHjUT5ogAGrF9Krfs2iVYBWWyTrh4nXRcm",
  "key24": "2Xgfpx5dGPDLGvP4aU4NfXzbwd2TDNrqK2vY6c7n7p6kfbTzFDGSTFV4r8Q7fJgu2XhZQTJpZtD7q6tjT1UQMJfw",
  "key25": "2UtMWrC5ejkWwrR3ZdGaw2Vw7DhHTAeoSJtEr7PaTjuEF751vio345RLJyLYX2TfFJ6N4iKfdL7wPyxqettCHpkX",
  "key26": "3V4xqfzf3UJp12GH8UDbnbtBJL4C8eWN8UAG8LefK3XEoCJidZoYERqp4ZuG8jYqSimqwhQyq3zLp5BVXiASLSVe",
  "key27": "2aKNLiohg2DN8rF6euyS1HqhiNHuzQj2KVR7514kzJErFeh61Tkgb5igYSMqAaZHKNRfVC3w6WG5B8WiEatxw97G",
  "key28": "2Xduhz95rb3RDhF7XPWQQfCZoAUj43kkz2VKorncB2ouT1zca3Hm1tStMyyN6JmsLc8Pv5Vy96qWYqwD3acLNqFM",
  "key29": "5wMezPzYnq6531FkjLnmVKtc2E3wvHivNLdaz5qPZzNZwWQtqxEX42QuuyVkRv1vvmE2HYcUAKC9Qu6XS5z7RNtg",
  "key30": "66BAwkunxJNbkXgDbtS2quDtVwo75ykq5ULkMyM1SGhTkkTveDqKuJLNRLekGnqmYzhkL7Qp9Ypgmt3HbiZXBRv8",
  "key31": "h2yhnKXAywvWEhPNAZMN7EJWq9oUw2CfiMyb5GXeBhHttt49553Noy2BPbb8mP5AmJw6thTBJD76mxqVajbP2Zk",
  "key32": "3URvXNxPmxZsDEtSZYPq7WSaUoi6YrEePsTiGocoEwczosX7DbZKuYMg1VZPjJBNn3H6N8Brdrp4QN1nMuu8KXeh",
  "key33": "3XkH8CurSH6iCbBKRUPYo6dj3MkYGpqWxnVZGLm3JBEh6DqG5Mf6N4YM5aS15geYjb3tJvfAxRabXdyn2LH4HTiQ",
  "key34": "4Nbfa3j9KLop87BRCHqqsAV1U1WkW5qQ3iL7xHkit6hMShHTdcGH9RWC7zEimh3zNKZAD41UahxCqKqDirmahoTn",
  "key35": "5XERYw9qvUpTzWJpm1nRJFCD7F3VUJoCQ7tAwJiaMz4uVJxgnMxGh7Rm6GSpJ1B9VX3Z3QrTKrjusXgsNLrJke4V",
  "key36": "EKqVsdLrMttw4UYYSnaTtcUASLXoMRwczZSDGuGhNy9NDVRvQRwin4NBQKejXZaLfvfXYR3EDXUz8TBpgHNBSZ7",
  "key37": "5m1uhZXSEF6TMAgBD7Cnr6QhEeraR2jANgt4XtcbZTBk86qe3HSK8r5oWg5M9L5mwdkoPHmvbeBJqiemodsaJptT",
  "key38": "4YZygcnMw7QYihJAcB43QYEQVorL7hALXyXCwLY625RXWKC48eGzYxo5oZCoQhf6VpJ4FX8J2vqoS7MrQYr9M19Q",
  "key39": "2n9Mm2DgujWMb3xWHVr9QBKUaY2RgDbN3yucJ5fwjDFHJdxZUoiFmVMoLQ6A7aYiU25mCQKSqeD9NwhuVRETPPrL",
  "key40": "61vS9DFmC5AKZDrZGAhLjve2x22tMMGK4eeHMwszfhEz7YQzZxDK2oSm5H9YZNP7ycndq29LmBSFMAEWrKmwAXqo",
  "key41": "2B3kdpUEDBu8ekqY3QsMndxGjEPqFHWEgV9D3LDbA3P7TZ44cRN6G4B1uxcpv8u7ydPCPfhMzqhbECEQfdFFiAto",
  "key42": "64kCduVshXw13sqiqREJ8M56SX7iAynB2EKSwAvkS1aSMtifk6qPs2A7TYfAcfVQZjQBJfJqmntqV8ek7CcbE72P",
  "key43": "ESzxWazRsLi1qbvnZ5mmP6rfATkHL2rbu9bTyHZdGqAfrCT1MmvnNqzmjcVGRLFtBQrdoHtug7VmXEaB3AXejc4",
  "key44": "41jVMZQni7myggigeCwNNMp1auHupyqnCZxpSPs9UXsQ7MazwqZJY4gEZDEf3kky3YmaxgQhKsW5deCimhRC5FWb",
  "key45": "z1mTTfFsELx61h36rTZYjDnhcxkvtK49WqbQKBHP7W6zoJRxxmtA84dP9DyF3dCBcR6Ujwcj3Fokbiyf1dnucnf",
  "key46": "4PTbiTuTyXovVvf5qFirdpbspL5GdtTWis45YQNob3ickXVtWb4Q6ee8U7M7n6yTcnR7hSbuk549SJe3pAoP1TzS"
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
