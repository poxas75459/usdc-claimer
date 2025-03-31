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
    "46DT6mCKvDSPaCZrEqz85eNXoosFF8BWA4obrkdejEjMNBPqwhpC8Mv3xTgsMzfTa2NyqkFxqBQTZe1HjMG6rD9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238jJthqVz5387ovLJjmf1EEbmWN3VrK9UHa7fy36gHR52ZKK1LovtFUhtZuCU8xt2mcmYRGKJQPzTrtwyXsNSBL",
  "key1": "4WWgZMCZ6KdB9rQD4rjdgMvuSUHC32rKFquUQGRBGr2KFurk6PtcT6HECSJnEHvGCYrHyM4VPekeFZK6hg3dMQzB",
  "key2": "4HXw8Gxca6i9YiZn5nLpXmD4wj5RSAU8AzghrCEYaYkQ7a23bAG1dY6RPxbpYWF61c7jQYaSFLJPdJ5jcrL4tNbF",
  "key3": "4VNGB4K6YLLWLaxokAGJ6M8fx8PTFEcUt65oRgPchb6Z9zyPB6Z5MsapGqbbCq7q4yDdgUhvqTWZaoEjnjNgSS6W",
  "key4": "2xzVinDSsp73puZ8W7icTFk7FD1mQWHTfR4W6kCrPK6RwzQRCp669oFmFg9QmXHjpNp3rUYJiD6641HgYbh4DbpX",
  "key5": "4v4AkYZVuWS69qtiqVsZrX1p7FKMWfn1fTQ845Qr34f2eauvVTJQvkd57Ctc2q1PggWHfKsbbTwcdSajcWHM4YKh",
  "key6": "2HUNUikefkojha1BNLQDxN6tyVmCSDzxUTmURWoHE9xRcJnNfFAJjYjAjb1kEqPTXMpvwkb7BtZMs6FrCKKabm9w",
  "key7": "2tMDyQBxMMNbd2z2iR949uLED7ZJC95vGTJCJfBTPW8tgu4mY8NWBxCdCi4ua6EZoP71ht5tWoaP45M4ixH2UaWc",
  "key8": "iLgH623tCUE9BxSEx95zZFB6TQ5KVd4KZ3WPwtcsys41WaBJXX7kgjgBVDeZCVjELxBjyFdaJXxwW39vuwif1BD",
  "key9": "4niyp7rxYmSvocB9BvrCAgDcVggawUKS8Fy2fRQ6VKjLYgqHTx4vd4Ax3PEENKjM4ToUaLYhQTamip8MSnymwHCs",
  "key10": "43ajjmNGqCjnUVNAgrdt9M3WG7a7BmN6sxGRKTaJbRrGZWTz2Rjf6FDXsWXAKXnc4q3LgNuUhFghw9umspLTycbb",
  "key11": "23Ym6JW5x8Jx11HzZHsnhhTzpJ16zrfUnZZf433pG5xRg75sjUcykKxrkx1fknRRzQEuaptmkyvKVj58yYoN7jgz",
  "key12": "rP2DhHrZAh1hdadtKtTnaR97Mkp68drEVBf2kHNR7BXeTe4t9CVHDm1ow3RMBPynTzchqvBmz2BkD4WFAgiknMn",
  "key13": "434UwaZAyKLXZ64dLjESeBTbprK9swtRb954Pe43vBNUpBy3AM4MDXyBhjKTf1ixNyryvbGHTmD7F563XD8TDzcU",
  "key14": "2AFYCNfXjWeDaQq3LpicEtxBJW7nBLXP5qGFA444z5b24fin2RAB7XgmksZ9YsSMvTTLvE1Y3tWGoiCRQwb9LQRC",
  "key15": "52bXhnX79aZg6SgVH1U4YDzLAgJ19KWDPeCoufWhauwXJix4LbcwHhu2J5Ey9ppwZXLieaRu8YZy3hciVJCqf9EP",
  "key16": "2uBDBfPSt5zduSF8CThHWh3eL8biFT5pMoimHL1kvMhV6hTzCmPtyTKQJxYriuLbWULdbpdj9pdUaoPJrz99bRZn",
  "key17": "5bo2hbEpzefApnwbAkLhyEXDig2YhT8cdTRiNvx2qHTpCxfL1BxRP88qHLGePw1v4YF2LgANJScVSthCNzFGpoy9",
  "key18": "3pQ7K5ayr7fMMBdDhRMv1RWD8RiSL3wm5TagMmu2gqUdG5UEts1vq6VKsKyJPHXgz6nUQyrAqDjcHzuGpkuz8x7W",
  "key19": "tqZY7u9osrJJ9BvNqUS9W9RpfptTLdLj4Yu9jLEj98Z9YufDU5nUhkXoNduX9zDBQch23uKsX4YxqK6iC5hCeCq",
  "key20": "2e544PGx1JpWqJQxndyrPQh1NHMPDbgKwxHsdHi28cCykbPK8UztV1qKyZtckGYnBggY2roSQX4KFyJXeAyfj3bC",
  "key21": "5RtBkMco4HzYDocedh71PRZjQy5bYgNw64zEXJHiN2LH6P2MP3JMobfT5p5y8Hf6pEb6KBFeSVwq4TGPcdBBxebj",
  "key22": "7w69do2k2t2NHGbWEz8LizJ85UnJAFo2gC4AErJBNrNqcQGwPQLnjkpkvapmYuzefQjkJxyk3WQfbL1kdvmd14D",
  "key23": "BbsfP5hBDip7i8W6wpddJRFDqpM5amYMDw4RohhJyNASw3zYpM7LcqD535Bt4q81NA6ysGN9UE1Cyzp6o9pXeeu",
  "key24": "5BnhymZRqi5osRnnQoMX8NvnJiMqwHS12q1nBfWeK5bMWVis5cgh6QQNHh9qkS1b9MVqmLayyvByttc2f1KXWZwQ",
  "key25": "2oTppib2moXm2yXzbF7t6cELWjUexFbnc4Zuvfwm44ead9HtTzGzEzMVU1m6QA6mK25xCUvUcH3P8hMsPwXqmwq6"
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
