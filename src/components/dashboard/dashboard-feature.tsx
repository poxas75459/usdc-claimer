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
    "4HRdChgSRsegRYDVMhsW1tTThVQ4PVXPoV58As5cSXcMcTg75fK1DA1VbdWhuAZEMcQkKxadPNy3LPPSE6vSP7L9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jHLtwMad6RqfexjyFbk8no1an1zC8ww1QpyjvxqF3G15RwKS38sDqoxtzuEcXgxHf4Fde47Gx3WQFTsH82f2rrn",
  "key1": "3vajxTVxMFihPVq2Nqitaop7HB2RfubqQvMxwdx7MYfYmY2CmyrrLx5CrBSb2n1nP26ceYeCdqhcPqJDxdjVeaEA",
  "key2": "4tWkRZAuw9geDmsrhdT3CdmuKTCREyUByZhsoybGsKywmdgUTgD4z6GaxLyKHc8UKnAbaK57qU2eUMfA9JVqKdAm",
  "key3": "CG9HEcYTPjfuHYdAzgFpJSjtLrUyqVoEuqv3nCYRvKkE2x51M4MsHdZyEzqRuZdmhXNj5eaqpNJUXWXZ6nz4uAD",
  "key4": "GQYqfUcWh6sJPyof6LjFyU5tqRm5xJpttCAxep4c6svimzExQZMEuvqHnEWYuym3ewEvjdHELv5Vox8rkZjZ8na",
  "key5": "2UQebfcyDmQG9SaDGPqMAMXxLyhjSemsuydJyWwDgWy55W7MAbjDhVGD1wHQ5QAT4jVZLFnZwuHGRe5eHas6PQWv",
  "key6": "2RE2xHgsJnm1nb2z7jQijQHfAJhrKjEkAXNQdRTDfAGdyczUPRrCNV1kpEkab94wYDMHoZcAxVv87cUQHuGD2sdJ",
  "key7": "266RUvdhbMNK8vzW8Z4Ssv2Q3JqsC9jWLjTzGb713hZUHieFmWuYKedaUB71gGd9KjKiwp8SDVDBnGH9v9y5bQzh",
  "key8": "5FsyrKRqHkTKGPMiy35eHC8nxEMdSWAh47asvYtEBJVULZpUa9zXjVcWkM2wxFUCBCTLyrcf63gUuanCXQ7dbdbf",
  "key9": "3Pazek58NLucbu1VJXGC7fX2yf6VGa8oNqJT3EtLKFv4Mm4ikgo4j1M3n41vRLeVGqv8ZftcpetDGnB52EHp5xBq",
  "key10": "5aQWsUjfNWzKfxxkEqCNp284zycWNa6PT6qEBmAqwp31ebbqbkaMDJmyGnk45YMtoTL3xG1fuUppXWM3WxYRUtG4",
  "key11": "3e868sFk5HWi76K7e1yX1sEJM17BUkECyVHinJ9XL1NeaBWJxu1KvCWejQ7bdEXUMk3kDAW7q7kBvkBNRP3sMpDP",
  "key12": "NgX3DP9VUWCEmMC1omPSkHcb5yoMyivfhZM2iA95xRvBT5nsmWerMdTWtcyWDNqAvgNEz6c14To7k7bkuXuUU3R",
  "key13": "4q5E4qw8LtwrHbF9tfaAVutocdR9YJP3GgYEEAGWEZPVyy1Whc77K2o3rCAgnmMJ5pXJdpTcqutYtipJHyfAg6Kr",
  "key14": "5woycWAmpsBEk4bPtfoEHNGjnunKSdCVvkpz4Gsw2XTkXzewL3UdQsSqgZmLi4s5ghxcEKhgPVgH5dBxZDB5mRc7",
  "key15": "3rn479brm66eVBQweJkssA3ED1W4TpinxRWMYZYG98VDNDAsCQVFiQKqvn1yTxak5SthNWgUs1go131k2DVbyHGr",
  "key16": "Z1o3hA87NrLxenaKHsikG8KC9et9CBEsSqd5X8KDSE3Eaee35E5GCz9APqu6p7XJ5DmUhKvDTtS6Y2SU9cmEPD2",
  "key17": "3UgMMia25bp4EFL7TDsiwagTVxdiA5cGkgEYwrwXaGbY41Gay6jb7xkSx4HQUkB6f88Z4XS62Wppyx63WPyo7P8s",
  "key18": "46wFBcEvwzHSx9PTvXuxSycwD6K2Y6cuiiKu7DDiYkBoxkyeeMJuvgmkX3NAhGBxfDfU2nt6UxnEN6nzu379oSBY",
  "key19": "5Z6qBj48DJumbS1Q69QyEH8nCEaF6EmYQgxhUVqqi8FZCr1ADnzFND6FQB7uueKd6EjUUk3BUyDUgbm6evzzt2Aw",
  "key20": "4cxYbasfmqKFiuKQ3TrHpQ7AfkAkD7x2YrDL9aknPrxCMNRnCivpY22cREii38PFCaWXt1yM8a7yG4WvS8nzPxR7",
  "key21": "4kM7QwTQeRuMmA2xU6iPGjJYz8qkTMFQ9RMd2wp3ZwxyJ1sL9oRmpG4j7SAXNZsGRPKqzTphG6cmzL6XawKC4nDJ",
  "key22": "3ztrJajwR3xhhQFeWwyC88cMfRkwJZbZbw8SGe9mVjp3m3o15bivaFoaqJXM9CafbiJyhARAzARFvJhHakEaFAYC",
  "key23": "2JSo41aWqfBmJQkY4hn7HMnHF816mbDpRjBiYrjiA2HZHFSFTeNH1w31KzZPKLfY84jZdX616zxXwbZ67ivtYrEw",
  "key24": "dk97RhdvGWqFd9ALRP5qXFckjFcByirzzoM61gdvnjiuT6MNimWHbrnUnfEwbWcxEHouzTa1oLcyQGPFComQaJc",
  "key25": "i3qCB6WpCY8TH9FHZFFSBhtyjc5abMRDCUuVk8Ne9fgpteJbgiRJnTtArKAEne1KxjQBJqyjw8fb2PhuoP8Hatg",
  "key26": "U3H3EFMjseR71Nz6NMGMUEeMWv5EVhYKFx9k5whaALbwm6ETHq7W7yAfRXVzMSwP8DZUVPTa4x3n6ZF5n2ZCtiB",
  "key27": "48tgtMrymT62kVzqBXDhHWNt6BU7Qhsf2Ba3WQBfGLMAtEC9hdj4ew46nsosqrFfNTCxBcZZfMuYKT6rXZwVPx5F",
  "key28": "4NrSiMawW46ivccZxKravNvnQX3xUtwKiYaVmtVomJnvTQ6xtRVyBbRN2GEakexZZFVgcyj5jkhKCBQuirJMkUke",
  "key29": "2FZ2WjfJmfGDdpy3VccosJDxMyGPEP6u4SMEnG6q9npcPu57gwHrF1cVamEPH8LQaLZvJLdwJuW1BUsznGaRmhoM",
  "key30": "3JypNVhRrZm6aDQZyfKLnmnpin1UFBkdzQgESyZ5cJFFPc7i33fJsCSvV5MjTt278q2Krxfq1rkyTw1kdMEhGUNn",
  "key31": "53J2ayfu4UfMaE1xLHY4imFp4n8mGNEvXnaUu4LefSjmcJtveP9T8ZPoYfbj3KNfFeqBuuaF1CLHtAvJJZbL7K9E",
  "key32": "4UFjtxp2e1kCriFbtR669AnwHfJz8n1bQyv8fv2gEaSsSk9spwP169dbcZZaom5gATJ7MVszyb6wa2pdmzJfcN93",
  "key33": "3hs6mXGmmxzY3vi1umLWmJfMo6mYgqSVdWaBuCPEqfqrd484qHT37Cyfayw1r1AbagrseSCtUvkkEsZMDWwDnDZJ",
  "key34": "2hWfSiVRyL7cCanTpU9xnqSHS4TruUxEVjwSVE5ZsxwM5ZN1mXbwtL8PKZbemLmYS1fJYJc8UA4kpz9UpxKHhBo8"
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
