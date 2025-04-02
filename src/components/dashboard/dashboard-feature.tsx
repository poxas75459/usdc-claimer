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
    "21zs4dure1oA17XigdxzaeaxJ5URBkMKoo9ex5SQVcsszNTy9iwNGEwD48T5cwSsjAzEX2jR8koDWKJroVGPuZG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568D81hb3crgaHynHN1eVXZns7uPBFXKg2y2bUcvpMW2zq3SLtzhAtZLdXAnNDbX1wwYgcQckUUfYmGRXCdTU1oy",
  "key1": "2ahaJuNDE4aEqH3wiTSLnyjUVYqdBmqSvRFMHtSPT3tC7EgQmvUr6nxiZfT2xBZFVcpewQZE53Ra3N5sd2yMuj86",
  "key2": "5wNygNG6EQhTgtnBjQHR1dai1nX3dQ2eAF7mCb4rqFJaXv5mfJEbscTwSwXdp2DfukGQyWSzMzrCXDT3Z37g1Wr7",
  "key3": "WiqXYs4S6irWdaCx5EKd9krL28QFYwVHPwCWzc3MDJ8CAbdaQK9b12hAYZi5guX5oV6Nwqxc725mfmCvTm9ouP2",
  "key4": "2KTk4bA2VxoAZdJEwSePrG8zQuVJF2iPzqrv2Sbs2p3MLVeFPtbzCxD6KdFYBhqtg686EFtQ5AQ18cGf3c2pskzg",
  "key5": "56vUBP8EjZXfYEcKu3ks4kJLvuE9cQei1HqonyQo6PyD2VQDewL9YznjoCtTG7ryKzJYdcPSAK8EwEGBqaGzuaWq",
  "key6": "ADrH9HQK1tnLqZAeM66zz9aw4db9WzgUwTndTLsG3ezeSNupDpipQEyuKEVDfNsTD2zE5dEJCuj9iFBhTyQBjub",
  "key7": "2ePvX3y4P3UzTahXQhAyh1f8jZkDaPCzX9Kpa4h4pyo6n1ZYBZHsWpfV2UmmwNVBfQz8Yn1tx87uJDud6F6q8Yc",
  "key8": "2CyHWozM4Py89c4fiFQncqHyg3GCrTzuayAUaQxteGqjV9d6g3eARvjmxdTaHHuJMkk3wSSJ66AMNwvTzbP4Mm4S",
  "key9": "3AZyYezz9PCUCNB1MMwPNEgPwGUCGMy8d3pyysvDXNbFtE6udHXVXPCVuUzgJxQGW4ddgnpPkqapYUYwtN6AMAsr",
  "key10": "3chuxyx4VymbE414hUPSwBuMr1PYCjyMC1Zg6nQjuoM4CVWkwG5LQupFjgKBcDwKWuYg44mp4PPWxogNRuP5P1tQ",
  "key11": "5PoW2hvZETmzo746KwGEJgvVL1PV3eGF2HF3rbBoNiQ44EnQWsGZaJ1zknagbn1ewENHNcuP2hrHNsnotp8Xt6Hg",
  "key12": "4LUNdgzRDfeURgqz9ndfra3DRtjkpukQPxdF2MDSNatFqukEYjRuqbEhLBQGaNy7woJTHGuTctMTZS3mB1AY5o3h",
  "key13": "3xQK8y54vUvtrD8coms4Th9BVjbaxKD5Ysuf34UfyMYWp29ZNQMs5sztWCvCPrXsgmj7TYUTq4CooRAeKMfWkuTT",
  "key14": "2WPfaoZbMeCXE8wDt1bsehG7A6Sh6VApbvkgsCVhASf6T7H8rFvqnNVRj6eY6WS2gm6XFGsabjRGzf8DiEH1NpWx",
  "key15": "2M5RVoivL3uLMnk3V5fp5TVrDEsvnHoAu3wvnfoNbhQtNrZ3bMsiP9kciRxWEAcAc3gdsye1CoUPUUHAKhAY1bJm",
  "key16": "5yKBj6wvFsKvSRwKvJbCRh4eUqyKawGTCXDtmvgzjn2NjuspsPJwfZPnjAcK7oAhTUe6WQcQRKhjbma4zD2qQJrw",
  "key17": "23njTeW929T1YAAQWjUeRW8gAVSypf5eCoQww3PV5PMFBZzw7UnoNrmd2Qo91vYGs45nxDJgwgbzEvJj1iDg1wTV",
  "key18": "5eSbMQuTZM2zGbjeoSEHGSSqFuuxrLkWX8YHpZRoNUarK1XqziwE1FJjwoaboyhXXfLqHU97QHaQnpK5wFmMicw9",
  "key19": "5mCy1WvvYPmFCWhCdWUxft1tLntK3BarFLnMpmgEoqh6Y63G3mNVtZbCePiYYZSrchHAeTeVsCnxzq2yBtFBnzXF",
  "key20": "3qhYmRea4AJoLgBFEZbpDpJvb3jdd3foX8LEcCmNxYvdh2jnTRBikPtxwE6oUmZ1xaHKzjdUe8ReUKEoCYBbQfp",
  "key21": "4hNvAtJCzXa7ZCULBBYRbxmPD3srunBgjTHSG1DrT4fimzUaeGpiNhgPpCyUmmEjk6cvgPapNt6LCjWEaiekYh7",
  "key22": "571aGRB5Vzbx6Cb8y69S7Ut3quP7Ei3KZt8HkEi2vAM7kZukbnjx5briorgk37WfARKzEtGjWiHUh5StQ9HtjU9o",
  "key23": "2FxXccb3bHwoqYBcJus7N77kSxByUmfT3xVTZ1HRx2KNntzX9LNCr3Sg96zju7xQxQXvKYphpBTC9qyr3vGv5EAp",
  "key24": "4m52Kt783Cu6jC2DNirE6dBNRFv7yw6m37ELE7T2zjt4DZXk7mHe976wkUr2AzmGbps73jLJAp5uW4SEmKaBH7n8",
  "key25": "4JsLraDP6W5Xgsy312GGioEMZAXBvv6bCgsTg1PebjoAbw9ew2U7T27MjCxhG8Jhmrr5T6p94KAH7WaUcynnUGgM",
  "key26": "r1AgxK26eB9wU5Jr6BfBoRuYF3GjWY3yv3TVDCFemCdRJGSapX7tUAHv9gw2299xZQhemP6TkuAXDopH4EXa9hj",
  "key27": "28uTirL295qS26QnUyo4MtXSFUvA8eoLFn8TxjLS7RWcteso2PiQ3QYWTjZysTZqGZNw27ssUuDuwNZqtDfe28ai",
  "key28": "3dpPaoRrKjzoJLhayDeTYgzKQMCSqDMt7CibtEJhsyEAw5qpu4q2nqonvGjdngtqtur2JfB7BhedmALWCnNkFtML",
  "key29": "4SPW7Rj3mCTGLxAmZHAuo82RWSNT8UcsFNqmBHJd8YGGJY3yBaDizaArHDkvnpbe8vkgwmNRM3Xd5CgHFeMdauBK",
  "key30": "58xvF8mbDcrvtWzkinSCvETUNZS9QMvk1BSTwG5cocNTU3s1cJ2MbAxMZ3fbbH3ssjg51XDQdfWB9k8VqMKvQXSH",
  "key31": "qxYyaSes3RCJqyhBzEbWWU1Fow9mtexUEN9E77LLAZqkFBeRX6DdaQnwCkCAceoYq5H1G9HPLrMD7vqjpQkbDra",
  "key32": "5cdB16LTM24yrxWDXURdQpubEyHaAjZG9k66FqPmheh5jiMda3hDE7cMrN7dfBay7W79kZnbJZyMR3KFEe5FBhCB",
  "key33": "2XTbVFFeW9wZ94bwRD9WJoKZY5CjWHNddeqiLzKWW7RCh4aooRj1cjiWtModci1QfxnLb7RXivNDbrWHWGund7Rp",
  "key34": "M9UohixwR3rcbwNLsPQuZ7hLcwuNc4PSXbnJKVBev2mrt8r1UZMy4T8EHRyZobsBoFk8fQDnt7SGSUCbC6v774d",
  "key35": "ncWSDkdayPsBnKPm8iMtvgG8nxQXq1hRHHAAAmStrBjNAsodjSXDZNF8eJbS4x8N1dQpU1c2YFyATL46UPzMPjR",
  "key36": "4afcisA8Lboo2XseRWCosZ7AeQMLJeRZxRD4zvErXdYgDyMiiZGkXcv2eM6EVCNLCuYgmJ3RM9vbjJJxiA1MxZNN",
  "key37": "2nnSszXYU4gysasV7A5GyNLJCPGjm2V25zyijwouWpyBkHXwTrZ8BrssoMg34wH2TMpo8kuLXTfN21sCShxPbr13",
  "key38": "3EXGZmdBJ6rrPtEMcQ2GRhmC5FRBJ7xkCz1oq6Mss8tTsCLd66PdYwHpJjhh4TUCEdiss1LJVeFz8MUUwjCNBZXJ",
  "key39": "9YRqngXeBBHsJk1hZ8LkL9KMKzFyxAV6aqVw2AMsYyzEYBcbi8m8iSCCJd8dSbaMzw94HZvvfv6DrJedYKazgDc",
  "key40": "3KxGmaCcRRHeKEZyKcpPrv4p8vrVrz6rCV63C6i1BM2J2ptsgUXWeFSyL5QX3G2SShRDRD2Ya6JZmxngvLKbUKWe",
  "key41": "5ahPJVWbzsX9EXEnK5bnSSeGnWKT9tf3RZFJnUt86ybwhEp4FYMaxpKYrWKWpD4nCwshwK1z6DzNyznPYnhKT4cp",
  "key42": "2nXRiun88wBUwQKMdGgegZxVQtj3fuqHWPdef22QwpCsi4Ep1QwQEtMguqqg6zAwnJnFB424zzbiefH6mE9NsJvk",
  "key43": "3wiLqPNV5wK2KsAdqNRvadt4eVDrD7oUE9rNqCbmk4kNjfSFKUbFbAe4EZ4VSXgyKcppXbKUxJTXU5Mz1obS5wRV",
  "key44": "5hv5LshCjb9Hc5L8j9KNK8qCJ33KnYY4RkGEPM3NsSSVnndp6BUREHcDPECicbnbBYHfC8zkhCjPuXS3eXakEeqd",
  "key45": "2q7dYGFFUQs6o7ZbW6Ad4bj6ANCriwqUswttpUswuMEagu9hJYioYRGXtEb5XgZzcFa1iPUch4nQYZqxojhN9h1U",
  "key46": "5QmohvrcPcqJucFYbr6EmwToPZoGkF5CNzsTdTaAcss6hcDXRi5LhgbYeauuh6BxxY4279oe4curnWDnQE46xEZk"
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
